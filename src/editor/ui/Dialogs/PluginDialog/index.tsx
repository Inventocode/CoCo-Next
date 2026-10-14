import { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useIntl } from "react-intl"
import classNames from "classnames"

import { Dialog } from "../../../../shared/ui/components"
import { closePluginDialogAction } from "../../../redux/common/actions"
import styles from "./styles.module.css"
import { InstalledPlugin } from "./InstalledPlugin"
import { PluginShop } from "./PluginShop"
import { PluginDevelop } from "./PluginDevelop"

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
