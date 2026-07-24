<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Glass Portfolio — 玻璃态个人作品集，纯 HTML/CSS/JS 构建，支持深浅双主题与 Canvas 动态背景">
</p>

# Glass Portfolio

采用 **Glass Morphism（毛玻璃）** 设计语言的个人作品集网站。纯 HTML / CSS / JavaScript 构建，零依赖，支持深浅双主题一键切换。

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MulanPSL_2.0-5b9eff?style=flat-square" alt="License">
</p>

## 预览

<p align="center">
  <img src="./assets/readme/showcase.png" width="100%" alt="首页、作品、简历、生活四个页面实际截图展示墙">
</p>

## 这是什么

一个包含 6 个页面的个人作品集网站：

| 页面 | 说明 |
|:---|:---|
| 首页 | Hero 视频、个人介绍、技能、项目经历 |
| 作品 | 项目卡片网格展示 |
| 简历 | 技能进度条、教育经历时间线 |
| 博客 | 文章列表与分类 |
| 生活 | 旅行/美食/运动照片墙 |
| 联系 | 表单与社交链接 |

## 为什么不同

### 全站毛玻璃

所有卡片、导航栏、侧边栏统一使用半透明背景 + `backdrop-filter: blur(16px)` + 高光边框：

```css
background: rgba(22, 27, 34, 0.55);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.10);
```

配合细密网格背景与径向渐变光晕，让毛玻璃效果有可靠的视觉参照物。

### 双主题

深色 `#5b9eff`（Azure Blue）/ 浅色 `#1e40af`（Sapphire Blue），一键切换，所有组件（卡片、导航、Canvas 动画）实时响应。

### Canvas 动态背景

基于 Paper.js：星空粒子随鼠标移动反向洒落、三角形漂浮旋转、花瓣飘落、鼠标火花。

## 快速开始

直接在浏览器打开 `index.html`，或启动本地服务器：

```bash
python -m http.server 8080
```

访问 `http://localhost:8080`。建议使用 Chrome / Firefox / Edge。

## 技术栈

| 层 | 技术 |
|:---|:---|
| 结构 | HTML5 |
| 样式 | CSS3（Flexbox、Backdrop Filter、CSS 变量） |
| 交互 | 原生 JavaScript + jQuery |
| 动画 | Paper.js（Canvas 矢量图形） |
| 其他 | Prism.js、Marked.js、QRCode.js |

## 项目结构

```
├── index.html          # 主入口
├── home.html           # 作品页
├── blog.html           # 博客页
├── resume.html         # 简历页
├── live.html           # 生活页
├── contact.html        # 联系页
├── css/                # 样式（base.css 含设计令牌）
├── js/                 # 脚本（base.js 含主题切换）
├── img/                # 媒体资源
└── assets/readme/      # README 视觉资产
```

## 来源与许可证

本项目基于 [@wttAndroid/web-resume-resume](https://github.com/wttAndroid/web-resume-resume)（MulanPSL-2.0）二次开发，在此向原作者 [@wttAndroid](https://github.com/wttAndroid) 表示感谢。

修改内容包括：重构为 Glass Morphism 设计语言、修复双主题切换、升级为 Azure/Sapphire 色彩系统、科技网格背景。原始 Canvas 动画（星空、蝴蝶、花瓣）来自原项目。

本项目同样遵循 **木兰宽松许可证第 2 版（MulanPSL-2.0）**。