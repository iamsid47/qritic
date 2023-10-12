from fastapi import APIRouter, HTTPException, Depends
from pymongo import MongoClient
from argon2 import PasswordHasher, exceptions
from pydantic import BaseModel
from jose import jwt, JWTError
from datetime import datetime, timedelta
from decouple import config

SECRET_KEY = config("SECRET_KEY")
ALGORITHM = config("ALGORITHM")

router = APIRouter()

client = MongoClient(config("DATABASE_URL"))
db = client[config("DATABASE_NAME")]
collection = db[config("DATABASE_COLLECITON")]

class UserInCreate(BaseModel):
    username: str
    email: str
    password: str
    company: str
    jobTitle: str

class User:
    def __init__(self, username, email, password, company, jobTitle):
        self.username = username
        self.email = email
        self.password_hash = self.hash_password(password)
        self.company = company
        self.jobTitle = jobTitle
    
    def hash_password(self, password):
        ph = PasswordHasher()
        return ph.hash(password)


@router.get("/check2")
def read_root():
    return "Server is running"


@router.post("/signup")
async def create_user_account(user: UserInCreate):
    user_data = {
        "username": user.username,
        "email": user.email,
        "password": User(user.username, user.email, user.password, user.company, user.jobTitle).password_hash,
        "company": user.company,
        "jobTitle": user.jobTitle
    }

    result = await collection.insert_one(user_data)  # Use await here

    if result.inserted_id:
        user_details = await collection.find_one({"email": user.email})  # Use await here
        return {
            "message": "User created successfully",
            "userID": str(result.inserted_id),
            "email": user_details["email"],
            "username": user_details["username"],
            "company": user_details["company"],
            "jobTitle": user_details["jobTitle"]
        }
    
    else:
        raise HTTPException(status_code=500, detail="Failed to create user")

    
class UserLogin(BaseModel):
    email: str
    password: str

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/login")
def login(user_data: UserLogin):
    user = collection.find_one({"email": user_data.email})
    
    if user is None:
        raise HTTPException(status_code=400, detail="No such user")

    ph = PasswordHasher()
    
    try:
        if not ph.verify(user["password"], user_data.password):
            raise HTTPException(status_code=400, detail="Wrong Password")
    except exceptions.InvalidHash:
        raise HTTPException(status_code=400, detail="Bad HASH")
    
    except exceptions.VerifyMismatchError:
        raise HTTPException(status_code=400, detail="Password does not match")

    access_token = create_access_token(data={"sub": user["email"]})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "userData": {
            "userEmail": user["email"],
            "userCompany": user["company"],
            "userName": user["username"],
            "jobTitle": user["jobTitle"],
        }
        }

from fastapi.security import OAuth2PasswordBearer
from typing import Optional

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload["sub"]
    except JWTError:
        return None

@router.get("/protected-data", include_in_schema=False)
def protected_data(current_user_token: str = Depends(oauth2_scheme)):
    current_user_email = decode_token(current_user_token)

    if current_user_email is None:
        raise HTTPException(status_code=401, detail="Invalid token")

    user_data = collection.find_one({"email": current_user_email})

    if user_data is None:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "message": "Accessing Protected Data",
        "user": {
            "username": user_data["username"],
            "email": user_data["email"],
            "company": user_data["company"]
        }
    }