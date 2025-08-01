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
Object.defineProperty(exports, "__esModule", {
  value: !0
});
i(require("./2290"), exports);
var o = require("./1122");
Object.defineProperty(exports, "ReadCursor", {
  enumerable: !0,
  get: function () {
    return o.ReadCursor;
  }
});
Object.defineProperty(exports, "WriteCursor", {
  enumerable: !0,
  get: function () {
    return o.WriteCursor;
  }
});
var a = require("./1123");
Object.defineProperty(exports, "ConflictType", {
  enumerable: !0,
  get: function () {
    return a.ConflictType;
  }
});