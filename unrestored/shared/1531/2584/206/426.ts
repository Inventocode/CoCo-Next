/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：426
 */

"use strict"

export { r as b }
export { o as a }
var r = {
  blocklyFocusedShadowFilterId: "blocklyFocusedShadowFilter"
}
var o = ["<filter id=".concat("blocklyFocusedShadowFilter", " height=\"180%\" width=\"160%\" y=\"-40%\" x=\"-30%\">\n    <feGaussianBlur stdDeviation=\"1\"></feGaussianBlur>\n    <feComponentTransfer result=\"outColor\">\n      <feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA>\n    </feComponentTransfer>\n    <feGaussianBlur result=\"outShadow\" in=\"outColor\" stdDeviation=\"4\"></feGaussianBlur>\n    <feComposite in=\"SourceGraphic\" in2=\"outShadow\" operator=\"over\"></feComposite>\n  </filter>")]
export default o
