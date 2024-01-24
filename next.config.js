const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test.cybersify.tech',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
});

module.exports = nextConfig;

