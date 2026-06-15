"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _defaultsDeep = require("lodash/defaultsDeep");
var inversify_1 = require("inversify");
var di_symbols_1 = require("./di_symbols");
var action_state_store_1 = require("./action_state_store");
var basic_blocks_1 = require("./basic_blocks");
var block_pool_1 = require("./block_pool");
var block_predicates_1 = require("./block_predicates");
var block_util_1 = require("./block_util");
var clock_1 = require("./runtime/clock");
var config_1 = require("./config");
var xml_entity_compiler_1 = require("./compiler/xml_entity_compiler");
var json_entity_compiler_1 = require("./compiler/json_entity_compiler");
var compiler_1 = require("./compiler");
var dom_parser_1 = require("./compiler/xml_entity_compiler/dom_parser");
var html_parser_1 = require("./compiler/xml_entity_compiler/html_parser");
var day_names_1 = require("./basic_blocks/day_names");
var factory_1 = require("./debug/factory");
var compiler_2 = require("./opti/compiler");
var frame_pool_1 = require("./opti/frame_pool");
var program_cache_1 = require("./opti/program_cache");
var factory_2 = require("./opti/factory");
var prng_factory_1 = require("./prng_factory");
var registry_1 = require("./registry");
var data_1 = require("./runtime/data");
var public_1 = require("./runtime/public");
var manager_1 = require("./runtime/manager");
var script_store_1 = require("./runtime/script_store");
var task_1 = require("./runtime/task");
var user_variable_1 = require("./runtime/user_variable");
var util_1 = require("./util");
var predicates_1 = require("./predicates");
var error_types_1 = require("./error_types");
var event_bus_1 = require("./event/event_bus");
var DEFAULT_BASIC_BLOCKS_REQUIREMENTS = {
    day_names: day_names_1.DEFAULT_DAY_NAMES,
};
function get_instance(spec) {
    spec.basic_blocks_requirements = _defaultsDeep(spec.basic_blocks_requirements, DEFAULT_BASIC_BLOCKS_REQUIREMENTS);
    var cont = new inversify_1.Container();
    cont.bind(di_symbols_1.BINDING.Log)
        .toConstantValue(spec.logger);
    var event_bus = event_bus_1.create_event_bus();
    cont.bind(di_symbols_1.BINDING.EventBus)
        .toConstantValue(event_bus);
    // Config depends on event_bus, and many other components depend on Config
    cont.bind(di_symbols_1.BINDING.Config)
        .to(config_1.ConfigImpl)
        .inSingletonScope();
    // Assign initial configuration file
    var config = cont.get(di_symbols_1.BINDING.Config);
    config.set(spec.configuration);
    var has_dom_parser = spec.compiler_requirements && spec.compiler_requirements.dom_parser;
    var has_html_parser = spec.compiler_requirements && spec.compiler_requirements.html_parser;
    if (has_dom_parser) {
        cont.bind(di_symbols_1.BINDING.DOMParser)
            .toConstantValue(spec.compiler_requirements.dom_parser);
        cont.bind(di_symbols_1.BINDING.XMLParser)
            .to(dom_parser_1.DOMParserImpl)
            .inSingletonScope();
    }
    else if (has_html_parser) {
        cont.bind(di_symbols_1.BINDING.HtmlParser)
            .toConstantValue(spec.compiler_requirements.html_parser);
        cont.bind(di_symbols_1.BINDING.XMLParser)
            .to(html_parser_1.HtmlParserImpl)
            .inSingletonScope();
    }
    cont.bind(di_symbols_1.BINDING.XMLEntityCompiler)
        .to(xml_entity_compiler_1.XMLEntityCompilerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.JSONEntityCompiler)
        .to(json_entity_compiler_1.JSONEntityCompilerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.Compiler)
        .to(compiler_1.CompilerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.DayNames)
        .toConstantValue(spec.basic_blocks_requirements.day_names);
    cont.bind(di_symbols_1.BINDING.Ohno)
        .toConstantValue(error_types_1.ohno);
    cont.bind(di_symbols_1.BINDING.ActionStateStore)
        .to(action_state_store_1.ActionStateStoreImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.RuntimeData)
        .to(data_1.RuntimeDataImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.Clock)
        .to(clock_1.ClockImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.OptiProgramCache)
        .to(program_cache_1.OptiProgramCacheImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.OptiRunnerFactory)
        .to(factory_2.OptiRunnerFactory)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.DebugRunnerFactory)
        .to(factory_1.DebugRunnerFactory)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.BasicBlockProviderFactory)
        .to(basic_blocks_1.BasicBlockProviderFactoryImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.PRNGFactory)
        .to(prng_factory_1.PRNGFactoryImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.BlockPool)
        .to(block_pool_1.BlockPoolImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.OptiFramePool)
        .to(frame_pool_1.OptiFramePoolImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.BlockPredicates)
        .to(block_predicates_1.BlockPredicatesImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.OptiCompiler)
        .to(compiler_2.OptiCompilerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.Registry)
        .to(registry_1.RegistryImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.RuntimeManager)
        .to(manager_1.RuntimeManagerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.RuntimeManagerFacade)
        .to(public_1.RuntimeManagerFacade)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.TaskManager)
        .to(task_1.TaskManagerImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.ScriptStore)
        .to(script_store_1.ScriptStoreImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.UserVariable)
        .to(user_variable_1.UserVariableImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.BlockUtil)
        .to(block_util_1.BlockUtilImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.Util)
        .to(util_1.UtilImpl)
        .inSingletonScope();
    cont.bind(di_symbols_1.BINDING.Predicates)
        .to(predicates_1.PredicatesImpl)
        .inSingletonScope();
    return cont;
}
exports.get_instance = get_instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFzRDtBQUN0RCx1Q0FBc0M7QUFJdEMsMkNBQXVDO0FBRXZDLDJEQUE0RDtBQUM1RCwrQ0FBK0Q7QUFDL0QsMkNBQTZDO0FBQzdDLHVEQUF5RDtBQUN6RCwyQ0FBNkM7QUFDN0MseUNBQTRDO0FBQzVDLG1DQUEwRDtBQUMxRCxzRUFBdUU7QUFDdkUsd0VBQXlFO0FBQ3pFLHVDQUEwQztBQUMxQyx3RUFBMEU7QUFDMUUsMEVBQTRFO0FBQzVFLHNEQUE2RDtBQUc3RCwyQ0FBcUQ7QUFFckQsNENBQW1EO0FBQ25ELGdEQUFzRDtBQUN0RCxzREFBNEQ7QUFDNUQsMENBQW1EO0FBQ25ELCtDQUFpRDtBQUNqRCx1Q0FBMEM7QUFDMUMsdUNBQWlEO0FBQ2pELDJDQUF3RDtBQUN4RCw2Q0FBdUQ7QUFDdkQsdURBQXlEO0FBQ3pELHVDQUFpRDtBQUNqRCx5REFBMkQ7QUFDM0QsK0JBQWtDO0FBQ2xDLDJDQUE4QztBQUM5Qyw2Q0FBcUM7QUFFckMsK0NBRTJCO0FBcUIzQixJQUFNLGlDQUFpQyxHQUFHO0lBQ3hDLFNBQVMsRUFBRSw2QkFBaUI7Q0FDN0IsQ0FBQztBQUVGLFNBQWdCLFlBQVksQ0FBQyxJQUFpQjtJQUU1QyxJQUFJLENBQUMseUJBQXlCLEdBQStCLGFBQWEsQ0FDeEUsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixpQ0FBaUMsQ0FDbEMsQ0FBQztJQUVGLElBQU0sSUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBRTdCLElBQUksQ0FBQyxJQUFJLENBQVcsb0JBQU8sQ0FBQyxHQUFHLENBQUM7U0FDN0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoQyxJQUFNLFNBQVMsR0FBRyw0QkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQW9CLG9CQUFPLENBQUMsUUFBUSxDQUFDO1NBQzNDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU5QiwwRUFBMEU7SUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBVyxvQkFBTyxDQUFDLE1BQU0sQ0FBQztTQUNoQyxFQUFFLENBQUMsbUJBQVUsQ0FBQztTQUNkLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsb0NBQW9DO0lBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQVcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUvQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLElBQXNCLElBQUksQ0FBQyxxQkFBc0IsQ0FBQyxVQUFVLENBQUM7SUFDOUcsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixJQUF1QixJQUFJLENBQUMscUJBQXNCLENBQUMsV0FBVyxDQUFDO0lBRWpILElBQUksY0FBYyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQVksb0JBQU8sQ0FBQyxTQUFTLENBQUM7YUFDcEMsZUFBZSxDQUFtQixJQUFJLENBQUMscUJBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBc0Isb0JBQU8sQ0FBQyxTQUFTLENBQUM7YUFDOUMsRUFBRSxDQUFDLDBCQUFhLENBQUM7YUFDakIsZ0JBQWdCLEVBQUUsQ0FBQztLQUN2QjtTQUFNLElBQUksZUFBZSxFQUFFO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQWEsb0JBQU8sQ0FBQyxVQUFVLENBQUM7YUFDdEMsZUFBZSxDQUFvQixJQUFJLENBQUMscUJBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBOEIsb0JBQU8sQ0FBQyxTQUFTLENBQUM7YUFDdEQsRUFBRSxDQUFDLDRCQUFjLENBQUM7YUFDbEIsZ0JBQWdCLEVBQUUsQ0FBQztLQUN2QjtJQUNELElBQUksQ0FBQyxJQUFJLENBQW1CLG9CQUFPLENBQUMsaUJBQWlCLENBQUM7U0FDbkQsRUFBRSxDQUFDLDJDQUFxQixDQUFDO1NBQ3pCLGdCQUFnQixFQUFFLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBbUIsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztTQUNwRCxFQUFFLENBQUMsNkNBQXNCLENBQUM7U0FDMUIsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QixJQUFJLENBQUMsSUFBSSxDQUFhLG9CQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3BDLEVBQUUsQ0FBQyx1QkFBWSxDQUFDO1NBQ2hCLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBVyxvQkFBTyxDQUFDLFFBQVEsQ0FBQztTQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTdELElBQUksQ0FBQyxJQUFJLENBQVMsb0JBQU8sQ0FBQyxJQUFJLENBQUM7U0FDNUIsZUFBZSxDQUFDLGtCQUFJLENBQUMsQ0FBQztJQUV6QixJQUFJLENBQUMsSUFBSSxDQUFxQixvQkFBTyxDQUFDLGdCQUFnQixDQUFDO1NBQ3BELEVBQUUsQ0FBQyx5Q0FBb0IsQ0FBQztTQUN4QixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQWdCLG9CQUFPLENBQUMsV0FBVyxDQUFDO1NBQzFDLEVBQUUsQ0FBQyxzQkFBZSxDQUFDO1NBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBVSxvQkFBTyxDQUFDLEtBQUssQ0FBQztTQUM5QixFQUFFLENBQUMsaUJBQVMsQ0FBQztTQUNiLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBcUIsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztTQUNwRCxFQUFFLENBQUMsb0NBQW9CLENBQUM7U0FDeEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUE0QixvQkFBTyxDQUFDLGlCQUFpQixDQUFDO1NBQzVELEVBQUUsQ0FBQywyQkFBaUIsQ0FBQztTQUNyQixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQTRCLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7U0FDN0QsRUFBRSxDQUFDLDRCQUFrQixDQUFDO1NBQ3RCLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBOEIsb0JBQU8sQ0FBQyx5QkFBeUIsQ0FBQztTQUN0RSxFQUFFLENBQUMsNENBQTZCLENBQUM7U0FDakMsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFnQixvQkFBTyxDQUFDLFdBQVcsQ0FBQztTQUMxQyxFQUFFLENBQUMsOEJBQWUsQ0FBQztTQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQWMsb0JBQU8sQ0FBQyxTQUFTLENBQUM7U0FDdEMsRUFBRSxDQUFDLDBCQUFhLENBQUM7U0FDakIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFrQixvQkFBTyxDQUFDLGFBQWEsQ0FBQztTQUM5QyxFQUFFLENBQUMsOEJBQWlCLENBQUM7U0FDckIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFvQixvQkFBTyxDQUFDLGVBQWUsQ0FBQztTQUNsRCxFQUFFLENBQUMsc0NBQW1CLENBQUM7U0FDdkIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFpQixvQkFBTyxDQUFDLFlBQVksQ0FBQztTQUM1QyxFQUFFLENBQUMsMkJBQWdCLENBQUM7U0FDcEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFhLG9CQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3BDLEVBQUUsQ0FBQyx1QkFBWSxDQUFDO1NBQ2hCLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBbUIsb0JBQU8sQ0FBQyxjQUFjLENBQUM7U0FDaEQsRUFBRSxDQUFDLDRCQUFrQixDQUFDO1NBQ3RCLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBbUIsb0JBQU8sQ0FBQyxvQkFBb0IsQ0FBQztTQUN0RCxFQUFFLENBQUMsNkJBQW9CLENBQUM7U0FDeEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFnQixvQkFBTyxDQUFDLFdBQVcsQ0FBQztTQUMxQyxFQUFFLENBQUMsc0JBQWUsQ0FBQztTQUNuQixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQWdCLG9CQUFPLENBQUMsV0FBVyxDQUFDO1NBQzFDLEVBQUUsQ0FBQyw4QkFBZSxDQUFDO1NBQ25CLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBaUIsb0JBQU8sQ0FBQyxZQUFZLENBQUM7U0FDNUMsRUFBRSxDQUFDLGdDQUFnQixDQUFDO1NBQ3BCLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBYyxvQkFBTyxDQUFDLFNBQVMsQ0FBQztTQUN0QyxFQUFFLENBQUMsMEJBQWEsQ0FBQztTQUNqQixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLElBQUksQ0FBQyxJQUFJLENBQVMsb0JBQU8sQ0FBQyxJQUFJLENBQUM7U0FDNUIsRUFBRSxDQUFDLGVBQVEsQ0FBQztTQUNaLGdCQUFnQixFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBZSxvQkFBTyxDQUFDLFVBQVUsQ0FBQztTQUN4QyxFQUFFLENBQUMsMkJBQWMsQ0FBQztTQUNsQixnQkFBZ0IsRUFBRSxDQUFDO0lBRXRCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQTlJRCxvQ0E4SUMifQ==