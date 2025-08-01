var r = require("../../1666/241");
var o = require("../../1646/827/1218");
module.exports = function (e, t, n, i) {
  try {
    return i ? t(r(n)[0], n[1]) : t(n);
  } catch (a) {
    o(e, "throw", a);
  }
};