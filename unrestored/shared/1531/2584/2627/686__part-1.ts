/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：686__part-1
 */

"use strict"

import { "686__part-0__u" as u } from "./686__part-0"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$_285_910 from "./285/910"
var f = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_96.a(n, [{
    key: "getLocale",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$componentName = this$props.componentName
      var n = this$props.defaultLocale || u[null !== this$props$componentName && undefined !== this$props$componentName ? this$props$componentName : "global"]
      var /* [auto-meaningful-name] */this$context = this.context
      var o = this$props$componentName && this$context ? this$context[this$props$componentName] : {}
      return $$_19.a($$_19.a({}, n instanceof Function ? n() : n), o || {})
    }
  }, {
    key: "getLocaleCode",
    value: function () {
      var /* [auto-meaningful-name] */this$context = this.context
      var t = this$context && this$context.locale
      return this$context && this$context.exist && !t ? u.locale : t
    }
  }, {
    key: "render",
    value: function () {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context)
    }
  }])
  return n
}(React.Component)
f.defaultProps = {
  componentName: "global"
}
f.contextType = $_285_910.a
export { f as "686__part-1__f" }
