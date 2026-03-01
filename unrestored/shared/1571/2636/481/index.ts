/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：481
 */

"use strict"

export { c as a }
export { l as b }
import * as /* [auto-meaningful-name] */Module_1212 from /* 1212 */"./1212/index"
import * as /* [auto-meaningful-name] */Module_342 from /* 342 */"./342"
import * as /* [auto-meaningful-name] */Module_799 from /* 799 */"./799/index"
import * as /* [auto-meaningful-name] */Module_656 from /* 656 */"./656"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../../src/shared/env"
function c(e, t) {
  Module_342.b({
    id: e,
    name: t
  })
}
function l() {
  Module_342.b(null)
}
try {
  Module_1212.a({
    release: Module_656.a,
    dsn: "https://7c6478536deb43e98fe63267ae5c8c7d@sentry.codemao.cn/73",
    integrations: [new Module_799.a.BrowserTracing()],
    environment: Src_shared_env.b(),
    tracesSampleRate: 1
  })
} catch (u) {
  console.error(u)
}
export default c
