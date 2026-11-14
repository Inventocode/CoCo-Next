---
sidebar_position: 4
---

# 自定义控件加载器

添加版本：1.23.6。

CoCo Next 插件可以添加自定义控件加载器来加载更多自定义控件。加载器相当于一个预处理程序，可以把自定义控件转换为 CoCo Next 支持的格式。

## 一、注册

### 1. 类型

自定义加载器分为两类：基于 CoCo 自定义控件和基于内置控件。

基于 CoCo 自定义控件的加载器，需要将自定义控件转换为 CoCo 自定义控件；基于内置控件的加载器，需要将控件转换为内置控件。

两种加载器分别通过 `registerCoCoWidgetLoader` 和 `registerInternalWidgetLoader` 在入口文件中注册。如：

```ts
import { registerCoCoWidgetLoader } from "@oldsquaw-coco-next/plugin-sdk"

registerCoCoWidgetLoader({
    widgetTypeName: "CoCoKit 控件",
    path: "loader.js"
})
```

### 2. 选项

#### widgetTypeName

类型：`string`

说明：加载的控件的类型名称，如：CoCo 控件、CoCoKit 控件。

#### path

类型：`string`

说明：控件加载器的路径，相对于资源根目录。

#### preprocess?

类型：`boolean | { jsx?: boolean, esModule?: boolean }`

说明：对代码进行预处理，将特殊语法转换为普通代码。默认只转换 JSX。

## 二、加载器实体

### 1. 创建实体文件和配置

在 `src` 目录中创建文件 `loader.ts`（若不使用 TypeScript，则为 `loader.js`）。

在 `rspack.config.js` 中添加相应的配置：

```ts
entry: {
    // 插件入口文件
    "index": path.resolve(__dirname, "src", "index"),
    // 控件加载器
    "loader": path.resolve(__dirname, "src", "loader")
},
```

### 2. CoCo 控件加载器

在 `loader.ts` 文件中，需要通过调用 `@oldsquaw-coco-next/plugin-sdk/coco-widget-loader` 模块中的的 `register` 来注册加载器实体：

```ts
import { ICoCoWidgetLoader, register } from "@oldsquaw-coco-next/plugin-sdk/coco-widget-loader"

register(class implements ICoCoWidgetLoader {
    public run
    public constructor(code: string) {
        this.run = new Function(
            "require", "exports", "InvisibleWidget", "VisibleWidget", "React", code
        ) as ICoCoWidgetLoader["run"]
    }
})
```

加载器实体是一个实现了 `ICoCoWidgetLoader` 接口的类。加载器需要在 `run` 方法中执行控件。

:::tip
按照 CoCo 的自定义控件实现，控件在被加载时会运行两次：第一次用来收集依赖，此时 `require` 会返回 `undefined`；第二次才是正式运行。相应地，加载器的 `run` 方法也会被调用两次。
:::

:::tip
`run` 方法可以返回 `Promise`，CoCo Next 会等待 `Promise` 完成。
:::

### 3. 内置控件加载器

### 4. 注意事项

**每个控件**的加载器都会在独立的沙箱中运行。也就是说，每个控件的加载器以及插件的入口程序都是**相互隔离**的。
