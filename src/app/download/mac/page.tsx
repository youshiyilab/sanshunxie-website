import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "下载 macOS 版",
  description:
    "下载 san 瞬写 macOS 客户端。Apple Silicon / Intel 双架构原生支持。端侧 AI 语音生产力工具。",
};

const features = [
  "菜单栏 App + 全局快捷键",
  "Apple Silicon / Intel 双架构原生支持",
  "VAD 断句流式 + 端到端 800ms",
  "5 大地域口音识别",
  "App-Aware 自动匹配模板",
  "E2EE 多端同步(可选)",
];

const requirements = [
  ["系统", "macOS 12.0 Monterey 或更高"],
  ["架构", "Apple Silicon (M1/M2/M3) · Intel x86_64"],
  ["内存", "建议 8 GB RAM"],
  ["存储", "100 MB 可用空间"],
  ["网络", "无需联网（完全离线）"],
  ["授权", "麦克风 + 辅助功能（首次启动引导）"],
];

const installSteps = [
  "下载 san-shunxie-1.4.0.dmg（约 18 MB）",
  "双击 .dmg 文件，将 san 瞬写拖入「应用程序」文件夹",
  "在「应用程序」文件夹双击启动 san 瞬写",
  "首次启动会引导 4 项系统授权：麦克风、辅助功能、通讯录、通知",
  "授权完成后即可使用 ⌥+Space 唤醒语音输入",
];

const faqs = [
  {
    q: "提示「无法打开，因为来自身份不明的开发者」怎么办？",
    a: "在「系统设置 → 隐私与安全性」最下方点击「仍要打开」。san 瞬写使用 Apple 开发者证书签名，首次启动需要一次手动确认。",
  },
  {
    q: "支持哪些 macOS 版本？",
    a: "支持 macOS 12 Monterey 及以上。macOS 11 Big Sur 及更早版本不支持。如果你的系统太旧，请先升级 macOS。",
  },
  {
    q: "Apple Silicon 和 Intel 怎么选？",
    a: "Mac App Store 安装包已是 universal binary,Apple Silicon 和 Intel 在同一个文件里,无需选择。M1/M2/M3 用户会自动用 ARM 架构运行。",
  },
  {
    q: "如何完全卸载？",
    a: "在「应用程序」文件夹把 san 瞬写拖到废纸篓即可。所有偏好设置存储在 ~/Library/Application Support/san-shunxie，删除应用后会自动清理。",
  },
];

export default function MacDownloadPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Hero + 大下载按钮 */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--subtle)]">
              Download for macOS
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">
              <span className="text-3xl sm:text-4xl">🍎</span> macOS 版下载
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Apple Silicon / Intel 双架构原生支持。端侧运行、零数据上传、永久免费版可用。
            </p>

            {/* 主下载按钮：Mac App Store */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="https://apps.apple.com/app/sanshunxie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="text-white">在 Mac App Store 打开</span>
                <svg
                  className="h-3.5 w-3.5 -translate-y-0.5 text-white/60"
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
              <p className="text-xs text-[var(--subtle)]">
                通过 Mac App Store 安装 · 系统要求 macOS 12+
              </p>
            </div>
          </div>
        </section>

        {/* 核心特性 */}
        <section className="border-b border-[var(--line)] bg-[#fafafa] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-semibold text-[#111] sm:text-3xl">核心特性</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3"
                >
                  <span className="mt-0.5 text-emerald-500">✓</span>
                  <span className="text-sm text-[#111]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 系统要求 */}
        <section className="border-b border-[var(--line)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-semibold text-[#111] sm:text-3xl">系统要求</h2>
            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {requirements.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col border-b border-[var(--line)] pb-3"
                >
                  <dt className="text-xs uppercase tracking-wider text-[var(--subtle)]">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm text-[#111]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 安装步骤 */}
        <section className="border-b border-[var(--line)] bg-[#fafafa] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-semibold text-[#111] sm:text-3xl">5 步安装</h2>
            <ol className="mt-6 space-y-3">
              {installSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-[var(--line)] bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-[#111]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-semibold text-[#111] sm:text-3xl">常见问题</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
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

        {/* 底部其他平台 */}
        <section className="border-t border-[var(--line)] py-12">
          <div className="mx-auto max-w-3xl px-6 text-center text-sm text-[var(--subtle)]">
            其他平台：
            <Link href="/download/windows" className="ml-2 text-[#111] underline underline-offset-4">
              Windows
            </Link>
            ·
            <Link href="/download/android" className="ml-2 text-[#111] underline underline-offset-4">
              Android
            </Link>
            ·
            <Link href="/download" className="ml-2 text-[#111] underline underline-offset-4">
              返回下载总览
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}