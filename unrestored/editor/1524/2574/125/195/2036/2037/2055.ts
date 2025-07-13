"use strict";

exports.BLOCK_GROUP_TAG_FIELD_NAME = "group_tag";
exports.BLOCK_GROUP_NAME_FIELD_NAME = "group_name";
exports.BLOCK_GROUP_NAME_XML_TAG = "block_group_name";
exports.BLOCK_GROUP_ID_XML_TAG = "block_group_id";
exports.BLOCK_GROUP_STOPPED_XML_TAG = "block_group_stopped";
exports.LAST_NEXT_XML_TAG = "last_next_in_stack";
(function (e) {
  e[e.START = 0] = "START";
  e[e.EXECUTION = 1] = "EXECUTION";
  e[e.OUTPUT = 2] = "OUTPUT";
})(t.BlockGroupType || (exports.BlockGroupType = {}));