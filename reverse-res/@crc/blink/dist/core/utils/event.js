"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.no_event = exports.is_target_input = exports.is_right_button = void 0;
/**
 * Is this event a right-click?
 *
 * @param {Event} e Mouse event.
 * @returns True if right-click.
 */
function is_right_button(e) {
    return e.button == 2;
}
exports.is_right_button = is_right_button;
/**
 * Is this event targeting a text input widget?
 *
 * @param {Event} e An event.
 * @returns True if text input.
 */
function is_target_input(e) {
    if (!(e.target instanceof HTMLInputElement)) {
        return false;
    }
    return e.target.type == 'textarea' || e.target.type == 'text' ||
        e.target.type == 'number' || e.target.type == 'email' ||
        e.target.type == 'password' || e.target.type == 'search' ||
        e.target.type == 'tel' || e.target.type == 'url' ||
        e.target.isContentEditable;
}
exports.is_target_input = is_target_input;
/**
 * Don't do anything for this event, just halt propagation.
 *
 * @param {Event} e An event.
 */
function no_event(e) {
    // This event has been handled.  No need to bubble up to the document.
    e.preventDefault();
    e.stopPropagation();
}
exports.no_event = no_event;
