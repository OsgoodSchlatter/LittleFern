import { useState } from 'react'

type MenuItem = { name: string; desc: string; price: string; tag?: string }
type MenuData = { [key: string]: MenuItem[] }

const menu: MenuData = {
  'Coffee': [
    { name: 'Espresso', desc: 'Single origin rotating seasonal, bright & clean', price: '$4.00' },
    { name: 'Flat White', desc: 'House blend, silky texture, 5oz', price: '$5.00' },
    { name: 'Filter', desc: 'Batch brew, poured fresh every hour', price: '$4.50' },
    { name: 'Cold Brew', desc: '24-hour steep, served long with ice', price: '$6.00' },
    { name: 'Oat Latte', desc: 'House blend, Minor Figures oat, velvet steam', price: '$6.00' },
    { name: 'Matcha', desc: 'Ceremonial grade, lightly sweetened', price: '$6.50', tag: 'Popular' },
  ],
  'Brunch': [
    { name: 'Soft Eggs on Toast', desc: 'Slow-scrambled, cultured butter, house sourdough', price: '$14.00' },
    { name: 'Ricotta & Honey', desc: 'Whipped ricotta, wildflower honey, toasted walnuts, rye', price: '$16.00' },
    { name: 'Fern Bowl', desc: 'Farro, roast pumpkin, soft egg, miso tahini, seeds', price: '$22.00', tag: 'Signature' },
    { name: 'Mushrooms', desc: 'Wild mix, thyme, crème fraîche, chilli oil, sourdough', price: '$20.00' },
    { name: 'Granola', desc: 'House baked, coconut yoghurt, seasonal fruit', price: '$15.00' },
  ],
  'Pastries': [
    { name: 'Croissant', desc: 'Laminated in-house, plain or with cultured butter & jam', price: '$6.00' },
    { name: 'Kouign-Amann', desc: 'Caramelised, flaky, warm from the oven by 8am', price: '$7.50', tag: 'Baked daily' },
    { name: 'Cardamom Scroll', desc: 'Brown butter, orange zest, pearl sugar', price: '$6.50' },
    { name: 'Seasonal Tart', desc: 'Changes weekly — ask at the counter', price: '$8.00' },
    { name: 'Banana Bread', desc: 'Dark chocolate, tahini butter', price: '$6.00' },
  ],
}

const categories = Object.keys(menu)

export default function Menu() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="menu" style={{ background: 'var(--linen)', color: 'var(--charcoal)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--brick)', marginBottom: '0.8rem',
          }}>What We Make</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--charcoal)',
          }}>The Menu</h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0',
          borderBottom: '1px solid rgba(44,40,37,0.12)',
          marginBottom: '3rem', flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.8rem 2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: active === cat ? 'var(--brick)' : 'var(--warm-grey)',
              borderBottom: active === cat ? '2px solid var(--brick)' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'all 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
          gap: '0',
        }}>
          {menu[active].map((item, i) => (
            <div key={item.name} style={{
              padding: '1.6rem 0',
              borderBottom: '1px solid rgba(44,40,37,0.08)',
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', gap: '2rem',
              paddingRight: i % 2 === 0 ? '2.5rem' : '0',
              paddingLeft: i % 2 !== 0 ? '2.5rem' : '0',
              borderRight: i % 2 === 0 ? '1px solid rgba(44,40,37,0.08)' : 'none',
              animation: 'fadeIn 0.35s ease both',
              animationDelay: `${i * 0.04}s`,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem', fontWeight: 400,
                    color: 'var(--charcoal)',
                  }}>{item.name}</h3>
                  {item.tag && (
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      background: 'var(--brick)', color: 'var(--linen)',
                      padding: '0.15rem 0.5rem', borderRadius: '1px',
                    }}>{item.tag}</span>
                  )}
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--warm-grey)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
                color: 'var(--brick)', flexShrink: 0, marginTop: '4px',
              }}>{item.price}</span>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: '3rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem', color: 'var(--warm-grey)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Please let us know of any dietary requirements · Menu updated seasonally
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          #menu .container > div:last-of-type > div {
            border-right: none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
