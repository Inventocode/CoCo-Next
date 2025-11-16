/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$_72_index from "./72/index"
import "./16"
import * as /* [auto-meaningful-name] */$_49_index from "./49/index"
function o() {
  var /* [auto-meaningful-name] */window$location$hostname = window.location.hostname
  return window$location$hostname.startsWith("dev") || "localhost" === window$location$hostname ? "development" : window$location$hostname.startsWith("test") ? "test" : window$location$hostname.startsWith("staging") ? "staging" : "production"
}
export { o as "64__part-0__o" }
