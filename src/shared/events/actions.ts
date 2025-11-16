"use strict"

export { store as d }
export { getStore as c }
export { dispatch as a }
export { getLanguage as b }
import Redux = require("redux")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_48_486_index = require("../../../unrestored/shared/1531/2584/48/486/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_25_index = require("../../../unrestored/shared/1531/2584/25/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_6 = require("../../../unrestored/shared/1531/2584/6")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_48_66 = require("../../../unrestored/shared/1531/2584/48/66")
import * as Message from "./messages-wrapper"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_18 = require("../../../unrestored/shared/1531/2584/18")
import * as CustomWidgetType from "../widget/custom/type"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_78 = require("../../../unrestored/shared/1531/2584/78")
var p = window.localStorage.getItem("LANGUAGE") || navigator.language
var f = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: ""
}
var h = {
  type: $$_$$_$$_unrestored_shared_1531_2584_18.e.camera,
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
  selected: $$_$$_$$_unrestored_shared_1531_2584_18.f.CREATE_PROJECT
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
  var e$blockyToolboxPinned = e.blockyToolboxPinned
  var e$stageRulerVisible = e.stageRulerVisible
  localStorage.setItem("userConfig", JSON.stringify({
    blockyToolboxPinned: e$blockyToolboxPinned,
    stageRulerVisible: e$stageRulerVisible
  }))
  return e
}
var C = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record($$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({
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
  consoleMessages: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(),
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
  editPermission: $$_$$_$$_unrestored_shared_1531_2584_18.c.Edit,
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
    direction: $$_$$_$$_unrestored_shared_1531_2584_78.b.HORIZONTAL,
    handleImageFileId: "",
    handleImageRatio: 1.5,
    handleImageDirection: $$_$$_$$_unrestored_shared_1531_2584_78.b.HORIZONTAL,
    backgroundImageFileId: "",
    backgroundImageDirection: $$_$$_$$_unrestored_shared_1531_2584_78.b.HORIZONTAL,
    trackImageFileId: "",
    trackImageDirection: $$_$$_$$_unrestored_shared_1531_2584_78.b.HORIZONTAL
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
  return e.consoleMessages.push($$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record(t.payload)())
}
function S(e, t) {
  var t$payload = t.payload
  return e.setIn(["gridStatus", "copiedContent"], $$_$$_$$_unrestored_shared_1531_2584_6.a({}, t$payload))
}
function I(e, t) {
  var t$payload = t.payload
  return e.setIn(["gridStatus", "selectedContent"], $$_$$_$$_unrestored_shared_1531_2584_6.a({}, t$payload))
}
function A(e, t) {
  var t$payload$columnId = t.payload.columnId
  return e.setIn(["gridStatus", "editingHeader"], t$payload$columnId)
}
function j(e, t) {
  var t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "errorHeaders"], t$payload$columnIds)
}
function N(e, t) {
  var t$payload$errorCells = t.payload.errorCells
  return e.setIn(["gridStatus", "errorCells"], t$payload$errorCells)
}
function R(e, t) {
  var t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "animationHeaders"], t$payload$columnIds)
}
function k(e, t) {
  var t$payload$widgets = t.payload.widgets
  return e.update("myExtensionWidgets", function (e) {
    return t$payload$widgets.concat(e)
  })
}
function x(e, t) {
  var t$payload$widgetTypes = t.payload.widgetTypes
  return e.update("myExtensionWidgets", function (e) {
    return e.filter(function (e) {
      return !t$payload$widgetTypes.includes(CustomWidgetType.standardize(e.type, true))
    })
  })
}
function D(e, t) {
  var t$payload$name = t.payload.name
  return e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  }) ? (console.error("float icon name existed!"), e) : e.setIn(["floatMiniIcons", "temporaryIcons"], [].concat($$_$$_$$_unrestored_shared_1531_2584_25_index.a(e.floatMiniIcons.temporaryIcons), [t.payload]))
}
function M(e, t) {
  var t$payload = t.payload
  var t$payload$name = t$payload.name
  var t$payload$icon = t$payload.icon
  var s = e.floatMiniIcons.temporaryIcons.findIndex(function (e) {
    return e.name === t$payload$name
  })
  return s >= 0 ? (e.floatMiniIcons.temporaryIcons.splice(s, 1, $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, Message.fh), t$payload$icon)), e.setIn(["floatMiniIcons", "temporaryIcons"], $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e.floatMiniIcons.temporaryIcons))) : D(e, {
    type: Message.d,
    payload: $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, Message.fh), t$payload$icon)
  })
}
function L(e, t) {
  var n = e.floatMiniIcons.temporaryIcons.filter(function (e) {
    return e.name !== t.payload
  })
  return e.setIn(["floatMiniIcons", "temporaryIcons"], n)
}
function P(e, t) {
  var t$payload = t.payload
  var t$payload$name = t$payload.name
  var t$payload$visible = t$payload.visible
  var a = e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  })
  if (a) {
    a.visible = t$payload$visible
  }
  return e.setIn(["floatMiniIcons", "temporaryIcons"], $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e.floatMiniIcons.temporaryIcons))
}
function B(e, t) {
  return e.setIn(["isProjectFinishedOpen"], t.payload)
}
var F = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Message.dd:
      return e.set("language", t.payload.language)
    case Message.Se:
      return e.set("previewAreaUpdatedAt", Date.now())
    case Message.Qe:
      return e.set("editAreaUpdatedAt", Date.now())
    case Message.Re:
      return e.set("extensionListUpdateAt", Date.now())
    case Message.re:
      return e.set("commonToastInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.pc:
      return e.set("commonToastInfo", {
        visible: false
      })
    case Message.Ec:
      return e.set("confirmDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.Wb:
      return e.set("confirmDialogInfo", m)
    case Message.Ke:
      return e.set("permissionDialogInfo", t.payload)
    case Message.Fc:
      return e.set("iconLibraryDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.Yb:
      return e.set("iconLibraryDialog", _)
    case Message.nd:
      return e.set("userInfoFetchDone", true)
    case Message.he:
      return e.set("userInfo", t.payload).set("userInfoFetchDone", true)
    case Message.Ae:
      return e.set("importFailToastInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.xc:
      return e.set("importFailToastInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, v))
    case Message.De:
      return e.set("stageToast", {
        visible: true,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || false
      })
    case Message.zc:
      return e.set("stageToast", b)
    case Message.cd:
      return e.setIn(["stageState", "isActorDragging"], t.payload)
    case Message.Gc:
      return e.set("projectDialog", {
        visible: true,
        selected: t.payload.selected
      })
    case Message.Zb:
      return e.set("projectDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, y))
    case Message.Rd:
      return e.set("isProjectModified", t.payload)
    case Message.Qd:
      return e.set("lastSavedTime", t.payload)
    case Message.Vd:
      return e.setIn(["projectSaveProgressDialog", "visible"], t.payload)
    case Message.Ud:
      return e.setIn(["projectSaveProgressDialog", "progress"], t.payload)
    case Message.Xd:
      return e.set("saving", t.payload)
    case Message.n:
      return e.set("consoleMessages", T(e, t))
    case Message.Tb:
      return e.set("consoleMessages", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List())
    case Message.kd:
      return e.set("consoleHeight", t.payload)
    case Message.bc:
      return e.set("signInDialogInfo", {
        visible: false
      })
    case Message.Ic:
      return e.set("signInDialogInfo", {
        visible: true,
        onSuccess: t.payload.onSuccess
      })
    case Message.be:
      return w(e.set("stageRulerVisible", t.payload))
    case Message.ee:
      return e.set("stageWidth", t.payload)
    case Message.de:
      return e.set("stageVisible", t.payload)
    case Message.Ad:
      return e.set("isHoverBlockArea", t.payload)
    case Message.gd:
      return w(e.set("blockyToolboxPinned", t.payload))
    case Message.ie:
      return e.set("widgetAttributeVisible", t.payload)
    case Message.ae:
      return e.set("rightSideActiveMenu", t.payload)
    case Message.td:
      return S(e, t)
    case Message.xd:
      return I(e, t)
    case Message.ud:
      return A(e, t)
    case Message.wd:
      return j(e, t)
    case Message.vd:
      return N(e, t)
    case Message.rd:
      return R(e, t)
    case Message.sd:
      return e.setIn(["gridStatus", "isCustomWidth"], t.payload)
    case Message.ce:
      return e.set("stageScale", t.payload)
    case Message.id:
      return e.set("collAutoSave", t.payload)
    case Message.yd:
      return e.set("historyArchiveId", t.payload)
    case Message.Od:
      return e.set("editPermission", t.payload)
    case Message.ze:
      return e.set("historyDialogVisible", t.payload)
    case Message.ye:
      return e.set("gridDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.wc:
      return e.set("gridDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, E))
    case Message.Ee:
      return e.set("tableDataDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.Ac:
      return e.set("tableDataDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, E))
    case Message.te:
      return e.set("createTableDataDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.rc:
      return e.set("createTableDataDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, O))
    case Message.je:
      return e.set("widgetMallVisible", t.payload)
    case Message.Wc:
      return e.set("myExtensionWidgets", t.payload.widgets)
    case Message.g:
      return k(e, t)
    case Message.Oc:
      return x(e, t)
    case Message.hd:
      return e.set("blockImageDialogInfo", {
        visible: t.payload.visible,
        imgSrc: t.payload.imgSrc
      })
    case Message.Be:
      return e.set("releaseInfoDialogVisible", t.payload)
    case Message.ne:
      return e.set("cloudDBGridDialogInfo", {
        widgetName: t.payload.widgetName,
        visible: t.payload.visible,
        cloudDBId: t.payload.cloudDBId,
        isProd: t.payload.isProd,
        callback: t.payload.callback
      })
    case Message.oe:
      return e.set("cloudDBManagerDialogVisible", t.payload)
    case Message.pe:
      return e.set("cloudDBPublishDialogInfo", {
        visible: t.payload.visible,
        type: t.payload.type,
        callback: t.payload.callback
      })
    case Message.Bd:
      return e.set("isOffLine", t.payload)
    case Message.Me:
      return e.set("sliderImageDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, t.payload))
    case Message.ac:
      return e.set("richTextEditorDialogInfo", g)
    case Message.Hc:
      return e.set("richTextEditorDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.Ne:
      return e.set("switchImageDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, t.payload))
    case Message.ge:
      return e.set("templateList", t.payload)
    case Message.md:
      return e.set("courseList", t.payload)
    case Message.ld:
      return e.set("courseDialogVisible", t.payload)
    case Message.Wd:
      return e.set("projectSavePrompt", t.payload)
    case Message.d:
      return D(e, t)
    case Message.Mc:
      return L(e, t)
    case Message.Uc:
      return M(e, t)
    case Message.od:
      return P(e, t)
    case Message.Sd:
      return B(e, t)
    default:
      return e
  }
}
import Lodash = require("lodash")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_60 = require("../../../unrestored/shared/1531/2584/60")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_53 = require("../../../unrestored/shared/1531/2584/53")
var H = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  position: {
    x: 0,
    y: 0
  },
  visible: false,
  widgetId: ""
})()
var V = {
  visible: false,
  actorId: "",
  onSelect: undefined
}
var z = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  currentScreenIndex: -1,
  id: $$_$$_$$_unrestored_shared_1531_2584_60.v,
  bcmUrl: "",
  jsonFrom: $$_$$_$$_unrestored_shared_1531_2584_18.d.OTHER,
  title: "新的作品",
  version: $$_$$_$$_unrestored_shared_1531_2584_53.e,
  playing: false,
  playedAt: 0,
  screens: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  selectedWidgetId: undefined,
  contextMenuInfo: H,
  styleDialog: V,
  apiToken: null,
  focusedWorkspaceArea: null,
  globalVariableList: [],
  globalArrayList: [],
  globalObjectList: [],
  isPackaging: false,
  packageProgress: 0,
  packageTaskLabel: null,
  packageUrl: null,
  packageProgressVisible: false,
  packageDialogVisible: false,
  packageQrCodeVisible: false,
  packageCompleteVisible: true,
  packageInfo: {
    apkName: "",
    apkIcon: "",
    apkSplash: "",
    packLabel: "",
    isCancel: false
  },
  projectShareInfo: {
    title: "",
    desc: "",
    img: ""
  },
  projectSource: {
    tag: $$_$$_$$_unrestored_shared_1531_2584_18.g.FREEDOM,
    id: ""
  },
  globalWidgetIds: []
})()
function Y(e) {
  return z
}
function K(e, t) {
  var t$payload$project = t.payload.project
  var t$payload$project$screens = t$payload$project.screens
  var t$payload$project$title = t$payload$project.title
  var t$payload$project$globalVariableList = t$payload$project.globalVariableList
  var t$payload$project$globalArrayList = t$payload$project.globalArrayList
  var t$payload$project$globalWidgetIds = t$payload$project.globalWidgetIds
  var t$payload$project$globalObjectList = t$payload$project.globalObjectList
  var u = t$payload$project$screens.map(function (e) {
    return $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record(e)()
  })
  return e.set("screens", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(u)).set("title", t$payload$project$title).set("selectedWidgetId", undefined).set("currentScreenIndex", -1).set("playing", false).set("globalVariableList", Lodash.cloneDeep(t$payload$project$globalVariableList)).set("globalArrayList", Lodash.cloneDeep(t$payload$project$globalArrayList)).set("globalWidgetIds", Lodash.cloneDeep(t$payload$project$globalWidgetIds)).set("globalObjectList", Lodash.cloneDeep(t$payload$project$globalObjectList))
}
function q(e, t) {
  return e.set("id", t.payload.projectId)
}
function X(e, t) {
  var t$payload = t.payload
  var t$payload$screen = t$payload.screen
  var t$payload$index = t$payload.index
  var i = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record(t$payload$screen)()
  var a = t$payload$index || e.screens.size
  return e.update("screens", function (e) {
    return e.splice(a, 0, i)
  })
}
function Q(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$title = t$payload.title
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("title", t$payload$title)
  })
}
function Z(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$key = t$payload.key
  var t$payload$value = t$payload.value
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", a], function (e) {
    return e.set(t$payload$key, t$payload$value)
  })
}
function J(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$snapshot = t$payload.snapshot
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("snapshot", t$payload$snapshot)
  })
}
function $(e, t) {
  var t$payload$screenId = t.payload.screenId
  var r = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return r > -1 ? e.update("screens", function (e) {
    return e.delete(r)
  }) : e
}
function ee(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$widgetId = t$payload.widgetId
  var t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? t$payload$isInvisibleWidget ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return (e || []).concat(t$payload$widgetId)
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.concat(t$payload$widgetId)
  }) : e
}
function te(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$widgetIds = t$payload.widgetIds
  var t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return t$payload$isInvisibleWidget ? e.updateIn(["screens", s, "invisibleWidgetIds"], function () {
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(t$payload$widgetIds)
  }) : e.updateIn(["screens", s, "widgetIds"], function () {
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(t$payload$widgetIds)
  })
}
function ne(e, t) {
  var t$payload = t.payload
  var t$payload$screenId = t$payload.screenId
  var t$payload$widgetId = t$payload.widgetId
  var t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? (t$payload$widgetId === e.selectedWidgetId && (e = e.set("selectedWidgetId", undefined)), t$payload$isInvisibleWidget ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  })) : e
}
function re(e, t) {
  var t$payload$widgetId = t.payload.widgetId
  if (t$payload$widgetId === e.selectedWidgetId) {
    e = e.set("selectedWidgetId", undefined)
  }
  return e.update("globalWidgetIds", function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  })
}
function oe(e, t) {
  var t$payload = t.payload
  var t$payload$variableType = t$payload.variableType
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$defaultValue = t$payload.defaultValue
  var t$payload$screenId = t$payload.screenId
  var t$payload$index = t$payload.index
  if (t$payload$variableType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "primitiveVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
  }) : e
}
function ie(e, t) {
  var t$payload = t.payload
  var t$payload$variableType = t$payload.variableType
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "name"], t$payload$name) : e
}
function ae(e, t) {
  var t$payload = t.payload
  var t$payload$scopeType = t$payload.scopeType
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "name"], t$payload$name) : e
}
function se(e, t) {
  var t$payload = t.payload
  var t$payload$variableType = t$payload.variableType
  var t$payload$id = t$payload.id
  var t$payload$defaultValue = t$payload.defaultValue
  var t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalVariableList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "primitiveVariables", u, "value"], t$payload$defaultValue) : e
}
function ce(e, t) {
  var t$payload = t.payload
  var t$payload$scopeType = t$payload.scopeType
  var t$payload$id = t$payload.id
  var t$payload$defaultValue = t$payload.defaultValue
  var t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalObjectList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "objectVariables", u, "value"], t$payload$defaultValue) : e
}
function le(e, t) {
  var t$payload = t.payload
  var t$payload$variableType = t$payload.variableType
  var t$payload$id = t$payload.id
  var t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "primitiveVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function ue(e, t) {
  var t$payload = t.payload
  var t$payload$arrayType = t$payload.arrayType
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$defaultValue = t$payload.defaultValue
  var t$payload$screenId = t$payload.screenId
  var t$payload$index = t$payload.index
  if (t$payload$arrayType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "arrayVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
  }) : e
}
function de(e, t) {
  var t$payload = t.payload
  var t$payload$scopeType = t$payload.scopeType
  var t$payload$screenId = t$payload.screenId
  var t$payload$index = t$payload.index
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$defaultValue = t$payload.defaultValue
  if (t$payload$scopeType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "objectVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
  }) : e
}
function pe(e, t) {
  var t$payload = t.payload
  var t$payload$arrayType = t$payload.arrayType
  var t$payload$id = t$payload.id
  var t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "arrayVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function fe(e, t) {
  var t$payload = t.payload
  var t$payload$scopeType = t$payload.scopeType
  var t$payload$id = t$payload.id
  var t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "objectVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function he(e, t) {
  var t$payload = t.payload
  var t$payload$arrayType = t$payload.arrayType
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "name"], t$payload$name) : e
}
function me(e, t) {
  var t$payload = t.payload
  var t$payload$arrayType = t$payload.arrayType
  var t$payload$id = t$payload.id
  var t$payload$defaultValue = t$payload.defaultValue
  var t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalArrayList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "arrayVariables", u, "value"], t$payload$defaultValue) : e
}
function ge(e, t) {
  var t$payload = t.payload
  var t$payload$from = t$payload.from
  var t$payload$to = t$payload.to
  var i = e.get("screens")
  var a = i.get(t$payload$from)
  var s = i.get(e.get("currentScreenIndex"))
  if (a && s) {
    var c = i.splice(t$payload$from, 1).splice(t$payload$to, 0, a)
    var l = c.indexOf(s)
    return e.set("screens", c).set("currentScreenIndex", l)
  }
  return e
}
function _e(e, t) {
  var t$payload = t.payload
  var t$payload$name = t$payload.name
  var t$payload$screenId = t$payload.screenId
  var t$payload$index = t$payload.index
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return s > -1 ? e.updateIn(["screens", s, "broadcasts"], function (e) {
    e.splice(t$payload$index, 0, t$payload$name)
    return $$_$$_$$_unrestored_shared_1531_2584_25_index.a(e)
  }) : e
}
function ve(e, t) {
  var t$payload = t.payload
  var t$payload$name = t$payload.name
  var t$payload$screenId = t$payload.screenId
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return i > -1 ? e.updateIn(["screens", i, "broadcasts"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$name
    })
  }) : e
}
function be(e, t) {
  var t$payload = t.payload
  return e.set("contextMenuInfo", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record(t$payload)())
}
function ye(e) {
  return e.set("contextMenuInfo", H)
}
function Ee(e, t) {
  return e.set("styleDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
    visible: true
  }, t.payload))
}
function Oe(e) {
  return e.set("styleDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, V))
}
function we(e, t) {
  return e.set("selectedWidgetId", t.payload.widgetId)
}
var Ce = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : z
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Message.Te:
      return e.set("bcmUrl", t.payload.bcmUrl)
    case Message.Rb:
      return e.set("title", t.payload.title)
    case Message.Xc:
      return K(e, t)
    case Message.Yc:
      return q(e, t)
    case Message.Ve:
      return J(e, t)
    case Message.Dc:
      return ge(e, t)
    case Message.Ue:
      return Z(e, t)
    case Message.We:
      return Q(e, t)
    case Message.k:
      return X(e, t)
    case Message.kc:
      return $(e, t)
    case Message.j:
      return e.set("globalWidgetIds", e.globalWidgetIds.concat(t.payload.widgetId))
    case Message.l:
      return ee(e, t)
    case Message.Fe:
      return e.set("globalWidgetIds", t.payload.widgetIds)
    case Message.He:
      return te(e, t)
    case Message.Pc:
      return re(e, t)
    case Message.Qc:
      return ne(e, t)
    case Message.bd:
      return we(e, t)
    case Message.Nd:
      return e.set("currentScreenIndex", t.payload)
    case Message.Ie:
      return e.set("playing", true).set("playedAt", Date.now())
    case Message.Je:
      return e.set("playing", false)
    case Message.i:
      return oe(e, t)
    case Message.jc:
      return le(e, t)
    case Message.Ld:
      return ie(e, t)
    case Message.Kd:
      return se(e, t)
    case Message.a:
      return ue(e, t)
    case Message.h:
      return de(e, t)
    case Message.ic:
      return fe(e, t)
    case Message.Dd:
      return ae(e, t)
    case Message.Cd:
      return ce(e, t)
    case Message.ec:
      return pe(e, t)
    case Message.fd:
      return he(e, t)
    case Message.ed:
      return me(e, t)
    case Message.b:
      return _e(e, t)
    case Message.fc:
      return ve(e, t)
    case Message.Pb:
      return be(e, t)
    case Message.Xb:
      return ye(e)
    case Message.Vb:
      return Y()
    case Message.Ge:
      return e.set("screens", t.payload.screens)
    case Message.Jc:
      return Ee(e, t)
    case Message.cc:
      return Oe(e)
    case Message.Md:
      return e.set("apiToken", t.payload.token)
    case Message.Td:
      return e.set("packageTaskLabel", t.payload.label)
    case Message.Gd:
      return e.set("packageProgress", t.payload.packageProgress)
    case Message.Jd:
      return e.set("isPackaging", t.payload.isPackaging).set("packageUrl", t.payload.packageUrl || null)
    case Message.Hd:
      return e.set("packageProgressVisible", t.payload.packageProgressVisible)
    case Message.Fd:
      return e.set("packageDialogVisible", t.payload.packageDialogVisible)
    case Message.Id:
      return e.set("packageQrCodeVisible", t.payload.packageQrCodeVisible)
    case Message.jd:
      return e.set("packageCompleteVisible", t.payload.packageCompleteVisible)
    case Message.Ed:
      return e.update("packageInfo", function (e) {
        return $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, e), t.payload)
      })
    case Message.Yd:
      return e.update("projectShareInfo", function (e) {
        return $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, e), t.payload)
      })
    case Message.qd:
      return e.set("focusedWorkspaceArea", t.payload.area)
    case Message.Pd:
      return e.set("jsonFrom", t.payload)
    case Message.Zd:
      return e.set("projectSource", t.payload)
    default:
      return e
  }
}
var Te = {
  visible: false,
  data: [],
  title: "",
  widget: null,
  dbName: ""
}
var Se = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  dropdown: {
    type: $$_$$_$$_unrestored_shared_1531_2584_18.a.DYNAMIC_DROPDOWN,
    visible: false,
    options: [["", ""]],
    value: "",
    setValue: function (e) {},
    position: {
      left: -1e3,
      top: 0
    },
    blockInfo: {
      fieldWidth: 0,
      scale: 1,
      blockHeight: 0,
      sourceBlockId: "",
      fieldName: ""
    },
    onHide: function () {}
  },
  slider: {
    visible: false,
    value: "100",
    left: -1e3,
    top: 0,
    min: 0,
    max: 100,
    minText: "",
    maxText: "",
    setValue: function (e) {}
  },
  createVariableDialog: {
    visible: false,
    title: ""
  },
  commonInputDialog: {
    visible: false
  },
  editArrayDialog: {
    visible: false
  },
  editObjectDialog: {
    visible: false
  },
  storageDialogInfo: $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Te),
  palette: {
    visible: false,
    value: "#000000ff",
    top: 0,
    left: 0,
    selectValue: function (e) {},
    setValue: function (e) {}
  },
  flyoutVisible: false,
  isBlockDragDeleteArea: false
})()
function Ie(e) {
  e.get("dropdown").onHide()
  return e.set("dropdown", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.dropdown))
}
var Ae = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Se
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Message.ke:
      return e.set("dropdown", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.lc:
      return Ie(e)
    case Message.se:
      return e.set("createVariableDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.qc:
      return e.set("createVariableDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.createVariableDialog))
    case Message.qe:
      return e.set("commonInputDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.oc:
      return e.set("commonInputDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.createVariableDialog))
    case Message.we:
      return e.set("editArrayDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.uc:
      return e.set("editArrayDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.editArrayDialog))
    case Message.xe:
      return e.set("editObjectDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.vc:
      return e.set("editObjectDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.editObjectDialog))
    case Message.ve:
      return e.set("storageDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.tc:
      return e.set("storageDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Te))
    case Message.le:
      return e.set("slider", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.mc:
      return e.set("slider", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, Se.slider))
    case Message.Oe:
      return e.setIn(["slider", "value"], t.payload.value)
    case Message.me:
      return e.set("palette", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.nc:
      return e.set("palette", {
        colorList: undefined,
        visible: false,
        value: "#000000ff",
        top: 0,
        left: 0,
        selectValue: function (e) {},
        setValue: function (e) {}
      })
    case Message.pd:
      return e.set("flyoutVisible", t.payload)
    case Message.zd:
      return e.set("isBlockDragDeleteArea", t.payload)
    default:
      return e
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_47 = require("../../../unrestored/shared/1531/2584/47")
var Ne = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  configs: {},
  variableList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  tableDataDialog: {
    visible: false
  },
  dataWatchToast: {
    visible: false
  }
})()
function Re(e, t) {
  var t$payload = t.payload
  var t$payload$configs = t$payload.configs
  var t$payload$variableList = t$payload.variableList
  return e.set("variableList", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(t$payload$variableList)).set("configs", t$payload$configs)
}
function ke(e) {
  var t = ["PRIMITIVE", "DICT", "LIST"]
  var n = e.get("variableList")
  n.forEach(function (e) {
    if (t.includes(e.type)) {
      e.value = e.defaultValue
    }
  })
  return e.set("variableList", n)
}
function xe(e, t) {
  var t$payload$id = t.payload.id
  var r = e.get("variableList")
  var o = r.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return o >= 0 ? e.update("variableList", function (e) {
    return e.setIn([o], t.payload)
  }) : e.setIn(["variableList"], r.push(t.payload))
}
function De(e, t) {
  var t$payload = t.payload
  var r = e.get("variableList").findIndex(function (e) {
    return e.id === t$payload
  })
  return r > -1 ? e.deleteIn(["variableList", r]) : e
}
function Me(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$property = t$payload.property
  var t$payload$value = t$payload.value
  var a = e.get("variableList").findIndex(function (e) {
    return e.id === t$payload$id
  })
  return a >= 0 ? e.update("variableList", function (e) {
    return e.setIn([a, t$payload$property], t$payload$value)
  }) : e
}
function Le(e, t) {
  if (t.payload) {
    return e.setIn(["variableList"], $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List())
  }
  var n
  var r = e.get("variableList")
  var o = $$_$$_$$_unrestored_shared_1531_2584_47.a(r)
  try {
    for (o.s(); !(n = o.n()).done;) {
      n.value.isWatching = false
    }
  } catch (i) {
    o.e(i)
  } finally {
    o.f()
  }
  return e.setIn(["variableList"], r)
}
var Pe = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Ne
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Message.Cc:
      return Re(e, t)
    case Message.ad:
      return ke(e)
    case Message.c:
      return xe(e, t)
    case Message.gc:
      return De(e, t)
    case Message.Pe:
      return Me(e, t)
    case Message.Ub:
      return Le(e, t)
    case Message.fe:
      return e.set("tableDataDialog", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, t.payload))
    case Message.ue:
      return e.set("dataWatchToast", {
        visible: true,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || false
      })
    case Message.sc:
      return e.set("dataWatchToast", {
        visible: false
      })
    default:
      return e
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_102 = require("../../../unrestored/shared/1531/2584/102")
var Fe = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  editorInviteUrl: "",
  readOnlyInviteUrl: "",
  cooperationUserList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  onlineCooperationUserList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  userFocusOTInfoList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  onlineCooperationUserColorRecord: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({})(),
  isAuthor: true,
  collWorkId: null
})()
function Ge(e, t) {
  t.payload.list.sort(function (e) {
    return 0 - Number(e.is_author)
  })
  return e.set("cooperationUserList", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(t.payload.list))
}
var Ue = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Fe
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_unrestored_shared_1531_2584_102.h:
      return Ge(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_102.j:
      return e.set("onlineCooperationUserList", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(t.payload.list))
    case $$_$$_$$_unrestored_shared_1531_2584_102.e:
      return e.set("editorInviteUrl", t.payload.url)
    case $$_$$_$$_unrestored_shared_1531_2584_102.g:
      return e.set("readOnlyInviteUrl", t.payload.url)
    case $$_$$_$$_unrestored_shared_1531_2584_102.f:
      return e.set("isAuthor", t.payload.isAuthor)
    case $$_$$_$$_unrestored_shared_1531_2584_102.d:
      return e.set("collWorkId", t.payload.id)
    case $$_$$_$$_unrestored_shared_1531_2584_102.k:
      return e.set("userFocusOTInfoList", t.payload.list)
    case $$_$$_$$_unrestored_shared_1531_2584_102.i:
      return e.set("onlineCooperationUserColorRecord", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record(t.payload.colors)())
    case $$_$$_$$_unrestored_shared_1531_2584_102.c:
      return Fe
    default:
      return e
  }
}
var We = {
  visible: false,
  multiple: false,
  mode: require("../../../unrestored/shared/1531/2584/68").c.ResourceLibrary,
  sidebarType: undefined,
  setTab: undefined
}
var He = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  resourceLibraryDialogInfo: We,
  resourceLibraryDialogVisible: false,
  resourceLibraryUpdateAt: 0,
  imageFileList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  iconFileList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  soundFileList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  fontFileList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List($$_$$_$$_unrestored_shared_1531_2584_53.a)
})()
function Ve(e, t) {
  return e.update("imageFileList", function (e) {
    return e.splice(0, 0, t.payload.imageFile)
  })
}
function ze(e, t) {
  var t$payload$id = t.payload.id
  var r = e.imageFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("imageFileList", function (e) {
    return e.delete(r)
  }) : e
}
function Ye(e, t) {
  var t$payload = t.payload
  var t$payload$soundFiles = t$payload.soundFiles
  var t$payload$index = t$payload.index
  if (undefined !== t$payload$index) {
    return e.update("soundFileList", function (e) {
      return e.splice(t$payload$index, 0, t$payload$soundFiles[0])
    })
  }
  var i = e
  t$payload$soundFiles.forEach(function (e) {
    i = i.update("soundFileList", function (t) {
      return t.push(e)
    })
  })
  return i
}
function Ke(e, t) {
  var t$payload$id = t.payload.id
  var r = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("soundFileList", function (e) {
    return e.delete(r)
  }) : e
}
function qe(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Xe(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "name"], t$payload$name) : e
}
function Qe(e, t) {
  var t$payload = t.payload
  var t$payload$iconFiles = t$payload.iconFiles
  var t$payload$index = t$payload.index
  var i = e
  return undefined !== t$payload$index ? e.update("iconFileList", function (e) {
    return e.splice(t$payload$index, 0, t$payload$iconFiles[0])
  }) : (t$payload$iconFiles.forEach(function (e) {
    i = i.update("iconFileList", function (t) {
      return t.push(e)
    })
  }), i)
}
function Ze(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Je(e, t) {
  var t$payload$id = t.payload.id
  var r = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("iconFileList", function (e) {
    return e.delete(r)
  }) : e
}
function $e(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$name = t$payload.name
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "name"], t$payload$name) : e
}
var et = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : He
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Message.Ce:
      return e.set("resourceLibraryDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({
        visible: true
      }, t.payload))
    case Message.yc:
      return e.set("resourceLibraryDialogInfo", $$_$$_$$_unrestored_shared_1531_2584_6.a({}, We))
    case Message.Le:
      return e.set("resourceLibraryDialogVisible", t.payload.visible)
    case Message.Xe:
      return e.set("resourceLibraryUpdateAt", Date.now())
    case Message.f:
      return Ve(e, t)
    case Message.hc:
      return ze(e, t)
    case Message.Zc:
      return e.set("soundFileList", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(t.payload.soundFileList))
    case Message.m:
      return Ye(e, t)
    case Message.Sb:
      return qe(e, t)
    case Message.Rc:
      return Ke(e, t)
    case Message.Tc:
      return Xe(e, t)
    case Message.e:
      return Qe(e, t)
    case Message.Qb:
      return Ze(e, t)
    case Message.Nc:
      return Je(e, t)
    case Message.Vc:
      return e.set("iconFileList", $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(t.payload.iconFileList))
    case Message.Sc:
      return $e(e, t)
    default:
      return e
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_2_341 = require("../../../unrestored/shared/1531/2584/2/341")
var nt = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  header: {
    logo: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    file: {
      newProject: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      openMyProject: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      saveAs: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      showHistory: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      openLocalFile: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      exportLocalFile: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
    },
    tutorial: {
      tutorial: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      feedback: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      releaseInfo: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      about: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
    },
    help: {
      ruler: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
      stage: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
    },
    projectName: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    coll: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    save: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    cloudDBManager: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    cloudSpaceManager: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    cutLine: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    package: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    userInfo: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
    preventLeave: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
  },
  widgetPanel: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
  stage: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
  widgetEditor: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
  workspace: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
  screenPanel: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show,
  resourceLibrary: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
})()
var rt = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : nt
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_unrestored_shared_1531_2584_2_341.a:
      return e.merge(t.payload)
    case $$_$$_$$_unrestored_shared_1531_2584_2_341.c:
      return e.mergeDeep(t.payload)
    case $$_$$_$$_unrestored_shared_1531_2584_2_341.b:
      return e.setIn(["header", "preventLeave"], t.payload)
    default:
      return e
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_161 = require("../../../unrestored/shared/1531/2584/161")
var it = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Record({
  cloudDictList: [],
  cloudTableList: [],
  initialRefDictIds: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Set(),
  initialRefTableIds: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Set(),
  checkedTimeStamp: new Date().getTime(),
  cloudDictKeysList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  cloudTableColumnList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([]),
  cloudTableDataList: $$_$$_$$_unrestored_shared_1531_2584_48_66.a.List([])
})()
function at(e, t) {
  return e.setIn(["cloudDictList"], t.payload)
}
function st(e, t) {
  e.setIn(["initialRefDictIds"], []).setIn(["initialRefTableIds"], [])
  return e
}
function ct(e, t) {
  return e.setIn(["cloudTableList"], t.payload)
}
function lt(e, t) {
  var n = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Set(t.payload)
  return e.setIn(["initialRefDictIds"], n)
}
function ut(e, t) {
  var n = $$_$$_$$_unrestored_shared_1531_2584_48_66.a.Set(t.payload)
  return e.setIn(["initialRefTableIds"], n)
}
function dt(e, t) {
  var n = e.initialRefDictIds.concat(new Set(t.payload))
  return e.setIn(["initialRefDictIds"], n)
}
function pt(e, t) {
  var n = e.initialRefDictIds.filter(function (e) {
    return !t.payload.includes(e)
  })
  return e.setIn(["initialRefDictIds"], n)
}
function ft(e, t) {
  var n = e.initialRefTableIds.concat(new Set(t.payload))
  return e.setIn(["initialRefTableIds"], n)
}
function ht(e, t) {
  var n = e.initialRefTableIds.filter(function (e) {
    return !t.payload.includes(e)
  })
  return e.setIn(["initialRefTableIds"], n)
}
function mt(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$data = t$payload.data
  var i = e.cloudDictKeysList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudDictKeysList", i, "data"], t$payload$data) : e.update("cloudDictKeysList", function (e) {
    return e.push({
      id: t$payload$id,
      data: t$payload$data
    })
  })
}
function gt(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$columns = t$payload.columns
  var i = e.cloudTableList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableList", i, "columns"], t$payload$columns) : e
}
function _t(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$columns = t$payload.columns
  var i = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableColumnList", i, "columns"], t$payload$columns) : e.update("cloudTableColumnList", function (e) {
    return e.push({
      id: t$payload$id,
      columns: t$payload$columns
    })
  })
}
function vt(e, t) {
  var t$payload = t.payload
  var r = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === t$payload
  })
  return r > -1 ? e.deleteIn(["cloudTableColumnList", r]) : e
}
function bt(e, t) {
  return e.setIn(["checkedTimeStamp"], t.payload)
}
function yt(e, t) {
  var t$payload = t.payload
  var t$payload$id = t$payload.id
  var t$payload$data = t$payload.data
  var i = e.cloudTableDataList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableDataList", i, "data"], t$payload$data) : e.update("cloudTableDataList", function (e) {
    return e.push({
      id: t$payload$id,
      data: t$payload$data
    })
  })
}
var Et = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : it
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_unrestored_shared_1531_2584_161.s:
      return at(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.t:
      return ct(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.m:
      return st(e)
    case $$_$$_$$_unrestored_shared_1531_2584_161.x:
      return lt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.y:
      return ut(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.a:
      return dt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.b:
      return ft(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.o:
      return pt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.p:
      return ht(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.q:
      return bt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.r:
      return mt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.w:
      return gt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.u:
      return _t(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.n:
      return vt(e, t)
    case $$_$$_$$_unrestored_shared_1531_2584_161.v:
      return yt(e, t)
    default:
      return e
  }
}
var Ot = Redux.combineReducers({
  common: F,
  project: Ce,
  block: Ae,
  dataWatch: Pe,
  oTState: Ue,
  resource: et,
  uiConfig: rt,
  cloudSpace: Et
})
import RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_48_3 = require("../../../unrestored/shared/1531/2584/48/3")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_7 = require("../../../unrestored/shared/1531/2584/7")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_10_index = require("../../../unrestored/shared/1531/2584/10/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_11 = require("../../../unrestored/shared/1531/2584/11")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_2627_index = require("../../../unrestored/shared/1531/2584/2627/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_607_index = require("../../../unrestored/shared/1531/2584/38/607/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_623 = require("../../../unrestored/shared/1531/2584/623")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_14 = require("../../../unrestored/shared/1531/2584/14")
import /* [auto-meaningful-name] */$$_utils_network_axiosWithCredentials = require("../utils/network/axios-with-credentials")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_59_index = require("../../../unrestored/shared/1531/2584/59/index")
var Mt = "".concat($$_$$_$$_unrestored_shared_1531_2584_59_index.a.serverHost, "/coconut")
function Lt(e) {
  return Pt.apply(this, arguments)
}
function Pt() {
  return (Pt = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_utils_network_axiosWithCredentials.a.get(Mt + "/webdb/admin/dict", {
              params: {
                work_id: t
              }
            })
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            (e$sent$data$data = e$sent$data.data).forEach(function (e) {
              return e.id = e.id.toString()
            })
            return e.abrupt("return", e$sent$data$data)
          case 8:
            $$_$$_$$_unrestored_shared_1531_2584_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Bt(e) {
  return Ft.apply(this, arguments)
}
function Ft() {
  return (Ft = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_utils_network_axiosWithCredentials.a.post(Mt + "/webdb/admin/dict", {
              name: t
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.id + "")
          case 7:
            $$_$$_$$_unrestored_shared_1531_2584_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 11:
            if (e.prev = 11, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 15
              break
            }
            throw e.t0
          case 15:
            throw new Error("网络错误")
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 11]])
  }))).apply(this, arguments)
}
function Gt(e, t, n) {
  return Ut.apply(this, arguments)
}
function Ut() {
  return (Ut = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : ""
            e.prev = 1
            e.next = 4
            return $$_utils_network_axiosWithCredentials.a.put(Mt + "/webdb/admin/dict/".concat(t, "?").concat(o), {
              name: n
            })
          case 4:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 8:
            throw new TypeError(e$sent$data.msg)
          case 11:
            if (e.prev = 11, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 15
              break
            }
            throw e.t0
          case 15:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 11]])
  }))).apply(this, arguments)
}
function Wt(e, t) {
  return Ht.apply(this, arguments)
}
function Ht() {
  return (Ht = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_utils_network_axiosWithCredentials.a.delete(Mt + "/webdb/admin/dict/".concat(t))
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 7:
            throw new TypeError(e$sent$data.msg)
          case 10:
            if (e.prev = 10, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 14
              break
            }
            throw e.t0
          case 14:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 15:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 10]])
  }))).apply(this, arguments)
}
function Vt(e, t, n, r) {
  return zt.apply(this, arguments)
}
function zt() {
  return (zt = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_utils_network_axiosWithCredentials.a.get(Mt + "/webdb/admin/dict/".concat(t), {
              params: {
                offset: n,
                limit: r,
                work_id: o
              },
              headers: {
                env: 2
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            e$sent$data.data.items.forEach(function (e) {
              e.id += ""
            })
            return e.abrupt("return", e$sent$data.data)
          case 8:
            $$_$$_$$_unrestored_shared_1531_2584_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 16
              break
            }
            throw e.t0
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 12]])
  }))).apply(this, arguments)
}
function Yt(e, t, n) {
  return Kt.apply(this, arguments)
}
function Kt() {
  return (Kt = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : ""
            e.prev = 1
            e.next = 4
            return $$_utils_network_axiosWithCredentials.a.post(Mt + "/webdb/admin/dict/".concat(t, "/storevalues?").concat(o), $$_$$_$$_unrestored_shared_1531_2584_6.a({}, n), {
              headers: {
                env: 2
              }
            })
          case 4:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 8:
            $$_$$_$$_unrestored_shared_1531_2584_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 16
              break
            }
            throw e.t0
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 12]])
  }))).apply(this, arguments)
}
function qt(e, t, n, r) {
  return Xt.apply(this, arguments)
}
function Xt() {
  return (Xt = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            i = o ? "work_id=".concat(o) : ""
            a = t.map(function (e) {
              return new Promise(function (t, o) {
                $$_utils_network_axiosWithCredentials.a.put(Mt + "/webdb/admin/dict/migrate?".concat(i), {
                  db_id: e,
                  from_env: n,
                  to_env: r
                }).then(function () {
                  t(true)
                }).catch(function (e) {
                  return o(e)
                })
              })
            })
            return e.abrupt("return", Promise.all(a))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_177 = require("../../../unrestored/shared/1531/2584/177")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_298 = require("../../../unrestored/shared/1531/2584/298")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_26_index = require("../../../unrestored/shared/1531/2584/26/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_206_139 = require("../../../unrestored/shared/1531/2584/206/139")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_197_index = require("../../../unrestored/shared/1531/2584/197/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_141_index = require("../../../unrestored/shared/1531/2584/141/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_550_index = require("../../../unrestored/shared/1531/2584/550/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_327 = require("../../../unrestored/shared/1531/2584/327")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_9 = require("../../../unrestored/shared/1531/2584/9")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_214 = require("../../../unrestored/shared/1531/2584/214")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_305 = require("../../../unrestored/shared/1531/2584/305")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_5 = require("../../../unrestored/shared/1531/2584/5")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_64 = require("../../../unrestored/shared/1531/2584/64")
import Language = require("../ui/language")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_24_index = require("../../../unrestored/shared/1531/2584/24/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49 = require("../../../unrestored/shared/1531/2584/49")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_15 = require("../../../unrestored/shared/1531/2584/15")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_99 = require("../../../unrestored/shared/1531/2584/99")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_144 = require("../../../unrestored/shared/1531/2584/144")
function gn(e) {
  window.localStorage.removeItem("@__INITIALIZED__".concat(e))
  var t = "@".concat(e, "_DOCUMENT")
  Object.keys(window.localStorage).forEach(function (e) {
    if (0 === e.indexOf(t)) {
      window.localStorage.removeItem(e)
    }
  })
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_129 = require("../../../unrestored/shared/1531/2584/129")
import /* [auto-meaningful-name] */$$_widget_custom_load = require("../widget/custom/load")
import /* [auto-meaningful-name] */$$_widget_custom_storage = require("../widget/custom/storage")
import * as WidgetShop from "../widget/custom/shop"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_376 = require("../../../unrestored/shared/1531/2584/38/376")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_217_index = require("../../../unrestored/shared/1531/2584/38/217/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_146 = require("../../../unrestored/shared/1531/2584/146")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_512 = require("../../../unrestored/shared/1531/2584/38/512")
var Tn = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_$$_unrestored_shared_1531_2584_38_512)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_407 = require("../../../unrestored/shared/1531/2584/407")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_48_343 = require("../../../unrestored/shared/1531/2584/48/343")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_375 = require("../../../unrestored/shared/1531/2584/38/375")
import /* [auto-meaningful-name] */$$_widget_custom_restrict = require("../widget/custom/restrict")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_143 = require("../../../unrestored/shared/1531/2584/143")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_391_index = require("../../../unrestored/shared/1531/2584/391/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_21_index = require("../../../unrestored/shared/1531/2584/21/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_174 = require("../../../unrestored/shared/1531/2584/174")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_142 = require("../../../unrestored/shared/1531/2584/38/142")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_112 = require("../../../unrestored/shared/1531/2584/112")
function Ln() {
  var /* [auto-meaningful-name] */t$common$userInfo
  var t = store.getState()
  var t$project$id = t.project.id
  var r = null === (t$common$userInfo = t.common.userInfo) || undefined === t$common$userInfo ? undefined : t$common$userInfo.id
  return "".concat("DATA_WATCH_VARIABLE_LIST", "_").concat(r, "_").concat(t$project$id)
}
function Pn() {
  var store$getState$dataWatch$variableList = store.getState().dataWatch.variableList
  var t = []
  try {
    var n
    var r = $$_$$_$$_unrestored_shared_1531_2584_47.a(store$getState$dataWatch$variableList)
    try {
      for (r.s(); !(n = r.n()).done;) {
        var n$value = n.value
        t.push({
          id: n$value.id,
          name: n$value.name,
          screenId: n$value.screenId,
          isWatching: n$value.isWatching,
          type: n$value.type
        })
      }
    } catch (a) {
      r.e(a)
    } finally {
      r.f()
    }
    var i = JSON.stringify(t)
    $$_$$_$$_unrestored_shared_1531_2584_38_142.a.setItem(Ln(), i)
  } catch (s) {
    console.error("cache data watch failed", s)
  }
}
function Bn() {
  var e = Ln()
  var t = $$_$$_$$_unrestored_shared_1531_2584_38_142.a.getItem(e)
  var n = []
  try {
    if (t) {
      n = JSON.parse(t)
    }
  } catch (r) {
    console.error(r)
  }
  return n
}
function Fn(e) {
  var t
  var n = store.getState()
  var n$project$screens = n.project.screens
  var n$project$id = n.project.id
  var i = []
  var a = $$_$$_$$_unrestored_shared_1531_2584_47.a(e)
  try {
    var s = function () {
      var t$value = t.value
      if (!t$value.isWatching) {
        return "continue"
      }
      if ("GLOBAL" !== t$value.screenId) {
        var a = n$project$screens.find(function (t) {
          return t.id === t$value.screenId
        })
        if (!a) {
          return "break"
        }
        var a$primitiveVariables = a.primitiveVariables
        var a$arrayVariables = a.arrayVariables
        var a$objectVariables = a.objectVariables
        if ("LIST" === t$value.type) {
          var u = a$arrayVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (u) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", u, {
              screenId: a.id
            }))
          }
        }
        if ("DICT" === t$value.type) {
          var d = a$objectVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (d) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("DICT", d, {
              screenId: a.id
            }))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var p = a$primitiveVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (p) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", p, {
              screenId: a.id
            }))
          }
        }
      } else {
        var n$project = n.project
        var n$project$globalWidgetIds = n$project.globalWidgetIds
        var n$project$globalObjectList = n$project.globalObjectList
        var n$project$globalVariableList = n$project.globalVariableList
        var n$project$globalArrayList = n$project.globalArrayList
        if ("LIST" === t$value.type) {
          var v = n$project$globalArrayList.find(function (t) {
            return t.id === t$value.id
          })
          if (v) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("LIST", v))
          }
        }
        if ("DICT" === t$value.type) {
          var b = n$project$globalObjectList.find(function (t) {
            return t.id === t$value.id
          })
          if (b) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("DICT", b))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var y = n$project$globalVariableList.find(function (t) {
            return t.id === t$value.id
          })
          if (y) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", y))
          }
        }
        if (n$project$globalWidgetIds.includes(t$value.id)) {
          var E = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(t$value.id)
          if (t$value.type === $$_$$_$$_unrestored_shared_1531_2584_5.B || t$value.type === $$_$$_$$_unrestored_shared_1531_2584_5.y) {
            var O = $$_$$_$$_unrestored_shared_1531_2584_21_index.getLocalDocumentObject(n$project$id, t$value.id) || E.attributes.fields
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a(t$value.type, {
              id: t$value.id,
              name: t$value.name,
              value: O,
              defaultValue: "no-use"
            }))
          } else if (t$value.type === $$_$$_$$_unrestored_shared_1531_2584_5.G) {
            i.push($$_$$_$$_unrestored_shared_1531_2584_112.a($$_$$_$$_unrestored_shared_1531_2584_5.G, {
              id: t$value.id,
              name: t$value.name,
              value: {
                header: [],
                data: []
              },
              defaultValue: "no-use"
            }))
          }
        }
      }
    }
    for (a.s(); !(t = a.n()).done;) {
      var l = s()
      if ("continue" !== l && "break" === l) {
        break
      }
    }
  } catch (f) {
    a.e(f)
  } finally {
    a.f()
  }
  for (var u = 0, d = i; u < d.length; u++) {
    var p = d[u]
    store.dispatch(Message.Pj(p.id, "isWatching", true))
    store.dispatch(Message.Pj(p.id, "selected", true))
  }
}
function Gn() {
  var e = Ln()
  return $$_$$_$$_unrestored_shared_1531_2584_38_142.a.removeItem(e)
}
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_42_index = require("../../../unrestored/shared/1531/2584/42/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_113 = require("../../../unrestored/shared/1531/2584/38/113")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_278 = require("../../../unrestored/shared/1531/2584/278")
var Vn = RegeneratorRuntime.mark(Yn)
var zn = RegeneratorRuntime.mark(Kn)
function Yn(e, t) {
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0
          r.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(e, t)
        case 3:
          r$sent = r.sent
          return r.abrupt("return", r$sent)
        case 7:
          r.prev = 7
          r.t0 = r.catch(0)
          console.error(r.t0)
        case 10:
        case "end":
          return r.stop()
      }
    }
  }, Vn, null, [[0, 7]])
}
function Kn(e, t) {
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0
          r.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(e, t)
        case 3:
          r$sent = r.sent
          t.resolve(r$sent)
          return r.abrupt("return", r$sent)
        case 8:
          r.prev = 8
          r.t0 = r.catch(0)
          return r.abrupt("return", t.reject(r.t0))
        case 11:
        case "end":
          return r.stop()
      }
    }
  }, zn, null, [[0, 8]])
}
function qn(e) {
  return RegeneratorRuntime.mark(function t(n) {
    var r
    var /* [auto-meaningful-name] */t$sent
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (!(r = e[n.type])) {
              t.next = 11
              break
            }
            if (!("reject" in n) || !("resolve" in n)) {
              t.next = 9
              break
            }
            t.next = 5
            return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Kn, r, n)
          case 5:
            t$sent = t.sent
            return t.abrupt("return", t$sent)
          case 9:
            t.next = 11
            return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Yn, r, n)
          case 11:
          case "end":
            return t.stop()
        }
      }
    }, t)
  })
}
var Xn
var /* [auto-meaningful-name] */e$sent
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_35 = require("../../../unrestored/shared/1531/2584/35")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_668_index = require("../../../unrestored/shared/1531/2584/38/668/index")
var $n = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_$$_unrestored_shared_1531_2584_38_668_index)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_2629 = require("../../../unrestored/shared/1531/2584/38/2629")
var tr = []
var nr = false
var rr = false
function or() {
  return ir.apply(this, arguments)
}
function ir() {
  return (ir = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, nr) {
              e.next = 6
              break
            }
            e.next = 4
            return Promise.reject(new Error("module (key: 3274) not found!"))
          case 4:
            e$sent = e.sent
            nr = true
          case 6:
            e.next = 12
            break
          case 8:
            if (e.prev = 8, e.t0 = e.catch(0), !(e.t0.message.indexOf("Loading chunk") > -1)) {
              e.next = 12
              break
            }
            throw Error("No NetWork")
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 8]])
  }))).apply(this, arguments)
}
function ar(e, t) {
  return sr.apply(this, arguments)
}
function sr() {
  return (sr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = $$_$$_$$_unrestored_shared_1531_2584_38_2629.a()
            o = {
              id: r,
              file: t,
              callback: n
            }
            e.prev = 2
            e.next = 5
            return or()
          case 5:
            tr.push(o)
            if (!Xn) {
              cr()
            }
            e.next = 12
            break
          case 9:
            e.prev = 9
            e.t0 = e.catch(2)
            mr(o)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 9]])
  }))).apply(this, arguments)
}
function cr() {
  if (0 !== tr.length) {
    if (Xn = new $n.a()) {
      Xn.addEventListener("error", function () {
        rr = true
        tr.shift()
      })
      Xn.addEventListener("message", function (e) {
        switch (e.data.type) {
          case "compress_jpeg_done":
          case "compress_png_done":
            (function (e, t) {
              return hr.apply(this, arguments)
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e)
            })
            break
          case "compress_transparent_png_done":
            (function (e, t) {
              return fr.apply(this, arguments)
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e)
            })
        }
      })
    }
    lr().catch(function (e) {
      console.error(e)
    })
  }
}
function lr() {
  return ur.apply(this, arguments)
}
function ur() {
  return (ur = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */_e$sent3
    var /* [auto-meaningful-name] */_e$sent3$image_data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (_e$sent3) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            if (0 !== tr.length) {
              e.next = 7
              break
            }
            if (Xn) {
              Xn.terminate()
            }
            Xn = undefined
            return e.abrupt("return")
          case 7:
            t = tr[0]
            e.prev = 8
            e.next = 11
            return _e$sent3.get_file_img_info(t.file)
          case 11:
            if (!(_e$sent3 = e.sent)) {
              e.next = 23
              break
            }
            if (_e$sent3$image_data = _e$sent3.image_data, "image/jpeg" !== _e$sent3.type && "image/png" !== _e$sent3.type) {
              e.next = 22
              break
            }
            if (!_e$sent3.transparent) {
              e.next = 20
              break
            }
            dr(_e$sent3$image_data, t, "transparent_png").catch(function (e) {
              console.error(e)
            })
            return e.abrupt("return")
          case 20:
            dr(_e$sent3$image_data, t, "mozjpeg").catch(function (e) {
              console.error(e)
            })
            return e.abrupt("return")
          case 22:
            throw Error("not_png_jpg")
          case 23:
            e.next = 31
            break
          case 25:
            e.prev = 25
            e.t0 = e.catch(8)
            console.error(e.t0)
            tr.shift()
            mr(t)
            lr().catch(function (e) {
              console.error(e)
            })
          case 31:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[8, 25]])
  }))).apply(this, arguments)
}
function dr(e, t, n) {
  return pr.apply(this, arguments)
}
function pr() {
  return (pr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!rr) {
              e.next = 3
              break
            }
            mr(n)
            return e.abrupt("return")
          case 3:
            if (Xn) {
              Xn.postMessage({
                type: r,
                id: n.id,
                data: t
              })
            } else {
              cr()
            }
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function fr() {
  return (fr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */_e$sent5
    var /* [auto-meaningful-name] */_e$sent7
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (_e$sent7) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            e.next = 5
            return _e$sent7.imagedata_to_blob(t, "image/png")
          case 5:
            _e$sent5 = e.sent
            e.next = 8
            return _e$sent7.blob_to_arrayBuffer(_e$sent5)
          case 8:
            if (_e$sent7 = e.sent, !Xn || rr) {
              e.next = 12
              break
            }
            Xn.postMessage({
              type: "optipng",
              id: n,
              buffer: _e$sent7
            })
            return e.abrupt("return")
          case 12:
            cr()
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function hr() {
  return (hr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    var /* [auto-meaningful-name] */_e$sent0
    var /* [auto-meaningful-name] */r$file$name
    var s
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (_e$sent0) {
              e.next = 3
              break
            }
            e.next = 3
            return or()
          case 3:
            if (0 === tr.length) {
              e.next = 23
              break
            }
            if (!(r = tr.shift())) {
              e.next = 23
              break
            }
            if (r.id !== n) {
              e.next = 22
              break
            }
            if (!(t instanceof ImageData)) {
              e.next = 16
              break
            }
            e.next = 10
            return _e$sent0.imagedata_to_blob(t, r.file.type)
          case 10:
            _e$sent0 = e.sent
            e.next = 13
            return _e$sent0.blob_to_arrayBuffer(_e$sent0)
          case 13:
            o = e.sent
            e.next = 17
            break
          case 16:
            o = t
          case 17:
            r$file$name = r.file.name
            s = _e$sent0.get_file_from_array_buffer(o, r.file.type, r$file$name)
            r.callback(s)
            e.next = 23
            break
          case 22:
            mr(r)
          case 23:
            lr().catch(function (e) {
              console.error(e)
            })
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function mr(e) {
  e.callback(e.file)
}
var gr
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_38_22 = require("../../../unrestored/shared/1531/2584/38/22")
var vr = RegeneratorRuntime.mark(Fr)
var br = RegeneratorRuntime.mark(Gr)
var yr = RegeneratorRuntime.mark(Hr)
var Er = RegeneratorRuntime.mark(Vr)
var Or = RegeneratorRuntime.mark(zr)
var wr = RegeneratorRuntime.mark(Yr)
var Cr = RegeneratorRuntime.mark(Kr)
var Tr = RegeneratorRuntime.mark(qr)
var Sr = RegeneratorRuntime.mark(Zr)
var Ir = RegeneratorRuntime.mark(Jr)
var Ar = RegeneratorRuntime.mark($r)
var jr = RegeneratorRuntime.mark(eo)
var Nr = RegeneratorRuntime.mark(to)
var Rr = RegeneratorRuntime.mark(no)
var kr = RegeneratorRuntime.mark(ro)
var xr = RegeneratorRuntime.mark(ao)
var Dr = RegeneratorRuntime.mark(so)
var Mr = RegeneratorRuntime.mark(co)
var Lr = RegeneratorRuntime.mark(lo)
var Pr = RegeneratorRuntime.mark(uo)
var Br = RegeneratorRuntime.mark(ho)
function Fr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFile
  var /* [auto-meaningful-name] */e$payload$widgetId
  var o
  var /* [auto-meaningful-name] */s$sent
  var a
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          if (e$payload = e.payload, e$payload$imageFile = e$payload.imageFile, e$payload$widgetId = e$payload.widgetId, o = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId), e$payload$imageFile && o) {
            s.next = 4
            break
          }
          return s.abrupt("return")
        case 4:
          if (o.type !== $$_$$_$$_unrestored_shared_1531_2584_5.v) {
            s.next = 14
            break
          }
          s.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_15.L, e$payload$imageFile.source || e$payload$imageFile.cdnUrl)
        case 7:
          if (s$sent = s.sent, !$$_$$_$$_unrestored_shared_1531_2584_9.Kb(o)) {
            s.next = 12
            break
          }
          a = $$_$$_$$_unrestored_shared_1531_2584_9.nb(s$sent)
          s.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(e$payload$widgetId, "size", a, false, false))
        case 12:
          s.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(e$payload$widgetId, "fileId", e$payload$imageFile.id, true, true))
        case 14:
          if (o.type !== $$_$$_$$_unrestored_shared_1531_2584_5.f && o.type !== $$_$$_$$_unrestored_shared_1531_2584_5.z && o.type !== $$_$$_$$_unrestored_shared_1531_2584_5.w) {
            s.next = 17
            break
          }
          s.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(e$payload$widgetId, "backgroundImage", e$payload$imageFile.id, true, true))
        case 17:
        case "end":
          return s.stop()
      }
    }
  }, vr)
}
function Gr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */e$payload$isMultipleFiles
  var /* [auto-meaningful-name] */_y$sent4
  var a
  var s
  var l
  var u
  var /* [auto-meaningful-name] */y$sent
  var p
  var f
  var /* [auto-meaningful-name] */_y$sent5
  var m
  var g
  var /* [auto-meaningful-name] */g$value
  var /* [auto-meaningful-name] */_y$sent6
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (y) {
    for (;;) {
      switch (y.prev = y.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          e$payload$isMultipleFiles = e$payload.isMultipleFiles
          y.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          _y$sent4 = y.sent
          a = []
          s = []
          l = []
          u = Array.from(e$payload$fileList)
          y.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ur, u)
        case 10:
          y$sent = y.sent
          p = 0
        case 12:
          if (!(p < y$sent.length)) {
            y.next = 21
            break
          }
          f = y$sent[p]
          y.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_15.qb, f, _y$sent4)
        case 16:
          if ("success" === (_y$sent5 = y.sent).status) {
            s.push(_y$sent5)
          } else {
            a.push(_y$sent5)
          }
        case 18:
          p++
          y.next = 12
          break
        case 21:
          if (!s.length) {
            y.next = 24
            break
          }
          y.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 24:
          if (!(a.length > 0)) {
            y.next = 34
            break
          }
          if (e$payload$isMultipleFiles) {
            y.next = 30
            break
          }
          y.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: a[0].message,
            showCloseIcon: false,
            showPrefixIcon: false,
            type: "error"
          }))
        case 28:
          y.next = 32
          break
        case 30:
          y.next = 32
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.uj(a, "image"))
        case 32:
          y.next = 36
          break
        case 34:
          y.next = 36
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(_y$sent4, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }))
        case 36:
          if (!(s.length > 0)) {
            y.next = 61
            break
          }
          m = $$_$$_$$_unrestored_shared_1531_2584_47.a(s)
          y.prev = 38
          m.s()
        case 40:
          if ((g = m.n()).done) {
            y.next = 48
            break
          }
          g$value = g.value
          y.next = 44
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_9.y, g$value.file)
        case 44:
          if (_y$sent6 = y.sent) {
            l.push(_y$sent6)
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.imageFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList.clientOp.add(_y$sent6)
            }
          }
        case 46:
          y.next = 40
          break
        case 48:
          y.next = 53
          break
        case 50:
          y.prev = 50
          y.t0 = y.catch(38)
          m.e(y.t0)
        case 53:
          y.prev = 53
          m.f()
          return y.finish(53)
        case 56:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(l)
          }
          y.next = 59
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 59:
          y.next = 61
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ms)
        case 61:
        case "end":
          return y.stop()
      }
    }
  }, br, null, [[38, 50, 53, 56]])
}
function Ur(e) {
  return Wr.apply(this, arguments)
}
function Wr() {
  return (Wr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = []
            r = $$_$$_$$_unrestored_shared_1531_2584_47.a(t)
            e.prev = 2
            i = RegeneratorRuntime.mark(function e() {
              var /* [auto-meaningful-name] */o$value
              var /* [auto-meaningful-name] */_e$sent1
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      o$value = o.value
                      e.next = 3
                      return new Promise(function (e) {
                        ar(o$value, function (t) {
                          e(t)
                        }).catch(function (e) {
                          console.error(e)
                        })
                      })
                    case 3:
                      _e$sent1 = e.sent
                      n.push(_e$sent1)
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })
            r.s()
          case 5:
            if ((o = r.n()).done) {
              e.next = 9
              break
            }
            return e.delegateYield(i(), "t0", 7)
          case 7:
            e.next = 5
            break
          case 9:
            e.next = 14
            break
          case 11:
            e.prev = 11
            e.t1 = e.catch(2)
            r.e(e.t1)
          case 14:
            e.prev = 14
            r.f()
            return e.finish(14)
          case 17:
            return e.abrupt("return", n)
          case 18:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 11, 14, 17]])
  }))).apply(this, arguments)
}
function Hr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var i
  var a
  var /* [auto-meaningful-name] */a$value
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$imageFiles = e$payload.imageFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          i = $$_$$_$$_unrestored_shared_1531_2584_47.a(e$payload$imageFiles)
          try {
            for (i.s(); !(a = i.n()).done;) {
              a$value = a.value
              $$_$$_$$_unrestored_shared_1531_2584_9.Tb(a$value)
              if (o) {
                if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.imageFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList)) {
                  $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList.clientOp.add(a$value)
                }
              }
            }
          } catch (d) {
            i.e(d)
          } finally {
            i.f()
          }
          u.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 5:
        case "end":
          return u.stop()
      }
    }
  }, yr)
}
function Vr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFileId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$imageFileId = e$payload.imageFileId
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          $$_$$_$$_unrestored_shared_1531_2584_9.E(e$payload$imageFileId)
          a.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 4:
          a.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 6:
          a.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 8:
          a.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 10:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.imageFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList.clientOp.remove(e$payload$imageFileId)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.IMAGE_LIBRARY, e$payload$imageFileId)
          }
        case 11:
        case "end":
          return a.stop()
      }
    }
  }, Er)
}
function zr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$newId
  var /* [auto-meaningful-name] */e$payload$oldId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var /* [auto-meaningful-name] */f$sent
  var s
  var l
  var /* [auto-meaningful-name] */l$value
  var /* [auto-meaningful-name] */l$value$backgroundImage
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          e$payload = e.payload
          e$payload$newId = e$payload.newId
          e$payload$oldId = e$payload.oldId
          e$payload$isEmitOT = e$payload.isEmitOT
          i = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          f.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 3:
          f$sent = f.sent
          $$_$$_$$_unrestored_shared_1531_2584_9.p(e$payload$oldId, e$payload$newId)
          $$_$$_$$_unrestored_shared_1531_2584_9.Rb(e$payload$oldId, e$payload$newId)
          s = $$_$$_$$_unrestored_shared_1531_2584_47.a(f$sent)
          f.prev = 7
          s.s()
        case 9:
          if ((l = s.n()).done) {
            f.next = 20
            break
          }
          if (l$value = l.value, (l$value$backgroundImage = l$value.backgroundImage) !== e$payload$oldId) {
            f.next = 15
            break
          }
          f.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jg(l$value.id, "backgroundImage", e$payload$newId))
        case 15:
          if (!$$_$$_$$_unrestored_shared_1531_2584_35.o(e$payload$oldId, l$value$backgroundImage)) {
            f.next = 18
            break
          }
          f.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jg(l$value.id, "backgroundImage", $$_$$_$$_unrestored_shared_1531_2584_35.eb(e$payload$oldId, e$payload$newId, l$value$backgroundImage)))
        case 18:
          f.next = 9
          break
        case 20:
          f.next = 25
          break
        case 22:
          f.prev = 22
          f.t0 = f.catch(7)
          s.e(f.t0)
        case 25:
          f.prev = 25
          s.f()
          return f.finish(25)
        case 28:
          $$_$$_$$_unrestored_shared_1531_2584_35.m(e$payload$oldId, e$payload$newId)
          f.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 31:
          f.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 33:
          if (i) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.imageFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList.clientOp.replaceImageFileId(e$payload$oldId, e$payload$newId)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.z.replaceFieldValue("image_file_list_dropdown", "IMAGE_FILE_ID", e$payload$oldId, e$payload$newId)
          }
        case 34:
        case "end":
          return f.stop()
      }
    }
  }, Or, null, [[7, 22, 25, 28]])
}
function Yr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$soundFile
  var /* [auto-meaningful-name] */e$payload$widgetId
  var o
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          if (e$payload = e.payload, e$payload$soundFile = e$payload.soundFile, e$payload$widgetId = e$payload.widgetId, o = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId), !e$payload$soundFile || !o || o.type !== $$_$$_$$_unrestored_shared_1531_2584_5.b) {
            i.next = 5
            break
          }
          i.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(e$payload$widgetId, "fileId", e$payload$soundFile.id, true, true))
        case 5:
        case "end":
          return i.stop()
      }
    }
  }, wr)
}
function Kr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$soundFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$soundFiles = e$payload.soundFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.kf(e$payload$soundFiles))
        case 3:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.soundFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList.clientOp.add(e$payload$soundFiles)
            }
          }
        case 4:
        case "end":
          return a.stop()
      }
    }
  }, Cr)
}
function qr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */e$payload$isMultipleFiles
  var /* [auto-meaningful-name] */_$sent
  var a
  var s
  var l
  var u
  var d
  var p
  var /* [auto-meaningful-name] */_$sent2
  var h
  var m
  var g
  return RegeneratorRuntime.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          e$payload$isMultipleFiles = e$payload.isMultipleFiles
          _.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          _$sent = _.sent
          a = []
          s = []
          l = []
          u = Array.from(e$payload$fileList)
          d = 0
        case 9:
          if (!(d < u.length)) {
            _.next = 18
            break
          }
          p = u[d]
          _.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_15.rb, p, _$sent)
        case 13:
          if ("success" === (_$sent2 = _.sent).status) {
            s.push(_$sent2)
          } else {
            a.push(_$sent2)
          }
        case 15:
          d++
          _.next = 9
          break
        case 18:
          if (!s.length) {
            _.next = 21
            break
          }
          _.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 21:
          if (!(a.length > 0)) {
            _.next = 31
            break
          }
          if (e$payload$isMultipleFiles) {
            _.next = 27
            break
          }
          _.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: a[0].message,
            showCloseIcon: false,
            showPrefixIcon: false,
            type: "error"
          }))
        case 25:
          _.next = 29
          break
        case 27:
          _.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.uj(a, "sound"))
        case 29:
          _.next = 33
          break
        case 31:
          _.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(_$sent, "importSoundSuccess").toString(),
            type: "success"
          }))
        case 33:
          if (!(s.length > 0)) {
            _.next = 55
            break
          }
          h = $$_$$_$$_unrestored_shared_1531_2584_47.a(s)
          _.prev = 35
          g = RegeneratorRuntime.mark(function e() {
            var /* [auto-meaningful-name] */m$value
            var n
            var r
            var o
            var i
            var /* [auto-meaningful-name] */_e$sent10
            var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    m$value = m.value
                    n = m$value.file.name.slice(0, m$value.file.name.lastIndexOf("."))
                    r = $$_$$_$$_unrestored_shared_1531_2584_15.I(m$value.file.name)
                    o = []
                    e.next = 6
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.I)
                  case 6:
                    e.sent.forEach(function (e) {
                      if ($$_$$_$$_unrestored_shared_1531_2584_15.I(e.name) === r) {
                        o.push(e.name.slice(0, e.name.lastIndexOf(".")))
                      }
                    })
                    i = $$_$$_$$_unrestored_shared_1531_2584_35.bc(n, o) + r
                    e.next = 11
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Xr, m$value.file, i)
                  case 11:
                    if (!(null === (_e$sent10 = e.sent) || undefined === _e$sent10 ? undefined : _e$sent10.id)) {
                      e.next = 17
                      break
                    }
                    l.push(_e$sent10)
                    e.next = 16
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.kf([_e$sent10]))
                  case 16:
                    if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.soundFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList)) {
                      $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList.clientOp.add([_e$sent10])
                    }
                  case 17:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          h.s()
        case 38:
          if ((m = h.n()).done) {
            _.next = 42
            break
          }
          return _.delegateYield(g(), "t0", 40)
        case 40:
          _.next = 38
          break
        case 42:
          _.next = 47
          break
        case 44:
          _.prev = 44
          _.t1 = _.catch(35)
          h.e(_.t1)
        case 47:
          _.prev = 47
          h.f()
          return _.finish(47)
        case 50:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(l)
          }
          _.next = 53
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 53:
          _.next = 55
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Zr)
        case 55:
        case "end":
          return _.stop()
      }
    }
  }, Tr, null, [[35, 44, 47, 50]])
}
function Xr(e, t) {
  return Qr.apply(this, arguments)
}
function Qr() {
  return (Qr = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */_e$sent11
    var /* [auto-meaningful-name] */_e$sent12
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_unrestored_shared_1531_2584_15.ob(t)
          case 2:
            if (!(_e$sent11 = e.sent)) {
              e.next = 9
              break
            }
            e.next = 6
            return $$_$$_$$_unrestored_shared_1531_2584_15.y(_e$sent11)
          case 6:
            _e$sent12 = e.sent
            i = {
              cdnUrl: "",
              id: n,
              name: n,
              source: _e$sent11,
              duration: _e$sent12 < 1 ? 1 : _e$sent12
            }
            return e.abrupt("return", i)
          case 9:
            return e.abrupt("return", null)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Zr() {
  var /* [auto-meaningful-name] */n$sent
  var /* [auto-meaningful-name] */_n$sent3
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.I)
        case 5:
          if (_n$sent3 = n.sent, !n$sent) {
            n.next = 9
            break
          }
          n.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_197_index.d, _n$sent3, function (e) {
            var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList
            Jr(e)
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.soundFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList.clientOp.replaceSoundFileCdnUrl(e.id, e.cdnUrl)
            }
          })
        case 9:
        case "end":
          return n.stop()
      }
    }
  }, Sr)
}
function Jr(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Rg(e.id, e.cdnUrl))
        case 2:
        case "end":
          return t.stop()
      }
    }
  }, Ir)
}
function $r(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || undefined === e)) {
            e.forEach(function (e) {
              if (e.source && $$_$$_$$_unrestored_shared_1531_2584_15.R(e.source)) {
                e.source = $$_$$_$$_unrestored_shared_1531_2584_15.n(e.source)
              }
            })
          }
          t.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Vh(e || []))
        case 3:
          t.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Zr)
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, Ar)
}
function eo(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          $$_$$_$$_unrestored_shared_1531_2584_35.Tb(e$payload$id)
          a.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Nh(e$payload$id))
        case 4:
          a.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 6:
          a.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 8:
          a.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 10:
          a.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 12:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.soundFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList.clientOp.remove(e$payload$id)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.SOUND_LIBRARY, e$payload$id)
          }
        case 13:
        case "end":
          return a.stop()
      }
    }
  }, jr)
}
function to(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$newName
  var /* [auto-meaningful-name] */e$payload$oldName
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$newName = e$payload.newName
          e$payload$oldName = e$payload.oldName
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ph(e$payload$id, e$payload$newName))
        case 3:
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 5:
          l.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 7:
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.soundFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$soundFileList.clientOp.replaceSoundName(e$payload$id, e$payload$newName)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.z.replaceTextValue("audio_sound_file_list_dropdown", "SOUND_FILE_ID", e$payload$oldName, e$payload$newName)
          }
        case 8:
        case "end":
          return l.stop()
      }
    }
  }, Nr)
}
function no(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$iconFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$iconFiles = e$payload.iconFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.df(e$payload$iconFiles))
        case 3:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.iconFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList.clientOp.add(e$payload$iconFiles)
            }
          }
        case 4:
        case "end":
          return a.stop()
      }
    }
  }, Rr)
}
function ro(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */g$sent
  var i
  var a
  var s
  var l
  var u
  var d
  var /* [auto-meaningful-name] */_g$sent3
  var f
  var h
  var m
  return RegeneratorRuntime.wrap(function (g) {
    for (;;) {
      switch (g.prev = g.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          g.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          g$sent = g.sent
          i = []
          a = []
          s = []
          l = Array.from(e$payload$fileList)
          u = 0
        case 9:
          if (!(u < l.length)) {
            g.next = 18
            break
          }
          d = l[u]
          g.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_15.qb, d, g$sent, [".svg"])
        case 13:
          if ("success" === (_g$sent3 = g.sent).status) {
            a.push(_g$sent3)
          } else {
            i.push(_g$sent3)
          }
        case 15:
          u++
          g.next = 9
          break
        case 18:
          if (!a.length) {
            g.next = 21
            break
          }
          g.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 21:
          if (!(i.length > 0)) {
            g.next = 26
            break
          }
          g.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.uj(i, "image"))
        case 24:
          g.next = 28
          break
        case 26:
          g.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(g$sent, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }))
        case 28:
          if (!(a.length > 0)) {
            g.next = 50
            break
          }
          f = $$_$$_$$_unrestored_shared_1531_2584_47.a(a)
          g.prev = 30
          m = RegeneratorRuntime.mark(function e() {
            var /* [auto-meaningful-name] */h$value
            var n
            var r
            var o
            var /* [auto-meaningful-name] */_e$sent13
            var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    h$value = h.value
                    n = h$value.file.name.slice(0, h$value.file.name.lastIndexOf("."))
                    r = []
                    e.next = 5
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.o)
                  case 5:
                    e.sent.forEach(function (e) {
                      r.push(e.name)
                    })
                    o = $$_$$_$$_unrestored_shared_1531_2584_35.bc(n, r)
                    e.next = 10
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(oo, h$value.file, o)
                  case 10:
                    if (!(_e$sent13 = e.sent)) {
                      e.next = 16
                      break
                    }
                    s.push(_e$sent13)
                    e.next = 15
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.df([_e$sent13]))
                  case 15:
                    if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.iconFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList)) {
                      $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList.clientOp.add([_e$sent13])
                    }
                  case 16:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          f.s()
        case 33:
          if ((h = f.n()).done) {
            g.next = 37
            break
          }
          return g.delegateYield(m(), "t0", 35)
        case 35:
          g.next = 33
          break
        case 37:
          g.next = 42
          break
        case 39:
          g.prev = 39
          g.t1 = g.catch(30)
          f.e(g.t1)
        case 42:
          g.prev = 42
          f.f()
          return g.finish(42)
        case 45:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(s)
          }
          g.next = 48
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 48:
          g.next = 50
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ao)
        case 50:
        case "end":
          return g.stop()
      }
    }
  }, kr, null, [[30, 39, 42, 45]])
}
function oo(e, t) {
  return io.apply(this, arguments)
}
function io() {
  return (io = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */_e$sent14
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_unrestored_shared_1531_2584_15.ob(t)
          case 2:
            if (!(_e$sent14 = e.sent)) {
              e.next = 6
              break
            }
            o = {
              cdnUrl: "",
              id: $$_$$_$$_unrestored_shared_1531_2584_64.a("ICON"),
              name: n,
              md5: "",
              source: _e$sent14
            }
            return e.abrupt("return", o)
          case 6:
            return e.abrupt("return", null)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ao() {
  var /* [auto-meaningful-name] */n$sent
  var /* [auto-meaningful-name] */_n$sent5
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.o)
        case 5:
          if (_n$sent5 = n.sent, n.prev = 6, !n$sent) {
            n.next = 10
            break
          }
          n.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_197_index.b, _n$sent5, function (e) {
            var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList
            so(e)
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.iconFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList.clientOp.replaceIconFileCdnUrl(e.id, e.cdnUrl)
            }
          })
        case 10:
          n.next = 15
          break
        case 12:
          n.prev = 12
          n.t0 = n.catch(6)
          console.error(n.t0)
        case 15:
        case "end":
          return n.stop()
      }
    }
  }, xr, null, [[6, 12]])
}
function so(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pg(e.id, e.cdnUrl))
        case 2:
        case "end":
          return t.stop()
      }
    }
  }, Dr)
}
function co(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Hh(e$payload$id))
        case 3:
          a.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 5:
          a.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 7:
          a.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 9:
          a.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 11:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.iconFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList.clientOp.remove(e$payload$id)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.ICON_LIBRARY, e$payload$id)
          }
        case 12:
        case "end":
          return a.stop()
      }
    }
  }, Mr)
}
function lo(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$newName
  var /* [auto-meaningful-name] */e$payload$oldName
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$newName = e$payload.newName
          e$payload$oldName = e$payload.oldName
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oh(e$payload$id, e$payload$newName))
        case 3:
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 5:
          l.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 7:
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.iconFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$iconFileList.clientOp.replaceIconName(e$payload$id, e$payload$newName)
            }
            $$_$$_$$_unrestored_shared_1531_2584_26_index.z.replaceTextValue("icon_file_list_dropdown", "ICON_FILE_ID", e$payload$oldName + ".svg", e$payload$newName + ".svg")
          }
        case 8:
        case "end":
          return l.stop()
      }
    }
  }, Lr)
}
function uo(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || undefined === e)) {
            e.forEach(function (e) {
              if (e.source && $$_$$_$$_unrestored_shared_1531_2584_15.R(e.source)) {
                e.source = $$_$$_$$_unrestored_shared_1531_2584_15.n(e.source)
              }
            })
          }
          t.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Rh(e || []))
        case 3:
          t.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ao)
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, Pr)
}
gr = {}
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.X, Fr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.Y, Gr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.s, Hr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.A, zr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.J, Vr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.Z, Yr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.w, qr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.v, Kr)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.ob, eo)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.qb, to)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.q, no)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.r, ro)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.mb, co)
$$_$$_$$_unrestored_shared_1531_2584_11.a(gr, Message.pb, lo)
var po = gr
var fo = qn(po)
function ho() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g(Object.keys(po), fo)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Br)
}
var mo = RegeneratorRuntime.mark(go)
function go() {
  var /* [auto-meaningful-name] */O$sent
  var /* [auto-meaningful-name] */_O$sent2
  var /* [auto-meaningful-name] */_O$sent3
  var /* [auto-meaningful-name] */_O$sent4
  var /* [auto-meaningful-name] */_O$sent5
  var /* [auto-meaningful-name] */_O$sent0
  var s
  var l
  var u
  var d
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var b
  var y
  var /* [auto-meaningful-name] */y$value
  return RegeneratorRuntime.wrap(function (O) {
    for (;;) {
      switch (O.prev = O.next) {
        case 0:
          O.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.globalVariableList
          })
        case 2:
          O$sent = O.sent
          O.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.globalArrayList
          })
        case 5:
          _O$sent2 = O.sent
          O.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.globalObjectList
          })
        case 8:
          _O$sent3 = O.sent
          O.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.globalWidgetIds
          })
        case 11:
          _O$sent4 = O.sent
          O.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.id
          })
        case 14:
          _O$sent5 = O.sent
          O.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.project.screens
          })
        case 17:
          _O$sent0 = O.sent
          s = []
          l = []
          u = []
          d = []
          p = []
          _O$sent4.forEach(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_9.dc.get(e)
            if (t) {
              if (!(t.type !== $$_$$_$$_unrestored_shared_1531_2584_5.B && t.type !== $$_$$_$$_unrestored_shared_1531_2584_5.y)) {
                d.push(t)
              }
              if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.G) {
                p.push(t)
              }
            }
          })
          Array.prototype.push.apply(s, O$sent)
          Array.prototype.push.apply(l, _O$sent2)
          Array.prototype.push.apply(u, _O$sent3)
          f = s.map(function (e) {
            return $$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", e, {
              isWatching: false
            })
          })
          h = l.map(function (e) {
            return $$_$$_$$_unrestored_shared_1531_2584_112.a("LIST", e, {
              isWatching: false
            })
          })
          m = u.map(function (e) {
            return $$_$$_$$_unrestored_shared_1531_2584_112.a("DICT", e, {
              isWatching: false
            })
          })
          g = d.map(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_21_index.getLocalDocumentObject(_O$sent5, e.id) || e.attributes.fields
            return $$_$$_$$_unrestored_shared_1531_2584_112.a(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: t,
              name: e.title,
              isWatching: false
            })
          })
          _ = p.map(function (e) {
            return $$_$$_$$_unrestored_shared_1531_2584_112.a(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: e.attributes.db,
              name: e.title,
              isWatching: false
            })
          })
          _O$sent0.forEach(function (e) {
            var e$primitiveVariables = e.primitiveVariables
            var e$arrayVariables = e.arrayVariables
            var e$objectVariables = e.objectVariables
            e$primitiveVariables.forEach(function (t) {
              f.push($$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
            e$arrayVariables.forEach(function (t) {
              h.push($$_$$_$$_unrestored_shared_1531_2584_112.a("LIST", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
            e$objectVariables.forEach(function (t) {
              m.push($$_$$_$$_unrestored_shared_1531_2584_112.a("DICT", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
          })
          v = [].concat($$_$$_$$_unrestored_shared_1531_2584_25_index.a(f), $$_$$_$$_unrestored_shared_1531_2584_25_index.a(h), $$_$$_$$_unrestored_shared_1531_2584_25_index.a(m), $$_$$_$$_unrestored_shared_1531_2584_25_index.a(g), $$_$$_$$_unrestored_shared_1531_2584_25_index.a(_))
          b = $$_$$_$$_unrestored_shared_1531_2584_47.a(v)
          O.prev = 35
          b.s()
        case 37:
          if ((y = b.n()).done) {
            O.next = 43
            break
          }
          y$value = y.value
          O.next = 41
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf(y$value))
        case 41:
          O.next = 37
          break
        case 43:
          O.next = 48
          break
        case 45:
          O.prev = 45
          O.t0 = O.catch(35)
          b.e(O.t0)
        case 48:
          O.prev = 48
          b.f()
          return O.finish(48)
        case 51:
        case "end":
          return O.stop()
      }
    }
  }, mo, null, [[35, 45, 48, 51]])
}
var _o
import React = require("react")
var bo = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_27 = require("../../../unrestored/shared/1531/2584/27")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_40 = require("../../../unrestored/shared/1531/2584/40")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_75_index = require("../../../unrestored/shared/1531/2584/75/index")
var wo = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_$$_unrestored_shared_1531_2584_75_index)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_8 = require("../../../unrestored/shared/1531/2584/8")
var To = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_$$_unrestored_shared_1531_2584_8)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_13_index = require("../../../unrestored/shared/1531/2584/13/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_267 = require("../../../unrestored/shared/1531/2584/267")
var Ao = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_$$_unrestored_shared_1531_2584_267)
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_188 = require("../../../unrestored/shared/1531/2584/188")
var No = function (e) {
  var e$title = e.title
  var e$onConfirm = e.onConfirm
  var e$content = e.content
  var e$onDeny = e.onDeny
  var e$className = e.className
  var e$onCancel = e.onCancel
  var e$isDangerous = e.isDangerous
  var e$cancelText = e.cancelText
  var e$allowText = e.allowText
  var e$denyText = e.denyText
  var e$cancelBtnVisible = e.cancelBtnVisible
  var p = undefined === e$cancelBtnVisible || e$cancelBtnVisible
  var e$confirmBtnVisible = e.confirmBtnVisible
  var h = undefined === e$confirmBtnVisible || e$confirmBtnVisible
  var e$mask = e.mask
  var g = undefined === e$mask || e$mask
  var _ = function () {
    if (e$onConfirm) {
      e$onConfirm()
    }
  }
  return bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_13_index.f, {
    visible: true,
    showCloseButton: false,
    withPortal: true,
    maskClosable: false,
    mask: g,
    className: To()(Ao.a.dialog, e$className, e$denyText && Ao.a.dialogSecondary)
  }, bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_188.a, null, bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_188.b, {
    keys: "enter",
    callback: _
  })), bo.a.createElement("h3", null, e$title), bo.a.createElement("span", null, e$content), bo.a.createElement("div", {
    className: To()(Ao.a.dialogButtons)
  }, p && bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_13_index.d, {
    type: "light",
    onClick: function () {
      if (e$onCancel) {
        e$onCancel()
      }
    }
  }, e$cancelText), e$denyText && bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_13_index.d, {
    onClick: function () {
      if (e$onDeny) {
        e$onDeny()
      }
    },
    className: Ao.a.denyButton
  }, e$denyText), h && bo.a.createElement($$_$$_$$_unrestored_shared_1531_2584_13_index.d, {
    type: "primary",
    danger: e$isDangerous,
    onClick: _
  }, e$allowText)))
}
var Ro = new (function () {
  function e() {
    $$_$$_$$_unrestored_shared_1531_2584_27.a(this, e)
    this.boxQueue = []
    this.currentBox = null
  }
  $$_$$_$$_unrestored_shared_1531_2584_40.a(e, [{
    key: "appendDialog",
    value: function (e) {
      var t = this
      var n = document.createElement("div")
      var r = $$_$$_$$_unrestored_shared_1531_2584_64.a("dialog")
      n.id = r
      var e$onConfirm = e.onConfirm
      var e$onCancel = e.onCancel
      var e$onClose = e.onClose
      var c = function () {
        var e = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!e$onConfirm) {
                    e.next = 3
                    break
                  }
                  e.next = 3
                  return e$onConfirm()
                case 3:
                  t.openDialog()
                case 4:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
      var l = function () {
        var e = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!e$onCancel) {
                    e.next = 3
                    break
                  }
                  e.next = 3
                  return e$onCancel()
                case 3:
                  t.openDialog()
                case 4:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
      var u = function () {
        var e = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!e$onClose) {
                    e.next = 3
                    break
                  }
                  e.next = 3
                  return e$onClose()
                case 3:
                  t.openDialog()
                case 4:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
      var d = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, e), {}, {
        onConfirm: c,
        onClose: u,
        onCancel: l
      })
      this.boxQueue.push({
        id: r,
        element: n,
        config: d
      })
      if (!this.currentBox) {
        this.openDialog()
      }
      return r
    }
  }, {
    key: "openDialog",
    value: function () {
      this.destroyCurrentBox()
      var e = this.boxQueue.shift()
      if (e) {
        wo.a.render(bo.a.createElement(No, e.config), e.element)
        document.body.appendChild(e.element)
        this.currentBox = e
      }
      return e
    }
  }, {
    key: "removeDialog",
    value: function (e) {
      var /* [auto-meaningful-name] */this$currentBox
      if (!e) {
        return e
      }
      if (e === (null === (this$currentBox = this.currentBox) || undefined === this$currentBox ? undefined : this$currentBox.id)) {
        this.destroyCurrentBox()
        return e
      }
      var n = this.boxQueue.findIndex(function (t) {
        return t.id === e
      })
      if (n >= 0) {
        this.boxQueue.splice(n, 1)
      }
      return e
    }
  }, {
    key: "destroyCurrentBox",
    value: function () {
      if (this.currentBox) {
        this.destroyBox(this.currentBox.element)
        this.currentBox = null
      }
    }
  }, {
    key: "destroyBox",
    value: function (e) {
      wo.a.unmountComponentAtNode(e)
      document.body.removeChild(e)
    }
  }])
  return e
}())()
var ko = RegeneratorRuntime.mark(ti)
var xo = RegeneratorRuntime.mark(ni)
var Do = RegeneratorRuntime.mark(ri)
var Mo = RegeneratorRuntime.mark(oi)
var Lo = RegeneratorRuntime.mark(ii)
var Po = RegeneratorRuntime.mark(ai)
var Bo = RegeneratorRuntime.mark(si)
var Fo = RegeneratorRuntime.mark(ci)
var Go = RegeneratorRuntime.mark(li)
var Uo = RegeneratorRuntime.mark(ui)
var Wo = RegeneratorRuntime.mark(di)
var Ho = RegeneratorRuntime.mark(pi)
var Vo = RegeneratorRuntime.mark(fi)
var zo = RegeneratorRuntime.mark(hi)
var Yo = RegeneratorRuntime.mark(mi)
var Ko = RegeneratorRuntime.mark(gi)
var qo = RegeneratorRuntime.mark(_i)
var Xo = RegeneratorRuntime.mark(vi)
var Qo = RegeneratorRuntime.mark(bi)
var Zo = RegeneratorRuntime.mark(yi)
var Jo = RegeneratorRuntime.mark(Ei)
var $o = RegeneratorRuntime.mark(Oi)
var ei = RegeneratorRuntime.mark(Si)
function ti() {
  var /* [auto-meaningful-name] */t$sent
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          t$sent = t.sent
          t.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            onConfirm: function () {
              store.dispatch(Message.Ch())
            },
            allowText: Language.c(t$sent, "cloudSpace.login").toString(),
            cancelText: Language.c(t$sent, "cloudSpace.cancelLogin").toString(),
            title: Language.c(t$sent, "cloudSpace.NotLoginTitle").toString(),
            content: Language.c(t$sent, "cloudSpace.notLoginDescription").toString()
          }))
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, ko)
}
function ni(e) {
  var /* [auto-meaningful-name] */o$sent
  var n
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          o$sent = o.sent
          n = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            })
          })
          r = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [n]
          })
          o.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            allowText: Language.c(o$sent, "know").toString(),
            title: Language.c(o$sent, "cloudSpace.dataSourceNotExistDesc").toString(),
            content: r,
            cancelBtnVisible: false,
            onConfirm: function () {
              store.dispatch(Message.Ij(new Date().getTime()))
            }
          }))
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, xo)
}
function ri(e, t) {
  var /* [auto-meaningful-name] */a$sent
  var r
  var o
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          a$sent = a.sent
          r = Language.c(a$sent, t) ? Language.c(a$sent, t) : t
          o = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            })
          })
          i = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [o]
          })
          Ro.appendDialog({
            allowText: Language.c(a$sent, "know").toString(),
            title: "以下控件绑定的云数据源发生异常(".concat(r, ")，请重新绑定"),
            content: i,
            cancelBtnVisible: false
          })
        case 7:
        case "end":
          return a.stop()
      }
    }
  }, Do)
}
function oi(e, t) {
  var /* [auto-meaningful-name] */a$sent
  var r
  var o
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          a$sent = a.sent
          r = Language.c(a$sent, t)
          o = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            })
          })
          i = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [o]
          })
          Ro.appendDialog({
            allowText: Language.c(a$sent, "know").toString(),
            title: Language.c(a$sent, "cloudSpace.dataSourceExceedLimitError", {
              type: r
            }).toString(),
            content: i,
            cancelBtnVisible: false
          })
        case 7:
        case "end":
          return a.stop()
      }
    }
  }, Mo)
}
function ii() {
  var /* [auto-meaningful-name] */r$sent
  var /* [auto-meaningful-name] */r$sent$dicts
  var /* [auto-meaningful-name] */r$sent$tables
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 2:
          if (!r.sent) {
            r.next = 21
            break
          }
          r.prev = 4
          r.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.a({
            dicts: $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.g),
            tables: $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.j)
          })
        case 7:
          r$sent = r.sent
          r$sent$dicts = r$sent.dicts
          r$sent$tables = r$sent.tables
          r.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bg(r$sent$dicts, true))
        case 12:
          r.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Eg(r$sent$tables, true))
        case 14:
          r.next = 19
          break
        case 16:
          r.prev = 16
          r.t0 = r.catch(4)
          console.error(r.t0)
        case 19:
          r.next = 23
          break
        case 21:
          r.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ai)
        case 23:
        case "end":
          return r.stop()
      }
    }
  }, Lo, null, [[4, 16]])
}
function ai() {
  var /* [auto-meaningful-name] */o$sent
  var /* [auto-meaningful-name] */_o$sent7
  var /* [auto-meaningful-name] */_o$sent7$dicts
  var /* [auto-meaningful-name] */_o$sent7$tables
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          o$sent = o.sent
          o.prev = 3
          o.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.a({
            dicts: $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.g, o$sent),
            tables: $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.j, o$sent)
          })
        case 6:
          _o$sent7 = o.sent
          _o$sent7$dicts = _o$sent7.dicts
          _o$sent7$tables = _o$sent7.tables
          o.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bg(_o$sent7$dicts, true))
        case 11:
          o.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Eg(_o$sent7$tables, true))
        case 13:
          o.next = 18
          break
        case 15:
          o.prev = 15
          o.t0 = o.catch(3)
          console.error(o.t0)
        case 18:
        case "end":
          return o.stop()
      }
    }
  }, Po, null, [[3, 15]])
}
function si() {
  var /* [auto-meaningful-name] */_$sent4
  var /* [auto-meaningful-name] */_$sent7
  var /* [auto-meaningful-name] */_$sent
  var r
  var o
  var i
  var a
  var s
  var c
  var u
  var d
  var p
  var f
  var h
  var m
  var g
  return RegeneratorRuntime.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          _.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.z)
        case 2:
          _$sent4 = _.sent
          _.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.b)
        case 5:
          _$sent7 = _.sent
          _.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.d)
        case 8:
          for (_$sent = _.sent, r = [], o = [], i = [], _$sent4 === $$_$$_$$_unrestored_shared_1531_2584_18.d.LOCAL_FILE && $$_$$_$$_unrestored_shared_1531_2584_42_index.b.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j && e.attributes.cloudDictId !== $$_$$_$$_unrestored_shared_1531_2584_9.i) {
              r.push(e)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k && e.attributes.cloudTableId !== $$_$$_$$_unrestored_shared_1531_2584_9.i) {
              o.push(e)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && "number" === typeof e.attributes.dataSource) {
              i.push(e)
            }
          }), $$_$$_$$_unrestored_shared_1531_2584_42_index.g.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j && e.attributes.cloudDictId !== $$_$$_$$_unrestored_shared_1531_2584_9.i) {
              r.push(e)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k && e.attributes.cloudTableId !== $$_$$_$$_unrestored_shared_1531_2584_9.i) {
              o.push(e)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && "number" === typeof e.attributes.dataSource) {
              i.push(e)
            }
          }), a = [], s = function () {
            var e = u[c]
            if (_$sent7.findIndex(function (t) {
              return t.id === e.attributes.cloudDictId
            }) < 0) {
              a.push(e)
            }
          }, c = 0, u = r; c < u.length; c++) {
            s()
          }
          for (d = function () {
            var e = f[p]
            if (_$sent.findIndex(function (t) {
              return t.id === e.attributes.cloudTableId
            }) < 0) {
              a.push(e)
            }
          }, p = 0, f = o; p < f.length; p++) {
            d()
          }
          for (h = function () {
            var e = g[m]
            if (_$sent.findIndex(function (t) {
              return t.id === e.attributes.dataSource
            }) < 0) {
              a.push(e)
            }
          }, m = 0, g = i; m < g.length; m++) {
            h()
          }
          return _.abrupt("return", a)
        case 22:
        case "end":
          return _.stop()
      }
    }
  }, Bo)
}
function ci(e) {
  var /* [auto-meaningful-name] */n$sent
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.h)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ii)
        case 5:
          n.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(pi)
        case 7:
          n.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fi)
        case 9:
          n.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(gi)
        case 11:
          n.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(li, e.payload)
        case 13:
          if (!n$sent) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.z.rerenderCurrentScreenWorkspaceData()
          }
        case 14:
        case "end":
          return n.stop()
      }
    }
  }, Fo)
}
function li(e) {
  var /* [auto-meaningful-name] */i$sent
  var n
  var r
  var /* [auto-meaningful-name] */r$value
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(si)
        case 2:
          if (!((i$sent = i.sent).length > 0 && e)) {
            i.next = 6
            break
          }
          i.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ni, i$sent)
        case 6:
          if (0 !== i$sent.length) {
            i.next = 8
            break
          }
          return i.abrupt("return", [])
        case 8:
          n = $$_$$_$$_unrestored_shared_1531_2584_47.a(i$sent)
          i.prev = 9
          n.s()
        case 11:
          if ((r = n.n()).done) {
            i.next = 30
            break
          }
          if ((r$value = r.value).type !== $$_$$_$$_unrestored_shared_1531_2584_5.j) {
            i.next = 18
            break
          }
          i.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(r$value.id, "cloudDictId", $$_$$_$$_unrestored_shared_1531_2584_9.i, false, true, true))
        case 16:
          i.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ih([r$value.attributes.cloudDictId]))
        case 18:
          if (r$value.type !== $$_$$_$$_unrestored_shared_1531_2584_5.k) {
            i.next = 23
            break
          }
          i.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(r$value.id, "cloudTableId", $$_$$_$$_unrestored_shared_1531_2584_9.i, false, true, true))
        case 21:
          i.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jh([r$value.attributes.cloudTableId]))
        case 23:
          if (r$value.type !== $$_$$_$$_unrestored_shared_1531_2584_5.A) {
            i.next = 28
            break
          }
          i.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(r$value.id, "dataSource", "", false, true, true))
        case 26:
          i.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jh([r$value.attributes.dataSource]))
        case 28:
          i.next = 11
          break
        case 30:
          i.next = 35
          break
        case 32:
          i.prev = 32
          i.t0 = i.catch(9)
          n.e(i.t0)
        case 35:
          i.prev = 35
          n.f()
          return i.finish(35)
        case 38:
          return i.abrupt("return", i$sent)
        case 39:
        case "end":
          return i.stop()
      }
    }
  }, Go, null, [[9, 32, 35, 38]])
}
function ui() {
  var /* [auto-meaningful-name] */_N$sent2
  var t
  var n
  var r
  var o
  var a
  var s
  var l
  var /* [auto-meaningful-name] */_N$sent4
  var d
  var /* [auto-meaningful-name] */d$code
  var /* [auto-meaningful-name] */d$msg
  var /* [auto-meaningful-name] */N$sent
  var m
  var /* [auto-meaningful-name] */m$code
  var /* [auto-meaningful-name] */m$msg
  var v
  var b
  var y
  var E
  var O
  var w
  var C
  var T
  var S
  var I
  var A
  var j
  return RegeneratorRuntime.wrap(function (N) {
    for (;;) {
      switch (N.prev = N.next) {
        case 0:
          if (0 !== $$_$$_$$_unrestored_shared_1531_2584_42_index.b.size) {
            N.next = 2
            break
          }
          return N.abrupt("return")
        case 2:
          N.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 4:
          if (N.sent) {
            N.next = 9
            break
          }
          N.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ti)
        case 8:
          return N.abrupt("return")
        case 9:
          N.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(li, false)
        case 11:
          if (_N$sent2 = N.sent, t = new Set(), n = new Set(), _N$sent2.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j) {
              t.add(e.attributes.cloudDictId)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k) {
              n.add(e.attributes.cloudTableId)
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && "number" === typeof e.attributes.dataSource) {
              n.add(e.attributes.dataSource)
            }
          }), r = [], o = [], a = [], s = [], l = [], N.prev = 20, !(t.size > 0)) {
            N.next = 26
            break
          }
          N.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.b, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(t))
        case 24:
          _N$sent4 = N.sent
          _N$sent2.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j) {
              var t = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(e.id)
              if (t) {
                var n = _N$sent4[e.attributes.cloudDictId]
                if (n === $$_$$_$$_unrestored_shared_1531_2584_9.e) {
                  r.push(e)
                  t.attributes.cloudDictId = $$_$$_$$_unrestored_shared_1531_2584_9.i
                } else {
                  if (n) {
                    t.attributes.cloudDictId = parseInt(_N$sent4[e.attributes.cloudDictId])
                  }
                }
              }
            }
          })
        case 26:
          N.next = 39
          break
        case 28:
          N.prev = 28
          N.t0 = N.catch(20)
          console.error(N.t0)
          d = JSON.parse(N.t0.message)
          d$code = d.code
          d$msg = d.msg
          N.t1 = d$code
          N.next = 40400903 === N.t1 ? 35 : 37
          break
        case 35:
          s.push.apply(s, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(_N$sent2.filter(function (e) {
            return e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j
          })))
          return N.abrupt("break", 39)
        case 37:
          N.next = 39
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ri, _N$sent2.filter(function (e) {
            return e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j
          }), d$msg)
        case 39:
          if (N.prev = 39, !(n.size > 0)) {
            N.next = 45
            break
          }
          N.next = 43
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.c, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(n))
        case 43:
          N$sent = N.sent
          _N$sent2.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k) {
              var t = N$sent[e.attributes.cloudTableId]
              var n = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(e.id)
              if (n) {
                if (t === $$_$$_$$_unrestored_shared_1531_2584_9.e) {
                  o.push(e)
                  n.attributes.cloudTableId = $$_$$_$$_unrestored_shared_1531_2584_9.i
                } else {
                  if (t) {
                    n.attributes.cloudTableId = parseInt(N$sent[e.attributes.cloudTableId])
                  }
                }
              }
            }
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A) {
              var r = N$sent[e.attributes.dataSource]
              var i = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(e.id)
              if (i) {
                if (r === $$_$$_$$_unrestored_shared_1531_2584_9.e) {
                  a.push(e)
                  i.attributes.dataSource = ""
                } else {
                  if (r) {
                    i.attributes.dataSource = parseInt(N$sent[e.attributes.dataSource])
                  }
                }
              }
            }
          })
        case 45:
          N.next = 58
          break
        case 47:
          N.prev = 47
          N.t2 = N.catch(39)
          console.error(N.t2)
          m = JSON.parse(N.t2.message)
          m$code = m.code
          m$msg = m.msg
          N.t3 = m$code
          N.next = 40400927 === N.t3 ? 54 : 56
          break
        case 54:
          l.push.apply(l, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(_N$sent2.filter(function (e) {
            return e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k || e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A
          })))
          return N.abrupt("break", 58)
        case 56:
          N.next = 58
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ri, _N$sent2.filter(function (e) {
            return e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k
          }), m$msg)
        case 58:
          if (!(r.length > 0 || o.length > 0 || a.length > 0)) {
            N.next = 61
            break
          }
          N.next = 61
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ri, [].concat(r, o, a), "cloudSpace.dataSourceNotExist")
        case 61:
          if (!(s.length > 0)) {
            N.next = 64
            break
          }
          N.next = 64
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(oi, [].concat(s), "cloudSpace.cloudDict")
        case 64:
          if (!(l.length > 0)) {
            N.next = 67
            break
          }
          N.next = 67
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(oi, [].concat(l), "cloudSpace.cloudTable")
        case 67:
          v = []
          $$_$$_$$_unrestored_shared_1531_2584_42_index.b.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.j) {
              v.push(e)
            }
          })
          b = RegeneratorRuntime.mark(function e() {
            var t
            var n
            var o
            var i
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = E[y], !(n = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(t.id))) {
                      e.next = 8
                      break
                    }
                    o = s.find(function (e) {
                      return e.id === n.id
                    })
                    i = r.find(function (e) {
                      return e.id === n.id
                    })
                    e.next = 7
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(t.id, "cloudDictId", o || i ? $$_$$_$$_unrestored_shared_1531_2584_9.i : n.attributes.cloudDictId, true, true, true))
                  case 7:
                    $$_$$_$$_unrestored_shared_1531_2584_42_index.b.delete(t.id)
                  case 8:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          y = 0
          E = v
        case 71:
          if (!(y < E.length)) {
            N.next = 76
            break
          }
          return N.delegateYield(b(), "t4", 73)
        case 73:
          y++
          N.next = 71
          break
        case 76:
          O = []
          $$_$$_$$_unrestored_shared_1531_2584_42_index.b.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.k) {
              O.push(e)
            }
          })
          w = RegeneratorRuntime.mark(function e() {
            var t
            var n
            var o
            var i
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = T[C], !(n = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(t.id))) {
                      e.next = 8
                      break
                    }
                    o = l.find(function (e) {
                      return e.id === n.id
                    })
                    i = r.find(function (e) {
                      return e.id === n.id
                    })
                    e.next = 7
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(t.id, "cloudTableId", o || i ? $$_$$_$$_unrestored_shared_1531_2584_9.i : n.attributes.cloudTableId, true, true, true))
                  case 7:
                    $$_$$_$$_unrestored_shared_1531_2584_42_index.b.delete(t.id)
                  case 8:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          C = 0
          T = O
        case 80:
          if (!(C < T.length)) {
            N.next = 85
            break
          }
          return N.delegateYield(w(), "t5", 82)
        case 82:
          C++
          N.next = 80
          break
        case 85:
          S = []
          $$_$$_$$_unrestored_shared_1531_2584_42_index.b.forEach(function (e) {
            if (e.type === $$_$$_$$_unrestored_shared_1531_2584_5.A) {
              S.push(e)
            }
          })
          I = RegeneratorRuntime.mark(function e() {
            var t
            var n
            var o
            var i
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = j[A], !(n = $$_$$_$$_unrestored_shared_1531_2584_42_index.b.get(t.id))) {
                      e.next = 8
                      break
                    }
                    o = l.find(function (e) {
                      return e.id === n.id
                    })
                    i = r.find(function (e) {
                      return e.id === n.id
                    })
                    e.next = 7
                    return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(t.id, "dataSource", o || i ? "" : n.attributes.dataSource, true, true, true))
                  case 7:
                    $$_$$_$$_unrestored_shared_1531_2584_42_index.b.delete(t.id)
                  case 8:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          A = 0
          j = S
        case 89:
          if (!(A < j.length)) {
            N.next = 94
            break
          }
          return N.delegateYield(I(), "t6", 91)
        case 91:
          A++
          N.next = 89
          break
        case 94:
          N.next = 96
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(pi)
        case 96:
          N.next = 98
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(gi)
        case 98:
          N.next = 100
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qf())
        case 100:
          N.next = 102
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fi)
        case 102:
          N.next = 104
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 104:
        case "end":
          return N.stop()
      }
    }
  }, Uo, null, [[20, 28], [39, 47]])
}
function di() {
  var /* [auto-meaningful-name] */t$sent
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ak({
            header: {
              cloudDBManager: $$_$$_$$_unrestored_shared_1531_2584_18.j.Hide
            }
          }))
        case 2:
          t.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.h)
        case 4:
          if (!((t$sent = t.sent) && t$sent.length > 0)) {
            t.next = 8
            break
          }
          t.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ak({
            header: {
              cloudDBManager: $$_$$_$$_unrestored_shared_1531_2584_18.j.Show
            }
          }))
        case 8:
        case "end":
          return t.stop()
      }
    }
  }, Wo)
}
function pi() {
  var e
  var /* [auto-meaningful-name] */r$t1$value
  var n
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {}
          $$_$$_$$_unrestored_shared_1531_2584_42_index.g.forEach(function (t) {
            if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.j && t.attributes.cloudDictId) {
              e[t.attributes.cloudDictId] = false
            }
          })
          r.t0 = RegeneratorRuntime.keys(e)
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10
            break
          }
          r$t1$value = r.t1.value
          n = Number(r$t1$value)
          r.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pf(n))
        case 8:
          r.next = 3
          break
        case 10:
        case "end":
          return r.stop()
      }
    }
  }, Ho)
}
function fi() {
  var e
  var /* [auto-meaningful-name] */r$t1$value
  var n
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {}
          $$_$$_$$_unrestored_shared_1531_2584_42_index.g.forEach(function (t) {
            if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && "number" === typeof t.attributes.dataSource) {
              e[t.attributes.dataSource] = false
            }
          })
          r.t0 = RegeneratorRuntime.keys(e)
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10
            break
          }
          r$t1$value = r.t1.value
          n = Number(r$t1$value)
          r.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Sf(n))
        case 8:
          r.next = 3
          break
        case 10:
        case "end":
          return r.stop()
      }
    }
  }, Vo)
}
function hi(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$showToast
  var /* [auto-meaningful-name] */s$sent
  var /* [auto-meaningful-name] */_s$sent3
  var a
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$showToast = e$payload.showToast
          s.prev = 1
          s.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.u)
        case 4:
          s$sent = s.sent
          s.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 7:
          if (_s$sent3 = s.sent, a = [], !s$sent || _s$sent3) {
            s.next = 15
            break
          }
          s.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.k, e$payload$id, s$sent)
        case 12:
          a = s.sent
          s.next = 18
          break
        case 15:
          s.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.f, e$payload$id)
        case 17:
          a = s.sent
        case 18:
          s.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ag(e$payload$id, a, true))
        case 20:
          s.next = 27
          break
        case 22:
          if (s.prev = 22, s.t0 = s.catch(1), !e$payload$showToast) {
            s.next = 27
            break
          }
          s.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: s.t0.message
          }))
        case 27:
        case "end":
          return s.stop()
      }
    }
  }, zo, null, [[1, 22]])
}
function mi(e) {
  var /* [auto-meaningful-name] */l$data
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$data
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var /* [auto-meaningful-name] */f$sent
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace
  var d
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$data = e$payload.data
          e$payload$isEmitOT = e$payload.isEmitOT
          f.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.a)
        case 3:
          f$sent = f.sent
          l = f$sent.find(function (e) {
            return e.id === e$payload$id
          })
          f.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jj(e$payload$id, e$payload$data))
        case 7:
          if (e$payload$isEmitOT) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.cloudSpace) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace.clientOp.updateCloudDictKeys(e$payload$id, e$payload$data)
            }
          }
          if (null === l || undefined === l || null === (l$data = l.data) || undefined === l$data ? undefined : l$data.length) {
            d = []
            p = []
            l.data.forEach(function (e) {
              var t = true
              e$payload$data.forEach(function (n) {
                if (e.id === n.id) {
                  t = false
                  if (e.key !== n.key) {
                    p.push($$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, n), {}, {
                      oldKey: e.key
                    }))
                  }
                }
              })
              if (t) {
                d.push(e)
              }
            })
            d.forEach(function (e) {
              $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.CLOUD_DICT_KEYS, e.key)
            })
            p.forEach(function (e) {
              $$_$$_$$_unrestored_shared_1531_2584_26_index.v(e$payload$id, e.oldKey, e.key)
            })
          }
        case 9:
        case "end":
          return f.stop()
      }
    }
  }, Yo)
}
function gi() {
  var e
  var /* [auto-meaningful-name] */r$t1$value
  var n
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {}
          $$_$$_$$_unrestored_shared_1531_2584_42_index.g.forEach(function (t) {
            if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.k && t.attributes.cloudTableId !== $$_$$_$$_unrestored_shared_1531_2584_9.i) {
              e[t.attributes.cloudTableId] = false
            }
            if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && "number" === typeof t.attributes.dataSource) {
              e[t.attributes.dataSource] = false
            }
          })
          r.t0 = RegeneratorRuntime.keys(e)
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10
            break
          }
          r$t1$value = r.t1.value
          n = Number(r$t1$value)
          r.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Rf(n, false))
        case 8:
          r.next = 3
          break
        case 10:
        case "end":
          return r.stop()
      }
    }
  }, Ko)
}
function _i(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$showToast
  var /* [auto-meaningful-name] */s$sent
  var /* [auto-meaningful-name] */_s$sent5
  var a
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$showToast = e$payload.showToast
          s.prev = 1
          s.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 4:
          s$sent = s.sent
          s.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 7:
          if (_s$sent5 = s.sent, !s$sent || _s$sent5) {
            s.next = 14
            break
          }
          s.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.m, e$payload$id, s$sent)
        case 11:
          a = s.sent
          s.next = 17
          break
        case 14:
          s.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.i, e$payload$id)
        case 16:
          a = s.sent
        case 17:
          s.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Dg(e$payload$id, a.columns, true))
        case 19:
          s.next = 26
          break
        case 21:
          if (s.prev = 21, s.t0 = s.catch(1), !e$payload$showToast) {
            s.next = 26
            break
          }
          s.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: s.t0.message
          }))
        case 26:
        case "end":
          return s.stop()
      }
    }
  }, qo, null, [[1, 21]])
}
function vi(e, t) {
  var n
  var r
  var o
  var i
  var /* [auto-meaningful-name] */i$attributes$templateSlotMap
  var s
  var l
  var /* [auto-meaningful-name] */i$attributes$templateSlotMapL$dataBindings
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          n = []
          $$_$$_$$_unrestored_shared_1531_2584_42_index.g.forEach(function (t) {
            if (t.type === $$_$$_$$_unrestored_shared_1531_2584_5.A && t.attributes.dataSource === e) {
              n.push(t)
            }
          })
          r = 0
          o = n
        case 3:
          if (!(r < o.length)) {
            d.next = 14
            break
          }
          for (l in i = o[r], i$attributes$templateSlotMap = i.attributes.templateSlotMap, s = false, i$attributes$templateSlotMap) if ((i$attributes$templateSlotMapL$dataBindings = i$attributes$templateSlotMap[l].dataBindings) && t.includes(i$attributes$templateSlotMapL$dataBindings)) {
            i$attributes$templateSlotMap[l].dataBindings = ""
            s = true
          }
          if (!s) {
            d.next = 11
            break
          }
          d.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(i.id, "templateSlotMap", i$attributes$templateSlotMap, false, true, true))
        case 11:
          r++
          d.next = 3
          break
        case 14:
        case "end":
          return d.stop()
      }
    }
  }, Xo)
}
function bi(e) {
  var /* [auto-meaningful-name] */l$columns
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$columns
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var /* [auto-meaningful-name] */f$sent
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace
  var d
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$columns = e$payload.columns
          e$payload$isEmitOT = e$payload.isEmitOT
          f.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.c)
        case 3:
          f$sent = f.sent
          l = f$sent.find(function (e) {
            return e.id === e$payload$id
          })
          f.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mj(e$payload$id, e$payload$columns))
        case 7:
          f.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oj(e$payload$id, e$payload$columns))
        case 9:
          if (e$payload$isEmitOT && (null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.cloudSpace) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace || $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace.clientOp.updateCloudTableColumns(e$payload$id, e$payload$columns)), !(null === l || undefined === l || null === (l$columns = l.columns) || undefined === l$columns ? undefined : l$columns.length)) {
            f.next = 19
            break
          }
          if (d = [], p = [], l.columns.forEach(function (e) {
            var t = true
            e$payload$columns.forEach(function (n) {
              if (e.id === n.id) {
                t = false
                if (e.name !== n.name) {
                  p.push($$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, n), {}, {
                    oldName: e.name
                  }))
                }
              }
            })
            if (t) {
              d.push(e)
            }
          }), d.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.CLOUD_TABLE_COLUMNS, e.name)
          }), p.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.w(e$payload$id, e.oldName, e.name)
          }), !(d.length > 0)) {
            f.next = 19
            break
          }
          f.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(vi, e$payload$id, d.map(function (e) {
            return e.id
          }))
        case 19:
        case "end":
          return f.stop()
      }
    }
  }, Qo)
}
function yi(e) {
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace
  var /* [auto-meaningful-name] */a$sent
  var /* [auto-meaningful-name] */_a$sent3
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload$id = e.payload.id
          a.prev = 1
          a.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.u)
        case 4:
          a$sent = a.sent
          a.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 7:
          if (_a$sent3 = a.sent, i = [], !a$sent || _a$sent3) {
            a.next = 15
            break
          }
          a.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.l, e$payload$id, a$sent)
        case 12:
          i = a.sent
          a.next = 18
          break
        case 15:
          a.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.h, e$payload$id)
        case 17:
          i = a.sent
        case 18:
          a.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Nj(e$payload$id, i))
        case 20:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.cloudSpace) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace.clientOp.updateCloudTableData(e$payload$id, i)
          }
          a.next = 25
          break
        case 23:
          a.prev = 23
          a.t0 = a.catch(1)
        case 25:
        case "end":
          return a.stop()
      }
    }
  }, Zo, null, [[1, 23]])
}
function Ei(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$list
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          e$payload = e.payload
          e$payload$list = e$payload.list
          if (e$payload.isEmitOT) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.cloudSpace) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace.clientOp.updateCloudDictList(e$payload$list)
            }
          }
          o.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kj(e$payload$list))
        case 4:
        case "end":
          return o.stop()
      }
    }
  }, Jo)
}
function Oi(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$list
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$payload = e.payload
          e$payload$list = e$payload.list
          e$payload$isEmitOT = e$payload.isEmitOT
          i.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lj(e$payload$list))
        case 3:
          if (e$payload$isEmitOT) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.cloudSpace) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$cloudSpace.clientOp.updateCloudTableList(e$payload$list)
            }
          }
        case 4:
        case "end":
          return i.stop()
      }
    }
  }, $o)
}
var wi
_o = {}
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.cb, ui)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.C, ci)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.O, hi)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.Bb, mi)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.Q, _i)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.Db, bi)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.R, yi)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.Cb, Ei)
$$_$$_$$_unrestored_shared_1531_2584_11.a(_o, Message.Eb, Oi)
var Ci = _o
var Ti = qn(Ci)
function Si() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g(Object.keys(Ci), Ti)
        case 2:
          e.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.h([Message.P], ii)
        case 4:
        case "end":
          return e.stop()
      }
    }
  }, ei)
}
var Ii = RegeneratorRuntime.mark(Xa)
var Ai = RegeneratorRuntime.mark(Qa)
var ji = RegeneratorRuntime.mark(Ja)
var Ni = RegeneratorRuntime.mark(onAsyncCreateProject)
var Ri = RegeneratorRuntime.mark(es)
var ki = RegeneratorRuntime.mark(ts)
var xi = RegeneratorRuntime.mark(ns)
var Di = RegeneratorRuntime.mark(loadWorkFromJSON)
var Mi = RegeneratorRuntime.mark(os)
var Li = RegeneratorRuntime.mark(is)
var Pi = RegeneratorRuntime.mark(as)
var Bi = RegeneratorRuntime.mark(ss)
var Fi = RegeneratorRuntime.mark(cs)
var Gi = RegeneratorRuntime.mark(ls)
var Ui = RegeneratorRuntime.mark(us)
var Wi = RegeneratorRuntime.mark(ds)
var Hi = RegeneratorRuntime.mark(ps)
var Vi = RegeneratorRuntime.mark(fs)
var zi = RegeneratorRuntime.mark(hs)
var Yi = RegeneratorRuntime.mark(ms)
var Ki = RegeneratorRuntime.mark(gs)
var qi = RegeneratorRuntime.mark(_s)
var Xi = RegeneratorRuntime.mark(vs)
var Qi = RegeneratorRuntime.mark(bs)
var Zi = RegeneratorRuntime.mark(ys)
var Ji = RegeneratorRuntime.mark(Es)
var $i = RegeneratorRuntime.mark(Cs)
var ea = RegeneratorRuntime.mark(Ts)
var ta = RegeneratorRuntime.mark(Ss)
var na = RegeneratorRuntime.mark(Is)
var ra = RegeneratorRuntime.mark(As)
var oa = RegeneratorRuntime.mark(js)
var ia = RegeneratorRuntime.mark(Ns)
var aa = RegeneratorRuntime.mark(Rs)
var sa = RegeneratorRuntime.mark(ks)
var ca = RegeneratorRuntime.mark(xs)
var la = RegeneratorRuntime.mark(Ds)
var ua = RegeneratorRuntime.mark(Ms)
var da = RegeneratorRuntime.mark(Bs)
var pa = RegeneratorRuntime.mark(Fs)
var fa = RegeneratorRuntime.mark(Gs)
var ha = RegeneratorRuntime.mark(Us)
var ma = RegeneratorRuntime.mark(Ws)
var ga = RegeneratorRuntime.mark(Hs)
var _a = RegeneratorRuntime.mark(Vs)
var va = RegeneratorRuntime.mark(zs)
var ba = RegeneratorRuntime.mark(Ys)
var ya = RegeneratorRuntime.mark(Ks)
var Ea = RegeneratorRuntime.mark(qs)
var Oa = RegeneratorRuntime.mark(Xs)
var wa = RegeneratorRuntime.mark(Qs)
var Ca = RegeneratorRuntime.mark(Zs)
var Ta = RegeneratorRuntime.mark(Js)
var Sa = RegeneratorRuntime.mark($s)
var Ia = RegeneratorRuntime.mark(ec)
var Aa = RegeneratorRuntime.mark(tc)
var ja = RegeneratorRuntime.mark(nc)
var Na = RegeneratorRuntime.mark(rc)
var Ra = RegeneratorRuntime.mark(oc)
var ka = RegeneratorRuntime.mark(ic)
var xa = RegeneratorRuntime.mark(ac)
var Da = RegeneratorRuntime.mark(sc)
var Ma = RegeneratorRuntime.mark(cc)
var La = RegeneratorRuntime.mark(lc)
var Pa = RegeneratorRuntime.mark(uc)
var Ba = RegeneratorRuntime.mark(dc)
var Fa = RegeneratorRuntime.mark(pc)
var Ga = RegeneratorRuntime.mark(fc)
var Ua = RegeneratorRuntime.mark(hc)
var Wa = RegeneratorRuntime.mark(mc)
var Ha = RegeneratorRuntime.mark(gc)
var Va = RegeneratorRuntime.mark(_c)
var za = RegeneratorRuntime.mark(vc)
var Ya = RegeneratorRuntime.mark(bc)
var Ka = RegeneratorRuntime.mark(yc)
var qa = RegeneratorRuntime.mark(wc)
function Xa(e) {
  var t
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */e$payload$shouldSaveCurrentData
  var i
  var /* [auto-meaningful-name] */p$sent
  var /* [auto-meaningful-name] */_p$sent3
  var l
  var u
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent
  return RegeneratorRuntime.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          e$payload = e.payload
          e$payload$index = e$payload.index
          e$payload$shouldSaveCurrentData = e$payload.shouldSaveCurrentData
          i = undefined === e$payload$shouldSaveCurrentData || e$payload$shouldSaveCurrentData
          p.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.x)
        case 3:
          p$sent = p.sent
          p.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 6:
          if (_p$sent3 = p.sent, l = _p$sent3.get(e$payload$index), u = -1 === p$sent ? "__EMPTY_ID__" : (null === (t = _p$sent3.get(p$sent)) || undefined === t ? undefined : t.id) || "__EMPTY_ID__", !(null === l || undefined === l ? undefined : l.id) || l.id === u) {
            p.next = 17
            break
          }
          $$_$$_$$_unrestored_shared_1531_2584_26_index.g.setSelectedItem()
          p.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bi(e$payload$index))
        case 13:
          p.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(undefined))
        case 15:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.z.selectWorkspaceByScreenId(l.id, i)
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.customEvent) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent.emit.focusItem("widget")
          }
        case 17:
        case "end":
          return p.stop()
      }
    }
  }, Ii)
}
function Qa(e) {
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */p$sent
  var /* [auto-meaningful-name] */_p$sent4
  var a
  var s
  var /* [auto-meaningful-name] */_p$sent4$size
  var u
  var d
  return RegeneratorRuntime.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          e$payload$index = e.payload.index
          p.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          p$sent = p.sent
          p.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 6:
          _p$sent4 = p.sent
          a = $$_$$_$$_unrestored_shared_1531_2584_9.B(Language.c(p$sent, "defaultScreenTitle").toString(), _p$sent4)
          s = $$_$$_$$_unrestored_shared_1531_2584_9.A(a)
          _p$sent4$size = _p$sent4.size
          u = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.addWorkspaceData({
            screenId: s.id
          })
          d = undefined !== e$payload$index ? e$payload$index : _p$sent4$size
          p.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.if(s, d))
        case 14:
          p.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.vg(d))
        case 16:
          p.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 18:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.screen) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen.clientOp.addScreen(s, d)
          }
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.blink) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink.clientOp.addWorkspace(s.id, {
              screenId: s.id,
              workspaceJson: null === u || undefined === u ? undefined : u.getWorkspaceJson(),
              workspaceOffset: null === u || undefined === u ? undefined : u.getWorkspaceOffset()
            })
          }
        case 20:
        case "end":
          return p.stop()
      }
    }
  }, Ai)
}
function Za(e) {
  var t = $$_$$_$$_unrestored_shared_1531_2584_9.A(Language.c(e, "defaultScreenTitle").toString())
  return {
    title: Language.c(e, "newProjectTitle").toString(),
    version: $$_$$_$$_unrestored_shared_1531_2584_53.e,
    blockly: $$_$$_$$_unrestored_shared_1531_2584_11.a({}, t.id, {
      screenId: t.id,
      workspaceJson: {
        blocks: {},
        connections: {},
        comments: {}
      },
      workspaceOffset: {
        x: 0,
        y: 0
      }
    }),
    screens: $$_$$_$$_unrestored_shared_1531_2584_11.a({}, t.id, $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, t), {}, {
      widgets: {}
    })),
    screenIds: [t.id],
    imageFileList: [],
    globalVariableList: [],
    globalArrayList: [],
    globalObjectList: []
  }
}
function Ja(e) {
  var /* [auto-meaningful-name] */e$payload$code
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e$payload$code = e.payload.code
          r.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          r$sent = r.sent
          r.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.warpAsyncCreateProject())
        case 6:
          if (40500103 !== e$payload$code) {
            r.next = 11
            break
          }
          r.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            title: "error",
            content: Language.c(r$sent, "MyProject.projectHasDeleted").toString(),
            cancelBtnVisible: false
          }))
        case 9:
          r.next = 19
          break
        case 11:
          if (40500101 !== e$payload$code) {
            r.next = 16
            break
          }
          r.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            title: "error",
            content: Language.c(r$sent, "MyProject.projectHasNoRermission").toString(),
            cancelBtnVisible: false
          }))
        case 14:
          r.next = 19
          break
        case 16:
          if (40400906 !== e$payload$code) {
            r.next = 19
            break
          }
          r.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            title: Language.c(r$sent, "OT.editPermissionLostTitle").toString(),
            content: Language.c(r$sent, "OT.editPermissionLostDescription").toString(),
            cancelBtnVisible: false
          }))
        case 19:
        case "end":
          return r.stop()
      }
    }
  }, ji)
}

