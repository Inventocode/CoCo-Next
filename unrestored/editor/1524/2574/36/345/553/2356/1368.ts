function n(e) {
  if ("number" === typeof e && (e = e.toString()), "string" !== typeof e) {
    throw new Error("Color should be defined as hex string");
  }
  var t = e.slice().replace("#", "").split("");
  if (t.length < 3 || 5 === t.length || t.length > 8) {
    throw new Error("Invalid hex color: " + e);
  }
  if (!(3 !== t.length && 4 !== t.length)) {
    t = Array.prototype.concat.apply([], t.map(function (e) {
      return [e, e];
    }));
  }
  if (6 === t.length) {
    t.push("F", "F");
  }
  var n = parseInt(t.join(""), 16);
  return {
    r: n >> 24 & 255,
    g: n >> 16 & 255,
    b: n >> 8 & 255,
    a: 255 & n,
    hex: "#" + t.slice(0, 6).join("")
  };
}
exports.getOptions = function (e) {
  if (!e) {
    e = {};
  }
  if (!e.color) {
    e.color = {};
  }
  var t = "undefined" === typeof e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin;
  var r = e.width && e.width >= 21 ? e.width : void 0;
  var i = e.scale || 4;
  return {
    width: r,
    scale: r ? 4 : i,
    margin: t,
    color: {
      dark: n(e.color.dark || "#000000ff"),
      light: n(e.color.light || "#ffffffff")
    },
    type: e.type,
    rendererOpts: e.rendererOpts || {}
  };
};
exports.getScale = function (e, t) {
  return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale;
};
exports.getImageWidth = function (e, n) {
  var r = t.getScale(e, n);
  return Math.floor((e + 2 * n.margin) * r);
};
exports.qrToImageData = function (e, n, r) {
  for (var i = n.modules.size, o = n.modules.data, a = t.getScale(i, r), s = Math.floor((i + 2 * r.margin) * a), c = r.margin * a, u = [r.color.light, r.color.dark], l = 0; l < s; l++) {
    for (var f = 0; f < s; f++) {
      var h = 4 * (l * s + f);
      var d = r.color.light;
      if (l >= c && f >= c && l < s - c && f < s - c) {
        d = u[o[Math.floor((l - c) / a) * i + Math.floor((f - c) / a)] ? 1 : 0];
      }
      e[h++] = d.r;
      e[h++] = d.g;
      e[h++] = d.b;
      e[h] = d.a;
    }
  }
};