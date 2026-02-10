/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-16
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_748_index from "../748/index"
import "./875"
var je = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var l = undefined !== e$multiple && e$multiple
  var /* [auto-meaningful-name] */e$accept = e.accept
  var d = undefined === e$accept ? "" : e$accept
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$tooltip = e.tooltip
  var h = undefined === e$tooltip ? "" : e$tooltip
  var /* [auto-meaningful-name] */e$style = e.style
  var g = undefined === e$style ? {} : e$style
  var _ = useRef(null)
  var v = useState(false)
  var b = $$_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */_$current$files
      if (y) {
        if (_.current && 0 === (null === (_$current$files = _.current.files) || undefined === _$current$files ? undefined : _$current$files.length) && e$onCancel) {
          e$onCancel()
        }
        E(false)
      }
    }
    window.addEventListener("focus", e)
    return function () {
      window.removeEventListener("focus", e)
    }
  }, [y, e$onCancel])
  return React.createElement("div", {
    onClick: function () {
      var /* [auto-meaningful-name] */_$current = _.current
      if (_$current) {
        E(true)
        _$current.click()
      }
    },
    className: i("coco-upload-button", e$className),
    style: g
  }, React.createElement($$_748_index.a, {
    placement: "right",
    title: h
  }, React.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      if (e$target && e$onChange) {
        e$onChange(e$target.files)
        e$target.value = ""
      }
    },
    ref: _,
    multiple: l,
    accept: d
  }), React.createElement("div", {
    className: "coco-upload-button-content"
  }, e$children)))
})
var Ne = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  return React.createElement("div", {
    className: i(e$className, "coco-form")
  }, e$children)
})
export { je }
export { Ne }
