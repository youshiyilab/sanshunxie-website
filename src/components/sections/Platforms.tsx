/**
 * 跨平台展示（对标 typeless.com "Your voice, on every device"）
 * 文案提炼自产品方案 V1.6 §6.2 全平台覆盖矩阵
 */

const platforms = [
  {
    name: "macOS",
    desc: "菜单栏常驻 + 全局热键，Metal 加速端侧推理。高净值付费用户首选平台。",
    status: "已发布",
    cta: "在 Mac App Store 打开",
    href: "https://apps.apple.com/app/sanshunxie",
    available: true,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Windows",
    desc: "WinUI 3 原生 + Vulkan 加速。覆盖国内最大办公设备群体。",
    status: "已发布",
    cta: "在 Microsoft Store 打开",
    href: "https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX",
    available: true,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 12V6.5l8-1.09V12H3zm0 .73V18l8-1.09V12.73H3zm8.8.76V18l9-1.22v-5.29h-9zm0-1.49h9V5.97l-9-1.22v5.25z" />
      </svg>
    ),
  },
  {
    name: "iOS",
    desc: "SwiftUI 原生，App Store 全球上架。iOS 键盘扩展，在任何 App 中使用。",
    status: "敬请期待",
    cta: "敬请期待",
    href: "mailto:hi@sanshunxie.com?subject=iOS%20%E5%8F%91%E5%B8%83%E9%80%9A%E7%9F%A5",
    available: false,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Android",
    desc: "Jetpack Compose 原生，华为 / 小米 / OPPO / vivo 全覆盖。",
    status: "敬请期待",
    cta: "敬请期待",
    href: "mailto:hi@sanshunxie.com?subject=Android%20%E5%8F%91%E5%B8%83%E9%80%9A%E7%9F%A5",
    available: false,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 2c.83 0 1.5.67 1.5 1.5v1h1.5A1.5 1.5 0 0 1 21 6v1.5h-1V9h1v1.5h-1V12h1v1.5h-1V15h1v1.5h1V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5H3V15h1.5v-1.5H3V12h1.5v-1.5H3V9h1.5V7.5H3V6A1.5 1.5 0 0 1 4.5 4.5H6v-1C6 2.67 6.67 2 7.5 2h9zM7.5 7.5v9h9v-9h-9zM9 9h1.5v6H9V9zm4.5 0H15v6h-1.5V9z" />
      </svg>
    ),
  },
];

export function Platforms() {
  return (
    <section className="border-b border-[var(--line)] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            Cross-platform
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            你的声音，
            <br />
            在所有设备上
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
            一端编辑的词典、模板、偏好，通过 E2EE 加密同步到你所有设备。
            <br />
            密钥永不离开你的设备。
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => {
            const Card = p.available ? "a" : "div";
            const cardProps = p.available
              ? {
                  href: p.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Card
                key={p.name}
                {...cardProps}
                className={`group relative flex flex-col items-center rounded-2xl border border-[var(--line)] bg-white p-8 text-center transition-all ${
                  p.available
                    ? "hover:border-[var(--line-strong)] hover:shadow-lg hover:-translate-y-1"
                    : "opacity-60"
                }`}
              >
                <span
                  className={`absolute right-3 top-3 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    p.status === "已发布"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-[#fafafa] text-[var(--subtle)]"
                  }`}
                >
                  {p.status}
                </span>

                <div className="text-[#111]">{p.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#111]">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {p.desc}
                </p>
                <span
                  className={`mt-4 text-sm font-medium ${
                    p.available
                      ? "text-[#111] group-hover:underline"
                      : "text-[var(--subtle)]"
                  }`}
                >
                  {p.cta}
                  {p.available && " →"}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
