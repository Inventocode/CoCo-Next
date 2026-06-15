"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var r = require("resul-ts");
var catastrophic_1 = require("catastrophic");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var CompilerImpl = /** @class */ (function () {
    function CompilerImpl(ohno, is, xml_compiler, json_compiler) {
        this.ohno = ohno;
        this.is = is;
        this.xml_compiler = xml_compiler;
        this.json_compiler = json_compiler;
    }
    CompilerImpl.prototype.compile = function (entities, force_compile_block_ids, compile_all_blocks) {
        var _this = this;
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        try {
            return r.success(entities.map(function (e) { return _this.compile_entity(e, force_compile_block_ids, compile_all_blocks); }));
        }
        catch (e) {
            var err_msg = 'Heart could not compile one or more entities with DOM Compiler';
            if (e instanceof catastrophic_1.Catastrophe) {
                return r.error(err_msg, e);
            }
            return r.error(err_msg, this.ohno.compiler.system.unknown_compiler_error(e));
        }
    };
    CompilerImpl.prototype.compile_entity = function (entity, force_compile_block_ids, compile_all_blocks) {
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        if (this.is.uncompiled_XML_entity(entity)) {
            return this.xml_compiler.compile(entity, force_compile_block_ids, compile_all_blocks);
        }
        return this.json_compiler.compile(entity, force_compile_block_ids, compile_all_blocks);
    };
    CompilerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Predicates)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.XMLEntityCompiler)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.JSONEntityCompiler)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
    ], CompilerImpl);
    return CompilerImpl;
}());
exports.CompilerImpl = CompilerImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcGlsZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQThCO0FBQzlCLDZDQUEyQztBQUMzQyx1Q0FBK0M7QUFTL0MsNENBQXdDO0FBR3hDO0lBQ0Usc0JBQ2tDLElBQVMsRUFDSCxFQUFhLEVBQ04sWUFBMkIsRUFDMUIsYUFBNEI7UUFIMUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNILE9BQUUsR0FBRixFQUFFLENBQVc7UUFDTixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUN6RSxDQUFDO0lBRUcsOEJBQU8sR0FBZCxVQUNJLFFBQTJCLEVBQzNCLHVCQUF1QyxFQUN2QyxrQkFBMEI7UUFIOUIsaUJBa0JDO1FBZkcsbUNBQUEsRUFBQSwwQkFBMEI7UUFFNUIsSUFBSTtZQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FDdEQsQ0FBQyxFQUNELHVCQUF1QixFQUN2QixrQkFBa0IsQ0FDbkIsRUFKb0MsQ0FJcEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBTSxPQUFPLEdBQUcsZ0VBQWdFLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksMEJBQVcsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtZQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDO0lBRU8scUNBQWMsR0FBdEIsVUFDSSxNQUF1QixFQUN2Qix1QkFBdUMsRUFDdkMsa0JBQTBCO1FBQTFCLG1DQUFBLEVBQUEsMEJBQTBCO1FBRTVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUM5QixNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGtCQUFrQixDQUNuQixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUMvQixNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGtCQUFrQixDQUNuQixDQUFDO0lBQ0osQ0FBQztJQTdDVSxZQUFZO1FBRHhCLHNCQUFVLEVBQUU7UUFHTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pDLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBOztPQUw1QixZQUFZLENBOEN4QjtJQUFELG1CQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksb0NBQVkifQ==