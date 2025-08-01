"use strict";

export { l as a };
var r = require("./34/index");
var i = require("./122");
var o = require("./65");
var a = require("./128");
var s = require("./467");
var c = {
  fontFamily: ["NotoSansCJKsc-Medium", "NotoSansCJKsc"],
  fontSize: "19px",
  fill: 16777215,
  align: "center",
  fontWeight: "500"
};
var u = {
  default: {
    shadow_line_w: 1,
    shadow_color: 2171686,
    shadow_alpha: .3,
    inner_r: 6,
    color: 16777215,
    alpha: 1
  },
  active: {
    out_line_w: 3,
    shadow_line_w: 1,
    shadow_color: 2171686,
    shadow_alpha: .3,
    inner_r: 6,
    color: 16777215,
    alpha: 1
  },
  hover: {
    out_line_w: 4,
    shadow_line_w: 2.5,
    shadow_color: 2171686,
    shadow_alpha: .3,
    inner_r: 8,
    color: 16777215,
    alpha: 1
  }
};
var l = function () {
  function e(e, t, n, i, u) {
    var l = this;
    this.is_in_pivot_mode = !1;
    this.is_dragging_scale_btn = !1;
    this.old_scale = new r.o();
    this.old_mouse_r = 0;
    this.is_dragging_rotate_btn = !1;
    this.old_mouse_rotation = 0;
    this.old_position = new r.o();
    this.old_rotate_center_pos = new r.o();
    this.is_dragging_rotate_center = !1;
    this.old_mouse_pos = new r.o();
    this.is_dragging_actor = !1;
    this.is_mouse_in = !1;
    this.BTN_SIZE = 32;
    this.MIN_EDITOR_BOX = 54;
    this.DISPLAY_WIDTH = 51;
    this.DISPLAY_HEIGHT = 35;
    this.DISPLAY_RADIUS = 6;
    this.DISPLAY_OFFSET = 15;
    this.ROTATION_CENTER_HIT_SIZE = 51;
    this.set_parent = function (e) {
      l.editor.setParent(e);
    };
    this.on_actor_change = function (e) {
      if (l.target && Object(o.l)(l.target)) {
        if (void 0 !== e.visible) {
          l.editor.visible = e.visible;
        }
        if (void 0 !== e.rotation || e.scale || e.texture) {
          l.draw_editor(l.target);
        } else {
          if (e.position || e.pivot) {
            l.update_editor_position(l.target);
          }
        }
      }
    };
    this.on_video_change = function (e) {
      if (l.target && Object(s.b)(l.target)) {
        if (void 0 === e.visible) {
          if (e.scale) {
            l.draw_editor(l.target);
          } else {
            if (e.position) {
              l.update_editor_position(l.target);
            }
          }
        } else {
          l.editor.visible = e.visible;
        }
      }
    };
    this.on_target_destroy = function () {
      l.hide();
    };
    this.drag_start = function (e) {
      if (l.editor.name) {
        if (l.is_in_pivot_mode) {
          if (e.target && e.target.name === a.b.ROTATION_CENTER) {
            l.drag_start_rotate_center(e);
          }
        } else {
          var t = e.data.getLocalPosition(l.app.get_app().stage);
          var n = e.data.getLocalPosition(l.hover_container);
          switch (e.target.name) {
            case a.b.SCALE_BTN:
              l.set_btn_drag_start_status("cursor_scale", n);
              return void l.drag_start_scale_btn(t);
            case a.b.ROTATE_BTN:
              l.set_btn_drag_start_status("cursor_rotate", n);
              return void l.drag_start_rotate_btn(t);
            case a.b.MENU_BTN:
              return void l.events.fire("editor_menu_btn:selected", {
                target_id: l.editor.name,
                data: {
                  position: {
                    x: t.x,
                    y: -t.y
                  }
                }
              });
            case a.b.BORDER_LINE:
              return void (l.target && l.target.drag_start(e));
          }
          var r = l.get_hit_target(e);
          if (r) {
            r.drag_start(e);
          }
        }
      }
    };
    this.set_cursor_when_hover = function (e) {
      if (!l.is_dragging_rotate_btn && !l.is_dragging_scale_btn) {
        if (e.target && (e.target.name === a.b.ROTATE_BTN || e.target.name === a.b.SCALE_BTN)) {
          var t = e.data.getLocalPosition(l.hover_container);
          switch (e.target.name) {
            case a.b.ROTATE_BTN:
              l.cursor_rotate.visible = !0;
              l.cursor_rotate.position.set(t.x, t.y);
              return void l.app.render();
            case a.b.SCALE_BTN:
              l.cursor_scale.visible = !0;
              l.cursor_scale.position.set(t.x, t.y);
              return void l.app.render();
            default:
              return;
          }
        }
        if (l.cursor_scale.visible || l.cursor_rotate.visible) {
          l.cursor_scale.visible = !1;
          l.cursor_rotate.visible = !1;
          l.app.render();
        }
      }
    };
    this.drag_move = function (e) {
      if (l.check_mouse_pos_is_in_stage(e)) {
        if (!l.is_in_pivot_mode) {
          var t = e.data.getLocalPosition(l.app.get_app().stage);
          var n = e.data.getLocalPosition(l.hover_container);
          return l.is_dragging_scale_btn ? (l.cursor_scale.position.set(n.x, n.y), l.update_value_bar(n), void l.drag_move_scale_btn(t)) : l.is_dragging_rotate_btn ? (l.cursor_rotate.position.set(n.x, n.y), l.update_value_bar(n), void l.drag_move_rotate_btn(t)) : void (l.target && l.target.drag_move());
        }
        if (l.is_dragging_rotate_center) {
          l.drag_move_rotate_center(e);
        }
      }
    };
    this.drag_end = function (e) {
      if (l.target) {
        if (Object(o.l)(l.target)) {
          if (l.is_in_pivot_mode) {
            if (l.is_dragging_rotate_center) {
              l.is_dragging_rotate_center = !1;
              var t = l.app.get_app().stage.toLocal(l.rotation_center.position, l.editor);
              l.target.set_pivot_by_stage_point(t.x, -t.y);
              l.events.fire("editor_rotation_center:drag_end", {
                target_id: l.target.id
              });
              l.app.render();
            }
            return;
          }
          if (l.is_dragging_rotate_btn) {
            l.is_dragging_rotate_btn = !1;
            l.set_btn_drag_end_status("cursor_rotate", e);
            l.target.set_rotation(l.target.rotation_value);
            l.events.fire("actor:update", {
              target_id: l.target.id,
              data: {
                rotation: l.target.get_rotation(),
                position: l.target.get_position()
              }
            });
            l.events.fire("editor_rotate_btn:drag_end", {
              target_id: l.target.id
            });
            return void l.app.render();
          }
        }
        if (l.is_dragging_scale_btn) {
          l.is_dragging_scale_btn = !1;
          l.set_btn_drag_end_status("cursor_scale", e);
          if (Object(o.l)(l.target)) {
            l.events.fire("actor:update", {
              target_id: l.target.id,
              data: {
                scale: l.target.get_scale(),
                position: l.target.get_position()
              }
            });
          }
          if (Object(s.b)(l.target)) {
            l.events.fire("video_scale_btn:drag_end", {
              target_id: l.target.id,
              data: {
                scale: l.target.get_scale(),
                size: l.target.get_size()
              }
            });
          }
          l.events.fire("editor_scale_btn:drag_end", {
            target_id: l.target.id
          });
          return void l.app.render();
        }
        l.target.drag_end(e);
      }
    };
    this.on_mouse_in = function () {
      l.is_mouse_in = !0;
    };
    this.on_mouse_move_fake_actor_over_out = function (e) {
      if (!(!l.is_mouse_in || l.is_in_pivot_mode || l.is_dragging_actor || l.is_dragging_scale_btn || l.is_dragging_rotate_btn)) {
        if (!e.target || e.target.name !== a.b.BORDER_LINE && e.target.name !== a.b.MENU_BTN && e.target.name !== a.b.ROTATE_BTN && e.target.name !== a.b.SCALE_BTN && e.target.name !== a.b.ROTATION_CENTER) {
          var t;
          var n = l.app.get_interaction_manager().hitTest(e.data.global, l.app.get_scene_container());
          if (Object(o.l)(n)) {
            t = l.data.get_internal_actor(n.id);
          }
          var r = t === l.target;
          if ((!t || r) && l.mouseover_target_id) {
            l.events.fire("actor:mouseout", {
              target_id: l.mouseover_target_id
            });
            return void (l.mouseover_target_id = void 0);
          }
          if (t && !r && l.mouseover_target_id !== t.id) {
            l.events.fire("actor:mouseover", {
              target_id: t.id
            });
            l.mouseover_target_id = t.id;
          }
        } else if (l.mouseover_target_id) {
          l.events.fire("actor:mouseout", {
            target_id: l.mouseover_target_id
          });
          l.mouseover_target_id = void 0;
        }
      }
    };
    this.on_mouse_out = function () {
      l.is_mouse_in = !1;
      l.mouseover_target_id = void 0;
    };
    this.on_actor_drag_start = function (e) {
      l.is_dragging_actor = !0;
    };
    this.on_actor_drag_end = function (e) {
      l.is_dragging_actor = !1;
    };
    this.on_right_click = function () {
      if (l.target) {
        l.events.fire("editor:rightclick", {
          target_id: l.target.id
        });
      }
    };
    this.on_break = function (e) {
      var t;
      if (!(e && e !== (null === (t = l.target) || void 0 === t ? void 0 : t.id))) {
        if (l.is_in_pivot_mode) {
          l.toggle_pivot_mode(!1);
        } else {
          if (l.is_dragging_rotate_btn) {
            l.set_btn_drag_end_status("cursor_rotate");
          } else {
            if (l.is_dragging_scale_btn) {
              l.set_btn_drag_end_status("cursor_scale");
            }
          }
        }
        l.is_dragging_rotate_center = !1;
        l.is_dragging_rotate_btn = !1;
        l.is_dragging_scale_btn = !1;
        l.is_dragging_actor = !1;
      }
    };
    this.app = t;
    this.data = n;
    this.events = i;
    this.loader = u;
    this.MOVE_CURSOR = e.cursor_move_url;
    this.editor = new r.f();
    this.editor.visible = !1;
    this.editor.interactive = !0;
    this.editor_box_border1 = new r.j();
    this.editor_box_border1.interactive = !1;
    this.editor.addChild(this.editor_box_border1);
    this.editor_box_border2 = new r.j();
    this.editor_box_border2.interactive = !1;
    this.editor.addChild(this.editor_box_border2);
    this.editor_box = new r.j();
    this.editor_box.interactive = !0;
    this.editor_box.cursor = "url(" + this.MOVE_CURSOR + ") 8 8, auto";
    this.editor.addChild(this.editor_box);
    this.left_border = new r.j();
    this.right_border = new r.j();
    this.top_border = new r.j();
    this.bottom_border = new r.j();
    var f = new r.h({
      rotation: 0,
      distance: 0,
      alpha: .3,
      color: 2171686,
      blur: .5
    });
    this.init_border_line(this.left_border, f);
    this.init_border_line(this.right_border, f);
    this.init_border_line(this.top_border, f);
    this.init_border_line(this.bottom_border, f);
    this.scale_btn = new r.t();
    this.scale_btn.name = a.b.SCALE_BTN;
    this.init_btn(this.scale_btn);
    this.scale_btn.cursor = "none";
    this.rotate_btn = new r.t();
    this.rotate_btn.name = a.b.ROTATE_BTN;
    this.init_btn(this.rotate_btn);
    this.rotate_btn.cursor = "none";
    this.menu_btn = new r.t();
    this.menu_btn.name = a.b.MENU_BTN;
    this.init_btn(this.menu_btn);
    this.menu_btn.cursor = "pointer";
    this.rotation_center = new r.j();
    this.rotation_center.name = a.b.ROTATION_CENTER;
    this.rotation_center.cursor = "url(" + this.MOVE_CURSOR + ") 8 8, auto";
    this.rotation_center.hitArea = new r.q(-this.ROTATION_CENTER_HIT_SIZE / 2, -this.ROTATION_CENTER_HIT_SIZE / 2, this.ROTATION_CENTER_HIT_SIZE, this.ROTATION_CENTER_HIT_SIZE);
    this.draw_rotate_center("default");
    this.editor.addChild(this.rotation_center);
    this.hover_container = new r.f();
    this.editor.addChild(this.hover_container);
    this.cursor_scale = new r.t();
    this.cursor_scale.anchor.set(.5);
    this.cursor_scale.visible = !1;
    this.hover_container.addChild(this.cursor_scale);
    this.cursor_rotate = new r.t();
    this.cursor_rotate.anchor.set(.5);
    this.cursor_rotate.visible = !1;
    this.hover_container.addChild(this.cursor_rotate);
    this.value_bar = new r.j();
    this.value_bar.visible = !1;
    this.value_bar.beginFill(4868682, 1);
    this.value_bar.drawRoundedRect(0, 0, this.DISPLAY_WIDTH, this.DISPLAY_HEIGHT, this.DISPLAY_RADIUS);
    this.value_bar.endFill();
    this.value = new r.v("", c);
    this.value.anchor.set(.5);
    this.value.position.set(this.DISPLAY_WIDTH / 2, this.DISPLAY_HEIGHT / 2);
    this.hover_container.addChild(this.value_bar);
    this.value_bar.addChild(this.value);
    this.loader.add({
      url: e.url,
      on_success: function (t) {
        var n = t.textures;
        if (n) {
          var r = e.texture_name;
          var i = r.scale_btn;
          var o = r.rotation_btn;
          var a = r.menu_btn;
          var s = r.cursor_rotate;
          var c = r.cursor_scale;
          l.scale_btn.texture = n[i];
          l.rotate_btn.texture = n[o];
          l.menu_btn.texture = n[a];
          l.cursor_scale.texture = n[c];
          l.cursor_rotate.texture = n[s];
          l.app.render();
        }
      }
    });
    this.editor.addListener("mousedown", this.drag_start);
    this.editor.addListener("mousemove", Object(o.w)(this.drag_move, o.a));
    this.editor.addListener("mouseup", this.drag_end);
    this.editor.addListener("mouseupoutside", this.drag_end);
    this.editor.addListener("mousemove", this.set_cursor_when_hover);
    this.editor.addListener("touchstart", this.drag_start);
    this.editor.addListener("touchmove", Object(o.w)(this.drag_move, o.a));
    this.editor.addListener("touchend", this.drag_end);
    this.editor.addListener("touchendoutside", this.drag_end);
    this.editor.addListener("mouseover", this.on_mouse_in);
    this.editor.addListener("mouseout", this.on_mouse_out);
    this.editor.addListener("mousemove", Object(o.w)(this.on_mouse_move_fake_actor_over_out, o.a));
    this.editor.addListener("rightclick", this.on_right_click);
    this.events.event_emitter.addListener("break", this.on_break);
    this.events.add_listener("actor:drag_start", this.on_actor_drag_start);
    this.events.add_listener("actor:drag_end", this.on_actor_drag_end);
    this.rotation_center.addListener("mouseover", function () {
      l.draw_rotate_center("hover");
      l.app.render();
    });
    this.rotation_center.addListener("mouseout", function () {
      l.draw_rotate_center("active");
      l.app.render();
    });
  }
  e.prototype.destroy = function () {
    if (Object(o.l)(this.target)) {
      this.target.remove_listener("destroy", this.on_target_destroy);
    }
    if (Object(s.b)(this.target)) {
      this.target.remove_listener("destroy", this.on_target_destroy);
    }
    this.events.event_emitter.removeListener("break", this.on_break);
    this.events.remove_listener("actor:drag_start", this.on_actor_drag_start);
    this.events.remove_listener("actor:drag_end", this.on_actor_drag_end);
    this.editor.destroy({
      children: !0,
      texture: !0,
      baseTexture: !0
    });
  };
  e.prototype.set_target_actor = function (e) {
    var t = this.data.get_internal_actor(e);
    if (!t) {
      return new i.a("Cannot find actor " + e);
    }
    if (this.target !== t) {
      if (this.get_displayed()) {
        this.hide();
      }
      this.target = t;
      this.target_type = a.f.Actor;
      this.editor.name = t.get_id();
      this.editor.visible = this.target.get_visible();
      this.draw_editor(this.target);
      this.events.fire("actor:mouseout", {
        target_id: t.get_id()
      });
      this.target.add_listener("change", this.on_actor_change);
      this.target.add_listener("destroy", this.on_target_destroy);
      this.app.render();
    }
  };
  e.prototype.set_target_video = function (e) {
    if (Object(s.b)(e) && e !== this.target) {
      if (this.get_displayed()) {
        this.hide();
      }
      this.target = e;
      this.target_type = a.f.Video;
      this.editor.name = e.get_id();
      this.editor.visible = this.target.get_visible();
      this.draw_editor(this.target);
      this.target.add_listener("change", this.on_video_change);
      this.target.add_listener("destroy", this.on_target_destroy);
      this.rotation_center.visible = !1;
      this.rotate_btn.visible = !1;
      this.menu_btn.visible = !1;
      this.app.render();
    }
  };
  e.prototype.get_current_target_type = function () {
    return this.target_type;
  };
  e.prototype.hide = function () {
    if (this.target) {
      if (Object(o.l)(this.target)) {
        this.target.remove_listener("change", this.on_actor_change);
      }
      if (Object(s.b)(this.target)) {
        this.target.remove_listener("change", this.on_video_change);
      }
      this.target.removeListener("destroy", this.on_target_destroy);
      this.target = void 0;
      this.editor.visible = !1;
      this.app.render();
    }
  };
  e.prototype.get_displayed = function () {
    return !!this.target;
  };
  e.prototype.toggle_pivot_mode = function (e) {
    if (this.target) {
      this.is_in_pivot_mode = e;
      this.rotation_center.interactive = e;
      this.editor_box.interactive = !e;
      this.set_btns_visible(!e);
      this.draw_rotate_center(e ? "active" : "default");
    }
  };
  e.prototype.get_target_id = function () {
    return this.target && this.target.get_id();
  };
  e.prototype.get_is_in_pivot_mode = function () {
    return this.is_in_pivot_mode;
  };
  e.prototype.set_btns_visible = function (e) {
    this.scale_btn.visible = e;
    this.rotate_btn.visible = e;
    this.menu_btn.visible = e;
  };
  e.prototype.get_is_dragging = function () {
    return this.is_dragging_actor || this.is_dragging_scale_btn || this.is_dragging_rotate_btn || this.is_dragging_rotate_center;
  };
  e.prototype.draw_rotate_center = function (e) {
    if (this.rotation_center.clear(), "default" !== e) {
      var t = u[e];
      this.rotation_center.lineStyle(t.out_line_w, t.shadow_color, t.shadow_alpha);
      this.rotation_center.drawCircle(0, 0, t.inner_r + 2 * t.shadow_line_w + t.out_line_w);
      this.rotation_center.lineStyle(t.out_line_w, t.color, t.alpha);
      this.rotation_center.drawCircle(0, 0, t.inner_r + t.shadow_line_w + t.out_line_w);
    }
    var n = u[e];
    this.rotation_center.lineStyle(n.shadow_line_w, n.shadow_color, n.shadow_alpha);
    this.rotation_center.drawCircle(0, 0, n.inner_r + n.shadow_line_w);
    this.rotation_center.beginFill(n.color, n.alpha);
    this.rotation_center.drawCircle(0, 0, n.inner_r);
    this.rotation_center.endFill();
  };
  e.prototype.update_editor_position = function (e) {
    this.editor.position.set(e.position.x, e.position.y);
    this.editor.pivot.set(e.pivot.x * e.scale.x, e.pivot.y * e.scale.y);
    var t = this.editor.pivot;
    var n = t.x;
    var r = t.y;
    this.rotation_center.position.set(n, r);
  };
  e.prototype.draw_editor = function (e) {
    this.update_editor_position(e);
    this.editor.rotation = e.rotation;
    var t = Math.max(e.width, this.MIN_EDITOR_BOX);
    var n = Math.max(e.height, this.MIN_EDITOR_BOX);
    if (this.editor_box_border1.clear(), this.editor_box_border2.clear(), this.app.get_app().renderer.type === r.p.CANVAS) {
      var i = t / 2;
      var o = n / 2;
      var a = 1;
      this.editor_box_border1.lineStyle(3, 0, .3);
      this.editor_box_border1.moveTo(-i - a, -o - a);
      this.editor_box_border1.lineTo(i + a, -o - a);
      this.editor_box_border1.lineTo(i + a, o + a);
      this.editor_box_border1.lineTo(-i - a, o + a);
      this.editor_box_border1.lineTo(-i - a, -o - a);
      a = 2;
      this.editor_box_border2.lineStyle(3, 0, .3);
      this.editor_box_border2.moveTo(-i - a, -o - a);
      this.editor_box_border2.lineTo(i + a, -o - a);
      this.editor_box_border2.lineTo(i + a, o + a);
      this.editor_box_border2.lineTo(-i - a, o + a);
      this.editor_box_border2.lineTo(-i - a, -o - a);
    }
    this.editor_box.clear();
    this.editor_box.drawRect(-t / 2, -n / 2, t, n);
    this.left_border.clear();
    this.right_border.clear();
    this.top_border.clear();
    this.bottom_border.clear();
    this.left_border.beginFill(16777215);
    this.left_border.drawRect(-t / 2 - 3, -n / 2, 3, n);
    this.left_border.endFill();
    this.left_border.hitArea = new r.q(-t / 2 - 6, -n / 2, 6, n);
    this.right_border.beginFill(16777215);
    this.right_border.drawRect(t / 2, -n / 2, 3, n);
    this.right_border.endFill();
    this.right_border.hitArea = new r.q(t / 2 - 3, -n / 2, 6, n);
    this.top_border.beginFill(16777215);
    this.top_border.drawRect(-t / 2 - 3, -n / 2 - 3, t + 6, 3);
    this.top_border.endFill();
    this.top_border.hitArea = new r.q(-t / 2 - 3, -n / 2 - 6, t + 6, 6);
    this.bottom_border.beginFill(16777215);
    this.bottom_border.drawRect(-t / 2 - 3, n / 2, t + 6, 3);
    this.bottom_border.endFill();
    this.bottom_border.hitArea = new r.q(-t / 2 - 3, n / 2 - 3, t + 6, 6);
    this.editor_box.hitArea = new r.q(-t / 2, -n / 2, t, n);
    var s = (t + 3) / 2;
    var c = (n + 3) / 2;
    this.scale_btn.position.set(s, c);
    this.rotate_btn.position.set(s, -c);
    this.menu_btn.position.set(-s, -c);
  };
  e.prototype.init_btn = function (e) {
    e.width = this.BTN_SIZE;
    e.height = this.BTN_SIZE;
    e.anchor.set(.5);
    e.interactive = !0;
    this.editor.addChild(e);
  };
  e.prototype.drag_start_scale_btn = function (e) {
    if (this.target) {
      this.is_dragging_scale_btn = !0;
      var t = Object(o.l)(this.target) ? Object(o.d)(this.target, this.target.position) : this.target.get_pixi_position();
      this.old_mouse_r = Math.hypot(e.x - t.x, e.y - t.y);
      this.old_scale.set(this.target.scale.x, this.target.scale.y);
      this.value.text = "" + Math.round(100 * this.target.get_scale().x);
      this.events.fire("editor_scale_btn:drag_start", {
        target_id: this.target.id
      });
      this.app.render();
    }
  };
  e.prototype.drag_start_rotate_btn = function (e) {
    this.is_dragging_rotate_btn = !0;
    var t = this.editor.name && this.data.get_internal_actor(this.editor.name);
    if (t) {
      var n = this.app.get_app().stage.toLocal(new r.o(0, 0), t);
      this.old_rotate_center_pos.set(n.x, n.y);
      this.old_mouse_rotation = Object(o.u)(e.x - n.x, e.y - n.y);
      this.old_position.set(t.position.x, t.position.y);
      this.value.text = Math.round(Object(o.v)(t.rotation_value)) + "\xb0";
      this.events.fire("editor_rotate_btn:drag_start", {
        target_id: t.id
      });
      this.app.render();
    }
  };
  e.prototype.drag_start_rotate_center = function (e) {
    this.is_dragging_rotate_center = !0;
    var t = e.data.getLocalPosition(this.editor);
    this.old_mouse_pos.set(t.x, t.y);
  };
  e.prototype.drag_move_scale_btn = function (e) {
    if (this.target) {
      var t = Math.hypot(this.target.width / this.target.scale.x / 2, this.target.height / this.target.scale.y / 2);
      var n = Object(o.l)(this.target) ? Object(o.d)(this.target, this.target.position) : this.target.get_pixi_position();
      var i = (Math.hypot(e.x - n.x, e.y - n.y) - this.old_mouse_r) / t;
      var a = function (e) {
        var t = Math.max(Math.abs(e) + i, .01);
        return e < 0 ? -t : t;
      };
      var c = a(this.old_scale.x);
      var u = a(this.old_scale.y);
      if (Object(s.b)(this.target)) {
        this.target.set_pixi_scale(c, u);
      } else {
        var l = new r.o(this.target.pivot.x / this.target.scale.x * c, this.target.pivot.y / this.target.scale.y * u);
        var f = this.app.get_app().stage.toLocal(l, this.target);
        this.target.set_pixi_position(f.x, f.y);
        this.target.set_pixi_scale(c, u);
      }
      this.value.text = "" + Math.round(100 * this.target.get_scale().x);
      if (Object(o.l)(this.target)) {
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
  e.prototype.drag_move_rotate_btn = function (e) {
    var t = this.editor.name && this.data.get_internal_actor(this.editor.name);
    if (t) {
      var n = Object(o.u)(e.x - this.old_rotate_center_pos.x, e.y - this.old_rotate_center_pos.y);
      var r = n - this.old_mouse_rotation;
      this.old_mouse_rotation = n;
      var i = Object(o.p)(this.old_position, this.old_rotate_center_pos, r);
      this.old_position.set(i.x, i.y);
      t.set_pixi_position(i.x, i.y);
      var a = Object(o.s)(-t.rotation - r);
      var s = t.is_rotation_flipped ? Object(o.s)(a + Math.PI) : a;
      t.set_rotation_value(s);
      t.set_pixi_rotation(-a);
      this.value.text = Math.round(Object(o.v)(t.rotation_value)) + "\xb0";
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
  e.prototype.drag_move_rotate_center = function (e) {
    var t = e.data.getLocalPosition(this.editor);
    if (this.rotation_center.position.set(this.rotation_center.x + t.x - this.old_mouse_pos.x, this.rotation_center.y + t.y - this.old_mouse_pos.y), this.old_mouse_pos.set(t.x, t.y), Object(o.l)(this.target)) {
      var n = this.app.get_app().stage.toLocal(this.rotation_center.position, this.editor);
      this.target.set_pivot_by_stage_point(n.x, -n.y);
      this.events.fire("actor:update", {
        target_id: this.target.id,
        data: {
          position: this.target.get_position()
        }
      });
    }
    this.app.render();
  };
  e.prototype.set_btn_drag_start_status = function (e, t) {
    this.app.get_app().stage.cursor = "none";
    this.set_box_cursor("none");
    this[e].visible = !0;
    this[e].position.set(t.x, t.y);
    this.value_bar.visible = !0;
    this.update_value_bar(t);
    this.set_btns_visible(!1);
  };
  e.prototype.update_value_bar = function (e) {
    var t = Object(o.p)({
      x: e.x + this.DISPLAY_OFFSET,
      y: e.y + this.DISPLAY_OFFSET
    }, {
      x: e.x,
      y: e.y
    }, -this.editor.rotation);
    this.value_bar.position.set(t.x, t.y);
    this.value_bar.rotation = -this.editor.rotation;
  };
  e.prototype.set_btn_drag_end_status = function (e, t) {
    var n = this.app.get_app().stage;
    var r = this.app.get_interaction_manager();
    n.cursor = "default";
    this.set_box_cursor("move");
    this.value_bar.visible = !1;
    if (Object(o.l)(this.target)) {
      this.set_btns_visible(!0);
    } else {
      this.scale_btn.visible = !0;
    }
    var i = t && r.hitTest(t.data.global, this.editor);
    var s = "cursor_scale" === e ? a.b.SCALE_BTN : a.b.ROTATE_BTN;
    var c = i && i.name === s;
    this[e].visible = !!c;
    var u = t && r.hitTest(t.data.global, this.app.get_scene_container());
    var l = Object(o.l)(u) && this.data.get_internal_actor(u.id);
    if (!c && l && l !== this.target) {
      this.events.fire("actor:mouseover", {
        target_id: l.id
      });
      this.mouseover_target_id = l.id;
    }
  };
  e.prototype.get_hit_target = function (e) {
    var t = this.app.get_interaction_manager().hitTest(e.data.global, this.app.get_scene_container());
    if (Object(o.l)(t)) {
      var n = this.data.get_internal_actor(t.id);
      if (n) {
        this.set_target_actor(n.id);
        return n;
      }
    }
    return Object(s.b)(t) ? (this.set_target_video(t), t) : this.editor.name ? this.data.get_internal_actor(this.editor.name) : void 0;
  };
  e.prototype.check_mouse_pos_is_in_stage = function (e) {
    var t = e.data.getLocalPosition(this.app.get_app().stage);
    var n = this.app.get_app().view;
    var r = n.width;
    var i = n.height;
    return !(t.x > r / 2 || t.x < -r / 2 || t.y > i / 2 || t.y < -i / 2);
  };
  e.prototype.init_border_line = function (e, t) {
    e.name = a.b.BORDER_LINE;
    e.interactive = !0;
    e.cursor = "url(" + this.MOVE_CURSOR + ") 8 8, auto";
    e.filters = [t];
    this.editor.addChild(e);
  };
  e.prototype.set_box_cursor = function (e) {
    if ("none" === e) {
      this.editor_box.cursor = "none";
      this.left_border.cursor = "none";
      this.right_border.cursor = "none";
      this.top_border.cursor = "none";
      this.bottom_border.cursor = "none";
    } else {
      var t = "url(" + this.MOVE_CURSOR + ") 8 8, auto";
      this.editor_box.cursor = t;
      this.left_border.cursor = t;
      this.right_border.cursor = t;
      this.top_border.cursor = t;
      this.bottom_border.cursor = t;
    }
  };
  return e;
}();
export default l;