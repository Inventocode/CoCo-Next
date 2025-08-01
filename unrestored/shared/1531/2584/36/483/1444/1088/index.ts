var r = require("../../1445/712/1089/index");
var i = require("./832");
var o = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n) {
  var a = e[t];
  if (!(o.call(e, t) && i(a, n) && (void 0 !== n || t in e))) {
    r(e, t, n);
  }
};