import { useEffect, useRef } from 'react'
import './EntryOverlay.css'

// Full-screen welcome gate. Its purpose is twofold: set the tone on arrival,
// and — crucially — capture the visitor's first gesture (the tap to enter),
// which is what browsers require before audio is allowed to play. On entry the
// screen parts like a pair of doors to reveal the site beneath.
export default function EntryOverlay({ open, onEnter }) {
  const btnRef = useRef(null)

  // Move focus to the button so keyboard users can enter with Enter/Space.
  useEffect(() => {
    if (open) btnRef.current?.focus()
  }, [open])

  return (
    <div
      className={`entry ${open ? '' : 'entry--hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome — enter the wedding invitation"
      aria-hidden={open ? undefined : true}
      onClick={onEnter}
    >
      {/* The two halves that part to reveal the site */}
      <div className="entry__panel entry__panel--left" aria-hidden="true" />
      <div className="entry__panel entry__panel--right" aria-hidden="true" />

      <span className="entry__corner entry__corner--tl" aria-hidden="true" />
      <span className="entry__corner entry__corner--tr" aria-hidden="true" />
      <span className="entry__corner entry__corner--bl" aria-hidden="true" />
      <span className="entry__corner entry__corner--br" aria-hidden="true" />

      <div className="entry__inner">
        <p className="entry__eyebrow">Together with their families</p>

        <h1 className="entry__names">
          <span className="entry__name">Sarvin</span>
          <span className="entry__amp" aria-hidden="true">&amp;</span>
          <span className="entry__name">Asha</span>
        </h1>

        <div className="entry__ornament" aria-hidden="true">
          <span className="entry__line" />
          <svg viewBox="0 0 24 24" className="entry__diamond">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="12" cy="12" r="2" fill="#D4AF37" />
          </svg>
          <span className="entry__line" />
        </div>

        <button
          ref={btnRef}
          type="button"
          className="entry__btn"
          onClick={(e) => {
            e.stopPropagation()
            onEnter()
          }}
        >
          Tap to Begin
        </button>

        <p className="entry__hint">Best enjoyed with sound on</p>
      </div>
    </div>
  )
}
