import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        // Resolving alias using import.meta.url
        "@": new URL('./src', import.meta.url).pathname,
      }
    },
  };
});
