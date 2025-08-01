exports.encode = function (e) {
  var t = "";
  for (var n in e) if (e.hasOwnProperty(n)) {
    if (t.length) {
      t += "&";
    }
    t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
  }
  return t;
};
exports.decode = function (e) {
  for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
    var o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
};