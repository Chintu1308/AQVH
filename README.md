# AQVH

This is the official repository for the AQVH Semi Finals Quantum Transmission web app.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

This project is ready for deployment on GitHub Pages using Vite.

### Steps:
1. Update your `vite.config.ts` with the correct `base` path:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: '/AQVH/', // Repo name
     // ...other config
   });
   ```
2. Add a deploy script to your `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages`:
   ```sh
   npm install --save-dev gh-pages
   ```
4. Build and deploy:
   ```sh
   npm run build
   npm run deploy
   ```

## License
MIT
