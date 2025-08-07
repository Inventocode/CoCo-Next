var r = require("../1742/247/index")("match");
module.exports = function (e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch (n) {
    try {
      t[r] = false;
      return "/./"[e](t);
    } catch (o) {}
  }
  return false;
};