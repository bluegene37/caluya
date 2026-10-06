import { defineConfig } from 'vite';
// Gene - Oct 06, 2026: Switched build configuration from React to Vue 3 per user request
// import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Gene - Oct 06, 2026: Replaced react() plugin with vue()
  // plugins: [
  //   react(),
  //   tailwindcss(),
  // ],
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: false,
  },
});
