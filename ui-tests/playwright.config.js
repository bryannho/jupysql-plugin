/**
 * Configuration for Playwright using default from @jupyterlab/galata
 */
const baseConfig = require('@jupyterlab/galata/lib/playwright-config');

module.exports = {
  ...baseConfig,
  reporter: [['html', { open: 'never' }]],
  retries: process.env.CI ? 2 : 0, // set to 2 when running on CI
  use: {
    trace: 'on-first-retry', // record traces on first retry of each test
  },
  webServer: {
    command: 'jlpm start',
    url: 'http://localhost:8888/lab',
    timeout: 120 * 1000,
    reuseExistingServer: process.env.REUSE_EXISTING_SERVER || !process.env.CI
  }
};