/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2400
 */

"use strict"

var r = require("../../../207/787/711/index")
exports.stringToBytes = function (e) {
  return r(e).map(function (e) {
    return e.charCodeAt(0)
  })
}
exports.tarHeaderChecksumMatches = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
  var n = parseInt(e.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8)
  if (isNaN(n)) {
    return false
  }
  for (var r = 256, i = t; i < t + 148; i++) {
    r += e[i]
  }
  for (var o = t + 156; o < t + 512; o++) {
    r += e[o]
  }
  return n === r
}
exports.uint32SyncSafeToken = {
  get: function (e, t) {
    return 127 & e[t + 3] | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21
  },
  len: 4
}
