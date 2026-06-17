import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "开通 san 瞬写",
  description: "开通 san 瞬写 Pro 会员，通过 App 内购安全订阅。",
};

// 静态导出:预生成 3 个套餐页面
export function generateStaticParams() {
  return [
    { plan: "monthly" },
    { plan: "yearly" },
    { plan: "lifetime" },
  ];
}

const plans: Record<string, {
  name: string;
  price: string;
  period: string;
  highlight: string;
  channels: { name: string; desc: string; icon: string; href?: string }[];
}> = {
  monthly: {
    name: "月付会员",
    price: "¥19",
    period: "/月",
    highlight: "短期灵活，按月付费随时取消",
    channels: [
      {
        name: "macOS App 内购",
        desc: "在 Mac App Store 订阅 · 自动续期 · 随时取消",
        icon: "🍎",
        href: "https://apps.apple.com/app/sanshunxie",
      },
      {
        name: "Windows App 内购",
        desc: "在 Microsoft Store 订阅 · 自动续期 · 随时取消",
        icon: "🪟",
        href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
      },
      {
        name: "企业批量采购",
        desc: "对公转账 / 企业发票 / 团队授权",
        icon: "💼",
        href: "mailto:enterprise@sanshunxie.com?subject=企业批量采购咨询",
      },
    ],
  },
  yearly: {
    name: "年付会员",
    price: "¥198",
    period: "/年",
    highlight: "年付立省 13%，折合 ¥16.5 / 月",
    channels: [
      {
        name: "macOS App 内购",
        desc: "在 Mac App Store 订阅 · 自动续期 · 随时取消",
        icon: "🍎",
        href: "https://apps.apple.com/app/sanshunxie",
      },
      {
        name: "Windows App 内购",
        desc: "在 Microsoft Store 订阅 · 自动续期 · 随时取消",
        icon: "🪟",
        href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
      },
      {
        name: "企业批量采购",
        desc: "对公转账 / 企业发票 / 团队授权",
        icon: "💼",
        href: "mailto:enterprise@sanshunxie.com?subject=企业批量采购咨询",
      },
    ],
  },
  lifetime: {
    name: "终身会员",
    price: "¥398",
    period: "限量 1000 名",
    highlight: "永久解锁全部 Pro 权益，限量 1000 名",
    channels: [
      {
        name: "macOS App 内购",
        desc: "在 Mac App Store 一次性购买 · 永久有效",
        icon: "🍎",
        href: "https://apps.apple.com/app/sanshunxie",
      },
      {
        name: "Windows App 内购",
        desc: "在 Microsoft Store 一次性购买 · 永久有效",
        icon: "🪟",
        href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
      },
      {
        name: "企业批量采购",
        desc: "对公转账 / 企业发票 / 团队授权",
        icon: "💼",
        href: "mailto:enterprise@sanshunxie.com?subject=终身会员企业采购",
      },
    ],
  },
};

export default async function ActivatePage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;
  const data = plans[plan];
  if (!data) notFound();

  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Checkout</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
              开通 {data.name}
            </h1>
            <div className="mt-5 inline-flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-[#111]">{data.price}</span>
              <span className="text-base text-[var(--subtle)]">{data.period}</span>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{data.highlight}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111]">选择购买方式</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              san 瞬写 Pro 会员通过各平台官方应用商店开通。订阅后立即生效，可在「设置 → 会员」中管理。
            </p>
            <div className="mt-8 space-y-3">
              {data.channels.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-mint)] text-2xl">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#111]">{c.name}</div>
                    <div className="text-sm text-[var(--muted)]">{c.desc}</div>
                  </div>
                  <span className="inline-flex h-9 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white transition-colors group-hover:bg-zinc-800">
                    <span className="text-white">
                      {c.name.includes("企业") ? "联系商务" : "前往购买"} →
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--line)] bg-[#fafafa] p-6">
              <h3 className="text-base font-semibold text-[#111]">会员权益</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
                <li>· AI 语音整理无限额度</li>
                <li>· 30+ 职场模板（微信/飞书/Outlook/Notion 等）</li>
                <li>· 5 大地域口音普通话增强（川渝 / 东北 / 两广 / 江浙 / 西北）</li>
                <li>· 自定义 AI 指令 · 端侧声纹分割(2-4 人会议)</li>
                <li>· E2EE 多端同步 · 优先客服支持</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-4 text-sm font-medium text-[#111] transition-colors hover:bg-black/[.03]"
              >
                ← 返回定价页
              </Link>
              <Link
                href="/download"
                className="text-sm text-[var(--subtle)] underline-offset-4 hover:text-[#111] hover:underline"
              >
                还没有客户端？先去下载
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
