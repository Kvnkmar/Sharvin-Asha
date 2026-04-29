import storyPhoto from '../assets/DSC06969.jpg'

export default function Story() {
  return (
    <section id="story" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-script text-gold/5 select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: '20vw' }}>
        Forever
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in relative order-2 md:order-1">
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30" />
              <img
                src={storyPhoto}
                alt="Sharvin Nair and Asha"
                className="relative w-full object-cover"
                style={{ height: '600px', objectPosition: 'center 35%' }}
              />
              {/* Gold overlay corner */}
              <div className="absolute bottom-6 right-6 bg-cream/90 px-6 py-4 text-center">
                <p className="font-script text-gold text-3xl">Est. 2025</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-up order-1 md:order-2">
            <p className="section-label mb-6">Our Story</p>
            <h2 className="display-heading text-5xl md:text-6xl mb-8">
              Two souls,<br />
              <span className="font-serif italic font-light text-gold">one journey</span>
            </h2>

            <div className="space-y-5 text-charcoal/70 font-serif text-lg font-light leading-relaxed">
              <p>
                What began as a chance encounter blossomed into a love story written in the stars.
                Through shared laughter, quiet mornings, and a thousand little moments,
                Sharvin Nair and Asha discovered in each other a home.
              </p>
              <p>
                Now, surrounded by the people they love most, they invite you to witness
                the beginning of their forever — a celebration of love, family, and the
                beautiful journey ahead.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              <span className="font-script text-gold text-2xl">S & A</span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
