"use strict";

import r = require("react");
import i = require("../75/index");
var o = function __importDefault(module) {
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
import a = require("./378");
var s = r.forwardRef(function (e, t) {
  var n = e.didUpdate;
  var i = e.getContainer;
  var s = e.children;
  var c = r.useRef();
  r.useImperativeHandle(t, function () {
    return {};
  });
  var u = r.useRef(false);
  if (!u.current && a.a()) {
    c.current = i();
    u.current = true;
  }
  r.useEffect(function () {
    if (!(null === n || undefined === n)) {
      n(e);
    }
  });
  r.useEffect(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = c.current) || undefined === e || null === (t = e.parentNode) || undefined === t)) {
        t.removeChild(c.current);
      }
    };
  }, []);
  return c.current ? o.a.createPortal(s, c.current) : null;
});
export { s as a };
export default s;