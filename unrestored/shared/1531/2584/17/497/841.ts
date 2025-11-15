/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：841
 */

"use strict"

function r(e, t) {
  if (e.length <= t) {
    return e
  }
  for (var n, r = e.trim().split(/\s+/), s = 0; s < r.length; s++) {
    if (r[s].length > t) {
      t = r[s].length
    }
  }
  var c
  var u = -1 / 0
  var l = 1
  do {
    n = u
    c = e
    var f = []
    var d = r.length / l
    var h = 1
    for (s = 0; s < r.length - 1; s++) {
      if (h < (s + 1.5) / d) {
        h++
        f[s] = true
      } else {
        f[s] = false
      }
    }
    u = o(r, f = i(r, f, t), t)
    e = a(r, f)
    l++
  } while (u > n)
  return c
}
function i(e, t, n) {
  for (var r, a = o(e, t, n), s = 0; s < t.length - 1; s++) {
    if (t[s] != t[s + 1]) {
      var c = t.slice()
      c[s] = !c[s]
      c[s + 1] = !c[s + 1]
      var u = o(e, c, n)
      if (u > a) {
        a = u
        r = c
      }
    }
  }
  return r ? i(e, r, n) : t
}
function o(e, t, n) {
  for (var r = [0], i = [], o = 0; o < e.length; o++) {
    r[r.length - 1] += e[o].length
    if (true === t[o]) {
      r.push(0)
      i.push(e[o].charAt(e[o].length - 1))
    } else {
      if (false === t[o]) {
        r[r.length - 1]++
      }
    }
  }
  var a = Math.max.apply(Math, r)
  var s = 0
  for (o = 0; o < r.length; o++) {
    s -= 2 * Math.pow(Math.abs(n - r[o]), 1.5)
    s -= Math.pow(a - r[o], 1.5)
    if (-1 != ".?!".indexOf(i[o])) {
      s += n / 3
    } else {
      if (-1 != ",;)]}".indexOf(i[o])) {
        s += n / 4
      }
    }
  }
  if (r.length > 1 && r[r.length - 1] <= r[r.length - 2]) {
    s += .5
  }
  return s
}
function a(e, t) {
  for (var n = [], r = 0; r < e.length; r++) {
    n.push(e[r])
    if (undefined != t[r]) {
      n.push(t[r] ? "\n" : " ")
    }
  }
  return n.join("")
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.wrap = exports.string_trim = exports.string_is_empty_or_whitespace = exports.case_insensitive_equals = exports.case_insensitive_compare = undefined
exports.case_insensitive_compare = function (e, t) {
  var n = String(e).toLowerCase()
  var r = String(t).toLowerCase()
  return n < r ? -1 : n == r ? 0 : 1
}
exports.case_insensitive_equals = function (e, t) {
  return "string" === typeof e && "string" === typeof t && e.toLowerCase() == t.toLowerCase()
}
exports.string_is_empty_or_whitespace = function (e) {
  return /^[\s\xa0]*$/.test(e)
}
exports.string_trim = function (e) {
  return e.replace(/\s+$/, "").replace(/ +\n/g, "\n")
}
exports.wrap = function (e, t) {
  for (var n = e.split("\n"), i = 0; i < n.length; i++) {
    n[i] = r(n[i], t)
  }
  return n.join("\n")
}
