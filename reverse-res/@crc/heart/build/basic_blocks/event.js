"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var block_provider_1 = require("../block_provider");
function get_action_specs() {
    return [
        {
            id: 'broadcast',
            entity_specific: false,
            responder_blocks: [],
            statefulness: {
                default_value: '',
                automatic_transitions: 'one_frame',
                use_sub_type: true,
            },
        },
        {
            id: 'running_group_activated',
            entity_specific: false,
            responder_blocks: [{
                    id: 'on_running_group_activated',
                    type: block_provider_1.ResponderType.Action,
                    async: false,
                }],
        },
    ];
}
exports.get_action_specs = get_action_specs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzaWNfYmxvY2tzL2V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBRzJCO0FBRTNCLFNBQWdCLGdCQUFnQjtJQUM5QixPQUFPO1FBQ0w7WUFDRSxFQUFFLEVBQUUsV0FBVztZQUNmLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFO2dCQUNaLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixxQkFBcUIsRUFBZSxXQUFXO2dCQUMvQyxZQUFZLEVBQUUsSUFBSTthQUNuQjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUseUJBQXlCO1lBQzdCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGdCQUFnQixFQUFFLENBQUM7b0JBQ2pCLEVBQUUsRUFBRSw0QkFBNEI7b0JBQ2hDLElBQUksRUFBRSw4QkFBYSxDQUFDLE1BQU07b0JBQzFCLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7U0FDSDtLQUNGLENBQUM7QUFDSixDQUFDO0FBdEJELDRDQXNCQyJ9