/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_686 from /* 686 */"../../../../shared/1571/2636/686"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */ReactDom1 from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_189 from /* 189 */"../../../../shared/1571/2636/189"
import * as /* [auto-meaningful-name] */Animejs from /* 205 */"animejs"
function tt(t, e) {
  return [
    Animejs.default({
      targets: "#".concat(t),
      keyframes: [
        {
          scale: 1
        }, {
          scale: 0
        }
      ],
      duration: 300,
      easing: "easeInSine",
      complete: function () {
        if (e) {
          e()
        }
      }
    })
  ]
}
export { tt }
