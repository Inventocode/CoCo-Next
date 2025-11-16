/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：315__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_100 from "../../../548/1183/100"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_701_index from "../../../548/1183/701/index"
import * as /* [auto-meaningful-name] */$$_365_1509 from "../365/1509"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_691_153 from "../../../548/1183/691/153"
import * as /* [auto-meaningful-name] */$_2625 from "./2625"
var f = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$disableSpacing = e.disableSpacing
  var s = undefined !== e$disableSpacing && e$disableSpacing
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var l = $$_$$_$$_54.a(e, ["disableSpacing", "classes", "className"])
  return React.createElement("div", $$_$$_$$_19.a({
    className: $$_$$_$$_548_1183_100.a(e$classes.root, e$className, !s && e$classes.spacing),
    ref: t
  }, l))
})
var d = $$_$$_$$_548_1183_691_153.a({
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
var h = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$dividers = e.dividers
  var u = undefined !== e$dividers && e$dividers
  var l = $$_$$_$$_54.a(e, ["classes", "className", "dividers"])
  return React.createElement("div", $$_$$_$$_19.a({
    className: $$_$$_$$_548_1183_100.a(e$classes.root, e$className, u && e$classes.dividers),
    ref: t
  }, l))
})
var p = $$_$$_$$_548_1183_691_153.a(function (e) {
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
export { d as "315__part-0__d" }
export { p as "315__part-0__p" }
