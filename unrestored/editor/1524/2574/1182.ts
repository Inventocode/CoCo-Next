"use strict";

import * as r from "./19";
import * as i from "./0/index";
import * as o from "./739/index";
import * as a from "./788";
var s = function (e) {
  return e ? "function" === typeof e ? e() : e : null;
};
import * as c from "./431";
var u = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
var l = i.forwardRef(function (e, t) {
  var n = e.prefixCls;
  var l = e.title;
  var f = e.content;
  var h = u(e, ["prefixCls", "title", "content"]);
  var d = i.useContext(a.b).getPrefixCls;
  var p = d("popover", n);
  var _ = d();
  return i.createElement(o.a, Object(r.a)({}, h, {
    prefixCls: p,
    ref: t,
    overlay: function (e) {
      return i.createElement(i.Fragment, null, l && i.createElement("div", {
        className: "".concat(e, "-title")
      }, s(l)), i.createElement("div", {
        className: "".concat(e, "-inner-content")
      }, s(f)));
    }(p),
    transitionName: Object(c.b)(_, "zoom-big", h.transitionName)
  }));
});
l.displayName = "Popover";
l.defaultProps = {
  placement: "top",
  trigger: "hover",
  mouseEnterDelay: .1,
  mouseLeaveDelay: .1,
  overlayStyle: {}
};
export { l as a };