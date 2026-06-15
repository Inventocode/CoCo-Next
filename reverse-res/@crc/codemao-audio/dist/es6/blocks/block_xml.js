import { NAMESPACE } from './block_types';
import { BlockXMLBuilderImpl } from './blocks_polyfill';
export function block_xml(block_config, get_intl) {
    var intl = get_intl();
    var xml_builder = new BlockXMLBuilderImpl({
        namespace: NAMESPACE,
        block_config: block_config,
    });
    xml_builder.define_block_xml('play_audio');
    xml_builder.define_block_xml('play_audio_and_wait', "", '50');
    xml_builder.define_block_xml('midi_play_note', "\n    <value name=\"beats\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n      </shadow>\n    </value>\n  ");
    xml_builder.define_block_xml('midi_wait', "\n    <value name=\"beats\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n      </shadow>\n    </value>\n  ");
    xml_builder.define_block_xml('stop_all_audios', "", '50');
    xml_builder.define_block_xml('play_words_audio', "\n    <value name=\"text\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">" + intl.formatMessage({ id: 'hello' }) + "</field>\n      </shadow>\n    </value>\n  ");
    xml_builder.define_block_xml('play_words_audio_wait', "\n    <value name=\"text\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">" + intl.formatMessage({ id: 'hello' }) + "</field>\n      </shadow>\n    </value>\n    ", '50');
    xml_builder.define_block_xml('voice_recognition');
    xml_builder.define_block_xml('self_ask_listen', "\n    <value name=\"text\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">" + intl.formatMessage({ id: 'your_name' }) + "</field>\n      </shadow>\n    </value>\n  ");
    xml_builder.define_block_xml('get_voice_answer', "", '50');
    xml_builder.define_block_xml('self_ask_record', "\n    <value name=\"TEXT\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">" + intl.formatMessage({ id: 'your_name' }) + "</field>\n      </shadow>\n    </value>\n  ");
    xml_builder.define_block_xml('play_ask_record', "", '50');
    xml_builder.define_block_xml('enable_voice_detection');
    xml_builder.define_block_xml('get_voice_volume', "", '50');
    return xml_builder.get_block_xml();
}
