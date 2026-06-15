/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：299__part-3
 */

"use strict"

import { n } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_306 from /* 306 */"./306/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import /* [auto-meaningful-name] */Module_681 from /* 68 */"./68"
const K = n()
Module_681.init({
  server_url: "development" === K || "test" === K ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
  is_track_single_page: true,
  use_client_time: true,
  show_log: true,
  send_type: "ajax",
  max_string_length: 5e3,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default"
  }
})
Module_681.registerPage({
  $app_id: window.location.host,
  $app_name: "APP工匠",
  product_name: "APP工匠"
})
Module_681.quick("autoTrack", {
  page: "editor"
})
export { K }
