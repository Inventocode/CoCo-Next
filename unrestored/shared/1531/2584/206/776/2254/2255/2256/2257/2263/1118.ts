"use strict";

var r = require("../../../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../../../3272/3198/2668/230");
var o = require("../../../../../../../../../3272/3198/2668/2689/356/index");
var a = require("../../../../../../../../../3272/3198/2668/2689/357/index");
var s = require("../../1119/843");
module.exports = function (e) {
  o(n, e);
  var t = a(n);
  function n(e) {
    var i;
    r(this, n);
    (i = t.call(this)).cursor = e;
    return i;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.cursor.moveNext();
      this.current = this.cursor.current;
      return e;
    }
  }]);
  return n;
}(s);