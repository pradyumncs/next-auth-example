<<<<<<< HEAD
/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
}
=======
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
        ],
  
      },
  
  
  
  
  }
  
  module.exports = nextConfig
  
  
  
>>>>>>> e1fb5b68ef663ba3c727449c342d1c375dac6245
