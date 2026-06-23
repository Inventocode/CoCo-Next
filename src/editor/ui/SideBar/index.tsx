
import React, { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames"
import screenfull from "screenfull"

import { PlayBox } from "../components/PlayBox"
import { IconFont } from "../../../shared/ui/components"
import * as Actions from "../../redux/common/actions"
import { setHeaderVisibleAction } from "../../redux/common/actions"
import { useIsFullScreen } from "../../../shared/utils/ui/use-is-fullscreen"

import styles from "./styles.module.css"
import FullscreenIcon from "./icons/fullscreen.svg"
import ExitFullscreenIcon from "./icons/exit-fullscreen.svg"
import BlockIcon from "./icons/block.svg"

export const SideBar = memo(() => {

    const dispatch = useDispatch()

    const headerVisible = useSelector((state) => state.common.headerVisible)
    const stageVisible = useSelector((state) => state.common.stageVisible)
    const screenListVisible = useSelector((state) => state.common.screenListVisible)

    const isFullscreen = useIsFullScreen()

    return <div className={styles.sideBar}>
        <div
            className={classNames(styles.toggleHeader, styles.button, headerVisible && styles.overturn)}
            onClick={() => { dispatch(setHeaderVisibleAction(!headerVisible)) }}
        >
            <IconFont type="icon-arrow-down" />
        </div>
        <div className={styles.line} />
        <div
            className={classNames(styles.fullscreen, styles.button)}
            onClick={() => { screenfull.toggle() }}
        >
            <img src={isFullscreen ? ExitFullscreenIcon : FullscreenIcon} />
        </div>
        <div
            className={classNames(styles.toggleScreen, styles.button)}
            onClick={() => { dispatch(Actions.setScreenListVisibleAction(!screenListVisible)) }}
        >
            <IconFont type="icon-screen-manage" />
        </div>
        <div className={styles.padding} />
        <div className={classNames(styles.toggleStage, styles.item)} onClick={() => { dispatch(Actions.Yi(!stageVisible)) }}>
            <div className={classNames(styles.toggleStageButton, stageVisible && styles.active)}>
                <IconFont type="icon-screen" />
            </div>
            <div className={classNames(styles.toggleStageButton, !stageVisible && styles.active)}>
                <img src={BlockIcon} />
            </div>
        </div>
        <div className={styles.button}>
            <PlayBox showText={false} />
        </div>
    </div>
})
