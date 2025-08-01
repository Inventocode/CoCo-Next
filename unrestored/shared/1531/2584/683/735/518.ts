"use strict";

export { o as a };
var r = require("../520/393");
var i = require("../215/293");
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Object(i.a)(n) ? t : Object(r.a)(function (t) {
          return e(n, t);
        });
      default:
        return Object(i.a)(n) && Object(i.a)(o) ? t : Object(i.a)(n) ? Object(r.a)(function (t) {
          return e(t, o);
        }) : Object(i.a)(o) ? Object(r.a)(function (t) {
          return e(n, t);
        }) : e(n, o);
    }
  };
}
export default o;