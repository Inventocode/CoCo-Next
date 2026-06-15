"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.assert = void 0;
/**
 * Check if a condition is true.
 *
 * @export
 * @param {*} condition condition to check
 * @param {string} [msg] Error message if not true
 * @returns {asserts}
 */
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
exports.assert = assert;
/**
 * Function to console.error a message.
 *
 * @export
 * @param {(string|undefined)} opt_message
 */
function fail(opt_message) {
    console.error(opt_message);
}
exports.fail = fail;
