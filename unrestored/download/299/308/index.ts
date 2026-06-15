/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：308
 */

"use strict"

var r = require(/* 0 */"./0")
var i = require(/* 17 */"react")
var o = require(/* 89 */"../306/89/index")
var a = require(/* 38 */"../306/38")
var s = require(/* 300 */"./300")
var u = require(/* 301 */"./301/index")
var c = require(/* 7 */"./7")
var l = require(/* 25 */"./25")
function f(e, t) {
  return Object.keys(e).reduce(function (n, i) {
    n[i] = r.a({
      timeZone: t
    }, e[i])
    return n
  }, {})
}
function p(e, t) {
  return Object.keys(r.a(r.a({}, e), t)).reduce(function (n, i) {
    n[i] = r.a(r.a({}, e[i] || {}), t[i] || {})
    return n
  }, {})
}
function d(e, t) {
  if (!t) {
    return e
  }
  var /* [auto-meaningful-name] */u$a$formats = u.a.formats
  return r.a(r.a(r.a({}, u$a$formats), e), {
    date: p(f(u$a$formats.date, t), f(e.date || {}, t)),
    time: p(f(u$a$formats.time, t), f(e.time || {}, t))
  })
}
function h(e, t, n, i, o) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$messages = e.messages
  var /* [auto-meaningful-name] */e$defaultLocale = e.defaultLocale
  var /* [auto-meaningful-name] */e$defaultFormats = e.defaultFormats
  var /* [auto-meaningful-name] */e$fallbackOnEmptyString = e.fallbackOnEmptyString
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  var /* [auto-meaningful-name] */e$defaultRichTextElements = e.defaultRichTextElements
  if (undefined === n) {
    n = {
      id: ""
    }
  }
  var _ = n.id
  var /* [auto-meaningful-name] */n$defaultMessage = n.defaultMessage
  s.a(!!_, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
  var w = String(_)
  var S = e$messages && Object.prototype.hasOwnProperty.call(e$messages, w) && e$messages[w]
  if (Array.isArray(S) && 1 === S.length && S[0].type === l.a.literal) {
    return S[0].value
  }
  if (!i && S && "string" === typeof S && !e$defaultRichTextElements) {
    return S.replace(/'\{(.*?)\}'/gi, "{$1}")
  }
  i = r.a(r.a({}, e$defaultRichTextElements), i || {})
  e$formats = d(e$formats, e$timeZone)
  e$defaultFormats = d(e$defaultFormats, e$timeZone)
  if (!S) {
    if (false === e$fallbackOnEmptyString && "" === S) {
      return S
    }
    if (!n$defaultMessage || e$locale && e$locale.toLowerCase() !== e$defaultLocale.toLowerCase()) {
      e$onError(new c.g(n, e$locale))
    }
    if (n$defaultMessage) {
      try {
        return t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats, o).format(i)
      } catch (k) {
        e$onError(new c.e("Error formatting default message for: \"".concat(w, "\", rendering default message verbatim"), e$locale, n, k))
        return "string" === typeof n$defaultMessage ? n$defaultMessage : w
      }
    }
    return w
  }
  try {
    return t.getMessageFormat(S, e$locale, e$formats, r.a({
      formatters: t
    }, o || {})).format(i)
  } catch (k) {
    e$onError(new c.e("Error formatting message: \"".concat(w, "\", using ").concat(n$defaultMessage ? "default message" : "id", " as fallback."), e$locale, n, k))
  }
  if (n$defaultMessage) {
    try {
      return t.getMessageFormat(n$defaultMessage, e$defaultLocale, e$defaultFormats, o).format(i)
    } catch (k) {
      e$onError(new c.e("Error formatting the default message for: \"".concat(w, "\", rendering message verbatim"), e$locale, n, k))
    }
  }
  return "string" === typeof S ? S : "string" === typeof n$defaultMessage ? n$defaultMessage : w
}
var g = require(/* 21 */"./21")
var m = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"]
function v(e, t, n) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === n) {
    n = {}
  }
  var /* [auto-meaningful-name] */n$format = n.format
  var s = n$format && g.e(e$formats, "number", n$format, e$onError) || {}
  return t(e$locale, g.d(n, m, s))
}
function y(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return v(e, t, r).format(n)
  } catch (i) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting number.", i))
  }
  return String(n)
}
function _(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  try {
    return v(e, t, r).formatToParts(n)
  } catch (i) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting number.", i))
  }
  return []
}
var b = require(/* 58 */"./58")
var w = ["numeric", "style"]
function S(e, t, n, r, i) {
  if (undefined === i) {
    i = {}
  }
  if (!r) {
    r = "second"
  }
  if (!Intl.RelativeTimeFormat) {
    e.onError(new b.b("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", b.a.MISSING_INTL_API))
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
      var s = !!n$format && g.e(e$formats, "relative", n$format, e$onError) || {}
      return t(e$locale, g.d(n, w, s))
    }(e, t, i).format(n, r)
  } catch (o) {
    e.onError(new c.c("Error formatting relative time.", e.locale, o))
  }
  return String(n)
}
var k = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem"]
function O(e, t, n, i) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$formats = e.formats
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$timeZone = e.timeZone
  if (undefined === i) {
    i = {}
  }
  var /* [auto-meaningful-name] */i$format = i.format
  var l = r.a(r.a({}, e$timeZone && {
    timeZone: e$timeZone
  }), i$format && g.e(e$formats, t, i$format, e$onError))
  var f = g.d(i, k, l)
  if (!("time" !== t || f.hour || f.minute || f.second || f.timeStyle || f.dateStyle)) {
    f = r.a(r.a({}, f), {
      hour: "numeric",
      minute: "numeric"
    })
  }
  return n(e$locale, f)
}
function E(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return O(e, "date", t, a).format(s)
  } catch (u) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting date.", u))
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
    return O(e, "time", t, a).format(s)
  } catch (u) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting time.", u))
  }
  return String(s)
}
function x(e, t) {
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
  var p = g.d(s, k, e$timeZone ? {
    timeZone: e$timeZone
  } : {})
  try {
    return t(e$locale, p).formatRange(i, o)
  } catch (d) {
    e$onError(new c.a(c.b.FORMAT_ERROR, "Error formatting date time range.", d))
  }
  return String(i)
}
function j(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return O(e, "date", t, a).formatToParts(s)
  } catch (u) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting date.", u))
  }
  return []
}
function P(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var i = n[0]
  var o = n[1]
  var a = undefined === o ? {} : o
  var s = "string" === typeof i ? new Date(i || 0) : i
  try {
    return O(e, "time", t, a).formatToParts(s)
  } catch (u) {
    e.onError(new c.a(c.b.FORMAT_ERROR, "Error formatting time.", u))
  }
  return []
}
var C = ["localeMatcher", "type"]
function I(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.PluralRules) {
    e$onError(new b.b("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", b.a.MISSING_INTL_API))
  }
  var a = g.d(r, C)
  try {
    return t(e$locale, a).select(n)
  } catch (s) {
    e$onError(new c.c("Error formatting plural.", e$locale, s))
  }
  return "other"
}
var N = ["localeMatcher", "type", "style"]
var A = Date.now()
function R(e, t, n, r) {
  if (undefined === r) {
    r = {}
  }
  var i = L(e, t, n, r).reduce(function (e, t) {
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
function L(e, t, n, i) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === i) {
    i = {}
  }
  if (!Intl.ListFormat) {
    e$onError(new b.b("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", b.a.MISSING_INTL_API))
  }
  var s = g.d(i, N)
  try {
    var u = {}
    var l = n.map(function (e, t) {
      if ("object" === typeof e) {
        var n = function (e) {
          return "".concat(A, "_").concat(e, "_").concat(A)
        }(t)
        u[n] = e
        return n
      }
      return String(e)
    })
    return t(e$locale, s).formatToParts(l).map(function (e) {
      return "literal" === e.type ? e : r.a(r.a({}, e), {
        value: u[e.value] || e.value
      })
    })
  } catch (f) {
    e$onError(new c.a(c.b.FORMAT_ERROR, "Error formatting list.", f))
  }
  return n
}
var D = ["localeMatcher", "style", "type", "fallback"]
function M(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (!Intl.DisplayNames) {
    e$onError(new b.b("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", b.a.MISSING_INTL_API))
  }
  var a = g.d(r, D)
  try {
    return t(e$locale, a).of(n)
  } catch (s) {
    e$onError(new c.a(c.b.FORMAT_ERROR, "Error formatting display name.", s))
  }
}
function U(e) {
  var t
  if (e.onWarn && e.defaultRichTextElements && "string" === typeof ((t = e.messages || {}) ? t[Object.keys(t)[0]] : undefined)) {
    e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution")
  }
}
var B = require(/* 129 */"./129")
function H(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  }
}
function F(e) {
  return e ? Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    t[n] = B.c(r) ? a.b(r) : r
    return t
  }, {}) : e
}
var $ = function (e, t, n, o) {
  for (var a = [], s = 4; s < arguments.length; s++) {
    a[s - 4] = arguments[s]
  }
  var u = F(o)
  var c = h.apply(undefined, r.d([e, t, n, u], a, false))
  return Array.isArray(c) ? i.Children.toArray(c) : c
}
var z = function (e, t) {
  var /* [auto-meaningful-name] */e$defaultRichTextElements = e.defaultRichTextElements
  var i = r.c(e, ["defaultRichTextElements"])
  var o = F(e$defaultRichTextElements)
  var s = function (e, t) {
    var n = g.b(t)
    var i = r.a(r.a({}, g.a), e)
    var /* [auto-meaningful-name] */i$locale = i.locale
    var /* [auto-meaningful-name] */i$defaultLocale = i.defaultLocale
    var /* [auto-meaningful-name] */i$onError = i.onError
    if (i$locale) {
      if (!Intl.NumberFormat.supportedLocalesOf(i$locale).length && i$onError) {
        i$onError(new c.f("Missing locale data for locale: \"".concat(i$locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(i$defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")))
      } else {
        if (!Intl.DateTimeFormat.supportedLocalesOf(i$locale).length && i$onError) {
          i$onError(new c.f("Missing locale data for locale: \"".concat(i$locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(i$defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")))
        }
      }
    } else {
      if (i$onError) {
        i$onError(new c.d("\"locale\" was not configured, using \"".concat(i$defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details")))
      }
      i.locale = i.defaultLocale || "en"
    }
    U(i)
    return r.a(r.a({}, i), {
      formatters: n,
      formatNumber: y.bind(null, i, n.getNumberFormat),
      formatNumberToParts: _.bind(null, i, n.getNumberFormat),
      formatRelativeTime: S.bind(null, i, n.getRelativeTimeFormat),
      formatDate: E.bind(null, i, n.getDateTimeFormat),
      formatDateToParts: j.bind(null, i, n.getDateTimeFormat),
      formatTime: T.bind(null, i, n.getDateTimeFormat),
      formatDateTimeRange: x.bind(null, i, n.getDateTimeFormat),
      formatTimeToParts: P.bind(null, i, n.getDateTimeFormat),
      formatPlural: I.bind(null, i, n.getPluralRules),
      formatMessage: h.bind(null, i, n),
      $t: h.bind(null, i, n),
      formatList: R.bind(null, i, n.getListFormat),
      formatListToParts: L.bind(null, i, n.getListFormat),
      formatDisplayName: M.bind(null, i, n.getDisplayNames)
    })
  }(r.a(r.a(r.a({}, a.a), i), {
    defaultRichTextElements: o
  }), t)
  return r.a(r.a({}, s), {
    formatMessage: $.bind(null, {
      locale: s.locale,
      timeZone: s.timeZone,
      fallbackOnEmptyString: s.fallbackOnEmptyString,
      formats: s.formats,
      defaultLocale: s.defaultLocale,
      defaultFormats: s.defaultFormats,
      messages: s.messages,
      onError: s.onError,
      defaultRichTextElements: o
    }, s.formatters)
  })
}
var q = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.cache = g.c()
    t.state = {
      cache: t.cache,
      intl: z(H(t.props), t.cache),
      prevConfig: H(t.props)
    }
    return t
  }
  r.b(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    var /* [auto-meaningful-name] */t$prevConfig = t.prevConfig
    var /* [auto-meaningful-name] */t$cache = t.cache
    var i = H(e)
    return a.d(t$prevConfig, i) ? null : {
      intl: z(i, t$cache),
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
exports.a = q
