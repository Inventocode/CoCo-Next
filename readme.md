# CoCo Next

下一代 CoCo 编辑器。

基于 [CoCo 源代码计划](https://gitee.com/glacier-studio/CoCo-Source-Code-Plan) 二次开发的 CoCo，旨在通过直接修改编辑器代码的方式修复 CoCo 的缺陷、增强 CoCo 的功能。

## 使用指南

CoCo Next 正处于技术探索和早期开发阶段，暂时没有部署。要体验 CoCo Next，请参考 [构建和运行](#构建和运行)

## 构建和运行

### 1.准备

#### (1)克隆仓库到本地

```sh
git clone https://gitee.com/oldsquaw/CoCo-Next.git
cd CoCo-Next
```

#### (2)安装依赖

```sh
$ npm install --legacy-peer-deps
```

### 2.以开发模式运行

#### (1)启动开发服务

```sh
$ npm run start
```

#### (2)在浏览器中打开

在本机浏览器中打开 <http://coco-next.localhost:7090/>。

### 3.构建生产版本

```sh
$ npm run build
```

提示：你可以使用下面这个命令在本地启动一个服务器来查看生产版本。

```sh
$ npm run serve
```

依然是在 <http://coco-next.localhost:7090/> 中打开。

## 参与贡献

不要修改位于`/unrestored`中的代码，如果确实需要修改，请先在 [CoCo 源代码计划](https://gitee.com/glacier-studio/CoCo-Source-Code-Plan) 中还原要修改的代码。

## 社区与支持

- QQ 交流群：907170983，获取技术支持、插件资源及参与功能讨论
- 开源协议：AGPL-3.0
