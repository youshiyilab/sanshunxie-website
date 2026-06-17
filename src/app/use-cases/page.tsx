import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { useCases, appIconColors } from "@/data/useCases";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用场景 · 20+ 职场 App 模板适配",
  description:
    "微信 / 飞书 / 钉钉 / Notion / Obsidian / Outlook / ChatGPT / VS Code 等 20+ 主流职场 App，宿主应用感知自动切换 Prompt 模板。",
};

export default function UseCasesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Header */}
        <section className="border-b border-[var(--line)] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">
              App-Aware Templates
            </p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              说话的下一站
              <br />
              <span className="text-[var(--muted)]">是哪个 App？</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)]">
              san 瞬写会自动识别你当前活跃的 App，
              切换到对应风格的 Prompt 模板。
              <br />
              覆盖 20+ 主流职场 App，口径统一，无需手动切换。
            </p>
          </div>
        </section>

        {/* 5 大分类 */}
        {useCases.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="border-b border-[var(--line)] py-20 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-10 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--subtle)]">
                    {cat.subtitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
                    {cat.title}
                  </h2>
                </div>
                <span className="text-sm text-[var(--subtle)]">
                  {cat.apps.length} 个 App 模板
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.apps.map((app) => (
                  <Link
                    key={app.en}
                    href="/download"
                    className={`group relative overflow-hidden rounded-2xl ${cat.bg} p-6 transition-all hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo 占位圆 */}
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-white shadow-sm"
                        style={{
                          backgroundColor:
                            appIconColors[app.en] || "#111111",
                        }}
                      >
                        {app.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-[#111]">
                          {app.name}
                        </h3>
                        <p className="text-xs text-[#111]/50">
                          {app.en}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#111]/75">
                      {app.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center rounded-full bg-white/60 px-2.5 py-1 text-xs text-[#111]/70 backdrop-blur">
                      ✦ {app.tone}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-br from-[var(--accent-mint)] via-white to-[var(--accent-sky)] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
              还想适配更多 App？
            </h2>
            <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
              下载客户端告诉我们你常用的 App，
              <br />
              我们会持续扩充模板库,你的反馈会被优先纳入。
            </p>
            <Link
              href="/download"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800"
            >
              <span className="text-white">下载客户端 →</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection
          title="App-Aware 常见问题"
          subtitle="关于宿主应用感知能力的所有疑问"
          items={[
            {
              q: "如何切换 App-Aware 模板？",
              a: "无需手动切换。san 瞬写自动识别你当前活跃的 App，并匹配最佳 Prompt 模板。切换 App 后，下一次停顿会自动嗅探并提示。",
            },
            {
              q: "App-Aware 嗅探会读取我的隐私吗？",
              a: "不会。我们仅嗅探前台进程的 bundleIdentifier / 进程名（macOS / Windows 系统 API），不读取窗口内容、不截屏、不记录操作。",
            },
            {
              q: "可以关闭 App-Aware 吗？",
              a: "可以。在偏好设置中关闭后，san 瞬写回退到「通用职场模板」通用输出。",
            },
            {
              q: "多久会增加新 App 模板？",
              a: "我们持续扩充。用户反馈的 App 优先纳入,每次新增都会在更新日志中说明。",
            },
            {
              q: "模板可以自定义吗？",
              a: "Pro 会员可在偏好中创建自定义 Prompt 模板，绑定到特定 App 进程名。详见 /docs。",
            },
          ]}
        />

        {/* 相关链接 */}
        <section className="border-t border-[var(--line)] bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--subtle)]">
              相关内容
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "定价方案", desc: "免费版 / 月付 / 年付 / 终身", href: "/pricing" },
                { title: "隐私架构", desc: "端侧 + 零数据上传", href: "/privacy" },
                { title: "品牌宣言", desc: "我们为何这样设计", href: "/manifesto" },
              ].map((l) => (
                <Link
                  key={l.title}
                  href={l.href}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
                >
                  <div className="text-base font-semibold text-[#111] group-hover:underline">
                    {l.title} →
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
