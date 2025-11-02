/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2065
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.BlockGroupType = exports.LAST_NEXT_XML_TAG = exports.BLOCK_GROUP_STOPPED_XML_TAG = exports.BLOCK_GROUP_ID_XML_TAG = exports.BLOCK_GROUP_NAME_XML_TAG = exports.BLOCK_GROUP_NAME_FIELD_NAME = exports.BLOCK_GROUP_TAG_FIELD_NAME = undefined
exports.BLOCK_GROUP_TAG_FIELD_NAME = "group_tag"
exports.BLOCK_GROUP_NAME_FIELD_NAME = "group_name"
exports.BLOCK_GROUP_NAME_XML_TAG = "block_group_name"
exports.BLOCK_GROUP_ID_XML_TAG = "block_group_id"
exports.BLOCK_GROUP_STOPPED_XML_TAG = "block_group_stopped"
exports.LAST_NEXT_XML_TAG = "last_next_in_stack";
(function (e) {
  e[e.START = 0] = "START"
  e[e.EXECUTION = 1] = "EXECUTION"
  e[e.OUTPUT = 2] = "OUTPUT"
})(exports.BlockGroupType || (exports.BlockGroupType = {}))
