/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：795
 */

"use strict";

(function (e) {
  function r(t, n) {
    e(function () {
      t.focus();
      t.selectionEnd = t.selectionStart = n ? 0 : t.value.length;
    });
  }
  Object.defineProperty(exports, "a", {
    get: function () {
      return r;
    },
    enumerable: true
  });
}).call(this, require("./625/index").setImmediate);