import { block_provider } from '@crc/heart';
export function register_to_heart(blocks) {
    var registry = blocks.heart().get_registry();
    Object.keys(blocks.types).forEach(function (block_type) {
        var domain_functions = blocks.domain_functions;
        registry.register({
            namespace: blocks.namespace || '',
            id: block_type,
            domain_function: domain_functions[block_type],
            metadata: blocks.metadatas ? blocks.metadatas[block_type] : undefined,
        });
        var events = blocks.events;
        if (!events) {
            return;
        }
        events.get_action_specs().forEach(function (action_spec) {
            var action_type = {
                namespace: blocks.namespace || '',
                id: action_spec.id,
            };
            if (action_spec.statefulness !== undefined) {
                action_type.statefulness = action_spec.statefulness;
            }
            registry.register_action_type(action_type);
            action_spec.responder_blocks.forEach(function (responder_spec) {
                registry.register({
                    namespace: blocks.namespace || '',
                    id: responder_spec.id,
                    respond: {
                        to_action: {
                            namespace: blocks.namespace || '',
                            id: action_spec.id,
                        },
                        type: responder_spec.type,
                        async: responder_spec.async,
                        priority: responder_spec.priority,
                        entity_specific: action_spec.entity_specific,
                        trigger_function: responder_spec.trigger_function,
                        filter_arg_names: responder_spec.filter_arg_names,
                    },
                });
            });
        });
    });
}
var BlockXMLBuilderImpl = (function () {
    function BlockXMLBuilderImpl(config) {
        this.block_xml = {};
        this.namespace = config.namespace || '';
        for (var block_type in config.block_config) {
            this.define_block_xml(block_type);
        }
    }
    BlockXMLBuilderImpl.prototype.define_block_xml = function (block_type, xml, gap, real_block_type) {
        if (xml === void 0) { xml = ''; }
        var ns_id = block_provider.namespaced_id(this.namespace, block_type);
        real_block_type = real_block_type || ns_id;
        var gap_xml = typeof gap === 'string' ? "gap=\"" + gap + "\"" : '';
        this.block_xml[ns_id] = "<block type=\"" + real_block_type + "\" " + gap_xml + ">" + xml + "</block>";
    };
    BlockXMLBuilderImpl.prototype.get_block_xml = function () {
        return this.block_xml;
    };
    return BlockXMLBuilderImpl;
}());
export { BlockXMLBuilderImpl };
