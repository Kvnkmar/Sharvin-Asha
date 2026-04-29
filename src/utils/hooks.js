import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-up, .fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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
