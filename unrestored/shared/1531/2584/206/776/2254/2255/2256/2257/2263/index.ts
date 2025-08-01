"use strict";

var r = require("../../../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../../../3272/3198/2668/230");
var o = require("../../../../../../../../../3272/3198/2668/2689/703/index");
var a = require("../../../../../../../../../3272/3198/2668/2689/529");
var s = require("../../../../../../../../../3272/3198/2668/2689/356/index");
var c = require("../../../../../../../../../3272/3198/2668/2689/357/index");
var u = require("./1118");
module.exports = function (e) {
  s(n, e);
  var t = c(n);
  function n(e, i) {
    var o;
    r(this, n);
    (o = t.call(this, e)).count = i;
    return o;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      for (; this.count > 0;) {
        if (this.count -= 1, !o(a(n.prototype), "moveNext", this).call(this)) {
          return !1;
        }
      }
      return o(a(n.prototype), "moveNext", this).call(this);
    }
  }]);
  return n;
}(u);