# san 瞬写官网 部署指南

> 目标:15 分钟内把 sanshunxie.com 部署上线,零服务器、零成本(只花域名 ¥60/年)

---

## 1. 部署架构

```
访客(全球)
  ↓
Cloudflare Pages(全球 CDN,免费)
  ├─ 21 个预渲染 HTML
  ├─ CSS / JS / 图片
  └─ 自动 HTTPS 证书
```

- **不需要云服务器**——Next.js 21 个页面全部 `○ Static` 预渲染
- **不需要数据库**——纯静态营销站
- **完全免费**——Cloudflare Pages 免费套餐够用(无限流量、无限请求)

---

## 2. 前置准备(1 个)

| 项目 | 状态 |
|------|------|
| sanshunxie.com 域名 | ✅ 已购买 |
| Cloudflare 账号 | ⬜ 需注册(免费) |
| GitHub 账号 | ⬜ 需注册(免费) |

如果还没在 Cloudflare 注册:[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

---

## 3. 部署步骤

### Step 1:Push 代码到 GitHub(2 分钟)

```bash
cd "e:/obsidian/san-瞬写/san-shunxie-website"

# 第一次需要初始化
git init
git add .
git commit -m "v1.0 launch"

# 去 github.com/new 创建一个新 repo(名字:san-shunxie-website,Private)
# 然后:
git remote add origin https://github.com/你的用户名/san-shunxie-website.git
git branch -M main
git push -u origin main
```

### Step 2:Cloudflare Pages 连 GitHub(3 分钟)

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 左侧菜单点 **Workers & Pages**
3. 点 **Create application** → 选 **Pages** 标签 → **Connect to Git**
4. 选你的 GitHub 账号授权 → 选 `san-shunxie-website` repo
5. 构建设置:
   ```
   Project name:           san-shunxie-website
   Production branch:      main
   Framework preset:       Next.js
   Build command:          pnpm build
   Build output directory: .next
   Root directory:         (留空)
   ```
6. 点 **Save and Deploy**
7. **等 2-5 分钟**——Cloudflare 跑 `pnpm install` + `pnpm build`,首次会装依赖
8. 部署成功后会显示:`Deployment successful!` 和一个临时域名 `xxx.pages.dev`

### Step 3:绑定正式域名(2 分钟)

1. Cloudflare Pages 项目页 → **Custom domains** 标签
2. 点 **Set up a custom domain**
3. 输入 `sanshunxie.com` → 点 **Continue**
4. 因为域名已在 Cloudflare 购买(下一步操作),**DNS 记录会自动配置**——直接点 **Activate domain**
5. 再加一个 `www.sanshunxie.com`,重定向到主域

> ⚠️ 如果域名是在**阿里云/腾讯云**买的(不在 Cloudflare):
> - 需要手动去阿里云/腾讯云 DNS 控制台
> - 把 `sanshunxie.com` 和 `www.sanshunxie.com` 的 CNAME 指向 `你的项目.pages.dev`
> - 等 5-30 分钟 DNS 生效

### Step 4:验证(1 分钟)

打开浏览器访问:

- ✅ https://sanshunxie.com
- ✅ https://www.sanshunxie.com
- ✅ https://sanshunxie.com/pricing
- ✅ https://sanshunxie.com/download

应该都能打开,带 HTTPS 绿锁。

---

## 4. 环境变量(可选,部署后改)

部署成功后,如需修改环境变量(比如 `NEXT_PUBLIC_SITE_URL`):

1. Cloudflare Pages 项目页 → **Settings** → **Environment variables**
2. 添加 / 修改:
   - `NEXT_PUBLIC_SITE_URL` = `https://sanshunxie.com`
3. 点 **Save** → 触发自动重新部署

---

## 5. 域名邮箱配置(推荐,10 分钟)

把 5 个 `*@sanshunxie.com` 邮箱都收得到,推荐 **Cloudflare Email Routing**(免费):

1. Cloudflare 控制台 → 选择 sanshunxie.com 域名 → **Email** → **Email Routing** → **Get started**
2. 添加目标地址(你的个人邮箱,如 `yourname@gmail.com`)
3. 添加路由规则:
   ```
   hi@sanshunxie.com       → yourname@gmail.com
   enterprise@sanshunxie.com → yourname@gmail.com
   careers@sanshunxie.com   → yourname@gmail.com
   press@sanshunxie.com     → yourname@gmail.com
   support@sanshunxie.com   → yourname@gmail.com
   privacy@sanshunxie.com   → yourname@gmail.com
   legal@sanshunxie.com     → yourname@gmail.com
   dpo@sanshunxie.com       → yourname@gmail.com
   ```
4. **启用 Catch-all**:`*@sanshunxie.com` → 全部转发到 `yourname@gmail.com`

---

## 6. 部署后必做(影响真实功能)

### 6.1 替换占位 URL

代码里有 5 处占位商店链接,需要你回填真实 App Store / Microsoft Store 链接:

**查找位置**(grep `9PXXXX` 或 `apps.apple.com/app/sanshunxie`):
```
src/components/Nav.tsx
src/components/sections/Platforms.tsx
src/app/activate/[plan]/page.tsx
src/app/download/page.tsx
src/app/download/windows/page.tsx
```

**替换规则**:
- `https://apps.apple.com/app/sanshunxie` → 你的真实 App Store URL
- `https://apps.microsoft.com/store/detail/sanshunxie/9PXXXXXXXXX` → 你的真实 Microsoft Store URL(替换 `9PXXXXXXXXX`)

改完后 `git push`,Cloudflare 自动重新部署(30 秒生效)。

### 6.2 申请 Apple Developer 账号

上架 Mac App Store **必须**:
- 申请地址:[developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/)
- 费用:**¥688/年**(个人或公司)
- 审核周期:1-7 天
- 申请后到 App Store Connect 提交产品,审核 1-3 天

### 6.3 申请 ICP 备案(国内访问加速 + 合法合规)

- 在阿里云/腾讯云备案系统提交
- 所需:营业执照 / 法人身份证 / 联系方式
- 周期:7-20 天
- 通过后,在 Cloudflare Pages → Environment variables 添加:
  ```
  NEXT_PUBLIC_ICP_NUMBER=粤ICP备 XXXXXXXX 号
  ```
  (未来可加回到 Footer)

---

## 7. 常见问题

### Q:部署后访问速度慢?

A:国内访问会慢(200-500ms),因为 Cloudflare 海外 CDN 没走国内节点。备案后切到阿里云/腾讯云 CDN,国内 50ms 内。

### Q:push 后没自动部署?

A:Cloudflare Pages 默认监听 push 事件。如果没触发,去 Cloudflare Pages → 项目 → **Settings** → **Builds** → 检查 webhook 是否正常。

### Q:TypeScript 报错部署失败?

A:本地先跑:
```bash
cd "e:/obsidian/san-瞬写/san-shunxie-website"
./node_modules/.bin/tsc --noEmit
```
0 error 后再 push。

### Q:环境变量改了没生效?

A:Cloudflare Pages 改环境变量会触发重新部署。需等 1-2 分钟。

### Q:SSL 证书没自动签发?

A:Cloudflare 自动签发需要 5-30 分钟。可以在 Cloudflare Pages → 项目 → **Custom domains** 看状态。

---

## 8. 成本清单

| 项目 | 费用 | 备注 |
|------|------|------|
| sanshunxie.com 域名 | ¥60/年 | ✅ 已付 |
| Cloudflare Pages 托管 | ¥0 | 免费 |
| Cloudflare DNS | ¥0 | 免费 |
| Cloudflare Email Routing | ¥0 | 免费 |
| SSL 证书 | ¥0 | Cloudflare 自动 |
| Apple Developer 账号(可选,需上架 Mac App Store) | ¥688/年 | 上架必备 |
| ICP 备案(可选,国内访问加速) | ¥0 | 阿里云/腾讯云免费办 |
| **总计(纯官网部署)** | **¥60/年** | |

---

## 9. 部署后的下一步

官网是门面,**真正的产品**是 macOS 客户端。详见:
- 产品方案:`san 瞬写 —— 产品完整方案（V1.6）.docx`
- 开发方案:`san 瞬写 —— 产品开发需求执行方案.md`

按开发方案 §17.2 阶段 A 路线图,下一步是 **M1:macOS MVP 开发**(菜单栏 App + 全局热键 + ASR 实时转写)。
