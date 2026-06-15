"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _cloneDeep = require("lodash/cloneDeep");
var inversify_1 = require("inversify");
var di_symbols_1 = require("./di_symbols");
var block_provider_1 = require("./block_provider");
var CHINESE_LETTERS = '\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF';
var CHINESE_PUNCTUATION = [
    // Mostly from https://en.wikipedia.org/wiki/Chinese_punctuation
    '\uFF0C',
    '\uFF01',
    '\uFF1F',
    '\uFF1B',
    '\uFF1A',
    '\uFF08',
    '\uFF09',
    '\uFF3B',
    '\uFF3D',
    '\u3010',
    '\u3011',
    '\u3002',
    '\uFE12',
    '\u300E',
    '\u300F',
    '\u300C',
    '\u300D',
    '\uFE41',
    '\uFE42',
    '\u3001',
    '\u00B7',
    '\u300A',
    '\u300B',
    '\u3008',
    '\u3009',
    '\uFE4F',
    '\u22EF',
    '\u2026',
    '\u2010-\u2015',
    '\uFF5E',
    '\u007E',
    '\u3000',
    '\uFE4F',
].join('');
var ALPHANUMERICS = 'A-Za-z0-9';
var WHITESPACE = ' \t';
var WESTERN_PUNCTUATION = [
    ',',
    '?',
    '!',
];
var WHITELIST = [
    ALPHANUMERICS,
    WHITESPACE,
    WESTERN_PUNCTUATION,
    CHINESE_LETTERS,
    CHINESE_PUNCTUATION,
].join('');
var EVAL_SAFE_STRING_REGEX = new RegExp("^[" + WHITELIST + "]*$");
var UtilImpl = /** @class */ (function () {
    function UtilImpl(config, ohno, log, block) {
        this.config = config;
        this.ohno = ohno;
        this.log = log;
        this.block = block;
        this.misc = {
            ce_restore_cyclical_references: this.ce_restore_cyclical_references.bind(this),
            ce_without_cyclical_references: this.ce_without_cyclical_references.bind(this),
            is_safe_string: function (s) { return EVAL_SAFE_STRING_REGEX.test(s); },
            get_called_procedures: this.get_called_procedures.bind(this),
            namespaced_id: block_provider_1.namespaced_id,
        };
    }
    UtilImpl.prototype.ce_without_cyclical_references = function (ce) {
        var ce_no_ref = _cloneDeep(ce);
        for (var bjs_id in ce_no_ref.compiled_block_map) {
            var cb = ce_no_ref.compiled_block_map[bjs_id];
            this.remove_parent_references(cb);
        }
        for (var p_id in ce_no_ref.procedures) {
            var p_cb = ce_no_ref.procedures[p_id];
            this.remove_parent_references(p_cb);
        }
        return ce_no_ref;
    };
    UtilImpl.prototype.ce_restore_cyclical_references = function (ce) {
        for (var key in ce.compiled_block_map) {
            var b = ce.compiled_block_map[key];
            this.restore_parents(b);
        }
        for (var key in ce.procedures) {
            var b = ce.procedures[key];
            this.restore_parents(b);
        }
    };
    UtilImpl.prototype.remove_parent_references = function (b) {
        this.block.ast_for_each(b, function (blk) {
            blk.parent_block = undefined;
        });
    };
    UtilImpl.prototype.restore_parents = function (b) {
        this.block.ast_for_each(b, function (blk, p) {
            if (p != undefined) {
                blk.parent_block = p;
            }
        });
    };
    UtilImpl.prototype.get_called_procedures = function (ces) {
        var _this = this;
        // Load all procedures so that we can recurse into them later
        var procs = {};
        for (var i = 0; i < ces.length; i++) {
            var ce = ces[i];
            for (var proc_id in ce.procedures) {
                var proc = ce.procedures[proc_id];
                procs[proc_id] = proc;
            }
        }
        var for_each_called_proc_id = function (root_block, f) {
            _this.block.ast_for_each(root_block, function (b) {
                if (_this.block.is.procedures_callnoreturn(b)) {
                    f(b.procedure_name);
                }
                if (_this.block.is.procedures_callreturn(b)) {
                    f(b.procedure_name);
                }
            });
        };
        var first_level_procs = new Set();
        // Detect procedures directly called by non-procedure script
        for (var i = 0; i < ces.length; i++) {
            var ce = ces[i];
            for (var id in ce.compiled_block_map) {
                var cb = ce.compiled_block_map[id];
                for_each_called_proc_id(cb, function (proc_id) {
                    first_level_procs.add(proc_id);
                });
            }
        }
        var scanned_procs = new Set();
        var procs_to_scan = first_level_procs;
        var _loop_1 = function () {
            var next_procs_to_scan = new Set();
            procs_to_scan.forEach(function (proc_id) {
                scanned_procs.add(proc_id);
                var proc = procs[proc_id];
                if (proc == undefined) {
                    return;
                }
                for_each_called_proc_id(proc, function (pid) {
                    if (scanned_procs.has(pid)) {
                        return;
                    }
                    if (procs_to_scan.has(pid)) {
                        return;
                    }
                    next_procs_to_scan.add(pid);
                });
            });
            procs_to_scan = next_procs_to_scan;
        };
        while (procs_to_scan.size != 0) {
            _loop_1();
        }
        return Array.from(scanned_procs);
    };
    UtilImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Log)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.BlockUtil)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
    ], UtilImpl);
    return UtilImpl;
}());
exports.UtilImpl = UtilImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFnRDtBQUNoRCx1Q0FBK0M7QUFFL0MsMkNBQXVDO0FBV3ZDLG1EQUFpRDtBQUVqRCxJQUFNLGVBQWUsR0FBRyx5Q0FBeUMsQ0FBQztBQUNsRSxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLGdFQUFnRTtJQUNoRSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7Q0FDVCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNYLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUNsQyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBTSxtQkFBbUIsR0FBRztJQUMxQixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7Q0FDSixDQUFDO0FBQ0YsSUFBTSxTQUFTLEdBQUc7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtDQUNwQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVYLElBQU0sc0JBQXNCLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBSyxTQUFTLFFBQUssQ0FBQyxDQUFDO0FBRy9EO0lBVUUsa0JBQ21DLE1BQWEsRUFDZixJQUFTLEVBQ1YsR0FBVSxFQUNKLEtBQWU7UUFIbEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNmLFNBQUksR0FBSixJQUFJLENBQUs7UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQ0osVUFBSyxHQUFMLEtBQUssQ0FBVTtRQVo5QyxTQUFJLEdBQUc7WUFDWiw4QkFBOEIsRUFBRSxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5RSw4QkFBOEIsRUFBRSxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5RSxjQUFjLEVBQUUsVUFBQyxDQUFRLElBQUssT0FBQSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQTlCLENBQThCO1lBQzVELHFCQUFxQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVELGFBQWEsZ0NBQUE7U0FDZCxDQUFDO0lBT0MsQ0FBQztJQUVJLGlEQUE4QixHQUF0QyxVQUF1QyxFQUFpQjtRQUN0RCxJQUFNLFNBQVMsR0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsS0FBSyxJQUFNLE1BQU0sSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDakQsSUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUNELEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN2QyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxpREFBOEIsR0FBdEMsVUFBdUMsRUFBaUI7UUFDdEQsS0FBSyxJQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUU7WUFDdkMsSUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxLQUFLLElBQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLDJDQUF3QixHQUFoQyxVQUFpQyxDQUFlO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDN0IsR0FBRyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0NBQWUsR0FBdkIsVUFBd0IsQ0FBZTtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2xCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQXFCLEdBQTdCLFVBQThCLEdBQW9CO1FBQWxELGlCQXVEQztRQXJEQyw2REFBNkQ7UUFDN0QsSUFBTSxLQUFLLEdBQW9DLEVBQUUsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxJQUFNLE9BQU8sSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO2dCQUNuQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFNLHVCQUF1QixHQUFHLFVBQUMsVUFBd0IsRUFBRSxDQUF5QjtZQUNsRixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO2dCQUNwQyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM1QyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNyQjtnQkFDRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBRTVDLDREQUE0RDtRQUM1RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxJQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3RDLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLFVBQUMsT0FBTztvQkFDbEMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3hDLElBQUksYUFBYSxHQUFHLGlCQUFpQixDQUFDOztZQUdwQyxJQUFNLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7WUFDN0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQzVCLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFO29CQUFFLE9BQU87aUJBQUU7Z0JBQ2xDLHVCQUF1QixDQUFDLElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ2hDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFBRSxPQUFPO3FCQUFFO29CQUN2QyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQUUsT0FBTztxQkFBRTtvQkFDdkMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsYUFBYSxHQUFHLGtCQUFrQixDQUFDOztRQVpyQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQzs7U0FhN0I7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlHVSxRQUFRO1FBRHBCLHNCQUFVLEVBQUU7UUFZTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNuQixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7O09BZG5CLFFBQVEsQ0FnSHBCO0lBQUQsZUFBQztDQUFBLEFBaEhELElBZ0hDO0FBaEhZLDRCQUFRIn0=