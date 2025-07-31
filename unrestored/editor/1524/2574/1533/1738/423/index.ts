var r;
var o;
var i;
var a = require("../../1731/1206");
var s = require("../194");
var c = require("../../1626/231");
var l = require("../../1735/422");
var u = require("../332");
var d = require("./1054");
var p = require("../../1534/932");
var f = require("../../1534/815");
var h = s.WeakMap;
if (a || d.state) {
  var m = d.state || (d.state = new h());
  var g = m.get;
  var _ = m.has;
  var v = m.set;
  r = function (e, t) {
    if (_.call(m, e)) {
      throw new TypeError("Object already initialized");
    }
    t.facade = e;
    v.call(m, e, t);
    return t;
  };
  o = function (e) {
    return g.call(m, e) || {};
  };
  i = function (e) {
    return _.call(m, e);
  };
} else {
  var b = p("state");
  f[b] = !0;
  r = function (e, t) {
    if (u(e, b)) {
      throw new TypeError("Object already initialized");
    }
    t.facade = e;
    l(e, b, t);
    return t;
  };
  o = function (e) {
    return u(e, b) ? e[b] : {};
  };
  i = function (e) {
    return u(e, b);
  };
}
module.exports = {
  set: r,
  get: o,
  has: i,
  enforce: function (e) {
    return i(e) ? o(e) : r(e, {});
  },
  getterFor: function (e) {
    return function (t) {
      var n;
      if (!c(t) || (n = o(t)).type !== e) {
        throw TypeError("Incompatible receiver, " + e + " required");
      }
      return n;
    };
  }
};