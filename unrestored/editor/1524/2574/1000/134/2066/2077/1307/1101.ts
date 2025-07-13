"use strict";

import * as r from "./1100";
import * as i from "../../../1308";
var o = function () {
  function e(e) {
    this._binding = e;
  }
  e.prototype.when = function (e) {
    this._binding.constraint = e;
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenTargetNamed = function (e) {
    this._binding.constraint = i.namedConstraint(e);
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenTargetIsDefault = function () {
    this._binding.constraint = function (e) {
      return null !== e.target && !e.target.isNamed() && !e.target.isTagged();
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenTargetTagged = function (e, t) {
    this._binding.constraint = i.taggedConstraint(e)(t);
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenInjectedInto = function (e) {
    this._binding.constraint = function (t) {
      return i.typeConstraint(e)(t.parentRequest);
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenParentNamed = function (e) {
    this._binding.constraint = function (t) {
      return i.namedConstraint(e)(t.parentRequest);
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenParentTagged = function (e, t) {
    this._binding.constraint = function (n) {
      return i.taggedConstraint(e)(t)(n.parentRequest);
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenAnyAncestorIs = function (e) {
    this._binding.constraint = function (t) {
      return i.traverseAncerstors(t, i.typeConstraint(e));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenNoAncestorIs = function (e) {
    this._binding.constraint = function (t) {
      return !i.traverseAncerstors(t, i.typeConstraint(e));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenAnyAncestorNamed = function (e) {
    this._binding.constraint = function (t) {
      return i.traverseAncerstors(t, i.namedConstraint(e));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenNoAncestorNamed = function (e) {
    this._binding.constraint = function (t) {
      return !i.traverseAncerstors(t, i.namedConstraint(e));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenAnyAncestorTagged = function (e, t) {
    this._binding.constraint = function (n) {
      return i.traverseAncerstors(n, i.taggedConstraint(e)(t));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenNoAncestorTagged = function (e, t) {
    this._binding.constraint = function (n) {
      return !i.traverseAncerstors(n, i.taggedConstraint(e)(t));
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenAnyAncestorMatches = function (e) {
    this._binding.constraint = function (t) {
      return i.traverseAncerstors(t, e);
    };
    return new r.BindingOnSyntax(this._binding);
  };
  e.prototype.whenNoAncestorMatches = function (e) {
    this._binding.constraint = function (t) {
      return !i.traverseAncerstors(t, e);
    };
    return new r.BindingOnSyntax(this._binding);
  };
  return e;
}();
export { o as BindingWhenSyntax };