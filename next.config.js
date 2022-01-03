const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
}

module.exports = withPreact(NextConfig);