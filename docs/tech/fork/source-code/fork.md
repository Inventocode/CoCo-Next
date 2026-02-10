---
sidebar_position: 4
---

# 派生

尽管还原 CoCo 源代码是一个漫长的过程，但是 CoCo 源代码计划允许已还原和未还原的代码混合运行，使得 CoCo 源代码现在就可以被用来派生 CoCo。

你可以使用 CoCo 源代码计划还原出来的代码制作其他功能，如：制作绕审核 Player。

:::warning
不建议更改未还原的代码（位于 /unrestored 中的代码），这些代码可能经常变更！
:::

:::tip

派生 CoCo 时，以下用于还原 CoCo 代码的文件（夹）可以删除：

- public
- scripts
- src-unrestored
- eslint.config.mjs

以下用于还原 CoCo 代码的依赖项可以移除：

- @babel/generator
- @babel/helper-validator-identifier
- @babel/parser
- @babel/template
- @babel/traverse
- @babel/types
- @stylistic/eslint-plugin
- @types/babel__generator
- @types/babel__helper-validator-identifier
- @types/babel__template
- @types/babel__traverse
- @types/cli-progress
- @types/js-priority-queue
- cli-progress
- eslint
- globals
- js-priority-queue
- workerpool

:::
