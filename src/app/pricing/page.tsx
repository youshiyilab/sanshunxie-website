import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";
import { PricingHero } from "./PricingHero";

export const metadata: Metadata = {
  title: "定价方案",
  description:
    "免费版 / 月付会员 ¥19 / 年付会员 ¥198 / 终身会员 ¥398。端侧 AI 语音生产力工具，价格仅为海外对标产品的 1/10。",
};

// ============== 数据：4 档套餐 ==============
const plans = [
  {
    id: "free",
    name: "免费版",
    tagline: "先体验核心价值",
    price: "¥0",
    period: "永久",
    desc: "永久可用，无广告无弹窗。",
    cta: "下载免费版",
    href: "/download",
    highlight: false,
    features: [
      "首月 3000 字 AI 整理额度",
      "2 个基础模板（会议纪要 / 清单）",
      "3 档基础口音（标准 / 川渝 / 东北）",
      "基础中文键盘",
      "全版本无广告 / 无弹窗",
    ],
  },
  {
    id: "monthly",
    name: "月付会员",
    tagline: "短期灵活",
    price: "¥19",
    period: "/月",
    desc: "按月付费，随时取消。",
    cta: "立即开通",
    href: "/activate/monthly",
    highlight: false,
    features: [
      "AI 语音整理无限额度",
      "全场景职场模板",
      "Pro 自定义 AI 指令",
      "5 区进阶口音包",
      "高阶文本润色",
      "微信 / 支付宝付款",
    ],
  },
  {
    id: "yearly",
    name: "年付会员",
    tagline: "性价比最高",
    price: "¥198",
    period: "/年",
    desc: "折合 ¥16.5 / 月，年付立省 13%。",
    cta: "立即开通",
    href: "/activate/yearly",
    highlight: true,
    badge: "⭐ 最受欢迎",
    features: [
      "包含月付全部权益",
      "年度特惠，省 13%",
      "优先体验新功能",
      "专属用户社群",
      "E2EE 多端同步",
      "端侧声纹分割",
    ],
  },
  {
    id: "lifetime",
    name: "终身会员",
    tagline: "一次性买断",
    price: "¥398",
    period: "限量",
    desc: "永久解锁全部 Pro 权益，限量 1000 名。",
    cta: "立即开通",
    href: "/activate/lifetime",
    highlight: false,
    features: [
      "包含年付全部权益",
      "永久免费迭代更新",
      "终身会员专属徽章",
      "优先客服 1V1",
      "未来新功能永久免费",
      "限量 1000 名",
    ],
  },
];

