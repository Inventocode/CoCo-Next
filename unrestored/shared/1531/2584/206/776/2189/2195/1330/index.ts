!function () {
  "use strict";

  var e = require("./2196");
  function r(e) {
    return null != e && "object" === typeof e && "string" === typeof e.type;
  }
  function i(t, n) {
    n = n || {};
    this.__visitor = t || this;
    this.__childVisitorKeys = n.childVisitorKeys ? Object.assign({}, e.VisitorKeys, n.childVisitorKeys) : e.VisitorKeys;
    if ("iteration" === n.fallback) {
      this.__fallback = Object.keys;
    } else {
      if ("function" === typeof n.fallback) {
        this.__fallback = n.fallback;
      }
    }
  }
  i.prototype.visitChildren = function (t) {
    var n;
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    if (null != t) {
      if (n = t.type || e.Syntax.Property, !(i = this.__childVisitorKeys[n])) {
        if (!this.__fallback) {
          throw new Error("Unknown node type " + n + ".");
        }
        i = this.__fallback(t);
      }
      for (o = 0, a = i.length; o < a; ++o) {
        if (u = t[i[o]]) {
          if (Array.isArray(u)) {
            for (s = 0, c = u.length; s < c; ++s) {
              if (u[s]) {
                if (!(!r(u[s]) && (l = n, f = i[o], l !== e.Syntax.ObjectExpression && l !== e.Syntax.ObjectPattern || "properties" !== f))) {
                  this.visit(u[s]);
                }
              }
            }
          } else if (r(u)) {
            this.visit(u);
          }
        }
      }
      var l;
      var f;
    }
  };
  i.prototype.visit = function (t) {
    var n;
    if (null != t) {
      n = t.type || e.Syntax.Property;
      if (this.__visitor[n]) {
        this.__visitor[n].call(this, t);
      } else {
        this.visitChildren(t);
      }
    }
  };
  exports.version = require("./2197").version;
  exports.Visitor = i;
  exports.visit = function (e, t, n) {
    new i(t, n).visit(e);
  };
}();