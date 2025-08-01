"use strict";

var r = require("./0/index");
var o = require("./8");
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(o);
var _a;
_a = function (e) {
  var t;
  var n = e.className;
  var o = e.customizeIcon;
  var a = e.customizeIconProps;
  var s = e.onMouseDown;
  var c = e.onClick;
  var l = e.children;
  t = "function" === typeof o ? o(a) : o;
  return r.createElement("span", {
    className: n,
    onMouseDown: function (e) {
      e.preventDefault();
      if (s) {
        s(e);
      }
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: c,
    "aria-hidden": !0
  }, void 0 !== t ? t : r.createElement("span", {
    className: i()(n.split(/\s+/).map(function (e) {
      return "".concat(e, "-icon");
    }))
  }, l));
};
export { _a as a };
export default _a;