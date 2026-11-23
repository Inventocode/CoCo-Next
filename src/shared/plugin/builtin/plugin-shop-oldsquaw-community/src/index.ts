import axios from "axios"

import { onPluginShopGet, onPluginShopLoad, registerPluginShop } from "@oldsquaw-coco-next/plugin-sdk"

declare module "@oldsquaw-coco-next/plugin-sdk" {
    interface PluginShopLoadCustomParams {
        sort: "latest" | "views"
    }
}

type APIPluginType = "coco-next-widget" | "coco-next-plugin"
type APIUserGroup = "normal" | "banned" | "moderator" | "admin"
interface APIPluginInfo {
    id: number
    custom_id: string | null
    version: string
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

registerPluginShop({
    name: "Oldsquaw 社区 (CCN 社区代理)",
    externalURL: "https://oc.slightning.site/plugin",
    options: [
        {
            key: "sort",
            options: [
                { label: "最新", value: "latest" },
                { label: "最热", value: "views" }
            ]
        }
    ]
})

onPluginShopLoad(async ({ page, pageSize, sort }) => {
    const { data } = (await axios.get("https://oc.slightning.site/api/plugins", {
        params: {
            page,
            page_size: pageSize,
            sort
        }
    })).data
    return {
        list: (data.list as APIPluginInfo[])
            .filter((plugin) => plugin.type === "coco-next-plugin")
            .map((plugin) => ({
                packageName: plugin.custom_id!,
                version: plugin.version,
                name: plugin.name,
                icon: plugin.icon_url,
                description: plugin.description,
                author: plugin.nickname,
                link: plugin.link
            })),
        totalPages: data.total_pages
    }
})

onPluginShopGet(async (packageName) => {
    const { version, name, icon_url: icon, description, nickname: author, link } =
        (await axios.get("https://oc.slightning.site/api/plugins", { params: { custom_id: packageName } })).data.data
    return { packageName, version, name, icon, description, author, link }
})
