"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nbus = require("nekobasu");
function create_event_bus() {
    var event_bus = nbus.event_bus.categorized({
        error: nbus.event_bus.create({
            runtime: nbus.builtin.event(),
            all: nbus.builtin.event(),
        }),
        warning: nbus.event_bus.create({
            runtime: nbus.builtin.event(),
            all: nbus.builtin.event(),
        }),
        runtime_manager: nbus.event_bus.create({
            after_update: nbus.builtin.signal(),
            before_update: nbus.builtin.signal(),
            restart: nbus.builtin.signal(),
            stop: nbus.builtin.signal(),
            start: nbus.builtin.signal(),
            idle: nbus.builtin.signal(),
            disable_interpreters_restart: nbus.builtin.signal(),
        }),
        runtime_data: nbus.event_bus.create({
            variable_update: custom.create_variable_neko(),
            list_update: custom.create_list_neko(),
            entity_variable_update: custom.create_entity_variable_neko(),
            entity_list_update: custom.create_entity_list_neko(),
            entity_dispose: nbus.builtin.event(),
            block_run_result: nbus.builtin.event(),
            block_running: nbus.builtin.event(),
            block_finished: nbus.builtin.event(),
        }),
        system: nbus.event_bus.create({
            config_updated: nbus.builtin.signal(),
        }),
        clones: nbus.event_bus.create({
            dispose_clone: nbus.builtin.event(),
        }),
    });
    bind_flush_events(event_bus);
    bind_collectors(event_bus);
    return event_bus;
}
exports.create_event_bus = create_event_bus;
function bind_collectors(eb) {
    eb.error.runtime.immediate.sub(function (e) {
        eb.error.all.send({ error: e.error });
    });
    eb.warning.runtime.immediate.sub(function (e) {
        eb.warning.all.send({ error: e.error });
    });
}
function bind_flush_events(eb) {
    eb.runtime_manager.after_update.immediate.sub(function () {
        eb.error._meta.flush();
        eb.warning._meta.flush();
        eb.runtime_manager._meta.flush();
        eb.runtime_data._meta.flush();
        eb.system._meta.flush();
        eb.clones._meta.flush();
    });
}
// PERF might want to set these as the standard buffering modes?
// this.buf_block_run_result.set_mode(BufMode.immediate);
// this.buf_entity_disposed.set_mode(BufMode.list_buffered);
// this.buf_error.set_mode(BufMode.immediate);
// this.buf_variable_update.set_mode(BufMode.custom_reducer);
function as_public_event_bus(eb) {
    var ev_pub = nbus.util.builtin_event_as_public;
    var s_pub = nbus.util.builtin_signal_as_public;
    return {
        error: {
            runtime: ev_pub(eb.error.runtime),
            all: ev_pub(eb.error.all),
        },
        warning: {
            runtime: ev_pub(eb.warning.runtime),
            all: ev_pub(eb.warning.all),
        },
        runtime_manager: {
            after_update: s_pub(eb.runtime_manager.after_update),
            before_update: s_pub(eb.runtime_manager.before_update),
            restart: s_pub(eb.runtime_manager.restart),
            stop: s_pub(eb.runtime_manager.stop),
            start: s_pub(eb.runtime_manager.start),
            idle: s_pub(eb.runtime_manager.idle),
            disable_interpreters_restart: s_pub(eb.runtime_manager.disable_interpreters_restart),
        },
        runtime_data: {
            variable_update: {
                merged: eb.runtime_data.variable_update.merged,
                last: eb.runtime_data.variable_update.last,
                list: eb.runtime_data.variable_update.list,
                immediate: eb.runtime_data.variable_update.immediate,
            },
            list_update: {
                merged: eb.runtime_data.list_update.merged,
                last: eb.runtime_data.list_update.last,
                list: eb.runtime_data.list_update.list,
                immediate: eb.runtime_data.list_update.immediate,
            },
            entity_variable_update: {
                merged: eb.runtime_data.entity_variable_update.merged,
                last: eb.runtime_data.entity_variable_update.last,
                list: eb.runtime_data.entity_variable_update.list,
                immediate: eb.runtime_data.entity_variable_update.immediate,
            },
            entity_list_update: {
                merged: eb.runtime_data.entity_list_update.merged,
                last: eb.runtime_data.entity_list_update.last,
                list: eb.runtime_data.entity_list_update.list,
                immediate: eb.runtime_data.entity_list_update.immediate,
            },
            entity_dispose: ev_pub(eb.runtime_data.entity_dispose),
            block_running: ev_pub(eb.runtime_data.block_running),
            block_finished: ev_pub(eb.runtime_data.block_finished),
            block_run_result: ev_pub(eb.runtime_data.block_run_result),
        },
    };
}
exports.as_public_event_bus = as_public_event_bus;
var custom = require("./custom");
exports.DO_NOT_USE__TYPE_INFERENCE_HACK__EB = create_event_bus();
exports.DO_NOT_USE__TYPE_INFERENCE_HACK__EB_PUB = as_public_event_bus(create_event_bus());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50L2V2ZW50X2J1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUdqQyxTQUFnQixnQkFBZ0I7SUFDOUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFFM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBa0I7WUFDN0MsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFrQjtTQUMxQyxDQUFDO1FBRUYsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBa0I7WUFDN0MsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFrQjtTQUMxQyxDQUFDO1FBRUYsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzNCLDRCQUE0QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1NBQ3BELENBQUM7UUFFRixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDbEMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QyxXQUFXLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQ3RDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQywyQkFBMkIsRUFBRTtZQUM1RCxrQkFBa0IsRUFBRSxNQUFNLENBQUMsdUJBQXVCLEVBQUU7WUFDcEQsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFvQjtZQUN0RCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBaUI7WUFDckQsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFNO1lBQ3ZDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBTTtTQUN6QyxDQUFDO1FBRUYsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtTQUN0QyxDQUFDO1FBRUYsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzVCLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBTTtTQUN4QyxDQUFDO0tBRUgsQ0FBQyxDQUFDO0lBQ0gsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUE5Q0QsNENBOENDO0FBRUQsU0FBUyxlQUFlLENBQUMsRUFBa0I7SUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBa0I7SUFDM0MsRUFBRSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxnRUFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELDREQUE0RDtBQUM1RCw4Q0FBOEM7QUFDOUMsNkRBQTZEO0FBRTdELFNBQWdCLG1CQUFtQixDQUFDLEVBQWtCO0lBQ3BELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDakQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUNqRCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQzVCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztZQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNwQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDcEMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUM7U0FDckY7UUFDRCxZQUFZLEVBQUU7WUFDWixlQUFlLEVBQUU7Z0JBQ2YsTUFBTSxFQUFxQyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxNQUFNO2dCQUNqRixJQUFJLEVBQWtDLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUk7Z0JBQzFFLElBQUksRUFBb0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSTtnQkFDNUUsU0FBUyxFQUFrQyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTO2FBQ3JGO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLE1BQU0sRUFBdUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTTtnQkFDL0UsSUFBSSxFQUE4QixFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJO2dCQUNsRSxJQUFJLEVBQWdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBQ3BFLFNBQVMsRUFBOEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUzthQUM3RTtZQUNELHNCQUFzQixFQUFFO2dCQUN0QixNQUFNLEVBQTJDLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsTUFBTTtnQkFDOUYsSUFBSSxFQUF3QyxFQUFFLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUk7Z0JBQ3ZGLElBQUksRUFBMEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJO2dCQUN6RixTQUFTLEVBQXdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsU0FBUzthQUNsRztZQUNELGtCQUFrQixFQUFFO2dCQUNsQixNQUFNLEVBQXVDLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTTtnQkFDdEYsSUFBSSxFQUFvQyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUk7Z0JBQy9FLElBQUksRUFBc0MsRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUNqRixTQUFTLEVBQW9DLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsU0FBUzthQUMxRjtZQUNELGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7WUFDdEQsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNwRCxjQUFjLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1lBQ3RELGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1NBQzNEO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFwREQsa0RBb0RDO0FBTUQsaUNBQW1DO0FBR3RCLFFBQUEsbUNBQW1DLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztBQUd6RCxRQUFBLHVDQUF1QyxHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyJ9