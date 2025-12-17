
# MiniMarketplace

## Name
MiniMarketplace

## Time spent
- 6-7 hours

## Tasks that were done
- Integrating Vanilla JS product rendering with the React cart (`window.addToCart` bridge).
- Responsive layout: two-column desktop grid and single-column mobile, plus a responsive navbar and footer.
- Ensuring cart persistence via `localStorage` and keeping UI in sync.
- Iterating CSS for product card layout and media-query ordering.

## Hard tasks
- Making the UI responsive without special tools or libraries like TailwindCSS or Bootstrap
- Handling fetching data, when the app was deployed to Vercel there was CORS origin
- Creating UI without exact design
- Cart management

## Screenshots
The project includes several example screenshots in the `assets/` folder. Use any of the following files (relative paths):

- `assets/desktop-1.png`
- `assets/desktop-2.png`
- `assets/desktop-3.png`
- `assets/mobile-1.png`
- `assets/mobile-2.png`
<img width="1878" height="910" alt="image" src="https://github.com/user-attachments/assets/3884bc04-79e8-451c-9938-2b06eb554bfd" />
<img width="1311" height="719" alt="image" src="https://github.com/user-attachments/assets/0f349b99-b799-4b6f-9a31-b363ac603575" />
<img width="1906" height="781" alt="image" src="https://github.com/user-attachments/assets/236a65ca-fe3f-416a-881c-dd02c52d241d" />
<img width="440" height="720" alt="image" src="https://github.com/user-attachments/assets/18554b60-7439-41c1-88d5-bc2b5840effc" />
<img width="443" height="724" alt="image" src="https://github.com/user-attachments/assets/63727ef5-2a44-4deb-9fb9-6a61264afcc8" />


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

