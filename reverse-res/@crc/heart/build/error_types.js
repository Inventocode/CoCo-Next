"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catastrophic_1 = require("catastrophic");
var error_manager = new catastrophic_1.Catastrophic('HEART.CATASTROPHIC');
var user_category = {
    unique_code: 'HEART.USER',
    description: 'Runtime errors caused by users',
    default_http_code: 400,
};
var user_errors = {
    unknown_user_error: {
        unique_number: 0,
    },
    procedure_no_such_parameter: {
        unique_number: 1,
        description: 'A procedure parameter not belonging to this procedure was used',
    },
    procedure_parameter_outside: {
        unique_number: 2,
        description: 'A procedure parameter block was used outside of a procedure',
    },
    procedure_return_outside: {
        unique_number: 3,
        description: 'The procedure return block was used outside of a procedure',
    },
    procedure_return_empty: {
        unique_number: 4,
        description: 'The procedure return block must not be empty',
    },
    error_constructing_value_from_atomic_block: {
        unique_number: 5,
    },
    unknown_run_block_error: {
        unique_number: 6,
        description: 'Unknown error when attempting to run a block',
    },
    block_bad_math_expression: {
        unique_number: 7,
        description: 'User used a bad expression in the calculate block',
    },
    break_with_bad_parent: {
        unique_number: 8,
        description: 'A break block was used outside of a looping block',
    },
    undefined_code_path_argument: {
        unique_number: 9,
        description: 'This execution path should be impossible, argument is calling a child',
    },
    lists_get_value_bad_index: {
        unique_number: 10,
        description: "The user attempted to access a list index that either didn't exist or contained an undefined value",
    },
    tell_with_unknown_entity: {
        unique_number: 11,
        description: "The user attempted to tell an entity to do something, but no such entity is known",
    },
    entity_variable_operation_out_of_scope: {
        unique_number: 12,
        description: "The user attempted to get or set an entity variable with blocks of other entity",
    },
    clone_unknown_entity: {
        unique_number: 13,
        description: "The user attempted to clone an entity, but no such entity is known",
    },
    proc_parameter_without_value: {
        unique_number: 14,
        description: "The user attempted to use a procedure parameter that had no value.",
    },
    call_undefined_procedure: {
        unique_number: 15,
        description: "The user attempted to call a procedure that is not defined.",
    },
    procedure_not_return_all_branches: {
        unique_number: 16,
        description: "The user did not return in all branches",
    },
    procedure_used_return_undefined: {
        unique_number: 17,
        description: "The user tried to use a return value from a procedure that didn't return any value.",
    },
};
var warning_category = {
    unique_code: 'HEART.WARNING',
    description: 'Warnings caused by user code',
    default_http_code: 400,
};
var warning_errors = {
    tell_with_disposed_entity: {
        unique_number: 0,
        description: "The user attempted to tell a disposed entity to do something",
    },
    clone_with_disposed_entity: {
        unique_number: 1,
        description: "The user attempted to clone an entity after disposed it",
    },
    tell_with_destructing_entity: {
        unique_number: 2,
        description: "The user attempted to tell a destructing entity to do something",
    },
    entity_has_no_known_typeclass: {
        unique_number: 3,
        description: "The system tried to do something with an entity, but that entity had no associated typeclass",
    },
    broadcast_with_no_listener: {
        unique_number: 4,
        description: "There's at least one broadcast with no listener",
    },
};
var system_category = {
    unique_code: 'HEART.SYSTEM',
    description: 'Internal heart errors not caused by users',
    default_http_code: 500,
};
var system_errors = {
    unknown_system_error: {
        unique_number: 0,
    },
    missing_domain_function: {
        unique_number: 1,
        description: 'No domain function of this type exists',
    },
    procedure_missing_call_timestamps: {
        unique_number: 2,
    },
    procedure_popped_empty_call_stack: {
        unique_number: 3,
    },
    popped_empty_variable_stack: {
        unique_number: 4,
    },
    undefined_or_null_block: {
        unique_number: 5,
        description: 'Tried to run an undefined or null block',
    },
    procedure_can_not_find_yielding_ancestor: {
        unique_number: 6,
    },
    unhandled_run_block_result: {
        unique_number: 7,
        description: 'Called run_block but did not properly handle a possible result type.',
    },
    action_received_without_spec: {
        unique_number: 8,
        description: 'Received an Action with namespace and id that have no associated registered ActionSpec.',
    },
    state_query_received_without_spec: {
        unique_number: 9,
        description: 'Received a State Query with namespace and id that have no associated registered ActionSpec.',
    },
    state_query_for_non_stateful_action: {
        unique_number: 10,
        description: 'Attempted to get State for an Action type that is not stateful.',
    },
    unknown_error_in_domain_function_call: {
        unique_number: 11,
    },
    unknown_action_block_param_type: {
        unique_number: 12,
    },
    feature_not_available_in_debug_mode: {
        unique_number: 13,
    },
    called_set_variable_without_needed_parameters: {
        unique_number: 14,
        description: "If your variable's scope is 'script', you must provide an interpreter_id. If scope is 'entity' then entity_id must be provided.",
    },
    called_get_variable_without_needed_parameters: {
        unique_number: 15,
        description: "If your variable's scope is 'script', you must provide an interpreter_id. If scope is 'entity' then entity_id must be provided.",
    },
    stack_overflow: {
        unique_number: 16,
        description: "Maximum call stack size exceeded",
    },
    called_opt_safe_static_with_strange_value: {
        unique_number: 17,
        description: "Values passed to opt_safe_static must be a string, number or boolean.",
    },
    looked_at_wall_clock_in_deterministic_mode: {
        unique_number: 18,
        description: 'This breaks determinism. Find another way.',
    },
};
var configuration_category = {
    unique_code: 'HEART.CONFIGURATION',
    description: "Configuration errors, caused by the Client's attempt to configure or set up Heart",
    default_http_code: 500,
};
var configuration_errors = {
    tried_to_change_user_debug_mode_while_running: {
        unique_number: 0,
        description: 'Tried to change user_debug_mode while running. Heart does not allow this.',
    },
};
var compiler_system_category = {
    unique_code: 'HEART.COMPILER.SYSTEM',
    description: 'Compilation errors caused by Heart or Client setups',
    default_http_code: 500,
};
var compiler_system_errors = {
    unknown_procedure_block_type: {
        unique_number: 0,
        description: 'Entered procedure_to_json without matching data.type',
    },
    procedure_name_not_string: {
        unique_number: 1,
        description: "Given procedure block's NAME param was not name",
    },
    procedure_call_name_not_string: {
        unique_number: 2,
        description: "Given procedure call block's NAME param was not name",
    },
    unknown_compiler_error: {
        unique_number: 3,
        description: "Unknown compiler error, sorry",
    },
    unknown_expression: {
        unique_number: 4,
        description: "Optimizing compiler reached an unknown expression",
    },
    constructed_bad_javascript: {
        unique_number: 5,
        description: "Optimizing compiler constructed invalid javascript",
    },
    popped_empty_yield_reset_stack: {
        unique_number: 6,
        description: "Optimizing compiler popped empty yield reset stack",
    },
    popped_empty_yield_group_stack: {
        unique_number: 7,
        description: "Optimizing compiler popped empty yield group stack",
    },
    could_not_find_root_block: {
        unique_number: 8,
        description: "Optimizing compiler could not find root block of another block",
    },
    could_not_find_procedure_parameter_name: {
        unique_number: 9,
        description: "Optimizing compiler could not find the name of a procedure parameter",
    },
    if_dropdown_condition_not_string: {
        unique_number: 10,
        description: "Given IfDropdownBlock condition was malformed",
    },
};
var compiler_user_category = {
    unique_code: 'HEART.COMPILER.USER',
    description: 'Compilation errors caused by Users',
    default_http_code: 400,
};
var compiler_user_errors = {
    tried_to_break_outside_of_loop: {
        unique_number: 0,
        description: "Tried using the break (Quit loop) block outside a loop",
    },
    procedure_parameter_outside: {
        unique_number: 1,
        description: 'A procedure parameter block was used outside of a procedure',
    },
    procedure_return_empty: {
        unique_number: 2,
        description: 'The procedure return block must not be empty',
    },
    error_constructing_value_from_atomic_block: {
        unique_number: 3,
    },
    procedure_no_such_parameter: {
        unique_number: 4,
        description: 'A procedure parameter not belonging to this procedure was used',
    },
    procedure_return_outside: {
        unique_number: 5,
        description: 'The procedure return block was used outside of a procedure',
    },
    defined_multiple_constructors: {
        unique_number: 6,
        description: 'Multiple constructors were defined for a single entity typeclass. Only zero or one is allowed.',
    },
    defined_multiple_destructors: {
        unique_number: 7,
        description: 'Multiple destructors were defined for a single entity typeclass. Only zero or one is allowed.',
    },
    disabled_param: {
        unique_number: 8,
        description: 'There is a disabled expression in code',
    },
    json_compiler_invalid_block: {
        unique_number: 9,
        description: 'Trying to compile a block not in workspace_json.blocks',
    },
};
var compiler_warning_category = {
    unique_code: 'HEART.COMPILER.WARNING',
    description: 'Compilation warnings caused by users or setup',
    default_http_code: 400,
};
var compiler_warning_errors = {
    json_compiler_multi_children_on_one_connection: {
        unique_number: 0,
        description: "There're more than one block on same connection. ",
    },
};
var client_category = {
    unique_code: 'HEART.CLIENT',
    description: 'Errors created and thrown by the client environment',
    default_http_code: 500,
};
var client_errors = {
    domain_function_error: {
        unique_number: 0,
        description: 'Error which ocurred within a domain function',
    },
    ast_linter_error: {
        unique_number: 1,
        description: 'Error which ocurred within ast lint',
    },
    missing_block_xml_error: {
        unique_number: 2,
        description: "Tried to add to a Toolbox a block without an XML definition",
    },
    duplicate_entity_id: {
        unique_number: 3,
        description: "Tried to create two Entity instances with the same entity_id.",
    },
    missing_typeclass: {
        unique_number: 4,
        description: "Tried to create an Entity with an unregistered typeclass_id",
    },
    registry_misconfiguration: {
        unique_number: 5,
        description: "Client registered a combination of things that will either break Heart or not work as they intend.",
    },
    missing_domain_function: {
        unique_number: 6,
        description: "No domain function of this type exists",
    },
    ast_linter_warning: {
        unique_number: 7,
        description: 'Warning which ocurred within ast lint',
    },
};
exports.ohno = {
    system: error_manager.new_category(system_category, system_errors),
    user: error_manager.new_category(user_category, user_errors),
    warning: error_manager.new_category(warning_category, warning_errors),
    compiler: {
        system: error_manager.new_category(compiler_system_category, compiler_system_errors),
        user: error_manager.new_category(compiler_user_category, compiler_user_errors),
        warning: error_manager.new_category(compiler_warning_category, compiler_warning_errors),
    },
    configuration: error_manager.new_category(configuration_category, configuration_errors),
    client: error_manager.new_category(client_category, client_errors),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZXJyb3JfdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsSUFBTSxhQUFhLEdBQUcsSUFBSSwyQkFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFN0QsSUFBTSxhQUFhLEdBQUc7SUFDcEIsV0FBVyxFQUFFLFlBQVk7SUFDekIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxpQkFBaUIsRUFBRSxHQUFHO0NBQ3ZCLENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRztJQUNsQixrQkFBa0IsRUFBRTtRQUNsQixhQUFhLEVBQUUsQ0FBQztLQUNqQjtJQUNELDJCQUEyQixFQUFFO1FBQzNCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxnRUFBZ0U7S0FDOUU7SUFDRCwyQkFBMkIsRUFBRTtRQUMzQixhQUFhLEVBQUUsQ0FBQztRQUNoQixXQUFXLEVBQUUsNkRBQTZEO0tBQzNFO0lBQ0Qsd0JBQXdCLEVBQUU7UUFDeEIsYUFBYSxFQUFFLENBQUM7UUFDaEIsV0FBVyxFQUFFLDREQUE0RDtLQUMxRTtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDNUQ7SUFDRCwwQ0FBMEMsRUFBRTtRQUMxQyxhQUFhLEVBQUUsQ0FBQztLQUNqQjtJQUNELHVCQUF1QixFQUFFO1FBQ3ZCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDNUQ7SUFDRCx5QkFBeUIsRUFBRTtRQUN6QixhQUFhLEVBQUUsQ0FBQztRQUNoQixXQUFXLEVBQUUsbURBQW1EO0tBQ2pFO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsYUFBYSxFQUFFLENBQUM7UUFDaEIsV0FBVyxFQUFFLG1EQUFtRDtLQUNqRTtJQUNELDRCQUE0QixFQUFFO1FBQzVCLGFBQWEsRUFBRSxDQUFDO1FBQ2hC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