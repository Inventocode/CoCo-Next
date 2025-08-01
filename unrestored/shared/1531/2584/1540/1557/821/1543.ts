var r = require("../../1633/231");
var o = require("../../1541/819");
var i = require("../../1742/247/index")("species");
module.exports = function (e) {
  var t;
  if (o(e)) {
    if ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype)) {
      if (r(t) && null === (t = t[i])) {
        t = void 0;
      }
    } else {
      t = void 0;
    }
  }
  return void 0 === t ? Array : t;
};