---
sidebar_position: 1
---

# 📦️ 构建和运行

## 一、准备

### 1. 克隆仓库到本地

```sh
git clone https://gitee.com/oldsquaw-coco-next/CoCo-Next.git
cd CoCo-Next
```

### 2. 安装依赖

```sh
npm install --legacy-peer-deps
```

## 二、以开发模式运行

### 1. 启动开发服务

```sh
npm run start
```

### 2. 在浏览器中打开

在本机浏览器中打开 [http://coco-next.localhost:7090/](http://coco-next.localhost:7090/)。

## 三、构建生产版本

```sh
npm run build
```

Rspack CLI 环境变量：

| key | 解释 | 默认值 |
|:-:|:-:|:-:|
| publicPath | 加载资源文件的地址，详见 [Output - Rspack](https://rspack.rs/zh/config/output#outputpublicpath) | `/` |
| analyze | 生成用于分析的构建信息 | / |
| noPublicCDN | 不使用公共 CDN 来加载第三方依赖 | / |

:::tip

你可以使用下面这个命令在本地启动一个服务器来查看生产版本。

```sh
npm run serve
```

依然是在 [http://coco-next.localhost:7090/](http://coco-next.localhost:7090/) 中打开。

:::
