"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
var OptiProgramCacheImpl = /** @class */ (function () {
    function OptiProgramCacheImpl(u, ohno, event_bus, opti_compiler, block_pool) {
        this.u = u;
        this.ohno = ohno;
        this.event_bus = event_bus;
        this.opti_compiler = opti_compiler;
        this.block_pool = block_pool;
        this.programs = {};
    }
    OptiProgramCacheImpl.prototype.get_program = function (cache_id, source_map_entity, source_map_rbid, interpreter_id, compiled_block) {
        var program_id = cache_id;
        var stored_program = this.programs[program_id];
        if (stored_program != undefined) {
            return stored_program;
        }
        var program = this.opti_compiler.compile(source_map_entity, source_map_rbid, interpreter_id, compiled_block);
        this.programs[program_id] = program;
        return program;
    };
    OptiProgramCacheImpl.prototype.clear = function () {
        this.programs = {};
    };
    OptiProgramCacheImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.OptiCompiler)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], OptiProgramCacheImpl);
    return OptiProgramCacheImpl;
}());
exports.OptiProgramCacheImpl = OptiProgramCacheImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbV9jYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpL3Byb2dyYW1fY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQStDO0FBRy9DLG9DQUFzQztBQUV0Qyw0Q0FBd0M7QUFLeEM7SUFJRSw4QkFDa0MsQ0FBUSxFQUNSLElBQVcsRUFDUCxTQUEyQixFQUN2QixhQUE0QixFQUMvQixVQUFzQjtRQUozQixNQUFDLEdBQUQsQ0FBQyxDQUFPO1FBQ1IsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNQLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQckQsYUFBUSxHQUFxQyxFQUFFLENBQUM7SUFRckQsQ0FBQztJQUVHLDBDQUFXLEdBQWxCLFVBQ0ksUUFBYSxFQUNiLGlCQUFzQixFQUN0QixlQUFvQixFQUNwQixjQUFtQixFQUNuQixjQUFnQztRQUVsQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLGNBQWMsSUFBSSxTQUFTLEVBQUU7WUFDL0IsT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDeEMsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixjQUFjLEVBQ2QsY0FBYyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNwQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sb0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFyQ1Usb0JBQW9CO1FBRGhDLHNCQUFVLEVBQUU7UUFNTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBOztPQVRuQixvQkFBb0IsQ0FzQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxvREFBb0IifQ==