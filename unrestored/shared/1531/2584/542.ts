"use strict";

var r = require("./6");
var o = require("./11");
var i = require("./0/index");
var a = function __importDefault(module) {
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
}(i);
var s = require("./51/index");
var c = function __importDefault(module) {
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
}(s);
var l = require("./8");
var u = function __importDefault(module) {
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
}(l);
var d = require("./5");
var p = require("./90");
var f = require("./240");
var h = function __importDefault(module) {
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
}(f);
var _a;
_a = function (e) {
  var t = e.id;
  var n = e.visible;
  var i = e.attributes;
  var s = e.onClick;
  var l = i.backgroundColor;
  var f = i.content;
  var m = i.color;
  var g = i.fontFamily;
  var _ = i.fontSize;
  var v = i.textAlign;
  var b = i.lineClamp;
  var y = {
    minWidth: 16,
    minHeight: 16,
    backgroundColor: c()(l).toString(),
    color: c()(m).toString(),
    fontFamily: g,
    fontSize: _,
    justifyContent: "center",
    textAlign: v,
    padding: 0,
    overflow: "hidden"
  };
  return a.a.createElement("div", {
    id: t,
    "data-widget-type": d.H,
    "data-role": d.M,
    className: u()(p.b, h.a.textWidget, Object(o.a)({}, h.a.hide, !n)),
    onClick: function () {
      if (s) {
        s();
      }
    },
    style: Object(r.a)(Object(r.a)({}, y), {}, {
      position: "static"
    })
  }, a.a.createElement("span", {
    className: h.a.content,
    style: {
      display: b ? "-webkit-box" : void 0,
      lineClamp: b || void 0,
      WebkitLineClamp: b || void 0,
      whiteSpace: b ? "break-spaces" : "pre"
    }
  }, f));
};
export { _a as a };
export default _a;