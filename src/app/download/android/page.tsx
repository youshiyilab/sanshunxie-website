import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "下载 Android 版",
  description:
    "san 瞬写 Android 版。Jetpack Compose 原生，端侧 AI 语音生产力工具，零数据上传。",
};

const features = [
  "端侧 AI 推理，零数据上传",
  "5 大地域口音普通话增强",
  "VAD 断句流式 + 端到端 800ms",
  "App-Aware 自动匹配模板",
  "E2EE 多端同步(可选)",
  "国产 ROM 适配(华为/小米/OPPO/vivo)",
];

const requirements = [
  ["系统", "Android 10+ (API Level 29)"],
  ["架构", "arm64-v8a · x86_64"],
  ["内存", "建议 4 GB RAM"],
  ["存储", "80 MB 可用空间"],
  ["网络", "无需联网（完全离线）"],
  ["授权", "麦克风 + 通知（首次启动引导）"],
];

const faqs = [
  {
    q: "支持鸿蒙 / HarmonyOS 吗？",
    a: "HarmonyOS 通过 Android 兼容层自动适配。原生 HarmonyOS NEXT 版本敬请期待。",
  },
  {
    q: "需要 GMS（谷歌服务）吗？",
    a: "不需要。san 瞬写完全本地运行，不依赖任何谷歌服务。国行 ROM（包括无 GMS 的华为鸿蒙）完全可用。",
  },
  {
    q: "支持哪些应用商店？",
    a: "将通过华为应用市场、小米应用商店、OPPO 软件商店、vivo 应用商店以及 Google Play 上架。",
  },
  {
    q: "iOS 版什么时候发布？",
    a: "iOS 版与 Android 版同期推进，敬请期待。",
  },
];

export default function AndroidDownloadPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--subtle)]">
              Download for Android
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">
              <span className="text-3xl sm:text-4xl">🤖</span> Android 版
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Jetpack Compose 原生，端侧 AI 推理，零数据上传。敬请期待。
            </p>

            {/* 主 CTA：敬请期待 */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <span
                className="inline-flex h-14 w-full max-w-sm cursor-not-allowed items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[#fafafa] px-8 text-base font-semibold text-[var(--subtle)]"
                aria-disabled="true"
              >
                敬请期待
              </span>
              <p className="text-xs text-[var(--subtle)]">
                系统要求 Android 10+
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

        {/* 底部 */}
        <section className="border-t border-[var(--line)] py-12">
          <div className="mx-auto max-w-3xl px-6 text-center text-sm text-[var(--subtle)]">
            其他平台：
            <Link href="/download/mac" className="ml-2 text-[#111] underline underline-offset-4">
              macOS
            </Link>
            ·
            <Link href="/download/windows" className="ml-2 text-[#111] underline underline-offset-4">
              Windows
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
