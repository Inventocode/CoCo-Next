/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：729__part-2
 */

"use strict"

import { "729__part-0__d" as d, "729__part-0__p" as p, "729__part-0__h" as h } from "./index__part-0"
import * as s from "../6"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
var U = {
  rotation: [{
    title: "X 旋转",
    prop: "x",
    icon: "icon-phone-rotation-x",
    min: -180,
    max: 180,
    unit: "°"
  }, {
    title: "Y 旋转",
    prop: "y",
    icon: "icon-phone-rotation-y",
    min: -180,
    max: 180,
    unit: "°"
  }, {
    title: "Z 旋转",
    prop: "z",
    icon: "icon-phone-rotation-z",
    min: -180,
    max: 180,
    unit: "°"
  }],
  position: [{
    title: "X 移动",
    prop: "x",
    icon: "icon-phone-move-x",
    min: -6,
    max: 6,
    unit: React.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }, {
    title: "Y 移动",
    prop: "y",
    icon: "icon-phone-move-y",
    min: -6,
    max: 6,
    unit: React.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }, {
    title: "Z 移动",
    prop: "z",
    icon: "icon-phone-move-z",
    min: -6,
    max: 6,
    unit: React.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }]
}
var W = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$style = e.style
  var r = $$_16_index.d()
  var a = $$_16_index.e(function (e) {
    return e[e$type]
  })
  var c = function (e) {
    switch (e$type) {
      case "rotation":
        return function (t) {
          r(d(s.a(s.a({}, a), {}, $$_11.a({}, e, t))))
        }
      case "position":
        return function (t) {
          r(p(s.a(s.a({}, a), {}, $$_11.a({}, e, t))))
        }
    }
  }
  var l = U[e$type]
  return React.createElement("div", {
    className: "emulator-sensors",
    style: e$style
  }, React.createElement($$_13_index.h, {
    className: "emulator-sensor-form"
  }, l.map(function (e) {
    var /* [auto-meaningful-name] */e$title = e.title
    var /* [auto-meaningful-name] */e$prop = e.prop
    var /* [auto-meaningful-name] */e$icon = e.icon
    var /* [auto-meaningful-name] */e$max = e.max
    var /* [auto-meaningful-name] */e$min = e.min
    var /* [auto-meaningful-name] */e$unit = e.unit
    return React.createElement("div", {
      key: e$prop
    }, React.createElement("div", {
      className: "emulator-sensor-item-title"
    }, React.createElement($$_94_index.a, {
      className: "emulator-icon",
      type: e$icon
    }), React.createElement("span", {
      className: "emulator-sensor-direction"
    }, e$title)), React.createElement("div", {
      className: "emulator-form-slider-wrapper"
    }, React.createElement($$_13_index.x, {
      className: "emulator-formControl",
      min: e$min,
      max: e$max,
      value: a[e$prop],
      onChange: c(e$prop),
      isShowRightInput: true,
      inputAfter: e$unit
    })))
  })))
}
var H = function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var n = $$_16_index.d()
  return React.createElement("div", {
    className: "emulator-sensors",
    style: e$style
  }, React.createElement("div", {
    className: "emulator-shakeBtnWrapper",
    onClick: function () {
      var e
      var t = 33
      n(h({
        shake: null
      }))
      window.requestAnimationFrame(function r(o) {
        if (undefined === e) {
          e = o
        }
        var i = o - e
        if (t <= 33 && t >= -33) {
          t -= 3
        } else {
          t = 33
        }
        n(d({
          x: 0,
          y: 0,
          z: t
        }))
        if (i < 1e3) {
          window.requestAnimationFrame(r)
        } else {
          n(d({
            x: 0,
            y: 0,
            z: 0
          }))
        }
      })
    }
  }, React.createElement("div", {
    className: "emulator-shakeBtn"
  }, React.createElement($$_94_index.a, {
    type: "icon-phone-shake-selected"
  }), React.createElement("p", {
    className: "emulator-shakeBtnName"
  }, "摇一摇"))))
}
var V = function () {
  var e = $$_16_index.e(function (e) {
    return e.visiblePanel
  })
  var t = function (t) {
    return e === t ? {
      display: "block"
    } : {
      display: "none"
    }
  }
  return React.createElement(React.Fragment, null, React.createElement(W, {
    type: "rotation",
    style: t("ROTATION")
  }), React.createElement(W, {
    type: "position",
    style: t("POSITION")
  }), React.createElement(H, {
    style: t("SHAKE")
  }))
}
export { V as "729__part-2__V" }
