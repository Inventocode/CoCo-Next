/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：270__part-8
 */

"use strict"

import { "270__part-1__w" as w, "270__part-1__E" as E } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_691_153 from "../691/153"
import * as /* [auto-meaningful-name] */$$_691_1043 from "../691/1043"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_100 from "../100"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_691_2590_index from "../691/2590/index"
var Le = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var f = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$disablePointerEvents = e.disablePointerEvents
  var h = undefined !== e$disablePointerEvents && e$disablePointerEvents
  var /* [auto-meaningful-name] */e$disableTypography = e.disableTypography
  var _ = undefined !== e$disableTypography && e$disableTypography
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$variant = e.variant
  var v = $$_$$_$$_54.a(e, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"])
  var m = w() || {}
  var y = e$variant
  if (e$variant) {
    m.variant
  }
  if (m && !y) {
    y = m.variant
  }
  return React.createElement(E.Provider, {
    value: null
  }, React.createElement(f, $$_$$_$$_19.a({
    className: $$_100.a(e$classes.root, e$className, "end" === e$position ? e$classes.positionEnd : e$classes.positionStart, h && e$classes.disablePointerEvents, m.hiddenLabel && e$classes.hiddenLabel, "filled" === y && e$classes.filled, "dense" === m.margin && e$classes.marginDense),
    ref: t
  }, v), "string" !== typeof e$children || _ ? e$children : React.createElement($$_691_1043.a, {
    color: "textSecondary"
  }, e$children)))
})
var Ue = $$_691_153.a({
  root: {
    display: "flex",
    height: "0.01em",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap"
  },
  filled: {
    "&$positionStart:not($hiddenLabel)": {
      marginTop: 16
    }
  },
  positionStart: {
    marginRight: 8
  },
  positionEnd: {
    marginLeft: 8
  },
  disablePointerEvents: {
    pointerEvents: "none"
  },
  hiddenLabel: {},
  marginDense: {}
}, {
  name: "MuiInputAdornment"
})(Le)
export { Ue as "270__part-8__Ue" }
