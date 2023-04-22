import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: true,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.userlane.com/careers/',
  },
});
