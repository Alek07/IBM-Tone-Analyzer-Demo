from fastapi import APIRouter

from app.api.routes import ta_general_tone

router = APIRouter()

router.include_router(ta_general_tone.router, tags=["general tone"], prefix="/general_tone")