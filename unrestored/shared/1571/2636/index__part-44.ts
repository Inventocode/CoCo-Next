/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-44
 */

"use strict"

import { qp, Xp, Qp } from "./index__part-43"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as k from "./11"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_513 from "./513"
import /* [auto-meaningful-name] */_$_ from "./513"
import * as /* [auto-meaningful-name] */$_433 from "./433"
import * as /* [auto-meaningful-name] */$_206 from "./206"
var tf = {
  icon: $_133.a,
  title: $_133.b,
  type: An.v,
  previewAreaWidgetTitle: "imageBox",
  component: function (e) {
    var t = e.id
    var /* [auto-meaningful-name] */e$position = e.position
    var /* [auto-meaningful-name] */e$visible = e.visible
    var /* [auto-meaningful-name] */e$opacity = e.opacity
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$parentId = e.parentId
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
    var /* [auto-meaningful-name] */e$attributes$borderRadius = e$attributes.borderRadius
    var /* [auto-meaningful-name] */e$attributes$fileId = e$attributes.fileId
    var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
    var p = _React.useRef(null)
    var m = Jd.Fb(e$attributes$fileId) || $_133.m
    return React.createElement("div", {
      id: t,
      className: N(_$_.imageWidget, wn.b, k.a({}, _$_.hide, !e$visible)),
      "data-role": An.M,
      "data-widget-type": An.v,
      "data-scale-mode": An.p.PROPORTIONAL,
      ref: p,
      style: {
        top: e$position.y,
        left: e$position.x,
        height: e$parentId ? "100%" : e$size.height,
        width: e$parentId ? "100%" : e$size.width,
        position: e$parentId ? "static" : "absolute",
        backgroundColor: e$attributes$backgroundColor,
        backgroundImage: "url(".concat(m, ")"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: $_433.a(e$attributes$resizeMode),
        borderRadius: e$attributes$borderRadius,
        opacity: undefined === e$opacity ? undefined : e$opacity / 100
      }
    }, React.createElement("img", {
      src: m,
      alt: "",
      style: {
        visibility: "hidden",
        borderRadius: e$attributes$borderRadius,
        objectFit: $_433.b(e$attributes$resizeMode)
      }
    }))
  },
  editConfig: qp,
  childWidgetEditConfig: Xp,
  blockConfig: Qp,
  isInvisibleWidget: $_133.k,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: $_133.j,
    size: {
      width: $_133.l,
      height: $_133.h
    },
    attributes: {
      borderRadius: 0,
      fileId: $_133.i,
      resizeMode: $_206.a.CONTAIN,
      backgroundColor: $_133.g
    }
  }
}
var nf = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, [
    {
      type: "VisibleSwitch"
    }, {
      type: "DisabledSwitch"
    }
  ], {
    type: "Headline"
  }, {
    type: "Options"
  }, {
    type: "RadioMode"
  }, {
    type: "Color"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "RadioSizeType"
  }, {
    type: "Coordinate"
  }
]
export { tf }
export { nf }
