"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BaseNode = void 0;
var r = require("../../../125/index");
var i = function () {
  function e(e) {
    this.children_ = [];
    this.selectable_ = !0;
    this.selected_ = !1;
    this.disabled_ = !1;
    this.expanded_ = !0;
    this.name_ = e || "";
  }
  e.prototype.get_name = function () {
    return this.name_;
  };
  e.prototype.set_tree = function (e) {
    this.parent_ = e;
  };
  e.prototype.get_tree = function () {
    return this.parent_;
  };
  e.prototype.get_element = function () {
    return this.element_;
  };
  e.prototype.get_children_container = function () {
    return this.children_container_;
  };
  e.prototype.dispose = function () {
    this.children_ = [];
  };
  e.prototype.has_children = function () {
    return this.children_.length > 0;
  };
  e.prototype.get_children = function () {
    return this.children_;
  };
  e.prototype.remove_child_at = function (e) {
    return this.remove_child(this.children_[e]);
  };
  e.prototype.remove_child = function (e) {
    if (!e || e.get_tree() !== this) {
      throw new Error("Not our child.");
    }
    e.dispose();
    return e;
  };
  e.prototype.remove_children = function () {
    for (var e = []; this.has_children();) {
      e.push(this.remove_child_at(0));
    }
    return e;
  };
  e.prototype.add_child_at = function (e, t) {
    var n = e.get_tree();
    if (n !== this) {
      if (void 0 != n) {
        n.remove_child(e);
      }
      var i = this.children_[t];
      this.children_.splice(t, 0, e);
      if (i) {
        (0, r.insert_before)(e.html_div, i.html_div);
      } else {
        this.children_container_.appendChild(e.html_div);
      }
      e.set_tree(this);
      return e;
    }
  };
  e.prototype.add = function (e) {
    return this.add_child_at(e, this.children_.length);
  };
  e.prototype.is_selectable = function () {
    return this.selectable_;
  };
  e.prototype.is_selected = function () {
    return this.selected_;
  };
  e.prototype.select = function () {
    this.selected_ = !0;
  };
  e.prototype.unselect = function () {
    this.selected_ = !1;
  };
  e.prototype.set_disabled = function (e) {
    if (e !== this.disabled_) {
      this.disabled_ = e;
    }
  };
  e.prototype.is_disabled = function () {
    return this.disabled_;
  };
  e.prototype.set_expanded = function (e) {
    if (e !== this.expanded_) {
      this.expanded_ = e;
      var t = "blocklyTreeExpanded";
      if (!this.expanded_ && this.html_div.classList.contains(t)) {
        this.html_div.classList.remove(t);
      } else {
        if (this.expanded_ && !this.html_div.classList.contains(t)) {
          this.html_div.classList.add(t);
        }
      }
      this.children_container_.style.display = this.expanded_ ? "" : "none";
    }
  };
  e.prototype.is_expanded = function () {
    return this.expanded_;
  };
  return e;
}();
exports.BaseNode = i;