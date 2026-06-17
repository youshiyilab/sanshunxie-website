/**
 * Pricing 页 Hero
 * 极简风格：仅中部标题，OS 检测在后台自动完成
 */
import Link from "next/link";

export function PricingHero() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <p className="text-sm font-medium text-[var(--subtle)]">Pricing</p>
        <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl lg:text-7xl">
          选择你的方案
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)]">
          国内首款端侧原生 AI 语音生产力工具。
          <br className="hidden sm:block" />
          免费版永久可用，价格仅为海外对标产品的 1/10。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#plans-features"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-6 text-[15px] font-medium text-[#111] transition-all hover:bg-black/[.03] active:scale-[0.98] sm:w-auto"
          >
            对比全部功能 ↓
          </Link>
        </div>
        <p className="mt-6 text-xs text-[var(--subtle)]">
          支持微信 / 支付宝 / 苹果内购 / 应用商店支付
        </p>
      </div>
    </section>
  );
}
