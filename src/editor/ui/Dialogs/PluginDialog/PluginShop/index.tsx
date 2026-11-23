import { memo, useEffect, useRef, useState } from "react"

import classNames from "classnames"
import { useIntl } from "react-intl"

import { Button } from "../../../../../shared/ui/components"
import styles from "./styles.module.css"
import { PluginList, IPluginListPluginsProps } from "../components/PluginList"
import { PluginOnlineAssets, REGISTRATIONS } from "../../../../../shared/plugin"
import { lazyLoad } from "../../../../../shared/utils/lazy-load"
import { usePluginRecord } from "../../../../../shared/ui/hooks/use-plugin-record"
import { dispatch } from "../../../../redux/store"
import { showCommonToastInfoAction } from "../../../../redux/common/actions"
import { onPluginShopLoad } from "../../../../../shared/packages/plugin-sdk/src"

const PAGE_SIZE = 20

export const PluginShop = memo(() => {

    const { formatMessage } = useIntl()

    const shopRecord = usePluginRecord(REGISTRATIONS.PluginShop)
    // React 莫名其妙地会调用状态函数，只好把状态设为普通对象来绕过这个奇葩的 BUG
    const [loadPlugin, setLoadPlugin] = useState<{ value: Parameters<typeof onPluginShopLoad>[0] }>()

    const [selectedShop, setSelectedShop] = useState("")

    const [customOptions, setCustomOptions] = useState<Record<string, unknown>>({ sort: "latest" })
    const [plugins, setPlugins] = useState<IPluginListPluginsProps[]>([])
    const totalPages = useRef(Infinity)
    const loadedPages = useRef(0)
    const [loading, setLoading] = useState(false)
    const loadingRef = useRef(false)
    const [requireLoading, setRequireLoading] = useState(false)

    function reset() {
        totalPages.current = Infinity
        loadedPages.current = 0
        setPlugins([])
    }

    useEffect(() => {
        if (selectedShop !== "") {
            return
        }
        setSelectedShop(Object.keys(shopRecord)[0] ?? "")
    }, [selectedShop, shopRecord])

    useEffect(() => {
        setLoadPlugin(undefined)
        if (selectedShop !== "") {
            ;(async () => { setLoadPlugin({ value: await REGISTRATIONS.PluginShopLoad.get(selectedShop) }) })()
        }
        const customOptions: Record<string, unknown> = {}
        for (const { key, options } of shopRecord[selectedShop]?.options ?? []) {
            customOptions[key] = options[0]?.value
        }
        setCustomOptions(customOptions)
    }, [selectedShop])

    useEffect(() => {
        reset()
    }, [selectedShop, customOptions])

    useEffect(() => {
        if (requireLoading) {
            loadMore()
        }
    }, [requireLoading, loading, loadPlugin])

    function showInNewTab() {
        open(shopRecord[selectedShop]!.externalURL)
    }

    async function loadMore() {
        if (loadedPages.current >= totalPages.current) {
            setRequireLoading(false)
            return
        }
        if (loadingRef.current || loadPlugin === undefined) {
            setRequireLoading(true)
            return
        }
        setRequireLoading(false)
        loadingRef.current = true
        setLoading(true)
        try {
            const data = await loadPlugin.value(Object.assign({ page: loadedPages.current + 1, pageSize: PAGE_SIZE }, customOptions))
            totalPages.current = data.totalPages
            loadedPages.current++
            setPlugins([
                ...plugins,
                ...data.list.map((plugin): IPluginListPluginsProps => ({
                    info: plugin,
                    asset: lazyLoad(() => new PluginOnlineAssets({ indexURL: plugin.link }))
                }))
            ])
        } catch (error) {
            console.error(error)
            const errorMessage = error instanceof Error ? error.message : JSON.stringify(error)
            dispatch(showCommonToastInfoAction({
                type: "error",
                message: formatMessage({ id: "PluginShop.loadListFailed" }, { message: errorMessage })
            }))
        }
        loadingRef.current = false
        setLoading(false)
    }

    return <div className={styles.wrapper}>
        <div className={styles.toolbar}>
            {shopRecord[selectedShop]?.externalURL && <Button className={styles.showInExternalPage} shape="square" onClick={showInNewTab}>{formatMessage({ id: "PluginShop.showInNewTab" })}</Button>}
            <div className={styles.pluginSource}>
                插件源
                <div className={styles.shopList}>{Object.entries(shopRecord).map(([key, shop]) => (
                    <div
                        key={key}
                        className={classNames(styles.shopItem, key === selectedShop && styles.selected)}
                        onClick={() => { setSelectedShop(key) }}
                    >{shop.name}</div>
                ))}
                </div>
            </div>
            <div className={styles.shopOptions}>{shopRecord[selectedShop]?.options?.map(({ key, label, options }) =>
                <div key={key} className={styles.shopOption}>
                    {label}
                    {options.map((option) =>
                        <div
                            key={option.value}
                            className={classNames(styles.shopOptionItem, customOptions[key] === option.value && styles.selected)}
                            onClick={() => { setCustomOptions({ ...customOptions, [key]: option.value }) }}
                        >{option.label}</div>
                    )}
                </div>
            )}</div>
        </div>
        <div className={styles.pluginList}>
            <PluginList plugins={plugins} onInsufficient={loadMore} shop={selectedShop} loading={loading} />
        </div>
    </div>
})
