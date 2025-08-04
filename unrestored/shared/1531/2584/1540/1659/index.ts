var r = require("../1623/86");
var o = require("../1623/272");
var i = require("./241");
var a = require("./386/index");
r({
  target: "Reflect",
  stat: !0,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t);
  }
});