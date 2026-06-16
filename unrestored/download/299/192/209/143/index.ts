/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：143
 */

"use strict"

var r = require(/* 40 */"./40").match(/firefox\/(\d+)/i)
module.exports = !!r && +r[1]
