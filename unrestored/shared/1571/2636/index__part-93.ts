/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-93
 */

"use strict"

import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useMemo, useEffect, useCallback } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_361 from "./361"
import * as /* [auto-meaningful-name] */$_1515 from "./1515"
import /* [auto-meaningful-name] */$_15151 from "./1515"
var sb = []
var cb = {}
var lb = memo(function (e) {
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
  var p = useState(e$value || e$defaultValue)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = useRef(null)
  var b = useState(cb)
  var y = $_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(null)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var I = useMemo(function () {
    var e = e$modeList.filter(function (e) {
      return e.value === e$value
    })[0]
    O((null === e || undefined === e ? undefined : e.style) || cb)
    return null === e || undefined === e ? undefined : e.renderContent
  }, [e$value, e$modeList])
  useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
    if (!T) {
      A(I.apply(undefined, $_25_index.a(l)))
    }
  }, [e$value, T, e$modeList, l, I])
  useEffect(function () {
    A(I.apply(undefined, $_25_index.a(l)))
  }, [I, l])
  var j = useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var R = useCallback(function (e) {
    if (e) {
      A(e)
    }
  }, [])
  return React.createElement($_361.a, {
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
    className: N("coco-select", e$className),
    style: D.a(D.a({}, e$style), E),
    ref: v
  }, React.createElement($_1213.a, {
    placement: d,
    trigger: "click",
    content: React.createElement("div", {
      className: $_15151.option
    }, e$children)
  }, React.createElement("div", {
    className: N("coco-select-selector")
  }, React.createElement("div", {
    className: N("coco-select-label")
  }, T), React.createElement($_13_index.j, {
    type: "icon-up",
    className: N("coco-select-arrow")
  })))))
})
export { lb }
