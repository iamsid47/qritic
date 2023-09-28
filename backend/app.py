from fastapi import FastAPI
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
        self.password = PasswordHasher(password)
        self.company = company


@app.get("/")
def read_root():
    return "Hello World"


@app.post("/create_account")
def create_user_account():
    return "X"