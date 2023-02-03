const path = require('path')
const { themeFiles } = require('./.styles/setup')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: themeFiles
  }
}

module.exports = nextConfig
