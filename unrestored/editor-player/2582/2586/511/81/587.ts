/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：587
 */

"use strict";

var n = require("./371");
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
  function e(e, r, n, o, i) {
    var a = t.call(this, e, r) || this;
    a.compact = n;
    a.nbDatablocks = o;
    a.nbLayers = i;
    return a;
  }
  o(e, t);
  e.prototype.getNbLayers = function () {
    return this.nbLayers;
  };
  e.prototype.getNbDatablocks = function () {
    return this.nbDatablocks;
  };
  e.prototype.isCompact = function () {
    return this.compact;
  };
  return e;
}(n.a);
exports.a = i;