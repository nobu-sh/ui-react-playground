const withTM = require("next-transpile-modules")(["ui"]);

/**
 * @type {import('next').NextConfig}
 */
const options = {
  reactStrictMode: true,
}

module.exports = withTM(options);
