"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var rlt = require("resul-ts");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var public_interfaces_1 = require("../public_interfaces");
var ScriptStoreImpl = /** @class */ (function () {
    function ScriptStoreImpl(registry, block_pool, block_is) {
        this.registry = registry;
        this.block_pool = block_pool;
        this.block_is = block_is;
        this.typeclasses = {};
        this.procedure_compiled_block_map = {};
        this.entity_id_to_compiled_blocks = {};
    }
    ScriptStoreImpl.prototype.clear = function () {
        this.typeclasses = {};
        for (var proc_id in this.procedure_compiled_block_map) {
            this.block_pool.release(this.procedure_compiled_block_map[proc_id].script);
        }
        this.procedure_compiled_block_map = {};
        for (var entity_id in this.entity_id_to_compiled_blocks) {
            var compiled_blocks = this.entity_id_to_compiled_blocks[entity_id];
            for (var rbid in compiled_blocks) {
                this.block_pool.release(compiled_blocks[rbid]);
            }
        }
        this.entity_id_to_compiled_blocks = {};
    };
    ScriptStoreImpl.prototype.load_compiled_entity_procedures = function (ce) {
        var _this = this;
        var proc_names = Object.keys(ce.procedures);
        proc_names.forEach(function (name) {
            var script = ce.procedures[name];
            var source_entity_id = ce.id;
            _this.procedure_load(source_entity_id, name, script);
        });
    };
    ScriptStoreImpl.prototype.procedure_load = function (source_entity_id, procedure_name, compiled_block) {
        this.procedure_compiled_block_map[procedure_name] = {
            name: procedure_name,
            script: compiled_block,
            source_entity_id: source_entity_id,
        };
    };
    ScriptStoreImpl.prototype.load_typeclass = function (ce) {
        var typeclass_id = ce.id;
        var construct;
        var destruct;
        var runnables = [];
        var mirrors = [];
        var mirror_runnables = [];
        var responders = [];
        // Count number of constructors and destructors
        var n_constructors = 0;
        var n_destructors = 0;
        var running_group_id = ce.running_group_id || {};
        this.entity_id_to_compiled_blocks[ce.id] = {};
        for (var source_rbid in ce.compiled_block_map) {
            // We must clone the AST, or we might modify data that the environment may
            // expect to be able to hold on to. It might also happen that the environment
            // mutates this data while we're running, which would also be bad.
            var script = this.block_pool.clone(ce.compiled_block_map[source_rbid]);
            this.entity_id_to_compiled_blocks[ce.id][source_rbid] = script;
            var group_id = running_group_id[source_rbid];
            var type = script.type;
            var restart_when_finished = this.registry.block_restart_when_finished(type);
            var finish_out_of_group = this.registry.block_finish_out_of_run_group(type);
            var runnable = {
                typeclass_id: typeclass_id,
                source_map_entity: ce.id,
                source_map_rbid: source_rbid,
                script: script,
                group_id: group_id,
                restart_when_finished: restart_when_finished,
                finish_out_of_group: finish_out_of_group,
            };
            var resp_info = this.registry.get_responder_info(script.type);
            if (resp_info == public_interfaces_1.RegLifetimeType.Constructor) {
                construct = runnable;
                n_constructors += 1;
                continue;
            }
            if (resp_info == public_interfaces_1.RegLifetimeType.Destructor) {
                destruct = runnable;
                n_destructors += 1;
                continue;
            }
            if (resp_info == undefined) {
                if (this.block_is.mirror(runnable.script)) {
                    mirrors.push(runnable);
                }
                else {
                    runnables.push(runnable);
                }
                if (!this.block_is.start_on_click(runnable.script)) {
                    mirror_runnables.push(runnable);
                }
                continue;
            }
            var action_spec = resp_info.action_spec, responder_spec = resp_info.responder_spec;
            var responder = {
                runnable: runnable,
                action_spec: action_spec,
                responder_spec: responder_spec,
                event_id: action_spec.id,
            };
            responders.push(responder);
        }
        // We only allow a single constructor or destructor to make sure that they
        // all run in a deterministic order.
        if (n_constructors > 1) {
            return rlt.fail('Typeclass had multiple constructors');
        }
        if (n_destructors > 1) {
            return rlt.fail('Typeclass had multiple destructors');
        }
        this.typeclasses[typeclass_id] = {
            id: typeclass_id,
            construct: construct,
            destruct: destruct,
            runnables: runnables,
            mirrors: mirrors,
            mirror_runnables: mirror_runnables,
            responders: responders,
        };
        return rlt.ok();
    };
    ScriptStoreImpl.prototype.get_procedure = function (name) {
        return this.procedure_compiled_block_map[name];
    };
    ScriptStoreImpl.prototype.get_typeclass = function (id) { return this.typeclasses[id]; };
    ScriptStoreImpl.prototype.get_loaded_typeclass_ids = function () { return Object.keys(this.typeclasses); };
    ScriptStoreImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.BlockPredicates)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], ScriptStoreImpl);
    return ScriptStoreImpl;
}());
exports.ScriptStoreImpl = ScriptStoreImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0X3N0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3J1bnRpbWUvc2NyaXB0X3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQUFnQztBQUNoQyx1Q0FBK0M7QUFFL0MsNENBQXdDO0FBRXhDLDBEQUU4QjtBQXlCOUI7SUFNRSx5QkFDc0MsUUFBaUIsRUFDaEIsVUFBb0IsRUFDZCxRQUF3QjtRQUYvQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQVA3RCxnQkFBVyxHQUFxQyxFQUFFLENBQUM7UUFDbkQsaUNBQTRCLEdBQTJDLEVBQUUsQ0FBQztRQUMxRSxpQ0FBNEIsR0FBdUIsRUFBRSxDQUFDO0lBTTNELENBQUM7SUFFRywrQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEVBQUUsQ0FBQztRQUN2QyxLQUFLLElBQU0sU0FBUyxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUN6RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckUsS0FBSyxJQUFNLElBQUksSUFBSSxlQUFlLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFDRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTSx5REFBK0IsR0FBdEMsVUFBdUMsRUFBaUI7UUFBeEQsaUJBV0M7UUFWQyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN0QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsY0FBYyxDQUNqQixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFDSSxnQkFBbUIsRUFDbkIsY0FBcUIsRUFDckIsY0FBdUM7UUFFekMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGNBQWMsQ0FBQyxHQUFHO1lBQ2xELElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLGdCQUFnQixrQkFBQTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLEVBQWlCO1FBQ3JDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFM0IsSUFBSSxTQUFrQyxDQUFDO1FBQ3ZDLElBQUksUUFBaUMsQ0FBQztRQUV0QyxJQUFNLFNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBQ3RDLElBQU0sT0FBTyxHQUFvQixFQUFFLENBQUM7UUFDcEMsSUFBTSxnQkFBZ0IsR0FBb0IsRUFBRSxDQUFDO1FBRTdDLElBQU0sVUFBVSxHQUFxQixFQUFFLENBQUM7UUFFeEMsK0NBQStDO1FBQy9DLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFFdEIsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlDLEtBQUssSUFBTSxXQUFXLElBQUksRUFBRSxDQUFDLGtCQUFrQixFQUFFO1lBQy9DLDBFQUEwRTtZQUMxRSw2RUFBNkU7WUFDN0Usa0VBQWtFO1lBQ2xFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBRS9ELElBQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRS9DLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlFLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5RSxJQUFNLFFBQVEsR0FBa0I7Z0JBQzlCLFlBQVksY0FBQTtnQkFDWixpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDeEIsZUFBZSxFQUFFLFdBQVc7Z0JBRTVCLE1BQU0sUUFBQTtnQkFDTixRQUFRLFVBQUE7Z0JBQ1IscUJBQXFCLHVCQUFBO2dCQUNyQixtQkFBbUIscUJBQUE7YUFDcEIsQ0FBQztZQUVGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWhFLElBQUksU0FBUyxJQUFJLG1DQUFlLENBQUMsV0FBVyxFQUFFO2dCQUM1QyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixjQUFjLElBQUksQ0FBQyxDQUFDO2dCQUNwQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLFNBQVMsSUFBSSxtQ0FBZSxDQUFDLFVBQVUsRUFBRTtnQkFDM0MsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEIsYUFBYSxJQUFJLENBQUMsQ0FBQztnQkFDbkIsU0FBUzthQUNWO1lBRUQsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDMUI7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxTQUFTO2FBQ1Y7WUFFTyxJQUFBLG1DQUFXLEVBQUUseUNBQWMsQ0FBZTtZQUNsRCxJQUFNLFNBQVMsR0FBbUI7Z0JBQ2hDLFFBQVEsVUFBQTtnQkFDUixXQUFXLGFBQUE7Z0JBQ1gsY0FBYyxnQkFBQTtnQkFDZCxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUU7YUFDekIsQ0FBQztZQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FFNUI7UUFFRCwwRUFBMEU7UUFDMUUsb0NBQW9DO1FBQ3BDLElBQUksY0FBYyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQUU7UUFDbkYsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FBRTtRQUVqRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHO1lBQy9CLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLFNBQVMsV0FBQTtZQUNULFFBQVEsVUFBQTtZQUNSLFNBQVMsV0FBQTtZQUNULE9BQU8sU0FBQTtZQUNQLGdCQUFnQixrQkFBQTtZQUNoQixVQUFVLFlBQUE7U0FDWCxDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVNLHVDQUFhLEdBQXBCLFVBQXFCLElBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLHVDQUFhLEdBQXBCLFVBQXFCLEVBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJELGtEQUF3QixHQUEvQixjQUFvQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQTdKaEUsZUFBZTtRQUQzQixzQkFBVSxFQUFFO1FBUU4sbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN6QixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7O09BVHpCLGVBQWUsQ0ErSjNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9KRCxJQStKQztBQS9KWSwwQ0FBZSJ9