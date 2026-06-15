/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-149
 */

import { VariablePanel } from "./VariablePanel"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import styles from /* 1525 */"../../../../../../unrestored/shared/1571/2636/1525"

const FlyoutComponents = memo(() => {
  return <div className={styles.wrapper}>
    <VariablePanel
      variableType={Module_18.b.PRIMITIVE}
      labelType={Module_26.b.PRIMITIVE}
    />
    <VariablePanel
      variableType={Module_18.b.ARRAY}
      labelType={Module_26.b.ARRAY}
    />
    <VariablePanel
      variableType={Module_18.b.OBJECT}
      labelType={Module_26.b.OBJECT}
    />
  </div>
})
export { FlyoutComponents as kT }
