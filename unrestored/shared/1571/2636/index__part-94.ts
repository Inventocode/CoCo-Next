/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-94
 */

"use strict"

import * as /* [auto-meaningful-name] */$_361 from "./361"
import qv from "./88"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useMemo, useEffect, useCallback } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1516 from "./1516"
import /* [auto-meaningful-name] */$_15161 from "./1516"
var pb = []
var fb = {}
var hb = memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$modeList = e.modeList
  var /* [auto-meaningful-name] */e$params = e.params
  var l = undefined === e$params ? pb : e$params
  var u = useState(e$value || e$defaultValue)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useRef(null)
  var _ = useState(fb)
  var v = $_10_index.a(_, 2)
  var b = v[0]
  var y = v[1]
  var E = useState(null)
  var O = $_10_index.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = useMemo(function () {
    var e = e$modeList.filter(function (e) {
      return e.value === e$value
    })[0]
    y((null === e || undefined === e ? undefined : e.style) || fb)
    return null === e || undefined === e ? undefined : e.renderContent
  }, [e$value, e$modeList])
  useEffect(function () {
    if (undefined !== e$value) {
      m(e$value)
    }
    if (!w) {
      C(T.apply(undefined, $_25_index.a(l)))
    }
  }, [e$value, w, e$modeList, l, T])
  useEffect(function () {
    C(T.apply(undefined, $_25_index.a(l)))
  }, [T, l])
  var A = useCallback(function (e) {
    if (undefined === e$value) {
      m(e)
    }
  }, [e$value])
  var I = useCallback(function (e) {
    if (e) {
      C(e)
    }
  }, [])
  return React.createElement($_361.a, {
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
    className: N("coco-select", e$className),
    style: D.a(D.a({}, e$style), b),
    ref: g
  }, React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "click",
    content: React.createElement("div", {
      className: $_15161.option
    }, e$children)
  }, React.createElement("div", {
    className: N("coco-select-selector")
  }, React.createElement("div", {
    className: N("coco-select-label")
  }, w)))))
})
var mb = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$width = e.width
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  return React.createElement($_1213.a, {
    placement: "rightBottom",
    trigger: "click",
    onVisibleChange: function (e) {
      c(e)
    },
    content: s && React.createElement($_13_index.q, {
      value: e$color,
      onChange: function (e) {
        e$onChange(e$keyName, e)
      }
    })
  }, React.createElement("div", {
    className: qv.colorBlock,
    style: {
      backgroundColor: te.i(e$color) ? "#ffffff" : e$color,
      width: e$width
    }
  }, te.i(e$color) && React.createElement("div", {
    className: qv.slash
  })))
})
export { hb }
export { mb }
