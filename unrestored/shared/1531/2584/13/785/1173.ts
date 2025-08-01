"use strict";

(function (e) {
  var r = require("./325/1013");
  var i = "object" == typeof exports && exports && !exports.nodeType && exports;
  var o = i && "object" == typeof e && e && !e.nodeType && e;
  var a = o && o.exports === i && r.a.process;
  var s = function () {
    try {
      var e = o && o.require && o.require("util").types;
      return e || a && a.binding && a.binding("util");
    } catch (t) {}
  }();
  exports.a = s;
}).call(this, require("../../155/1167/574")(module));