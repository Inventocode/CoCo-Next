"use strict";

function r(e) {
  var t;
  var n = e.Symbol;
  if ("function" === typeof n) {
    if (n.observable) {
      t = n.observable;
    } else {
      t = n("observable");
      n.observable = t;
    }
  } else {
    t = "@@observable";
  }
  return t;
}
export { r as a };