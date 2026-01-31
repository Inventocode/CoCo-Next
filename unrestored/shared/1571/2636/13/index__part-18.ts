/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-18
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_15 from "../15"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useCallback, useEffect, useImperativeHandle } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import "./877"
var ke = memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var u = undefined === e$placeholder ? "" : e$placeholder
  var /* [auto-meaningful-name] */e$rows = e.rows
  var p = undefined === e$rows ? 1 : e$rows
  var /* [auto-meaningful-name] */e$cols = e.cols
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$minLength = e.minLength
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var _ = undefined === e$autoComplete ? "on" : e$autoComplete
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$dependency = e.dependency
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var w = useRef(null)
  var C = useRef(null)
  var T = useRef(null)
  var S = useState(false)
  var A = $$_10_index.a(S, 2)
  var I = A[0]
  var j = A[1]
  var N = useCallback(function (e) {
    var /* [auto-meaningful-name] */C$current = C.current
    if (C$current) {
      C$current.innerHTML = e + "/" + e$maxLength
    }
  }, [e$maxLength])
  useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    if (w$current && undefined === e$value) {
      w$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString()
      N(w$current.value.length)
    }
  }, [w, N, e$dependency, e$value, e$defaultValue])
  useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    if (undefined !== e$value && w$current) {
      w$current.value = e$value
      N(e$value.toString().length)
    }
  }, [w, N, e$value])
  var R = function () {
    var /* [auto-meaningful-name] */w$current = w.current
    var /* [auto-meaningful-name] */T$current = T.current
    if (w$current && T$current) {
      T$current.style.display = "block"
      var n = w$current.value.replace(/'\n'/g, "<br>")
      var r = getComputedStyle(w$current)
      T$current.innerHTML = $$_15.t(n)
      T$current.style.width = r.width
      T$current.style.lineHeight = r.lineHeight
      T$current.style.minHeight = r.lineHeight
      var /* [auto-meaningful-name] */T$current$clientHeight = T$current.clientHeight
      T$current.style.display = "none"
      var i = T$current$clientHeight / parseInt(r.lineHeight)
      var /* [auto-meaningful-name] */w$current$value$split_n$length = w$current.value.split("\n").length
      return Math.max(i, w$current$value$split_n$length)
    }
    return 1
  }
  useImperativeHandle(t, function () {
    return {
      getRowCount: function () {
        return R()
      },
      setRows: function (e) {
        if (w.current) {
          w.current.rows = e
        }
      }
    }
  })
  var k = {
    placeholder: u,
    rows: p,
    cols: e$cols,
    maxLength: e$maxLength,
    minLength: e$minLength,
    autoComplete: _,
    disabled: e$disabled,
    value: e$value
  }
  return React.createElement("div", {
    className: i("coco-textarea", e$className)
  }, React.createElement("textarea", Object.assign({
    ref: w,
    onChange: function (e) {
      N(e.target.value.length)
      if (e$onChange) {
        e$onChange(e)
      }
    },
    onBlur: function (e) {
      var t = R()
      if (e$onBlur) {
        e$onBlur(e, t)
      }
      j(false)
    },
    onFocus: function (e) {
      if (e$onFocus) {
        e$onFocus(e)
      }
      j(true)
    }
  }, k)), React.createElement("div", {
    className: "coco-textarea-textCounter",
    ref: C,
    style: {
      display: I && e$maxLength ? "block" : "none"
    }
  }), React.createElement("div", {
    className: "coco-textarea-rowCounter",
    ref: T
  }))
}))
export { ke }
