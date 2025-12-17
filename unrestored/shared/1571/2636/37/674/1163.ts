/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1163
 */

module.exports = function (e, t) {
  var n = 0
  var r = {}
  e.addEventListener("message", function (t) {
    var /* [auto-meaningful-name] */t$data = t.data
    if ("RPC" === t$data.type) {
      if (t$data.id) {
        var i = r[t$data.id]
        if (i) {
          delete r[t$data.id]
          if (t$data.error) {
            i[1](Object.assign(Error(t$data.error.message), t$data.error))
          } else {
            i[0](t$data.result)
          }
        }
      } else {
        var o = document.createEvent("Event")
        o.initEvent(t$data.method, false, false)
        o.data = t$data.params
        e.dispatchEvent(o)
      }
    }
  })
  t.forEach(function (t) {
    e[t] = function () {
      var i = arguments
      return new Promise(function (o, a) {
        var s = ++n
        r[s] = [o, a]
        e.postMessage({
          type: "RPC",
          id: s,
          method: t,
          params: [].slice.call(i)
        })
      })
    }
  })
}
