import * as r from "../../1659/241";
module.exports = function (e, t, n) {
  var o;
  var i;
  r(e);
  try {
    if (void 0 === (o = e.return)) {
      if ("throw" === t) {
        throw n;
      }
      return n;
    }
    o = o.call(e);
  } catch (a) {
    i = !0;
    o = a;
  }
  if ("throw" === t) {
    throw n;
  }
  if (i) {
    throw o;
  }
  r(o);
  return n;
};