"use strict";

import * as r from "../0/index";
import * as i from "../75/index";
import * as o from "../75/index";
import * as a from "./378";
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