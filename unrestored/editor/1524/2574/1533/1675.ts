"use strict";

import * as r from "./1676/946";
import * as o from "./1659/241";
import * as i from "./1676/421";
import * as a from "./1624/1232";
import * as s from "./1738/310";
import * as c from "./1676/947";
r("search", function (e, t, n) {
  return [function (t) {
    var n = i(this);
    var r = void 0 == t ? void 0 : t[e];
    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](s(n));
  }, function (e) {
    var r = o(this);
    var i = s(e);
    var l = n(t, r, i);
    if (l.done) {
      return l.value;
    }
    var u = r.lastIndex;
    if (!a(u, 0)) {
      r.lastIndex = 0;
    }
    var d = c(r, i);
    if (!a(r.lastIndex, u)) {
      r.lastIndex = u;
    }
    return null === d ? -1 : d.index;
  }];
});