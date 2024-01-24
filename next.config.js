const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({});

module.exports = nextConfig;
// images:{
//     remotePatterns:[
//       {
//         protocol: 'https',
//         hostname: "images.pexels.com"
//       }
//     ]
//   }
