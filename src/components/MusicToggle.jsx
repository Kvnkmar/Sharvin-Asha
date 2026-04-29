import { useEffect, useRef, useState } from 'react'
import weddingSong from '../assets/audio/Nenjin Ezhuth x Sita Kalyanam - Extended  T33J3Y.mp3'

// Spotify track reference: https://open.spotify.com/track/4V1vg7WWerMbvebVgLe5Zq

export default function MusicToggle() {
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  const toggle = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setPlaying(true)
      setUnavailable(false)
    } catch {
      setPlaying(false)
      setUnavailable(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingSong}
        loop
        preload="none"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={() => setUnavailable(true)}
      />

      <button
        onClick={toggle}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 border border-gold/40 bg-transparent backdrop-blur-[1px] flex items-center justify-center transition-all duration-700 hover:border-gold hover:bg-charcoal/20 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${unavailable ? 'border-red-300/60' : ''}`}
        aria-label={playing ? 'Pause wedding song' : 'Play wedding song'}
        title={unavailable ? 'Song could not be played' : playing ? 'Pause wedding song' : 'Play wedding song'}
      >
        {playing ? (
          <span className="flex items-end gap-0.5 h-4">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-1 bg-gold rounded-sm animate-pulse"
                style={{
                  height: `${[60, 100, 40][i - 1]}%`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </span>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 2L11 7L3 12V2Z" fill="#C9A84C" />
          </svg>
        )}
      </button>
    </>
  )
}
