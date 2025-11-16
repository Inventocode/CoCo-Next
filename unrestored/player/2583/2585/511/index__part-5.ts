/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_679 from "../../../../shared/1531/2584/679"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_75_index from "../../../../shared/1531/2584/75/index"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1531_2584_75_index from "../../../../shared/1531/2584/75/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1531_2584_ from "../../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_189 from "../../../../shared/1531/2584/189"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
function tt(t, e) {
  return [Animejs.default({
    targets: "#".concat(t),
    keyframes: [{
      scale: 1
    }, {
      scale: 0
    }],
    duration: 300,
    easing: "easeInSine",
    complete: function () {
      if (e) {
        e()
      }
    }
  })]
}
export { tt as "511__part-5__tt" }
