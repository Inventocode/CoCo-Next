"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNode = void 0;
var dom_1 = require("../utils/dom");
var BaseNode = /** @class */ (function () {
    function BaseNode(name) {
        /**
         * Array of ids of all elements in tree element.
         */
        this.children_ = [];
        this.selectable_ = true;
        this.selected_ = false;
        this.disabled_ = false;
        this.expanded_ = true;
        this.name_ = name || '';
    }
    BaseNode.prototype.get_name = function () {
        return this.name_;
    };
    BaseNode.prototype.set_tree = function (parent) {
        this.parent_ = parent;
    };
    BaseNode.prototype.get_tree = function () {
        return this.parent_;
    };
    BaseNode.prototype.get_element = function () { return this.element_; };
    BaseNode.prototype.get_children_container = function () { return this.children_container_; };
    BaseNode.prototype.dispose = function () {
        this.children_ = [];
    };
    BaseNode.prototype.has_children = function () {
        return this.children_.length > 0;
    };
    BaseNode.prototype.get_children = function () {
        return this.children_;
    };
    BaseNode.prototype.remove_child_at = function (index) {
        // removeChild(undefined) will throw error.
        return this.remove_child(this.children_[index]);
    };
    BaseNode.prototype.remove_child = function (child_node) {
        if (!child_node || child_node.get_tree() !== this) {
            throw new Error('Not our child.');
        }
        child_node.dispose();
        return child_node;
    };
    BaseNode.prototype.remove_children = function () {
        var removed = [];
        while (this.has_children()) {
            removed.push(this.remove_child_at(0));
        }
        return removed;
    };
    BaseNode.prototype.add_child_at = function (child, index) {
        var old_tree = child.get_tree();
        if (old_tree === this) {
            return;
        }
        if (old_tree != undefined) {
            old_tree.remove_child(child);
        }
        var ref_child = this.children_[index];
        this.children_.splice(index, 0, child);
        if (ref_child) {
            (0, dom_1.insert_before)(child.html_div, ref_child.html_div);
        }
        else {
            this.children_container_.appendChild(child.html_div);
        }
        child.set_tree(this);
        return child;
    };
    BaseNode.prototype.add = function (child) {
        return this.add_child_at(child, this.children_.length);
    };
    BaseNode.prototype.is_selectable = function () { return this.selectable_; };
    BaseNode.prototype.is_selected = function () {
        return this.selected_;
    };
    BaseNode.prototype.select = function () {
        this.selected_ = true;
    };
    BaseNode.prototype.unselect = function () {
        this.selected_ = false;
    };
    BaseNode.prototype.set_disabled = function (disabled) {
        if (disabled === this.disabled_) {
            return;
        }
        this.disabled_ = disabled;
    };
    BaseNode.prototype.is_disabled = function () {
        return this.disabled_;
    };
    BaseNode.prototype.set_expanded = function (expanded) {
        if (expanded === this.expanded_) {
            return;
        }
        this.expanded_ = expanded;
        var cn = 'blocklyTreeExpanded';
        if (!this.expanded_ && this.html_div.classList.contains(cn)) {
            this.html_div.classList.remove(cn);
        }
        else if (this.expanded_ && !this.html_div.classList.contains(cn)) {
            this.html_div.classList.add(cn);
        }
        this.children_container_.style.display = this.expanded_ ? '' : 'none';
    };
    BaseNode.prototype.is_expanded = function () {
        return this.expanded_;
    };
    return BaseNode;
}());
exports.BaseNode = BaseNode;
