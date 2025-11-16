/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_96 from "../../96"
import * as /* [auto-meaningful-name] */$$_$$_95 from "../../95"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_1012 from "../../1012"
import * as /* [auto-meaningful-name] */$$_$$_363_index from "../../363/index"
import * as /* [auto-meaningful-name] */$$_611 from "../611"
import * as /* [auto-meaningful-name] */$_910 from "./910"
var Ee = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n(e) {
    var r
    $$_$$_95.a(this, n)
    r = t.call(this, e)
    $$_611.a(e.locale && e.locale.Modal)
    $$_$$_363_index.a("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale")
    return r
  }
  $$_$$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      $$_611.a(this.props.locale && this.props.locale.Modal)
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      var /* [auto-meaningful-name] */this$props$locale = this.props.locale
      if (e.locale !== this$props$locale) {
        $$_611.a(this$props$locale && this$props$locale.Modal)
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      $$_611.a()
    }
  }, {
    key: "render",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$locale = this$props.locale
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var o = $$_$$_1012.a(function (e) {
        return $$_$$_19.a($$_$$_19.a({}, e), {
          exist: true
        })
      })(this$props$locale)
      return React.createElement($_910.a.Provider, {
        value: o
      }, this$props$children)
    }
  }])
  return n
}(React.Component)
Ee.defaultProps = {
  locale: {}
}
export { Ee as "285__part-5__Ee" }
