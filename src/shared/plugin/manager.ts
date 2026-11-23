import { Signal } from "@soncodi/signal"
import axios from "axios"
import pLimit from "p-limit"

import * as Language from "../ui/language"
import { IPluginAssets, PluginBuiltInAssets, PluginLocalAssets } from "./assets"
import { PluginLoader } from "./loader"
import { REGISTRATIONS } from "./registration"
import { pluginStorage } from "./storage"
import { dispatch } from "../../editor/redux/store"
import { openConfirmDialogAction, showCommonToastInfoAction } from "../../editor/redux/common/actions"
import { IPluginInfo, IPluginInfoInShop, IPluginPermission } from "./interfaces"

interface IPluginPackageInfo {
    name: string
    title?: string
    icon?: string
    version?: string
    description?: string
    author: string
    permission?: IPluginPermission
}

const downloadLimit = pLimit(1)
const installAskLimit = pLimit(1)

export class PluginManager {

    public readonly info: Record<string, IPluginInfo>
    public readonly assets: Record<string, IPluginAssets>
    public readonly loader: Record<string, PluginLoader>
    public readonly permission: Record<string, IPluginPermission | undefined>

    private readonly loadingPromise: Promise<void>
    private readonly installing: Record<string, Promise<void>>

    public readonly changed: Signal<void>

