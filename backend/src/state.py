from typing import TypedDict, List

class AgentState(TypedDict):
    topic: str
    research_data: List[str]
    iteration_count: int
    report_content: str
    decision: str  # Helper for conditional routing
