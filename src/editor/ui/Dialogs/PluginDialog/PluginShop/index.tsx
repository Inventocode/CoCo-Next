import { memo, useRef, useState } from "react"

import classNames from "classnames"
import { useIntl } from "react-intl"
import axios from "axios"

import { Button } from "../../../../../shared/ui/components"
import styles from "./styles.module.css"
import { PluginList, IPluginListPluginsProps } from "../components/PluginList"
import { PluginOnlineAssets } from "../../../../../shared/plugin"
import { lazyLoad } from "../../../../../shared/utils/lazy-load"

type APIPluginType = "coco-next-widget" | "coco-next-plugin"
type APIUserGroup = "normal" | "banned" | "moderator" | "admin"
interface APIPluginInfo {
    id: number
    custom_id: string | null
    name: string
    type: APIPluginType
    link: string
    icon_url: string
    description: string
    user_id: number
    views: number
    is_featured: number
    status: "published"
    created_at: string
    nickname: string
    avatar_url: string
    user_group:  APIUserGroup
    workshop: {
        id: number
        name: string
    } | null
}

enum ESort {
    LATEST = "latest",
    VIEWS = "views"
}

const PAGE_SIZE = 20

export const PluginShop = memo(() => {

    const { formatMessage } = useIntl()

    const [sort, setSort] = useState(ESort.LATEST)
    const [plugins, setPlugins] = useState<IPluginListPluginsProps[]>([])
    const totalPages = useRef(Infinity)
    const loadedPages = useRef(0)
    const loading = useRef(false)

    function showInNewTab() {
        open("https://ccn.hopex.top/#/plugins")
    }

    async function loadMore() {
        if (loading.current || loadedPages.current >= totalPages.current) {
            return
        }
        loading.current = true
        const { data } = (await axios.get("https://ccn.hopex.top/api/external/plugins", {
            params: {
                page: loadedPages.current + 1,
                page_size: PAGE_SIZE,
                sort
            }
        })).data
        totalPages.current = data.total_pages
        loadedPages.current++
        setPlugins([
            ...plugins,
            ...(data.list as APIPluginInfo[])
                .filter((plugin) => plugin.type === "coco-next-plugin")
                .map((plugin): IPluginListPluginsProps => ({
                    info: {
                        packageName: plugin.custom_id!,
                        name: plugin.name,
                        icon: plugin.icon_url,
                        description: plugin.description,
                        author: plugin.nickname
                    },
                    asset: lazyLoad(() => new PluginOnlineAssets({ indexURL: plugin.link }))
                }))
        ])
        loading.current = false
    }

    return <div className={styles.wrapper}>
        <div className={styles.toolbar}>
            <div className={styles.sort}>
                <div
                    className={classNames(styles.sortItem, sort === ESort.LATEST && styles.selected)}
                    onClick={() => setSort(ESort.LATEST)}
                >{formatMessage({ id: "PluginShop.latest" })}</div>
                <div
                    className={classNames(styles.sortItem, sort === ESort.VIEWS && styles.selected)}
                    onClick={() => setSort(ESort.VIEWS)}
                >{formatMessage({ id: "PluginShop.views" })}</div>
            </div>
            <Button shape="square" onClick={showInNewTab}>{formatMessage({ id: "PluginShop.showInNewTab" })}</Button>
        </div>
        <div className={styles.pluginList}>
            <PluginList plugins={plugins} onInsufficient={loadMore} />
        </div>
    </div>
})
