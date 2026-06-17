import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "宣言",
  description:
    "san 瞬写的品牌宣言。我们为何而做、为何这样设计、为何坚持端侧。",
};

/**
 * 宣言
 * 精简到 5 条核心信念，排版更生动：
 *   - 每条一个"金句"大字 + 一段短解释
 *   - 交替白 / 浅灰底做阅读节奏
 *   - 中间插入 punchline 转折
 *   - 收尾两句极简口号
 */

const beliefs = [
  {
    punchline: "你的声音，本来就在你手里。",
    body: "把语音上传到云端不是 AI 的必选项，是商业模式的副产品。san 瞬写从第一行代码就把原始语音、文字、文稿拦在设备里。云端只存一个不能反推内容的会员 ID。",
  },
  {
    punchline: "中文不是英文的翻译。",
    body: "一个广东工程师在客户电话里被迫切换到标准普通话时，他的表达力会断崖式下降。AI 不该要求用户改变自己来迁就模型。我们选择川渝、东北、粤普、江浙、西北五条最常被识别错的口音，做深度优化。",
  },
  {
    punchline: "好的工具，让你忘了它的存在。",
    body: "当你能开口说话就拿到一份能发的文稿，你不会想到 san 瞬写——你只会想到你要说的话。我们不追求日活时长，不追求停留指标。用户忘了打开 san 瞬写，说明我们做对了。",
  },
  {
    punchline: "不卖广告，只卖会员。",
    body: "一个靠广告活着的产品，它的用户不是客户，是商品。san 瞬写只卖会员。你的利益和我们的利益完全一致：你用得越久、推荐越多，我们就越好；你用得不爽随时退款走人。",
  },
  {
    punchline: "做能持续 10 年的产品。",
    body: "不追风口、不追热点。san 瞬写的目标是 2036 年还在被使用。那时候我们可能已经 100 万用户，也可能只有 5 万——但只要每一个用户每天都觉得值，我们就赢了。",
  },
];

export default function ManifestoPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* ===== Hero：巨号标题 + 一句引言 ===== */}
        <section className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pb-28 sm:pt-40">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--subtle)]">
              宣言
            </p>
            <h1 className="mt-8 text-balance text-7xl font-semibold leading-[1.02] tracking-tight text-[#111] sm:text-8xl lg:text-9xl">
              我们相信。
            </h1>
            <p className="mt-12 max-w-md text-pretty text-2xl leading-relaxed text-[var(--muted)] sm:text-3xl">
              san 瞬写想让每一个用中文工作的人，开口说话就拿到一份能发的文稿。
            </p>
          </div>
        </section>

        {/* ===== 5 条核心信念（金句大字 + 短解释） ===== */}
        {beliefs.map((b, i) => (
          <section
            key={i}
            className={`border-b border-[var(--line)] ${
              i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
            } py-20 sm:py-24`}
          >
            <div className="mx-auto max-w-3xl px-6">
              {/* 金句（大字，视觉冲击） */}
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#111] sm:text-4xl lg:text-5xl">
                {b.punchline}
              </h2>
              {/* 解释（短段，不啰嗦） */}
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {b.body}
              </p>
            </div>
          </section>
        ))}

        {/* ===== 转折 punchline（对标 typeless "This isn't a tool. It's a turning point."） ===== */}
        <section className="border-b border-[var(--line)] bg-[#111] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              键盘是上一个世纪的遗产。
              <br />
              你的声音，才是你的默认。
            </h2>
            <p className="mt-8 text-lg text-white/60 sm:text-xl">
              san 瞬写让说话重新成为最自然的输入方式。
            </p>
          </div>
        </section>

        {/* ===== 收尾两句（极简口号，对标 typeless "Welcome to the end of typing."） ===== */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-xl px-6 text-center">
            <p className="text-balance text-4xl font-medium tracking-tight text-[#111] sm:text-5xl">
              欢迎来到打字的尽头。
            </p>
            <p className="mt-5 text-balance text-4xl font-medium tracking-tight text-[#111] sm:text-5xl">
              欢迎使用 san 瞬写。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}