function onAsyncCreateProject(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$json
  var /* [auto-meaningful-name] */e$payload$jsonFrom
  var o
  var /* [auto-meaningful-name] */e$payload$lastSavedTime
  var /* [auto-meaningful-name] */e$payload$projectId
  var /* [auto-meaningful-name] */e$payload$isCollWork
  var /* [auto-meaningful-name] */e$payload$isAuthor
  var d
  var /* [auto-meaningful-name] */e$payload$editPermission
  var /* [auto-meaningful-name] */e$payload$sourceTag
  var /* [auto-meaningful-name] */e$payload$sourceId
  var /* [auto-meaningful-name] */y$sent
  var g
  var _
  var v
  var b
  return RegeneratorRuntime.wrap(function (y) {
    for (;;) {
      switch (y.prev = y.next) {
        case 0:
          e$payload = e.payload
          e$payload$json = e$payload.json
          e$payload$jsonFrom = e$payload.jsonFrom
          o = undefined === e$payload$jsonFrom ? $$_$$_$$_unrestored_shared_1531_2584_18.d.OTHER : e$payload$jsonFrom
          e$payload$lastSavedTime = e$payload.lastSavedTime
          e$payload$projectId = e$payload.projectId
          e$payload$isCollWork = e$payload.isCollWork
          e$payload$isAuthor = e$payload.isAuthor
          d = undefined === e$payload$isAuthor || e$payload$isAuthor
          e$payload$editPermission = e$payload.editPermission
          e$payload$sourceTag = e$payload.sourceTag
          e$payload$sourceId = e$payload.sourceId
          y.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Gi(false))
        case 3:
          y.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 5:
          y$sent = y.sent
          y.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ug())
        case 8:
          g = e$payload$json
          _ = e$payload$sourceTag || $$_$$_$$_unrestored_shared_1531_2584_18.g.FREEDOM
          v = e$payload$sourceId || ""
          y.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Di(o))
        case 13:
          if (!g) {
            g = Za(y$sent)
          }
          y.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(loadWorkFromJSON, g)
        case 16:
          y.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uh(e$payload$projectId || $$_$$_$$_unrestored_shared_1531_2584_64.a("PROJECT")))
        case 18:
          y.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ei(e$payload$lastSavedTime))
        case 20:
          y.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(false))
        case 22:
          y.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.n())
        case 24:
          if (o !== $$_$$_$$_unrestored_shared_1531_2584_18.d.MY_WORK) {
            y.next = 29
            break
          }
          y.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Tg(true))
        case 27:
          y.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Cf(true))
        case 29:
          if (!e$payload$projectId) {
            y.next = 38
            break
          }
          if (!e$payload$isCollWork) {
            y.next = 33
            break
          }
          y.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.o(e$payload$projectId))
        case 33:
          $$_$$_$$_unrestored_shared_1531_2584_15.jb(e$payload$projectId)
          _ = g.sourceTag || $$_$$_$$_unrestored_shared_1531_2584_18.g.FREEDOM
          v = g.sourceId || ""
          y.next = 44
          break
        case 38:
          Gn()
          y.next = 41
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Tg(true))
        case 41:
          $$_$$_$$_unrestored_shared_1531_2584_15.k(["workId", "inviteCode", "jsonUrl"])
          y.next = 44
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ts, _, v)
        case 44:
          y.next = 46
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.q(!!d))
        case 46:
          y.next = 48
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Sg())
        case 48:
          y.next = 50
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bg())
        case 50:
          y.next = 52
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.cg())
        case 52:
          if (o !== $$_$$_$$_unrestored_shared_1531_2584_18.d.LOCAL_FILE) {
            y.next = 57
            break
          }
          y.next = 55
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.dg())
        case 55:
          y.next = 63
          break
        case 57:
          y.next = 59
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(pi)
        case 59:
          y.next = 61
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(gi)
        case 61:
          y.next = 63
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fi)
        case 63:
          y.next = 65
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ci(e$payload$editPermission || $$_$$_$$_unrestored_shared_1531_2584_18.c.Edit))
        case 65:
          y.t0 = $$_$$_$$_unrestored_shared_1531_2584_26_index.z
          y.next = 68
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 68:
          y.t1 = y.sent
          y.t0.setCurrentProjectId.call(y.t0, y.t1)
          y.next = 72
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ui({
            tag: _,
            id: v
          }))
        case 72:
          if (o !== $$_$$_$$_unrestored_shared_1531_2584_18.d.HOME_COURSE) {
            $$_$$_$$_unrestored_shared_1531_2584_15.k(["courseId"])
          }
          if (o !== $$_$$_$$_unrestored_shared_1531_2584_18.d.HOME_TEMPLATE) {
            $$_$$_$$_unrestored_shared_1531_2584_15.k(["templateId"])
          }
          y.next = 76
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(go)
        case 76:
          if (e$payload$projectId && (b = Bn()) && Fn(b), o === $$_$$_$$_unrestored_shared_1531_2584_18.d.HOME_COURSE || o === $$_$$_$$_unrestored_shared_1531_2584_18.d.COURSE) {
            y.next = 81
            break
          }
          if ($$_$$_$$_unrestored_shared_1531_2584_623.a.isLoaded()) {
            $$_$$_$$_unrestored_shared_1531_2584_623.a.show()
            $$_$$_$$_unrestored_shared_1531_2584_623.a.close({
              closeAnimationPos: {
                x: 150,
                y: 30
              }
            })
          }
          y.next = 81
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Gh($$_$$_$$_unrestored_shared_1531_2584_391_index.a))
        case 81:
          y.next = 83
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Gi(true))
        case 83:
        case "end":
          return y.stop()
      }
    }
  }, Ni)
}

