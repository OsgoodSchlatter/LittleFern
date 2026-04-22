import { useRef, useEffect, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" style={{ background: 'var(--linen)', color: 'var(--charcoal)' }}>
      <div className="container">
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          alignItems: 'center',
        }}>
          {/* Text first on linen */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 0.85s ease',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--brick)',
              marginBottom: '1.2rem',
            }}>Our Place</p>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: 'var(--charcoal)',
              marginBottom: '1.8rem',
              lineHeight: 1.2,
            }}>
              Worn edges.<br /><em>Warm welcome.</em>
            </h2>

            <p style={{ color: 'var(--charcoal-light)', marginBottom: '1.2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Little Fern sits inside a converted brick terrace on Regent Street — exposed walls, dark timber benches, and just enough greenery to soften the edges. The kind of place that feels like it's always been there.
            </p>
            <p style={{ color: 'var(--charcoal-light)', marginBottom: '2.8rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              We open early, bake fresh daily, and take our coffee seriously. Whether you're after a quiet corner with a long black or a slow brunch with the table, there's always room at Little Fern.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
              borderTop: '1px solid rgba(44,40,37,0.12)',
              paddingTop: '2rem',
            }}>
              {[
                { num: '2024', label: 'Est. Redfern' },
                { num: 'Daily', label: 'Fresh baked' },
                { num: '100%', label: 'Local roasters' },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--brick)' }}>{s.num}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-grey)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{
            position: 'relative',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 0.85s 0.2s ease',
          }}>
            <img
              src="/public/_front.jpg"
              alt="Inside Little Fern"
              style={{ width: '100%', height: '540px', objectFit: 'cover', borderRadius: '1px' }}
            />
            {/* Brick accent corner */}
            <div style={{
              position: 'absolute',
              top: '-1rem', left: '-1rem',
              width: '80px', height: '80px',
              border: '2px solid var(--brick)',
              borderRadius: '1px',
              zIndex: -1,
              opacity: 0.4,
            }} />
            {/* Caption tag */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem', left: '1.5rem',
              background: 'rgba(44,40,37,0.85)',
              backdropFilter: 'blur(8px)',
              padding: '0.6rem 1rem',
              borderLeft: '2px solid var(--brick)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--linen)', textTransform: 'uppercase' }}>
                Regent St, Redfern
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
