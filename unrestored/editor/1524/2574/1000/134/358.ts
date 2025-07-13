"use strict";

exports.NAMED_TAG = "named";
exports.NAME_TAG = "name";
exports.UNMANAGED_TAG = "unmanaged";
exports.OPTIONAL_TAG = "optional";
exports.INJECT_TAG = "inject";
exports.MULTI_INJECT_TAG = "multi_inject";
exports.TAGGED = "inversify:tagged";
exports.TAGGED_PROP = "inversify:tagged_props";
exports.PARAM_TYPES = "inversify:paramtypes";
exports.DESIGN_PARAM_TYPES = "design:paramtypes";
exports.POST_CONSTRUCT = "post_construct";
exports.NON_CUSTOM_TAG_KEYS = [t.INJECT_TAG, t.MULTI_INJECT_TAG, t.NAME_TAG, t.UNMANAGED_TAG, t.NAMED_TAG, t.OPTIONAL_TAG];