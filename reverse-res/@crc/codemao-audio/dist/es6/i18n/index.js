import { zh_CN } from './zh_CN';
var injected_intl = {
    formatMessage: function (messageDescriptor) {
        return zh_CN.codemao_audio[messageDescriptor.id];
    },
};
export function set_intl(intl) {
    injected_intl = intl;
}
export function get_intl() {
    return injected_intl;
}
