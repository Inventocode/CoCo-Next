import * as r from "../1626/86/index";
import * as o from "../1626/231";
var i = require("../1731/709").onFreeze;
import * as a from "./825";
import * as s from "../1626/167";
var c = Object.preventExtensions;
r({
  target: "Object",
  stat: !0,
  forced: s(function () {
    c(1);
  }),
  sham: !a
}, {
  preventExtensions: function (e) {
    return c && o(e) ? c(i(e)) : e;
  }
});