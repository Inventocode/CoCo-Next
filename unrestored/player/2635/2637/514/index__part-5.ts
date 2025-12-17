/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_686 from "../../../../shared/1571/2636/686"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_80_index from "../../../../shared/1571/2636/80/index"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1571_2636_80_index from "../../../../shared/1571/2636/80/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_8 from "../../../../shared/1571/2636/8"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1571_2636_ from "../../../../shared/1571/2636/8"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_189 from "../../../../shared/1571/2636/189"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
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
