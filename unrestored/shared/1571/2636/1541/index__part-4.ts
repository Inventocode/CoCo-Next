/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-4
 */

"use strict"

import { C } from "./index__part-3"
import * as /* [auto-meaningful-name] */$$_742 from "../742"
import * as /* [auto-meaningful-name] */$$_559_560 from "../559/560"
import * as /* [auto-meaningful-name] */$$_795 from "../795"
import _ from "../8"
import * as /* [auto-meaningful-name] */$$_331 from "../331"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_490 from "../490"
function S(e, t) {
  if ($$_490.b) {
    React.useLayoutEffect(e, t)
  } else {
    React.useEffect(e, t)
  }
}
var A = function (e) {
  e.preventDefault()
  e.stopPropagation()
}
var I = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$searchValue = e.searchValue
  var /* [auto-meaningful-name] */e$inputRef = e.inputRef
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$removeIcon = e.removeIcon
  var /* [auto-meaningful-name] */e$maxTagCount = e.maxTagCount
  var /* [auto-meaningful-name] */e$maxTagTextLength = e.maxTagTextLength
  var /* [auto-meaningful-name] */e$maxTagPlaceholder = e.maxTagPlaceholder
  var j = undefined === e$maxTagPlaceholder ? function (e) {
    return "+ ".concat(e.length, " ...")
  } : e$maxTagPlaceholder
  var /* [auto-meaningful-name] */e$tagRender = e.tagRender
  var /* [auto-meaningful-name] */e$onToggleOpen = e.onToggleOpen
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$onInputChange = e.onInputChange
  var /* [auto-meaningful-name] */e$onInputPaste = e.onInputPaste
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$onInputMouseDown = e.onInputMouseDown
  var /* [auto-meaningful-name] */e$onInputCompositionStart = e.onInputCompositionStart
  var /* [auto-meaningful-name] */e$onInputCompositionEnd = e.onInputCompositionEnd
  var F = React.useRef(null)
  var G = React.useState(0)
  var W = $$_40_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = React.useState(false)
  var z = $$_40_index.a(V, 2)
  var Y = z[0]
  var K = z[1]
  var q = "".concat(e$prefixCls, "-selection")
  var X = e$open || "tags" === e$mode ? e$searchValue : ""
  var Q = "tags" === e$mode || e$showSearch && (e$open || Y)
  function Z(e, t, n, r, i) {
    return React.createElement("span", {
      className: _("".concat(q, "-item"), $$_35.a({}, "".concat(q, "-item-disabled"), n)),
      title: "string" === typeof e || "number" === typeof e ? e.toString() : undefined
    }, React.createElement("span", {
      className: "".concat(q, "-item-content")
    }, t), r && React.createElement($$_742.a, {
      className: "".concat(q, "-item-remove"),
      onMouseDown: A,
      onClick: i,
      customizeIcon: e$removeIcon
    }, "×"))
  }
  S(function () {
    H(F.current.scrollWidth)
  }, [X])
  var J = React.createElement("div", {
    className: "".concat(q, "-search"),
    style: {
      width: U
    },
    onFocus: function () {
      K(true)
    },
    onBlur: function () {
      K(false)
    }
  }, React.createElement(C, {
    ref: e$inputRef,
    open: e$open,
    prefixCls: e$prefixCls,
    id: t,
    inputElement: null,
    disabled: e$disabled,
    autoFocus: e$autoFocus,
    autoComplete: e$autoComplete,
    editable: Q,
    accessibilityIndex: e$accessibilityIndex,
    value: X,
    onKeyDown: e$onInputKeyDown,
    onMouseDown: e$onInputMouseDown,
    onChange: e$onInputChange,
    onPaste: e$onInputPaste,
    onCompositionStart: e$onInputCompositionStart,
    onCompositionEnd: e$onInputCompositionEnd,
    tabIndex: e$tabIndex,
    attrs: $$_795.a(e, true)
  }), React.createElement("span", {
    ref: F,
    className: "".concat(q, "-search-mirror"),
    "aria-hidden": true
  }, X, " "))
  var $ = React.createElement($$_559_560.a, {
    prefixCls: "".concat(q, "-overflow"),
    data: e$values,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */e$disabled1 = e.disabled
      var /* [auto-meaningful-name] */e$label = e.label
      var /* [auto-meaningful-name] */e$value = e.value
      var o = !e$disabled && !e$disabled1
      var a = e$label
      if ("number" === typeof e$maxTagTextLength && ("string" === typeof e$label || "number" === typeof e$label)) {
        var s = String(a)
        if (s.length > e$maxTagTextLength) {
          a = "".concat(s.slice(0, e$maxTagTextLength), "...")
        }
      }
      var c = function (e) {
        if (e) {
          e.stopPropagation()
        }
        e$onSelect(e$value, {
          selected: false
        })
      }
      return "function" === typeof e$tagRender ? function (e, t, n, r, o) {
        return React.createElement("span", {
          onMouseDown: function (e) {
            A(e)
            e$onToggleOpen(!e$open)
          }
        }, e$tagRender({
          label: t,
          value: e,
          disabled: n,
          closable: r,
          onClose: o
        }))
      }(e$value, a, e$disabled1, o, c) : Z(e$label, a, e$disabled1, o, c)
    },
    renderRest: function (e) {
      var t = "function" === typeof j ? j(e) : j
      return Z(t, t, false)
    },
    suffix: J,
    itemKey: "key",
    maxCount: e$maxTagCount
  })
  return React.createElement(React.Fragment, null, $, !e$values.length && !X && React.createElement("span", {
    className: "".concat(q, "-placeholder")
  }, e$placeholder))
}
var j = function (e) {
  var /* [auto-meaningful-name] */e$inputElement = e.inputElement
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var r = e.id
  var /* [auto-meaningful-name] */e$inputRef = e.inputRef
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$searchValue = e.searchValue
  var /* [auto-meaningful-name] */e$activeValue = e.activeValue
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$onInputMouseDown = e.onInputMouseDown
  var /* [auto-meaningful-name] */e$onInputChange = e.onInputChange
  var /* [auto-meaningful-name] */e$onInputPaste = e.onInputPaste
  var /* [auto-meaningful-name] */e$onInputCompositionStart = e.onInputCompositionStart
  var /* [auto-meaningful-name] */e$onInputCompositionEnd = e.onInputCompositionEnd
  var I = React.useState(false)
  var j = $$_40_index.a(I, 2)
  var N = j[0]
  var R = j[1]
  var k = "combobox" === e$mode
  var x = k || e$showSearch
  var D = e$values[0]
  var M = e$searchValue || ""
  if (k && e$activeValue && !N) {
    M = e$activeValue
  }
  React.useEffect(function () {
    if (k) {
      R(false)
    }
  }, [k, e$activeValue])
  var L = !("combobox" !== e$mode && !e$open) && !!M
  var P = !D || "string" !== typeof D.label && "number" !== typeof D.label ? undefined : D.label.toString()
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-search")
  }, React.createElement(C, {
    ref: e$inputRef,
    prefixCls: e$prefixCls,
    id: r,
    open: e$open,
    inputElement: e$inputElement,
    disabled: e$disabled,
    autoFocus: e$autoFocus,
    autoComplete: e$autoComplete,
    editable: x,
    accessibilityIndex: e$accessibilityIndex,
    value: M,
    onKeyDown: e$onInputKeyDown,
    onMouseDown: e$onInputMouseDown,
    onChange: function (e) {
      R(true)
      e$onInputChange(e)
    },
    onPaste: e$onInputPaste,
    onCompositionStart: e$onInputCompositionStart,
    onCompositionEnd: e$onInputCompositionEnd,
    tabIndex: e$tabIndex,
    attrs: $$_795.a(e, true),
    maxLength: k ? e$maxLength : undefined
  })), !k && D && !L && React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-item"),
    title: P
  }, D.label), !D && !L && React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-placeholder")
  }, e$placeholder))
}
function N() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 250
  var t = React.useRef(null)
  var n = React.useRef(null)
  function r(r) {
    if (r || null === t.current) {
      t.current = r
    }
    window.clearTimeout(n.current)
    n.current = window.setTimeout(function () {
      t.current = null
    }, e)
  }
  React.useEffect(function () {
    return function () {
      window.clearTimeout(n.current)
    }
  }, [])
  return [
    function () {
      return t.current
    }, r
  ]
}
var R = function (e, t) {
  var n = React.useRef(null)
  var o = React.useRef(false)
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$tokenWithEnter = e.tokenWithEnter
  var /* [auto-meaningful-name] */e$onSearch = e.onSearch
  var /* [auto-meaningful-name] */e$onSearchSubmit = e.onSearchSubmit
  var /* [auto-meaningful-name] */e$onToggleOpen = e.onToggleOpen
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$domRef = e.domRef
  React.useImperativeHandle(t, function () {
    return {
      focus: function () {
        n.current.focus()
      },
      blur: function () {
        n.current.blur()
      }
    }
  })
  var b = N(0)
  var y = $$_40_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = React.useRef(null)
  var C = function (e) {
    if (false !== e$onSearch(e, true, o.current)) {
      e$onToggleOpen(true)
    }
  }
  var T = {
    inputRef: n,
    onInputKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$which = e.which
      if (!(e$which !== $$_331.a.UP && e$which !== $$_331.a.DOWN)) {
        e.preventDefault()
      }
      if (e$onInputKeyDown) {
        e$onInputKeyDown(e)
      }
      if (!(e$which !== $$_331.a.ENTER || "tags" !== e$mode || o.current || e$open)) {
        e$onSearchSubmit(e.target.value)
      }
      if (![$$_331.a.SHIFT, $$_331.a.TAB, $$_331.a.BACKSPACE, $$_331.a.ESC].includes(e$which)) {
        e$onToggleOpen(true)
      }
    },
    onInputMouseDown: function () {
      O(true)
    },
    onInputChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      if (e$tokenWithEnter && w.current && /[\r\n]/.test(w.current)) {
        var n = w.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ")
        e$target$value = e$target$value.replace(n, w.current)
      }
      w.current = null
      C(e$target$value)
    },
    onInputPaste: function (e) {
      var t = e.clipboardData.getData("text")
      w.current = t
    },
    onInputCompositionStart: function () {
      o.current = true
    },
    onInputCompositionEnd: function (e) {
      o.current = false
      if ("combobox" !== e$mode) {
        C(e.target.value)
      }
    }
  }
  var S = e$multiple ? React.createElement(I, $$_19.a({}, e, T)) : React.createElement(j, $$_19.a({}, e, T))
  return React.createElement("div", {
    ref: e$domRef,
    className: "".concat(e$prefixCls, "-selector"),
    onClick: function (e) {
      if (e.target !== n.current) {
        if (undefined !== document.body.style.msTouchAction) {
          setTimeout(function () {
            n.current.focus()
          })
        } else {
          n.current.focus()
        }
      }
    },
    onMouseDown: function (e) {
      var t = E()
      if (!(e.target === n.current || t)) {
        e.preventDefault()
      }
      if (!(("combobox" === e$mode || e$showSearch && t) && e$open)) {
        if (e$open) {
          e$onSearch("", true, false)
        }
        e$onToggleOpen()
      }
    }
  }, S)
}
var k = React.forwardRef(R)
k.displayName = "Selector"
var x = k
export { S }
export { N }
export { x }
