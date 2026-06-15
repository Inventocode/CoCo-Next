"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _find = require("lodash/find");
var inversify_1 = require("inversify");
var H = require("./di_interfaces");
var block_provider_1 = require("./block_provider");
var di_symbols_1 = require("./di_symbols");
// TODO PERF Create lookup tables to avoid _.filter in ActionStateStore
// For getting a State, which should be used in update and maybe in get
// TODO MEMORY LEAK Limit amount of stored Action States that are set to their default value
var ActionStateStoreImpl = /** @class */ (function () {
    function ActionStateStoreImpl(registry, event_bus, u) {
        this.registry = registry;
        this.event_bus = event_bus;
        this.u = u;
        this.states = [];
    }
    ActionStateStoreImpl.prototype.clear = function () {
        this.states = [];
    };
    ActionStateStoreImpl.prototype.perform_automatic_state_transitions = function () {
        // Perform automatic state transitions
        for (var i = 0; i < this.states.length; i++) {
            var s = this.states[i];
            if (s.spec.statefulness.automatic_transitions === 'one_frame') {
                s.value = '';
                continue;
            }
            var transition = s.spec.statefulness.automatic_transitions[s.value];
            if (transition != undefined) {
                s.value = transition;
            }
        }
    };
    ActionStateStoreImpl.prototype.update = function (new_actions) {
        this.perform_automatic_state_transitions();
        for (var i = 0; i < new_actions.length; i++) {
            var a = new_actions[i];
            if (a.value == undefined) {
                continue;
            }
            var action_id = block_provider_1.namespaced_id(a.namespace, a.id);
            var spec = this.registry.get_action_type(action_id);
            if (spec == undefined) {
                this.event_bus.error.runtime.send({
                    error: this.u.ohno.system.action_received_without_spec({ action: a }),
                });
                continue;
            }
            if (spec.statefulness == undefined) {
                // We only care about Actions which encode some form of state
                continue;
            }
            // Check if a State matching these properties exists
            var state_params = {
                sub_type: a.sub_type,
                entity_id: a.entity_id,
            };
            var spec_params = {
                id: action_id,
            };
            var matching_state = _find(this.states, tslib_1.__assign(tslib_1.__assign({}, state_params), { spec: spec_params }));
            if (matching_state != undefined) {
                // Set new value if there was an existing State
                matching_state.value = a.value;
            }
            else {
                // If there was no existing state, create one
                this.states.push({
                    namespace: a.namespace,
                    entity_id: a.entity_id,
                    sub_type: a.sub_type,
                    value: a.value,
                    spec: spec,
                });
            }
        }
    };
    ActionStateStoreImpl.prototype.get_action_state_value = function (params) {
        var state_params = {
            namespace: params.action_namespace,
        };
        var spec_params = {
            id: params.action_id,
        };
        if (params.entity_id != undefined) {
            state_params.entity_id = params.entity_id;
        }
        if (params.sub_type != undefined) {
            state_params.sub_type = params.sub_type;
        }
        var matching = _find(this.states, tslib_1.__assign(tslib_1.__assign({}, state_params), { spec: spec_params }));
        if (matching != undefined) {
            return matching.value;
        }
        // Return the default value
        var id = block_provider_1.namespaced_id(params.action_namespace, params.action_id);
        var spec = this.registry.get_action_type(id);
        if (spec == undefined) {
            throw this.u.ohno.system.state_query_received_without_spec({
                query_params: params,
            });
        }
        if (spec.statefulness == undefined) {
            throw this.u.ohno.system.state_query_for_non_stateful_action({
                query_params: params,
            });
        }
        return spec.statefulness.default_value;
    };
    ActionStateStoreImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], ActionStateStoreImpl);
    return ActionStateStoreImpl;
}());
exports.ActionStateStoreImpl = ActionStateStoreImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX3N0YXRlX3N0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FjdGlvbl9zdGF0ZV9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsdUNBQStDO0FBRS9DLG1DQUFxQztBQUNyQyxtREFLMEI7QUFFMUIsMkNBQXVDO0FBZXZDLHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFFdkUsNEZBQTRGO0FBRzVGO0lBSUUsOEJBQ3NDLFFBQW1CLEVBQ25CLFNBQTJCLEVBQy9CLENBQVE7UUFGSixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQy9CLE1BQUMsR0FBRCxDQUFDLENBQU87UUFMbEMsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQU16QixDQUFDO0lBRUcsb0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxrRUFBbUMsR0FBM0M7UUFDRSxzQ0FBc0M7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsS0FBSyxXQUFXLEVBQUU7Z0JBQzdELENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNiLFNBQVM7YUFDVjtZQUNELElBQU0sVUFBVSxHQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUYsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUMzQixDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUVNLHFDQUFNLEdBQWIsVUFBYyxXQUFvQjtRQUNoQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUUzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFBRSxTQUFTO2FBQUU7WUFFdkMsSUFBTSxTQUFTLEdBQUcsOEJBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV0RCxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3RFLENBQUMsQ0FBQztnQkFDSCxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO2dCQUNsQyw2REFBNkQ7Z0JBQzdELFNBQVM7YUFDVjtZQUVELG9EQUFvRDtZQUNwRCxJQUFNLFlBQVksR0FBa0I7Z0JBQ2xDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO2FBQ3ZCLENBQUM7WUFDRixJQUFNLFdBQVcsR0FBK0I7Z0JBQzlDLEVBQUUsRUFBRSxTQUFTO2FBQ2QsQ0FBQztZQUNGLElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNDQUNyQyxZQUFZLEtBQ2YsSUFBSSxFQUFFLFdBQVcsR0FDbEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxjQUFjLElBQUksU0FBUyxFQUFFO2dCQUMvQiwrQ0FBK0M7Z0JBQy9DLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNoQztpQkFBTTtnQkFDTCw2Q0FBNkM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNmLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztvQkFDdEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO29CQUN0QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7b0JBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztvQkFDZCxJQUFJLEVBQXNCLElBQUk7aUJBQy9CLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRU0scURBQXNCLEdBQTdCLFVBQThCLE1BQTZCO1FBQ3pELElBQU0sWUFBWSxHQUFrQjtZQUNsQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtTQUNuQyxDQUFDO1FBQ0YsSUFBTSxXQUFXLEdBQStCO1lBQzlDLEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUztTQUNyQixDQUFDO1FBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUNqQyxZQUFZLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDM0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN6QztRQUVELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNDQUMvQixZQUFZLEtBQ2YsSUFBSSxFQUFFLFdBQVcsR0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ3pCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztTQUN2QjtRQUVELDJCQUEyQjtRQUMzQixJQUFNLEVBQUUsR0FBRyw4QkFBYSxDQUN0QixNQUFNLENBQUMsZ0JBQWdCLEVBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDckIsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7Z0JBQ3pELFlBQVksRUFBRSxNQUFNO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUNsQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDM0QsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7SUF0SFUsb0JBQW9CO1FBRGhDLHNCQUFVLEVBQUU7UUFNTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEIsbUJBQUEsa0JBQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTs7T0FQZCxvQkFBb0IsQ0F1SGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXZIRCxJQXVIQztBQXZIWSxvREFBb0IifQ==