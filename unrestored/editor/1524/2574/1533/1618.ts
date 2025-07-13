import * as r from "./1626/86/index";
import * as o from "./1631/825";
import * as i from "./1626/167";
import * as a from "./1626/231";
var s = require("./1731/709").onFreeze;
var c = Object.freeze;
r({
  target: "Object",
  stat: !0,
  forced: i(function () {
    c(1);
  }),
  sham: !o
}, {
  freeze: function (e) {
    return c && a(e) ? c(s(e)) : e;
  }
});