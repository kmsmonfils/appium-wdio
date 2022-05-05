import "dotenv/config";
const { config } = require("./wdio.shared.conf");
// ====================
// Browser Credentials
// ====================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// ============
// Specs
// ============
config.specs = ["./test/specs/android-real-world-app/**/*.js"];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://de0dea23e96ab169169e031fc98d5ccdb716f480",
    "appium:autoGrantPermissions": true,
  },
];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
  ['browserstack', {
      browserstackLocal: true
  }]
];
exports.config = config;
