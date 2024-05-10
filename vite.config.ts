import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: './build'
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      }
    },
    test: {
      environment: 'jsdom',
      include: ['**/*.test.tsx'],
      globals: true,
    },
  };
});