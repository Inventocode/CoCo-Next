"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Toolbox = void 0;
var r = require("../../../1001/93");
var i = require("../../../1001/134/index");
var o = require("../../../4/127");
var a = require("../../../125/195/index");
var s = require("../../../206/208/387");
var c = require("../../../125/index");
var u = require("../../../1001/213/index");
var l = require("../../../125/294");
var f = require("./1323");
var d = require("./2154");
var h = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n.get_node_from_event_ = function (e) {
      for (var t = e.target; void 0 != t;) {
        var r = n.find_node_by_name(t.id);
        if (void 0 != r) {
          return r;
        }
        if (t == n.children_container_) {
          break;
        }
        t = t.parentNode;
      }
    };
    var r = t.options;
    n.workspace_ = t;
    n.toolbox_position = t.get_options().toolboxPosition;
    var i = Object.assign({}, n.workspace_.options, {
      disabledPatternId: r.disabledPatternId,
      parentWorkspace: t,
      RTL: t.RTL,
      toolboxPosition: r.toolboxPosition,
      blockly_type: r.blockly_type,
      id: void 0
    });
    n.flyout = n.vertical_flyout_factory(i);
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_flyout = function () {
    return this.flyout;
  };
  t.prototype.get_width = function () {
    return this.html_div ? this.html_div.offsetWidth : 0;
  };
  t.prototype.get_height = function () {
    return this.html_div ? this.html_div.offsetHeight : 0;
  };
  t.prototype.get_workspace_id = function () {
    if (this.workspace_) {
      return this.workspace_.id;
    }
  };
  t.prototype.init = function () {
    var e = this;
    if (this.workspace_) {
      var t = this.workspace_;
      var n = t.get_options();
      var r = this.workspace_.get_workspace_drag_surface();
      var i = r && r.get_svg();
      if (void 0 != i) {
        this.html_div = (0, c.create_dom)("div", "blocklyToolboxDiv");
        this.html_div.setAttribute("dir", t.RTL ? "RTL" : "LTR");
        if (void 0 !== n.toolbox_background_class) {
          this.html_div.classList.add(n.toolbox_background_class);
        } else {
          this.html_div.style.background = this.theme.flyout.BACKGROUND_COLOR.toString();
        }
        this.children_container_ = document.createElement("div");
        this.children_container_.className = "blocklyTreeRoot";
        (0, s.assert)(n.toolbox_config, "Toolbox is not defined.");
        this.populate(n.toolbox_config);
        this.html_div.appendChild(this.children_container_);
        (0, c.insert_after)(this.html_div, i);
        (0, c.insert_before)(this.flyout.create_dom("svg"), this.html_div);
        this.flyout.init(t);
        this.position();
        this.events.bind_event(this.html_div, "mousedown", this, function () {
          e.mousedown_time = Date.now();
        });
        this.events.bind_event(this.html_div, "touchmove", this, function () {
          e.mousedown_time = void 0;
        });
        var o = (0, u.throttle)(function (t) {
          return e.handle_mousedown(t);
        }, 200);
        this.events.bind_event(this.html_div, "mouseup", this, function (t) {
          if (e.mousedown_time && Date.now() - e.mousedown_time < 200) {
            o(t);
          }
          e.mousedown_time = void 0;
        });
      } else {
        console.warn("Ref SVG not Found.");
      }
    }
  };
  t.prototype.handle_mousedown = function (e) {
    if (this.utils.is_right_button(e) || e.target == this.html_div) {
      this.utils.hide_chaff(!1);
      return void this.touch_manager.clear_touch_identifier();
    }
    this.utils.hide_chaff(!0);
    var t = this.get_node_from_event_(e);
    if (t && !t.is_disabled()) {
      if (t.is_selected()) {
        this.clear_selection();
      } else {
        if (t.is_selectable()) {
          this.set_selected_item(t);
        }
      }
      t.set_expanded(!t.is_expanded());
      this.block_animations.toolbox_click_effect();
    }
    this.touch_manager.clear_touch_identifier();
  };
  t.prototype.populate = function (e) {
    this.remove_children();
    if (this.workspace_) {
      if (Array.isArray(e)) {
        this.build_by_config(e);
      } else {
        this.sync_trees_(e);
      }
      this.workspace_.resize_contents();
    }
  };
  t.prototype.build_by_config = function (e) {
    var t = this;
    e.forEach(function (e) {
      var n = new d.TreeNode(e);
      t.add(n);
    });
  };
  t.prototype.sync_nodes_ = function (e, t) {
    for (var n, r = 0, i = void 0; r < e.childNodes.length; r++) {
      if ((i = e.childNodes[r]) instanceof Element) {
        switch (i.tagName.toUpperCase()) {
          case "SEP":
            if (void 0 == n) {
              break;
            }
            var o = i.getAttribute("gap");
            if (void 0 != o) {
              n.setAttribute("gap", o);
            }
            break;
          case "BLOCK":
          case "SHADOW":
          case "LABEL":
          case "BUTTON":
            t.push_block(i);
            n = i;
        }
      }
    }
  };
  t.prototype.sync_trees_ = function (e) {
    for (var t, n, r = 0, i = void 0; r < e.childNodes.length; r++) {
      if ((i = e.childNodes[r]) instanceof Element) {
        switch (i.tagName.toUpperCase()) {
          case "CATEGORY":
            var o = i.getAttribute("name");
            if (void 0 == o) {
              throw new ReferenceError("Child node does not have name.");
            }
            var a = i.getAttribute("text") || void 0,
              s = i.getAttribute("color"),
              c = s && (null === (t = this.theme.get_color(s)) || void 0 === t ? void 0 : t.fill.toString()) || s || void 0,
              u = i.getAttribute("flyout_background") || void 0,
              l = i.getAttribute("element_classname") || void 0,
              f = i.getAttribute("element_disabled_classname") || void 0,
              h = i.getAttribute("element_classname_selected") || void 0,
              p = i.getAttribute("element_style") || void 0,
              _ = i.getAttribute("element_selected_style") || void 0,
              A = i.getAttribute("icon") || void 0,
              g = i.getAttribute("selected_icon") || void 0,
              v = i.getAttribute("icon_html") || void 0,
              m = i.getAttribute("icon_selected_html") || void 0,
              y = new d.TreeNode({
                text: a,
                name: o,
                color: c,
                secondary_color: u,
                element: {
                  unselected_classname: l,
                  disabled_classname: f,
                  selected_classname: h,
                  style: p,
                  selected_style: _
                },
                icon: {
                  style: A,
                  selected_style: g,
                  html: v,
                  selected_html: m
                }
              }),
              b = i.getAttribute("custom");
            if (b && 0 === i.childElementCount) {
              y.set_blocks(b);
              y.get_element().dataset.custom = b;
            } else {
              this.sync_nodes_(i, y);
              if (0 === y.get_blocks().length) {
                y.set_disabled(!0);
              }
            }
            n = i;
            this.add(y);
            break;
          case "SEP":
            if (console.error("TreeSeparator is not implemented currently. "), void 0 == n) {
              break;
            }
        }
      }
    }
  };
  t.prototype.position = function () {
    if (void 0 != this.html_div) {
      if (this.workspace_) {
        if (void 0 != this.workspace_.get_parent_svg()) {
          if (this.toolbox_position == a.TOOLBOX_POSITION.RIGHT) {
            this.html_div.style.top = "0";
            this.html_div.style.right = "0";
          } else {
            this.html_div.style.top = "0";
            this.html_div.style.left = "0";
          }
          this.flyout.position();
        } else {
          console.warn("Parent SVG not Found.");
        }
      }
    }
  };
  t.prototype.get_client_rect = function () {
    if (void 0 != this.html_div) {
      var e = this.html_div.getBoundingClientRect();
      var t = this.workspace_.get_options().delete_area_margin;
      var n = e.left;
      var r = e.top;
      var i = e.width;
      var o = e.height;
      return new l.Rect(n - t[3], r - t[0], i + t[1] + t[3], o + t[0] + t[2]);
    }
  };
  t.prototype.add_delete_style = function () {
    (0, c.add_class)(this.html_div, "blocklyToolboxDelete");
  };
  t.prototype.remove_delete_style = function () {
    (0, c.remove_class)(this.html_div, "blocklyToolboxDelete");
  };
  t.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this.flyout.dispose();
    (0, c.remove_node)(this.html_div);
    this.workspace_ = void 0;
  };
  t.prototype.get_selected = function () {
    return this.selected_node;
  };
  t.prototype.get_last_selected = function () {
    return this.last_selected_node;
  };
  t.prototype.set_selected_item = function (e) {
    var t;
    var n;
    var r = this.selected_node;
    if (e !== r) {
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CATEGORY_WILL_CHANGE,
          workspace_id: (null === (t = this.workspace_) || void 0 === t ? void 0 : t.id) || "",
          old_value: r,
          new_value: e
        }));
      }
      if (r) {
        r.unselect();
      }
      var i = [];
      if (e) {
        e.select();
        i = e.get_blocks(!0);
      }
      if (e && i && i.length > 0) {
        var o = e.get_flyout_background_color();
        if (o) {
          var s = this.flyout.get_background();
          if (s) {
            s.style.fill = o;
          }
        }
        this.flyout.show(i);
        if (this.last_selected_node !== e) {
          this.flyout.scroll_to_start();
        }
      } else {
        this.flyout.hide();
      }
      if (e) {
        this.last_selected_node = e;
      }
      this.selected_node = e;
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CATEGORY,
          workspace_id: (null === (n = this.workspace_) || void 0 === n ? void 0 : n.id) || "",
          old_value: r,
          new_value: e
        }));
      }
    }
  };
  t.prototype.clear_selection = function () {
    this.set_selected_item();
  };
  t.prototype.refresh_selection = function () {
    if (void 0 != this.selected_node) {
      var e = this.selected_node.get_blocks();
      if (void 0 != e) {
        this.flyout.show(e);
      }
    }
  };
  t.prototype.find_node_by_name = function (e) {
    if (e) {
      for (var t = 0; t < this.children_.length; t++) {
        var n = this.children_[t];
        if (n.get_name() === e) {
          return n;
        }
        var r = n.find_node_by_name(e);
        if (r) {
          return r;
        }
      }
    }
  };
  t.prototype.new_node = function (e) {
    return new d.TreeNode(e);
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], t.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], t.prototype, "utils", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.touch_manager)], t.prototype, "touch_manager", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], t.prototype, "block_animations", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], t.prototype, "theme", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.VerticalFlyout)], t.prototype, "vertical_flyout_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], t.prototype, "ui_event_factory", void 0);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(f.BaseNode);
exports.Toolbox = h;