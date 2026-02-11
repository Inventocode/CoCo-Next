/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-6
 */

import React from "react"
import ReactDom from "react-dom"
import * as /* [auto-meaningful-name] */$$_$$_unrestored_shared_1571_2636_15 from "../shared/tools"
import { SafeLoad } from "./safe-load"

var App = React.memo(function () {
  const channel = ($$_$$_unrestored_shared_1571_2636_15.N(window.location.href).channel || "").toUpperCase()
  window.history.pushState = function () {}
  window.history.replaceState = function () {}
  return <SafeLoad channel={channel} />
})

ReactDom.render(<App />, document.getElementById("root"))
