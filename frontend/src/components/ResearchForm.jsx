import { useState } from 'react'

const ResearchForm = ({ onSubmit, loading }) => {
    const [topic, setTopic] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!topic.trim()) return
        onSubmit(topic)
    }

    return (
        <div className="w-full max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="glass-card p-2 flex items-center gap-2 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your research topic..."
                    disabled={loading}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-400 px-6 py-4 text-lg w-full"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`
            px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300
            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
            hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center gap-2 whitespace-nowrap
          `}
                >
                    {loading ? (
                        'Initializing...'
                    ) : (
                        '🚀 Start Research'
                    )}
                </button>
            </form>
        </div>
    )
}

export default ResearchForm
