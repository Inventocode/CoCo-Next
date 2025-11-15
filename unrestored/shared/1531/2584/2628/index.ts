/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2628
 */

"use strict"

export { W as a }
import /* [auto-meaningful-name] */React = require("react")
import /* [auto-meaningful-name] */$_988 = require("./988")
import /* [auto-meaningful-name] */$_275 = require("./275")
import /* [auto-meaningful-name] */$_277 = require("./277")
var s = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay"]
function c(e, t, n) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === n) {
    n = {}
  }
  var /* [auto-meaningful-name] */n$format = n.format
  var u = n$format && $_275.f(e$formats, "number", n$format, e$onError) || {}
  return t(e$locale, $_275.e(n, s, u))
}
function u(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return c(e, t, r).format(n)
  } catch (i) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting number.", i))
  }
  return String(n)
}
function l(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return c(e, t, r).formatToParts(n)
  } catch (i) {
    e.onError(new $_277.e("FORMAT_ERROR", "Error formatting number.", i))
  }
  return []
}
import /* [auto-meaningful-name] */$_796 = require("./796")
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
var E
var x
import /* [auto-meaningful-name] */$_2588 = require("./2588")
import /* [auto-meaningful-name] */$_2589_index = require("./2589/index")
import /* [auto-meaningful-name] */$_1440_index = require("./1440/index")
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
  var /* [auto-meaningful-name] */$_2589_index$a$formats = $_2589_index.a.formats
  return S(S(S({}, $_2589_index$a$formats), e), {
    date: D(B($_2589_index$a$formats.date, t), B(e.date || {}, t)),
    time: D(B($_2589_index$a$formats.time, t), B(e.time || {}, t))
  })
}
function F(e, t) {
  return Array.isArray(e) && t ? React.createElement.apply(React, T([React.Fragment, null], e)) : e
}
function R(e, t, n, r) {
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
  $_2588.a(!!p, "[React Intl] An `id` must be provided to format a message.")
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
      t[n] = $_1440_index.b(r) ? $_275.b(r) : r
      return t
    }, {})
  }(r)
  e$formats = I(e$formats, e$timeZone)
  e$defaultFormats = I(e$defaultFormats, e$timeZone)
  if (!g) {
    if (!n$defaultMessage || e$locale && e$locale.toLowerCase() !== e$defaultLocale.toLowerCase()) {
      e$onError(new $_277.d(n, e$locale))
    }
    if (n$defaultMessage) {
      try {
        return F(t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats).format(v), e$wrapRichTextChunksInFragment)
      } catch (m) {
        e$onError(new $_277.b("Error formatting default message for: \"" + A + "\", rendering default message verbatim", e$locale, n, m))
        return n$defaultMessage
      }
    }
    return A
  }
  try {
    return F(t.getMessageFormat(g, e$locale, e$formats, {
      formatters: t
    }).format(v), e$wrapRichTextChunksInFragment)
  } catch (m) {
    e$onError(new $_277.b("Error formatting message: \"" + A + "\", using " + (n$defaultMessage ? "default message" : "id") + " as fallback.", e$locale, n, m))
  }
  if (n$defaultMessage) {
    try {
      return F(t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats).format(v), e$wrapRichTextChunksInFragment)
    } catch (m) {
      e$onError(new $_277.b("Error formatting the default message for: \"" + A + "\", rendering message verbatim", e$locale, n, m))
    }
  }
  return g || n$defaultMessage || A
}
import /* [auto-meaningful-name] */$_1170 = require("./1170")
var N = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_1170)
var M = ["localeMatcher", "type", "style"]
var j = Date.now()
function L(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.ListFormat) {
    e$onError(new $_796.a("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", "MISSING_INTL_API"))
  }
  var c = $_275.e(r, M)
  try {
    var u = {}
    var l = n.map(function (e, t) {
      if ("object" === typeof e) {
        var n = function (e) {
          return j + "_" + e + "_" + j
        }(t)
        u[n] = e
        return n
      }
      return String(e)
    })
    return Object.keys(u).length ? t(e$locale, c).formatToParts(l).reduce(function (e, t) {
      var /* [auto-meaningful-name] */t$value = t.value
      if (u[t$value]) {
        e.push(u[t$value])
      } else {
        if ("string" === typeof e[e.length - 1]) {
          e[e.length - 1] += t$value
        } else {
          e.push(t$value)
        }
      }
      return e
    }, []) : t(e$locale, c).format(l)
  } catch (d) {
    e$onError(new $_277.e("FORMAT_ERROR", "Error formatting list.", d))
  }
  return n
}
var U = ["localeMatcher", "style", "type", "fallback"]
function H(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.DisplayNames) {
    e$onError(new $_796.a("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", "MISSING_INTL_API"))
  }
  var c = $_275.e(r, U)
  try {
    return t(e$locale, c).of(n)
  } catch (u) {
    e$onError(new $_277.e("FORMAT_ERROR", "Error formatting display name.", u))
  }
}
var V = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var G = function () {
  return (G = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var z = N.a || $_1170
function Q(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment
  }
}
function W(e, t) {
  var n = $_275.c(t)
  var r = G(G({}, $_275.a), e)
  var /* [auto-meaningful-name] */r$locale = r.locale
  var /* [auto-meaningful-name] */r$defaultLocale = r.defaultLocale
  var /* [auto-meaningful-name] */r$onError = r.onError
  if (r$locale) {
    if (!Intl.NumberFormat.supportedLocalesOf(r$locale).length && r$onError) {
      r$onError(new $_277.c("Missing locale data for locale: \"" + r$locale + "\" in Intl.NumberFormat. Using default locale: \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
    } else {
      if (!Intl.DateTimeFormat.supportedLocalesOf(r$locale).length && r$onError) {
        r$onError(new $_277.c("Missing locale data for locale: \"" + r$locale + "\" in Intl.DateTimeFormat. Using default locale: \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
      }
    }
  } else {
    if (r$onError) {
      r$onError(new $_277.a("\"locale\" was not configured, using \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details"))
    }
    r.locale = r.defaultLocale || "en"
  }
  return G(G({}, r), {
    formatters: n,
    formatNumber: u.bind(null, r, n.getNumberFormat),
    formatNumberToParts: l.bind(null, r, n.getNumberFormat),
    formatRelativeTime: h.bind(null, r, n.getRelativeTimeFormat),
    formatDate: g.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: m.bind(null, r, n.getDateTimeFormat),
    formatTime: v.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: y.bind(null, r, n.getDateTimeFormat),
    formatPlural: w.bind(null, r, n.getPluralRules),
    formatMessage: R.bind(null, r, n),
    formatList: L.bind(null, r, n.getListFormat),
    formatDisplayName: H.bind(null, r, n.getDisplayNames)
  })
}
var K = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.cache = $_275.d()
    t.state = {
      cache: t.cache,
      intl: W(Q(t.props), t.cache),
      prevConfig: Q(t.props)
    }
    return t
  }
  V(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    var /* [auto-meaningful-name] */t$prevConfig = t.prevConfig
    var /* [auto-meaningful-name] */t$cache = t.cache
    var i = Q(e)
    return z(t$prevConfig, i) ? null : {
      intl: W(i, t$cache),
      prevConfig: i
    }
  }
  t.prototype.render = function () {
    $_275.g(this.state.intl)
    return React.createElement($_988.b, {
      value: this.state.intl
    }, this.props.children)
  }
  t.displayName = "IntlProvider"
  t.defaultProps = $_275.a
  return t
}(React.PureComponent)
export { K as b }
export default W
