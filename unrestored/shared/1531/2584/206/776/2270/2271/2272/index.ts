/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2272
 */

var /* [auto-meaningful-name] */require$_1347_index$reject
var /* [auto-meaningful-name] */______$source
var i
function o(e, t) {
  if (e[0] === t) {
    return e.shift()
  }
  throw new Error("Expected '" + t + "', but got '" + e[0] + "' instead in " + JSON.stringify(e) + ".")
}
function a(e, t) {
  if (e[0] === t) {
    return e.shift()
  }
}
function s(e, t, n) {
  var r
  var i
  var s
  var c
  for (r = t[0], i = t[1], n && o(e, r), s = [], c = "," + (n ? i : ""); e.length && n && e[0] !== i;) {
    s.push(d(e, c))
    a(e, ",")
  }
  if (n) {
    o(e, i)
  }
  return s
}
function c(e, t) {
  return s(e, ["[", "]"], t)
}
function u(e, t) {
  return s(e, ["(", ")"], t)
}
function l(e, t) {
  var n
  var r
  var i
  for (t && o(e, "{"), n = {}, r = "," + (t ? "}" : ""); e.length && (!t || "}" !== e[0]);) {
    i = f(e, ":")
    o(e, ":")
    n[i] = d(e, r)
    a(e, ",")
  }
  if (t) {
    o(e, "}")
  }
  return n
}
function f(e, t) {
  var n
  for (null == t && (t = ""), n = ""; e.length && -1 === t.indexOf(e[0]);) {
    n += e.shift()
  }
  return n
}
function d(e, t) {
  switch (e[0]) {
    case "[":
      return c(e, true)
    case "(":
      return u(e, true)
    case "{":
      return l(e, true)
    default:
      return f(e, t)
  }
}
function h(e) {
  return !e
}
require$_1347_index$reject = require("./1347/index").reject
______$source = /\[\]\(\)}{:,/.source
i = RegExp("(\"(?:\\\\\"|[^\"])*\")|('(?:\\\\'|[^'])*')|(/(?:\\\\/|[^/])*/[a-zA-Z]*)|(#.*#)|([" + ______$source + "])|([^\\s" + ______$source + "](?:\\s*[^\\s" + ______$source + "]+)*)|\\s*")
module.exports = function (e, n, r) {
  var o
  if (null == r) {
    r = {}
  }
  if (!r.explicit && 1 === e.length && "String" === e[0].type) {
    return "'" + n.replace(/\\'/g, "\\\\'") + "'"
  }
  if (!(o = function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */RT0$type
    var /* [auto-meaningful-name] */r$structure
    var a
    var s
    var f
    var h
    var p
    RT0$type = (r = t[0]).type
    r$structure = r.structure
    a = e.concat()
    if (n.explicit || 1 !== t.length || (RT0$type || !r$structure) && "Array" !== RT0$type && "Object" !== RT0$type) {
      f = d(e)
    } else {
      s = "array" === r$structure || "Array" === RT0$type ? c(e, "[" === e[0]) : "tuple" === r$structure ? u(e, "(" === e[0]) : l(e, "{" === e[0])
      f = e.length ? d("array" === r$structure || "Array" === RT0$type ? ((h = a).unshift("["), h.push("]"), h) : ((p = a).unshift("("), p.push(")"), p)) : s
    }
    return f
  }(require$_1347_index$reject(h, n.split(i)), e, r))) {
    throw new Error("Error parsing '" + n + "'.")
  }
  return o
}
