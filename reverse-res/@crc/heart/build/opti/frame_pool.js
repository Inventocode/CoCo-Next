"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
// TODO PERF This object pool currently does NOT increase performance
// We need to figure out why. It is currently unused by way of
// commented out code in OptiRunner::empty_stack_frame and
// OptiFramePoolImpl::release
var OptiFramePoolImpl = /** @class */ (function () {
    function OptiFramePoolImpl(u, event_bus) {
        var _this = this;
        this.u = u;
        this.event_bus = event_bus;
        var configure = function () {
            var conf = u.config.get();
            var opti_conf = conf.opti_compiler;
            _this.should_pretty_print = opti_conf != undefined ? opti_conf.pretty_print : false;
            _this.pool_limit = conf.opti_frame_pool_size_limit;
        };
        configure();
        this.event_bus.system.config_updated.immediate.sub(configure);
        // preallocate
        var n_alloc = u.config.get().opti_frame_pool_preallocation_size;
        this.pool = new Array(n_alloc);
        for (var i = 0; i < n_alloc; i++) {
            this.pool[i] = this.create();
        }
    }
    OptiFramePoolImpl.prototype.create = function () {
        return {
            proc_id: '',
            proc_parameters: {},
            program_counter: [],
            dynamic_data: this.should_pretty_print ? {} : [],
            target_entity_id: '',
            source_map_entity: '',
            source_map_rbid: '',
            proc_call_bid: '',
            async_tell_asts: {},
            is_warped: false,
        };
    };
    OptiFramePoolImpl.prototype.reset = function (frame) {
        frame.proc_id = '';
        frame.proc_parameters = {};
        frame.program_counter = [];
        frame.dynamic_data = this.should_pretty_print ? {} : [],
            frame.target_entity_id = '';
        frame.source_map_entity = '';
        frame.source_map_rbid = '';
        frame.proc_call_bid = '';
        frame.async_tell_asts = {};
        frame.is_warped = false;
    };
    OptiFramePoolImpl.prototype.get = function () {
        var frame = this.pool.pop();
        return frame != undefined ? frame : this.create();
    };
    OptiFramePoolImpl.prototype.release = function (frame) {
        // TODO PERF Uncomment when the block pool has
        // been changed to actually improve perf
        // // OliverUv 2018-06-07
        // if (this.pool.length > this.pool_limit) { return; }
        // this.reset(frame);
        // this.pool.push(frame);
    };
    OptiFramePoolImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], OptiFramePoolImpl);
    return OptiFramePoolImpl;
}());
exports.OptiFramePoolImpl = OptiFramePoolImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVfcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpL2ZyYW1lX3Bvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQStDO0FBRS9DLG9DQUFzQztBQUN0Qyw0Q0FBd0M7QUFHeEMscUVBQXFFO0FBQ3JFLDhEQUE4RDtBQUM5RCwwREFBMEQ7QUFDMUQsNkJBQTZCO0FBRzdCO0lBTUUsMkJBQ2tDLENBQVEsRUFDSixTQUEyQjtRQUZqRSxpQkFtQkM7UUFsQmlDLE1BQUMsR0FBRCxDQUFDLENBQU87UUFDSixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUUvRCxJQUFNLFNBQVMsR0FBRztZQUNoQixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUNwRCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlELGNBQWM7UUFDZCxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFTyxrQ0FBTSxHQUFkO1FBQ0UsT0FBTztZQUNMLE9BQU8sRUFBRSxFQUFFO1lBQ1gsZUFBZSxFQUFFLEVBQUU7WUFDbkIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hELGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixlQUFlLEVBQUUsRUFBRTtZQUNuQixhQUFhLEVBQUUsRUFBRTtZQUNqQixlQUFlLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVPLGlDQUFLLEdBQWIsVUFBYyxLQUFzQjtRQUNsQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZELEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sK0JBQUcsR0FBVjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsT0FBTyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLEtBQXNCO1FBQ25DLDhDQUE4QztRQUM5Qyx3Q0FBd0M7UUFDeEMseUJBQXlCO1FBRXpCLHNEQUFzRDtRQUN0RCxxQkFBcUI7UUFDckIseUJBQXlCO0lBQzNCLENBQUM7SUFwRVUsaUJBQWlCO1FBRDdCLHNCQUFVLEVBQUU7UUFRTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBOztPQVJsQixpQkFBaUIsQ0FzRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSw4Q0FBaUIifQ==