"use strict";

import * as r from "./715";
var i = function (e) {
  this.id = r.id();
  this.registry = e;
};
export { i as ContainerModule };
var o = function (e) {
  this.id = r.id();
  this.registry = e;
};
export { o as AsyncContainerModule };