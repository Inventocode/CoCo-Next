import * as r from "./1626/86/index";
import * as o from "./1626/167";
import * as i from "./935/437";
var a = require("./1534/386").f;
import * as s from "./1738/272";
var c = o(function () {
  a(1);
});
r({
  target: "Object",
  stat: !0,
  forced: !s || c,
  sham: !s
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a(i(e), t);
  }
});