// ============== Plans features 对比表 ==============
const featureGroups: { title: string; rows: { name: string; free: string | boolean; monthly: string | boolean; yearly: string | boolean; lifetime: string | boolean }[] }[] = [
  {
    title: "核心能力",
    rows: [
      { name: "AI 语音整理额度",            free: "首月 3000 字", monthly: "无限",        yearly: "无限",       lifetime: "无限" },
      { name: "结构化模板",                  free: "2 个",         monthly: "全部",        yearly: "全部",       lifetime: "全部" },
      { name: "宿主应用感知（20+ App）",      free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "自定义 AI 指令",              free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "高阶文本润色 / 改写",          free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
    ],
  },
  {
    title: "口音识别",
    rows: [
      { name: "标准普通话",                  free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "川渝 / 东北（轻量版）",        free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "两广 / 江浙 / 西北（进阶版）",  free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "口音自动检测",                free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
    ],
  },
  {
    title: "流式体验",
    rows: [
      { name: "VAD 断句流式并行",            free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "双轨渐变 + 一键回滚",          free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "魔法棒局部重写（⌘+K）",        free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "端侧动态 RAG（词典 / 通讯录 / 剪贴板）", free: "本地词典", monthly: "三源全开", yearly: "三源全开", lifetime: "三源全开" },
    ],
  },
  {
    title: "高级功能",
    rows: [
      { name: "免动手语音指令（30+ 指令）",    free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "双击修饰键 / Hyperkey 自定义",  free: "—",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "端侧声纹分割（多人会议）",      free: "—",            monthly: "—",           yearly: "✓",          lifetime: "✓" },
      { name: "E2EE 多端同步",                free: "—",            monthly: "—",           yearly: "✓",          lifetime: "✓" },
    ],
  },
  {
    title: "鲁棒性",
    rows: [
      { name: "长文本滑窗保护",               free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "谱聚类 + 重聚类",              free: "—",            monthly: "—",           yearly: "✓",          lifetime: "✓" },
      { name: "电池能效自适应",               free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "强制备份与防呆",                free: "—",            monthly: "—",           yearly: "✓",          lifetime: "✓" },
    ],
  },
  {
    title: "服务与支持",
    rows: [
      { name: "用户社群访问",                 free: "✓",            monthly: "✓",           yearly: "✓",          lifetime: "✓" },
      { name: "客服响应时间",                 free: "72 小时",      monthly: "48 小时",     yearly: "24 小时",    lifetime: "1V1 优先" },
      { name: "终身会员徽章",                 free: "—",            monthly: "—",           yearly: "—",          lifetime: "✓" },
      { name: "新功能优先体验",               free: "—",            monthly: "—",           yearly: "✓",          lifetime: "✓" },
    ],
  },
];

// ============== FAQ ==============
const faqs = [
  {
    q: "为什么这么便宜？",
    a: "端侧 AI 推理无服务器成本，毛利高；本土定价适配国内消费能力；价格仅为 Typeless 等海外对标产品的 1/10。",
  },
  {
    q: "免费版会有广告吗？",
    a: "永远不会。san 瞬写全版本无广告、无弹窗、无推送，是纯工具极简路线。",
  },
  {
    q: "终身会员会被滥用吗？",
    a: "限定 1000 名。¥398 终身是商业化承诺，含永久免费迭代 + 优先客服 1V1。",
  },
  {
    q: "支持微信 / 支付宝付款吗？",
    a: "支持。Mac / Windows 客户端支持微信 + 支付宝；iOS 走 App Store 内购；Android 走应用商店支付。",
  },
  {
    q: "我可以随时升级或降级吗？",
    a: "可以。Pro 会员可随时升级到更高档；降级在下个计费周期生效。年付与终身会员暂不支持降级。",
  },
  {
    q: "数据是否真的不离开我的设备？",
    a: "是。原始语音、文字、文稿内容 100% 端侧处理。云端仅存储：用户 ID、会员状态、设备绑定、支付记录。详见 /privacy。",
  },
  {
    q: "退款政策？",
    a: "月付会员购买后 7 天内可申请全额退款；年付 / 终身会员购买后 30 天内可申请退款（需未深度使用）。",
  },
  {
    q: "企业版 / 团队版怎么计费？",
    a: "支持企业批量授权、团队管理面板、对公转账 / 企业发票。如需咨询,请发邮件至 enterprise@sanshunxie.com。",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PricingHero />

        {/* 4 档套餐卡片 */}
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                    p.highlight
                      ? "border-[#111] bg-[#111] text-white shadow-2xl"
                      : "border-[var(--line)] bg-white text-[#111] hover:border-[var(--line-strong)]"
                  }`}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-medium text-white shadow">
                        {p.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3
                      className={`text-lg font-semibold ${p.highlight ? "text-white" : "text-[#111]"}`}
                    >
                      {p.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${p.highlight ? "text-white/60" : "text-[var(--subtle)]"}`}
                    >
                      {p.tagline}
                    </p>
                    <div className="mt-5 flex items-baseline gap-1">
                      <span
                        className={`text-4xl font-bold tracking-tight ${p.highlight ? "text-white" : "text-[#111]"}`}
                      >
                        {p.price}
                      </span>
                      <span
                        className={`text-sm ${p.highlight ? "text-white/60" : "text-[var(--subtle)]"}`}
                      >
                        {p.period}
                      </span>
                    </div>
                    <p
                      className={`mt-3 text-sm ${p.highlight ? "text-white/70" : "text-[var(--muted)]"}`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${p.highlight ? "text-white/85" : "text-[var(--muted)]"}`}
                      >
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-emerald-400" : "text-emerald-600"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.href}
                    className={`mt-7 inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition-colors active:scale-[0.98] ${
                      p.highlight
                        ? "bg-white text-[#111] hover:bg-white/90"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    <span className={p.highlight ? "text-[#111]" : "text-white"}>
                      {p.cta}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-[var(--subtle)]">
              所有套餐均支持微信 / 支付宝 / 苹果内购 / 应用商店支付
            </p>
          </div>
        </section>

        {/* Plans features 对比表 */}
        <section id="plans-features" className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
                Plans features
              </h2>
              <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
                逐项对比，找到最适合你的版本。
              </p>
            </div>

            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-[34%] border-b border-[var(--line)] py-4 pr-4 text-left text-sm font-semibold text-[#111]">
                      功能
                    </th>
                    <th className="border-b border-l border-[var(--line)] bg-[var(--accent-mint)]/30 py-4 px-4 text-center text-sm font-semibold text-[#111]">
                      免费版
                    </th>
                    <th className="border-b border-l border-[var(--line)] py-4 px-4 text-center text-sm font-semibold text-[#111]">
                      月付
                      <div className="mt-0.5 text-xs font-normal text-[var(--subtle)]">
                        ¥19 / 月
                      </div>
                    </th>
                    <th className="border-b border-l border-[var(--line)] bg-[#111] py-4 px-4 text-center text-sm font-semibold text-white">
                      年付
                      <div className="mt-0.5 text-xs font-normal text-white/70">
                        ¥198 / 年 · ⭐
                      </div>
                    </th>
                    <th className="border-b border-l border-[var(--line)] py-4 px-4 text-center text-sm font-semibold text-[#111]">
                      终身
                      <div className="mt-0.5 text-xs font-normal text-[var(--subtle)]">
                        ¥398 · 限量
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureGroups.map((group) => (
                    <Fragment key={group.title}>
                      <tr>
                        <td
                          colSpan={5}
                          className="border-b border-[var(--line)] bg-[#fafafa] py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]"
                        >
                          {group.title}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={group.title + row.name} className="hover:bg-black/[.01]">
                          <td className="border-b border-[var(--line)] py-3.5 pr-4 text-sm text-[#111]">
                            {row.name}
                          </td>
                          {(
                            [
                              ["free", row.free],
                              ["monthly", row.monthly],
                              ["yearly", row.yearly],
                              ["lifetime", row.lifetime],
                            ] as const
                          ).map(([k, v]) => (
                            <td
                              key={k}
                              className={`border-b border-l border-[var(--line)] px-4 py-3.5 text-center text-sm ${
                                k === "yearly" ? "bg-[#111] text-white" : "text-[#111]"
                              }`}
                            >
                              {typeof v === "boolean" ? (
                                v ? (
                                  <svg
                                    className={`mx-auto h-5 w-5 ${k === "yearly" ? "text-emerald-400" : "text-emerald-600"}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                ) : (
                                  <span className={k === "yearly" ? "text-white/30" : "text-[var(--subtle)]"}>—</span>
                                )
                              ) : (
                                <span
                                  className={
                                    k === "yearly"
                                      ? "text-white/85"
                                      : v === "—"
                                      ? "text-[var(--subtle)]"
                                      : "text-[#111]"
                                  }
                                >
                                  {v}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#fafafa] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
              常见问题
            </h2>
            <div className="mt-12 space-y-3">
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
      </main>
      <Footer />
    </>
  );
}
