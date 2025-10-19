/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2134
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggedConnectionManager = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../4/127");
var a = require("../../125/195/index");
var s = function () {
  function e() {
    this.top_block = undefined;
    this._workspace = undefined;
    this.local_connection = undefined;
    this.would_delete_block_ = false;
    this._available_connections = [];
    this.closest_connection = undefined;
    this.radius_connection = 0;
  }
  e.prototype.would_delete_block = function () {
    return this.would_delete_block_;
  };
  e.prototype.init = function (e) {
    this.runtime_data.selected = e;
    this.top_block = e;
    this._workspace = e.get_workspace();
    this._available_connections = this._init_available_connections(e);
  };
  e.prototype.dispose = function () {
    this.top_block = undefined;
    this._workspace = undefined;
    this._available_connections.length = 0;
    this.closest_connection = undefined;
    this.local_connection = undefined;
  };
  e.prototype.apply_connections = function () {
    if (this.closest_connection && this.local_connection) {
      this.local_connection.connect(this.closest_connection);
      if (this.top_block && this.top_block.rendered) {
        var e = this.local_connection.is_superior() ? this.closest_connection : this.local_connection;
        this.block_animations.connection_ui_effect(e.get_source_block());
        this.connection_effect();
      }
      this.remove_highlighting();
    }
  };
  e.prototype.connection_effect = function () {};
  e.prototype.disconnection_effect = function () {};
  e.prototype.update = function (e, t) {
    var n = this.closest_connection;
    var r = this.update_closest(e);
    if (r && n) {
      n.unhighlight();
    }
    var i = !!this.closest_connection && t != a.DeleteArea.DELETE_AREA_TOOLBOX;
    if (this.top_block) {
      var o = !!t && !this.top_block.get_parent() && this.top_block.is_deletable();
      this.would_delete_block_ = o && !i;
    }
    if (!this.would_delete_block_ && r && this.closest_connection) {
      this.add_highlighting();
    }
  };
  e.prototype.remove_highlighting = function () {
    if (this.closest_connection) {
      this.closest_connection.unhighlight();
    }
  };
  e.prototype.add_highlighting = function () {
    if (this.closest_connection) {
      this.closest_connection.highlight();
    }
  };
  e.prototype._init_available_connections = function (e) {
    var t = e.get_connections(false);
    var n = e.last_connection_in_stack();
    if (n && n != e.next_connection) {
      t.push(n);
    }
    return t.filter(function (e) {
      return e.in_db;
    });
  };
  e.prototype.update_closest = function (e) {
    var t = this.closest_connection;
    this.closest_connection = undefined;
    this.local_connection = undefined;
    this.radius_connection = this.theme.blink_params.SNAP_RADIUS;
    for (var n = 0; n < this._available_connections.length; n++) {
      var r = this._available_connections[n];
      var i = r.closest(this.radius_connection, e);
      if (i.connection) {
        this.closest_connection = i.connection;
        this.local_connection = r;
        this.radius_connection = i.radius;
      }
    }
    return t != this.closest_connection;
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.DraggedConnectionManager = s;