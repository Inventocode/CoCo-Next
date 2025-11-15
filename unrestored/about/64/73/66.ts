/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：66
 */

"use strict"

export { l as a }
import * as r from "./0"
import * as i from "./15"
import * as /* [auto-meaningful-name] */$_11_10 from "./11/10"
import * as a from "./43"
function s(e, t) {
  return t ? Object.keys(e).reduce(function (n, i) {
    var o
    var a
    n[i] = (o = e[i], (a = t[i]) ? r.a(r.a(r.a({}, o || {}), a || {}), Object.keys(o).reduce(function (e, t) {
      e[t] = r.a(r.a({}, o[t]), a[t] || {})
      return e
    }, {})) : o)
    return n
  }, r.a({}, e)) : e
}
function u(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t]
        },
        set: function (t, n) {
          e[t] = n
        }
      }
    }
  }
}
var l = function () {
  function e(t, n, i, l) {
    var c
    var f = this
    if (undefined === n) {
      n = e.defaultLocale
    }
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }
    this.format = function (e) {
      var t = f.formatToParts(e)
      if (1 === t.length) {
        return t[0].value
      }
      var n = t.reduce(function (e, t) {
        if (e.length && t.type === a.a.literal && "string" === typeof e[e.length - 1]) {
          e[e.length - 1] += t.value
        } else {
          e.push(t.value)
        }
        return e
      }, [])
      return n.length <= 1 ? n[0] || "" : n
    }
    this.formatToParts = function (e) {
      return a.b(f.ast, f.locales, f.formatters, f.formats, e, undefined, f.message)
    }
    this.resolvedOptions = function () {
      return {
        locale: Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
      }
    }
    this.getAst = function () {
      return f.ast
    }
    if ("string" === typeof t) {
      this.message = t
      if (!e.__parse) {
        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
      }
      this.ast = e.__parse(t, {
        ignoreTag: null === l || undefined === l ? undefined : l.ignoreTag
      })
    } else {
      this.ast = t
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError("A message must be provided as a String or AST.")
    }
    this.formats = s(e.formats, i)
    this.locales = n
    this.formatters = l && l.formatters || (undefined === (c = this.formatterCache) && (c = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }), {
      getNumberFormat: $_11_10.a(function () {
        for (var /* [auto-meaningful-name] */Intl$NumberFormat, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((Intl$NumberFormat = Intl.NumberFormat).bind.apply(Intl$NumberFormat, r.d([undefined], t)))()
      }, {
        cache: u(c.number),
        strategy: $_11_10.b.variadic
      }),
      getDateTimeFormat: $_11_10.a(function () {
        for (var /* [auto-meaningful-name] */Intl$DateTimeFormat, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((Intl$DateTimeFormat = Intl.DateTimeFormat).bind.apply(Intl$DateTimeFormat, r.d([undefined], t)))()
      }, {
        cache: u(c.dateTime),
        strategy: $_11_10.b.variadic
      }),
      getPluralRules: $_11_10.a(function () {
        for (var /* [auto-meaningful-name] */Intl$PluralRules, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((Intl$PluralRules = Intl.PluralRules).bind.apply(Intl$PluralRules, r.d([undefined], t)))()
      }, {
        cache: u(c.pluralRules),
        strategy: $_11_10.b.variadic
      })
    })
  }
  Object.defineProperty(e, "defaultLocale", {
    get: function () {
      if (!e.memoizedDefaultLocale) {
        e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale
      }
      return e.memoizedDefaultLocale
    },
    enumerable: false,
    configurable: true
  })
  e.memoizedDefaultLocale = null
  e.__parse = i.m
  e.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: "currency"
      },
      percent: {
        style: "percent"
      }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  }
  return e
}()
export default l
