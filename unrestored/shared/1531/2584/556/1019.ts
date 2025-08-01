module.exports = function (e, t, n, r) {
  var o = n ? n.call(r, e, t) : void 0;
  if (void 0 !== o) {
    return !!o;
  }
  if (e === t) {
    return !0;
  }
  if ("object" !== typeof e || !e || "object" !== typeof t || !t) {
    return !1;
  }
  var i = Object.keys(e);
  var a = Object.keys(t);
  if (i.length !== a.length) {
    return !1;
  }
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var l = i[c];
    if (!s(l)) {
      return !1;
    }
    var u = e[l];
    var d = t[l];
    if (!1 === (o = n ? n.call(r, u, d, l) : void 0) || void 0 === o && u !== d) {
      return !1;
    }
  }
  return !0;
};