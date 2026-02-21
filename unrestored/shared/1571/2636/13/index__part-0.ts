/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as o from "classnames"
import i from "classnames"
import { createContext, memo, useContext, useCallback, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "./839"
var c = createContext(null)
var /* [auto-meaningful-name] */c$Provider = c.Provider
var u = c
var d = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useContext(u)
  var l = useCallback(function () {
    if (c) {
      c.value = e$value
      c.onChange(e$value)
    }
  }, [c, e$value])
  return React1.createElement("button", {
    disabled: e$disabled,
    onClick: l,
    className: i("coco-radio-item", e$className, {
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    })
  }, e$children || e$value)
})
var p = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var d = useState(e$defaultValue)
  var p = $$_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  useEffect(function () {
    if (undefined !== e$value) {
      h(e$value)
    }
  }, [e$value])
  var m = useCallback(function (e) {
    if (undefined === e$value) {
      h(e)
    }
  }, [e$value])
  var g = useCallback(function (e) {
    if (undefined !== e) {
      m(e)
      if (e$onChange) {
        e$onChange(e)
      }
    }
  }, [m, e$onChange])
  return React1.createElement(c$Provider, {
    value: {
      value: f,
      onChange: g
    }
  }, React1.createElement("div", {
    className: i("coco-radio", e.className, {
      "disabled-all": false
    }),
    style: e$style
  }, e$children))
})
export { d }
export { p }
