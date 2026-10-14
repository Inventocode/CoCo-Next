import { memo, useEffect, useState, useRef } from "react"
import { useIntl } from "react-intl"

import { IPluginAssets, IPluginInfo, pluginManager } from "../../../../../../../shared/plugin"
import styles from "./styles.module.css"

export interface IPluginDetailProps {
    info: IPluginInfo
    asset(): IPluginAssets
}

export const PluginDetail = memo(({ info, asset }: IPluginDetailProps) => {

    const { formatMessage } = useIntl()

    const [readme, setReadme] = useState(formatMessage({ id: "PluginDetail.readmeLoading" }))
    const [installed, setInstalled] = useState(pluginManager.hasPlugin(info.packageName))
    const [installing, setInstalling] = useState(false)
    const readmeElementRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        function update() {
            setInstalled(pluginManager.hasPlugin(info.packageName))
        }
        pluginManager.changed.on(update)
        return () => { pluginManager.changed.off(update) }
    }, [])

    useEffect(() => {
        const readmeElement = readmeElementRef.current
        if (readmeElement === null) {
            return
        }
        readmeElement.srcdoc = readme
    }, [readme])

    useEffect(() => {(async () => {
        try {
            setReadme(formatMessage({ id: "PluginDetail.readmeLoading" }))
            const readmeText = await asset().get("README.md")
            setReadme(await (await import("marked")).parse(readmeText))
        } catch (error) {
            console.error(error)
            const message = error instanceof Error ? error.message : JSON.stringify(error)
            setReadme(formatMessage({ id: "PluginDetail.readmeLoadFailed" }, { message }))
        }
    })()}, [asset])

    async function handleInstall() {
        if (installing) {
            return
        }
        setInstalling(true)
        try {
            await pluginManager.installPlugin(info.packageName)
        } catch (__ignore) {}
        setInstalling(false)
    }

    return <div className={styles.wrapper}>
        <div className={styles.info}>
            <div className={styles.icon} style={{ backgroundImage: `url(${info.icon || "/favicon.svg"})` }} />
            <div className={styles.infoRight}>
                <h3>{info.name}</h3>
                <p>{info.author} | {info.packageName}</p>
                <p>{info.description}</p>
                <div className={styles.buttons}>
                    {installed && <button onClick={() => { pluginManager.removePlugin(info.packageName) }}>
                        {formatMessage({ id: "PluginDetail.remove" })}
                    </button>}
                    {/* <button>禁用</button> */}
                    {!installed && !installing && <button onClick={handleInstall}>
                        {formatMessage({ id: "PluginDetail.install" })}
                    </button>}
                    {installing && <button disabled>
                        {formatMessage({ id: "PluginDetail.installing" })}
                    </button>}
                </div>
            </div>
        </div>
        <iframe ref={readmeElementRef} className={styles.readme} sandbox=""></iframe>
    </div>
})
