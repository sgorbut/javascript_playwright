// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :1,
  timeout: 30 * 1000,
  expect: {  
    timeout: 5000
  },
  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on',
  },

};

module.exports = config;
