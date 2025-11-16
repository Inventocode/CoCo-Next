/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_681 from "../../../../shared/1531/2584/681"
import * as /* [auto-meaningful-name] */$_721_index from "./721/index"
import * as /* [auto-meaningful-name] */$_81_index from "./81/index"
function Et() {
  var t = new Map()
  var e = [$_81_index.BarcodeFormat.QR_CODE]
  t.set($_81_index.DecodeHintType.POSSIBLE_FORMATS, e)
  return new $_721_index.BrowserQRCodeReader(t)
}
function Ot() {
  return window.QRScanner
}
export { Et as "511__part-10__Et" }
export { Ot as "511__part-10__Ot" }
