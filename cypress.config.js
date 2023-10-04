import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://127.0.0.1:5173',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    env: {
      apiUrl: 'http://127.0.0.1:5173/api/series/trending'
    }
  },
});
