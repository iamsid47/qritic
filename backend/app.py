from fastapi import FastAPI, HTTPException, Body
from pymongo import MongoClient
from argon2 import PasswordHasher

app = FastAPI()

client = MongoClient("mongodb://localhost:27017/")
db = client["qritic"]
collection = db["users"]

class User:
    def __init__(self, username, email, password, company):
        self.username = username
        self.email = email
        self.password_hash = self.hash_password(password)
        self.company = company
    
    def hash_password(self, password):
        ph = PasswordHasher()
        return ph.hash(password)


@app.get("/")
def read_root():
    return "Hello World"


@app.post("/create_account")
def create_user_account(user: User):
    user_data = {
        "username" : user.username,
        "email": user.email,
        "password": user.password_hash,
        "company": user.company
    }

    result = collection.insert_one(user_data)

    if result.inserted_id:
        return {"message": "User created successfully", "userID": result.inserted_id}
    else:
        raise HTTPException(status_code=500, detail="Failed to create user")