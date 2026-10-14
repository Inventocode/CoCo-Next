export const PLUGIN_LIST: string = "/plugin/list"

export function PLUGIN_SOURCE(name: string): string {
    return `/plugin/source/${name}`
}

export function REGISTRATION_FUNCTION(name: string): string {
    return `/plugin/registration/${name}/store`
}
