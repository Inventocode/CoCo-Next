"use strict";

var r = require("../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../3272/3198/2668/2689/356/index");
var o = require("../../../../../../../3272/3198/2668/2689/357/index");
var a = require("./1119/index");
module.exports = function (e) {
  i(n, e);
  var t = o(n);
  function n(e, i, o, a, s, c, u) {
    var l;
    r(this, n);
    (l = t.call(this, e, i, o, a, s)).index = Math.max(0, l.index - c);
    l.indexEnd = Math.min(e.length - 1, l.indexEnd + u);
    return l;
  }
  return n;
}(a);