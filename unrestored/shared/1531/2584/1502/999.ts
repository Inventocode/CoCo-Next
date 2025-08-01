"use strict";

var r = require("../0/index");
var i = require("../75/index");
var o = (module => {
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
})(i);
var a = require("./378");
var s = Object(r.forwardRef)(function (e, t) {
  var n = e.didUpdate;
  var i = e.getContainer;
  var s = e.children;
  var c = Object(r.useRef)();
  Object(r.useImperativeHandle)(t, function () {
    return {};
  });
  var u = Object(r.useRef)(!1);
  if (!u.current && Object(a.a)()) {
    c.current = i();
    u.current = !0;
  }
  Object(r.useEffect)(function () {
    if (!(null === n || void 0 === n)) {
      n(e);
    }
  });
  Object(r.useEffect)(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = c.current) || void 0 === e || null === (t = e.parentNode) || void 0 === t)) {
        t.removeChild(c.current);
      }
    };
  }, []);
  return c.current ? o.a.createPortal(s, c.current) : null;
});
export { s as a };
export default s;