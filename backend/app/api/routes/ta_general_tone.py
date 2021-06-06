from typing import Optional
from fastapi import APIRouter, HTTPException
from ibm_watson import ApiException

from app.services.tone_analyzer import create_tone_analyzer
from app.services.language_translate import translate_text

router = APIRouter()


@router.get("")
async def analyze_general_tone(text: str, language: Optional[str] = 'en'):
    analyze = create_tone_analyzer()

    try:
        if language == 'es':
            translation = await translate_text(text)
            text = translation
        request = analyze.tone(
            {'text': text}, content_type='application/json', accept_language=language).get_result()
    except ApiException as ex:
        raise HTTPException(status_code=ex.code, detail=ex.message)

    return request
