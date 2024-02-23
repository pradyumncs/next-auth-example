/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "res.cloudinary.com",
         
        ],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
          },
          {
            protocol: "https",
            hostname: "nsfwaichat.tech",
            port: "",
          },
        ],
  
      },
  
  
  
  
  }
  
  module.exports = nextConfig
  
  
  