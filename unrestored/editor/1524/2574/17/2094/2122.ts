"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ContextMenu = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = require("../../4/127");
var a = require("../../125/195/index");
var s = require("../../125/index");
var c = require("../../125/714");
var u = require("../497/1102");
var l = function () {
  function e() {
    this.current_block = void 0;
    this.disabled = !1;
  }
  e.prototype.set_disabled = function (e) {
    this.disabled = e;
  };
  e.prototype.show = function (e, t, n) {
    var r;
    var i;
    var o;
    if (!this.disabled) {
      if (this.widget_div.show(this, void 0), null === (r = this.tooltip) || void 0 === r || r.hide(), Array.isArray(t) && (t = {
        source: "",
        options: t
      }), t.options.length) {
        var s = this.populate_(t);
        this.position_(s, e, n);
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: a.UIEventType.CONTEXT_MENU_OPEN,
            workspace_id: (null === (i = this.workspace_db.current) || void 0 === i ? void 0 : i.id) || "",
            old_value: !1,
            new_value: !0,
            block_id: null === (o = this.current_block) || void 0 === o ? void 0 : o.id
          }));
        }
        window.setTimeout(function () {
          s.focus();
        }, 0);
      } else {
        this.hide();
      }
    }
  };
  e.prototype.populate_ = function (e) {
    var t = this;
    var n = document.createElement("div");
    n.setAttribute("tabindex", "-1");
    n.classList.add("menu-wrapper");
    for (var r = e.options, i = function (i) {
        var o = r[i];
        var a = document.createElement("div");
        if (a.classList.add("menu-item"), a.setAttribute("name", o.name), !o.enabled && a.classList.add("menu_item_disable"), o.enabled && a.classList.add("menu_item_enable"), o.icon) {
          var c = void 0;
          if ("string" === typeof o.icon) {
            (c = new Image()).src = o.icon;
            c.alt = o.text;
            c.style.verticalAlign = "middle";
            c.draggable = !1;
          } else {
            c = (0, s.create_svg_element)("svg", {
              width: 16,
              height: 16
            });
            var u = (0, s.clone_node)(o.icon, !0);
            c.appendChild(u);
          }
          c.style.marginRight = "8px";
          a.appendChild(c);
        }
        var l = document.createElement("span");
        l.innerText = o.text;
        a.appendChild(l);
        if (o.selected) {
          a.classList.add("menu_item_selected");
        }
        if (o.attr) {
          o.attr.forEach(function (e) {
            var t = e[0];
            var n = e[1];
            if ("class" !== t) {
              a.setAttribute(t, n);
            } else {
              a.classList.add(n);
            }
          });
        }
        n.appendChild(a);
        a.addEventListener("click", function () {
          var n;
          if (o.enabled) {
            t.hide();
            o.callback();
            if (t.events.is_enabled()) {
              t.events.fire(t.contextmenu_option_event_factory({
                workspace_id: (null === (n = t.workspace_db.current) || void 0 === n ? void 0 : n.id) || "",
                option_name: o.name,
                source: e.source
              }));
            }
          }
        });
      }, o = 0; o < r.length; o++) {
      i(o);
    }
    return n;
  };
  e.prototype.position_ = function (e, t, n) {
    var r = (0, s.get_viewport_bbox)();
    var i = {
      top: t.clientY,
      bottom: t.clientY,
      left: t.clientX,
      right: t.clientX
    };
    this.create_widget(e);
    var o = (0, c.get_size)(e);
    o.height = e.scrollHeight;
    if (n) {
      (0, c.adjust_bboxes_for_rtl)(r, i, o);
    }
    this.widget_div.position_with_anchor(r, i, o, n);
    e.focus();
  };
  e.prototype.create_widget = function (e) {
    this.widget_div.DIV.appendChild(e);
    e.classList.add("blocklyContextMenu");
    this.events.bind_event_with_checks(e, "contextmenu", void 0, u.no_event);
  };
  e.prototype.hide = function () {
    var e;
    var t;
    this.widget_div.hide_if_owner(this);
    if (this.events.is_enabled()) {
      this.events.fire(this.ui_event_factory({
        type: a.UIEventType.CONTEXT_MENU_OPEN,
        workspace_id: (null === (e = this.workspace_db.current) || void 0 === e ? void 0 : e.id) || "",
        old_value: !0,
        new_value: !1,
        block_id: null === (t = this.current_block) || void 0 === t ? void 0 : t.id
      }));
    }
    this.current_block = void 0;
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], e.prototype, "widget_div", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.tooltip)], e.prototype, "tooltip", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.ContextMenuOptionEvent)], e.prototype, "contextmenu_option_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], e.prototype, "ui_event_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.ContextMenu = l;