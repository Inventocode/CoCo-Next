import * as r from "./2462";
module.exports = function (e) {
  var t = r(e, function (e) {
    if (500 === n.size) {
      n.clear();
    }
    return e;
  });
  var n = t.cache;
  return t;
};