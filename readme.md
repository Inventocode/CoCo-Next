# 编程猫 CoCo 源代码计划

![QQ-编程猫非官方技术交流群（708553284）](https://img.shields.io/badge/QQ-编程猫非官方技术交流群（708553284）-blue?style=flat-square)

还原编程猫 CoCo 编辑器、CoCo Player 等的代码。

> [!IMPORTANT]
>
> 停更通知：
>
> 该项目唯一的核心维护者 SLIGHTNING 由于学业繁忙，将无法维护该项目。预计将于 2026 年 6 月 17 日后恢复更新。

## 一、进度

| 模块 | 抓取 | 拆包 | 语法升级 | JSX 反向转换 | 反压缩 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| CoCo Home | ✅ | 75% | ❌ | ❌ | / |
| CoCo Editor | ✅ | 75% | ❌ | ❌ | ❌ |
| CoCo Editor Player | ✅ | 75% | ❌ | ❌ | ❌ |
| CoCo Editor ServiceWorker | ✅ | ✅ | ❌ | / | ❌ |
| CoCo Player | ✅ | ❌ | ❌ | ❌ | ❌ |

过程说明：

- 抓取：把公开文件的代码放到仓库中；
- 拆包：把打包过的代码拆成模块；
- 语法升级：将降级后的语法转换成降级前的；
- JSX 反向转换：将转换后的 `React.createElement` 调用转换为 JSX；
- 反压缩：给模块名称、代码中的量的名称等重新设置一个有意义的名称。

符号说明：

- `✅`：全部完成；
- `❌`：一点没动；
- `/`：不需要；
- `xx%`：完成比例（估计值，可能不准确）。

## 二、构建和运行

### 1.准备

#### (1)克隆仓库到本地

```sh
git clone https://github.com/glacier-studio/CoCo-Source-Code-Plan.git
# 或从 Gitee 克隆：
# git clone https://gitee.com/glacier-studio/CoCo-Source-Code-Plan.git
```

#### (2)安装依赖

```sh
$ npm install --legacy-peer-deps
```

### 2.解包代码

仓库中已包含解包后的代码，无需解包即可使用。

当然你也可以重新解包代码。

解包代码的设备性能要求：

- 有 4GiB 的行运行内存可用。

提示：如果设备内存不多，Node.js 的内存限制会比较小，可以通过设置环境变量 `NODE_OPTIONS = "--max_old_space_size=4096"` 来调大内存限制。

```sh
$ npm run unpack:home
$ npm run unpack:shared
$ npm run unpack:editor
$ npm run unpack:editor-service-worker
$ npm run unpack:player
$ npm run unpack:editor-player
```

解包后有些代码有些小问题，请自行解决。

### 3.以开发模式打包运行解包后的代码

#### (1)启动开发服务

```sh
$ npm run start
```

#### (2)在浏览器中打开

在本机浏览器中打开 <http://coco.localhost:7090/>

## 三、目录结构说明

### 1.公开文件（/public）

编程猫 CoCo 编辑器的公开代码文件（经格式化）。

不保留历史版本。

当存储的前版本为 v1.21.7。

### 2.未还原的（/unrestored）

已拆成模块但还未还原的代码。

### 3.源文件（/src）

还原过的的代码。

## 四、参与贡献

### 1.直接贡献

> [!WARNING]
>
> 请注意：
>
> 参与直接贡献时，请确保做出修改后的代码能够正常打包运行。

#### (1)解包代码

本项目核心解包代码（/scripts/unpack.ts）由于功能复杂且经常改动，多人编辑容易产生冲突，暂不接受 PR，如果确实想要贡献核心解包代码，请提前与我们联系，以便减少冲突。

目前一下部分需要贡献：

- 编辑器依赖项排除。

#### (2)反压缩

请安如下步骤进行：

1.把目标代码移动到 `/src` 目录中恰当的位置；
2.在相应的解包程序中添加移动规则；
3.重命名给模块名称、代码中的量的名称等重新设置一个有意义的名称。

### 2.间接贡献

#### (1)利用还原出来的代码制作其他功能

对于本项目成果的使用同样是对本项目的贡献。

你可以使用本项目还原出来的代码制作其他功能，如：制作绕审核 Player、CoCo Pro。

> [!WARNING]
>
> 但是请注意：
>
> 请不要更改未还原的代码（位于 /unrestored 中的代码），这些代码可能经常变更！
