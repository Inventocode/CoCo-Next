"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllUIEvents = exports.UIEventType = void 0;
var UIEventType;
(function (UIEventType) {
    UIEventType["SELECTED"] = "selected";
    UIEventType["COMMENT_OPEN"] = "commentOpen";
    UIEventType["CLICK"] = "click";
    UIEventType["STACK_CLICK"] = "stackclick";
    UIEventType["H_SCROLLBAR_SET"] = "horizontalScrollbarSet";
    UIEventType["V_SCROLLBAR_SET"] = "verticalScrollbarSet";
    UIEventType["WARNING_OPEN"] = "warningOpen";
    UIEventType["SCALE"] = "scale";
    /**
     * 当flyout的打开关闭有transition时，在transition结束后触发。
     * 若无transition，则不会触发。
     */
    UIEventType["FLYOUT_SHOW"] = "flyoutShow";
    /**
     * 当前选择的树节点即将发生改变时触发。
     */
    UIEventType["CATEGORY_WILL_CHANGE"] = "categoryWillChange";
    /**
     * 当前选择节点发生改变的事件。
     */
    UIEventType["CATEGORY"] = "category";
    /**
     * 简化版注释上的编辑按钮点击事件。
     */
    UIEventType["SIMPLIFIED_COMMENT_EDIT"] = "simplifiedCommentEdit";
    /**
     * 简化版注释上的删除按钮点击事件。
     */
    UIEventType["SIMPLIFIED_COMMENT_DELETE"] = "simplifiedCommentDelete";
    /**
     * 简化版注释上的内容选中事件。
     */
    UIEventType["SIMPLIFIED_COMMENT_SELECT"] = "simplifiedCommentSelect";
    /**
     * field焦点变化的事件。
     */
    UIEventType["FIELD_FOCUS_CHANGE"] = "FieldFocusChange";
    /**
     * workspace和积木的右键菜单打开事件。
     */
    UIEventType["CONTEXT_MENU_OPEN"] = "contextMenuOpen";
})(UIEventType = exports.UIEventType || (exports.UIEventType = {}));
// FIXME 可能不该放在这里
exports.AllUIEvents = Object.keys(UIEventType).map(function (key) { return UIEventType[key]; });
