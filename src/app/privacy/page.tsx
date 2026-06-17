import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私协议",
  description:
    "san 瞬写全端侧离线、零数据上传架构说明。符合《个人信息保护法》与等保三级。",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-[var(--subtle)]">
            最后更新：2026 年 6 月 15 日
          </p>
          <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#111]">
            隐私协议
          </h1>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            san 瞬写（以下简称"我们"）深知隐私对用户的重要性。
            本协议说明我们如何收集、使用、存储和保护你的个人信息。
          </p>

          <div className="prose prose-zinc mt-12 max-w-none">
            <Section title="1. 我们不收集什么">
              <ul>
                <li>
                  <strong>不收集你的语音</strong>：所有语音数据在端侧处理，原始音频不会离开你的设备。
                </li>
                <li>
                  <strong>不收集你的文字</strong>：ASR 转写文本、AI 整理结果、文稿内容均存储在本地。
                </li>
                <li>
                  <strong>不收集你的口音</strong>：口音识别、热词校正、模型微调全部本地完成。
                </li>
              </ul>
            </Section>

            <Section title="2. 我们收集什么">
              <p>仅收集产品运行所必需的最少信息：</p>
              <ul>
                <li>用户 ID（用于会员身份）</li>
                <li>会员状态（用于权益判断）</li>
                <li>设备绑定信息（用于防多端滥用）</li>
                <li>支付记录（用于订单核对）</li>
              </ul>
            </Section>

            <Section title="3. 端侧架构承诺">
              <p>
                san 瞬写采用端侧原生架构，AI 推理在用户设备上完成。
                这意味着：
              </p>
              <ul>
                <li>默认情况下，你的设备与我们的服务器之间不会传输语音、文本、文稿数据。</li>
                <li>我们的服务器不存储、不分析、不训练你的任何内容。</li>
                <li>即使我们的服务器被攻破，攻击者无法获取你的语音、文本、文稿内容。</li>
              </ul>
            </Section>

            <Section title="4. E2EE 同步">
              <p>
                多端同步功能采用端到端加密(E2EE)方案:
              </p>
              <ul>
                <li>加密算法:AES-256-GCM</li>
                <li>密钥派生:Argon2id(内存 64MB,迭代 3 次)</li>
                <li>密钥备份:BIP-39 12 词助记词</li>
                <li>同步通道:iCloud Drive / OneDrive / WebDAV(用户自有云盘)</li>
                <li>
                  <strong>官方不提供任何中转服务器</strong>,加密后的密文由用户云盘中转。
                </li>
              </ul>
            </Section>

            <Section title="5. 剪贴板读取">
              <p>
                为提供端侧动态 RAG 能力,san 瞬写会在语音输入开始前
                静默读取剪贴板纯文本(前 1KB)作为上下文。
              </p>
              <ul>
                <li>读取行为仅在内存中发生，<strong>不落盘</strong>。</li>
                <li>识别完成后立即丢弃。</li>
                <li>检测到密码字段特征时自动跳过注入。</li>
                <li>
                  可在偏好中通过 ⌘+⇧+R 一键暂停剪贴板注入。
                </li>
              </ul>
            </Section>

            <Section title="6. 你的权利">
              <p>你随时拥有以下权利：</p>
              <ul>
                <li>查阅、复制、删除你的个人信息</li>
                <li>撤回同意（撤回后部分功能不可用）</li>
                <li>注销账号</li>
                <li>投诉举报</li>
              </ul>
              <p>
                行使上述权利，请发送邮件至{" "}
                <a
                  href="mailto:privacy@sanshunxie.com"
                  className="text-[#111] underline"
                >
                  privacy@sanshunxie.com
                </a>
                。
              </p>
            </Section>

            <Section title="7. 合规与备案">
              <ul>
                <li>符合《个人信息保护法》（PIPL）</li>
                <li>支持等保三级（未来企业版上线时申请）</li>
                <li>符合 GB/T 35273《信息安全技术 个人信息安全规范》</li>
              </ul>
            </Section>

            <Section title="8. 协议变更">
              <p>
                本协议可能随产品迭代而更新。重大变更将通过站内通知和邮件告知。
              </p>
            </Section>

            <Section title="9. 联系方式">
              <p>
                如有疑问，请联系：
                <br />
                邮箱：{" "}
                <a
                  href="mailto:privacy@sanshunxie.com"
                  className="text-[#111] underline"
                >
                  privacy@sanshunxie.com
                </a>
              </p>
            </Section>
          </div>
        </article>

        <FaqSection
          title="隐私常见问题"
          subtitle="关于端侧架构、数据流向的所有疑问"
          items={[
            {
              q: "我说话的内容会被记录吗？",
              a: "不会。原始语音在你的设备上实时处理，不会上传到我们的服务器。处理完成后立即丢弃。",
            },
            {
              q: "如果你们服务器被攻破了，我的语音会泄露吗？",
              a: "不会。我们的服务器从未接触你的原始语音、文本、文稿。即便被攻破，攻击者拿到的只是：用户 ID、会员状态、设备绑定、支付记录——这些不足以重建你的内容。",
            },
            {
              q: "E2EE 同步的密钥存在哪里？",
              a: "在你的设备上。我们不存储任何同步密钥，密钥永远不会离开你的设备。备份方式是 BIP-39 12 词助记词，需要你自己手抄保存。",
            },
            {
              q: "我启用了剪贴板 RAG，会泄露我的剪贴板内容吗？",
              a: "剪贴板读取仅在内存中临时发生（录音开始前 200ms 读取，识别后立即丢弃），不落盘、不上传、不跨设备同步。密码字段特征会被自动跳过。",
            },
            {
              q: "如果我丢失了助记词，能找回数据吗？",
              a: "不能。E2EE 一旦密钥丢失，数据永远无法恢复（这是「零知识」架构的本质）。建议在首次启用时手抄助记词并妥善保存。",
            },
            {
              q: "我可以导出 / 删除所有数据吗？",
              a: "可以。在 App 偏好设置中可一键清除所有本地数据。账号注销后云端数据会在 30 天内删除。",
            },
          ]}
        />

        <section className="border-t border-[var(--line)] bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--subtle)]">
              相关文档
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "服务条款", desc: "双方权利与义务", href: "/terms" },
                { title: "Cookie 政策", desc: "Cookie 与本地存储", href: "/cookies" },
                { title: "DPA（企业版）", desc: "数据处理协议", href: "/dpa" },
              ].map((l) => (
                <a
                  key={l.title}
                  href={l.href}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
                >
                  <div className="text-base font-semibold text-[#111] group-hover:underline">
                    {l.title} →
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{l.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[#111]">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--muted)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-1 [&_strong]:text-[#111]">
        {children}
      </div>
    </section>
  );
}
