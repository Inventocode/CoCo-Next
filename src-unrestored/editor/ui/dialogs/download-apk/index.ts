/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-205
 */

"use strict"

import * as te from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1062 from "../../../../../unrestored/shared/1571/2636/1062"
import /* [auto-meaningful-name] */_$_ from "../../../../../unrestored/shared/1571/2636/1062"
var ML = _React.memo(function () {
  var e = $_16_index.d()
  var t = $_16_index.e(function (e) {
    return e.common.blockImageDialogInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$imgSrc = t.imgSrc
  return React.createElement($_13_index.f, {
    visible: t$visible,
    className: _$_.blockImageDialog,
    onClose: function () {
      e($$_$$_$$_$$_src_shared_events_messagesWrapper.bi(false, ""))
    }
  }, React.createElement("div", {
    className: _$_.blockImageWrap
  }, React.createElement("img", {
    src: t$imgSrc,
    alt: ""
  })), React.createElement("div", {
    className: _$_.btnDownload,
    onClick: function () {
      var e = document.createElement("a")
      e.href = t$imgSrc
      e.download = "block.png"
      e.click()
    }
  }, React.createElement($_13_index.j, {
    type: "icon-download-apk"
  })))
})
var LL = ["为了确保编程猫社区成员账户安全，我们将限制导入“自定义控件”的作品进行分享及协作。", "为此，我们建议各作者请先将控件提交审核，再由控件商城添加及使用 ❤️ 。", "这一措施旨在维护我们社区的健康与安全，感谢您的理解与支持 ❤️ ～"]
var PL = [
  {
    label: "Coco控件商城-投稿",
    url: te.b
  }
]
export { ML }
export { LL }
export { PL }
