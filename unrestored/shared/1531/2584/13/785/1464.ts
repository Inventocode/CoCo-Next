"use strict";

(function (e) {
  var r = require("./325");
  var i = "object" == typeof exports && exports && !exports.nodeType && exports;
  var o = i && "object" == typeof e && e && !e.nodeType && e;
  var a = o && o.exports === i ? r.a.Buffer : undefined;
  var s = a ? a.allocUnsafe : undefined;
  exports.a = function (e, t) {
    if (t) {
      return e.slice();
    }
    var n = e.length;
    var r = s ? s(n) : new e.constructor(n);
    e.copy(r);
    return r;
  };
}).call(this, require("../../155/1167/574")(module));