import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    build: {
      outDir: './build'
    },
    base: env.VITE_APP_BASE_URL,
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