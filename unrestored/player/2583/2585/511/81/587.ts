/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：587
 */

"use strict";

var r = require("./371");
var i = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var o = function (t) {
  function e(e, n, r, i, o) {
    var a = t.call(this, e, n) || this;
    a.compact = r;
    a.nbDatablocks = i;
    a.nbLayers = o;
    return a;
  }
  i(e, t);
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
}(r.a);
exports.a = o;