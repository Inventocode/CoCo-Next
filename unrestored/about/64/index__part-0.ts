/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"./72/index"
import /* 16 */"./16/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"./49/index"
function o() {
  var /* [auto-meaningful-name] */window$location$hostname = window.location.hostname
  return window$location$hostname.startsWith("dev") || "localhost" === window$location$hostname ? "development" : window$location$hostname.startsWith("test") ? "test" : window$location$hostname.startsWith("staging") ? "staging" : "production"
}
export { o }
