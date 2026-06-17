import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  产品: [
    { label: "使用场景", href: "/use-cases" },
    { label: "定价方案", href: "/pricing" },
    { label: "更新日志", href: "/changelog" },
    { label: "下载", href: "/download" },
  ],
  资源: [
    { label: "使用文档", href: "/docs" },
    { label: "开发日志", href: "/blog" },
    { label: "媒体素材", href: "/press" },
    { label: "帮助中心", href: "/docs" },
  ],
  公司: [
    { label: "关于我们", href: "/about" },
    { label: "品牌理念", href: "/manifesto" },
    { label: "招贤纳士", href: "/careers" },
    { label: "联系我们", href: "mailto:hi@sanshunxie.com" },
  ],
  法律: [
    { label: "隐私政策", href: "/privacy" },
    { label: "服务条款", href: "/terms" },
    { label: "Cookie 政策", href: "/cookies" },
    { label: "数据处理协议", href: "/dpa" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* 左侧：品牌 */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/s-logo.png"
                alt="san 瞬写"
                width={96}
                height={96}
                className="h-12 w-12 object-contain"
              />
              <span className="flex items-baseline gap-1.5 leading-none">
                <span className="text-xl font-semibold tracking-tight text-[#111]">
                  san
                </span>
                <span className="text-xl font-semibold tracking-tight text-[#111]">
                  瞬写
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              国内首款端侧原生、零数据上传的 AI 语音生产力工具。说话即文稿，隐私无忧。
            </p>
            {/* 社交媒体（对标 Typeless Footer） */}
            <div className="mt-5 flex items-center gap-3">
              {[
                { label: "X", href: "https://x.com/sanshunxie" },
                { label: "GitHub", href: "https://github.com/sanshunxie" },
                { label: "V2EX", href: "https://v2ex.com/member/sanshunxie" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-xs text-[var(--subtle)] transition-colors hover:border-[var(--line-strong)] hover:text-[#111]"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* 右侧：链接网格 */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111]">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-[var(--muted)] transition-colors hover:text-[#111]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--subtle)] sm:flex-row sm:items-center">
          <div>
            © 2026 san 瞬写. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[#111]">
              服务条款
            </Link>
            <Link href="/privacy" className="hover:text-[#111]">
              隐私政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
