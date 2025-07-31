"use strict";

var r = require("../../../../../../../../3262/3188/2658/220");
var i = require("../../../../../../../../3262/3188/2658/230");
module.exports = function () {
  function e() {
    r(this, e);
    this.current = null;
  }
  i(e, [{
    key: "getOneToken",
    value: function () {
      return this.moveNext() ? this.current : null;
    }
  }, {
    key: "getAllTokens",
    value: function () {
      for (var e = []; this.moveNext();) {
        e.push(this.current);
      }
      return e;
    }
  }, {
    key: "moveNext",
    value: function () {
      throw new Error("Not implemented.");
    }
  }]);
  return e;
}();