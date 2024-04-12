module.exports = {
  // The rest of the Cypress config options go here...
  projectId: "bmrcs5",
  e2e: {
    baseurl: "www.google.com",
    viewportwidth: 1800,
    viewportheight: 2500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  chromeWebSecurity: false,
};
