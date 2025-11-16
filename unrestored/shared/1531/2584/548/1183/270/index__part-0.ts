/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：270__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_29 from "../../../29"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_280 from "../../280"
import * as /* [auto-meaningful-name] */$$_100 from "../100"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_691_1043 from "../691/1043"
import * as /* [auto-meaningful-name] */$$_701_index from "../701/index"
import * as /* [auto-meaningful-name] */$_395 from "./395"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_365_1509 from "../../../549/1186/365/1509"
import * as /* [auto-meaningful-name] */$$_691_153 from "../691/153"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_315_2625 from "../../../549/1186/315/2625"
var A = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var a = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$disableGutters = e.disableGutters
  var f = undefined !== e$disableGutters && e$disableGutters
  var /* [auto-meaningful-name] */e$variant = e.variant
  var h = undefined === e$variant ? "regular" : e$variant
  var p = $$_$$_$$_54.a(e, ["classes", "className", "component", "disableGutters", "variant"])
  return React.createElement(a, $$_$$_$$_19.a({
    className: $$_100.a(e$classes.root, e$classes[h], e$className, !f && e$classes.gutters),
    ref: t
  }, p))
})
var g = $$_691_153.a(function (e) {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    gutters: $$_$$_$$_29.a({
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2)
    }, e.breakpoints.up("sm"), {
      paddingLeft: e.spacing(3),
      paddingRight: e.spacing(3)
    }),
    regular: e.mixins.toolbar,
    dense: {
      minHeight: 48
    }
  }
}, {
  name: "MuiToolbar"
})(A)
export { g as "270__part-0__g" }
