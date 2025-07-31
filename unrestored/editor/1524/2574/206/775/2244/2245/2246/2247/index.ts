"use strict";

var r = require("../../../../../../../../3262/3188/2658/220");
var i = require("../../../../../../../../3262/3188/2658/230");
var o = require("./2248");
var a = require("./2249");
var s = require("./2250");
var c = require("./2251");
var u = require("../1116/index");
var l = require("./2252");
var f = require("./2253/index");
var h = function () {
  function e(t, n) {
    r(this, e);
    this.TokenCursor = t;
    this.TokenCommentCursor = n;
  }
  i(e, [{
    key: "createBaseCursor",
    value: function (e, t, n, r, i, o) {
      return new (o ? this.TokenCommentCursor : this.TokenCursor)(e, t, n, r, i);
    }
  }, {
    key: "createCursor",
    value: function (e, t, n, r, i, o, a, c, u) {
      var h = this.createBaseCursor(e, t, n, r, i, o);
      if (a) {
        h = new s(h, a);
      }
      if (c >= 1) {
        h = new f(h, c);
      }
      if (u >= 0) {
        h = new l(h, u);
      }
      return h;
    }
  }]);
  return e;
}();
exports.forward = new h(u, c);
exports.backward = new h(a, o);