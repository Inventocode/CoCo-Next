import * as r from "../1626/167";
import * as o from "../1735/247/index";
import * as i from "../1727/629";
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