const withTM = require("next-transpile-modules")(["components", "hooks"]);

/**
 * @type {import('next').NextConfig}
 */
const options = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    }
  },
  redirects: async () => {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = withTM(options);
