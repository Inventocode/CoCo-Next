"use strict";
// The enums (dict lookups) used instead of direct string comparisons for
// tagged unions are much faster according to Patrick's measurements. They
// should be changed when TS allows us to use numbers instead of strings as
// values for recognizing kinds.
//
// We lookup membership in the enum by accessing a key and getting a truthy
// value, so these enums must start counting at 1, not 0.
Object.defineProperty(exports, "__esModule", { value: true });
var LOOP_BLOCKS;
(function (LOOP_BLOCKS) {
    LOOP_BLOCKS[LOOP_BLOCKS["repeat_forever"] = 1] = "repeat_forever";
    LOOP_BLOCKS[LOOP_BLOCKS["repeat_n_times"] = 2] = "repeat_n_times";
    LOOP_BLOCKS[LOOP_BLOCKS["repeat_forever_until"] = 3] = "repeat_forever_until";
    LOOP_BLOCKS[LOOP_BLOCKS["wait_until"] = 4] = "wait_until";
    LOOP_BLOCKS[LOOP_BLOCKS["break"] = 5] = "break";
})(LOOP_BLOCKS = exports.LOOP_BLOCKS || (exports.LOOP_BLOCKS = {}));
var IF_BLOCKS;
(function (IF_BLOCKS) {
    IF_BLOCKS[IF_BLOCKS["controls_if"] = 1] = "controls_if";
    IF_BLOCKS[IF_BLOCKS["controls_if_no_else"] = 2] = "controls_if_no_else";
    IF_BLOCKS[IF_BLOCKS["controls_if_dropdown"] = 3] = "controls_if_dropdown";
})(IF_BLOCKS = exports.IF_BLOCKS || (exports.IF_BLOCKS = {}));
var EVENT_BLOCKS;
(function (EVENT_BLOCKS) {
    EVENT_BLOCKS[EVENT_BLOCKS["self_listen"] = 1] = "self_listen";
    EVENT_BLOCKS[EVENT_BLOCKS["start_as_a_mirror"] = 2] = "start_as_a_mirror";
    EVENT_BLOCKS[EVENT_BLOCKS["player_position_on_change"] = 3] = "player_position_on_change";
    EVENT_BLOCKS[EVENT_BLOCKS["mouse_on_emit"] = 4] = "mouse_on_emit";
    EVENT_BLOCKS[EVENT_BLOCKS["block_on_break"] = 5] = "block_on_break";
    EVENT_BLOCKS[EVENT_BLOCKS["when"] = 6] = "when";
})(EVENT_BLOCKS = exports.EVENT_BLOCKS || (exports.EVENT_BLOCKS = {}));
var PROCEDURE_BLOCKS;
(function (PROCEDURE_BLOCKS) {
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_defnoreturn"] = 1] = "procedures_defnoreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_callnoreturn"] = 2] = "procedures_callnoreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_callreturn"] = 3] = "procedures_callreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_return_value"] = 4] = "procedures_return_value";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_parameter"] = 5] = "procedures_parameter";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_2_defnoreturn"] = 6] = "procedures_2_defnoreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_2_callnoreturn"] = 7] = "procedures_2_callnoreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_2_callreturn"] = 8] = "procedures_2_callreturn";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_2_return_value"] = 9] = "procedures_2_return_value";
    PROCEDURE_BLOCKS[PROCEDURE_BLOCKS["procedures_2_parameter"] = 10] = "procedures_2_parameter";
})(PROCEDURE_BLOCKS = exports.PROCEDURE_BLOCKS || (exports.PROCEDURE_BLOCKS = {}));
var MIDI_BLOCKS;
(function (MIDI_BLOCKS) {
    MIDI_BLOCKS[MIDI_BLOCKS["midi_play_note"] = 1] = "midi_play_note";
    MIDI_BLOCKS[MIDI_BLOCKS["midi_wait"] = 2] = "midi_wait";
})(MIDI_BLOCKS = exports.MIDI_BLOCKS || (exports.MIDI_BLOCKS = {}));
var HAT_BLOCKS;
(function (HAT_BLOCKS) {
    HAT_BLOCKS[HAT_BLOCKS["start_on_click"] = 1] = "start_on_click";
    HAT_BLOCKS[HAT_BLOCKS["start_on_click_2"] = 2] = "start_on_click_2";
    HAT_BLOCKS[HAT_BLOCKS["procedures_defnoreturn"] = 3] = "procedures_defnoreturn";
    HAT_BLOCKS[HAT_BLOCKS["procedures_2_defnoreturn"] = 4] = "procedures_2_defnoreturn";
})(HAT_BLOCKS = exports.HAT_BLOCKS || (exports.HAT_BLOCKS = {}));
var ATOMIC_BLOCKS;
(function (ATOMIC_BLOCKS) {
    ATOMIC_BLOCKS[ATOMIC_BLOCKS["math_number"] = 1] = "math_number";
    ATOMIC_BLOCKS[ATOMIC_BLOCKS["text"] = 2] = "text";
})(ATOMIC_BLOCKS = exports.ATOMIC_BLOCKS || (exports.ATOMIC_BLOCKS = {}));
var SPECIAL_BLOCKS;
(function (SPECIAL_BLOCKS) {
    SPECIAL_BLOCKS[SPECIAL_BLOCKS["tell"] = 1] = "tell";
    SPECIAL_BLOCKS[SPECIAL_BLOCKS["logic_empty"] = 2] = "logic_empty";
    SPECIAL_BLOCKS[SPECIAL_BLOCKS["sync_tell"] = 3] = "sync_tell";
    SPECIAL_BLOCKS[SPECIAL_BLOCKS["warp"] = 4] = "warp";
})(SPECIAL_BLOCKS = exports.SPECIAL_BLOCKS || (exports.SPECIAL_BLOCKS = {}));
var BlockOutputType;
(function (BlockOutputType) {
    BlockOutputType[BlockOutputType["none"] = 0] = "none";
    BlockOutputType[BlockOutputType["any"] = 1] = "any";
    BlockOutputType[BlockOutputType["number"] = 2] = "number";
    BlockOutputType[BlockOutputType["list"] = 3] = "list";
    BlockOutputType[BlockOutputType["string"] = 4] = "string";
})(BlockOutputType = exports.BlockOutputType || (exports.BlockOutputType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmxvY2tfdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlFQUF5RTtBQUN6RSwwRUFBMEU7QUFDMUUsMkVBQTJFO0FBQzNFLGdDQUFnQztBQUNoQyxFQUFFO0FBQ0YsMkVBQTJFO0FBQzNFLHlEQUF5RDs7QUFFekQsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLGlFQUFrQixDQUFBO0lBQ2xCLGlFQUFrQixDQUFBO0lBQ2xCLDZFQUF3QixDQUFBO0lBQ3hCLHlEQUFjLENBQUE7SUFDZCwrQ0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLHVEQUFlLENBQUE7SUFDZix1RUFBdUIsQ0FBQTtJQUN2Qix5RUFBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxJQUFZLFlBT1g7QUFQRCxXQUFZLFlBQVk7SUFDdEIsNkRBQWUsQ0FBQTtJQUNmLHlFQUFxQixDQUFBO0lBQ3JCLHlGQUE2QixDQUFBO0lBQzdCLGlFQUFpQixDQUFBO0lBQ2pCLG1FQUFrQixDQUFBO0lBQ2xCLCtDQUFRLENBQUE7QUFDVixDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFFRCxJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDMUIsMkZBQTBCLENBQUE7SUFDMUIsNkZBQTJCLENBQUE7SUFDM0IseUZBQXlCLENBQUE7SUFDekIsNkZBQTJCLENBQUE7SUFDM0IsdUZBQXdCLENBQUE7SUFDeEIsK0ZBQTRCLENBQUE7SUFDNUIsaUdBQTZCLENBQUE7SUFDN0IsNkZBQTJCLENBQUE7SUFDM0IsaUdBQTZCLENBQUE7SUFDN0IsNEZBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQVhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBVzNCO0FBRUQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLGlFQUFrQixDQUFBO0lBQ2xCLHVEQUFTLENBQUE7QUFDWCxDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7QUFFRCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsK0RBQWtCLENBQUE7SUFDbEIsbUVBQWdCLENBQUE7SUFDaEIsK0VBQXNCLENBQUE7SUFDdEIsbUZBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLCtEQUFlLENBQUE7SUFDZixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLG1EQUFRLENBQUE7SUFDUixpRUFBVyxDQUFBO0lBQ1gsNkRBQVMsQ0FBQTtJQUNULG1EQUFJLENBQUE7QUFDTixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFRCxJQUFZLGVBTVg7QUFORCxXQUFZLGVBQWU7SUFDekIscURBQUksQ0FBQTtJQUNKLG1EQUFHLENBQUE7SUFDSCx5REFBTSxDQUFBO0lBQ04scURBQUksQ0FBQTtJQUNKLHlEQUFNLENBQUE7QUFDUixDQUFDLEVBTlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFNMUIifQ==