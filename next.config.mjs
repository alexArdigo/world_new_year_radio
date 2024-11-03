/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        TIMEZONEDB_API_KEY: process.env.TIMEZONEDB_API_KEY,
    },
};

export default nextConfig;
