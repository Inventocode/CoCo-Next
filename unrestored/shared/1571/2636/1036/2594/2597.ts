/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2597
 */

function n() {
  this.buffer = new Array()
  this.length = 0
}
n.prototype = {
  get: function (e) {
    var t = Math.floor(e / 8)
    return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
  },
  put: function (e, t) {
    for (var n = 0; n < t; n++) {
      this.putBit(1 == (e >>> t - n - 1 & 1))
    }
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (e) {
    var t = Math.floor(this.length / 8)
    if (this.buffer.length <= t) {
      this.buffer.push(0)
    }
    if (e) {
      this.buffer[t] |= 128 >>> this.length % 8
    }
    this.length++
  }
}
module.exports = n
