"use strict";

export { i as a };
export { a as b };
var r = require("./68");
var o = require("./28/index");
function i(e) {
  return (Object(o.e)() ? window.parent : window).postMessage(e, window.location.origin);
}
function a(e, t, n, o) {
  i({
    type: r.b.PLAYER_DATA_WATCH,
    data: {
      screenId: e,
      tab: t,
      id: n,
      value: o
    }
  });
}
export default i;