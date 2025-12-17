
# MiniMarketplace

## Name
MiniMarketplace

## Time spent
- 6 hours

## Hard parts
- Integrating Vanilla JS product rendering with the React cart (`window.addToCart` bridge).
- Responsive layout: two-column desktop grid and single-column mobile, plus a responsive navbar and footer.
- Ensuring cart persistence via `localStorage` and keeping UI in sync.
- Iterating CSS for product card layout and media-query ordering.

## Screenshots
The project includes several example screenshots in the `assets/` folder. Use any of the following files (relative paths):

- `assets/desktop-1.png`
- `assets/desktop-2.png`
- `assets/desktop-3.png`
- `assets/mobile-1.png`
- `assets/mobile-2.png`



## Demo link (optional)
- Demo: (add hosted demo URL here if available)

## Run locally
Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Project structure (high level)
- `src/` — source code
	- `components/` — React components (Navbar, Footer, Cart, etc.)
	- `styles/` — `main.css`
	- `products.js` — Vanilla JS product loading + DOM rendering
	- `main.jsx`, `App.jsx`
- `index.html` — HTML template

---

