"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BlockSvg = void 0;
var r = require("../../1000/93");
var i = require("../../125/259");
var o = require("../../4/127");
var a = require("../../125/195/index");
var s = require("../../125/534");
var c = require("../../206/725/387");
var u = require("../../125/294");
var l = require("../../125/index");
var f = require("../../1000/213/index");
var h = require("../../1000/577");
var d = require("../../125/474");
var p = require("../497/960");
var _ = require("../497/840");
var A = require("./2164/755");
var g = function (e) {
  function t(t) {
    var n;
    var r = e.call(this, t.workspace) || this;
    r.element_type = "block";
    r.type = "";
    r.tooltip = "";
    r.inputList = [];
    r.width = 0;
    r.svg_path_width = 0;
    r.first_row_width = 0;
    r.first_row_height = 0;
    r.event_initialized = !1;
    r.warning = void 0;
    r.output_connection = void 0;
    r.previous_connection = void 0;
    r.next_connection = void 0;
    r.is_shadow_ = !1;
    r.child_blocks = [];
    r.collapsed_ = !1;
    r.collapsed_dirty = !1;
    r._is_insertion_marker = !1;
    r.getInput = r.get_input;
    r.get_inherited_disabled = function () {
      for (var e = r.get_surround_parent(); e;) {
        if (e.disabled) {
          return !0;
        }
        e = e.get_surround_parent();
      }
      return !1;
    };
    r.get_root_block = r.get_top_parent;
    r.getFieldValue = r.get_field_value;
    r.jsonInit = function (e) {
      var t = (0, f.clone_deep)(e);
      var n = t.type ? 'Block "' + t.type + '": ' : "";
      (0, c.assert)(void 0 == t.output || void 0 == t.previousStatement, n + "Must not have both an output and a previousStatement.");
      if (void 0 != t.colour) {
        r.set_colour_from_json(t);
      }
      for (var i = 0, o = t["message" + i]; void 0 != o;) {
        var a = t["args" + i];
        var s = t["lastDummyAlign" + i];
        r.interpolate_(o, a || [], s);
        o = t["message" + ++i];
      }
      if (void 0 != t.inputsInline && (r.inputs_inline = t.inputsInline), void 0 !== t.output) {
        var u = !0 === t.output ? void 0 : t.output;
        r.set_output(!0, u, t.required_context);
      }
      if (void 0 !== t.previousStatement && r.set_previous_statement(!0), void 0 !== t.nextStatement && r.set_next_statement(!0), void 0 != t.enableContextMenu) {
        var l = t.enableContextMenu;
        r.enable_context_menu = !!l;
      }
      if (void 0 != t.helpUrl) {
        l = t.helpUrl;
        var h = r.utils.replace_message_references(l);
        r.set_help_url(h);
      }
      if ((0, f.is_string)(t.extensions) && console.error('\n        JSON attribute "extensions" should be an array of strings.\n        Found raw string in JSON for "' + t.type + '" block.\n      '), void 0 != t.tooltip) {
        l = t.tooltip;
        h = r.utils.replace_message_references(l);
        r.set_tooltip(h);
      }
      if (void 0 != t.mutator && r.extensions.apply_mutator(t.mutator, r), Array.isArray(t.extensions)) {
        for (var d = t.extensions, p = 0; p < d.length; ++p) {
          r.extensions.apply(d[p], r);
        }
      }
      if (void 0 != t.outputShape) {
        r.set_output_shape(t.outputShape);
      }
      if (void 0 != t.category) {
        r.set_category(t.category);
      }
      if (t.context_menu) {
        r.context_menu_options_setting = t.context_menu;
      }
    };
    r.appendDummyInput = r.append_dummy_input;
    r.context_menu_options_setting = r.workspace.options.context_menu.block;
    r.prevent_disable_style_change = !1;
    r.is_glowing_stack = !1;
    r.is_flashing = !1;
    r.removeInput = r.remove_input;
    r.visibility_ = a.BlockVisibility.VISIBLE;
    r.visibility_for_undo = void 0;
    r.connectable_ = !0;
    r.opacity = 1;
    r.category_ = void 0;
    r.output_shape = void 0;
    r.help_url = "";
    r.colour_ = r.theme.block_color.DEFAULT.fill;
    r.border_colour = r.theme.block_color.DEFAULT.border;
    var i = t.workspace;
    var o = t.prototype_name;
    if (o && (null === (n = r.svg_group) || void 0 === n || n.classList.add(o)), r.id = t.id && !i.get_block_by_id(t.id) ? t.id : (0, u.gen_uid)(), r._is_insertion_marker = !!t.is_insertion_marker, r.enable_context_menu = !0, o) {
      r.type = o;
      var s = r.Blink.Blocks[o];
      if (void 0 == s) {
        throw new Error("Error: Unknown block type " + o + ".");
      }
      Object.assign(r, s);
    }
    r.inputs_inline_default = r.inputs_inline;
    i.blockDB_.set(r.id, r);
    i.add_top_block(r);
    var h = void 0;
    if (r.events.is_enabled()) {
      h = r.create_event_factory({
        block: r
      });
    }
    r.svg_path = (0, l.create_svg_element)("path", {
      class: "blocklyPath"
    }, r.svg_group);
    r.rendered = !1;
    if (r.Blink.mainWorkspace.options.tooltip) {
      r.svg_path.tooltip = function () {
        return (0, f.is_func)(r.tooltip) ? r.tooltip() : r.tooltip;
      };
      r.Blink.tooltip.bind_mouse_event(r.svg_path);
    }
    if ((0, f.is_func)(r.init)) {
      r.init();
    }
    if ((0, f.is_func)(r.onchange)) {
      r.set_on_change(r.onchange);
    }
    if (h) {
      r.events.fire(h);
    }
    return r;
  }
  (0, r.__extends)(t, e);
  Object.defineProperty(t.prototype, "onchange", {
    get: function () {
      return this._onchange;
    },
    set: function (e) {
      this._onchange = null === e || void 0 === e ? void 0 : e.bind(this);
    },
    enumerable: !1,
    configurable: !0
  });
  t.prototype.render = function (e) {
    console.warn("\n      why: opt_bubble " + e + "\n    ");
  };
  t.prototype.set_warning_text = function (e, t) {
    console.error("Warning is deprecated " + e + " " + t);
  };
  t.prototype.get_previous_block = function () {
    return this.previous_connection && this.previous_connection.targetBlock();
  };
  t.prototype.is_starting_block = function () {
    return void 0 == this.output_connection && void 0 == this.previous_connection && "factory_base" !== this.type;
  };
  t.prototype.is_ending_block = function () {
    return void 0 == this.next_connection && void 0 == this.output_connection && void 0 != this.previous_connection;
  };
  t.prototype.is_output_block = function () {
    return !this.previous_connection && !this.next_connection && !this.is_shadow() && !!this.output_connection;
  };
  t.prototype.is_include_special_input = function () {
    var e = this;
    return s.SPECIAL_CONNECTION_INPUT_NAME.some(function (t) {
      return !!e.get_input(t);
    });
  };
  t.prototype.is_wrap_shape = function () {
    return !this.is_starting_block() && this.inputList.some(function (e) {
      return e.type === a.InputType.STATEMENT;
    });
  };
  t.prototype.set_shadow = function (e) {
    this.is_shadow_ = e;
  };
  t.prototype.is_shadow = function () {
    return this.is_shadow_;
  };
  t.prototype.is_deletable = function () {
    return this.deletable_ && !this.is_shadow_ && !(this.workspace && this.workspace.get_options().readOnly);
  };
  t.prototype.is_movable = function () {
    return this.movable_ && !this.is_shadow_;
  };
  t.prototype.get_children = function (e) {
    if (!e) {
      return this.child_blocks;
    }
    for (var t = [], n = 0; n < this.inputList.length; n++) {
      var r = this.inputList[n];
      if (r.connection) {
        var i = r.connection.targetBlock();
        if (i) {
          t.push(i);
        }
      }
    }
    var o = this.get_next_block();
    if (o) {
      t.push(o);
    }
    return t;
  };
  t.prototype.is_collapsed = function () {
    return this.collapsed_;
  };
  t.prototype.set_collapsed = function (e, t) {
    if (void 0 === t) {
      t = !1;
    }
    var n = this.is_collapsed();
    if (n != e || t) {
      if (this.collapsed_dirty = !0, this.collapsed_ = e, this.events.is_enabled() && n !== e && this.events.fire(this.change_event_factory("collapsed", {
        block: this,
        old_value: n,
        new_value: e
      })), t) {
        for (var r = this.get_top_parent().get_descendants(!0, !0), i = r.length - 1; i >= 0; i--) {
          r[i].update_collapsed(t);
        }
      } else if (this.rendered) {
        this.update_collapsed();
      }
    }
  };
  t.prototype.hide_into_group = function (e, t) {
    var n;
    var r;
    var i = this;
    if (void 0 === t) {
      t = {};
    }
    this.events.disable();
    var o = (null === (r = null === (n = this.workspace.options.block_group) || void 0 === n ? void 0 : n.get_default_name) || void 0 === r ? void 0 : r.bind(this, this)) || this.to_string.bind(this);
    var a = this.block_group_factory({
      workspace: this.workspace,
      origin_block: this,
      group_name: e || o(),
      id: t.id,
      on_release: function () {
        (0, c.assert)(i.parent_group);
        i.events.fire(i.change_event_factory("group_block", {
          block: i,
          old_value: [i.parent_group.id, i.parent_group.group_name, i.parent_group.group_stop_at || ""],
          new_value: void 0
        }));
        i.parent_group = void 0;
      },
      origin_xy: t.origin_xy,
      group_stop_at: t.group_stop_at
    });
    a.init_svg();
    a.render();
    this.parent_group = a;
    this.events.enable();
    if (this.events.is_enabled()) {
      this.events.fire(this.change_event_factory("group_block", {
        block: this,
        old_value: void 0,
        new_value: [this.parent_group.id, this.parent_group.group_name, this.parent_group.group_stop_at || ""]
      }));
    }
  };
  t.prototype.update_collapsed = function (e) {
    if (void 0 === e && (e = !1), this.collapsed_dirty || e) {
      var t = this.rendered;
      this.rendered = !1;
      for (var n = 0; n < this.inputList.length; n++) {
        this.inputList[n].set_visible(!this.collapsed_);
      }
      if (s.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type) && this.next_connection) {
        if (this.collapsed_) {
          this.next_connection.hide_all();
        } else {
          this.next_connection.unhide_all();
        }
        var r = this.next_connection.targetBlock();
        if (r) {
          r.set_visible_as_child(!this.collapsed_);
        }
      }
      if (this.comment && this.set_comment_visible(!this.collapsed_), this.collapsed_) {
        if (this.warning) {
          this.warning.set_expanded(!1);
        }
        if (e) {
          this.remove_input(s.COLLAPSED_INPUT_NAME, !0);
        }
        var i = this.to_string(this.theme.blink_params.COLLAPSE_CHARS);
        this.append_dummy_input(s.COLLAPSED_INPUT_NAME).append_field(i).init();
      } else {
        this.remove_input(s.COLLAPSED_INPUT_NAME, !0);
      }
      this.rendered = t;
      if (t || e) {
        this.render();
      }
      this.collapsed_dirty = !1;
    }
  };
  t.prototype.set_comment_visible = function (e) {
    if (this.comment) {
      if (e && !this.is_collapsed()) {
        this.comment.get_svg_root().style.display = "block";
        this.comment.reposition();
        this.comment.bring_to_front();
      } else {
        this.comment.get_svg_root().style.display = "none";
      }
    }
  };
  t.prototype.set_visible_as_child = function (e) {
    this.rendered = e;
    this.get_svg_root().style.display = e ? "block" : "none";
    this.get_descendants(!1, !0).forEach(function (t) {
      var n = e && !t.is_collapsed() && !t.get_collapsed_surround_parent();
      t.set_comment_visible(n);
    });
  };
  t.prototype.get_collapsed_surround_parent = function () {
    var e = this.get_surround_parent();
    if (e) {
      return e.is_collapsed() ? e : e.get_collapsed_surround_parent();
    }
    for (var t = this.get_parent(); t && (!s.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(t.type) || !t.is_collapsed());) {
      t = t.get_parent();
    }
    return t;
  };
  t.prototype.is_insertion_marker = function () {
    return this._is_insertion_marker;
  };
  t.prototype.set_on_change = function (e) {
    if (this.onchange && this.workspace) {
      this.workspace.remove_change_listener(this.onchange);
    }
    this.onchange = e;
    this.workspace.add_change_listener(this.onchange);
  };
  t.prototype.set_on_block_change = function (e) {
    var t = this;
    if (!this.is_in_flyout && !this.is_insertion_marker()) {
      this.workspace.add_change_listener(function (n) {
        if (!(n.type !== a.BlockEventType.CREATE && n.type !== a.BlockEventType.CHANGE && n.type !== a.BlockEventType.DELETE)) {
          if (t.id === n.get_block_id()) {
            e.call(t, n);
          }
        }
      });
    }
  };
  t.prototype.append_block_input = function (e, t) {
    var n = this.generate_block(e);
    var r = t.connection;
    if (r) {
      var i = n.output_connection || n.previous_connection;
      if (i) {
        i.connect(r);
      }
      r.set_hidden(!0);
    }
    return n;
  };
  t.prototype.generate_block = function (e) {
    var t = this.utils.string_to_dom(e);
    return this.xml.dom_to_block(t, this.workspace);
  };
  t.prototype.interpolate_ = function (e, t, n) {
    for (var r = this.utils.tokenize_interpolation(e), i = [], o = 0, a = [], s = 0; s < r.length; s++) {
      var c = r[s];
      if ("number" == typeof c) {
        if (c <= 0 || c > t.length) {
          throw new Error('Block "' + this.type + '": Message index %' + c + " out of range.");
        }
        if (i[c]) {
          throw new Error('Block "' + this.type + '": Message index %' + c + " duplicated.");
        }
        i[c] = !0;
        o++;
        a.push(t[c - 1]);
      } else if (c = c.trim()) {
        a.push(c);
      }
    }
    if (o != t.length) {
      throw new Error('Block "' + this.type + '": Message does not reference all ' + t.length + " arg(s). Massage: " + e);
    }
    var u = a[a.length - 1];
    if (a.length && ("string" == typeof u || u.type.startsWith("field_"))) {
      var l = {
        type: "input_dummy",
        name: ""
      };
      if (n) {
        Object.assign(l, {
          align: n
        });
      }
      a.push(l);
    }
    var f = [];
    for (s = 0; s < a.length; s++) {
      var h = a[s];
      if ("string" != typeof h) {
        var d = void 0;
        var p = void 0;
        if ("string" != typeof h) {
          if (h.custom) {
            d = this.init_custom_field(h);
            f.push([d, h.name]);
          } else {
            switch (h.type) {
              case "input_shadow":
                p = this.append_shadow_input_json(h.name, h.field_type, h.default_text);
                break;
              case "input_value":
                p = this.append_value_input(h.name, void 0, void 0, h.default_shadow);
                break;
              case "input_statement":
                p = this.append_statement_input(h.name, void 0, h.provided_context);
                break;
              case "input_dummy":
                p = this.append_dummy_input(h.name);
                break;
              case "field_label":
                d = this.field_label_factory({
                  text: this.utils.replace_message_references(h.text),
                  opt_class: h.class
                });
                break;
              case "field_label_serializable":
                d = this.field_label_serializable_factory({
                  text: this.utils.replace_message_references(h.text),
                  opt_class: h.class
                });
                break;
              case "field_input":
                d = this.new_field_text_input_from_json(h);
                break;
              case "field_colour":
                d = this.field_colour_factory({
                  colour: h.colour,
                  opt_validator: h.validator
                });
                break;
              case "field_dropdown":
                d = this.field_dropdown_factory({
                  menu_generator: h.options,
                  opt_onchange: h.onchange,
                  selected_index: h.selected_index,
                  opt_validator: h.validator
                });
                break;
              case "field_dropdown_advanced":
                d = this.field_dropdown_factory({
                  menu_generator: [],
                  opt_onchange: h.onchange,
                  selected_index: h.selected_index,
                  opt_validator: h.validator,
                  menu_generator_advanced: h.advanced_options
                });
                break;
              case "field_image":
              case "field_button":
                var _ = this.parse_field_image_param_from_json(h),
                  A = _.src,
                  g = _.width,
                  v = _.height,
                  m = _.alt,
                  y = _.callback,
                  b = _.circle;
                d = "field_image" === h.type ? this.field_image_factory({
                  src: A,
                  width: g,
                  height: v,
                  opt_alt: m
                }) : this.field_button_factory({
                  src: A,
                  width: g,
                  height: v,
                  opt_alt: m,
                  opt_callback: y,
                  has_circle: b
                });
                break;
              case "field_icon":
                if (!h.is_head) {
                  break;
                }
                d = this.field_icon_factory({
                  src: h.src,
                  opt_alt: h.alt,
                  opt_is_head: h.is_head
                });
                break;
              case "mutation_add_button":
                d = this.mutation_add_factory(void 0);
                break;
              case "mutation_remove_button":
                d = this.mutation_remove_factory(void 0);
                break;
              case "field_number":
                d = this.field_number_factory({
                  opt_value: h.value,
                  opt_min: h.min,
                  opt_max: h.max,
                  opt_precision: h.precision,
                  opt_controller: h.controller
                });
                break;
              case "field_textdropdown":
                d = this.field_text_dropdown_factory(h.options);
                break;
              case "field_multiline_input":
                d = this.field_multiline_input(h);
                break;
              case "field_default_value":
                d = this.field_default_value(h);
                break;
              default:
                d = this.init_custom_field(h);
            }
            if (d) {
              if (void 0 !== h.margin_left) {
                d.margin_left = h.margin_left;
              }
              f.push([d, h.name]);
            } else if (p) {
              if (h.check) {
                p.set_check(h.check);
              }
              if (void 0 !== h.margin_left) {
                p.margin_left = h.margin_left;
              }
              for (var w = 0; w < f.length; w++) {
                p.append_field(f[w][0], f[w][1]);
              }
              f.length = 0;
            }
          }
        } else {
          d = this.field_label_factory({
            text: h
          });
        }
      } else {
        f.push([h, void 0]);
      }
    }
  };
  t.prototype.init_custom_field = function (e) {
    var t = this.registry.field.from_json(e);
    if (t) {
      return t;
    }
    var n = e.type;
    if (n) {
      var r = n.split("_").map(function (e) {
        return e[0].toUpperCase() + e.slice(1);
      }).join("");
      if (window.Blockly[r]) {
        t = new window.Blockly[r](e);
      }
    }
    if (!t) {
      throw new ReferenceError("Trying to init an undefined type of field");
    }
    return t;
  };
  t.prototype.get_input = function (e) {
    for (var t = 0; t < this.inputList.length; t++) {
      var n = this.inputList[t];
      if (n.name == e) {
        return n;
      }
    }
  };
  t.prototype.set_disabled = function (e) {
    var t = void 0;
    if (this.disabled !== e) {
      if (this.events.is_enabled()) {
        t = this.change_event_factory("disabled", {
          block: this,
          old_value: this.disabled,
          new_value: e
        });
      }
      this.disabled = e;
    }
    if (this.is_rendered()) {
      this.update_disabled();
    }
    if (t) {
      this.events.fire(t);
    }
  };
  t.prototype.set_editable = function (e) {
    this.editable_ = e;
    for (var t = 0; t < this.inputList.length; t++) {
      for (var n = this.inputList[t], r = 0; r < n.fieldRow.length; r++) {
        n.fieldRow[r].update_editable();
      }
    }
  };
  t.prototype.set_connections_hidden = function (e) {
    if (!e && this.is_collapsed()) {
      if (this.output_connection) {
        this.output_connection.set_hidden(e);
      }
      if (this.previous_connection) {
        this.previous_connection.set_hidden(e);
      }
      if (this.next_connection && !s.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type)) {
        this.next_connection.set_hidden(e);
        if (r = this.next_connection.targetBlock()) {
          r.set_connections_hidden(e);
        }
      }
    } else {
      for (var t = this.get_connections(!0), n = 0; n < t.length; n++) {
        var r;
        var i = t[n];
        if (i.set_hidden(e), i.is_superior()) {
          if (r = i.targetBlock()) {
            r.set_connections_hidden(e);
          }
        }
      }
    }
  };
  t.prototype.get_surround_parent = function () {
    var e;
    var t = this;
    do {
      if (e = t, !(t = t.get_parent() || t.parent_group)) {
        return;
      }
    } while (t.get_next_block() == e);
    return t;
  };
  t.prototype.get_top_group = function () {
    for (var e = this, t = void 0; e;) {
      if (e.parent_group) {
        e = t = e.parent_group;
      }
      e = e.get_parent();
    }
    return t;
  };
  t.prototype.get_top_parent = function () {
    for (var e = this; e.parent_block;) {
      e = e.parent_block;
    }
    return e;
  };
  t.prototype.get_connections = function (e) {
    var t = [];
    if ((e || this.rendered) && (this.output_connection && t.push(this.output_connection), this.previous_connection && t.push(this.previous_connection), this.next_connection && t.push(this.next_connection), e || !this.is_collapsed())) {
      for (var n = 0; n < this.inputList.length; n++) {
        var r = this.inputList[n];
        if (r.connection) {
          t.push(r.connection);
        }
      }
    }
    return t;
  };
  t.prototype.get_full_next_connection = function () {
    if (this.next_connection) {
      return this.next_connection;
    }
    if (this.is_starting_block()) {
      for (var e = 0; e < this.inputList.length; e++) {
        var t = this.inputList[e];
        if (t.type === a.InputType.STATEMENT) {
          return t.connection;
        }
      }
    }
  };
  t.prototype.last_connection_in_stack = function () {
    for (var e = this.get_full_next_connection(); e;) {
      var t = e.targetBlock();
      if (!t) {
        return e;
      }
      e = t.next_connection;
    }
  };
  t.prototype.get_input_with_connection = function (e) {
    for (var t = 0; t < this.inputList.length; t++) {
      var n = this.inputList[t];
      if (n.connection == e) {
        return n;
      }
    }
  };
  t.prototype.get_first_statement_connection = function () {
    for (var e = 0; e < this.inputList.length; e++) {
      var t = this.inputList[e];
      if (t.connection && t.connection.type == a.CONNECTION_TYPE.NEXT_STATEMENT) {
        return t.connection;
      }
    }
  };
  t.prototype.get_matching_connection = function (e, t) {
    var n = this.get_connections(!0);
    var r = e.get_connections(!0);
    if (!this.is_insertion_marker() && n.length != r.length) {
      throw new Error("Connection lists did not match in length.");
    }
    for (var i = 0; i < r.length; i++) {
      if (r[i] == t) {
        return n[i];
      }
    }
  };
  t.prototype.unplug = function (e) {
    if (this.output_connection) {
      if (this.output_connection.is_connected()) {
        this.output_connection.disconnect();
      }
    } else if (this.previous_connection) {
      var t = void 0;
      if (this.previous_connection.is_connected()) {
        t = this.previous_connection.get_targe_connection();
        this.previous_connection.disconnect();
      }
      var n = this.get_next_block();
      if (e && n) {
        var r = this.next_connection;
        if (!r) {
          return;
        }
        var i = r.get_targe_connection();
        if (!i) {
          return;
        }
        i.disconnect();
        if (t && t.check_type(i)) {
          t.connect(i);
        }
      }
    }
  };
  t.prototype.get_input_with_block = function (e) {
    for (var t = 0; t < this.inputList.length; t++) {
      var n = this.inputList[t];
      if (n.connection && n.connection.targetBlock() == e) {
        return n;
      }
    }
  };
  t.prototype.get_input_target_block = function (e) {
    var t = this.get_input(e);
    return t && t.connection && t.connection.targetBlock();
  };
  t.prototype.get_field_value = function (e) {
    var t = this.get_field(e);
    if (t) {
      return t.get_value();
    }
  };
  t.prototype.get_shadow_field = function (e, t) {
    if (void 0 === t) {
      t = "NUM";
    }
    var n = this.get_input(e);
    if (n && n.connection) {
      var r = n.connection.target_connection;
      if (r) {
        return r.source_block.get_field(t);
      }
    }
  };
  t.prototype.get_shadow_field_value = function (e, t) {
    if (void 0 === t) {
      t = "NUM";
    }
    var n = this.get_shadow_field(e, t);
    if (n) {
      return n.get_value();
    }
  };
  t.prototype.set_field_value = function (e, t) {
    var n = this.get_field(t);
    if (!n) {
      throw new ReferenceError("Field " + t + " not found.");
    }
    n.set_value(e);
  };
  t.prototype.get_input_with_field = function (e) {
    for (var t = 0; t < this.inputList.length; t++) {
      for (var n = this.inputList[t], r = 0; r < n.fieldRow.length; r++) {
        if (n.fieldRow[r].name === e) {
          return n;
        }
      }
    }
  };
  t.prototype.set_next_statement = function (e, t) {
    if (e) {
      if (void 0 == t) {
        t = void 0;
      }
      if (!this.next_connection) {
        this.next_connection = this.make_connection(a.CONNECTION_TYPE.NEXT_STATEMENT);
      }
      this.next_connection.set_check(t);
    } else {
      if (this.next_connection) {
        (0, c.assert)(!this.next_connection.is_connected(), "Must disconnect next statement before removing connection.");
        this.next_connection.dispose();
        this.next_connection = void 0;
      }
    }
  };
  t.prototype.set_previous_statement = function (e, t) {
    if (e) {
      if (void 0 == t) {
        t = void 0;
      }
      if (!this.previous_connection) {
        (0, c.assert)(!this.output_connection, "Remove output connection prior to adding previous connection.");
        this.previous_connection = this.make_connection(a.CONNECTION_TYPE.PREVIOUS_STATEMENT);
      }
      this.previous_connection.set_check(t);
    } else {
      if (this.previous_connection) {
        (0, c.assert)(!this.previous_connection.is_connected(), "Must disconnect previous statement before removing connection.");
        this.previous_connection.dispose();
        this.previous_connection = void 0;
      }
    }
  };
  t.prototype.set_output = function (e, t, n) {
    if (e) {
      if (!this.output_connection) {
        if (void 0 != this.previous_connection) {
          throw new Error("Remove previous connection prior to adding output connection.");
        }
        this.output_connection = this.make_connection(a.CONNECTION_TYPE.OUTPUT_VALUE, n);
      }
      var r = (0, f.is_array)(t) && t.indexOf("Any") > -1 || "Any" === t;
      if (t && !r) {
        this.output_connection.set_check(t);
      }
    } else if (this.output_connection) {
      if (this.output_connection.is_connected()) {
        throw new Error("Must disconnect output value before removing connection.");
      }
      this.output_connection.dispose();
      this.output_connection = void 0;
    }
  };
  t.prototype.append_value_input = function (e, t, n, r) {
    var i = this.append_input(a.InputType.VALUE, e, t, n);
    if ("string" === typeof r) {
      i.connection.set_shadow_from_string(r);
    } else {
      i.connection.set_shadow_dom(r);
    }
    return i;
  };
  t.prototype.respawn_all_shadows = function () {
    var e;
    var t;
    if (!(null === (e = this.previous_connection) || void 0 === e)) {
      e.respawn_shadow();
    }
    if (!(null === (t = this.next_connection) || void 0 === t)) {
      t.respawn_shadow();
    }
    this.inputList.forEach(function (e) {
      var t;
      if (!(null === (t = e.connection) || void 0 === t)) {
        t.respawn_shadow();
      }
    });
  };
  t.prototype.append_statement_input = function (e, t, n) {
    return this.append_input(a.InputType.STATEMENT, e, t, n);
  };
  t.prototype.append_dummy_input = function (e, t) {
    return this.append_input(a.InputType.DUMMY, e || "", t);
  };
  t.prototype.append_shadow_input = function (e, t, n) {
    return this.append_shadow(a.InputType.VALUE, e, t, (0, u.gen_uid)(), n);
  };
  t.prototype.append_math_shadow = function (e, t) {
    return this.append_shadow_input(e, this.Blink.Blocks.SHADOW.math, t);
  };
  t.prototype.append_logic_shadow = function (e, t) {
    return this.append_shadow_input(e, this.Blink.Blocks.SHADOW.logic, t);
  };
  t.prototype.append_text_shadow = function (e, t) {
    return this.append_shadow_input(e, this.Blink.Blocks.SHADOW.text, t);
  };
  t.prototype.append_multiline_text_shadow = function (e, t) {
    return this.append_shadow_input(e, this.Blink.Blocks.SHADOW.multiline_text, t);
  };
  t.prototype.append_default_value_shadow = function (e, t) {
    return this.append_shadow_input(e, this.Blink.Blocks.SHADOW.default_value, t);
  };
  t.prototype.append_shadow_input_json = function (e, t, n, r) {
    var i = {
      text: '<shadow type="text"><field name="TEXT">' + (n = void 0 == n ? "" : n) + "</field></shadow>",
      math: '<shadow type="math_number"><field name="NUM">' + n + "</field></shadow>",
      bool: '<empty type="logic_empty"><field name="BOOL"></field></empty>'
    };
    return this.append_shadow(a.InputType.VALUE, e, i[t], void 0, r);
  };
  t.prototype.append_input = function (e, t, n, r) {
    var i = e === a.InputType.DUMMY ? void 0 : this.make_connection(e, r);
    var o = this.input_factory({
      type: e,
      name: t,
      block: this,
      connection: i
    });
    if (void 0 === n) {
      this.inputList.push(o);
    } else {
      n = "number" === typeof n ? n : this.get_input_index(n);
      this.inputList.splice(n, 0, o);
    }
    return o;
  };
  t.prototype.get_descendants = function (e, t) {
    if (void 0 === e) {
      e = !1;
    }
    if (void 0 === t) {
      t = !1;
    }
    for (var n = [this], r = this.get_children(e), i = 0; i < r.length; i++) {
      var o = r[i];
      if (!(t && o.is_shadow())) {
        n.push.apply(n, o.get_descendants(e, t));
      }
    }
    return n;
  };
  t.prototype.get_descendant_ids = function () {
    for (var e = [this.id], t = this.get_descendants(), n = 0; n < t.length; n++) {
      var r = t[n];
      e[n] = r.id;
    }
    return e;
  };
  t.prototype.get_nested_block = function () {
    for (var e = [], t = 0; t < this.inputList.length; t++) {
      var n = this.inputList[t];
      if (!(n.name in s.SPECIAL_CONNECTION_INPUT_NAME) && n.connection && n.connection.type === a.CONNECTION_TYPE.INPUT_VALUE) {
        var r = n.connection.targetBlock();
        if (r) {
          e.push(r);
        }
      }
    }
    return e;
  };
  t.prototype.get_all_nested_blocks = function () {
    for (var e = [this], t = this.get_nested_block(), n = 0; n < t.length; n++) {
      var r = t[n];
      e.push.apply(e, r.get_all_nested_blocks());
    }
    return e;
  };
  t.prototype.get_next_block = function () {
    return this.next_connection && this.next_connection.targetBlock();
  };
  t.prototype.get_full_next_block = function () {
    var e = this.get_full_next_connection();
    return e && e.targetBlock();
  };
  t.prototype.get_field = function (e) {
    for (var t = 0; t < this.inputList.length; t++) {
      for (var n = this.inputList[t], r = 0; r < n.fieldRow.length; r++) {
        var i = n.fieldRow[r];
        if (i.name === e) {
          return i;
        }
      }
    }
  };
  t.prototype.get_field_icon = function () {
    for (var e = 0; e < this.inputList.length; e++) {
      for (var t = this.inputList[e], n = 0; n < t.fieldRow.length; n++) {
        var r = t.fieldRow[n];
        if ("FieldIcon" === r.field_type) {
          return r;
        }
      }
    }
  };
  t.prototype.set_tooltip = function (e) {
    this.tooltip = e;
  };
  t.prototype.new_field_text_input_from_json = function (e) {
    var t = this.utils.replace_message_references(e.text || "");
    var n = this.field_text_input_factory({
      text: t,
      opt_validator: e.validator
    });
    if ("boolean" == typeof e.spellcheck) {
      n.set_spell_check(e.spellcheck);
    }
    return n;
  };
  t.prototype.parse_field_image_param_from_json = function (e) {
    return {
      src: this.utils.replace_message_references(e.src),
      width: Number(this.utils.replace_message_references("" + e.width)),
      height: Number(this.utils.replace_message_references("" + e.height)),
      alt: this.utils.replace_message_references(e.alt || ""),
      callback: "field_button" === e.type ? e.callback : void 0,
      circle: "field_button" === e.type ? e.circle : void 0
    };
  };
  t.prototype.mixin = function (e, t) {
    if (!t) {
      var n = [];
      for (var r in e) {
        if (void 0 != this[r]) {
          n.push(r);
        }
      }
      if (n.length) {
        throw new Error("Mixin will overwrite block members: " + JSON.stringify(n));
      }
    }
    Object.assign(this, e);
  };
  t.prototype.move_input_before = function (e, t) {
    if (e != t) {
      for (var n = -1, r = t ? -1 : this.inputList.length, i = 0; i < this.inputList.length; i++) {
        var o = this.inputList[i];
        if (o.name == e) {
          if (n = i, -1 != r) {
            break;
          }
        } else if (t && o.name == t && (r = i, -1 != n)) {
          break;
        }
      }
      if (-1 == n) {
        console.warn("Named input " + e + " not found.");
      }
      if (-1 == r) {
        console.warn("Reference input " + r + " not found.");
      }
      this.move_numbered_input_before(n, r);
    }
  };
  t.prototype.to_string = function (e, t) {
    if (void 0 === t) {
      t = "...";
    }
    var n = [];
    var r = this.get_input(s.COLLAPSED_INPUT_NAME);
    if (r && this.collapsed_) {
      return r.fieldRow[0].get_text();
    }
    for (var i = 0; i < this.inputList.length; i++) {
      for (var o, a = this.inputList[i], c = 0; c < a.fieldRow.length; c++) {
        var u = a.fieldRow[c];
        if ((0, f.is_field_dropdown)(u) && !u.get_value()) {
          n.push(t);
        } else {
          n.push(u.get_text());
        }
      }
      if (a.connection) {
        if (o = a.connection.targetBlock()) {
          n.push(o.to_string(void 0, t));
        } else {
          n.push(t);
        }
      }
    }
    if ("start_on_click" === this.type) {
      if (o = this.get_next_block()) {
        n.push(o.to_string(void 0, t));
      }
    }
    var l = n.join(" ").trim() || " ";
    if (e) {
      l = "" + l.substring(0, e - 3) + t;
    }
    return l;
  };
  Object.defineProperty(t.prototype, "use_drag_surface", {
    get: function () {
      var e = this.workspace.current_gesture_;
      return !(e && e.is_start_from_flyout()) && this.workspace.degrade_translate ? this.workspace.blockDB_.size < this.workspace.degrade_translate : !!this.workspace.get_block_drag_surface();
    },
    enumerable: !1,
    configurable: !0
  });
  t.prototype.move_by = function (e) {
    var t;
    if (this.events.is_enabled() && !this.is_shadow()) {
      t = this.move_event_factory({
        block: this
      });
    }
    var n = i.vec2.create();
    if (!this.is_shadow()) {
      n = this.get_relative_to_surface_xy();
    }
    this.translate(i.vec2.add(n, n, e));
    this.move_connections(e);
    if (t) {
      t.record_new();
    }
    if (this.rendered) {
      this.workspace.resize_contents();
    }
    if (t) {
      this.events.fire(t);
    }
  };
  t.prototype.append_shadow = function (e, t, n, r, i) {
    this.rendered;
    this.events.disable();
    var o = this.make_connection(e);
    var a = this.input_factory({
      type: e,
      name: t,
      block: this,
      connection: o
    });
    var s = this.utils.string_to_dom(n);
    o.set_shadow_dom(s);
    var u = this.xml.dom_to_block_headless(s, this.workspace, r);
    if (u.output_connection ? o.connect(u.output_connection) : u.previous_connection ? o.connect(u.previous_connection) : (0, c.fail)("Child block does not have output or previous statement."), void 0 === i ? this.inputList.push(a) : (i = "number" === typeof i ? i : this.get_input_index(i), this.inputList.splice(i, 0, a)), !this.is_insertion_marker() && this.rendered) {
      for (var l = this.get_descendants(), f = 0; f < l.length; f++) {
        if (!l[f].is_insertion_marker()) {
          l[f].init_svg();
          l[f].render(!1);
        }
      }
    }
    this.update_disabled();
    this.workspace.resize_contents();
    this.events.enable();
    return a;
  };
  t.prototype.move_connections = function (e) {
    for (var t = this.get_connections(!0), n = 0; n < t.length; n++) {
      t[n].move_by(e);
    }
    var r = this.get_icons();
    for (n = 0; n < r.length; n++) {
      r[n].reposition();
    }
    for (n = 0; n < this.child_blocks.length; n++) {
      this.child_blocks[n].move_connections(e);
    }
  };
  t.prototype.dispose = function (e, t) {
    var n;
    var r;
    if (null === (n = this.parent_group) || void 0 === n || n.dispose(), this.workspace) {
      this.utils.start_text_cache();
      var i;
      var o = this.workspace;
      if (this.runtime_data.selected === this) {
        this.unselect();
        this.workspace.cancel_current_gesture();
      }
      if (this.context_menu.current_block == this) {
        this.context_menu.hide();
      }
      if (t && this.rendered) {
        this.unplug(e);
        this.block_animations.dispose_ui_effect(this);
      }
      this.rendered = !1;
      if (this.onchange) {
        this.workspace.remove_change_listener(this.onchange);
      }
      this.unplug(e);
      if (this.events.is_enabled()) {
        i = this.delete_event_factory({
          block: this
        });
      }
      this.events.disable();
      try {
        for (var a = this.get_icons(), s = 0; s < a.length; s++) {
          a[s].dispose();
        }
      } finally {
        this.events.enable();
      }
      this.events.disable();
      try {
        if (this.workspace) {
          this.workspace.remove_top_block(this);
          this.workspace.blockDB_.delete(this.id);
          this.workspace = void 0;
        }
        if (this.runtime_data.selected == this) {
          this.runtime_data.selected = void 0;
        }
        for (s = this.child_blocks.length - 1; s >= 0; s--) {
          this.child_blocks[s].dispose(!1);
        }
        for (s = 0; s < this.inputList.length; s++) {
          this.inputList[s].dispose();
        }
        this.inputList.length = 0;
        var c = this.get_connections(!0);
        for (s = 0; s < c.length; s++) {
          var u = c[s];
          if (u.is_connected()) {
            u.disconnect();
          }
          c[s].dispose();
        }
      } finally {
        this.events.enable();
      }
      if ((null === (r = this.Blink.tooltip) || void 0 === r ? void 0 : r.get_element()) === this.svg_path) {
        this.Blink.tooltip.hide();
      }
      if (!(this.is_shadow() || this.is_insertion_marker())) {
        o.resize_contents();
      }
      (0, l.remove_children)(this.svg_group);
      delete this.svg_path;
      (0, l.remove_node)(this.svg_group);
      this.utils.stop_text_cache();
      if (i) {
        this.events.fire(i);
      }
    }
  };
  t.prototype.detach = function () {
    if (!this.workspace) {
      throw new Error("Trying to detach a block without workspace.");
    }
    this.events.disable();
    try {
      for (var e = this.get_icons(), t = 0; t < e.length; t++) {
        e[t].dispose();
      }
      if (this.onchange) {
        this.workspace.remove_change_listener(this.onchange);
      }
      this.workspace.blockDB_.delete(this.id);
      if (this.workspace.get_top_blocks(!1).includes(this)) {
        this.workspace.remove_top_block(this);
        this.workspace = void 0;
        if (this.svg_group) {
          (0, l.remove_node)(this.svg_group);
        }
      }
      for (t = this.child_blocks.length - 1; t >= 0; t--) {
        this.child_blocks[t].detach();
      }
    } finally {
      this.events.enable();
    }
  };
  t.prototype.retach = function (e) {
    e.add_top_block(this);
    this.set_workspace(e);
    this.init_svg();
    for (var t = this.get_descendants(), n = t.length - 1; n >= 0; n--) {
      e.blockDB_.set(t[n].id, t[n]);
      var r = t[n].get_relative_to_surface_xy();
      t[n].move_by(i.vec2.negate(r, r));
    }
  };
  t.prototype.make_connection = function (e, t) {
    return this.connection_factory({
      source: this,
      type: e,
      context: t
    });
  };
  t.prototype.show_context_menu = function (e) {
    var t = this;
    if (!this.workspace.get_options().readOnly && this.context_menu && this.is_deletable() && this.is_movable() && !this.is_in_flyout) {
      var n = [];
      this.context_menu_options_setting.forEach(function (e) {
        if ("number" === typeof e) {
          switch (e) {
            case a.BlockOptionType.COPY:
              return t.options_add_copy(n);
            case a.BlockOptionType.COPY_AND_PASTE:
              return t.options_add_duplicate(n);
            case a.BlockOptionType.ADD_COMMENT:
              return t.options_add_comments(n);
            case a.BlockOptionType.COLLAPSE:
              return t.options_add_collapse(n);
            case a.BlockOptionType.DELETE:
              return t.options_add_delete_blocks(n);
            case a.BlockOptionType.SET_GROUP:
              return void (t.workspace.options.block_group && t.options_add_set_blocks_group(n));
            case a.BlockOptionType.VISIBILITY_CHANGE:
              return t.add_visibility_change_option(n);
            default:
              return console.warn("Undefined block menu option: " + e);
          }
        }
        var r = e(t);
        if (r) {
          n.push(r);
        }
      });
      this.context_menu.current_block = this;
      this.context_menu.show(e, {
        source: "block",
        options: n
      }, this.RTL);
    }
  };
  t.prototype.options_add_copy = function (e) {
    var t = this;
    var n = {
      text: this.Msg.DUPLICATE_BLOCK,
      name: "copy",
      area: "block",
      enabled: !0,
      callback: function () {
        t.runtime_data.clipboard.copy(t);
      }
    };
    if (this.get_descendants().length > this.workspace.remaining_capacity()) {
      n.enabled = !1;
    }
    e.push(n);
  };
  t.prototype.options_add_duplicate = function (e) {
    var t = this;
    e.push({
      text: this.Msg.COPY_AND_PASTE,
      name: "copy_and_paste",
      enabled: !0,
      callback: function () {
        t.runtime_data.clipboard.duplicate(t);
      }
    });
  };
  t.prototype.options_add_comments = function (e) {
    var t;
    var n = this;
    if (this.is_editable() && !this.is_collapsed() && this.workspace.get_options().comments && "block_group" !== this.element_type) {
      t = this.comment ? {
        enabled: !d.is.ie(),
        text: this.Msg.REMOVE_COMMENT,
        name: "remove_comment",
        callback: function () {
          if (n.comment) {
            n.set_comment_text(void 0);
          }
        }
      } : {
        enabled: !d.is.ie(),
        text: this.Msg.ADD_COMMENT,
        name: "add_comment",
        callback: function () {
          return (0, r.__awaiter)(n, void 0, void 0, function () {
            var e;
            return (0, r.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return "simplified" !== this.workspace.get_options().comment_type ? [3, 2] : [4, this.workspace.show_external_comment_editor("")];
                case 1:
                  if (!(void 0 == (e = t.sent()))) {
                    this.set_comment_text(e);
                    (0, c.assert)(this.comment);
                    this.comment.init_svg();
                    this.comment.set_expanded(!0);
                  }
                  return [2];
                case 2:
                  this.set_comment_text("");
                  (0, c.assert)(this.comment);
                  this.comment.init_svg();
                  this.comment.focus();
                  return [2];
              }
            });
          });
        }
      };
      e.push(t);
    }
  };
  t.prototype.options_add_collapse = function (e) {
    var t = this;
    if (this.workspace.get_options().collapse) {
      if (this.is_collapsed()) {
        var n = {
          text: this.Msg.EXPAND_BLOCK,
          name: "expand",
          enabled: !0,
          callback: function () {
            t.set_collapsed(!1);
          }
        };
        e.push(n);
      } else {
        var r = {
          enabled: !0,
          text: this.Msg.COLLAPSE_BLOCK,
          name: "collapse",
          callback: function () {
            t.set_collapsed(!0);
          }
        };
        e.push(r);
      }
    }
  };
  t.prototype.options_add_delete_blocks = function (e) {
    var t = this;
    var n = {
      text: this.Msg.DELETE_BLOCK,
      name: "delete",
      area: "block",
      enabled: !0,
      callback: function () {
        var e = t.events.get_group();
        t.events.set_group(e || !0);
        t.dispose(!0, !0);
        t.events.set_group(e);
      }
    };
    e.push(n);
  };
  t.prototype.options_add_set_blocks_group = function (e) {
    var t = this;
    var n = {
      text: this.utils.replace_message_references("%{BKY_BLOCK_GROUP}"),
      name: "block_group",
      area: "block",
      enabled: !0,
      callback: function () {
        t.hide_into_group();
      }
    };
    e.push(n);
  };
  t.prototype.add_visibility_change_option = function (e) {
    var t = this;
    var n = this.get_root_block().get_visibility() === a.BlockVisibility.VISIBLE;
    e.push({
      text: this.utils.replace_message_references("%{BKY_" + (n ? "HIDE" : "SHOW") + "_BLOCK_STACK}"),
      name: "change_visibility",
      enabled: !0,
      callback: function () {
        t.set_chunk_visibility(n ? a.BlockVisibility.TRANSLUCENT : a.BlockVisibility.VISIBLE);
        t.update_chunk_visibility();
      }
    });
  };
  t.prototype.set_comment_text = function (e, t, n) {
    if ((0, f.is_string)(e)) {
      if (!this.comment) {
        this.comment = this.workspace_comment_factory({
          workspace: this.workspace,
          type: this.workspace.options.comment_type,
          parent_block: this,
          opt_id: t,
          position: n
        });
      }
      this.comment.set_text(e);
    }
    if (!(0, f.is_string)(e) && this.comment) {
      this.comment.dispose();
      this.comment = void 0;
    }
  };
  t.prototype.get_comment_text = function () {
    if (this.comment) {
      var e = this.comment.get_text();
      return (0, _.string_trim)(e);
    }
    return "";
  };
  t.prototype.add_hover = function () {
    this.svg_group.setAttribute("filter", "url(#" + A.FILTER.DRAG_SHADOW + ")");
  };
  t.prototype.remove_hover = function () {
    this.svg_group.removeAttribute("filter");
  };
  t.prototype.unselect = function () {
    if (this.runtime_data.selected == this) {
      this.runtime_data.selected = void 0;
      this.remove_select();
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.SELECTED,
          workspace_id: this.workspace.id,
          block_id: this.id
        }));
      }
    }
  };
  t.prototype.init_svg = function () {
    if (void 0 == this.svg_group) {
      throw new ReferenceError("Cannot init svg to block without svg group.");
    }
    if (!this._is_insertion_marker) {
      for (var e = 0; e < this.inputList.length; e++) {
        this.inputList[e].init();
      }
      if (this.warning) {
        this.warning.create_icon();
      }
    }
    this.update_colour();
    this.update_movable();
    this.init_events();
    var t = this.get_svg_root();
    var n = this.workspace.get_canvas();
    if ((void 0 == t || void 0 == t.parentNode) && void 0 != n) {
      if (this.is_insertion_marker() && this.output_connection) {
        return;
      }
      n.appendChild(this.svg_group);
    }
  };
  t.prototype.init_events = function () {
    var t = this;
    if (e.prototype.init_events.call(this), this.svg_path) {
      if (!(this.is_in_flyout || this.is_shadow() || !this.is_output_block())) {
        this.svg_group.addEventListener("mouseover", function (e) {
          var n;
          e.stopPropagation();
          if (!(0, l.is_inside_shadow)(e.relatedTarget) && (null === (n = t.output_connection) || void 0 === n ? void 0 : n.is_connected())) {
            t.svg_group.classList.add("output-block-hover");
          }
        });
        this.svg_group.addEventListener("mouseout", function (e) {
          e.stopPropagation();
          if (!(0, l.is_inside_shadow)(e.relatedTarget)) {
            t.svg_group.classList.remove("output-block-hover");
          }
        });
      }
      if (!(this.is_in_flyout || !this.is_wrap_shape() && !this.is_shadow())) {
        this.svg_path.addEventListener("mouseover", function (e) {
          e.stopPropagation();
          n(!0);
        });
        this.svg_path.addEventListener("mouseout", function (e) {
          e.stopPropagation();
          n(!1);
        });
      }
      var n = function (e) {
        var n = t.is_shadow() ? t.parent_block : t;
        if (n && n.is_wrap_shape() && n.svg_path) {
          var r = n.get_surround_parent();
          var i = r && !r.is_starting_block();
          var o = n.svg_group.querySelector(".blocklySurroundShadow");
          if (e && !o && !n.workspace.is_dragging()) {
            var a = (0, l.clone_node)(n.svg_path);
            a.classList.add("blocklySurroundShadow");
            n.svg_group.appendChild(a);
            if (!i) {
              n.svg_path.setAttribute("filter", "url(#" + A.FILTER.SURROUND_SHADOW + ")");
            }
          }
          if (!e && o) {
            n.svg_group.removeChild(o);
            n.svg_path.removeAttribute("filter");
          }
        }
      };
    }
  };
  t.prototype.clear_hover_effect = function () {
    var e;
    (0, l.remove_class_if_necessary)(this.svg_group, "output-block-hover");
    var t = this.svg_group.querySelector(".blocklySurroundShadow");
    if (t) {
      (0, l.remove_node)(t);
    }
    if (!(null === (e = this.svg_path) || void 0 === e)) {
      e.removeAttribute("filter");
    }
  };
  t.prototype.update_movable = function () {
    e.prototype.update_movable.call(this);
    if (this.is_shadow() && "param_color" !== this.element_type) {
      this.svg_group.classList.remove("blocklyDraggable");
      this.svg_group.classList.add("blocklyShadow");
    }
  };
  t.prototype.update_disabled = function () {
    if (!this.svg_group || !this.svg_path) {
      throw new ReferenceError("Cannot update disable to block without init.");
    }
    if (!this.is_insertion_marker() && !this.prevent_disable_style_change) {
      if (this.disabled || this.get_inherited_disabled()) {
        (0, l.add_class_if_necessary)(this.svg_group, "blocklyDisabled");
        if (!this.is_shadow()) {
          this.svg_path.setAttribute("fill", "url(#" + this.workspace.get_options().disabledPatternId + ")");
        }
        if (this.is_starting_block() && (e = this.get_field_icon()) && e.image_element) {
          e.image_element.setAttribute("filter", "url(#" + A.FILTER.DISABLED_HEAD_ICON + ")");
        }
      } else if (this.svg_group.classList.contains("blocklyDisabled")) {
        var e;
        if (this.svg_group.classList.remove("blocklyDisabled"), this.is_starting_block()) {
          if ((e = this.get_field_icon()) && e.image_element) {
            e.image_element.removeAttribute("filter");
          }
        }
        this.update_colour();
      }
    }
    for (var t = this.get_children(), n = 0; n < t.length; n++) {
      t[n].update_disabled();
    }
  };
  t.prototype.get_output_shape = function () {
    return void 0 != this.output_connection && this.output_connection.get_output_shape();
  };
  t.prototype.is_text_shadow = function () {
    if (!this.is_shadow()) {
      return !1;
    }
    for (var e = 0; e < this.inputList.length; e++) {
      for (var t = this.inputList[e], n = 0; n < t.fieldRow.length; n++) {
        var r = t.fieldRow[n];
        if ((0, f.is_field_number)(r) || (0, f.is_field_text_input)(r) || "FieldTextDropdown" === r.field_type || "FieldMultilineInput" === r.field_type || "FieldDefaultValue" === r.field_type) {
          return !0;
        }
      }
    }
    return !1;
  };
  t.prototype.get_relative_to_surface_xy = function () {
    var e;
    var t;
    var n = this.use_drag_surface ? null === (e = this.workspace.get_block_drag_surface()) || void 0 === e ? void 0 : e.get_group() : void 0;
    var r = this.get_svg_root();
    if (void 0 == r) {
      return i.vec2.create();
    }
    var o = i.vec2.create();
    do {
      if (i.vec2.add(o, o, this.utils.get_relative_xy(r)), this.use_drag_surface && (null === (t = this.workspace.get_block_drag_surface()) || void 0 === t ? void 0 : t.get_current_block()) == r) {
        var a = this.workspace.get_block_drag_surface().get_surface_translation();
        i.vec2.add(o, o, [a[0], a[1]]);
      }
      r = r.parentNode;
    } while (r && r != this.workspace.get_canvas() && r != n);
    return o;
  };
  t.prototype.get_relative_to_injection_div_xy = function () {
    var e = this.get_svg_root();
    return this.utils.get_injection_div_xy(e);
  };
  t.prototype.get_icons = function () {
    var e = [];
    if (this.comment) {
      e.push(this.comment);
    }
    if (this.warning) {
      e.push(this.warning);
    }
    return e;
  };
  t.prototype.set_dragging = function (e) {
    if (void 0 != this.svg_group) {
      var t = this.svg_group;
      if (e) {
        t.translate_ = "";
        t.skew_ = "";
        this.runtime_data.dragging_connections = this.runtime_data.dragging_connections.concat(this.get_connections(!0));
        (0, l.add_class)(t, "blocklyDragging");
      } else {
        this.runtime_data.dragging_connections = [];
        (0, l.remove_class)(t, "blocklyDragging");
      }
      for (var n = 0; n < this.child_blocks.length; n++) {
        this.child_blocks[n].set_dragging(e);
      }
    } else {
      console.warn("Cannot set delete style for block without init.");
    }
  };
  t.prototype.snap_to_grid = function () {
    if (this.workspace && !(this.workspace.is_dragging() || this.workspace.current_gesture_ && this.workspace.current_gesture_.has_started) && !this.get_parent() && !this.is_in_flyout) {
      var e = this.workspace.get_grid();
      if (e && "string" !== typeof e && e.should_snap()) {
        var t = e.get_spacing();
        var n = t / 2;
        var r = this.get_relative_to_surface_xy();
        i.vec2.round(r, [Math.round((r[0] - n) / t) * t + n - r[0], Math.round((r[1] - n) / t) * t + n - r[1]]);
        if (!(0 == r[0] && 0 == r[1])) {
          this.move_by(r);
        }
      }
    }
  };
  t.prototype.schedule_snap_and_bump = function () {
    var e = this;
    var t = this;
    var n = this.events.get_group();
    window.setTimeout(function () {
      if (!(e.events.get_group() && e.events.get_group() !== n)) {
        e.events.set_group(n);
        t.snap_to_grid();
        e.events.set_group(!1);
      }
    }, this.theme.blink_params.BUMP_DELAY / 2);
    window.setTimeout(function () {
      if (!(e.events.get_group() && e.events.get_group() !== n)) {
        e.events.set_group(n);
        t.bump_neighbours();
        e.events.set_group(!1);
      }
    }, this.theme.blink_params.BUMP_DELAY);
  };
  t.prototype.set_insertion_marker = function (e) {
    if (this._is_insertion_marker = e, this._is_insertion_marker) {
      var t = this.workspace.get_options().connection_effect;
      var n = t ? t.color : this.theme.insertion_marker.COLOR;
      this.set_colour(n);
      this.set_opacity(this.theme.insertion_marker.OPACITY);
      if (void 0 != this.svg_group) {
        (0, l.add_class)(this.svg_group, "InsertionMarker");
      }
    }
    this.update_colour();
  };
  t.prototype.highlight_for_replacement = function (e) {
    if (void 0 != this.svg_path && void 0 != this.svg_group) {
      if (e) {
        if ((0, l.add_class)(this.svg_group, "blocklyReplaceable"), !this.is_shadow() || "param_color" === this.element_type) {
          this.svg_path.setAttribute("stroke", "#ffffff");
          return void this.svg_path.setAttribute("stroke-width", "3");
        }
        if (this.get_stroke_width() !== this.theme.shadow_style.NO_BORDER) {
          var t = this.parent_block.get_colour();
          this.svg_path.setAttribute("stroke", t.toString());
          this.svg_path.setAttribute("stroke-width", "2");
          return void this.svg_path.setAttribute("filter", "url(#" + A.FILTER.REPLACEMENT_GLOW + ")");
        }
        this.svg_path.setAttribute("stroke", "#ffffff");
        this.svg_path.setAttribute("stroke-width", "3");
        return void (this.is_editable() && !this.is_text_shadow() && (this.svg_path.style.fillOpacity = "0.1"));
      }
      (0, l.remove_class)(this.svg_group, "blocklyReplaceable");
      this.svg_path.setAttribute("stroke", this.get_border_colour().toString());
      this.svg_path.setAttribute("stroke-width", this.get_stroke_width());
      this.svg_path.removeAttribute("filter");
      this.svg_path.style.fillOpacity = "";
    } else {
      console.warn("Cannot highlight block without init.");
    }
  };
  t.prototype.position_new_block = function (e, t, n) {
    if (t.type == a.CONNECTION_TYPE.NEXT_STATEMENT) {
      var r = i.vec2.create();
      i.vec2.sub(r, n.get_xy(), t.get_xy());
      e.move_by(r);
    }
  };
  t.prototype.bring_to_front = function () {
    var e = this;
    if (this.workspace.svg_block_canvas_) {
      var t = this;
      do {
        var n = t.get_svg_root();
        if (void 0 != n && void 0 != n.parentNode) {
          n.parentNode.appendChild(n);
        }
        t = t.get_parent();
      } while (t);
      var r = [];
      this.get_descendants().forEach(function (e) {
        if (e.comment) {
          r.push(e.comment.get_svg_root());
        }
      });
      Array.from(this.workspace.svg_block_canvas_.children).forEach(function (t) {
        if (r.includes(t)) {
          e.workspace.svg_block_canvas_.appendChild(t);
        }
      });
    }
  };
  t.prototype.get_parent = function () {
    return this.parent_block;
  };
  t.prototype.set_parent = function (e) {
    if (this.workspace.svg_block_canvas_) {
      var t = this.get_parent();
      if (e !== t) {
        if (this.utils.start_text_cache(), this.parent_block) {
          if ((0, p.remove)(this.parent_block.child_blocks, this), this.previous_connection && this.previous_connection.is_connected()) {
            throw new Error("Still connected to previous block.");
          }
          if (this.output_connection && this.output_connection.is_connected()) {
            throw new Error("Still connected to parent block.");
          }
          this.parent_block = void 0;
        } else {
          this.workspace.remove_top_block(this);
        }
        this.parent_block = e;
        if (e) {
          e.child_blocks.push(this);
        } else {
          this.workspace.add_top_block(this);
        }
        this.utils.stop_text_cache();
        var n = this.get_svg_root();
        if (!this.workspace.is_clearing && n) {
          var r = this.get_relative_to_surface_xy();
          if (e) {
            e.get_svg_root().appendChild(n);
            var o = this.get_relative_to_surface_xy();
            this.move_connections(i.vec2.subtract(o, o, r));
            if (this.is_shadow()) {
              this.set_colour(this.get_colour(), this.get_border_colour());
            }
          } else if (t) {
            if (!(this.runtime_data.selected === this && this.workspace.is_dragging())) {
              this.workspace.svg_block_canvas_.appendChild(n);
              this.translate(r);
            }
          }
        }
      }
    }
  };
  t.prototype.select = function () {
    if (this.is_shadow() && this.get_parent()) {
      var e = this.get_parent();
      if (void 0 != e) {
        e.select();
      }
    } else if (this.runtime_data.selected != this) {
      var t = void 0;
      if (this.runtime_data.selected) {
        t = this.runtime_data.selected.id;
        this.events.disable();
        try {
          this.runtime_data.selected.unselect();
        } catch (r) {
          console.error(r);
        } finally {
          this.events.enable();
        }
      }
      if (this.runtime_data.selected = this, this.events.is_enabled()) {
        var n = this.ui_event_factory({
          type: a.UIEventType.SELECTED,
          workspace_id: this.workspace.id,
          old_value: t,
          new_value: this.id
        });
        this.events.fire(n);
      }
    }
  };
  t.prototype.move_to_drag_surface = function () {
    this.clear_hover_effect();
    if ("mobile" !== this.workspace.options.blockly_type) {
      this.svg_group.setAttribute("filter", "url(#" + A.FILTER.DRAG_SHADOW + ")");
    }
    e.prototype.move_to_drag_surface.call(this);
  };
  t.prototype.set_inputs_inline = function (e) {
    var t;
    if (this.inputs_inline !== e) {
      if (this.events.is_enabled()) {
        t = this.change_event_factory("inline", {
          block: this,
          old_value: !!this.inputs_inline,
          new_value: e
        });
      }
      this.inputs_inline = e;
    }
    if (this.rendered) {
      this.render();
    }
    if (t) {
      this.events.fire(t);
    }
  };
  t.prototype.get_inputs_inline = function () {
    return void 0 == this.inputs_inline || this.inputs_inline;
  };
  t.prototype.set_glow_stack = function (e) {
    this.is_glowing_stack = e;
    var t = this.svg_group;
    if (void 0 == t) {
      throw new Error("Block may not been init.");
    }
    if (this.is_glowing_stack) {
      (0, l.add_class_if_necessary)(t, "blocklyStackGlow");
    } else {
      (0, l.remove_class_if_necessary)(t, "blocklyStackGlow");
    }
  };
  t.prototype.set_flash = function (e) {
    this.is_flashing = e;
    this.block_animations.block_flash_effect(this, this.is_flashing);
  };
  t.prototype.add_select = function () {
    this.set_glow_stack(!0);
  };
  t.prototype.remove_select = function () {
    this.set_glow_stack(!1);
  };
  t.prototype.bump_neighbours = function () {
    if (this.workspace && !(this.workspace.is_dragging() || this.workspace.current_gesture_ && this.workspace.current_gesture_.is_dragging() && this.workspace.current_gesture_.has_started) && this.events.is_record_undo() && this.workspace.is_resizes_enabled()) {
      var e = this.get_top_parent();
      if (!e.is_in_flyout && (!s.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type) && !this.is_include_special_input() || !this.is_collapsed())) {
        for (var t = this.get_connections(!1), n = 0; n < t.length; n++) {
          var r = t[n];
          var i = r.targetBlock();
          if (void 0 != i && r.is_connected() && r.is_superior()) {
            i.bump_neighbours();
          }
          for (var o = r.neighbours_(this.theme.blink_params.SNAP_RADIUS), a = 0; a < o.length; a++) {
            var c = o[a];
            if (!r.is_connected() || !c.is_connected()) {
              var u = c.get_source_block().get_top_parent();
              if ("hidden" !== (null === u || void 0 === u ? void 0 : u.get_visibility()) && u != e) {
                if (r.is_superior()) {
                  c.bump_away_from(r);
                } else {
                  r.bump_away_from(c);
                }
              }
            }
          }
        }
      }
    }
  };
  t.prototype.get_height_width = function () {
    var e = this.height;
    var t = this.width;
    if (this.is_wrap_shape() && !this.is_collapsed()) {
      this.inputList.forEach(function (e) {
        if (e.type === a.InputType.STATEMENT && e.connection) {
          var n = e.connection.targetBlock();
          if (n) {
            t = Math.max(t, n.get_height_width().width);
          }
        }
      });
    }
    var n = this.get_full_next_block();
    if (this.is_collapsed() && this.is_starting_block() && (n = void 0), n) {
      var r = n.get_height_width();
      e += r.height;
      t = Math.max(t, r.width);
    }
    return {
      height: e,
      width: t
    };
  };
  t.prototype.get_blocks_svg_path_width = function () {
    var e = this.svg_path_width;
    var t = this.get_next_block();
    if (t) {
      e = Math.max(e, t.get_blocks_svg_path_width());
    }
    return e;
  };
  t.prototype.tab = function (e, t) {
    var n = this.create_tab_list();
    var r = e && n.indexOf(e);
    if (!("number" === typeof r && -1 !== r)) {
      r = t ? -1 : n.length;
    }
    var i = n[t ? r + 1 : r - 1];
    if (i) {
      if ((0, f.is_func)(i.tab)) {
        i.tab(void 0, t);
      } else {
        if ((0, f.is_func)(i.show_editor)) {
          i.show_editor();
        }
      }
    } else {
      var o = this.output_connection && this.output_connection.targetBlock();
      if (o) {
        o.tab(this, t);
      } else {
        var a = t ? this.get_next_block() : this.get_previous_block();
        if (a) {
          a.tab(this, t);
        }
      }
    }
  };
  t.prototype.create_tab_list = function () {
    for (var e = [], t = 0; t < this.inputList.length; t++) {
      for (var n = this.inputList[t], r = 0; r < n.fieldRow.length; r++) {
        var i = n.fieldRow[r];
        if (i.show_editor) {
          e.push(i);
        }
      }
      if (n.connection) {
        var o = n.connection.targetBlock();
        if (o) {
          e.push(o);
        }
      }
    }
    return e;
  };
  t.prototype.remove_input = function (e, t) {
    for (var n = 0; n < this.inputList.length; n++) {
      var r = this.inputList[n];
      if (r.name == e) {
        if (r.connection && r.connection.is_connected()) {
          r.connection.set_shadow_dom(void 0);
          var i = r.connection.targetBlock();
          if (i.is_shadow()) {
            this.events.disable();
            i.dispose();
            this.events.enable();
          } else {
            i.unplug();
          }
        }
        r.dispose();
        this.inputList.splice(n, 1);
        return void (this.rendered && this.render());
      }
    }
    if (!t) {
      console.warn("Input " + e + " not found.");
    }
    if (this.rendered) {
      this.render();
    }
  };
  t.prototype.move_numbered_input_before = function (e, t) {
    if (e == t) {
      throw new Error("Can't move input to itself.");
    }
    if (e >= this.inputList.length) {
      throw new Error("Input index " + e + " out of bounds.");
    }
    if (t > this.inputList.length) {
      throw new Error("Reference input " + t + " out of bounds.");
    }
    var n = this.inputList[e];
    this.inputList.splice(e, 1);
    if (e < t) {
      t--;
    }
    this.inputList.splice(t, 0, n);
    if (this.rendered) {
      this.render();
    }
  };
  t.prototype.is_render_notch = function () {
    return this.workspace.options.notch;
  };
  t.prototype.get_visibility = function () {
    return this.visibility_;
  };
  t.prototype.set_visibility = function (e) {
    this.visibility_ = e;
  };
  t.prototype.set_chunk_visibility = function (e) {
    var t;
    var n = this.get_top_parent();
    if (n.visibility_ !== e) {
      if (this.events.is_enabled()) {
        t = this.change_event_factory("visibility", {
          block: n,
          old_value: n.visibility_,
          new_value: e
        });
      }
      n.visibility_ = e;
      if (t) {
        this.events.fire(t);
      }
    }
  };
  t.prototype.update_chunk_visibility = function () {
    if (!this.parent_block) {
      this.events.disable();
      var e = this.get_top_parent();
      var t = e.get_descendants();
      (0, l.update_visibility_class)(e.svg_group, e.get_visibility());
      var n = "hidden" !== e.get_visibility();
      e.set_connectable(n);
      if (e.comment) {
        e.comment.update_visibility();
      }
      t.forEach(function (t) {
        if (t !== e && t.visibility_ !== a.BlockVisibility.VISIBLE) {
          t.visibility_ = a.BlockVisibility.VISIBLE;
          (0, l.update_visibility_class)(t.svg_group, a.BlockVisibility.VISIBLE);
          if (t.comment) {
            t.comment.update_visibility();
          }
        }
      });
      this.events.enable();
    }
  };
  t.prototype.is_connectable = function () {
    return this.connectable_;
  };
  t.prototype.set_connectable = function (e) {
    this.connectable_ = e;
  };
  t.prototype.is_stack_connectable = function () {
    for (var e, t = this; t;) {
      if (!t.is_connectable()) {
        return !1;
      }
      t = null === (e = t.previous_connection) || void 0 === e ? void 0 : e.targetBlock();
    }
    return !0;
  };
  t.prototype.get_input_index = function (e) {
    var t = this.get_input(e);
    return t ? this.inputList.indexOf(t) : -1;
  };
  t.prototype.mutation_to_string = function () {
    if (!this.mutationToDom) {
      return "";
    }
    var e = this.mutationToDom();
    return e ? this.xml.dom_to_text(e) : "";
  };
  t.prototype.string_to_mutation = function (e) {
    if (this.domToMutation) {
      if (e) {
        this.domToMutation(this.xml.text_to_dom(e));
      } else {
        try {
          this.domToMutation(void 0);
        } catch (t) {}
      }
    }
  };
  t.prototype.set_opacity = function (e) {
    this.opacity = e;
    if (this.rendered) {
      this.update_colour();
    }
  };
  t.prototype.to_dev_string = function () {
    var e = this.type ? '"' + this.type + '" block' : "Block";
    if (this.id) {
      e += ' (id="' + this.id + '")';
    }
    return e;
  };
  t.prototype.is_rendered = function () {
    return this.rendered;
  };
  t.prototype.set_rendered = function (e) {
    this.rendered = e;
  };
  t.prototype.set_category = function (e) {
    this.category_ = e;
  };
  t.prototype.set_output_shape = function (e) {
    this.output_shape = e;
  };
  t.prototype.set_help_url = function (e) {
    this.help_url = e;
  };
  t.prototype.options_add_help = function (e) {
    var t = this;
    var n = {
      enabled: !!((0, f.is_func)(this.help_url) ? this.help_url() : this.help_url),
      name: "help",
      text: this.Msg.HELP,
      callback: function () {
        t.show_help();
      }
    };
    e.push(n);
  };
  t.prototype.show_help = function () {
    if (this.help_url) {
      window.open(this.help_url);
    }
  };
  t.prototype.sort = function (e) {
    var t = this.get_relative_to_surface_xy();
    this.move_by(i.vec2.sub(t, e, t));
    this.snap_to_grid();
    i.vec2.add(e, e, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT]);
  };
  t.prototype.for_each_descendant_element = function (e, t) {
    var n;
    if (void 0 === t && (t = !1), e(this), this.comment && e(this.comment), t) {
      for (i = 0; i < this.inputList.length; i++) {
        if (o = null === (n = this.inputList[i].connection) || void 0 === n ? void 0 : n.targetBlock()) {
          o.for_each_descendant_element(e, !0);
        }
      }
      var r = this.get_next_block();
      if (r) {
        r.for_each_descendant_element(e, !0);
      }
    } else {
      for (var i = 0; i < this.child_blocks.length; i++) {
        var o;
        (o = this.child_blocks[i]).for_each_descendant_element(e, !1);
      }
    }
  };
  t.prototype.get_original_colour = function () {
    return this.colour_;
  };
  t.prototype.get_border_colour = function () {
    var e;
    return this.is_shadow() && "param" !== this.element_type && "param_color" !== this.element_type ? (null === (e = this.parent_block) || void 0 === e ? void 0 : e.get_border_colour()) || this.theme.block_color.DEFAULT.border : this.border_colour;
  };
  t.prototype.get_stroke_width = function () {
    return this.is_shadow() && "param" !== this.element_type && "param_color" !== this.element_type ? this.is_editable() && this.is_text_shadow() ? this.theme.shadow_style.BORDER : this.theme.shadow_style.NO_BORDER : "1px";
  };
  t.prototype.get_colour = function () {
    var e;
    var t;
    if (this.is_shadow() && "param" !== this.element_type && "param_color" !== this.element_type) {
      return this.is_editable() ? this.theme.shadow_style.SHADOW_COLOR : this.theme.shadow_style.EMPTY_COLOR;
    }
    if ((this.disabled || this.get_inherited_disabled()) && !this.prevent_disable_style_change) {
      return this.theme.disabled_color.fill;
    }
    if (this.layer_colour && this.is_output_block() && (null === (e = this.parent_block) || void 0 === e ? void 0 : e.get_colour()) === this.colour_) {
      return this.layer_colour;
    }
    if (!this.is_editable()) {
      var n = (null === (t = this.get_parent()) || void 0 === t ? void 0 : t.get_colour()) || this.colour_;
      return (0, h.darken)(n, .1);
    }
    return this.colour_;
  };
  t.prototype.set_colour_by_key = function (e) {
    var t = e && this.theme.get_color(e);
    if (t) {
      this.set_colour(t.fill, t.border, t.layer);
    }
  };
  t.prototype.set_colour_from_json = function (e) {
    this.set_colour_by_key(e.colour);
  };
  t.prototype.set_colour = function (e, t, n) {
    this.colour_ = "string" === typeof e ? new h.Color(e) : e;
    this.border_colour = void 0 != t ? "string" === typeof t ? new h.Color(t) : t : (0, h.darken)(this.colour_, .1);
    this.layer_colour = void 0 != n ? "string" === typeof n ? new h.Color(n) : n : void 0;
    if (this.rendered) {
      this.update_colour();
    }
  };
  t.prototype.update_colour = function () {
    if (!this.svg_path) {
      throw new ReferenceError("Cannot update color without svg path.");
    }
    this.svg_path.setAttribute("fill", this.get_colour().toString());
    this.svg_path.setAttribute("stroke", this.get_border_colour().toString());
    this.svg_path.setAttribute("stroke-opacity", "1");
    this.svg_path.setAttribute("stroke-width", this.get_stroke_width());
    if (this.warning) {
      this.warning.update_colour();
    }
  };
  t.prototype.update_layer_colour = function () {
    if (!this.disabled && !this.get_inherited_disabled() && this.is_output_block() && this.svg_path) {
      var e = this.get_colour().toString();
      if (this.svg_path.getAttribute("fill") !== e) {
        this.svg_path.setAttribute("fill", e);
      }
      for (var t = 0; t < this.child_blocks.length; t++) {
        this.child_blocks[t].update_layer_colour();
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.Blink)], t.prototype, "Blink", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.context_menu)], t.prototype, "context_menu", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.extensions)], t.prototype, "extensions", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.Msg)], t.prototype, "Msg", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.xml)], t.prototype, "xml", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.RenderedConnection)], t.prototype, "RenderedConnection", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.registry)], t.prototype, "registry", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldLabel)], t.prototype, "field_label_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldLabelSerializable)], t.prototype, "field_label_serializable_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldColour)], t.prototype, "field_colour_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldDropdown)], t.prototype, "field_dropdown_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldIcon)], t.prototype, "field_icon_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldButton)], t.prototype, "field_button_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.MutationAddButton)], t.prototype, "mutation_add_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.MutationRemoveButton)], t.prototype, "mutation_remove_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldNumber)], t.prototype, "field_number_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldTextDropdown)], t.prototype, "field_text_dropdown_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldTextInput)], t.prototype, "field_text_input_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldDefaultValue)], t.prototype, "field_default_value", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldImage)], t.prototype, "field_image_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldMultilineInput)], t.prototype, "field_multiline_input", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.Input)], t.prototype, "input_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.RenderedConnection)], t.prototype, "connection_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.ChangeEvent)], t.prototype, "change_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.WorkspaceComment)], t.prototype, "workspace_comment_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.BlockGroup)], t.prototype, "block_group_factory", void 0);
  return t;
}(require("./962").WorkspaceElement);
exports.BlockSvg = g;