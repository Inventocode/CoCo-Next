"use strict";

function r() {
  if ("undefined" === typeof Reflect || !Reflect.construct) {
    return !1;
  }
  if (Reflect.construct.sham) {
    return !1;
  }
  if ("function" === typeof Proxy) {
    return !0;
  }
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return !0;
  } catch (e) {
    return !1;
  }
}
export { r as a };
export default r;