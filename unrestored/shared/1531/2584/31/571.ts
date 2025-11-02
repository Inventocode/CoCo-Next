/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：571
 */

module.exports = function (e) {
  if (!e.webpackPolyfill) {
    e.deprecate = function () {}
    e.paths = []
    if (!e.children) {
      e.children = []
    }
    Object.defineProperty(e, "loaded", {
      enumerable: true,
      get: function () {
        return e.l
      },
      set: function (value) {
        return e.l = value
      }
    })
    Object.defineProperty(e, "id", {
      enumerable: true,
      get: function () {
        return e.i
      },
      set: function (value) {
        e.i = value
      }
    })
    e.webpackPolyfill = 1
  }
  return e
}
