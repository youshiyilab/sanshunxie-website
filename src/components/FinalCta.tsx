/**
 * 最终大 CTA（对标 Typeless 底部 "Free yourself from the keyboard"）
 * 文案取自产品方案 V1.6 结尾定位语
 */
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="bg-[#111] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* QWERTY 键盘行 */}
        <div className="mx-auto mb-12 flex max-w-md flex-wrap justify-center gap-1.5">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => (
            <span
              key={k}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white/50"
              style={{ animation: `key-shimmer 2s ease-in-out ${Math.random() * 2}s infinite` }}
            >
              {k}
            </span>
          ))}
        </div>

        <h2 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          告别键盘，
          <br />
          开口即文稿
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
          国内首款端侧原生、零数据上传的 AI 语音生产力工具。
          <br />
          把「说话」重新变成最自然的输入方式。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/download"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-[15px] font-medium text-[#111] transition-colors hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            <span className="text-[#111]">免费下载 san 瞬写</span>
          </Link>
          <Link
            href="/use-cases"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-[15px] font-medium text-white transition-colors hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            查看使用场景
          </Link>
        </div>
        <p className="mt-8 text-sm text-white/50">
          永久免费版 · 零数据上传 · 端侧原生 · 无广告
        </p>
      </div>
    </section>
  );
}
