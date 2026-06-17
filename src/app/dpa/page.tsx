import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数据处理协议（DPA）",
  description:
    "面向企业客户的数据处理协议（DPA），符合 GDPR / PIPL 合规要求。",
};

const sections: { title: string; content: string[] }[] = [
  {
    title: "1. 定义",
    content: [
      "本协议中「数据控制者」指委托我们处理数据的客户企业；「数据处理者」指 san 瞬写团队；「个人数据」指与可识别自然人相关的任何数据。",
      '本协议补充但不替代我们的<a href="/terms" class="text-[#111] underline">服务条款</a>。',
    ],
  },
  {
    title: "2. 处理范围",
    content: [
      "根据本服务条款，我们作为数据处理者处理的数据范围包括：",
      "<ul><li>用户账号信息（邮箱、密码哈希）</li><li>会员状态、支付凭证（不含完整银行卡号）</li><li>设备绑定信息（用于多端同步）</li><li>使用日志（脱敏处理，不含语音 / 文本内容）</li></ul>",
      "<strong>本服务默认不处理你的语音、文字、文稿内容</strong>——这些数据完全在你的设备上处理。如果你启用了 E2EE 同步，我们也仅接触加密后的密文，无法解密。",
    ],
  },
  {
    title: "3. 数据安全措施",
    content: [
      "<ul><li>传输层：TLS 1.3 加密（仅限必要通信）</li><li>存储层：AES-256 加密静态数据</li><li>密钥管理：Argon2id 派生 + BIP-39 助记词备份（用户自主管理）</li><li>访问控制：基于角色的最小权限原则 + 完整操作审计日志</li><li>端侧处理：99% 的 AI 推理在用户设备完成，云端不接触原始数据</li></ul>",
    ],
  },
  {
    title: "4. 跨境传输",
    content: [
      "我们的服务器主要部署在中国大陆（阿里云深圳 / 上海），符合《个人信息保护法》数据本地化要求。如有跨境传输需求，会单独签订补充协议并获得你的明示同意。",
    ],
  },
  {
    title: "5. 数据保留",
    content: [
      "<ul><li>账号数据：保留至你主动注销账号后 30 天</li><li>支付记录：保留 7 年（税务合规要求）</li><li>操作日志：保留 180 天（安全审计需要）</li><li>语音 / 文本 / 文稿：本地处理，云端不存储</li></ul>",
    ],
  },
  {
    title: "6. 数据主体权利",
    content: [
      "你（或你的最终用户）享有以下权利：查阅、复制、更正、删除、撤回同意、注销账号。我们承诺在收到请求后 30 天内响应。联系：dpo@sanshunxie.com",
    ],
  },
  {
    title: "7. 事件响应",
    content: [
      "如发生数据安全事件，我们承诺：",
      "<ul><li>72 小时内通知受影响的数据控制者</li><li>配合数据控制者履行监管报告义务</li><li>提供完整的事件影响评估报告</li><li>协助制定补救与防范措施</li></ul>",
    ],
  },
  {
    title: "8. 合规框架",
    content: [
      "本服务符合以下合规框架：",
      "<ul><li>《中华人民共和国个人信息保护法》（PIPL）</li><li>《信息安全技术 个人信息安全规范》（GB/T 35273）</li><li>通用数据保护条例（GDPR）</li><li>网络安全等级保护 2.0（等保三级，支持企业版上线后申请）</li></ul>",
    ],
  },
  {
    title: "9. 联系方式",
    content: [
      "数据保护官（DPO）：dpo@sanshunxie.com",
      "法务联系：legal@sanshunxie.com",
    ],
  },
];

function renderContent(content: string[]) {
  // 把 HTML 字符串简单拆分成段：含 <ul> 整体一段，其他按行
  return content.map((c, i) => {
    if (c.startsWith("<ul>")) {
      return <ul key={i} className="list-disc pl-6 space-y-1" dangerouslySetInnerHTML={{ __html: c }} />;
    }
    if (c.startsWith("<strong>")) {
      return <p key={i} className="mt-3" dangerouslySetInnerHTML={{ __html: c }} />;
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: c }} />;
  });
}

export default function DpaPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-medium text-[var(--subtle)]">
            最后更新：2026 年 6 月 15 日 · 适用于企业版
          </p>
          <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#111]">
            数据处理协议
          </h1>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            本协议（Data Processing Agreement，简称 DPA）规范 san 瞬写作为数据处理者处理客户数据的范围、方式与责任。
            符合 GDPR、《个人信息保护法》等合规框架要求。
          </p>

          {sections.map((s) => (
            <section key={s.title} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[#111]">{s.title}</h2>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--muted)] [&_strong]:text-[#111]">
                {renderContent(s.content)}
              </div>
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-[var(--line)] bg-[#fafafa] p-6">
            <h3 className="font-semibold text-[#111]">企业版上线说明</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              本 DPA 在企业版（4-8 人声纹 + 团队管理面板）正式上线后激活。
              当前 san 瞬写主要面向 C 端用户，<strong>企业客户</strong>如需提前咨询，
              请联系 <a href="mailto:enterprise@sanshunxie.com" className="text-[#111] underline">enterprise@sanshunxie.com</a>。
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
