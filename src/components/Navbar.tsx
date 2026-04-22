import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reserve', href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '1rem 2.5rem' : '1.8rem 2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(44,40,37,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(168,92,58,0.2)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.15rem',
        fontWeight: 400,
        color: 'var(--linen)',
        letterSpacing: '0.06em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.1,
      }}>
        <span>Little Fern</span>
        <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', color: 'var(--brick)', textTransform: 'uppercase', fontStyle: 'normal' }}>On Regent</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-on-dark)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--brick-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-on-dark)')}
          >
            {l.label}
          </a>
        ))}
        <a href="#booking" style={{
          border: '1px solid var(--brick)',
          color: 'var(--brick)',
          padding: '0.5rem 1.3rem',
          borderRadius: '1px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--brick)'; e.currentTarget.style.color = 'var(--linen)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--brick)' }}
        >
          Book
        </a>
      </nav>

      {/* Mobile burger */}
      <button onClick={() => setOpen(!open)} className="mobile-menu-btn" aria-label="Toggle menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--linen)',
            transition: 'all 0.3s',
            transform: open && i === 0 ? 'rotate(45deg) translate(4px, 4px)' : open && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {open && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'var(--charcoal)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '3rem', zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--linen)',
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
