"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockOptionType = exports.WorkspaceOptionType = void 0;
var WorkspaceOptionType;
(function (WorkspaceOptionType) {
    WorkspaceOptionType[WorkspaceOptionType["PASTE"] = 0] = "PASTE";
    WorkspaceOptionType[WorkspaceOptionType["CLEAN_UP"] = 1] = "CLEAN_UP";
    WorkspaceOptionType[WorkspaceOptionType["DELETE_ALL"] = 2] = "DELETE_ALL";
    WorkspaceOptionType[WorkspaceOptionType["COPY_ALL"] = 3] = "COPY_ALL";
    WorkspaceOptionType[WorkspaceOptionType["GLOBAL_COMMENT"] = 4] = "GLOBAL_COMMENT";
})(WorkspaceOptionType = exports.WorkspaceOptionType || (exports.WorkspaceOptionType = {}));
var BlockOptionType;
(function (BlockOptionType) {
    BlockOptionType[BlockOptionType["COPY_AND_PASTE"] = 0] = "COPY_AND_PASTE";
    BlockOptionType[BlockOptionType["COPY"] = 1] = "COPY";
    BlockOptionType[BlockOptionType["ADD_COMMENT"] = 2] = "ADD_COMMENT";
    BlockOptionType[BlockOptionType["COLLAPSE"] = 3] = "COLLAPSE";
    BlockOptionType[BlockOptionType["DELETE"] = 4] = "DELETE";
    BlockOptionType[BlockOptionType["SET_GROUP"] = 5] = "SET_GROUP";
    BlockOptionType[BlockOptionType["VISIBILITY_CHANGE"] = 6] = "VISIBILITY_CHANGE";
})(BlockOptionType = exports.BlockOptionType || (exports.BlockOptionType = {}));
