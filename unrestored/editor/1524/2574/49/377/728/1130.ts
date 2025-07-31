"use strict";

var r;
var i;
var o;
var a;
var s;
var c;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.EventType = exports.is_drop_op = exports.is_pick_op = exports.is_drop_operation = exports.is_pick_operation = exports.is_path_5 = exports.is_path_4 = exports.is_path_3 = exports.is_path_2 = exports.is_path_5_array = exports.is_path_4_array = exports.is_path_3_array = exports.is_path_2_array = exports.PathParams5 = exports.PathParams4 = exports.PathParams3 = exports.PathParams2 = exports.Field_Type = exports.Target_Type = void 0;
(function (e) {
  e[e.blocks = 0] = "blocks";
  e[e.connections = 1] = "connections";
  e[e.comments = 2] = "comments";
})(r = exports.Target_Type || (exports.Target_Type = {}));
(function (e) {
  e[e.shadows = 0] = "shadows";
  e[e.fields = 1] = "fields";
})(i = exports.Field_Type || (exports.Field_Type = {}));
(function (e) {
  e[e.TARGET = 0] = "TARGET";
  e[e.ID = 1] = "ID";
})(o = exports.PathParams2 || (exports.PathParams2 = {}));
(function (e) {
  e[e.TARGET = 0] = "TARGET";
  e[e.ID = 1] = "ID";
  e[e.PROPERTY = 2] = "PROPERTY";
})(a = exports.PathParams3 || (exports.PathParams3 = {}));
(function (e) {
  e[e.BLOCK = 0] = "BLOCK";
  e[e.ID = 1] = "ID";
  e[e.PROPERTY = 2] = "PROPERTY";
  e[e.PROPERTY_NAME = 3] = "PROPERTY_NAME";
})(s = exports.PathParams4 || (exports.PathParams4 = {}));
(function (e) {
  e[e.BLOCK = 0] = "BLOCK";
  e[e.ID = 1] = "ID";
  e[e.PROPERTY = 2] = "PROPERTY";
  e[e.PROPERTY_NAME = 3] = "PROPERTY_NAME";
  e[e.FIELD_ATTR = 4] = "FIELD_ATTR";
})(c = exports.PathParams5 || (exports.PathParams5 = {}));
exports.is_path_2_array = function (e) {
  return 2 === e.length && e[o.TARGET] in r && "string" === typeof e[o.ID];
};
exports.is_path_3_array = function (e) {
  return 3 === e.length && e[a.TARGET] in r && "string" === typeof e[a.ID] && "string" === typeof e[a.PROPERTY];
};
exports.is_path_4_array = function (e) {
  return 4 === e.length && "blocks" === e[s.BLOCK] && "string" === typeof e[s.ID] && e[s.PROPERTY] in i && "string" === typeof e[s.PROPERTY_NAME];
};
exports.is_path_5_array = function (e) {
  return 5 === e.length && "blocks" === e[c.BLOCK] && "string" === typeof e[c.ID] && "field_extra_attr" === e[c.PROPERTY] && "string" === typeof e[c.PROPERTY_NAME] && "string" === typeof e[c.FIELD_ATTR];
};
exports.is_path_2 = function (e) {
  return !e.hasOwnProperty("property");
};
exports.is_path_3 = function (e) {
  return e.hasOwnProperty("property") && !e.hasOwnProperty("property_name");
};
exports.is_path_4 = function (e) {
  return e.hasOwnProperty("property_name");
};
exports.is_path_5 = function (e) {
  return e.hasOwnProperty("field_attr");
};
exports.is_pick_operation = function (e) {
  return void 0 !== e.p || void 0 !== e.r;
};
exports.is_drop_operation = function (e) {
  return void 0 !== e.i || void 0 !== e.d;
};
exports.is_pick_op = function (e) {
  return void 0 !== e.operation.p || void 0 !== e.operation.r;
};
exports.is_drop_op = function (e) {
  return void 0 !== e.operation.i || void 0 !== e.operation.d;
};
(function (e) {
  e.CONNECT = "connect";
  e.DISCONNECT = "disconnect";
  e.CREATE_BLOCK = "create_block";
  e.DELETE_BLOCK = "delete_block";
  e.MOVE_BLOCK = "move_block";
  e.COLLAPSE_BLOCK = "collapse_block";
  e.DISABLE_BLOCK = "disable_block";
  e.EDIT_BLOCK_FIELD = "edit_block_field";
  e.EDIT_FIELD_EXTRA_ATTR = "edit_field_extra_attr";
  e.SET_BLOCK_VISIBILITY = "set_block_visibility";
  e.APPEND_SHADOW_INPUT = "append_shadow_input";
  e.REMOVE_SHADOW_INPUT = "remove_shadow_input";
  e.CREATE_COMMENT = "create_comment";
  e.DELETE_COMMENT = "delete_comment";
  e.MOVE_COMMENT = "move_comment";
  e.COLLAPSE_COMMENT = "collapse_comment";
  e.EDIT_COMMENT = "edit_comment";
  e.CHANGE_COMMENT_COLOR = "change_comment_color";
  e.RESIZE_COMMENT = "resize_comment";
})(exports.EventType || (exports.EventType = {}));