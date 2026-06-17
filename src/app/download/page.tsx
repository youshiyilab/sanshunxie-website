import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "下载客户端",
  description:
    "下载 san 瞬写 macOS / Windows / iOS / Android 全平台客户端。端侧原生、零数据上传、永久免费版可用。",
};

const platforms = [
  {
    id: "mac",
    name: "macOS",
    icon: "🍎",
    badge: "推荐",
    version: "最新稳定版",
    size: "约 18 MB",
    file: "Mac App Store 安装包",
    arch: "Apple Silicon / Intel 双架构",
    requirement: "macOS 12.0 Monterey 或更高",
    desc: "菜单栏 App + 全局热键。首次启动会自动引导麦克风、辅助功能、Contacts 授权。",
    cta: "在 Mac App Store 打开",
    href: "https://apps.apple.com/app/sanshunxie",
    external: true,
    available: true,
  },
  {
    id: "windows",
    name: "Windows",
    icon: "🪟",
    badge: "推荐",
    version: "最新稳定版",
    size: "约 22 MB",
    file: "Microsoft Store 安装包",
    arch: "x64 · arm64",
    requirement: "Windows 10 1909 或更高",
    desc: "系统托盘 + 全局快捷键。UAC 提示选择「是」即可完成安装。",
    cta: "在 Microsoft Store 打开",
    href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
    external: true,
    available: true,
  },
  {
    id: "ios",
    name: "iOS",
    icon: "📱",
    badge: "敬请期待",
    version: "iOS 版",
    size: "—",
    file: "App Store 全球上架",
    arch: "iPhone / iPad",
    requirement: "iOS 16 或更高",
    desc: "SwiftUI 原生，iOS 键盘扩展，在任何 App 中使用。",
    cta: "敬请期待",
    href: "mailto:hi@sanshunxie.com?subject=iOS%20%E5%8F%91%E5%B8%83%E9%80%9A%E7%9F%A5",
    external: true,
    available: false,
  },
  {
    id: "android",
    name: "Android",
    icon: "🤖",
    badge: "敬请期待",
    version: "Android 版",
    size: "—",
    file: "即将上架",
    arch: "arm64 · x86_64",
    requirement: "Android 10+",
    desc: "Jetpack Compose 原生，华为 / 小米 / OPPO / vivo 全覆盖。",
    cta: "敬请期待",
    href: "mailto:hi@sanshunxie.com?subject=Android%20%E5%8F%91%E5%B8%83%E9%80%9A%E7%9F%A5",
    external: true,
    available: false,
  },
];

const commonFeatures = [
  { icon: "🛡", title: "100% 端侧处理", desc: "原始语音、文字、文稿永远不离开你的设备" },
  { icon: "🌍", title: "5 大地域口音", desc: "川渝/东北/粤普/江浙/西北识别强化" },
  { icon: "⚡", title: "VAD 断句流式", desc: "端到端 800ms 内输出，停顿瞬间蜕变" },
  { icon: "🎯", title: "App-Aware 感知", desc: "20+ 职场 App 自动匹配最佳模板" },
];

