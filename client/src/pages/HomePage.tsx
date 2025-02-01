import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Subtle glow effect */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-amber-500/5 to-transparent blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
                        Code<span className="font-semibold text-amber-500">IT</span>
                    </h1>
                    <p className="text-lg font-light text-slate-400">
                        Real-time collaborative code editor
                    </p>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-5xl">
                    <FormComponent />
                </div>

                {/* Features - Minimal */}
                <div className="mt-20 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="text-center">
                        <div className="mb-3 text-amber-500/80 text-sm font-medium tracking-wider uppercase">Real-time</div>
                        <p className="text-sm font-light text-slate-500">Instant synchronization</p>
                    </div>
                    <div className="text-center">
                        <div className="mb-3 text-amber-500/80 text-sm font-medium tracking-wider uppercase">Collaborative</div>
                        <p className="text-sm font-light text-slate-500">Work together seamlessly</p>
                    </div>
                    <div className="text-center">
                        <div className="mb-3 text-amber-500/80 text-sm font-medium tracking-wider uppercase">Intelligent</div>
                        <p className="text-sm font-light text-slate-500">AI-powered assistance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
