import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款",
  description: "san 瞬写服务使用条款。",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-[var(--subtle)]">
            最后更新：2026 年 6 月 15 日
          </p>
          <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#111]">
            服务条款
          </h1>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            欢迎使用 san 瞬写（以下简称「本服务」）。本服务由 san 瞬写团队（以下简称"我们"）提供。
            请仔细阅读以下条款，使用本服务即视为你同意这些条款。
          </p>

          <Section title="1. 服务说明">
            <p>
              san 瞬写是一款端侧原生 AI 语音生产力工具，提供语音转文字、智能文本整理、口音识别、多端同步等功能。
              本服务采用<strong>端侧优先架构</strong>，默认情况下你的语音、文字、文稿内容不会上传到我们的服务器。
            </p>
          </Section>

          <Section title="2. 账号与会员">
            <ul>
              <li>你需提供真实有效的信息注册账号</li>
              <li>会员权益自付款成功之时起生效</li>
              <li>月付会员可随时取消，次月起不再扣费</li>
              <li>年付 / 终身会员购买后 30 天内可申请退款（需未深度使用）</li>
              <li>终身会员限量 1000 名，售完即止</li>
            </ul>
          </Section>

          <Section title="3. 端侧架构承诺">
            <p>本服务的核心承诺是<strong>数据不离开你的设备</strong>：</p>
            <ul>
              <li>原始语音、文字、文稿内容默认全部本地处理</li>
              <li>云端仅存储：用户 ID、会员状态、设备绑定、支付记录</li>
              <li>多端同步（E2EE）采用用户自有云盘中转，密钥永不离开设备</li>
            </ul>
          </Section>

          <Section title="4. 用户行为规范">
            <p>你承诺不会利用本服务：</p>
            <ul>
              <li>从事违反中国法律法规的活动</li>
              <li>传播违法、违规、违反公序良俗的内容</li>
              <li>侵犯他人知识产权或其他合法权益</li>
              <li>对服务进行反向工程、攻击或干扰</li>
              <li>商业转售、倒卖会员权益</li>
            </ul>
          </Section>

          <Section title="5. 知识产权">
            <ul>
              <li>本服务的软件、UI 设计、品牌资产归我们所有</li>
              <li>你通过本服务生成的内容（文稿、笔记等）归你所有</li>
              <li>我们<strong>不会</strong>使用你的内容训练任何模型</li>
            </ul>
          </Section>

          <Section title="6. 服务变更与终止">
            <ul>
              <li>我们保留随时更新本服务的权利（重大变更会提前通知）</li>
              <li>如你严重违反本条款，我们可以暂停或终止你的账号</li>
              <li>账号终止后，已支付的会员费用将按比例退还</li>
            </ul>
          </Section>

          <Section title="7. 免责说明">
            <p>本服务按「现状」提供。在法律允许的范围内，我们不对以下情况承担责任：</p>
            <ul>
              <li>因网络、设备故障导致的服务中断</li>
              <li>因第三方（云盘、支付渠道）导致的问题</li>
              <li>因你使用不当造成的数据丢失</li>
            </ul>
          </Section>

          <Section title="8. 法律适用">
            <p>本条款适用中华人民共和国法律。如发生争议，双方应友好协商解决；协商不成的，提交深圳市仲裁委员会仲裁。</p>
          </Section>

          <Section title="9. 联系方式">
            <p>
              如有疑问，请联系：
              <br />
              邮箱：
              <a href="mailto:legal@sanshunxie.com" className="text-[#111] underline">
                legal@sanshunxie.com
              </a>
            </p>
          </Section>

          <div className="mt-16 rounded-2xl border border-[var(--line)] bg-[#fafafa] p-6 text-sm text-[var(--muted)]">
            提示：我们的
            <Link href="/privacy" className="text-[#111] underline">
              隐私协议
            </Link>
            详细说明了我们如何处理你的数据。
          </div>
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
