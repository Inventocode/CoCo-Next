import { IPluginAssets, PluginLocalAssets, PluginURLAssets } from "./assets"
import { pluginManager } from "./manager"
import * as Paths from "./paths"

export class PluginStorage {

    public readonly record: Record<string, null>

    public constructor() {
        const list: string[] = JSON.parse(localStorage.getItem(Paths.PLUGIN_LIST) ?? "[]")
        this.record = Object.fromEntries(list.map((name) => [name, null]))
    }

    public add(this: this, packageName: string): void {
        this.record[packageName] = null
        const assets = pluginManager.getPluginAssets(packageName)
        localStorage.setItem(Paths.PLUGIN_SOURCE(packageName), JSON.stringify({
            source: assets.source, data: assets.data
        }))
        this.save()
    }

    public remove(this: this, packageName: string): void {
        delete this.record[packageName]
        localStorage.removeItem(Paths.PLUGIN_SOURCE(packageName))
        this.save()
    }

    private save(this: this) {
        localStorage.setItem(Paths.PLUGIN_LIST, JSON.stringify(Object.keys(this.record)))
    }

    public getAssets(this: this, packageName: string): IPluginAssets {
        const { source, data } = JSON.parse(localStorage.getItem(Paths.PLUGIN_SOURCE(packageName)) ?? "{}")
        switch (source) {
            case "url":
                return new PluginURLAssets(data)
            case "local":
                return new PluginLocalAssets(data)
        }
        throw new Error(`${packageName} 资源来源未知：${source}`)
    }
}

export const pluginStore = new PluginStorage()
