"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nbus = require("nekobasu");
function create_variable_event_buffer() {
    return nbus.event_buffer.create({
        reducer: function (acc, next) {
            acc[next.var_id] = next.new_value;
            return acc;
        },
        start_value: {},
    });
}
function create_list_event_buffer() {
    return nbus.event_buffer.create({
        reducer: function (acc, next) {
            acc[next.list_id] = next.new_value;
            return acc;
        },
        start_value: {},
    });
}
function create_entity_variable_event_buffer() {
    return nbus.event_buffer.create({
        reducer: function (acc, next) {
            if (acc[next.entity_id] === undefined) {
                acc[next.entity_id] = {};
            }
            acc[next.entity_id][next.var_id] = next.new_value;
            return acc;
        },
        start_value: {},
    });
}
function create_entity_list_event_buffer() {
    return nbus.event_buffer.create({
        reducer: function (acc, next) {
            if (acc[next.entity_id] === undefined) {
                acc[next.entity_id] = {};
            }
            acc[next.entity_id][next.list_id] = next.new_value;
            return acc;
        },
        start_value: {},
    });
}
function create_variable_neko() {
    var buf_dict = nbus.util.merge_event_buffers(nbus.builtin.event_ebs(), { merged: create_variable_event_buffer() });
    return nbus.neko.create_for_event(buf_dict);
}
exports.create_variable_neko = create_variable_neko;
function create_list_neko() {
    var buf_dict = nbus.util.merge_event_buffers(nbus.builtin.event_ebs(), { merged: create_list_event_buffer() });
    return nbus.neko.create_for_event(buf_dict);
}
exports.create_list_neko = create_list_neko;
function create_entity_variable_neko() {
    var buf_dict = nbus.util.merge_event_buffers(nbus.builtin.event_ebs(), { merged: create_entity_variable_event_buffer() });
    return nbus.neko.create_for_event(buf_dict);
}
exports.create_entity_variable_neko = create_entity_variable_neko;
function create_entity_list_neko() {
    var buf_dict = nbus.util.merge_event_buffers(nbus.builtin.event_ebs(), { merged: create_entity_list_event_buffer() });
    return nbus.neko.create_for_event(buf_dict);
}
exports.create_entity_list_neko = create_entity_list_neko;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50L2N1c3RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUlqQyxTQUFTLDRCQUE0QjtJQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUF3QztRQUNyRSxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQ0QsV0FBVyxFQUFFLEVBQUU7S0FDaEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsd0JBQXdCO0lBQy9CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQXNDO1FBQ25FLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQyxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxXQUFXLEVBQUUsRUFBRTtLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxtQ0FBbUM7SUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBb0Q7UUFDakYsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDMUI7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNELFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLCtCQUErQjtJQUN0QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUE0QztRQUN6RSxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUNqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMxQjtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQ0QsV0FBVyxFQUFFLEVBQUU7S0FDaEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQWdCLG9CQUFvQjtJQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBb0IsRUFDMUMsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsRUFBRSxDQUMzQyxDQUFDO0lBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFvQyxRQUFRLENBQUMsQ0FBQztBQUNqRixDQUFDO0FBUEQsb0RBT0M7QUFFRCxTQUFnQixnQkFBZ0I7SUFDOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQWdCLEVBQ3RDLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixFQUFFLEVBQUUsQ0FDdkMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBZ0MsUUFBUSxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQVBELDRDQU9DO0FBRUQsU0FBZ0IsMkJBQTJCO0lBQ3pDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUEwQixFQUNoRCxFQUFFLE1BQU0sRUFBRSxtQ0FBbUMsRUFBRSxFQUFFLENBQ2xELENBQUM7SUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQTBDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFQRCxrRUFPQztBQUVELFNBQWdCLHVCQUF1QjtJQUNyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBc0IsRUFDNUMsRUFBRSxNQUFNLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxDQUM5QyxDQUFDO0lBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFzQyxRQUFRLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBUEQsMERBT0MifQ==