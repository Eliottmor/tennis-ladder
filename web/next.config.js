/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaPlugin } = require('experimental-prisma-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader'
        }
      ]
    })
    return config
  }
}

module.exports = nextConfig
