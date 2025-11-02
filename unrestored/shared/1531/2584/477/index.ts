/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：477
 */

"use strict"

export { c as a }
export { l as b }
import r = require("./1184/index");
import o = require("./340/index");
import i = require("./787/index");
import a = require("./650");
import s = require("../59/index");
function c(e, t) {
  o.b({
    id: e,
    name: t
  })
}
function l() {
  o.b(null)
}
try {
  r.a({
    release: a.a,
    dsn: "https://7c6478536deb43e98fe63267ae5c8c7d@sentry.codemao.cn/73",
    integrations: [new i.a.BrowserTracing()],
    environment: s.b(),
    tracesSampleRate: 1
  })
} catch (u) {
  console.error(u)
}
export default c
