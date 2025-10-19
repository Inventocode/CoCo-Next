/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：686
 */

"use strict";

export { f as a };
import r = require("../../19");
import i = require("../../95");
import o = require("../../96");
import a = require("../../120");
import s = require("../../140");
import c = require("react");
var u = require("../605").a;
import l = require("./910");
var f = function (e) {
  a.a(n, e);
  var t = s.a(n);
  function n() {
    i.a(this, n);
    return t.apply(this, arguments);
  }
  o.a(n, [{
    key: "getLocale",
    value: function () {
      var e = this.props;
      var t = e.componentName;
      var n = e.defaultLocale || u[null !== t && undefined !== t ? t : "global"];
      var i = this.context;
      var o = t && i ? i[t] : {};
      return r.a(r.a({}, n instanceof Function ? n() : n), o || {});
    }
  }, {
    key: "getLocaleCode",
    value: function () {
      var e = this.context;
      var t = e && e.locale;
      return e && e.exist && !t ? u.locale : t;
    }
  }, {
    key: "render",
    value: function () {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return n;
}(c.Component);
f.defaultProps = {
  componentName: "global"
};
f.contextType = l.a;
export default f;