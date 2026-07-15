---
title: 从零开始的互联网生活 —— 互联网指南
published: 2026-07-15
description: 开始互联网生活吧！
category: 教程
draft: false
pinned: true
lang: zh-CN      # 仅当文章语言与 config.ts 中的站点语言不同时设置
---
# 从零开始的互联网生活 —— 互联网指南

![计数](https://js.yhpop.com/api/counter?name=%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E4%BA%92%E8%81%94%E7%BD%91%E7%94%9F%E6%B4%BB&theme=rule34&length=7&scale=1&offset=0&align=center&pixelate=on&darkmode=auto&base=500)



欢迎来到数字世界！互联网是一片广阔的海洋，但在出发前，我们需要先认清脚下的“船只”并学会如何安全地航行。

## 第一部分：分清操作系统

操作系统（Operating System, OS）是管理电脑或手机硬件与软件的核心程序。由于不同系统的架构差异，它们所支持的“语言”——即**可执行文件格式**——也是不同的。

### 操作系统对照表

| 俗称 | 名称 | 优点 | 缺点 | 可执行文件后缀 |
| :--- | :--- | :--- | :--- | :--- |
| **安卓手机** | **Android** | 开源自由，文件管理方便 | 系统碎片化严重，后台管理较乱 | `.apk` |
| **鸿蒙手机** | **HarmonyOS** | 分布式架构，多设备协同强 | 生态处于建设期，应用兼容安卓 | `.hap` (兼容 `.apk`) |
| **苹果手机** | **iOS** | 系统封闭流畅，隐私保护好 | 文件管理受限，无法随意安装应用 | `.ipa` |
| **电脑** | **Windows** | 软件兼容性最强，办公娱乐首选 | 系统冗余较多，易受病毒困扰 | `.exe`, `.msi` |

> **特别提醒：** 可执行文件就像“火车票”。例如 `.apk` 是安卓的票，而 `.hap` 是鸿蒙原生应用的票。目前鸿蒙系统具备良好的安卓兼容性，可以安装大多数 `.apk` 文件。如果你要在电脑上运行手机应用，通常需要安装**安卓模拟器**。

### 关于“后缀名”的小知识
文件名由“名称”和“后缀名”组成（例如：`照片.png`）。
*   **文件名**：告诉人类这是什么（如：寒假合影）。
*   **后缀名**：告诉电脑该用什么软件打开它。

| 后缀名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `.png`, `.jpg` | 图片 | 常见的图像格式 |
| `.zip`, `.rar`, `.7z` | 压缩包 | 将多个文件打包压缩，方便传输 |
| `.txt`, `.docx` | 文档 | 纯文本或 Word 文档 |

---

## 第二部分：翻过那堵墙

由于网络环境的特殊性，访问部分国际互联网资源时，需要使用代理工具（俗称**梯子**、**加速器**、**翻墙软件**）。

### 为什么推荐“客户端+订阅”模式？
市面上很多“一键翻墙”软件往往是不安全的，因为你无法得知开发者的背景，你的上网数据可能会被监控甚至窃取。

**安全做法**：使用开源或受信任的客户端软件，配合**订阅链接**使用。这种方式下，软件本身只是一个“通道”，你的数据通过加密协议传输，安全性大幅提升。

### 常用代理工具推荐

| 平台 | 推荐软件 | 支持协议 | 说明 | 下载链接 |
| :--- | :--- | :--- | :--- | ---- |
| **Windows** | **Clash Verge Rev** | Shadowsocks, V2Ray, Trojan, Reality | 目前最主流、功能最强大的工具 | [https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.1/Clash.Verge_2.5.1_x64-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.1/Clash.Verge_2.5.1_x64-setup.exe) |
| **Android/鸿蒙** | **Clash Meta / Surfboard** | 同上 | 手机端体验极佳 | [https://github.com/MetaCubeX/ClashMetaForAndroid/releases/tag/v2.11.31](https://github.com/MetaCubeX/ClashMetaForAndroid/releases/tag/v2.11.31) |
| **iOS** | **Shadowrocket** (小火箭) | 同上 | **注意**：需使用非中国区 Apple ID 在 App Store 购买下载 | 需要在App Store中购买 |

下载速度太慢？可以复制下载链接到[GitHub文件下载加速](https://ghproxylist.com/)去下载

### 如何开始使用？

1.  **获取订阅**：你需要向服务提供商购买“订阅链接”（通常表现为一个以 `https://` 开头的网址）。
2.  **导入订阅**：将链接复制到上述软件的“订阅”或“配置”栏中，点击更新。
3.  **开启代理**：选择一个节点，开启系统代理即可访问互联网。

> **安全提示**：
> *   **不要使用来路不明的免费加速器**，它们往往通过读取你的个人信息来盈利。
> *   尽量选择提供 **“零日志策略” (No-log policy)** 的服务商，这意味着他们不会保存你的上网记录。
> *   在连接代理时，尽量访问带有 `https` 加密标志的网站（网址栏有锁图标）。

具体教程可阅读以下文章：

[Clash Meta for Android 下载与配置教程：安卓订阅导入、TUN 模式和常见问题](https://clashrun.com/clash-meta-for-android/)

[Clash Verge Rev 下载与安装教程：Windows/macOS 配置、订阅导入和常见问题](https://clashrun.com/clash-verge-rev/)

但我不建议你从他那里下载和购买加速器，我推荐使用[丛雨云](https://congyu.moe/)，柚子厨专用加速器，我用了快两年了，高速且稳定

## 第三部分.待写......
