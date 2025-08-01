var r = require("../1633/86/index");
var o = require("../1745/194");
var i = require("./1238/index");
var a = require("./750");
var s = o.process;
r({
  global: !0,
  enumerable: !0,
  noTargetGet: !0
}, {
  queueMicrotask: function (e) {
    var t = a && s.domain;
    i(t ? t.bind(e) : e);
  }
});