import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "媒体素材",
  description: "san 瞬写品牌素材包：Logo、配色、字体、截图、视频。",
};

const assets = [
  {
    name: "Logo PNG（透明底 512×512）",
    desc: "用于 App 图标、官网、Favicon",
    size: "329 KB",
    file: "/san-shunxie-logo-512.png",
  },
  {
    name: "Logo PNG（透明底 256×256）",
    desc: "用于文档、PPT、小尺寸展示",
    size: "82 KB",
    file: "/san-shunxie-logo-256.png",
  },
  {
    name: "Open Graph 分享图",
    desc: "社交分享 1200×630 PNG",
    size: "动态生成",
    file: "/og",
  },
  {
    name: "Wordmark 矢量 SVG",
    desc: "用于印刷品、衍生品、徽章",
    size: "待上传",
    file: "#",
  },
];

const facts = [
  { k: "公司全称", v: "san 瞬写 / San Shunxie" },
  { k: "产品定位", v: "国内首款端侧原生 AI 语音生产力工具" },
  { k: "成立时间", v: "2025 年" },
  { k: "总部", v: "深圳" },
  { k: "团队规模", v: "1-2 人" },
  { k: "核心壁垒", v: "端侧架构 + 五大地域口音 + 端侧 RAG + E2EE 同步" },
  { k: "主色（#111）", v: "深空黑" },
  { k: "强调色", v: "#FFD700（金）/ #0066FF（蓝）" },
  { k: "字体（英文）", v: "Inter" },
  { k: "字体（中文）", v: "PingFang SC / 思源黑体" },
];

export default function PressPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Press kit</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              媒体素材
            </h1>
            <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
              媒体、博主、合作伙伴的素材包。下载 Logo、产品截图、品牌资料。
            </p>
            <p className="mt-4 text-sm text-[var(--subtle)]">
              商业使用请先联系：
              <a href="mailto:press@sanshunxie.com" className="text-[#111] underline">
                press@sanshunxie.com
              </a>
            </p>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111]">品牌资产下载</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {assets.map((a) => (
                <a
                  key={a.name}
                  href={a.file}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-mint)] text-xl">
                    📦
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#111]">{a.name}</div>
                    <div className="text-xs text-[var(--subtle)]">{a.desc} · {a.size}</div>
                  </div>
                  <span className="text-[#111] opacity-0 transition-opacity group-hover:opacity-100">
                    下载 →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111]">品牌速览</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)]">
              <table className="w-full">
                <tbody>
                  {facts.map((f, i) => (
                    <tr key={f.k} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                      <td className="w-1/3 border-b border-[var(--line)] px-5 py-3 text-sm font-medium text-[#111]">
                        {f.k}
                      </td>
                      <td className="border-b border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)]">
                        {f.v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111]">媒体报道</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              暂无媒体报道合集。
              <br />
              后续有合作机会我们会整理在此。
            </p>
            <Link
              href="/download"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-4 text-sm font-medium text-[#111] transition-colors hover:bg-black/[.03]"
            >
              下载体验
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
