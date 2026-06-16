/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../120"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../103"
import { createElement, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../19"
import * as /* [auto-meaningful-name] */Module_1034 from /* 1034 */"../../1034"
import * as /* [auto-meaningful-name] */Module_364 from /* 364 */"../../364/index"
import * as /* [auto-meaningful-name] */Module_615 from /* 615 */"../615"
import * as /* [auto-meaningful-name] */Module_923 from /* 923 */"../../801/694/923"
var Ee = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n(e) {
    var r
    Module_103.a(this, n)
    r = t.call(this, e)
    Module_615.a(e.locale && e.locale.Modal)
    Module_364.a("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale")
    return r
  }
  Module_106.a(n, [
    {
      key: "componentDidMount",
      value: function () {
        Module_615.a(this.props.locale && this.props.locale.Modal)
      }
    }, {
      key: "componentDidUpdate",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$locale = this.props.locale
        if (e.locale !== this$props$locale) {
          Module_615.a(this$props$locale && this$props$locale.Modal)
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        Module_615.a()
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$locale = this$props.locale
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var o = Module_1034.a(function (e) {
          return Module_19.a(Module_19.a({}, e), {
            exist: true
          })
        })(this$props$locale)
        return createElement(Module_923.a.Provider, {
          value: o
        }, this$props$children)
      }
    }
  ])
  return n
}(Component)
Ee.defaultProps = {
  locale: {}
}
export { Ee }
