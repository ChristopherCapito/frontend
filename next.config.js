require('dotenv').config();
// next.config.js

module.exports = {
  // Target must be serverless
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
  },
};