export default function DownloadPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-[var(--line)] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--subtle)]">
              Download
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl lg:text-7xl">
              在你常用的设备上，<br />直接开始说。
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              端侧原生客户端，全离线运行，零数据上传。永久免费版立即可用。
            </p>
          </div>
        </section>

        {/* 4 大平台下载卡片 */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-5 md:grid-cols-2">
              {platforms.map((p) => (
                <div
                  key={p.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-7 transition-all hover:border-[var(--line-strong)] hover:shadow-lg"
                >
                  {/* 顶部：图标 + 名称 + badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{p.icon}</span>
                      <div>
                        <h2 className="text-2xl font-semibold text-[#111]">
                          {p.name}
                        </h2>
                        <p className="mt-0.5 text-xs text-[var(--subtle)]">
                          {p.arch}
                        </p>
                      </div>
                    </div>
                    {p.badge && (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          p.badge === "推荐"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-[var(--accent-peach)] text-[#111]/70"
                        }`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* 描述 */}
                  <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                    {p.desc}
                  </p>

                  {/* 版本 + 大小 + 系统要求 */}
                  <dl className="mt-6 grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <dt className="text-[var(--subtle)]">版本</dt>
                      <dd className="mt-1 font-medium text-[#111]">{p.version}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--subtle)]">大小</dt>
                      <dd className="mt-1 font-medium text-[#111]">{p.size}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--subtle)]">系统</dt>
                      <dd className="mt-1 font-medium text-[#111]">
                        {p.requirement}
                      </dd>
                    </div>
                  </dl>

                  {/* 文件名 + 详情按钮 */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-5">
                    <code className="text-xs text-[var(--subtle)]">{p.file}</code>
                    {p.available ? (
                      <a
                        href={p.href}
                        target={p.external ? "_blank" : undefined}
                        rel={p.external ? "noopener noreferrer" : undefined}
                        className="inline-flex h-10 items-center rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                      >
                        <span className="text-white">{p.cta} →</span>
                      </a>
                    ) : (
                      <span className="inline-flex h-10 cursor-not-allowed items-center rounded-full border border-[var(--line)] bg-[#fafafa] px-5 text-sm font-medium text-[var(--subtle)]">
                        {p.cta}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 通用特性 */}
        <section className="border-b border-[var(--line)] bg-[#fafafa] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
                所有平台一致的核心能力
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                下载任意版本，这些能力立即可用。
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {commonFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[var(--line)] bg-white p-5"
                >
                  <div className="text-2xl">{f.icon}</div>
                  <h3 className="mt-3 text-base font-semibold text-[#111]">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--muted)]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 系统要求总览 */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
              系统要求
            </h2>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--line)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#fafafa]">
                    <th className="border-b border-[var(--line)] px-6 py-3 text-left font-semibold text-[#111]">
                      平台
                    </th>
                    <th className="border-b border-l border-[var(--line)] px-6 py-3 text-left font-semibold text-[#111]">
                      最低系统
                    </th>
                    <th className="border-b border-l border-[var(--line)] px-6 py-3 text-left font-semibold text-[#111]">
                      推荐配置
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["macOS", "macOS 12 Monterey", "macOS 14 Sonoma (M2+)"],
                    ["Windows", "Windows 10 1909", "Windows 11 23H2"],
                    ["iOS", "iOS 16", "iOS 17"],
                    ["Android", "Android 10", "Android 14"],
                  ].map(([plat, min, rec]) => (
                    <tr key={plat} className="hover:bg-black/[.01]">
                      <td className="border-b border-[var(--line)] px-6 py-3.5 font-medium text-[#111]">
                        {plat}
                      </td>
                      <td className="border-b border-l border-[var(--line)] px-6 py-3.5 text-[var(--muted)]">
                        {min}
                      </td>
                      <td className="border-b border-l border-[var(--line)] px-6 py-3.5 text-[var(--muted)]">
                        {rec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#fafafa] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
              下载常见问题
            </h2>
            <div className="mt-12 space-y-3">
              {[
                {
                  q: "下载后第一次启动要注意什么？",
                  a: "macOS 第一次启动会引导 4 项授权：麦克风（语音输入必需）、辅助功能（全局快捷键必需）、通讯录（联系人识别）、通知（可选）。Windows 第一次启动会引导 UAC 提权与麦克风授权。",
                },
                {
                  q: "永久免费版有什么限制？",
                  a: "永久免费版每月含 3000 字 AI 整理额度、2 个核心模板（会议纪要、清单）、3 档基础口音（标准/川渝/东北）。无广告无弹窗，永久可用。",
                },
                {
                  q: "能同时在多台设备上使用吗？",
                  a: "免费版支持 2 台设备绑定。月付/年付会员支持 5 台。终身会员不限制设备数。可通过 E2EE 多端同步共享文稿(不依赖云端服务器)。",
                },
                {
                  q: "升级到会员后能解锁哪些新功能？",
                  a: "Pro 会员解锁全部 30+ 职场模板、5 大地域口音（含两广/江浙/西北进阶版）、自定义 AI 指令、端侧声纹分割、E2EE 多端同步等。详见 /pricing。",
                },
              ].map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-[var(--line)] bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-[#111]">
                    <span>{f.q}</span>
                    <svg
                      className="h-4 w-4 shrink-0 text-[var(--subtle)] transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}