/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-95
 */

"use strict"

import * as Ln from "./35"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import * as Dn from "./19"
import N from "./8"
import { useRef, useState, useEffect, useImperativeHandle, createElement, Fragment, isValidElement, forwardRef } from "react"
import * as /* [auto-meaningful-name] */$_486 from "./486"
import * as /* [auto-meaningful-name] */$_140 from "./140"
import * as vb from "./54"
import * as /* [auto-meaningful-name] */$_331 from "./331"
import * as yb from "./21"
import * as /* [auto-meaningful-name] */$_795 from "./795"
import * as /* [auto-meaningful-name] */$_1545_index from "./1545/index"
import * as /* [auto-meaningful-name] */$_742 from "./742"
import * as /* [auto-meaningful-name] */$_522_index from "./522/index"
var Tb = ["disabled", "title", "children", "style", "className"]
var Sb = function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var r = e.id
  var /* [auto-meaningful-name] */e$fieldNames = e.fieldNames
  var /* [auto-meaningful-name] */e$flattenOptions = e.flattenOptions
  var /* [auto-meaningful-name] */e$childrenAsData = e.childrenAsData
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$searchValue = e.searchValue
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var /* [auto-meaningful-name] */e$defaultActiveFirstOption = e.defaultActiveFirstOption
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$itemHeight = e.itemHeight
  var /* [auto-meaningful-name] */e$notFoundContent = e.notFoundContent
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$menuItemSelectedIcon = e.menuItemSelectedIcon
  var /* [auto-meaningful-name] */e$virtual = e.virtual
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$onToggleOpen = e.onToggleOpen
  var /* [auto-meaningful-name] */e$onActiveValue = e.onActiveValue
  var /* [auto-meaningful-name] */e$onScroll = e.onScroll
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var w = "".concat(e$prefixCls, "-item")
  var C = function (e, t, n) {
    var r = useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return e$flattenOptions
  }, [e$open, e$flattenOptions], function (e, t) {
    return t[0] && e[1] !== t[1]
  })
  var T = useRef(null)
  var S = function (e) {
    e.preventDefault()
  }
  var A = function (e) {
    if (T.current) {
      T.current.scrollTo({
        index: e
      })
    }
  }
  var I = function (e) {
    for (var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1, /* [auto-meaningful-name] */C$length = C.length, r = 0; r < C$length; r += 1) {
      var o = (e + r * t + C$length) % C$length
      var i = C[o]
      var /* [auto-meaningful-name] */i$group = i.group
      var /* [auto-meaningful-name] */i$data = i.data
      if (!i$group && !i$data.disabled) {
        return o
      }
    }
    return -1
  }
  var j = useState(function () {
    return I(0)
  })
  var R = $_40_index.a(j, 2)
  var k = R[0]
  var x = R[1]
  var D = function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
    x(e)
    var n = {
      source: t ? "keyboard" : "mouse"
    }
    var r = C[e]
    if (r) {
      e$onActiveValue(r.data.value, e, n)
    } else {
      e$onActiveValue(null, -1, n)
    }
  }
  useEffect(function () {
    D(false !== e$defaultActiveFirstOption ? I(0) : -1)
  }, [C.length, e$searchValue])
  useEffect(function () {
    var /* [auto-meaningful-name] */T$current
    var t = setTimeout(function () {
      if (!e$multiple && e$open && 1 === e$values.size) {
        var e = Array.from(e$values)[0]
        var t = C.findIndex(function (t) {
          return t.data.value === e
        })
        if (-1 !== t) {
          D(t)
          A(t)
        }
      }
    })
    if (e$open) {
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollTo(undefined)
      }
    }
    return function () {
      return clearTimeout(t)
    }
  }, [e$open, e$searchValue])
  var M = function (e) {
    if (undefined !== e) {
      e$onSelect(e, {
        selected: !e$values.has(e)
      })
    }
    if (!e$multiple) {
      e$onToggleOpen(false)
    }
  }
  useImperativeHandle(t, function () {
    return {
      onKeyDown: function (e) {
        var /* [auto-meaningful-name] */e$which = e.which
        var /* [auto-meaningful-name] */e$ctrlKey = e.ctrlKey
        switch (e$which) {
          case $_331.a.N:
          case $_331.a.P:
          case $_331.a.UP:
          case $_331.a.DOWN:
            var r = 0
            if (e$which === $_331.a.UP ? r = -1 : e$which === $_331.a.DOWN ? r = 1 : /(mac\sos|macintosh)/i.test(navigator.appVersion) && e$ctrlKey && (e$which === $_331.a.N ? r = 1 : e$which === $_331.a.P && (r = -1)), 0 !== r) {
              var o = I(k + r, r)
              A(o)
              D(o, true)
            }
            break
          case $_331.a.ENTER:
            var i = C[k]
            if (i && !i.data.disabled) {
              M(i.data.value)
            } else {
              M(undefined)
            }
            if (e$open) {
              e.preventDefault()
            }
            break
          case $_331.a.ESC:
            e$onToggleOpen(false)
            if (e$open) {
              e.stopPropagation()
            }
        }
      },
      onKeyUp: function () {},
      scrollTo: function (e) {
        A(e)
      }
    }
  })
  if (0 === C.length) {
    return createElement("div", {
      role: "listbox",
      id: "".concat(r, "_list"),
      className: "".concat(w, "-empty"),
      onMouseDown: S
    }, e$notFoundContent)
  }
  var L = Object.values($_522_index.a(e$fieldNames))
  var P = function (e) {
    var t = C[e]
    if (!t) {
      return null
    }
    var n = t.data || {}
    var /* [auto-meaningful-name] */n$value = n.value
    var /* [auto-meaningful-name] */n$label = n.label
    var /* [auto-meaningful-name] */n$children = n.children
    var l = $_795.a(n, true)
    var u = e$childrenAsData ? n$children : n$label
    return t ? createElement("div", Dn.a({
      "aria-label": "string" === typeof u ? u : null
    }, l, {
      key: e,
      role: "option",
      id: "".concat(r, "_list_").concat(e),
      "aria-selected": e$values.has(n$value)
    }), n$value) : null
  }
  return createElement(Fragment, null, createElement("div", {
    role: "listbox",
    id: "".concat(r, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }, P(k - 1), P(k), P(k + 1)), createElement($_1545_index.a, {
    itemKey: "key",
    ref: T,
    data: C,
    height: e$height,
    itemHeight: e$itemHeight,
    fullHeight: false,
    onMouseDown: S,
    onScroll: e$onScroll,
    virtual: e$virtual,
    onMouseEnter: e$onMouseEnter
  }, function (e, t) {
    var n
    var /* [auto-meaningful-name] */e$group = e.group
    var /* [auto-meaningful-name] */e$groupOption = e.groupOption
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$label = e.label
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$data$key = e$data.key
    if (e$group) {
      return createElement("div", {
        className: N(w, "".concat(w, "-group"))
      }, undefined !== e$label ? e$label : e$data$key)
    }
    var /* [auto-meaningful-name] */e$data$disabled = e$data.disabled
    var /* [auto-meaningful-name] */e$data$title = e$data.title
    var /* [auto-meaningful-name] */e$data$children = e$data.children
    var /* [auto-meaningful-name] */e$data$style = e$data.style
    var /* [auto-meaningful-name] */e$data$className = e$data.className
    var v = function (e, t) {
      var n = yb.a({}, e)
      if (Array.isArray(t)) {
        t.forEach(function (e) {
          delete n[e]
        })
      }
      return n
    }(vb.a(e$data, Tb), L)
    var b = e$values.has(e$value)
    var y = "".concat(w, "-option")
    var E = N(w, y, e$data$className, (n = {}, Ln.a(n, "".concat(y, "-grouped"), e$groupOption), Ln.a(n, "".concat(y, "-active"), k === t && !e$data$disabled), Ln.a(n, "".concat(y, "-disabled"), e$data$disabled), Ln.a(n, "".concat(y, "-selected"), b), n))
    var O = !e$menuItemSelectedIcon || "function" === typeof e$menuItemSelectedIcon || b
    var C = (e$childrenAsData ? e$data$children : e$label) || e$value
    var T = "string" === typeof C || "number" === typeof C ? C.toString() : undefined
    if (undefined !== e$data$title) {
      T = e$data$title
    }
    return createElement("div", Dn.a({}, v, {
      "aria-selected": b,
      className: E,
      title: T,
      onMouseMove: function () {
        if (!(k === t || e$data$disabled)) {
          D(t)
        }
      },
      onClick: function () {
        if (!e$data$disabled) {
          M(e$value)
        }
      },
      style: e$data$style
    }), createElement("div", {
      className: "".concat(y, "-content")
    }, C), isValidElement(e$menuItemSelectedIcon) || b, O && createElement($_742.a, {
      className: "".concat(w, "-option-state"),
      customizeIcon: e$menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: b
      }
    }, b ? "✓" : null))
  }))
}
var Ab = forwardRef(Sb)
Ab.displayName = "OptionList"
var Ib = Ab
var jb = function () {
  return null
}
jb.isSelectOption = true
var Nb = jb
var Rb = function () {
  return null
}
Rb.isSelectOptGroup = true
var kb = Rb
export { Ib }
export { Nb }
export { kb }
