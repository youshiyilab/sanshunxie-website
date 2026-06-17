import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { AppMarquee } from "@/components/sections/AppMarquee";
import { Features } from "@/components/sections/Features";
import { Translate } from "@/components/sections/Translate";
import { AskAnything } from "@/components/sections/AskAnything";
import { Privacy } from "@/components/sections/Privacy";
import { Platforms } from "@/components/sections/Platforms";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { FinalCta } from "@/components/FinalCta";
import { FaqSection } from "@/components/FaqSection";
import { AiCta } from "@/components/sections/AiCta";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    q: "san 瞬写是输入法吗？",
    a: "不是。san 瞬写是 AI 语音生产力工具，归类为办公效率软件，不是传统输入法。我们主打语音输入+智能整理，键盘输入是辅助。",
  },
  {
    q: "我的数据真的不会上传吗？",
    a: "默认情况下，原始语音、文字、文稿内容 100% 在你的设备上处理。我们的服务器只存储：用户 ID、会员状态、设备绑定、支付记录。详见 /privacy。",
  },
  {
    q: "支持哪些 App？",
    a: "支持 30+ 主流职场 App：微信 / 飞书 / 钉钉 / Notion / Obsidian / Outlook / Foxmail / VS Code / ChatGPT 等。详见 /use-cases。",
  },
  {
    q: "为什么这么便宜？",
    a: "端侧 AI 推理无服务器成本，毛利高；本土定价适配国内消费能力。价格仅为 Typeless 等海外对标产品的 1/10。",
  },
  {
    q: "支持 Windows / iOS / Android 吗？",
    a: "macOS / Windows 已发布,iOS / Android 敬请期待。详见 /download。",
  },
  {
    q: "E2EE 多端同步是必须的吗？",
    a: "可选。默认关闭，纯本地模式。开启后通过 iCloud / OneDrive / WebDAV（用户自有云盘）同步，密钥永不离开设备，官方不运营任何同步服务器。",
  },
  {
    q: "退款政策？",
    a: "月付会员购买后 7 天内可申请全额退款；年付 / 终身会员购买后 30 天内可申请退款（需未深度使用）。",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* 1. Hero: "说话，别再打字" */}
        <Hero />

        {/* 2. App 跑马灯: "在所有应用中使用" */}
        <AppMarquee />

        {/* 3. 口述核心功能 9 卡片: "开口即文稿" */}
        <Features />

        {/* 4. 翻译: "语音实时翻译" */}
        <Translate />

        {/* 5. 随便问 / 免动手语音指令 */}
        <AskAnything />

        {/* 6. 隐私设计 4 列 */}
        <Privacy />

        {/* 7. 跨平台: "你的声音，在所有设备上" */}
        <Platforms />

        {/* 8. KPI 信任栏 + 合作伙伴 */}
        <TrustBar />

        {/* 9. 用户评价 */}
        <Testimonials />

        {/* 10. 最终 CTA: "告别键盘" */}
        <FinalCta />

        {/* 11. FAQ */}
        <FaqSection
          title="常见问题"
          subtitle="关于产品、定价、隐私的所有疑问"
          items={faqs}
        />

        {/* 12. AI 对话入口: "不确定？问 AI" */}
        <AiCta />
      </main>
      <Footer />
    </>
  );
}
