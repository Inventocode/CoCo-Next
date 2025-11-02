/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：686
 */

"use strict"

export { f as a }
import r = require("../../19");
import i = require("../../95");
import o = require("../../96");
import a = require("../../120");
import s = require("../../140");
import React = require("react");
var require$$605$a = require("../605").a
import l = require("./910");
var f = function (e) {
  a.a(n, e)
  var t = s.a(n)
  function n() {
    i.a(this, n)
    return t.apply(this, arguments)
  }
  o.a(n, [{
    key: "getLocale",
    value: function () {
      var this$props = this.props
      var this$props$componentName = this$props.componentName
      var n = this$props.defaultLocale || require$$605$a[null !== this$props$componentName && undefined !== this$props$componentName ? this$props$componentName : "global"]
      var this$context = this.context
      var o = this$props$componentName && this$context ? this$context[this$props$componentName] : {}
      return r.a(r.a({}, n instanceof Function ? n() : n), o || {})
    }
  }, {
    key: "getLocaleCode",
    value: function () {
      var this$context = this.context
      var t = this$context && this$context.locale
      return this$context && this$context.exist && !t ? require$$605$a.locale : t
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
f.contextType = l.a
export default f
