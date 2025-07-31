var r = require("./1738/272");
var o = require("./1534/300/index").f;
var i = Function.prototype;
var a = i.toString;
var s = /^\s*function ([^ (]*)/;
if (r && !("name" in i)) {
  o(i, "name", {
    configurable: !0,
    get: function () {
      try {
        return a.call(this).match(s)[1];
      } catch (e) {
        return "";
      }
    }
  });
}