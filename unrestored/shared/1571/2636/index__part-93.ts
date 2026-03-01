/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-93
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_361 from /* 361 */"./361"
import * as /* [auto-meaningful-name] */Module_1515 from /* 1515 */"./1515"
import /* [auto-meaningful-name] */Module_15151 from /* 1515 */"./1515"
var sb = []
var cb = {}
var lb = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$modeList = e.modeList
  var /* [auto-meaningful-name] */e$params = e.params
  var l = undefined === e$params ? sb : e$params
  var /* [auto-meaningful-name] */e$placement = e.placement
  var d = undefined === e$placement ? "rightTop" : e$placement
  var p = React1.useState(e$value || e$defaultValue)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = React1.useRef(null)
  var b = React1.useState(cb)
  var y = Module_10.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = React1.useState(null)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var A = C[1]
  var I = React1.useMemo(function () {
    var e = e$modeList.filter(function (e) {
      return e.value === e$value
    })[0]
    O((null === e || undefined === e ? undefined : e.style) || cb)
    return null === e || undefined === e ? undefined : e.renderContent
  }, [e$value, e$modeList])
  React1.useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
    if (!T) {
      A(I.apply(undefined, Module_25.a(l)))
    }
  }, [e$value, T, e$modeList, l, I])
  React1.useEffect(function () {
    A(I.apply(undefined, Module_25.a(l)))
  }, [I, l])
  var j = React1.useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var R = React1.useCallback(function (e) {
    if (e) {
      A(e)
    }
  }, [])
  return React.createElement(Module_361.a, {
    value: {
      value: g,
      onChange: function (e) {
        j(e)
        if (e$onChange) {
          e$onChange(e)
        }
      },
      onChangeSelectorContent: R
    }
  }, React.createElement("div", {
    className: Classnames("coco-select", e$className),
    style: Module_6.a(Module_6.a({}, e$style), E),
    ref: v
  }, React.createElement(Module_1213.a, {
    placement: d,
    trigger: "click",
    content: React.createElement("div", {
      className: Module_15151.option
    }, e$children)
  }, React.createElement("div", {
    className: Classnames("coco-select-selector")
  }, React.createElement("div", {
    className: Classnames("coco-select-label")
  }, T), React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-up",
    className: Classnames("coco-select-arrow")
  })))))
})
export { lb }
