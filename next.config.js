/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname:
          'thrindle-b2b-staging-env.eba-6hrseqxn.eu-west-1.elasticbeanstalk.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  swcMinify: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
