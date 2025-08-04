var r = require("./1163/index");
var i = require("./1163/1097");
module.exports = function (e, t, n) {
  var o = !0;
  var a = !0;
  if ("function" != typeof e) {
    throw new TypeError("Expected a function");
  }
  if (i(n)) {
    o = "leading" in n ? !!n.leading : o;
    a = "trailing" in n ? !!n.trailing : a;
  }
  return r(e, t, {
    leading: o,
    maxWait: t,
    trailing: a
  });
};