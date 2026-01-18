/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-3
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import "./641"
import * as /* [auto-meaningful-name] */$$_361 from "../361"
var w = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$autoCloseWhenChanged = e.autoCloseWhenChanged
  var f = undefined === e$autoCloseWhenChanged || e$autoCloseWhenChanged
  var h = React1.useState(e$value || e$defaultValue)
  var m = $$_10_index.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = React1.useState(e$open)
  var b = $$_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = React1.useRef(null)
  var T = React1.useState(null)
  var S = $$_10_index.a(T, 2)
  var A = S[0]
  var I = S[1]
  React1.useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
  }, [e$value])
  React1.useEffect(function () {
    w(e$open)
  }, [e$open])
  var j = React1.useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var N = React1.useCallback(function (e) {
    if (e) {
      I(e)
    }
  }, [])
  var R = React1.useCallback(function () {
    w(!y)
  }, [y])
  React1.useEffect(function () {
    var e = function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (C.current && !C.current.contains(t$target)) {
        w(false)
        document.body.removeEventListener("click", e)
      }
    }
    if (y) {
      document.body.addEventListener("click", e)
    } else {
      document.body.removeEventListener("click", e)
    }
  }, [y])
  return React.createElement($$_361.a, {
    value: {
      value: g,
      onChange: function (e) {
        j(e)
        if (e$onChange) {
          e$onChange(e)
        }
        if (f) {
          w(false)
        }
      },
      onChangeSelectorContent: N
    }
  }, React.createElement("div", {
    className: i("coco-select", e$className),
    style: e$style,
    ref: C
  }, React.createElement("div", {
    className: i("coco-select-selector", {
      active: y
    }),
    onClick: R
  }, React.createElement("div", {
    className: i("coco-select-label")
  }, A), React.createElement($$_94_index.a, {
    type: "icon-up",
    className: i("coco-select-arrow", {
      active: y
    })
  })), React.createElement("div", {
    className: i("coco-select-options", [y ? "show" : "hide"])
  }, e$children)))
})
var C = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var c = React1.useContext($$_361.b)
  React1.useEffect(function () {
    if ((null === c || undefined === c ? undefined : c.value) === e$value) {
      c.onChangeSelectorContent(e$children || e$value)
    }
  }, [c, e$children, e$value])
  return React.createElement("div", {
    onClick: function () {
      if (!(null === c || undefined === c)) {
        c.onChange(e$value)
      }
    },
    className: i({
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    }, e$className, "coco-option")
  }, e$children || React.createElement("div", {
    className: "coco-option-content"
  }, React.createElement("p", null, e$value), e$suffix))
})
export { w }
export { C }
