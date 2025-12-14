/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：522
 */

"use strict"

export { d as a }
export { p as e }
export { h as d }
export { m as f }
export { _ as c }
export { v as g }
export { b as h }
export { y as b }
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$_783 from "./783"
import * as /* [auto-meaningful-name] */$$_79_index from "../79/index"
import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_398 from "../398"
import * as /* [auto-meaningful-name] */$$_490 from "../490"
function u(e, t) {
  var /* [auto-meaningful-name] */e$value
  var /* [auto-meaningful-name] */e$key = e.key
  if ("value" in e) {
    e$value = e.value
  }
  return null !== e$key && undefined !== e$key ? e$key : undefined !== e$value ? e$value : "rc-index-key-".concat(t)
}
function d(e) {
  var t = e || {}
  return {
    label: t.label || "label",
    value: t.value || "value",
    options: t.options || "options"
  }
}
function p(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  var /* [auto-meaningful-name] */t$fieldNames = t.fieldNames
  var r = []
  var o = d(t$fieldNames)
  var /* [auto-meaningful-name] */o$label = o.label
  var /* [auto-meaningful-name] */o$value = o.value
  var /* [auto-meaningful-name] */o$options = o.options
  function c(e, t) {
    e.forEach(function (e) {
      var n = e[o$label]
      if (t || !(o$options in e)) {
        r.push({
          key: u(e, r.length),
          groupOption: t,
          data: e,
          label: n,
          value: e[o$value]
        })
      } else {
        r.push({
          key: u(e, r.length),
          group: true,
          data: e,
          label: n
        })
        c(e[o$options], true)
      }
    })
  }
  c(e, false)
  return r
}
function f(e) {
  var t = $$_21.a({}, e)
  if (!("props" in t)) {
    Object.defineProperty(t, "props", {
      get: function () {
        $$_398.a(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.")
        return t
      }
    })
  }
  return t
}
function h(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
  var /* [auto-meaningful-name] */n$prevValueOptions = n.prevValueOptions
  var o = undefined === n$prevValueOptions ? [] : n$prevValueOptions
  var i = new Map()
  t.forEach(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$group = e.group
    var /* [auto-meaningful-name] */e$value = e.value
    if (!e$group) {
      i.set(e$value, e$data)
    }
  })
  return e.map(function (e) {
    var t = i.get(e)
    if (!t) {
      t = $$_21.a({}, o.find(function (t) {
        return t._INTERNAL_OPTION_VALUE_ === e
      }))
    }
    return f(t)
  })
}
var m = function (e, t) {
  var /* [auto-meaningful-name] */t$options = t.options
  var /* [auto-meaningful-name] */t$prevValueMap = t.prevValueMap
  var /* [auto-meaningful-name] */t$labelInValue = t.labelInValue
  var /* [auto-meaningful-name] */t$optionLabelProp = t.optionLabelProp
  var s = h([e], t$options)[0]
  var l = {
    value: e
  }
  var u = t$labelInValue ? t$prevValueMap.get(e) : undefined
  if (u && "object" === $$_107.a(u) && "label" in u) {
    l.label = u.label
    if (s && "string" === typeof u.label && "string" === typeof s[t$optionLabelProp] && u.label.trim() !== s[t$optionLabelProp].trim()) {
      $$_398.a(false, "`label` of `value` is not same as `label` in Select options.")
    }
  } else {
    if (s && t$optionLabelProp in s) {
      l.label = s[t$optionLabelProp]
    } else {
      l.label = e
      l.isCacheable = true
    }
  }
  l.key = l.value
  return l
}
function g(e) {
  return $$_490.d(e).join("")
}
function _(e, t, n) {
  var r
  var /* [auto-meaningful-name] */n$optionFilterProp = n.optionFilterProp
  var /* [auto-meaningful-name] */n$filterOption = n.filterOption
  var c = []
  return false === n$filterOption ? $$_79_index.a(t) : (r = "function" === typeof n$filterOption ? n$filterOption : function (e) {
    return function (t, n) {
      var r = t.toLowerCase()
      return "options" in n ? g(n.label).toLowerCase().includes(r) : g(n[e]).toLowerCase().includes(r)
    }
  }(n$optionFilterProp), t.forEach(function (t) {
    if ("options" in t) {
      if (r(e, t)) {
        c.push(t)
      } else {
        var n = t.options.filter(function (t) {
          return r(e, t)
        })
        if (n.length) {
          c.push($$_21.a($$_21.a({}, t), {}, {
            options: n
          }))
        }
      }
    } else if (r(e, f(t))) {
      c.push(t)
    }
  }), c)
}
function v(e, t) {
  if (!t || !t.length) {
    return null
  }
  var n = false
  var r = function e(t, r) {
    var a = $_783.a(r)
    var s = a[0]
    var c = a.slice(1)
    if (!s) {
      return [t]
    }
    var l = t.split(s)
    n = n || l.length > 1
    return l.reduce(function (t, n) {
      return [].concat($$_79_index.a(t), $$_79_index.a(e(n, c)))
    }, []).filter(function (e) {
      return e
    })
  }(e, t)
  return n ? r : null
}
function b(e, t) {
  return h([e], t)[0].disabled
}
function y(e, t, n, o) {
  var a = $$_490.d(t).slice().sort()
  var s = $$_79_index.a(e)
  var c = new Set()
  e.forEach(function (e) {
    if (e.options) {
      e.options.forEach(function (e) {
        c.add(e.value)
      })
    } else {
      c.add(e.value)
    }
  })
  a.forEach(function (e) {
    var t
    var i = o ? e.value : e
    if (!c.has(i)) {
      s.push(o ? (t = {}, $$_35.a(t, n, e.label), $$_35.a(t, "value", i), t) : {
        value: i
      })
    }
  })
  return s
}
export default d
