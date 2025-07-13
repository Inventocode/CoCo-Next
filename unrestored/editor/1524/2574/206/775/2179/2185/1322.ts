"use strict";

import * as r from "../../../../../../3262/3188/2658/2679/356/index";
import * as i from "../../../../../../3262/3188/2658/2679/357/index";
import * as o from "../../../../../../3262/3188/2658/220";
import * as a from "../963";
var s = function e(t, n, r, i, a, s) {
  o(this, e);
  this.type = t;
  this.name = n;
  this.node = r;
  this.parent = i;
  this.index = a;
  this.kind = s;
};
var c = function (e) {
  r(n, e);
  var t = i(n);
  function n(e, r, i, s) {
    var c;
    o(this, n);
    (c = t.call(this, a.Parameter, e, r, null, i, null)).rest = s;
    return c;
  }
  return n;
}(s);
module.exports = {
  ParameterDefinition: c,
  Definition: s
};