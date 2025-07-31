var r = require("./1282");
var i = Object.prototype;
var o = i.hasOwnProperty;
var a = i.toString;
var s = r ? r.toStringTag : void 0;
module.exports = function (e) {
  var t = o.call(e, s);
  var n = e[s];
  try {
    e[s] = void 0;
    var r = !0;
  } catch (c) {}
  var i = a.call(e);
  if (r) {
    if (t) {
      e[s] = n;
    } else {
      delete e[s];
    }
  }
  return i;
};