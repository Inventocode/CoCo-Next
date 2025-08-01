var r = require("../1742/247/index")("iterator");
var o = !1;
try {
  var i = 0;
  var a = {
    next: function () {
      return {
        done: !!i++
      };
    },
    return: function () {
      o = !0;
    }
  };
  a[r] = function () {
    return this;
  };
  Array.from(a, function () {
    throw 2;
  });
} catch (s) {}
module.exports = function (e, t) {
  if (!t && !o) {
    return !1;
  }
  var n = !1;
  try {
    var i = {};
    i[r] = function () {
      return {
        next: function () {
          return {
            done: n = !0
          };
        }
      };
    };
    e(i);
  } catch (s) {}
  return n;
};