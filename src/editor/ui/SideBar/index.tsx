
import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import cn from "classnames"

import { dL } from "../../../../unrestored/shared/1571/2636/index__part-200"
import { IconFont } from "../../../shared/ui/components"
import * as Actions from "../../redux/common/actions"
import { setHeaderVisibleAction } from "../../redux/common/actions"

import styles from "./styles.module.css"
import BlockIcon from "./block-icon.svg"

export const SideBar = memo(() => {

    const dispatch = useDispatch()

    const headerVisible = useSelector((state) => state.common.headerVisible)
    const stageVisible = useSelector((state) => state.common.stageVisible)

    return <div className={styles.sideBar}>
        <div
            className={cn(styles.toggleHeader, styles.button, headerVisible && styles.overturn)}
            onClick={() => { dispatch(setHeaderVisibleAction(!headerVisible)) }}
        >
            <IconFont type="icon-arrow-down" />
        </div>
        <div className={styles.line} />
        <div className={styles.padding} />
        <div className={cn(styles.toggleStage, styles.item)} onClick={() => { dispatch(Actions.Yi(!stageVisible)) }}>
            <div className={cn(styles.toggleStageButton, stageVisible && styles.active)}>
                <IconFont type="icon-screen-manage" />
            </div>
            <div className={cn(styles.toggleStageButton, !stageVisible && styles.active)}>
                <img src={BlockIcon} />
            </div>
        </div>
        <div className={styles.button}>{React.createElement(dL)}</div>
    </div>
})
