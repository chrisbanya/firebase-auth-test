import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/", // Important for static asset paths
  build: {
    outDir: "dist", //must match Vercel's output directory
    sourcemap: true, 
  },
});
