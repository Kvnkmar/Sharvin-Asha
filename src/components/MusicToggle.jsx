import { useEffect, useState } from 'react'

// Spotify track reference: https://open.spotify.com/track/4V1vg7WWerMbvebVgLe5Zq

// Floating play/pause control for the wedding song. The <audio> element itself
// lives in App so the entry overlay can start it on the visitor's first gesture
// (browsers block audio until then); this button just drives and mirrors it.
export default function MusicToggle({ audioRef }) {
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  // Reveal the button shortly after load so it doesn't distract on arrival.
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Keep the button's icon in sync with the shared audio element's state.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onPlay = () => {
      setPlaying(true)
      setUnavailable(false)
    }
    const onPause = () => setPlaying(false)
    const onError = () => setUnavailable(true)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', onError)
    setPlaying(!audio.paused)
    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('error', onError)
    }
  }, [audioRef])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      await audio.play()
      setUnavailable(false)
    } catch {
      setUnavailable(true)
    }
  }

  return (
    <button
      data-music-toggle
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
  )
}
