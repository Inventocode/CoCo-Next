/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_688 from "../../../../shared/1571/2636/688"
import * as /* [auto-meaningful-name] */$_730_index from "./730/index"
import * as /* [auto-meaningful-name] */$_81_index from "./81/index"
function wt() {
  var t = new Map()
  var e = [$_81_index.BarcodeFormat.QR_CODE]
  t.set($_81_index.DecodeHintType.POSSIBLE_FORMATS, e)
  return new $_730_index.BrowserQRCodeReader(t)
}
function Et() {
  return window.QRScanner
}
export { wt }
export { Et }
