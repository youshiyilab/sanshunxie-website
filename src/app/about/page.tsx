import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们",
  description: "san 瞬写团队介绍。我们的使命、价值观与愿景。",
};

const values = [
  {
    icon: "🛡",
    title: "隐私优先",
    desc: "100% 端侧处理、零数据上传。这是我们产品的核心承诺，不可妥协。",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    icon: "🎙",
    title: "中文深度",
    desc: "我们不追求 100 种语言，我们追求 5 大口音普通话做到极致。",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    icon: "✨",
    title: "体验至上",
    desc: "在端侧约束下做到 Wispr Flow / Apple Siri AI 级别的丝滑体验。",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    icon: "🧱",
    title: "工程鲁棒",
    desc: "30 分钟连续口述、差旅断电、PIN 错 5 次——边缘场景不破防。",
    bg: "bg-[var(--accent-lilac)]",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">About</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">
              我们做的，
              <br />
              不是输入法
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted)]">
              san 瞬写是一款端侧原生 AI 语音生产力工具。
              我们想让你开口说话，就能拿到一份能直接发出去的文稿——
              <br />
              不需要手打字、不需要挑模板、不需要担心隐私泄露。
            </p>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111]">我们的价值观</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className={`rounded-2xl ${v.bg} p-7`}>
                  <div className="text-3xl">{v.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-[#111]">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#111]/75">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111]">和我们一起</h2>
            <p className="mt-3 text-[var(--muted)]">
              我们相信好的产品来自持续的反馈循环。
              <br />
              下载体验 / 关注产品进展 / 申请加入团队——总有一种方式参与。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/download"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <span className="text-white">下载客户端</span>
              </Link>
              <Link
                href="/careers"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 text-sm font-medium text-[#111] transition-colors hover:bg-black/[.03]"
              >
                查看职位
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
