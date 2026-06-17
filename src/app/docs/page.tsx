import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用文档",
  description: "san 瞬写使用文档。安装、配置、快捷键、模板定制等完整说明。",
};

const docCategories = [
  {
    title: "快速开始",
    icon: "🚀",
    bg: "bg-[var(--accent-mint)]",
    items: [
      { label: "macOS 安装与首次启动", desc: "DMG 下载、辅助功能授权、麦克风授权", href: "/docs/install-mac" },
      { label: "Windows 安装与首次启动", desc: "EXE 下载、托盘常驻、麦克风授权", href: "/docs/install-windows" },
      { label: "5 分钟快速体验", desc: "全局热键、模板、口音切换一气呵成", href: "/docs/quickstart" },
    ],
  },
  {
    title: "核心功能",
    icon: "🎙️",
    bg: "bg-[var(--accent-sky)]",
    items: [
      { label: "语音录制与转写", desc: "16kHz PCM、实时上屏、端到端 < 800ms", href: "/docs/recording" },
      { label: "5 大地域口音切换", desc: "川渝 / 东北 / 粤普 / 江浙 / 西北 适配方法", href: "/docs/accent" },
      { label: "宿主应用感知", desc: "自动识别 20+ 职场 App，匹配 Prompt 模板", href: "/docs/app-aware" },
      { label: "端侧动态 RAG", desc: "本地词典、通讯录授权、剪贴板快照", href: "/docs/rag" },
    ],
  },
  {
    title: "快捷键",
    icon: "⌘",
    bg: "bg-[var(--accent-peach)]",
    items: [
      { label: "全局快捷键", desc: "默认 ⌘+⇧+S 唤起录音，可自定义", href: "/docs/hotkeys" },
      { label: "双击修饰键", desc: "双击 ⌘ 唤起魔法棒 / 双击 ⌥ 一键回滚", href: "/docs/double-tap" },
      { label: "Hyperkey 自定义", desc: "⌃⌥⌘ 三键合一 Hyper 键，绑定任意动作", href: "/docs/hyperkey" },
    ],
  },
  {
    title: "高级",
    icon: "✨",
    bg: "bg-[var(--accent-lilac)]",
    items: [
      { label: "E2EE 多端同步", desc: "iCloud / OneDrive / WebDAV 三选一", href: "/docs/e2ee" },
      { label: "免动手语音指令", desc: "30+ 高频指令白名单，自定义前缀", href: "/docs/voice-commands" },
      { label: "端侧声纹", desc: "2-4 人会议 DER ≤ 18%，离线处理", href: "/docs/speaker" },
      { label: "电池能效自适应", desc: "30/15/5% 三档自动降级", href: "/docs/battery" },
    ],
  },
  {
    title: "故障排查",
    icon: "🛠",
    bg: "bg-[#fafafa]",
    items: [
      { label: "ASR 转写不准", desc: "口音热词、麦克风采样率、噪音排查", href: "/docs/trouble-asr" },
      { label: "LLM 整理卡顿", desc: "设备分档、Q3_K_S 轻量化、回退方案", href: "/docs/trouble-llm" },
      { label: "E2EE 同步失败", desc: "PIN 错误、助记词、云盘授权", href: "/docs/trouble-sync" },
    ],
  },
  {
    title: "开发与扩展",
    icon: "🔧",
    bg: "bg-[#fafafa]",
    items: [
      { label: "C/C++ AI 引擎接入", desc: "sherpa-onnx + llama.cpp 自定义编译", href: "/docs/ai-engine" },
      { label: "自定义 App-Aware 模板", desc: "为新 App 添加 Prompt 模板", href: "/docs/custom-template" },
      { label: "OpenAPI 文档（云后端）", desc: "会员 / 支付 / 设备绑定 API", href: "/docs/api" },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Documentation</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              使用文档
            </h1>
            <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
              从安装到高级配置，san 瞬写的完整使用说明。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/docs/quickstart"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <span className="text-white">5 分钟快速开始 →</span>
              </Link>
              <Link
                href="/download"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 text-sm font-medium text-[#111] transition-colors hover:bg-black/[.03]"
              >
                下载客户端
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {docCategories.map((cat) => (
                <div key={cat.title} className="rounded-2xl border border-[var(--line)] p-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl ${cat.bg}`}>
                      {cat.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-[#111]">{cat.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {cat.items.map((it) => (
                      <li key={it.label}>
                        <Link
                          href={it.href}
                          className="group block rounded-lg p-2 -m-2 transition-colors hover:bg-black/[.02]"
                        >
                          <div className="text-sm font-medium text-[#111] group-hover:underline">
                            {it.label} →
                          </div>
                          <div className="mt-0.5 text-xs text-[var(--subtle)]">{it.desc}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-[var(--line)] bg-[#fafafa] p-8 text-center">
              <h3 className="text-lg font-semibold text-[#111]">找不到答案？</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                发邮件至{" "}
                <a href="mailto:support@sanshunxie.com" className="text-[#111] underline">
                  support@sanshunxie.com
                </a>{" "}
                ，我们 24 小时内回复。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
