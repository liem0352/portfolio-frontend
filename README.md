# 个人作品集网站

> 一个玻璃态设计的现代化个人作品集前端网站

## 项目预览

![Portfolio Screenshot](screenshot.png)

## 项目简介

个人作品集前端网站，使用纯 HTML + CSS + JavaScript 构建，包含多个页面模块，展示个人项目、博客文章、简历信息和联系方式。网站采用 **Glass Morphism（毛玻璃）** 设计语言，配合科技感网格背景，集成了丰富的视觉特效与交互功能。

## 设计特色

### 玻璃态设计（Glass Morphism）
全站组件采用毛玻璃效果，核心三要素：
- **半透明背景**：深色 `rgba(22, 27, 34, 0.55)` / 浅色 `rgba(255, 255, 255, 0.60)`
- **背景模糊**：`backdrop-filter: blur(16px)` 营造磨砂质感
- **高光边框**：`1px solid rgba(255, 255, 255, 0.10)` 模拟玻璃边缘反光

### 双主题系统
- 深色主题：`#5b9eff`（Azure Blue）主色 + 深灰背景
- 浅色主题：`#1e40af`（Sapphire Blue）主色 + 浅灰背景
- 一键切换，所有组件实时响应主题变化

### 科技感背景
- 径向渐变蓝色光晕
- 40px 细密网格线
- Canvas 动态星空 + 三角形 + 花瓣动画

## 致敬与来源声明

本项目基于 [@wttAndroid/web-resume-resume](https://github.com/wttAndroid/web-resume-resume)（木兰宽松许可证 MulanPSL-2.0）进行二次开发与修改。

在此向原作者表示衷心感谢：

- **原始项目**：[wttAndroid/web-resume-resume](https://github.com/wttAndroid/web-resume-resume)
- **原作者**：[@wttAndroid](https://github.com/wttAndroid)
- **许可证**：MulanPSL-2.0（木兰宽松许可证）

本项目在原项目基础上进行了以下修改：
- 替换个人信息为占位符，清除隐私数据
- 调整部分页面内容与布局
- 优化部分交互逻辑

原始的 Canvas 星空动画、蝴蝶加载动画、花瓣特效等核心视觉设计均来自原项目。

## 功能页面

| 页面 | 文件 | 说明 |
|------|------|------|
| 主入口 | `index.html` | 网站主入口，含视频开场与导航 |
| 首页 | `home.html` | 个人介绍与项目展示 |
| 博客 | `blog.html` | 技术博客文章列表 |
| 简历 | `resume.html` | 个人简历与教育经历 |
| 联系方式 | `contact.html` | 联系表单与社交链接 |
| Markdown 展示 | `showmd.html` | 在线 Markdown 渲染演示 |
| Demo | `Demo1.html` | 特效演示页 |

## 视觉特效

### 背景动画
- **Canvas + Paper.js**：动态星空背景，星星根据鼠标移动反向洒落
- **三角形动画**：背景中三角形移动与旋转，增加动态感
- **花瓣特效**：花瓣在背景中飘落旋转

### 交互效果
- **图片放大查看**：点击图片弹出模态框查看大图
- **滚动跟随**：元素根据滚动位置动态添加/移除样式
- **蝴蝶加载动画**：页面加载时的蝴蝶动画，加载完成后淡出
- **鼠标火花效果**：鼠标移动时在周围生成星星状火花

### 页面功能
- **导航菜单**：顶部导航，小屏幕下转为可折叠汉堡菜单
- **音乐播放器**：右下角背景音乐播放器，支持暂停/播放
- **视频播放**：视频播放功能，支持点击播放
- **联系表单**：姓名、邮箱、消息表单提交
- **主题切换**：深色/浅色主题切换
- **技能进度条**：动态显示技能熟练程度
- **作品集展示**：项目卡片展示，含图片与描述
- **社交链接**：GitHub、QQ 等社交平台图标链接

## 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 | 页面结构 |
| CSS3 | 样式与动画（Flexbox 布局、过渡效果） |
| 原生 JavaScript | 交互逻辑 |
| jQuery | DOM 操作与事件处理 |
| Paper.js | Canvas 矢量图形动画 |
| Prism.js | 代码语法高亮 |
| Marked.js | Markdown 解析渲染 |
| QRCode.js | 二维码生成 |

## 设计特点

### 色彩搭配
- 主色（深色）：`#5b9eff`（Azure Blue 蔚蓝）
- 主色（浅色）：`#1e40af`（Sapphire Blue 宝蓝）
- 背景：科技网格 + 径向渐变
- 玻璃态：半透明背景 + 16px 模糊 + 高光边框

### 布局与排版
- 对称布局：顶部导航栏与内容区域平衡设计
- 网格系统：作品集与技能展示采用网格布局
- 响应式设计：适配不同屏幕尺寸

### 动画与过渡
- 渐变动画：鼠标悬停时颜色平滑过渡
- 淡入淡出：页面加载与内容切换时的过渡效果

## 项目结构

```
├── index.html              # 主入口
├── home.html               # 首页
├── blog.html               # 博客
├── resume.html             # 简历
├── contact.html            # 联系方式
├── showmd.html             # Markdown 展示
├── Demo1.html              # 特效演示
├── css/                    # 样式文件
│   ├── base.css            # 基础样式
│   ├── index.css           # 首页样式
│   ├── home.css            # home 页样式
│   ├── blog.css            # 博客样式
│   ├── resume.css          # 简历样式
│   ├── contact.css         # 联系方式样式
│   ├── fly.css             # 飞行动画
│   ├── live.css            # 直播样式
│   ├── prism.css           # 代码高亮样式
│   ├── prism-line-numbers.css  # 代码行号样式
│   └── font-awesome.min.css   # 字体图标
├── js/                     # 脚本文件
│   ├── base.js             # 基础脚本
│   ├── index.js            # 首页脚本
│   ├── canvas.js           # Canvas 动画
│   ├── resume.js           # 简历脚本
│   ├── jq.js               # jQuery
│   ├── jquery.min.js       # jQuery 压缩版
│   ├── marked.js           # Markdown 解析
│   ├── prism.js            # 代码高亮
│   ├── paper-full.min.js   # Paper.js 矢量图形
│   └── qrcode.js           # 二维码生成
├── img/                    # 图片与媒体资源
│   ├── back/               # 背景图片
│   ├── project/            # 项目截图
│   ├── WhyDon'tWe.mp4      # 展示视频
│   ├── 展示视频.mp4         # 项目展示视频
│   ├── music.mp3           # 背景音乐
│   └── ...                 # 其他图片资源
├── 主要的特效和功能说明.txt  # 特效功能详细说明
└── README.md
```

## 使用方式

直接在浏览器中打开 `index.html` 即可预览。

建议使用现代浏览器（Chrome、Firefox、Edge）以获得最佳体验。

## 注意事项

- 部分特效依赖 Canvas 和 Paper.js，需要浏览器支持
- 背景音乐和视频需要浏览器允许自动播放
- 建议在桌面端浏览以获得完整体验

## 许可证

本项目基于 [wttAndroid/web-resume-resume](https://github.com/wttAndroid/web-resume-resume)（MulanPSL-2.0）二次开发，遵循木兰宽松许可证第2版。

- 原始许可证：MulanPSL-2.0
- 本修改版本同样遵循 MulanPSL-2.0 许可证
