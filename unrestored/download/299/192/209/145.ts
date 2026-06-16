/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：145
 */

"use strict"

var r = require(/* 40 */"./143/40").match(/AppleWebKit\/(\d+)\./)
module.exports = !!r && +r[1]
