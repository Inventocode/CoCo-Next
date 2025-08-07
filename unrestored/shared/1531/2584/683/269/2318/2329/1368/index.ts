"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./1136");
var i = require("./1137");
var o = function () {
  function e(e) {
    this._binding = e;
    this._bindingWhenSyntax = new i.BindingWhenSyntax(this._binding);
    this._bindingOnSyntax = new r.BindingOnSyntax(this._binding);
  }
  e.prototype.when = function (e) {
    return this._bindingWhenSyntax.when(e);
  };
  e.prototype.whenTargetNamed = function (e) {
    return this._bindingWhenSyntax.whenTargetNamed(e);
  };
  e.prototype.whenTargetIsDefault = function () {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };
  e.prototype.whenTargetTagged = function (e, t) {
    return this._bindingWhenSyntax.whenTargetTagged(e, t);
  };
  e.prototype.whenInjectedInto = function (e) {
    return this._bindingWhenSyntax.whenInjectedInto(e);
  };
  e.prototype.whenParentNamed = function (e) {
    return this._bindingWhenSyntax.whenParentNamed(e);
  };
  e.prototype.whenParentTagged = function (e, t) {
    return this._bindingWhenSyntax.whenParentTagged(e, t);
  };
  e.prototype.whenAnyAncestorIs = function (e) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(e);
  };
  e.prototype.whenNoAncestorIs = function (e) {
    return this._bindingWhenSyntax.whenNoAncestorIs(e);
  };
  e.prototype.whenAnyAncestorNamed = function (e) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(e);
  };
  e.prototype.whenAnyAncestorTagged = function (e, t) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t);
  };
  e.prototype.whenNoAncestorNamed = function (e) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(e);
  };
  e.prototype.whenNoAncestorTagged = function (e, t) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(e, t);
  };
  e.prototype.whenAnyAncestorMatches = function (e) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(e);
  };
  e.prototype.whenNoAncestorMatches = function (e) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(e);
  };
  e.prototype.onActivation = function (e) {
    return this._bindingOnSyntax.onActivation(e);
  };
  return e;
}();
exports.BindingWhenOnSyntax = o;