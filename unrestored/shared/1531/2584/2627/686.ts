/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：686
 */

"use strict"

export { f as a }
import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */$$_95 = require("../95")
import /* [auto-meaningful-name] */$$_96 = require("../96")
import /* [auto-meaningful-name] */$$_120 = require("../120")
import /* [auto-meaningful-name] */$$_140 = require("../140")
import /* [auto-meaningful-name] */React = require("react")
var /* [auto-meaningful-name] */require$_605$a = require("./605").a
import /* [auto-meaningful-name] */$_285_910 = require("./285/910")
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
      var n = this$props.defaultLocale || require$_605$a[null !== this$props$componentName && undefined !== this$props$componentName ? this$props$componentName : "global"]
      var /* [auto-meaningful-name] */this$context = this.context
      var o = this$props$componentName && this$context ? this$context[this$props$componentName] : {}
      return $$_19.a($$_19.a({}, n instanceof Function ? n() : n), o || {})
    }
  }, {
    key: "getLocaleCode",
    value: function () {
      var /* [auto-meaningful-name] */this$context = this.context
      var t = this$context && this$context.locale
      return this$context && this$context.exist && !t ? require$_605$a.locale : t
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
export default f
