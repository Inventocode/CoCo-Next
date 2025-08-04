"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.InsertionMarkerManager = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("../../4/127");
var a = require("../../125/195/index");
var s = function () {
  function e() {
    this.top_block = void 0;
    this._workspace = void 0;
    this.last_on_stack = void 0;
    this.last_marker = void 0;
    this.closest_connection = void 0;
    this.first_marker = void 0;
    this.local_connection = void 0;
    this.would_delete_block_ = !1;
    this.marker_connection = void 0;
    this.highlighting_block = !1;
    this.highlighted_block = void 0;
    this._available_connections = [];
  }
  e.prototype.init = function (e) {
    this.runtime_data.selected = e;
    this.top_block = e;
    this._workspace = e.get_workspace();
    if (!this.top_block.output_connection) {
      this.first_marker = this.create_marker_block(this.top_block);
    }
    this._available_connections = this._init_available_connections(e);
  };
  e.prototype.create_marker_block = function (e) {
    var t;
    var n = e.type;
    this.events.disable();
    try {
      if (void 0 == this._workspace) {
        throw new ReferenceError("Trying to create marker before init the insertion marker manager.");
      }
      (t = this.block_factory({
        prototype_name: n,
        workspace: this._workspace,
        is_insertion_marker: !0
      })).set_insertion_marker(!0);
      if (0 === t.inputList.length) {
        t.appendDummyInput();
      }
      t.init_svg();
    } finally {
      this.events.enable();
    }
    return t;
  };
  e.prototype.would_delete_block = function () {
    return this.would_delete_block_;
  };
  e.prototype._init_available_connections = function (e) {
    var t = e.get_connections(!1);
    var n = e.last_connection_in_stack();
    if (n) {
      t.push(n);
      this.last_on_stack = n;
      this.last_marker = this.create_marker_block(n.get_source_block());
    }
    return t.filter(function (e) {
      return e.in_db;
    });
  };
  e.prototype.get_start_radius = function () {
    return this.closest_connection && this.local_connection ? this.theme.blink_params.CONNECTING_SNAP_RADIUS : this.theme.blink_params.SNAP_RADIUS;
  };
  e.prototype._get_candidate = function (e) {
    for (var t = this.get_start_radius(), n = void 0, r = void 0, i = 0; i < this._available_connections.length; i++) {
      var o = this._available_connections[i];
      var a = o.closest(t, e);
      if (a.connection) {
        n = a.connection;
        r = o;
        t = a.radius;
      }
    }
    return {
      closest: n,
      local: r,
      radius: t
    };
  };
  e.prototype.should_delete = function (e, t) {
    if (void 0 == this.top_block) {
      throw new ReferenceError("Deleting block not found.");
    }
    var n = e && !!e.closest && t !== a.DeleteArea.DELETE_AREA_TOOLBOX;
    return !!t && !this.top_block.get_parent() && this.top_block.is_deletable() && !n;
  };
  e.prototype.should_update_previews = function (e, t) {
    var n = e.local;
    var r = e.closest;
    var i = e.radius;
    if (!n || !r) {
      return !(!this.local_connection || !this.closest_connection);
    }
    if (n.type === a.CONNECTION_TYPE.OUTPUT_VALUE) {
      return !0;
    }
    if (this.local_connection && this.closest_connection) {
      if (this.closest_connection == r) {
        return !1;
      }
      var o = this.local_connection.get_xy()[0] + t[0] - this.closest_connection.get_xy()[0];
      var s = this.local_connection.get_xy()[1] + t[1] - this.closest_connection.get_xy()[1];
      var c = Math.sqrt(o * o + s * s);
      return !(r && i > c - this.theme.blink_params.CURRENT_CONNECTION_PREFERENCE);
    }
    return !this.local_connection && !this.closest_connection || (console.error("Only one of localConnection_ and closestConnection_ was set."), console.error("Returning true from shouldUpdatePreviews, but it's not clear why."), !0);
  };
  e.prototype.unhighlight_block = function () {
    var e = this.closest_connection;
    var t = this.highlighted_block;
    if (void 0 == e || void 0 == t) {
      throw new ReferenceError("Connection not found for unhighlight.");
    }
    t.highlight_for_replacement(!1);
    this.highlighted_block = void 0;
    this.highlighting_block = !1;
  };
  e.prototype.disconnect_marker = function () {
    if (this.marker_connection) {
      var e = this.marker_connection;
      var t = e.get_source_block();
      var n = t.next_connection;
      var r = t.previous_connection;
      if (e != n || r && r.get_targe_connection()) {
        if (e.type == a.CONNECTION_TYPE.NEXT_STATEMENT && e != n) {
          var i = e.get_targe_connection();
          if (void 0 == i) {
            throw new ReferenceError("Connection not found when disconnect marker.");
          }
          i.get_source_block().unplug(!1);
          var o = r ? r.get_targe_connection() : void 0;
          t.unplug(!0);
          if (o) {
            o.connect(i);
          }
        } else {
          t.unplug(!0);
        }
      } else {
        var s = e.targetBlock();
        if (void 0 == s) {
          throw new ReferenceError("Target block not found when disconnect marger.");
        }
        s.unplug(!1);
      }
      if (e.get_targe_connection()) {
        throw new Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
      }
      this.marker_connection = void 0;
      var c = t.get_svg_root();
      if (void 0 != c) {
        c.setAttribute("visibility", "hidden");
      }
    }
  };
  e.prototype.hide_preview = function () {
    if (this.highlighting_block) {
      this.unhighlight_block();
    } else {
      if (this.marker_connection) {
        this.disconnect_marker();
      }
    }
  };
  e.prototype.maybe_hide_preview = function (e) {
    if (!e.closest) {
      this.hide_preview();
    }
    var t = this.closest_connection && this.local_connection;
    var n = this.closest_connection != e.closest;
    var r = this.local_connection != e.local;
    if (t && (n || r || this.would_delete_block_)) {
      this.hide_preview();
    }
    this.marker_connection = void 0;
    this.closest_connection = void 0;
    this.local_connection = void 0;
  };
  e.prototype.should_replace = function () {
    var e = this.closest_connection;
    var t = this.local_connection;
    if (void 0 == t) {
      throw new ReferenceError("Local connection not found when trying replace/insert block.");
    }
    if (void 0 == this.top_block) {
      throw new ReferenceError("Block not found when trying replace/insert block.");
    }
    return t.type == a.CONNECTION_TYPE.OUTPUT_VALUE || t != t.get_source_block().get_first_statement_connection() && !(this.top_block.next_connection || t.type != a.CONNECTION_TYPE.PREVIOUS_STATEMENT || void 0 == e || !e.is_connected());
  };
  e.prototype.highlight_block = function () {
    var e = this.closest_connection;
    var t = this.local_connection;
    if (void 0 != e && void 0 != t) {
      var n = e.targetBlock();
      if (n) {
        this.highlighted_block = n;
        n.highlight_for_replacement(!0);
      }
      this.highlighting_block = !0;
    }
  };
  e.prototype.connect_marker = function () {
    var e = this.local_connection;
    var t = this.closest_connection;
    if (void 0 != t) {
      var n = this.last_on_stack && e == this.last_on_stack ? this.last_marker : this.first_marker;
      if (void 0 != n && void 0 != e) {
        var r = n.get_matching_connection(e.get_source_block(), e);
        if (void 0 != r) {
          if (r == this.marker_connection) {
            throw new Error("Made it to connect_marker even though the marker isn't changing");
          }
          n.render();
          var i = n.get_svg_root();
          if (void 0 != i) {
            i.setAttribute("visibility", "visible");
          }
          n.position_new_block(n, r, t);
          r.connect(t);
          this.marker_connection = r;
        }
      }
    }
  };
  e.prototype.show_preview = function () {
    if (this.should_replace()) {
      this.highlight_block();
    } else {
      this.connect_marker();
    }
  };
  e.prototype.maybe_show_preview = function (e) {
    if (!this.would_delete_block_) {
      var t = e.closest;
      var n = e.local;
      if (t) {
        if (!(t == this.closest_connection || t.source_block.is_insertion_marker())) {
          this.closest_connection = t;
          this.local_connection = n;
          this.show_preview();
        }
      }
    }
  };
  e.prototype.update = function (e, t) {
    var n = this._get_candidate(e);
    this.would_delete_block_ = this.should_delete(n, t);
    if (this.would_delete_block_ || this.should_update_previews(n, e)) {
      this.events.disable();
      this.maybe_hide_preview(n);
      this.maybe_show_preview(n);
      this.events.enable();
    }
  };
  e.prototype.apply_connections = function () {
    var e;
    var t;
    if (void 0 == this.top_block) {
      throw new ReferenceError("Top block not found when applying connections.");
    }
    if (this.highlighting_block && this.highlighted_block) {
      this.closest_connection = (null === (e = this.highlighted_block.output_connection) || void 0 === e ? void 0 : e.target_connection) || (null === (t = this.highlighted_block.previous_connection) || void 0 === t ? void 0 : t.target_connection);
    } else {
      if (this.marker_connection) {
        this.closest_connection = this.marker_connection.target_connection;
      }
    }
    if (this.closest_connection) {
      this.events.disable();
      this.hide_preview();
      this.events.enable();
      if (this.local_connection) {
        this.local_connection.connect(this.closest_connection);
      }
      if (this.top_block.is_rendered()) {
        if (this.local_connection) {
          var n = this.local_connection.is_superior() ? this.closest_connection : this.local_connection;
          this.block_animations.connection_ui_effect(n.get_source_block());
        }
        this.top_block.get_root_block().bring_to_front();
      }
      return !0;
    }
    return !1;
  };
  e.prototype.dispose = function () {
    this.top_block = void 0;
    this._workspace = void 0;
    this._available_connections.length = 0;
    this.closest_connection = void 0;
    this.local_connection = void 0;
    this.events.disable();
    try {
      if (this.first_marker) {
        this.first_marker.dispose();
        this.first_marker = void 0;
      }
      if (this.last_marker) {
        this.last_marker.dispose();
        this.last_marker = void 0;
      }
    } finally {
      this.events.enable();
    }
    this.highlighted_block = void 0;
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.BlockSvg)], e.prototype, "block_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.InsertionMarkerManager = s;