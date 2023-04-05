const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  esModule: false,
  webpack(config, options) {
    return config;
  },
});
