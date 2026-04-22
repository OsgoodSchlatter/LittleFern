# Little Fern On Regent

Minimal Scandi-industrial café website built with **Vite + React + TypeScript**.  
Charcoal `#2C2825` · Brick `#A85C3A` · Linen `#F4EFE8`  
Fonts: Playfair Display + DM Mono + DM Sans

---

## Getting Started

```bash
yarn install
yarn dev

yarn build      # production build → /dist
yarn preview    # preview build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Sticky nav, mobile drawer
│   ├── Hero.tsx        # Split-screen hero with parallax
│   ├── About.tsx       # Story + stats, scroll-reveal
│   ├── Gallery.tsx     # Masonry grid, brick hover overlay
│   ├── Menu.tsx        # Tabbed: Coffee / Brunch / Pastries
│   ├── Booking.tsx     # Calendly embed
│   └── Footer.tsx
├── styles/
│   └── global.css      # Design tokens + base
├── App.tsx
└── main.tsx
```

---

## Booking — Calendly Setup

1. Sign up at [calendly.com](https://calendly.com)
2. Create an Event Type (e.g. "Table Reservation")
3. In `src/components/Booking.tsx`, replace:
```ts
const CALENDLY_URL = 'https://calendly.com/your-cafe/table-booking'
```
The widget passes brand colours automatically.

---

## Customisation Checklist

- [ ] Swap Unsplash images in `Gallery.tsx` and `Hero.tsx` with real photos
- [ ] Update menu in `Menu.tsx`
- [ ] Update address, phone, hours in `Booking.tsx` and `Footer.tsx`
- [ ] Add Calendly URL in `Booking.tsx`

---

## Deploy to Netlify

```bash
yarn build
```
Drag `/dist` to [app.netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repo for auto-deploys.  
`netlify.toml` handles SPA routing automatically.
