var r;
var o;
var i;
import * as a from "../../1731/1206";
import * as s from "../194";
import * as c from "../../1626/231";
import * as l from "../../1735/422";
import * as u from "../332";
import * as d from "./1054";
import * as p from "../../1534/932";
import * as f from "../../1534/815";
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