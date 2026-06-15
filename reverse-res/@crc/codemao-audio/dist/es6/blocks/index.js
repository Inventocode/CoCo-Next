var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { block_provider } from '@crc/heart';
import { register_to_heart } from '../blocks/blocks_polyfill';
import { NAMESPACE, AUDIO_BLOCK_TYPES } from './block_types';
import { block_config } from './block_config';
import { block_xml } from './block_xml';
import { get_domain_functions, get_intl_fn } from './functions';
export * from './block_types';
export function get_audio_blocks(deps, blink) {
    var block_pack = {
        heart: deps.heart,
        namespace: NAMESPACE,
        types: AUDIO_BLOCK_TYPES,
        domain_functions: get_domain_functions(deps.heart, deps.domain_functions_override),
    };
    register_to_heart(block_pack);
    if (blink) {
        var get_intl = get_intl_fn(deps);
        var config_1 = block_config(blink, __assign(__assign({}, deps), { get_intl: get_intl }));
        var json_array_1 = [];
        var config_dict_1 = {};
        block_pack.xml = block_xml(config_1, get_intl);
        Object.keys(config_1).forEach(function (block_type) {
            var ns_id = block_provider.namespaced_id(NAMESPACE, block_type);
            config_1[block_type].type = ns_id;
            json_array_1.push(config_1[block_type]);
            config_dict_1[ns_id] = config_1[block_type];
        });
        block_pack.blocks_config = config_dict_1;
        blink.define_blocks_with_json_array(json_array_1);
    }
    return block_pack;
}
