"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./2690");
var a = require("./2873/index");
var i = require("./3186/index");
var o = require("./3188/index");
var s = require("./3190/index");
var u = require("./3244/index");
function l(e) {
  return e && "object" === typeof e && "default" in e ? e : {
    default: e
  };
}
var p = l(a);
var f = l(i);
var d = l(o);
var c = l(s);
new u.OptionValidator("@babel/preset-react");
var y = r.declare(function (e, t) {
  e.assertVersion(7);
  var n = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var t = e.pragma;
    var n = e.pragmaFrag;
    var r = e.pure;
    var a = e.throwIfNamespace;
    var i = void 0 === a || a;
    var o = e.runtime;
    var s = void 0 === o ? "classic" : o;
    var u = e.importSource;
    var l = e.useBuiltIns;
    var p = e.useSpread;
    if ("classic" === s) {
      t = t || "React.createElement";
      n = n || "React.Fragment";
    }
    var f = !!e.development;
    return {
      development: f,
      importSource: u,
      pragma: t,
      pragmaFrag: n,
      pure: r,
      runtime: s,
      throwIfNamespace: i,
      useBuiltIns: l,
      useSpread: p
    };
  }(t);
  var r = n.development;
  var a = n.importSource;
  var i = n.pragma;
  var o = n.pragmaFrag;
  var s = n.pure;
  var u = n.runtime;
  var l = n.throwIfNamespace;
  return {
    plugins: [[r ? f.default : p.default, {
      importSource: a,
      pragma: i,
      pragmaFrag: o,
      runtime: u,
      throwIfNamespace: l,
      pure: s,
      useBuiltIns: !!t.useBuiltIns,
      useSpread: t.useSpread
    }], d.default, !1 !== s && c.default].filter(Boolean)
  };
});
exports.default = y;