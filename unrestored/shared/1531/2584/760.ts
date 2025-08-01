"use strict";

var r = require("./683/34/index");
var o = require("./683/318");
var i = require("./683/517");
var a = require("./683/65");
i.a.prototype.set_flipped = function (e) {
  switch (e) {
    case "vertical":
      this.set_pixi_scale(this.scale.x, -1 * this.scale.y);
      return void (this.is_vertical_flipped = !this.is_vertical_flipped);
    case "horizontal":
      this.set_pixi_scale(-1 * this.scale.x, this.scale.y);
      return void (this.is_horizontal_flipped = !this.is_horizontal_flipped);
  }
};
i.a.prototype.set_scale = function (e, t) {
  var n = e;
  if (void 0 !== n) {
    n = Math.max(0, n);
    n = this.is_horizontal_flipped ? -1 * n : n;
  }
  var r = void 0 === t ? e : t;
  if (void 0 !== r) {
    r = Math.max(0, r);
    r = this.is_vertical_flipped ? -1 * r : r;
  }
  this.set_pixi_scale(n, r);
};
var s = o.a.prototype.drag_start_scale_btn;
o.a.prototype.drag_start_scale_btn = function (e) {
  this._old_actor_center = Object(a.l)(this.target) ? Object(a.d)(this.target, this.target.position) : this.target.get_pixi_position();
  var t = this.target.get_scale();
  var n = t.x;
  var r = t.y;
  this._old_actor_scale_ratio = n / r;
  return s.call(this, e);
};
o.a.prototype.drag_move_scale_btn = function (e) {
  if (this.target) {
    var t = Math.hypot(this.target.width / this.target.scale.x / 2, this.target.height / this.target.scale.y / 2);
    var n = this._old_actor_center;
    var r = (Math.hypot(e.x - n.x, e.y - n.y) - this.old_mouse_r) / t;
    var o = function (e) {
      var t = Math.max(Math.abs(e) + r, .01);
      return e < 0 ? -t : t;
    }(this.old_scale.x);
    var i = Math.abs(o / this._old_actor_scale_ratio);
    this.target.set_pixi_scale(o, i);
    this.value.text = "".concat(Math.round(100 * this.target.get_scale().x));
    if (Object(a.l)(this.target)) {
      this.events.fire("actor:update", {
        target_id: this.target.id,
        data: {
          scale: this.target.get_scale(),
          position: this.target.get_position()
        }
      });
    }
    this.events.fire("editor_scale_btn:drag_move", {
      target_id: this.target.id
    });
    this.app.render();
  }
};
var c = o.a.prototype.drag_start_rotate_btn;
o.a.prototype.drag_start_rotate_btn = function (e) {
  var t = this.editor.name && this.data.get_internal_actor(this.editor.name);
  if (t) {
    var n = c.call(this, e);
    this._old_actor_rotation = Object(a.u)(e.x - t.x, e.y - t.y);
    this._old_actor_pivot = new r.o(t.x, t.y);
    return n;
  }
};
o.a.prototype.drag_move_rotate_btn = function (e) {
  var t = this.editor.name && this.data.get_internal_actor(this.editor.name);
  if (t) {
    var n = Object(a.u)(e.x - this._old_actor_pivot.x, e.y - this._old_actor_pivot.y);
    var r = n - this._old_actor_rotation;
    this._old_actor_rotation = n;
    var o = Object(a.s)(-t.rotation - r);
    var i = t.is_rotation_flipped ? Object(a.s)(o + Math.PI) : o;
    t.set_rotation_value(i);
    t.set_pixi_rotation(-o);
    this.value.text = "".concat(Math.round(Object(a.v)(t.rotation_value)), "\xb0");
    this.events.fire("actor:update", {
      target_id: t.id,
      data: {
        rotation: t.rotation_value,
        position: t.get_position()
      }
    });
    this.events.fire("editor_rotate_btn:drag_move", {
      target_id: t.id
    });
    this.app.render();
  }
};