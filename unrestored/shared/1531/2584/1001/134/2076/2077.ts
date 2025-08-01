"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Binding = void 0;
var r = require("../578");
var i = require("../713");
var o = function () {
  function e(e, t) {
    this.id = i.id();
    this.activated = !1;
    this.serviceIdentifier = e;
    this.scope = t;
    this.type = r.BindingTypeEnum.Invalid;
    this.constraint = function (e) {
      return !0;
    };
    this.implementationType = null;
    this.cache = null;
    this.factory = null;
    this.provider = null;
    this.onActivation = null;
    this.dynamicValue = null;
  }
  e.prototype.clone = function () {
    var t = new e(this.serviceIdentifier, this.scope);
    t.activated = t.scope === r.BindingScopeEnum.Singleton && this.activated;
    t.implementationType = this.implementationType;
    t.dynamicValue = this.dynamicValue;
    t.scope = this.scope;
    t.type = this.type;
    t.factory = this.factory;
    t.provider = this.provider;
    t.constraint = this.constraint;
    t.onActivation = this.onActivation;
    t.cache = this.cache;
    return t;
  };
  return e;
}();
exports.Binding = o;