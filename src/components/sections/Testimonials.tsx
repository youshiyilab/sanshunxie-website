/**
 * 用户评价（对标 typeless.com "People love Typeless" section）
 * 文案改写为更简洁大气的表达
 */
const testimonials = [
  {
    quote: "通勤路上用语音处理了 80% 的微信和邮件，每天多出一小时。",
    name: "张明",
    role: "产品经理 · 深圳",
  },
  {
    quote: "川渝口音优化太惊人了。以前「牛奶」老被写成「流奶」，现在几乎不出错。",
    name: "李华",
    role: "运营总监 · 成都",
  },
  {
    quote: "在 VS Code 里用语音写注释和 commit message，端侧延迟完全能接受。",
    name: "陈伟",
    role: "全栈工程师 · 杭州",
  },
  {
    quote: "8GB MacBook 担心跑不动。结果轻量档流畅得不行，每天都用。",
    name: "王芳",
    role: "自由撰稿人 · 北京",
  },
  {
    quote: "App-Aware 太实用了——微信自动口语化，切到 Outlook 自动正式邮件。",
    name: "刘洋",
    role: "销售经理 · 上海",
  },
  {
    quote: "零数据上传是公司的硬要求。所有语音工具里只有 san 瞬写能满足。",
    name: "赵雪",
    role: "信息安全主管 · 广州",
  },
  {
    quote: "东北口音识别比我预期好太多了，大部分时候直接出正确的字。",
    name: "孙刚",
    role: "创业者 · 沈阳",
  },
  {
    quote: "价格只有 Typeless 的 1/10，功能还更贴合中文场景。月付 19 块完全物超所值。",
    name: "周洁",
    role: "市场专员 · 南京",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-[var(--line)] bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            People love san
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            用户的声音
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
            他们用声音工作得更快、更自然、更高效。
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-white p-6 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
            >
              <svg
                className="h-6 w-6 text-[var(--line-strong)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.146 0-2.192-.466-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.146 0-2.192-.466-2.917-1.179z" />
              </svg>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--muted)]">
                {t.quote}
              </p>
              <div className="mt-5 border-t border-[var(--line)] pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-xs font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--subtle)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
