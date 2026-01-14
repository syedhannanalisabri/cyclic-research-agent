from langgraph.graph import StateGraph, END
from .state import AgentState
from .nodes import research_node, analyst_node, writer_node

def create_graph():
    builder = StateGraph(AgentState)
    
    # Add Nodes
    builder.add_node("research_node", research_node)
    builder.add_node("analyst_node", analyst_node)
    builder.add_node("writer_node", writer_node)
    
    # Set Entry Point
    builder.set_entry_point("research_node")
    
    # Edges
    builder.add_edge("research_node", "analyst_node")
    
    # Conditional Edge from Analyst
    def route_analyst(state: AgentState):
        decision = state.get("decision", "Write Report")
        if decision == "Search More":
            return "research_node"
        else:
            return "writer_node"
            
    builder.add_conditional_edges(
        "analyst_node",
        route_analyst,
        {
            "research_node": "research_node",
            "writer_node": "writer_node"
        }
    )
    
    builder.add_edge("writer_node", END)
    
    return builder.compile()
