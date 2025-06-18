# 
from fastapi import FastAPI, Query
from typing import List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/vendors", response_model=List[dict])
async def get_vendors(lat: float = Query(...), lng: float = Query(...)):
    # Dummy data for demonstration purposes
    vendors = [
        {"id": 1, "name": "Vendor A", "address": "123 Main St", "rating": 4.5},
        {"id": 2, "name": "Vendor B", "address": "456 Elm St", "rating": 4.0},
        {"id": 3, "name": "Vendor C", "address": "789 Oak St", "rating": 3.5},
    ]
    return vendors
