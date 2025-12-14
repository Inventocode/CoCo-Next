/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-1
 */

"use strict"

import { o } from "./index__part-0"
import * as /* [auto-meaningful-name] */$_49_index from "./49/index"
import * as /* [auto-meaningful-name] */$_72_index from "./72/index"
import * as i from "./47"
try {
  $_72_index.a({
    release: i.a,
    dsn: "https://c4079412155e4db9ac09da746f6529c6@sentry.codemao.cn/156",
    integrations: [new $_49_index.a.BrowserTracing()],
    environment: o(),
    tracesSampleRate: 1
  })
} catch (A) {
  console.error(A)
}
