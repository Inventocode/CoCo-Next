"use strict";

export { r as b };
export { i as a };
var r = function (e) {
  return e.scrollTop;
};
function i(e, t) {
  var n = e.timeout;
  var r = e.style;
  var i = void 0 === r ? {} : r;
  return {
    duration: i.transitionDuration || "number" === typeof n ? n : n[t.mode] || 0,
    delay: i.transitionDelay
  };
}
export default i;