"use strict";

var r;
var o;
var i;
import * as a from "../../1626/167";
import * as s from "../../1623/495";
import * as c from "../../1735/422";
import * as l from "../../1738/332";
import * as u from "../../1735/247/index";
import * as d from "../../1534/530";
var p = u("iterator");
var f = !1;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = s(s(i))) !== Object.prototype) {
      r = o;
    }
  } else {
    f = !0;
  }
}
var h = void 0 == r || a(function () {
  var e = {};
  return r[p].call(e) !== e;
});
if (h) {
  r = {};
}
if (!(d && !h || l(r, p))) {
  c(r, p, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: f
};