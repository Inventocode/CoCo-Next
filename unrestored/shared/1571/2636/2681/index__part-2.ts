/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2681__part-2
 */

"use strict"

var x
var E
import * as /* [auto-meaningful-name] */$_275 from "./275"
import * as /* [auto-meaningful-name] */$$_710_273_index from "../710/273/index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_2640 from "./2640"
import * as /* [auto-meaningful-name] */$_2641_index from "./2641/index"
import * as /* [auto-meaningful-name] */$_1481_index from "./1481/index"
!function (e) {
  e[e.literal = 0] = "literal"
  e[e.argument = 1] = "argument"
  e[e.number = 2] = "number"
  e[e.date = 3] = "date"
  e[e.time = 4] = "time"
  e[e.select = 5] = "select"
  e[e.plural = 6] = "plural"
  e[e.pound = 7] = "pound"
  e[e.tag = 8] = "tag"
}(E || (E = {}));
(function (e) {
  e[e.number = 0] = "number"
  e[e.dateTime = 1] = "dateTime"
})(x || (x = {}))
var S = function () {
  return (S = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var T = function () {
  for (var e = 0, t = 0, /* [auto-meaningful-name] */arguments$length = arguments.length; t < arguments$length; t++) {
    e += arguments[t].length
  }
  var r = Array(e)
  var i = 0
  for (t = 0; t < arguments$length; t++) {
    for (var o = arguments[t], a = 0, /* [auto-meaningful-name] */o$length = o.length; a < o$length; a++, i++) {
      r[i] = o[a]
    }
  }
  return r
}
function B(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    n[r] = S({
      timeZone: t
    }, e[r])
    return n
  }, {})
}
function D(e, t) {
  return Object.keys(S(S({}, e), t)).reduce(function (n, r) {
    n[r] = S(S({}, e[r] || {}), t[r] || {})
    return n
  }, {})
}
function I(e, t) {
  if (!t) {
    return e
  }
  var /* [auto-meaningful-name] */$_2641_index$a$formats = $_2641_index.a.formats
  return S(S(S({}, $_2641_index$a$formats), e), {
    date: D(B($_2641_index$a$formats.date, t), B(e.date || {}, t)),
    time: D(B($_2641_index$a$formats.time, t), B(e.time || {}, t))
  })
}
function R(e, t) {
  return Array.isArray(e) && t ? React.createElement.apply(React, T([React.Fragment, null], e)) : e
}
function F(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$messages = e.messages
  var /* [auto-meaningful-name] */e$defaultLocale = e.defaultLocale
  var /* [auto-meaningful-name] */e$defaultFormats = e.defaultFormats
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  var /* [auto-meaningful-name] */e$wrapRichTextChunksInFragment = e.wrapRichTextChunksInFragment
  if (undefined === n) {
    n = {
      id: ""
    }
  }
  var p = n.id
  var /* [auto-meaningful-name] */n$defaultMessage = n.defaultMessage
  $_2640.a(!!p, "[React Intl] An `id` must be provided to format a message.")
  var A = String(p)
  var g = e$messages && Object.prototype.hasOwnProperty.call(e$messages, A) && e$messages[A]
  if (Array.isArray(g) && 1 === g.length && g[0].type === E.literal) {
    return g[0].value
  }
  if (!r && g && "string" === typeof g) {
    return g.replace(/'\{(.*?)\}'/gi, "{$1}")
  }
  var v = r && function (e) {
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n]
      t[n] = $_1481_index.b(r) ? $$_710_273_index.b(r) : r
      return t
    }, {})
  }(r)
  e$formats = I(e$formats, e$timeZone)
  e$defaultFormats = I(e$defaultFormats, e$timeZone)
  if (!g) {
    if (!n$defaultMessage || e$locale && e$locale.toLowerCase() !== e$defaultLocale.toLowerCase()) {
      e$onError(new $_275.d(n, e$locale))
    }
    if (n$defaultMessage) {
      try {
        return R(t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats).format(v), e$wrapRichTextChunksInFragment)
      } catch (m) {
        e$onError(new $_275.b("Error formatting default message for: \"" + A + "\", rendering default message verbatim", e$locale, n, m))
        return n$defaultMessage
      }
    }
    return A
  }
  try {
    return R(t.getMessageFormat(g, e$locale, e$formats, {
      formatters: t
    }).format(v), e$wrapRichTextChunksInFragment)
  } catch (m) {
    e$onError(new $_275.b("Error formatting message: \"" + A + "\", using " + (n$defaultMessage ? "default message" : "id") + " as fallback.", e$locale, n, m))
  }
  if (n$defaultMessage) {
    try {
      return R(t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats).format(v), e$wrapRichTextChunksInFragment)
    } catch (m) {
      e$onError(new $_275.b("Error formatting the default message for: \"" + A + "\", rendering message verbatim", e$locale, n, m))
    }
  }
  return g || n$defaultMessage || A
}
export { F }
