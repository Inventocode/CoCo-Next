/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-200
 */

import { XM } from "../../../../../unrestored/shared/1571/2636/index__part-198"
import { cL as Menu } from "../../../../../unrestored/shared/1571/2636/index__part-199"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import headerStyles from "../../Header/styles.module.css"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as CommonActions from "../../../redux/common/actions"
import { asyncPlayProjectAction, promisify, resetDataWatchValueAction, setStartCurrentScreenAction, stopPlayingProjectAction } from "../../../redux/common/actions"
import * as Components from "../../../../shared/ui/components"
import { IconFont } from "../../../../shared/ui/components"
import classNames from "classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector, batch } from "react-redux"
import React, { useState, useEffect, memo, useRef } from "react"
import styles from "./style/styles.module.css"

// [CoCo Next] 侧栏中的运行按钮不显示文本
export interface IPlayBoxProps {
  showText?: boolean
}

export const PlayBox = React.memo(({ showText = true }: IPlayBoxProps) => {

  const { formatMessage } = Module_710.a()
  const dispatch = useDispatch()

  // [CoCo Next]
  // const [startCurrentScreen, setStartCurrentScreen] = useState(true)
  const startCurrentScreen = useSelector((state) => state.common.startCurrentScreen)
  var playing = useSelector((state) => state.project.playing)
  var screens = useSelector((state) => state.project.screens)

  useEffect(() => {
    if (screens.size === 1) {
      dispatch(setStartCurrentScreenAction(true))
    }
  }, [screens])

  return <div className={styles.playBox}>
    <button
      className={classNames(
        styles.playButton,
        showText && screens.size > 1 && styles.borderLeft,
        /* [CoCo Next] 侧栏中的运行按钮不显示文本 */!showText && styles.noText
      )}
      onClick={() => {
        if (playing) {
          dispatch(stopPlayingProjectAction())
          dispatch(resetDataWatchValueAction())
        } else {
          promisify(dispatch, asyncPlayProjectAction(startCurrentScreen))
        }
      }}
    >
      {playing ? <>
        {/* [CoCo Next] 侧栏中的运行按钮不显示文本 */}
        <IconFont type="icon-stop" />{showText && formatMessage({ id: "stop" })}
      </> : <>
        <IconFont type={startCurrentScreen ? "icon-start" : "icon-start-first-screen"} />
        {/* [CoCo Next] 侧栏中的运行按钮不显示文本 */}
        {showText && formatMessage({ id: "play" })}
      </>}
    </button>
    {showText && screens.size > 1 && <XM
      overlayClassName={styles.playMenu}
      placement="bottomLeft"
      overlay={<Menu
        onClick={(event) => {
          switch (event.key) {
            case "START_FIRST_SCREEN":
              dispatch(setStartCurrentScreenAction(false))
              break
            case "START_CURRENT_SCREEN":
              dispatch(setStartCurrentScreenAction(true))
              break
          }
        }}
      >
        <Menu.Item key="START_CURRENT_SCREEN">
          <IconFont type="icon-start" className={styles.menuIcon} />
          <span className={styles.menuText}>{formatMessage({ id: "playCurrentScreen" })}</span>
        </Menu.Item>
        <Menu.Item key="START_FIRST_SCREEN">
          <IconFont type="icon-start-first-screen" className={styles.menuIcon} />
          <span className={styles.menuText}>{formatMessage({ id: "playFirstScreen" })}</span>
        </Menu.Item>
      </Menu>}
    >
      <div className={styles.playType}><IconFont type="icon-dropdown-down" /></div>
    </XM>}
  </div>
})

var pL = memo(function (e) {
  var t = useSelector(function (e) {
    return e.project.id
  })
  var n = useSelector(function (e) {
    return e.project.title
  })
  var r = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var o = useRef(null)
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var a = useDispatch()
  var s = useState(false)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(n)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  return <Module_748.a
    placement="bottomLeft"
    title={l ? m : n}
    trigger={["hover", "click"]}
  >
    {<div
      className={headerStyles.projectTitleWrapper}
    >
      {<Components.k
        defaultValue={n}
        dependency={n}
        disabled={!r || e.readonly}
        isTrimmed={true}
        className={headerStyles.projectTitle}
        placeholder={Module_710$a$formatMessage({
          id: "projectTitlePlaceholder"
        })}
        rules={[
          {
            rule: Module_53.y
          }
        ]}
        maxLength={20}
        onChange={function (e) {
          u(true)
          g(e)
        }}
        onBlur={function (e, r) {
          if (e) {
            batch(function () {
              a(CommonActions.Bf(e))
              if (n !== e) {
                Module_141.a("EditWorkName", {
                  workId: t,
                  workName: e
                })
              }
            })
          } else {
            a(CommonActions.mj({
              message: Module_710$a$formatMessage({
                id: "isEmptyProjectTitle"
              }),
              showCloseIcon: false
            }))
          }
          r.target.value = e || n
          u(false)
        }}
        onFocus={function (e) {
          e.target.selectionStart = e.target.selectionEnd = e.target.value.length
          e.target.select()
        }}
        ref={o}
        after={<span
          onClick={function () {
            if (null === o || undefined === o ? undefined : o.current) {
              o.current.focus()
            }
          }}
        >
          {<IconFont
            type="icon-edit"
            className={headerStyles.editIcon}
          />}
        </span>}
      />}
    </div>}
  </Module_748.a>
})
export { pL }
