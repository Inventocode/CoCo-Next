"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_block_linters(ohno) {
    function procedure_return_all_branches(compiled_entities, block_util, create_ast_linter_error, create_ast_linter_warning) {
        var err = [];
        for (var i = 0; i < compiled_entities.length; i++) {
            var data = compiled_entities[i];
            for (var proc_id in data.procedures) {
                var procedure_block = data.procedures[proc_id];
                var body = procedure_block.child_block[0];
                if (procedure_block == undefined || body == undefined) {
                    continue;
                }
                var res = is_block_group_return_all_branches(body, block_util);
                var missing_return = res.has_filled_return_block && !res.all_branches_return;
                var mixed_returns = res.has_filled_return_block && res.has_empty_return_block;
                if (missing_return || mixed_returns) {
                    err.push(ohno.user.procedure_not_return_all_branches({
                        block_id: procedure_block.id,
                        entity_id: data.id,
                    }));
                }
            }
        }
        return err;
    }
    function use_bad_procedure_parameter(compiled_entities, block_util, create_ast_linter_error, create_ast_linter_warning) {
        var err = [];
        function generate_no_such_parameter_error(block_id, entity_id) {
            err.push(ohno.user.procedure_no_such_parameter({
                block_id: block_id,
                entity_id: entity_id,
            }));
        }
        function generate_param_outside_error(block_id, entity_id) {
            err.push(ohno.user.procedure_parameter_outside({
                block_id: block_id,
                entity_id: entity_id,
            }));
        }
        var _loop_1 = function (i) {
            var entity = compiled_entities[i];
            var _loop_2 = function (proc_id) {
                var procedure_block = entity.procedures[proc_id];
                if (procedure_block == undefined) {
                    return "continue";
                }
                var body = procedure_block.child_block[0];
                if (body == undefined) {
                    return "continue";
                }
                var proc_params = procedure_block.params;
                block_util.ast_for_each(body, function (cb) {
                    if (block_util.is.procedures_parameter(cb)) {
                        var param_name = cb.params.param_name;
                        if (proc_params[param_name] == undefined) {
                            generate_no_such_parameter_error(cb.id, entity.id);
                        }
                    }
                });
            };
            for (var proc_id in entity.procedures) {
                _loop_2(proc_id);
            }
            for (var rbid in entity.compiled_block_map) {
                var script = entity.compiled_block_map[rbid];
                block_util.ast_for_each(script, function (cb) {
                    if (block_util.is.procedures_parameter(cb)) {
                        generate_param_outside_error(cb.id, entity.id);
                    }
                });
            }
        };
        for (var i = 0; i < compiled_entities.length; i++) {
            _loop_1(i);
        }
        return err;
    }
    function broadcast_is_not_listened_warning(compiled_entities, block_util, create_ast_linter_error, create_ast_linter_warning) {
        var err = [];
        var broadcasts = new Set();
        var listeners = new Set();
        for (var _i = 0, compiled_entities_1 = compiled_entities; _i < compiled_entities_1.length; _i++) {
            var entity = compiled_entities_1[_i];
            for (var rbid in entity.compiled_block_map) {
                var script = entity.compiled_block_map[rbid];
                var block_is_listener = script.type == 'self_listen';
                if (block_is_listener) {
                    var message_block = script.params.message;
                    if (block_util.is.compiled_block(message_block)) {
                        var message = get_message(message_block);
                        if (message) {
                            listeners.add(message);
                        }
                    }
                }
                block_util.ast_for_each(script, function (cb) {
                    var block_is_broadcast = cb.parent_block && cb.parent_block.type == 'self_broadcast';
                    if (block_is_broadcast) {
                        broadcasts.add(cb);
                    }
                });
            }
        }
        broadcasts.forEach(function (broadcast) {
            var message = get_message(broadcast);
            if (message == undefined) {
                return;
            }
            if (listeners.has(message)) {
                return;
            }
            var similar_listeners = [];
            listeners.forEach(function (listener) {
                var dis = levenshtein_distance(message, listener);
                similar_listeners.push({
                    id: listener,
                    distance: dis,
                });
            });
            err.push(ohno.warning.broadcast_with_no_listener({
                block_id: broadcast.id,
                'similar_indentities': similar_listeners,
            }));
        });
        return err;
    }
    return [procedure_return_all_branches, use_bad_procedure_parameter, broadcast_is_not_listened_warning];
}
exports.get_block_linters = get_block_linters;
function levenshtein_distance(a, b) {
    if (a.length === 0) {
        return b.length;
    }
    if (b.length === 0) {
        return a.length;
    }
    var matrix = [];
    for (var i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (var j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (var i = 1; i <= b.length; i++) {
        for (var j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}
function get_message(message_block) {
    var message = message_block.params;
    var message_text = message['TEXT'];
    if (message_text) {
        return message_text;
    }
    return undefined;
}
function is_block_group_return_all_branches(ast, block_util) {
    var all_branches_return = false;
    var has_filled_return_block = false;
    var has_empty_return_block = false;
    if (ast == undefined) {
        return {
            all_branches_return: all_branches_return,
            has_filled_return_block: has_filled_return_block,
            has_empty_return_block: has_empty_return_block,
        };
    }
    if (block_util.is.controls_if_no_else(ast)) {
        var child = ast.child_block[0];
        if (child !== undefined) {
            var res = is_block_group_return_all_branches(child, block_util);
            has_filled_return_block = res.has_filled_return_block;
            has_empty_return_block = res.has_empty_return_block;
        }
    }
    if (block_util.is.controls_if(ast) || block_util.is.controls_if_dropdown(ast)) {
        var conditions_length = block_util.is.controls_if(ast) ? ast.conditions.length : ast.if_dropdown_conditions.length;
        var branches = conditions_length + 1;
        var return_branch = 0;
        for (var i = 0; i < branches; i++) {
            var res = is_block_group_return_all_branches(ast.child_block[i], block_util);
            has_filled_return_block = has_filled_return_block || res.has_filled_return_block;
            has_empty_return_block = has_empty_return_block || res.has_empty_return_block;
            if (res.all_branches_return) {
                return_branch++;
            }
        }
        all_branches_return = all_branches_return || return_branch === branches;
    }
    if (block_util.is.procedures_return_value(ast)) {
        all_branches_return = true;
        var return_val = ast.params['VALUE'];
        has_filled_return_block = return_val != undefined;
        has_empty_return_block = return_val == undefined;
    }
    // Check child block of loop block.
    if (block_util.is.loop_block(ast) && ast.child_block[0] !== undefined) {
        var res = is_block_group_return_all_branches(ast.child_block[0], block_util);
        all_branches_return = all_branches_return || res.all_branches_return;
        has_filled_return_block = has_filled_return_block || res.has_filled_return_block;
        has_empty_return_block = has_empty_return_block || res.has_empty_return_block;
    }
    var next_block = ast.next_block;
    if (next_block !== undefined) {
        var res = is_block_group_return_all_branches(next_block, block_util);
        all_branches_return = all_branches_return || res.all_branches_return;
        has_filled_return_block = has_filled_return_block || res.has_filled_return_block;
        has_empty_return_block = has_empty_return_block || res.has_empty_return_block;
    }
    return {
        all_branches_return: all_branches_return,
        has_filled_return_block: has_filled_return_block,
        has_empty_return_block: has_empty_return_block,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfbGludGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2ljX2Jsb2Nrcy9ibG9ja19saW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFpQkEsU0FBZ0IsaUJBQWlCLENBQUMsSUFBUztJQUV6QyxTQUFTLDZCQUE2QixDQUNsQyxpQkFBa0MsRUFDbEMsVUFBb0IsRUFDcEIsdUJBQTRDLEVBQzVDLHlCQUFnRDtRQUVsRCxJQUFNLEdBQUcsR0FBaUIsRUFBRSxDQUFDO1FBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxJQUFNLElBQUksR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLGVBQWUsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtvQkFDckQsU0FBUztpQkFDVjtnQkFDRCxJQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ2pFLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDL0UsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLHVCQUF1QixJQUFJLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDaEYsSUFBSSxjQUFjLElBQUksYUFBYSxFQUFFO29CQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUM7d0JBQ25ELFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBRTt3QkFDNUIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNuQixDQUFDLENBQUMsQ0FBQztpQkFDTDthQUNGO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxTQUFTLDJCQUEyQixDQUNoQyxpQkFBa0MsRUFDbEMsVUFBb0IsRUFDcEIsdUJBQTRDLEVBQzVDLHlCQUFnRDtRQUVsRCxJQUFNLEdBQUcsR0FBaUIsRUFBRSxDQUFDO1FBRTdCLFNBQVMsZ0NBQWdDLENBQUMsUUFBZSxFQUFFLFNBQWdCO1lBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztnQkFDN0MsUUFBUSxVQUFBO2dCQUNSLFNBQVMsV0FBQTthQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUVELFNBQVMsNEJBQTRCLENBQUMsUUFBZSxFQUFFLFNBQWdCO1lBQ3JFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztnQkFDN0MsUUFBUSxVQUFBO2dCQUNSLFNBQVMsV0FBQTthQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztnQ0FFUSxDQUFDO1lBQ1IsSUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ3pCLE9BQU87Z0JBQ2hCLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTs7aUJBQWE7Z0JBQy9DLElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTs7aUJBQWE7Z0JBQ3BDLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQUMsRUFBRTtvQkFDL0IsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUMxQyxJQUFNLFVBQVUsR0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzt3QkFDaEQsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxFQUFFOzRCQUN4QyxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDcEQ7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7O1lBYkwsS0FBSyxJQUFNLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVTt3QkFBNUIsT0FBTzthQWNqQjtZQUNELEtBQUssSUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFO2dCQUM1QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBRTtvQkFDakMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUMxQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDaEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7UUF4QkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQXhDLENBQUM7U0F5QlQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxTQUFTLGlDQUFpQyxDQUN0QyxpQkFBa0MsRUFDbEMsVUFBb0IsRUFDcEIsdUJBQTRDLEVBQzVDLHlCQUFnRDtRQUVsRCxJQUFNLEdBQUcsR0FBaUIsRUFBRSxDQUFDO1FBRTdCLElBQU0sVUFBVSxHQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQU0sU0FBUyxHQUFlLElBQUksR0FBRyxFQUFFLENBQUM7UUFFeEMsS0FBcUIsVUFBaUIsRUFBakIsdUNBQWlCLEVBQWpCLCtCQUFpQixFQUFqQixJQUFpQixFQUFFO1lBQW5DLElBQU0sTUFBTSwwQkFBQTtZQUNmLEtBQUssSUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFO2dCQUM1QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLENBQUM7Z0JBQ3ZELElBQUksaUJBQWlCLEVBQUU7b0JBQ3JCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUM1QyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUMvQyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzNDLElBQUksT0FBTyxFQUFFOzRCQUNYLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3hCO3FCQUNGO2lCQUNGO2dCQUNELFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBRTtvQkFDakMsSUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDO29CQUN2RixJQUFJLGtCQUFrQixFQUFFO3dCQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNwQjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBdUI7WUFDekMsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDckMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUN2QyxJQUFNLGlCQUFpQixHQUF5QixFQUFFLENBQUM7WUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWU7Z0JBQ2hDLElBQU0sR0FBRyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEQsaUJBQWlCLENBQUMsSUFBSSxDQUFDO29CQUNyQixFQUFFLEVBQUUsUUFBUTtvQkFDWixRQUFRLEVBQUUsR0FBRztpQkFDZCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztnQkFDL0MsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUN0QixxQkFBcUIsRUFBRSxpQkFBaUI7YUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE9BQU8sQ0FBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUMsQ0FBRSxDQUFDO0FBQzNHLENBQUM7QUF4SUQsOENBd0lDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtJQUM5QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUNqQjtJQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBQ0QsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQzNCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxhQUEyQjtJQUM5QyxJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sWUFBWSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxJQUFJLFlBQVksRUFBRTtRQUNoQixPQUFPLFlBQVksQ0FBQztLQUNyQjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLGtDQUFrQyxDQUFDLEdBQTJCLEVBQUUsVUFBb0I7SUFDM0YsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDaEMsSUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDcEMsSUFBSSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFFbkMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO1FBQ3BCLE9BQU87WUFDTCxtQkFBbUIscUJBQUE7WUFDbkIsdUJBQXVCLHlCQUFBO1lBQ3ZCLHNCQUFzQix3QkFBQTtTQUN2QixDQUFDO0tBQ0g7SUFFRCxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDMUMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztZQUN0RCxzQkFBc0IsR0FBRyxHQUFHLENBQUMsc0JBQXNCLENBQUM7U0FDckQ7S0FDRjtJQUVELElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM3RSxJQUFNLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztRQUNySCxJQUFNLFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvRSx1QkFBdUIsR0FBRyx1QkFBdUIsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUM7WUFDakYsc0JBQXNCLEdBQUcsc0JBQXNCLElBQUksR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQzlFLElBQUksR0FBRyxDQUFDLG1CQUFtQixFQUFFO2dCQUMzQixhQUFhLEVBQUUsQ0FBQzthQUNqQjtTQUNGO1FBQ0QsbUJBQW1CLEdBQUcsbUJBQW1CLElBQUksYUFBYSxLQUFLLFFBQVEsQ0FBQztLQUN6RTtJQUVELElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM5QyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2Qyx1QkFBdUIsR0FBRyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQ2xELHNCQUFzQixHQUFHLFVBQVUsSUFBSSxTQUFTLENBQUM7S0FDbEQ7SUFFRCxtQ0FBbUM7SUFDbkMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNyRSxJQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9FLG1CQUFtQixHQUFHLG1CQUFtQixJQUFJLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRSx1QkFBdUIsR0FBRyx1QkFBdUIsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDakYsc0JBQXNCLEdBQUcsc0JBQXNCLElBQUksR0FBRyxDQUFDLHNCQUFzQixDQUFDO0tBQy9FO0lBRUQsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNsQyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDNUIsSUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLG1CQUFtQixHQUFHLG1CQUFtQixJQUFJLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRSx1QkFBdUIsR0FBRyx1QkFBdUIsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDakYsc0JBQXNCLEdBQUcsc0JBQXNCLElBQUksR0FBRyxDQUFDLHNCQUFzQixDQUFDO0tBQy9FO0lBRUQsT0FBTztRQUNMLG1CQUFtQixxQkFBQTtRQUNuQix1QkFBdUIseUJBQUE7UUFDdkIsc0JBQXNCLHdCQUFBO0tBQ3ZCLENBQUM7QUFDSixDQUFDIn0=