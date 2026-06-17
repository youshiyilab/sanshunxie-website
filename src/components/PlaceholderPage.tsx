import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/**
 * 通用占位页（用于尚未构建的二级页面）
 * 风格对标 Typeless 简洁风
 */
export function PlaceholderPage({
  title,
  subtitle,
  ctaLabel = "返回首页",
  ctaHref = "/",
}: {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="border-b border-[var(--line)] py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium text-[var(--subtle)]">
              Coming soon
            </p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-[#111] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[var(--muted)]">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={ctaHref}
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <span className="text-white">{ctaLabel}</span>
              </Link>
              <Link
                href="/download"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-5 text-sm font-medium text-[#111] transition-colors hover:bg-black/[.03]"
              >
                下载客户端
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const defaultMetadata = {
  title: "san 瞬写",
  description: "国内首款端侧原生 AI 语音生产力工具。",
};

export function makeMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
  };
}
