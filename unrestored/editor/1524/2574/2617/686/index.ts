"use strict";

export { f as a };
var r = require("../../19");
var i = require("../../95");
var o = require("../../96");
var a = require("../../120");
var s = require("../../140");
var c = require("../../0/index");
var u = require("../605").a;
var l = require("./909");
var f = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n() {
    Object(i.a)(this, n);
    return t.apply(this, arguments);
  }
  Object(o.a)(n, [{
    key: "getLocale",
    value: function () {
      var e = this.props;
      var t = e.componentName;
      var n = e.defaultLocale || u[null !== t && void 0 !== t ? t : "global"];
      var i = this.context;
      var o = t && i ? i[t] : {};
      return Object(r.a)(Object(r.a)({}, n instanceof Function ? n() : n), o || {});
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