"use strict";

import * as r from "../../../../../3262/3188/2658/220";
import * as i from "../../../../../3262/3188/2658/230";
import * as o from "./1338";
function a(e) {
  return e.reachable;
}
var s = function () {
  function e(t, n, i) {
    r(this, e);
    this.id = t;
    this.nextSegments = [];
    this.prevSegments = n.filter(a);
    this.allNextSegments = [];
    this.allPrevSegments = n;
    this.reachable = i;
    Object.defineProperty(this, "internal", {
      value: {
        used: !1,
        loopedPrevSegments: []
      }
    });
    if (o.enabled) {
      this.internal.nodes = [];
      this.internal.exitNodes = [];
    }
  }
  i(e, [{
    key: "isLoopedPrevSegment",
    value: function (e) {
      return -1 !== this.internal.loopedPrevSegments.indexOf(e);
    }
  }], [{
    key: "newRoot",
    value: function (t) {
      return new e(t, [], !0);
    }
  }, {
    key: "newNext",
    value: function (t, n) {
      return new e(t, e.flattenUnusedSegments(n), n.some(a));
    }
  }, {
    key: "newUnreachable",
    value: function (t, n) {
      var r = new e(t, e.flattenUnusedSegments(n), !1);
      e.markUsed(r);
      return r;
    }
  }, {
    key: "newDisconnected",
    value: function (t, n) {
      return new e(t, [], n.some(a));
    }
  }, {
    key: "markUsed",
    value: function (e) {
      var t;
      if (!e.internal.used) {
        if (e.internal.used = !0, e.reachable) {
          for (t = 0; t < e.allPrevSegments.length; ++t) {
            var n = e.allPrevSegments[t];
            n.allNextSegments.push(e);
            n.nextSegments.push(e);
          }
        } else {
          for (t = 0; t < e.allPrevSegments.length; ++t) {
            e.allPrevSegments[t].allNextSegments.push(e);
          }
        }
      }
    }
  }, {
    key: "markPrevSegmentAsLooped",
    value: function (e, t) {
      e.internal.loopedPrevSegments.push(t);
    }
  }, {
    key: "flattenUnusedSegments",
    value: function (e) {
      for (var t = Object.create(null), n = [], r = 0; r < e.length; ++r) {
        var i = e[r];
        if (!t[i.id]) {
          if (i.internal.used) {
            t[i.id] = !0;
            n.push(i);
          } else {
            for (var o = 0; o < i.allPrevSegments.length; ++o) {
              var a = i.allPrevSegments[o];
              if (!t[a.id]) {
                t[a.id] = !0;
                n.push(a);
              }
            }
          }
        }
      }
      return n;
    }
  }]);
  return e;
}();
module.exports = s;