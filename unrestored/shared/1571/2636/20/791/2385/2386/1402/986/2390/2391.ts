/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2391
 */

var r = require("../../333/index")
var /* [auto-meaningful-name] */r$Buffer = r.Buffer
function o(e, t) {
  for (var n in e) t[n] = e[n]
}
function a(e, t, n) {
  return r$Buffer(e, t, n)
}
if (r$Buffer.from && r$Buffer.alloc && r$Buffer.allocUnsafe && r$Buffer.allocUnsafeSlow) {
  module.exports = r
} else {
  o(r, exports)
  exports.Buffer = a
}
a.prototype = Object.create(r$Buffer.prototype)
o(r$Buffer, a)
a.from = function (e, t, n) {
  if ("number" === typeof e) {
    throw new TypeError("Argument must not be a number")
  }
  return r$Buffer(e, t, n)
}
a.alloc = function (e, t, n) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number")
  }
  var r = r$Buffer(e)
  if (undefined !== t) {
    if ("string" === typeof n) {
      r.fill(t, n)
    } else {
      r.fill(t)
    }
  } else {
    r.fill(0)
  }
  return r
}
a.allocUnsafe = function (e) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number")
  }
  return r$Buffer(e)
}
a.allocUnsafeSlow = function (e) {
  if ("number" !== typeof e) {
    throw new TypeError("Argument must be a number")
  }
  return r.SlowBuffer(e)
}
