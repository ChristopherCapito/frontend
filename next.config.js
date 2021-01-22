const withEnv = require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([[withBundleAnalyzer], [withPreact], [withEnv], [nextConfig]]);
