/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2628__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$_277 from "./277"
import * as /* [auto-meaningful-name] */$_275 from "./275"
import * as /* [auto-meaningful-name] */$_796 from "./796"
var d = ["numeric", "style"]
function h(e, t, n, r, i) {
  if (undefined === i) {
    i = {}
  }
  if (!r) {
    r = "second"
  }
  if (!Intl.RelativeTimeFormat) {
    e.onError(new $_796.a("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", "MISSING_INTL_API"))
  }
  try {
    return function (e, t, n) {
      var /* [auto-meaningful-name] */e$locale = e.locale
      var /* [auto-meaningful-name] */e$formats = e.formats
      var /* [auto-meaningful-name] */e$onError = e.onError
      if (undefined === n) {
        n = {}
      }
      var /* [auto-meaningful-name] */n$format = n.format
      var c = !!n$format && $_275.f(e$formats, "relative", n$format, e$onError) || {}
      return t(e$locale, $_275.e(n, d, c))
    }(e, t, i).format(n, r)
  } catch (s) {
    e.onError(new $_277.b("Error formatting relative time.", s))
  }
  return String(n)
}
var p = function () {
  return (p = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var _ = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "numberingSystem"]
function A(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  if (undefined === r) {
    r = {}
  }
  var /* [auto-meaningful-name] */r$format = r.format
  var l = p(p({}, e$timeZone && {
    timeZone: e$timeZone
  }), r$format && $_275.f(e$formats, t, r$format, e$onError))
  var f = $_275.e(r, _, l)
  if (!("time" !== t || f.hour || f.minute || f.second)) {
    f = p(p({}, f), {
      hour: "numeric",
      minute: "numeric"
    })
  }
  return n(e$locale, f)
}
function g(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = "string" === typeof n ? new Date(n || 0) : n
  try {
    return A(e, "date", t, r).format(i)
  } catch (o) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting date.", o))
  }
  return String(i)
}
function v(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = "string" === typeof n ? new Date(n || 0) : n
  try {
    return A(e, "time", t, r).format(i)
  } catch (o) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting time.", o))
  }
  return String(i)
}
function m(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = "string" === typeof n ? new Date(n || 0) : n
  try {
    return A(e, "date", t, r).formatToParts(i)
  } catch (o) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting date.", o))
  }
  return []
}
function y(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = "string" === typeof n ? new Date(n || 0) : n
  try {
    return A(e, "time", t, r).formatToParts(i)
  } catch (o) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting time.", o))
  }
  return []
}
var b = ["localeMatcher", "type"]
function w(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.PluralRules) {
    e$onError(new $_796.a("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API"))
  }
  var c = $_275.e(r, b)
  try {
    return t(e$locale, c).select(n)
  } catch (u) {
    e$onError(new $_277.b("Error formatting plural.", u))
  }
  return "other"
}
export { h as "2628__part-1__h" }
export { g as "2628__part-1__g" }
export { v as "2628__part-1__v" }
export { m as "2628__part-1__m" }
export { y as "2628__part-1__y" }
export { w as "2628__part-1__w" }
