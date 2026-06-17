import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "招贤纳士",
  description: "san 瞬写正在招聘 AI 工程师、客户端工程师、设计师。",
};

const openings = [
  {
    role: "AI 工程师（端侧推理）",
    type: "全职 / 兼职 / 实习",
    location: "深圳 · 远程可",
    bg: "bg-[var(--accent-mint)]",
    skills: [
      "sherpa-onnx / llama.cpp 工程经验",
      "C/C++ 性能优化、ONNX / GGUF 格式理解",
      "ASR / LLM 推理在端侧设备的落地经验",
      "加分：声学模型 / 说话人识别背景",
    ],
    desc: "负责端侧 ASR / LLM / 声纹模型的性能优化、跨平台编译、新模型评估。",
  },
  {
    role: "客户端工程师（macOS / iOS）",
    type: "全职 / 兼职",
    location: "深圳 · 远程可",
    bg: "bg-[var(--accent-sky)]",
    skills: [
      "Swift / SwiftUI / AppKit 深入理解",
      "MenuBarExtra / 沙盒 / Hardened Runtime 经验",
      "AVAudioEngine 实时音频流处理",
      "加分：Metal / CoreML 推理加速经验",
    ],
    desc: "负责 macOS 菜单栏 App、全局热键、双轨 UI 渲染、Mac App Store 提审。",
  },
  {
    role: "客户端工程师（Windows）",
    type: "兼职 / 远程",
    location: "远程",
    bg: "bg-[var(--accent-peach)]",
    skills: [
      "C# / WinUI 3 / WPF 经验",
      "WASAPI 音频采集、Vulkan / DirectML 推理",
      "系统托盘 + 全局热键实现",
      "加分：微软商店上架经验",
    ],
    desc: "负责 Windows 端移植，体验架构全平台对齐 macOS。",
  },
  {
    role: "设计师（产品 + 品牌）",
    type: "兼职 / 远程",
    location: "远程",
    bg: "bg-[var(--accent-lilac)]",
    skills: [
      "Figma 深度使用（Auto Layout / Variables）",
      "图标设计、品牌设计、动效理解",
      "加分：3D / 视频能力",
    ],
    desc: "负责官网、营销素材、App 内 UI 视觉打磨；与产品团队一起做 UX 微迭代。",
  },
  {
    role: "内容运营 / 增长",
    type: "兼职 / 实习",
    location: "深圳 · 远程可",
    bg: "bg-[var(--accent-mint)]",
    skills: [
      "少数派 / V2EX / 即刻 / 小红书 等社区运营经验",
      "技术写作能力、SEO 基础",
      "加分：B 站 UP 主 / 播客主理人",
    ],
    desc: "负责产品发布节奏、社群运营、用户访谈记录。",
  },
];

const perks = [
  { icon: "💰", label: "有竞争力的薪资 + 期权" },
  { icon: "🏠", label: "远程友好，季度线下" },
  { icon: "📚", label: "每年 1 万元学习预算" },
  { icon: "🍱", label: "免费午餐 / 团建基金" },
  { icon: "⏰", label: "弹性工作，无强制坐班" },
  { icon: "🎁", label: "终身会员 + 全产品免费用" },
];

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Careers</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              招贤纳士
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted)]">
              我们正在组建一支小而精的团队。
              <br />
              如果你认同我们的价值观、想做出世界级的中文 AI 工具——欢迎加入。
            </p>
            <a
              href="mailto:careers@sanshunxie.com"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              <span className="text-white">发邮件自荐 →</span>
            </a>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111]">在招职位</h2>
            <p className="mt-3 text-[var(--muted)]">简历请发至 careers@sanshunxie.com</p>
            <div className="mt-8 space-y-5">
              {openings.map((o, i) => (
                <div key={i} className={`rounded-2xl ${o.bg} p-7`}>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl font-semibold text-[#111]">{o.role}</h3>
                    <span className="text-xs text-[#111]/60">{o.type}</span>
                    <span className="text-xs text-[#111]/60">· {o.location}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#111]/80">{o.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {o.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/60 px-2.5 py-1 text-xs text-[#111]/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111]">我们提供</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((p) => (
                <div key={p.label} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                  <div className="text-2xl">{p.icon}</div>
                  <div className="mt-2 text-sm font-medium text-[#111]">{p.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[#fafafa] p-8 text-center">
              <h3 className="text-lg font-semibold text-[#111]">没找到合适职位？</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                我们也欢迎自荐信。即使没有匹配的岗位，你的来信我们也会认真阅读。
              </p>
              <a
                href="mailto:careers@sanshunxie.com"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <span className="text-white">发邮件自荐</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
