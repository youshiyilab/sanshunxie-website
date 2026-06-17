/**
 * 五大地域口音展示
 * 内容来源：产品方案 §5.1 - §5.4
 */
const accents = [
  {
    name: "川渝口音",
    en: "Sichuan",
    samples: ["牛奶", "正式", "支持", "老总"],
    feature: "平翘舌 / n-l 区分",
    bg: "bg-[var(--accent-peach)]",
  },
  {
    name: "东北口音",
    en: "Dongbei",
    samples: ["特别", "方案", "情况", "数据"],
    feature: "儿化音宽容 / 语速补偿",
    bg: "bg-[var(--accent-mint)]",
  },
  {
    name: "两广口音",
    en: "Yue-Guang",
    samples: ["知道", "继续", "加班", "需要"],
    feature: "j-q-x vs z-c-s 区分",
    bg: "bg-[var(--accent-sky)]",
  },
  {
    name: "江浙口音",
    en: "Jiang-Zhe",
    samples: ["明天", "北京", "精神", "银行"],
    feature: "前后鼻音 en/eng 区分",
    bg: "bg-[var(--accent-lilac)]",
  },
  {
    name: "西北口音",
    en: "Xi-Bei",
    samples: ["目标", "结果", "负责", "工作"],
    feature: "鼻音宽容 / 浊音边界调整",
    bg: "bg-[var(--accent-mint)]",
  },
];

export function Accents() {
  return (
    <section
      id="accents"
      className="border-b border-[var(--line)] bg-[#fafafa] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            ⭐ 独家差异化能力
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            五大地域口音
            <br />
            听得准，写得对
          </h2>
          <p className="mt-5 text-pretty text-lg text-[var(--muted)]">
            基于 SenseVoice 原生能力 + 提示词引导 + 高频易错热词库
            <br />
            覆盖全国 90%+ 口音普通话用户群体
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {accents.map((a) => (
            <div
              key={a.en}
              className={`group relative overflow-hidden rounded-2xl ${a.bg} p-6 transition-all hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="text-xs font-medium uppercase tracking-wider text-[#111]/50">
                {a.en}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-[#111]">
                {a.name}
              </h3>
              <div className="mt-4 space-y-1.5">
                {a.samples.map((s) => (
                  <div
                    key={s}
                    className="text-sm text-[#111]/80 font-medium"
                  >
                    · {s}
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-[#111]/10 pt-3 text-xs text-[#111]/60">
                {a.feature}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-[var(--subtle)]">
          高级口音包（两广 / 江浙 / 西北）· Pro 会员专属
        </div>
      </div>
    </section>
  );
}
