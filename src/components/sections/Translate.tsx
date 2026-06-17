/**
 * 翻译功能展示（对标 typeless.com "Translate" section）
 * 文案取自产品方案 V1.6 §1.2 "语音实时翻译"
 */
export function Translate() {
  return (
    <section className="border-b border-[var(--line)] bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧：功能说明 */}
          <div>
            <p className="text-sm font-medium text-[var(--subtle)]">
              Translate
            </p>
            <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
              边说边译
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted)]">
              口述中文，即时输出地道英文、日文、韩文。
              <br />
              翻译结果读起来像母语者亲笔所写 — 而非机器直译。
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "中文 → 英文",
                "中文 → 日文",
                "中文 → 韩文",
                "英文 → 中文",
                "100+ 语言自动检测",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-sm text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 右侧：翻译效果可视化 */}
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--accent-mint)] px-5 py-4">
                <p className="text-xs text-[var(--subtle)]">你说</p>
                <p className="mt-1 text-[15px] font-medium leading-relaxed text-[#111]">
                  我们下周三下午两点开会讨论新项目进度
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[var(--accent-sky)] px-5 py-4">
                <p className="text-xs text-[var(--subtle)]">英文</p>
                <p className="mt-1 text-[15px] font-medium leading-relaxed text-[#111]">
                  We&apos;ll meet next Wednesday at 2 PM to discuss the new project progress.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-2xl rounded-br-md bg-[var(--accent-lilac)] px-5 py-4">
                <p className="text-xs text-[var(--subtle)]">日文</p>
                <p className="mt-1 text-[15px] font-medium leading-relaxed text-[#111]">
                  来週の水曜日午後2時に新プロジェクトの進捗について会議します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
