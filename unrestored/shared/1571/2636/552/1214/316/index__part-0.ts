/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-0
 */

"use strict"

import { forwardRef, createElement } from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_98 from "../98"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_709_index from "../709/index"
import * as /* [auto-meaningful-name] */$$_366_1550 from "../366/1550"
import * as /* [auto-meaningful-name] */$$_366_154 from "../366/154"
import * as /* [auto-meaningful-name] */$_2678_index from "./2678/index"
var f = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$disableSpacing = e.disableSpacing
  var s = undefined !== e$disableSpacing && e$disableSpacing
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var l = $$_$$_$$_54.a(e, ["disableSpacing", "classes", "className"])
  return createElement("div", $$_$$_$$_19.a({
    className: $$_98.a(e$classes.root, e$className, !s && e$classes.spacing),
    ref: t
  }, l))
})
var d = $$_366_154.a({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto"
  },
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
}, {
  name: "MuiDialogActions"
})(f)
var h = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$dividers = e.dividers
  var u = undefined !== e$dividers && e$dividers
  var l = $$_$$_$$_54.a(e, ["classes", "className", "dividers"])
  return createElement("div", $$_$$_$$_19.a({
    className: $$_98.a(e$classes.root, e$className, u && e$classes.dividers),
    ref: t
  }, l))
})
var p = $$_366_154.a(function (e) {
  return {
    root: {
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "8px 24px",
      "&:first-child": {
        paddingTop: 20
      }
    },
    dividers: {
      padding: "16px 24px",
      borderTop: "1px solid ".concat(e.palette.divider),
      borderBottom: "1px solid ".concat(e.palette.divider)
    }
  }
}, {
  name: "MuiDialogContent"
})(h)
export { d }
export { p }
