import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const REVEAL = '.fade-up, .fade-in'
    const STAGGER = 90 // ms between siblings revealing together
    const MAX_STEPS = 6 // cap so large grids don't trail too long

    const io = new IntersectionObserver(
      (entries, observer) => {
        // Reveal everything that crossed the threshold in this batch from the
        // top down, with a small stagger so grids/lists cascade in gracefully
        // instead of all appearing at once.
        const batch = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        batch.forEach((entry, i) => {
          const el = entry.target
          const step = Math.min(i, MAX_STEPS)
          el.style.transitionDelay = `${step * STAGGER}ms`
          el.classList.add('visible')
          observer.unobserve(el)

          // Drop the stagger delay once the reveal has played so it never
          // slows later transitions (e.g. gallery hover effects).
          setTimeout(() => {
            el.style.transitionDelay = ''
          }, 1400 + step * STAGGER)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = (root) => {
      root.querySelectorAll?.(REVEAL).forEach((el) => {
        if (!el.classList.contains('visible')) io.observe(el)
      })
    }

    observe(document)

    // Pick up nodes that mount after the first render (e.g. the RSVP
    // confirmation message) so they animate in too.
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.matches?.(REVEAL) && !node.classList.contains('visible')) {
            io.observe(node)
          }
          observe(node)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}

export function useCountdown(targetDate) {
  const getTimeLeft = () => {
    const total = Date.parse(targetDate) - Date.now()
    if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }

    return {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    }
  }

  return getTimeLeft
}
