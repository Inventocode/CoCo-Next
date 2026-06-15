"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortest_string_length = exports.equals = exports.remove = void 0;
var base_1 = require("./base");
/**
 * Removes the first occurrence of a particular value from an array.
 *
 * @export
 * @template T
 * @param {T[]} arr Array from which to remove
 * @param {T} obj Object to remove.
 * @returns True if an element was removed.
 */
function remove(arr, obj) {
    var i = arr.indexOf(obj);
    var rv = i >= 0;
    if (rv) {
        arr.splice(i, 1);
    }
    return rv;
}
exports.remove = remove;
/**
 * Compares two arrays for equality. Two arrays are considered equal if they
 * have the same length and their corresponding elements are equal according to
 * the comparison function.
 *
 * @export
 * @param {any[]} arr1 The first array to compare.
 * @param {any[]} arr2 The second array to compare.
 * @returns Whether the two arrays are equal.
 */
function equals(arr1, arr2) {
    if (!(0, base_1.is_array)(arr1) ||
        !(0, base_1.is_array)(arr2) ||
        arr1.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
/**
 * Given an array of strings, return the length of the shortest one.
 *
 * @param array Array of strings.
 * @returns Length of shortest string.
 */
function shortest_string_length(array) {
    if (!array.length) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return a.length < b.length ? a : b;
    }).length;
}
exports.shortest_string_length = shortest_string_length;
