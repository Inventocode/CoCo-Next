/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：qMEF
 */

import * as React from "react"
import * as ReactDOM from "react-dom"
import * as ReactRedux from "react-redux"
import { ViewRouter } from "./routes"
import { IntlWrapperComponent } from "../../../unrestored/home/components/IntlWrap-GoM7"
import { store_manager } from "../redux/store"

// 创作页由主域名 调整到 editor目录，主域名加一层中转
try {
  var location = window.location
  var origin = location.origin.replace("appcraft", "coco")
  // 访问主域名
  if (location.pathname === "/" && !origin.includes("localhost")) {
    if (location.search) {
      // 带作品id等参数信息跳转 editor创作页
      window.location.href = origin + "/editor" + location.search
    } else {
      // 访问跟域名统一跳转至 home主页
      window.location.href = origin.replace(/\d+/g, "") + "/home"
    }
  } else if (location.pathname.startsWith("/player/")) {
    // 旧的分享h5、社区链接
    window.location.href = origin + "/editor" + location.pathname + location.search
  }
} catch (e) {
  console.error(e)
}

const root_dom = document.getElementById("root")!
const store = store_manager.get_store()

function App() {
  return <ReactRedux.Provider store={store}>
    <IntlWrapperComponent>
      <ViewRouter/>
    </IntlWrapperComponent>
  </ReactRedux.Provider>
}

if (root_dom.hasChildNodes()) {
  ReactDOM.hydrate(<App/>, root_dom)
} else {
  ReactDOM.render(<App/>, root_dom)
}
