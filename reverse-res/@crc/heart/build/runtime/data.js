"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _remove = require("lodash/remove");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
var RunStatus;
(function (RunStatus) {
    RunStatus[RunStatus["Running"] = 0] = "Running";
    RunStatus[RunStatus["Stopped"] = 1] = "Stopped";
})(RunStatus || (RunStatus = {}));
var RuntimeDataImpl = /** @class */ (function () {
    function RuntimeDataImpl(state_store, event_bus, u, config) {
        var _this = this;
        this.state_store = state_store;
        this.event_bus = event_bus;
        this.u = u;
        this.config = config;
        this._clone_id_2_original_id = {}; // clone_id -> original_id
        this.original_id_2_clone_id_list = {}; // sprite_id -> clone_id[]
        this.run_status = RunStatus.Stopped;
        this.arbitrary_data = {}; // This is global to the running program
        this.interpreter_data = {}; // key is actually ID
        this.running_blocks_map = {};
        this.per_entity_clone_limit = this.config.get().per_entity_clone_limit;
        this.should_report_current_running_block = this.config.get().should_report_current_running_block;
        this.event_bus.system.config_updated.immediate.sub(function () {
            _this.per_entity_clone_limit = _this.config.get().per_entity_clone_limit;
            _this.should_report_current_running_block = _this.config.get().should_report_current_running_block;
        });
    }
    RuntimeDataImpl.prototype.clear = function (set_run_status_stopped) {
        if (set_run_status_stopped === void 0) { set_run_status_stopped = true; }
        if (set_run_status_stopped) {
            this.run_status = RunStatus.Stopped;
        }
        this._clone_id_2_original_id = {};
        this.arbitrary_data = {};
        this.interpreter_data = {};
        this.original_id_2_clone_id_list = {};
        if (!this.should_report_current_running_block) {
            return;
        }
        this.clear_running_blocks_map();
    };
    /**
     * This returns true for legacy reasons. In the past, we didn't
     * discriminate between mirror runnables and normal runnables in
     * the runtime.
     */
    RuntimeDataImpl.prototype.is_mirror = function (interpreter_id) {
        return true;
    };
    RuntimeDataImpl.prototype.set_arbitrary_data = function (key, value) {
        this.arbitrary_data[key] = value;
    };
    RuntimeDataImpl.prototype.get_arbitrary_data = function (key) {
        return this.arbitrary_data[key];
    };
    RuntimeDataImpl.prototype.set_interpreter_data = function (interpreter_id, key, value) {
        if (this.interpreter_data[interpreter_id] == undefined) {
            this.interpreter_data[interpreter_id] = {};
        }
        this.interpreter_data[interpreter_id][key] = value;
    };
    RuntimeDataImpl.prototype.get_interpreter_data = function (interpreter_id, key) {
        var value = this.interpreter_data[interpreter_id][key];
        return value;
    };
    RuntimeDataImpl.prototype.dispose_interpreter_data = function (interpreter_id) {
        delete (this.interpreter_data[interpreter_id]);
        if (this.should_report_current_running_block && (this.running_blocks_map[interpreter_id] !== undefined)) {
            this.set_finished_block(this.running_blocks_map[interpreter_id]);
            delete (this.running_blocks_map[interpreter_id]);
        }
    };
    RuntimeDataImpl.prototype.report_variable_updated = function (var_id, new_value) {
        this.event_bus.runtime_data.variable_update.send({
            var_id: var_id,
            new_value: new_value,
        });
    };
    RuntimeDataImpl.prototype.report_list_updated = function (list_id, new_value) {
        this.event_bus.runtime_data.list_update.send({
            list_id: list_id,
            new_value: new_value,
        });
    };
    RuntimeDataImpl.prototype.report_entity_variable_updated = function (var_id, new_value, entity_id) {
        this.event_bus.runtime_data.entity_variable_update.send({
            var_id: var_id,
            new_value: new_value,
            entity_id: entity_id,
        });
    };
    RuntimeDataImpl.prototype.report_entity_list_updated = function (list_id, new_value, entity_id) {
        this.event_bus.runtime_data.entity_list_update.send({
            list_id: list_id,
            new_value: new_value,
            entity_id: entity_id,
        });
    };
    RuntimeDataImpl.prototype.is_running = function () {
        return this.run_status === RunStatus.Running;
    };
    RuntimeDataImpl.prototype.is_stopped = function () {
        return this.run_status === RunStatus.Stopped;
    };
    RuntimeDataImpl.prototype.set_running = function () {
        this.run_status = RunStatus.Running;
    };
    RuntimeDataImpl.prototype.set_stopped = function () {
        this.run_status = RunStatus.Stopped;
    };
    RuntimeDataImpl.prototype.clone_id_2_original_id = function (entity_id) {
        return this._clone_id_2_original_id[entity_id];
    };
    RuntimeDataImpl.prototype.get_sprite_clones = function (sprite_id) {
        return this.original_id_2_clone_id_list[sprite_id];
    };
    RuntimeDataImpl.prototype.clone_created = function (original_entity_id, clone_entity_id) {
        this._clone_id_2_original_id[clone_entity_id] = original_entity_id;
        if (!this.original_id_2_clone_id_list[original_entity_id]) {
            this.original_id_2_clone_id_list[original_entity_id] = [];
        }
        this.original_id_2_clone_id_list[original_entity_id].push(clone_entity_id);
        if (this.per_entity_clone_limit == undefined) {
            return;
        }
        var clone_list = this.original_id_2_clone_id_list[original_entity_id];
        var n_too_many = clone_list.length - this.per_entity_clone_limit;
        for (var i = 0; i < n_too_many; i++) {
            this.event_bus.clones.dispose_clone.send(clone_list[i]);
        }
    };
    RuntimeDataImpl.prototype.remove_clone_lookups = function (removed_id) {
        var original_id = this._clone_id_2_original_id[removed_id];
        if (original_id == undefined) {
            return;
        }
        delete (this._clone_id_2_original_id[removed_id]);
        var clone_list = this.original_id_2_clone_id_list[original_id];
        _remove(clone_list, function (clone_id) { return clone_id === removed_id; });
        if (clone_list.length === 0) {
            // This entity was the last clone of another entity
            delete (this.original_id_2_clone_id_list[original_id]);
        }
    };
    RuntimeDataImpl.prototype.entity_disposed = function (removed_id) {
        this.remove_clone_lookups(removed_id);
        this.event_bus.runtime_data.entity_dispose.send({ entity_id: removed_id });
    };
    RuntimeDataImpl.prototype.get_action_state_value = function (params) {
        return this.state_store.get_action_state_value(params);
    };
    RuntimeDataImpl.prototype.set_running_block = function (interpreter_id, running_block_id) {
        if (this.running_blocks_map[interpreter_id] === running_block_id) {
            return;
        }
        if (this.running_blocks_map[interpreter_id] !== undefined) {
            this.event_bus.runtime_data.block_finished.send(this.running_blocks_map[interpreter_id]);
        }
        this.running_blocks_map[interpreter_id] = running_block_id;
        this.event_bus.runtime_data.block_running.send(running_block_id);
    };
    RuntimeDataImpl.prototype.set_finished_block = function (finished_block_id) {
        this.event_bus.runtime_data.block_finished.send(finished_block_id);
    };
    RuntimeDataImpl.prototype.clear_running_blocks_map = function () {
        var running_interpreters = Object.keys(this.running_blocks_map);
        for (var i = 0; i < running_interpreters.length; i++) {
            var interpreter_id = running_interpreters[i];
            this.set_finished_block(this.running_blocks_map[interpreter_id]);
        }
        this.running_blocks_map = {};
    };
    RuntimeDataImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.ActionStateStore)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
    ], RuntimeDataImpl);
    return RuntimeDataImpl;
}());
exports.RuntimeDataImpl = RuntimeDataImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL2RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBDO0FBQzFDLHVDQUErQztBQUUvQyxvQ0FBc0M7QUFLdEMsNENBQXdDO0FBSXhDLElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLCtDQUFPLENBQUE7SUFDUCwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFHRDtJQWNFLHlCQUM4QyxXQUE4QixFQUN0QyxTQUEyQixFQUMvQixDQUFRLEVBQ04sTUFBZTtRQUpuRCxpQkFhQztRQVo2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDL0IsTUFBQyxHQUFELENBQUMsQ0FBTztRQUNOLFdBQU0sR0FBTixNQUFNLENBQVM7UUFkM0MsNEJBQXVCLEdBQThCLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtRQUNuRixnQ0FBMkIsR0FBNkIsRUFBRSxDQUFDLENBQUMsMEJBQTBCO1FBRXRGLGVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQy9CLG1CQUFjLEdBQWlCLEVBQUUsQ0FBQyxDQUFDLHdDQUF3QztRQUMzRSxxQkFBZ0IsR0FBZ0MsRUFBRSxDQUFDLENBQUMscUJBQXFCO1FBRXpFLHVCQUFrQixHQUFnQyxFQUFFLENBQUM7UUFTM0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsbUNBQW1DLENBQUM7UUFFakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDakQsS0FBSSxDQUFDLHNCQUFz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