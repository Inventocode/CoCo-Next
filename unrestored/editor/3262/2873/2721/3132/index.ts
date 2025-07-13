"use strict";

export { default as ImportInjector } from "./3133/index";
exports.addDefault = function (e, t, n) {
  return new r.default(e).addDefault(t, n);
};
exports.addNamed = function (e, t, n, a) {
  return new r.default(e).addNamed(t, n, a);
};
exports.addNamespace = function (e, t, n) {
  return new r.default(e).addNamespace(t, n);
};
exports.addSideEffect = function (e, t, n) {
  return new r.default(e).addSideEffect(t, n);
};
export { default as isModule } from "./2827";
import * as r from "./3133/index";
import * as a from "./2827";