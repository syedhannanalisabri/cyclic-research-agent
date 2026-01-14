import os
import sys
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# Add backend to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from src.graph import create_graph

# Load environment variables
load_dotenv()

app = FastAPI(title="Cyclic: Recursive Analyst Agent API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResearchRequest(BaseModel):
    topic: str

class ResearchResponse(BaseModel):
    report: str
    iterations: int

@app.get("/")
def read_root():
    return {"message": "Velocity Research Engine API", "status": "running"}

@app.post("/api/research", response_model=ResearchResponse)
async def research(request: ResearchRequest):
    try:
        # Validate API keys
        if not os.getenv("GROQ_API_KEY") or not os.getenv("TAVILY_API_KEY"):
            raise HTTPException(
                status_code=500, 
                detail="API keys not configured. Please set GROQ_API_KEY and TAVILY_API_KEY in .env"
            )
        
        # Create graph and run
        graph = create_graph()
        
        initial_state = {
            "topic": request.topic,
            "research_data": [],
            "iteration_count": 0,
            "report_content": "",
            "decision": ""
        }
        
        result = graph.invoke(initial_state)
        
        return ResearchResponse(
            report=result.get("report_content", "No report generated."),
            iterations=result.get("iteration_count", 0)
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
