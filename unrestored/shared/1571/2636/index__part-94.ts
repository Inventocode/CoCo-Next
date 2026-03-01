/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-94
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_361 from /* 361 */"./361"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1516 from /* 1516 */"./1516"
import /* [auto-meaningful-name] */Module_15161 from /* 1516 */"./1516"
var pb = []
var fb = {}
var hb = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$modeList = e.modeList
  var /* [auto-meaningful-name] */e$params = e.params
  var l = undefined === e$params ? pb : e$params
  var u = React1.useState(e$value || e$defaultValue)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = React1.useRef(null)
  var _ = React1.useState(fb)
  var v = Module_10.a(_, 2)
  var b = v[0]
  var y = v[1]
  var E = React1.useState(null)
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = React1.useMemo(function () {
    var e = e$modeList.filter(function (e) {
      return e.value === e$value
    })[0]
    y((null === e || undefined === e ? undefined : e.style) || fb)
    return null === e || undefined === e ? undefined : e.renderContent
  }, [e$value, e$modeList])
  React1.useEffect(function () {
    if (undefined !== e$value) {
      m(e$value)
    }
    if (!w) {
      C(T.apply(undefined, Module_25.a(l)))
    }
  }, [e$value, w, e$modeList, l, T])
  React1.useEffect(function () {
    C(T.apply(undefined, Module_25.a(l)))
  }, [T, l])
  var A = React1.useCallback(function (e) {
    if (undefined === e$value) {
      m(e)
    }
  }, [e$value])
  var I = React1.useCallback(function (e) {
    if (e) {
      C(e)
    }
  }, [])
  return React.createElement(Module_361.a, {
    value: {
      value: p,
      onChange: function (e) {
        A(e)
        if (e$onChange) {
          e$onChange(e)
        }
      },
      onChangeSelectorContent: I
    }
  }, React.createElement("div", {
    className: Classnames("coco-select", e$className),
    style: Module_6.a(Module_6.a({}, e$style), b),
    ref: g
  }, React.createElement(Module_1213.a, {
    placement: "rightTop",
    trigger: "click",
    content: React.createElement("div", {
      className: Module_15161.option
    }, e$children)
  }, React.createElement("div", {
    className: Classnames("coco-select-selector")
  }, React.createElement("div", {
    className: Classnames("coco-select-label")
  }, w)))))
})
var mb = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$width = e.width
  var i = React1.useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  return React.createElement(Module_1213.a, {
    placement: "rightBottom",
    trigger: "click",
    onVisibleChange: function (e) {
      c(e)
    },
    content: s && React.createElement(Src_shared_ui_components_index.q, {
      value: e$color,
      onChange: function (e) {
        e$onChange(e$keyName, e)
      }
    })
  }, React.createElement("div", {
    className: Module_88.colorBlock,
    style: {
      backgroundColor: Src_shared_tools_index.i(e$color) ? "#ffffff" : e$color,
      width: e$width
    }
  }, Src_shared_tools_index.i(e$color) && React.createElement("div", {
    className: Module_88.slash
  })))
})
export { hb }
export { mb }
