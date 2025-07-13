import * as r from "./1087/index";
import * as i from "./712";
import * as o from "../1436/1095/index";
import * as a from "./835/index";
import * as s from "./958";
import * as c from "./833/index";
var u = Object.prototype.hasOwnProperty;
var l = o(function (e, t) {
  if (s(t) || a(t)) {
    i(t, c(t), e);
  } else {
    for (var n in t) if (u.call(t, n)) {
      r(e, n, t[n]);
    }
  }
});
module.exports = l;