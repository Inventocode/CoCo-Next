/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：275
 */

"use strict"

export { f as e }
export { d as g }
export { h as a }
export { p as d }
export { g as c }
export { v as f }
export { m as b }
import React = require("react");
import i = require("./2589/index");
import o = require("./2589/792");
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
import s = require("./2588");
import c = require("./277");
var u = function () {
  return (u = Object.assign || function (e) {
    for (var t, n = 1, arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var l = function () {
  for (var e = 0, t = 0, arguments$length = arguments.length; t < arguments$length; t++) {
    e += arguments[t].length
  }
  var r = Array(e)
  var i = 0
  for (t = 0; t < arguments$length; t++) {
    for (var o = arguments[t], a = 0, o$length = o.length; a < o$length; a++, i++) {
      r[i] = o[a]
    }
  }
  return r
}
function f(e, t, n) {
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
function d(e) {
  s.a(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
}
var h = {
  formats: {},
  messages: {},
  timeZone: undefined,
  textComponent: React.Fragment,
  defaultLocale: "en",
  defaultFormats: {},
  onError: function (e) {
    0
  }
}
function p() {
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
function _(e) {
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
var A = a.a || o
function g(e) {
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
  var intl$RelativeTimeFormat = Intl.RelativeTimeFormat
  var intl$ListFormat = Intl.ListFormat
  var intl$DisplayNames = Intl.DisplayNames
  var o = A(function () {
    for (var /* [auto-meaningful-name] */intl$DateTimeFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((intl$DateTimeFormat = Intl.DateTimeFormat).bind.apply(intl$DateTimeFormat, l([undefined], t)))()
  }, {
    cache: _(e.dateTime),
    strategy: A.strategies.variadic
  })
  var a = A(function () {
    for (var /* [auto-meaningful-name] */intl$NumberFormat, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((intl$NumberFormat = Intl.NumberFormat).bind.apply(intl$NumberFormat, l([undefined], t)))()
  }, {
    cache: _(e.number),
    strategy: A.strategies.variadic
  })
  var s = A(function () {
    for (var /* [auto-meaningful-name] */intl$PluralRules, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    return new ((intl$PluralRules = Intl.PluralRules).bind.apply(intl$PluralRules, l([undefined], t)))()
  }, {
    cache: _(e.pluralRules),
    strategy: A.strategies.variadic
  })
  return {
    getDateTimeFormat: o,
    getNumberFormat: a,
    getMessageFormat: A(function (e, t, n, r) {
      return new i.a(e, t, n, u({
        formatters: {
          getNumberFormat: a,
          getDateTimeFormat: o,
          getPluralRules: s
        }
      }, r || {}))
    }, {
      cache: _(e.message),
      strategy: A.strategies.variadic
    }),
    getRelativeTimeFormat: A(function () {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e[n] = arguments[n]
      }
      return new (intl$RelativeTimeFormat.bind.apply(intl$RelativeTimeFormat, l([undefined], e)))()
    }, {
      cache: _(e.relativeTime),
      strategy: A.strategies.variadic
    }),
    getPluralRules: s,
    getListFormat: A(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (intl$ListFormat.bind.apply(intl$ListFormat, l([undefined], e)))()
    }, {
      cache: _(e.list),
      strategy: A.strategies.variadic
    }),
    getDisplayNames: A(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      return new (intl$DisplayNames.bind.apply(intl$DisplayNames, l([undefined], e)))()
    }, {
      cache: _(e.displayNames),
      strategy: A.strategies.variadic
    })
  }
}
function v(e, t, n, r) {
  var i
  var o = e && e[t]
  if (o) {
    i = o[n]
  }
  if (i) {
    return i
  }
  r(new c.f("No " + t + " format named: " + n))
}
function m(e) {
  return function (t) {
    return e(React.Children.toArray(t))
  }
}
export default h
