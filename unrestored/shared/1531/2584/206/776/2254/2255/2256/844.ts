/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：844
 */

"use strict";

var r = require("lodash");
function i(e) {
  return e.range[0];
}
exports.search = function (e, t) {
  return r.sortedIndexBy(e, {
    range: [t]
  }, i);
};
exports.getFirstIndex = function (e, t, n) {
  if (n in t) {
    return t[n];
  }
  if (n - 1 in t) {
    var r = t[n - 1];
    var i = r >= 0 && r < e.length ? e[r] : null;
    return i && i.range[0] >= n ? r : r + 1;
  }
  return 0;
};
exports.getLastIndex = function (e, t, n) {
  if (n in t) {
    return t[n] - 1;
  }
  if (n - 1 in t) {
    var r = t[n - 1];
    var i = r >= 0 && r < e.length ? e[r] : null;
    return i && i.range[1] > n ? r - 1 : r;
  }
  return e.length - 1;
};