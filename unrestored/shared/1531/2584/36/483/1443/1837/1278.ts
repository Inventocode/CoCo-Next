var r = require("../../1445/712/1089/index");
var i = require("../../1444/1088/832");
module.exports = function (e, t, n) {
  if (void 0 !== n && !i(e[t], n) || void 0 === n && !(t in e)) {
    r(e, t, n);
  }
};