"use strict";

export { i as a };
var r = require("./33/index");
var o = require("./0/index");
function i(e, t) {
  var n = t || {};
  var i = n.defaultValue;
  var a = n.value;
  var s = n.onChange;
  var c = n.postState;
  var l = o.useState(function () {
    return void 0 !== a ? a : void 0 !== i ? "function" === typeof i ? i() : i : "function" === typeof e ? e() : e;
  });
  var u = Object(r.a)(l, 2);
  var d = u[0];
  var p = u[1];
  var f = void 0 !== a ? a : d;
  if (c) {
    f = c(f);
  }
  var h = o.useRef(!0);
  o.useEffect(function () {
    if (h.current) {
      h.current = !1;
    } else {
      if (void 0 === a) {
        p(a);
      }
    }
  }, [a]);
  return [f, function (e) {
    p(e);
    if (f !== e && s) {
      s(e, f);
    }
  }];
}
export default i;