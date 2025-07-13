function n() {}
module.exports = function (e, t, r) {
  var i = !1;
  r = r || n;
  o.count = e;
  return 0 === e ? t() : o;
  function o(e, n) {
    if (o.count <= 0) {
      throw new Error("after called too many times");
    }
    --o.count;
    if (e) {
      i = !0;
      t(e);
      t = r;
    } else {
      if (!(0 !== o.count || i)) {
        t(null, n);
      }
    }
  }
};