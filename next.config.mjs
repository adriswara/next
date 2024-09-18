/** @type {import('next').NextConfig} */
const nextConfig = {};
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
