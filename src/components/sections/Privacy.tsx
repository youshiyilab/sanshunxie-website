/**
 * 隐私与端侧架构（对标 typeless.com "Private by design" section）
 * 4 列卡片布局，文案提炼自产品方案 V1.6 §1.1 及 §4.4
 */
const privacyPoints = [
  {
    title: "云端零数据留存",
    desc: "你的语音、文字、文稿内容被安全处理后立即丢弃 — 服务器端绝不存储。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "绝不训练模型",
    desc: "我们或任何第三方永远不会使用你的数据进行模型训练。这是架构级承诺，不可撤销。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "历史仅存本地",
    desc: "所有听写历史仅存储在你设备的 SQLite 数据库中。只有你自己可以访问，与他人无关。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "E2EE 无中转",
    desc: "多端同步使用 Argon2id + AES-256-GCM 加密，通过你自有的云盘中转。官方零中转服务器。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function Privacy() {
  return (
    <section
      id="privacy"
      className="border-b border-[var(--line)] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--subtle)]">
            Private by design
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
            你的声音，
            <br />
            永远是你的
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted)]">
            端侧推理 + 零云端上传 + 加密存储。
            <br />
            从架构底层保障数据隐私 — 即使设备丢失，他人也无法解密你的数据。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["《个人信息保护法》合规", "GDPR 对标", "HIPAA 兼容", "ISO 27001"].map(
              (b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs text-[var(--muted)]"
                >
                  ✓ {b}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {privacyPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[var(--line)] bg-white p-7 transition-all hover:border-[var(--line-strong)] hover:shadow-sm"
            >
              <div className="text-[var(--subtle)]">{p.icon}</div>
              <h3 className="mt-5 text-lg font-semibold text-[#111]">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
