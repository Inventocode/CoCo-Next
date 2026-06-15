"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _cloneDeep = require("lodash/cloneDeep");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var basic_types_1 = require("../basic_types");
var H = require("../di_interfaces");
var UserVariableImpl = /** @class */ (function () {
    function UserVariableImpl(ohno, runtime_data) {
        this.ohno = ohno;
        this.runtime_data = runtime_data;
        this.variable_specs = {};
        this.variables = {};
        this.entity_variables = {};
        // Lookup tables
        this.is_script_var = {};
        this.is_entity_var = {};
    }
    UserVariableImpl.prototype.clear_state = function () {
        this.variables = {};
        this.entity_variables = {};
    };
    UserVariableImpl.prototype.clear = function () {
        this.clear_state();
        this.variable_specs = {};
        this.is_script_var = {};
        this.is_entity_var = {};
    };
    UserVariableImpl.prototype.set_variable_specs = function (variable_specs) {
        for (var i = 0; i < variable_specs.length; i++) {
            var spec = variable_specs[i];
            this.variable_specs[spec.id] = spec;
            if (spec.scope === basic_types_1.VariableScope.entity) {
                this.is_entity_var[spec.id] = true;
                if (!this.entity_variables[spec.entity_id]) {
                    this.entity_variables[spec.entity_id] = {};
                }
                this.entity_variables[spec.entity_id][spec.id] = spec.value;
                continue;
            }
            this.variables[spec.id] = spec.value;
        }
    };
    UserVariableImpl.prototype.set_entity_variable_specs = function (entity_id, variable_ids) {
        var entity_variable_specs = variable_ids.map(function (id) { return ({
            type: 'any',
            id: id,
            value: 0,
            scope: basic_types_1.VariableScope.entity,
            entity_id: entity_id,
        }); });
        this.set_variable_specs(entity_variable_specs);
    };
    UserVariableImpl.prototype.get_var_or_list = function (var_id, default_value, interpreter_id, entity_id) {
        if (this.is_entity_var[var_id]) {
            // It's a entity variable
            if (entity_id == undefined) {
                throw this.ohno.system.called_get_variable_without_needed_parameters({
                    var_id: var_id,
                });
            }
            if (this.entity_variables[entity_id] && (this.entity_variables[entity_id][var_id] !== undefined)) {
                return this.entity_variables[entity_id][var_id];
            }
            var var_spec = this.variable_specs[var_id];
            throw this.ohno.user.entity_variable_operation_out_of_scope({
                target_entity_id: entity_id,
                entity_variable_spec: var_spec,
            });
        }
        // Otherwise it's a global variable
        if (this.variables[var_id] == undefined) {
            this.variables[var_id] = default_value;
        }
        return this.variables[var_id];
    };
    UserVariableImpl.prototype.get_list_id = function (list, entity_id) {
        var global_vars = this.variables;
        for (var id in global_vars) {
            var val = global_vars[id];
            if (val === list
                && this.variable_specs[id] !== undefined
                && this.variable_specs[id].type !== undefined
                && this.variable_specs[id].type == 'list') {
                return id;
            }
        }
        var entity_vars = this.entity_variables[entity_id];
        for (var id in entity_vars) {
            var val = entity_vars[id];
            if (val === list
                && this.variable_specs[id] !== undefined
                && this.variable_specs[id].type !== undefined
                && this.variable_specs[id].type == 'list') {
                return id;
            }
        }
        return;
    };
    UserVariableImpl.prototype.set_variable = function (var_id, val, interpreter_id, entity_id) {
        if (this.is_entity_var[var_id]) {
            // It's a entity variable
            if (entity_id == undefined) {
                throw this.ohno.system.called_set_variable_without_needed_parameters({
                    var_id: var_id,
                    val: val,
                });
            }
            if (this.entity_variables[entity_id] && (this.entity_variables[entity_id][var_id] !== undefined)) {
                this.entity_variables[entity_id][var_id] = val;
                this.runtime_data.report_entity_variable_updated(var_id, val, entity_id);
                return;
            }
            throw this.ohno.user.entity_variable_operation_out_of_scope({
                target_entity_id: entity_id,
                entity_variable_spec: this.variable_specs[var_id],
            });
        }
        // Otherwise it's a global variable
        this.variables[var_id] = val;
        this.runtime_data.report_variable_updated(var_id, val);
    };
    UserVariableImpl.prototype.get_variable = function (var_id, interpreter_id, entity_id) {
        return this.get_var_or_list(var_id, 0, interpreter_id, entity_id);
    };
    UserVariableImpl.prototype.lists_get = function (var_id, interpreter_id, entity_id) {
        return this.get_var_or_list(var_id, [], interpreter_id, entity_id);
    };
    UserVariableImpl.prototype.get_global_variable = function (var_id) {
        return this.variables[var_id];
    };
    UserVariableImpl.prototype.is_entity_variable = function (var_id) {
        var spec = this.variable_specs[var_id];
        if (!spec) {
            return false;
        }
        return spec.scope === basic_types_1.VariableScope.entity;
    };
    UserVariableImpl.prototype.clone_entity_variables = function (entity_id, new_entity_id) {
        var cloned_variables = _cloneDeep(this.entity_variables[entity_id]);
        this.entity_variables[new_entity_id] = cloned_variables;
    };
    UserVariableImpl.prototype.entity_disposed = function (entity_id) {
        delete (this.entity_variables[entity_id]);
    };
    UserVariableImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.RuntimeData)),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], UserVariableImpl);
    return UserVariableImpl;
}());
exports.UserVariableImpl = UserVariableImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl92YXJpYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL3VzZXJfdmFyaWFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBQ2hELHVDQUErQztBQUUvQyw0Q0FBd0M7QUFNeEMsOENBUXdCO0FBRXhCLG9DQUFzQztBQUt0QztJQVVFLDBCQUNrQyxJQUFXLEVBQ0osWUFBMEI7UUFEakMsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNKLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVjNELG1CQUFjLEdBQW9CLEVBQUUsQ0FBQztRQUNyQyxjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixxQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBRWxELGdCQUFnQjtRQUNSLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO0lBSy9CLENBQUM7SUFFRyxzQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDZDQUFrQixHQUF6QixVQUEwQixjQUE2QjtRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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