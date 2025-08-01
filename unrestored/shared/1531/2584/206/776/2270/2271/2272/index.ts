(function () {
  var t;
  var r;
  var i;
  function o(e, t) {
    if (e[0] === t) {
      return e.shift();
    }
    throw new Error("Expected '" + t + "', but got '" + e[0] + "' instead in " + JSON.stringify(e) + ".");
  }
  function a(e, t) {
    if (e[0] === t) {
      return e.shift();
    }
  }
  function s(e, t, n) {
    var r;
    var i;
    var s;
    var c;
    for (r = t[0], i = t[1], n && o(e, r), s = [], c = "," + (n ? i : ""); e.length && n && e[0] !== i;) {
      s.push(d(e, c));
      a(e, ",");
    }
    if (n) {
      o(e, i);
    }
    return s;
  }
  function c(e, t) {
    return s(e, ["[", "]"], t);
  }
  function u(e, t) {
    return s(e, ["(", ")"], t);
  }
  function l(e, t) {
    var n;
    var r;
    var i;
    for (t && o(e, "{"), n = {}, r = "," + (t ? "}" : ""); e.length && (!t || "}" !== e[0]);) {
      i = f(e, ":");
      o(e, ":");
      n[i] = d(e, r);
      a(e, ",");
    }
    if (t) {
      o(e, "}");
    }
    return n;
  }
  function f(e, t) {
    var n;
    for (null == t && (t = ""), n = ""; e.length && -1 === t.indexOf(e[0]);) {
      n += e.shift();
    }
    return n;
  }
  function d(e, t) {
    switch (e[0]) {
      case "[":
        return c(e, !0);
      case "(":
        return u(e, !0);
      case "{":
        return l(e, !0);
      default:
        return f(e, t);
    }
  }
  function h(e) {
    return !e;
  }
  t = require("./1347/index").reject;
  r = /\[\]\(\)}{:,/.source;
  i = RegExp("(\"(?:\\\\\"|[^\"])*\")|('(?:\\\\'|[^'])*')|(/(?:\\\\/|[^/])*/[a-zA-Z]*)|(#.*#)|([" + r + "])|([^\\s" + r + "](?:\\s*[^\\s" + r + "]+)*)|\\s*");
  module.exports = function (e, n, r) {
    var o;
    if (null == r && (r = {}), !r.explicit && 1 === e.length && "String" === e[0].type) {
      return "'" + n.replace(/\\'/g, "\\\\'") + "'";
    }
    if (!(o = function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var f;
      var h;
      var p;
      i = (r = t[0]).type;
      o = r.structure;
      a = e.concat();
      if (n.explicit || 1 !== t.length || (i || !o) && "Array" !== i && "Object" !== i) {
        f = d(e);
      } else {
        s = "array" === o || "Array" === i ? c(e, "[" === e[0]) : "tuple" === o ? u(e, "(" === e[0]) : l(e, "{" === e[0]);
        f = e.length ? d("array" === o || "Array" === i ? ((h = a).unshift("["), h.push("]"), h) : ((p = a).unshift("("), p.push(")"), p)) : s;
      }
      return f;
    }(t(h, n.split(i)), e, r))) {
      throw new Error("Error parsing '" + n + "'.");
    }
    return o;
  };
}).call(this);