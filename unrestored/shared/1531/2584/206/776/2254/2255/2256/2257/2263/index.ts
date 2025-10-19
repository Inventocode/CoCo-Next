/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2263
 */

"use strict";

var r = require("../../../../../../../36/2668/220");
var i = require("../../../../../../../36/2668/230");
var o = require("../../../../../../../36/2668/2689/703/index");
var a = require("../../../../../../../38/607/1970/529");
var s = require("../../../../../../../38/607/356");
var c = require("../../../../../../../38/607/357/index");
var u = require("./1118");
module.exports = function (e) {
  s(n, e);
  var t = c(n);
  function n(e, i) {
    var o;
    r(this, n);
    (o = t.call(this, e)).count = i;
    return o;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      for (; this.count > 0;) {
        this.count -= 1;
        if (!o(a(n.prototype), "moveNext", this).call(this)) {
          return false;
        }
      }
      return o(a(n.prototype), "moveNext", this).call(this);
    }
  }]);
  return n;
}(u);