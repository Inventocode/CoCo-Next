var r = require("./1633/86/index");
var o = require("./1633/167");
var i = require("./1541/1062").f;
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    return !Object.getOwnPropertyNames(1);
  })
}, {
  getOwnPropertyNames: i
});