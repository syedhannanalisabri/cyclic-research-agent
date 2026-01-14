export default function CyberLoader() {
    return (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <div className="relative w-24 h-24">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
                <div className="absolute inset-0 border-t-4 border-indigo-500 rounded-full animate-[spin_2s_linear_infinite]"></div>

                {/* Inner Ring */}
                <div className="absolute inset-4 border-4 border-purple-500/30 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                <div className="absolute inset-4 border-b-4 border-purple-500 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>

                {/* Center Core */}
                <div className="absolute inset-10 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
            </div>
            <div className="text-indigo-300 font-mono text-sm animate-pulse tracking-widest">
                INITIALIZING RECURSIVE ANALYSIS...
            </div>
        </div>
    )
}
