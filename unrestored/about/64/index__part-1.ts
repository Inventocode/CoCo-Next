/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-1
 */

"use strict"

import { o } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"./49/index"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"./72/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
try {
  Module_72.a({
    release: Module_47.a,
    dsn: "https://c4079412155e4db9ac09da746f6529c6@sentry.codemao.cn/156",
    integrations: [new Module_49.a.BrowserTracing()],
    environment: o(),
    tracesSampleRate: 1
  })
} catch (A) {
  console.error(A)
}
