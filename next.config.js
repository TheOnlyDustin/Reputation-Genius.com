const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://link.reputation-genius.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "media-src 'self' https://storage.googleapis.com",
  "connect-src 'self' https://vitals.vercel-insights.com https://pulseai-survey-5t0ediirt-tzb02s-projects.vercel.app/api/*",
  "frame-src https://pulseai-survey-5t0ediirt-tzb02s-projects.vercel.app https://link.reputation-genius.com https://pulseai.synapsescode.com",
  "frame-ancestors https://pulseai-survey-5t0ediirt-tzb02s-projects.vercel.app",
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspDirectives,
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid eval-based source maps so CSP can remain strict in development.
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
