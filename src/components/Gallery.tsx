import { useRef, useEffect, useState } from 'react'

const photos = [
  { src: '_coffe2.jpg', alt: 'Morning coffee', tall: false },
  { src: '_cake2.jpg', alt: 'Pastry selection', tall: true },
  { src: '_people.jpg', alt: 'Espresso', tall: false },
  { src: '_leaf_cake.jpg', alt: 'Brunch plate', tall: false },
  { src: '_matcha.jpg', alt: 'Café interior', tall: true },
  { src: '_fruit_closeup.jpg', alt: 'Latte art', tall: false },
]

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section id="gallery" style={{ background: 'var(--charcoal-mid)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem, 4vw, 3.5rem)', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--brick)', marginBottom: '0.6rem',
            }}>The Space</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--linen)',
            }}>Inside &amp; <em>out</em></h2>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--warm-grey)', letterSpacing: '0.1em' }}>
            — {photos.length} photos
          </p>
        </div>

        {/* Masonry-style grid */}
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '220px',
          gap: '8px',
        }}>
          {photos.map((p, i) => (
            <div key={i} style={{
              gridRow: p.tall ? 'span 2' : 'span 1',
              overflow: 'hidden',
              borderRadius: '1px',
              position: 'relative',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ${i * 0.07}s ease`,
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement
                if (img) img.style.transform = 'scale(1.07)'
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement
                if (img) img.style.transform = 'scale(1)'
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              <img src={p.src} alt={p.alt} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.7s ease',
              }} />
              <div className="overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(168,92,58,0.25)',
                opacity: 0, transition: 'opacity 0.3s',
                borderBottom: '3px solid var(--brick)',
              }} />
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 600px) {
            #gallery .container > div:last-of-type {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
