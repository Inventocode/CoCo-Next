/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-21
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$_794 from "./794"
import /* [auto-meaningful-name] */$_7941 from "./794"
import "./881"
var Ue = React1.memo(React1.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$sourceImage = e.sourceImage
  var /* [auto-meaningful-name] */e$defaultScale = e.defaultScale
  var l = undefined === e$defaultScale ? 1 : e$defaultScale
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$border = e.border
  var f = undefined === e$border ? 0 : e$border
  var /* [auto-meaningful-name] */e$rotate = e.rotate
  var m = undefined === e$rotate ? 0 : e$rotate
  var /* [auto-meaningful-name] */e$step = e.step
  var _ = undefined === e$step ? .01 : e$step
  var /* [auto-meaningful-name] */e$minScale = e.minScale
  var b = undefined === e$minScale ? 1 : e$minScale
  var /* [auto-meaningful-name] */e$maxScale = e.maxScale
  var E = undefined === e$maxScale ? 2 : e$maxScale
  var O = React1.useRef(null)
  var w = React1.useState(l)
  var C = $$_10_index.a(w, 2)
  var T = C[0]
  var S = C[1]
  var A = function (e) {
    var t = T + ("in" === e ? 1 / 8 : -1 / 8)
    if (t < 1) {
      t = 1
    }
    if (t > 2) {
      t = 2
    }
    S(t)
  }
  React1.useImperativeHandle(t, function () {
    return {
      target: O.current,
      setScale: function (e) {
        S(e)
      }
    }
  })
  return React.createElement("div", {
    className: "coco-avatar-editor"
  }, React.createElement($_7941, {
    ref: O,
    crossOrigin: "anonymous",
    image: e$sourceImage,
    width: e$width,
    height: e$height,
    border: f,
    rotate: m,
    scale: T,
    onLoadSuccess: function (e) {
      var t = Math.max(e$width / e.width, e$height / e.height)
      t = Math.min(t, E)
      t = Math.max(t, b)
      S(t)
    }
  }), React.createElement("div", {
    className: "coco-avatar-editor-scaleBar"
  }, React.createElement("span", {
    className: i("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomOut"),
    onClick: function () {
      A("out")
    }
  }, React.createElement("img", {
    src: require("./882"),
    alt: "",
    className: "coco-avatar-editor-zoomOutIcon"
  })), React.createElement("input", {
    type: "range",
    step: _,
    min: b,
    max: E,
    value: T,
    onChange: function (e) {
      S(parseFloat(e.target.value))
    }
  }), React.createElement("span", {
    className: i("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomIn"),
    onClick: function () {
      A("in")
    }
  }, React.createElement("img", {
    src: require("./883"),
    alt: "",
    className: "coco-avatar-editor-zoomInIcon"
  }))))
}))
export { Ue }
