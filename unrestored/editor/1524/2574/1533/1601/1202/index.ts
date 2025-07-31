var r = require("../../1626/231");
var o = require("../../1534/749");
var i = require("./1204");
var a = require("../../1735/247/index")("toPrimitive");
module.exports = function (e, t) {
  if (!r(e) || o(e)) {
    return e;
  }
  var n;
  var s = e[a];
  if (void 0 !== s) {
    if (void 0 === t && (t = "default"), n = s.call(e, t), !r(n) || o(n)) {
      return n;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  if (void 0 === t) {
    t = "number";
  }
  return i(e, t);
};