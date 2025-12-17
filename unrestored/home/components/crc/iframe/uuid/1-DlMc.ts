/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：DlMc
 */

var v1 = require("./v1-gApy")
var v4 = require("./v4-DtRx")
var uuid = v4
uuid.v1 = v1
uuid.v4 = v4
module.exports = uuid

/***/
