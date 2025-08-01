"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ChangeEvent = void 0;
var r = require("../../../1001/93");
var i = require("../../../1001/134/index");
var o = require("../../../125/195/index");
var a = require("../../../1001/213/index");
var s = function (e) {
  function t(t, n) {
    var r = e.call(this, n.block) || this;
    r.type = o.BlockEventType.CHANGE;
    r.element = t;
    r._data = {
      block: n.block,
      name: n.name,
      old_value: n.old_value,
      new_value: n.new_value
    };
    if ((0, a.is_block_svg)(n.block)) {
      if (r.is("mutation", r._data) || r.is("change_procedure_param", r._data)) {
        r._new_json = r.json.block_to_json(n.block);
        return r;
      }
      if (r.is("comment", r._data) && "string" === typeof r._data.new_value) {
        var i = r._get_event_workspace().workspace_comment_db.get(r._data.new_value);
        if (i) {
          r._comment_json = r.json.comment_to_json(i);
        }
      }
    }
    return r;
  }
  (0, r.__extends)(t, e);
  t.prototype.is = function (e, t) {
    return this.element === e && !!t;
  };
  t.prototype.is_null = function () {
    return this._data.old_value == this._data.new_value;
  };
  t.prototype.run = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var s;
    var c = this._get_event_workspace();
    var u = c.get_element_from_db(this._block_id);
    if (u) {
      if ((0, a.is_workspace_comment)(u)) {
        if (this.is("comment_text", this._data)) {
          u.set_text(e ? this._data.new_value : this._data.old_value);
        } else if (this.is("comment_color", this._data)) {
          u.set_color_theme(e ? this._data.new_value : this._data.old_value);
        } else if (this.is("comment_expand", this._data)) {
          u.set_expanded(e ? this._data.new_value : this._data.old_value);
        } else if (this.is("comment_resize", this._data)) {
          var l = e ? this._data.new_value : this._data.old_value;
          u.set_bubble_size(l[0], l[1]);
        } else {
          console.warn("Unknown change type: " + this.element);
        }
      } else if ((0, a.is_block_svg)(u)) {
        if (this.is("field", this._data)) {
          var f = this._data;
          var d = f.name;
          var h = f.new_value;
          var p = f.old_value;
          l = e ? h : p;
          if (void 0 != d && (s = u.get_field(String(d)))) {
            s.call_validator(l);
            s.set_value(l, !0);
          }
        } else if (this.is("field_default_value", this._data)) {
          var _ = this._data;
          var A = _.name;
          h = _.new_value;
          p = _.old_value;
          l = e ? h : p;
          if (void 0 != A && (s = u.get_field(String(A))) && (0, a.is_field_default_value)(s)) {
            s.set_has_been_edited(l);
          }
        } else if (this.is("comment", this._data)) {
          var g = this._data;
          h = g.new_value;
          p = g.old_value;
          switch (typeof (l = e ? h : p)) {
            case "string":
              u.set_comment_text("", l);
              if (u.comment) {
                u.comment.set_expanded(!0);
                u.comment.init_svg();
              }
              break;
            case "undefined":
              u.set_comment_text(void 0);
              break;
            default:
              var v = void 0,
                m = parseFloat(l.getAttribute("relativeleft_") || ""),
                y = parseFloat(l.getAttribute("relativetop_") || "");
              if (!(isNaN(m) || isNaN(y))) {
                v = {
                  x: m,
                  y: y
                };
              }
              u.set_comment_text("", l.getAttribute("id") || void 0, v);
              this.xml.parse_comment_attributes(l, u.comment);
              if (u.comment) {
                u.comment.init_svg();
              }
          }
        } else if (this.is("collapsed", this._data)) {
          u.set_collapsed(e ? this._data.new_value : this._data.old_value, !0);
        } else if (this.is("disabled", this._data)) {
          u.set_disabled(e ? this._data.new_value : this._data.old_value);
        } else if (this.is("inline", this._data)) {
          u.set_inputs_inline(e ? this._data.new_value : this._data.old_value);
        } else if (this.is("mutation", this._data)) {
          p = e ? this._data.old_value : this._data.new_value;
          if ("undefined" !== typeof (h = e ? this._data.new_value : this._data.old_value)) {
            if (!(null === (t = u.addMutation) || void 0 === t)) {
              t.call(u, h, null === (n = this._data.name) || void 0 === n ? void 0 : n.toString());
            }
          } else {
            if ("undefined" !== typeof p) {
              if (!(null === (r = u.removeMutation) || void 0 === r)) {
                r.call(u, p, null === (i = this._data.name) || void 0 === i ? void 0 : i.toString());
              }
            }
          }
        } else if (this.is("visibility", this._data)) {
          u.set_chunk_visibility(e ? this._data.new_value : this._data.old_value);
          u.update_chunk_visibility();
        } else if (this.is("group_block", this._data)) {
          var b = this._data;
          h = b.new_value;
          p = b.old_value;
          if (l = e ? h : p) {
            var w = l[0];
            var E = l[1];
            var x = l[2];
            u.hide_into_group(E, {
              id: w,
              group_stop_at: x
            });
          } else if (!(null === (o = u.parent_group) || void 0 === o)) {
            o.release();
          }
        } else {
          var C = c.get_change_event(this.element);
          if (C) {
            C.call(this, e);
          } else {
            console.warn("Unknown change type: " + this.element);
          }
        }
      }
    }
  };
  t.prototype.get_name = function () {
    return this._data.name;
  };
  t.prototype.get_new_value = function () {
    return this._data.new_value;
  };
  t.prototype.get_old_value = function () {
    return this._data.old_value;
  };
  t.prototype.update_new_value = function (e) {
    this._data.new_value = e;
  };
  t.prototype.serialize = function () {
    return {
      id: this._block_id,
      group: this._group,
      element: this.element,
      old_value: this._data.old_value,
      new_value: this._data.new_value,
      name: this._data.name
    };
  };
  t.prototype.get_new_comment = function () {
    return this._comment_json;
  };
  t.prototype.get_new_json = function () {
    return this._new_json;
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
exports.ChangeEvent = s;