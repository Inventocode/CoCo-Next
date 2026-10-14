import { memo, useEffect, useState } from "react"

import { pluginManager } from "../../../../../shared/plugin"
import { IPluginListPluginsProps, PluginList } from "../components/PluginList"

export const InstalledPlugin = memo(() => {

    const [plugins, setPlugins] = useState(getPlugins())

    useEffect(() => {
        function update() {
            setPlugins(getPlugins())
        }
        pluginManager.changed.on(update)
        return () => { pluginManager.changed.off(update) }
    }, [])

    return <PluginList plugins={plugins} />
})

function getPlugins(): IPluginListPluginsProps[] {
    return Object.values(pluginManager.info)
        .map((info) => ({
            info, asset: () => pluginManager.getPluginAssets(info.packageName)
        }))
}
