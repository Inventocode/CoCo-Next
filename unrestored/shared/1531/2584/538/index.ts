"use strict";

var r = require("../10/index");
var o = require("../0/index");
var i = (module => {
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
})(o);
var a = require("../8");
var s = (module => {
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
})(a);
require("./866");
var _a;
_a = Object(o.memo)(function (e) {
  var t = e.onChange;
  var n = e.checked;
  var a = Object(o.useState)(n);
  var c = Object(r.a)(a, 2);
  var l = c[0];
  var u = c[1];
  Object(o.useEffect)(function () {
    u(!!n);
  }, [n]);
  return i.a.createElement("div", {
    className: s()("coco-switch", l && "coco-switch-checked"),
    onClick: function () {
      u(!l);
      if (t) {
        t(!l);
      }
    }
  }, i.a.createElement("div", {
    className: s()("coco-switch-handle", l && "coco-switch-handle-checked")
  }));
});
export { _a as a };
export default _a;