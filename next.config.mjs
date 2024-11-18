/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.fcgk6-3.fna.fbcdn.net',
                port: '',
                pathname: '**',
            },
        ],
    },
};
// new
import { createRequire } from 'node:module'
const _require = createRequire(import.meta.url)
const defaultColors = _require('tailwindcss/colors.js')
delete defaultColors.lightBlue
delete defaultColors.warmGray
delete defaultColors.trueGray
delete defaultColors.coolGray
delete defaultColors.blueGray
// 




export default nextConfig;
