/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-53
 */

"use strict"

import { Af } from "./index__part-51"
import { jf, Rf } from "./index__part-52"
import * as /* [auto-meaningful-name] */$_131 from "./131"
import * as An from "./5"
import * as /* [auto-meaningful-name] */$_163 from "./163"
var xf = {
  icon: $_131.e,
  title: "switch",
  type: An.F,
  previewAreaWidgetTitle: "switch",
  component: jf,
  editConfig: Af,
  blockConfig: Rf,
  isInvisibleWidget: $_131.h,
  widget: {
    isGlobalWidget: $_131.g,
    size: {
      width: $_131.f,
      height: $_131.d
    },
    attributes: {
      disabled: false,
      color: $_131.c,
      sizeType: An.s.MEDIUM,
      mode: $_163.c.DEFAULT,
      value: false,
      backgroundMode: $_163.a.TEMPLATE,
      backgroundOpenImage: $_131.b,
      backgroundCloseImage: $_131.a,
      imageResizeMode: $_163.b.CONTAIN
    }
  }
}
var Df = [
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
    type: "SliderRange"
  }, {
    type: "SliderDirection"
  }, {
    type: "SliderMode",
    label: "mode"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Size"
  }, {
    type: "Coordinate"
  }
]
export { xf }
export { Df }
