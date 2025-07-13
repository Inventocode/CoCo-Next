"use strict";

export default (function (e) {
  var t = e.node || e;
  if (function (e) {
    var t = e.leadingComments;
    return !!t && t.some(function (e) {
      return /[@#]__PURE__/.test(e.value);
    });
  }(t)) {
    return;
  }
  r(t, "leading", "#__PURE__");
});
var r = require("./2707/index").addComment;