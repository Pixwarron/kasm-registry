/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'IT de Boer',
    description: 'Custom workspaces by Jeroen de Boer.',
    icon: '/img/logo.svg',
    listUrl: 'https://pixwarron.github.io/',
    contactUrl: 'https://it-deboer.de/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
