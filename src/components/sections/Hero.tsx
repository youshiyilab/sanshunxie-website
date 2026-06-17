import Link from "next/link";
import { HeroDemo } from "./HeroDemo";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      {/* 微妙渐变光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(200, 220, 255, 0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(255, 230, 200, 0.12) 0%, transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* 主标题 */}
          <h1 className="text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-7xl lg:text-8xl">
            说话，
            <br className="sm:hidden" />
            别再打字
          </h1>

          {/* 副标题—产品一句定位 */}
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            国内首款端侧原生、零数据上传的 AI 语音生产力工具。
            <br />
            开口说话，自动净化为结构文稿 — 比打字快 4 倍。
          </p>

          {/* 关键数据 */}
          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-[var(--subtle)]">
            <span>
              <strong className="text-[#111]">4×</strong> 快于键盘
            </span>
            <span>
              每周省下 <strong className="text-[#111]">1 天</strong>
            </span>
            <span className="hidden sm:inline">
              <strong className="text-[#111]">220</strong> 字/分钟
            </span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/download"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-[15px] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] sm:w-auto"
            >
              <span className="text-white">免费下载</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-6 text-[15px] font-medium text-[#111] transition-all hover:bg-black/[.03] active:scale-[0.98] sm:w-auto"
            >
              查看定价
            </Link>
          </div>
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}
