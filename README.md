# 🔄 Cyclic: Recursive Analyst Agent

> **A Self-Correcting Research System with Infinite Context.**

![Velocity Research Engine UI](velocity_ui_screenshot.png)

## 🚀 Features

-   **Deep Research**: Automates web research using Tavily Search API.
-   **AI Analysis**: Uses Groq (Llama 3.3 70B) to synthesize findings into comprehensive reports.
-   **Modern UI**: Sleek, dark-themed React frontend for a premium user experience.
-   **FastAPI Backend**: robust and fast Python backend serving the LangGraph agent.
-   **Live Markdown Rendering**: view formatted research reports instantly.

## 🛠️ Tech Stack

-   **Backend**: Python, FastAPI, LangGraph, LangChain
-   **Frontend**: React, Vite, CSS Modules
-   **AI/LLM**: Groq API (Llama 3.3 70B Versatile)
-   **Search**: Tavily API

## 📦 Installation

### Prerequisites
-   Python 3.10+
-   Node.js & npm
-   API Keys for **Groq** and **Tavily**

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/velocity-research-engine.git
cd velocity-research-engine
```

### 2. Backend Setup
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
.\venv\Scripts\activate

# Activate (Mac/Linux)
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Environment Variables
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
```

## 🏃‍♂️ Usage

1.  **Start Backend** (from root):
    ```bash
    .\venv\Scripts\python backend\main.py
    ```
    *Server running at http://localhost:8000*

2.  **Start Frontend** (from `frontend` dir):
    ```bash
    npm run dev
    ```
    *App running at http://localhost:5173*

3.  Open `http://localhost:5173`, enter a topic, and click **Start Research**!

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a PR.

## 📄 License
MIT
