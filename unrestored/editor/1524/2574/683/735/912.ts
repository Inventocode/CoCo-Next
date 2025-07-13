"use strict";

import * as r from "./518";
function i(e) {
  for (var t, n = []; !(t = e.next()).done;) {
    n.push(t.value);
  }
  return n;
}
function o(e, t, n) {
  for (var r = 0, i = n.length; r < i;) {
    if (e(t, n[r])) {
      return !0;
    }
    r += 1;
  }
  return !1;
}
function a(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var s = "function" === typeof Object.is ? Object.is : function (e, t) {
  return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t;
};
import * as c from "../215/393";
var u = Object.prototype.toString;
var l = function () {
  return "[object Arguments]" === u.call(arguments) ? function (e) {
    return "[object Arguments]" === u.call(e);
  } : function (e) {
    return a("callee", e);
  };
}();
var f = !{
  toString: null
}.propertyIsEnumerable("toString");
var h = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var d = function () {
  return arguments.propertyIsEnumerable("length");
}();
var p = function (e, t) {
  for (var n = 0; n < e.length;) {
    if (e[n] === t) {
      return !0;
    }
    n += 1;
  }
  return !1;
};
var _ = "function" !== typeof Object.keys || d ? Object(c.a)(function (e) {
  if (Object(e) !== e) {
    return [];
  }
  var t;
  var n;
  var r = [];
  var i = d && l(e);
  for (t in e) if (!(!a(t, e) || i && "length" === t)) {
    r[r.length] = t;
  }
  if (f) {
    for (n = h.length - 1; n >= 0;) {
      if (a(t = h[n], e) && !p(r, t)) {
        r[r.length] = t;
      }
      n -= 1;
    }
  }
  return r;
}) : Object(c.a)(function (e) {
  return Object(e) !== e ? [] : Object.keys(e);
});
import * as A from "../520/907";
function g(e, t, n, r) {
  var a = i(e);
  function s(e, t) {
    return v(e, t, n.slice(), r.slice());
  }
  return !o(function (e, t) {
    return !o(s, t, e);
  }, i(t), a);
}
function v(e, t, n, r) {
  if (s(e, t)) {
    return !0;
  }
  var i = Object(A.a)(e);
  if (i !== Object(A.a)(t)) {
    return !1;
  }
  if (null == e || null == t) {
    return !1;
  }
  if ("function" === typeof e["fantasy-land/equals"] || "function" === typeof t["fantasy-land/equals"]) {
    return "function" === typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" === typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
  }
  if ("function" === typeof e.equals || "function" === typeof t.equals) {
    return "function" === typeof e.equals && e.equals(t) && "function" === typeof t.equals && t.equals(e);
  }
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if ("function" === typeof e.constructor && "Promise" === function (e) {
        var t = String(e).match(/^function (\w*)/);
        return null == t ? "" : t[1];
      }(e.constructor)) {
        return e === t;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (typeof e !== typeof t || !s(e.valueOf(), t.valueOf())) {
        return !1;
      }
      break;
    case "Date":
      if (!s(e.valueOf(), t.valueOf())) {
        return !1;
      }
      break;
    case "Error":
      return e.name === t.name && e.message === t.message;
    case "RegExp":
      if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) {
        return !1;
      }
  }
  for (var o = n.length - 1; o >= 0;) {
    if (n[o] === e) {
      return r[o] === t;
    }
    o -= 1;
  }
  switch (i) {
    case "Map":
      return e.size === t.size && g(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
    case "Set":
      return e.size === t.size && g(e.values(), t.values(), n.concat([e]), r.concat([t]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var c = _(e);
  if (c.length !== _(t).length) {
    return !1;
  }
  var u = n.concat([e]);
  var l = r.concat([t]);
  for (o = c.length - 1; o >= 0;) {
    var f = c[o];
    if (!a(f, t) || !v(t[f], e[f], u, l)) {
      return !1;
    }
    o -= 1;
  }
  return !0;
}
var m = Object(r.a)(function (e, t) {
  return v(e, t, [], []);
});
export { m as a };