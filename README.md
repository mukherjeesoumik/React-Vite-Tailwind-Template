# React Vite Tailwind Boilerplate

A professional, modern starter template for building React applications with Vite, Tailwind CSS, and best practices. Includes routing, reusable components, and a clean project structure.

## Features
- ⚡️ Vite for lightning-fast development
- ⚛️ React 19 with functional components
- 🎨 Tailwind CSS for rapid UI development
- 🧩 Modular folder structure (components, pages)
- 🗺️ Routing with React Router v6
- 🧹 Prettier & ESLint for code quality
- 🚀 Ready for real-world projects

## Folder Structure
```
src/
  components/
    Footer.jsx
    Hero.jsx
    Navbar.jsx
  pages/
    About.jsx
    Home.jsx
    NotFound.jsx
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## Usage
- Edit `src/pages/Home.jsx` and `src/pages/About.jsx` to customize your pages.
- Add new components to `src/components/` and new pages to `src/pages/`.
- Routing is handled in `src/App.jsx` using React Router.
- Tailwind CSS is ready to use in all your components.

## Customization
- Change the theme by editing Tailwind config (`tailwind.config.js`).
- Add more routes/pages by updating `src/pages/` and the `<Routes>` in `App.jsx`.
- Use the Hero, Navbar, and Footer components as templates for your own UI.

## Example Components
- **Hero**: A modern hero section for your homepage.
- **Navbar**: Responsive navigation bar.
- **Footer**: Simple footer for copyright/info.

## Linting & Formatting
- Run `npm run lint` to check code quality.
- Prettier is set up for consistent code style.

