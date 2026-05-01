export function LandingPage() {
  return (
    <div className="min-h-screen bg-paper bg-graph-paper bg-[length:44px_44px] flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-6 shadow-card">
          D
        </div>
        <h1 className="text-display font-black text-ink mb-4">
          DMIT Pro
        </h1>
        <p className="text-h3 text-muted mb-8">
          Premium Dermatoglyphics Intelligence Assessment Platform
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors shadow-hover"
          >
            Counselor Login
          </a>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-page border-2 border-forest text-forest font-black rounded-full hover:bg-cream transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
