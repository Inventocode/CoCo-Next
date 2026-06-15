"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_connection_json = exports.is_comment_json = exports.is_block_json = void 0;
function is_block_json(json) {
    if (json.type === 'input'
        || json.type === 'next') {
        return false;
    }
    return json.type !== undefined;
}
exports.is_block_json = is_block_json;
function is_comment_json(json) {
    return json.color_theme !== undefined;
}
exports.is_comment_json = is_comment_json;
function is_connection_json(json) {
    return json.type === 'input'
        || json.type === 'next';
}
exports.is_connection_json = is_connection_json;
