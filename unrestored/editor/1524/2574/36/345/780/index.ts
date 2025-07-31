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
exports.Vika = void 0;
var o = require("./1369/index");
Object.defineProperty(exports, "Vika", {
  enumerable: !0,
  get: function () {
    return o.Vika;
  }
});
i(require("./2394/index"), exports);
i(require("./2400"), exports);
exports.default = o.Vika;