var r = require("../1623/86");
var o = require("../1736/194");
var i = require("./1238/index");
var a = require("./750");
var s = o.process;
r({
  global: true,
  enumerable: true,
  noTargetGet: true
}, {
  queueMicrotask: function (e) {
    var t = a && s.domain;
    i(t ? t.bind(e) : e);
  }
});