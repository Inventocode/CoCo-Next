"use strict";

export { o as a };
import * as r from "../215/393";
import * as i from "../215/293";
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