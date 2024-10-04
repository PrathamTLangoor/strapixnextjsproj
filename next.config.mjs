/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "img.freepik.com" 
      },
      { 
        protocol: "https", 
        hostname: "freepik.com" 
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**" 
      },
    ]
  }
};

export default nextConfig;
