"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./2093");
exports.default = function (e, t) {
  if (void 0 === t) {
    t = !0;
  }
  return {
    lazyInject: r.makePropertyInjectDecorator(e, t),
    lazyInjectNamed: r.makePropertyInjectNamedDecorator(e, t),
    lazyInjectTagged: r.makePropertyInjectTaggedDecorator(e, t),
    lazyMultiInject: r.makePropertyMultiInjectDecorator(e, t)
  };
};