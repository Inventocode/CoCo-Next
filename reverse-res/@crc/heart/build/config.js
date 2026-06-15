"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _defaultsDeep = require("lodash/defaultsDeep");
var inversify_1 = require("inversify");
var H = require("./di_interfaces");
var di_symbols_1 = require("./di_symbols");
function get_defaults() {
    return {
        block_pool_preallocation_size: 50,
        opti_frame_pool_preallocation_size: 10,
        opti_frame_pool_size_limit: 600,
        deterministic: undefined,
        legacy: {
            lists_get_value_allow_return_undefined: false,
        },
        max_procedure_calls_per_interpreter_step: 50000,
        max_warp_iterations_per_interpreter_step: 30000,
        warp_interpreter_millisecond_time_limit: 4,
        max_call_stack_size: 10000,
        opti_compiler: {
            pretty_print: false,
        },
        per_entity_clone_limit: 300,
        entity_max_clones_per_frame: 300,
        reports_all_entities: true,
        should_report_current_running_block: false,
        user_debug_mode: false,
        ignore_missing_domain_function: false,
    };
}
var ConfigImpl = /** @class */ (function () {
    function ConfigImpl(event_bus) {
        this.event_bus = event_bus;
    }
    ConfigImpl.prototype.get = function () {
        return this.config;
    };
    ConfigImpl.prototype.set = function (config) {
        this.config = _defaultsDeep({}, config, this.config, get_defaults());
        // If you ever cache a config value or data derived from config values,
        // make sure to listen for this event and update when it fires.
        this.event_bus.system.config_updated.send();
    };
    ConfigImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ConfigImpl);
    return ConfigImpl;
}());
exports.ConfigImpl = ConfigImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBc0Q7QUFDdEQsdUNBQStDO0FBRS9DLG1DQUFxQztBQUNyQywyQ0FBdUM7QUFpTXZDLFNBQVMsWUFBWTtJQUNuQixPQUFPO1FBQ0wsNkJBQTZCLEVBQUUsRUFBRTtRQUNqQyxrQ0FBa0MsRUFBRSxFQUFFO1FBQ3RDLDBCQUEwQixFQUFFLEdBQUc7UUFDL0IsYUFBYSxFQUFFLFNBQVM7UUFDeEIsTUFBTSxFQUFFO1lBQ04sc0NBQXNDLEVBQUUsS0FBSztTQUM5QztRQUNELHdDQUF3QyxFQUFFLEtBQUs7UUFDL0Msd0NBQXdDLEVBQUUsS0FBSztRQUMvQyx1Q0FBdUMsRUFBRSxDQUFDO1FBQzFDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsYUFBYSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxzQkFBc0IsRUFBRSxHQUFHO1FBQzNCLDJCQUEyQixFQUFFLEdBQUc7UUFDaEMsb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixtQ0FBbUMsRUFBRSxLQUFLO1FBQzFDLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLDhCQUE4QixFQUFFLEtBQUs7S0FDdEMsQ0FBQztBQUNKLENBQUM7QUFHRDtJQUdFLG9CQUNzQyxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUM5RCxDQUFDO0lBRUcsd0JBQUcsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLE1BQXlCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUN6QixFQUFFLEVBQ0YsTUFBTSxFQUNOLElBQUksQ0FBQyxNQUFNLEVBQ1gsWUFBWSxFQUFFLENBQ2YsQ0FBQztRQUVGLHVFQUF1RTtRQUN2RSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUF0QlUsVUFBVTtRQUR0QixzQkFBVSxFQUFFO1FBS04sbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBOztPQUpsQixVQUFVLENBdUJ0QjtJQUFELGlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksZ0NBQVUifQ==