"use strict";

var r;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.AllUIEvents = exports.UIEventType = void 0;
(function (e) {
  e.SELECTED = "selected";
  e.COMMENT_OPEN = "commentOpen";
  e.CLICK = "click";
  e.STACK_CLICK = "stackclick";
  e.H_SCROLLBAR_SET = "horizontalScrollbarSet";
  e.V_SCROLLBAR_SET = "verticalScrollbarSet";
  e.WARNING_OPEN = "warningOpen";
  e.SCALE = "scale";
  e.FLYOUT_SHOW = "flyoutShow";
  e.CATEGORY_WILL_CHANGE = "categoryWillChange";
  e.CATEGORY = "category";
  e.SIMPLIFIED_COMMENT_EDIT = "simplifiedCommentEdit";
  e.SIMPLIFIED_COMMENT_DELETE = "simplifiedCommentDelete";
  e.SIMPLIFIED_COMMENT_SELECT = "simplifiedCommentSelect";
  e.FIELD_FOCUS_CHANGE = "FieldFocusChange";
  e.CONTEXT_MENU_OPEN = "contextMenuOpen";
})(r = exports.UIEventType || (exports.UIEventType = {}));
exports.AllUIEvents = Object.keys(r).map(function (e) {
  return r[e];
});