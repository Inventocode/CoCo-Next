var r = require("./1745/272");
var o = require("./1541/300").f;
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