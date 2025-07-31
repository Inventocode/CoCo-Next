var r = require("./953");
module.exports = function (e) {
  var t = this.__data__;
  var n = r(t, e);
  return n < 0 ? void 0 : t[n][1];
};