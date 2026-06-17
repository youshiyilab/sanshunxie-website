import type { Metadata } from "next";
import "./globals.css";

// 不使用 Google Fonts(避免网络依赖),用系统字体
const inter = { variable: "" };

export const metadata: Metadata = {
  metadataBase: new URL("https://sanshunxie.com"),
  title: {
    default: "san 瞬写 · 说话即文稿 — 端侧原生 AI 语音生产力工具",
    template: "%s · san 瞬写",
  },
  description:
    "国内首款端侧原生、零数据上传的 AI 语音生产力工具。五大地域口音普通话深度优化，说话直接出结构化文稿。免费版永久可用。",
  keywords: [
    "AI 语音转写",
    "语音转文字",
    "端侧 AI",
    "隐私工具",
    "口音识别",
    "川普识别",
    "东北话识别",
    "会议纪要",
    "Mac 语音输入",
  ],
  authors: [{ name: "san 瞬写" }],
  creator: "san 瞬写",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://sanshunxie.com",
    siteName: "san 瞬写",
    title: "san 瞬写 · 说话即文稿",
    description:
      "国内首款端侧原生 AI 语音生产力工具。五大地域口音普通话深度优化，零数据上传。",
    images: [
      {
        url: "/og", // Next.js 自动生成 1200x630 OG 图
        width: 1200,
        height: 630,
        alt: "san 瞬写 · 说话即文稿",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "san 瞬写 · 说话即文稿",
    description: "国内首款端侧原生 AI 语音生产力工具。零数据上传，五地口音优化。",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-[#111] font-sans">
        {children}
      </body>
    </html>
  );
}
