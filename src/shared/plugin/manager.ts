import { Signal } from "@soncodi/signal"
import axios from "axios"
import pLimit from "p-limit"

import * as Language from "../ui/language"
import { IPluginAssets, PluginLocalAssets } from "./assets"
import { PluginLoader } from "./loader"
import { REGISTRATIONS } from "./registration"
import { pluginStore } from "./storage"
import { dispatch } from "../../editor/redux/store"
import { openConfirmDialogAction, showCommonToastInfoAction } from "../../editor/redux/common/actions"

export interface IPluginInfo {
    packageName: string
    name: string
    icon?: string
    description?: string
    author: string
}

interface IPluginPackageInfo {
    name: string
    title?: string
    description?: string
    author: string
}

const installAskLimit = pLimit(1)

export class PluginManager {

    public readonly info: Record<string, IPluginInfo>
    public readonly assets: Record<string, IPluginAssets>
    public readonly loader: Record<string, PluginLoader>

    private readonly loadPromise: Promise<void>
    private readonly installing: Record<string, Promise<void>>

    public readonly changed: Signal<void>

    public constructor() {
        this.info = Object.create(null)
        this.assets = Object.create(null)
        this.loader = Object.create(null)
        this.installing = Object.create(null)
        this.changed = new Signal()
        const promises: Promise<void>[] = []
        for (const packageName of Object.keys(pluginStore.record)) {
            promises.push((async () => {
                try {
                    await this.addPlugin(pluginStore.getAssets(packageName))
                } catch (error) {
                    console.error(error)
                    const message = error instanceof Error ? error.message : JSON.stringify(error)
                    // @ts-ignore
                    this.info[packageName] = {
                        packageName,
                        name: packageName,
                        description: Language.format(Language.locale, "PluginManager.loadFiledMessage", { message }),
                        author: Language.format(Language.locale, "PluginManager.loadFiled")
                    }
                }
            })())
        }
        this.loadPromise = Promise.all(promises).then()
    }

    public async addPlugin(this: this, assets: IPluginAssets): Promise<IPluginInfo> {
        const packageInfo: IPluginPackageInfo = JSON.parse(await assets.get("package.json"))
        const packageName = packageInfo.name
        const pluginInfo: IPluginInfo = {
            packageName,
            name: packageInfo.title ?? packageName,
            description: packageInfo.description,
            author: packageInfo.author
        }
        this.info[packageName] = pluginInfo
        this.assets[packageName] = assets
        this.changed.emit()
        return pluginInfo
    }

    public async addNewPlugin(this: this, assets: IPluginAssets): Promise<IPluginInfo> {
        const info = await this.addPlugin(assets)
        const { packageName } = info
        await this.loadPlugin(packageName)
        pluginStore.add(packageName)
        return info
    }

    public async loadPlugin(this: this, packageName: string, reload: boolean = false): Promise<void> {
        if (Object.hasOwn(this.loader, packageName) && !reload) {
            return
        }
        await this.getPluginLoader(packageName).load()
    }

    public async installPlugin(this: this, packageName: string): Promise<void> {
        let installing = this.installing[packageName]
        if (installing === undefined) {
            installing = install.call(this)
            this.installing[packageName] = installing
        }
        return installing
        async function install(this: PluginManager) {
            try {
                const { link } = (await axios.get("https://ccn.hopex.top/api/external/plugins", {
                    params: { custom_id: packageName }
                })).data.data
                const index: Record<string, string> = (await axios.get(link)).data
                const filesContent: Record<string, string> = {}
                for (const [path, url] of Object.entries(index)) {
                    filesContent[path] = await (await fetch(url)).text()
                }
                const pluginInfo = await this.addNewPlugin(new PluginLocalAssets({ packageName }, filesContent))
                dispatch(showCommonToastInfoAction({
                    visible: true,
                    type: "success",
                    message: Language.format(Language.locale, "PluginManager.installPluginSuccess", { name: pluginInfo.name })
                }))
            } catch (error) {
                console.error(error)
                const errorMessage = error instanceof Error ? error.message : JSON.stringify(error)
                dispatch(openConfirmDialogAction({
                    allowText: Language.format(Language.locale, "cloudDb.know"),
                    title: Language.format(Language.locale, "PluginManager.installPluginFailed"),
                    content: errorMessage + "\n\n详细错误信息请到浏览器控制台中查看",
                    cancelBtnVisible: false
                }))
                throw error
            }
            delete this.installing[packageName]
        }
    }

    public async ensureInstalled(this: this, packageName: string): Promise<void> {
        await this.loadPromise
        if (Object.hasOwn(this.info, packageName)) {
            return
        }
        if (!Object.hasOwn(this.installing, packageName)) {
            const { name, nickname, description } = (await axios.get("https://ccn.hopex.top/api/external/plugins", {
                params: { custom_id: packageName }
            })).data.data
            await installAskLimit(() => new Promise<void>((resolve, reject) => {
                dispatch(openConfirmDialogAction({
                    title: Language.format(Language.locale, "PluginManager.needsInstallTitle", { name }),
                    content: Language.format(Language.locale, "PluginManager.needsInstallContent", {
                        name, packageName, authorName: nickname, description
                    }),
                    allowText: Language.format(Language.locale, "PluginManager.confirmInstall"),
                    onConfirm() { resolve() },
                    onCancel() { reject(new Error("用户拒绝安装插件 " + packageName)) }
                }))
            }))
        }
        await this.installPlugin(packageName)
    }

    public async removePlugin(this: this, packageName: string): Promise<void> {
        const pluginInfo = this.getPluginInfo(packageName)
        if (Object.hasOwn(this.loader, packageName)) {
            REGISTRATIONS.Clean.getRecordSync()[packageName]?.()
            delete this.loader[packageName]
        }
        delete this.info[packageName]
        const assets = this.assets[packageName]
        delete this.assets[packageName]
        for (const registration of Object.values(REGISTRATIONS)) {
            ;(registration as any).unregister(packageName)
        }
        this.changed.emit()
        pluginStore.remove(packageName)
        await assets?.clean()
        dispatch(showCommonToastInfoAction({
            visible: true,
            type: "success",
            message: Language.format(Language.locale, "PluginManager.removePluginFinished", { name: pluginInfo.name })
        }))
    }

    public hasPlugin(this: this, packageName: string): boolean {
        return Object.hasOwn(this.info, packageName)
    }

    public getPluginInfoArray(this: this): IPluginInfo[] {
        return Object.values(this.info)
    }

    public getPluginInfo(this: this, packageName: string): IPluginInfo {
        const info = this.info[packageName]
        if (info === undefined) {
            throw new Error(`插件 ${packageName} 不存在`)
        }
        return info
    }

    public getPluginAssets(this: this, packageName: string): IPluginAssets {
        const assets = this.assets[packageName]
        if (assets === undefined) {
            throw new Error(`插件 ${packageName} 不存在`)
        }
        return assets
    }

    public getPluginLoader(this: this, packageName: string): PluginLoader {
        let loader = this.loader[packageName]
        if (loader === undefined) {
            loader = new PluginLoader(packageName, this.getPluginAssets(packageName))
            this.loader[packageName] = loader
        }
        return loader
    }
}

export const pluginManager = new PluginManager()
