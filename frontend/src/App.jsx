import { useState } from 'react'
import ResearchForm from './components/ResearchForm'
import ResultDisplay from './components/ResultDisplay'
import CyberLoader from './components/CyberLoader'

function App() {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleResearch = async (topic) => {
        setLoading(true)
        setError(null)
        setResult(null)

        try {
            const response = await fetch('http://localhost:8000/api/research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic }),
            })

            if (!response.ok) throw new Error('Research failed')

            const data = await response.json()
            setResult(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center p-4 w-full max-w-7xl mx-auto">

                {/* Hero Section - Centered */}
                <div className={`transition-all duration-700 w-full flex flex-col items-center ${result || loading ? 'mt-8 mb-12' : 'flex-1 justify-center'}`}>
                    <div className="text-center mb-12">
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                            <img src="/logo.png" alt="Cyclic Logo" className="relative h-32 md:h-40 mb-6 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="subtitle text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            A Self-Correcting Research System with <span className="text-indigo-400 font-normal glow-text">Infinite Context</span>.
                        </p>
                    </div>

                    <ResearchForm onSubmit={handleResearch} loading={loading} />
                </div>

                {/* Results Area */}
                <div className="w-full transition-all duration-500">
                    {error && (
                        <div className="glass-card p-6 border-red-500/30 bg-red-500/10 text-red-200 text-center max-w-2xl mx-auto mb-8 animate-[fadeIn_0.3s_ease]">
                            Error: {error}
                        </div>
                    )}

                    {loading && (
                        <div className="glass-card w-full max-w-4xl mx-auto p-12 flex flex-col items-center justify-center min-h-[400px] animate-[fadeIn_0.5s_ease-out]">
                            <CyberLoader />
                            <div className="w-full max-w-2xl mt-12 space-y-4 opacity-50">
                                <div className="h-8 bg-slate-700/50 rounded w-3/4 animate-pulse"></div>
                                <div className="h-4 bg-slate-700/30 rounded w-full animate-pulse delay-75"></div>
                                <div className="h-4 bg-slate-700/30 rounded w-5/6 animate-pulse delay-150"></div>
                                <div className="h-4 bg-slate-700/30 rounded w-4/5 animate-pulse delay-200"></div>
                            </div>
                        </div>
                    )}

                    {result && <ResultDisplay result={result} />}
                </div>
            </main>

            <footer className="footer py-6 text-center text-slate-600 text-sm">
                <p>Built with FastAPI + React + LangGraph</p>
            </footer>
        </div>
    )
}

export default App
