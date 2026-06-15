"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
var runner_1 = require("./runner");
var OptiRunnerFactory = /** @class */ (function () {
    function OptiRunnerFactory(u, ohno, event_bus, registry, program_cache, block_pool, frame_pool) {
        var _this = this;
        this.u = u;
        this.ohno = ohno;
        this.event_bus = event_bus;
        this.registry = registry;
        this.program_cache = program_cache;
        this.block_pool = block_pool;
        this.frame_pool = frame_pool;
        var configure = function () {
            var conf = u.config.get();
            var opti_conf = conf.opti_compiler;
            _this.should_pretty_print = opti_conf != undefined ? opti_conf.pretty_print : false;
            _this.tell_should_ensure_entity_exists = conf.reports_all_entities;
            _this.should_report_current_running_block = conf.should_report_current_running_block;
            _this.max_procedure_calls_per_interpreter_step = conf.max_procedure_calls_per_interpreter_step;
            _this.max_warp_iterations_per_interpreter_step = conf.max_warp_iterations_per_interpreter_step;
            _this.warp_interpreter_millisecond_time_limit = conf.warp_interpreter_millisecond_time_limit;
            _this.max_call_stack_size = conf.max_call_stack_size;
        };
        configure();
        this.event_bus.system.config_updated.immediate.sub(configure);
    }
    OptiRunnerFactory.prototype.create = function (run_mgr, identities, priorities, compile_cache_id, compiled_block, group_id, is_warped, action_parameters, on_finished) {
        // TODO PERF Use an Object Pool for OptiRunners
        return new runner_1.OptiRunner(this.u, this.ohno, this.should_pretty_print, this.tell_should_ensure_entity_exists, this.should_report_current_running_block, this.max_procedure_calls_per_interpreter_step, this.max_warp_iterations_per_interpreter_step, this.warp_interpreter_millisecond_time_limit, this.max_call_stack_size, run_mgr, this.block_pool, this.frame_pool, this.program_cache, this.registry.get_domain_function_list(), this.registry.get_domain_function_types(), identities, priorities, this.program_cache.get_program(compile_cache_id, identities.source_map_entity, identities.source_map_rbid, identities.interpreter_id, compiled_block), group_id, compiled_block, is_warped, action_parameters, on_finished);
    };
    OptiRunnerFactory.prototype.clear = function () {
        this.program_cache.clear();
    };
    OptiRunnerFactory = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.OptiProgramCache)),
        tslib_1.__param(5, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(6, inversify_1.inject(di_symbols_1.BINDING.OptiFramePool)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
    ], OptiRunnerFactory);
    return OptiRunnerFactory;
}());
exports.OptiRunnerFactory = OptiRunnerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQStDO0FBRy9DLG9DQUFzQztBQUV0Qyw0Q0FBd0M7QUFDeEMsbUNBQXNDO0FBR3RDO0lBVUUsMkJBQ2tDLENBQVEsRUFDUixJQUFXLEVBQ1AsU0FBMkIsRUFDM0IsUUFBbUIsRUFDWCxhQUFnQyxFQUN2QyxVQUFzQixFQUNsQixVQUEwQjtRQVByRSxpQkFzQkM7UUFyQmlDLE1BQUMsR0FBRCxDQUFDLENBQU87UUFDUixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNYLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUN2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBRW5FLElBQU0sU0FBUyxHQUFHO1lBQ2hCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNyQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25GLEtBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDbEUsS0FBSSxDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztZQUNwRixLQUFJLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO1lBQzlGLEtBQUksQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsd0NBQXdDLENBQUM7WUFDOUYsS0FBSSxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztZQUM1RixLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFDSSxPQUF3QixFQUN4QixVQUF1QixFQUN2QixVQUFrQyxFQUNsQyxnQkFBcUIsRUFDckIsY0FBZ0MsRUFDaEMsUUFBeUIsRUFDekIsU0FBaUIsRUFDakIsaUJBQThCLEVBQzlCLFdBQW9DO1FBRXRDLCtDQUErQztRQUUvQyxPQUFPLElBQUksbUJBQVUsQ0FDbkIsSUFBSSxDQUFDLENBQUMsRUFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLGdDQUFnQyxFQUNyQyxJQUFJLENBQUMsbUNBQW1DLEVBQ3hDLElBQUksQ0FBQyx3Q0FBd0MsRUFDN0MsSUFBSSxDQUFDLHdDQUF3QyxFQUM3QyxJQUFJLENBQUMsdUNBQXVDLEVBQzVDLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsT0FBTyxFQUNQLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLEVBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsRUFDekMsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDNUIsZ0JBQWdCLEVBQ2hCLFVBQVUsQ0FBQyxpQkFBaUIsRUFDNUIsVUFBVSxDQUFDLGVBQWUsRUFDMUIsVUFBVSxDQUFDLGNBQWMsRUFDekIsY0FBYyxDQUNmLEVBRUQsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFdBQVcsQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUVNLGlDQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFuRlUsaUJBQWlCO1FBRDdCLHNCQUFVLEVBQUU7UUFZTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEMsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3pCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTs7T0FqQnZCLGlCQUFpQixDQW9GN0I7SUFBRCx3QkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLDhDQUFpQiJ9