"use strict";

var r = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._assertUnremoved = function () {
  if (this.removed) {
    throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
  }
};
exports._callRemovalHooks = function () {
  var e;
  var t = r(i.hooks);
  try {
    for (t.s(); !(e = t.n()).done;) {
      if ((0, e.value)(this, this.parentPath)) {
        return !0;
      }
    }
  } catch (n) {
    t.e(n);
  } finally {
    t.f();
  }
};
exports._markRemoved = function () {
  this._traverseFlags |= s.SHOULD_SKIP | s.REMOVED;
  if (this.parent) {
    a.path.get(this.parent).delete(this.node);
  }
  this.node = null;
};
exports._remove = function () {
  if (Array.isArray(this.container)) {
    this.container.splice(this.key, 1);
    this.updateSiblingKeys(this.key, -1);
  } else {
    this._replaceWith(null);
  }
};
exports._removeFromScope = function () {
  var e = this;
  var t = this.getBindingIdentifiers();
  Object.keys(t).forEach(function (t) {
    return e.scope.removeBinding(t);
  });
};
exports.remove = function () {
  var e;
  this._assertUnremoved();
  this.resync();
  if (!(null != (e = this.opts) && e.noScope)) {
    this._removeFromScope();
  }
  if (this._callRemovalHooks()) {
    return void this._markRemoved();
  }
  this.shareCommentsWithSiblings();
  this._remove();
  this._markRemoved();
};
var i = require("./3084");
var a = require("../../2666");
var s = require("../index");