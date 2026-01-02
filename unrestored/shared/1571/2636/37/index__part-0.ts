/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Redux from "redux"
import * as /* [auto-meaningful-name] */$$_48_489 from "../48/489"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as a from "../6"
import * as /* [auto-meaningful-name] */$$_738_66 from "../738/66"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_77 from "../77"
var p = window.localStorage.getItem("LANGUAGE") || navigator.language
var f = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: ""
}
var h = {
  type: $$_18.e.camera,
  visible: false,
  onClose: undefined,
  onConfirm: undefined
}
var m = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: "",
  cancelBtnVisible: false,
  confirmBtnVisible: false
}
var g = {
  visible: false,
  onConfirm: undefined,
  content: ""
}
var _ = {
  visible: false,
  onClose: undefined,
  onSelect: undefined,
  autoClose: true,
  value: ""
}
var v = {
  visible: false,
  importFailResults: [],
  fileType: "image"
}
var b = {
  visible: false
}
var y = {
  visible: false,
  selected: $$_18.f.CREATE_PROJECT
}
var E = {
  visible: false,
  grid: {
    id: "",
    name: "",
    header: {},
    data: []
  }
}
var O = {
  visible: false,
  widgetId: ""
}
function w(e) {
  var /* [auto-meaningful-name] */e$blockyToolboxPinned = e.blockyToolboxPinned
  var /* [auto-meaningful-name] */e$stageRulerVisible = e.stageRulerVisible
  localStorage.setItem("userConfig", JSON.stringify({
    blockyToolboxPinned: e$blockyToolboxPinned,
    stageRulerVisible: e$stageRulerVisible
  }))
  return e
}
var C = $$_738_66.a.Record(a.a(a.a({
  language: p,
  editAreaUpdatedAt: 0,
  previewAreaUpdatedAt: 0,
  extensionListUpdateAt: 0,
  commonToastInfo: {
    visible: false
  },
  confirmDialogInfo: f,
  permissionDialogInfo: h,
  richTextEditorDialogInfo: g,
  iconLibraryDialog: _,
  userInfo: null,
  userInfoFetchDone: false,
  importFailToastInfo: v,
  stageToast: b,
  stageState: {
    isActorDragging: false
  },
  projectDialog: y,
  gridDialog: E,
  gridStatus: {
    copiedContent: {
      rowId: "",
      columnId: ""
    },
    selectedContent: {
      rowId: "",
      columnId: ""
    },
    editingHeader: "",
    errorHeaders: [],
    animationHeaders: [],
    errorCells: {},
    isCustomWidth: false
  },
  tableDataDialog: E,
  createTableDataDialog: O,
  widgetMallVisible: false,
  isProjectModified: false,
  isProjectFinishedOpen: false,
  lastSavedTime: undefined,
  projectSaveProgressDialog: {
    visible: false,
    progress: 10
  },
  consoleMessages: $$_738_66.a.List(),
  consoleHeight: 0,
  saving: false,
  widgetAttributeVisible: false,
  rightSideActiveMenu: undefined,
  signInDialogInfo: {
    visible: false
  },
  stageScale: 1,
  stageWidth: 412,
  stageVisible: true,
  isHoverBlockArea: false,
  collAutoSave: false,
  historyArchiveId: "",
  editPermission: $$_18.c.Edit,
  historyDialogVisible: false,
  myExtensionWidgets: [],
  blockImageDialogInfo: {
    visible: false,
    imgSrc: ""
  },
  releaseInfoDialogVisible: false,
  cloudDBGridDialogInfo: {
    widgetName: "",
    visible: false,
    cloudDBId: "",
    isProd: false,
    callback: function () {}
  },
  cloudDBManagerDialogVisible: false,
  cloudDBPublishDialogInfo: {
    visible: false,
    type: "",
    callback: function () {}
  },
  sliderImageDialogInfo: {
    visible: false,
    widgetId: "",
    direction: $$_77.b.HORIZONTAL,
    handleImageFileId: "",
    handleImageRatio: 1.5,
    handleImageDirection: $$_77.b.HORIZONTAL,
    backgroundImageFileId: "",
    backgroundImageDirection: $$_77.b.HORIZONTAL,
    trackImageFileId: "",
    trackImageDirection: $$_77.b.HORIZONTAL
  },
  switchImageDialogInfo: {
    visible: false,
    widgetId: "",
    imageOpenFileId: "",
    imageCloseFileId: ""
  },
  isOffLine: false,
  templateList: [],
  courseList: [],
  courseDialogVisible: false,
  projectSavePrompt: {
    visible: false,
    openFrom: ""
  }
}, function () {
  var e = localStorage.getItem("userConfig")
  var t = {
    blockyToolboxPinned: false,
    stageRulerVisible: true
  }
  if (e) {
    try {
      var n = JSON.parse(e)
      Object.assign(t, n)
    } catch (r) {}
  }
  return t
}()), {}, {
  floatMiniIcons: {
    fixedIcons: [],
    temporaryIcons: []
  }
}))()
function T(e, t) {
  return e.consoleMessages.push($$_738_66.a.Record(t.payload)())
}
function S(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "copiedContent"], a.a({}, t$payload))
}
function A(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "selectedContent"], a.a({}, t$payload))
}
function I(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnId = t.payload.columnId
  return e.setIn(["gridStatus", "editingHeader"], t$payload$columnId)
}
function j(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "errorHeaders"], t$payload$columnIds)
}
function N(e, t) {
  var /* [auto-meaningful-name] */t$payload$errorCells = t.payload.errorCells
  return e.setIn(["gridStatus", "errorCells"], t$payload$errorCells)
}
function R(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "animationHeaders"], t$payload$columnIds)
}
function k(e, t) {
  var /* [auto-meaningful-name] */t$payload$widgets = t.payload.widgets
  return e.update("myExtensionWidgets", function (e) {
    return t$payload$widgets.concat(e)
  })
}
function x(e, t) {
  var /* [auto-meaningful-name] */t$payload$widgetTypes = t.payload.widgetTypes
  return e.update("myExtensionWidgets", function (e) {
    return e.filter(function (e) {
      return !t$payload$widgetTypes.includes($$_$$_$$_$$_$$_src_shared_widget_custom_type.c(e.type, true))
    })
  })
}
function D(e, t) {
  var /* [auto-meaningful-name] */t$payload$name = t.payload.name
  return e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  }) ? (console.error("float icon name existed!"), e) : e.setIn(["floatMiniIcons", "temporaryIcons"], [].concat($$_25_index.a(e.floatMiniIcons.temporaryIcons), [t.payload]))
}
function M(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$icon = t$payload.icon
  var s = e.floatMiniIcons.temporaryIcons.findIndex(function (e) {
    return e.name === t$payload$name
  })
  return s >= 0 ? (e.floatMiniIcons.temporaryIcons.splice(s, 1, a.a(a.a({}, $$_$$_$$_$$_$$_src_editor_redux_common_actions.fh), t$payload$icon)), e.setIn(["floatMiniIcons", "temporaryIcons"], $$_25_index.a(e.floatMiniIcons.temporaryIcons))) : D(e, {
    type: $$_$$_$$_$$_$$_src_editor_redux_common_actions.d,
    payload: a.a(a.a({}, $$_$$_$$_$$_$$_src_editor_redux_common_actions.fh), t$payload$icon)
  })
}
function L(e, t) {
  var n = e.floatMiniIcons.temporaryIcons.filter(function (e) {
    return e.name !== t.payload
  })
  return e.setIn(["floatMiniIcons", "temporaryIcons"], n)
}
function P(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$visible = t$payload.visible
  var a = e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  })
  if (a) {
    a.visible = t$payload$visible
  }
  return e.setIn(["floatMiniIcons", "temporaryIcons"], $$_25_index.a(e.floatMiniIcons.temporaryIcons))
}
function B(e, t) {
  return e.setIn(["isProjectFinishedOpen"], t.payload)
}
var F = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.dd:
      return e.set("language", t.payload.language)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Se:
      return e.set("previewAreaUpdatedAt", Date.now())
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Qe:
      return e.set("editAreaUpdatedAt", Date.now())
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Re:
      return e.set("extensionListUpdateAt", Date.now())
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.re:
      return e.set("commonToastInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.pc:
      return e.set("commonToastInfo", {
        visible: false
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ec:
      return e.set("confirmDialogInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Wb:
      return e.set("confirmDialogInfo", m)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ke:
      return e.set("permissionDialogInfo", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Fc:
      return e.set("iconLibraryDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Yb:
      return e.set("iconLibraryDialog", _)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.nd:
      return e.set("userInfoFetchDone", true)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.he:
      return e.set("userInfo", t.payload).set("userInfoFetchDone", true)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ae:
      return e.set("importFailToastInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.xc:
      return e.set("importFailToastInfo", a.a({}, v))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.De:
      return e.set("stageToast", {
        visible: true,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || false
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.zc:
      return e.set("stageToast", b)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.cd:
      return e.setIn(["stageState", "isActorDragging"], t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Gc:
      return e.set("projectDialog", {
        visible: true,
        selected: t.payload.selected
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Zb:
      return e.set("projectDialog", a.a({}, y))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Rd:
      return e.set("isProjectModified", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Qd:
      return e.set("lastSavedTime", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Vd:
      return e.setIn(["projectSaveProgressDialog", "visible"], t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ud:
      return e.setIn(["projectSaveProgressDialog", "progress"], t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Xd:
      return e.set("saving", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.n:
      return e.set("consoleMessages", T(e, t))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Tb:
      return e.set("consoleMessages", $$_738_66.a.List())
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.kd:
      return e.set("consoleHeight", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.bc:
      return e.set("signInDialogInfo", {
        visible: false
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ic:
      return e.set("signInDialogInfo", {
        visible: true,
        onSuccess: t.payload.onSuccess
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.be:
      return w(e.set("stageRulerVisible", t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ee:
      return e.set("stageWidth", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.de:
      return e.set("stageVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ad:
      return e.set("isHoverBlockArea", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.gd:
      return w(e.set("blockyToolboxPinned", t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ie:
      return e.set("widgetAttributeVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ae:
      return e.set("rightSideActiveMenu", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.td:
      return S(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.xd:
      return A(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ud:
      return I(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.wd:
      return j(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.vd:
      return N(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.rd:
      return R(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.sd:
      return e.setIn(["gridStatus", "isCustomWidth"], t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ce:
      return e.set("stageScale", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.id:
      return e.set("collAutoSave", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.yd:
      return e.set("historyArchiveId", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Od:
      return e.set("editPermission", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ze:
      return e.set("historyDialogVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ye:
      return e.set("gridDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.wc:
      return e.set("gridDialog", a.a({}, E))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ee:
      return e.set("tableDataDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ac:
      return e.set("tableDataDialog", a.a({}, E))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.te:
      return e.set("createTableDataDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.rc:
      return e.set("createTableDataDialog", a.a({}, O))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.je:
      return e.set("widgetMallVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Wc:
      return e.set("myExtensionWidgets", t.payload.widgets)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.g:
      return k(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Oc:
      return x(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.hd:
      return e.set("blockImageDialogInfo", {
        visible: t.payload.visible,
        imgSrc: t.payload.imgSrc
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Be:
      return e.set("releaseInfoDialogVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ne:
      return e.set("cloudDBGridDialogInfo", {
        widgetName: t.payload.widgetName,
        visible: t.payload.visible,
        cloudDBId: t.payload.cloudDBId,
        isProd: t.payload.isProd,
        callback: t.payload.callback
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.oe:
      return e.set("cloudDBManagerDialogVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.pe:
      return e.set("cloudDBPublishDialogInfo", {
        visible: t.payload.visible,
        type: t.payload.type,
        callback: t.payload.callback
      })
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Bd:
      return e.set("isOffLine", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Me:
      return e.set("sliderImageDialogInfo", a.a({}, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ac:
      return e.set("richTextEditorDialogInfo", g)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Hc:
      return e.set("richTextEditorDialogInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Ne:
      return e.set("switchImageDialogInfo", a.a({}, t.payload))
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ge:
      return e.set("templateList", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.md:
      return e.set("courseList", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.ld:
      return e.set("courseDialogVisible", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Wd:
      return e.set("projectSavePrompt", t.payload)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.d:
      return D(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Mc:
      return L(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Uc:
      return M(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.od:
      return P(e, t)
    case $$_$$_$$_$$_$$_src_editor_redux_common_actions.Sd:
      return B(e, t)
    default:
      return e
  }
}
export { F }
