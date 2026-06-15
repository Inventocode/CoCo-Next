"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockGroupType = exports.LAST_NEXT_XML_TAG = exports.BLOCK_GROUP_STOPPED_XML_TAG = exports.BLOCK_GROUP_ID_XML_TAG = exports.BLOCK_GROUP_NAME_XML_TAG = exports.BLOCK_GROUP_NAME_FIELD_NAME = exports.BLOCK_GROUP_TAG_FIELD_NAME = void 0;
/**
 * 积木分组功能用到的tag和name
 */
exports.BLOCK_GROUP_TAG_FIELD_NAME = 'group_tag';
exports.BLOCK_GROUP_NAME_FIELD_NAME = 'group_name';
exports.BLOCK_GROUP_NAME_XML_TAG = 'block_group_name';
exports.BLOCK_GROUP_ID_XML_TAG = 'block_group_id';
exports.BLOCK_GROUP_STOPPED_XML_TAG = 'block_group_stopped';
exports.LAST_NEXT_XML_TAG = 'last_next_in_stack';
var BlockGroupType;
(function (BlockGroupType) {
    BlockGroupType[BlockGroupType["START"] = 0] = "START";
    BlockGroupType[BlockGroupType["EXECUTION"] = 1] = "EXECUTION";
    BlockGroupType[BlockGroupType["OUTPUT"] = 2] = "OUTPUT";
})(BlockGroupType = exports.BlockGroupType || (exports.BlockGroupType = {}));
