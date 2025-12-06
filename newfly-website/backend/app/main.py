# app/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
import logging
from app.controllers.subscription_controller import router as subscribe_router
from app.controllers.otp_controller import router as otp_router
from app.controllers.inquiry_controller import router as inquiry_router
from app.controllers.contact_controller import router as contact_router

log = logging.getLogger("app.main")


def create_app() -> FastAPI:
    app = FastAPI(title="Newfly Backend")
    
    # Enable CORS for frontend communication
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            # Local development
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://localhost:3001",
            "http://127.0.0.1:3001",
            # Production - Vercel
            "https://newfly.vercel.app",
            # Production - Render (if frontend hosted there)
            "https://newfly-website.onrender.com",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Custom validation error handler
    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        log.error(f"Validation error: {exc.errors()}")
        return JSONResponse(
            status_code=400,
            content={"detail": f"Validation error: {exc.errors()[0]['msg']} for field '{exc.errors()[0]['loc'][1]}'"},
        )
    
    # Router already contains prefix, so include without extra prefix
    app.include_router(subscribe_router)
    app.include_router(otp_router)
    app.include_router(inquiry_router)
    app.include_router(contact_router)
    
    return app

app = create_app()
