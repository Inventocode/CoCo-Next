var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1541/1062").f;
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    return !Object.getOwnPropertyNames(1);
  })
}, {
  getOwnPropertyNames: i
});