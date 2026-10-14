import { memo } from "react"

import { IPluginInfo } from "../../../../../../../shared/plugin"
import styles from "./styles.module.css"

export interface IPluginItemProps {
    info: IPluginInfo
}

export const PluginItem = memo(({ info }: IPluginItemProps) => {
    return <div className={styles.wrapper}>
        <div className={styles.icon} style={{ backgroundImage: `url(${info.icon || "/favicon.svg"})` }} />
        <div className={styles.textArea}>
            <h3 className={styles.name}>{info.name}</h3>
            <div className={styles.description}>{info.description ?? ""}</div>
        </div>
    </div>
})
