"use strict";

var r;
var o = require("../1736/194");
var i = require("./752");
var a = require("./709");
var s = require("../1739/938");
var c = require("../1739/1250");
var l = require("./231");
var u = require("../1745/423/index").enforce;
var d = require("./1209");
var p = !o.ActiveXObject && "ActiveXObject" in o;
var f = Object.isExtensible;
var h = function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : undefined);
  };
};
var m = module.exports = s("WeakMap", h, c);
if (d && p) {
  r = c.getConstructor(h, "WeakMap", true);
  a.enable();
  var g = m.prototype;
  var _ = g.delete;
  var v = g.has;
  var b = g.get;
  var y = g.set;
  i(g, {
    delete: function (e) {
      if (l(e) && !f(e)) {
        var t = u(this);
        if (!t.frozen) {
          t.frozen = new r();
        }
        return _.call(this, e) || t.frozen.delete(e);
      }
      return _.call(this, e);
    },
    has: function (e) {
      if (l(e) && !f(e)) {
        var t = u(this);
        if (!t.frozen) {
          t.frozen = new r();
        }
        return v.call(this, e) || t.frozen.has(e);
      }
      return v.call(this, e);
    },
    get: function (e) {
      if (l(e) && !f(e)) {
        var t = u(this);
        if (!t.frozen) {
          t.frozen = new r();
        }
        return v.call(this, e) ? b.call(this, e) : t.frozen.get(e);
      }
      return b.call(this, e);
    },
    set: function (e, t) {
      if (l(e) && !f(e)) {
        var n = u(this);
        if (!n.frozen) {
          n.frozen = new r();
        }
        if (v.call(this, e)) {
          y.call(this, e, t);
        } else {
          n.frozen.set(e, t);
        }
      } else {
        y.call(this, e, t);
      }
      return this;
    }
  });
}