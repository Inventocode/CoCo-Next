/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2276
 */

var n
var r
var i
var o
var a
var s
var c
var u
var l
var f
var d
var h
var p
function _(e, t) {
  var n
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : []
      n = t && n || this
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o)
    } : e
  }()
}
n = _(function (e, t) {
  return t.split(e)
})
r = _(function (e, t) {
  return t.join(e)
})
i = function (e) {
  return e.length ? e.split("\n") : []
}
o = function (e) {
  return e.join("\n")
}
a = function (e) {
  return e.length ? e.split(/[ ]+/) : []
}
s = function (e) {
  return e.join(" ")
}
c = function (e) {
  return e.split("")
}
u = function (e) {
  return e.join("")
}
l = function (e) {
  return e.split("").reverse().join("")
}
f = _(function (e, t) {
  var n
  var r
  for (n = "", r = 0; r < e; ++r) {
    n += t
  }
  return n
})
d = function (e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
h = function (e) {
  return e.replace(/[-_]+(.)?/g, function (e, t) {
    return (null != t ? t : "").toUpperCase()
  })
}
p = function (e) {
  return e.replace(/([^-A-Z])([A-Z]+)/g, function (e, t, n) {
    return t + "-" + (n.length > 1 ? n : n.toLowerCase())
  }).replace(/^([A-Z]+)/, function (e, t) {
    return t.length > 1 ? t + "-" : t.toLowerCase()
  })
}
module.exports = {
  split: n,
  join: r,
  lines: i,
  unlines: o,
  words: a,
  unwords: s,
  chars: c,
  unchars: u,
  reverse: l,
  repeat: f,
  capitalize: d,
  camelize: h,
  dasherize: p
}
