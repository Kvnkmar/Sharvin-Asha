import heroPhoto from '../assets/DSC06915.jpg'

export default function Hero({ guestName }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 hero-bg"
        style={{ backgroundImage: `url(${heroPhoto})`, backgroundPosition: 'center 12%' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Gold vignette top */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-charcoal/40 to-transparent" />

      {/* Decorative corner ornaments */}
      <div className="absolute top-24 left-8 text-gold/30 font-serif text-6xl leading-none hidden md:block">✦</div>
      <div className="absolute top-24 right-8 text-gold/30 font-serif text-6xl leading-none hidden md:block">✦</div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top label */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="font-sans text-xs tracking-wide-xl uppercase text-gold/80 font-light">
            Together with their families
          </p>
        </div>

        {/* Couple names */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="font-couple text-white leading-none" style={{ fontSize: 'clamp(3.75rem, 10vw, 7.5rem)' }}>
            Sharvin <span className="font-serif italic">N</span>air
          </h1>
          <div className="flex items-center justify-center gap-6 my-2">
            <span className="h-px w-16 bg-gold/50" />
            <span className="font-sans text-xs tracking-ultra uppercase text-gold/70 font-light">&amp;</span>
            <span className="h-px w-16 bg-gold/50" />
          </div>
          <h1 className="font-couple text-white leading-none" style={{ fontSize: 'clamp(3.75rem, 10vw, 7.5rem)' }}>
            <span className="font-serif italic">A</span>sha
          </h1>
        </div>

        {/* Date */}
        <div className="animate-fade-in mb-10" style={{ animationDelay: '0.8s' }}>
          <p className="font-serif text-white/80 text-xl font-light italic">
            The Twenty-First of June, Two Thousand Twenty-Five
          </p>
          <p className="font-sans text-xs tracking-ultra uppercase text-gold/60 mt-2 font-light">
            Kuala Lumpur, Malaysia
          </p>
        </div>

        {/* Guest name if provided */}
        {guestName && (
          <div className="animate-fade-in mb-8" style={{ animationDelay: '1s' }}>
            <p className="font-serif text-gold-light text-lg italic">
              Dear {guestName}, you are invited
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <a
            href="#rsvp"
            className="inline-flex items-center gap-3 border border-white/30 text-white font-sans text-xs tracking-ultra uppercase font-light px-10 py-4 hover:border-gold hover:text-gold transition-all duration-500"
          >
            <span>Kindly RSVP</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-sans text-xs tracking-ultra uppercase text-white/40 font-light">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
