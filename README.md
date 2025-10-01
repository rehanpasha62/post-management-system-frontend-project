# Post Management System (Mini CRUD App)

Stack: React + Vite, React Router, localStorage  
What you get: ready-to-run project implementing Create / Read / Update / Delete for posts, client-side search, author filter, routing, validations, and seeded data.

## Features
- List posts with search by title and filter by author
- Create / Edit / Delete posts (saved in `localStorage` key `pms_posts`)
- Post details page with tags, timestamps
- Basic validations on forms (title, author, content)
- Pagination (6 items per page) and client-side seed data (10 posts)

## Install & Run
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
Open `http://localhost:5173` (vite default) in your browser.

## Project structure
- `src/components` - PostCard, PostForm
- `src/pages` - PostList, PostCreate, PostEdit, PostView
- `src/hooks/useLocalStorage.js` - small hook wrapping localStorage
- `src/data/seed.json` - 10 seed posts loaded on first run
- `README.md` - this file

## Notes & Stretch ideas
- Replace localStorage with `json-server` and Axios for a mock REST API.
- Add toasts, autosave drafts, Jest + React Testing Library tests.
- Improve styling (Tailwind), implement tag filters and sorting.

This ZIP was generated on 2025-09-27T10:32:28.779165Z.
