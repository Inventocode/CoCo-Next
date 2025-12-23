/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-205
 */

import * as React from "react"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_events_main_messagesWrapper from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1062 from "../../../../../unrestored/shared/1571/2636/1062"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10621 from "../../../../../unrestored/shared/1571/2636/1062"
var ML = React.memo(() => {
  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var blockImageDialogInfo = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.blockImageDialogInfo
  })
  var /* [auto-meaningful-name] */blockImageDialogInfo$visible = blockImageDialogInfo.visible
  var /* [auto-meaningful-name] */blockImageDialogInfo$imgSrc = blockImageDialogInfo.imgSrc
  return (
    <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f
      visible={blockImageDialogInfo$visible}
      className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10621.blockImageDialog}
      onClose={() => {
        e($$_$$_$$_events_main_messagesWrapper.bi(false, ""))
      }}
    >
      <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10621.blockImageWrap}>
        <img src={blockImageDialogInfo$imgSrc} alt="" />
      </div>
      <div
        className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10621.btnDownload}
        onClick={() => {
          var e = document.createElement("a")
          e.href = blockImageDialogInfo$imgSrc
          e.download = "block.png"
          e.click()
        }}
      >
        <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-download-apk" />
      </div>
    </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f>
  )
})
export { ML }
