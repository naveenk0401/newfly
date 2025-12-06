from app.utils.otp_store import generate, verify

async def send_email_otp(email: str) -> int:
    return generate(email)

async def check_otp(mobile: str, otp: int) -> bool:
    return verify(mobile, otp)
