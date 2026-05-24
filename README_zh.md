# NARAÈ

> 高级浴盐芳香疗法 — 纯净中性奢华

[![Vercel](https://img.shields.io/badge/Vercel-已部署-black?logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[English](README.md) | [Bahasa Indonesia](README_id.md) | **中文**

---

## 🌸 关于

NARAÈ 是一个本地浴盐芳香疗法品牌，秉承**纯净中性奢华**的理念。本网站作为产品目录，引导客户前往市场平台（Shopee）进行购买。网站采用现代Web技术构建，提供高端直观的购物体验，体现NARAÈ产品的卓越品质。

NARAÈ旨在提供奢华而平价的放松体验。每款浴盐均采用高品质天然成分配制，舒缓心灵并滋养肌肤。凭借优雅的包装设计和迷人的香氛，NARAÈ带来值得每天享受的自我护理仪式。

### 产品

| 规格 | 容量 | 价格 | 链接 |
|------|------|------|------|
| 迷你装 | 30g | Rp 25.000 | [Shopee](https://shopee.co.id) |
| 中号装 | 100g | Rp 50.000 | [Shopee](https://shopee.co.id) |
| 尊享装 | 250g | Rp 99.000 | [Shopee](https://shopee.co.id) |

---

## 🚀 在线演示

**生产URL：** `https://narae.vercel.app`

---

## ✨ 功能特点

- **现代毛玻璃设计** — 采用磨砂玻璃效果的高端UI，营造奢华优雅的感觉
- **响应式布局** — 移动优先，在所有设备上提供一致的体验
- **快速加载** — 使用Next.js静态站点生成，页面在数秒内加载
- **SEO优化** — Meta标签、Open Graph和语义化HTML，确保良好的搜索引擎可见性
- **零后端** — 100%静态，无需数据库，运营成本最低
- **直接市场平台集成** — 购买按钮直达Shopee和WhatsApp，便于交易

---

## 🛠️ 技术栈

- **框架：** [Next.js 16](https://nextjs.org/) (App Router) — 具有服务端渲染的全功能React框架
- **运行时：** [React 19](https://react.dev/) — 最新UI库，性能增强
- **样式：** [Tailwind CSS 4](https://tailwindcss.com/) — 实用优先的CSS框架，快速一致的样式设计
- **图标：** [Lucide React](https://lucide.dev/) — 轻量现代图标集
- **字体：** Cormorant Garamond、Inter、Playfair Display — 优雅的衬线与无衬线字体组合
- **托管：** [Vercel](https://vercel.com) (免费层) — 具有全球CDN和自动SSL的部署平台

---

## 📦 安装

```bash
# 克隆仓库
git clone https://github.com/mulkymalikuldhrs/narae.git
cd narae/website

# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 生产构建
npm run build
```

---

## 🎨 设计系统

### 颜色
- **奶油色：** `#F5F0E8` — 温暖舒缓的主背景
- **金色：** `#C9B896` — 奢华感的强调色和CTA按钮
- **炭黑色：** `#2D2D2D` — 优雅易读的主文本
- **薰衣草色：** `#E8DFE8` — 柔和的女性化次要强调色
- **暖灰色：** `#6B6B6B` — 不突兀的次要文本

### 排版
- **标题：** Cormorant Garamond（衬线体）— 经典衬线字体，营造奢华感
- **正文：** Inter（无衬线体）— 现代无衬线字体，易于阅读
- **装饰：** Playfair Display（衬线体）— 特殊元素的装饰性衬线字体

### 组件
- 带有迷人背景模糊效果的毛玻璃卡片
- 优雅的渐变文字效果
- 流畅响应的悬停动画
- 适配所有屏幕尺寸的响应式网格

---

## 📁 项目结构

```
NARAE/
├── website/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 带字体的根布局
│   │   ├── page.tsx            # 主页
│   │   ├── products/
│   │   │   └── page.tsx        # 产品目录页
│   │   └── globals.css         # 全局样式和毛玻璃效果
│   ├── components/             # React组件
│   │   ├── Header.tsx          # 导航
│   │   ├── Hero.tsx            # 英雄区
│   │   ├── ProductCard.tsx     # 产品展示卡片
│   │   ├── ProductGrid.tsx     # 产品网格
│   │   ├── Benefits.tsx        # 功能区
│   │   ├── Testimonials.tsx    # 评价轮播
│   │   ├── Footer.tsx          # 页脚
│   │   └── Button.tsx          # 可复用按钮
│   ├── lib/
│   │   └── products.ts         # 产品数据
│   └── public/images/          # 静态资源
├── NARAE.md                    # 商业计划
├── SPEC.md                     # 网站规格
├── AGENTS.md                   # 开发指南
├── CHANGELOG.md                # 版本历史
└── README.md                   # 本文件
```

---

## 🚀 部署

### Vercel（推荐）

1. 推送代码到GitHub
2. 在[Vercel](https://vercel.com)导入项目
3. 自动部署

### 手动构建

```bash
cd website
npm run build
# 将.next文件夹上传到主机
```

---

## 📄 许可证

MIT许可证 — 可自由使用本模板构建您自己的项目。详见[LICENSE](LICENSE)。

---

## 👤 作者

**Mulky Malikul Dhaher**

- 📧 邮箱：[mulkymalikuldhaher@email.com](mailto:mulkymalikuldhaher@email.com)
- 💬 WhatsApp：[+6285322624048](https://wa.me/6285322624048)
- 🌐 网站：[NARAÈ](https://narae.vercel.app)
- 🐙 GitHub：[@mulkymalikuldhrs](https://github.com/mulkymalikuldhrs)

---

<p align="center">
  <strong>平静心灵，宠爱自己。</strong>
</p>

<p align="center">
  用 ❤️ 在雅加达制作
</p>
