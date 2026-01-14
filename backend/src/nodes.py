import os
from langchain_groq import ChatGroq
from tavily import TavilyClient
from .state import AgentState
from langchain_core.messages import SystemMessage, HumanMessage

def research_node(state: AgentState):
    query = state['topic']
    tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))
    # Basic search
    response = tavily.search(query=query, search_depth="basic", max_results=3)
    results = response.get('results', [])
    
    # Format results - Limit content to 500 chars to save tokens
    new_data = [f"Source: {r.get('url', 'Unknown')}\nContent: {r.get('content', '')[:500]}..." for r in results]
    
    current_data = state.get('research_data', [])
    return {"research_data": current_data + new_data}

def analyst_node(state: AgentState):
    iteration = state.get('iteration_count', 0)
    data = state.get('research_data', [])
    topic = state.get('topic', '')
    
    # Logic: If NO and iteration_count < 3 -> Return "Search More".
    # If YES or iteration_count >= 3 -> Return "Write Report".
    
    if iteration >= 3:
        return {"decision": "Write Report", "iteration_count": iteration + 1}
        
    llm = ChatGroq(model="llama-3.1-8b-instant", temperature=0)
    
    # Strict 2000 char context limit for Analyst
    context = str(data)[-2000:]
    
    prompt = f"""
    You are a Research Analyst.
    Topic: {topic}
    Current Research Data:
    {context}
    
    Is this data sufficient to write a report?
    If NO, answer "Search More".
    If YES, answer "Write Report".
    Only answer with the exact phrase.
    """
    
    response = llm.invoke([HumanMessage(content=prompt)])
    decision = response.content.strip()
    
    # Fallback cleanup
    if "Search More" in decision:
        clean_decision = "Search More"
    else:
        clean_decision = "Write Report"
        
    return {"decision": clean_decision, "iteration_count": iteration + 1}

def writer_node(state: AgentState):
    topic = state.get('topic', '')
    data = state.get('research_data', [])
    
    llm = ChatGroq(model="llama-3.1-8b-instant", temperature=0.7)
    
    # Strict 10000 char context limit for Writer (~2.5k tokens)
    context = str(data)[-10000:]
    
    prompt = f"""
    You are a Technical Writer.
    Write a comprehensive markdown report on the topic: {topic}.
    
    Use the following research data:
    {context}
    
    Format nicely with headers, bullet points, and citations if possible.
    """
    
    response = llm.invoke([HumanMessage(content=prompt)])
    return {"report_content": response.content}
