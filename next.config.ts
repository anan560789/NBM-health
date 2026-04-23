/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 這是最重要的：強制 Next.js 產出 "out" 資料夾
  images: {
    unoptimized: true, // 靜態匯出必須關閉圖片優化
  },
};

export default nextConfig;