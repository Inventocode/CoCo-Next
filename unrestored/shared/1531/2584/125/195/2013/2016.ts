"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockOptionType = exports.WorkspaceOptionType = undefined;
(function (e) {
  e[e.PASTE = 0] = "PASTE";
  e[e.CLEAN_UP = 1] = "CLEAN_UP";
  e[e.DELETE_ALL = 2] = "DELETE_ALL";
  e[e.COPY_ALL = 3] = "COPY_ALL";
  e[e.GLOBAL_COMMENT = 4] = "GLOBAL_COMMENT";
})(exports.WorkspaceOptionType || (exports.WorkspaceOptionType = {}));
(function (e) {
  e[e.COPY_AND_PASTE = 0] = "COPY_AND_PASTE";
  e[e.COPY = 1] = "COPY";
  e[e.ADD_COMMENT = 2] = "ADD_COMMENT";
  e[e.COLLAPSE = 3] = "COLLAPSE";
  e[e.DELETE = 4] = "DELETE";
  e[e.SET_GROUP = 5] = "SET_GROUP";
  e[e.VISIBILITY_CHANGE = 6] = "VISIBILITY_CHANGE";
})(exports.BlockOptionType || (exports.BlockOptionType = {}));