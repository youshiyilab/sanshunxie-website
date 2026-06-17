# san 瞬写 官网

> Next.js 16 + React 19 + Tailwind v4 + TypeScript
> 国内首款端侧原生 AI 语音生产力工具官网

## 🚀 快速启动

```bash
# 1. 安装依赖
pnpm install --ignore-scripts

# 2. 复制环境变量
cp .env.example .env.local

# 3. 启动开发服务器
pnpm dev
# → http://127.0.0.1:9890

# 4. 构建生产版本
pnpm build

# 5. 启动生产服务器
pnpm start
```

> **注意**：3000/3001 端口在某些环境被占用，dev 脚本已固定 `9890` 端口。

## 📁 项目结构

```
san-shunxie-website/
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # 根布局（Inter 字体 + metadata）
│   │   ├── page.tsx               # 首页
│   │   ├── globals.css            # 品牌色 token（对标 Typeless）
│   │   ├── use-cases/page.tsx     # 使用场景（5 大分类）
│   │   ├── features/page.tsx      # 功能特性（V1.4-V1.6）
│   │   ├── pricing/page.tsx       # 定价
│   │   ├── privacy/page.tsx       # 隐私协议
│   │   └── og/route.tsx           # 动态 OG 图（1200x630）
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       ├── Accents.tsx
│   │       ├── Privacy.tsx
│   │       └── Waitlist.tsx
│   └── data/
│       └── useCases.ts            # 20+ App 模板数据
├── public/
│   └── san-shunxie-logo.png
├── .env.example                   # 环境变量样例
├── next.config.ts
├── package.json
├── tailwind.config（v4 集成在 globals.css）
└── tsconfig.json
```

## 🎨 设计系统

主色对标 [Typeless.com](https://www.typeless.com) 实测色值：

| Token | 值 | 用途 |
|-------|-----|------|
| 主文字 | `#111111` | 标题 / 正文 |
| 次文字 | `#4d4d4d` | 副标题 / 说明 |
| 弱文字 | `#777777` | 提示 / 标签 |
| 背景 | `#ffffff` / `#fafafa` | 主体 / 区块交替 |
| 薄荷 | `#E8F5F1` | 卡片背景 1 |
| 紫 | `#F0E8F5` | 卡片背景 2 |
| 杏 | `#FFF4E8` | 卡片背景 3 |
| 浅蓝 | `#E8F0FF` | 卡片背景 4 |
| 强调蓝灰 | `rgba(76,88,124,1)` | 链接 hover |

字体：**Inter**（英文，对标 Typeless）+ **思源黑体 / PingFang SC**（中文 fallback）

## 🛠 技术栈

- **Next.js 16.2.9**（App Router + Turbopack）
- **React 19.2.4**
- **Tailwind CSS v4**（CSS-first config）
- **TypeScript 5**
- **Node 20+**（推荐 20.18 LTS）

## 🌍 部署

### Vercel 一键部署

```bash
# 1. 安装 Vercel CLI
pnpm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod
```

或通过 GitHub 集成：
1. 把代码 push 到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入项目
3. 配置环境变量（见下表）
4. 自动部署

### Cloudflare DNS 接入

| 记录 | 类型 | 值 |
|------|------|---|
| `@` | CNAME | `cname.vercel-dns.com` |
| `www` | CNAME | `cname.vercel-dns.com` |

### 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `NEXT_PUBLIC_SITE_URL` | ✅ | 公网 URL，影响 OG 标签 |
| `NEXT_PUBLIC_TALLY_FORM_ID` | 可选 | Tally.so 表单 ID（不填则 mailto 后备） |
| `NEXT_PUBLIC_ICP_NUMBER` | 可选 | ICP 备案号（M0 末回填） |
| `RESEND_API_KEY` | 可选 | M2 之后接入 Resend 邮件通知 |
| `ADMIN_EMAIL` | 可选 | 管理员邮箱 |

## 📊 内测数据收集

预注册提交（Tally.so 模式）会自动收集到 Tally 后台，可在 Tally Dashboard 导出 CSV。

如未配置 Tally，则回退到 `mailto:` 方案。

## 🐛 常见问题

**Q: 3000 端口启动失败？**
A: 当前环境 3000/3001 被系统保留。已固定 dev 脚本使用 9890 端口。

**Q: pnpm install 卡在 sharp？**
A: 当前环境 pnpm 不允许执行 build scripts。请使用 `pnpm install --ignore-scripts`，
   next.config.ts 已设置 `images.unoptimized = true` 不依赖 sharp。

**Q: 中文显示？**
A: globals.css 中已配置中文字体 fallback 链：Inter → PingFang SC → 思源黑体 → Noto Sans SC → 微软雅黑。

## 📝 License

© 2026 san 瞬写. All rights reserved.