    public constructor() {
        this.info = Object.create(null)
        this.assets = Object.create(null)
        this.loader = Object.create(null)
        this.permission = Object.create(null)
        this.installing = Object.create(null)
        this.changed = new Signal()
        const promises: Promise<void>[] = []
        for (const packageName of Object.keys(pluginStorage.record)) {
            promises.push((async () => {
                try {
                    await this.addPlugin(pluginStorage.getAssets(packageName))
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
        this.loadingPromise = Promise.all(promises).then()
    }

    public async addPlugin(this: this, assets: IPluginAssets, pluginInfo?: IPluginInfo): Promise<IPluginInfo> {
        if (pluginInfo === undefined) {
            pluginInfo = await this.loadPluginInfo(assets)
        }
        const { packageName } = pluginInfo
        this.info[packageName] = pluginInfo
        this.assets[packageName] = assets
        this.changed.emit()
        return pluginInfo
    }

    public async loadPluginInfo(this: this, assets: IPluginAssets): Promise<IPluginInfo> {
        const packageInfo: IPluginPackageInfo = JSON.parse(await assets.get("package.json"))
        const packageName = packageInfo.name
        this.permission[packageName] = packageInfo.permission
        return {
            packageName,
            version: packageInfo.version ?? "",
            name: packageInfo.title ?? packageName,
            icon: packageInfo.icon,
            description: packageInfo.description,
            author: packageInfo.author
        }
    }

    public async addNewPlugin(this: this, assets: IPluginAssets, pluginInfo?: IPluginInfo): Promise<IPluginInfo> {
        await this.loadingPromise
        const info = await this.addPlugin(assets, pluginInfo)
        const { packageName } = info
        await this.loadPlugin(packageName)
        pluginStorage.add(packageName)
        return info
    }

    public async loadPlugin(this: this, packageName: string, reload: boolean = false): Promise<void> {
        if (Object.hasOwn(this.loader, packageName) && !reload) {
            return
        }
        await (await this.getPluginLoader(packageName)).load()
    }

    public async installPluginFromShop(this: this, shop: string, packageName: string): Promise<void>
    public async installPluginFromShop(this: this, shop: string, pluginInfo: IPluginInfo): Promise<void>
    public async installPluginFromShop(this: this, shop: string, pluginInfo: IPluginInfoInShop): Promise<void>
    public async installPluginFromShop(this: this, shop: string, pluginInfo: string | IPluginInfo | IPluginInfoInShop): Promise<void> {
        const packageName = typeof pluginInfo === "string" ? pluginInfo : pluginInfo.packageName
        let installing = this.installing[packageName]
        if (installing === undefined) {
            installing = install.call(this)
            this.installing[packageName] = installing
        }
        return installing
        async function install(this: PluginManager) {
            try {
                await this.ensureInstalled(shop)
                const { link } =
                    typeof pluginInfo === "object" && "link" in pluginInfo ?
                    pluginInfo :
                    await (await REGISTRATIONS.PluginShopGet.get(shop))(packageName)
                const index: Record<string, string> = (await axios.get(link)).data
                const filesContent: Record<string, string> = {}
                await Promise.all(Object.entries(index).map(async ([path, url]) => {
                    await downloadLimit(async () => filesContent[path] = await (await fetch(url)).text())
                }))
                if (Object.hasOwn(this.info, packageName)) {
                    await this.removePlugin(packageName)
                }
                pluginInfo = await this.addNewPlugin(
                    new PluginLocalAssets({ packageName, shop }, filesContent),
                    typeof pluginInfo === "string" ? undefined : pluginInfo
                )
                dispatch(showCommonToastInfoAction({
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

    private async installBuiltinPlugin(this: this, assets: PluginBuiltInAssets, pluginInfo: IPluginInfo) {
        const { packageName } = pluginInfo
        let installing = this.installing[packageName]
        if (installing === undefined) {
            installing = install.call(this)
            this.installing[packageName] = installing
        }
        return installing
        async function install(this: PluginManager) {
            try {
                const filesContent = await assets.getAll()
                if (Object.hasOwn(this.info, packageName)) {
                    await this.removePlugin(packageName)
                }
                await this.addNewPlugin(
                    new PluginLocalAssets({ packageName, shop: "@oldsquaw-coco-next/plugin-shop-builtin" }, filesContent),
                    pluginInfo
                )
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

    public async ensureInstalled(this: this, packageName: string, shop = "@oldsquaw-coco-next/plugin-shop-ccn-community"): Promise<void> {
        await this.loadingPromise
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
                        shop: REGISTRATIONS.PluginShop.getRecordSync()[packageName]?.name ?? shop,
                        name, packageName, authorName: nickname, description
                    }),
                    allowText: Language.format(Language.locale, "PluginManager.confirmInstall"),
                    onConfirm() { resolve() },
                    onCancel() { reject(new Error("用户拒绝安装插件 " + packageName)) }
                }))
            }))
            await this.installPluginFromShop(shop, packageName)
        }
    }

    public async checkBuiltinPlugin(this: this, assets: PluginBuiltInAssets): Promise<void> {
        await this.loadingPromise
        const newestPluginInfo = await this.loadPluginInfo(assets)
        const { packageName } = newestPluginInfo
        if (process.env.NODE_ENV !== "development" && Object.hasOwn(this.info, packageName)) {
            const installedPluginInfo = this.info[packageName]!
            if (newestPluginInfo.version === installedPluginInfo.version) {
                return
            }
        }
        if (!Object.hasOwn(this.installing, packageName)) {
            await this.installBuiltinPlugin(assets, newestPluginInfo)
        }
    }

    public async removePlugin(this: this, packageName: string): Promise<void> {
        if (Object.hasOwn(this.loader, packageName)) {
            REGISTRATIONS.Clean.getRecordSync()[packageName]?.()
            delete this.loader[packageName]
        }
        delete this.info[packageName]
        delete this.permission[packageName]
        const assets = this.assets[packageName]
        delete this.assets[packageName]
        for (const registration of Object.values(REGISTRATIONS)) {
            ;(registration as any).unregister(packageName)
        }
        this.changed.emit()
        pluginStorage.remove(packageName)
        await assets?.clean?.()
    }

    public hasPluginSync(this: this, packageName: string): boolean {
        return Object.hasOwn(this.info, packageName)
    }

    public getPluginInfoArraySync(this: this): IPluginInfo[] {
        return Object.values(this.info)
    }

    public getPluginInfoSync(this: this, packageName: string): IPluginInfo {
        const info = this.info[packageName]
        if (info === undefined) {
            throw new Error(`插件 ${packageName} 不存在`)
        }
        return info
    }

    public async getPluginInfo(this: this, packageName: string): Promise<IPluginInfo> {
        await this.loadingPromise
        return this.getPluginInfoSync(packageName)
    }

    public getPluginAssetsSync(this: this, packageName: string): IPluginAssets {
        const assets = this.assets[packageName]
        if (assets === undefined) {
            throw new Error(`插件 ${packageName} 不存在`)
        }
        return assets
    }

    public async getPluginLoader(this: this, packageName: string): Promise<PluginLoader> {
        await this.loadingPromise
        let loader = this.loader[packageName]
        if (loader === undefined) {
            loader = new PluginLoader(
                packageName,
                this.getPluginAssetsSync(packageName),
                await this.getPluginPermission(packageName)
            )
            this.loader[packageName] = loader
        }
        return loader
    }

    public async getPluginPermission(this: this, packageName: string): Promise<IPluginPermission | undefined> {
        if (!Object.hasOwn(this.permission, packageName)) {
            await this.loadPluginInfo(this.getPluginAssetsSync(packageName))
        }
        return this.permission[packageName]
    }
}

export const pluginManager = new PluginManager()
