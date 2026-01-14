import ReactMarkdown from 'react-markdown'

function ResultDisplay({ result }) {
    return (
        <div className="glass-card w-full max-w-4xl mx-auto p-8 animate-[fadeIn_0.5s_ease-out]">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    📊 Research Report
                </h2>
                <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-mono">
                    {result.iterations} iteration{result.iterations !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="prose prose-invert prose-lg max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-3xl prose-h1:text-indigo-300 prose-h1:mb-6
        prose-h2:text-2xl prose-h2:text-indigo-400 prose-h2:mt-8 prose-h2:mb-4
        prose-h3:text-xl prose-h3:text-indigo-400 prose-h3:mt-6 prose-h3:mb-3
        prose-p:text-slate-200 prose-p:leading-relaxed prose-p:mb-4
        prose-strong:text-white prose-strong:font-semibold
        prose-ul:text-slate-200 prose-ul:my-4
        prose-li:my-2 prose-li:leading-relaxed
        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
        prose-code:text-indigo-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-slate-700
        prose-blockquote:border-l-indigo-500 prose-blockquote:text-slate-300">
                <ReactMarkdown>{result.report}</ReactMarkdown>
            </div>
        </div>
    )
}

export default ResultDisplay
