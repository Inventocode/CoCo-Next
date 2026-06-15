"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
var runner_1 = require("./runner");
var DebugRunnerFactory = /** @class */ (function () {
    function DebugRunnerFactory(u, ohno, event_bus, registry, block_pool) {
        var _this = this;
        this.u = u;
        this.ohno = ohno;
        this.event_bus = event_bus;
        this.registry = registry;
        this.block_pool = block_pool;
        var configure = function () {
            var conf = u.config.get();
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
    DebugRunnerFactory.prototype.create = function (run_mgr, identities, priorities, compile_cache_id, compiled_block, group_id, is_warped, action_parameters, on_finished) {
        return new runner_1.DebugRunner(this.u, this.ohno, this.event_bus, run_mgr, this.block_pool, this.registry.get_domain_functions(), compiled_block, priorities, identities, group_id, this.should_report_current_running_block, this.max_procedure_calls_per_interpreter_step, this.max_warp_iterations_per_interpreter_step, this.warp_interpreter_millisecond_time_limit, this.max_call_stack_size, this.tell_should_ensure_entity_exists, !!this.u.config.get().deterministic, is_warped, action_parameters, on_finished);
    };
    DebugRunnerFactory.prototype.clear = function () { };
    DebugRunnerFactory = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], DebugRunnerFactory);
    return DebugRunnerFactory;
}());
exports.DebugRunnerFactory = DebugRunnerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWJ1Zy9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUErQztBQUcvQyxvQ0FBc0M7QUFFdEMsNENBQXdDO0FBQ3hDLG1DQUF1QztBQUd2QztJQVNFLDRCQUNrQyxDQUFRLEVBQ1IsSUFBVyxFQUNQLFNBQTJCLEVBQzNCLFFBQW1CLEVBQ2xCLFVBQXNCO1FBTDdELGlCQWtCQztRQWpCaUMsTUFBQyxHQUFELENBQUMsQ0FBTztRQUNSLFNBQUksR0FBSixJQUFJLENBQU87UUFDUCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFM0QsSUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ2xFLEtBQUksQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUM7WUFDcEYsS0FBSSxDQUFDLHdDQUF3QyxHQUFHLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQztZQUM5RixLQUFJLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO1lBQzlGLEtBQUksQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsdUNBQXVDLENBQUM7WUFDNUYsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQ0ksT0FBd0IsRUFDeEIsVUFBdUIsRUFDdkIsVUFBa0MsRUFDbEMsZ0JBQXFCLEVBQ3JCLGNBQWdDLEVBQ2hDLFFBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLGlCQUE4QixFQUM5QixXQUFvQztRQUV0QyxPQUFPLElBQUksb0JBQVcsQ0FDcEIsSUFBSSxDQUFDLENBQUMsRUFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxTQUFTLEVBQ2QsT0FBTyxFQUNQLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUVwQyxjQUFjLEVBRWQsVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBRVIsSUFBSSxDQUFDLG1DQUFtQyxFQUN4QyxJQUFJLENBQUMsd0NBQXdDLEVBQzdDLElBQUksQ0FBQyx3Q0FBd0MsRUFDN0MsSUFBSSxDQUFDLHVDQUF1QyxFQUM1QyxJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxnQ0FBZ0MsRUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFFbkMsU0FBUyxFQUNULGlCQUFpQixFQUNqQixXQUFXLENBQ1osQ0FBQztJQUNKLENBQUM7SUFFTSxrQ0FBSyxHQUFaLGNBQXdCLENBQUM7SUFwRWQsa0JBQWtCO1FBRDlCLHNCQUFVLEVBQUU7UUFXTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBOztPQWRuQixrQkFBa0IsQ0FxRTlCO0lBQUQseUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSxnREFBa0IifQ==