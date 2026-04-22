export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--charcoal-mid)',
      borderTop: '1px solid rgba(168,92,58,0.2)',
      padding: '3rem 0',
      color: 'var(--warm-grey)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--linen)', marginBottom: '0.2rem' }}>
            Little Fern <span style={{ color: 'var(--brick)' }}>On Regent</span>
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em' }}>
            Regent St, Redfern NSW 2016
          </p>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {['About', 'Gallery', 'Menu', 'Reserve'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--brick-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >{l}</a>
          ))}
        </nav>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.06em' }}>
          © {year} Little Fern On Regent
        </p>
      </div>
    </footer>
  )
}
