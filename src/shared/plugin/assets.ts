import axios from "axios"
import { Dexie, EntityTable } from "dexie"
import pLimit from "p-limit"

export interface IPluginAssets {
    readonly source: PluginAssetsSource
    readonly data: unknown
    get(this: this, filepath: "index.js" | "package.json" | "README.md" | string): Promise<string>
    clean?(this: this): void | Promise<void>
}


const downloadLimit = pLimit(8)

export class PluginBuiltInAssets implements IPluginAssets {

    public readonly source: PluginAssetsSource = "builtin"

    public constructor(public readonly data: { index: Record<string, string> }) {
    }

    public async get(this: this, filepath: string): Promise<string> {
        return await (await fetch(this.data.index[filepath]!)).text()
    }

    public async getAll(this: this): Promise<Record<string, string>> {
        const filesContent: Record<string, string> = {}
        await Promise.all(Object.entries(this.data.index).map(async ([path, url]) => {
            await downloadLimit(async () => filesContent[path] = await (await fetch(url)).text())
        }))
        return filesContent
    }
}

export class PluginURLAssets implements IPluginAssets {

    public readonly source: PluginAssetsSource = "url"

    public constructor(public readonly data: { baseURL: string }) {
        if (!data.baseURL.endsWith("/")) {
            data.baseURL += "/"
        }
    }

    public async get(this: this, filepath: string): Promise<string> {
        return await (await fetch(this.data.baseURL + filepath)).text()
    }
}

export class PluginOnlineAssets implements IPluginAssets {

    public readonly source: PluginAssetsSource = "online"

    private index: Promise<Record<string, string>> | null = null

    public constructor(public readonly data: { indexURL: string }) {}

    public async get(this: this, filepath: string): Promise<string> {
        return await (await fetch((await this.getIndex())[filepath]!)).text()
    }

    private getIndex(this: this): Promise<Record<string, string>> {
        if (this.index !== null) {
            return this.index
        }
        return this.index = (async () => (await axios.get(this.data.indexURL)).data)()
    }
}

interface IAssets {
    packageName: string
    path: string
    content: string
}

const db = new Dexie("CoCoNextPlugin") as Dexie & {
    assets: EntityTable<IAssets, "packageName">
}

db.version(1).stores({
    assets: "[packageName+path]"
})

export class PluginLocalAssets implements IPluginAssets {

    public readonly source: PluginAssetsSource = "local"

    public constructor(
        public readonly data: { packageName: string, shop: string },
        filesContent?: Record<string, string>
    ) {
        // v1.23.6 以及之前的版本不支持多插件商城，没有 shop 字段
        data.shop ??= "@oldsquaw-coco-next/plugin-shop-ccn-community"
        if (filesContent !== undefined) {
            db.assets.bulkAdd(Object.entries(filesContent).map(([path, content]) => ({
                packageName: data.packageName, path, content
            })))
        }
    }

    public async get(this: this, filepath: string): Promise<string> {
        return (await db.assets.where({
            packageName: this.data.packageName,
            path: filepath
        }).first())!.content
    }

    public async clean(this: this) {
        await db.assets.where("packageName").equals(this.data.packageName).delete()
    }
}

export type PluginAssetsSource = "builtin" | "local" | "online" | "url"
