"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _clone = require("lodash/clone");
var inversify_1 = require("inversify");
var di_symbols_1 = require("./di_symbols");
var H = require("./di_interfaces");
var BlockPoolImpl = /** @class */ (function () {
    function BlockPoolImpl(u, config, block) {
        this.u = u;
        this.config = config;
        this.block = block;
        this.pool = [];
        // Pre-allocate with a bunch of items
        var size = config.get().block_pool_preallocation_size;
        var a = [];
        for (var i = 0; i < size; i++) {
            a.push(this.create());
        }
        for (var i = 0; i < size; i++) {
            this.release(a.pop());
        }
    }
    BlockPoolImpl.prototype.create = function () {
        // This is probably better than this.reset({});
        // because we don't force a lot of intermediate
        // hidden classes to be created.
        return {
            // base
            params: {},
            kind: '',
            type: '',
            id: '',
            parent_block: undefined,
            next_block: undefined,
            child_block: [],
            first_evaluation: true,
            done_evaluating: false,
            output_type: '',
            last_call: undefined,
            waiting_for_procedure: undefined,
            disabled: false,
            // conditional
            conditions: [],
            if_dropdown_conditions: [],
            // procedure
            procedure_name: '',
            procedure_return_value: undefined,
            // repeat
            times_left: 0,
        };
    };
    BlockPoolImpl.prototype.release_block_param = function (b) {
        if (b == undefined) {
            return;
        }
        if (this.u.block.is.compiled_block(b)) {
            this.release(b);
        }
    };
    BlockPoolImpl.prototype.reset = function (block) {
        // recursive release
        this.release_block_param(block.next_block);
        for (var i = 0; i < block.child_block.length; i++) {
            this.release_block_param(block.child_block[i]);
        }
        for (var i = 0; i < block.conditions.length; i++) {
            this.release_block_param(block.conditions[i]);
        }
        for (var param in block.params) {
            this.release_block_param(block.params[param]);
        }
        // base
        block.params = {};
        block.kind = '';
        block.type = '';
        block.id = '';
        block.parent_block = undefined;
        block.next_block = undefined;
        block.child_block = [];
        block.first_evaluation = true;
        block.done_evaluating = false;
        block.output_type = '';
        block.last_call = undefined;
        block.waiting_for_procedure = undefined;
        block.disabled = false;
        // conditional
        block.conditions = [];
        block.if_dropdown_conditions = [];
        // procedure
        block.procedure_name = '';
        block.procedure_return_value = undefined;
        // repeat
        block.times_left = 0;
    };
    BlockPoolImpl.prototype.clone = function (block, par) {
        var c = this.get();
        // -- base
        for (var param_name in block.params) {
            var param = block.params[param_name];
            if (param === undefined) {
                c.params[param_name] = undefined;
            }
            else {
                if (this.u.block.is.compiled_block(param)) {
                    c.params[param_name] = this.clone(param, c);
                }
                else {
                    c.params[param_name] = _clone(param);
                }
            }
        }
        c.kind = block.kind;
        c.type = block.type;
        c.id = block.id;
        c.parent_block = par;
        if (block.next_block != undefined) {
            c.next_block = this.clone(block.next_block, par);
        }
        c.child_block = [];
        for (var i = 0; i < block.child_block.length; i++) {
            var maybe_child = block.child_block[i];
            if (maybe_child == undefined) {
                c.child_block.push(undefined);
            }
            else {
                c.child_block.push(this.clone(maybe_child, c));
            }
        }
        c.first_evaluation = block.first_evaluation;
        c.done_evaluating = block.done_evaluating;
        c.output_type = block.output_type;
        c.last_call = block.last_call;
        c.waiting_for_procedure = block.waiting_for_procedure;
        c.disabled = block.disabled;
        // -- conditional
        if (this.block.is.cond_block(block)) {
            for (var i = 0; i < block.conditions.length; i++) {
                var cond = block.conditions[i];
                if (cond == undefined) {
                    c.conditions.push(undefined);
                }
                else {
                    c.conditions.push(this.clone(cond, c));
                }
            }
        }
        // -- if dropdown conditional
        if (this.block.is.controls_if_dropdown(block)) {
            c.if_dropdown_conditions = block.if_dropdown_conditions.slice();
        }
        // -- procedure
        if (this.block.is.procedures_defnoreturn(block)
            || this.block.is.procedures_callreturn(block)
            || this.block.is.procedures_callnoreturn(block)) {
            c.procedure_name = block.procedure_name;
        }
        if (this.block.is.procedures_callreturn(block)) {
            c.procedure_return_value = block.procedure_return_value;
        }
        // -- repeat
        if (this.block.is.repeat_n_times(block)) {
            c.times_left = block.times_left;
        }
        return c;
    };
    BlockPoolImpl.prototype.get = function () {
        var block = this.pool.pop();
        if (block == undefined) {
            return this.create();
        }
        return block;
    };
    BlockPoolImpl.prototype.release = function (block) {
        // TODO Limit block pool size?
        // Maybe only clear Block Pool or prune it to a certain size
        // on RuntimeManager::stop ?
        this.reset(block);
        this.pool.push(block);
    };
    BlockPoolImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.BlockUtil)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], BlockPoolImpl);
    return BlockPoolImpl;
}());
exports.BlockPoolImpl = BlockPoolImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja19wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUN4Qyx1Q0FBK0M7QUFFL0MsMkNBQXVDO0FBQ3ZDLG1DQUFxQztBQUlyQztJQUlFLHVCQUNrQyxDQUFRLEVBQ04sTUFBZSxFQUNaLEtBQWlCO1FBRnRCLE1BQUMsR0FBRCxDQUFDLENBQU87UUFDTixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUxoRCxTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQU85QixxQ0FBcUM7UUFDckMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3hELElBQU0sQ0FBQyxHQUFpQixFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVPLDhCQUFNLEdBQWQ7UUFDRSwrQ0FBK0M7UUFDL0MsK0NBQStDO1FBQy9DLGdDQUFnQztRQUNoQyxPQUFZO1lBQ1YsT0FBTztZQUNQLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLEVBQUUsRUFBRSxFQUFFO1lBQ04sWUFBWSxFQUFFLFNBQVM7WUFDdkIsVUFBVSxFQUFFLFNBQVM7WUFDckIsV0FBVyxFQUFF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