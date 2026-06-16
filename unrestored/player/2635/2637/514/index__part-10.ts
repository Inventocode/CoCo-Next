/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_688 from /* 688 */"../../../../shared/1571/2636/688"
import * as /* [auto-meaningful-name] */Module_730 from /* 730 */"./730/index"
import * as /* [auto-meaningful-name] */Module_81 from /* 81 */"./81/index"
function Et() {
  var t = new Map()
  var e = [Module_81.BarcodeFormat.QR_CODE]
  t.set(Module_81.DecodeHintType.POSSIBLE_FORMATS, e)
  return new Module_730.BrowserQRCodeReader(t)
}
function Ot() {
  return window.QRScanner
}
export { Et }
export { Ot }
