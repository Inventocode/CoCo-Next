"use strict";
// We use strings instead of Symbol because we don't
// want problems when running on older JS interpreters
Object.defineProperty(exports, "__esModule", { value: true });
exports.BINDING = {
    // General Singletons
    BlockUtil: 'BlockUtil',
    Config: 'Config',
    Log: 'Log',
    Ohno: 'Ohno',
    Util: 'Util',
    // Singletons
    ActionStateStore: 'ActionStateStore',
    BlockPool: 'BlockPool',
    OptiFramePool: 'OptiFramePool',
    BlockPredicates: 'BlockPredicates',
    Broadcasts: 'Broadcasts',
    Clock: 'Clock',
    XMLParser: 'XMLParser',
    XMLEntityCompiler: 'XMLEntityCompiler',
    JSONEntityCompiler: 'JSONEntityCompiler',
    Compiler: 'Compiler',
    EventBus: 'EventBus',
    OptiCompiler: 'OptiCompiler',
    OptiProgramCache: 'OptiProgramCache',
    Registry: 'Registry',
    RuntimeData: 'RuntimeData',
    RuntimeManager: 'RuntimeManager',
    RuntimeManagerFacade: 'RuntimeManagerFacade',
    TaskManager: 'TaskManager',
    ScriptStore: 'ScriptStore',
    UserVariable: 'UserVariable',
    Predicates: 'Predicates',
    // Factories
    BasicBlockProviderFactory: 'BasicBlockProviderFactory',
    BlockInterpreterFactory: 'BlockInterpreterFactory',
    BlockXmlBuilderFactory: 'BlockXmlBuilderFactory',
    EventBufferFactory: 'EventBufferFactory',
    OptiRunnerFactory: 'OptiRunnerFactory',
    DebugRunnerFactory: 'DebugRunnerFactory',
    PRNGFactory: 'PRNGFactory',
    // Dependencies
    DOMParser: 'DOMParser',
    HtmlParser: 'HtmlParser',
    DayNames: 'DayNames',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlfc3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kaV9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvREFBb0Q7QUFDcEQsc0RBQXNEOztBQUV6QyxRQUFBLE9BQU8sR0FBRztJQUVyQixxQkFBcUI7SUFDckIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBRVosYUFBYTtJQUNiLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxTQUFTLEVBQUUsV0FBVztJQUN0QixhQUFhLEVBQUUsZUFBZTtJQUM5QixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFdBQVc7SUFDdEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixZQUFZLEVBQUUsY0FBYztJQUM1QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFFeEIsWUFBWTtJQUNaLHlCQUF5QixFQUFFLDJCQUEyQjtJQUN0RCx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsc0JBQXNCLEVBQUUsd0JBQXdCO0lBQ2hELGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLFdBQVcsRUFBRSxhQUFhO0lBRTFCLGVBQWU7SUFDZixTQUFTLEVBQUUsV0FBVztJQUN0QixVQUFVLEVBQUUsWUFBWTtJQUV4QixRQUFRLEVBQUUsVUFBVTtDQUVyQixDQUFDIn0=