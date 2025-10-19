/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：373
 */

"use strict";

var n = require("./151");
var o = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r];
      }
    })(e, r);
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r);
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
var i = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  o(e, t);
  e.kind = "UnsupportedOperationException";
  return e;
}(n.a);
exports.a = i;