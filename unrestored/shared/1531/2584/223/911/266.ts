/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：266
 */

"use strict"

export { i }
export { o as g }
export { s as b }
export { c as h }
export { u as c }
export { l as f }
export { f as j }
export { h as a }
export { p as e }
export { _ as d }
import r = require("../../2627/285/210");
function i(e, t, n) {
  return {
    r: 255 * r.a(e, 255),
    g: 255 * r.a(t, 255),
    b: 255 * r.a(n, 255)
  }
}
function o(e, t, n) {
  e = r.a(e, 255)
  t = r.a(t, 255)
  n = r.a(n, 255)
  var i = Math.max(e, t, n)
  var o = Math.min(e, t, n)
  var a = 0
  var s = 0
  var c = (i + o) / 2
  if (i === o) {
    s = 0
    a = 0
  } else {
    var u = i - o
    switch (s = c > .5 ? u / (2 - i - o) : u / (i + o), i) {
      case e:
        a = (t - n) / u + (t < n ? 6 : 0)
        break
      case t:
        a = (n - e) / u + 2
        break
      case n:
        a = (e - t) / u + 4
    }
    a /= 6
  }
  return {
    h: a,
    s: s,
    l: c
  }
}
function a(e, t, n) {
  if (n < 0) {
    n += 1
  }
  if (n > 1) {
    n -= 1
  }
  return n < 1 / 6 ? e + 6 * n * (t - e) : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function s(e, t, n) {
  var i
  var o
  var s
  e = r.a(e, 360)
  t = r.a(t, 100)
  n = r.a(n, 100)
  if (0 === t) {
    o = n
    s = n
    i = n
  } else {
    var c = n < .5 ? n * (1 + t) : n + t - n * t
    var u = 2 * n - c
    i = a(u, c, e + 1 / 3)
    o = a(u, c, e)
    s = a(u, c, e - 1 / 3)
  }
  return {
    r: 255 * i,
    g: 255 * o,
    b: 255 * s
  }
}
function c(e, t, n) {
  e = r.a(e, 255)
  t = r.a(t, 255)
  n = r.a(n, 255)
  var i = Math.max(e, t, n)
  var o = Math.min(e, t, n)
  var a = 0
  var s = i
  var c = i - o
  var u = 0 === i ? 0 : c / i
  if (i === o) {
    a = 0
  } else {
    switch (i) {
      case e:
        a = (t - n) / c + (t < n ? 6 : 0)
        break
      case t:
        a = (n - e) / c + 2
        break
      case n:
        a = (e - t) / c + 4
    }
    a /= 6
  }
  return {
    h: a,
    s: u,
    v: s
  }
}
function u(e, t, n) {
  e = 6 * r.a(e, 360)
  t = r.a(t, 100)
  n = r.a(n, 100)
  var i = Math.floor(e)
  var o = e - i
  var a = n * (1 - t)
  var s = n * (1 - o * t)
  var c = n * (1 - (1 - o) * t)
  var u = i % 6
  return {
    r: 255 * [n, s, a, a, c, n][u],
    g: 255 * [c, n, n, s, a, a][u],
    b: 255 * [a, a, c, n, n, s][u]
  }
}
function l(e, t, n, i) {
  var o = [r.e(Math.round(e).toString(16)), r.e(Math.round(t).toString(16)), r.e(Math.round(n).toString(16))]
  return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
}
function f(e, t, n, i, o) {
  var a = [r.e(Math.round(e).toString(16)), r.e(Math.round(t).toString(16)), r.e(Math.round(n).toString(16)), r.e(d(i))]
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
}
function d(e) {
  return Math.round(255 * parseFloat(e)).toString(16)
}
function h(e) {
  return p(e) / 255
}
function p(e) {
  return parseInt(e, 16)
}
function _(e) {
  return {
    r: e >> 16,
    g: (65280 & e) >> 8,
    b: 255 & e
  }
}
export default h
