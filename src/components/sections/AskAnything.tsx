/**
 * Ask Anything（对标 typeless.com "Ask anything" section）
 * san 瞬写版：免动手语音指令 + 语音编辑 + 语音提问
 * 文案取自产品方案 V1.6 §4.6.5 及 §1.2
 */
const commands = [
  {
    title: "语音编辑",
    desc: "选中文字，口述指令，即时修改。缩短、加长、改语气、生成回复 — 开口就行。",
    label: "Speak to edit",
    bg: "bg-[var(--accent-mint)]",
    examples: ["「帮我缩短」", "「改成正式语气」", "「翻成英文」"],
  },
  {
    title: "语音提问",
    desc: "对网页或文档中的文字提问，无需打断工作流。总结、解释、翻译，语音直达。",
    label: "Speak to ask",
    bg: "bg-[var(--accent-sky)]",
    examples: ["「总结一下这段话」", "「这是什么意思」", "「翻成中文」"],
  },
  {
    title: "免动手指令",
    desc: "以「瞬写」开头说出你的需求 — 翻译成英文、列成清单、发到微信、存为会议纪要。30+ 高频指令，识别准确率 ≥ 95%。",
    label: "Voice commands",
    bg: "bg-[var(--accent-peach)]",
    examples: ["「瞬写，列成清单」", "「小写，发到微信」", "「Hey San，改成正式」"],
  },
];

export function AskAnything() {
  return (
    <section className="border-b border-[var(--line)] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            Ask anything
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            动口不动手
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
            用语音控制 san 瞬写。编辑、提问、执行指令 —
            <br />
            无需离开当前窗口，全程端侧处理。
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {commands.map((c) => (
            <div
              key={c.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl ${c.bg} p-7 transition-transform hover:-translate-y-1`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--subtle)]">
                {c.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#111]">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#111]/75">
                {c.desc}
              </p>
              <div className="mt-5 space-y-1.5 border-t border-[#111]/10 pt-4">
                {c.examples.map((e) => (
                  <span
                    key={e}
                    className="inline-block rounded-full bg-white/60 px-3 py-1 text-xs text-[#111]/70 backdrop-blur mr-2 mb-1.5"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
