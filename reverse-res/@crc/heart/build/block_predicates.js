"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_symbols_1 = require("./di_symbols");
var B = require("./block_types");
// Only pure functions with no state allowed in this file.
var check_domain_block_optimization = { domain_block: true };
var BlockPredicatesImpl = /** @class */ (function () {
    function BlockPredicatesImpl(registry, ohno, log) {
        this.registry = registry;
        this.ohno = ohno;
        this.log = log;
    }
    BlockPredicatesImpl.prototype.hat_block_type = function (block_type) {
        return B.HAT_BLOCKS[block_type]
            || B.EVENT_BLOCKS[block_type]
            || this.responder_type(block_type)
            || this.lifetime_responder_type(block_type)
            || this.registry.block_restart_when_finished(block_type);
    };
    BlockPredicatesImpl.prototype.responder_block = function (b) {
        return this.registry.has_responder_type(b.type);
    };
    BlockPredicatesImpl.prototype.responder_type = function (t) {
        return this.registry.has_responder_type(t);
    };
    BlockPredicatesImpl.prototype.lifetime_responder_type = function (t) {
        return this.registry.has_lifetime_responder_type(t);
    };
    BlockPredicatesImpl.prototype.if_dropdown_type = function (t) {
        return this.registry.has_if_dropdown_type(t);
    };
    BlockPredicatesImpl.prototype.atomic_type = function (t) {
        return B.ATOMIC_BLOCKS[t] !== undefined;
    };
    BlockPredicatesImpl.prototype.special_block = function (b) {
        return B.SPECIAL_BLOCKS[b.kind];
    };
    BlockPredicatesImpl.prototype.domain_block = function (b) {
        return check_domain_block_optimization[b.kind];
    };
    BlockPredicatesImpl.prototype.loop_block = function (b) {
        return B.LOOP_BLOCKS[b.kind];
    };
    BlockPredicatesImpl.prototype.cond_block = function (b) {
        return B.IF_BLOCKS[b.kind] || this.if_dropdown_type(b.type);
    };
    BlockPredicatesImpl.prototype.proc_block = function (b) {
        return B.PROCEDURE_BLOCKS[b.kind];
    };
    BlockPredicatesImpl.prototype.event_block = function (b) {
        return B.EVENT_BLOCKS[b.type] || this.registry.block_restart_when_finished(b.type);
    };
    BlockPredicatesImpl.prototype.controls_if = function (b) {
        return B.IF_BLOCKS['controls_if'] == B.IF_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.controls_if_no_else = function (b) {
        return B.IF_BLOCKS.controls_if_no_else == B.IF_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.controls_if_dropdown = function (b) {
        return B.IF_BLOCKS.controls_if_dropdown == B.IF_BLOCKS[b.type]
            || this.if_dropdown_type(b.type);
    };
    BlockPredicatesImpl.prototype.repeat_n_times = function (b) {
        return B.LOOP_BLOCKS.repeat_n_times == B.LOOP_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.repeat_forever = function (b) {
        return B.LOOP_BLOCKS.repeat_forever == B.LOOP_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.repeat_forever_until = function (b) {
        return B.LOOP_BLOCKS.repeat_forever_until == B.LOOP_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.wait_until = function (b) {
        return B.LOOP_BLOCKS.wait_until == B.LOOP_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.break = function (b) {
        return B.LOOP_BLOCKS.break == B.LOOP_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.procedures_defnoreturn = function (b) {
        return B.PROCEDURE_BLOCKS.procedures_defnoreturn == B.PROCEDURE_BLOCKS[b.type] ||
            B.PROCEDURE_BLOCKS.procedures_2_defnoreturn == B.PROCEDURE_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.procedures_callreturn = function (b) {
        return B.PROCEDURE_BLOCKS.procedures_callreturn == B.PROCEDURE_BLOCKS[b.type] ||
            B.PROCEDURE_BLOCKS.procedures_2_callreturn == B.PROCEDURE_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.procedures_callnoreturn = function (b) {
        return B.PROCEDURE_BLOCKS.procedures_callnoreturn == B.PROCEDURE_BLOCKS[b.type] ||
            B.PROCEDURE_BLOCKS.procedures_2_callnoreturn == B.PROCEDURE_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.procedures_return_value = function (b) {
        return B.PROCEDURE_BLOCKS.procedures_return_value == B.PROCEDURE_BLOCKS[b.type] ||
            B.PROCEDURE_BLOCKS.procedures_2_return_value == B.PROCEDURE_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.procedures_parameter = function (b) {
        return B.PROCEDURE_BLOCKS.procedures_parameter == B.PROCEDURE_BLOCKS[b.type] ||
            B.PROCEDURE_BLOCKS.procedures_2_parameter == B.PROCEDURE_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.async_tell = function (b) {
        return B.SPECIAL_BLOCKS.tell == B.SPECIAL_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.sync_tell = function (b) {
        return B.SPECIAL_BLOCKS.sync_tell == B.SPECIAL_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.warp = function (b) {
        return B.SPECIAL_BLOCKS.warp == B.SPECIAL_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.mirror = function (b) {
        return B.EVENT_BLOCKS[b.type] == B.EVENT_BLOCKS.start_as_a_mirror;
    };
    BlockPredicatesImpl.prototype.start_on_click = function (b) {
        return B.HAT_BLOCKS[b.type] === B.HAT_BLOCKS.start_on_click
            || B.HAT_BLOCKS[b.type] === B.HAT_BLOCKS.start_on_click_2;
    };
    BlockPredicatesImpl.prototype.logic_empty = function (b) {
        return B.SPECIAL_BLOCKS.logic_empty == B.SPECIAL_BLOCKS[b.type];
    };
    BlockPredicatesImpl.prototype.compiled_block = function (b) {
        return b !== undefined && b.id != undefined;
    };
    BlockPredicatesImpl.prototype.atomic = function (b) {
        return b !== undefined && !this.compiled_block(b);
    };
    BlockPredicatesImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Log)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], BlockPredicatesImpl);
    return BlockPredicatesImpl;
}());
exports.BlockPredicatesImpl = BlockPredicatesImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfcHJlZGljYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja19wcmVkaWNhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUErQztBQUUvQywyQ0FBdUM7QUFTdkMsaUNBQW1DO0FBRW5DLDBEQUEwRDtBQUUxRCxJQUFNLCtCQUErQixHQUEwQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUd0RjtJQUVFLDZCQUNzQyxRQUFpQixFQUNyQixJQUFTLEVBQ1YsR0FBVTtRQUZMLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNWLFFBQUcsR0FBSCxHQUFHLENBQU87SUFDeEMsQ0FBQztJQUVHLDRDQUFjLEdBQXJCLFVBQXNCLFVBQWlCO1FBQ3JDLE9BQVksQ0FBQyxDQUFDLFVBQVUsQ0FBTSxVQUFVLENBQUM7ZUFDM0IsQ0FBQyxDQUFDLFlBQVksQ0FBTSxVQUFVLENBQUM7ZUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7ZUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztlQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixDQUFTO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLENBQVE7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxxREFBdUIsR0FBOUIsVUFBK0IsQ0FBUTtRQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFD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