"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var H = require("../di_interfaces");
var RuntimeManagerFacade = /** @class */ (function () {
    function RuntimeManagerFacade(run_mgr) {
        this.run_mgr = run_mgr;
    }
    RuntimeManagerFacade.prototype.restart = function () {
        this.run_mgr.restart();
    };
    RuntimeManagerFacade.prototype.run = function () {
        this.run_mgr.run();
    };
    RuntimeManagerFacade.prototype.stop = function () {
        this.run_mgr.stop();
    };
    RuntimeManagerFacade.prototype.update = function () {
        this.run_mgr.update();
    };
    RuntimeManagerFacade.prototype.clone_entity = function (entity_id, is_mirror, is_mirror_responding_others) {
        return this.run_mgr.clone_entity(entity_id, is_mirror, is_mirror_responding_others);
    };
    RuntimeManagerFacade.prototype.set_entity_known = function (entity_id) {
        this.run_mgr.set_entity_known(entity_id);
    };
    RuntimeManagerFacade.prototype.soft_clear = function (typeclass_id) {
        this.run_mgr.soft_clear(typeclass_id);
    };
    RuntimeManagerFacade.prototype.clear = function () {
        this.run_mgr.clear();
    };
    RuntimeManagerFacade.prototype.disable_interpreter_restarts_automatically = function () {
        this.run_mgr.disable_interpreter_restarts_automatically();
    };
    // public initialize_runnable(r:Runnable) : InitRunnableResult {
    //   return this.run_mgr.initialize_runnable(r);
    // }
    RuntimeManagerFacade.prototype.change_running_group = function (id) {
        this.run_mgr.change_running_group(id);
    };
    RuntimeManagerFacade.prototype.load = function (ces) {
        return this.run_mgr.load(ces);
    };
    RuntimeManagerFacade.prototype.create_singleton_entity_instances = function () {
        return this.run_mgr.create_singleton_entity_instances();
    };
    RuntimeManagerFacade.prototype.create_entity_instance = function (typeclass_id, entity_id, params) {
        return this.run_mgr.create_entity_instance(typeclass_id, entity_id, params);
    };
    RuntimeManagerFacade.prototype.procedure_load = function (source_entity_id, procedure_name, compiled_block) {
        this.run_mgr.procedure_load(source_entity_id, procedure_name, compiled_block);
    };
    RuntimeManagerFacade.prototype.set_variable_specs = function (variable_specs) {
        this.run_mgr.set_variable_specs(variable_specs);
    };
    RuntimeManagerFacade.prototype.add_task = function (t) {
        return this.run_mgr.add_task(t);
    };
    RuntimeManagerFacade.prototype.get_thread_lock = function (entity_id, interpreter_id) {
        return this.run_mgr.get_thread_lock(entity_id, interpreter_id);
    };
    RuntimeManagerFacade.prototype.send_action = function (action) {
        this.run_mgr.send_action(action);
    };
    RuntimeManagerFacade.prototype.thread_wait = function (entity_id, interpreter_id, lifetime) {
        this.run_mgr.thread_wait(entity_id, interpreter_id, lifetime);
    };
    RuntimeManagerFacade.prototype.get_elapsed_frames = function () {
        return this.run_mgr.get_elapsed_frames();
    };
    RuntimeManagerFacade.prototype.get_timer_elapsed_s = function () {
        return this.run_mgr.get_timer_elapsed_s();
    };
    RuntimeManagerFacade.prototype.reset_timer = function () {
        this.run_mgr.reset_timer();
    };
    RuntimeManagerFacade.prototype.get_entity_id_from_root_block_id = function (interpreter_id) {
        return this.run_mgr.get_entity_id_from_root_block_id(interpreter_id);
    };
    RuntimeManagerFacade.prototype.delete_other_interpreters = function (interpreter_id) {
        this.run_mgr.delete_other_interpreters(interpreter_id);
    };
    RuntimeManagerFacade.prototype.dispose_all = function () {
        this.run_mgr.dispose_all();
    };
    RuntimeManagerFacade.prototype.dispose_block_group = function (interpreter_id) {
        this.run_mgr.dispose_block_group(interpreter_id);
    };
    RuntimeManagerFacade.prototype.dispose_block_groups_of_other_entities = function (entity_id) {
        this.run_mgr.dispose_block_groups_of_other_entities(entity_id);
    };
    RuntimeManagerFacade.prototype.dispose_other_block_groups_of_entity = function (entity_id, interpreter_to_keep_id) {
        this.run_mgr.dispose_other_block_groups_of_entity(entity_id, interpreter_to_keep_id);
    };
    RuntimeManagerFacade.prototype.destruct_entity = function (entity_id) {
        this.run_mgr.destruct_entity(entity_id);
    };
    RuntimeManagerFacade.prototype.get_global_variable = function (var_id) {
        return this.run_mgr.get_global_variable(var_id);
    };
    RuntimeManagerFacade.prototype.get_variable = function (var_id, interpreter_id, entity_id) {
        return this.run_mgr.get_variable(var_id, interpreter_id, entity_id);
    };
    RuntimeManagerFacade.prototype.lists_get = function (var_id, interpreter_id, entity_id) {
        return this.run_mgr.lists_get(var_id, interpreter_id, entity_id);
    };
    RuntimeManagerFacade.prototype.set_variable = function (var_id, val, interpreter_id, entity_id) {
        this.run_mgr.set_variable(var_id, val, interpreter_id, entity_id);
    };
    RuntimeManagerFacade.prototype.is_entity_variable = function (var_id) {
        return this.run_mgr.is_entity_variable(var_id);
    };
    RuntimeManagerFacade.prototype.get_random_number = function () {
        return this.run_mgr.get_random_number();
    };
    RuntimeManagerFacade.prototype.get_list_id = function (list, entity_id) {
        return this.run_mgr.get_list_id(list, entity_id);
    };
    RuntimeManagerFacade.prototype.broadcaster_sending_message = function (interpreter_id, message, broadcaster_awaits) {
        this.run_mgr.broadcaster_sending_message(interpreter_id, message, broadcaster_awaits);
    };
    RuntimeManagerFacade.prototype.broadcast_responder_bind_broadcaster = function (interpreter_id, message_id) {
        this.run_mgr.broadcast_responder_bind_broadcaster(interpreter_id, message_id);
    };
    RuntimeManagerFacade = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.RuntimeManager)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], RuntimeManagerFacade);
    return RuntimeManagerFacade;
}());
exports.RuntimeManagerFacade = RuntimeManagerFacade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3J1bnRpbWUvcHVibGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUErQztBQUUvQyw0Q0FBd0M7QUEwQnhDLG9DQUFzQztBQUd0QztJQUVFLDhCQUM0QyxPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtJQUNqRSxDQUFDO0lBRUcsc0NBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLGtDQUFHLEdBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxtQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0scUNBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJDQUFZLEdBQW5CLFVBQW9CLFNBQVksRUFBRSxTQUFpQixFQUFFLDJCQUFvQztRQUN2RixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0sK0NBQWdCLEdBQXZCLFVBQXdCLFNBQVk7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsWUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sb0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHlFQUEwQyxHQUFqRDtRQUNFLElB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