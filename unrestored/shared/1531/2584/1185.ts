"use strict";

var r = require("./19");
var i = require("react");
var o = require("./739/index");
var a = require("./789");
var s = function (e) {
  return e ? "function" === typeof e ? e() : e : null;
};
var c = require("./431");
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
  var d = u(e, ["prefixCls", "title", "content"]);
  var h = i.useContext(a.b).getPrefixCls;
  var p = h("popover", n);
  var _ = h();
  return i.createElement(o.a, Object(r.a)({}, d, {
    prefixCls: p,
    ref: t,
    overlay: function (e) {
      return i.createElement(i.Fragment, null, l && i.createElement("div", {
        className: "".concat(e, "-title")
      }, s(l)), i.createElement("div", {
        className: "".concat(e, "-inner-content")
      }, s(f)));
    }(p),
    transitionName: Object(c.b)(_, "zoom-big", d.transitionName)
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
exports.a = l;