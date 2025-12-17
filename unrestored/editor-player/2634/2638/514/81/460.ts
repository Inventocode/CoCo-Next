/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：460
 */

"use strict"

var n = require("./272/index")
var o = require("./115")
var i = require("./63")
var a = function () {
  function t(t) {
    this.field = t
    this.cachedGenerators = []
    this.cachedGenerators.push(new n.a(t, Int32Array.from([1])))
  }
  t.prototype.buildGenerator = function (t) {
    var /* [auto-meaningful-name] */this$cachedGenerators = this.cachedGenerators
    if (t >= this$cachedGenerators.length) {
      for (var r = this$cachedGenerators[this$cachedGenerators.length - 1], /* [auto-meaningful-name] */this$field = this.field, /* [auto-meaningful-name] */this$cachedGenerators$length = this$cachedGenerators.length; this$cachedGenerators$length <= t; this$cachedGenerators$length++) {
        var a = r.multiply(new n.a(this$field, Int32Array.from([1, this$field.exp(this$cachedGenerators$length - 1 + this$field.getGeneratorBase())])))
        this$cachedGenerators.push(a)
        r = a
      }
    }
    return this$cachedGenerators[t]
  }
  t.prototype.encode = function (t, e) {
    if (0 === e) {
      throw new i.a("No error correction bytes")
    }
    var r = t.length - e
    if (r <= 0) {
      throw new i.a("No data bytes provided")
    }
    var a = this.buildGenerator(e)
    var u = new Int32Array(r)
    o.a.arraycopy(t, 0, u, 0, r)
    for (var s = new n.a(this.field, u), c = (s = s.multiplyByMonomial(e, 1)).divide(a)[1].getCoefficients(), f = e - c.length, h = 0; h < f; h++) {
      t[r + h] = 0
    }
    o.a.arraycopy(c, 0, t, r + f, c.length)
  }
  return t
}()
exports.a = a
