/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2681__part-3
 */

"use strict"

import { u, l } from "./index__part-0"
import { h, g, v, m, y, w } from "./index__part-1"
import { F } from "./index__part-2"
import * as /* [auto-meaningful-name] */$_808 from "./808"
import * as /* [auto-meaningful-name] */$_275 from "./275"
import * as /* [auto-meaningful-name] */$$_710_273_index from "../710/273/index"
import * as /* [auto-meaningful-name] */$$_710_1009 from "../710/1009"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1196 from "./1196"
import /* [auto-meaningful-name] */$_11961 from "./1196"
var M = ["localeMatcher", "type", "style"]
var L = Date.now()
function j(e, t, n, r) {
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$onError = e.onError
  if (undefined === r) {
    r = {}
  }
  if (!Intl.ListFormat) {
    e$onError(new $_808.a("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", "MISSING_INTL_API"))
  }
  var c = $$_710_273_index.e(r, M)
  try {
    var u = {}
    var l = n.map(function (e, t) {
      if ("object" === typeof e) {
        var n = function (e) {
          return L + "_" + e + "_" + L
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
    e$onError(new $_275.e("FORMAT_ERROR", "Error formatting list.", d))
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
    e$onError(new $_808.a("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", "MISSING_INTL_API"))
  }
  var c = $$_710_273_index.e(r, U)
  try {
    return t(e$locale, c).of(n)
  } catch (u) {
    e$onError(new $_275.e("FORMAT_ERROR", "Error formatting display name.", u))
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
var z = $_11961 || $_1196
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
  var n = $$_710_273_index.c(t)
  var r = G(G({}, $$_710_273_index.a), e)
  var /* [auto-meaningful-name] */r$locale = r.locale
  var /* [auto-meaningful-name] */r$defaultLocale = r.defaultLocale
  var /* [auto-meaningful-name] */r$onError = r.onError
  if (r$locale) {
    if (!Intl.NumberFormat.supportedLocalesOf(r$locale).length && r$onError) {
      r$onError(new $_275.c("Missing locale data for locale: \"" + r$locale + "\" in Intl.NumberFormat. Using default locale: \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
    } else {
      if (!Intl.DateTimeFormat.supportedLocalesOf(r$locale).length && r$onError) {
        r$onError(new $_275.c("Missing locale data for locale: \"" + r$locale + "\" in Intl.DateTimeFormat. Using default locale: \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"))
      }
    }
  } else {
    if (r$onError) {
      r$onError(new $_275.a("\"locale\" was not configured, using \"" + r$defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details"))
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
    formatMessage: F.bind(null, r, n),
    formatList: j.bind(null, r, n.getListFormat),
    formatDisplayName: H.bind(null, r, n.getDisplayNames)
  })
}
var K = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.cache = $$_710_273_index.d()
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
    $$_710_273_index.g(this.state.intl)
    return React.createElement($$_710_1009.b, {
      value: this.state.intl
    }, this.props.children)
  }
  t.displayName = "IntlProvider"
  t.defaultProps = $$_710_273_index.a
  return t
}(React.PureComponent)
export { W }
export { K }
