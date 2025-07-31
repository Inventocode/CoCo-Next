var r = require("../1626/86/index");
var o = require("../1738/194");
var i = require("./1235/index");
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