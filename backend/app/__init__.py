from fastapi import FastAPI
from .routers.app.app import router as app_router
from .routers.user.users import router as user_handler
from .routers.auth.auth import router as verification_handler
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(app_router, prefix="/app")
app.include_router(user_handler, prefix="/user")
app.include_router(verification_handler, prefix="/auth")


origins = [
    "http://localhost",
    "http://localhost:3000", 
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)