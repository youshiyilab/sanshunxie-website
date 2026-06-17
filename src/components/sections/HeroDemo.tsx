/**
 * Hero 演示动画（对标 typeless.com 首页核心动画：两卡片从下方滑入）
 *
 * 结构：
 *   - 左卡片：灰底 + "45 词 / 45 秒" 标签 + 白色浮窗（短文）+ 键盘
 *   - 右卡片：白底 + 橙红渐变光晕 + "220 词 / 220 秒 ... 1 天" 标签 + 白色浮窗（长文）+ 深色 san 瞬写浮窗
 *   - 两卡片错开 0.3s 滑入（从下方 translateY 40px + opacity 0 → 显示）
 *   - 浮窗内文字用 CSS "width 0 → 100%" 模拟打字机效果
 *     （不用 React state，SSR 一致显示，hydration 0 风险）
 *   - 滑入后保持显示
 */

"use client";

import { useEffect, useState } from "react";

/* ===== 文案 ===== */
const QUOTE_A = "说话比打字快 4 倍。";
const QUOTE_B = "说话比打字更快，思考比说话更快。";

/* ===== Typewriter 钩子 + 组件（React state + CSS class 切换）
 * 12s 循环：每 12s 重置一次"逐字进度"
 * 通过 React state 控制每帧显示多少字
 * 字符外层父 span 用 CSS animation 控制整段渐隐 + 重置
 */
/* ===== Typewriter 组件（自然逐字显示 + 内嵌光标）
 * 用 width 0→100% + steps(N) 实现
 * 配合 overflow:hidden 让超出部分不显示
 * whiteSpace: nowrap 强制不换行
 *
 * 光标用 ::after 伪元素（不影响 layout）
 * 通过 width 一起被裁切，永远贴在文字末尾
 */
const CYCLE_MS = 18000; // 18s 一轮循环

function TypewriterText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  // 把 \n 替换成空格防止换行
  const displayText = text.replace(/\n/g, "  ");
  return (
    <span
      className="typewriter-caret"
      style={{
        whiteSpace: "nowrap",
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        textIndent: 0,
        // 18s 一轮，steps 按字符数切分
        animation: `typewriter-typeout ${CYCLE_MS}ms steps(${displayText.length}, end) ${delay}ms infinite`,
      }}
    >
      {displayText}
    </span>
  );
}

/* ===== 键盘坐标 ===== */
const KEY_POSITIONS: { x: number; y: number; w: number; h: number; row: number }[] = [];
for (let row = 0; row < 3; row++) {
  for (let i = 0; i < 11; i++) {
    KEY_POSITIONS.push({ x: 20 + i * 40, y: 20 + row * 45, w: 32, h: 36, row });
  }
}
[0, 1, 2, 3, 4].forEach((i) => {
  KEY_POSITIONS.push({ x: 20 + i * 40, y: 155, w: 32, h: 36, row: 3 });
});
KEY_POSITIONS.push({ x: 220, y: 155, w: 120, h: 36, row: 3 });
[6, 7, 8].forEach((i) => {
  KEY_POSITIONS.push({ x: 348 + (i - 6) * 40, y: 155, w: 32, h: 36, row: 3 });
});

