/**
 * san 瞬写 宿主应用感知矩阵
 * 内容来源：产品方案 §1.2 / §4.6 App-Aware 模板库
 * 风格对标：typeless.com/use-cases（5 大类目 × 6-8 App 卡片）
 */

export type AppCategory = {
  id: string;
  title: string;
  subtitle: string;
  bg: string; // 卡片背景色（用 4 个品牌柔和色）
  apps: AppItem[];
};

export type AppItem = {
  name: string; // 中文名
  en: string; // 英文/原名
  desc: string; // 一句话使用场景
  tone: string; // 触发的 Prompt 风格
};

// 5 大分类 × 6-8 个 App
export const useCases: AppCategory[] = [
  {
    id: "essential",
    title: "日常沟通",
    subtitle: "Essential",
    bg: "bg-[var(--accent-mint)]",
    apps: [
      {
        name: "微信",
        en: "WeChat",
        desc: "语音直接发消息，打字不再打断思路。",
        tone: "短句 · 口语化",
      },
      {
        name: "飞书",
        en: "Feishu",
        desc: "工作沟通语气自然，不用逐字手打。",
        tone: "职场口语",
      },
      {
        name: "钉钉",
        en: "DingTalk",
        desc: "语音发 DDL 提醒、Ding 消息更高效。",
        tone: "正式 · 简洁",
      },
      {
        name: "QQ",
        en: "QQ",
        desc: "群聊回复、表情包文案，开口就有。",
        tone: "短句 · 表情友好",
      },
      {
        name: "WhatsApp",
        en: "WhatsApp",
        desc: "跨境沟通，英文消息自动规整。",
        tone: "中英混合 · 国际化",
      },
      {
        name: "Telegram",
        en: "Telegram",
        desc: "语音转英文 / 中文消息，自动检测语言。",
        tone: "简短 · 国际化",
      },
    ],
  },
  {
    id: "writing",
    title: "写作与笔记",
    subtitle: "Writing",
    bg: "bg-[var(--accent-peach)]",
    apps: [
      {
        name: "Notion",
        en: "Notion",
        desc: "口述直接生成多级标题 Markdown，块结构自动整理。",
        tone: "结构化 · 多级标题",
      },
      {
        name: "Obsidian",
        en: "Obsidian",
        desc: "双链 / 标签 / 引用块一气呵成，写知识库不再卡壳。",
        tone: "Markdown · 链接友好",
      },
      {
        name: "思源笔记",
        en: "SiYuan",
        desc: "国产开源笔记，原生中文块引用支持。",
        tone: "Markdown · 块引用",
      },
      {
        name: "Apple Notes",
        en: "Apple Notes",
        desc: "语音速记，待办列表自动加 checkbox。",
        tone: "简洁 · 待办列表",
      },
      {
        name: "语雀",
        en: "Yuque",
        desc: "团队文档口述录入，目录大纲自动生成。",
        tone: "结构化 · 团队文档",
      },
      {
        name: "Bear",
        en: "Bear",
        desc: "Markdown 笔记，多标签自动分类。",
        tone: "Markdown · 标签",
      },
    ],
  },
  {
    id: "ai",
    title: "AI 对话",
    subtitle: "AI",
    bg: "bg-[var(--accent-sky)]",
    apps: [
      {
        name: "ChatGPT",
        en: "ChatGPT",
        desc: "口述复杂 prompt，自动整理为结构化指令。",
        tone: "结构化 · 英文优化",
      },
      {
        name: "Claude",
        en: "Claude",
        desc: "语音输入长 prompt，零打错、零等待。",
        tone: "结构化 · 长文本",
      },
      {
        name: "Gemini",
        en: "Gemini",
        desc: "中英混合 prompt，自动归一为正式表达。",
        tone: "中英混合",
      },
      {
        name: "豆包",
        en: "Doubao",
        desc: "国产 AI 对话，中文口音适配最深。",
        tone: "中文口语化",
      },
      {
        name: "Kimi",
        en: "Kimi",
        desc: "长文本对话，语音口述提问不再卡顿。",
        tone: "结构化 · 长问",
      },
      {
        name: "DeepSeek",
        en: "DeepSeek",
        desc: "国产深度推理模型，中文 prompt 优化。",
        tone: "结构化 · 技术",
      },
    ],
  },
  {
    id: "engineering",
    title: "工程开发",
    subtitle: "Engineering",
    bg: "bg-[var(--accent-lilac)]",
    apps: [
      {
        name: "VS Code",
        en: "VS Code",
        desc: "代码注释、commit message、文档口述录入。",
        tone: "技术 · 代码块",
      },
      {
        name: "JetBrains",
        en: "JetBrains",
        desc: "Java / Kotlin / Swift 注释 + 文档，英文术语自动保留。",
        tone: "技术 · 英文术语",
      },
      {
        name: "Xcode",
        en: "Xcode",
        desc: "iOS 注释、commit、PR 描述直接口述。",
        tone: "技术 · 英文术语",
      },
      {
        name: "Cursor",
        en: "Cursor",
        desc: "AI 编程对话，技术 prompt 语音输入。",
        tone: "技术 · 英文术语",
      },
      {
        name: "终端",
        en: "Terminal",
        desc: "命令行注释、git commit 语音录入。",
        tone: "技术 · shell 注释",
      },
      {
        name: "Warp",
        en: "Warp",
        desc: "现代终端，命令注释、文档语音化。",
        tone: "技术 · shell 注释",
      },
    ],
  },
  {
    id: "pm",
    title: "项目管理",
    subtitle: "Project Management",
    bg: "bg-[var(--accent-mint)]",
    apps: [
      {
        name: "飞书多维表格",
        en: "Feishu Bitable",
        desc: "语音录入字段、批量任务描述。",
        tone: "结构化 · 字段",
      },
      {
        name: "钉钉项目",
        en: "DingTalk Project",
        desc: "任务标题、备注语音化录入。",
        tone: "简洁 · 任务",
      },
      {
        name: "Trello",
        en: "Trello",
        desc: "卡片标题 + 描述口述录入。",
        tone: "短句 · 任务",
      },
      {
        name: "Linear",
        en: "Linear",
        desc: "Issue 标题、描述、AC 语音化。",
        tone: "英文 · 任务",
      },
      {
        name: "Jira",
        en: "Jira",
        desc: "工单描述、评论、AC 口述录入。",
        tone: "英文 · 技术",
      },
      {
        name: "Notion DB",
        en: "Notion DB",
        desc: "数据库字段、视图筛选口述配置。",
        tone: "结构化 · 字段",
      },
    ],
  },
];

/** 浅色 App logo 占位 SVG（统一形状，无品牌侵权） */
export const appIconColors: Record<string, string> = {
  WeChat: "#07C160",
  Feishu: "#3370FF",
  DingTalk: "#1989FA",
  QQ: "#12B7F5",
  WhatsApp: "#25D366",
  Telegram: "#26A5E4",
  Notion: "#000000",
  Obsidian: "#7C3AED",
  SiYuan: "#D23F31",
  "Apple Notes": "#FFD60A",
  Yuque: "#FFA800",
  Bear: "#FF7344",
  ChatGPT: "#10A37F",
  Claude: "#D97757",
  Gemini: "#4285F4",
  Doubao: "#4F46E5",
  Kimi: "#1E40AF",
  DeepSeek: "#0EA5E9",
  "VS Code": "#007ACC",
  JetBrains: "#000000",
  Xcode: "#157EFB",
  Cursor: "#000000",
  Terminal: "#4B5563",
  Warp: "#01A4FF",
  "Feishu Bitable": "#3370FF",
  "DingTalk Project": "#1989FA",
  Trello: "#0079BF",
  Linear: "#5E6AD2",
  Jira: "#0052CC",
  "Notion DB": "#000000",
};
