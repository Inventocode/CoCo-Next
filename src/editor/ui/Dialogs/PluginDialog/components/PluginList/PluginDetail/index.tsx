import { memo, useEffect, useState, useRef } from "react"
import { useIntl } from "react-intl"
import { useDispatch } from "react-redux"

import { IPluginAssets, IPluginInfo, pluginManager } from "../../../../../../../shared/plugin"
import styles from "./styles.module.css"
import { showCommonToastInfoAction } from "../../../../../../redux/common/actions"

export interface IPluginDetailProps {
    info: IPluginInfo
    asset(): IPluginAssets
    shop?: string
}

export const PluginDetail = memo(({ info, asset, shop }: IPluginDetailProps) => {

    const dispatch = useDispatch()
    const { formatMessage } = useIntl()

    const [readme, setReadme] = useState(formatMessage({ id: "PluginDetail.readmeLoading" }))
    const [installed, setInstalled] = useState(pluginManager.hasPluginSync(info.packageName))
    const [installing, setInstalling] = useState(false)
    const readmeElementRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        function update() {
            setInstalled(pluginManager.hasPluginSync(info.packageName))
        }
        pluginManager.changed.on(update)
        return () => { pluginManager.changed.off(update) }
    }, [])

    useEffect(() => {
        setInstalled(pluginManager.hasPluginSync(info.packageName))
    }, [info])

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
            const marked = await import("marked")
            const renderer = new marked.Renderer()
            const linkRenderer = renderer.link
            renderer.link = (tokens) => {
                const html = linkRenderer.call(renderer, tokens)
                return html.replace(/^<a /, `<a target="_blank" `)
            }
            setReadme(await marked.parse(readmeText, { renderer }))
        } catch (error) {
            console.error(error)
            const message = error instanceof Error ? error.message : JSON.stringify(error)
            setReadme(formatMessage({ id: "PluginDetail.readmeLoadFailed" }, { message }))
        }
    })()}, [asset])

    async function handleInstall() {
        if (installing || shop === undefined) {
            return
        }
        setInstalling(true)
        try {
            await pluginManager.installPluginFromShop(shop, info)
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
                    {installed && <button onClick={() => {
                        pluginManager.removePlugin(info.packageName)
                        dispatch(showCommonToastInfoAction({
                            visible: true,
                            type: "success",
                            message: formatMessage({ id: "PluginManager.removePluginFinished" }, { name: info.name })
                        }))
                    }}>
                        {formatMessage({ id: "PluginDetail.remove" })}
                    </button>}
                    {/* <button>禁用</button> */}
                    {!installed && !installing && shop !== undefined && <button onClick={handleInstall}>
                        {formatMessage({ id: "PluginDetail.install" })}
                    </button>}
                    {installing && <button disabled>
                        {formatMessage({ id: "PluginDetail.installing" })}
                    </button>}
                </div>
            </div>
        </div>
        <iframe ref={readmeElementRef} className={styles.readme} sandbox="allow-popups allow-popups-to-escape-sandbox"></iframe>
    </div>
})
