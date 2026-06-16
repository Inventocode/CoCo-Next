/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：299__part-1
 */

"use strict"

import { n } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_185 from /* 185 */"./185/index"
import * as /* [auto-meaningful-name] */Module_307 from /* 307 */"./307/index"
import * as /* [auto-meaningful-name] */Module_182 from /* 182 */"./182"
try {
  Module_307.a({
    release: Module_182.a,
    dsn: "https://8a0ee98a408240ecb75447c2fb5afcbf@sentry.codemao.cn/157",
    integrations: [new Module_185.a.BrowserTracing()],
    environment: n(),
    tracesSampleRate: 1
  })
} catch (I) {
  console.error(I)
}
