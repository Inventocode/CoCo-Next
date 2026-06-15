"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _includes = require("lodash/includes");
// TODO divide ResponderSpec into tagged union of responder types
var ResponderType;
(function (ResponderType) {
    ResponderType["Action"] = "action";
    ResponderType["State"] = "state";
    ResponderType["Dynamic"] = "dynamic";
})(ResponderType = exports.ResponderType || (exports.ResponderType = {}));
// TODO Remove references to `this.` from blocks/basic/functions.ts & etc
// and give basic and stage2d namespaces so we can remove the empty namespace
// special case
// This is used by ScriptCraft mod to figure out which events to
// subscribe to. May be possible to remove (and just sub to all
// events).
function parse_namespaced_id(ns_id) {
    if (!_includes(ns_id, '__')) {
        return {
            namespace: '',
            function_id: ns_id,
        };
    }
    var ns_length = ns_id.indexOf('__');
    return {
        namespace: ns_id.substring(0, ns_length),
        function_id: ns_id.substring(ns_length + 2),
    };
}
exports.parse_namespaced_id = parse_namespaced_id;
function namespaced_id(namespace, function_name) {
    if (namespace == '') {
        return function_name;
    }
    return namespace + "__" + function_name;
}
exports.namespaced_id = namespaced_id;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmxvY2tfcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUErTzlDLGlFQUFpRTtBQUVqRSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsa0NBQWlCLENBQUE7SUFDakIsZ0NBQWUsQ0FBQTtJQUNmLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQXlGRCx5RUFBeUU7QUFDekUsNkVBQTZFO0FBQzdFLGVBQWU7QUFFZixnRUFBZ0U7QUFDaEUsK0RBQStEO0FBQy9ELFdBQVc7QUFDWCxTQUFnQixtQkFBbUIsQ0FBQyxLQUFZO0lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQzNCLE9BQU87WUFDTCxTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7S0FDSDtJQUNELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDeEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUM1QyxDQUFDO0FBQ0osQ0FBQztBQVpELGtEQVlDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLFNBQWdCLEVBQUUsYUFBb0I7SUFDbEUsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1FBQ25CLE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0lBQ0QsT0FBVSxTQUFTLFVBQUssYUFBZSxDQUFDO0FBQzFDLENBQUM7QUFMRCxzQ0FLQyJ9