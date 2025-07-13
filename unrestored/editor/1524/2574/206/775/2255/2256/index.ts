"use strict";

import * as r from "../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../3262/3188/2658/230";
import * as o from "./2257/index";
import * as a from "../1339";
var s = function () {
  function e(t, n, i) {
    r(this, e);
    this.id = t;
    this.upper = n;
    this.childCodePaths = [];
    Object.defineProperty(this, "internal", {
      value: new o(new a("".concat(t, "_")), i)
    });
    if (n) {
      n.childCodePaths.push(this);
    }
  }
  i(e, [{
    key: "initialSegment",
    get: function () {
      return this.internal.initialSegment;
    }
  }, {
    key: "finalSegments",
    get: function () {
      return this.internal.finalSegments;
    }
  }, {
    key: "returnedSegments",
    get: function () {
      return this.internal.returnedForkContext;
    }
  }, {
    key: "thrownSegments",
    get: function () {
      return this.internal.thrownForkContext;
    }
  }, {
    key: "currentSegments",
    get: function () {
      return this.internal.currentSegments;
    }
  }, {
    key: "traverseSegments",
    value: function (e, t) {
      var n;
      var r;
      if ("function" === typeof e) {
        r = e;
        n = {};
      } else {
        n = e || {};
        r = t;
      }
      var i = n.first || this.internal.initialSegment;
      var o = n.last;
      var a = null;
      var s = 0;
      var c = 0;
      var u = null;
      var l = Object.create(null);
      var f = [[i, 0]];
      var h = null;
      var d = !1;
      var p = {
        skip: function () {
          if (f.length <= 1) {
            d = !0;
          } else {
            h = f[f.length - 2][0];
          }
        },
        break: function () {
          d = !0;
        }
      };
      function _(e) {
        return l[e.id] || u.isLoopedPrevSegment(e);
      }
      for (; f.length > 0;) {
        if (a = f[f.length - 1], u = a[0], 0 === (s = a[1])) {
          if (l[u.id]) {
            f.pop();
            continue;
          }
          if (u !== i && u.prevSegments.length > 0 && !u.prevSegments.every(_)) {
            f.pop();
            continue;
          }
          if (h && -1 !== u.prevSegments.indexOf(h) && (h = null), l[u.id] = !0, !h && (r.call(this, u, p), u === o && p.skip(), d)) {
            break;
          }
        }
        if (s < (c = u.nextSegments.length - 1)) {
          a[1] += 1;
          f.push([u.nextSegments[s], 0]);
        } else {
          if (s === c) {
            a[0] = u.nextSegments[s];
            a[1] = 0;
          } else {
            f.pop();
          }
        }
      }
    }
  }], [{
    key: "getState",
    value: function (e) {
      return e.internal;
    }
  }]);
  return e;
}();
module.exports = s;