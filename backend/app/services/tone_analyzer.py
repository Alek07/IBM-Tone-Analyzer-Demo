import os
from dotenv import load_dotenv
from ibm_watson import ToneAnalyzerV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

load_dotenv()


def create_tone_analyzer() -> ToneAnalyzerV3:
    AUTH_API_KEY = os.getenv('TONE_ANALYZER_API_KEY')
    SERVICES_URL = os.getenv('TONE_ANALYZER_URL')
    SERVICES_VERSION = os.getenv('TONE_ANALYZER_VERSION')

    authenticator = IAMAuthenticator(AUTH_API_KEY)
    tone_analyzer = ToneAnalyzerV3(
        version=SERVICES_VERSION,
        authenticator=authenticator
    )

    tone_analyzer.set_service_url(SERVICES_URL)
    tone_analyzer.set_disable_ssl_verification(True)

    return tone_analyzer
