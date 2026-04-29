export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-couple text-gold text-6xl mb-4">Sharvin Nair & Asha</h2>
        <p className="font-sans text-xs tracking-ultra uppercase text-white/30 font-light mb-8">
          21 · June · 2025
        </p>

        <div className="flex items-center gap-4 justify-center mb-10">
          <span className="h-px w-16 bg-gold/20" />
          <span className="text-gold/40 text-sm">✦</span>
          <span className="h-px w-16 bg-gold/20" />
        </div>

        <p className="font-serif text-white/30 italic text-lg font-light leading-relaxed">
          "Two are better than one, because they have a good return for their labour."
        </p>
        <p className="font-sans text-xs tracking-ultra uppercase text-gold/30 font-light mt-3">
          Ecclesiastes 4:9
        </p>

        <p className="font-sans text-xs text-white/20 font-light mt-12 tracking-wide">
          Made with love ♥ Kuala Lumpur, Malaysia
        </p>
      </div>
    </footer>
  )
}
