/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1353
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.BaseNode = undefined
var r = require("../../../123/index")
var i = function () {
  function e(e) {
    this.children_ = []
    this.selectable_ = true
    this.selected_ = false
    this.disabled_ = false
    this.expanded_ = true
    this.name_ = e || ""
  }
  e.prototype.get_name = function () {
    return this.name_
  }
  e.prototype.set_tree = function (e) {
    this.parent_ = e
  }
  e.prototype.get_tree = function () {
    return this.parent_
  }
  e.prototype.get_element = function () {
    return this.element_
  }
  e.prototype.get_children_container = function () {
    return this.children_container_
  }
  e.prototype.dispose = function () {
    this.children_ = []
  }
  e.prototype.has_children = function () {
    return this.children_.length > 0
  }
  e.prototype.get_children = function () {
    return this.children_
  }
  e.prototype.remove_child_at = function (e) {
    return this.remove_child(this.children_[e])
  }
  e.prototype.remove_child = function (e) {
    if (!e || e.get_tree() !== this) {
      throw new Error("Not our child.")
    }
    e.dispose()
    return e
  }
  e.prototype.remove_children = function () {
    for (var e = []; this.has_children();) {
      e.push(this.remove_child_at(0))
    }
    return e
  }
  e.prototype.add_child_at = function (e, t) {
    var n = e.get_tree()
    if (n !== this) {
      if (undefined != n) {
        n.remove_child(e)
      }
      var i = this.children_[t]
      this.children_.splice(t, 0, e)
      if (i) {
        (0, r.insert_before)(e.html_div, i.html_div)
      } else {
        this.children_container_.appendChild(e.html_div)
      }
      e.set_tree(this)
      return e
    }
  }
  e.prototype.add = function (e) {
    return this.add_child_at(e, this.children_.length)
  }
  e.prototype.is_selectable = function () {
    return this.selectable_
  }
  e.prototype.is_selected = function () {
    return this.selected_
  }
  e.prototype.select = function () {
    this.selected_ = true
  }
  e.prototype.unselect = function () {
    this.selected_ = false
  }
  e.prototype.set_disabled = function (e) {
    if (e !== this.disabled_) {
      this.disabled_ = e
    }
  }
  e.prototype.is_disabled = function () {
    return this.disabled_
  }
  e.prototype.set_expanded = function (e) {
    if (e !== this.expanded_) {
      this.expanded_ = e
      var /* [auto-meaningful-name] */BlocklyTreeExpanded = "blocklyTreeExpanded"
      if (!this.expanded_ && this.html_div.classList.contains(BlocklyTreeExpanded)) {
        this.html_div.classList.remove(BlocklyTreeExpanded)
      } else {
        if (this.expanded_ && !this.html_div.classList.contains(BlocklyTreeExpanded)) {
          this.html_div.classList.add(BlocklyTreeExpanded)
        }
      }
      this.children_container_.style.display = this.expanded_ ? "" : "none"
    }
  }
  e.prototype.is_expanded = function () {
    return this.expanded_
  }
  return e
}()
exports.BaseNode = i
