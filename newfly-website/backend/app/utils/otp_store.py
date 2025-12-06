import time, random
otp_store = {}
OTP_EXPIRY = 300

def _now(): return time.time()

def generate(mobile: str) -> int:
    otp = random.randint(100000, 999999)
    otp_store[mobile] = {"otp": otp, "ts": _now()}
    return otp

def verify(mobile: str, otp: int) -> bool:
    """Verify OTP without deleting it - returns True/False"""
    rec = otp_store.get(mobile)
    if not rec: return False
    if rec['otp'] != otp: return False
    if _now() - rec['ts'] > OTP_EXPIRY:
        del otp_store[mobile]; return False
    return True

def consume(mobile: str, otp: int) -> bool:
    """Verify and consume (delete) the OTP - used for final submission"""
    rec = otp_store.get(mobile)
    if not rec: return False
    if rec['otp'] != otp: return False
    if _now() - rec['ts'] > OTP_EXPIRY:
        del otp_store[mobile]; return False
    del otp_store[mobile]; return True
