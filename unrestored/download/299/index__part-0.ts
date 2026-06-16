/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：299__part-0
 */

"use strict"

import /* 192 */"./192/index"
import * as /* [auto-meaningful-name] */Module_307 from /* 307 */"./307/index"
import /* 28 */"./28"
import * as /* [auto-meaningful-name] */Module_185 from /* 185 */"./185/index"
function n() {
  const {
    hostname: t
  } = window.location
  return t.startsWith("dev") || "localhost" === t ? "development" : t.startsWith("test") ? "test" : t.startsWith("staging") ? "staging" : "production"
}
export { n }
