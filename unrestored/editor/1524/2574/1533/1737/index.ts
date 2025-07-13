import * as r from "../1626/86/index";
import * as o from "../1738/194";
import * as i from "./1235/index";
import * as a from "./750";
var s = o.process;
r({
  global: !0,
  enumerable: !0,
  noTargetGet: !0
}, {
  queueMicrotask: function (e) {
    var t = a && s.domain;
    i(t ? t.bind(e) : e);
  }
});