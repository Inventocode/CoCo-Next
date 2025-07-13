"use strict";

import * as r from "../1250/472";
import * as o from "../1534/300/index";
import * as i from "../1735/247/index";
import * as a from "../1738/272";
var s = i("species");
module.exports = function (e) {
  var t = r(e);
  var n = o.f;
  if (a && t && !t[s]) {
    n(t, s, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  }
};