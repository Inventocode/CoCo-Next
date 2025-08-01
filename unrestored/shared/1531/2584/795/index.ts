"use strict";

(function (e) {
  function r(t, n) {
    e(function () {
      t.focus();
      t.selectionEnd = t.selectionStart = n ? 0 : t.value.length;
    });
  }
  exports.a = r;
}).call(this, require("./625/index").setImmediate);