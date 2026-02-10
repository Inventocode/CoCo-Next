---
sidebar_position: 3
---

# 构建和运行


## 一、准备

### 1. 克隆仓库到本地

```sh
git clone https://gitee.com/oldsquaw-coco-next/CoCo-Source-Code-Plan.git
# 或从 GitHub 克隆：
# git clone https://github.com/glacier-studio/CoCo-Source-Code-Plan.git
```

### 2. 安装依赖

```sh
$ npm install --legacy-peer-deps
```

## 二、【可选】自动还原代码

自动还原代码指使用自动化工具还原代码，包括以下几个步骤：

- 解包
- 转换
- 格式化

仓库中已包含自动还原后的代码，无需还原即可使用。

当然你也可以重新自动还原代码。

自动还原代码的设备性能要求：

- 有 4GiB 的行运行内存可用。

提示：如果设备内存不多，Node.js 的内存限制会比较小，可以通过设置环境变量 `NODE_OPTIONS = "--max_old_space_size=4096"` 来调大内存限制。

```sh
$ npm run auto-reverse
```

## 三、以开发模式打包运行解包后的代码

### 1. 启动开发服务

```sh
$ npm run start
```

### 2. 在浏览器中打开

在本机浏览器中打开 http://coco.localhost:7090/

## 四、构建生产版本

```sh
$ npm run build
```

Rspack CLI 环境变量：

| key | 解释 | 默认值 |
|:-:|:-:|:-:|
| publicPath | 加载资源文件的地址，详见 [Output - Rspack](https://rspack.rs/zh/config/output#outputpublicpath) | `/` |
| noHelper | 为方便调试，默认情况下会注入一些代理脚本以便于网页在非指定不注入这些文件 | / |
| analyze | 生成用于分析的构建信息 | / |

提示：你可以使用下面这个命令在本地启动一个服务器来查看生产版本。

```sh
$ npm run serve
```

依然是在 http://coco.localhost:7090/ 中打开
