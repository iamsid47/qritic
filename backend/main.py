from fastapi import FastAPI
from app import app as fastapi_app

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
