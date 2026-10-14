import { memo, useRef } from "react"
import { useDispatch } from "react-redux"
import { useIntl } from "react-intl"

import { Button, Input } from "../../../../../shared/ui/components"
import { pluginManager, PluginURLAssets } from "../../../../../shared/plugin"
import { openConfirmDialogAction, showCommonToastInfoAction } from "../../../../redux/common/actions"
import styles from "./styles.module.css"

export const PluginDevelop = memo(() => {

    const { formatMessage } = useIntl()
    const dispatch = useDispatch()

    const pluginURLRef = useRef("")

    async function addPlugin() {
        try {
            const pluginInfo = await pluginManager.addNewPlugin(new PluginURLAssets({ baseURL: pluginURLRef.current }))
            await pluginManager.loadPlugin(pluginInfo.packageName)
            dispatch(showCommonToastInfoAction({
                visible: true,
                type: "success",
                message: formatMessage({ id: "PluginDevelop.addPluginSuccess" }, { name: pluginInfo.name })
            }))
        } catch (error) {
            console.error(error)
            const errorMessage = error instanceof Error ? error.message : JSON.stringify(error)
            dispatch(openConfirmDialogAction({
                allowText: formatMessage({ id: "cloudDb.know" }),
                title: formatMessage({ id: "PluginDevelop.addPluginFailed" }),
                content: errorMessage + "\n\n详细错误信息请到浏览器控制台中查看",
                cancelBtnVisible: false
            }))
        }
    }

    return <div className={styles.container}>
        <div className={styles.addPluginLine}>
            <Input
                placeholder={formatMessage({ id: "PluginDevelop.inputURL" })}
                onChange={(value) => { pluginURLRef.current = value }}
            ></Input>
            <Button shape="square" onClick={addPlugin}>{formatMessage({ id: "PluginDevelop.addPlugin" })}</Button>
        </div>
    </div>
})
