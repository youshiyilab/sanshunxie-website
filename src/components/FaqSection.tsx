/**
 * 可复用的 FAQ 板块
 * 接受 questions 数组和可选的标题/描述
 */

export type FaqItem = { q: string; a: string };

export function FaqSection({
  title = "常见问题",
  subtitle,
  items,
  bgClass = "bg-[#fafafa]",
}: {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  bgClass?: string;
}) {
  return (
    <section className={`${bgClass} py-20 sm:py-24`}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg text-[var(--muted)]">
            {subtitle}
          </p>
        )}
        <div className="mt-12 space-y-3">
          {items.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-[var(--line)] bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-[#111]">
                <span>{f.q}</span>
                <svg
                  className="h-4 w-4 shrink-0 text-[var(--subtle)] transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
