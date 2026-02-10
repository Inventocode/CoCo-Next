/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-205
 */

import * as React from "react"

import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import { CoCoDialog, IconFont } from "../../../../shared/ui/components"
import { useDispatch, useSelector } from "react-redux"
import styles from "../../../../../unrestored/shared/1571/2636/1062"

var ML = React.memo(() => {
  var e = useDispatch()
  var blockImageDialogInfo = useSelector(function (e) {
    return e.common.blockImageDialogInfo
  })
  var /* [auto-meaningful-name] */blockImageDialogInfo$visible = blockImageDialogInfo.visible
  var /* [auto-meaningful-name] */blockImageDialogInfo$imgSrc = blockImageDialogInfo.imgSrc
  return (
    <CoCoDialog
      visible={blockImageDialogInfo$visible}
      className={styles.blockImageDialog}
      onClose={() => {
        e($$_$$_$$_redux_common_actions.bi(false, ""))
      }}
    >
      <div className={styles.blockImageWrap}>
        <img src={blockImageDialogInfo$imgSrc} alt="" />
      </div>
      <div
        className={styles.btnDownload}
        onClick={() => {
          var e = document.createElement("a")
          e.href = blockImageDialogInfo$imgSrc
          e.download = "block.png"
          e.click()
        }}
      >
        <IconFont type="icon-download-apk" />
      </div>
    </CoCoDialog>
  )
})
export { ML }
