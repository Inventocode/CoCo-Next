"use strict";

export { default as ImportInjector } from "./3083/index";
exports.addDefault = function (e, t, n) {
  return new r.default(e).addDefault(t, n);
};
exports.addNamed = function (e, t, n, i) {
  return new r.default(e).addNamed(t, n, i);
};
exports.addNamespace = function (e, t, n) {
  return new r.default(e).addNamespace(t, n);
};
exports.addSideEffect = function (e, t, n) {
  return new r.default(e).addSideEffect(t, n);
};
export { default as isModule } from "./2789";
import * as r from "./3083/index";
import * as i from "./2789";