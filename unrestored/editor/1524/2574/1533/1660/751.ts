"use strict";

var r = require("../1250/472");
var o = require("../1534/300/index");
var i = require("../1735/247/index");
var a = require("../1738/272");
var s = i("species");
module.exports = function (e) {
  var t = r(e);
  var n = o.f;
  if (a && t && !t[s]) {
    n(t, s, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  }
};