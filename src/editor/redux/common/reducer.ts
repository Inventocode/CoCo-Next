/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-0
 */

import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../unrestored/shared/1571/2636/25/index"
import Immutable from "immutable"
import * as Actions from "./actions"
import { CLOSE_CONFIRM_DIALOG, SET_STAGE_WIDTH } from "./actions"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../unrestored/shared/1571/2636/18"
import * as CustomWidgetType from "../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"../../../../unrestored/shared/1571/2636/77"
import { Action } from "redux-actions"
import { ICommonState } from "./interface"

const language = window.localStorage.getItem("LANGUAGE") || navigator.language

const confirmDialogInfo = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: ""
}

const permissionDialogInfo = {
  type: Module_18.e.camera,
  visible: false,
  onClose: undefined,
  onConfirm: undefined
}

const closedConfirmDialogInfo = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: "",
  cancelBtnVisible: false,
  confirmBtnVisible: false
}

const richTextEditorDialogInfo = {
  visible: false,
  onConfirm: undefined,
  content: ""
}

const iconLibraryDialog = {
  visible: false,
  onClose: undefined,
  onSelect: undefined,
  autoClose: true,
  value: ""
}

const importFailToastInfo = {
  visible: false,
  importFailResults: [],
  fileType: "image"
}

const stageToast = {
  visible: false
}

const projectDialog = {
  visible: false,
  selected: Module_18.f.CREATE_PROJECT
}

const gridDialog = {
  visible: false,
  grid: {
    id: "",
    name: "",
    header: {},
    data: []
  }
}

const createTableDataDialog = {
  visible: false,
  widgetId: ""
}

function saveUserConfig(userConfig: Immutable.Record<ICommonState> & Readonly<ICommonState>) {
  const { blockyToolboxPinned, stageRulerVisible } = userConfig
  localStorage.setItem("userConfig", JSON.stringify({ blockyToolboxPinned, stageRulerVisible }))
  return userConfig
}

const initialState = Immutable.Record<ICommonState>({
  language,
  editAreaUpdatedAt: 0,
  previewAreaUpdatedAt: 0,
  extensionListUpdateAt: 0,
  commonToastInfo: {
    visible: false
  },
  confirmDialogInfo,
  permissionDialogInfo,
  richTextEditorDialogInfo,
  iconLibraryDialog,
  userInfo: null,
  userInfoFetchDone: false,
  importFailToastInfo,
  stageToast,
  stageState: {
    isActorDragging: false
  },
  projectDialog,
  gridDialog,
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
  tableDataDialog: gridDialog,
  createTableDataDialog,
  widgetMallVisible: false,
  isProjectModified: false,
  isProjectFinishedOpen: false,
  lastSavedTime: undefined,
  projectSaveProgressDialog: {
    visible: false,
    progress: 10
  },
  consoleMessages: Immutable.List(),
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
  // [CoCo Next] 小屏设备可隐藏 header
  headerVisible: false,
  isHoverBlockArea: false,
  collAutoSave: false,
  historyArchiveId: "",
  editPermission: Module_18.c.Edit,
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
    callback() {}
  },
  cloudDBManagerDialogVisible: false,
  cloudDBPublishDialogInfo: {
    visible: false,
    type: "",
    callback() {}
  },
  sliderImageDialogInfo: {
    visible: false,
    widgetId: "",
    direction: Module_77.b.HORIZONTAL,
    handleImageFileId: "",
    handleImageRatio: 1.5,
    handleImageDirection: Module_77.b.HORIZONTAL,
    backgroundImageFileId: "",
    backgroundImageDirection: Module_77.b.HORIZONTAL,
    trackImageFileId: "",
    trackImageDirection: Module_77.b.HORIZONTAL
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
  },
  ...function () {
    const userConfigString = localStorage.getItem("userConfig")
    const config = {
      blockyToolboxPinned: false,
      stageRulerVisible: true
    }
    if (userConfigString) {
      try {
        const userConfig = JSON.parse(userConfigString)
        Object.assign(config, userConfig)
      } catch (__ignore) {}
    }
    return config
  }(),
  floatMiniIcons: {
    fixedIcons: [],
    temporaryIcons: []
  },
  startCurrentScreen: true
})()

