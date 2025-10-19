/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：792
 */

function n(e, t, n, r) {
  var i;
  var o = null == (i = r) || "number" === typeof i || "boolean" === typeof i ? r : n(r);
  var a = t.get(o);
  if ("undefined" === typeof a) {
    a = e.call(this, r);
    t.set(o, a);
  }
  return a;
}
function r(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3);
  var i = n(r);
  var o = t.get(i);
  if ("undefined" === typeof o) {
    o = e.apply(this, r);
    t.set(i, o);
  }
  return o;
}
function i(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function o(e, t) {
  return i(e, this, 1 === e.length ? n : r, t.cache.create(), t.serializer);
}
function a() {
  return JSON.stringify(arguments);
}
function s() {
  this.cache = Object.create(null);
}
s.prototype.has = function (e) {
  return e in this.cache;
};
s.prototype.get = function (e) {
  return this.cache[e];
};
s.prototype.set = function (e, t) {
  this.cache[e] = t;
};
var c = {
  create: function () {
    return new s();
  }
};
module.exports = function (e, t) {
  var n = t && t.cache ? t.cache : c;
  var r = t && t.serializer ? t.serializer : a;
  return (t && t.strategy ? t.strategy : o)(e, {
    cache: n,
    serializer: r
  });
};
module.exports.strategies = {
  variadic: function (e, t) {
    return i(e, this, r, t.cache.create(), t.serializer);
  },
  monadic: function (e, t) {
    return i(e, this, n, t.cache.create(), t.serializer);
  }
};