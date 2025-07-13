import * as r from "./1738/272";
import * as o from "./1534/300/index";
import * as i from "./1660/943";
import * as a from "./1626/167";
if (r && a(function () {
  return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
    dotAll: !0,
    sticky: !0
  });
})) {
  o.f(RegExp.prototype, "flags", {
    configurable: !0,
    get: i
  });
}