"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BaseEvent = void 0;
var r = require("../../../1001/93");
var i = require("../../../4/127");
var o = function () {
  function e() {
    this._workspace_id = "";
    this._group = this.events.get_group();
    this._record_undo = this.events.is_record_undo();
  }
  e.prototype.is_null = function () {
    return !1;
  };
  e.prototype._get_event_workspace = function () {
    var e = this.workspace_db.get(this._workspace_id);
    if (void 0 == e) {
      throw Error("Workspace is undefined. Event must have been generated from real Blockly events.");
    }
    return e;
  };
  e.prototype.is_record_undo = function () {
    return this._record_undo;
  };
  e.prototype.set_record_undo = function (e) {
    this._record_undo = e;
  };
  e.prototype.get_workspace_id = function () {
    return this._workspace_id;
  };
  e.prototype.set_workspace_id = function (e) {
    this._workspace_id = e;
  };
  e.prototype.get_block_id = function () {
    return this._block_id;
  };
  e.prototype.serialize = function () {};
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.xml)], e.prototype, "xml", void 0);
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.json)], e.prototype, "json", void 0);
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  return e;
}();
exports.BaseEvent = o;