function T(e, t) {
  return e.consoleMessages.push(Immutable.Record(t.payload)())
}
function S(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "copiedContent"], { ...t$payload })
}
function A(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "selectedContent"], { ...t$payload })
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
      return !t$payload$widgetTypes.includes(CustomWidgetType.standardize(e.type, true))
    })
  })
}
function D(e, t) {
  var /* [auto-meaningful-name] */t$payload$name = t.payload.name
  return e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  }) ? (console.error("float icon name existed!"), e) : e.setIn(["floatMiniIcons", "temporaryIcons"], [].concat(Module_25.a(e.floatMiniIcons.temporaryIcons), [t.payload]))
}
function M(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$icon = t$payload.icon
  var s = e.floatMiniIcons.temporaryIcons.findIndex(function (e) {
    return e.name === t$payload$name
  })
  return s >= 0 ? (e.floatMiniIcons.temporaryIcons.splice(s, 1, {
    ...Actions.fh,
    ...t$payload$icon
  }), e.setIn(["floatMiniIcons", "temporaryIcons"], Module_25.a(e.floatMiniIcons.temporaryIcons))) : D(e, {
    type: Actions.d,
    payload: {
      ...Actions.fh,
      ...t$payload$icon
    }
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
  return e.setIn(["floatMiniIcons", "temporaryIcons"], Module_25.a(e.floatMiniIcons.temporaryIcons))
}
function B(e, t) {
  return e.setIn(["isProjectFinishedOpen"], t.payload)
}

function commonReducer(state = initialState, action: Action<any>) {
  switch (action.type) {
    case Actions.dd:
      return state.set("language", action.payload.language)
    case Actions.Se:
      return state.set("previewAreaUpdatedAt", Date.now())
    case Actions.Qe:
      return state.set("editAreaUpdatedAt", Date.now())
    case Actions.Re:
      return state.set("extensionListUpdateAt", Date.now())
    case Actions.re:
      return state.set("commonToastInfo", {
        visible: true,
        ...action.payload
      })
    case Actions.pc:
      return state.set("commonToastInfo", {
        visible: false
      })
    case Actions.Ec:
      return state.set("confirmDialogInfo", {
        visible: true,
        ...action.payload
      })
    case CLOSE_CONFIRM_DIALOG:
      return state.set("confirmDialogInfo", closedConfirmDialogInfo)
    case Actions.Ke:
      return state.set("permissionDialogInfo", action.payload)
    case Actions.Fc:
      return state.set("iconLibraryDialog", {
        visible: true,
        ...action.payload
      })
    case Actions.Yb:
      return state.set("iconLibraryDialog", iconLibraryDialog)
    case Actions.nd:
      return state.set("userInfoFetchDone", true)
    case Actions.he:
      return state.set("userInfo", action.payload).set("userInfoFetchDone", true)
    case Actions.Ae:
      return state.set("importFailToastInfo", {
        visible: true,
        ...action.payload
      })
    case Actions.xc:
      return state.set("importFailToastInfo", { ...importFailToastInfo })
    case Actions.De:
      return state.set("stageToast", {
        visible: true,
        toast: action.payload.toast,
        showIcon: action.payload.showIcon || false
      })
    case Actions.zc:
      return state.set("stageToast", stageToast)
    case Actions.cd:
      return state.setIn(["stageState", "isActorDragging"], action.payload)
    case Actions.Gc:
      return state.set("projectDialog", {
        visible: true,
        selected: action.payload.selected
      })
    case Actions.Zb:
      return state.set("projectDialog", { ...projectDialog })
    case Actions.Rd:
      return state.set("isProjectModified", action.payload)
    case Actions.Qd:
      return state.set("lastSavedTime", action.payload)
    case Actions.Vd:
      return state.setIn(["projectSaveProgressDialog", "visible"], action.payload)
    case Actions.Ud:
      return state.setIn(["projectSaveProgressDialog", "progress"], action.payload)
    case Actions.Xd:
      return state.set("saving", action.payload)
    case Actions.n:
      return state.set("consoleMessages", T(state, action))
    case Actions.Tb:
      return state.set("consoleMessages", Immutable.List())
    case Actions.kd:
      return state.set("consoleHeight", action.payload)
    case Actions.bc:
      return state.set("signInDialogInfo", {
        visible: false
      })
    case Actions.Ic:
      return state.set("signInDialogInfo", {
        visible: true,
        onSuccess: action.payload.onSuccess
      })
    case Actions.be:
      return saveUserConfig(state.set("stageRulerVisible", action.payload))
    case SET_STAGE_WIDTH:
      return state.set("stageWidth", action.payload)
    case Actions.de:
      return state.set("stageVisible", action.payload)
    // [CoCo Next] 小屏设备可隐藏 header
    case Actions.SET_HEADER_VISIBLE:
      return state.set("headerVisible", action.payload)
    case Actions.Ad:
      return state.set("isHoverBlockArea", action.payload)
    case Actions.gd:
      return saveUserConfig(state.set("blockyToolboxPinned", action.payload))
    case Actions.ie:
      return state.set("widgetAttributeVisible", action.payload)
    case Actions.ae:
      return state.set("rightSideActiveMenu", action.payload)
    case Actions.td:
      return S(state, action)
    case Actions.xd:
      return A(state, action)
    case Actions.ud:
      return I(state, action)
    case Actions.wd:
      return j(state, action)
    case Actions.vd:
      return N(state, action)
    case Actions.rd:
      return R(state, action)
    case Actions.sd:
      return state.setIn(["gridStatus", "isCustomWidth"], action.payload)
    case Actions.ce:
      return state.set("stageScale", action.payload)
    case Actions.id:
      return state.set("collAutoSave", action.payload)
    case Actions.yd:
      return state.set("historyArchiveId", action.payload)
    case Actions.Od:
      return state.set("editPermission", action.payload)
    case Actions.ze:
      return state.set("historyDialogVisible", action.payload)
    case Actions.ye:
      return state.set("gridDialog", {
        visible: true,
        ...action.payload
      })
    case Actions.wc:
      return state.set("gridDialog", { ...gridDialog })
    case Actions.Ee:
      return state.set("tableDataDialog", {
        visible: true,
        ...action.payload
      })
    case Actions.Ac:
      return state.set("tableDataDialog", { ...gridDialog })
    case Actions.te:
      return state.set("createTableDataDialog", {
        visible: true,
        ...action.payload
      })
    case Actions.rc:
      return state.set("createTableDataDialog", { ...createTableDataDialog })
    case Actions.je:
      return state.set("widgetMallVisible", action.payload)
    case Actions.Wc:
      return state.set("myExtensionWidgets", action.payload.widgets)
    case Actions.g:
      return k(state, action)
    case Actions.Oc:
      return x(state, action)
    case Actions.hd:
      return state.set("blockImageDialogInfo", {
        visible: action.payload.visible,
        imgSrc: action.payload.imgSrc
      })
    case Actions.Be:
      return state.set("releaseInfoDialogVisible", action.payload)
    case Actions.ne:
      return state.set("cloudDBGridDialogInfo", {
        widgetName: action.payload.widgetName,
        visible: action.payload.visible,
        cloudDBId: action.payload.cloudDBId,
        isProd: action.payload.isProd,
        callback: action.payload.callback
      })
    case Actions.oe:
      return state.set("cloudDBManagerDialogVisible", action.payload)
    case Actions.pe:
      return state.set("cloudDBPublishDialogInfo", {
        visible: action.payload.visible,
        type: action.payload.type,
        callback: action.payload.callback
      })
    case Actions.Bd:
      return state.set("isOffLine", action.payload)
    case Actions.Me:
      return state.set("sliderImageDialogInfo", { ...action.payload })
    case Actions.ac:
      return state.set("richTextEditorDialogInfo", richTextEditorDialogInfo)
    case Actions.Hc:
      return state.set("richTextEditorDialogInfo", {
        visible: true,
        ...action.payload
      })
    case Actions.Ne:
      return state.set("switchImageDialogInfo", { ...action.payload })
    case Actions.ge:
      return state.set("templateList", action.payload)
    case Actions.md:
      return state.set("courseList", action.payload)
    case Actions.ld:
      return state.set("courseDialogVisible", action.payload)
    case Actions.Wd:
      return state.set("projectSavePrompt", action.payload)
    case Actions.d:
      return D(state, action)
    case Actions.Mc:
      return L(state, action)
    case Actions.Uc:
      return M(state, action)
    case Actions.od:
      return P(state, action)
    case Actions.Sd:
      return B(state, action)
    // 提取运行位置设置
    case Actions.SET_START_CURRENT_SCREEN:
      return state.set("startCurrentScreen", action.payload)
    default:
      return state
  }
}
export { commonReducer as F }
