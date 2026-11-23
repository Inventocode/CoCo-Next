---
sidebar_position: 6
---

# 自定义插件商城

添加版本：1.23.7。

## 一、基本功能

### 1. 注册基本信息

使用 `registerPluginShop` 来注册插件基本信息。例如：

```ts
import { registerPluginShop } from "@oldsquaw-coco-next/plugin-sdk"

registerPluginShop({
    name: "示例插件商城",
    externalURL: "https://example.com/plugin"
})
```

#### name

类型：`string`

说明：显示的商城的名称。

#### externalURL?

类型：`string`

说明：商城的外部链接，当“在外部打开”按钮被点击时打开此链接。若不设置，则不显示该按钮。

### 2. 注册加载函数

#### (1) 插件信息字段

##### packageName

类型：`string`

说明：包名，与 NPM 包名一致。

##### version

类型：`string`

说明：版本号。

##### name

类型：`string`

说明：在编辑器中显示的名称。

##### icon?

类型：`string`

说明：图标。

##### description

类型：`string`

说明：描述。

##### link

类型：`string`

说明：资源链接，下载插件时从该连接开始下载。

该链接应指向插件所有资源的索引文件，索引文件以 JSON 对象的形式记录所有资源的连接。例如：

```json
{
    "index.js": "https://example.com/index.js",
    "lib/loader.js": "https://example.com/lib/loader.js",
    "package.json": "https://example.com/package.json",
    "README.md": "https://example.com/README.md"
}
```

#### (2) 注册插件列表加载函数

使用 `onPluginShopLoad` 注册插件列表加载函数。插件列表使用分页加载机制，插件列表加载函数每次只加载一页。该函数以对象形式接受两个参数：`page` 和 `pageSize`，分别表示当前页数（从 1 开始数）和每页大小。该函数需要返插件信息列表和总页数。例如：

```ts
import axios from "axios"
import { onPluginShopLoad } from "@oldsquaw-coco-next/plugin-sdk"

onPluginShopLoad(async ({ page, pageSize }) => {
    const { data } = (await axios.get("https://example.com/api/plugins", {
        params: { page, page_size: pageSize }
    }))
    return {
        list: data.list,
        totalPages: data.total_pages
    }
})
```

:::tip
`pageSize` 仅仅表示预期的每页大小，实际每页的插件数量不必等于给定的 `pageSize`。
:::

#### (3) 插件信息加载函数

使用 `onPluginShopGet` 注册插件信息加载函数。该函数用于加载特定的插件信息。它接受一个 `packageName` 参数，并需要返回对应插件的信息。例如：

```ts
import axios from "axios"
import { onPluginShopGet } from "@oldsquaw-coco-next/plugin-sdk"

onPluginShopGet(async (packageName) => {
    return (await axios.get("https://example.com/api/plugins", { params: { custom_id: packageName } })).data
})
```

## 二、自定义选项

自定义选项由用户选择，并传递给插件列表加载函数。

可以使用 `options` 字段来添加自定义选项。例如：

```ts
import { onPluginShopGet, onPluginShopLoad, registerPluginShop } from "@oldsquaw-coco-next/plugin-sdk"

// 添加自定义选项的类型定义
declare module "@oldsquaw-coco-next/plugin-sdk" {
    interface PluginShopLoadCustomParams {
        sort: "latest" | "views"
    }
}

registerPluginShop({
    name: "示例插件商城",
    externalURL: "https://example.com/plugin"
    options: [
        {
            key: "sort",
            options: [
                { label: "最新", value: "latest" },
                { label: "最热", value: "views" }
            ]
        }
    ]
})
```

选项值会被传递给插件列表加载函数。例如：

```ts
import axios from "axios"
import { onPluginShopLoad } from "@oldsquaw-coco-next/plugin-sdk"

onPluginShopLoad(async ({ page, pageSize, sort }) => {
    const { data } = (await axios.get("https://example.com/api/plugins", {
        params: { page, page_size: pageSize, sort }
    }))
    return {
        list: data.list,
        totalPages: data.total_pages
    }
})
```