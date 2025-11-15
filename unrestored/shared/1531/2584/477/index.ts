/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：477
 */

"use strict"

export { c as a }
export { l as b }
import /* [auto-meaningful-name] */$_1184_index = require("./1184/index")
import /* [auto-meaningful-name] */$_340_index = require("./340/index")
import /* [auto-meaningful-name] */$_787_index = require("./787/index")
import /* [auto-meaningful-name] */$_650 = require("./650")
import /* [auto-meaningful-name] */$$_59_index = require("../59/index")
function c(e, t) {
  $_340_index.b({
    id: e,
    name: t
  })
}
function l() {
  $_340_index.b(null)
}
try {
  $_1184_index.a({
    release: $_650.a,
    dsn: "https://7c6478536deb43e98fe63267ae5c8c7d@sentry.codemao.cn/73",
    integrations: [new $_787_index.a.BrowserTracing()],
    environment: $$_59_index.b(),
    tracesSampleRate: 1
  })
} catch (u) {
  console.error(u)
}
export default c
