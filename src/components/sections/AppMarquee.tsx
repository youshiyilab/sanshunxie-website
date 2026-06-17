/**
 * App 跑马灯（对标 typeless.com "Works everywhere you write"）
 * 使用 CSS marquee 动画展示 san 瞬写适配的 30+ App
 */
import { appIconColors } from "@/data/useCases";

const APPS = [
  { name: "微信", en: "WeChat" },
  { name: "飞书", en: "Feishu" },
  { name: "钉钉", en: "DingTalk" },
  { name: "Notion", en: "Notion" },
  { name: "Obsidian", en: "Obsidian" },
  { name: "VS Code", en: "VS Code" },
  { name: "Outlook", en: "Outlook" },
  { name: "Gmail", en: "Gmail" },
  { name: "ChatGPT", en: "ChatGPT" },
  { name: "Claude", en: "Claude" },
  { name: "Slack", en: "Slack" },
  { name: "思源笔记", en: "SiYuan" },
  { name: "Xcode", en: "Xcode" },
  { name: "Cursor", en: "Cursor" },
  { name: "Linear", en: "Linear" },
  { name: "Jira", en: "Jira" },
  { name: "Apple Notes", en: "Apple Notes" },
  { name: "Figma", en: "Figma" },
  { name: "DeepSeek", en: "DeepSeek" },
  { name: "豆包", en: "Doubao" },
  { name: "Kimi", en: "Kimi" },
  { name: "飞书多维表格", en: "Bitable" },
  { name: "Trello", en: "Trello" },
  { name: "语雀", en: "Yuque" },
  { name: "WhatsApp", en: "WhatsApp" },
  { name: "Telegram", en: "Telegram" },
  { name: "Terminal", en: "Terminal" },
  { name: "Warp", en: "Warp" },
];

function AppBadge({ name, en }: { name: string; en: string }) {
  const color = appIconColors[en] ?? "#111";
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--line)] bg-white px-4 py-2.5 shadow-sm">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0)}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-[#111]">
        {name}
      </span>
    </div>
  );
}

export function AppMarquee() {
  const row1 = APPS.slice(0, Math.ceil(APPS.length / 2));
  const row2 = APPS.slice(Math.ceil(APPS.length / 2));

  return (
    <section className="overflow-hidden border-b border-[var(--line)] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            Works everywhere you write
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            在所有应用中，开口即用
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
            自动识别当前活跃 App，匹配最佳风格。
            <br />
            从微信到 VS Code，无需手动切换。
          </p>
        </div>
      </div>

      {/* 第一行：左移 */}
      <div className="mt-10 flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track marquee-track-left flex gap-3 px-3">
          {row1.map((app) => (
            <AppBadge key={app.en} {...app} />
          ))}
          {row1.map((app) => (
            <AppBadge key={`dup-${app.en}`} {...app} />
          ))}
        </div>
      </div>

      {/* 第二行：右移 */}
      <div className="mt-4 flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track marquee-track-right flex gap-3 px-3">
          {row2.map((app) => (
            <AppBadge key={app.en} {...app} />
          ))}
          {row2.map((app) => (
            <AppBadge key={`dup-${app.en}`} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