function es(e) {
  var /* [auto-meaningful-name] */e$payload$json
  var n
  var r
  var o
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$payload$json = e.payload.json
          i.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Gi(false))
        case 3:
          i.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ug())
        case 5:
          n = $$_$$_$$_unrestored_shared_1531_2584_48_343.a(e$payload$json)
          i.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(loadWorkFromJSON, n)
        case 8:
          i.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uh(e$payload$json.id))
        case 10:
          i.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(false))
        case 12:
          i.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bg())
        case 14:
          i.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.cg())
        case 16:
          i.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(pi)
        case 18:
          i.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(gi)
        case 20:
          i.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fi)
        case 22:
          i.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ci($$_$$_$$_unrestored_shared_1531_2584_18.c.Edit))
        case 24:
          i.t0 = $$_$$_$$_unrestored_shared_1531_2584_26_index.z
          i.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 27:
          i.t1 = i.sent
          i.t0.setCurrentProjectId.call(i.t0, i.t1)
          i.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Gi(true))
        case 31:
          r = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.generateAllWorkspaceCodes(e$payload$json.screenList)
          if (undefined !== (o = $$_$$_$$_unrestored_shared_1531_2584_38_607_index.minify(r, {
            keep_fnames: true
          })).code) {
            r = o.code
          }
          window.parent.postMessage({
            type: "PLAYER_BLOCK_CODE",
            payload: r
          }, "*")
        case 35:
        case "end":
          return i.stop()
      }
    }
  }, Ri)
}
function ts(e, t) {
  var /* [auto-meaningful-name] */o$sent
  var /* [auto-meaningful-name] */_o$sent9
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          o$sent = o.sent
          o.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 5:
          _o$sent9 = o.sent
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("WorkCreate", {
            sourceTag: e,
            sourceId: t,
            workId: o$sent,
            workType: "APP工匠",
            workName: _o$sent9,
            isSuccess: true,
            failReason: ""
          })
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, ki)
}
function ns(e) {
  var /* [auto-meaningful-name] */e$payload$json
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          e$payload$json = e.payload.json
          n.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.cg())
        case 3:
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bg())
        case 5:
          n.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(loadWorkFromJSON, e$payload$json)
        case 7:
          n.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Cf(true))
        case 9:
        case "end":
          return n.stop()
      }
    }
  }, xi)
}

