"use strict";

var r = require("../../../../../../../../3262/3188/2658/220");
var i = require("../../../../../../../../3262/3188/2658/230");
var o = require("../../../../../../../../3262/3188/2658/2679/703/index");
var a = require("../../../../../../../../3262/3188/2658/2679/529");
var s = require("../../../../../../../../3262/3188/2658/2679/356/index");
var c = require("../../../../../../../../3262/3188/2658/2679/357/index");
var u = require("./2253/1115");
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
      return this.count > 0 && (this.count -= 1, o(a(n.prototype), "moveNext", this).call(this));
    }
  }]);
  return n;
}(u);