import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useIntl } from "react-intl"
import classNames from "classnames"

import { Dialog } from "../../../../shared/ui/components"
import { closePluginDialogAction } from "../../../redux/common/actions"
import styles from "./styles.module.css"
import { InstalledPlugin } from "./InstalledPlugin"
import { PluginShop } from "./PluginShop"
import { PluginDevelop } from "./PluginDevelop"
import { PluginBuiltInAssets, pluginManager, REGISTRATIONS } from "../../../../shared/plugin"
import { BuiltinPlugins } from "../../../../shared/plugin/builtin"

enum ETabItem {
    INSTALLED = "INSTALLED",
    SHOP = "SHOP",
    SETTINGS = "SETTINGS",
    DEVELOP = "DEVELOP"
}

export const PluginDialog = memo(() => {

    const { formatMessage } = useIntl()
    const dispatch = useDispatch()

    const [selected, setSelected] = useState<ETabItem>(ETabItem.INSTALLED)

    const { visible } = useSelector((state) => state.common.pluginDialog)

    useEffect(() => {
        Object.assign(globalThis, { importScripts() {} })
        for (const index of BuiltinPlugins) {
            pluginManager.checkBuiltinPlugin(new PluginBuiltInAssets({ index }))
        }
    }, [])

    useEffect(() => {
        REGISTRATIONS.EditorStart.call()
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const installPluginString = params.get("installPlugin")
        if (installPluginString === null) {
            return
        }
        const installPlugin = JSON.parse(installPluginString)
        params.delete("installPlugin")
        const url = new URL(location.href)
        url.search = params.toString()
        history.replaceState(null, "", url)
        const { packageName, shop } = installPlugin
        pluginManager.ensureInstalled(packageName, shop)
    }, [])

    return <Dialog
        visible={visible}
        className={styles.container}
        onClose={() => { dispatch(closePluginDialogAction()) }}
    >
        <div className={styles.wrapper}>
            <header className={styles.header}>
                {Object.values(ETabItem).map((tabItem) =>
                    <div
                        key={tabItem}
                        className={classNames(styles.tabItem, selected === tabItem && styles.selected)}
                        onClick={() => { setSelected(tabItem) }}
                    >{formatMessage({ id: "PluginDialog." + tabItem.toLowerCase() })}</div>
                )}
            </header>
            <div className={styles.content}>
                {selected === ETabItem.INSTALLED && <InstalledPlugin />}
                {selected === ETabItem.SHOP && <PluginShop />}
                {selected === ETabItem.DEVELOP && <PluginDevelop />}
            </div>
        </div>
    </Dialog>
})