/**
 * 从 JSON 文件加载作品
 *
 * @param workJSON 作品 JSON 文件
 * @returns
 */

function loadWorkFromJSON(workJSON) {
  let blockly
  let title
  let imageFileList
  let soundFileList
  let iconFileList
  let screenIds
  let globalVariableList
  let globalArrayList
  let globalWidgetIds
  let globalWidgets
  let extensionWidgetList
  let unsafeExtensionWidgetList
  let globalObjectList
  let version
  let cloudDictKeysList
  let cloudTableColumnList
  let cloudTableDataList
  let cloudDictList
  let cloudTableList
  var A
  var /* [auto-meaningful-name] */_regeneratorContext$sent3
  var N
  var /* [auto-meaningful-name] */_regeneratorContext$sent4
  var k
  var x
  var D
  var /* [auto-meaningful-name] */D$value
  var L
  var P
  var B
  var /* [auto-meaningful-name] */B$value
  var /* [auto-meaningful-name] */regeneratorContext$sent
  var U
  var W
  var H
  var /* [auto-meaningful-name] */H$attributes$fontFamily
  var /* [auto-meaningful-name] */H$attributes
  var /* [auto-meaningful-name] */H$attributes$content
  var K
  var q
  var X
  var /* [auto-meaningful-name] */regeneratorContext$t1$value
  var /* [auto-meaningful-name] */regeneratorContext$t3$value
  var /* [auto-meaningful-name] */regeneratorContext$t5$value
  return RegeneratorRuntime.wrap(function (regeneratorContext) {
    for (;;) {
      switch (regeneratorContext.prev = regeneratorContext.next) {
        case 0:
          $$_$$_$$_unrestored_shared_1531_2584_48_343.b(workJSON)
          $$_$$_$$_unrestored_shared_1531_2584_42_index.b.clear();
          ({
            blockly,
            title,
            imageFileList,
            soundFileList,
            iconFileList,
            screenIds,
            globalVariableList,
            globalArrayList,
            globalWidgetIds = [],
            globalWidgets = {},
            extensionWidgetList = [],
            unsafeExtensionWidgetList = [],
            globalObjectList,
            version = 1,
            cloudDictKeysList,
            cloudTableColumnList,
            cloudTableDataList,
            cloudDictList,
            cloudTableList
          } = workJSON)
          regeneratorContext.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_widget_custom_load.loadWidgetFromStorage, extensionWidgetList, unsafeExtensionWidgetList)
        case 5:
          A = $$_$$_$$_unrestored_shared_1531_2584_99.f(workJSON.screens)
          regeneratorContext.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_widget_custom_load.w, extensionWidgetList, A, globalWidgets)
        case 8:
          regeneratorContext.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.z)
        case 10:
          _regeneratorContext$sent3 = regeneratorContext.sent
          $$_$$_$$_unrestored_shared_1531_2584_48_343.c(A, version)
          N = $$_$$_$$_unrestored_shared_1531_2584_99.e(workJSON.screens, screenIds)
          regeneratorContext.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Th({
            screens: N,
            title: title,
            globalVariableList: globalVariableList,
            globalArrayList: globalArrayList,
            globalWidgetIds: globalWidgetIds,
            globalObjectList: globalObjectList
          }))
        case 15:
          regeneratorContext.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 17:
          if (_regeneratorContext$sent4 = regeneratorContext.sent, $$_$$_$$_unrestored_shared_1531_2584_21_index.clearLocalDocuments(_regeneratorContext$sent4, globalWidgetIds), $$_$$_$$_unrestored_shared_1531_2584_174.a.clear(), _regeneratorContext$sent3 === $$_$$_$$_unrestored_shared_1531_2584_18.d.LOCAL_FILE) {
            k = $$_$$_$$_unrestored_shared_1531_2584_9.Zb(globalWidgets)
            x = $$_$$_$$_unrestored_shared_1531_2584_47.a(k)
            try {
              for (x.s(); !(D = x.n()).done;) {
                D$value = D.value
                $$_$$_$$_unrestored_shared_1531_2584_42_index.b.set(D$value.id, D$value)
              }
            } catch (ee) {
              x.e(ee)
            } finally {
              x.f()
            }
            L = $$_$$_$$_unrestored_shared_1531_2584_9.Zb(A)
            P = $$_$$_$$_unrestored_shared_1531_2584_47.a(L)
            try {
              for (P.s(); !(B = P.n()).done;) {
                B$value = B.value
                $$_$$_$$_unrestored_shared_1531_2584_42_index.b.set(B$value.id, B$value)
              }
            } catch (ee) {
              P.e(ee)
            } finally {
              P.f()
            }
          }
          $$_$$_$$_unrestored_shared_1531_2584_9.Sb($$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, A), globalWidgets))
          regeneratorContext.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(go)
        case 24:
          $$_$$_$$_unrestored_shared_1531_2584_9.Qb(imageFileList)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.z.replaceWorkspaces(blockly)
          $$_$$_$$_unrestored_shared_1531_2584_38_376.b()
          regeneratorContext.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ms)
        case 29:
          regeneratorContext.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($r, soundFileList || [])
        case 31:
          regeneratorContext.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(uo, iconFileList || [])
        case 33:
          regeneratorContext.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.vg(0, false))
        case 35:
          regeneratorContext.next = 37
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zj())
        case 37:
          regeneratorContext.next = 39
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.j)
        case 39:
          regeneratorContext$sent = regeneratorContext.sent
          U = {}
          regeneratorContext$sent.forEach(function (e) {
            if (e.cdnUrl) {
              U[e.id] = e.cdnUrl
            }
          })
          for (W in A) {
            if ((H = A[W]).type === $$_$$_$$_unrestored_shared_1531_2584_5.H && (H$attributes$fontFamily = H.attributes.fontFamily) && U[H$attributes$fontFamily] && !$$_$$_$$_unrestored_shared_1531_2584_15.db[H$attributes$fontFamily]) {
              $$_$$_$$_unrestored_shared_1531_2584_15.bb(H$attributes$fontFamily, U[H$attributes$fontFamily])
              $$_$$_$$_unrestored_shared_1531_2584_15.db[H$attributes$fontFamily] = true
            }
            if (H && H.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === H.type) {
              H$attributes = H.attributes
              H$attributes$content = H$attributes.content
              K = undefined === H$attributes$content ? "" : H$attributes$content
              $$_$$_$$_unrestored_shared_1531_2584_38_375.a(K).forEach(function (e) {
                if (e && U[e] && !$$_$$_$$_unrestored_shared_1531_2584_15.db[e]) {
                  $$_$$_$$_unrestored_shared_1531_2584_15.bb(e, U[e])
                  $$_$$_$$_unrestored_shared_1531_2584_15.db[e] = true
                }
              })
            }
          }
          if (_regeneratorContext$sent3 === $$_$$_$$_unrestored_shared_1531_2584_18.d.LOCAL_FILE) {
            regeneratorContext.next = 50
            break
          }
          q = $$_$$_$$_unrestored_shared_1531_2584_9.ab()
          regeneratorContext.next = 47
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Sj(q.map(function (e) {
            return e.attributes.cloudDictId
          })))
        case 47:
          X = $$_$$_$$_unrestored_shared_1531_2584_9.rb()
          regeneratorContext.next = 50
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Tj(X))
        case 50:
          if (!cloudDictKeysList) {
            regeneratorContext.next = 58
            break
          }
          regeneratorContext.t0 = Ct.a.keys(cloudDictKeysList)
        case 52:
          if ((regeneratorContext.t1 = regeneratorContext.t0()).done) {
            regeneratorContext.next = 58
            break
          }
          regeneratorContext$t1$value = regeneratorContext.t1.value
          regeneratorContext.next = 56
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jj(Number(regeneratorContext$t1$value), cloudDictKeysList[regeneratorContext$t1$value]))
        case 56:
          regeneratorContext.next = 52
          break
        case 58:
          if (!cloudTableColumnList) {
            regeneratorContext.next = 66
            break
          }
          regeneratorContext.t2 = Ct.a.keys(cloudTableColumnList)
        case 60:
          if ((regeneratorContext.t3 = regeneratorContext.t2()).done) {
            regeneratorContext.next = 66
            break
          }
          regeneratorContext$t3$value = regeneratorContext.t3.value
          regeneratorContext.next = 64
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mj(Number(regeneratorContext$t3$value), cloudTableColumnList[regeneratorContext$t3$value]))
        case 64:
          regeneratorContext.next = 60
          break
        case 66:
          if (!cloudTableDataList) {
            regeneratorContext.next = 74
            break
          }
          regeneratorContext.t4 = Ct.a.keys(cloudTableDataList)
        case 68:
          if ((regeneratorContext.t5 = regeneratorContext.t4()).done) {
            regeneratorContext.next = 74
            break
          }
          regeneratorContext$t5$value = regeneratorContext.t5.value
          regeneratorContext.next = 72
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Nj(Number(regeneratorContext$t5$value), cloudTableDataList[regeneratorContext$t5$value]))
        case 72:
          regeneratorContext.next = 68
          break
        case 74:
          if (!cloudDictList) {
            regeneratorContext.next = 77
            break
          }
          regeneratorContext.next = 77
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kj(cloudDictList))
        case 77:
          if (!cloudTableList) {
            regeneratorContext.next = 80
            break
          }
          regeneratorContext.next = 80
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lj(cloudTableList))
        case 80:
        case "end":
          return regeneratorContext.stop()
      }
    }
  }, Di)
}
function os(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */_m$sent5
  var a
  var s
  var /* [auto-meaningful-name] */m$sent
  var /* [auto-meaningful-name] */_m$sent6
  var d
  var /* [auto-meaningful-name] */_m$sent7
  var f
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen
  return RegeneratorRuntime.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          e$payload = e.payload
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          m.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 3:
          _m$sent5 = m.sent
          a = _m$sent5.findIndex(function (e) {
            return e.id === e$payload$screenId
          })
          s = _m$sent5.get(a)
          m.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.x)
        case 8:
          m$sent = m.sent
          m.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 11:
          if (_m$sent6 = m.sent, !(a > -1 && s && _m$sent6)) {
            m.next = 29
            break
          }
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.SCREEN, e$payload$screenId)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.z.removeWorkspaceByScreenId(e$payload$screenId)
          s.get("widgetIds").forEach(function (e) {
            return $$_$$_$$_unrestored_shared_1531_2584_9.F(e)
          })
          d = a < m$sent ? Math.max(m$sent - 1, 0) : Math.min(m$sent, _m$sent5.size - 2)
          m.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.eh(e$payload$screenId))
        case 19:
          m.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bi(d))
        case 21:
          m.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 23:
          m.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 25:
          _m$sent7 = m.sent
          if ((f = _m$sent7.get(d)) && f.id !== _m$sent6.id) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.z.selectWorkspaceByScreenId(f.id, false)
          }
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.screen) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen.clientOp.removeScreen(a, e$payload$screenId)
            }
          }
        case 29:
        case "end":
          return m.stop()
      }
    }
  }, Mi)
}
function is(e) {
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */T$sent
  var r
  var o
  var /* [auto-meaningful-name] */_T$sent
  var s
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink
  var d
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var b
  var y
  var E
  var O
  var w
  var C
  return RegeneratorRuntime.wrap(function (T) {
    for (;;) {
      switch (T.prev = T.next) {
        case 0:
          e$payload$screenId = e.payload.screenId
          T.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 3:
          T$sent = T.sent
          r = T$sent.findIndex(function (e) {
            return e.id === e$payload$screenId
          })
          o = T$sent.get(r)
          T.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 8:
          if (_T$sent = T.sent, s = r + 1, !o || !_T$sent) {
            T.next = 48
            break
          }
          d = $$_$$_$$_unrestored_shared_1531_2584_9.B(o.get("title"), T$sent)
          p = $$_$$_$$_unrestored_shared_1531_2584_9.A(d)
          f = o.get("widgetIds")
          h = $$_$$_$$_unrestored_shared_1531_2584_25_index.a(f)
          f.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_9.v(e, h)
          })
          p.widgetIds = h
          m = o.get("invisibleWidgetIds")
          g = $$_$$_$$_unrestored_shared_1531_2584_25_index.a(m)
          m.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_9.v(e, g)
          })
          p.invisibleWidgetIds = g
          _ = new Map()
          h.forEach(function (e, t) {
            _.set(f[t], e)
          })
          v = Lodash.cloneDeep(o.get("primitiveVariables"))
          b = new Map()
          v.forEach(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_64.a("VARIABLE")
            b.set(e.id, t)
            e.id = t
          })
          p.primitiveVariables = v
          y = Lodash.cloneDeep(o.get("arrayVariables"))
          E = new Map()
          y.forEach(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_64.a("VARIABLE")
            E.set(e.id, t)
            e.id = t
          })
          p.arrayVariables = y
          O = Lodash.cloneDeep(o.get("objectVariables"))
          w = new Map()
          O.forEach(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_64.a("OBJECT")
            w.set(e.id, t)
            e.id = t
          })
          p.objectVariables = O
          p.snapshot = o.get("snapshot")
          p.backgroundColor = o.get("backgroundColor")
          C = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.copyWorkspaceData(o.toJS().id, p.id, _, b, E, w)
          p.backgroundImage = o.get("backgroundImage")
          p.backgroundImageResizeMode = o.get("backgroundImageResizeMode")
          T.next = 42
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.if(p, s))
        case 42:
          T.next = 44
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.vg(s))
        case 44:
          T.next = 46
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 46:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.screen) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen.clientOp.addScreen(p, s)
          }
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.blink) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$blink.clientOp.addWorkspace(p.id, C)
          }
        case 48:
        case "end":
          return T.stop()
      }
    }
  }, Li)
}
function as(e, t) {
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          if (e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.y) {
            r.next = 5
            break
          }
          r.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ss, e.id)
        case 3:
          r.next = 9
          break
        case 5:
          if (e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.l) {
            r.next = 9
            break
          }
          if (!t) {
            r.next = 9
            break
          }
          r.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Wt, e.attributes.cloudDbId)
        case 9:
          $$_$$_$$_unrestored_shared_1531_2584_9.F(e.id)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q(e.type, e.id)
          r.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lh(e.id))
        case 13:
          r.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bh(e.id))
        case 15:
          if (t) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.globalWidget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget.clientOp.del(e.id)
            }
          }
        case 16:
        case "end":
          return r.stop()
      }
    }
  }, Pi)
}
function ss(e) {
  var /* [auto-meaningful-name] */n$sent
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          n$sent = n.sent
          $$_$$_$$_unrestored_shared_1531_2584_9.yb(e).forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.DOC_KEYS, e.id)
          })
          gn(n$sent)
        case 6:
        case "end":
          return n.stop()
      }
    }
  }, Bi)
}
function cs(e, t, n) {
  var /* [auto-meaningful-name] */e$type
  var o
  var a
  var s
  var l
  var u
  var d
  var /* [auto-meaningful-name] */d$value
  var f
  var h
  var m
  var g
  var /* [auto-meaningful-name] */g$value
  var v
  var b
  var /* [auto-meaningful-name] */b$widgetIds
  var E
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var w
  var /* [auto-meaningful-name] */_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget5
  var /* [auto-meaningful-name] */_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget6
  return RegeneratorRuntime.wrap(function (S) {
    for (;;) {
      switch (S.prev = S.next) {
        case 0:
          if (e$type = e.type, o = e.id, a = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e$type), e$type !== $$_$$_$$_unrestored_shared_1531_2584_5.f) {
            S.next = 25
            break
          }
          s = e
          l = $$_$$_$$_unrestored_shared_1531_2584_25_index.a(s.widgetIds)
          u = $$_$$_$$_unrestored_shared_1531_2584_47.a(l)
          S.prev = 7
          u.s()
        case 9:
          if ((d = u.n()).done) {
            S.next = 15
            break
          }
          d$value = d.value
          S.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mf(d$value, t, false))
        case 13:
          S.next = 9
          break
        case 15:
          S.next = 20
          break
        case 17:
          S.prev = 17
          S.t0 = S.catch(7)
          u.e(S.t0)
        case 20:
          S.prev = 20
          u.f()
          return S.finish(20)
        case 23:
          S.next = 48
          break
        case 25:
          if (e$type !== $$_$$_$$_unrestored_shared_1531_2584_5.x && e$type !== $$_$$_$$_unrestored_shared_1531_2584_5.A) {
            S.next = 47
            break
          }
          f = e
          h = $$_$$_$$_unrestored_shared_1531_2584_25_index.a(f.widgetIds)
          m = $$_$$_$$_unrestored_shared_1531_2584_47.a(h)
          S.prev = 29
          m.s()
        case 31:
          if ((g = m.n()).done) {
            S.next = 37
            break
          }
          g$value = g.value
          S.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mf(g$value, t, false))
        case 35:
          S.next = 31
          break
        case 37:
          S.next = 42
          break
        case 39:
          S.prev = 39
          S.t1 = S.catch(29)
          m.e(S.t1)
        case 42:
          S.prev = 42
          m.f()
          return S.finish(42)
        case 45:
          S.next = 48
          break
        case 47:
          if (!(e$type !== $$_$$_$$_unrestored_shared_1531_2584_5.c && e$type !== $$_$$_$$_unrestored_shared_1531_2584_5.a)) {
            if ((v = null === e || undefined === e ? undefined : e.parentId) && $$_$$_$$_unrestored_shared_1531_2584_9.Bb(v)) {
              b = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(v)
              b$widgetIds = b.widgetIds
              if ((E = b$widgetIds.indexOf(o)) > -1) {
                b$widgetIds.splice(E, 1)
                if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
                  $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(t, v, "widgetIds", b$widgetIds)
                }
              }
            }
            if (w = $$_$$_$$_unrestored_shared_1531_2584_214.b(o)) {
              $$_$$_$$_unrestored_shared_1531_2584_144.b(w, o)
            }
          }
        case 48:
          $$_$$_$$_unrestored_shared_1531_2584_9.F(e.id)
          S.next = 51
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mh(t, o, null === a || undefined === a ? undefined : a.isInvisibleWidget))
        case 51:
          S.next = 53
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bh(o))
        case 53:
          if (n) {
            if (null === a || undefined === a ? undefined : a.isInvisibleWidget) {
              if (!(null === (_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget5 = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget5)) {
                _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget5.clientOp.deleteInvisibleWidgetOp(t, o)
              }
            } else {
              if (!(null === (_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget6 = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget6)) {
                _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget6.clientOp.deleteWidgetOp(t, o)
              }
            }
          }
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q(e$type, o)
          if (!("CANVAS_WIDGET" !== e$type && "ACTOR_WIDGET" !== e$type)) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.l()
          }
        case 56:
        case "end":
          return S.stop()
      }
    }
  }, Fi, null, [[7, 17, 20, 23], [29, 39, 42, 45]])
}
function ls(e) {
  var /* [auto-meaningful-name] */o$sent
  var /* [auto-meaningful-name] */_o$sent0
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          o$sent = o.sent
          o.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 5:
          if (_o$sent0 = o.sent, r = true, e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.l || _o$sent0) {
            o.next = 11
            break
          }
          o.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: Language.c(o$sent, "notHavePermissionToDeleteCloudDb").toString()
          }))
        case 10:
          r = false
        case 11:
          return o.abrupt("return", r)
        case 12:
        case "end":
          return o.stop()
      }
    }
  }, Gi)
}
function us(e) {
  var /* [auto-meaningful-name] */o$sent
  var /* [auto-meaningful-name] */_o$sent1
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          o$sent = o.sent
          o.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.r)
        case 5:
          if (_o$sent1 = o.sent, r = true, e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.l) {
            o.next = 18
            break
          }
          if (!($$_$$_$$_unrestored_shared_1531_2584_9.cb().length >= $$_$$_$$_unrestored_shared_1531_2584_305.f)) {
            o.next = 14
            break
          }
          o.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: Language.c(o$sent, "cloudDbCountOverflowTitle").toString()
          }))
        case 11:
          r = false
          o.next = 18
          break
        case 14:
          if (_o$sent1) {
            o.next = 18
            break
          }
          o.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: Language.c(o$sent, "notHavePermissionToAddCloudDb").toString()
          }))
        case 17:
          r = false
        case 18:
          return o.abrupt("return", r)
        case 19:
        case "end":
          return o.stop()
      }
    }
  }, Ui)
}
function ds(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var a
  var /* [auto-meaningful-name] */v$sent
  var /* [auto-meaningful-name] */_v$sent3
  var /* [auto-meaningful-name] */a$attributes$cloudDbId
  var d
  var p
  var f
  var /* [auto-meaningful-name] */f$value
  var m
  var /* [auto-meaningful-name] */m$attributes$templateSlotMap
  var _
  return RegeneratorRuntime.wrap(function (v) {
    for (;;) {
      switch (v.prev = v.next) {
        case 0:
          e$payload = e.payload
          e$payload$screenId = e$payload.screenId
          e$payload$widgetId = e$payload.widgetId
          e$payload$isEmitOT = e$payload.isEmitOT
          i = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)
          v.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.D)
        case 4:
          if (v$sent = v.sent, a) {
            v.next = 7
            break
          }
          return v.abrupt("return")
        case 7:
          if (!i) {
            v.next = 13
            break
          }
          v.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ls, a)
        case 10:
          if (v.sent) {
            v.next = 13
            break
          }
          return v.abrupt("return")
        case 13:
          if (a.type !== $$_$$_$$_unrestored_shared_1531_2584_5.h) {
            v.next = 21
            break
          }
          v.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 16:
          if (_v$sent3 = v.sent, !$$_$$_$$_unrestored_shared_1531_2584_99.a(_v$sent3)) {
            v.next = 21
            break
          }
          a$attributes$cloudDbId = a.attributes.cloudDbId
          v.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.d, a$attributes$cloudDbId, _v$sent3)
        case 21:
          if (a.id === v$sent && e$payload$screenId && $$_$$_$$_unrestored_shared_1531_2584_26_index.g.setSelectedItemByWidgetId(e$payload$screenId), !a.isGlobalWidget) {
            v.next = 27
            break
          }
          v.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(as, a, i)
        case 25:
          v.next = 30
          break
        case 27:
          if (!e$payload$screenId || !a) {
            v.next = 30
            break
          }
          v.next = 30
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(cs, a, e$payload$screenId, i)
        case 30:
          if (a.type !== $$_$$_$$_unrestored_shared_1531_2584_5.G) {
            v.next = 57
            break
          }
          d = $$_$$_$$_unrestored_shared_1531_2584_9.L($$_$$_$$_unrestored_shared_1531_2584_5.A)
          p = $$_$$_$$_unrestored_shared_1531_2584_47.a(d)
          v.prev = 33
          p.s()
        case 35:
          if ((f = p.n()).done) {
            v.next = 47
            break
          }
          if (f$value = f.value, (null === (m = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(f$value)) || undefined === m ? undefined : m.type) !== $$_$$_$$_unrestored_shared_1531_2584_5.A || m.attributes.dataSource !== e$payload$widgetId) {
            v.next = 45
            break
          }
          for (_ in m$attributes$templateSlotMap = m.attributes.templateSlotMap) m$attributes$templateSlotMap[_].dataBindings = ""
          v.next = 43
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(f$value, "dataSource", ""))
        case 43:
          v.next = 45
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(f$value, "templateSlotMap", m$attributes$templateSlotMap))
        case 45:
          v.next = 35
          break
        case 47:
          v.next = 52
          break
        case 49:
          v.prev = 49
          v.t0 = v.catch(33)
          p.e(v.t0)
        case 52:
          v.prev = 52
          p.f()
          return v.finish(52)
        case 55:
          v.next = 57
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 57:
          v.next = 59
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 59:
        case "end":
          return v.stop()
      }
    }
  }, Wi, null, [[33, 49, 52, 55]])
}
function ps(e, t, n) {
  var /* [auto-meaningful-name] */_b$sent3
  var /* [auto-meaningful-name] */_b$sent4
  var s
  var c
  var /* [auto-meaningful-name] */c$attributes
  var u
  var d
  var /* [auto-meaningful-name] */b$sent
  var f
  var h
  var /* [auto-meaningful-name] */s$contentTextField
  var g
  var _
  var v
  return RegeneratorRuntime.wrap(function (b) {
    for (;;) {
      switch (b.prev = b.next) {
        case 0:
          u = function (e) {
            return "string" === typeof e ? Language.f(_b$sent3, e) : (e.constructor !== Array && e.constructor !== Object || Object.entries(e).forEach(function (t) {
              var n = $$_$$_$$_unrestored_shared_1531_2584_10_index.a(t, 2)
              var r = n[0]
              var o = n[1]
              e[r] = u(o)
            }), e)
          }
          b.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          _b$sent3 = b.sent
          b.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.n)
        case 6:
          if (_b$sent4 = b.sent, s = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e)) {
            b.next = 10
            break
          }
          return b.abrupt("return", null)
        case 10:
          if (c = $$_$$_$$_unrestored_shared_1531_2584_15.q(s.widget), c$attributes = c.attributes, s.isInvisibleWidget || undefined !== c.opacity || (c.opacity = 100), u(c$attributes), d = [], !s.widget.isGlobalWidget) {
            b.next = 19
            break
          }
          d = _b$sent4
          b.next = 24
          break
        case 19:
          if (!n) {
            b.next = 24
            break
          }
          b.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.H, n)
        case 22:
          if (b$sent = b.sent) {
            d = [].concat($$_$$_$$_unrestored_shared_1531_2584_25_index.a(b$sent.widgetIds), $$_$$_$$_unrestored_shared_1531_2584_25_index.a(b$sent.invisibleWidgetIds))
          }
        case 24:
          f = s.title
          if (!!s.contentTextField && s.contentTextField) {
            s$contentTextField = s.contentTextField
            h = c$attributes[s$contentTextField]
            h = $$_$$_$$_unrestored_shared_1531_2584_9.D(e, d, h)
          } else {
            f = null === (g = Language.c(_b$sent3, s.title)) || undefined === g ? undefined : g.toString()
            f = $$_$$_$$_unrestored_shared_1531_2584_9.D(e, d, f)
          }
          _ = $$_$$_$$_unrestored_shared_1531_2584_64.a(e)
          v = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({
            animationRecord: {},
            size: {
              width: 10,
              height: 10
            }
          }, c), {}, {
            id: _,
            title: f,
            contentTitle: h,
            type: e,
            position: t,
            visible: true,
            attributes: c$attributes,
            isGlobalWidget: s.widget.isGlobalWidget
          })
          return b.abrupt("return", v)
        case 30:
        case "end":
          return b.stop()
      }
    }
  }, Hi)
}
function fs(e) {
  var /* [auto-meaningful-name] */n$sent
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Bt, e.title)
        case 2:
          n$sent = n.sent
          return n.abrupt("return", n$sent)
        case 4:
        case "end":
          return n.stop()
      }
    }
  }, Vi)
}
function hs(e, t) {
  var n
  var /* [auto-meaningful-name] */e$attributes$fields
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          if (n = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e.type)) {
            o.next = 3
            break
          }
          return o.abrupt("return")
        case 3:
          if ($$_$$_$$_unrestored_shared_1531_2584_9.Ub(e.id, e), !e.isGlobalWidget) {
            o.next = 9
            break
          }
          o.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.hf(e.id))
        case 7:
          o.next = 12
          break
        case 9:
          if (!t) {
            o.next = 12
            break
          }
          o.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.jf(t, e.id, n.isInvisibleWidget))
        case 12:
          if (e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.B && e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.y) {
            o.next = 18
            break
          }
          e$attributes$fields = e.attributes.fields
          o.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf($$_$$_$$_unrestored_shared_1531_2584_112.a(e.type, {
            id: e.id,
            name: e.title,
            value: e$attributes$fields,
            defaultValue: "no-use"
          }, {
            isWatching: false
          })))
        case 16:
          o.next = 21
          break
        case 18:
          if (e.type !== $$_$$_$$_unrestored_shared_1531_2584_5.G) {
            o.next = 21
            break
          }
          o.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf($$_$$_$$_unrestored_shared_1531_2584_112.a($$_$$_$$_unrestored_shared_1531_2584_5.G, {
            id: e.id,
            name: e.title,
            value: e.attributes.db,
            defaultValue: "no-use"
          }, {
            isWatching: false
          })))
        case 21:
        case "end":
          return o.stop()
      }
    }
  }, zi)
}
function ms(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$widgetType
  var /* [auto-meaningful-name] */e$payload$position
  var /* [auto-meaningful-name] */e$payload$attributes
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var s
  var /* [auto-meaningful-name] */v$sent
  var /* [auto-meaningful-name] */_v$sent8
  var /* [auto-meaningful-name] */_v$sent9
  var /* [auto-meaningful-name] */_v$sent0
  var /* [auto-meaningful-name] */_v$sent1
  var /* [auto-meaningful-name] */_v$sent10
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var /* [auto-meaningful-name] */_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget7
  return RegeneratorRuntime.wrap(function (v) {
    for (;;) {
      switch (v.prev = v.next) {
        case 0:
          e$payload = e.payload
          e$payload$screenId = e$payload.screenId
          e$payload$widgetType = e$payload.widgetType
          e$payload$position = e$payload.position
          e$payload$attributes = e$payload.attributes
          e$payload$setBlockValue = e$payload.setBlockValue
          s = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e$payload$widgetType)
          v.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ps, e$payload$widgetType, e$payload$position, e$payload$screenId)
        case 4:
          if ((v$sent = v.sent) && s) {
            v.next = 8
            break
          }
          console.error("Can not create widget")
          return v.abrupt("return")
        case 8:
          v.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(us, v$sent)
        case 10:
          if (v.sent) {
            v.next = 13
            break
          }
          return v.abrupt("return")
        case 13:
          v.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 15:
          if (_v$sent8 = v.sent, v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.n && v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.J) {
            v.next = 20
            break
          }
          v$sent.attributes.timeStamp = Date.now()
          v.next = 68
          break
        case 20:
          if (v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.l) {
            v.next = 30
            break
          }
          if (_v$sent8) {
            v.next = 25
            break
          }
          v.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ch())
        case 24:
          return v.abrupt("return")
        case 25:
          v.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fs, v$sent)
        case 27:
          v$sent.attributes.cloudDbId = v.sent
          v.next = 68
          break
        case 30:
          if (v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.x && v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.A) {
            v.next = 38
            break
          }
          v.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(_s, e$payload$screenId, v$sent.id, v$sent.attributes.templateType)
        case 33:
          _v$sent9 = v.sent
          v$sent.widgetIds = _v$sent9.widgetIds
          v$sent.attributes.templateSlotMap = _v$sent9.templateSlotMap
          v.next = 68
          break
        case 38:
          if (v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.m) {
            v.next = 42
            break
          }
          if (e$payload$attributes) {
            if (Lodash.isString(e$payload$attributes.name)) {
              v$sent.title = e$payload$attributes.name
            }
            if (e$payload$attributes.header) {
              v$sent.attributes.db.header = e$payload$attributes.header
            }
            if (e$payload$attributes.data) {
              v$sent.attributes.db.data = e$payload$attributes.data
            }
          }
          v.next = 68
          break
        case 42:
          if (v$sent.type !== $$_$$_$$_unrestored_shared_1531_2584_5.h) {
            v.next = 67
            break
          }
          v.next = 45
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 45:
          if (_v$sent0 = v.sent, _v$sent8) {
            v.next = 50
            break
          }
          v.next = 49
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ch())
        case 49:
          return v.abrupt("return")
        case 50:
          if (e$payload$attributes && (v$sent.attributes.cloudDbId = e$payload$attributes.cloudDbId, v$sent.attributes.name = e$payload$attributes.name, v$sent.attributes.columns = e$payload$attributes.columns, v$sent.attributes.primaryKey = e$payload$attributes.primaryKey), "_EMPTY_CLOUD_DB_ID_" !== v$sent.attributes.cloudDbId) {
            v.next = 64
            break
          }
          v.next = 54
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 54:
          _v$sent1 = v.sent
          v.next = 57
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.b, Language.c(_v$sent1, "cloudDb.defaultName").toString(), $$_$$_$$_unrestored_shared_1531_2584_99.a(_v$sent0) ? _v$sent0 : "")
        case 57:
          if ((_v$sent10 = v.sent).id) {
            v.next = 62
            break
          }
          v.next = 61
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: Language.c(_v$sent1, "cloudDBWidget.generateError").toString()
          }))
        case 61:
          return v.abrupt("return")
        case 62:
          v$sent.attributes.cloudDbId = _v$sent10.id
          v$sent.attributes.name = _v$sent10.name
        case 64:
          v$sent.title = v$sent.attributes.name
          v.next = 68
          break
        case 67:
          if (v$sent.type === $$_$$_$$_unrestored_shared_1531_2584_5.G) {
            v$sent.attributes.db = $$_$$_$$_unrestored_shared_1531_2584_407.d()
          }
        case 68:
          v.next = 70
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(hs, v$sent, e$payload$screenId)
        case 70:
          if (e$payload$setBlockValue) {
            e$payload$setBlockValue(v$sent.id)
          }
          if (v$sent.isGlobalWidget) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.globalWidget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget.clientOp.add(v$sent)
            }
          } else {
            if (e$payload$screenId) {
              if (s.isInvisibleWidget) {
                if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
                  $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addInvisibleWidgetOp(e$payload$screenId, v$sent)
                }
              } else {
                if (!(null === (_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget7 = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget7)) {
                  _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget7.clientOp.addWidgetOp(e$payload$screenId, v$sent)
                }
              }
            }
          }
          v.next = 74
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 74:
          if (v$sent.type === $$_$$_$$_unrestored_shared_1531_2584_5.m) {
            v.next = 79
            break
          }
          v.next = 77
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(vs, v$sent)
        case 77:
          v.next = 79
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(v$sent.id))
        case 79:
          v.next = 81
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(bs, e$payload$screenId, v$sent)
        case 81:
          WidgetShop.reportUse(v$sent.type, null === _v$sent8 || undefined === _v$sent8 ? undefined : _v$sent8.id)
          return v.abrupt("return", v$sent)
        case 83:
        case "end":
          return v.stop()
      }
    }
  }, Yi)
}
function gs(e) {
  var /* [auto-meaningful-name] */e$payload$widgetType
  var /* [auto-meaningful-name] */l$sent
  var r
  var /* [auto-meaningful-name] */_l$sent3
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$extensionWidget
  var a
  var s
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          if (e$payload$widgetType = e.payload.widgetType, $$_$$_$$_unrestored_shared_1531_2584_9.Db(e$payload$widgetType)) {
            l.next = 17
            break
          }
          l.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.t)
        case 4:
          if (l$sent = l.sent, !(r = l$sent.find(function (e) {
            return CustomWidgetType.standardize(e.type, true) === e$payload$widgetType
          }))) {
            l.next = 11
            break
          }
          l.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_widget_custom_load.u, r.cdnUrl, r.id)
        case 9:
          l.next = 16
          break
        case 11:
          l.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 13:
          _l$sent3 = l.sent
          l.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: Language.c(_l$sent3, "WidgetList.addFailureToast").toString()
          }))
        case 16:
          if (CustomWidgetType.isSafeExtensions(e$payload$widgetType)) {
            a = $$_widget_custom_storage.f(e$payload$widgetType)
            s = {
              id: a.id,
              cdnUrl: a.cdnUrl,
              type: a.type
            }
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$extensionWidget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.extensionWidget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$extensionWidget)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$extensionWidget.clientOp.addMallExtensionWidget(s)
            }
          }
        case 17:
        case "end":
          return l.stop()
      }
    }
  }, Ki)
}
function _s(e, t, n) {
  var /* [auto-meaningful-name] */f$sent
  var o
  var i
  var s
  var /* [auto-meaningful-name] */f$t1$value
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var u
  var d
  var /* [auto-meaningful-name] */_f$sent3
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          f$sent = f.sent
          o = $$_$$_$$_unrestored_shared_1531_2584_129.n[n]
          i = []
          s = {}
          f.t0 = RegeneratorRuntime.keys(o)
        case 7:
          if ((f.t1 = f.t0()).done) {
            f.next = 28
            break
          }
          f$t1$value = f.t1.value
          u = o[f$t1$value]
          d = $$_$$_$$_unrestored_shared_1531_2584_9.Db(u.widgetType)
          f.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ps, u.widgetType, {
            x: 0,
            y: 0
          }, e)
        case 13:
          if ((_f$sent3 = f.sent) && d) {
            f.next = 17
            break
          }
          console.error("can not create widget")
          return f.abrupt("return")
        case 17:
          _f$sent3.parentId = t
          _f$sent3.title = Language.c(f$sent, u.titleMessageId).toString()
          _f$sent3.attributes = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, _f$sent3.attributes), u.attributes)
          if (_f$sent3.type === $$_$$_$$_unrestored_shared_1531_2584_5.H) {
            _f$sent3.attributes.content = Language.c(f$sent, u.contentMessageId || "").toString()
            _f$sent3.attributes.textAlign = "left"
          }
          f.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(hs, _f$sent3, e)
        case 23:
          s[f$t1$value] = {
            label: _f$sent3.title,
            widgetId: _f$sent3.id,
            dataBindings: ""
          }
          i.push(_f$sent3.id)
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addWidgetOp(e, _f$sent3)
          }
          f.next = 7
          break
        case 28:
          return f.abrupt("return", {
            widgetIds: i,
            templateSlotMap: s
          })
        case 29:
        case "end":
          return f.stop()
      }
    }
  }, qi)
}
function vs(e) {
  var /* [auto-meaningful-name] */a$sent
  var n
  var r
  var o
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          if (a$sent = a.sent, n = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e.type)) {
            a.next = 6
            break
          }
          return a.abrupt("return")
        case 6:
          if (!n.isInvisibleWidget) {
            a.next = 11
            break
          }
          o = null === (r = Language.c(a$sent, n.title)) || undefined === r ? undefined : r.toString()
          i = Language.c(a$sent, "WidgetList.addSuccessToast", {
            widgetTitle: o
          }).toString()
          a.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.xj("".concat(i), true))
        case 11:
        case "end":
          return a.stop()
      }
    }
  }, Xi)
}
function bs(e, t) {
  var n
  var /* [auto-meaningful-name] */_c$sent4
  var o
  var /* [auto-meaningful-name] */_c$sent6
  var /* [auto-meaningful-name] */c$sent
  var s
  return RegeneratorRuntime.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          c.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          if (_c$sent4 = c.sent, o = $$_$$_$$_unrestored_shared_1531_2584_9.Db(t.type)) {
            c.next = 6
            break
          }
          return c.abrupt("return")
        case 6:
          c.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 8:
          _c$sent6 = c.sent
          c.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.u)
        case 11:
          c$sent = c.sent
          s = null === (n = Language.c(_c$sent4, o.previewAreaWidgetTitle)) || undefined === n ? undefined : n.toString()
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("AddWidgetToStage", {
            screenId: e,
            screenName: (null === _c$sent6 || undefined === _c$sent6 ? undefined : _c$sent6.title) || "",
            isCooperation: !!c$sent,
            widgetName: s
          })
        case 14:
        case "end":
          return c.stop()
      }
    }
  }, Qi)
}
function ys(e) {
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var /* [auto-meaningful-name] */_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget8
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$templateType
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var s
  var /* [auto-meaningful-name] */h$sent
  var u
  var d
  var /* [auto-meaningful-name] */d$value
  var /* [auto-meaningful-name] */_h$sent3
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          e$payload = e.payload
          e$payload$widgetId = e$payload.widgetId
          e$payload$templateType = e$payload.templateType
          e$payload$onSuccess = e$payload.onSuccess
          s = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)
          h.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.g)
        case 4:
          if (h$sent = h.sent, s && h$sent) {
            h.next = 7
            break
          }
          return h.abrupt("return")
        case 7:
          if (s.type === $$_$$_$$_unrestored_shared_1531_2584_5.x || s.type === $$_$$_$$_unrestored_shared_1531_2584_5.A) {
            h.next = 9
            break
          }
          return h.abrupt("return")
        case 9:
          u = $$_$$_$$_unrestored_shared_1531_2584_47.a(s.widgetIds)
          h.prev = 10
          u.s()
        case 12:
          if ((d = u.n()).done) {
            h.next = 18
            break
          }
          d$value = d.value
          h.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mf(d$value, h$sent, true))
        case 16:
          h.next = 12
          break
        case 18:
          h.next = 23
          break
        case 20:
          h.prev = 20
          h.t0 = h.catch(10)
          u.e(h.t0)
        case 23:
          h.prev = 23
          u.f()
          return h.finish(23)
        case 26:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.t(e$payload$widgetId)
          h.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(_s, h$sent, e$payload$widgetId, e$payload$templateType)
        case 29:
          _h$sent3 = h.sent
          $$_$$_$$_unrestored_shared_1531_2584_9.Wb(e$payload$widgetId, _h$sent3.widgetIds)
          h.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(e$payload$widgetId, "templateSlotMap", _h$sent3.templateSlotMap))
        case 33:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(h$sent, e$payload$widgetId, "widgetIds", _h$sent3.widgetIds)
          }
          if (!(null === (_$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget8 = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget8)) {
            _$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget8.clientOp.replaceWidgetAttributeOp(h$sent, e$payload$widgetId, "templateSlotMap", _h$sent3.templateSlotMap)
          }
          e$payload$onSuccess()
        case 36:
        case "end":
          return h.stop()
      }
    }
  }, Zi, null, [[10, 20, 23, 26]])
}
function Es(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$gridId
  var /* [auto-meaningful-name] */e$payload$deleteColumnIdList
  var /* [auto-meaningful-name] */m$sent
  var /* [auto-meaningful-name] */m$sent$id
  var a
  var s
  var /* [auto-meaningful-name] */s$value
  var u
  var d
  var /* [auto-meaningful-name] */u$attributes$templateSlotMap
  var f
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          e$payload = e.payload
          e$payload$gridId = e$payload.gridId
          e$payload$deleteColumnIdList = e$payload.deleteColumnIdList
          m.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 3:
          if (m$sent = m.sent) {
            m.next = 6
            break
          }
          return m.abrupt("return")
        case 6:
          m$sent$id = m$sent.id
          a = $$_$$_$$_unrestored_shared_1531_2584_47.a(m$sent.widgetIds)
          m.prev = 8
          a.s()
        case 10:
          if ((s = a.n()).done) {
            m.next = 23
            break
          }
          if (s$value = s.value, (null === (u = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(s$value)) || undefined === u ? undefined : u.type) !== $$_$$_$$_unrestored_shared_1531_2584_5.x && (null === u || undefined === u ? undefined : u.type) !== $$_$$_$$_unrestored_shared_1531_2584_5.A || u.attributes.dataSource !== e$payload$gridId) {
            m.next = 21
            break
          }
          for (f in d = false, u$attributes$templateSlotMap = u.attributes.templateSlotMap) if (e$payload$deleteColumnIdList.includes(u$attributes$templateSlotMap[f].dataBindings)) {
            u$attributes$templateSlotMap[f].dataBindings = ""
            d = true
          }
          if (!d) {
            m.next = 21
            break
          }
          m.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(s$value, "templateSlotMap", u$attributes$templateSlotMap))
        case 20:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(m$sent$id, s$value, "templateSlotMap", u$attributes$templateSlotMap)
          }
        case 21:
          m.next = 10
          break
        case 23:
          m.next = 28
          break
        case 25:
          m.prev = 25
          m.t0 = m.catch(8)
          a.e(m.t0)
        case 28:
          m.prev = 28
          a.f()
          return m.finish(28)
        case 31:
        case "end":
          return m.stop()
      }
    }
  }, Ji, null, [[8, 25, 28, 31]])
}
function Os() {
  return ws.apply(this, arguments)
}
function ws() {
  return (ws = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */_e$sent16
    var /* [auto-meaningful-name] */store$getState$common$language
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!(t = $$_$$_$$_unrestored_shared_1531_2584_9.Y().map(function (e) {
              return e.attributes.cloudDbId
            })).length) {
              e.next = 6
              break
            }
            e.next = 4
            return $$_$$_$$_unrestored_shared_1531_2584_146.j(t)
          case 4:
            if (_e$sent16 = e.sent) {
              store$getState$common$language = store.getState().common.language
              store.dispatch(Message.mj({
                type: "error",
                duration: 4e3,
                message: Language.c(store$getState$common$language, _e$sent16).toString()
              }))
            }
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Cs() {
  var /* [auto-meaningful-name] */a$sent
  var /* [auto-meaningful-name] */_a$sent8
  var /* [auto-meaningful-name] */_a$sent10
  var r
  var /* [auto-meaningful-name] */_a$sent12
  var /* [auto-meaningful-name] */_a$sent13
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          a$sent = a.sent
          a.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(function () {
            return Ts(false)
          })
        case 5:
          _a$sent8 = a.sent
          a.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 8:
          if (_a$sent10 = a.sent, _a$sent8) {
            a.next = 11
            break
          }
          return a.abrupt("return")
        case 11:
          if (_a$sent10) {
            a.next = 15
            break
          }
          a.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ch())
        case 14:
          return a.abrupt("return")
        case 15:
          a.prev = 15
          r = $$_$$_$$_unrestored_shared_1531_2584_9.cb()
          a.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.A)
        case 19:
          _a$sent12 = a.sent
          a.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.l, _a$sent12, _a$sent8)
        case 22:
          _a$sent13 = a.sent
          a.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ni(_a$sent13.pack_label))
        case 25:
          a.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ig())
        case 27:
          qt(r.map(function (e) {
            return e.attributes.cloudDbId
          }), 2, 1, $$_$$_$$_unrestored_shared_1531_2584_99.a(a$sent) ? a$sent : undefined)
          a.next = 30
          return Os()
        case 30:
          a.next = 38
          break
        case 32:
          a.prev = 32
          a.t0 = a.catch(15)
          a.next = 36
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ki(-1))
        case 36:
          a.next = 38
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Is, a.t0.message)
        case 38:
        case "end":
          return a.stop()
      }
    }
  }, $i, null, [[15, 32]])
}
function Ts(e, t) {
  var n
  var /* [auto-meaningful-name] */_C$sent2
  var /* [auto-meaningful-name] */_C$sent3
  var /* [auto-meaningful-name] */_C$sent4
  var /* [auto-meaningful-name] */_C$sent5
  var /* [auto-meaningful-name] */_C$sent6
  var /* [auto-meaningful-name] */_C$sent7
  var /* [auto-meaningful-name] */C$sent
  var d
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var /* [auto-meaningful-name] */_C$sent8
  var /* [auto-meaningful-name] */_C$sent9
  var /* [auto-meaningful-name] */_C$sent16
  var O
  var w
  return RegeneratorRuntime.wrap(function (C) {
    for (;;) {
      switch (C.prev = C.next) {
        case 0:
          C.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          n = C.sent
          C.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 5:
          _C$sent2 = C.sent
          C.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 8:
          _C$sent3 = C.sent
          C.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.m)
        case 11:
          _C$sent4 = C.sent
          C.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.k)
        case 14:
          _C$sent5 = C.sent
          C.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.l)
        case 17:
          _C$sent6 = C.sent
          C.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.n)
        case 20:
          _C$sent7 = C.sent
          C.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 23:
          C$sent = C.sent
          C.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.v)
        case 26:
          if (d = C.sent, C$sent) {
            C.next = 29
            break
          }
          return C.abrupt("return")
        case 29:
          if ($$_$$_$$_unrestored_shared_1531_2584_26_index.z.updateCurrentWorkspaceData(), p = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.hasCloudBlock("cloudRoom"), f = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.hasCloudBlock("cloudStorage"), h = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.hasCloudBlock("cloudDB"), m = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.hasCloudBlock("cloudDict"), g = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.hasCloudBlock("cloudTable"), _ = $$_$$_$$_unrestored_shared_1531_2584_9.q(), !(p || h || f || m || g || _)) {
            C.next = 49
            break
          }
          if ($$_$$_$$_unrestored_shared_1531_2584_99.a(n)) {
            C.next = 43
            break
          }
          C.next = 40
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            duration: 4e3,
            showPrefixIcon: false,
            message: Language.c(_C$sent2, "project.saving").toString()
          }))
        case 40:
          C.next = 42
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Us, Message.tg({
            isUpdate: false,
            isAutoSave: true
          }))
        case 42:
          n = C.sent
        case 43:
          if (d) {
            C.next = 49
            break
          }
          C.next = 46
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Vs)
        case 46:
          C.next = 48
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.v)
        case 48:
          d = C.sent
        case 49:
          v = e ? C$sent.id : _C$sent3.toArray()[0].id
          C.next = 52
          return Bs()
        case 52:
          _C$sent8 = C.sent
          C.next = 55
          return Fs()
        case 55:
          _C$sent9 = C.sent
          C.next = 58
          return Gs()
        case 58:
          _C$sent16 = C.sent;
          (O = $$_$$_$$_unrestored_shared_1531_2584_177.c(n, $$_$$_$$_unrestored_shared_1531_2584_26_index.z, _C$sent3.toArray(), _C$sent4, _C$sent5, $$_$$_$$_unrestored_shared_1531_2584_9.kb(), _C$sent8, _C$sent9, v, d, _C$sent7, _C$sent6)).fontFileMap = _C$sent16
          O.blockCode = $$_$$_$$_unrestored_shared_1531_2584_26_index.z.generateAllWorkspaceCodes(O.screenList, t)
          if (undefined !== (w = $$_$$_$$_unrestored_shared_1531_2584_38_607_index.minify(O.blockCode, {
            keep_fnames: true
          })).code) {
            O.blockCode = w.code
          }
          return C.abrupt("return", O)
        case 65:
        case "end":
          return C.stop()
      }
    }
  }, ea)
}
function Ss() {
  var /* [auto-meaningful-name] */_l$sent6
  var t
  var /* [auto-meaningful-name] */_l$sent8
  var /* [auto-meaningful-name] */l$sent
  var /* [auto-meaningful-name] */l$sent$url
  var /* [auto-meaningful-name] */l$sent$version
  var /* [auto-meaningful-name] */l$sent$expireTime
  var s
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          l.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.B)
        case 2:
          _l$sent6 = l.sent
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oi(true))
        case 5:
          l.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ii(false))
        case 7:
          l.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ki(0))
        case 9:
          t = 0
          l.prev = 10
        case 11:
          if (!(t < 100 && t >= 0 && _l$sent6)) {
            l.next = 22
            break
          }
          l.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.a, _l$sent6)
        case 14:
          _l$sent8 = l.sent
          t = _l$sent8.progress
          l.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ki(t))
        case 18:
          l.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.c(1e3)
        case 20:
          l.next = 11
          break
        case 22:
          if (-1 !== t) {
            l.next = 27
            break
          }
          l.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oi(false))
        case 25:
          l.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Is, "-1")
        case 27:
          if (-2 !== t) {
            l.next = 32
            break
          }
          l.next = 30
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oi(false))
        case 30:
          l.next = 32
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Is, "取消打包")
        case 32:
          if (100 !== t) {
            l.next = 49
            break
          }
          l.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.i, _l$sent6)
        case 35:
          l$sent = l.sent
          l$sent$url = l$sent.url
          l$sent$version = l$sent.version
          l$sent$expireTime = l$sent.expireTime
          l.next = 41
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oi(false, l$sent$url))
        case 41:
          l.next = 43
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ji({
            version: l$sent$version,
            expireTime: l$sent$expireTime,
            startTimeTamp: Date.now()
          }))
        case 43:
          l.next = 45
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Mi(true))
        case 45:
          l.next = 47
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Li(false))
        case 47:
          l.next = 49
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Is)
        case 49:
          l.next = 61
          break
        case 51:
          l.prev = 51
          l.t0 = l.catch(10)
          l.next = 55
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ki(-1))
        case 55:
          l.next = 57
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Oi(false))
        case 57:
          s = l.t0
          console.error(l.t0)
          l.next = 61
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Is, s.message)
        case 61:
        case "end":
          return l.stop()
      }
    }
  }, ta, null, [[10, 51]])
}
function Is(e) {
  var /* [auto-meaningful-name] */_a$sent15
  var /* [auto-meaningful-name] */a$sent
  var /* [auto-meaningful-name] */_a$sent16
  var /* [auto-meaningful-name] */_a$sent17
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          _a$sent15 = a.sent
          a.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.F)
        case 5:
          a$sent = a.sent
          a.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.A)
        case 8:
          _a$sent16 = a.sent
          a.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.w)
        case 11:
          _a$sent17 = a.sent
          i = _a$sent16.apkSplash.match(/splash0(\d)\.png/)
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("WorkPack", {
            workId: _a$sent15,
            sourceTag: a$sent.tag,
            sourceId: a$sent.id,
            launchScreenId: i ? i[1] : "0",
            apkName: _a$sent16.apkName,
            isSuccess: !e,
            failReason: e || "",
            bcmUrl: e ? _a$sent17 : "",
            packLabel: e && _a$sent16.packLabel ? _a$sent16.packLabel : ""
          })
        case 14:
        case "end":
          return a.stop()
      }
    }
  }, na)
}
function As(e) {
  var /* [auto-meaningful-name] */e$payload$isPlayCurrentScreen
  var /* [auto-meaningful-name] */_f$sent6
  var /* [auto-meaningful-name] */_f$sent0
  var /* [auto-meaningful-name] */_f$sent0$widgetMap
  var i
  var a
  var s
  var l
  var /* [auto-meaningful-name] */f$sent
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          e$payload$isPlayCurrentScreen = e.payload.isPlayCurrentScreen
          f.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          _f$sent6 = f.sent
          f.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Sg())
        case 6:
          f.prev = 6
          f.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(function () {
            return Ts(e$payload$isPlayCurrentScreen, true)
          })
        case 9:
          if (_f$sent0 = f.sent) {
            f.next = 12
            break
          }
          return f.abrupt("return")
        case 12:
          if (_f$sent0$widgetMap = _f$sent0.widgetMap, i = new Set(), a = new Set(), s = new Set(), l = true, Object.values(_f$sent0$widgetMap).forEach(function (e) {
            var /* [auto-meaningful-name] */o$types
            var e$type = e.type
            var o = $$_widget_custom_storage.f(e$type)
            if (e$type.includes(CustomWidgetType.UNSAFE_EXTENSION_PREFIX) && o) {
              var c = o
              $$_widget_custom_restrict.a.forEach(function (e) {
                var /* [auto-meaningful-name] */c$code
                if (null === (c$code = c.code) || undefined === c$code ? undefined : c$code.includes(e)) {
                  a.add(e)
                  i.add(o.types.title)
                }
              })
            }
            if (null === o || undefined === o || null === (o$types = o.types) || undefined === o$types ? undefined : o$types.platforms) {
              var d = o.types.platforms.includes("web")
              if (!d) {
                if ($$_widget_custom_load.q(e$type)) {
                  s.add(o.types.title)
                } else {
                  var p = $$_$$_$$_unrestored_shared_1531_2584_9.Db(e$type)
                  if (p) {
                    var f = Language.c(_f$sent6, p.title)
                    s.add(f)
                  }
                }
                l = d
              }
            }
          }), !a.size) {
            f.next = 22
            break
          }
          f.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            allowText: Language.c(_f$sent6, "cloudDb.know").toString(),
            title: "error",
            content: Language.c(_f$sent6, "Play.widgetNotSupportsForbiddenKeywords", {
              widgetTypeNames: Array.from(i).join("、"),
              keywords: Array.from(a).join("、")
            }).toString(),
            cancelBtnVisible: false
          }))
        case 21:
          return f.abrupt("return")
        case 22:
          if (l) {
            f.next = 25
            break
          }
          f.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "info",
            duration: 4e3,
            message: Language.c(_f$sent6, "Play.widgetNotSupportsWebPlatform", {
              widgetTypeNames: Array.from(s).join("、")
            }).toString()
          }))
        case 25:
          f.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 27:
          f$sent = f.sent
          $$_$$_$$_unrestored_shared_1531_2584_26_index.z.stopWarningAnimation()
          f.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.b, f$sent, _f$sent0)
        case 31:
          f.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Cj())
        case 33:
          f.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(js, _f$sent0$widgetMap)
        case 35:
          $$_$$_$$_unrestored_shared_1531_2584_38_217_index.b({
            playing: true
          })
          f.next = 38
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ns)
        case 38:
          f.next = 51
          break
        case 40:
          if (f.prev = 40, f.t0 = f.catch(6), !(f.t0 instanceof $$_$$_$$_unrestored_shared_1531_2584_206_139.b)) {
            f.next = 48
            break
          }
          p = {
            type: "lintError",
            screenId: f.t0.screenId,
            blockId: f.t0.blockId,
            message: Language.c(_f$sent6, f.t0.message, f.t0.data) + ""
          }
          f.next = 46
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.nf(p))
        case 46:
          f.next = 48
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Rs, p)
        case 48:
          console.error(f.t0)
          f.next = 51
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ns, f.t0.message)
        case 51:
        case "end":
          return f.stop()
      }
    }
  }, ra, null, [[6, 40]])
}
function js(e) {
  var /* [auto-meaningful-name] */p$sent
  var n
  var r
  var o
  var /* [auto-meaningful-name] */o$attributes
  var /* [auto-meaningful-name] */o$attributes$maxValue
  var /* [auto-meaningful-name] */o$attributes$minValue
  var /* [auto-meaningful-name] */o$attributes$step
  var u
  var d
  return RegeneratorRuntime.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          p.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          p$sent = p.sent
          n = 0
          r = Object.values(e)
        case 4:
          if (!(n < r.length)) {
            p.next = 19
            break
          }
          if ((o = r[n]).type !== $$_$$_$$_unrestored_shared_1531_2584_5.E) {
            p.next = 16
            break
          }
          if (o$attributes = o.attributes, o$attributes$maxValue = o$attributes.maxValue, o$attributes$minValue = o$attributes.minValue, o$attributes$step = o$attributes.step, o$attributes$maxValue !== o$attributes$minValue) {
            p.next = 12
            break
          }
          u = {
            type: "warning",
            screenId: "",
            blockId: "",
            message: Language.c(p$sent, "slider.maxValueEqualMinValue", {
              title: o.title
            }).toString()
          }
          p.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.nf(u))
        case 12:
          if (!(o$attributes$step > o$attributes$maxValue - o$attributes$minValue)) {
            p.next = 16
            break
          }
          d = {
            type: "warning",
            screenId: "",
            blockId: "",
            message: Language.c(p$sent, "slider.stepGreaterThanRange", {
              title: o.title
            }).toString()
          }
          p.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.nf(d))
        case 16:
          n++
          p.next = 4
          break
        case 19:
        case "end":
          return p.stop()
      }
    }
  }, oa)
}
function Ns(e) {
  var /* [auto-meaningful-name] */r$sent
  var /* [auto-meaningful-name] */_r$sent3
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          r$sent = r.sent
          r.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 5:
          _r$sent3 = r.sent
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("WorkRun", {
            workId: r$sent,
            workName: _r$sent3,
            workType: "APP工匠",
            isSuccess: !e,
            failReason: e || ""
          })
        case 7:
        case "end":
          return r.stop()
      }
    }
  }, ia)
}
function Rs(e) {
  var /* [auto-meaningful-name] */o$sent
  var n
  var /* [auto-meaningful-name] */o$sent$filterFunctionEReturnWarningE$getType$size
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.e)
        case 2:
          o$sent = o.sent
          n = o$sent.filter(function (e) {
            return "error" === e.get("type")
          }).size + o$sent.filter(function (e) {
            return "customError" === e.get("type")
          }).size
          o$sent$filterFunctionEReturnWarningE$getType$size = o$sent.filter(function (e) {
            return "warning" === e.get("type")
          }).size
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("ConsoleDetail", {
            errorCount: n,
            warningCount: o$sent$filterFunctionEReturnWarningE$getType$size,
            errorMessage: e.message,
            warningMessage: ""
          })
        case 6:
        case "end":
          return o.stop()
      }
    }
  }, aa)
}
function ks(e) {
  var /* [auto-meaningful-name] */_h$sent6
  var /* [auto-meaningful-name] */h$sent
  var r
  var o
  var /* [auto-meaningful-name] */_h$sent7
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$description
  var /* [auto-meaningful-name] */e$payload$operation
  var /* [auto-meaningful-name] */e$payload$coverUrl
  var p
  var /* [auto-meaningful-name] */_h$sent8
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          h.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(function () {
            return Ts(false)
          })
        case 2:
          if (_h$sent6 = h.sent) {
            h.next = 5
            break
          }
          throw new Error("can not generate player data")
        case 5:
          h.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 7:
          h$sent = h.sent
          h.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Message.Bf, e.payload.name)
        case 10:
          r = new Blob([JSON.stringify(_h$sent6)], {
            type: "application/json,charset=utf-8;"
          })
          o = new File([r], "test.json", {
            type: r.type
          })
          h.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_197_index.e, o, "JSON")
        case 14:
          _h$sent7 = h.sent
          e$payload = e.payload
          e$payload$name = e$payload.name
          e$payload$description = e$payload.description
          e$payload$operation = e$payload.operation
          e$payload$coverUrl = e$payload.coverUrl
          p = {
            name: e$payload$name,
            description: e$payload$description || $$_$$_$$_unrestored_shared_1531_2584_327.a,
            operation: e$payload$operation || $$_$$_$$_unrestored_shared_1531_2584_327.b,
            coverUrl: e$payload$coverUrl,
            workId: h$sent,
            bcmcUrl: _h$sent7.url,
            playerUrl: $$_$$_$$_unrestored_shared_1531_2584_15.E(h$sent)
          }
          h.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.m, p)
        case 19:
          if (200 === (_h$sent8 = h.sent).code) {
            h.next = 22
            break
          }
          throw Error("".concat(_h$sent8.code))
        case 22:
          qt($$_$$_$$_unrestored_shared_1531_2584_9.cb().map(function (e) {
            return e.attributes.cloudDbId
          }), 2, 1, $$_$$_$$_unrestored_shared_1531_2584_99.a(h$sent) ? h$sent : undefined)
          h.next = 26
          return Os()
        case 26:
          return h.abrupt("return", h$sent)
        case 27:
        case "end":
          return h.stop()
      }
    }
  }, sa)
}
function xs(e) {
  var /* [auto-meaningful-name] */f$sent
  var n
  var /* [auto-meaningful-name] */_f$sent1
  var /* [auto-meaningful-name] */e$payload$info
  var /* [auto-meaningful-name] */_f$sent10
  var /* [auto-meaningful-name] */_f$sent12
  var l
  var u
  var /* [auto-meaningful-name] */_f$sent14
  var /* [auto-meaningful-name] */_f$sent15
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          f$sent = f.sent
          n = $$_$$_$$_unrestored_shared_1531_2584_99.a(f$sent)
          f.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Us, Message.tg({
            isUpdate: n,
            isAutoSave: true
          }))
        case 6:
          _f$sent1 = f.sent
          e$payload$info = e.payload.info
          f.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 10:
          _f$sent10 = f.sent
          f.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(function () {
            return Ts(false)
          })
        case 13:
          if (_f$sent12 = f.sent) {
            f.next = 16
            break
          }
          throw new Error("can not generate player data")
        case 16:
          if (_f$sent10) {
            f.next = 18
            break
          }
          throw new Error("user not login")
        case 18:
          l = new Blob([JSON.stringify($$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, _f$sent12), {}, {
            userInfo: {
              name: _f$sent10.nickname,
              avatarUrl: _f$sent10.avatar_url
            },
            title: e$payload$info.title,
            description: e$payload$info.desc,
            coverUrl: e$payload$info.img
          }))], {
            type: "application/json,charset=utf-8;"
          })
          u = new File([l], "test.json", {
            type: l.type
          })
          f.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_197_index.e, u, "JSON")
        case 22:
          _f$sent14 = f.sent
          qt($$_$$_$$_unrestored_shared_1531_2584_9.cb().map(function (e) {
            return e.attributes.cloudDbId
          }), 2, 1, $$_$$_$$_unrestored_shared_1531_2584_99.a(_f$sent1) ? _f$sent1 : undefined)
          f.next = 27
          return Os()
        case 27:
          f.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.n, _f$sent1, _f$sent14.url)
        case 29:
          if (200 === (_f$sent15 = f.sent).code) {
            f.next = 32
            break
          }
          throw Error("".concat(_f$sent15.code))
        case 32:
          return f.abrupt("return", _f$sent1)
        case 33:
        case "end":
          return f.stop()
      }
    }
  }, ca)
}
function Ds(e) {
  var /* [auto-meaningful-name] */e$payload$shouldCloneCloud
  var /* [auto-meaningful-name] */_a$sent18
  var /* [auto-meaningful-name] */_a$sent19
  var /* [auto-meaningful-name] */a$sent
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload$shouldCloneCloud = e.payload.shouldCloneCloud
          a.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 3:
          _a$sent18 = a.sent
          a.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 6:
          if (_a$sent19 = a.sent, !_a$sent18) {
            a.next = 13
            break
          }
          a.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_99.b, e$payload$shouldCloneCloud)
        case 10:
          a$sent = a.sent
          i = new Blob([JSON.stringify(a$sent)], {
            type: "application/json,charset=utf-8;"
          })
          $$_$$_$$_unrestored_shared_1531_2584_15.s(URL.createObjectURL(i), _a$sent19)
        case 13:
        case "end":
          return a.stop()
      }
    }
  }, la)
}
function Ms() {
  var /* [auto-meaningful-name] */t$sent
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 2:
          if (t$sent = t.sent, t.prev = 3, !t$sent) {
            t.next = 7
            break
          }
          t.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_197_index.c, $$_$$_$$_unrestored_shared_1531_2584_9.jb(), function (e) {
            var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.imageFileList) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$imageFileList.clientOp.replaceImageFileCdnUrl(e.id, e.cdnUrl)
            }
          })
        case 7:
          t.next = 13
          break
        case 9:
          t.prev = 9
          t.t0 = t.catch(3)
          t.t0
          $$_$$_$$_unrestored_shared_1531_2584_197_index.a
          throw t.t0
        case 13:
        case "end":
          return t.stop()
      }
    }
  }, ua, null, [[3, 9]])
}
function Ls(e, t) {
  return Ps.apply(this, arguments)
}
function Ps() {
  return (Ps = $$_$$_$$_unrestored_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */_e$sent17
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!n) {
              e.next = 12
              break
            }
            if (!(r = document.getElementById(t.id))) {
              e.next = 12
              break
            }
            e.prev = 3
            e.next = 6
            return $$_$$_$$_unrestored_shared_1531_2584_550_index.a(r, 1)
          case 6:
            t.snapshot = e.sent
            e.next = 12
            break
          case 9:
            e.prev = 9
            e.t0 = e.catch(3)
            console.error("uploadImageDataUrlToCdn htmlToImage error", e.t0)
          case 12:
            if (!t.snapshot.startsWith("http")) {
              e.next = 14
              break
            }
            return e.abrupt("return", Promise.resolve())
          case 14:
            e.prev = 14
            e.next = 17
            return $$_$$_$$_unrestored_shared_1531_2584_197_index.f(t.snapshot)
          case 17:
            _e$sent17 = e.sent
            t.snapshot = _e$sent17
            e.next = 25
            break
          case 21:
            e.prev = 21
            e.t1 = e.catch(14)
            e.t1
            $$_$$_$$_unrestored_shared_1531_2584_197_index.a
            console.error("uploadImageDataUrlToCdn error", e.t1)
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3, 9], [14, 21]])
  }))).apply(this, arguments)
}
function Bs() {
  var e
  var /* [auto-meaningful-name] */o$sent
  var n
  var r = arguments
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          e = r.length > 0 && undefined !== r[0] && r[0]
          o.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.I)
        case 3:
          o$sent = o.sent
          n = {}
          o$sent.forEach(function (t) {
            n[t.id] = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, t), {}, {
              cdnUrl: e && t.source || t.cdnUrl
            })
          })
          return o.abrupt("return", n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, da)
}
function Fs() {
  var e
  var /* [auto-meaningful-name] */o$sent
  var n
  var r = arguments
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          e = r.length > 0 && undefined !== r[0] && r[0]
          o.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.o)
        case 3:
          o$sent = o.sent
          n = {}
          o$sent.forEach(function (t) {
            n[t.id] = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, t), {}, {
              cdnUrl: e && t.source || t.cdnUrl
            })
          })
          return o.abrupt("return", n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, pa)
}
function Gs() {
  var /* [auto-meaningful-name] */o$sent
  var t
  var /* [auto-meaningful-name] */_o$sent10
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.j)
        case 2:
          o$sent = o.sent
          t = {}
          o.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 6:
          _o$sent10 = o.sent
          r = {}
          o$sent.forEach(function (e) {
            t[e.id] = e
          })
          _o$sent10.forEach(function (e) {
            e.widgetIds.forEach(function (e) {
              var n = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e)
              if ((null === n || undefined === n ? undefined : n.type) === $$_$$_$$_unrestored_shared_1531_2584_5.H || (null === n || undefined === n ? undefined : n.type) === $$_$$_$$_unrestored_shared_1531_2584_5.z || (null === n || undefined === n ? undefined : n.type) === $$_$$_$$_unrestored_shared_1531_2584_5.w) {
                var o
                var n$attributes$fontFamily = n.attributes.fontFamily
                if (!r[n$attributes$fontFamily] && (null === (o = t[n$attributes$fontFamily]) || undefined === o ? undefined : o.cdnUrl)) {
                  r[n$attributes$fontFamily] = t[n$attributes$fontFamily]
                }
              }
              if (n && n.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === n.type) {
                var n$attributes$content = n.attributes.content
                var s = undefined === n$attributes$content ? "" : n$attributes$content
                $$_$$_$$_unrestored_shared_1531_2584_38_375.a(s).forEach(function (e) {
                  var n
                  if (!r[e] && (null === (n = t[e]) || undefined === n ? undefined : n.cdnUrl)) {
                    r[e] = t[e]
                  }
                })
              }
            })
          })
          return o.abrupt("return", r)
        case 11:
        case "end":
          return o.stop()
      }
    }
  }, fa)
}
function Us(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$isUpdate
  var /* [auto-meaningful-name] */e$payload$isNeedReport
  var /* [auto-meaningful-name] */e$payload$isAutoSave
  var /* [auto-meaningful-name] */e$payload$isSaveAs
  var /* [auto-meaningful-name] */_I$sent2
  var /* [auto-meaningful-name] */_I$sent3
  var l
  var /* [auto-meaningful-name] */_I$sent4
  var /* [auto-meaningful-name] */_I$sent5
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var b
  var /* [auto-meaningful-name] */b$value
  var /* [auto-meaningful-name] */b$value$snapshot
  var /* [auto-meaningful-name] */_I$sent6
  var /* [auto-meaningful-name] */_I$sent10
  var C
  var T
  var /* [auto-meaningful-name] */I$sent
  return RegeneratorRuntime.wrap(function (I) {
    for (;;) {
      switch (I.prev = I.next) {
        case 0:
          e$payload = e.payload
          e$payload$isUpdate = e$payload.isUpdate
          e$payload$isNeedReport = e$payload.isNeedReport
          e$payload$isAutoSave = e$payload.isAutoSave
          e$payload$isSaveAs = e$payload.isSaveAs
          I.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 3:
          _I$sent2 = I.sent
          I.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 6:
          _I$sent3 = I.sent
          l = Math.ceil(10 * Math.random()) + 10
          I.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 10:
          _I$sent4 = I.sent
          I.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.F)
        case 13:
          _I$sent5 = I.sent
          p = 20
          I.next = 17
          break
        case 17:
          if (_I$sent4) {
            I.next = 21
            break
          }
          I.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ch())
        case 20:
          return I.abrupt("return")
        case 21:
          []
          I.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(li, true)
        case 24:
          if (!(I.sent.length > 0)) {
            I.next = 27
            break
          }
          throw new Error($$_$$_$$_unrestored_shared_1531_2584_278.a.CLOUD_SPACE_DATA_ERROR)
        case 27:
          I.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 29:
          if (f = I.sent, !e$payload$isSaveAs) {
            I.next = 35
            break
          }
          "-副本"
          f += "-副本"
          I.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bf(f))
        case 35:
          I.next = 37
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pi(l))
        case 37:
          I.next = 39
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(true))
        case 39:
          h = _I$sent2.map(function (e) {
            return e.toJS()
          }).toJS()
          m = h.map(function (e, t) {
            return Ls(e, 0 === t)
          })
          I.next = 43
          return Promise.all(m)
        case 43:
          g = h[0]
          _ = g.snapshot
          v = $$_$$_$$_unrestored_shared_1531_2584_47.a(h)
          I.prev = 46
          v.s()
        case 48:
          if ((b = v.n()).done) {
            I.next = 56
            break
          }
          if (b$value = b.value, !(b$value$snapshot = b$value.snapshot).startsWith("http")) {
            I.next = 54
            break
          }
          I.next = 54
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Xj(b$value.id, b$value$snapshot))
        case 54:
          I.next = 48
          break
        case 56:
          I.next = 61
          break
        case 58:
          I.prev = 58
          I.t0 = I.catch(46)
          v.e(I.t0)
        case 61:
          I.prev = 61
          v.f()
          return I.finish(61)
        case 64:
          if (!_.startsWith("http")) {
            _ = "https://creation.codemao.cn/716/appcraft/IMAGE_ssdp_AuDw_1645089354494.png"
          }
          I.next = 67
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_99.b)
        case 67:
          _I$sent6 = I.sent
          I.next = 70
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_298.h, JSON.stringify(_I$sent6))
        case 70:
          _I$sent10 = I.sent
          I.next = 73
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Vj(_I$sent10))
        case 73:
          I.next = 75
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pi(50))
        case 75:
          if (!e$payload$isUpdate) {
            I.next = 106
            break
          }
          C = {
            name: f.substring(0, p),
            bcmUrl: _I$sent10,
            coverUrl: _,
            id: _I$sent3,
            saveType: e$payload$isAutoSave ? $$_$$_$$_unrestored_shared_1531_2584_53.g.AutoSave : $$_$$_$$_unrestored_shared_1531_2584_53.g.ByUser
          }
          I.prev = 77
          I.next = 80
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_298.g, C)
        case 80:
          if (!e$payload$isNeedReport) {
            I.next = 83
            break
          }
          I.next = 83
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ws, true)
        case 83:
          I.next = 93
          break
        case 85:
          I.prev = 85
          I.t1 = I.catch(77)
          I.next = 89
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(false))
        case 89:
          if (!e$payload$isNeedReport) {
            I.next = 92
            break
          }
          I.next = 92
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ws, false, I.t1.message)
        case 92:
          throw I.t1
        case 93:
          I.next = 95
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pi(100))
        case 95:
          I.next = 97
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(false))
        case 97:
          I.next = 99
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(false))
        case 99:
          I.next = 101
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ei(Date.now()))
        case 101:
          I.next = 103
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(vc, _I$sent3)
        case 103:
          return I.abrupt("return", _I$sent3)
        case 106:
          T = {
            name: f.substring(0, p),
            bcmUrl: _I$sent10,
            coverUrl: _,
            saveType: e$payload$isAutoSave ? $$_$$_$$_unrestored_shared_1531_2584_53.g.AutoSave : $$_$$_$$_unrestored_shared_1531_2584_53.g.ByUser,
            sourceTag: _I$sent5.tag
          }
          I.prev = 107
          I.next = 110
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_298.f, T)
        case 110:
          if (I$sent = I.sent, !e$payload$isNeedReport) {
            I.next = 114
            break
          }
          I.next = 114
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ws, true)
        case 114:
          I.next = 124
          break
        case 116:
          I.prev = 116
          I.t2 = I.catch(107)
          I.next = 120
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(false))
        case 120:
          if (!e$payload$isNeedReport) {
            I.next = 123
            break
          }
          I.next = 123
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ws, false, I.t2.message)
        case 123:
          throw I.t2
        case 124:
          if (!I$sent) {
            I.next = 141
            break
          }
          I.next = 127
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pi(100))
        case 127:
          I.next = 129
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(false))
        case 129:
          I.next = 131
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uh(I$sent))
        case 131:
          I.next = 133
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ei(Date.now()))
        case 133:
          I.next = 135
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(false))
        case 135:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.z.setCurrentProjectId(I$sent)
          I.next = 138
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Vs)
        case 138:
          $$_$$_$$_unrestored_shared_1531_2584_15.jb(I$sent)
          I.next = 141
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(vc, I$sent)
        case 141:
          if (!e$payload$isSaveAs) {
            I.next = 144
            break
          }
          I.next = 144
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.n())
        case 144:
          $$_$$_$$_unrestored_shared_1531_2584_15.k(["courseId", "templateId"])
          Pn()
          return I.abrupt("return", I$sent)
        case 147:
        case "end":
          return I.stop()
      }
    }
  }, ha, null, [[46, 58, 61, 64], [77, 85], [107, 116]])
}
function Ws(e, t) {
  var /* [auto-meaningful-name] */_i$sent3
  var /* [auto-meaningful-name] */_i$sent4
  var /* [auto-meaningful-name] */i$sent
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          _i$sent3 = i.sent
          i.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 5:
          _i$sent4 = i.sent
          i.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.F)
        case 8:
          i$sent = i.sent
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("WorkSave", {
            workId: _i$sent3,
            workName: _i$sent4,
            workType: "APP工匠",
            sourceTag: i$sent.tag,
            sourceId: i$sent.id,
            isSuccess: e,
            failReason: t || ""
          })
        case 10:
        case "end":
          return i.stop()
      }
    }
  }, ma)
}
function Hs() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Si(false))
        case 2:
          e.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qi(false))
        case 4:
        case "end":
          return e.stop()
      }
    }
  }, ga)
}
function Vs() {
  var /* [auto-meaningful-name] */n$sent
  var /* [auto-meaningful-name] */_n$sent6
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.k, n$sent)
        case 5:
          _n$sent6 = n.sent
          n.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ai(_n$sent6))
        case 8:
        case "end":
          return n.stop()
      }
    }
  }, _a)
}
function zs(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$shouldUpdatePreviewArea
  var a
  var /* [auto-meaningful-name] */e$payload$shouldUpdateEditArea
  var l
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var d
  var /* [auto-meaningful-name] */e$payload$isBasePropertyPriority
  var f
  var h
  var /* [auto-meaningful-name] */b$sent
  var g
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (b) {
    for (;;) {
      switch (b.prev = b.next) {
        case 0:
          e$payload = e.payload
          e$payload$key = e$payload.key
          e$payload$value = e$payload.value
          e$payload$widgetId = e$payload.widgetId
          e$payload$shouldUpdatePreviewArea = e$payload.shouldUpdatePreviewArea
          a = undefined === e$payload$shouldUpdatePreviewArea || e$payload$shouldUpdatePreviewArea
          e$payload$shouldUpdateEditArea = e$payload.shouldUpdateEditArea
          l = undefined === e$payload$shouldUpdateEditArea || e$payload$shouldUpdateEditArea
          e$payload$isEmitOT = e$payload.isEmitOT
          d = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          e$payload$isBasePropertyPriority = e$payload.isBasePropertyPriority
          f = undefined === e$payload$isBasePropertyPriority || e$payload$isBasePropertyPriority
          h = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)
          b.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 4:
          if (b$sent = b.sent, g = b$sent.find(function (e) {
            var /* [auto-meaningful-name] */e$invisibleWidgetIds
            return e.widgetIds.includes(e$payload$widgetId) || (null === (e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === e$invisibleWidgetIds ? undefined : e$invisibleWidgetIds.includes(e$payload$widgetId))
          }), h && h.type) {
            b.next = 8
            break
          }
          return b.abrupt("return")
        case 8:
          if (d && (h.isGlobalWidget ? null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.globalWidget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget || $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget.clientOp.replaceWidgetAttributeOp(e$payload$widgetId, e$payload$key.toString(), e$payload$value, f) : g && (null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget || $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(g.id, e$payload$widgetId, e$payload$key.toString(), e$payload$value, f))), !$$_$$_$$_unrestored_shared_1531_2584_9.o.includes(e$payload$key) && !(e$payload$key in h) || !f) {
            b.next = 14
            break
          }
          b.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ks, e$payload$key, e$payload$value, e$payload$widgetId)
        case 12:
          b.next = 22
          break
        case 14:
          if (!(e$payload$key in h.attributes)) {
            b.next = 19
            break
          }
          b.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(e$payload$widgetId, e$payload$key, e$payload$value))
        case 17:
          b.next = 22
          break
        case 19:
          console.warn("This property ".concat(e$payload$key, " maybe is invalid"))
          b.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Kg(e$payload$widgetId, e$payload$key, e$payload$value))
        case 22:
          if (!a) {
            b.next = 25
            break
          }
          b.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 25:
          if (!l) {
            b.next = 28
            break
          }
          b.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 28:
        case "end":
          return b.stop()
      }
    }
  }, va)
}
function Ys(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */store$getState$project$id
  var a
  var s
  var l
  var /* [auto-meaningful-name] */s$contentTitle
  var d
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          if (e$payload = e.payload, e$payload$widgetId = e$payload.widgetId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, $$_$$_$$_unrestored_shared_1531_2584_9.Vb(e$payload$widgetId, e$payload$key, e$payload$value), store$getState$project$id = store.getState().project.id, e$payload$widgetId.includes($$_$$_$$_unrestored_shared_1531_2584_5.G) && "db" === e$payload$key && $$_$$_$$_unrestored_shared_1531_2584_174.a.get(e$payload$widgetId).then(function (e) {
            if (e) {
              $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$widgetId, "value", e))
            } else {
              $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$widgetId, "value", e$payload$value))
            }
          }), !e$payload$widgetId.includes($$_$$_$$_unrestored_shared_1531_2584_5.B) && !e$payload$widgetId.includes($$_$$_$$_unrestored_shared_1531_2584_5.y)) {
            f.next = 14
            break
          }
          if ("fields" !== e$payload$key) {
            f.next = 14
            break
          }
          if (a = $$_$$_$$_unrestored_shared_1531_2584_21_index.getLocalDocumentObject(store$getState$project$id, e$payload$widgetId)) {
            f.next = 12
            break
          }
          f.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$widgetId, "value", e$payload$value))
        case 10:
          f.next = 14
          break
        case 12:
          f.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$widgetId, "value", a))
        case 14:
          f.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 16:
          if (s = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)) {
            f.next = 19
            break
          }
          return f.abrupt("return")
        case 19:
          if (s.type === $$_$$_$$_unrestored_shared_1531_2584_5.B && "fields" === e$payload$key && $$_$$_$$_unrestored_shared_1531_2584_26_index.o(s.id, e$payload$value), s.type === $$_$$_$$_unrestored_shared_1531_2584_5.G && "db" === e$payload$key && $$_$$_$$_unrestored_shared_1531_2584_26_index.p(s.id, e$payload$value), !s.title) {
            f.next = 23
            break
          }
          return f.abrupt("return")
        case 23:
          if (l = $$_$$_$$_unrestored_shared_1531_2584_9.Db(s.type)) {
            f.next = 26
            break
          }
          return f.abrupt("return")
        case 26:
          if (l.contentTextField === e$payload$key) {
            s$contentTitle = s.contentTitle
            if (d = (d = (d = e$payload$value).replace($$_$$_$$_unrestored_shared_1531_2584_53.E, "")).trim()) {
              d = $$_$$_$$_unrestored_shared_1531_2584_9.C(e$payload$widgetId, s.type, d)
            } else {
              p = l.previewAreaWidgetTitle
              p = Language.d(p)
              d = $$_$$_$$_unrestored_shared_1531_2584_9.C(e$payload$widgetId, s.type, p)
            }
            if (s$contentTitle !== d) {
              s.contentTitle = d
              $$_$$_$$_unrestored_shared_1531_2584_26_index.g.updateToolBoxWidgetTitle(e$payload$widgetId, d)
              $$_$$_$$_unrestored_shared_1531_2584_26_index.y(e$payload$widgetId, d, s.type)
            }
          }
        case 28:
        case "end":
          return f.stop()
      }
    }
  }, ba)
}
function Ks(e, t, n) {
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          if (r = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(n)) {
            o.next = 3
            break
          }
          return o.abrupt("return")
        case 3:
          o.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          if ($$_$$_$$_unrestored_shared_1531_2584_9.o.includes(e) || e in r) {
            if (!("size" !== e && "position" !== e)) {
              t = $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, r[e]), t)
            }
            r[e] = t
          }
        case 6:
        case "end":
          return o.stop()
      }
    }
  }, ya)
}
function qs(e, t) {
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.g.updateToolBoxWidgetTitle(e, t)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.x(e, t)
          n.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Yj(e, t))
        case 4:
        case "end":
          return n.stop()
      }
    }
  }, Ea)
}
function Xs(e, t) {
  var /* [auto-meaningful-name] */i$sent
  var r
  var /* [auto-meaningful-name] */r$attributes$cloudDbId
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          if (i$sent = i.sent, (r = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e)) && r.type === $$_$$_$$_unrestored_shared_1531_2584_5.l) {
            i.next = 6
            break
          }
          return i.abrupt("return")
        case 6:
          r$attributes$cloudDbId = r.attributes.cloudDbId
          i.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Gt, r$attributes$cloudDbId, t, $$_$$_$$_unrestored_shared_1531_2584_99.a(i$sent) ? i$sent : undefined)
        case 9:
        case "end":
          return i.stop()
      }
    }
  }, Oa)
}
function Qs(e, t) {
  var /* [auto-meaningful-name] */a$sent
  var r
  var /* [auto-meaningful-name] */r$attributes$cloudDbId
  var /* [auto-meaningful-name] */_a$sent20
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          if (a$sent = a.sent, (r = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e)) && r.type === $$_$$_$$_unrestored_shared_1531_2584_5.h) {
            a.next = 6
            break
          }
          return a.abrupt("return", t)
        case 6:
          r$attributes$cloudDbId = r.attributes.cloudDbId
          a.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.p, r$attributes$cloudDbId, t, $$_$$_$$_unrestored_shared_1531_2584_99.a(a$sent) ? a$sent : undefined)
        case 9:
          _a$sent20 = a.sent
          return a.abrupt("return", _a$sent20 || t)
        case 11:
        case "end":
          return a.stop()
      }
    }
  }, wa)
}
function Zs(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$title
  var /* [auto-meaningful-name] */e$payload$shouldUpdatePreviewArea
  var /* [auto-meaningful-name] */e$payload$shouldUpdateEditArea
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var s
  var l
  var /* [auto-meaningful-name] */g$sent
  var d
  var /* [auto-meaningful-name] */l$type
  var /* [auto-meaningful-name] */_g$sent4
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (g) {
    for (;;) {
      switch (g.prev = g.next) {
        case 0:
          if (e$payload = e.payload, e$payload$widgetId = e$payload.widgetId, e$payload$title = e$payload.title, e$payload$shouldUpdatePreviewArea = e$payload.shouldUpdatePreviewArea, e$payload$shouldUpdateEditArea = e$payload.shouldUpdateEditArea, e$payload$isEmitOT = e$payload.isEmitOT, s = undefined === e$payload$isEmitOT || e$payload$isEmitOT, l = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)) {
            g.next = 4
            break
          }
          return g.abrupt("return")
        case 4:
          g.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 6:
          g$sent = g.sent
          d = null === g$sent || undefined === g$sent ? undefined : g$sent.id
          l$type = l.type
          g.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Xs, e$payload$widgetId, e$payload$title)
        case 11:
          g.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Qs, e$payload$widgetId, e$payload$title)
        case 13:
          _g$sent4 = g.sent
          $$_$$_$$_unrestored_shared_1531_2584_9.Xb(e$payload$widgetId, _g$sent4)
          $$_$$_$$_unrestored_shared_1531_2584_9.Vb(e$payload$widgetId, "name", _g$sent4)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.g.updateToolBoxWidgetTitle(e$payload$widgetId, _g$sent4)
          $$_$$_$$_unrestored_shared_1531_2584_26_index.y(e$payload$widgetId, _g$sent4, l$type)
          g.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 20:
          if (!e$payload$shouldUpdatePreviewArea) {
            g.next = 23
            break
          }
          g.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 23:
          if (!e$payload$shouldUpdateEditArea) {
            g.next = 26
            break
          }
          g.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 26:
          g.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(l.id, "name", _g$sent4))
        case 28:
          if (s) {
            if (l.isGlobalWidget) {
              if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.globalWidget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget)) {
                $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$globalWidget.clientOp.replaceWidgetAttributeOp(e$payload$widgetId, "title", _g$sent4)
              }
            } else {
              if (d) {
                if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
                  $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(d, e$payload$widgetId, "title", _g$sent4)
                }
              }
            }
          }
        case 29:
        case "end":
          return g.stop()
      }
    }
  }, Ca)
}
function Js() {
  var e
  var t
  var n
  var /* [auto-meaningful-name] */d$sent
  var /* [auto-meaningful-name] */d$sent$list
  var /* [auto-meaningful-name] */d$sent$total
  var a
  var /* [auto-meaningful-name] */_d$sent2
  var /* [auto-meaningful-name] */_d$sent2$list
  var /* [auto-meaningful-name] */d$t0$response
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          d.prev = 0
          e = []
          t = 1
          n = 100
          d.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(WidgetShop.boughtList, t, n)
        case 6:
          if (d$sent = d.sent, d$sent$list = d$sent.list, d$sent$total = d$sent.total, a = Math.ceil(d$sent$total / n), e = e.concat(d$sent$list), !(a > 1)) {
            d.next = 22
            break
          }
          t += 1
        case 13:
          if (!(t <= a)) {
            d.next = 22
            break
          }
          d.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(WidgetShop.boughtList, t, n)
        case 16:
          _d$sent2 = d.sent
          _d$sent2$list = _d$sent2.list
          e = e.concat(_d$sent2$list)
        case 19:
          t++
          d.next = 13
          break
        case 22:
          d.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Sh(e))
        case 24:
          d.next = 30
          break
        case 26:
          if (d.prev = 26, d.t0 = d.catch(0), 40400100 !== (null === (d$t0$response = d.t0.response) || undefined === d$t0$response ? undefined : d$t0$response.data.code)) {
            d.next = 30
            break
          }
          return d.abrupt("return")
        case 30:
        case "end":
          return d.stop()
      }
    }
  }, Ta, null, [[0, 26]])
}
function $s(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetCloneList
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */i$sent
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$payload = e.payload
          e$payload$widgetCloneList = e$payload.widgetCloneList
          e$payload$screenId = e$payload.screenId
          i.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.g)
        case 3:
          if (i$sent = i.sent, e$payload$screenId && i$sent !== e$payload$screenId) {
            i.next = 9
            break
          }
          i.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(tc, e$payload$widgetCloneList)
        case 7:
          i.next = 11
          break
        case 9:
          i.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ec, e$payload$widgetCloneList, e$payload$screenId)
        case 11:
        case "end":
          return i.stop()
      }
    }
  }, Sa)
}
function ec(e, t) {
  var /* [auto-meaningful-name] */f$sent
  var /* [auto-meaningful-name] */_f$sent16
  var o
  var i
  var a
  var s
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var /* [auto-meaningful-name] */l$value
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 2:
          f$sent = f.sent
          f.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 5:
          if (_f$sent16 = f.sent, o = f$sent.findIndex(function (e) {
            return e.id === t
          }), !(i = f$sent.get(o))) {
            f.next = 36
            break
          }
          if (!e.length) {
            f.next = 36
            break
          }
          s = $$_$$_$$_unrestored_shared_1531_2584_47.a(e)
          f.prev = 11
          s.s()
        case 13:
          if ((l = s.n()).done) {
            f.next = 21
            break
          }
          l$value = l.value
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addWidgetOp(t, l$value)
          }
          f.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.jf(i.id, l$value.id))
        case 18:
          if (!l$value.parentId) {
            WidgetShop.reportUse(l$value.type, null === _f$sent16 || undefined === _f$sent16 ? undefined : _f$sent16.id)
          }
        case 19:
          f.next = 13
          break
        case 21:
          f.next = 26
          break
        case 23:
          f.prev = 23
          f.t0 = f.catch(11)
          s.e(f.t0)
        case 26:
          f.prev = 26
          s.f()
          return f.finish(26)
        case 29:
          f.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Xa, Message.vg(o))
        case 31:
          p = null === (a = e[0]) || undefined === a ? undefined : a.id
          f.next = 34
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(p))
        case 34:
          f.next = 36
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 36:
        case "end":
          return f.stop()
      }
    }
  }, Ia, null, [[11, 23, 26, 29]])
}
function tc(e) {
  var /* [auto-meaningful-name] */_$sent8
  var /* [auto-meaningful-name] */_$sent0
  var /* [auto-meaningful-name] */_$sent
  var o
  var a
  var s
  var l
  var u
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  var /* [auto-meaningful-name] */u$value
  var f
  var h
  var m
  var g
  return RegeneratorRuntime.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          _.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.x)
        case 2:
          _$sent8 = _.sent
          _.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 5:
          _$sent0 = _.sent
          _.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 8:
          if (_$sent = _.sent, o = _$sent0.get(_$sent8), !e.length || !o) {
            _.next = 50
            break
          }
          s = o.get("id")
          l = $$_$$_$$_unrestored_shared_1531_2584_47.a(e)
          _.prev = 13
          l.s()
        case 15:
          if ((u = l.n()).done) {
            _.next = 37
            break
          }
          if (!(u$value = u.value).parentId) {
            _.next = 29
            break
          }
          if (u$value.position.x += 20, u$value.position.y -= 20, u$value.type !== $$_$$_$$_unrestored_shared_1531_2584_5.a && u$value.type !== $$_$$_$$_unrestored_shared_1531_2584_5.c) {
            _.next = 27
            break
          }
          if (!(f = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(u$value.parentId))) {
            _.next = 27
            break
          }
          m = (h = f).widgetIds.includes(u$value.id) ? $$_$$_$$_unrestored_shared_1531_2584_25_index.a(h.widgetIds) : [].concat($$_$$_$$_unrestored_shared_1531_2584_25_index.a(h.widgetIds), [u$value.id])
          _.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(u$value.parentId, "widgetIds", m, true, true, true, true))
        case 27:
          _.next = 31
          break
        case 29:
          u$value.position.x += 10
          u$value.position.y += 10
        case 31:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addWidgetOp(s, u$value)
          }
          _.next = 34
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.jf(s, u$value.id))
        case 34:
          if (!u$value.parentId) {
            WidgetShop.reportUse(u$value.type, null === _$sent || undefined === _$sent ? undefined : _$sent.id)
          }
        case 35:
          _.next = 15
          break
        case 37:
          _.next = 42
          break
        case 39:
          _.prev = 39
          _.t0 = _.catch(13)
          l.e(_.t0)
        case 42:
          _.prev = 42
          l.f()
          return _.finish(42)
        case 45:
          g = null === (a = e[0]) || undefined === a ? undefined : a.id
          _.next = 48
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(g))
        case 48:
          _.next = 50
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 50:
        case "end":
          return _.stop()
      }
    }
  }, Aa, null, [[13, 39, 42, 45]])
}
function nc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$position
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_5$c
  var s
  var /* [auto-meaningful-name] */_E$sent2
  var /* [auto-meaningful-name] */E$sent
  var /* [auto-meaningful-name] */_E$sent3
  var p
  var /* [auto-meaningful-name] */_E$sent4
  var /* [auto-meaningful-name] */s$widget$attributes
  var /* [auto-meaningful-name] */s$widget$isGlobalWidget
  var g
  var _
  var v
  var b
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (E) {
    for (;;) {
      switch (E.prev = E.next) {
        case 0:
          e$payload = e.payload
          e$payload$widgetId = e$payload.widgetId
          e$payload$position = e$payload.position
          $$_$$_$$_unrestored_shared_1531_2584_5$c = $$_$$_$$_unrestored_shared_1531_2584_5.c
          s = $$_$$_$$_unrestored_shared_1531_2584_9.Db($$_$$_$$_unrestored_shared_1531_2584_5$c)
          E.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 5:
          _E$sent2 = E.sent
          E.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.x)
        case 8:
          E$sent = E.sent
          E.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 11:
          if (_E$sent3 = E.sent, (p = E$sent > -1 ? _E$sent3.get(E$sent) : undefined) && s) {
            E.next = 15
            break
          }
          return E.abrupt("return")
        case 15:
          E.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 17:
          if (_E$sent4 = E.sent, s$widget$attributes = s.widget.attributes, s$widget$isGlobalWidget = s.widget.isGlobalWidget, g = s.title ? $$_$$_$$_unrestored_shared_1531_2584_9.D($$_$$_$$_unrestored_shared_1531_2584_5$c, p.widgetIds, Language.c(_E$sent2, s.title).toString()) : "", _ = $$_$$_$$_unrestored_shared_1531_2584_64.a($$_$$_$$_unrestored_shared_1531_2584_5$c), v = {
            id: _,
            title: g,
            type: $$_$$_$$_unrestored_shared_1531_2584_5.c,
            position: e$payload$position,
            visible: true,
            size: s.widget.size,
            parentId: e$payload$widgetId,
            animationRecord: {},
            attributes: $$_$$_$$_unrestored_shared_1531_2584_6.a({}, s$widget$attributes),
            isGlobalWidget: s$widget$isGlobalWidget
          }, $$_$$_$$_unrestored_shared_1531_2584_9.Ub(_, v), !(b = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId))) {
            E.next = 39
            break
          }
          b.widgetIds.push(_)
          E.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 29:
          E.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 31:
          E.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.jf(p.id, v.id))
        case 33:
          E.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(v.id))
        case 35:
          E.next = 37
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(bs, p.id, v)
        case 37:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addBrushAndActorWidgetOp(p.id, v, b.id, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(b.widgetIds))
          }
          WidgetShop.reportUse(v.type, null === _E$sent4 || undefined === _E$sent4 ? undefined : _E$sent4.id)
        case 39:
        case "end":
          return E.stop()
      }
    }
  }, ja)
}
function rc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$position
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_5$a
  var s
  var /* [auto-meaningful-name] */_E$sent5
  var /* [auto-meaningful-name] */E$sent
  var /* [auto-meaningful-name] */_E$sent6
  var p
  var /* [auto-meaningful-name] */_E$sent10
  var h
  var /* [auto-meaningful-name] */s$widget$isGlobalWidget
  var g
  var _
  var v
  var b
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (E) {
    for (;;) {
      switch (E.prev = E.next) {
        case 0:
          e$payload = e.payload
          e$payload$widgetId = e$payload.widgetId
          e$payload$position = e$payload.position
          o = e$payload$widgetId
          $$_$$_$$_unrestored_shared_1531_2584_5$a = $$_$$_$$_unrestored_shared_1531_2584_5.a
          s = $$_$$_$$_unrestored_shared_1531_2584_9.Db($$_$$_$$_unrestored_shared_1531_2584_5$a)
          E.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 6:
          _E$sent5 = E.sent
          E.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.x)
        case 9:
          E$sent = E.sent
          E.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 12:
          if (_E$sent6 = E.sent, p = E$sent > -1 ? _E$sent6.get(E$sent) : undefined) {
            E.next = 16
            break
          }
          return E.abrupt("return")
        case 16:
          if (s) {
            E.next = 18
            break
          }
          return E.abrupt("return")
        case 18:
          E.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 20:
          if (_E$sent10 = E.sent, h = Lodash.cloneDeep(s.widget.attributes), s$widget$isGlobalWidget = s.widget.isGlobalWidget, h.actionList.push({
            id: $$_$$_$$_unrestored_shared_1531_2584_64.a($$_$$_$$_unrestored_shared_1531_2584_143.a),
            name: Language.c(_E$sent5, "ActorStyleDialog.defaultActionName").toString(),
            styleList: [],
            interval: 200
          }), g = s.title ? $$_$$_$$_unrestored_shared_1531_2584_9.D($$_$$_$$_unrestored_shared_1531_2584_5$a, p.widgetIds, Language.c(_E$sent5, s.title).toString()) : "", _ = $$_$$_$$_unrestored_shared_1531_2584_64.a($$_$$_$$_unrestored_shared_1531_2584_5$a), v = {
            id: _,
            title: g,
            type: $$_$$_$$_unrestored_shared_1531_2584_5.a,
            position: e$payload$position,
            visible: true,
            parentId: o,
            animationRecord: {},
            size: {
              width: 0,
              height: 0
            },
            attributes: h,
            isGlobalWidget: s$widget$isGlobalWidget
          }, $$_$$_$$_unrestored_shared_1531_2584_9.Ub(_, v), !(b = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(o))) {
            E.next = 43
            break
          }
          b.widgetIds.push(_)
          E.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 33:
          E.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 35:
          E.next = 37
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.jf(p.id, v.id))
        case 37:
          E.next = 39
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ug(v.id))
        case 39:
          E.next = 41
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(bs, p.id, v)
        case 41:
          if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
            $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.addBrushAndActorWidgetOp(p.id, v, b.id, $$_$$_$$_unrestored_shared_1531_2584_25_index.a(b.widgetIds))
          }
          WidgetShop.reportUse(v.type, null === _E$sent10 || undefined === _E$sent10 ? undefined : _E$sent10.id)
        case 43:
        case "end":
          return E.stop()
      }
    }
  }, Na)
}
function oc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$blockId
  var /* [auto-meaningful-name] */_l$sent0
  var /* [auto-meaningful-name] */_l$sent1
  var /* [auto-meaningful-name] */l$sent
  var s
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$screenId = e$payload.screenId
          e$payload$blockId = e$payload.blockId
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 3:
          _l$sent0 = l.sent
          l.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 6:
          _l$sent1 = l.sent
          l.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 9:
          if (l$sent = l.sent, s = l$sent.findIndex(function (e) {
            return e.id === e$payload$screenId
          }), (null === _l$sent1 || undefined === _l$sent1 ? undefined : _l$sent1.id) !== e$payload$screenId) {
            l.next = 16
            break
          }
          l.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_26_index.z.playWarningAnimation, e$payload$blockId)
        case 14:
          l.next = 19
          break
        case 16:
          if (!(s > -1)) {
            l.next = 19
            break
          }
          l.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Xa, Message.vg(s))
        case 19:
          if (!$$_$$_$$_unrestored_shared_1531_2584_26_index.z.getBlockById(e$payload$blockId)) {
            l.next = 25
            break
          }
          l.next = 23
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_26_index.z.playWarningAnimation, e$payload$blockId)
        case 23:
          l.next = 27
          break
        case 25:
          l.next = 27
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(_l$sent0, "theBlockHasBeRemoved").toString(),
            showCloseIcon: false,
            showPrefixIcon: false,
            type: "error"
          }))
        case 27:
        case "end":
          return l.stop()
      }
    }
  }, Ra)
}
function ic(e) {
  var /* [auto-meaningful-name] */e$payload$screenIds
  var /* [auto-meaningful-name] */l$sent
  var r
  var /* [auto-meaningful-name] */_l$sent10
  var i
  var a
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload$screenIds = e.payload.screenIds
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.C)
        case 3:
          l$sent = l.sent
          r = l$sent.map(function (e) {
            return e.id
          }).toJSON()
          l.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 7:
          if (_l$sent10 = l.sent, Lodash.isEqual(r, e$payload$screenIds)) {
            l.next = 16
            break
          }
          i = []
          e$payload$screenIds.forEach(function (e) {
            var t = l$sent.find(function (t) {
              return t.id === e
            })
            if (t) {
              i.push(t)
            }
          })
          l.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Aj($$_$$_$$_unrestored_shared_1531_2584_48_66.a.List(i)))
        case 13:
          a = e$payload$screenIds.indexOf(_l$sent10.id)
          l.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Bi(a))
        case 16:
        case "end":
          return l.stop()
      }
    }
  }, ka)
}
function ac(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          if (e$payload = e.payload, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, a = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "title" !== e$payload$key || "string" !== typeof e$payload$value) {
            l.next = 7
            break
          }
          l.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(qs, e$payload$screenId, e$payload$value)
        case 4:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.y(e$payload$screenId, e$payload$value, "SCREEN")
          l.next = 9
          break
        case 7:
          l.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Wj(e$payload$screenId, e$payload$key, e$payload$value))
        case 9:
          l.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 11:
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.screen) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$screen.clientOp.updateScreenStyle(e$payload$screenId, e$payload$key, e$payload$value)
            }
          }
        case 12:
        case "end":
          return l.stop()
      }
    }
  }, xa)
}
function sc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var r
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */u$sent
  var /* [auto-meaningful-name] */_u$sent3
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent$emit
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$isEmitOT = e$payload.isEmitOT
          r = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          e$payload$widgetId = e$payload.widgetId
          u.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.f)
        case 3:
          u$sent = u.sent
          u.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.i)
        case 6:
          _u$sent3 = u.sent
          u.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Xh(e$payload$widgetId))
        case 9:
          if (_u$sent3) {
            setTimeout(function () {
              return $$_$$_$$_unrestored_shared_1531_2584_26_index.g.setSelectedItemByWidgetId(e$payload$widgetId || u$sent.id)
            }, 10)
          }
          if (r) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.customEvent) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent || null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent$emit = $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent.emit) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent$emit)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$customEvent$emit.focusItem("widget", e$payload$widgetId)
            }
          }
        case 11:
        case "end":
          return u.stop()
      }
    }
  }, Da)
}
function cc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$title
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$projectOt
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$title = e$payload.title
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qg(e$payload$title))
        case 3:
          a.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          if (o) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$projectOt = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.projectOt) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$projectOt)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$projectOt.clientOp.changeProjectProperty("title", e$payload$title)
            }
          }
        case 6:
        case "end":
          return a.stop()
      }
    }
  }, Ma)
}
function lc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$widgetId
  var /* [auto-meaningful-name] */e$payload$widgetIds
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var s
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$screenId = e$payload.screenId
          e$payload$widgetId = e$payload.widgetId
          e$payload$widgetIds = e$payload.widgetIds
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          if (s = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)) {
            s.widgetIds = e$payload$widgetIds
          }
          u.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          u.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Uj())
        case 7:
          u.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 9:
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.widget) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$widget.clientOp.replaceWidgetAttributeOp(e$payload$screenId, e$payload$widgetId, "widgetIds", e$payload$widgetIds)
            }
          }
        case 10:
        case "end":
          return u.stop()
      }
    }
  }, La)
}
function uc() {
  var /* [auto-meaningful-name] */_o$sent11
  var /* [auto-meaningful-name] */_o$sent12
  var /* [auto-meaningful-name] */o$sent
  var r
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          _o$sent11 = o.sent
          o.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 5:
          _o$sent12 = o.sent
          o.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.e, _o$sent11)
        case 8:
          if (!(o$sent = o.sent) || !o$sent.pack_label) {
            o.next = 14
            break
          }
          o.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ji({
            apkIcon: o$sent.apk_icon,
            apkName: o$sent.apk_name,
            packLabel: o$sent.pack_label,
            apkSplash: o$sent.app_splash || ""
          }))
        case 12:
          o.next = 16
          break
        case 14:
          o.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ji({
            apkName: _o$sent12
          }))
        case 16:
          if (!($$_$$_$$_unrestored_shared_1531_2584_9.Y().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide"))) {
            o.next = 23
            break
          }
          r = function () {
            return store.dispatch(Message.Ii(true))
          }
          o.next = 21
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.kj(true, "pack", r))
        case 21:
          o.next = 25
          break
        case 23:
          o.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ii(true))
        case 25:
        case "end":
          return o.stop()
      }
    }
  }, Pa)
}
function dc() {
  var /* [auto-meaningful-name] */_r$sent4
  var /* [auto-meaningful-name] */_r$sent5
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.B)
        case 2:
          _r$sent4 = r.sent
          r.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.d, _r$sent4)
        case 5:
          r.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Li(false))
        case 7:
          r.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 9:
          _r$sent5 = r.sent
          r.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.A)
        case 12:
          r$sent = r.sent
          $$_$$_$$_unrestored_shared_1531_2584_141_index.a("CancelWorkPack", {
            workId: _r$sent5,
            apkName: r$sent.apkName
          })
        case 14:
        case "end":
          return r.stop()
      }
    }
  }, Ba)
}
function pc() {
  var /* [auto-meaningful-name] */t$sent
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          t$sent = t.sent
          t.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            onConfirm: function () {
              store.dispatch(Message.Ch())
            },
            allowText: Language.c(t$sent, "cloudDbUserLogin").toString(),
            cancelText: Language.c(t$sent, "cloudDbUserCancelLogin").toString(),
            title: Language.c(t$sent, "cloudDbUserNotLoginTitle").toString(),
            content: Language.c(t$sent, "cloudDbUserNotLoginDescription").toString()
          }))
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, Fa)
}
function fc() {
  var /* [auto-meaningful-name] */_k$sent4
  var t
  var n
  var /* [auto-meaningful-name] */k$t0$response
  var o
  var a
  var s
  var l
  var u
  var d
  var /* [auto-meaningful-name] */d$value
  var f
  var h
  var m
  var /* [auto-meaningful-name] */k$sent
  var _
  var v
  var b
  var /* [auto-meaningful-name] */b$value
  var /* [auto-meaningful-name] */_k$sent5
  var O
  var w
  var /* [auto-meaningful-name] */w$value
  var /* [auto-meaningful-name] */w$value$type
  var /* [auto-meaningful-name] */w$value$id
  var I
  var A
  var j
  var N
  var /* [auto-meaningful-name] */_k$sent6
  return RegeneratorRuntime.wrap(function (k) {
    for (;;) {
      switch (k.prev = k.next) {
        case 0:
          k.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          _k$sent4 = k.sent
          t = $$_$$_$$_unrestored_shared_1531_2584_9.cb()
          n = []
          k.prev = 5
          k.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Lt, $$_$$_$$_unrestored_shared_1531_2584_99.a(_k$sent4) ? _k$sent4 : undefined)
        case 8:
          n = k.sent
          k.next = 17
          break
        case 11:
          if (k.prev = 11, k.t0 = k.catch(5), !(40400100 === (null === (k$t0$response = k.t0.response) || undefined === k$t0$response ? undefined : k$t0$response.data.code) && t.length > 0)) {
            k.next = 16
            break
          }
          k.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(pc)
        case 16:
          return k.abrupt("return")
        case 17:
          o = false
          a = []
          s = []
          l = t.filter(function (e) {
            return !n.some(function (t) {
              return t.id === e.attributes.cloudDbId
            })
          })
          u = $$_$$_$$_unrestored_shared_1531_2584_47.a(n)
          k.prev = 22
          u.s()
        case 24:
          if ((d = u.n()).done) {
            k.next = 31
            break
          }
          d$value = d.value
          k.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(gc, d$value.id)
        case 28:
          d$value.fields = k.sent
        case 29:
          k.next = 24
          break
        case 31:
          k.next = 36
          break
        case 33:
          k.prev = 33
          k.t1 = k.catch(22)
          u.e(k.t1)
        case 36:
          k.prev = 36
          u.f()
          return k.finish(36)
        case 39:
          n.reverse().forEach(function (e) {
            var t = $$_$$_$$_unrestored_shared_1531_2584_9.cb().find(function (t) {
              return t.attributes.cloudDbId === e.id
            })
            if (t) {
              $$_$$_$$_unrestored_shared_1531_2584_9.Vb(t.id, "fields", e.fields)
              a.push(t)
            } else {
              s.push(e)
            }
          })
          f = 0
          h = s
        case 41:
          if (!(f < h.length)) {
            k.next = 56
            break
          }
          m = h[f]
          k.next = 45
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(ps, $$_$$_$$_unrestored_shared_1531_2584_5.l, {
            x: 0,
            y: 0
          })
        case 45:
          if (!(k$sent = k.sent)) {
            k.next = 53
            break
          }
          k$sent.title = m.name
          k$sent.attributes.cloudDbId = m.id
          k$sent.attributes.fields = m.fields
          a.push(k$sent)
          k.next = 53
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(hs, k$sent)
        case 53:
          f++
          k.next = 41
          break
        case 56:
          if (!(l.length + a.length <= $$_$$_$$_unrestored_shared_1531_2584_305.f)) {
            k.next = 83
            break
          }
          _ = a.map(function (e) {
            return e.title
          })
          v = $$_$$_$$_unrestored_shared_1531_2584_47.a(l)
          k.prev = 59
          v.s()
        case 61:
          if ((b = v.n()).done) {
            k.next = 73
            break
          }
          b$value = b.value
          if (_.includes(b$value.title)) {
            o = true
            b$value.title = $$_$$_$$_unrestored_shared_1531_2584_9.ac(b$value.title, _)
            _.push(b$value.title)
          }
          k.next = 66
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Bt, b$value.title)
        case 66:
          _k$sent5 = k.sent
          b$value.attributes.cloudDbId = _k$sent5
          k.next = 70
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Yt, _k$sent5, {
            addItems: $$_$$_$$_unrestored_shared_1531_2584_25_index.a(b$value.attributes.fields),
            editItems: [],
            deleteItems: []
          }, $$_$$_$$_unrestored_shared_1531_2584_99.a(_k$sent4) ? _k$sent4 : undefined)
        case 70:
          qt([_k$sent5], 2, 0, $$_$$_$$_unrestored_shared_1531_2584_99.a(_k$sent4) ? _k$sent4 : undefined)
        case 71:
          k.next = 61
          break
        case 73:
          k.next = 78
          break
        case 75:
          k.prev = 75
          k.t2 = k.catch(59)
          v.e(k.t2)
        case 78:
          k.prev = 78
          v.f()
          return k.finish(78)
        case 81:
          k.next = 106
          break
        case 83:
          O = $$_$$_$$_unrestored_shared_1531_2584_47.a(l)
          k.prev = 84
          O.s()
        case 86:
          if ((w = O.n()).done) {
            k.next = 95
            break
          }
          w$value = w.value
          w$value$type = w$value.type
          w$value$id = w$value.id
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q(w$value$type, w$value$id)
          $$_$$_$$_unrestored_shared_1531_2584_9.F(w$value.id)
          k.next = 93
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lh(w$value$id))
        case 93:
          k.next = 86
          break
        case 95:
          k.next = 100
          break
        case 97:
          k.prev = 97
          k.t3 = k.catch(84)
          O.e(k.t3)
        case 100:
          k.prev = 100
          O.f()
          return k.finish(100)
        case 103:
          I = Language.d("cloudDbCountOverflowTitle")
          A = Language.d("cloudDbCountOverflowDescription", {
            workDbCount: l.length.toString(),
            selfDbCount: a.length.toString(),
            maxCount: $$_$$_$$_unrestored_shared_1531_2584_305.f.toString()
          })
          $$_$$_$$_unrestored_shared_1531_2584_2627_index.a.info({
            title: I,
            icon: null,
            centered: true,
            content: A,
            okText: "确认",
            width: 480,
            okButtonProps: {
              shape: "circle"
            }
          })
        case 106:
          if (o) {
            j = Language.d("cloudDbNameConflictTitle")
            N = Language.d("cloudDbNameConflictDescription")
            $$_$$_$$_unrestored_shared_1531_2584_2627_index.a.info({
              title: j,
              icon: null,
              centered: true,
              content: N,
              okText: "确认",
              width: 480,
              okButtonProps: {
                shape: "circle"
              }
            })
          }
          k.next = 109
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 109:
          k.next = 111
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.n)
        case 111:
          _k$sent6 = k.sent
          $$_$$_$$_unrestored_shared_1531_2584_26_index.g.updateGlobalWidget(_k$sent6)
        case 113:
        case "end":
          return k.stop()
      }
    }
  }, Ga, null, [[5, 11], [22, 33, 36, 39], [59, 75, 78, 81], [84, 97, 100, 103]])
}
function hc() {
  var /* [auto-meaningful-name] */_a$sent21
  var t
  var /* [auto-meaningful-name] */_a$sent23
  var /* [auto-meaningful-name] */a$sent
  var o
  var i
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          _a$sent21 = a.sent
          t = $$_$$_$$_unrestored_shared_1531_2584_9.Y()
          a.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.J)
        case 6:
          _a$sent23 = a.sent
          a.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.K)
        case 9:
          if (a.sent) {
            a.next = 12
            break
          }
          return a.abrupt("return")
        case 12:
          a.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(di)
        case 14:
          if (0 !== t.length) {
            a.next = 16
            break
          }
          return a.abrupt("return")
        case 16:
          if (_a$sent23) {
            a.next = 23
            break
          }
          t.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_9.F(e.id)
          })
          a.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(_a$sent21, "cloudDb.noLoginError").toString(),
            type: "info"
          }))
        case 20:
          a.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ch())
        case 22:
          return a.abrupt("return")
        case 23:
          a.next = 25
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.g, "dev")
        case 25:
          if (a$sent = a.sent) {
            a.next = 28
            break
          }
          return a.abrupt("return")
        case 28:
          if (o = false, i = false, t.forEach(function (e) {
            var e$attributes$cloudDbId = e.attributes.cloudDbId
            var n = e.id
            var a = a$sent.find(function (e) {
              return e.id === e$attributes$cloudDbId
            })
            if (a) {
              if (e.title !== a.name) {
                i = true
                var a$name = a.name
                $$_$$_$$_unrestored_shared_1531_2584_9.Xb(n, a$name)
                $$_$$_$$_unrestored_shared_1531_2584_26_index.g.updateToolBoxWidgetTitle(n, a$name)
                $$_$$_$$_unrestored_shared_1531_2584_26_index.y(e.id, a$name, "CLOUD_DB")
                $$_$$_$$_unrestored_shared_1531_2584_9.Vb(n, "name", a$name)
                store.dispatch(Message.Uj())
                store.dispatch(Message.Qj())
              }
              if (e.attributes.primaryKey !== a.primary_column) {
                i = true
                $$_$$_$$_unrestored_shared_1531_2584_9.Vb(n, "primaryKey", a.primary_column)
              }
              if (JSON.stringify(e.attributes.columns) !== JSON.stringify(a.columns)) {
                i = true
                store.dispatch(Message.zg(e$attributes$cloudDbId, a.columns))
              }
            } else {
              o = true
              $$_$$_$$_unrestored_shared_1531_2584_9.F(n)
              $$_$$_$$_unrestored_shared_1531_2584_26_index.q("CLOUD_DB", n)
            }
          }), !o) {
            a.next = 36
            break
          }
          a.next = 34
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zh({
            allowText: Language.c(_a$sent21, "cloudDb.know").toString(),
            title: Language.c(_a$sent21, "cloudDb.dataRemoveTitle").toString(),
            content: Language.c(_a$sent21, "cloudDb.dataRemoveContent").toString(),
            cancelBtnVisible: false
          }))
        case 34:
          a.next = 39
          break
        case 36:
          if (!i) {
            a.next = 39
            break
          }
          a.next = 39
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(_a$sent21, "cloudDb.dataChangeNotice").toString(),
            type: "error"
          }))
        case 39:
          a.next = 41
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Qj())
        case 41:
        case "end":
          return a.stop()
      }
    }
  }, Ua)
}
function mc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fields
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$widgetId
  var i
  var /* [auto-meaningful-name] */i$attributes$cloudDbId
  var /* [auto-meaningful-name] */i$attributes$fields
  var l
  var u
  var d
  var /* [auto-meaningful-name] */m$sent
  var f
  var /* [auto-meaningful-name] */_m$sent8
  return RegeneratorRuntime.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          if (e$payload = e.payload, e$payload$fields = e$payload.fields, e$payload$setBlockValue = e$payload.setBlockValue, e$payload$widgetId = e$payload.widgetId, (i = $$_$$_$$_unrestored_shared_1531_2584_9.Bb(e$payload$widgetId)) && i.type === $$_$$_$$_unrestored_shared_1531_2584_5.l) {
            m.next = 4
            break
          }
          return m.abrupt("return")
        case 4:
          i$attributes$cloudDbId = i.attributes.cloudDbId
          i$attributes$fields = i.attributes.fields
          l = []
          u = []
          d = []
          m.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 11:
          if (m$sent = m.sent, f = e$payload$fields.length !== i$attributes$fields.length, e$payload$fields.forEach(function (e) {
            var t = true
            i$attributes$fields.forEach(function (n) {
              if (n.id === e.id) {
                if (!Lodash.isEqual(e, n)) {
                  f = true
                  u.push(e)
                }
                t = false
              }
            })
            if (t) {
              f = true
              l.push({
                key: e.key,
                value: e.value,
                type: e.type
              })
            }
          }), i$attributes$fields.forEach(function (e) {
            if (!e$payload$fields.some(function (t) {
              return t.id === e.id
            })) {
              d.push(e.id)
              f = true
            }
          }), !f) {
            m.next = 26
            break
          }
          m.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Yt, i$attributes$cloudDbId, {
            addItems: l,
            editItems: u,
            deleteItems: d
          }, $$_$$_$$_unrestored_shared_1531_2584_99.a(m$sent) ? m$sent : undefined)
        case 18:
          if ((_m$sent8 = m.sent).addItems) {
            _m$sent8.addItems.forEach(function (e) {
              e.id = e.id + ""
              e$payload$fields.forEach(function (t) {
                if (e.key === t.key) {
                  t.id = e.id
                }
              })
            })
          }
          m.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(zs, Message.Lg(e$payload$widgetId, "fields", e$payload$fields, false, true))
        case 22:
          if (e$payload$setBlockValue && 1 === _m$sent8.addItems.length) {
            e$payload$setBlockValue(_m$sent8.addItems[0].key)
          }
          u.forEach(function (e) {
            var t = i$attributes$fields.find(function (t) {
              return t.id === e.id
            })
            if (t) {
              $$_$$_$$_unrestored_shared_1531_2584_26_index.n(e$payload$widgetId, t.key, e.key)
            }
          })
          if (_m$sent8.deleteItems) {
            _m$sent8.deleteItems.forEach(function (e) {
              var t = i$attributes$fields.find(function (t) {
                return t.id === e.toString()
              })
              if (t) {
                $$_$$_$$_unrestored_shared_1531_2584_26_index.n(e$payload$widgetId, t.key, "")
              }
            })
          }
          qt([i$attributes$cloudDbId], 2, 0, $$_$$_$$_unrestored_shared_1531_2584_99.a(m$sent) ? m$sent : undefined)
        case 26:
        case "end":
          return m.stop()
      }
    }
  }, Wa)
}
function gc(e) {
  var /* [auto-meaningful-name] */_c$sent7
  var n
  var r
  var o
  var /* [auto-meaningful-name] */_c$sent8
  var a
  var /* [auto-meaningful-name] */c$sent
  return RegeneratorRuntime.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          c.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 2:
          _c$sent7 = c.sent
          n = []
          r = 1
          o = 500
          c.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Vt, e, r, o, $$_$$_$$_unrestored_shared_1531_2584_99.a(_c$sent7) ? _c$sent7 : undefined)
        case 8:
          if (_c$sent8 = c.sent, n = n.concat(_c$sent8.items), !((a = Math.ceil(_c$sent8.total / o)) > 1)) {
            c.next = 21
            break
          }
          r += 1
        case 13:
          if (!(r <= a)) {
            c.next = 21
            break
          }
          c.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Vt, e, r, o, $$_$$_$$_unrestored_shared_1531_2584_99.a(_c$sent7) ? _c$sent7 : undefined)
        case 16:
          c$sent = c.sent
          n = n.concat(c$sent.items)
        case 18:
          r++
          c.next = 13
          break
        case 21:
          return c.abrupt("return", n)
        case 22:
        case "end":
          return c.stop()
      }
    }
  }, Ha)
}
function _c(e) {
  var /* [auto-meaningful-name] */_s$sent8
  var /* [auto-meaningful-name] */e$payload$archiveId
  var /* [auto-meaningful-name] */_s$sent9
  var /* [auto-meaningful-name] */_s$sent9$content
  var /* [auto-meaningful-name] */s$sent
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_24_index$a$client
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          s.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.oTState.collWorkId
          })
        case 2:
          _s$sent8 = s.sent
          e$payload$archiveId = e.payload.archiveId
          s.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.si(""))
        case 6:
          if (!e$payload$archiveId) {
            s.next = 33
            break
          }
          s.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_298.e, e$payload$archiveId)
        case 9:
          if (_s$sent9 = s.sent, !(_s$sent9$content = _s$sent9.content)) {
            s.next = 32
            break
          }
          s.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bg())
        case 14:
          s.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.cg())
        case 16:
          s.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(loadWorkFromJSON, _s$sent9$content)
        case 18:
          s.next = 20
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.dg())
        case 20:
          s.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ei(undefined))
        case 22:
          s.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(false))
        case 24:
          s.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.tj(false))
        case 26:
          s.next = 28
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 28:
          s$sent = s.sent
          s.next = 31
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            message: Language.c(s$sent, "History.revertSuccess").toString(),
            type: "success"
          }))
        case 31:
          if (_s$sent8) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_24_index$a$client = $$_$$_$$_unrestored_shared_1531_2584_24_index.a.client) || undefined === $$_$$_$$_unrestored_shared_1531_2584_24_index$a$client)) {
              $$_$$_$$_unrestored_shared_1531_2584_24_index$a$client.forceSetDoc()
            }
          }
        case 32:
          Gn()
        case 33:
        case "end":
          return s.stop()
      }
    }
  }, Va)
}
function vc(e) {
  var t
  var n
  var /* [auto-meaningful-name] */_s$sent0
  var /* [auto-meaningful-name] */s$sent
  var /* [auto-meaningful-name] */_s$sent10
  var /* [auto-meaningful-name] */_s$sent12
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          Pn()
          t = $$_$$_$$_unrestored_shared_1531_2584_9.Y()
          n = t.map(function (e) {
            return e.attributes.cloudDbId
          })
          s.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_9.R)
        case 5:
          _s$sent0 = s.sent
          s.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_9.sb)
        case 8:
          s$sent = s.sent
          s.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_9.S)
        case 11:
          _s$sent10 = s.sent
          s.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_9.tb)
        case 14:
          if (_s$sent12 = s.sent, !(t.length > 0)) {
            s.next = 18
            break
          }
          s.next = 18
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_146.a, n, e)
        case 18:
          if (s.prev = 18, !(_s$sent0.length > 0)) {
            s.next = 24
            break
          }
          s.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.d, e, _s$sent0)
        case 22:
          s.next = 24
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.lf(_s$sent0))
        case 24:
          s.next = 29
          break
        case 26:
          s.prev = 26
          s.t0 = s.catch(18)
          console.error(s.t0)
        case 29:
          if (s.prev = 29, !(s$sent.length > 0)) {
            s.next = 35
            break
          }
          s.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.v, e, s$sent)
        case 33:
          s.next = 35
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ih(s$sent))
        case 35:
          s.next = 40
          break
        case 37:
          s.prev = 37
          s.t1 = s.catch(29)
          console.error(s.t1)
        case 40:
          if (s.prev = 40, !(_s$sent10.length > 0)) {
            s.next = 46
            break
          }
          s.next = 44
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.e, e, _s$sent10)
        case 44:
          s.next = 46
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mf(_s$sent10))
        case 46:
          s.next = 51
          break
        case 48:
          s.prev = 48
          s.t2 = s.catch(40)
          console.error(s.t2)
        case 51:
          if (s.prev = 51, !(_s$sent12.length > 0)) {
            s.next = 57
            break
          }
          s.next = 55
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_38_113.w, e, _s$sent12)
        case 55:
          s.next = 57
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Jh(_s$sent12))
        case 57:
          s.next = 62
          break
        case 59:
          s.prev = 59
          s.t3 = s.catch(51)
          console.error(s.t3)
        case 62:
        case "end":
          return s.stop()
      }
    }
  }, za, null, [[18, 26], [29, 37], [40, 48], [51, 59]])
}
function bc(e) {
  var /* [auto-meaningful-name] */e$payload$json
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(e$payload$json = e.payload.json)) {
            n.next = 4
            break
          }
          n.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(loadWorkFromJSON, e$payload$json)
        case 4:
        case "end":
          return n.stop()
      }
    }
  }, Ya)
}
function yc(e) {
  var /* [auto-meaningful-name] */e$payload$callback
  var /* [auto-meaningful-name] */u$sent
  var /* [auto-meaningful-name] */_u$sent8
  var o
  var /* [auto-meaningful-name] */_u$sent9
  var /* [auto-meaningful-name] */_u$sent0
  var /* [auto-meaningful-name] */_u$sent1
  var /* [auto-meaningful-name] */_u$sent10
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload$callback = e.payload.callback
          u.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.E)
        case 3:
          u$sent = u.sent
          u.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 6:
          if (_u$sent8 = u.sent, o = $$_$$_$$_unrestored_shared_1531_2584_99.a(_u$sent8), u$sent.title) {
            u.next = 29
            break
          }
          if (!o) {
            u.next = 24
            break
          }
          u.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_177.g, _u$sent8, 0)
        case 12:
          if (!(_u$sent9 = u.sent) || !_u$sent9.data) {
            u.next = 22
            break
          }
          u.next = 16
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(fetch, _u$sent9.data.bcmc_url)
        case 16:
          _u$sent0 = u.sent
          u.next = 19
          return _u$sent0.json()
        case 19:
          _u$sent1 = u.sent
          u.next = 22
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ti({
            title: _u$sent1.title,
            desc: _u$sent1.description || $$_$$_$$_unrestored_shared_1531_2584_327.c,
            img: _u$sent1.coverUrl || Tn.a
          }))
        case 22:
          u.next = 29
          break
        case 24:
          u.next = 26
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.G)
        case 26:
          _u$sent10 = u.sent
          u.next = 29
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ti({
            title: _u$sent10,
            desc: $$_$$_$$_unrestored_shared_1531_2584_327.c,
            img: Tn.a
          }))
        case 29:
          if (!($$_$$_$$_unrestored_shared_1531_2584_9.Y().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide"))) {
            u.next = 35
            break
          }
          u.next = 33
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.kj(true, "share", e$payload$callback))
        case 33:
          u.next = 36
          break
        case 35:
          e$payload$callback()
        case 36:
          return u.abrupt("return")
        case 37:
        case "end":
          return u.stop()
      }
    }
  }, Ka)
}
wi = {}
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.H, Qa)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.M, ds)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.gb, ms)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.lb, gs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.jb, Cs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Jb, Ss)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.kb, As)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Mb, zs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Lb, Ys)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Ob, Zs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.db, Js)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.nb, os)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.D, is)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.N, Ds)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.ASYNC_CREATE_PROJECT, onAsyncCreateProject)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.F, es)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.U, Ja)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.vb, Xa)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.E, $s)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.fb, nc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.eb, rc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.tb, Us)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Ib, Vs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.hb, oc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.y, Hs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.xb, ic)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Kb, ac)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Bc, ns)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Nb, lc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.ub, sc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.B, cc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.T, uc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.x, dc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.ab, fc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.zb, mc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Kc, ks)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.Lc, xs)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.z, ys)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.rb, Es)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.sb, _c)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.dc, bc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.bb, hc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(wi, Message.V, yc)
var Ec = wi
var Oc = qn(Ec)
function wc() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g(Object.keys(Ec), Oc)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, qa)
}
var Cc
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_296 = require("../../../unrestored/shared/1531/2584/296")
var Sc = RegeneratorRuntime.mark(Hc)
var Ic = RegeneratorRuntime.mark(Vc)
var Ac = RegeneratorRuntime.mark(zc)
var jc = RegeneratorRuntime.mark(Yc)
var Nc = RegeneratorRuntime.mark(Kc)
var Rc = RegeneratorRuntime.mark(qc)
var kc = RegeneratorRuntime.mark(Xc)
var xc = RegeneratorRuntime.mark(Qc)
var Dc = RegeneratorRuntime.mark(Jc)
var Mc = RegeneratorRuntime.mark($c)
var Lc = RegeneratorRuntime.mark(el)
var Pc = RegeneratorRuntime.mark(tl)
var Bc = RegeneratorRuntime.mark(nl)
var Fc = RegeneratorRuntime.mark(rl)
var Gc = RegeneratorRuntime.mark(ol)
var Uc = RegeneratorRuntime.mark(il)
var Wc = RegeneratorRuntime.mark(cl)
function Hc() {
  var e
  var /* [auto-meaningful-name] */n$sent
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.s)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.mj({
            type: "error",
            message: (null === (e = Language.c(n$sent, "noSelectDoc")) || undefined === e ? undefined : e.toString()) || "",
            showCloseIcon: false
          }))
        case 5:
        case "end":
          return n.stop()
      }
    }
  }, Sc)
}
function Vc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$defaultValue
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var d
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          e$payload = e.payload
          e$payload$variableType = e$payload.variableType
          e$payload$id = e$payload.id
          e$payload$name = e$payload.name
          e$payload$defaultValue = e$payload.defaultValue
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$isEmitOT = e$payload.isEmitOT
          d = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          e$payload$index = e$payload.index
          h.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.gf(e$payload$variableType, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$screenId, e$payload$index))
        case 3:
          h.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf($$_$$_$$_unrestored_shared_1531_2584_112.a("PRIMITIVE", {
            id: e$payload$id,
            name: e$payload$name,
            type: "PRIMITIVE",
            screenId: e$payload$variableType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL ? $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL : e$payload$screenId,
            value: e$payload$defaultValue,
            defaultValue: e$payload$defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          h.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 7:
          if (d) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.primitiveVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables.clientOp.add(e$payload$variableType, e$payload$screenId, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$id)
            }
          }
        case 8:
        case "end":
          return h.stop()
      }
    }
  }, Ic)
}
function zc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$defaultValue
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var p
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          e$payload = e.payload
          e$payload$arrayType = e$payload.arrayType
          e$payload$id = e$payload.id
          e$payload$name = e$payload.name
          e$payload$defaultValue = e$payload.defaultValue
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$index = e$payload.index
          e$payload$isEmitOT = e$payload.isEmitOT
          p = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          h.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ye(e$payload$arrayType, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$screenId, e$payload$index))
        case 3:
          h.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf($$_$$_$$_unrestored_shared_1531_2584_112.a("LIST", {
            id: e$payload$id,
            name: e$payload$name,
            type: "LIST",
            screenId: e$payload$arrayType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL ? $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL : e$payload$screenId,
            value: e$payload$defaultValue,
            defaultValue: e$payload$defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          h.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 7:
          if (p) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.arrayVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables.clientOp.add(e$payload$arrayType, e$payload$screenId, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$id)
            }
          }
        case 8:
        case "end":
          return h.stop()
      }
    }
  }, Ac)
}
function Yc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var i
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables
  var s
  var /* [auto-meaningful-name] */i$scopeType
  var /* [auto-meaningful-name] */i$screenId
  var /* [auto-meaningful-name] */i$name
  var /* [auto-meaningful-name] */i$defaultValue
  var /* [auto-meaningful-name] */i$index
  return RegeneratorRuntime.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          e$payload = e.payload
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          i = $$_$$_$$_unrestored_shared_1531_2584_296.a(e$payload, ["setBlockValue", "isEmitOT"])
          m.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ff(i))
        case 3:
          m.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bf($$_$$_$$_unrestored_shared_1531_2584_112.a("DICT", {
            id: i.id,
            name: i.name,
            type: "DICT",
            screenId: i.scopeType === $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL ? $$_$$_$$_unrestored_shared_1531_2584_18.i.GLOBAL : i.screenId,
            value: i.defaultValue,
            defaultValue: i.defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          m.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 7:
          if (o) {
            s = i.id
            i$scopeType = i.scopeType
            i$screenId = i.screenId
            i$name = i.name
            i$defaultValue = i.defaultValue
            i$index = i.index
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.objectVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables.clientOp.add(i$scopeType, i$screenId, s, i$name, i$defaultValue, i$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(s)
            }
          }
        case 8:
        case "end":
          return m.stop()
      }
    }
  }, jc)
}
function Kc(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.zi(e, t, n, r))
        case 2:
          o.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(t, "name", n))
        case 4:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.PRIMITIVE, t, n)
        case 5:
        case "end":
          return o.stop()
      }
    }
  }, Nc)
}
function qc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$variableType = e$payload.variableType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Kc, e$payload$variableType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 17
          break
        case 6:
          if ("defaultValue" !== e$payload$key) {
            d.next = 17
            break
          }
          d.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.yi(e$payload$variableType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Hg(e$payload$variableType, e$payload$id, "value", e$payload$value, e$payload$screenId, true))
        case 11:
          d.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 13:
          if (store.getState().project.playing) {
            d.next = 17
            break
          }
          d.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "value", e$payload$value))
        case 17:
          d.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 19:
          if (l) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.primitiveVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables.clientOp.update(e$payload$variableType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 20:
        case "end":
          return d.stop()
      }
    }
  }, Rc)
}
function Xc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$arrayType = e$payload.arrayType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Qc, e$payload$arrayType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 17
          break
        case 6:
          if ("defaultValue" !== e$payload$key || !Array.isArray(e$payload$value)) {
            d.next = 17
            break
          }
          d.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ai(e$payload$arrayType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.yg(e$payload$arrayType, e$payload$id, "value", e$payload$value, e$payload$screenId, true))
        case 11:
          d.next = 13
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 13:
          if (store.getState().project.playing) {
            d.next = 17
            break
          }
          d.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "value", e$payload$value))
        case 17:
          d.next = 19
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 19:
          if (l) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.arrayVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables.clientOp.updateProperty(e$payload$arrayType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 20:
        case "end":
          return d.stop()
      }
    }
  }, kc)
}
function Qc(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Zh(e, t, n, r))
        case 2:
          o.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 4:
          o.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(t, "name", n))
        case 6:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.ARRAY, t, n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, xc)
}
function Zc(e, t) {
  var n
  var r = false
  for (n in e) if (e[n] !== t[n]) {
    r = true
  }
  return r
}
function Jc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$scopeType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$scopeType = e$payload.scopeType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($c, e$payload$scopeType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 15
          break
        case 6:
          if ("defaultValue" !== e$payload$key || "object" !== typeof e$payload$value) {
            d.next = 15
            break
          }
          d.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.wi(e$payload$scopeType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 11:
          if (store.getState().project.playing) {
            d.next = 15
            break
          }
          d.next = 15
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(e$payload$id, "value", e$payload$value))
        case 15:
          d.next = 17
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 17:
          if (l) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.objectVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables.clientOp.updateProperty(e$payload$scopeType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 18:
        case "end":
          return d.stop()
      }
    }
  }, Dc)
}
function $c(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.xi(e, t, n, r))
        case 2:
          o.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 4:
          o.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Pj(t, "name", n))
        case 6:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.OBJECT, t, n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, Mc)
}
function el(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$fields
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var a
  var /* [auto-meaningful-name] */p$sent
  var l
  var u
  var d
  return RegeneratorRuntime.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$fields = e$payload.fields
          e$payload$isEmitOT = e$payload.isEmitOT
          i = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a = $$_$$_$$_unrestored_shared_1531_2584_9.yb(e$payload$id)
          p.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 4:
          if (p$sent = p.sent, l = [], u = [], d = e$payload$fields.length !== a.length, a.forEach(function (e) {
            e$payload$fields.forEach(function (t) {
              if (t.id === e.id) {
                if (Zc(e, t)) {
                  d = true
                }
                if (t.key !== e.key) {
                  l.push(t)
                }
              }
            })
            if (!e$payload$fields.some(function (t) {
              return t.id === e.id
            })) {
              u.push(e)
              d = true
            }
          }), !d) {
            p.next = 15
            break
          }
          p.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(e$payload$id, "fields", e$payload$fields, false, true, i))
        case 12:
          l.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.DOC_KEYS, e.id, e.key)
          })
          u.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.DOC_KEYS, e.id)
          })
          gn(p$sent)
        case 15:
        case "end":
          return p.stop()
      }
    }
  }, Lc)
}
function tl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$variableType = e$payload.variableType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.dh(e$payload$variableType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.PRIMITIVE, e$payload$id)
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.primitiveVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$primitiveVariables.clientOp.remove(e$payload$variableType, e$payload$screenId, e$payload$id)
            }
          }
          $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.PRIMITIVE, e$payload$id, $$_$$_$$_unrestored_shared_1531_2584_9.g)
          l.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bh(e$payload$id))
        case 10:
        case "end":
          return l.stop()
      }
    }
  }, Pc)
}
function nl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$arrayType = e$payload.arrayType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ah(e$payload$arrayType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.ARRAY, e$payload$id)
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.arrayVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$arrayVariables.clientOp.remove(e$payload$arrayType, e$payload$screenId, e$payload$id)
            }
          }
          $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.ARRAY, e$payload$id, $$_$$_$$_unrestored_shared_1531_2584_9.g)
          l.next = 10
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bh(e$payload$id))
        case 10:
        case "end":
          return l.stop()
      }
    }
  }, Bc)
}
function rl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$scopeType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$scopeType = e$payload.scopeType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ch(e$payload$scopeType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.OBJECT, e$payload$id)
          if (a) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.objectVariables) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$objectVariables.clientOp.remove(e$payload$scopeType, e$payload$screenId, e$payload$id)
            }
          }
          l.next = 9
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bh(e$payload$id))
        case 9:
        case "end":
          return l.stop()
      }
    }
  }, Fc)
}
function ol(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var s
  var /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$broadcasts
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$name = e$payload.name
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$index = e$payload.index
          e$payload$isEmitOT = e$payload.isEmitOT
          s = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          u.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Ze(e$payload$name, e$payload$screenId, e$payload$index))
        case 3:
          u.next = 5
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Fi(true))
        case 5:
          if (s) {
            if (!(null === ($$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$broadcasts = $$_$$_$$_unrestored_shared_1531_2584_49.oTHelper.broadcasts) || undefined === $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$broadcasts)) {
              $$_$$_$$_unrestored_shared_1531_2584_49$oTHelper$broadcasts.clientOp.add(e$payload$screenId, e$payload$name, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$name)
            }
          }
        case 6:
        case "end":
          return u.stop()
      }
    }
  }, Gc)
}
function il(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$columns
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var a
  var s
  var /* [auto-meaningful-name] */s$attributes$columns
  var /* [auto-meaningful-name] */f$sent
  var d
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          if (e$payload = e.payload, e$payload$id = e$payload.id, e$payload$columns = e$payload.columns, e$payload$isEmitOT = e$payload.isEmitOT, i = undefined === e$payload$isEmitOT || e$payload$isEmitOT, a = $$_$$_$$_unrestored_shared_1531_2584_9.Y(), s = a.find(function (e) {
            return e.attributes.cloudDbId === e$payload$id
          })) {
            f.next = 5
            break
          }
          return f.abrupt("return")
        case 5:
          s$attributes$columns = s.attributes.columns
          f.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f($$_$$_$$_unrestored_shared_1531_2584_38_22.y)
        case 8:
          f$sent = f.sent
          d = []
          p = []
          if (s$attributes$columns) {
            s$attributes$columns.forEach(function (e) {
              var t = e$payload$columns.find(function (t) {
                return t.id === e.id
              })
              if (t) {
                if (t.name !== e.name) {
                  p.push({
                    id: e.id,
                    newName: t.name
                  })
                }
              } else {
                d.push({
                  id: e.id
                })
              }
            })
          }
          f.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.Lg(s.id, "columns", e$payload$columns, false, true, i))
        case 14:
          p.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.m($$_$$_$$_unrestored_shared_1531_2584_26_index.c.COLUMNS, e.id, e.newName)
          })
          d.forEach(function (e) {
            $$_$$_$$_unrestored_shared_1531_2584_26_index.q($$_$$_$$_unrestored_shared_1531_2584_26_index.c.COLUMNS, e.id)
          })
          gn(f$sent)
        case 17:
        case "end":
          return f.stop()
      }
    }
  }, Uc)
}
Cc = {}
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.Fb, el)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.ib, Hc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.u, Vc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.o, zc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.t, Yc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.L, tl)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.I, nl)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.K, rl)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.p, ol)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.Hb, qc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.yb, Xc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.Gb, Jc)
$$_$$_$$_unrestored_shared_1531_2584_11.a(Cc, Message.Ab, il)
var al = Cc
var sl = qn(al)
function cl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g(Object.keys(al), sl)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Wc)
}
var ll
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_477_index = require("../../../unrestored/shared/1531/2584/477/index")
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1531_2584_463 = require("../../../unrestored/shared/1531/2584/463")
var pl = RegeneratorRuntime.mark(gl)
var fl = RegeneratorRuntime.mark(_l)
var hl = RegeneratorRuntime.mark(vl)
var ml = RegeneratorRuntime.mark(El)
function gl(e) {
  var /* [auto-meaningful-name] */e$payload
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          e$payload = e.payload
          n.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.ej(e.payload))
        case 3:
          if (!e$payload) {
            n.next = 9
            break
          }
          $$_$$_$$_unrestored_shared_1531_2584_477_index.a(e$payload.id, e$payload.nickname)
          n.next = 7
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b(Ms)
        case 7:
          n.next = 15
          break
        case 9:
          $$_$$_$$_unrestored_shared_1531_2584_24_index.a.disconnect()
          n.next = 12
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.warpAsyncCreateProject())
        case 12:
          n.next = 14
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.n())
        case 14:
          $$_$$_$$_unrestored_shared_1531_2584_477_index.b()
        case 15:
        case "end":
          return n.stop()
      }
    }
  }, pl)
}
function _l(e) {
  var /* [auto-meaningful-name] */_e$sent18
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0
          e.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_463.b)
        case 3:
          _e$sent18 = e.sent
          e.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.gi(_e$sent18))
        case 6:
          e.next = 10
          break
        case 8:
          e.prev = 8
          e.t0 = e.catch(0)
        case 10:
        case "end":
          return e.stop()
      }
    }
  }, fl, null, [[0, 8]])
}
function vl(e) {
  var /* [auto-meaningful-name] */_e$sent21
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0
          e.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.b($$_$$_$$_unrestored_shared_1531_2584_463.c)
        case 3:
          _e$sent21 = e.sent
          e.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e(Message.bj(_e$sent21))
        case 6:
          e.next = 10
          break
        case 8:
          e.prev = 8
          e.t0 = e.catch(0)
        case 10:
        case "end":
          return e.stop()
      }
    }
  }, hl, null, [[0, 8]])
}
var bl
var yl = qn((ll = {}, $$_$$_$$_unrestored_shared_1531_2584_11.a(ll, Message.wb, gl), $$_$$_$$_unrestored_shared_1531_2584_11.a(ll, Message.S, _l), $$_$$_$$_unrestored_shared_1531_2584_11.a(ll, Message.W, vl), ll))
function El() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g([Message.wb], yl)
        case 2:
          e.next = 4
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g([Message.S], yl)
        case 4:
          e.next = 6
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g([Message.W], yl)
        case 6:
        case "end":
          return e.stop()
      }
    }
  }, ml)
}
var Ol = RegeneratorRuntime.mark(Tl)
var wl = RegeneratorRuntime.mark(Sl)
var Cl = RegeneratorRuntime.mark(jl)
function Tl(e) {
  var /* [auto-meaningful-name] */e$payload$list
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          e$payload$list = e.payload.list
          n.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.u(e$payload$list))
        case 3:
        case "end":
          return n.stop()
      }
    }
  }, Ol)
}
function Sl(e) {
  var /* [auto-meaningful-name] */e$payload$info
  var /* [auto-meaningful-name] */i$sent
  var r
  var o
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$payload$info = e.payload.info
          i.next = 3
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.f(function (e) {
            return e.oTState.userFocusOTInfoList
          })
        case 3:
          i$sent = i.sent
          o = i$sent.findIndex(function (e) {
            return e.userId === e$payload$info.userId
          })
          r = o > -1 ? i$sent.update(o, function () {
            return $$_$$_$$_unrestored_shared_1531_2584_6.a($$_$$_$$_unrestored_shared_1531_2584_6.a({}, i$sent.get(o)), e$payload$info)
          }) : i$sent.push(e$payload$info)
          i.next = 8
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.e($$_$$_$$_unrestored_shared_1531_2584_102.v(r))
        case 8:
        case "end":
          return i.stop()
      }
    }
  }, wl)
}
bl = {}
$$_$$_$$_unrestored_shared_1531_2584_11.a(bl, $$_$$_$$_unrestored_shared_1531_2584_102.a, Tl)
$$_$$_$$_unrestored_shared_1531_2584_11.a(bl, $$_$$_$$_unrestored_shared_1531_2584_102.b, Sl)
var Il = bl
var Al = qn(Il)
function jl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.g(Object.keys(Il), Al)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Cl)
}
var Nl = RegeneratorRuntime.mark(Rl)
function Rl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1531_2584_48_3.a([$$_$$_$$_unrestored_shared_1531_2584_48_3.d(wc), $$_$$_$$_unrestored_shared_1531_2584_48_3.d(cl), $$_$$_$$_unrestored_shared_1531_2584_48_3.d(El), $$_$$_$$_unrestored_shared_1531_2584_48_3.d(jl), $$_$$_$$_unrestored_shared_1531_2584_48_3.d(ho), $$_$$_$$_unrestored_shared_1531_2584_48_3.d(Si)])
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Nl)
}
if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  window.compose
}
var kl = $$_$$_$$_unrestored_shared_1531_2584_48_486_index.a()
var store = Redux.createStore(Ot, Redux.applyMiddleware(kl))

export function getStore() {
  return store
}

kl.run(Rl)
export function dispatch(e) {
  return store.dispatch(e)
}

export function getLanguage(): Language.Language {
  return store.getState().common.language
}
