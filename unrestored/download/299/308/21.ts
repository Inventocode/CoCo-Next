/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：21
 */

"use strict"

export { s as d }
export { u as a }
export { c }
export { f as b }
export { p as e }
import * as /* [auto-meaningful-name] */Module_0 from /* 0 */"./0"
import * as /* [auto-meaningful-name] */Module_301 from /* 301 */"./301/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./301/19"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
function s(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  return t.reduce(function (t, r) {
    if (r in e) {
      t[r] = e[r]
    } else {
      if (r in n) {
        t[r] = n[r]
      }
    }
    return t
  }, {})
}
var u = {
  formats: {},
  messages: {},
  timeZone: undefined,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: true,
  onError: function (e) {
    0
  },
  onWarn: function (e) {
    0
  }
}
function c() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  }
}
function l(e) {
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
function f(e) {
  if (undefined === e) {
    e = {
      dateTime: {},
      number: {},
      message: {},
      relativeTime: {},
      pluralRules: {},
      list: {},
      displayNames: {}
    }
  }
  var /* [auto-meaningful-name] */Intl$RelativeTimeFormat = Intl.RelativeTimeFormat
  var /* [auto-meaningful-name] */Intl$ListFormat = Intl.ListFormat
  var /* [auto-meaningful-name] */Intl$DisplayNames = Intl.DisplayNames
  var s = Module_19.a(function () {
    for (var /* [auto-meaningful-name] */Intl$DateTimeFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$DateTimeFormat = Intl.DateTimeFormat).bind.apply(Intl$DateTimeFormat, Module_0.d([undefined], t, false)))()
  }, {
    cache: l(e.dateTime),
    strategy: Module_19.b.variadic
  })
  var u = Module_19.a(function () {
    for (var /* [auto-meaningful-name] */Intl$NumberFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$NumberFormat = Intl.NumberFormat).bind.apply(Intl$NumberFormat, Module_0.d([undefined], t, false)))()
  }, {
    cache: l(e.number),
    strategy: Module_19.b.variadic
  })
  var c = Module_19.a(function () {
    for (var /* [auto-meaningful-name] */Intl$PluralRules, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$PluralRules = Intl.PluralRules).bind.apply(Intl$PluralRules, Module_0.d([undefined], t, false)))()
  }, {
    cache: l(e.pluralRules),
    strategy: Module_19.b.variadic
  })
  return {
    getDateTimeFormat: s,
    getNumberFormat: u,
    getMessageFormat: Module_19.a(function (e, t, n, o) {
      return new Module_301.a(e, t, n, Module_0.a({
        formatters: {
          getNumberFormat: u,
          getDateTimeFormat: s,
          getPluralRules: c
        }
      }, o || {}))
    }, {
      cache: l(e.message),
      strategy: Module_19.b.variadic
    }),
    getRelativeTimeFormat: Module_19.a(function () {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e[n] = arguments[n]
      }
      return new (Intl$RelativeTimeFormat.bind.apply(Intl$RelativeTimeFormat, Module_0.d([undefined], e, false)))()
    }, {
      cache: l(e.relativeTime),
      strategy: Module_19.b.variadic
    }),
    getPluralRules: c,
    getListFormat: Module_19.a(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (Intl$ListFormat.bind.apply(Intl$ListFormat, Module_0.d([undefined], e, false)))()
    }, {
      cache: l(e.list),
      strategy: Module_19.b.variadic
    }),
    getDisplayNames: Module_19.a(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (Intl$DisplayNames.bind.apply(Intl$DisplayNames, Module_0.d([undefined], e, false)))()
    }, {
      cache: l(e.displayNames),
      strategy: Module_19.b.variadic
    })
  }
}
function p(e, t, n, r) {
  var i
  var o = e && e[t]
  if (o) {
    i = o[n]
  }
  if (i) {
    return i
  }
  r(new Module_7.h("No ".concat(t, " format named: ").concat(n)))
}
export default u
