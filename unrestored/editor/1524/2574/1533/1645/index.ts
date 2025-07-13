"use strict";

import * as r from "../1626/86/index";
import * as o from "../1534/530";
import * as i from "./1233";
import * as a from "../1626/167";
import * as s from "../1250/472";
import * as c from "../1676/942";
import * as l from "./1236";
import * as u from "../1738/398";
if (r({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: !!i && a(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {});
  })
}, {
  finally: function (e) {
    var t = c(this, s("Promise"));
    var n = "function" == typeof e;
    return this.then(n ? function (n) {
      return l(t, e()).then(function () {
        return n;
      });
    } : e, n ? function (n) {
      return l(t, e()).then(function () {
        throw n;
      });
    } : e);
  }
}), !o && "function" == typeof i) {
  var d = s("Promise").prototype.finally;
  if (i.prototype.finally !== d) {
    u(i.prototype, "finally", d, {
      unsafe: !0
    });
  }
}