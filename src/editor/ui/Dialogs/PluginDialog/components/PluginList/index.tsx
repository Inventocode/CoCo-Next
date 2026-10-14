import { memo, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { useIntl } from "react-intl"

import { IPluginAssets, IPluginInfo } from "../../../../../../shared/plugin"
import styles from "./styles.module.css"
import { PluginItem } from "./PluginItem"
import { PluginDetail } from "./PluginDetail"
import { useOffsetHeight } from "../../../../../../shared/ui/hooks/use-offset-height"

export interface IPluginListProps {
    plugins: IPluginListPluginsProps[]
    onInsufficient?(): void
}

export interface IPluginListPluginsProps {
    info: IPluginInfo
    asset(): IPluginAssets
}

export const PluginList = memo(({ plugins, onInsufficient }: IPluginListProps) => {

    const { formatMessage } = useIntl()

    const [selected, setSelected] = useState<IPluginListPluginsProps | null>(null)
    const listElementRef = useRef<HTMLDivElement>(null)

    const listElementHeight = useOffsetHeight(listElementRef)

    useEffect(() => {
        checkInsufficient()
    }, [listElementHeight])

    function checkInsufficient() {
        const listElement = listElementRef.current
        if (listElement === null) {
            return
        }
        if (listElement.scrollHeight - listElement.scrollTop - listElementHeight < 256) {
            onInsufficient?.()
        }
    }

    return <div className={styles.wrapper}>
        <div
            ref={listElementRef}
            className={styles.left}
            onClick={() => { setSelected(null) }}
            onScroll={checkInsufficient}
        >
            {plugins.length === 0 && <div className={styles.tip}>{formatMessage({ id: "PluginList.noPlugin" })}</div>}
            {/* {list.length !== 0 && <div className={styles.search}>
                <Input placeholder={formatMessage({ id: "PluginList.search" })} />
            </div>} */}
            {plugins.length !== 0 && plugins.map((plugin) =>
                <div
                    key={plugin.info.packageName}
                    className={classNames(styles.pluginItem, selected === plugin && styles.selected)}
                    onClick={(event) => {
                        setSelected(selected === plugin ? null : plugin)
                        event.stopPropagation()
                    }}
                >
                    <PluginItem info={plugin.info} />
                </div>
            )}
        </div>
        <div className={styles.right}>
            {selected === null && <div className={styles.tip}>{formatMessage({ id: "PluginList.notSelected" })}</div>}
            {selected !== null && <PluginDetail {...selected} />}
        </div>
    </div>
})
