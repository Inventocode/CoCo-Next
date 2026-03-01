/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：14
 */

"use strict"

export { d as a }
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"./28/index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"./55"
var c = {}
function l(e, t) {
  c[e] = t
}
function u(e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$messageId = e.messageId
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var l = undefined === e$widgetId ? "" : e$widgetId
  var u = Module_20.currentContext()
  var d = e$message
  if (e$messageId) {
    d = Module_28.o(e$messageId)
  }
  if (!d) {
    throw new Error("message not set")
  }
  Module_55.b.push({
    type: e$type || "warning",
    message: d,
    values: e$values,
    widgetId: l,
    screenId: (null === u || undefined === u ? undefined : u.screenId) || "",
    blockId: (null === u || undefined === u ? undefined : u.blockId) || ""
  })
}
l("string.notEmpty", function (e, t) {
  t = String(t)
  var n = "object" === typeof e ? e.value : e
  if ("object" === typeof e && e.trim) {
    t = t.trim()
  }
  return 0 === t.length !== n
})
l("string.maxLength", function (e, t) {
  t = String(t)
  var n = "object" === typeof e ? e.value : e
  if ("object" === typeof e && e.trim) {
    t = t.trim()
  }
  return t.length <= n
})
l("string.minLength", function (e, t) {
  t = String(t)
  var n = "object" === typeof e ? e.value : e
  if ("object" === typeof e && e.trim) {
    t = t.trim()
  }
  return t.length >= n
})
l("number.greaterThan", function (e, t) {
  return (t = Number(t)) >= ("object" === typeof e ? e.value : e)
})
l("number.lessThan", function (e, t) {
  return (t = Number(t)) <= ("object" === typeof e ? e.value : e)
})
l("number.isInteger", function (e, t) {
  return (t = Number(t)) % 1 === 0
})
var d = {
  range: function (e, t, n) {
    var /* [auto-meaningful-name] */t$min = t.min
    var /* [auto-meaningful-name] */t$max = t.max
    return this.condition((undefined === t$min || e >= t$min) && (undefined === t$max || e <= t$max), n)
  },
  condition: function (e, t) {
    if (!e) {
      u(t)
    }
    return e
  },
  emptyContent: function (e, t) {
    return this.condition(Boolean(e), t)
  },
  isNumber: function (e, t) {
    return this.condition("number" === typeof e, t)
  },
  validate: function (e) {
    var /* [auto-meaningful-name] */e$ruleKey = e.ruleKey
    var /* [auto-meaningful-name] */e$ruleOptions = e.ruleOptions
    var /* [auto-meaningful-name] */e$inputValue = e.inputValue
    var /* [auto-meaningful-name] */e$values = e.values
    var s = undefined === e$values ? {} : e$values
    var /* [auto-meaningful-name] */e$widgetId = e.widgetId
    var d = true
    var p = c[e$ruleKey]
    if (!p) {
      console.error("validator is not found", e$ruleKey)
      return true
    }
    var f = function (e) {
      return "WidgetValidators.".concat(e)
    }(e$ruleKey)
    var h = ""
    if ("object" === typeof e$ruleOptions) {
      h = e$ruleOptions.value
      if (e$ruleOptions.message) {
        f = e$ruleOptions.message
      }
    } else {
      h = e$ruleOptions
    }
    var m = Module_6.a(Module_6.a({}, s), {}, {
      ruleValue: h,
      inputValue: e$inputValue
    })
    try {
      if (!(d = p(e$ruleOptions, e$inputValue))) {
        u({
          widgetId: e$widgetId,
          type: "error",
          message: Src_shared_ui_language.d(f, m)
        })
      }
    } catch (g) {
      console.error("validate error", g)
    }
    return d
  },
  log: u
}
export default d
