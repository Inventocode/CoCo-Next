/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-90
 */

import { WidgetTree } from "./widget-tree"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../../unrestored/shared/1571/2636/26/index"
import * as CommonActions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_components_index from "../../../../shared/ui/components/index"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect, useRef } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_329 from "../../../../../unrestored/shared/1571/2636/329"
import styles from "../../../../../unrestored/shared/1571/2636/329"
var Uv = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$bgColor = e.bgColor
  var a = useDispatch()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var c = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var l = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var u = useState(false)
  var d = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  useEffect(function () {
    y(c === t && l ? e$color : p || c === t && !l ? e$bgColor : "")
  }, [c, t, l, p, e$color, e$bgColor])
  return <div
    key={t}
    className={classnames(styles.itemBlock, c === t && l && styles.itemSelected)}
    style={{
      backgroundColor: b
    }}
    onClick={function () {
      var e
      var n
      a(CommonActions.ug(t))
      a(CommonActions.fj(false))
      if (c === t && l) {
        $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
        if (!(null === (e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === e)) {
          e.flyout.hide()
        }
      } else {
        $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(t))
      }
    }}
    onMouseEnter={function () {
      m(true)
    }}
    onMouseLeave={function () {
      m(false)
    }}
  >
    {<div
      className={styles.itemBlockIcon}
      style={{
        color: e$color
      }}
    >
      {<$$_$$_$$_$$_shared_ui_components_index.j
        type={e$icon}
      />}
    </div>}
    {<span>
      {$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: e$label
      })}
    </span>}
  </div>
})
var Hv = [
  {
    id: "toolbox-event",
    icon: "icon-toolbox-event",
    label: "event",
    color: "rgb(84, 115, 248)",
    bgColor: "rgba(84, 115, 248,0.2)"
  }, {
    id: "toolbox-control",
    icon: "icon-toolbox-control",
    label: "control",
    color: "#01ADFF",
    bgColor: "rgba(1,173,255,0.2)"
  }, {
    id: "toolbox-feature",
    icon: "icon-toolbox-feature",
    label: "feature",
    color: "rgb(0, 175, 195)",
    bgColor: "rgb(0, 175, 195, 0.2)"
  }, {
    id: "toolbox-operator",
    icon: "icon-toolbox-operation",
    label: "operators",
    color: "#FF844E",
    bgColor: "rgba(255,132,78,0.2)"
  }, {
    id: "toolbox-primitive",
    icon: "icon-toolbox-variable",
    label: "variable",
    color: "#FFBB55",
    bgColor: "rgba(255,187,85,0.2)"
  }, {
    id: "toolbox-array",
    icon: "icon-toolbox-list",
    label: "list",
    color: "#FFC915",
    bgColor: "rgba(255,201,21,0.2)"
  }, {
    id: "toolbox-object",
    icon: "icon-toolbox-object",
    label: "object",
    color: "rgb(160, 115, 255)",
    bgColor: "rgb(160, 115, 255, 0.2)"
  }, {
    id: "toolbox-function",
    icon: "icon-toolbox-function",
    label: "procedures",
    color: "#F78767",
    bgColor: "rgba(247,135,103,0.2)"
  }
]
var Vv = memo(function () {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  return <div
    className={styles.basicBlockBox}
  >
    {<div
      className={styles.categoryTitle}
    >
      {$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "basicBlock"
      })}
    </div>}
    {<div
      className={styles.blockList}
    >
      {Hv.map(function (e) {
        return React.createElement(Uv, Object.assign({
          key: e.id
        }, e))
      })}
    </div>}
    {<div
      className={styles.spaceLine}
    />}
  </div>
})

var zv = memo(function () {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var t = useSelector(function (e) {
    return e.block.isBlockDragDeleteArea
  })
  return <div
    className={styles.deleteBlockBox}
  >
    {<div
      className={classnames(styles.deleteTopIconBox, t && styles.deleteTopIconBoxOff)}
    >
      {<$$_$$_$$_$$_shared_ui_components_index.j
        type="icon-delete-top"
        className={styles.deleteBlockTopIcon}
      />}
    </div>}
    {<div
      className={styles.deleteBottomIconBox}
    >
      {<$$_$$_$$_$$_shared_ui_components_index.j
        type="icon-delete-bottom"
        className={styles.deleteBlockBottomIcon}
      />}
    </div>}
    {<div>
      {$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "Workspace.blockDragDeleteAreaTips"
      })}
    </div>}
  </div>
})

const WidgetPanel = memo(() => {
  const dispatch = useDispatch()
  const widgetTreeRef = useRef(null)
  const isBlockDragDeleteArea = useSelector((state) => state.block.isBlockDragDeleteArea)
  return <div
    className={styles.wrapper}
    onMouseEnter={() => dispatch(CommonActions.ui(true))}
    onMouseLeave={() => dispatch(CommonActions.ui(false))}
  >
    <div className={styles.basicBlock}>{<Vv />}</div>
    <div className={styles.widgetTree} ref={widgetTreeRef}><WidgetTree /></div>
    <div className={classnames(
      styles.deleteBlockPanel,
      isBlockDragDeleteArea && styles.deleteBlockPanelShow
    )}>{React.createElement(zv, null)}</div>
  </div>
})
export { WidgetPanel as Yv }
