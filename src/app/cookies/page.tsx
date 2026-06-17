import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie 政策",
  description: "san 瞬写使用的 Cookie 与本地存储说明。",
};

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-[var(--subtle)]">
            最后更新：2026 年 6 月 15 日
          </p>
          <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#111]">
            Cookie 政策
          </h1>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            san 瞬写尊重你的隐私。本 Cookie 政策说明我们在网站和服务中使用的 Cookie 与本地存储技术。
          </p>

          <Section title="什么是 Cookie？">
            <p>
              Cookie 是浏览器存储在你设备上的小型文本文件。本地存储（LocalStorage）是浏览器提供的另一种客户端存储方式。
              我们使用这些技术来记住你的偏好、维持登录状态、统计数据使用情况。
            </p>
          </Section>

          <Section title="我们使用的 Cookie 类型">
            <p>我们的网站主要使用以下 Cookie：</p>
            <ul>
              <li>
                <strong>必要 Cookie</strong>：用于维持你的登录状态、保存购物车、记录会员权益。
                关闭后你将无法正常使用会员服务。
              </li>
              <li>
                <strong>偏好 Cookie</strong>：用于记住你的语言、主题色、字号等偏好设置。
              </li>
              <li>
                <strong>分析 Cookie</strong>：用于统计网站访问量、用户行为数据。
                我们使用<strong>Plausible / Umami</strong>（隐私合规友好的开源分析工具），
                不收集个人身份信息。
              </li>
            </ul>
          </Section>

          <Section title="我们<strong>不</strong>使用的 Cookie「>
            <ul>
              <li>跨站追踪 Cookie</li>
              <li>第三方广告 Cookie</li>
              <li>Facebook Pixel、Google Ads 等广告追踪</li>
            </ul>
          </Section>

          <Section title=」如何管理 Cookie？">
            <p>你可以通过以下方式管理 Cookie：</p>
            <ul>
              <li>
                <strong>浏览器设置</strong>：在浏览器偏好中查看、删除、阻止特定 Cookie
              </li>
              <li>
                <strong>本站偏好</strong>：在
                <Link href="/download" className="text-[#111] underline">
                  下载客户端
                </Link>
                偏好设置中可选择性关闭非必要 Cookie
              </li>
              <li>
                <strong>隐私浏览模式</strong>：使用浏览器无痕模式，所有 Cookie 关闭后即清除
              </li>
            </ul>
          </Section>

          <Section title="本地存储（LocalStorage）">
            <p>
              我们的客户端 App 在你的设备上使用本地存储保存：
            </p>
            <ul>
              <li>本地专属词典（你的个人热词库）</li>
              <li>历史文稿（仅本地，不上传）</li>
              <li>用户偏好设置</li>
              <li>App-Aware 模板缓存</li>
            </ul>
            <p>
              <strong>你随时可以清除这些数据</strong>：在 App 偏好设置中点击「清除所有本地数据」。
            </p>
          </Section>

          <Section title="相关文档">
            <ul>
              <li>
                <Link href="/privacy" className="text-[#111] underline">
                  隐私协议
                </Link>
                — 详细说明我们如何处理你的数据
              </li>
              <li>
                <Link href="/dpa" className="text-[#111] underline">
                  数据处理协议（DPA）
                </Link>
                — 面向企业客户的数据处理协议
              </li>
            </ul>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[#111]">{title}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--muted)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-1 [&_strong]:text-[#111]">
        {children}
      </div>
    </section>
  );
}
