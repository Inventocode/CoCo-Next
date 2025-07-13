"use strict";

import * as r from "../../../1000/93";
import * as i from "../../../125/259";
import * as o from "../../../1000/134/index";
import * as a from "../../../125/195/index";
import * as s from "../../../1000/213/index";
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n.type = a.BlockEventType.MOVE;
    var r = n._current_location();
    n.old_parent_id = r.parent_id;
    n.old_input_name = r.input_name;
    n.old_coordinate = r.coordinate;
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_new_loc = function () {
    return {
      parent_id: this.new_parent_id,
      input_name: this.new_input_name,
      coordinate: this.new_coordinate
    };
  };
  t.prototype._current_location = function () {
    var e = this.workspace_db.get(this._workspace_id);
    if (void 0 == e) {
      console.error("Event has no workspace.");
      return {};
    }
    var t = e.get_element_from_db(this._block_id);
    if (void 0 == t) {
      console.error("Event has no block.");
      return {};
    }
    var n = {};
    if ((0, s.is_block_svg)(t)) {
      var r = t.get_parent();
      if (r) {
        n.parent_id = r.id;
        var i = r.get_input_with_block(t);
        if (i) {
          n.input_name = i.name;
        }
      } else {
        n.coordinate = t.get_relative_to_surface_xy();
      }
    } else if ((0, s.is_workspace_comment)(t)) {
      n.coordinate = (0, s.clone_deep)(t.get_relative_position());
    }
    return n;
  };
  t.prototype.record_new = function () {
    var e = this._current_location();
    this.new_parent_id = e.parent_id;
    this.new_input_name = e.input_name;
    this.new_coordinate = e.coordinate;
  };
  t.prototype.is_null = function () {
    return this.old_parent_id === this.new_parent_id && this.old_input_name === this.new_input_name && (void 0 == this.old_coordinate && void 0 == this.new_coordinate || void 0 != this.old_coordinate && void 0 != this.new_coordinate && i.vec2.equals(this.old_coordinate, this.new_coordinate));
  };
  t.prototype.run = function (e) {
    var t = this;
    var n = this._get_event_workspace();
    var r = n.get_element_from_db(this._block_id);
    if (void 0 != r) {
      !function () {
        if ((0, s.is_block_svg)(r)) {
          var i = e ? t.new_parent_id : t.old_parent_id;
          if (i) {
            var o;
            var c = n.get_block_by_id(i);
            if (!c) {
              throw Error("Trying to re-connect to non-existent block. Event: " + t);
            }
            var u = r.output_connection || r.previous_connection;
            if (!u) {
              throw Error("\u6ca1\u6709\u5bf9\u5916\u8fde\u63a5\u8bb0\u5f55\u4e2a\ud83d\udd28\u7684\u8fde\u63a5\u4e8b\u4ef6");
            }
            var l = e ? t.new_input_name : t.old_input_name;
            if (l) {
              var f = c.get_input(l);
              o = f && f.connection;
            } else if (u.type === a.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
              o = c.next_connection;
            }
            if (void 0 != o) {
              r.unplug();
              return void u.connect(o, !0);
            }
            console.warn("Can't connect to non-existent input: " + l + ", so dispose this blockConnection");
            if (u) {
              t.events.disable();
              u.source_block.dispose();
              t.events.enable();
            }
          } else {
            r.unplug();
          }
        }
      }();
      (function () {
        var n;
        var o = e ? (0, s.clone_deep)(t.new_coordinate) : (0, s.clone_deep)(t.old_coordinate);
        if (o) {
          var a = r.get_relative_to_surface_xy();
          if ((0, s.is_workspace_comment)(r)) {
            var c = null === (n = r.get_parent_block()) || void 0 === n ? void 0 : n.get_relative_to_surface_xy();
            if (c) {
              i.vec2.add(o, c, o);
            }
          }
          r.move_by(i.vec2.sub(a, o, a));
        }
      })();
    } else if (!e) {
      console.warn("Can't move non-existent block: " + this._block_id);
    }
  };
  t.prototype.set_old_coord = function (e) {
    this.old_coordinate = e;
  };
  t.prototype.get_old_loc = function () {
    return {
      parent_id: this.old_parent_id,
      input_name: this.old_input_name,
      coordinate: this.old_coordinate
    };
  };
  t.prototype.serialize = function () {
    var e = this.old_coordinate ? [this.old_coordinate[0], this.old_coordinate[1]] : void 0;
    var t = this.new_coordinate ? [this.new_coordinate[0], this.new_coordinate[1]] : void 0;
    return {
      id: this._block_id,
      group: this._group,
      old_parent_id: this.old_parent_id,
      old_input_name: this.old_input_name,
      old_coordinate: e,
      new_parent_id: this.new_parent_id,
      new_input_name: this.new_input_name,
      new_coordinate: t
    };
  };
  t.prototype.deserialize = function (e) {
    this._block_id = e.id;
    this.old_parent_id = e.old_parent_id;
    this.old_input_name = e.old_input_name;
    this.old_coordinate = e.old_coordinate && i.vec2.fromValues(e.old_coordinate[0], e.old_coordinate[1]);
    this.new_parent_id = e.new_parent_id;
    this.new_input_name = e.new_input_name;
    this.new_coordinate = e.new_coordinate && i.vec2.fromValues(e.new_coordinate[0], e.new_coordinate[1]);
  };
  t.prototype.update_new_loc = function (e) {
    this.new_parent_id = e.parent_id;
    this.new_input_name = e.input_name;
    this.new_coordinate = e.coordinate;
  };
  return t = (0, r.__decorate)([(0, o.injectable)()], t);
}(require("./643").BlockEvent);
export { c as MoveEvent };