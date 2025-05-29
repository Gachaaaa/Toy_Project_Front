from fastapi import FastAPI
from controller import items, users, gachareview, gacha, gachadraw, delivery
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev 서버 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(items.router)
app.include_router(users.router)
app.include_router(gachareview.router)
app.include_router(gacha.router)
app.include_router(gachadraw.router)
app.include_router(delivery.router)
