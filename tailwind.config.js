/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        "primary": "var(--color-primary)",
        "primary-25": "var(--color-primary-25)",
        "primary-50": "var(--color-primary-50)",
        "primary-100": "var(--color-primary-100)",
        "primary-200": "var(--color-primary-200)",
        "primary-300": "var(--color-primary-300)",
        "primary-400": "var(--color-primary-400)",
        "primary-600": "var(--color-primary-600)",
        "primary-700": "var(--color-primary-700)",
        "primary-750": "var(--color-primary-750)",
        "primary-800": "var(--color-primary-800)",
        "primary-900": "var(--color-primary-900)",
        // neutral colors
        "neutral-2": "var(--color-neutral-1)",
        "neutral-2": "var(--color-neutral-2)",
        "neutral-3": "var(--color-neutral-3)",
        "neutral-4": "var(--color-neutral-4)",
        "neutral-5": "var(--color-neutral-5)",
        "neutral-6": "var(--color-neutral-6)",
        "neutral-7": "var(--color-neutral-7)",
        "neutral-8": "var(--color-neutral-8)",
        "neutral-9": "var(--color-neutral-9)",
        // state color
        "success-bg": "var(--color-success-bg)",
        "success-light": "var(--color-success-light)",
        "success": "var(--color-success)",
        "warning-light": "var(--color-warning-light)",
        "warning": "var(--color-warning)",
        "error-bg": "var(--color-error-bg)",
        "error-light": "var(--color-error-light)",
        "error": "var(--color-error)",
      },
      screens: {
        'customResolution': "450px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}