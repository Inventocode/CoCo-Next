/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-6
 */

import React from "react"
import ReactDom from "react-dom"
import { parseURLSearchParamsToObject } from "../shared/tools"
import { SafeLoad } from "./safe-load"

const App = React.memo(() => {
  const channel = (parseURLSearchParamsToObject(window.location.href).channel || "").toUpperCase()
  window.history.pushState = () => {}
  window.history.replaceState = () => {}
  return <SafeLoad channel={channel} />
})

ReactDom.render(<App />, document.getElementById("root"))
