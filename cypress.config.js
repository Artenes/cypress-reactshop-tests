const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-shopping-cart-67954.firebaseapp.com', // Target: ReactShop
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress ReactShop Tests',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});
