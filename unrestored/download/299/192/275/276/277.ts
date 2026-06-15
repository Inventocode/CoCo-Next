/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：277
 */

"use strict"

var r = function () {
  this.head = null
  this.tail = null
}
r.prototype = {
  add: function (e) {
    var t = {
      item: e,
      next: null
    }
    var /* [auto-meaningful-name] */this$tail = this.tail
    if (this$tail) {
      this$tail.next = t
    } else {
      this.head = t
    }
    this.tail = t
  },
  get: function () {
    var /* [auto-meaningful-name] */this$head = this.head
    if (this$head) {
      if (null === (this.head = this$head.next)) {
        this.tail = null
      }
      return this$head.item
    }
  }
}
module.exports = r
