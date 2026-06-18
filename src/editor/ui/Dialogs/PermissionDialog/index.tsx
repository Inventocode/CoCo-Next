/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-219
 */

import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from "../../../redux/common/actions"
import { Button, Dialog } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useSelector, useDispatch } from "react-redux"
import React, { memo } from "react"
import styles from "../../../../../unrestored/shared/1571/2636/816"

export const PermissionDialog = memo(() => {
  const permissionDialogInfo = useSelector((state) => state.common.permissionDialogInfo)
  var /* [auto-meaningful-name] */permissionDialogInfo$visible = permissionDialogInfo.visible
  var /* [auto-meaningful-name] */permissionDialogInfo$type = permissionDialogInfo.type
  var /* [auto-meaningful-name] */permissionDialogInfo$onConfirm = permissionDialogInfo.onConfirm
  var /* [auto-meaningful-name] */permissionDialogInfo$onDeny = permissionDialogInfo.onDeny
  var /* [auto-meaningful-name] */permissionDialogInfo$className = permissionDialogInfo.className
  var /* [auto-meaningful-name] */permissionDialogInfo$isDangerous = permissionDialogInfo.isDangerous
  var /* [auto-meaningful-name] */permissionDialogInfo$denyText = permissionDialogInfo.denyText
  var c = undefined === permissionDialogInfo$denyText ? "拒绝" : permissionDialogInfo$denyText
  var /* [auto-meaningful-name] */permissionDialogInfo$allowText = permissionDialogInfo.allowText
  var u = undefined === permissionDialogInfo$allowText ? "同意" : permissionDialogInfo$allowText
  const dispatch = useDispatch()
  let imgUrl = "https://static.bcmcdn.com/coco/image/permission_camera.png"
  let tipText = "需要开启相机权限才能进行拍照或摄像哦"
  switch (permissionDialogInfo$type) {
    case Module_18.e.camera:
      break
    case Module_18.e.microphone:
      imgUrl = "https://static.bcmcdn.com/coco/image/permission_microphone.png"
      tipText = "需要开启麦克风权限能使用环境音量"
  }
  return <Dialog
    visible={permissionDialogInfo$visible}
    showCloseButton={false}
    withPortal={true}
    maskClosable={false}
    className={classNames(styles.dialog, permissionDialogInfo$className)}
  >
    <img className={styles.permissionImage} src={imgUrl} alt="" />
    {<div
      className={styles.content}
    >
      <h3>授权提示</h3>
      <span>{tipText}</span>
      {<div className={classNames(styles.dialogButtons)}>
        <Button
          onClick={() => {
            if (permissionDialogInfo$onDeny) {
              permissionDialogInfo$onDeny()
            }
            dispatch(Redux_common_actions.Ej({
              type: permissionDialogInfo$type,
              visible: false
            }))
          }}
          className={styles.denyButton}
        >{c}</Button>
        {<Button
          type="primary"
          danger={permissionDialogInfo$isDangerous}
          onClick={function () {
            if (permissionDialogInfo$onConfirm) {
              permissionDialogInfo$onConfirm()
            }
            dispatch(Redux_common_actions.Ej({
              type: permissionDialogInfo$type,
              visible: false
            }))
          }}
        >
          {u}
        </Button>}
      </div>}
    </div>}
  </Dialog>
})
