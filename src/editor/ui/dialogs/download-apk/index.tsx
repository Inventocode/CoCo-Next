/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-205
 */

import * as React from "react"

import * as te from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$_1062 from "../../../../../unrestored/shared/1571/2636/1062"
import /* [auto-meaningful-name] */_$_ from "../../../../../unrestored/shared/1571/2636/1062"
var ML = React.memo(() => {
  var e = $_16_index.d()
  var blockImageDialogInfo = $_16_index.e(function (e) {
    return e.common.blockImageDialogInfo
  })
  var /* [auto-meaningful-name] */t$visible = blockImageDialogInfo.visible
  var /* [auto-meaningful-name] */t$imgSrc = blockImageDialogInfo.imgSrc
  return (
    <$_13_index.f
      visible={t$visible}
      className={_$_.blockImageDialog}
      onClose={() => {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.bi(false, ""))
      }}
    >
      <div className={_$_.blockImageWrap}>
        <img src={t$imgSrc} alt="" />
      </div>
      <div
        className={_$_.btnDownload}
        onClick={() => {
          var e = document.createElement("a")
          e.href = t$imgSrc
          e.download = "block.png"
          e.click()
        }}
      >
        <$_13_index.j type="icon-download-apk" />
      </div>
    </$_13_index.f>
  )
})
export { ML }
