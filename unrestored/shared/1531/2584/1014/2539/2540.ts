/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2540
 */

var r = require("./2543/1421")
function o(e) {
  this.mode = r.MODE_8BIT_BYTE
  this.data = e
}
o.prototype = {
  getLength: function (e) {
    return this.data.length
  },
  write: function (e) {
    for (var t = 0; t < this.data.length; t++) {
      e.put(this.data.charCodeAt(t), 8)
    }
  }
}
module.exports = o
