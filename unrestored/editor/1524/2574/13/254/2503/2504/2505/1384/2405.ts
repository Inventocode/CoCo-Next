module.exports = function (e) {
  return function (t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
      var c = a[e ? s : ++i];
      if (!1 === n(o[c], c, o)) {
        break;
      }
    }
    return t;
  };
};