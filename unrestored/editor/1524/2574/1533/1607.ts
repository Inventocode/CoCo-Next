var r = require("./1626/86/index");
var o = require("./1605/1069");
var i = Math.abs;
r({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function (e) {
    return o(e) && i(e) <= 9007199254740991;
  }
});