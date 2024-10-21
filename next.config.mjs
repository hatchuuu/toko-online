/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatar.iran.liara.run',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }, {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]


    }
};

export default nextConfig;
