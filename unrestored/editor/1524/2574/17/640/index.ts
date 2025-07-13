"use strict";

import * as r from "../../1000/93";
import * as i from "../../1000/134/index";
var o = (0, r.__importDefault)(require("./2092/index"));
var a = new i.Container();
exports.get_instance = function () {
  return a;
};
exports.bind_singleton = function (e, t) {
  a.rebind(e).to(t).inSingletonScope();
};
exports.lazy_inject = (0, o.default)(a).lazyInject;