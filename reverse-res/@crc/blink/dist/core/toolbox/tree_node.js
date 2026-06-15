"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
var tslib_1 = require("tslib");
var di_1 = require("../di");
var base_1 = require("../utils/base");
var dom_1 = require("../utils/dom");
var base_node_1 = require("./base_node");
var TreeNode = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(TreeNode, _super);
    /**
     * A single node in the tree.
     * @param config_ The configuration for the tree node.
     * @param parent Node that this node belongs to, defaults to the root (i.e. Toolbox).
     */
    function TreeNode(config_) {
        var _this = _super.call(this) || this;
        _this.DEFAULT_CLASSNAMES = {
            NORMAL: 'blocklyTreeRow',
            SELECTED: 'blocklyTreeSelected',
            DISABLED: 'blockly_toolbox_disabled',
        };
        /**
         * Blocks of this category
         * 外部需要重写 get_blocks，此处 public 获取原始值  <== 重写个，用custom
         */
        _this.blocks = [];
        var default_config = {
            text: undefined,
            name: '',
            color: '',
            secondary_color: _this.theme.flyout.BACKGROUND_COLOR.toString(),
            element: {
                unselected_classname: '',
                disabled_classname: '',
                selected_classname: '',
                style: '',
                selected_style: '',
            },
            icon: {
                style: undefined,
                selected_style: undefined,
                html: undefined,
                selected_html: undefined,
                font_id: undefined,
                selected_font_id: undefined,
            },
            children: [],
            blocks: [],
            selectable: true,
        };
        if (config_.text) {
            config_.text = _this.utils.replace_message_references(config_.text);
        }
        _this.config_ = (0, base_1.parse_attr_deep)(default_config, config_);
        _this.init();
        _this.name_ = _this.config_.name || (0, base_1.unique_id)('treenode_');
        _this.selectable_ = _this.config_.selectable;
        _this.blocks = typeof _this.config_.blocks === 'string' ?
            _this.config_.blocks : Array.from(_this.config_.blocks);
        Array.from(_this.config_.children).forEach(function (child_config) {
            var child = new TreeNode(child_config);
            _this.add(child);
        });
        return _this;
    }
    TreeNode.prototype.get_element = function () {
        return this.element_;
    };
    /**
     * @returns 当前分类的主题色。
     */
    TreeNode.prototype.get_color = function () {
        return this.config_.color;
    };
    /**
     * which color that flyout need to set for background color
     */
    TreeNode.prototype.get_flyout_background_color = function () {
        return this.config_.secondary_color;
    };
    TreeNode.prototype.init = function () {
        this.html_div = document.createElement('div');
        this.html_div.className = 'blocklyTreeNode';
        this.element_ = document.createElement('div');
        this.element_.id = this.config_.name;
        this.element_.setAttribute('role', 'treeitem');
        this.element_.setAttribute('name', this.config_.name);
        this.icon_el = document.createElement('div');
        this.icon_el.className = 'blocklyTreeIcon';
        if (this.config_.icon.font_id) {
            (0, dom_1.create_font_icon)(this.config_.icon.font_id, this.icon_el);
        }
        else if (this.config_.icon.html) {
            this.icon_el.innerHTML = this.config_.icon.html;
        }
        if (this.config_.icon.style) {
            this.icon_el.setAttribute('style', this.config_.icon.style);
        }
        this.element_.appendChild(this.icon_el);
        if (this.config_.color) {
            this.element_.style.color = this.config_.color;
            this.element_.dataset.color = this.config_.color;
        }
        if (this.config_.element.style) {
            this.element_.setAttribute('style', this.config_.element.style);
        }
        if (this.config_.text != undefined) {
            var text_el = document.createElement('div');
            text_el.classList.add('blocklyTreeLabel');
            text_el.textContent = this.config_.text;
            this.element_.appendChild(text_el);
        }
        this.children_container_ = document.createElement('div');
        this.children_container_.className = 'blocklyTreeChildren';
        this.html_div.appendChild(this.element_);
        this.html_div.appendChild(this.children_container_);
        this.element_.className = this.get_node_classname();
        this.set_expanded(false);
    };
    TreeNode.prototype.get_blocks = function (is_dynamic) {
        // 外部需要根据 state 改写 xml
        is_dynamic;
        return this.blocks;
    };
    TreeNode.prototype.set_blocks = function (blocks) {
        if (typeof blocks === 'string' || Array.isArray(blocks)) {
            this.blocks = blocks;
        }
        else {
            this.blocks = Array.from(blocks);
        }
    };
    TreeNode.prototype.push_block = function (block) {
        if (typeof this.blocks === 'string') {
            throw Error('Trying to add block to a node with custom key');
        }
        this.blocks.push(block);
    };
    TreeNode.prototype.select = function () {
        if (this.disabled_) {
            return;
        }
        this.selected_ = true;
        this.update_node();
    };
    TreeNode.prototype.unselect = function () {
        this.selected_ = false;
        this.update_node();
    };
    /**
     * @override update_node
     */
    TreeNode.prototype.set_disabled = function (disabled) {
        if (disabled === this.disabled_) {
            return;
        }
        this.disabled_ = disabled;
        this.update_node();
    };
    /**
     * @return The class name for the row.
     */
    TreeNode.prototype.get_node_classname = function () {
        if (this.disabled_) {
            return "\n        " + this.DEFAULT_CLASSNAMES.NORMAL + "\n        " + this.DEFAULT_CLASSNAMES.DISABLED + "\n        " + this.config_.element.disabled_classname + "\n      ";
        }
        if (this.is_selected()) {
            return "\n        " + this.DEFAULT_CLASSNAMES.NORMAL + "\n        " + this.DEFAULT_CLASSNAMES.SELECTED + "\n        " + this.config_.element.selected_classname + "\n      ";
        }
        return "\n      " + this.DEFAULT_CLASSNAMES.NORMAL + "\n      " + this.config_.element.unselected_classname + "\n    ";
    };
    /**
     * Update the node'style
     */
    TreeNode.prototype.update_node = function () {
        // Update classname for custom style from outside
        this.element_.className = this.get_node_classname();
        if (this.is_selected()) {
            this.element_.style.backgroundColor = this.get_color();
            if (this.config_.element.selected_style) {
                this.element_.setAttribute('style', this.config_.element.selected_style);
            }
            if (this.config_.icon.selected_style != undefined) {
                this.icon_el.setAttribute('style', this.config_.icon.selected_style);
            }
            if (this.config_.icon.selected_font_id != undefined) {
                (0, dom_1.remove_children)(this.icon_el);
                (0, dom_1.create_font_icon)(this.config_.icon.selected_font_id, this.icon_el);
            }
            else if (this.config_.icon.selected_html != undefined) {
                this.icon_el.innerHTML = this.config_.icon.selected_html;
            }
            this.element_.setAttribute('aria-selected', 'true');
            return;
        }
        this.element_.style.backgroundColor = '';
        // 只有在选择时发生了改变的，才需要在取消选择时变回原样
        if (this.config_.element.style && this.config_.element.selected_style) {
            this.element_.setAttribute('style', this.config_.element.style);
        }
        if (this.config_.icon.style && this.config_.icon.selected_style) {
            this.icon_el.setAttribute('style', this.config_.icon.style);
        }
        if (this.config_.icon.font_id && this.config_.icon.selected_font_id) {
            (0, dom_1.remove_children)(this.icon_el);
            (0, dom_1.create_font_icon)(this.config_.icon.font_id, this.icon_el);
        }
        else if (this.config_.icon.html && this.config_.icon.selected_html) {
            this.icon_el.innerHTML = this.config_.icon.html;
        }
        this.element_.setAttribute('aria-selected', 'false');
    };
    TreeNode.prototype.dispose = function () {
        if (this.parent_) {
            var siblings = this.parent_.get_children();
            var index = siblings.indexOf(this);
            siblings.splice(index, 1);
        }
        this.html_div.remove();
        this.set_tree(undefined);
    };
    TreeNode.prototype.find_node_by_name = function (name) {
        if (this.name_ === name) {
            return this;
        }
        for (var i = 0; i < this.children_.length; i++) {
            var node = this.children_[i];
            if (node.get_name() === name) {
                return node;
            }
            var deeper_node = node.find_node_by_name(name);
            if (deeper_node) {
                return deeper_node;
            }
        }
        return undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], TreeNode.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], TreeNode.prototype, "utils", void 0);
    return TreeNode;
}(base_node_1.BaseNode));
exports.TreeNode = TreeNode;
