export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper bg-graph-paper bg-[length:44px_44px]">
      <div className="text-center">
        <h1 className="text-display font-black text-ink mb-4">404</h1>
        <p className="text-h3 text-muted mb-8">Page not found</p>
        <a href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors">
          Back to Dashboard
        </a>
      </div>
    </div>
  )
}
