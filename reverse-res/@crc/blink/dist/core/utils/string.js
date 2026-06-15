"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = exports.string_trim = exports.string_is_empty_or_whitespace = exports.case_insensitive_equals = exports.case_insensitive_compare = void 0;
/**
 * A string comparator that ignores case.
 * -1 = str1 less than str2
 *  0 = str1 equals str2
 *  1 = str1 greater than str2
 *
 * @export
 * @param {string} str1 The string to compare.
 * @param {string} str2 The string to compare `str1` to.
 * @returns The comparator result, as described above.
 */
function case_insensitive_compare(str1, str2) {
    var test1 = String(str1).toLowerCase();
    var test2 = String(str2).toLowerCase();
    if (test1 < test2) {
        return -1;
    }
    else if (test1 == test2) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.case_insensitive_compare = case_insensitive_compare;
/**
 * Case-insensitive equality checker.
 *
 * @export
 * @param {string} str1 First string to check.
 * @param {string} str2 Second string to check.
 * @returns True if `str1` and `str2` are the same string,
 *     ignoring case.
 */
function case_insensitive_equals(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }
    return str1.toLowerCase() == str2.toLowerCase();
}
exports.case_insensitive_equals = case_insensitive_equals;
/**
 * Checks if a string is empty or contains only whitespaces.
 *
 * @export
 * @param {string} str The string to check.
 * @returns Whether `str` is empty or whitespace only.
 */
function string_is_empty_or_whitespace(str) {
    // testing length == 0 first is actually slower in all browsers (about the
    // same in Opera).
    // Since IE doesn't include non-breaking-space (0xa0) in their \s character
    // class (as required by section 7.2 of the ECMAScript spec), we explicitly
    // include it in the regexp to enforce consistent cross-browser behavior.
    return /^[\s\xa0]*$/.test(str);
}
exports.string_is_empty_or_whitespace = string_is_empty_or_whitespace;
/**
 * Trim off trailing whitespace of the input string.
 *
 * @export
 * @param {string} str
 * @returns the processed string.
 */
function string_trim(str) {
    return str.replace(/\s+$/, '').replace(/ +\n/g, '\n');
}
exports.string_trim = string_trim;
/**
 * Wrap text to the specified width.
 *
 * @param text Text to wrap.
 * @param limit Width to wrap each line.
 * @returns Wrapped text.
 */
function wrap(text, limit) {
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
        lines[i] = wrap_line(lines[i], limit);
    }
    return lines.join('\n');
}
exports.wrap = wrap;
/**
 * Wrap single line of text to the specified width.
 *
 * @private
 * @param text Text to wrap.
 * @param limit Width to wrap each line.
 * @returns Wrapped text.
 */
function wrap_line(text, limit) {
    if (text.length <= limit) {
        // Short text, no need to wrap.
        return text;
    }
    // Split the text into words.
    var words = text.trim().split(/\s+/);
    // Set limit to be the length of the largest word.
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > limit) {
            limit = words[i].length;
        }
    }
    var lastScore;
    var score = -Infinity;
    var lastText;
    var lineCount = 1;
    do {
        lastScore = score;
        lastText = text;
        // Create a list of booleans representing if a space (false) or
        // a break (true) appears after each word.
        var wordBreaks = [];
        // Seed the list with evenly spaced linebreaks.
        var steps = words.length / lineCount;
        var insertedBreaks = 1;
        for (var i = 0; i < words.length - 1; i++) {
            if (insertedBreaks < (i + 1.5) / steps) {
                insertedBreaks++;
                wordBreaks[i] = true;
            }
            else {
                wordBreaks[i] = false;
            }
        }
        wordBreaks = wrap_mutate(words, wordBreaks, limit);
        score = wrap_score(words, wordBreaks, limit);
        text = wrap_to_text(words, wordBreaks);
        lineCount++;
    } while (score > lastScore);
    return lastText;
}
/**
 * Mutate the array of line break locations until an optimal solution is found.
 * No line breaks are added or deleted, they are simply moved around.
 *
 * @private
 * @param words Array of each word.
 * @param word_breaks Array of line breaks.
 * @param limit Width to wrap each line.
 * @returns New array of optimal line breaks.
 */
function wrap_mutate(words, word_breaks, limit) {
    var bestScore = wrap_score(words, word_breaks, limit);
    var bestBreaks;
    // Try shifting every line break forward or backward.
    for (var i = 0; i < word_breaks.length - 1; i++) {
        if (word_breaks[i] == word_breaks[i + 1]) {
            continue;
        }
        var mutatedWordBreaks = word_breaks.slice();
        mutatedWordBreaks[i] = !mutatedWordBreaks[i];
        mutatedWordBreaks[i + 1] = !mutatedWordBreaks[i + 1];
        var mutatedScore = wrap_score(words, mutatedWordBreaks, limit);
        if (mutatedScore > bestScore) {
            bestScore = mutatedScore;
            bestBreaks = mutatedWordBreaks;
        }
    }
    if (bestBreaks) {
        // Found an improvement.  See if it may be improved further.
        return wrap_mutate(words, bestBreaks, limit);
    }
    // No improvements found.  Done.
    return word_breaks;
}
/**
 * Compute a score for how good the wrapping is.
 * @param {!Array.<string>} words Array of each word.
 * @param {!Array.<boolean>} wordBreaks Array of line breaks.
 * @param {number} limit Width to wrap each line.
 * @return {number} Larger the better.
 * @private
 */
function wrap_score(words, wordBreaks, limit) {
    // If this function becomes a performance liability, add caching.
    // Compute the length of each line.
    var lineLengths = [0];
    var linePunctuation = [];
    for (var i = 0; i < words.length; i++) {
        lineLengths[lineLengths.length - 1] += words[i].length;
        if (wordBreaks[i] === true) {
            lineLengths.push(0);
            linePunctuation.push(words[i].charAt(words[i].length - 1));
        }
        else if (wordBreaks[i] === false) {
            lineLengths[lineLengths.length - 1]++;
        }
    }
    var maxLength = Math.max.apply(Math, lineLengths);
    var score = 0;
    for (var i = 0; i < lineLengths.length; i++) {
        // Optimize for width.
        // -2 points per char over limit (scaled to the power of 1.5).
        score -= Math.pow(Math.abs(limit - lineLengths[i]), 1.5) * 2;
        // Optimize for even lines.
        // -1 point per char smaller than max (scaled to the power of 1.5).
        score -= Math.pow(maxLength - lineLengths[i], 1.5);
        // Optimize for structure.
        // Add score to line endings after punctuation.
        if ('.?!'.indexOf(linePunctuation[i]) != -1) {
            score += limit / 3;
        }
        else if (',;)]}'.indexOf(linePunctuation[i]) != -1) {
            score += limit / 4;
        }
    }
    // All else being equal, the last line should not be longer than the
    // previous line.  For example, this looks wrong:
    // aaa bbb
    // ccc ddd eee
    if (lineLengths.length > 1 && lineLengths[lineLengths.length - 1] <=
        lineLengths[lineLengths.length - 2]) {
        score += 0.5;
    }
    return score;
}
/**
 * Reassemble the array of words into text, with the specified line breaks.
 *
 * @private
 * @param words Array of each word.
 * @param word_breaks Array of line breaks.
 * @returns Plain text.
 */
function wrap_to_text(words, word_breaks) {
    var text = [];
    for (var i = 0; i < words.length; i++) {
        text.push(words[i]);
        if (word_breaks[i] != undefined) {
            text.push(word_breaks[i] ? '\n' : ' ');
        }
    }
    return text.join('');
}
