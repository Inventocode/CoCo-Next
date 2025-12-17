/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：694__part-1
 */

"use strict"

import { u } from "./index__part-0"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$_923 from "./923"
var f = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    $$_$$_103.a(this, n)
    return t.apply(this, arguments)
  }
  $$_$$_106.a(n, [
    {
      key: "getLocale",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$componentName = this$props.componentName
        var n = this$props.defaultLocale || u[null !== this$props$componentName && undefined !== this$props$componentName ? this$props$componentName : "global"]
        var /* [auto-meaningful-name] */this$context = this.context
        var o = this$props$componentName && this$context ? this$context[this$props$componentName] : {}
        return $$_$$_19.a($$_$$_19.a({}, n instanceof Function ? n() : n), o || {})
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
    }
  ])
  return n
}(React.Component)
f.defaultProps = {
  componentName: "global"
}
f.contextType = $_923.a
export { f }
