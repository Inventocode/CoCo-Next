"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
var block_linter_1 = require("./block_linter");
var domain_functions_1 = require("./domain_functions");
var event_1 = require("./event");
var BasicBlockProviderFactoryImpl = /** @class */ (function () {
    function BasicBlockProviderFactoryImpl(registry, config, day_names, event_bus, ohno, runtime_data, runtime_manager) {
        this.registry = registry;
        this.config = config;
        this.day_names = day_names;
        this.event_bus = event_bus;
        this.ohno = ohno;
        this.runtime_data = runtime_data;
        this.runtime_manager = runtime_manager;
        this.namespace = '';
    }
    BasicBlockProviderFactoryImpl.prototype.get_runtime_provider = function () {
        var _this = this;
        return {
            // Namespace is empty so that we play nicely with Blocky's default block ids
            namespace: function () { return _this.namespace; },
            domain_functions: domain_functions_1.get_domain_functions(this.runtime_manager, this.runtime_data, this.event_bus, this.ohno, this.day_names, this.config),
            action_types: event_1.get_action_specs,
            block_metadata: {
                restart_when_finished: ['self_listen', 'when'],
                finish_out_of_run_group: ['on_running_group_activated'],
            },
        };
    };
    BasicBlockProviderFactoryImpl.prototype.load_domain_functions = function () {
        var p = this.get_runtime_provider();
        var registry = this.registry;
        var namespace = p.namespace();
        var dom_funs = p.domain_functions();
        for (var fun_name in dom_funs) {
            var fun = dom_funs[fun_name];
            registry.register({
                namespace: namespace,
                id: fun_name,
                domain_function: fun,
            });
        }
        var action_types = p.action_types();
        for (var i = 0; i < action_types.length; i++) {
            var action_spec = action_types[i];
            var action_type = {
                namespace: namespace,
                id: action_spec.id,
            };
            if (action_spec.statefulness != undefined) {
                action_type.statefulness = action_spec.statefulness;
            }
            registry.register_action_type(action_type);
            for (var j = 0; j < action_spec.responder_blocks.length; j++) {
                var responder_spec = action_spec.responder_blocks[j];
                registry.register({
                    namespace: namespace,
                    id: responder_spec.id,
                    respond: {
                        to_action: {
                            namespace: namespace,
                            id: action_spec.id,
                        },
                        type: responder_spec.type,
                        async: responder_spec.async,
                        priority: responder_spec.priority,
                        entity_specific: action_spec.entity_specific,
                        trigger_function: responder_spec.trigger_function,
                        filter_arg_names: responder_spec.filter_arg_names,
                    },
                });
            }
        }
        if (p.block_metadata === undefined) {
            return;
        }
        if (p.block_metadata.restart_when_finished != undefined) {
            for (var i = 0; i < p.block_metadata.restart_when_finished.length; i++) {
                var block_name = p.block_metadata.restart_when_finished[i];
                registry.register({
                    namespace: namespace,
                    id: block_name,
                    metadata: {
                        restart_when_finished: true,
                    },
                });
            }
        }
        if (p.block_metadata.finish_out_of_run_group != undefined) {
            for (var i = 0; i < p.block_metadata.finish_out_of_run_group.length; i++) {
                var block_name = p.block_metadata.finish_out_of_run_group[i];
                registry.register({
                    namespace: namespace,
                    id: block_name,
                    metadata: {
                        finish_out_of_run_group: true,
                    },
                });
            }
        }
    };
    BasicBlockProviderFactoryImpl.prototype.load_linters = function () {
        var registry = this.registry;
        var linters = block_linter_1.get_block_linters(this.ohno);
        for (var i = 0; i < linters.length; i++) {
            var l = linters[i];
            registry.register_linter(l);
        }
    };
    BasicBlockProviderFactoryImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.DayNames)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(5, inversify_1.inject(di_symbols_1.BINDING.RuntimeData)),
        tslib_1.__param(6, inversify_1.inject(di_symbols_1.BINDING.RuntimeManagerFacade)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
    ], BasicBlockProviderFactoryImpl);
    return BasicBlockProviderFactoryImpl;
}());
exports.BasicBlockProviderFactoryImpl = BasicBlockProviderFactoryImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzaWNfYmxvY2tzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUErQztBQUcvQyxvQ0FBc0M7QUFDdEMsNENBQXdDO0FBRXhDLCtDQUFtRDtBQUNuRCx1REFBMEQ7QUFDMUQsaUNBQTJDO0FBRzNDO0lBQ0UsdUNBQ3NDLFFBQW1CLEVBQ3JCLE1BQWUsRUFDYixTQUFrQixFQUNsQixTQUEyQixFQUMvQixJQUFXLEVBQ0osWUFBMEIsRUFDakIsZUFBZ0M7UUFONUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMvQixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ0osaUJBQVksR0FBWixZQUFZLENBQWM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRzFFLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFGcEIsQ0FBQztJQUlJLDREQUFvQixHQUE1QjtRQUFBLGlCQW1CQztRQWpCQyxPQUFPO1lBQ0wsNEVBQTRFO1lBQzVFLFNBQVMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBZCxDQUFjO1lBQy9CLGdCQUFnQixFQUFFLHVDQUFvQixDQUNwQyxJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxDQUNaO1lBQ0QsWUFBWSxFQUFFLHdCQUFnQjtZQUM5QixjQUFjLEVBQUU7Z0JBQ2QscUJBQXFCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUM5Qyx1QkFBdUIsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQ3hEO1NBQ0YsQ0FBQztJ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