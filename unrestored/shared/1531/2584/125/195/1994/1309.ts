/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1309
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragArea = exports.BlockEventType = undefined;
(function (e) {
  e.CREATE = "create";
  e.DELETE = "delete";
  e.CHANGE = "change";
  e.MOVE = "move";
  e.DRAG_AREA_CHANGE = "drag_area_change";
  e.END_DRAG = "end_drag";
  e.START_DRAG = "start_drag";
  e.UI = "ui";
  e.CONTEXT_MENU_OPTION = "context_menu_option";
})(exports.BlockEventType || (exports.BlockEventType = {}));
(function (e) {
  e.DELETE_AREA = "delete_area";
  e.INJECTION_DIV = "injection_div";
  e.WORKSPACE = "workspace";
})(exports.DragArea || (exports.DragArea = {}));