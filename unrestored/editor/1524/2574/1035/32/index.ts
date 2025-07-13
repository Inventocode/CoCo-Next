"use strict";

var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
  if (void 0 === r) {
    r = n;
  }
  Object.defineProperty(e, r, {
    enumerable: !0,
    get: function () {
      return t[n];
    }
  });
} : function (e, t, n, r) {
  if (void 0 === r) {
    r = n;
  }
  e[r] = t[n];
});
var i = this && this.__exportStar || function (e, t) {
  for (var n in e) if (!("default" === n || t.hasOwnProperty(n))) {
    r(t, e, n);
  }
};
i(require("./2280"), t);
import * as o from "../1356/1119";
export { ReadCursor } from "../1356/1119";
export { WriteCursor } from "../1356/1119";
import * as a from "../1356/1120";
export { ConflictType } from "../1356/1120";