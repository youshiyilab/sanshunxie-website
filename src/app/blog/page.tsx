import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "开发日志",
  description: "san 瞬写开发日志，记录产品演进、技术决策与团队思考。",
};

const posts = [
  {
    title: "为什么我们坚持端侧优先？",
    excerpt:
      "在云端 AI 工具大行其道的今天，我们为什么选择把 AI 推理全部留在用户设备上？本文从隐私、性能、成本三个维度阐述我们的工程决策。",
    date: "2026-06-12",
    category: "技术决策",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "VAD 断句流式并行：把端到端延迟从 5s 压到 800ms",
    excerpt:
      "VAD 双线程管线、ASR/LLM 并行调度、KV-Cache 复用等十余处工程优化,把端到端规整延迟从 5-7s 压缩到 800ms 级别。",
    date: "2026-05-28",
    category: "工程",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    title: "五大地域口音识别：从数据到部署",
    excerpt:
      "我们如何为川渝 / 东北 / 两广 / 江浙 / 西北 5 大口音构建专用热词库和提示词规则。深度访谈、众包采集、零模型改动的落地思路。",
    date: "2026-05-15",
    category: "产品",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    title: "E2EE 多端同步：为什么我们不运营同步服务器",
    excerpt:
      "Argon2id + AES-256-GCM + BIP-39 + 用户自有云盘——详解如何实现零知识云端同步,密钥永不离开用户设备。",
    date: "2026-04-22",
    category: "工程",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    title: "1-2 人小团队的产品方法论",
    excerpt:
      "我们如何在没有融资的情况下，从 0 到 1 推出 san 瞬写 MVP。包含阶段划分、止损线、用户访谈、真实反馈驱动开发的方法。",
    date: "2026-03-30",
    category: "团队",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "为什么我们用 sherpa-onnx 而不是 whisper.cpp",
    excerpt:
      "技术选型不只比较性能，更要匹配业务。详解我们如何在端侧推理方案中选型，以及 SenseVoice-small 比 Whisper 在中文场景的优势。",
    date: "2026-03-12",
    category: "技术决策",
    bg: "bg-[var(--accent-sky)]",
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Blog</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              开发日志
            </h1>
            <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
              记录 san 瞬写的产品演进、技术决策与团队思考。
              <br />
              我们相信透明的开发过程是最好的信任建立方式。
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((p, i) => (
                <article
                  key={i}
                  className={`group rounded-2xl ${p.bg} p-7 transition-transform hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 text-xs text-[#111]/60">
                    <span className="font-medium uppercase tracking-wider">{p.category}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#111]">
                    <Link href="#" className="hover:underline">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#111]/75">
                    {p.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center text-sm font-medium text-[#111] hover:underline"
                  >
                    阅读全文 →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-[var(--line)] bg-[#fafafa] p-8 text-center">
              <h3 className="text-lg font-semibold text-[#111]">订阅更新</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                我们每 2 周发布一篇深度技术文章。订阅邮件，每周最多 1 封，绝不打扰。
              </p>
              <Link
                href="mailto:hi@sanshunxie.com?subject=订阅开发日志"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <span className="text-white">订阅邮件</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
