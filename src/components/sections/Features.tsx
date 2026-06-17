/**
 * 口述核心功能 9 卡片（对标 typeless.com "Dictate" section）
 * 文案提炼自产品完整方案 V1.6 §1.2 产品动态描述
 */
const features = [
  {
    title: "去除语气词",
    desc: "自动删除「嗯」「啊」「那个」「就是说」等填充词，让转写文字干净专业。",
    icon: "✂️",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "去除重复",
    desc: "检测并删除口语中无意义的重复表达，确保每一句都简洁有力。",
    icon: "🔄",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    title: "识别中途修正",
    desc: "当你说错立即改口 — 只保留最终想表达的意思，避免文稿混乱。",
    icon: "🧠",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    title: "自动格式化",
    desc: "口语列表、步骤、要点自动整理为结构化文本，省去手动排版。",
    icon: "📋",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    title: "五大口音增强",
    desc: "川渝 / 东北 / 粤普 / 江浙 / 西北 — 口音普通话深度优化，听得准写得对。",
    icon: "🗣️",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    title: "个性化风格学习",
    desc: "适应你的语气、措辞和写作习惯。用得越久，输出越像你亲手写的。",
    icon: "🎯",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    title: "个人专属词典",
    desc: "添加人名、公司名、产品代号、技术术语 — 你说什么，它就识别什么。",
    icon: "📖",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    title: "100+ 语言支持",
    desc: "自动检测语言，中英混合输入无需切换。翻译结果地道如母语。",
    icon: "🌐",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    title: "每个应用不同语气",
    desc: "微信用口语短句，Outlook 用正式邮件，Notion 用 Markdown — 自动适配。",
    icon: "🎭",
    bg: "bg-[var(--accent-peach)]",
  },
];

export function Features() {
  return (
    <section
      id="dictate"
      className="border-b border-[var(--line)] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            Dictate
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            开口即文稿
          </h2>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            不只是语音转文字。san 瞬写理解语境，
            <br />
            把你的口语直接变成可直接发送的结构化文稿。
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl ${f.bg} p-7 transition-transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#111]">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#111]/75">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
