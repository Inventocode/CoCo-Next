var r = require("./2356/1368");
exports.render = function (e, t, n) {
  var i = n;
  var o = t;
  if (!("undefined" !== typeof i || t && t.getContext)) {
    i = t;
    t = void 0;
  }
  if (!t) {
    o = function () {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }();
  }
  i = r.getOptions(i);
  var a = r.getImageWidth(e.modules.size, i);
  var s = o.getContext("2d");
  var c = s.createImageData(a, a);
  r.qrToImageData(c.data, e, i);
  (function (e, t, n) {
    e.clearRect(0, 0, t.width, t.height);
    if (!t.style) {
      t.style = {};
    }
    t.height = n;
    t.width = n;
    t.style.height = n + "px";
    t.style.width = n + "px";
  })(s, o, a);
  s.putImageData(c, 0, 0);
  return o;
};
exports.renderToDataURL = function (e, n, r) {
  var i = r;
  if (!("undefined" !== typeof i || n && n.getContext)) {
    i = n;
    n = void 0;
  }
  if (!i) {
    i = {};
  }
  var o = exports.render(e, n, i);
  var a = i.type || "image/png";
  var s = i.rendererOpts || {};
  return o.toDataURL(a, s.quality);
};