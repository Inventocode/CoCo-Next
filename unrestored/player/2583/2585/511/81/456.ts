/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：456
 */

"use strict"

var r = require("./274")
var i = require("./117")
var o = require("./63")
var a = function () {
  function t(t) {
    this.field = t
    this.cachedGenerators = []
    this.cachedGenerators.push(new r.a(t, Int32Array.from([1])))
  }
  t.prototype.buildGenerator = function (t) {
    var this$cachedGenerators = this.cachedGenerators
    if (t >= this$cachedGenerators.length) {
      for (var n = this$cachedGenerators[this$cachedGenerators.length - 1], this$field = this.field, this$cachedGenerators$length = this$cachedGenerators.length; this$cachedGenerators$length <= t; this$cachedGenerators$length++) {
        var a = n.multiply(new r.a(this$field, Int32Array.from([1, this$field.exp(this$cachedGenerators$length - 1 + this$field.getGeneratorBase())])))
        this$cachedGenerators.push(a)
        n = a
      }
    }
    return this$cachedGenerators[t]
  }
  t.prototype.encode = function (t, e) {
    if (0 === e) {
      throw new o.a("No error correction bytes")
    }
    var n = t.length - e
    if (n <= 0) {
      throw new o.a("No data bytes provided")
    }
    var a = this.buildGenerator(e)
    var s = new Int32Array(n)
    i.a.arraycopy(t, 0, s, 0, n)
    for (var u = new r.a(this.field, s), c = (u = u.multiplyByMonomial(e, 1)).divide(a)[1].getCoefficients(), l = e - c.length, d = 0; d < l; d++) {
      t[n + d] = 0
    }
    i.a.arraycopy(c, 0, t, n + l, c.length)
  }
  return t
}()
exports.a = a
