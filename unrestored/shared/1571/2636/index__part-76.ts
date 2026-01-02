/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-76
 */

"use strict"

import { Yh } from "./index__part-68"
import { tg } from "./index__part-75"
var Jm
var Zm
var Qm
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as k from "./11"
import * as ng from "./64"
var rg = ng.a("COLUMN")
var og = ng.a("COLUMN")
Qm = {}
k.a(Qm, rg, {
  field: "第1列"
})
k.a(Qm, og, {
  field: "第2列"
})
var ig = Qm
var ag = [
  (Zm = {
    rowId: ng.a("ROW")
  }, k.a(Zm, rg, ""), k.a(Zm, og, ""), Zm), (Jm = {
    rowId: ng.a("ROW")
  }, k.a(Jm, rg, ""), k.a(Jm, og, ""), Jm)
]
var sg = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.m,
  category: {
    iconId: "icon-widget-local-storage",
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.m
  },
  getTemplate: function (e) {
    return []
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {},
    setBlockGroupProfile: function (e, t) {}
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-local-storage",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: [],
    fieldName: ""
  },
  topBlocks: []
}
var cg = {
  icon: "icon-widget-local-storage",
  title: "GridWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.m,
  previewAreaWidgetTitle: "GridWidget.widgetName",
  component: Yh,
  editConfig: tg,
  blockConfig: sg,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      db: {
        header: ig,
        data: ag
      }
    }
  }
}
var lg = [
  {
    type: "WidgetTitle"
  }, {
    type: "TableData"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/table-data"
  }
]
export { cg }
export { lg }
