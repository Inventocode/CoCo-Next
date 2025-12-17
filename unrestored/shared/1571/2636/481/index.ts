/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：481
 */

"use strict"

export { c as a }
export { l as b }
import * as /* [auto-meaningful-name] */$_1212_index from "./1212/index"
import * as /* [auto-meaningful-name] */$_342 from "./342"
import * as /* [auto-meaningful-name] */$_799_index from "./799/index"
import * as /* [auto-meaningful-name] */$_656 from "./656"
import * as /* [auto-meaningful-name] */$$_57_index from "../57/index"
function c(e, t) {
  $_342.b({
    id: e,
    name: t
  })
}
function l() {
  $_342.b(null)
}
try {
  $_1212_index.a({
    release: $_656.a,
    dsn: "https://7c6478536deb43e98fe63267ae5c8c7d@sentry.codemao.cn/73",
    integrations: [new $_799_index.a.BrowserTracing()],
    environment: $$_57_index.b(),
    tracesSampleRate: 1
  })
} catch (u) {
  console.error(u)
}
export default c
