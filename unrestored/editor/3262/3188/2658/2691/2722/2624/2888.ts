"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  if (!(0, r.default)(e)) {
    var t;
    var n = null != (t = null == e ? void 0 : e.type) ? t : JSON.stringify(e);
    throw new TypeError('Not a valid node of type "'.concat(n, '"'));
  }
};
var r = require("./2729");