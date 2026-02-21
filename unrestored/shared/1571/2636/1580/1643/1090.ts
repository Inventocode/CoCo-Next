/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1090
 */

module.exports = Math.sign || function (e) {
  return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
}
