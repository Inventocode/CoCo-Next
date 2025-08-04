var r = require("../1736/167");
var o = require("../1742/247/index");
var i = require("../1734/629/index");
var a = o("species");
module.exports = function (e) {
  return i >= 51 || !r(function () {
    var t = [];
    (t.constructor = {})[a] = function () {
      return {
        foo: 1
      };
    };
    return 1 !== t[e](Boolean).foo;
  });
};