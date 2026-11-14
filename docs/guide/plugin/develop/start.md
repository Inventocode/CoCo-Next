---
sidebar_position: 2
---

# 开始编写插件

## 一、搭建开发环境

### 1. 获取模板

```sh
git clone https://gitee.com/oldsquaw-coco-next/CoCo-Next-Plugin-Template.git
```

### 2. 进入模板目录

建议重命名模板文件夹为项目名称，然后在其中重新打开终端。

若不重命名，可以通过命令直接进入目录：

```sh
cd CoCo-Next-Plugin-Template
```

### 3. 安装依赖

```sh
npm install
```

### 4. 启动开发服务

```sh
npm run start
```

启动后会产生类似于下面的输出：

```
npm notice run @oldsquaw-coco-next/plugin-template@1.0.0 start
npm notice run rspack serve --config rspack.config.js
  ➜  Local:    http://localhost:8080/
  ➜  Network:  http://10.42.0.1:8080/

●  ━━━━━━━━━━━━━━━━━━━━━━━━━ (100%) done
3 assets
29 modules
Rspack 2.1.8 compiled successfully in 93 ms
```

其中 `http://localhost:8080/` 即为插件的地址，可以在 **头部菜单栏 》设置 》插件 》开发** 界面添加插件到 CoCo Next 中。

## 二、项目文件

### 1. 目录结构

模板的目录结构为：

```
.
├── package.json
├── package-lock.json
├── README.md
├── rspack.config.js
├── src
│   └── index.ts
├── tsconfig.json
├── tsconfig.node.json
└── tsconfig.web.json
```

### 2. 文件功能

- `package.json`：NPM 包文件，包含了插件的基本信息。
- `package-lock.json`：NPM 依赖锁定文件，用于保持每次安装时依赖结构的一致性。
- `README.md`：自述文件，对插件进行较为详细的介绍。
- `rspack.config.js`：Rspack 配置，默认使用 Rspack 打包，你也可以更换其他打包工具。
- `src/index.ts`：入口文件，若不使用 TypeScript，可将扩展名改为 `.js`。
- `tsconfig.json` / `tsconfig.node.json` / `tsconfig.web.json`：TypeScript 配置文件，如果不使用 TypeScript，可以删除。

## 三、调用功能注册函数

功能注册函数需要从 `@oldsquaw-coco-next/plugin-sdk` 中导入，并在顶层调用。例如：

```ts
import { onEditorStart } from "@oldsquaw-coco-next/plugin-sdk"

onEditorStart(() => {
    console.log("编辑器启动啦！")
})
```
