"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.lazy_inject = exports.bind_singleton = exports.get_instance = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = (0, r.__importDefault)(require("./2102/index"));
var a = new i.Container();
exports.get_instance = function () {
  return a;
};
exports.bind_singleton = function (e, t) {
  a.rebind(e).to(t).inSingletonScope();
};
exports.lazy_inject = (0, o.default)(a).lazyInject;