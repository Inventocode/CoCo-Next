import * as r from "../../1626/231";
import * as o from "../../1534/818";
var i = require("../../1735/247/index")("species");
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