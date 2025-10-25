# CoCo Next

下一代 CoCo 编辑器。

## 一、介绍

### 1.简介

基于 [CoCo 源代码计划](https://gitee.com/glacier-studio/CoCo-Source-Code-Plan) 二次开发的 CoCo，旨在通过直接修改编辑器代码的方式修复 CoCo 的缺陷、增强 CoCo 的功能。

### 2.与 CoCoPro 的异同

CoCo Next 与 CoCoPro 是不同的两个项目，有较大区别，但也在一些关联。

#### (1)相同点

二者都是对 CoCo 编辑器的扩展优化。

#### (2)不同点

CoCo Next 基于 CoCo 源代码计划构建，通过直接修改编辑器代码的方式修改 CoCo，CoCoPro 通过修改全局 API 和 CoCo 编辑器的分发文件的方式修改 CoCo。

CoCo Next 期望利用更加先进的技术，深度修改 CoCo。

### 3.大饼

打勾的是已经实现的功能特性，没打勾的是 SLIGHTNING 画的大饼，具体实现就要靠各位大佬发力了。

- 功能
  - 扩展性
  - 自定义控件
    - 限制
    - [x] 移除导入自定义控件和运行作品时的对自定义控件的关键词检查
    - [x] 移除对自定义控件的全局变量访问限制
    - [ ] 移除对使用第三方自定义控件的作品的协作限制
    - [ ] 移除对使用第三方自定义控件的作品的分享限制（绕审核）
    - 特性
    - [ ] 静态方法
    - [ ] 可变参数
    - [ ] 字典/列表类型的默认值
    - [ ] 高阶函数
    - [ ] 自定义属性编辑器
    - [ ] ES Module
    - [ ] 第三方开发工具
    - [ ] 外部依赖
  - [ ] 插件
  - 积木
  - [ ] 临时列表积木
  - 作品
  - 屏幕
    - [x] 移除屏幕数量上限
- 体验
  - [x] 导入自定义控件出错时提示
- 问题修复
  - [ ] Undefined 修复

## 二、使用指南

CoCo Next 正处于技术探索和早期开发阶段，暂时没有部署。要体验 CoCo Next，请参考 [构建和运行](#构建和运行)

## 三、构建和运行

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

## 四、参与贡献

不要修改位于`/unrestored`中的代码，如果确实需要修改，请先在 [CoCo 源代码计划](https://gitee.com/glacier-studio/CoCo-Source-Code-Plan) 中还原要修改的代码。

## 五、社区与支持

- QQ 交流群：907170983，获取技术支持、插件资源及参与功能讨论
- 开源协议：AGPL-3.0
