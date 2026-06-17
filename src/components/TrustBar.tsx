/**
 * Trust Bar — 信任栏（对标 Typeless 底部的 social proof / stats）
 */
const stats = [
  { kpi: "30+", label: "适配 App" },
  { kpi: "五大", label: "地域口音优化" },
  { kpi: "800ms", label: "端到端出稿" },
  { kpi: "零", label: "云端数据上传" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--line)] bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
                {s.kpi}
              </div>
              <div className="mt-2 text-sm text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
