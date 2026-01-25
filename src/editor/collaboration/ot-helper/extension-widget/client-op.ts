/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-9
 */

import { a as OT } from "../../../../../unrestored/shared/1571/2636/24/index"
import * as OtJson1 from "ot-json1"
import * as AsyncToGenerator from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { UnsafeExtensionFileStorage } from "../../../../shared/widget/custom/storage"

export async function addUnsafeExtensionWidget(widget: UnsafeExtensionFileStorage) {
  const unsafeExtensionWidgetList = OT.getDoc()?.unsafeExtensionWidgetList
  if (unsafeExtensionWidgetList === undefined) {
    return
  }
  const index = (() => {
    for (let i = 0; i < unsafeExtensionWidgetList.length; i++) {
      if (unsafeExtensionWidgetList[i].type === widget.type) {
        return i
      }
    }
    return -1
  })()
  if (index !== -1) {
    const operation = OtJson1.replaceOp(["unsafeExtensionWidgetList", index], true, widget as any)
    OT.applyClient(operation)
  } else {
    const operation = OtJson1.insertOp(["unsafeExtensionWidgetList", unsafeExtensionWidgetList.length], widget as any)
    OT.applyClient(operation)
  }
}

/** [CoCo Next] 添加移除自定义控件的功能 */
export async function removeUnsafeExtensionWidget(type: string) {
  const unsafeExtensionWidgetList: any[] = OT.getDoc()?.unsafeExtensionWidgetList
  if (unsafeExtensionWidgetList === undefined) {
    return
  }
  const index = unsafeExtensionWidgetList.findIndex((widget) => widget.type == type)
  if (index === -1) {
    return
  }
  const operation = OtJson1.removeOp(["unsafeExtensionWidgetList", index], true)
  OT.applyClient(operation)
}

export function addMallExtensionWidget(e) {
  return gn.apply(this, arguments)
}

function gn() {
  return (gn = AsyncToGenerator.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (undefined !== (r = null === (n = OT.getDoc()) || undefined === n ? undefined : n.extensionWidgetList)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            o = function () {
              for (var e = 0; e < r.length; e++) {
                if (r[e].type === t.type) {
                  return e
                }
              }
              return -1
            }()
            i = {
              id: t.id,
              cdnUrl: t.cdnUrl,
              type: t.type,
              version: t.version || 0
            }
            if (-1 === o) {
              a = OtJson1.insertOp(["extensionWidgetList", r.length], i)
              OT.applyClient(a)
            }
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
