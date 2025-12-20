/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：73
 */

"use strict"

var r = require("./0")
var i = require("react")
var o = require("../71/35/index")
var a = require("../71/20")
var s = require("./65")
var u = require("./66")
var l = require("./7")
var c = require("./15")
function f(e, t) {
  return Object.keys(e).reduce(function (n, i) {
    n[i] = r.a({
      timeZone: t
    }, e[i])
    return n
  }, {})
}
function d(e, t) {
  return Object.keys(r.a(r.a({}, e), t)).reduce(function (n, i) {
    n[i] = r.a(r.a({}, e[i] || {}), t[i] || {})
    return n
  }, {})
}
function p(e, t) {
  if (!t) {
    return e
  }
  var /* [auto-meaningful-name] */u$a$formats = u.a.formats
  return r.a(r.a(r.a({}, u$a$formats), e), {
    date: d(f(u$a$formats.date, t), f(e.date || {}, t)),
    time: d(f(u$a$formats.time, t), f(e.time || {}, t))
  })
}
function h(e, t, n, i, o) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$messages = e.messages
  var /* [auto-meaningful-name] */e$defaultLocale = e.defaultLocale
  var /* [auto-meaningful-name] */e$defaultFormats = e.defaultFormats
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  var /* [auto-meaningful-name] */e$defaultRichTextElements = e.defaultRichTextElements
  if (undefined === n) {
    n = {
      id: ""
    }
  }
  var g = n.id
  var /* [auto-meaningful-name] */n$defaultMessage = n.defaultMessage
  s.a(!!g, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
  var _ = String(g)
  var E = e$messages && Object.prototype.hasOwnProperty.call(e$messages, _) && e$messages[_]
  if (Array.isArray(E) && 1 === E.length && E[0].type === c.a.literal) {
    return E[0].value
  }
  if (!i && E && "string" === typeof E && !e$defaultRichTextElements) {
    return E.replace(/'\{(.*?)\}'/gi, "{$1}")
  }
  i = r.a(r.a({}, e$defaultRichTextElements), i || {})
  e$formats = p(e$formats, e$timeZone)
  e$defaultFormats = p(e$defaultFormats, e$timeZone)
  if (!E) {
    if (!n$defaultMessage || e$locale && e$locale.toLowerCase() !== e$defaultLocale.toLowerCase()) {
      e$onError(new l.f(n, e$locale))
    }
    if (n$defaultMessage) {
      try {
        return t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats, o).format(i)
      } catch (O) {
        e$onError(new l.d("Error formatting default message for: \"" + _ + "\", rendering default message verbatim", e$locale, n, O))
        return "string" === typeof n$defaultMessage ? n$defaultMessage : _
      }
    }
    return _
  }
  try {
    return t.getMessageFormat(E, e$locale, e$formats, r.a({
      formatters: t
    }, o || {})).format(i)
  } catch (O) {
    e$onError(new l.d("Error formatting message: \"" + _ + "\", using " + (n$defaultMessage ? "default message" : "id") + " as fallback.", e$locale, n, O))
  }
  if (n$defaultMessage) {
    try {
      return t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats, o).format(i)
    } catch (O) {
      e$onError(new l.d("Error formatting the default message for: \"" + _ + "\", rendering message verbatim", e$locale, n, O))
    }
  }
  return "string" === typeof E ? E : "string" === typeof n$defaultMessage ? n$defaultMessage : _
}
var m = require("./11/index")
var v = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"]
function y(e, t, n) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === n) {
    n = {}
  }
  var /* [auto-meaningful-name] */n$format = n.format
  var s = n$format && m.e(e$formats, "number", n$format, e$onError) || {}
  return t(e$locale, m.d(n, v, s))
}
function g(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return y(e, t, r).format(n)
  } catch (i) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting number.", i))
  }
  return String(n)
}
function b(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return y(e, t, r).formatToParts(n)
  } catch (i) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting number.", i))
  }
  return []
}
var _ = require("./26")
var E = ["numeric", "style"]
function O(e, t, n, r, i) {
  if (undefined === i) {
    i = {}
  }
  if (!r) {
    r = "second"
  }
  if (!Intl.RelativeTimeFormat) {
    e.onError(new _.b("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", _.a.MISSING_INTL_API))
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
      var s = !!n$format && m.e(e$formats, "relative", n$format, e$onError) || {}
      return t(e$locale, m.d(n, E, s))
    }(e, t, i).format(n, r)
  } catch (o) {
    e.onError(new l.d("Error formatting relative time.", o))
  }
  return String(n)
}
var w = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem"]
function S(e, t, n, i) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  if (undefined === i) {
    i = {}
  }
  var /* [auto-meaningful-name] */i$format = i.format
  var c = r.a(r.a({}, e$timeZone && {
    timeZone: e$timeZone
  }), i$format && m.e(e$formats, t, i$format, e$onError))
  var f = m.d(i, w, c)
  if (!("time" !== t || f.hour || f.minute || f.second || f.timeStyle || f.dateStyle)) {
    f = r.a(r.a({}, f), {
      hour: "numeric",
      minute: "numeric"
    })
  }
  return n(e$locale, f)
}
function k(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return S(e, "date", t, a).format(s)
  } catch (u) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", u))
  }
  return String(s)
}
function T(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return S(e, "time", t, a).format(s)
  } catch (u) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", u))
  }
  return String(s)
}
function j(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = n[2]
  var s = undefined === a ? {} : a
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  var d = m.d(s, w, e$timeZone ? {
    timeZone: e$timeZone
  } : {})
  try {
    return t(e$locale, d).formatRange(i, o)
  } catch (p) {
    e$onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date time range.", p))
  }
  return String(i)
}
function x(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return S(e, "date", t, a).formatToParts(s)
  } catch (u) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting date.", u))
  }
  return []
}
function C(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return S(e, "time", t, a).formatToParts(s)
  } catch (u) {
    e.onError(new l.a(l.b.FORMAT_ERROR, "Error formatting time.", u))
  }
  return []
}
var R = ["localeMatcher", "type"]
function P(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.PluralRules) {
    e$onError(new _.b("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _.a.MISSING_INTL_API))
  }
  var a = m.d(r, R)
  try {
    return t(e$locale, a).select(n)
  } catch (s) {
    e$onError(new l.d("Error formatting plural.", s))
  }
  return "other"
}
var N = ["localeMatcher", "type", "style"]
var I = Date.now()
function L(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = A(e, t, n, r).reduce(function (e, t) {
    var /* [auto-meaningful-name] */t$value = t.value
    if ("string" !== typeof t$value) {
      e.push(t$value)
    } else {
      if ("string" === typeof e[e.length - 1]) {
        e[e.length - 1] += t$value
      } else {
        e.push(t$value)
      }
    }
    return e
  }, [])
  return 1 === i.length ? i[0] : i
}
function A(e, t, n, i) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === i) {
    i = {}
  }
  if (!Intl.ListFormat) {
    e$onError(new _.b("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", _.a.MISSING_INTL_API))
  }
  var s = m.d(i, N)
  try {
    var u = {}
    var c = n.map(function (e, t) {
      if ("object" === typeof e) {
        var n = function (e) {
          return I + "_" + e + "_" + I
        }(t)
        u[n] = e
        return n
      }
      return String(e)
    })
    return t(e$locale, s).formatToParts(c).map(function (e) {
      return "literal" === e.type ? e : r.a(r.a({}, e), {
        value: u[e.value] || e.value
      })
    })
  } catch (f) {
    e$onError(new l.a(l.b.FORMAT_ERROR, "Error formatting list.", f))
  }
  return n
}
var D = ["localeMatcher", "style", "type", "fallback"]
function M(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (!Intl.DisplayNames) {
    e$onError(new _.b("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", _.a.MISSING_INTL_API))
  }
  var a = m.d(r, D)
  try {
    return t(e$locale, a).of(n)
  } catch (s) {
    e$onError(new l.a(l.b.FORMAT_ERROR, "Error formatting display name.", s))
  }
}
function F(e) {
  var t
  if (e.defaultRichTextElements && "string" === typeof ((t = e.messages || {}) ? t[Object.keys(t)[0]] : undefined)) {
    console.warn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution")
  }
}
var U = require("./43")
function z(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  }
}
function B(e) {
  return e ? Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    t[n] = U.c(r) ? a.b(r) : r
    return t
  }, {}) : e
}
var G = function (e, t, n, o) {
  for (var a = [], s = 4; s < arguments.length; s++) {
    a[s - 4] = arguments[s]
  }
  var u = B(o)
  var l = h.apply(undefined, r.d([e, t, n, u], a))
  return Array.isArray(l) ? i.Children.toArray(l) : l
}
var q = function (e, t) {
  var /* [auto-meaningful-name] */e$defaultRichTextElements = e.defaultRichTextElements
  var i = r.c(e, ["defaultRichTextElements"])
  var o = B(e$defaultRichTextElements)
  var s = function (e, t) {
    var n = m.b(t)
    var i = r.a(r.a({}, m.a), e)
    var /* [auto-meaningful-name] */i$locale = i.locale
    var /* [auto-meaningful-name] */i$defaultLocale = i.defaultLocale
    var /* [auto-meaningful-name] */i$onError = i.onError
    if (i$locale) {
      if (!Intl.NumberFormat.supportedLocalesOf(i$locale).length && i$onError) {
        i$onError(new l.e("Missing locale data for locale: \"" + i$locale + "\" in Intl.NumberFormat. Using default locale: \"" + i$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
      } else {
        if (!Intl.DateTimeFormat.supportedLocalesOf(i$locale).length && i$onError) {
          i$onError(new l.e("Missing locale data for locale: \"" + i$locale + "\" in Intl.DateTimeFormat. Using default locale: \"" + i$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
        }
      }
    } else {
      if (i$onError) {
        i$onError(new l.c("\"locale\" was not configured, using \"" + i$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details"))
      }
      i.locale = i.defaultLocale || "en"
    }
    F(i)
    return r.a(r.a({}, i), {
      formatters: n,
      formatNumber: g.bind(null, i, n.getNumberFormat),
      formatNumberToParts: b.bind(null, i, n.getNumberFormat),
      formatRelativeTime: O.bind(null, i, n.getRelativeTimeFormat),
      formatDate: k.bind(null, i, n.getDateTimeFormat),
      formatDateToParts: x.bind(null, i, n.getDateTimeFormat),
      formatTime: T.bind(null, i, n.getDateTimeFormat),
      formatDateTimeRange: j.bind(null, i, n.getDateTimeFormat),
      formatTimeToParts: C.bind(null, i, n.getDateTimeFormat),
      formatPlural: P.bind(null, i, n.getPluralRules),
      formatMessage: h.bind(null, i, n),
      formatList: L.bind(null, i, n.getListFormat),
      formatListToParts: A.bind(null, i, n.getListFormat),
      formatDisplayName: M.bind(null, i, n.getDisplayNames)
    })
  }(r.a(r.a(r.a({}, a.a), i), {
    defaultRichTextElements: o
  }), t)
  return r.a(r.a({}, s), {
    formatMessage: G.bind(null, {
      locale: s.locale,
      timeZone: s.timeZone,
      formats: s.formats,
      defaultLocale: s.defaultLocale,
      defaultFormats: s.defaultFormats,
      messages: s.messages,
      onError: s.onError,
      defaultRichTextElements: o
    }, s.formatters)
  })
}
var H = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.cache = m.c()
    t.state = {
      cache: t.cache,
      intl: q(z(t.props), t.cache),
      prevConfig: z(t.props)
    }
    return t
  }
  r.b(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    var /* [auto-meaningful-name] */t$prevConfig = t.prevConfig
    var /* [auto-meaningful-name] */t$cache = t.cache
    var i = z(e)
    return a.d(t$prevConfig, i) ? null : {
      intl: q(i, t$cache),
      prevConfig: i
    }
  }
  t.prototype.render = function () {
    a.c(this.state.intl)
    return i.createElement(o.b, {
      value: this.state.intl
    }, this.props.children)
  }
  t.displayName = "IntlProvider"
  t.defaultProps = a.a
  return t
}(i.PureComponent)
exports.a = H
