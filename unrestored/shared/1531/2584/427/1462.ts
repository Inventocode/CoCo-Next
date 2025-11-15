/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1462
 */

var n = !!(global === global.window && global.URL && global.Blob && global.Worker)
function r(e, r) {
  var i
  var o = this
  r = r || {}
  if (n) {
    i = e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1]
    return new global.Worker(global.URL.createObjectURL(new global.Blob([i], {
      type: "text/javascript"
    })))
  }
  this.self = r
  this.self.postMessage = function (e) {
    setTimeout(function () {
      o.onmessage({
        data: e
      })
    }, 0)
  }
  setTimeout(e.bind(r, r), 0)
}
r.prototype.postMessage = function (e) {
  var t = this
  setTimeout(function () {
    t.self.onmessage({
      data: e
    })
  }, 0)
}
module.exports = r
