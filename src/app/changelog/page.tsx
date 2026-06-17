import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "更新日志",
  description: "san 瞬写近期更新与改进。",
};

const updates = [
  {
    title: "5 大地域口音普通话增强",
    desc: "川渝 / 东北 / 两广 / 江浙 / 西北 5 大口音识别强化,内置热词库与提示词规则,零模型改动即可生效。",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "VAD 断句流式并行架构",
    desc: "首创端侧 VAD 语音活动检测 + ASR/LLM 双线程并行处理,把端到端规整延迟从 5-7s 压缩到 800ms 级别。",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    title: "宿主应用感知(App-Aware)",
    desc: "自动读取前台 App 进程,匹配微信/飞书/Outlook/Notion 等 20+ 主流职场 App 的最佳 Prompt 模板。",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    title: "双轨渐变 + 魔法棒 + 一键回滚",
    desc: "灰色 ASR 实时上屏 → 黑色 AI 精整的 200ms 渐变;⌘+K 唤起魔法棒局部重写;⌥+Z 一键回滚口述原稿。",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    title: "端侧动态 RAG(本地词典 + 通讯录 + 剪贴板)",
    desc: "1.5B 端侧模型 System Prompt 动态注入三源 RAG,专有名词识别 F1 从 0.61 提升至 0.94,全部本地完成。",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "端侧声纹分割(2-4 人会议)",
    desc: "ECAPA-TDNN 声纹特征 + 谱聚类,2-4 人会议 DER ≤ 18%,全程本地完成,声纹嵌入不落盘不同步。",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    title: "E2EE 多端同步",
    desc: "Argon2id + AES-256-GCM + BIP-39 助记词 + 用户自有 iCloud/OneDrive/WebDAV,零知识云端同步,密钥永不离开设备。",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    title: "免动手语音指令(30+ 高频指令)",
    desc: "以「瞬写,」/「小写,」/「Hey San,」等前缀口述控制命令,系统识别为指令而非正文,无需切换键盘。",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    title: "长文本流式滑动语义压缩",
    desc: "20-30 分钟连续口述场景下,8GB 设备内存稳定 ≤ 1.5GB;后台摘要 + KV-Cache 阶段性释放,零用户感知。",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "电池能效自适应三档降级",
    desc: "30% / 15% / 5% 三档自动降级;差旅 / 突发停电等真实边缘场景下,保护续航,连接电源后自动恢复完整功能。",
    bg: "bg-[var(--accent-sky)]",
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">Changelog</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              近期更新
            </h1>
            <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
              san 瞬写的持续打磨。
              <br />
              每个功能都来自真实用户反馈,小步快跑,稳步前行。
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-5 md:grid-cols-2">
              {updates.map((u, i) => (
                <div
                  key={i}
                  className={`group rounded-2xl ${u.bg} p-7 transition-transform hover:-translate-y-1`}
                >
                  <h2 className="text-xl font-semibold tracking-tight text-[#111]">
                    {u.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#111]/75">
                    {u.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
