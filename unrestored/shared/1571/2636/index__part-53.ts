/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-53
 */

"use strict"

import { Af } from "./index__part-51"
import { jf, Rf } from "./index__part-52"
import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"./131"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_163 from /* 163 */"./163"
var xf = {
  icon: Module_131.e,
  title: "switch",
  type: Src_editor_widget_builtIn_types.F,
  previewAreaWidgetTitle: "switch",
  component: jf,
  editConfig: Af,
  blockConfig: Rf,
  isInvisibleWidget: Module_131.h,
  widget: {
    isGlobalWidget: Module_131.g,
    size: {
      width: Module_131.f,
      height: Module_131.d
    },
    attributes: {
      disabled: false,
      color: Module_131.c,
      sizeType: Src_editor_widget_builtIn_types.s.MEDIUM,
      mode: Module_163.c.DEFAULT,
      value: false,
      backgroundMode: Module_163.a.TEMPLATE,
      backgroundOpenImage: Module_131.b,
      backgroundCloseImage: Module_131.a,
      imageResizeMode: Module_163.b.CONTAIN
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
