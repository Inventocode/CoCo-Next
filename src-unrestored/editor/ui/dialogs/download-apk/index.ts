/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-205
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1062 from "../../../../../unrestored/shared/1571/2636/1062"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_ from "../../../../../unrestored/shared/1571/2636/1062"
var ML = _React.memo(function () {
  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.blockImageDialogInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$imgSrc = t.imgSrc
  return React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f, {
    visible: t$visible,
    className: _$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.blockImageDialog,
    onClose: function () {
      e($$_$$_$$_redux_common_actions.bi(false, ""))
    }
  }, React.createElement("div", {
    className: _$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.blockImageWrap
  }, React.createElement("img", {
    src: t$imgSrc,
    alt: ""
  })), React.createElement("div", {
    className: _$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.btnDownload,
    onClick: function () {
      var e = document.createElement("a")
      e.href = t$imgSrc
      e.download = "block.png"
      e.click()
    }
  }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-download-apk"
  })))
})
var LL = ["为了确保编程猫社区成员账户安全，我们将限制导入“自定义控件”的作品进行分享及协作。", "为此，我们建议各作者请先将控件提交审核，再由控件商城添加及使用 ❤️ 。", "这一措施旨在维护我们社区的健康与安全，感谢您的理解与支持 ❤️ ～"]
var PL = [
  {
    label: "Coco控件商城-投稿",
    url: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.b
  }
]
export { ML }
export { LL }
export { PL }
