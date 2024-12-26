/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        TIMEZONEDB_API_KEY: process.env.TIMEZONEDB_API_KEY,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'pt-PT']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pixabay.com',
                port: '',
                pathname: '/get/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
