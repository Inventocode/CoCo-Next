"use strict";

import * as r from "../../220";
export default (function e(t, n, i) {
  r(this, e);
  this.key = void 0;
  this.manipulateOptions = void 0;
  this.post = void 0;
  this.pre = void 0;
  this.visitor = void 0;
  this.parserOverride = void 0;
  this.generatorOverride = void 0;
  this.options = void 0;
  this.key = t.name || i;
  this.manipulateOptions = t.manipulateOptions;
  this.post = t.post;
  this.pre = t.pre;
  this.visitor = t.visitor || {};
  this.parserOverride = t.parserOverride;
  this.generatorOverride = t.generatorOverride;
  this.options = n;
});