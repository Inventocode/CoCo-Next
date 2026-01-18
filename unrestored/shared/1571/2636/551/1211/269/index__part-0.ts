/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_35 from "../../../35"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_278 from "../../278"
import * as /* [auto-meaningful-name] */$$_98 from "../98"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$_1065 from "./1065"
import * as /* [auto-meaningful-name] */$$_709_index from "../709/index"
import * as /* [auto-meaningful-name] */$_396 from "./396"
import * as /* [auto-meaningful-name] */$_1550 from "./1550"
import * as /* [auto-meaningful-name] */$_154_index from "./154/index"
import * as /* [auto-meaningful-name] */$_2678_index from "./2678/index"
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
    className: $$_98.a(e$classes.root, e$classes[h], e$className, !f && e$classes.gutters),
    ref: t
  }, p))
})
var g = $_154_index.a(function (e) {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    gutters: $$_$$_$$_35.a({
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
export { g }
