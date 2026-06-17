/**
 * AI 对话入口（对标 typeless.com 底部 "Not sure if Typeless is right for you?"）
 */
export function AiCta() {
  const query = "Tell+me+why+san+shunxie+is+a+great+choice+for+me%3F";

  const buttons = [
    { name: "ChatGPT", href: `https://chat.openai.com/?q=${query}`, color: "#10A37F" },
    { name: "Claude", href: `https://claude.ai/new?q=${query}`, color: "#D97757" },
    { name: "Perplexity", href: `https://www.perplexity.ai/?q=${query}`, color: "#1E1E1E" },
  ];

  return (
    <section className="border-b border-[var(--line)] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
          不确定 san 瞬写是否适合你？
        </h2>
        <p className="mt-3 text-pretty text-lg text-[var(--muted)]">
          让 AI 帮你分析 →
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {buttons.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full border border-[var(--line)] bg-white px-5 text-sm font-medium text-[#111] transition-all hover:border-[var(--line-strong)] hover:bg-black/[.02] hover:shadow-sm active:scale-[0.98] sm:w-auto"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded"
                style={{ backgroundColor: b.color }}
              />
              问 {b.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
