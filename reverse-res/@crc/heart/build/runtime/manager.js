"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var rlt = require("resul-ts");
var _cloneDeep = require("lodash/cloneDeep");
var _defaults = require("lodash/defaults");
var _filter = require("lodash/filter");
var _identity = require("lodash/identity");
var _remove = require("lodash/remove");
var _some = require("lodash/some");
var _sortBy = require("lodash/sortBy");
var _sortedUniq = require("lodash/sortedUniq");
var _toString = require("lodash/toString");
var _uniq = require("lodash/uniq");
var catastrophic_1 = require("catastrophic");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var basic_types_1 = require("../basic_types");
var block_types_1 = require("../block_types");
var H = require("../di_interfaces");
var block_provider_1 = require("../block_provider");
/*
 * broadcast_and_wait will block the current interpreter until all the responders finish.
 * BroadcasterStatus is used for runtime manager to block or unblock broadcasting interpreters.
 * Pending represents for just sending the message, the action still in the action queue to be handled in the next tick.
 * After updating, status will turn to Sending.
 * Sending represents that the message is ready for listening, if any responder response and bind the message, it turns to Waiting. If
 * not, it turns to Idle.
 * Idle represents for no responders blocking the broadcaster, the interpreter should be unblocked and continuous running
 */
var BroadcasterStatus;
(function (BroadcasterStatus) {
    BroadcasterStatus[BroadcasterStatus["Pending"] = 1] = "Pending";
    BroadcasterStatus[BroadcasterStatus["Sending"] = 2] = "Sending";
    BroadcasterStatus[BroadcasterStatus["Idle"] = 3] = "Idle";
    BroadcasterStatus[BroadcasterStatus["Waiting"] = 4] = "Waiting";
})(BroadcasterStatus || (BroadcasterStatus = {}));
function construct_dynamic_runnable(sr, interpreter_id, target_entity_id, compile_cache_id, responder_priority, action_parameters, is_warped, on_finished, on_dispose) {
    if (responder_priority === void 0) { responder_priority = 50; }
    if (action_parameters === void 0) { action_parameters = {}; }
    if (is_warped === void 0) { is_warped = false; }
    var dr = {};
    dr.static = sr;
    dr.interpreter_id = interpreter_id;
    dr.target_entity_id = target_entity_id;
    dr.compile_cache_id = compile_cache_id != undefined ? compile_cache_id : sr.source_map_rbid;
    dr.responder_priority = responder_priority;
    dr.action_parameters = action_parameters;
    dr.is_warped = is_warped;
    dr.on_finished = on_finished;
    dr.on_dispose = on_dispose;
    return dr;
}
var RuntimeManagerImpl = /** @class */ (function () {
    function RuntimeManagerImpl(state_store, orf, drf, block_pool, event_bus, log, ohno, prng_factory, registry, clock, runtime_data, task_manager, u, config, script_store, user_variable) {
        var _this = this;
        this.state_store = state_store;
        this.orf = orf;
        this.drf = drf;
        this.block_pool = block_pool;
        this.event_bus = event_bus;
        this.log = log;
        this.ohno = ohno;
        this.prng_factory = prng_factory;
        this.registry = registry;
        this.clock = clock;
        this.runtime_data = runtime_data;
        this.task_manager = task_manager;
        this.u = u;
        this.config = config;
        this.script_store = script_store;
        this.user_variable = user_variable;
        this.frames = 0;
        this.interpreters_spawned = 0;
        this.timer_block_date = 0; // for timer block
        this.entity_states = {};
        this.entities = {};
        this.interpreters = {};
        this.runnings = {};
        // Cache of sorted list of interpreters
        this.sorted_interpreters = [];
        // A cache for checking after each statement, if the previous statement
        // created a blocking thread. Completely handled (or ignored entirely) by
        // BlockInterpreter or OptiRunner
        this.running_interpreter_was_blocked = false;
        this.action_responders = {};
        this.state_responders = {};
        this.dynamic_responders = {};
        this.action_queue = [];
        this.action_parameters = {};
        // maps spawned tell interpreter rbid to rbid and entity_id of the source/teller
        this.tell_source_map = {};
        this.broadcast_interpreter_n_listeners = {};
        this.broadcast_responder_to_awaiting_interpreter_id = {};
        this.broadcasting_interpreter_status_map = {};
        this.broadcast_message_to_broadcasting_interpreter_id = {};
        this.broadcast_message_should_wait = {};
        // Lookup tables for Responder Instances (Interpreters instantiated from Responders)
        // (these are also the source of truth for which Responder Instances exist)
        this.responder_id_to_instance_interpreter_id = {};
        this.instance_interpreter_id_to_responder_id = {};
        // Things deferred to next update
        this.just_restart = false;
        this.just_stopped = false;
        this.interpreters_needing_dispose = {};
        this.interpreters_needing_dispose_force = {};
        this.entities_needing_add = [];
        this.interpreters_needing_spawn = [];
        this.entities_needing_destruct = {};
        this.entities_needing_dispose = [];
        this.disable_automatic_interpreter_restarts = false;
        this.entities_cloned_times = {};
        this.running_group = undefined;
        this.running_group_changed = false;
        this.get_frame_error_metadata = function (error_metadata) {
            // We clone to ensure we don't modify any stored stack traces, e.g.
            // the ones in this.tell_source_map
            error_metadata = _cloneDeep(error_metadata);
            var source_interpreter_id = error_metadata.interpreter_id;
            // Translate potentail Tell Interpreter's rbid to source entity_id and rbid
            // This must come before the Responder Instance RBID check, since the source
            // rbid might be a responder instance rbid (whereas a tell interpreter's rbid
            // can never be a responder instance rbid).
            var source_rbid = error_metadata.source_map_rbid;
            var source_entity_id = error_metadata.source_entity_id;
            var source_block_id = error_metadata.block_id;
            if (source_interpreter_id !== undefined) {
                var tell_source = _this.tell_source_map[source_interpreter_id];
                if (tell_source !== undefined) {
                    source_block_id = tell_source.block_id;
                    source_entity_id = tell_source.source_entity_id;
                    source_rbid = tell_source.source_map_rbid;
                }
            }
            if (error_metadata.block_id != undefined
                && error_metadata.block_id == source_interpreter_id
                && source_block_id != undefined) {
                // TODO clean this up since BlockInterpreter doesn't exist any more
                // This block was the child block of a tell block. It had its block_id
                // changed to its new rbid because it's used by a BlockInterpreter.
                // We'll use the original block_id so that the error handler can
                // identify the correct source block
                error_metadata.block_id = source_block_id;
            }
            // Translate potential Responder Instance RBID to Responder RBID
            var responder_rbid = _this.instance_interpreter_id_to_responder_id[source_rbid];
            source_rbid = responder_rbid || source_rbid;
            // Translate procedure RBID and entity_id
            if (error_metadata.proc_id !== undefined) {
                var procedure_container = _this.get_procedure(error_metadata.proc_id);
                if (procedure_container !== undefined) {
                    source_rbid = procedure_container.script.id;
                    source_entity_id = procedure_container.source_entity_id;
                }
            }
            error_metadata.source_map_rbid = source_rbid;
            if (source_entity_id != undefined) {
                error_metadata.source_entity_id = source_entity_id;
            }
            return error_metadata;
        };
        this.event_bus.clones.dispose_clone.immediate.sub(function (remove_id) {
            _this.destruct_entity(remove_id);
        });
        var configure_runtime_manager = function () {
            var cfg = config.get();
            _this.deterministic = cfg.deterministic;
            _this.entity_max_clones_per_frame = cfg.entity_max_clones_per_frame;
            if (_this.deterministic == undefined) {
                _this.prng = prng_factory.create();
                _this.interpreter_sorters = _this.get_interpreter_sorters(false);
                _this.get_sorted_ids = function (ids) { return _uniq(ids); };
            }
            else {
                _this.prng = prng_factory.create(_this.deterministic.prng_seed);
                _this.interpreter_sorters = _this.get_interpreter_sorters(true);
                _this.get_sorted_ids = function (ids) {
                    ids = _sortBy(ids, _identity);
                    return _sortedUniq(ids);
                };
            }
            if (_this.user_debug_mode != cfg.user_debug_mode && _this.runtime_data.is_running()) {
                _this.event_bus.warning.all.send({
                    error: _this.ohno.configuration.tried_to_change_user_debug_mode_while_running(),
                });
                _this.stop();
            }
            else {
                _this.user_debug_mode = cfg.user_debug_mode;
                _this.interpreter_factory = _this.user_debug_mode ? _this.drf : _this.orf;
            }
        };
        configure_runtime_manager();
        this.event_bus.system.config_updated.immediate.sub(configure_runtime_manager);
    }
    RuntimeManagerImpl.prototype.set_variable_specs = function (variable_specs) {
        this.user_variable.set_variable_specs(variable_specs);
    };
    RuntimeManagerImpl.prototype.change_running_group = function (id) {
        if (id === this.running_group) {
            return;
        }
        this.running_group = id;
        this.running_group_changed = true;
    };
    RuntimeManagerImpl.prototype.interpreter_out_of_running_group = function (group_id) {
        if (group_id === undefined || this.running_group === undefined) {
            return false;
        }
        if (group_id === this.running_group) {
            return false;
        }
        return true;
    };
    RuntimeManagerImpl.prototype.is_interpreter_blocking_broadcaster = function (interpreter_id) {
        return this.broadcast_responder_to_awaiting_interpreter_id[interpreter_id] !== undefined;
    };
    RuntimeManagerImpl.prototype.block_finish_out_of_run_group = function (ns_id) {
        return this.registry.block_finish_out_of_run_group(ns_id);
    };
    /**
     * Used for hot reloading in Box3.
     *
     * @param {ID} typeclass_id the typeclass_id who's responders should be cleared
     */
    RuntimeManagerImpl.prototype.soft_clear = function (typeclass_id) {
        // TODO consider this.interpreters_to_restart_when_finished for RM::soft_clear
        // Box3 currently doesn't use any of those so it should be fine for now
        function removed_typeclass(res_dict) {
            var filtered_responders = {};
            for (var event_id in res_dict) {
                var responder_list = res_dict[event_id];
                var filtered_event_responders = [];
                for (var i = 0; i < responder_list.length; i++) {
                    var responder = responder_list[i];
                    if (responder.runnable.typeclass_id == typeclass_id) {
                        continue;
                    }
                    filtered_event_responders.push(responder);
                }
                filtered_responders[event_id] = filtered_event_responders;
            }
            return res_dict;
        }
        this.action_responders = removed_typeclass(this.action_responders);
        this.state_responders = removed_typeclass(this.state_responders);
        this.dynamic_responders = removed_typeclass(this.dynamic_responders);
        this.interpreter_factory.clear(); // clear cached compiled ASTs
    };
    RuntimeManagerImpl.prototype.clear_state = function () {
        this.frames = 0;
        this.interpreters_spawned = 0;
        this.timer_block_date = 0;
        this.interpreters = {};
        this.interpreters_needing_spawn = [];
        this.sorted_interpreters = [];
        this.action_responders = {};
        this.state_responders = {};
        this.dynamic_responders = {};
        this.action_queue = [];
        this.tell_source_map = {};
        this.responder_id_to_instance_interpreter_id = {};
        this.instance_interpreter_id_to_responder_id = {};
        this.broadcast_interpreter_n_listeners = {};
        this.broadcast_responder_to_awaiting_interpreter_id = {};
        this.broadcasting_interpreter_status_map = {};
        this.broadcast_message_to_broadcasting_interpreter_id = {};
        this.broadcast_message_should_wait = {};
        this.just_restart = false;
        this.just_stopped = false;
        this.disable_automatic_interpreter_restarts = false;
        this.interpreters_needing_dispose = {};
        this.interpreters_needing_dispose_force = {};
        this.entities_needing_add = [];
        this.entities_needing_destruct = {};
        this.entities_needing_dispose = [];
        this.runtime_data.clear(false);
        this.state_store.clear();
        this.task_manager.clear();
        this.user_variable.clear_state();
        this.clock.clear();
        this.running_group = undefined;
        this.entities = {};
        this.runnings = {};
    };
    RuntimeManagerImpl.prototype.clear = function () {
        this.clear_state();
        this.entity_states = {};
        this.script_store.clear();
        this.user_variable.clear();
        this.drf.clear();
        this.orf.clear();
    };
    RuntimeManagerImpl.prototype.do_spawn_interpreter = function (r) {
        var sr = r.static;
        var identities = {
            typeclass_id: sr.typeclass_id,
            source_map_entity: sr.source_map_entity,
            source_map_rbid: sr.source_map_rbid,
            target_entity: r.target_entity_id,
            interpreter_id: r.interpreter_id,
        };
        var interpreter = this.interpreter_factory.create(this, identities, {
            creation_counter: this.interpreters_spawned,
            frame_created: this.frames,
            responder_priority: r.responder_priority != undefined ? r.responder_priority : 50,
        }, r.compile_cache_id, sr.script, sr.group_id, r.is_warped || false, r.action_parameters, r.on_finished);
        var interpreter_id = r.interpreter_id;
        var entity_id = r.target_entity_id;
        this.interpreters_spawned += 1;
        this.interpreters[interpreter_id] = interpreter;
        this.runnings[interpreter_id] = r;
        // make sure there is an Entity to add_interp
        var entity = this.entities[entity_id];
        if (entity == undefined) {
            entity = this.create_entity(entity_id);
        }
        entity.add_interpreter(interpreter_id);
    };
    RuntimeManagerImpl.prototype.spawn_interpreter = function (r) {
        if (this.runtime_data.is_running()) {
            this.interpreters_needing_spawn.push(r);
        }
        else {
            this.do_spawn_interpreter(r);
        }
    };
    RuntimeManagerImpl.prototype.get_responder_filter_value = function (param) {
        if (param == undefined) {
            return param;
        }
        if (!this.u.block.is.compiled_block(param)) {
            return _toString(param);
        }
        else if (this.u.block.is.atomic_type(param.type)) {
            return _toString(param.params[Object.keys(param.params)[0]]);
        }
        else {
            throw this.ohno.system.unknown_action_block_param_type({
                caught_at: 'RuntimeManager::get_param_value, unknown action block param type',
            });
        }
    };
    RuntimeManagerImpl.prototype.load = function (ces) {
        // TODO Make sure everything is run though compilation AND OptiCompiler on load.
        // So that we can report errors immediately, instead of when the project
        // is being run. This may let us remove Result return values from initialize_runnable,
        // create_singleton_entity_instances, create_entity_instance
        var _this = this;
        // First load all procedures
        ces.forEach(function (ce) { return _this.script_store.load_compiled_entity_procedures(ce); });
        // Then save all runnables for possible instantiation
        var results = ces.map(function (ce) {
            var res = _this.script_store.load_typeclass(ce);
            if (rlt.is_fail(res)) {
                if (res.message == 'Typeclass had multiple constructors') {
                    _this.report_error_and_stop(_this.ohno.compiler.user.defined_multiple_constructors({
                        typeclass_id: ce.id,
                        compiled_entity: ce,
                    }), "RuntimeManager::load_typeclass");
                }
                else {
                    _this.report_error_and_stop(_this.ohno.compiler.user.defined_multiple_destructors({
                        compiled_entity: ce,
                    }), "RuntimeManager::load_typeclass");
                }
            }
            return res;
        });
        // set entity variable specs
        ces.forEach(function (ce) {
            if (ce.variables != undefined) {
                _this.user_variable.set_entity_variable_specs(ce.id, ce.variables);
            }
        });
        return results;
    };
    RuntimeManagerImpl.prototype.create_singleton_entity_instances = function () {
        var _this = this;
        var results = [];
        var typeclass_ids = this.script_store.get_loaded_typeclass_ids();
        typeclass_ids.forEach(function (typeclass_id) {
            var res = _this.create_entity_instance(typeclass_id, typeclass_id, // entity_id == typeclass_id in all singleton mode
            undefined);
            results = results.concat(res);
        });
        return results;
    };
    RuntimeManagerImpl.prototype.create_entity_instance = function (typeclass_id, entity_id, params) {
        var err_info = { typeclass_id: typeclass_id, entity_id: entity_id };
        var typeclass = this.script_store.get_typeclass(typeclass_id);
        if (typeclass == undefined) {
            var error = this.ohno.client.missing_typeclass(err_info);
            this.report_error_and_stop(error, 'create_entity_instance');
            return [rlt.error("No typeclass with id \"" + typeclass_id + "\"", error)];
        }
        var entity = this.create_entity(entity_id);
        if (entity.alread_initialized) {
            var error = this.ohno.client.duplicate_entity_id(err_info);
            this.report_error_and_stop(error, 'create_entity_instance');
            return [rlt.error('An entity with id "${entity_id}" already exists', error)];
        }
        entity.set_typeclass(typeclass);
        if (params != undefined) {
            entity.set_constructor_params(params);
        }
        var result = this.add_entity(entity);
        return result;
    };
    RuntimeManagerImpl.prototype.initialize_runnable = function (r) {
        try {
            this.spawn_interpreter(r);
        }
        catch (e) {
            this.report_error_and_stop(e, 'RuntimeManager::initialize_runnable, spawning interpreter');
            return rlt.error('Error while spawning interpreter', e);
        }
        return rlt.success(r.interpreter_id);
    };
    RuntimeManagerImpl.prototype.initialize_responder = function (ar) {
        var runnable = ar.runnable, responder_spec = ar.responder_spec;
        var value_filter_arg_name = 'filter_value';
        var sub_type_filter_arg_name = 'filter_sub_type';
        if (responder_spec.filter_arg_names != undefined) {
            value_filter_arg_name = responder_spec.filter_arg_names.value;
            if (responder_spec.filter_arg_names.sub_type != undefined) {
                sub_type_filter_arg_name = responder_spec.filter_arg_names.sub_type;
            }
        }
        // Save filters for this Responder
        var params = runnable.script.params;
        var value = this.get_responder_filter_value(params[value_filter_arg_name]);
        if (value) {
            ar.value_filter = value;
        }
        var sub_type = this.get_responder_filter_value(params[sub_type_filter_arg_name]);
        if (sub_type) {
            ar.sub_type_filter = sub_type;
        }
        // Save the Responder to either the action- , state- or dynamic responder list
        var collection = this.action_responders;
        if (ar.responder_spec.type == block_provider_1.ResponderType.State) {
            collection = this.state_responders;
        }
        if (ar.responder_spec.type == block_provider_1.ResponderType.Dynamic) {
            collection = this.dynamic_responders;
        }
        var action_ns_id = block_provider_1.namespaced_id(ar.action_spec.namespace, ar.action_spec.id);
        if (collection[action_ns_id] == undefined) {
            collection[action_ns_id] = [];
        }
        collection[action_ns_id].push(ar);
        return rlt.success('responder'); // TODO return a better structure from initialize_runnable
    };
    /**
     * Called from the environment to inform the RuntimeManager that an action has
     * occurred, and that it should execute any ActionRunnables that have been
     * registered to react to this Action.
     *
     * An ActionSpec matching this Action's id and namespace must have been provided
     * to Heart using a BlockProvider.
     *
     * @param {Action} action A description of the event that occurred.
     */
    RuntimeManagerImpl.prototype.send_action = function (action) {
        if (this.runtime_data.is_stopped()) {
            return;
        }
        this.action_queue.push(action);
    };
    RuntimeManagerImpl.prototype.runnable_should_respond_to_action = function (r, action) {
        if (r.responder_spec.entity_specific) {
            if (action.entity_id == undefined
                || r.target_entity_id != action.entity_id) {
                // the ActionRunnable is entity specific, and the event was triggered for
                // another entity than this one
                return false;
            }
        }
        if (r.sub_type_filter != undefined
            && r.sub_type_filter != action.sub_type) {
            // the ActionRunnable should only react to events with a certain subtype,
            // and this one does not match
            return false;
        }
        if (r.value_filter != undefined) {
            var event_value = action.value;
            if (event_value == undefined) {
                if (r.action_spec.statefulness != undefined) {
                    event_value = r.action_spec.statefulness.default_value;
                }
            }
            if (r.value_filter != event_value) {
                // the ActionRunnable should only react to events with a certain value,
                // and this one does not match
                return false;
            }
        }
        return true;
    };
    RuntimeManagerImpl.prototype.create_action_responder_interpreters = function (actions) {
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i];
            var action_id = block_provider_1.namespaced_id(action.namespace, action.id);
            if (this.action_responders[action_id] == undefined) {
                continue;
            }
            for (var j = 0; j < this.action_responders[action_id].length; j++) {
                var r = this.action_responders[action_id][j];
                // Synchronous Responders don't want to have multiple responder
                // instances spawned at the same time
                if (r.responder_spec.async == false) {
                    if (this.responder_id_to_instance_interpreter_id[r.responder_id] != undefined) {
                        continue;
                    }
                }
                if (!this.runnable_should_respond_to_action(r, action)) {
                    continue;
                }
                this.do_add_responder_interpreters(r, 'action', action.parameters);
            }
        }
    };
    RuntimeManagerImpl.prototype.create_state_responder_interpreters = function () {
        for (var event_id in this.state_responders) {
            var responders = this.state_responders[event_id];
            for (var i = 0; i < responders.length; i++) {
                var r = responders[i];
                // Synchronous Responders don't want to have multiple responder
                // instances spawned at the same time
                if (r.responder_spec.async == false) {
                    if (this.responder_id_to_instance_interpreter_id[r.responder_id] != undefined) {
                        continue;
                    }
                }
                // For each state responder, check if the present state matches its preference
                var query = {
                    action_namespace: r.action_spec.namespace,
                    action_id: r.action_spec.id,
                    sub_type: r.sub_type_filter,
                };
                if (r.responder_spec.entity_specific) {
                    // FIXME did this fix a bug? or introduce one?
                    query.entity_id = r.target_entity_id;
                    // old version:
                    // query.entity_id = r.identities.interpreter_id;
                }
                var state_value = this.state_store.get_action_state_value(query);
                if (r.value_filter != undefined && state_value != r.value_filter) {
                    continue;
                }
                // If so, initialize a new BlockInterpreter with its responding code
                this.do_add_responder_interpreters(r, 'state');
            }
        }
    };
    RuntimeManagerImpl.prototype.is_stateful_action = function (action_id) {
        var action_spec = this.registry.get_action_type(action_id);
        if (action_spec == undefined) {
            return false;
        }
        return action_spec.statefulness != undefined;
    };
    RuntimeManagerImpl.prototype.create_dynamic_responder_interpreters = function (actions) {
        var _this = this;
        // Filter dynamic_responders, only run responder whose relative action is
        // stateful or have received new action in this frame.
        var filtered_action_id = _filter(Object.keys(this.dynamic_responders), function (action_id) { return _some(actions, { id: action_id }) || _this.is_stateful_action(action_id); });
        for (var i = 0; i < filtered_action_id.length; i++) {
            var responders = this.dynamic_responders[filtered_action_id[i]];
            for (var j = 0; j < responders.length; j++) {
                var r = responders[j];
                if (r.responder_spec.trigger_function == undefined) {
                    continue;
                }
                // Synchronous Responders don't want to have multiple responder
                // instances spawned at the same time
                if (r.responder_spec.async == false) {
                    if (this.responder_id_to_instance_interpreter_id[r.responder_id] != undefined) {
                        continue;
                    }
                }
                var should_trigger = r.responder_spec.trigger_function(actions, r.value_filter, r.sub_type_filter, r.target_entity_id);
                if (!should_trigger) {
                    continue;
                }
                // If so, initialize a new BlockInterpreter with its responding code
                this.do_add_responder_interpreters(r, 'dynamic');
            }
        }
    };
    RuntimeManagerImpl.prototype.do_add_responder_interpreters = function (r, type, action_parameters) {
        var sr = r.runnable;
        if (this.interpreter_out_of_running_group(sr.group_id)) {
            return;
        }
        var new_interpreter_id = this.generate_random_id("__" + type + "_responder_interpreter__");
        // Add lookups
        var responder_id = r.responder_id;
        this.instance_interpreter_id_to_responder_id[new_interpreter_id] = responder_id;
        if (this.responder_id_to_instance_interpreter_id[responder_id] == undefined) {
            this.responder_id_to_instance_interpreter_id[responder_id] = [new_interpreter_id];
        }
        else {
            this.responder_id_to_instance_interpreter_id[responder_id].push(new_interpreter_id);
        }
        var runnable = construct_dynamic_runnable(sr, new_interpreter_id, r.target_entity_id, undefined, r.responder_priority, action_parameters);
        this.initialize_runnable(runnable);
    };
    RuntimeManagerImpl.prototype.update_actions = function () {
        // The order of these function calls is important
        // Should add interpreters first, so that they are prioritized
        // higher than other new interpreters
        this.create_action_responder_interpreters(this.action_queue);
        this.state_store.update(this.action_queue); // Modifies state store
        this.create_state_responder_interpreters(); // Uses state store
        // May access arbitrary state
        this.create_dynamic_responder_interpreters(this.action_queue);
        this.action_queue = [];
    };
    RuntimeManagerImpl.prototype.create_entity = function (entity_id) {
        var e = new Entity(entity_id, this);
        this.entities[entity_id] = e;
        return e;
    };
    RuntimeManagerImpl.prototype.do_add_entity = function (entity) {
        this.entities[entity.id] = entity;
        if (this.runtime_data.clone_id_2_original_id(entity.id) === undefined) {
            // TODO PERF LEAK set_entity_known causes memory leaks if many entity instances created
            // e.g. if used for projectiles or particles.
            this.set_entity_known(entity.id);
        }
        return entity.init();
    };
    RuntimeManagerImpl.prototype.add_entity = function (e) {
        if (this.runtime_data.is_running()) {
            this.entities_needing_add.push(e);
            return [];
            // TODO Find a good way of reporting these errors
        }
        else {
            return this.do_add_entity(e);
        }
    };
    RuntimeManagerImpl.prototype.clone_entity = function (entity_id, is_mirror, is_mirror_responding_others) {
        if (this.get_entity_state(entity_id) === basic_types_1.EntityState.Unknown) {
            throw this.ohno.user.clone_unknown_entity({ entity_id: entity_id });
        }
        // update and check cloned times
        if (this.entities_cloned_times[entity_id] == undefined) {
            this.entities_cloned_times[entity_id] = 0;
        }
        if (this.entities_cloned_times[entity_id] > this.entity_max_clones_per_frame) {
            return;
        }
        this.entities_cloned_times[entity_id]++;
        var entity = this.entities[entity_id];
        var new_entity_id = this.generate_random_id("_clone_" + entity_id + "_random_id");
        // the entity is known but uninitialized,
        // it indicates that the entity have no compiled block,
        // so just return new entity id to pretend that the entity is cloned.
        if (entity == undefined) {
            return new_entity_id;
        }
        var new_entity = entity.get_clone(new_entity_id, is_mirror, is_mirror_responding_others);
        // Clone entity variables
        this.user_variable.clone_entity_variables(entity_id, new_entity_id);
        // Update runtime data
        // this update must happen before do_add_entity/add_entity are called,
        // because they query RuntimeData to see if they're adding a clone
        // or a non-clone.
        this.runtime_data.clone_created(entity_id, new_entity_id);
        this.add_entity(new_entity);
        return new_entity_id;
    };
    RuntimeManagerImpl.prototype.run = function () {
        this.timer_block_date = new Date().valueOf();
        this.runtime_data.set_running();
        this.event_bus.runtime_manager.start.send();
    };
    RuntimeManagerImpl.prototype.delete_other_interpreters = function (interpreter_id) {
        var other_interpreters = Object.keys(this.interpreters)
            .filter(function (i) { return i != interpreter_id; });
        for (var i = 0; i < other_interpreters.length; i++) {
            this.dispose_block_group(other_interpreters[i]);
        }
    };
    RuntimeManagerImpl.prototype.stop = function () {
        if (this.runtime_data.is_stopped()) {
            return;
        }
        this.runtime_data.set_stopped();
        this.just_stopped = true;
    };
    RuntimeManagerImpl.prototype.restart = function () {
        this.just_restart = true;
    };
    // TODO Refactor RuntimeManager::update to easily defer actions to next tick?
    RuntimeManagerImpl.prototype.update = function () {
        var _this = this;
        this.event_bus.runtime_manager.before_update.send();
        var needs_interpreter_sort = false;
        var n_interpreters = Object.keys(this.interpreters).length;
        try {
            // It is important that update_dispose is run early in this function,
            // as we might otherwise run code that has faulty references inside it.
            this.update_dispose();
            if (n_interpreters != Object.keys(this.interpreters).length) {
                needs_interpreter_sort = true;
            }
        }
        catch (e) {
            this.report_error_and_stop(e, 'RuntimeManager::update, update_dispose');
            return;
        }
        // Stop signal has to happen after update_dispose
        if (this.just_stopped || this.just_restart) {
            // this.clear() clears this.just_*, so to_stop is needed
            var to_stop = this.just_stopped;
            if (this.just_stopped) {
                this.clear();
            }
            else if (this.just_restart) {
                this.clear_state();
            }
            // Since we expect clients to reset all relevant states
            // in reaction to the stop and restart signals, we will
            // clear (not flush) our runtime event_bus buffers before
            // sending the signal. Otherwise we're liable to have
            // events remaining in the buffers, which might then be
            // dispatched on the next update after the next call to
            // RuntimeManager::run
            // FIXME BUG? I think nekobasu clear() removes subscribers, not buffered events
            // Seems like nekobasu makes clear() actually clear buffered events, see
            // event_buffer.ts L70
            // TODO Expose subscriber clearning from nekobasu
            this.event_bus.runtime_data._meta.clear();
            this.event_bus.runtime_manager._meta.clear();
            if (to_stop) {
                this.event_bus.runtime_manager.stop.send();
            }
            else {
                this.event_bus.runtime_manager.restart.send();
            }
            return;
        }
        if (this.disable_automatic_interpreter_restarts) {
            return;
        }
        if (this.runtime_data.is_running()) {
            try {
                // TODO PERF cache sorted interpreters
                n_interpreters = Object.keys(this.interpreters).length;
                // Add new entities (adds Responders and may add Runnables to
                // interpreters_needing_spawn)
                for (var i = 0; i < this.entities_needing_add.length; i++) {
                    var entity = this.entities_needing_add[i];
                    // Do not add entities if they've already been declared for disposal. This
                    // can happen when clones are being added rapidly when the clones per
                    // entity limit config value is defined. E.g. if clone is called 500 times
                    // with a limit of 300, 200 of those entities to add will already have been
                    // marked as to be removed.
                    if (this.entities_needing_destruct[entity.id]) {
                        continue;
                    }
                    this.do_add_entity(entity);
                }
                this.entities_needing_add = [];
                // Respond to changes in environment
                this.clock.update();
                this.update_actions();
                this.update_broadcaster_await();
                // Add new interpreters as needed
                for (var i = 0; i < this.interpreters_needing_spawn.length; i++) {
                    this.do_spawn_interpreter(this.interpreters_needing_spawn[i]);
                }
                this.interpreters_needing_spawn = [];
                var interpreters_after_dispose_add = Object.keys(this.interpreters).map(function (id) { return _this.interpreters[id]; });
                if (n_interpreters != interpreters_after_dispose_add.length) {
                    needs_interpreter_sort = true;
                }
                if (needs_interpreter_sort
                    || interpreters_after_dispose_add.length != this.sorted_interpreters.length) {
                    this.sorted_interpreters = _sortBy(interpreters_after_dispose_add, this.interpreter_sorters);
                }
            }
            catch (e) {
                this.report_error_and_stop(e, 'RuntimeManager::update, adding and sorting interpreters');
                return;
            }
            // Step code
            try {
                this.step_code();
            }
            catch (e) {
                this.report_error_and_stop(e, 'RuntimeManager::update, stepping code');
                return;
            }
            this.task_manager.update();
            this.frames++;
            this.event_bus.runtime_manager.after_update.send();
        }
    };
    RuntimeManagerImpl.prototype.broadcaster_is_blocking_on_await = function (interpreter_id) {
        return this.broadcasting_interpreter_status_map[interpreter_id] && this.broadcasting_interpreter_status_map[interpreter_id] !== BroadcasterStatus.Idle;
    };
    RuntimeManagerImpl.prototype.update_broadcaster_await = function () {
        for (var interpreter_id in this.broadcasting_interpreter_status_map) {
            if (this.broadcasting_interpreter_status_map[interpreter_id] == BroadcasterStatus.Sending) {
                this.broadcasting_interpreter_status_map[interpreter_id] = BroadcasterStatus.Idle;
            }
            if (this.broadcasting_interpreter_status_map[interpreter_id] == BroadcasterStatus.Pending) {
                this.broadcasting_interpreter_status_map[interpreter_id] = BroadcasterStatus.Sending;
            }
        }
    };
    RuntimeManagerImpl.prototype.dispose_idle_broadcaster = function () {
        for (var interpreter_id in this.broadcasting_interpreter_status_map) {
            if (this.broadcasting_interpreter_status_map[interpreter_id] == BroadcasterStatus.Idle) {
                delete (this.broadcasting_interpreter_status_map[interpreter_id]);
                delete (this.broadcast_interpreter_n_listeners[interpreter_id]);
                delete (this.broadcast_message_should_wait[interpreter_id]);
            }
        }
    };
    RuntimeManagerImpl.prototype.broadcaster_sending_message = function (interpreter_id, message, broadcaster_awaits) {
        this.send_action({
            id: 'broadcast',
            namespace: '',
            parameters: undefined,
            sub_type: message,
            value: 'on',
        });
        var bound_interpreter_id = this.broadcast_message_to_broadcasting_interpreter_id[message];
        if (bound_interpreter_id && this.broadcasting_interpreter_status_map[bound_interpreter_id] == BroadcasterStatus.Pending) {
            return;
        }
        this.broadcast_message_to_broadcasting_interpreter_id[message] = interpreter_id;
        if (broadcaster_awaits) {
            this.broadcast_message_should_wait[message] = broadcaster_awaits;
            this.broadcasting_interpreter_status_map[interpreter_id] = BroadcasterStatus.Pending;
            this.running_interpreter_was_blocked = broadcaster_awaits;
        }
    };
    RuntimeManagerImpl.prototype.broadcast_responder_bind_broadcaster = function (interpreter_id, message) {
        var broadcasting_interpreter_id = this.broadcast_message_to_broadcasting_interpreter_id[message];
        if (!this.broadcast_message_should_wait[message]) {
            return;
        }
        this.broadcast_responder_to_awaiting_interpreter_id[interpreter_id] = broadcasting_interpreter_id;
        this.broadcasting_interpreter_status_map[broadcasting_interpreter_id] = BroadcasterStatus.Waiting;
        if (!this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id]) {
            this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id] = 0;
        }
        this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id]++;
    };
    RuntimeManagerImpl.prototype.broadcast_responder_unbind_broadcaster = function (responder_interpreter_id) {
        var broadcasting_interpreter_id = this.broadcast_responder_to_awaiting_interpreter_id[responder_interpreter_id];
        delete (this.broadcast_responder_to_awaiting_interpreter_id[responder_interpreter_id]);
        if (this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id]) {
            this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id]--;
            if (this.broadcasting_interpreter_status_map[broadcasting_interpreter_id] && this.broadcast_interpreter_n_listeners[broadcasting_interpreter_id] < 1) {
                this.broadcasting_interpreter_status_map[broadcasting_interpreter_id] = BroadcasterStatus.Idle;
            }
        }
    };
    RuntimeManagerImpl.prototype.set_current_interpreter_not_blocked = function () {
        this.running_interpreter_was_blocked = false;
    };
    RuntimeManagerImpl.prototype.current_interpreter_must_yield = function (interpreter_id, group_id) {
        var needs_dispose = this.interpreters_needing_dispose[interpreter_id] != undefined &&
            this.interpreters_needing_dispose[interpreter_id];
        needs_dispose = needs_dispose || this.interpreters_needing_dispose_force[interpreter_id] === true;
        var out_of_run_group = this.running_group_changed && this.interpreter_out_of_running_group(group_id);
        return this.running_interpreter_was_blocked || needs_dispose || out_of_run_group;
    };
    RuntimeManagerImpl.prototype.add_task = function (t) {
        if (t.blocking) {
            this.running_interpreter_was_blocked = true;
        }
        return this.task_manager.add_task(this.generate_random_id('runtime_task'), t);
    };
    /**
     * Blocks the current JS Interpreter thread until lock is released
     *
     * @param {ID} ownder_id Id of the entity that owns this thread
     * @param {ID} rbid Id of the root block that this thread represents
     *
     * @return {TaskHandle} A handle to the lock, calling it's end function releases the lock.
     */
    RuntimeManagerImpl.prototype.get_thread_lock = function (entity_id, interpreter_id) {
        return this.add_task({
            entity_id: entity_id,
            interpreter_id: interpreter_id,
            blocking: true,
        });
    };
    RuntimeManagerImpl.prototype.thread_wait = function (entity_id, interpreter_id, lifetime) {
        this.add_task({
            entity_id: entity_id,
            interpreter_id: interpreter_id,
            lifetime: lifetime,
            blocking: true,
        });
    };
    RuntimeManagerImpl.prototype.procedure_load = function (source_entity_id, procedure_name, compiled_block) {
        this.script_store.procedure_load(source_entity_id, procedure_name, compiled_block);
    };
    RuntimeManagerImpl.prototype.get_procedure = function (p_name, do_clone) {
        if (do_clone === void 0) { do_clone = true; }
        var procedure_container = this.script_store.get_procedure(p_name);
        if (procedure_container == undefined) {
            return;
        }
        if (do_clone) {
            procedure_container.script = this.block_pool.clone(procedure_container.script);
            procedure_container.script.id = this.generate_random_id('procedure_id');
        }
        return procedure_container;
    };
    RuntimeManagerImpl.prototype.get_elapsed_frames = function () {
        return this.frames;
    };
    RuntimeManagerImpl.prototype.reset_timer = function () {
        this.timer_block_date = new Date().valueOf();
    };
    RuntimeManagerImpl.prototype.get_timer_elapsed_s = function () {
        return (new Date().valueOf() - this.timer_block_date) / 1000;
    };
    RuntimeManagerImpl.prototype.do_dispose_of_interpreter = function (interpreter_id, force_dispose) {
        if (force_dispose === void 0) { force_dispose = false; }
        if (this.interpreters[interpreter_id] == undefined) {
            this.u.log.warn("Attempted to dispose non-existing interpreter.");
            return;
        }
        var interpreter = this.interpreters[interpreter_id];
        var dr = this.runnings[interpreter_id];
        var target_entity_id = dr.target_entity_id, on_dispose = dr.on_dispose;
        var restart_when_finished = dr.static.restart_when_finished;
        if (!force_dispose && restart_when_finished) {
            interpreter.reset();
            this.runtime_data.dispose_interpreter_data(interpreter_id);
            this.task_manager.dispose_tasks_given({ interpreter_id: interpreter_id });
            return;
        }
        // dispose responder data
        var responder_rbid = this.instance_interpreter_id_to_responder_id[interpreter_id];
        if (responder_rbid != undefined) {
            // Remove Responder Instance RBID lookups
            var responder_instances = this.responder_id_to_instance_interpreter_id[responder_rbid];
            if (responder_instances.length == 1) {
                delete (this.responder_id_to_instance_interpreter_id[responder_rbid]);
            }
            else {
                _remove(responder_instances, function (r) { return r == interpreter_id; });
            }
            delete (this.instance_interpreter_id_to_responder_id[interpreter_id]);
        }
        interpreter.dispose(); // free to object pools
        delete (this.interpreters[interpreter_id]);
        delete (this.runnings[interpreter_id]);
        var entity = this.entities[target_entity_id];
        if (entity != undefined) {
            entity.remove_interpreter(interpreter_id);
        }
        this.runtime_data.dispose_interpreter_data(interpreter_id);
        this.task_manager.dispose_tasks_given({ interpreter_id: interpreter_id });
        if (on_dispose) {
            on_dispose();
        }
    };
    RuntimeManagerImpl.prototype.do_dispose_of_entity = function (entity_id) {
        if (this.entity_states[entity_id] !== undefined) {
            // Only set states for entities we keep track of. This avoids
            // growing this dictionary by one for every disposed clone.
            this.entity_states[entity_id] = basic_types_1.EntityState.Disposed;
        }
        this.runtime_data.entity_disposed(entity_id);
        this.user_variable.entity_disposed(entity_id);
        delete (this.entities[entity_id]);
        // TODO PERF Disposing tasks given entity_id might not be necessary,
        // considering the disposals in do_dispose_of_interpreter
        this.task_manager.dispose_tasks_given({ entity_id: entity_id });
    };
    RuntimeManagerImpl.prototype.do_destruct_entity = function (entity_id) {
        var _this = this;
        if (this.entity_states[entity_id] == basic_types_1.EntityState.Destructing) {
            return;
        }
        if (this.entity_states[entity_id] !== undefined) {
            // Only set states for entities we keep track of. This avoids
            // growing this dictionary by one for every disposed clone.
            this.entity_states[entity_id] = basic_types_1.EntityState.Destructing;
        }
        var entity = this.entities[entity_id];
        if (entity == undefined) {
            return;
        }
        // we dispose of all the entity's responders
        var matches_entity_to_dispose = function (r) { return r.target_entity_id == entity_id; };
        for (var r in this.action_responders) {
            _remove(this.action_responders[r], matches_entity_to_dispose);
        }
        for (var r in this.state_responders) {
            _remove(this.state_responders[r], matches_entity_to_dispose);
        }
        for (var r in this.dynamic_responders) {
            _remove(this.dynamic_responders[r], matches_entity_to_dispose);
        }
        var result = entity.destruct(function () {
            _this.entities_needing_dispose.push(entity_id);
        });
        if (rlt.is_fail(result)) {
            this.report_warning(this.ohno.warning.entity_has_no_known_typeclass({
                typeclass_id: undefined,
                entity_id: entity_id,
                caught_at: "RuntimeManager::do_destruct_entity",
            }));
        }
    };
    RuntimeManagerImpl.prototype.update_dispose = function () {
        // The order of disposals in this function is important:
        // * Disposing of interpreters may cause entities to be flagged for destruction
        // * Disposing of destructor interpreters may cause entities to be flagged for disposal
        // * Destruction of entities may flag them for disposal
        // * Disposal of interpreters may cause tasks to be flagged for disposal
        // * Disposal of entities may cause tasks to be flagged for disposal
        for (var rbid in this.interpreters_needing_dispose) {
            this.do_dispose_of_interpreter(rbid);
        }
        this.interpreters_needing_dispose = {};
        for (var rbid in this.interpreters_needing_dispose_force) {
            this.do_dispose_of_interpreter(rbid, true);
        }
        this.interpreters_needing_dispose_force = {};
        // Entity destruction
        var destruct_ids = this.get_sorted_ids(Object.keys(this.entities_needing_destruct));
        for (var i = 0; i < destruct_ids.length; i++) {
            this.do_destruct_entity(destruct_ids[i]);
        }
        this.entities_needing_destruct = {};
        // Entity disposal
        var dispose_ids = this.get_sorted_ids(this.entities_needing_dispose);
        for (var i = 0; i < dispose_ids.length; i++) {
            this.do_dispose_of_entity(dispose_ids[i]);
        }
        this.entities_needing_dispose = [];
        this.dispose_idle_broadcaster();
        // TODO add an on dispose event and let external things do their disposals here?
        this.task_manager.update_dispose();
    };
    RuntimeManagerImpl.prototype.get_interpreter_sorters = function (is_deterministic) {
        var responders_early = function (i) {
            // put these blocks in the end of the stack
            // as early as possible
            return i.metadata.type == 'self_listen' ||
                block_types_1.EVENT_BLOCKS[i.metadata.type] == block_types_1.EVENT_BLOCKS.mouse_on_emit;
        };
        var frame_order = function (i) { return i.metadata.priorities.frame_created; };
        var responder_order = function (i) { return i.metadata.priorities.responder_priority; };
        var creation_order = function (i) { return 0 - i.metadata.priorities.creation_counter; };
        if (is_deterministic) {
            return [
                responders_early,
                frame_order,
                responder_order,
                creation_order,
            ];
        }
        // TODO PERF Use a Binary Heap or Priority Queue for interpreter sorting
        // TODO PERF check if these sorters are really necessary for non-deterministic execution
        // (creation_order is necessary, because we need to guarantee to Box3 that when
        // Actions occur, we run the interpreters in the same order as the incoming Actions.)
        return [
            responders_early,
            frame_order,
            responder_order,
            creation_order,
        ];
    };
    RuntimeManagerImpl.prototype.step_code = function () {
        this.running_group_changed = false;
        this.entities_cloned_times = {};
        var to_step_stack = this.sorted_interpreters;
        if (to_step_stack.length === 0) {
            this.event_bus.runtime_manager.idle.send();
            return;
        }
        for (var i = to_step_stack.length - 1; i >= 0; i--) {
            var interpreter = to_step_stack[i];
            if (interpreter == undefined) {
                break;
            }
            var interpreter_id = interpreter.metadata.interpreter_id;
            if (this.interpreters_needing_dispose[interpreter_id] || this.interpreters_needing_dispose_force[interpreter_id]) {
                continue;
            }
            if (this.interpreter_out_of_running_group(interpreter.metadata.group_id)) {
                if (this.block_finish_out_of_run_group(interpreter.metadata.type)) {
                    this.dispose_block_group(interpreter_id);
                }
                continue;
            }
            // One step per interpreter per frame
            if (this.is_blocking(interpreter_id)) {
                continue;
            }
            this._step(interpreter_id, interpreter);
        }
    };
    RuntimeManagerImpl.prototype.is_blocking = function (interpreter_id) {
        return this.task_manager.is_blocking(interpreter_id) || this.broadcaster_is_blocking_on_await(interpreter_id);
    };
    RuntimeManagerImpl.prototype._step = function (interpreter_id, interpreter) {
        var step_result;
        try {
            step_result = interpreter.step();
        }
        catch (e) {
            var error_metadata = {
                root_block_id: interpreter_id,
            };
            if (e instanceof catastrophic_1.Catastrophe) {
                e.annotation = _defaults(e.annotation, error_metadata);
            }
            else {
                e = this.ohno.system.unknown_system_error(e, tslib_1.__assign({ caught_at: 'RuntimeManager::_step' }, error_metadata));
            }
            throw (e); // Will be caught and handled at ::update()
        }
        if (step_result == basic_types_1.StepResult.finished) {
            if (this.is_interpreter_blocking_broadcaster(interpreter_id)) {
                this.broadcast_responder_unbind_broadcaster(interpreter_id);
            }
            this.dispose_block_group(interpreter_id);
        }
        if (this.interpreter_out_of_running_group(interpreter.metadata.group_id)
            && this.block_finish_out_of_run_group(interpreter.metadata.type)) {
            this.dispose_block_group(interpreter_id);
        }
    };
    RuntimeManagerImpl.prototype.destruct_entity = function (entity_id) {
        var entity = this.entities[entity_id];
        if (entity == undefined) {
            return;
        }
        this.entities_needing_destruct[entity_id] = true;
        var interp_ids = entity.get_interpreter_ids();
        for (var i = 0; i < interp_ids.length; i++) {
            this.dispose_block_group(interp_ids[i], true);
        }
    };
    // TODO API rename s/block_group/interpreter/
    RuntimeManagerImpl.prototype.dispose_block_group = function (interpreter_id, force_dispose) {
        if (force_dispose === void 0) { force_dispose = false; }
        var interpreter = this.interpreters[interpreter_id];
        if (!interpreter) {
            this.u.log.warn("Can't dispose block group (rbid: " + interpreter_id + ") without associated interpreter");
            return;
        }
        if (!force_dispose) {
            this.interpreters_needing_dispose[interpreter_id] = true;
        }
        else {
            this.interpreters_needing_dispose_force[interpreter_id] = true;
        }
    };
    RuntimeManagerImpl.prototype.dispose_all = function () {
        for (var id in this.interpreters) {
            this.dispose_block_group(id);
        }
        this.entities_needing_add = [];
        this.interpreters_needing_spawn = [];
    };
    RuntimeManagerImpl.prototype.disable_interpreter_restarts_automatically = function () {
        this.disable_automatic_interpreter_restarts = true;
        this.event_bus.runtime_manager.disable_interpreters_restart.send();
    };
    // TODO API rename s/block_group/interpreter/
    RuntimeManagerImpl.prototype.dispose_other_block_groups_of_entity = function (entity_id, interpreter_to_keep_id) {
        var entity = this.entities[entity_id];
        if (entity == undefined) {
            return;
        }
        var ids = entity.get_interpreter_ids();
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            if (id === interpreter_to_keep_id) {
                continue;
            }
            this.dispose_block_group(id);
        }
    };
    // TODO API rename s/block_group/interpreter/
    RuntimeManagerImpl.prototype.dispose_block_groups_of_other_entities = function (entity_id) {
        for (var eid in this.entities) {
            if (eid === entity_id) {
                continue;
            }
            var entity = this.entities[eid];
            var interpreter_ids = entity.get_interpreter_ids();
            for (var i = 0; i < interpreter_ids.length; i++) {
                this.dispose_block_group(interpreter_ids[i]);
            }
        }
    };
    RuntimeManagerImpl.prototype.get_list_id = function (list, entity_id) {
        return this.user_variable.get_list_id(list, entity_id);
    };
    RuntimeManagerImpl.prototype.set_variable = function (var_id, val, interpreter_id, entity_id) {
        this.user_variable.set_variable(var_id, val, interpreter_id, entity_id);
    };
    RuntimeManagerImpl.prototype.get_variable = function (var_id, interpreter_id, entity_id) {
        return this.user_variable.get_variable(var_id, interpreter_id, entity_id);
    };
    RuntimeManagerImpl.prototype.lists_get = function (var_id, interpreter_id, entity_id) {
        return this.user_variable.lists_get(var_id, interpreter_id, entity_id);
    };
    RuntimeManagerImpl.prototype.get_global_variable = function (var_id) {
        return this.user_variable.get_global_variable(var_id);
    };
    RuntimeManagerImpl.prototype.is_entity_variable = function (var_id) {
        return this.user_variable.is_entity_variable(var_id);
    };
    RuntimeManagerImpl.prototype.get_entity_id_from_root_block_id = function (interpreter_id) {
        return this.runnings[interpreter_id].target_entity_id;
    };
    RuntimeManagerImpl.prototype.spawn_async_tell_interpreter = function (teller_identities, new_target_entity, script, // already cloned by caller
    group_id, is_warped) {
        this.do_spawn_tell_interpreter(teller_identities, new_target_entity, script, group_id, undefined, is_warped);
    };
    RuntimeManagerImpl.prototype.do_spawn_tell_interpreter = function (teller_identities, new_target_entity, script, // already cloned by caller
    group_id, on_finished, is_warped) {
        // We must record the entity_id and rbid of the teller, so that we
        // can use them when reporting debug mode errors.
        var parent_interpreter = this.interpreters[teller_identities.interpreter_id];
        // BlockInterpreter can not pass is_warped as parameter when spawn async tell, update is_warped here.
        // TODO clean this up since BlockInterpreter doesn't exist any more
        if (is_warped == undefined && parent_interpreter.is_inside_warp != undefined) {
            is_warped = parent_interpreter.is_inside_warp();
        }
        var typeclass_id = teller_identities.typeclass_id, source_map_entity = teller_identities.source_map_entity, source_map_rbid = teller_identities.source_map_rbid;
        var our_tell_source = {
            block_id: script.id,
            source_entity_id: source_map_entity,
            source_map_rbid: source_map_rbid,
            parent_stack: parent_interpreter.get_current_stack(),
        };
        var new_interpreter_id = this.generate_random_id('__tell_root_block__');
        this.tell_source_map[new_interpreter_id] = our_tell_source;
        var type = script.type;
        var restart_when_finished = this.registry.block_restart_when_finished(type);
        var finish_out_of_group = this.registry.block_finish_out_of_run_group(type);
        var sr = {
            // typeclass_id may be incorrect/misleading if tell block used in a called proc of other entity
            // luckily the typeclass_id is only used when disposing constructors and destructors, which are
            // not async tell interpreters
            typeclass_id: typeclass_id,
            source_map_entity: source_map_entity,
            source_map_rbid: source_map_rbid,
            script: script,
            group_id: group_id,
            restart_when_finished: restart_when_finished,
            finish_out_of_group: finish_out_of_group,
        };
        var r = construct_dynamic_runnable(sr, new_interpreter_id, new_target_entity, script.id, undefined, undefined, is_warped, on_finished);
        this.initialize_runnable(r);
    };
    RuntimeManagerImpl.prototype.get_error_stack = function (e) {
        if (e.category.unique_code === 'HEART.COMPILER.SYSTEM'
            || e.category.unique_code === 'HEART.COMPILER.USER'
            || e.annotation.interpreter_id === undefined
            || e.annotation.interpreter_stack == undefined) {
            // Opti compile error or error don't have interpreter data, just return the origin error as a fake frame.
            return [{
                    block_id: e.annotation.block_id,
                    source_entity_id: e.annotation.source_entity_id,
                    source_map_rbid: e.annotation.source_map_rbid,
                    interpreter_id: e.annotation.interpreter_id,
                    proc_id: e.annotation.proc_id,
                }];
        }
        // Get the whole stack from teller parent;
        var stack = _cloneDeep(e.annotation.interpreter_stack);
        var walk_interpreter = e.annotation.interpreter_id;
        while (true) {
            var tell_source = this.tell_source_map[walk_interpreter];
            if (tell_source === undefined) {
                break;
            }
            walk_interpreter = tell_source.source_map_rbid;
            var parent_stack = tell_source.parent_stack;
            // Because Tell Blocks are in-line (unlike procedures) an Async Tell Block call should not create a new stack frame,
            // similar to how a while-block does not have its own stack frame. The way they are implemented, however, gives each
            // Async Tell Block it's own stack, with it's own main frame. We merge all Async Tell Block stacks into their parent's stacks.
            // When we merge two stacks, we remove the second (top) stack's main (first) frame, since a proper stack only has one
            // main frame. The removed frame's data is still important, so it is put into the preceding frame (the last frame of the
            // first, bottom, stack) - which was pointing to an Async Block Call anyway.
            var main_frame = stack.shift();
            parent_stack[parent_stack.length - 1].block_id = main_frame.block_id;
            parent_stack[parent_stack.length - 1].interpreter_id = main_frame.interpreter_id;
            stack = parent_stack.concat(stack);
        }
        stack[stack.length - 1].block_id = e.annotation.block_id;
        return stack;
    };
    RuntimeManagerImpl.prototype.error_to_error_event = function (e) {
        var error_stack = this.get_error_stack(e)
            .map(this.get_frame_error_metadata);
        e.annotation.stack = error_stack;
        // Legacy
        e.annotation.root_block_id = e.annotation.source_map_rbid;
        e.annotation.entity_id = e.annotation.source_entity_id;
        return {
            error: e,
            error_stack: error_stack,
        };
    };
    RuntimeManagerImpl.prototype.report_error_and_stop = function (e, caught_at) {
        var wrapped_error;
        if (e instanceof catastrophic_1.Catastrophe) {
            wrapped_error = e;
        }
        else {
            wrapped_error = this.ohno.system.unknown_system_error(e, {
                caught_at: caught_at,
            });
        }
        var error = this.error_to_error_event(wrapped_error);
        this.event_bus.error.runtime.send(error);
        this.stop();
    };
    RuntimeManagerImpl.prototype.report_warning = function (e) {
        var warning = this.error_to_error_event(e);
        this.event_bus.warning.runtime.send(warning);
    };
    RuntimeManagerImpl.prototype.set_entity_known = function (entity_id) {
        this.entity_states[entity_id] = basic_types_1.EntityState.Known;
    };
    RuntimeManagerImpl.prototype.get_entity_state = function (entity_id) {
        var state = this.entity_states[entity_id];
        if (state == undefined) {
            return basic_types_1.EntityState.Unknown;
        }
        return state;
    };
    RuntimeManagerImpl.prototype.get_random_number = function () {
        return this.prng.random();
    };
    RuntimeManagerImpl.prototype.generate_random_id = function (prefix, entropy_size) {
        if (prefix === void 0) { prefix = ''; }
        if (entropy_size === void 0) { entropy_size = 9; }
        // Generated IDs must be deterministic, because they are often
        // used to sort interpreters and such, in order to make their
        // order of execution deterministic.
        var id_array = [prefix];
        for (var i = 0; i < entropy_size; i++) {
            id_array.push(Math.round(10 * this.prng.random()));
        }
        return id_array.join('');
    };
    RuntimeManagerImpl.prototype.get_compiled_block_by_interpreter_id = function (rbid) {
        var running = this.runnings[rbid];
        return running.static.script;
    };
    RuntimeManagerImpl.prototype.set_running_block = function (rbid, block_id) {
        this.runtime_data.set_running_block(rbid, block_id);
    };
    RuntimeManagerImpl.prototype.get_n_entities = function () {
        var n_entities = Object.keys(this.entities).length;
        return n_entities;
    };
    RuntimeManagerImpl.prototype.get_n_interpreters = function () {
        var n_interpreters = Object.keys(this.interpreters).length;
        return n_interpreters;
    };
    RuntimeManagerImpl.prototype.clock_now = function () {
        return this.clock.now();
    };
    RuntimeManagerImpl.prototype.wall_clock_now = function () {
        return this.clock.wall_clock_now();
    };
    RuntimeManagerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.ActionStateStore)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.OptiRunnerFactory)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.DebugRunnerFactory)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(5, inversify_1.inject(di_symbols_1.BINDING.Log)),
        tslib_1.__param(6, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(7, inversify_1.inject(di_symbols_1.BINDING.PRNGFactory)),
        tslib_1.__param(8, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(9, inversify_1.inject(di_symbols_1.BINDING.Clock)),
        tslib_1.__param(10, inversify_1.inject(di_symbols_1.BINDING.RuntimeData)),
        tslib_1.__param(11, inversify_1.inject(di_symbols_1.BINDING.TaskManager)),
        tslib_1.__param(12, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(13, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__param(14, inversify_1.inject(di_symbols_1.BINDING.ScriptStore)),
        tslib_1.__param(15, inversify_1.inject(di_symbols_1.BINDING.UserVariable)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
    ], RuntimeManagerImpl);
    return RuntimeManagerImpl;
}());
exports.RuntimeManagerImpl = RuntimeManagerImpl;
var Entity = /** @class */ (function () {
    function Entity(id, run_mgr, is_mirror, is_mirror_responding_others) {
        if (is_mirror === void 0) { is_mirror = false; }
        if (is_mirror_responding_others === void 0) { is_mirror_responding_others = undefined; }
        this.id = id;
        this.run_mgr = run_mgr;
        this.is_mirror = is_mirror;
        this.is_mirror_responding_others = is_mirror_responding_others;
        this.alread_initialized = false;
        this.interpreters = {};
    }
    Entity.prototype.set_constructor_params = function (constructor_params) {
        this.constructor_params = constructor_params;
    };
    Entity.prototype.get_verbose_id = function (r) {
        var eid = this.id;
        var tid = r.typeclass_id;
        var sid = r.source_map_rbid;
        var verbose_id = "__typeclass-" + tid + "__instance-" + eid + "__srbid-" + sid + "__";
        return this.run_mgr.generate_random_id(verbose_id);
    };
    Entity.prototype.get_runnable = function (sr, on_dispose, action_parameters) {
        return construct_dynamic_runnable(sr, this.get_verbose_id(sr), this.id, undefined, undefined, action_parameters, undefined, undefined, on_dispose);
    };
    Entity.prototype.get_responder = function (sr) {
        var r = {
            runnable: sr.runnable,
            action_spec: sr.action_spec,
            responder_spec: sr.responder_spec,
            event_id: sr.event_id,
            responder_id: this.get_verbose_id(sr.runnable),
            target_entity_id: this.id,
        };
        return r;
    };
    Entity.prototype.init = function () {
        var _this = this;
        if (this.typeclass == undefined) {
            return [];
        }
        var _a = this, run_mgr = _a.run_mgr, is_mirror = _a.is_mirror, is_mirror_responding_others = _a.is_mirror_responding_others;
        var _b = this.typeclass, construct = _b.construct, runnables = _b.runnables, responders = _b.responders, mirrors = _b.mirrors, mirror_runnables = _b.mirror_runnables;
        var init_runnable = function (sr) {
            var r = _this.get_runnable(sr);
            return run_mgr.initialize_runnable(r);
        };
        var init_responder = function (sr) {
            var r = _this.get_responder(sr);
            return run_mgr.initialize_responder(r);
        };
        var initialize_entity;
        if (is_mirror) {
            if (is_mirror_responding_others) {
                initialize_entity = function () {
                    var res1 = mirror_runnables.map(init_runnable);
                    var res2 = responders.map(init_responder);
                    return tslib_1.__spreadArrays(res1, res2);
                };
            }
            else {
                initialize_entity = function () { return mirrors.map(init_runnable); };
            }
        }
        else {
            initialize_entity = function () {
                var res1 = runnables.map(init_runnable);
                var res2 = responders.map(init_responder);
                return tslib_1.__spreadArrays(res1, res2);
            };
        }
        this.alread_initialized = true;
        if (construct == undefined) {
            return initialize_entity();
        }
        else {
            var r = this.get_runnable(construct, initialize_entity, this.constructor_params);
            var res = run_mgr.initialize_runnable(r);
            return [res];
        }
    };
    Entity.prototype.destruct = function (dispose_entity) {
        if (this.typeclass == undefined) {
            return rlt.fail('entity has no typeclass');
        }
        var run_mgr = this.run_mgr;
        var destruct = this.typeclass.destruct;
        if (destruct == undefined) {
            dispose_entity();
        }
        else {
            var r = this.get_runnable(destruct, dispose_entity);
            run_mgr.initialize_runnable(r);
        }
        return rlt.ok();
    };
    Entity.prototype.get_clone = function (new_id, is_mirror, is_mirror_responding_others) {
        var _a = this, typeclass = _a.typeclass, run_mgr = _a.run_mgr;
        var new_entity = new Entity(new_id, run_mgr, is_mirror, is_mirror_responding_others);
        new_entity.set_typeclass(typeclass);
        return new_entity;
    };
    Entity.prototype.add_interpreter = function (interpreter_id) { this.interpreters[interpreter_id] = true; };
    Entity.prototype.remove_interpreter = function (interpreter_id) { delete (this.interpreters[interpreter_id]); };
    Entity.prototype.get_interpreter_ids = function () { return Object.keys(this.interpreters); };
    Entity.prototype.set_typeclass = function (ts) { this.typeclass = ts; };
    return Entity;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEJBQWdDO0FBRWhDLDZDQUFnRDtBQUNoRCwyQ0FBOEM7QUFDOUMsdUNBQTBDO0FBQzFDLDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMsbUNBQXNDO0FBQ3RDLHVDQUEwQztBQUMxQywrQ0FBa0Q7QUFDbEQsMkNBQThDO0FBQzlDLG1DQUFzQztBQUN0Qyw2Q0FBMkM7QUFDM0MsdUNBQStDO0FBRS9DLDRDQUF3QztBQVF4Qyw4Q0Fhd0I7QUFDeEIsOENBS3dCO0FBQ3hCLG9DQUFzQztBQUN0QyxvREFJMkI7QUFJM0I7Ozs7Ozs7O0dBUUc7QUFDSCxJQUFLLGlCQUtKO0FBTEQsV0FBSyxpQkFBaUI7SUFDcEIsK0RBQVcsQ0FBQTtJQUNYLCtEQUFPLENBQUE7SUFDUCx5REFBSSxDQUFBO0lBQ0osK0RBQU8sQ0FBQTtBQUNULENBQUMsRUFMSSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBS3JCO0FBZ0JELFNBQVMsMEJBQTBCLENBQy9CLEVBQW1CLEVBQ25CLGNBQWlCLEVBQ2pCLGdCQUFtQixFQUNuQixnQkFBb0IsRUFDcEIsa0JBQThCLEVBQzlCLGlCQUFnQyxFQUNoQyxTQUF5QixFQUN6QixXQUFvQyxFQUNwQyxVQUFvQjtJQUpwQixtQ0FBQSxFQUFBLHVCQUE4QjtJQUM5QixrQ0FBQSxFQUFBLHNCQUFnQztJQUNoQywwQkFBQSxFQUFBLGlCQUF5QjtJQUkzQixJQUFNLEVBQUUsR0FBaUIsRUFBRSxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2YsRUFBRSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDbkMsRUFBRSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsSUFBSSxTQUFTLENB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