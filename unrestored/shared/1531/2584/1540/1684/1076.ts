var r = require("../1742/247/index")("match");
module.exports = function (e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch (n) {
    try {
      t[r] = !1;
      return "/./"[e](t);
    } catch (o) {}
  }
  return !1;
};