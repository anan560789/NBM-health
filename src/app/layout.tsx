import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import Script from "next/script"; // 引入 Next.js 的 Script 元件
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "彥臣生技 - 專業衛教資源",
  description: "守護健康，專業導航。提供大腦、眼睛、心血管等全方位衛教資訊。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${lexend.variable} ${inter.variable} antialiased light`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* 使用 Next.js 的 Script 元件來載入 LIFF SDK，策略設為 beforeInteractive 可確保後續頁面元件能抓到 liff 物件 */}
        <Script
          src="https://static.line-scdn.net/liff/edge/2/sdk.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-background text-on-background font-body selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
