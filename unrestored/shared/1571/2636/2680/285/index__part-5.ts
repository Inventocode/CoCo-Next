/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_1034 from "../../1034"
import * as /* [auto-meaningful-name] */$$_$$_364_index from "../../364/index"
import * as /* [auto-meaningful-name] */$$_615 from "../615"
import * as /* [auto-meaningful-name] */$$_$$_801_694_923 from "../../801/694/923"
var Ee = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n(e) {
    var r
    $$_$$_103.a(this, n)
    r = t.call(this, e)
    $$_615.a(e.locale && e.locale.Modal)
    $$_$$_364_index.a("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale")
    return r
  }
  $$_$$_106.a(n, [
    {
      key: "componentDidMount",
      value: function () {
        $$_615.a(this.props.locale && this.props.locale.Modal)
      }
    }, {
      key: "componentDidUpdate",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$locale = this.props.locale
        if (e.locale !== this$props$locale) {
          $$_615.a(this$props$locale && this$props$locale.Modal)
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        $$_615.a()
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$locale = this$props.locale
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var o = $$_$$_1034.a(function (e) {
          return $$_$$_19.a($$_$$_19.a({}, e), {
            exist: true
          })
        })(this$props$locale)
        return React.createElement($$_$$_801_694_923.a.Provider, {
          value: o
        }, this$props$children)
      }
    }
  ])
  return n
}(React.Component)
Ee.defaultProps = {
  locale: {}
}
export { Ee }
