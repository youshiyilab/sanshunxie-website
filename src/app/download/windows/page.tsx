import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "下载 Windows 版",
  description:
    "下载 san 瞬写 Windows 客户端。Win10/11 原生支持，x64 + arm64 双架构。端侧 AI 语音生产力工具。",
};

const features = [
  "系统托盘 App + 全局快捷键",
  "x64 + arm64 双架构原生支持",
  "VAD 断句流式 + 端到端 800ms",
  "5 大地域口音识别",
  "App-Aware 自动匹配模板",
  "E2EE 多端同步(可选)",
];

const requirements = [
  ["系统", "Windows 10 1909 或更高"],
  ["架构", "x64 · arm64"],
  ["内存", "建议 8 GB RAM"],
  ["存储", "120 MB 可用空间"],
  ["网络", "无需联网（完全离线）"],
  ["授权", "麦克风（首次启动引导）"],
];

const installSteps = [
  "下载 san-shunxie-1.4.0.exe（约 22 MB）",
  "双击 .exe 文件，Windows 会弹出 UAC（用户账户控制）提示",
  "点击「是」允许安装程序提权",
  "选择安装路径（默认 C:\\Program Files\\san 瞬写）",
  "安装完成后，san 瞬写会自动启动并常驻系统托盘",
  "右键托盘图标打开设置，用 Win+Alt+Space 唤醒语音输入",
];

const faqs = [
  {
    q: "Windows Defender 提示「无法识别的应用」怎么办？",
    a: "点击「更多信息」→「仍要运行」。san 瞬写使用 EV 代码签名证书，但 Windows SmartScreen 在新发布版本时仍可能提示。这是正常的，第二次运行就不会再提示。",
  },
  {
    q: "支持 Windows 7 / 8.1 吗？",
    a: "不支持。最低支持 Windows 10 1909。Win7/8.1 缺失系统级 API(如 Windows.Media.SpeechRecognition)无法运行。",
  },
  {
    q: "如何彻底卸载？",
    a: "设置 → 应用 → 应用和功能 → 找到「san 瞬写」→ 卸载。所有偏好设置存储在 %APPDATA%\\san-shunxie，卸载时会自动清理。",
  },
  {
    q: "Win+Alt+Space 按不出来？",
    a: "可能被其他软件占用了。在 san 瞬写设置里改成你喜欢的组合键（建议用修饰键 + Space 之类的不冲突键位）。",
  },
];

export default function WindowsDownloadPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--subtle)]">
              Download for Windows
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">
              <span className="text-3xl sm:text-4xl">🪟</span> Windows 版下载
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Win10/11 原生支持，x64 + arm64 双架构。端侧运行、零数据上传、永久免费版可用。
            </p>

            {/* 主下载按钮：Microsoft Store */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="text-white">在 Microsoft Store 打开</span>
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
                通过 Microsoft Store 安装 · 系统要求 Win10 1909+
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
            <h2 className="text-2xl font-semibold text-[#111] sm:text-3xl">6 步安装</h2>
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

        {/* 底部 */}
        <section className="border-t border-[var(--line)] py-12">
          <div className="mx-auto max-w-3xl px-6 text-center text-sm text-[var(--subtle)]">
            其他平台：
            <Link href="/download/mac" className="ml-2 text-[#111] underline underline-offset-4">
              macOS
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