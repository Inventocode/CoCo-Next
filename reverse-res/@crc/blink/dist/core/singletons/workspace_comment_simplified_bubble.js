"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifiedCommentBubble = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var block_1 = require("../utils/block");
var base_1 = require("../utils/base");
var interfaces_1 = require("../interfaces");
var dom_1 = require("../utils/dom");
var SimplifiedCommentBubble = /** @class */ (function () {
    function SimplifiedCommentBubble() {
        this.is_showing = false;
        this.selected_comment = '';
        this.comments = new Map();
    }
    SimplifiedCommentBubble.prototype.popup = function (comment) {
        var _this = this;
        var _a;
        if (this.is_showing) {
            return;
        }
        this.is_showing = true;
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.COMMENT_OPEN,
                workspace_id: comment.workspace.id,
                old_value: false,
                new_value: true,
                block_id: comment.id,
            }));
        }
        // 可能有多个icon，都展示描边
        var svg_icons = (_a = comment.get_icon()) === null || _a === void 0 ? void 0 : _a.children;
        if (svg_icons) {
            for (var i = 0; i < svg_icons.length; i++) {
                svg_icons[i].setAttribute('data-showing', 'true');
            }
        }
        this.update_bubble('reset', comment);
        if (this.bubble_) {
            document.body.appendChild(this.bubble_);
            this.animate_once(this.bubble_, 'showBubbleAnimation');
        }
        // 展开后，对注释以外区域的操作时收起注释
        var hide_comment_bubble = function (e) {
            // 拖动workspace时不收起
            if (e.type === interfaces_1.UIEventType.H_SCROLLBAR_SET
                || e.type === interfaces_1.UIEventType.V_SCROLLBAR_SET) {
                return;
            }
            // 删除一行积木中的某个注释，注释数量不为0则不收起
            if (e.type === interfaces_1.BlockEventType.CHANGE
                && e.element === 'comment'
                && !e.get_new_value()) {
                if (_this.comments.size !== 0) {
                    return;
                }
            }
            // 本行注释被修改，不收起
            if (e.type === interfaces_1.BlockEventType.CHANGE && e.element === 'comment_text') {
                var comment_id = e.get_block_id();
                if (comment_id && _this.comments.get(comment_id)) {
                    return;
                }
            }
            // 点击注释框中的编辑和删除按钮，注释选中或取消选中，不收起
            if (e.type === interfaces_1.UIEventType.SIMPLIFIED_COMMENT_EDIT
                || e.type === interfaces_1.UIEventType.SIMPLIFIED_COMMENT_DELETE
                || e.type === interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT) {
                return;
            }
            if (svg_icons) {
                for (var i = 0; i < svg_icons.length; i++) {
                    svg_icons[i].removeAttribute('data-showing');
                }
            }
            if (!_this.bubble_) {
                return;
            }
            _this.animate_once(_this.bubble_, 'hideBubbleAnimation', function () {
                _this.bubble_ && (0, dom_1.remove_node)(_this.bubble_);
            });
            comment.workspace.remove_change_listener(hide_comment_bubble);
            _this.is_showing = false;
            _this.comments.clear();
            _this.selected_comment = '';
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.ui_event_factory({
                    type: interfaces_1.UIEventType.COMMENT_OPEN,
                    workspace_id: comment.workspace.id,
                    old_value: true,
                    new_value: false,
                    block_id: comment.id,
                }));
            }
        };
        // 点击注释时会触发workspace click等事件，且触发时机在focus之后（即该方法执行后）。
        // 因此此处对hide方法的绑定需要延迟。
        window.setTimeout(function () { return comment.workspace.add_change_listener(hide_comment_bubble); });
    };
    SimplifiedCommentBubble.prototype.update_bubble = function (action, comment) {
        var _this = this;
        var _a;
        var parent_block = comment.get_parent_block();
        if (!parent_block) {
            return;
        }
        if (!this.bubble_) {
            this.bubble_ = document.createElement('div');
            this.bubble_.classList.add('blocklySimplifiedCommentBubble', 'blocklySimplifiedCommentBubbleCover');
            this.bubble_content_ = document.createElement('div');
            this.bubble_content_.classList.add('blocklySimplifiedCommentBubbleContent');
        }
        if (!this.bubble_content_) {
            return;
        }
        // 注释框内容全部重置
        if (action === 'reset') {
            while (this.bubble_content_.firstChild) {
                this.bubble_content_.removeChild(this.bubble_content_.firstChild);
            }
            // 更新注释内容
            var outer_block = (0, block_1.get_outer_block)(parent_block);
            var blocks = (0, block_1.get_nested_blocks_with_comment)(outer_block);
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if ((0, base_1.is_block_group)(block)) {
                    var nested_blocks = block.nested_blocks_with_comment;
                    nested_blocks.forEach(function (b) {
                        _this.create_comment_bubble_text(b);
                    });
                }
                else {
                    this.create_comment_bubble_text(blocks[i]);
                }
            }
            return;
        }
        if (action === 'remove') {
            var text_bubble = this.comments.get(comment.id);
            var text_wrapper = (_a = text_bubble === null || text_bubble === void 0 ? void 0 : text_bubble.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            text_wrapper && this.bubble_content_.removeChild(text_wrapper);
            this.comments.delete(comment.id);
            this.selected_comment = '';
            return;
        }
        if (action === 'edit') {
            var text_bubble = this.comments.get(comment.id);
            if (text_bubble) {
                text_bubble.innerText = comment.get_text();
            }
            return;
        }
    };
    SimplifiedCommentBubble.prototype.create_comment_bubble_text = function (block) {
        var _this = this;
        var comment = block.comment;
        if (!comment) {
            return;
        }
        var bubble_text_wrapper = document.createElement('div');
        bubble_text_wrapper.classList.add('blocklySimplifiedCommentTextWrapper');
        // 注释文字前的小竖条
        var vertical_line = document.createElement('div');
        vertical_line.classList.add('blocklySimplifiedCommentTextDecorator');
        vertical_line.style.backgroundColor = block.get_colour().toString();
        // 注释文字背景
        var bubble_text_bg = document.createElement('div');
        bubble_text_bg.classList.add('blocklySimplifiedCommentTextBg');
        // 注释文字内容
        var bubble_text = document.createElement('div');
        bubble_text.classList.add('blocklySimplifiedCommentText');
        // 如果只有一个执行积木的注释，则不选中
        var is_selectable = function () { return _this.comments.size !== 1 || block.is_output_block(); };
        this.events.bind_event_with_checks(bubble_text_bg, 'click', comment, function () {
            var _a, _b, _c;
            if (!is_selectable()) {
                return;
            }
            var prev_selected_comment = _this.selected_comment;
            // 取消上一个选中
            if (prev_selected_comment) {
                _this.selected_comment = '';
                var text_1 = _this.comments.get(prev_selected_comment);
                (_a = text_1 === null || text_1 === void 0 ? void 0 : text_1.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('blocklySimplifiedCommentTextActive');
                if (_this.events.is_enabled()) {
                    _this.events.fire(_this.ui_event_factory({
                        type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                        workspace_id: comment.workspace.id,
                        old_value: true,
                        new_value: false,
                        block_id: prev_selected_comment,
                    }));
                }
                // 选中当前点击的注释
                if (prev_selected_comment !== comment.id) {
                    _this.selected_comment = comment.id;
                    var text_2 = _this.comments.get(comment.id);
                    (_b = text_2 === null || text_2 === void 0 ? void 0 : text_2.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('blocklySimplifiedCommentTextActive');
                    if (_this.events.is_enabled()) {
                        _this.events.fire(_this.ui_event_factory({
                            type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                            workspace_id: comment.workspace.id,
                            old_value: false,
                            new_value: true,
                            block_id: comment.id,
                        }));
                    }
                }
                return;
            }
            // 直接选中当前点击注释
            _this.selected_comment = comment.id;
            var text = _this.comments.get(comment.id);
            (_c = text === null || text === void 0 ? void 0 : text.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add('blocklySimplifiedCommentTextActive');
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.ui_event_factory({
                    type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                    workspace_id: comment.workspace.id,
                    old_value: false,
                    new_value: true,
                    block_id: comment.id,
                }));
            }
        });
        // 注释文字后的横条
        var separator_line = document.createElement('div');
        separator_line.classList.add('blocklySimplifiedCommentTextSeparator');
        var edit_button = new Image();
        edit_button.src = this.Msg.ICON_COMMENT_EDIT;
        edit_button.alt = 'Edit';
        edit_button.classList.add('blocklySimplifiedCommentEditButton');
        this.events.bind_event_with_checks(edit_button, 'click', comment, function () {
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.ui_event_factory({
                    type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_EDIT,
                    workspace_id: comment.workspace.id,
                    old_value: undefined,
                    new_value: undefined,
                    block_id: comment.id,
                }));
            }
            comment.focus();
        });
        var remove_button = new Image();
        remove_button.src = this.Msg.ICON_COMMENT_REMOVE;
        remove_button.classList.add('blocklySimplifiedCommentRemoveButton');
        this.events.bind_event_with_checks(remove_button, 'click', comment, function () {
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.ui_event_factory({
                    type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_DELETE,
                    workspace_id: comment.workspace.id,
                    old_value: undefined,
                    new_value: undefined,
                    block_id: comment.id,
                }));
            }
            block.set_comment_text(undefined);
        });
        var more_button = new Image();
        more_button.src = this.Msg.ICON_COMMENT_MORE;
        more_button.classList.add('blocklySimplifiedCommentMoreButton');
        more_button.setAttribute('tabindex', '-1');
        /**
         * 记录当前是否为展开状态，用于支持“再次点击收起”功能。
         */
        var is_showing_more = false;
        /**
         * 用于防抖，为true则表示正在执行动画，不接收click动作。
         */
        var showing = false;
        var show_more = function () {
            var _a, _b;
            if (showing) {
                return;
            }
            showing = true;
            var prev_selected_comment;
            if (is_selectable()) {
                // 展开更多操作时，自动选中注释
                prev_selected_comment = _this.selected_comment;
                _this.selected_comment = comment.id;
            }
            if (prev_selected_comment && prev_selected_comment !== comment.id) {
                if (_this.events.is_enabled()) {
                    // 取消选中事件
                    var text = _this.comments.get(prev_selected_comment);
                    (_a = text === null || text === void 0 ? void 0 : text.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('blocklySimplifiedCommentTextActive');
                    _this.events.fire(_this.ui_event_factory({
                        type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                        workspace_id: comment.workspace.id,
                        old_value: true,
                        new_value: false,
                        block_id: prev_selected_comment,
                    }));
                }
            }
            if (_this.selected_comment && prev_selected_comment !== comment.id) {
                // 选中事件
                var text = _this.comments.get(comment.id);
                (_b = text === null || text === void 0 ? void 0 : text.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('blocklySimplifiedCommentTextActive');
                if (_this.events.is_enabled()) {
                    _this.events.fire(_this.ui_event_factory({
                        type: interfaces_1.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                        workspace_id: comment.workspace.id,
                        old_value: false,
                        new_value: true,
                        block_id: comment.id,
                    }));
                }
            }
            edit_button.style.display = 'block';
            _this.animate_once(edit_button, 'showEditButtonAnimation');
            remove_button.style.display = 'block';
            _this.animate_once(remove_button, 'showRemoveButtonAnimation');
            _this.animate_once(more_button, 'expandMoreButtonAnimation', function () {
                more_button.style.transform = 'rotate(90deg)';
                is_showing_more = true;
                showing = false;
            });
            vertical_line.style.opacity = '0.4';
            vertical_line.style.left = '26px';
            bubble_text.style.opacity = '0.4';
            bubble_text_bg.style.marginLeft = '26px';
        };
        var hide_more = function () {
            if (showing) {
                return;
            }
            showing = true;
            _this.animate_once(edit_button, 'hideEditButtonAnimation', function () { return edit_button.style.display = ''; });
            _this.animate_once(remove_button, 'hideRemoveButtonAnimation', function () { return remove_button.style.display = ''; });
            _this.animate_once(more_button, 'collapseMoreButtonAnimation', function () {
                more_button.style.transform = '';
                is_showing_more = false;
                showing = false;
            });
            bubble_text.style.opacity = '';
            bubble_text_bg.style.marginLeft = '';
            vertical_line.style.opacity = '';
            vertical_line.style.left = '';
        };
        this.events.bind_event_with_checks(more_button, 'focus', comment, show_more);
        this.events.bind_event_with_checks(more_button, 'blur', comment, hide_more);
        this.events.bind_event_with_checks(more_button, 'click', comment, function () {
            is_showing_more ? more_button.blur() : more_button.focus();
        });
        bubble_text.innerText = comment.get_text();
        this.comments.set(comment.id, bubble_text);
        if (this.bubble_ && this.bubble_content_) {
            bubble_text_wrapper.appendChild(vertical_line);
            bubble_text_wrapper.appendChild(bubble_text_bg);
            bubble_text_bg.appendChild(bubble_text);
            if (separator_line) {
                bubble_text_wrapper.appendChild(separator_line);
            }
            bubble_text_wrapper.appendChild(edit_button);
            bubble_text_wrapper.appendChild(remove_button);
            bubble_text_wrapper.appendChild(more_button);
            this.bubble_content_.appendChild(bubble_text_wrapper);
            this.bubble_.appendChild(this.bubble_content_);
        }
    };
    SimplifiedCommentBubble.prototype.animate_once = function (target, classname, cb) {
        var end_animation_listener = function () {
            if (!target) {
                return;
            }
            target.removeEventListener('webkitAnimationEnd', end_animation_listener);
            target.removeEventListener('animationend', end_animation_listener);
            target.classList.remove(classname);
            cb && cb();
        };
        target.addEventListener('webkitAnimationEnd', end_animation_listener);
        target.addEventListener('animationend', end_animation_listener);
        target.classList.add(classname);
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], SimplifiedCommentBubble.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], SimplifiedCommentBubble.prototype, "ui_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], SimplifiedCommentBubble.prototype, "Msg", void 0);
    SimplifiedCommentBubble = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], SimplifiedCommentBubble);
    return SimplifiedCommentBubble;
}());
exports.SimplifiedCommentBubble = SimplifiedCommentBubble;
