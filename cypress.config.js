const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 6000,
  watchForFileChanges: false,
  failOnStatusCode: false,
  reporter: "mochawesome",
  projectId: "deh9do",
  reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "\\reports"
    }


 
    
  


});
