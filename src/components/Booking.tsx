import { useEffect } from 'react'

// Replace with your Calendly link once set up at https://calendly.com
const CALENDLY_URL = 'https://calendly.com/your-cafe/table-booking'

export default function Booking() {
  useEffect(() => {
    if (document.getElementById('calendly-script')) return
    const script = document.createElement('script')
    script.id = 'calendly-script'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <section id="booking" style={{ background: 'var(--charcoal)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--brick)', marginBottom: '0.8rem',
          }}>Come In</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--linen)', fontWeight: 400, marginBottom: '1rem',
          }}>
            Reserve a <em>table</em>
          </h2>
          <p style={{ color: 'var(--warm-grey)', maxWidth: '480px', margin: '0 auto', fontSize: '0.88rem' }}>
            We welcome reservations for groups of 2 or more. Walk-ins always welcome — we'll find you a spot.
          </p>
        </div>

        {/* Info strip */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap',
          marginBottom: '3rem',
          padding: '2rem',
          borderTop: '1px solid rgba(168,92,58,0.25)',
          borderBottom: '1px solid rgba(168,92,58,0.25)',
        }}>
          {[
            { label: 'Hours', value: 'Mon – Fri  6am – 2:30pm\nSat – Sun  6:30am – 1:30pm' },
            {
              label: 'Phone', value: '+61 2 9319 3715'
            },
            { label: 'Find Us', value: 'Shop F/66 Regent St, Redfern NSW 2016, Australia' },
          ].map(info => (
            <div key={info.label} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.63rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--brick)', marginBottom: '0.5rem',
              }}>{info.label}</p>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '1rem',
                color: 'var(--linen)', whiteSpace: 'pre-line', lineHeight: 1.7,
              }}>{info.value}</p>
            </div>
          ))}
        </div>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=A85C3A&text_color=2C2825&background_color=F4EFE8`}
          style={{ minWidth: '320px', height: '700px', borderRadius: '2px', overflow: 'hidden' }}
        />

        <p style={{
          textAlign: 'center', marginTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.63rem', color: 'rgba(140,123,114,0.5)',
          letterSpacing: '0.08em',
        }}>
          Booking via Calendly · Update the URL in <code style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.4rem' }}>Booking.tsx</code>
        </p>
      </div>
    </section>
  )
}
