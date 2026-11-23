export interface IPluginInfo {
    packageName: string
    version: string
    name: string
    icon?: string
    description?: string
    author: string
}

export interface IPluginPermission {
    network?: boolean
}

export interface IPluginInfoInShop extends IPluginInfo {
    link: string
}
