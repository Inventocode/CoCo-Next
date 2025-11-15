/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：11
 */

"use strict"

export { s as d }
export { u as a }
export { l as c }
export { f as b }
export { d as e }
import * as r from "../0"
import * as /* [auto-meaningful-name] */$$_66 from "../66"
import * as o from "./10"
import * as a from "../7"
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
  onError: function (e) {
    0
  }
}
function l() {
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
function c(e) {
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
  var s = o.a(function () {
    for (var /* [auto-meaningful-name] */Intl$DateTimeFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$DateTimeFormat = Intl.DateTimeFormat).bind.apply(Intl$DateTimeFormat, r.d([undefined], t)))()
  }, {
    cache: c(e.dateTime),
    strategy: o.b.variadic
  })
  var u = o.a(function () {
    for (var /* [auto-meaningful-name] */Intl$NumberFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$NumberFormat = Intl.NumberFormat).bind.apply(Intl$NumberFormat, r.d([undefined], t)))()
  }, {
    cache: c(e.number),
    strategy: o.b.variadic
  })
  var l = o.a(function () {
    for (var /* [auto-meaningful-name] */Intl$PluralRules, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((Intl$PluralRules = Intl.PluralRules).bind.apply(Intl$PluralRules, r.d([undefined], t)))()
  }, {
    cache: c(e.pluralRules),
    strategy: o.b.variadic
  })
  return {
    getDateTimeFormat: s,
    getNumberFormat: u,
    getMessageFormat: o.a(function (e, t, n, o) {
      return new $$_66.a(e, t, n, r.a({
        formatters: {
          getNumberFormat: u,
          getDateTimeFormat: s,
          getPluralRules: l
        }
      }, o || {}))
    }, {
      cache: c(e.message),
      strategy: o.b.variadic
    }),
    getRelativeTimeFormat: o.a(function () {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e[n] = arguments[n]
      }
      return new (Intl$RelativeTimeFormat.bind.apply(Intl$RelativeTimeFormat, r.d([undefined], e)))()
    }, {
      cache: c(e.relativeTime),
      strategy: o.b.variadic
    }),
    getPluralRules: l,
    getListFormat: o.a(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (Intl$ListFormat.bind.apply(Intl$ListFormat, r.d([undefined], e)))()
    }, {
      cache: c(e.list),
      strategy: o.b.variadic
    }),
    getDisplayNames: o.a(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (Intl$DisplayNames.bind.apply(Intl$DisplayNames, r.d([undefined], e)))()
    }, {
      cache: c(e.displayNames),
      strategy: o.b.variadic
    })
  }
}
function d(e, t, n, r) {
  var i
  var o = e && e[t]
  if (o) {
    i = o[n]
  }
  if (i) {
    return i
  }
  r(new a.g("No " + t + " format named: " + n))
}
export default u
