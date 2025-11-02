/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2589
 */

"use strict"

export { f as a }
import r = require("./183");
import i = require("./1166");
import o = require("./792");
var a = function __importDefault(module) {
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
}(o)
import s = require("../1440/index");
function c(e, t) {
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
        has: function (t) {
          return t in e
        },
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
var l = a.a || o
var f = function () {
  function e(t, n, i, o) {
    var a
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
        if (e.length && 0 === t.type && "string" === typeof e[e.length - 1]) {
          e[e.length - 1] += t.value
        } else {
          e.push(t.value)
        }
        return e
      }, [])
      return n.length <= 1 ? n[0] || "" : n
    }
    this.formatToParts = function (e) {
      return s.a(f.ast, f.locales, f.formatters, f.formats, e, undefined, f.message)
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
        normalizeHashtagInPlural: false,
        ignoreTag: null === o || undefined === o ? undefined : o.ignoreTag
      })
    } else {
      this.ast = t
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError("A message must be provided as a String or AST.")
    }
    this.formats = c(e.formats, i)
    this.locales = n
    this.formatters = o && o.formatters || (undefined === (a = this.formatterCache) && (a = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }), {
      getNumberFormat: l(function () {
        for (var /* [auto-meaningful-name] */intl$NumberFormat, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((intl$NumberFormat = Intl.NumberFormat).bind.apply(intl$NumberFormat, r.c([undefined], t)))()
      }, {
        cache: u(a.number),
        strategy: l.strategies.variadic
      }),
      getDateTimeFormat: l(function () {
        for (var /* [auto-meaningful-name] */intl$DateTimeFormat, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((intl$DateTimeFormat = Intl.DateTimeFormat).bind.apply(intl$DateTimeFormat, r.c([undefined], t)))()
      }, {
        cache: u(a.dateTime),
        strategy: l.strategies.variadic
      }),
      getPluralRules: l(function () {
        for (var /* [auto-meaningful-name] */intl$PluralRules, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n]
        }
        return new ((intl$PluralRules = Intl.PluralRules).bind.apply(intl$PluralRules, r.c([undefined], t)))()
      }, {
        cache: u(a.pluralRules),
        strategy: l.strategies.variadic
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
  e.__parse = i.a
  e.formats = {
    number: {
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
export default f
