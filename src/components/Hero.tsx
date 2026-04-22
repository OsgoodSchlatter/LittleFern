import { useEffect, useRef } from 'react'

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    const onScroll = () => { el.style.transform = `translateY(${window.scrollY * 0.3}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={{
      position: 'relative',
      height: '100svh',
      minHeight: '620px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Left — text panel */}
      <div style={{
        background: 'var(--charcoal)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Brick accent line */}
        <div style={{
          width: '40px', height: '2px',
          background: 'var(--brick)',
          marginBottom: '2rem',
          animation: 'expandLine 1s 0.3s ease both',
        }} />

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--warm-grey)',
          marginBottom: '1.4rem',
          animation: 'fadeUp 0.9s 0.4s ease both',
          opacity: 0,
        }}>
          Regent St · Redfern, Sydney
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 5vw, 5rem)',
          fontWeight: 400,
          color: 'var(--linen)',
          lineHeight: 1.1,
          marginBottom: '1.8rem',
          animation: 'fadeUp 0.9s 0.55s ease both',
          opacity: 0,
        }}>
          Small space.<br /><em style={{ color: 'var(--brick)' }}>Big</em> mornings.
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--warm-grey-light)',
          maxWidth: '340px',
          lineHeight: 1.75,
          marginBottom: '2.5rem',
          animation: 'fadeUp 0.9s 0.7s ease both',
          opacity: 0,
        }}>
          Brunch, hand-crafted pastries and exceptional coffee — inside a converted brick terrace on Regent Street.
        </p>

        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.9s 0.85s ease both',
          opacity: 0,
        }}>
          <a href="#menu" style={{
            background: 'var(--brick)',
            color: 'var(--linen)',
            padding: '0.85rem 2rem',
            borderRadius: '1px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--brick-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--brick)')}
          >
            View Menu
          </a>
          <a href="#booking" style={{
            border: '1px solid rgba(244,239,232,0.2)',
            color: 'var(--text-on-dark)',
            padding: '0.85rem 2rem',
            borderRadius: '1px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(244,239,232,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(244,239,232,0.2)')}
          >
            Reserve
          </a>
        </div>

        {/* Hours pill */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 4vw, 3.5rem)',
          right: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fadeUp 0.9s 1s ease both',
          opacity: 0,
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6fcf97' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--warm-grey)', letterSpacing: '0.1em' }}>
            Open · Mon–Fri 6am-2:30pm · Sat–Sun 6:30am-1:30pm
          </span>
        </div>
      </div>

      {/* Right — image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div ref={imgRef} style={{
          position: 'absolute',
          inset: '-20%',
          background: `url('/public/_people_pos.jpg') center/cover no-repeat`,
          willChange: 'transform',
        }} />
        {/* Dark left edge bleed */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(44,40,37,0.4) 0%, transparent 40%)',
        }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to { width: 40px; }
        }
        @media (max-width: 700px) {
          #hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
