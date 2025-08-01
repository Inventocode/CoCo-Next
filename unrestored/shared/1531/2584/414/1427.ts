"use strict";

var r = this && this.__extends || function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var o = this && this.__rest || function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]];
      }
    }
  }
  return n;
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var i = require("../0/index");
var a = require("../0/index");
var s = require("../50/index");
var c = require("./2558/872");
var l = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.props = t;
    return n;
  }
  r(t, e);
  t.prototype.render = function () {
    return null;
  };
  t.mapChildColumnDefs = function (e) {
    return i.Children.map(e, function (e) {
      return e ? t.toColDef(e.props) : null;
    });
  };
  t.toColDef = function (e) {
    var n = e.children;
    var r = o(e, ["children"]);
    if (t.hasChildColumns(n)) {
      r.children = t.mapChildColumnDefs(n);
    }
    return r;
  };
  t.hasChildColumns = function (e) {
    return i.Children.count(e) > 0;
  };
  return t;
}(a.Component);
function u(e, t) {
  e.forEach(function (e) {
    l[e] = t;
  });
}
exports.AgGridColumn = l;
u(c.ColDefUtil.BOOLEAN_PROPERTIES, s.bool);
u(c.ColDefUtil.STRING_PROPERTIES, s.string);
u(c.ColDefUtil.OBJECT_PROPERTIES, s.object);
u(c.ColDefUtil.ARRAY_PROPERTIES, s.array);
u(c.ColDefUtil.NUMBER_PROPERTIES, s.number);
u(c.ColDefUtil.FUNCTION_PROPERTIES, s.func);