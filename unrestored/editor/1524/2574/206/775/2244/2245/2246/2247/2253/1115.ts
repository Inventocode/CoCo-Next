"use strict";

var r = require("../../../../../../../../../3262/3188/2658/220");
var i = require("../../../../../../../../../3262/3188/2658/230");
var o = require("../../../../../../../../../3262/3188/2658/2679/356/index");
var a = require("../../../../../../../../../3262/3188/2658/2679/357/index");
var s = require("../../1116/842");
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