var r = require("../../1437/1087/1088/index");
var i = require("../../1437/1087/831");
module.exports = function (e, t, n) {
  if (void 0 !== n && !i(e[t], n) || void 0 === n && !(t in e)) {
    r(e, t, n);
  }
};