/* ===== 键盘组件（每 0.4s 随机一个键被按下） ===== */
function KeyboardIllustration() {
  const [pressedKey, setPressedKey] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.random();
      let candidates: number[];
      if (r < 0.5) {
        candidates = KEY_POSITIONS.filter((k) => k.row < 2).map((_, i) => i);
      } else if (r < 0.85) {
        candidates = KEY_POSITIONS.filter((k) => k.row === 2).map((_, i) => i + 33);
      } else {
        candidates = KEY_POSITIONS.filter((k) => k.row === 3).map((_, i) => i + 44);
      }
      const idx = candidates[Math.floor(Math.random() * candidates.length)];
      setPressedKey(idx);
      setTimeout(() => setPressedKey(null), 150);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 480 220"
      className="h-auto w-full max-w-[260px]"
      fill="none"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      {KEY_POSITIONS.map((k, i) => {
        const isPressed = pressedKey === i;
        return (
          <rect
            key={i}
            x={k.x}
            y={k.y}
            width={k.w}
            height={k.h}
            rx={8}
            fill={isPressed ? "#9ca3af" : "#d0d0d4"}
            style={{
              transition: "fill 0.08s ease-out, transform 0.08s ease-out",
              transform: isPressed ? "translateY(1.5px)" : "translateY(0)",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />
        );
      })}
    </svg>
  );
}

/* ===== 语音波形（16 根 bar 律动） ===== */
function VoiceWaveform() {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 16 }).map((_, i) => {
        const pattern = i % 4;
        const duration = 0.55 + (i % 3) * 0.12;
        const delay = (i * 0.06).toFixed(2);
        return (
          <span
            key={i}
            className="w-[3px] rounded-full bg-white"
            style={{
              height: 6,
              animation: `voice-bar-${pattern} ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ===== 通用：滑入动画包裹器 ===== */
function SlideUpIn({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `slide-up-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ===== 主体组件 ===== */
export function HeroDemo() {
  return (
    <div
      id="demo"
      className="relative mx-auto mt-12 max-w-4xl sm:mt-16"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* ============================================================
            左侧卡片：灰底 + "45 词 / 45 秒" + 浮窗（短文）+ 键盘
           ============================================================ */}
        <SlideUpIn delay={0} className="relative overflow-hidden rounded-[24px] bg-[#e8e8ea] p-6 sm:p-8">
          {/* 顶部"45 词 / 45 秒"标签 */}
          <div className="flex items-baseline justify-end gap-3 text-[var(--subtle)]">
            <span className="text-[10px] uppercase tracking-wider">WPM 字数提升</span>
            <span className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
              45
            </span>
            <span className="text-sm">词/分</span>
          </div>

          {/* 中间：白色浮窗（短文 + 打字机效果，循环播放）
              关键：固定高度 + overflow-hidden 防止内部行数变化时模板抖动 */}
          <div className="mt-6 h-[64px] overflow-hidden rounded-2xl bg-white p-5 shadow-sm sm:mt-8">
            <p className="h-full text-sm leading-relaxed text-[#111] sm:text-base">
              <TypewriterText
                text={QUOTE_A}
                delay={500}
              />
            </p>
          </div>

          {/* 底部：键盘（每 0.4s 随机键被按下） */}
          <div className="mt-6 flex items-center justify-center sm:mt-8">
            <KeyboardIllustration />
          </div>
        </SlideUpIn>

        {/* ============================================================
            右侧卡片：白底 + 橙红渐变光晕 + "220 词 / 220 秒 ... 1 天" + 长文浮窗 + san 瞬写浮窗
           ============================================================ */}
        <SlideUpIn
          delay={300}
          className="relative overflow-hidden rounded-[24px] bg-white p-6 sm:p-8"
        >
          {/* 橙红渐变光晕（typeless 实际效果） */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(255, 180, 130, 0.45) 0%, rgba(255, 180, 130, 0.15) 35%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(200, 220, 255, 0.35) 0%, transparent 50%)",
            }}
          />

          <div className="relative">
            {/* 顶部"220 词 / 220 秒 / 1 天"标签 */}
            <div className="flex items-baseline justify-between text-[var(--subtle)]">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
                  220
                </span>
                <span className="text-sm">词/分</span>
              </div>
              <span className="text-xs uppercase tracking-wider">san 瞬写 · 端侧</span>
              <div className="flex items-baseline gap-2">
                <span className="text-sm">省下</span>
                <span className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl">
                  1
                </span>
                <span className="text-sm">天</span>
              </div>
            </div>

            {/* 中间：白色浮窗（长文 + 打字机效果，循环播放）
                关键：固定高度 + overflow-hidden 防止内部行数变化时模板抖动 */}
            <div className="mt-6 h-[64px] overflow-hidden rounded-2xl bg-white p-5 shadow-md sm:mt-8">
              <p className="h-full text-sm leading-relaxed text-[#111] sm:text-base">
                <TypewriterText
                  text={QUOTE_B}
                  delay={1500}
                />
              </p>
            </div>

            {/* 底部：深色 san 瞬写浮窗 */}
            <div className="mt-6 flex items-center justify-center sm:mt-8">
              <div className="flex h-12 w-[220px] items-center justify-center rounded-full bg-[#1d1d1f] px-5 shadow-2xl sm:h-14 sm:w-[260px]">
                <VoiceWaveform />
              </div>
            </div>
          </div>
        </SlideUpIn>
      </div>
    </div>
  );
}