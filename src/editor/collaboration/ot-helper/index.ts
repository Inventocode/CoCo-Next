/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-10
 */

import { widget, projectOt, screen, imageFileList, soundFileList, iconFileList, primitiveVariables, arrayVariables, objectVariables, broadcasts, customEvent, globalWidget, extensionWidget, cloudSpace, focus } from "./helpers"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_24_377_index from "../../../../unrestored/shared/1571/2636/24/377/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_43 from "../../../../unrestored/shared/1571/2636/43"
import * as CommonActions from "../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_24_index from "../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"

function yn(e, t) {
  var n
  var r
  var o = null === (n = $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudDictKeysList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudDictKeysList", e.toString()], true, t) : OtJson1.insertOp(["cloudDictKeysList", e.toString()], t)
  $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(r)
}
function En(e, t) {
  var n
  var r
  var o = null === (n = $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudTableColumnList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableColumnList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableColumnList", e.toString()], t)
  $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(r)
}
function On(e, t) {
  var n
  var r
  var o = null === (n = $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudTableDataList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableDataList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableDataList", e.toString()], t)
  $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(r)
}
function wn(e) {
  var t
  var n
  n = (null === (t = $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === t ? undefined : t.cloudDictList) ? OtJson1.replaceOp(["cloudDictList"], true, e) : OtJson1.insertOp(["cloudDictList"], e)
  $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(n)
}
function Cn(e) {
  var t
  var n
  n = (null === (t = $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === t ? undefined : t.cloudTableList) ? OtJson1.replaceOp(["cloudTableList"], true, e) : OtJson1.insertOp(["cloudTableList"], e)
  $$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(n)
}
function Tn(e) {}
function Sn(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (2 === (e$path = e.path).length && "cloudDictKeysList" === e$path[0]) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      $$_$$_$$_$$_unrestored_shared_1571_2636_43.h(CommonActions.Ag(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableColumnList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      $$_$$_$$_$$_unrestored_shared_1571_2636_43.h(CommonActions.Dg(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableDataList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      $$_$$_$$_$$_unrestored_shared_1571_2636_43.h(CommonActions.Nj(Number(r), o))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudDictList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      $$_$$_$$_$$_unrestored_shared_1571_2636_43.h(CommonActions.Bg(e$op$i, false))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudTableList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      $$_$$_$$_$$_unrestored_shared_1571_2636_43.h(CommonActions.Eg(e$op$i, false))
    })(e)
  }
}

export const oTHelper = new class {

  public projectOt?: typeof projectOt
  public blink?: typeof $$_$$_$$_$$_unrestored_shared_1571_2636_24_377_index
  public widget?: typeof widget
  public screen?: typeof screen
  public imageFileList?: typeof imageFileList
  public soundFileList?: typeof soundFileList
  public iconFileList?: typeof iconFileList
  public primitiveVariables?: typeof primitiveVariables
  public arrayVariables?: typeof arrayVariables
  public objectVariables?: typeof objectVariables
  public localStorage?: typeof localStorage
  public focus?: typeof focus
  public broadcasts?: typeof broadcasts
  public customEvent?: typeof customEvent
  public globalWidget?: typeof globalWidget
  public extensionWidget?: typeof extensionWidget
  public cloudSpace?: typeof cloudSpace

  public constructor() {
    this.projectOt = undefined
    this.blink = undefined
    this.widget = undefined
    this.screen = undefined
    this.imageFileList = undefined
    this.soundFileList = undefined
    this.iconFileList = undefined
    this.primitiveVariables = undefined
    this.arrayVariables = undefined
    this.objectVariables = undefined
    this.localStorage = undefined
    this.focus = undefined
    this.broadcasts = undefined
    this.customEvent = undefined
    this.globalWidget = undefined
    this.extensionWidget = undefined
    this.cloudSpace = undefined
  }

  public init() {
    this.blink = $$_$$_$$_$$_unrestored_shared_1571_2636_24_377_index
    this.widget = widget
    this.screen = screen
    this.imageFileList = imageFileList
    this.soundFileList = soundFileList
    this.iconFileList = iconFileList
    this.primitiveVariables = primitiveVariables
    this.arrayVariables = arrayVariables
    this.objectVariables = objectVariables
    this.localStorage = localStorage
    this.focus = focus
    this.broadcasts = broadcasts
    this.projectOt = projectOt
    this.customEvent = customEvent
    this.globalWidget = globalWidget
    this.extensionWidget = extensionWidget
    this.cloudSpace = cloudSpace
  }

  public dispose() {
    Object.keys(this).forEach((key) => this[key as keyof this] = undefined as any)
  }
}()

export { yn }
export { En }
export { On }
export { wn }
export { Cn }
export { Tn }
export { Sn }
export { oTHelper as An }
