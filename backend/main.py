# if __name__ == "__main__":
#     import uvicorn

#     uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
    
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=443,
        ssl_keyfile="/etc/letsencrypt/live/backend.getqritic.com/privkey.pem",
        ssl_certfile="/etc/letsencrypt/live/backend.getqritic.com/fullchain.pem",
        reload=True,
        root_path="/",
    )
