"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type OS = "mac" | "windows" | "ios" | "android" | "unknown";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator as Navigator & { userAgentData?: { platform?: string } })
    .userAgentData?.platform?.toLowerCase();

  if (platform) {
    if (platform.includes("mac")) return "mac";
    if (platform.includes("win")) return "windows";
    if (platform.includes("linux")) return "windows"; // Linux 默认给 Windows 兜底
  }
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "ios";
  if (ua.includes("android")) return "android";
  return "unknown";
}

/**
 * 右上角下载按钮配置（对标 typeless.com/downloads 的右上 CTA）
 * - 自动识别 OS，对应跳转到对应商店
 * - macOS / Windows / iOS 走对应官方应用商店
 * - Android 走邮件通知（"敬请期待"+ 收件人收集）
 * - 未知设备显示「下载」+ 跳到 /download 平台选择页
 */
const downloadConfig: Record<
  OS,
  { label: string; short: string; href: string; external: boolean }
> = {
  mac: {
    label: "在 Mac App Store 打开",
    short: "macOS",
    href: "https://apps.apple.com/app/sanshunxie",
    external: true,
  },
  windows: {
    label: "在 Microsoft Store 打开",
    short: "Windows",
    href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
    external: true,
  },
  ios: {
    label: "在 App Store 打开",
    short: "iOS",
    href: "https://apps.apple.com/app/sanshunxie",
    external: true,
  },
  android: {
    label: "敬请期待",
    short: "Android",
    href: "mailto:hi@sanshunxie.com?subject=Android%20%E5%8F%91%E5%B8%83%E9%80%9A%E7%9F%A5",
    external: true,
  },
  unknown: {
    label: "下载",
    short: "",
    href: "/download",
    external: false,
  },
};

export function Nav() {
  const [os, setOs] = useState<OS>("unknown");
  useEffect(() => {
    setOs(detectOS());
  }, []);

  const download = downloadConfig[os];

  // iOS 走外链新窗口；其余走站内 Link
  const Cta = download.external ? (
    <a
      href={download.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#111] px-5 text-[15px] font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all hover:bg-black hover:shadow-lg active:scale-[0.97] sm:px-6"
    >
      {/* 下载图标 */}
      <svg
        className="h-4 w-4 text-white transition-transform group-hover:translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      <span className="text-white">{download.label}</span>
      {/* 外部链接小箭头 */}
      <svg
        className="h-3 w-3 -translate-y-0.5 text-white/60 transition-colors group-hover:text-white/90"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  ) : (
    <Link
      href={download.href}
      className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#111] px-5 text-[15px] font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all hover:bg-black hover:shadow-lg active:scale-[0.97] sm:px-6"
    >
      <svg
        className="h-4 w-4 text-white transition-transform group-hover:translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      <span className="text-white">{download.label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* 左：S logo + san 瞬写 */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/s-logo.png"
            alt="san 瞬写"
            width={144}
            height={144}
            className="h-[72px] w-[72px] object-contain"
            priority
          />
          <span className="flex items-baseline gap-2 leading-none">
            <span className="text-3xl font-semibold tracking-tight text-[#111]">
              san
            </span>
            <span className="text-3xl font-semibold tracking-tight text-[#111]">
              瞬写
            </span>
          </span>
        </Link>

        {/* 中：导航链接 */}
        <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <Link href="/manifesto" className="transition-colors hover:text-[#111]">
            宣言
          </Link>
<Link href="/use-cases" className="transition-colors hover:text-[#111]">
            使用场景
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-[#111]">
            定价
          </Link>
        </div>

        {/* 右：OS 自动检测下载按钮（对标 typeless 右上 CTA） */}
        <div className="flex items-center gap-3">
          {/* 桌面端 + 平板：完整文案 */}
          <span className="hidden sm:inline-flex">{Cta}</span>
          {/* 手机：只显示图标 */}
          <Link
            href={download.href}
            target={download.external ? "_blank" : undefined}
            rel={download.external ? "noopener noreferrer" : undefined}
            aria-label={download.label}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all hover:bg-black hover:shadow-lg active:scale-[0.97] sm:hidden"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}