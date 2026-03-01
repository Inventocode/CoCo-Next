/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：17
 */

export * as I from "../../../../../../unrestored/shared/1571/2636/17/536"
import * as container_1 from "../../../../../../unrestored/shared/1571/2636/17/644"
import * as di_symbols_1 from "../../../../../../unrestored/shared/1571/2636/17/646"
import * as di_bind_1 from "../../../../../../unrestored/shared/1571/2636/17/2142/index"
const __BLINK_VERSION__ = require("../package.json").version
console.log("%c⭐️ Codemao Blink - v" + __BLINK_VERSION__ + " ⭐️", `
  color: #FFDB29;
  text-shadow: 0 1px 0 #BF7000;
  padding: 140px 10px 20px 35px;
  background: no-repeat left / 150px 150px url("http://kn-cdn.codemao.cn/blink/blink-main-compressed.jpeg");
`)
var cont = (0, container_1.get_instance)()
;(0, di_bind_1.bind_di_modules)(cont)
export const Blink = window.Blockly = cont.get(di_symbols_1.BINDING.Blink)
export * as BU from "../../../../../../unrestored/shared/1571/2636/17/499/index"
export { vec2 } from "@kitten-team/gl-matrix"
