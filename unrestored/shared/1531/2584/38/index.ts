"use strict";

export { xl as d };
export { Dl as c };
export { Ml as a };
export { Ll as b };
var r = require("../155/index");
var o = require("./486/index");
var i = require("../25/index");
var a = require("../6");
var s = require("./66");
var c = require("../2");
var l = require("../18");
var u = require("../79");
var d = require("../78");
var p = window.localStorage.getItem("LANGUAGE") || navigator.language;
var f = {
  visible: !1,
  onClose: void 0,
  onConfirm: void 0,
  title: "",
  content: ""
};
var h = {
  type: l.e.camera,
  visible: !1,
  onClose: void 0,
  onConfirm: void 0
};
var m = {
  visible: !1,
  onClose: void 0,
  onConfirm: void 0,
  title: "",
  content: "",
  cancelBtnVisible: !1,
  confirmBtnVisible: !1
};
var g = {
  visible: !1,
  onConfirm: void 0,
  content: ""
};
var _ = {
  visible: !1,
  onClose: void 0,
  onSelect: void 0,
  autoClose: !0,
  value: ""
};
var v = {
  visible: !1,
  importFailResults: [],
  fileType: "image"
};
var b = {
  visible: !1
};
var y = {
  visible: !1,
  selected: l.f.CREATE_PROJECT
};
var E = {
  visible: !1,
  grid: {
    id: "",
    name: "",
    header: {},
    data: []
  }
};
var O = {
  visible: !1,
  widgetId: ""
};
function w(e) {
  var t = e.blockyToolboxPinned;
  var n = e.stageRulerVisible;
  localStorage.setItem("userConfig", JSON.stringify({
    blockyToolboxPinned: t,
    stageRulerVisible: n
  }));
  return e;
}
var C = s.a.Record(Object(a.a)(Object(a.a)({
  language: p,
  editAreaUpdatedAt: 0,
  previewAreaUpdatedAt: 0,
  extensionListUpdateAt: 0,
  commonToastInfo: {
    visible: !1
  },
  confirmDialogInfo: f,
  permissionDialogInfo: h,
  richTextEditorDialogInfo: g,
  iconLibraryDialog: _,
  userInfo: null,
  userInfoFetchDone: !1,
  importFailToastInfo: v,
  stageToast: b,
  stageState: {
    isActorDragging: !1
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
    isCustomWidth: !1
  },
  tableDataDialog: E,
  createTableDataDialog: O,
  widgetMallVisible: !1,
  isProjectModified: !1,
  isProjectFinishedOpen: !1,
  lastSavedTime: void 0,
  projectSaveProgressDialog: {
    visible: !1,
    progress: 10
  },
  consoleMessages: s.a.List(),
  consoleHeight: 0,
  saving: !1,
  widgetAttributeVisible: !1,
  rightSideActiveMenu: void 0,
  signInDialogInfo: {
    visible: !1
  },
  stageScale: 1,
  stageWidth: 412,
  stageVisible: !0,
  isHoverBlockArea: !1,
  collAutoSave: !1,
  historyArchiveId: "",
  editPermission: l.c.Edit,
  historyDialogVisible: !1,
  myExtensionWidgets: [],
  blockImageDialogInfo: {
    visible: !1,
    imgSrc: ""
  },
  releaseInfoDialogVisible: !1,
  cloudDBGridDialogInfo: {
    widgetName: "",
    visible: !1,
    cloudDBId: "",
    isProd: !1,
    callback: function () {}
  },
  cloudDBManagerDialogVisible: !1,
  cloudDBPublishDialogInfo: {
    visible: !1,
    type: "",
    callback: function () {}
  },
  sliderImageDialogInfo: {
    visible: !1,
    widgetId: "",
    direction: d.b.HORIZONTAL,
    handleImageFileId: "",
    handleImageRatio: 1.5,
    handleImageDirection: d.b.HORIZONTAL,
    backgroundImageFileId: "",
    backgroundImageDirection: d.b.HORIZONTAL,
    trackImageFileId: "",
    trackImageDirection: d.b.HORIZONTAL
  },
  switchImageDialogInfo: {
    visible: !1,
    widgetId: "",
    imageOpenFileId: "",
    imageCloseFileId: ""
  },
  isOffLine: !1,
  templateList: [],
  courseList: [],
  courseDialogVisible: !1,
  projectSavePrompt: {
    visible: !1,
    openFrom: ""
  }
}, function () {
  var e = localStorage.getItem("userConfig");
  var t = {
    blockyToolboxPinned: !1,
    stageRulerVisible: !0
  };
  if (e) {
    try {
      var n = JSON.parse(e);
      Object.assign(t, n);
    } catch (r) {}
  }
  return t;
}()), {}, {
  floatMiniIcons: {
    fixedIcons: [],
    temporaryIcons: []
  }
}))();
function T(e, t) {
  return e.consoleMessages.push(s.a.Record(t.payload)());
}
function S(e, t) {
  var n = t.payload;
  return e.setIn(["gridStatus", "copiedContent"], Object(a.a)({}, n));
}
function I(e, t) {
  var n = t.payload;
  return e.setIn(["gridStatus", "selectedContent"], Object(a.a)({}, n));
}
function A(e, t) {
  var n = t.payload.columnId;
  return e.setIn(["gridStatus", "editingHeader"], n);
}
function j(e, t) {
  var n = t.payload.columnIds;
  return e.setIn(["gridStatus", "errorHeaders"], n);
}
function N(e, t) {
  var n = t.payload.errorCells;
  return e.setIn(["gridStatus", "errorCells"], n);
}
function R(e, t) {
  var n = t.payload.columnIds;
  return e.setIn(["gridStatus", "animationHeaders"], n);
}
function k(e, t) {
  var n = t.payload.widgets;
  return e.update("myExtensionWidgets", function (e) {
    return n.concat(e);
  });
}
function x(e, t) {
  var n = t.payload.widgetTypes;
  return e.update("myExtensionWidgets", function (e) {
    return e.filter(function (e) {
      return !n.includes(Object(u.c)(e.type, !0));
    });
  });
}
function D(e, t) {
  var n = t.payload.name;
  return e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === n;
  }) ? (console.error("float icon name existed!"), e) : e.setIn(["floatMiniIcons", "temporaryIcons"], [].concat(Object(i.a)(e.floatMiniIcons.temporaryIcons), [t.payload]));
}
function M(e, t) {
  var n = t.payload;
  var r = n.name;
  var o = n.icon;
  var s = e.floatMiniIcons.temporaryIcons.findIndex(function (e) {
    return e.name === r;
  });
  return s >= 0 ? (e.floatMiniIcons.temporaryIcons.splice(s, 1, Object(a.a)(Object(a.a)({}, c.fh), o)), e.setIn(["floatMiniIcons", "temporaryIcons"], Object(i.a)(e.floatMiniIcons.temporaryIcons))) : D(e, {
    type: c.d,
    payload: Object(a.a)(Object(a.a)({}, c.fh), o)
  });
}
function L(e, t) {
  var n = e.floatMiniIcons.temporaryIcons.filter(function (e) {
    return e.name !== t.payload;
  });
  return e.setIn(["floatMiniIcons", "temporaryIcons"], n);
}
function P(e, t) {
  var n = t.payload;
  var r = n.name;
  var o = n.visible;
  var a = e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === r;
  });
  if (a) {
    a.visible = o;
  }
  return e.setIn(["floatMiniIcons", "temporaryIcons"], Object(i.a)(e.floatMiniIcons.temporaryIcons));
}
function B(e, t) {
  return e.setIn(["isProjectFinishedOpen"], t.payload);
}
var F = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case c.dd:
      return e.set("language", t.payload.language);
    case c.Se:
      return e.set("previewAreaUpdatedAt", Date.now());
    case c.Qe:
      return e.set("editAreaUpdatedAt", Date.now());
    case c.Re:
      return e.set("extensionListUpdateAt", Date.now());
    case c.re:
      return e.set("commonToastInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.pc:
      return e.set("commonToastInfo", {
        visible: !1
      });
    case c.Ec:
      return e.set("confirmDialogInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.Wb:
      return e.set("confirmDialogInfo", m);
    case c.Ke:
      return e.set("permissionDialogInfo", t.payload);
    case c.Fc:
      return e.set("iconLibraryDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.Yb:
      return e.set("iconLibraryDialog", _);
    case c.nd:
      return e.set("userInfoFetchDone", !0);
    case c.he:
      return e.set("userInfo", t.payload).set("userInfoFetchDone", !0);
    case c.Ae:
      return e.set("importFailToastInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.xc:
      return e.set("importFailToastInfo", Object(a.a)({}, v));
    case c.De:
      return e.set("stageToast", {
        visible: !0,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || !1
      });
    case c.zc:
      return e.set("stageToast", b);
    case c.cd:
      return e.setIn(["stageState", "isActorDragging"], t.payload);
    case c.Gc:
      return e.set("projectDialog", {
        visible: !0,
        selected: t.payload.selected
      });
    case c.Zb:
      return e.set("projectDialog", Object(a.a)({}, y));
    case c.Rd:
      return e.set("isProjectModified", t.payload);
    case c.Qd:
      return e.set("lastSavedTime", t.payload);
    case c.Vd:
      return e.setIn(["projectSaveProgressDialog", "visible"], t.payload);
    case c.Ud:
      return e.setIn(["projectSaveProgressDialog", "progress"], t.payload);
    case c.Xd:
      return e.set("saving", t.payload);
    case c.n:
      return e.set("consoleMessages", T(e, t));
    case c.Tb:
      return e.set("consoleMessages", s.a.List());
    case c.kd:
      return e.set("consoleHeight", t.payload);
    case c.bc:
      return e.set("signInDialogInfo", {
        visible: !1
      });
    case c.Ic:
      return e.set("signInDialogInfo", {
        visible: !0,
        onSuccess: t.payload.onSuccess
      });
    case c.be:
      return w(e.set("stageRulerVisible", t.payload));
    case c.ee:
      return e.set("stageWidth", t.payload);
    case c.de:
      return e.set("stageVisible", t.payload);
    case c.Ad:
      return e.set("isHoverBlockArea", t.payload);
    case c.gd:
      return w(e.set("blockyToolboxPinned", t.payload));
    case c.ie:
      return e.set("widgetAttributeVisible", t.payload);
    case c.ae:
      return e.set("rightSideActiveMenu", t.payload);
    case c.td:
      return S(e, t);
    case c.xd:
      return I(e, t);
    case c.ud:
      return A(e, t);
    case c.wd:
      return j(e, t);
    case c.vd:
      return N(e, t);
    case c.rd:
      return R(e, t);
    case c.sd:
      return e.setIn(["gridStatus", "isCustomWidth"], t.payload);
    case c.ce:
      return e.set("stageScale", t.payload);
    case c.id:
      return e.set("collAutoSave", t.payload);
    case c.yd:
      return e.set("historyArchiveId", t.payload);
    case c.Od:
      return e.set("editPermission", t.payload);
    case c.ze:
      return e.set("historyDialogVisible", t.payload);
    case c.ye:
      return e.set("gridDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.wc:
      return e.set("gridDialog", Object(a.a)({}, E));
    case c.Ee:
      return e.set("tableDataDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.Ac:
      return e.set("tableDataDialog", Object(a.a)({}, E));
    case c.te:
      return e.set("createTableDataDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.rc:
      return e.set("createTableDataDialog", Object(a.a)({}, O));
    case c.je:
      return e.set("widgetMallVisible", t.payload);
    case c.Wc:
      return e.set("myExtensionWidgets", t.payload.widgets);
    case c.g:
      return k(e, t);
    case c.Oc:
      return x(e, t);
    case c.hd:
      return e.set("blockImageDialogInfo", {
        visible: t.payload.visible,
        imgSrc: t.payload.imgSrc
      });
    case c.Be:
      return e.set("releaseInfoDialogVisible", t.payload);
    case c.ne:
      return e.set("cloudDBGridDialogInfo", {
        widgetName: t.payload.widgetName,
        visible: t.payload.visible,
        cloudDBId: t.payload.cloudDBId,
        isProd: t.payload.isProd,
        callback: t.payload.callback
      });
    case c.oe:
      return e.set("cloudDBManagerDialogVisible", t.payload);
    case c.pe:
      return e.set("cloudDBPublishDialogInfo", {
        visible: t.payload.visible,
        type: t.payload.type,
        callback: t.payload.callback
      });
    case c.Bd:
      return e.set("isOffLine", t.payload);
    case c.Me:
      return e.set("sliderImageDialogInfo", Object(a.a)({}, t.payload));
    case c.ac:
      return e.set("richTextEditorDialogInfo", g);
    case c.Hc:
      return e.set("richTextEditorDialogInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.Ne:
      return e.set("switchImageDialogInfo", Object(a.a)({}, t.payload));
    case c.ge:
      return e.set("templateList", t.payload);
    case c.md:
      return e.set("courseList", t.payload);
    case c.ld:
      return e.set("courseDialogVisible", t.payload);
    case c.Wd:
      return e.set("projectSavePrompt", t.payload);
    case c.d:
      return D(e, t);
    case c.Mc:
      return L(e, t);
    case c.Uc:
      return M(e, t);
    case c.od:
      return P(e, t);
    case c.Sd:
      return B(e, t);
    default:
      return e;
  }
};
var G = require("../31/index");
var U = require("../60");
var W = require("../53");
var H = s.a.Record({
  position: {
    x: 0,
    y: 0
  },
  visible: !1,
  widgetId: ""
})();
var V = {
  visible: !1,
  actorId: "",
  onSelect: void 0
};
var z = s.a.Record({
  currentScreenIndex: -1,
  id: U.v,
  bcmUrl: "",
  jsonFrom: l.d.OTHER,
  title: "新的作品",
  version: W.e,
  playing: !1,
  playedAt: 0,
  screens: s.a.List([]),
  selectedWidgetId: void 0,
  contextMenuInfo: H,
  styleDialog: V,
  apiToken: null,
  focusedWorkspaceArea: null,
  globalVariableList: [],
  globalArrayList: [],
  globalObjectList: [],
  isPackaging: !1,
  packageProgress: 0,
  packageTaskLabel: null,
  packageUrl: null,
  packageProgressVisible: !1,
  packageDialogVisible: !1,
  packageQrCodeVisible: !1,
  packageCompleteVisible: !0,
  packageInfo: {
    apkName: "",
    apkIcon: "",
    apkSplash: "",
    packLabel: "",
    isCancel: !1
  },
  projectShareInfo: {
    title: "",
    desc: "",
    img: ""
  },
  projectSource: {
    tag: l.g.FREEDOM,
    id: ""
  },
  globalWidgetIds: []
})();
function Y(e) {
  return z;
}
function K(e, t) {
  var n = t.payload.project;
  var r = n.screens;
  var o = n.title;
  var i = n.globalVariableList;
  var a = n.globalArrayList;
  var c = n.globalWidgetIds;
  var l = n.globalObjectList;
  var u = r.map(function (e) {
    return s.a.Record(e)();
  });
  return e.set("screens", s.a.List(u)).set("title", o).set("selectedWidgetId", void 0).set("currentScreenIndex", -1).set("playing", !1).set("globalVariableList", Object(G.cloneDeep)(i)).set("globalArrayList", Object(G.cloneDeep)(a)).set("globalWidgetIds", Object(G.cloneDeep)(c)).set("globalObjectList", Object(G.cloneDeep)(l));
}
function q(e, t) {
  return e.set("id", t.payload.projectId);
}
function X(e, t) {
  var n = t.payload;
  var r = n.screen;
  var o = n.index;
  var i = s.a.Record(r)();
  var a = o || e.screens.size;
  return e.update("screens", function (e) {
    return e.splice(a, 0, i);
  });
}
function Q(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.title;
  var i = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return e.updateIn(["screens", i], function (e) {
    return e.set("title", o);
  });
}
function Z(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.key;
  var i = n.value;
  var a = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return e.updateIn(["screens", a], function (e) {
    return e.set(o, i);
  });
}
function J(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.snapshot;
  var i = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return e.updateIn(["screens", i], function (e) {
    return e.set("snapshot", o);
  });
}
function $(e, t) {
  var n = t.payload.screenId;
  var r = e.screens.findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.update("screens", function (e) {
    return e.delete(r);
  }) : e;
}
function ee(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.widgetId;
  var i = n.isInvisibleWidget;
  var a = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return a > -1 ? i ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return (e || []).concat(o);
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.concat(o);
  }) : e;
}
function te(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.widgetIds;
  var a = n.isInvisibleWidget;
  var s = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return a ? e.updateIn(["screens", s, "invisibleWidgetIds"], function () {
    return Object(i.a)(o);
  }) : e.updateIn(["screens", s, "widgetIds"], function () {
    return Object(i.a)(o);
  });
}
function ne(e, t) {
  var n = t.payload;
  var r = n.screenId;
  var o = n.widgetId;
  var i = n.isInvisibleWidget;
  var a = e.screens.findIndex(function (e) {
    return e.id === r;
  });
  return a > -1 ? (o === e.selectedWidgetId && (e = e.set("selectedWidgetId", void 0)), i ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== o;
    });
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== o;
    });
  })) : e;
}
function re(e, t) {
  var n = t.payload.widgetId;
  if (n === e.selectedWidgetId) {
    e = e.set("selectedWidgetId", void 0);
  }
  return e.update("globalWidgetIds", function (e) {
    return e.filter(function (e) {
      return e !== n;
    });
  });
}
function oe(e, t) {
  var n = t.payload;
  var r = n.variableType;
  var o = n.id;
  var a = n.name;
  var s = n.defaultValue;
  var c = n.screenId;
  var u = n.index;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      e.splice(u, 0, {
        id: o,
        name: a,
        defaultValue: s,
        value: s
      });
      return Object(i.a)(e);
    });
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === c;
  });
  return d > -1 ? e.updateIn(["screens", d, "primitiveVariables"], function (e) {
    e.splice(u, 0, {
      id: o,
      name: a,
      defaultValue: s,
      value: s
    });
    return Object(i.a)(e);
  }) : e;
}
function ie(e, t) {
  var n = t.payload;
  var r = n.variableType;
  var o = n.id;
  var i = n.name;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "name"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "name"], i) : e;
}
function ae(e, t) {
  var n = t.payload;
  var r = n.scopeType;
  var o = n.id;
  var i = n.name;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "name"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "name"], i) : e;
}
function se(e, t) {
  var n = t.payload;
  var r = n.variableType;
  var o = n.id;
  var i = n.defaultValue;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "defaultValue"], i).setIn(["globalVariableList", s, "value"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "defaultValue"], i).setIn(["screens", c, "primitiveVariables", u, "value"], i) : e;
}
function ce(e, t) {
  var n = t.payload;
  var r = n.scopeType;
  var o = n.id;
  var i = n.defaultValue;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "defaultValue"], i).setIn(["globalObjectList", s, "value"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "defaultValue"], i).setIn(["screens", c, "objectVariables", u, "value"], i) : e;
}
function le(e, t) {
  var n = t.payload;
  var r = n.variableType;
  var o = n.id;
  var i = n.screenId;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      return e.filter(function (e) {
        return e.id !== o;
      });
    });
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === i;
  });
  return a > -1 ? e.updateIn(["screens", a, "primitiveVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== o;
    });
  }) : e;
}
function ue(e, t) {
  var n = t.payload;
  var r = n.arrayType;
  var o = n.id;
  var a = n.name;
  var s = n.defaultValue;
  var c = n.screenId;
  var u = n.index;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      e.splice(u, 0, {
        id: o,
        name: a,
        defaultValue: s,
        value: s
      });
      return Object(i.a)(e);
    });
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === c;
  });
  return d > -1 ? e.updateIn(["screens", d, "arrayVariables"], function (e) {
    e.splice(u, 0, {
      id: o,
      name: a,
      defaultValue: s,
      value: s
    });
    return Object(i.a)(e);
  }) : e;
}
function de(e, t) {
  var n = t.payload;
  var r = n.scopeType;
  var o = n.screenId;
  var a = n.index;
  var s = n.id;
  var c = n.name;
  var u = n.defaultValue;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      e.splice(a, 0, {
        id: s,
        name: c,
        defaultValue: u,
        value: u
      });
      return Object(i.a)(e);
    });
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === o;
  });
  return d > -1 ? e.updateIn(["screens", d, "objectVariables"], function (e) {
    e.splice(a, 0, {
      id: s,
      name: c,
      defaultValue: u,
      value: u
    });
    return Object(i.a)(e);
  }) : e;
}
function pe(e, t) {
  var n = t.payload;
  var r = n.arrayType;
  var o = n.id;
  var i = n.screenId;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      return e.filter(function (e) {
        return e.id !== o;
      });
    });
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === i;
  });
  return a > -1 ? e.updateIn(["screens", a, "arrayVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== o;
    });
  }) : e;
}
function fe(e, t) {
  var n = t.payload;
  var r = n.scopeType;
  var o = n.id;
  var i = n.screenId;
  if (r === l.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      return e.filter(function (e) {
        return e.id !== o;
      });
    });
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === i;
  });
  return a > -1 ? e.updateIn(["screens", a, "objectVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== o;
    });
  }) : e;
}
function he(e, t) {
  var n = t.payload;
  var r = n.arrayType;
  var o = n.id;
  var i = n.name;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "name"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "name"], i) : e;
}
function me(e, t) {
  var n = t.payload;
  var r = n.arrayType;
  var o = n.id;
  var i = n.defaultValue;
  var a = n.screenId;
  if (r === l.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === o;
    });
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "defaultValue"], i).setIn(["globalArrayList", s, "value"], i);
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === a;
  });
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === o;
  });
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "defaultValue"], i).setIn(["screens", c, "arrayVariables", u, "value"], i) : e;
}
function ge(e, t) {
  var n = t.payload;
  var r = n.from;
  var o = n.to;
  var i = e.get("screens");
  var a = i.get(r);
  var s = i.get(e.get("currentScreenIndex"));
  if (a && s) {
    var c = i.splice(r, 1).splice(o, 0, a);
    var l = c.indexOf(s);
    return e.set("screens", c).set("currentScreenIndex", l);
  }
  return e;
}
function _e(e, t) {
  var n = t.payload;
  var r = n.name;
  var o = n.screenId;
  var a = n.index;
  var s = e.screens.findIndex(function (e) {
    return e.id === o;
  });
  return s > -1 ? e.updateIn(["screens", s, "broadcasts"], function (e) {
    e.splice(a, 0, r);
    return Object(i.a)(e);
  }) : e;
}
function ve(e, t) {
  var n = t.payload;
  var r = n.name;
  var o = n.screenId;
  var i = e.screens.findIndex(function (e) {
    return e.id === o;
  });
  return i > -1 ? e.updateIn(["screens", i, "broadcasts"], function (e) {
    return e.filter(function (e) {
      return e !== r;
    });
  }) : e;
}
function be(e, t) {
  var n = t.payload;
  return e.set("contextMenuInfo", s.a.Record(n)());
}
function ye(e) {
  return e.set("contextMenuInfo", H);
}
function Ee(e, t) {
  return e.set("styleDialog", Object(a.a)({
    visible: !0
  }, t.payload));
}
function Oe(e) {
  return e.set("styleDialog", Object(a.a)({}, V));
}
function we(e, t) {
  return e.set("selectedWidgetId", t.payload.widgetId);
}
var Ce = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case c.Te:
      return e.set("bcmUrl", t.payload.bcmUrl);
    case c.Rb:
      return e.set("title", t.payload.title);
    case c.Xc:
      return K(e, t);
    case c.Yc:
      return q(e, t);
    case c.Ve:
      return J(e, t);
    case c.Dc:
      return ge(e, t);
    case c.Ue:
      return Z(e, t);
    case c.We:
      return Q(e, t);
    case c.k:
      return X(e, t);
    case c.kc:
      return $(e, t);
    case c.j:
      return e.set("globalWidgetIds", e.globalWidgetIds.concat(t.payload.widgetId));
    case c.l:
      return ee(e, t);
    case c.Fe:
      return e.set("globalWidgetIds", t.payload.widgetIds);
    case c.He:
      return te(e, t);
    case c.Pc:
      return re(e, t);
    case c.Qc:
      return ne(e, t);
    case c.bd:
      return we(e, t);
    case c.Nd:
      return e.set("currentScreenIndex", t.payload);
    case c.Ie:
      return e.set("playing", !0).set("playedAt", Date.now());
    case c.Je:
      return e.set("playing", !1);
    case c.i:
      return oe(e, t);
    case c.jc:
      return le(e, t);
    case c.Ld:
      return ie(e, t);
    case c.Kd:
      return se(e, t);
    case c.a:
      return ue(e, t);
    case c.h:
      return de(e, t);
    case c.ic:
      return fe(e, t);
    case c.Dd:
      return ae(e, t);
    case c.Cd:
      return ce(e, t);
    case c.ec:
      return pe(e, t);
    case c.fd:
      return he(e, t);
    case c.ed:
      return me(e, t);
    case c.b:
      return _e(e, t);
    case c.fc:
      return ve(e, t);
    case c.Pb:
      return be(e, t);
    case c.Xb:
      return ye(e);
    case c.Vb:
      return Y();
    case c.Ge:
      return e.set("screens", t.payload.screens);
    case c.Jc:
      return Ee(e, t);
    case c.cc:
      return Oe(e);
    case c.Md:
      return e.set("apiToken", t.payload.token);
    case c.Td:
      return e.set("packageTaskLabel", t.payload.label);
    case c.Gd:
      return e.set("packageProgress", t.payload.packageProgress);
    case c.Jd:
      return e.set("isPackaging", t.payload.isPackaging).set("packageUrl", t.payload.packageUrl || null);
    case c.Hd:
      return e.set("packageProgressVisible", t.payload.packageProgressVisible);
    case c.Fd:
      return e.set("packageDialogVisible", t.payload.packageDialogVisible);
    case c.Id:
      return e.set("packageQrCodeVisible", t.payload.packageQrCodeVisible);
    case c.jd:
      return e.set("packageCompleteVisible", t.payload.packageCompleteVisible);
    case c.Ed:
      return e.update("packageInfo", function (e) {
        return Object(a.a)(Object(a.a)({}, e), t.payload);
      });
    case c.Yd:
      return e.update("projectShareInfo", function (e) {
        return Object(a.a)(Object(a.a)({}, e), t.payload);
      });
    case c.qd:
      return e.set("focusedWorkspaceArea", t.payload.area);
    case c.Pd:
      return e.set("jsonFrom", t.payload);
    case c.Zd:
      return e.set("projectSource", t.payload);
    default:
      return e;
  }
};
var Te = {
  visible: !1,
  data: [],
  title: "",
  widget: null,
  dbName: ""
};
var Se = s.a.Record({
  dropdown: {
    type: l.a.DYNAMIC_DROPDOWN,
    visible: !1,
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
    visible: !1,
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
    visible: !1,
    title: ""
  },
  commonInputDialog: {
    visible: !1
  },
  editArrayDialog: {
    visible: !1
  },
  editObjectDialog: {
    visible: !1
  },
  storageDialogInfo: Object(a.a)({}, Te),
  palette: {
    visible: !1,
    value: "#000000ff",
    top: 0,
    left: 0,
    selectValue: function (e) {},
    setValue: function (e) {}
  },
  flyoutVisible: !1,
  isBlockDragDeleteArea: !1
})();
function Ie(e) {
  e.get("dropdown").onHide();
  return e.set("dropdown", Object(a.a)({}, Se.dropdown));
}
var Ae = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case c.ke:
      return e.set("dropdown", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.lc:
      return Ie(e);
    case c.se:
      return e.set("createVariableDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.qc:
      return e.set("createVariableDialog", Object(a.a)({}, Se.createVariableDialog));
    case c.qe:
      return e.set("commonInputDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.oc:
      return e.set("commonInputDialog", Object(a.a)({}, Se.createVariableDialog));
    case c.we:
      return e.set("editArrayDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.uc:
      return e.set("editArrayDialog", Object(a.a)({}, Se.editArrayDialog));
    case c.xe:
      return e.set("editObjectDialog", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.vc:
      return e.set("editObjectDialog", Object(a.a)({}, Se.editObjectDialog));
    case c.ve:
      return e.set("storageDialogInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.tc:
      return e.set("storageDialogInfo", Object(a.a)({}, Te));
    case c.le:
      return e.set("slider", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.mc:
      return e.set("slider", Object(a.a)({}, Se.slider));
    case c.Oe:
      return e.setIn(["slider", "value"], t.payload.value);
    case c.me:
      return e.set("palette", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.nc:
      return e.set("palette", {
        colorList: void 0,
        visible: !1,
        value: "#000000ff",
        top: 0,
        left: 0,
        selectValue: function (e) {},
        setValue: function (e) {}
      });
    case c.pd:
      return e.set("flyoutVisible", t.payload);
    case c.zd:
      return e.set("isBlockDragDeleteArea", t.payload);
    default:
      return e;
  }
};
var je = require("../47");
var Ne = s.a.Record({
  configs: {},
  variableList: s.a.List([]),
  tableDataDialog: {
    visible: !1
  },
  dataWatchToast: {
    visible: !1
  }
})();
function Re(e, t) {
  var n = t.payload;
  var r = n.configs;
  var o = n.variableList;
  return e.set("variableList", s.a.List(o)).set("configs", r);
}
function ke(e) {
  var t = ["PRIMITIVE", "DICT", "LIST"];
  var n = e.get("variableList");
  n.forEach(function (e) {
    if (t.includes(e.type)) {
      e.value = e.defaultValue;
    }
  });
  return e.set("variableList", n);
}
function xe(e, t) {
  var n = t.payload.id;
  var r = e.get("variableList");
  var o = r.findIndex(function (e) {
    return e.id === n;
  });
  return o >= 0 ? e.update("variableList", function (e) {
    return e.setIn([o], t.payload);
  }) : e.setIn(["variableList"], r.push(t.payload));
}
function De(e, t) {
  var n = t.payload;
  var r = e.get("variableList").findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.deleteIn(["variableList", r]) : e;
}
function Me(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.property;
  var i = n.value;
  var a = e.get("variableList").findIndex(function (e) {
    return e.id === r;
  });
  return a >= 0 ? e.update("variableList", function (e) {
    return e.setIn([a, o], i);
  }) : e;
}
function Le(e, t) {
  if (t.payload) {
    return e.setIn(["variableList"], s.a.List());
  }
  var n;
  var r = e.get("variableList");
  var o = Object(je.a)(r);
  try {
    for (o.s(); !(n = o.n()).done;) {
      n.value.isWatching = !1;
    }
  } catch (i) {
    o.e(i);
  } finally {
    o.f();
  }
  return e.setIn(["variableList"], r);
}
var Pe = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case c.Cc:
      return Re(e, t);
    case c.ad:
      return ke(e);
    case c.c:
      return xe(e, t);
    case c.gc:
      return De(e, t);
    case c.Pe:
      return Me(e, t);
    case c.Ub:
      return Le(e, t);
    case c.fe:
      return e.set("tableDataDialog", Object(a.a)({}, t.payload));
    case c.ue:
      return e.set("dataWatchToast", {
        visible: !0,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || !1
      });
    case c.sc:
      return e.set("dataWatchToast", {
        visible: !1
      });
    default:
      return e;
  }
};
var Be = require("../102");
var Fe = s.a.Record({
  editorInviteUrl: "",
  readOnlyInviteUrl: "",
  cooperationUserList: s.a.List([]),
  onlineCooperationUserList: s.a.List([]),
  userFocusOTInfoList: s.a.List([]),
  onlineCooperationUserColorRecord: s.a.Record({})(),
  isAuthor: !0,
  collWorkId: null
})();
function Ge(e, t) {
  t.payload.list.sort(function (e) {
    return 0 - Number(e.is_author);
  });
  return e.set("cooperationUserList", s.a.List(t.payload.list));
}
var Ue = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Be.h:
      return Ge(e, t);
    case Be.j:
      return e.set("onlineCooperationUserList", s.a.List(t.payload.list));
    case Be.e:
      return e.set("editorInviteUrl", t.payload.url);
    case Be.g:
      return e.set("readOnlyInviteUrl", t.payload.url);
    case Be.f:
      return e.set("isAuthor", t.payload.isAuthor);
    case Be.d:
      return e.set("collWorkId", t.payload.id);
    case Be.k:
      return e.set("userFocusOTInfoList", t.payload.list);
    case Be.i:
      return e.set("onlineCooperationUserColorRecord", s.a.Record(t.payload.colors)());
    case Be.c:
      return Fe;
    default:
      return e;
  }
};
var We = {
  visible: !1,
  multiple: !1,
  mode: require("../68").c.ResourceLibrary,
  sidebarType: void 0,
  setTab: void 0
};
var He = s.a.Record({
  resourceLibraryDialogInfo: We,
  resourceLibraryDialogVisible: !1,
  resourceLibraryUpdateAt: 0,
  imageFileList: s.a.List([]),
  iconFileList: s.a.List([]),
  soundFileList: s.a.List([]),
  fontFileList: s.a.List(W.a)
})();
function Ve(e, t) {
  return e.update("imageFileList", function (e) {
    return e.splice(0, 0, t.payload.imageFile);
  });
}
function ze(e, t) {
  var n = t.payload.id;
  var r = e.imageFileList.findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.update("imageFileList", function (e) {
    return e.delete(r);
  }) : e;
}
function Ye(e, t) {
  var n = t.payload;
  var r = n.soundFiles;
  var o = n.index;
  if (void 0 !== o) {
    return e.update("soundFileList", function (e) {
      return e.splice(o, 0, r[0]);
    });
  }
  var i = e;
  r.forEach(function (e) {
    i = i.update("soundFileList", function (t) {
      return t.push(e);
    });
  });
  return i;
}
function Ke(e, t) {
  var n = t.payload.id;
  var r = e.soundFileList.findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.update("soundFileList", function (e) {
    return e.delete(r);
  }) : e;
}
function qe(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.cdnUrl;
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["soundFileList", i, "cdnUrl"], o) : e;
}
function Xe(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.name;
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["soundFileList", i, "name"], o) : e;
}
function Qe(e, t) {
  var n = t.payload;
  var r = n.iconFiles;
  var o = n.index;
  var i = e;
  return void 0 !== o ? e.update("iconFileList", function (e) {
    return e.splice(o, 0, r[0]);
  }) : (r.forEach(function (e) {
    i = i.update("iconFileList", function (t) {
      return t.push(e);
    });
  }), i);
}
function Ze(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.cdnUrl;
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["iconFileList", i, "cdnUrl"], o) : e;
}
function Je(e, t) {
  var n = t.payload.id;
  var r = e.iconFileList.findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.update("iconFileList", function (e) {
    return e.delete(r);
  }) : e;
}
function $e(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.name;
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["iconFileList", i, "name"], o) : e;
}
var et = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case c.Ce:
      return e.set("resourceLibraryDialogInfo", Object(a.a)({
        visible: !0
      }, t.payload));
    case c.yc:
      return e.set("resourceLibraryDialogInfo", Object(a.a)({}, We));
    case c.Le:
      return e.set("resourceLibraryDialogVisible", t.payload.visible);
    case c.Xe:
      return e.set("resourceLibraryUpdateAt", Date.now());
    case c.f:
      return Ve(e, t);
    case c.hc:
      return ze(e, t);
    case c.Zc:
      return e.set("soundFileList", s.a.List(t.payload.soundFileList));
    case c.m:
      return Ye(e, t);
    case c.Sb:
      return qe(e, t);
    case c.Rc:
      return Ke(e, t);
    case c.Tc:
      return Xe(e, t);
    case c.e:
      return Qe(e, t);
    case c.Qb:
      return Ze(e, t);
    case c.Nc:
      return Je(e, t);
    case c.Vc:
      return e.set("iconFileList", s.a.List(t.payload.iconFileList));
    case c.Sc:
      return $e(e, t);
    default:
      return e;
  }
};
var tt = require("./341");
var nt = s.a.Record({
  header: {
    logo: l.j.Show,
    file: {
      newProject: l.j.Show,
      openMyProject: l.j.Show,
      saveAs: l.j.Show,
      showHistory: l.j.Show,
      openLocalFile: l.j.Show,
      exportLocalFile: l.j.Show
    },
    tutorial: {
      tutorial: l.j.Show,
      feedback: l.j.Show,
      releaseInfo: l.j.Show,
      about: l.j.Show
    },
    help: {
      ruler: l.j.Show,
      stage: l.j.Show
    },
    projectName: l.j.Show,
    coll: l.j.Show,
    save: l.j.Show,
    cloudDBManager: l.j.Show,
    cloudSpaceManager: l.j.Show,
    cutLine: l.j.Show,
    package: l.j.Show,
    userInfo: l.j.Show,
    preventLeave: l.j.Show
  },
  widgetPanel: l.j.Show,
  stage: l.j.Show,
  widgetEditor: l.j.Show,
  workspace: l.j.Show,
  screenPanel: l.j.Show,
  resourceLibrary: l.j.Show
})();
var rt = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case tt.a:
      return e.merge(t.payload);
    case tt.c:
      return e.mergeDeep(t.payload);
    case tt.b:
      return e.setIn(["header", "preventLeave"], t.payload);
    default:
      return e;
  }
};
var ot = require("../161");
var it = s.a.Record({
  cloudDictList: [],
  cloudTableList: [],
  initialRefDictIds: s.a.Set(),
  initialRefTableIds: s.a.Set(),
  checkedTimeStamp: new Date().getTime(),
  cloudDictKeysList: s.a.List([]),
  cloudTableColumnList: s.a.List([]),
  cloudTableDataList: s.a.List([])
})();
function at(e, t) {
  return e.setIn(["cloudDictList"], t.payload);
}
function st(e, t) {
  e.setIn(["initialRefDictIds"], []).setIn(["initialRefTableIds"], []);
  return e;
}
function ct(e, t) {
  return e.setIn(["cloudTableList"], t.payload);
}
function lt(e, t) {
  var n = s.a.Set(t.payload);
  return e.setIn(["initialRefDictIds"], n);
}
function ut(e, t) {
  var n = s.a.Set(t.payload);
  return e.setIn(["initialRefTableIds"], n);
}
function dt(e, t) {
  var n = e.initialRefDictIds.concat(new Set(t.payload));
  return e.setIn(["initialRefDictIds"], n);
}
function pt(e, t) {
  var n = e.initialRefDictIds.filter(function (e) {
    return !t.payload.includes(e);
  });
  return e.setIn(["initialRefDictIds"], n);
}
function ft(e, t) {
  var n = e.initialRefTableIds.concat(new Set(t.payload));
  return e.setIn(["initialRefTableIds"], n);
}
function ht(e, t) {
  var n = e.initialRefTableIds.filter(function (e) {
    return !t.payload.includes(e);
  });
  return e.setIn(["initialRefTableIds"], n);
}
function mt(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.data;
  var i = e.cloudDictKeysList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["cloudDictKeysList", i, "data"], o) : e.update("cloudDictKeysList", function (e) {
    return e.push({
      id: r,
      data: o
    });
  });
}
function gt(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.columns;
  var i = e.cloudTableList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["cloudTableList", i, "columns"], o) : e;
}
function _t(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.columns;
  var i = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["cloudTableColumnList", i, "columns"], o) : e.update("cloudTableColumnList", function (e) {
    return e.push({
      id: r,
      columns: o
    });
  });
}
function vt(e, t) {
  var n = t.payload;
  var r = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === n;
  });
  return r > -1 ? e.deleteIn(["cloudTableColumnList", r]) : e;
}
function bt(e, t) {
  return e.setIn(["checkedTimeStamp"], t.payload);
}
function yt(e, t) {
  var n = t.payload;
  var r = n.id;
  var o = n.data;
  var i = e.cloudTableDataList.findIndex(function (e) {
    return e.id === r;
  });
  return i > -1 ? e.setIn(["cloudTableDataList", i, "data"], o) : e.update("cloudTableDataList", function (e) {
    return e.push({
      id: r,
      data: o
    });
  });
}
var Et = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ot.s:
      return at(e, t);
    case ot.t:
      return ct(e, t);
    case ot.m:
      return st(e);
    case ot.x:
      return lt(e, t);
    case ot.y:
      return ut(e, t);
    case ot.a:
      return dt(e, t);
    case ot.b:
      return ft(e, t);
    case ot.o:
      return pt(e, t);
    case ot.p:
      return ht(e, t);
    case ot.q:
      return bt(e, t);
    case ot.r:
      return mt(e, t);
    case ot.w:
      return gt(e, t);
    case ot.u:
      return _t(e, t);
    case ot.n:
      return vt(e, t);
    case ot.v:
      return yt(e, t);
    default:
      return e;
  }
};
var Ot = Object(r.combineReducers)({
  common: F,
  project: Ce,
  block: Ae,
  dataWatch: Pe,
  oTState: Ue,
  resource: et,
  uiConfig: rt,
  cloudSpace: Et
});
var wt = require("../1/index");
var Ct = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(wt);
var Tt = require("./3");
var St = require("../7");
var It = require("../10/index");
var At = require("../11");
var jt = require("../2627/index");
var Nt = require("./607/index");
var Rt = require("../623");
var kt = require("../14");
var xt = require("../41");
var Dt = require("../59/index");
var Mt = "".concat(Dt.a.serverHost, "/coconut");
function Lt(e) {
  return Pt.apply(this, arguments);
}
function Pt() {
  return (Pt = Object(St.a)(Ct.a.mark(function e(t) {
    var n;
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return xt.a.get(Mt + "/webdb/admin/dict", {
              params: {
                work_id: t
              }
            });
          case 2:
            if (n = e.sent, 200 !== (r = n.data).code) {
              e.next = 8;
              break;
            }
            (o = r.data).forEach(function (e) {
              return e.id = e.id.toString();
            });
            return e.abrupt("return", o);
          case 8:
            kt.a.condition(!1, {
              type: "error",
              message: r.msg
            });
          case 9:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Bt(e) {
  return Ft.apply(this, arguments);
}
function Ft() {
  return (Ft = Object(St.a)(Ct.a.mark(function e(t) {
    var n;
    var r;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return xt.a.post(Mt + "/webdb/admin/dict", {
              name: t
            });
          case 3:
            if (n = e.sent, 200 !== (r = n.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", r.data.id + "");
          case 7:
            throw kt.a.condition(!1, {
              type: "error",
              message: r.msg
            }), new TypeError(r.msg);
          case 11:
            if (e.prev = 11, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 15;
              break;
            }
            throw e.t0;
          case 15:
            throw new Error("网络错误");
          case 16:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 11]]);
  }))).apply(this, arguments);
}
function Gt(e, t, n) {
  return Ut.apply(this, arguments);
}
function Ut() {
  return (Ut = Object(St.a)(Ct.a.mark(function e(t, n, r) {
    var o;
    var i;
    var a;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : "";
            e.prev = 1;
            e.next = 4;
            return xt.a.put(Mt + "/webdb/admin/dict/".concat(t, "?").concat(o), {
              name: n
            });
          case 4:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 8;
              break;
            }
            return e.abrupt("return", a.success);
          case 8:
            throw new TypeError(a.msg);
          case 11:
            if (e.prev = 11, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 15;
              break;
            }
            throw e.t0;
          case 15:
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 16:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[1, 11]]);
  }))).apply(this, arguments);
}
function Wt(e, t) {
  return Ht.apply(this, arguments);
}
function Ht() {
  return (Ht = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return xt.a.delete(Mt + "/webdb/admin/dict/".concat(t));
          case 3:
            if (r = e.sent, 200 !== (o = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", o.success);
          case 7:
            throw new TypeError(o.msg);
          case 10:
            if (e.prev = 10, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 14;
              break;
            }
            throw e.t0;
          case 14:
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 15:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 10]]);
  }))).apply(this, arguments);
}
function Vt(e, t, n, r) {
  return zt.apply(this, arguments);
}
function zt() {
  return (zt = Object(St.a)(Ct.a.mark(function e(t, n, r, o) {
    var i;
    var a;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return xt.a.get(Mt + "/webdb/admin/dict/".concat(t), {
              params: {
                offset: n,
                limit: r,
                work_id: o
              },
              headers: {
                env: 2
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 8;
              break;
            }
            a.data.items.forEach(function (e) {
              e.id += "";
            });
            return e.abrupt("return", a.data);
          case 8:
            throw kt.a.condition(!1, {
              type: "error",
              message: a.msg
            }), new TypeError(a.msg);
          case 12:
            if (e.prev = 12, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 16;
              break;
            }
            throw e.t0;
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 17:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 12]]);
  }))).apply(this, arguments);
}
function Yt(e, t, n) {
  return Kt.apply(this, arguments);
}
function Kt() {
  return (Kt = Object(St.a)(Ct.a.mark(function e(t, n, r) {
    var o;
    var i;
    var s;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : "";
            e.prev = 1;
            e.next = 4;
            return xt.a.post(Mt + "/webdb/admin/dict/".concat(t, "/storevalues?").concat(o), Object(a.a)({}, n), {
              headers: {
                env: 2
              }
            });
          case 4:
            if (i = e.sent, 200 !== (s = i.data).code) {
              e.next = 8;
              break;
            }
            return e.abrupt("return", s.data);
          case 8:
            throw kt.a.condition(!1, {
              type: "error",
              message: s.msg
            }), new TypeError(s.msg);
          case 12:
            if (e.prev = 12, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 16;
              break;
            }
            throw e.t0;
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 17:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[1, 12]]);
  }))).apply(this, arguments);
}
function qt(e, t, n, r) {
  return Xt.apply(this, arguments);
}
function Xt() {
  return (Xt = Object(St.a)(Ct.a.mark(function e(t, n, r, o) {
    var i;
    var a;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            i = o ? "work_id=".concat(o) : "";
            a = t.map(function (e) {
              return new Promise(function (t, o) {
                xt.a.put(Mt + "/webdb/admin/dict/migrate?".concat(i), {
                  db_id: e,
                  from_env: n,
                  to_env: r
                }).then(function () {
                  t(!0);
                }).catch(function (e) {
                  return o(e);
                });
              });
            });
            return e.abrupt("return", Promise.all(a));
          case 3:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
var Qt = require("../177");
var Zt = require("../298");
var Jt = require("../26/index");
var $t = require("./139");
var en = require("../197/index");
var tn = require("../141/index");
var nn = require("../550/index");
var rn = require("../327");
var on = require("../9");
var an = require("../214");
var sn = require("../305");
var cn = require("../5");
var ln = require("../64");
var un = require("../23");
var dn = require("../24/index");
var pn = require("../49/index");
var fn = require("../15");
var hn = require("../99");
var mn = require("../144");
function gn(e) {
  window.localStorage.removeItem("@__INITIALIZED__".concat(e));
  var t = "@".concat(e, "_DOCUMENT");
  Object.keys(window.localStorage).forEach(function (e) {
    if (0 === e.indexOf(t)) {
      window.localStorage.removeItem(e);
    }
  });
}
var _n = require("../129");
var vn = require("../36/index");
var bn = require("../98");
var yn = require("../182");
var En = require("./376");
var On = require("./217/index");
var wn = require("../146");
var Cn = require("./512");
var Tn = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Cn);
var Sn = require("../407");
var In = require("./343");
var An = require("./375");
var jn = require("../233/index");
var Nn = require("../143");
var Rn = require("../391/index");
var kn = require("../21/index");
var xn = require("../174");
var Dn = require("./142");
var Mn = require("../112");
function Ln() {
  var e;
  var t = xl.getState();
  var n = t.project.id;
  var r = null === (e = t.common.userInfo) || void 0 === e ? void 0 : e.id;
  return "".concat("DATA_WATCH_VARIABLE_LIST", "_").concat(r, "_").concat(n);
}
function Pn() {
  var e = xl.getState().dataWatch.variableList;
  var t = [];
  try {
    var n;
    var r = Object(je.a)(e);
    try {
      for (r.s(); !(n = r.n()).done;) {
        var o = n.value;
        t.push({
          id: o.id,
          name: o.name,
          screenId: o.screenId,
          isWatching: o.isWatching,
          type: o.type
        });
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
    var i = JSON.stringify(t);
    Dn.a.setItem(Ln(), i);
  } catch (s) {
    console.error("cache data watch failed", s);
  }
}
function Bn() {
  var e = Ln();
  var t = Dn.a.getItem(e);
  var n = [];
  try {
    if (t) {
      n = JSON.parse(t);
    }
  } catch (r) {
    console.error(r);
  }
  return n;
}
function Fn(e) {
  var t;
  var n = xl.getState();
  var r = n.project.screens;
  var o = n.project.id;
  var i = [];
  var a = Object(je.a)(e);
  try {
    var s = function () {
      var e = t.value;
      if (!e.isWatching) {
        return "continue";
      }
      if ("GLOBAL" !== e.screenId) {
        var a = r.find(function (t) {
          return t.id === e.screenId;
        });
        if (!a) {
          return "break";
        }
        var s = a.primitiveVariables;
        var c = a.arrayVariables;
        var l = a.objectVariables;
        if ("LIST" === e.type) {
          var u = c.find(function (t) {
            return t.id === e.id;
          });
          if (u) {
            i.push(Object(Mn.a)("PRIMITIVE", u, {
              screenId: a.id
            }));
          }
        }
        if ("DICT" === e.type) {
          var d = l.find(function (t) {
            return t.id === e.id;
          });
          if (d) {
            i.push(Object(Mn.a)("DICT", d, {
              screenId: a.id
            }));
          }
        }
        if ("PRIMITIVE" === e.type) {
          var p = s.find(function (t) {
            return t.id === e.id;
          });
          if (p) {
            i.push(Object(Mn.a)("PRIMITIVE", p, {
              screenId: a.id
            }));
          }
        }
      } else {
        var f = n.project;
        var h = f.globalWidgetIds;
        var m = f.globalObjectList;
        var g = f.globalVariableList;
        var _ = f.globalArrayList;
        if ("LIST" === e.type) {
          var v = _.find(function (t) {
            return t.id === e.id;
          });
          if (v) {
            i.push(Object(Mn.a)("LIST", v));
          }
        }
        if ("DICT" === e.type) {
          var b = m.find(function (t) {
            return t.id === e.id;
          });
          if (b) {
            i.push(Object(Mn.a)("DICT", b));
          }
        }
        if ("PRIMITIVE" === e.type) {
          var y = g.find(function (t) {
            return t.id === e.id;
          });
          if (y) {
            i.push(Object(Mn.a)("PRIMITIVE", y));
          }
        }
        if (h.includes(e.id)) {
          var E = Object(on.Bb)(e.id);
          if (e.type === cn.B || e.type === cn.y) {
            var O = Object(kn.getLocalDocumentObject)(o, e.id) || E.attributes.fields;
            i.push(Object(Mn.a)(e.type, {
              id: e.id,
              name: e.name,
              value: O,
              defaultValue: "no-use"
            }));
          } else if (e.type === cn.G) {
            i.push(Object(Mn.a)(cn.G, {
              id: e.id,
              name: e.name,
              value: {
                header: [],
                data: []
              },
              defaultValue: "no-use"
            }));
          }
        }
      }
    };
    for (a.s(); !(t = a.n()).done;) {
      var l = s();
      if ("continue" !== l && "break" === l) {
        break;
      }
    }
  } catch (f) {
    a.e(f);
  } finally {
    a.f();
  }
  for (var u = 0, d = i; u < d.length; u++) {
    var p = d[u];
    xl.dispatch(Object(c.Pj)(p.id, "isWatching", !0));
    xl.dispatch(Object(c.Pj)(p.id, "selected", !0));
  }
}
function Gn() {
  var e = Ln();
  return Dn.a.removeItem(e);
}
var Un = require("../42/index");
var Wn = require("./113");
var Hn = require("../278");
var Vn = Ct.a.mark(Yn);
var zn = Ct.a.mark(Kn);
function Yn(e, t) {
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0;
          r.next = 3;
          return Object(Tt.b)(e, t);
        case 3:
          n = r.sent;
          return r.abrupt("return", n);
        case 7:
          r.prev = 7;
          r.t0 = r.catch(0);
          console.error(r.t0);
        case 10:
        case "end":
          return r.stop();
      }
    }
  }, Vn, null, [[0, 7]]);
}
function Kn(e, t) {
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0;
          r.next = 3;
          return Object(Tt.b)(e, t);
        case 3:
          n = r.sent;
          t.resolve(n);
          return r.abrupt("return", n);
        case 8:
          r.prev = 8;
          r.t0 = r.catch(0);
          return r.abrupt("return", t.reject(r.t0));
        case 11:
        case "end":
          return r.stop();
      }
    }
  }, zn, null, [[0, 8]]);
}
function qn(e) {
  return Ct.a.mark(function t(n) {
    var r;
    var o;
    return Ct.a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (!(r = e[n.type])) {
              t.next = 11;
              break;
            }
            if (!("reject" in n) || !("resolve" in n)) {
              t.next = 9;
              break;
            }
            t.next = 5;
            return Object(Tt.b)(Kn, r, n);
          case 5:
            o = t.sent;
            return t.abrupt("return", o);
          case 9:
            t.next = 11;
            return Object(Tt.b)(Yn, r, n);
          case 11:
          case "end":
            return t.stop();
        }
      }
    }, t);
  });
}
var Xn;
var Qn;
var Zn = require("../35");
var Jn = require("./668/index");
var $n = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Jn);
var er = require("./2629");
var tr = [];
var nr = !1;
var rr = !1;
function or() {
  return ir.apply(this, arguments);
}
function ir() {
  return (ir = Object(St.a)(Ct.a.mark(function e() {
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, nr) {
              e.next = 6;
              break;
            }
            e.next = 4;
            return Promise.reject(new Error("module (key: 3274) not found!"));
          case 4:
            Qn = e.sent;
            nr = !0;
          case 6:
            e.next = 12;
            break;
          case 8:
            if (e.prev = 8, e.t0 = e.catch(0), !(e.t0.message.indexOf("Loading chunk") > -1)) {
              e.next = 12;
              break;
            }
            throw Error("No NetWork");
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 8]]);
  }))).apply(this, arguments);
}
function ar(e, t) {
  return sr.apply(this, arguments);
}
function sr() {
  return (sr = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = er.a();
            o = {
              id: r,
              file: t,
              callback: n
            };
            e.prev = 2;
            e.next = 5;
            return or();
          case 5:
            tr.push(o);
            if (!Xn) {
              cr();
            }
            e.next = 12;
            break;
          case 9:
            e.prev = 9;
            e.t0 = e.catch(2);
            mr(o);
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[2, 9]]);
  }))).apply(this, arguments);
}
function cr() {
  if (0 !== tr.length) {
    if (Xn = new $n.a()) {
      Xn.addEventListener("error", function () {
        rr = !0;
        tr.shift();
      });
      Xn.addEventListener("message", function (e) {
        switch (e.data.type) {
          case "compress_jpeg_done":
          case "compress_png_done":
            (function (e, t) {
              return hr.apply(this, arguments);
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e);
            });
            break;
          case "compress_transparent_png_done":
            (function (e, t) {
              return fr.apply(this, arguments);
            })(e.data.data, e.data.id).catch(function (e) {
              console.error(e);
            });
        }
      });
    }
    lr().catch(function (e) {
      console.error(e);
    });
  }
}
function lr() {
  return ur.apply(this, arguments);
}
function ur() {
  return (ur = Object(St.a)(Ct.a.mark(function e() {
    var t;
    var n;
    var r;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (Qn) {
              e.next = 3;
              break;
            }
            e.next = 3;
            return or();
          case 3:
            if (0 !== tr.length) {
              e.next = 7;
              break;
            }
            if (Xn) {
              Xn.terminate();
            }
            Xn = void 0;
            return e.abrupt("return");
          case 7:
            t = tr[0];
            e.prev = 8;
            e.next = 11;
            return Qn.get_file_img_info(t.file);
          case 11:
            if (!(n = e.sent)) {
              e.next = 23;
              break;
            }
            if (r = n.image_data, "image/jpeg" !== n.type && "image/png" !== n.type) {
              e.next = 22;
              break;
            }
            if (!n.transparent) {
              e.next = 20;
              break;
            }
            dr(r, t, "transparent_png").catch(function (e) {
              console.error(e);
            });
            return e.abrupt("return");
          case 20:
            dr(r, t, "mozjpeg").catch(function (e) {
              console.error(e);
            });
            return e.abrupt("return");
          case 22:
            throw Error("not_png_jpg");
          case 23:
            e.next = 31;
            break;
          case 25:
            e.prev = 25;
            e.t0 = e.catch(8);
            console.error(e.t0);
            tr.shift();
            mr(t);
            lr().catch(function (e) {
              console.error(e);
            });
          case 31:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[8, 25]]);
  }))).apply(this, arguments);
}
function dr(e, t, n) {
  return pr.apply(this, arguments);
}
function pr() {
  return (pr = Object(St.a)(Ct.a.mark(function e(t, n, r) {
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!rr) {
              e.next = 3;
              break;
            }
            mr(n);
            return e.abrupt("return");
          case 3:
            if (Xn) {
              Xn.postMessage({
                type: r,
                id: n.id,
                data: t
              });
            } else {
              cr();
            }
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function fr() {
  return (fr = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (Qn) {
              e.next = 3;
              break;
            }
            e.next = 3;
            return or();
          case 3:
            e.next = 5;
            return Qn.imagedata_to_blob(t, "image/png");
          case 5:
            r = e.sent;
            e.next = 8;
            return Qn.blob_to_arrayBuffer(r);
          case 8:
            if (o = e.sent, !Xn || rr) {
              e.next = 12;
              break;
            }
            Xn.postMessage({
              type: "optipng",
              id: n,
              buffer: o
            });
            return e.abrupt("return");
          case 12:
            cr();
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function hr() {
  return (hr = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (Qn) {
              e.next = 3;
              break;
            }
            e.next = 3;
            return or();
          case 3:
            if (0 === tr.length) {
              e.next = 23;
              break;
            }
            if (!(r = tr.shift())) {
              e.next = 23;
              break;
            }
            if (r.id !== n) {
              e.next = 22;
              break;
            }
            if (!(t instanceof ImageData)) {
              e.next = 16;
              break;
            }
            e.next = 10;
            return Qn.imagedata_to_blob(t, r.file.type);
          case 10:
            i = e.sent;
            e.next = 13;
            return Qn.blob_to_arrayBuffer(i);
          case 13:
            o = e.sent;
            e.next = 17;
            break;
          case 16:
            o = t;
          case 17:
            a = r.file.name;
            s = Qn.get_file_from_array_buffer(o, r.file.type, a);
            r.callback(s);
            e.next = 23;
            break;
          case 22:
            mr(r);
          case 23:
            lr().catch(function (e) {
              console.error(e);
            });
          case 24:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function mr(e) {
  e.callback(e.file);
}
var gr;
var _r = require("./22");
var vr = Ct.a.mark(Fr);
var br = Ct.a.mark(Gr);
var yr = Ct.a.mark(Hr);
var Er = Ct.a.mark(Vr);
var Or = Ct.a.mark(zr);
var wr = Ct.a.mark(Yr);
var Cr = Ct.a.mark(Kr);
var Tr = Ct.a.mark(qr);
var Sr = Ct.a.mark(Zr);
var Ir = Ct.a.mark(Jr);
var Ar = Ct.a.mark($r);
var jr = Ct.a.mark(eo);
var Nr = Ct.a.mark(to);
var Rr = Ct.a.mark(no);
var kr = Ct.a.mark(ro);
var xr = Ct.a.mark(ao);
var Dr = Ct.a.mark(so);
var Mr = Ct.a.mark(co);
var Lr = Ct.a.mark(lo);
var Pr = Ct.a.mark(uo);
var Br = Ct.a.mark(ho);
function Fr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          if (t = e.payload, n = t.imageFile, r = t.widgetId, o = Object(on.Bb)(r), n && o) {
            s.next = 4;
            break;
          }
          return s.abrupt("return");
        case 4:
          if (o.type !== cn.v) {
            s.next = 14;
            break;
          }
          s.next = 7;
          return Object(Tt.b)(fn.L, n.source || n.cdnUrl);
        case 7:
          if (i = s.sent, !Object(on.Kb)(o)) {
            s.next = 12;
            break;
          }
          a = Object(on.nb)(i);
          s.next = 12;
          return Object(Tt.e)(Object(c.Lg)(r, "size", a, !1, !1));
        case 12:
          s.next = 14;
          return Object(Tt.e)(Object(c.Lg)(r, "fileId", n.id, !0, !0));
        case 14:
          if (o.type !== cn.f && o.type !== cn.z && o.type !== cn.w) {
            s.next = 17;
            break;
          }
          s.next = 17;
          return Object(Tt.e)(Object(c.Lg)(r, "backgroundImage", n.id, !0, !0));
        case 17:
        case "end":
          return s.stop();
      }
    }
  }, vr);
}
function Gr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  return Ct.a.wrap(function (y) {
    for (;;) {
      switch (y.prev = y.next) {
        case 0:
          t = e.payload;
          n = t.fileList;
          r = t.onSuccess;
          o = t.isMultipleFiles;
          y.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          i = y.sent;
          a = [];
          s = [];
          l = [];
          u = Array.from(n);
          y.next = 10;
          return Object(Tt.b)(Ur, u);
        case 10:
          d = y.sent;
          p = 0;
        case 12:
          if (!(p < d.length)) {
            y.next = 21;
            break;
          }
          f = d[p];
          y.next = 16;
          return Object(Tt.b)(fn.qb, f, i);
        case 16:
          if ("success" === (h = y.sent).status) {
            s.push(h);
          } else {
            a.push(h);
          }
        case 18:
          p++;
          y.next = 12;
          break;
        case 21:
          if (!s.length) {
            y.next = 24;
            break;
          }
          y.next = 24;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 24:
          if (!(a.length > 0)) {
            y.next = 34;
            break;
          }
          if (o) {
            y.next = 30;
            break;
          }
          y.next = 28;
          return Object(Tt.e)(Object(c.mj)({
            message: a[0].message,
            showCloseIcon: !1,
            showPrefixIcon: !1,
            type: "error"
          }));
        case 28:
          y.next = 32;
          break;
        case 30:
          y.next = 32;
          return Object(Tt.e)(Object(c.uj)(a, "image"));
        case 32:
          y.next = 36;
          break;
        case 34:
          y.next = 36;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(i, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }));
        case 36:
          if (!(s.length > 0)) {
            y.next = 61;
            break;
          }
          m = Object(je.a)(s);
          y.prev = 38;
          m.s();
        case 40:
          if ((g = m.n()).done) {
            y.next = 48;
            break;
          }
          _ = g.value;
          y.next = 44;
          return Object(Tt.b)(on.y, _.file);
        case 44:
          if (v = y.sent) {
            l.push(v);
            if (!(null === (b = pn.oTHelper.imageFileList) || void 0 === b)) {
              b.clientOp.add(v);
            }
          }
        case 46:
          y.next = 40;
          break;
        case 48:
          y.next = 53;
          break;
        case 50:
          y.prev = 50;
          y.t0 = y.catch(38);
          m.e(y.t0);
        case 53:
          y.prev = 53;
          m.f();
          return y.finish(53);
        case 56:
          if (r) {
            r(l);
          }
          y.next = 59;
          return Object(Tt.e)(Object(c.Zj)());
        case 59:
          y.next = 61;
          return Object(Tt.b)(Ms);
        case 61:
        case "end":
          return y.stop();
      }
    }
  }, br, null, [[38, 50, 53, 56]]);
}
function Ur(e) {
  return Wr.apply(this, arguments);
}
function Wr() {
  return (Wr = Object(St.a)(Ct.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var i;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = [];
            r = Object(je.a)(t);
            e.prev = 2;
            i = Ct.a.mark(function e() {
              var t;
              var r;
              return Ct.a.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      t = o.value;
                      e.next = 3;
                      return new Promise(function (e) {
                        ar(t, function (t) {
                          e(t);
                        }).catch(function (e) {
                          console.error(e);
                        });
                      });
                    case 3:
                      r = e.sent;
                      n.push(r);
                    case 5:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            });
            r.s();
          case 5:
            if ((o = r.n()).done) {
              e.next = 9;
              break;
            }
            return e.delegateYield(i(), "t0", 7);
          case 7:
            e.next = 5;
            break;
          case 9:
            e.next = 14;
            break;
          case 11:
            e.prev = 11;
            e.t1 = e.catch(2);
            r.e(e.t1);
          case 14:
            e.prev = 14;
            r.f();
            return e.finish(14);
          case 17:
            return e.abrupt("return", n);
          case 18:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[2, 11, 14, 17]]);
  }))).apply(this, arguments);
}
function Hr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  return Ct.a.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          t = e.payload;
          n = t.imageFiles;
          r = t.isEmitOT;
          o = void 0 === r || r;
          i = Object(je.a)(n);
          try {
            for (i.s(); !(a = i.n()).done;) {
              s = a.value;
              Object(on.Tb)(s);
              if (o) {
                if (!(null === (l = pn.oTHelper.imageFileList) || void 0 === l)) {
                  l.clientOp.add(s);
                }
              }
            }
          } catch (d) {
            i.e(d);
          } finally {
            i.f();
          }
          u.next = 5;
          return Object(Tt.e)(Object(c.Zj)());
        case 5:
        case "end":
          return u.stop();
      }
    }
  }, yr);
}
function Vr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.imageFileId;
          r = t.isEmitOT;
          o = void 0 === r || r;
          Object(on.E)(n);
          a.next = 4;
          return Object(Tt.e)(Object(c.Qj)());
        case 4:
          a.next = 6;
          return Object(Tt.e)(Object(c.Uj)());
        case 6:
          a.next = 8;
          return Object(Tt.e)(Object(c.Zj)());
        case 8:
          a.next = 10;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 10:
          if (o) {
            if (!(null === (i = pn.oTHelper.imageFileList) || void 0 === i)) {
              i.clientOp.remove(n);
            }
            Object(Jt.q)(Jt.c.IMAGE_LIBRARY, n);
          }
        case 11:
        case "end":
          return a.stop();
      }
    }
  }, Er);
}
function zr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          t = e.payload;
          n = t.newId;
          r = t.oldId;
          o = t.isEmitOT;
          i = void 0 === o || o;
          f.next = 3;
          return Object(Tt.f)(_r.C);
        case 3:
          a = f.sent;
          Object(on.p)(r, n);
          Object(on.Rb)(r, n);
          s = Object(je.a)(a);
          f.prev = 7;
          s.s();
        case 9:
          if ((l = s.n()).done) {
            f.next = 20;
            break;
          }
          if (u = l.value, (d = u.backgroundImage) !== r) {
            f.next = 15;
            break;
          }
          f.next = 15;
          return Object(Tt.e)(Object(c.Jg)(u.id, "backgroundImage", n));
        case 15:
          if (!Object(Zn.o)(r, d)) {
            f.next = 18;
            break;
          }
          f.next = 18;
          return Object(Tt.e)(Object(c.Jg)(u.id, "backgroundImage", Object(Zn.eb)(r, n, d)));
        case 18:
          f.next = 9;
          break;
        case 20:
          f.next = 25;
          break;
        case 22:
          f.prev = 22;
          f.t0 = f.catch(7);
          s.e(f.t0);
        case 25:
          f.prev = 25;
          s.f();
          return f.finish(25);
        case 28:
          Object(Zn.m)(r, n);
          f.next = 31;
          return Object(Tt.e)(Object(c.Qj)());
        case 31:
          f.next = 33;
          return Object(Tt.e)(Object(c.Zj)());
        case 33:
          if (i) {
            if (!(null === (p = pn.oTHelper.imageFileList) || void 0 === p)) {
              p.clientOp.replaceImageFileId(r, n);
            }
            Jt.z.replaceFieldValue("image_file_list_dropdown", "IMAGE_FILE_ID", r, n);
          }
        case 34:
        case "end":
          return f.stop();
      }
    }
  }, Or, null, [[7, 22, 25, 28]]);
}
function Yr(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          if (t = e.payload, n = t.soundFile, r = t.widgetId, o = Object(on.Bb)(r), !n || !o || o.type !== cn.b) {
            i.next = 5;
            break;
          }
          i.next = 5;
          return Object(Tt.e)(Object(c.Lg)(r, "fileId", n.id, !0, !0));
        case 5:
        case "end":
          return i.stop();
      }
    }
  }, wr);
}
function Kr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.soundFiles;
          r = t.isEmitOT;
          o = void 0 === r || r;
          a.next = 3;
          return Object(Tt.e)(Object(c.kf)(n));
        case 3:
          if (o) {
            if (!(null === (i = pn.oTHelper.soundFileList) || void 0 === i)) {
              i.clientOp.add(n);
            }
          }
        case 4:
        case "end":
          return a.stop();
      }
    }
  }, Cr);
}
function qr(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  return Ct.a.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          t = e.payload;
          n = t.fileList;
          r = t.onSuccess;
          o = t.isMultipleFiles;
          _.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          i = _.sent;
          a = [];
          s = [];
          l = [];
          u = Array.from(n);
          d = 0;
        case 9:
          if (!(d < u.length)) {
            _.next = 18;
            break;
          }
          p = u[d];
          _.next = 13;
          return Object(Tt.b)(fn.rb, p, i);
        case 13:
          if ("success" === (f = _.sent).status) {
            s.push(f);
          } else {
            a.push(f);
          }
        case 15:
          d++;
          _.next = 9;
          break;
        case 18:
          if (!s.length) {
            _.next = 21;
            break;
          }
          _.next = 21;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 21:
          if (!(a.length > 0)) {
            _.next = 31;
            break;
          }
          if (o) {
            _.next = 27;
            break;
          }
          _.next = 25;
          return Object(Tt.e)(Object(c.mj)({
            message: a[0].message,
            showCloseIcon: !1,
            showPrefixIcon: !1,
            type: "error"
          }));
        case 25:
          _.next = 29;
          break;
        case 27:
          _.next = 29;
          return Object(Tt.e)(Object(c.uj)(a, "sound"));
        case 29:
          _.next = 33;
          break;
        case 31:
          _.next = 33;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(i, "importSoundSuccess").toString(),
            type: "success"
          }));
        case 33:
          if (!(s.length > 0)) {
            _.next = 55;
            break;
          }
          h = Object(je.a)(s);
          _.prev = 35;
          g = Ct.a.mark(function e() {
            var t;
            var n;
            var r;
            var o;
            var i;
            var a;
            var s;
            return Ct.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = m.value;
                    n = t.file.name.slice(0, t.file.name.lastIndexOf("."));
                    r = Object(fn.I)(t.file.name);
                    o = [];
                    e.next = 6;
                    return Object(Tt.f)(_r.I);
                  case 6:
                    e.sent.forEach(function (e) {
                      if (Object(fn.I)(e.name) === r) {
                        o.push(e.name.slice(0, e.name.lastIndexOf(".")));
                      }
                    });
                    i = Object(Zn.bc)(n, o) + r;
                    e.next = 11;
                    return Object(Tt.b)(Xr, t.file, i);
                  case 11:
                    if (!(null === (a = e.sent) || void 0 === a ? void 0 : a.id)) {
                      e.next = 17;
                      break;
                    }
                    l.push(a);
                    e.next = 16;
                    return Object(Tt.e)(Object(c.kf)([a]));
                  case 16:
                    if (!(null === (s = pn.oTHelper.soundFileList) || void 0 === s)) {
                      s.clientOp.add([a]);
                    }
                  case 17:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          });
          h.s();
        case 38:
          if ((m = h.n()).done) {
            _.next = 42;
            break;
          }
          return _.delegateYield(g(), "t0", 40);
        case 40:
          _.next = 38;
          break;
        case 42:
          _.next = 47;
          break;
        case 44:
          _.prev = 44;
          _.t1 = _.catch(35);
          h.e(_.t1);
        case 47:
          _.prev = 47;
          h.f();
          return _.finish(47);
        case 50:
          if (r) {
            r(l);
          }
          _.next = 53;
          return Object(Tt.e)(Object(c.Zj)());
        case 53:
          _.next = 55;
          return Object(Tt.b)(Zr);
        case 55:
        case "end":
          return _.stop();
      }
    }
  }, Tr, null, [[35, 44, 47, 50]]);
}
function Xr(e, t) {
  return Qr.apply(this, arguments);
}
function Qr() {
  return (Qr = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    var i;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return Object(fn.ob)(t);
          case 2:
            if (!(r = e.sent)) {
              e.next = 9;
              break;
            }
            e.next = 6;
            return Object(fn.y)(r);
          case 6:
            o = e.sent;
            i = {
              cdnUrl: "",
              id: n,
              name: n,
              source: r,
              duration: o < 1 ? 1 : o
            };
            return e.abrupt("return", i);
          case 9:
            return e.abrupt("return", null);
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Zr() {
  var e;
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.J);
        case 2:
          e = n.sent;
          n.next = 5;
          return Object(Tt.f)(_r.I);
        case 5:
          if (t = n.sent, !e) {
            n.next = 9;
            break;
          }
          n.next = 9;
          return Object(Tt.b)(en.d, t, function (e) {
            var t;
            Jr(e);
            if (!(null === (t = pn.oTHelper.soundFileList) || void 0 === t)) {
              t.clientOp.replaceSoundFileCdnUrl(e.id, e.cdnUrl);
            }
          });
        case 9:
        case "end":
          return n.stop();
      }
    }
  }, Sr);
}
function Jr(e) {
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.e)(Object(c.Rg)(e.id, e.cdnUrl));
        case 2:
        case "end":
          return t.stop();
      }
    }
  }, Ir);
}
function $r(e) {
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || void 0 === e)) {
            e.forEach(function (e) {
              if (e.source && Object(fn.R)(e.source)) {
                e.source = Object(fn.n)(e.source);
              }
            });
          }
          t.next = 3;
          return Object(Tt.e)(Object(c.Vh)(e || []));
        case 3:
          t.next = 5;
          return Object(Tt.b)(Zr);
        case 5:
        case "end":
          return t.stop();
      }
    }
  }, Ar);
}
function eo(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.isEmitOT;
          o = void 0 === r || r;
          Object(Zn.Tb)(n);
          a.next = 4;
          return Object(Tt.e)(Object(c.Nh)(n));
        case 4:
          a.next = 6;
          return Object(Tt.e)(Object(c.Qj)());
        case 6:
          a.next = 8;
          return Object(Tt.e)(Object(c.Uj)());
        case 8:
          a.next = 10;
          return Object(Tt.e)(Object(c.Zj)());
        case 10:
          a.next = 12;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 12:
          if (o) {
            if (!(null === (i = pn.oTHelper.soundFileList) || void 0 === i)) {
              i.clientOp.remove(n);
            }
            Object(Jt.q)(Jt.c.SOUND_LIBRARY, n);
          }
        case 13:
        case "end":
          return a.stop();
      }
    }
  }, jr);
}
function to(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.newName;
          o = t.oldName;
          i = t.isEmitOT;
          a = void 0 === i || i;
          l.next = 3;
          return Object(Tt.e)(Object(c.Ph)(n, r));
        case 3:
          l.next = 5;
          return Object(Tt.e)(Object(c.Qj)());
        case 5:
          l.next = 7;
          return Object(Tt.e)(Object(c.Zj)());
        case 7:
          if (a) {
            if (!(null === (s = pn.oTHelper.soundFileList) || void 0 === s)) {
              s.clientOp.replaceSoundName(n, r);
            }
            Jt.z.replaceTextValue("audio_sound_file_list_dropdown", "SOUND_FILE_ID", o, r);
          }
        case 8:
        case "end":
          return l.stop();
      }
    }
  }, Nr);
}
function no(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.iconFiles;
          r = t.isEmitOT;
          o = void 0 === r || r;
          a.next = 3;
          return Object(Tt.e)(Object(c.df)(n));
        case 3:
          if (o) {
            if (!(null === (i = pn.oTHelper.iconFileList) || void 0 === i)) {
              i.clientOp.add(n);
            }
          }
        case 4:
        case "end":
          return a.stop();
      }
    }
  }, Rr);
}
function ro(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  return Ct.a.wrap(function (g) {
    for (;;) {
      switch (g.prev = g.next) {
        case 0:
          t = e.payload;
          n = t.fileList;
          r = t.onSuccess;
          g.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          o = g.sent;
          i = [];
          a = [];
          s = [];
          l = Array.from(n);
          u = 0;
        case 9:
          if (!(u < l.length)) {
            g.next = 18;
            break;
          }
          d = l[u];
          g.next = 13;
          return Object(Tt.b)(fn.qb, d, o, [".svg"]);
        case 13:
          if ("success" === (p = g.sent).status) {
            a.push(p);
          } else {
            i.push(p);
          }
        case 15:
          u++;
          g.next = 9;
          break;
        case 18:
          if (!a.length) {
            g.next = 21;
            break;
          }
          g.next = 21;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 21:
          if (!(i.length > 0)) {
            g.next = 26;
            break;
          }
          g.next = 24;
          return Object(Tt.e)(Object(c.uj)(i, "image"));
        case 24:
          g.next = 28;
          break;
        case 26:
          g.next = 28;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(o, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }));
        case 28:
          if (!(a.length > 0)) {
            g.next = 50;
            break;
          }
          f = Object(je.a)(a);
          g.prev = 30;
          m = Ct.a.mark(function e() {
            var t;
            var n;
            var r;
            var o;
            var i;
            var a;
            return Ct.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = h.value;
                    n = t.file.name.slice(0, t.file.name.lastIndexOf("."));
                    r = [];
                    e.next = 5;
                    return Object(Tt.f)(_r.o);
                  case 5:
                    e.sent.forEach(function (e) {
                      r.push(e.name);
                    });
                    o = Object(Zn.bc)(n, r);
                    e.next = 10;
                    return Object(Tt.b)(oo, t.file, o);
                  case 10:
                    if (!(i = e.sent)) {
                      e.next = 16;
                      break;
                    }
                    s.push(i);
                    e.next = 15;
                    return Object(Tt.e)(Object(c.df)([i]));
                  case 15:
                    if (!(null === (a = pn.oTHelper.iconFileList) || void 0 === a)) {
                      a.clientOp.add([i]);
                    }
                  case 16:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          });
          f.s();
        case 33:
          if ((h = f.n()).done) {
            g.next = 37;
            break;
          }
          return g.delegateYield(m(), "t0", 35);
        case 35:
          g.next = 33;
          break;
        case 37:
          g.next = 42;
          break;
        case 39:
          g.prev = 39;
          g.t1 = g.catch(30);
          f.e(g.t1);
        case 42:
          g.prev = 42;
          f.f();
          return g.finish(42);
        case 45:
          if (r) {
            r(s);
          }
          g.next = 48;
          return Object(Tt.e)(Object(c.Zj)());
        case 48:
          g.next = 50;
          return Object(Tt.b)(ao);
        case 50:
        case "end":
          return g.stop();
      }
    }
  }, kr, null, [[30, 39, 42, 45]]);
}
function oo(e, t) {
  return io.apply(this, arguments);
}
function io() {
  return (io = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return Object(fn.ob)(t);
          case 2:
            if (!(r = e.sent)) {
              e.next = 6;
              break;
            }
            o = {
              cdnUrl: "",
              id: Object(ln.a)("ICON"),
              name: n,
              md5: "",
              source: r
            };
            return e.abrupt("return", o);
          case 6:
            return e.abrupt("return", null);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function ao() {
  var e;
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.J);
        case 2:
          e = n.sent;
          n.next = 5;
          return Object(Tt.f)(_r.o);
        case 5:
          if (t = n.sent, n.prev = 6, !e) {
            n.next = 10;
            break;
          }
          n.next = 10;
          return Object(Tt.b)(en.b, t, function (e) {
            var t;
            so(e);
            if (!(null === (t = pn.oTHelper.iconFileList) || void 0 === t)) {
              t.clientOp.replaceIconFileCdnUrl(e.id, e.cdnUrl);
            }
          });
        case 10:
          n.next = 15;
          break;
        case 12:
          n.prev = 12;
          n.t0 = n.catch(6);
          console.error(n.t0);
        case 15:
        case "end":
          return n.stop();
      }
    }
  }, xr, null, [[6, 12]]);
}
function so(e) {
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.e)(Object(c.Pg)(e.id, e.cdnUrl));
        case 2:
        case "end":
          return t.stop();
      }
    }
  }, Dr);
}
function co(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.isEmitOT;
          o = void 0 === r || r;
          a.next = 3;
          return Object(Tt.e)(Object(c.Hh)(n));
        case 3:
          a.next = 5;
          return Object(Tt.e)(Object(c.Qj)());
        case 5:
          a.next = 7;
          return Object(Tt.e)(Object(c.Uj)());
        case 7:
          a.next = 9;
          return Object(Tt.e)(Object(c.Zj)());
        case 9:
          a.next = 11;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 11:
          if (o) {
            if (!(null === (i = pn.oTHelper.iconFileList) || void 0 === i)) {
              i.clientOp.remove(n);
            }
            Object(Jt.q)(Jt.c.ICON_LIBRARY, n);
          }
        case 12:
        case "end":
          return a.stop();
      }
    }
  }, Mr);
}
function lo(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.newName;
          o = t.oldName;
          i = t.isEmitOT;
          a = void 0 === i || i;
          l.next = 3;
          return Object(Tt.e)(Object(c.Oh)(n, r));
        case 3:
          l.next = 5;
          return Object(Tt.e)(Object(c.Qj)());
        case 5:
          l.next = 7;
          return Object(Tt.e)(Object(c.Zj)());
        case 7:
          if (a) {
            if (!(null === (s = pn.oTHelper.iconFileList) || void 0 === s)) {
              s.clientOp.replaceIconName(n, r);
            }
            Jt.z.replaceTextValue("icon_file_list_dropdown", "ICON_FILE_ID", o + ".svg", r + ".svg");
          }
        case 8:
        case "end":
          return l.stop();
      }
    }
  }, Lr);
}
function uo(e) {
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || void 0 === e)) {
            e.forEach(function (e) {
              if (e.source && Object(fn.R)(e.source)) {
                e.source = Object(fn.n)(e.source);
              }
            });
          }
          t.next = 3;
          return Object(Tt.e)(Object(c.Rh)(e || []));
        case 3:
          t.next = 5;
          return Object(Tt.b)(ao);
        case 5:
        case "end":
          return t.stop();
      }
    }
  }, Pr);
}
gr = {};
Object(At.a)(gr, c.X, Fr);
Object(At.a)(gr, c.Y, Gr);
Object(At.a)(gr, c.s, Hr);
Object(At.a)(gr, c.A, zr);
Object(At.a)(gr, c.J, Vr);
Object(At.a)(gr, c.Z, Yr);
Object(At.a)(gr, c.w, qr);
Object(At.a)(gr, c.v, Kr);
Object(At.a)(gr, c.ob, eo);
Object(At.a)(gr, c.qb, to);
Object(At.a)(gr, c.q, no);
Object(At.a)(gr, c.r, ro);
Object(At.a)(gr, c.mb, co);
Object(At.a)(gr, c.pb, lo);
var po = gr;
var fo = qn(po);
function ho() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)(Object.keys(po), fo);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, Br);
}
var mo = Ct.a.mark(go);
function go() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  return Ct.a.wrap(function (O) {
    for (;;) {
      switch (O.prev = O.next) {
        case 0:
          O.next = 2;
          return Object(Tt.f)(function (e) {
            return e.project.globalVariableList;
          });
        case 2:
          e = O.sent;
          O.next = 5;
          return Object(Tt.f)(function (e) {
            return e.project.globalArrayList;
          });
        case 5:
          t = O.sent;
          O.next = 8;
          return Object(Tt.f)(function (e) {
            return e.project.globalObjectList;
          });
        case 8:
          n = O.sent;
          O.next = 11;
          return Object(Tt.f)(function (e) {
            return e.project.globalWidgetIds;
          });
        case 11:
          r = O.sent;
          O.next = 14;
          return Object(Tt.f)(function (e) {
            return e.project.id;
          });
        case 14:
          o = O.sent;
          O.next = 17;
          return Object(Tt.f)(function (e) {
            return e.project.screens;
          });
        case 17:
          a = O.sent;
          s = [];
          l = [];
          u = [];
          d = [];
          p = [];
          r.forEach(function (e) {
            var t = on.dc.get(e);
            if (t) {
              if (!(t.type !== cn.B && t.type !== cn.y)) {
                d.push(t);
              }
              if (t.type === cn.G) {
                p.push(t);
              }
            }
          });
          Array.prototype.push.apply(s, e);
          Array.prototype.push.apply(l, t);
          Array.prototype.push.apply(u, n);
          f = s.map(function (e) {
            return Object(Mn.a)("PRIMITIVE", e, {
              isWatching: !1
            });
          });
          h = l.map(function (e) {
            return Object(Mn.a)("LIST", e, {
              isWatching: !1
            });
          });
          m = u.map(function (e) {
            return Object(Mn.a)("DICT", e, {
              isWatching: !1
            });
          });
          g = d.map(function (e) {
            var t = Object(kn.getLocalDocumentObject)(o, e.id) || e.attributes.fields;
            return Object(Mn.a)(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: t,
              name: e.title,
              isWatching: !1
            });
          });
          _ = p.map(function (e) {
            return Object(Mn.a)(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: e.attributes.db,
              name: e.title,
              isWatching: !1
            });
          });
          a.forEach(function (e) {
            var t = e.primitiveVariables;
            var n = e.arrayVariables;
            var r = e.objectVariables;
            t.forEach(function (t) {
              f.push(Object(Mn.a)("PRIMITIVE", t, {
                isWatching: !1,
                screenId: e.id
              }));
            });
            n.forEach(function (t) {
              h.push(Object(Mn.a)("LIST", t, {
                isWatching: !1,
                screenId: e.id
              }));
            });
            r.forEach(function (t) {
              m.push(Object(Mn.a)("DICT", t, {
                isWatching: !1,
                screenId: e.id
              }));
            });
          });
          v = [].concat(Object(i.a)(f), Object(i.a)(h), Object(i.a)(m), Object(i.a)(g), Object(i.a)(_));
          b = Object(je.a)(v);
          O.prev = 35;
          b.s();
        case 37:
          if ((y = b.n()).done) {
            O.next = 43;
            break;
          }
          E = y.value;
          O.next = 41;
          return Object(Tt.e)(Object(c.bf)(E));
        case 41:
          O.next = 37;
          break;
        case 43:
          O.next = 48;
          break;
        case 45:
          O.prev = 45;
          O.t0 = O.catch(35);
          b.e(O.t0);
        case 48:
          O.prev = 48;
          b.f();
          return O.finish(48);
        case 51:
        case "end":
          return O.stop();
      }
    }
  }, mo, null, [[35, 45, 48, 51]]);
}
var _o;
var vo = require("react");
var bo = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(vo);
var yo = require("../27");
var Eo = require("../40");
var Oo = require("../75/index");
var wo = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Oo);
var Co = require("../8");
var To = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Co);
var So = require("../13/index");
var Io = require("../267");
var Ao = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Io);
var jo = require("../188");
var No = function (e) {
  var t = e.title;
  var n = e.onConfirm;
  var r = e.content;
  var o = e.onDeny;
  var i = e.className;
  var a = e.onCancel;
  var s = e.isDangerous;
  var c = e.cancelText;
  var l = e.allowText;
  var u = e.denyText;
  var d = e.cancelBtnVisible;
  var p = void 0 === d || d;
  var f = e.confirmBtnVisible;
  var h = void 0 === f || f;
  var m = e.mask;
  var g = void 0 === m || m;
  var _ = function () {
    if (n) {
      n();
    }
  };
  return bo.a.createElement(So.f, {
    visible: !0,
    showCloseButton: !1,
    withPortal: !0,
    maskClosable: !1,
    mask: g,
    className: To()(Ao.a.dialog, i, u && Ao.a.dialogSecondary)
  }, bo.a.createElement(jo.a, null, bo.a.createElement(jo.b, {
    keys: "enter",
    callback: _
  })), bo.a.createElement("h3", null, t), bo.a.createElement("span", null, r), bo.a.createElement("div", {
    className: To()(Ao.a.dialogButtons)
  }, p && bo.a.createElement(So.d, {
    type: "light",
    onClick: function () {
      if (a) {
        a();
      }
    }
  }, c), u && bo.a.createElement(So.d, {
    onClick: function () {
      if (o) {
        o();
      }
    },
    className: Ao.a.denyButton
  }, u), h && bo.a.createElement(So.d, {
    type: "primary",
    danger: s,
    onClick: _
  }, l)));
};
var Ro = new (function () {
  function e() {
    Object(yo.a)(this, e);
    this.boxQueue = [];
    this.currentBox = null;
  }
  Object(Eo.a)(e, [{
    key: "appendDialog",
    value: function (e) {
      var t = this;
      var n = document.createElement("div");
      var r = Object(ln.a)("dialog");
      n.id = r;
      var o = e.onConfirm;
      var i = e.onCancel;
      var s = e.onClose;
      var c = function () {
        var e = Object(St.a)(Ct.a.mark(function e() {
          return Ct.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!o) {
                    e.next = 3;
                    break;
                  }
                  e.next = 3;
                  return o();
                case 3:
                  t.openDialog();
                case 4:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      var l = function () {
        var e = Object(St.a)(Ct.a.mark(function e() {
          return Ct.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!i) {
                    e.next = 3;
                    break;
                  }
                  e.next = 3;
                  return i();
                case 3:
                  t.openDialog();
                case 4:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      var u = function () {
        var e = Object(St.a)(Ct.a.mark(function e() {
          return Ct.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!s) {
                    e.next = 3;
                    break;
                  }
                  e.next = 3;
                  return s();
                case 3:
                  t.openDialog();
                case 4:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      var d = Object(a.a)(Object(a.a)({}, e), {}, {
        onConfirm: c,
        onClose: u,
        onCancel: l
      });
      this.boxQueue.push({
        id: r,
        element: n,
        config: d
      });
      if (!this.currentBox) {
        this.openDialog();
      }
      return r;
    }
  }, {
    key: "openDialog",
    value: function () {
      this.destroyCurrentBox();
      var e = this.boxQueue.shift();
      if (e) {
        wo.a.render(bo.a.createElement(No, e.config), e.element);
        document.body.appendChild(e.element);
        this.currentBox = e;
      }
      return e;
    }
  }, {
    key: "removeDialog",
    value: function (e) {
      var t;
      if (!e) {
        return e;
      }
      if (e === (null === (t = this.currentBox) || void 0 === t ? void 0 : t.id)) {
        this.destroyCurrentBox();
        return e;
      }
      var n = this.boxQueue.findIndex(function (t) {
        return t.id === e;
      });
      if (n >= 0) {
        this.boxQueue.splice(n, 1);
      }
      return e;
    }
  }, {
    key: "destroyCurrentBox",
    value: function () {
      if (this.currentBox) {
        this.destroyBox(this.currentBox.element);
        this.currentBox = null;
      }
    }
  }, {
    key: "destroyBox",
    value: function (e) {
      wo.a.unmountComponentAtNode(e);
      document.body.removeChild(e);
    }
  }]);
  return e;
}())();
var ko = Ct.a.mark(ti);
var xo = Ct.a.mark(ni);
var Do = Ct.a.mark(ri);
var Mo = Ct.a.mark(oi);
var Lo = Ct.a.mark(ii);
var Po = Ct.a.mark(ai);
var Bo = Ct.a.mark(si);
var Fo = Ct.a.mark(ci);
var Go = Ct.a.mark(li);
var Uo = Ct.a.mark(ui);
var Wo = Ct.a.mark(di);
var Ho = Ct.a.mark(pi);
var Vo = Ct.a.mark(fi);
var zo = Ct.a.mark(hi);
var Yo = Ct.a.mark(mi);
var Ko = Ct.a.mark(gi);
var qo = Ct.a.mark(_i);
var Xo = Ct.a.mark(vi);
var Qo = Ct.a.mark(bi);
var Zo = Ct.a.mark(yi);
var Jo = Ct.a.mark(Ei);
var $o = Ct.a.mark(Oi);
var ei = Ct.a.mark(Si);
function ti() {
  var e;
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          e = t.sent;
          t.next = 5;
          return Object(Tt.e)(Object(c.zh)({
            onConfirm: function () {
              xl.dispatch(Object(c.Ch)());
            },
            allowText: Object(un.c)(e, "cloudSpace.login").toString(),
            cancelText: Object(un.c)(e, "cloudSpace.cancelLogin").toString(),
            title: Object(un.c)(e, "cloudSpace.NotLoginTitle").toString(),
            content: Object(un.c)(e, "cloudSpace.notLoginDescription").toString()
          }));
        case 5:
        case "end":
          return t.stop();
      }
    }
  }, ko);
}
function ni(e) {
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          t = o.sent;
          n = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            });
          });
          r = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [n]
          });
          o.next = 7;
          return Object(Tt.e)(Object(c.zh)({
            allowText: Object(un.c)(t, "know").toString(),
            title: Object(un.c)(t, "cloudSpace.dataSourceNotExistDesc").toString(),
            content: r,
            cancelBtnVisible: !1,
            onConfirm: function () {
              xl.dispatch(Object(c.Ij)(new Date().getTime()));
            }
          }));
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, xo);
}
function ri(e, t) {
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          n = a.sent;
          r = Object(un.c)(n, t) ? Object(un.c)(n, t) : t;
          o = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            });
          });
          i = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [o]
          });
          Ro.appendDialog({
            allowText: Object(un.c)(n, "know").toString(),
            title: "以下控件绑定的云数据源发生异常(".concat(r, ")，请重新绑定"),
            content: i,
            cancelBtnVisible: !1
          });
        case 7:
        case "end":
          return a.stop();
      }
    }
  }, Do);
}
function oi(e, t) {
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          n = a.sent;
          r = Object(un.c)(n, t);
          o = e.map(function (e) {
            return bo.a.createElement("div", {
              className: "removedCloudDB",
              key: e.id,
              children: bo.a.createElement("li", {
                children: e.title,
                className: "removedDBName",
                key: e.id
              })
            });
          });
          i = bo.a.createElement("div", {
            className: "removedCloudDBWrapper",
            children: [o]
          });
          Ro.appendDialog({
            allowText: Object(un.c)(n, "know").toString(),
            title: Object(un.c)(n, "cloudSpace.dataSourceExceedLimitError", {
              type: r
            }).toString(),
            content: i,
            cancelBtnVisible: !1
          });
        case 7:
        case "end":
          return a.stop();
      }
    }
  }, Mo);
}
function ii() {
  var e;
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2;
          return Object(Tt.f)(_r.r);
        case 2:
          if (!r.sent) {
            r.next = 21;
            break;
          }
          r.prev = 4;
          r.next = 7;
          return Object(Tt.a)({
            dicts: Object(Tt.b)(Wn.g),
            tables: Object(Tt.b)(Wn.j)
          });
        case 7:
          e = r.sent;
          t = e.dicts;
          n = e.tables;
          r.next = 12;
          return Object(Tt.e)(Object(c.Bg)(t, !0));
        case 12:
          r.next = 14;
          return Object(Tt.e)(Object(c.Eg)(n, !0));
        case 14:
          r.next = 19;
          break;
        case 16:
          r.prev = 16;
          r.t0 = r.catch(4);
          console.error(r.t0);
        case 19:
          r.next = 23;
          break;
        case 21:
          r.next = 23;
          return Object(Tt.b)(ai);
        case 23:
        case "end":
          return r.stop();
      }
    }
  }, Lo, null, [[4, 16]]);
}
function ai() {
  var e;
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          e = o.sent;
          o.prev = 3;
          o.next = 6;
          return Object(Tt.a)({
            dicts: Object(Tt.b)(Wn.g, e),
            tables: Object(Tt.b)(Wn.j, e)
          });
        case 6:
          t = o.sent;
          n = t.dicts;
          r = t.tables;
          o.next = 11;
          return Object(Tt.e)(Object(c.Bg)(n, !0));
        case 11:
          o.next = 13;
          return Object(Tt.e)(Object(c.Eg)(r, !0));
        case 13:
          o.next = 18;
          break;
        case 15:
          o.prev = 15;
          o.t0 = o.catch(3);
          console.error(o.t0);
        case 18:
        case "end":
          return o.stop();
      }
    }
  }, Po, null, [[3, 15]]);
}
function si() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  return Ct.a.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          _.next = 2;
          return Object(Tt.f)(_r.z);
        case 2:
          e = _.sent;
          _.next = 5;
          return Object(Tt.f)(_r.b);
        case 5:
          t = _.sent;
          _.next = 8;
          return Object(Tt.f)(_r.d);
        case 8:
          for (n = _.sent, r = [], o = [], i = [], e === l.d.LOCAL_FILE && Un.b.forEach(function (e) {
            if (e.type === cn.j && e.attributes.cloudDictId !== on.i) {
              r.push(e);
            }
            if (e.type === cn.k && e.attributes.cloudTableId !== on.i) {
              o.push(e);
            }
            if (e.type === cn.A && "number" === typeof e.attributes.dataSource) {
              i.push(e);
            }
          }), Un.g.forEach(function (e) {
            if (e.type === cn.j && e.attributes.cloudDictId !== on.i) {
              r.push(e);
            }
            if (e.type === cn.k && e.attributes.cloudTableId !== on.i) {
              o.push(e);
            }
            if (e.type === cn.A && "number" === typeof e.attributes.dataSource) {
              i.push(e);
            }
          }), a = [], s = function () {
            var e = u[c];
            if (t.findIndex(function (t) {
              return t.id === e.attributes.cloudDictId;
            }) < 0) {
              a.push(e);
            }
          }, c = 0, u = r; c < u.length; c++) {
            s();
          }
          for (d = function () {
            var e = f[p];
            if (n.findIndex(function (t) {
              return t.id === e.attributes.cloudTableId;
            }) < 0) {
              a.push(e);
            }
          }, p = 0, f = o; p < f.length; p++) {
            d();
          }
          for (h = function () {
            var e = g[m];
            if (n.findIndex(function (t) {
              return t.id === e.attributes.dataSource;
            }) < 0) {
              a.push(e);
            }
          }, m = 0, g = i; m < g.length; m++) {
            h();
          }
          return _.abrupt("return", a);
        case 22:
        case "end":
          return _.stop();
      }
    }
  }, Bo);
}
function ci(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.h);
        case 2:
          t = n.sent;
          n.next = 5;
          return Object(Tt.b)(ii);
        case 5:
          n.next = 7;
          return Object(Tt.b)(pi);
        case 7:
          n.next = 9;
          return Object(Tt.b)(fi);
        case 9:
          n.next = 11;
          return Object(Tt.b)(gi);
        case 11:
          n.next = 13;
          return Object(Tt.b)(li, e.payload);
        case 13:
          if (!t) {
            Jt.z.rerenderCurrentScreenWorkspaceData();
          }
        case 14:
        case "end":
          return n.stop();
      }
    }
  }, Fo);
}
function li(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2;
          return Object(Tt.b)(si);
        case 2:
          if (!((t = i.sent).length > 0 && e)) {
            i.next = 6;
            break;
          }
          i.next = 6;
          return Object(Tt.b)(ni, t);
        case 6:
          if (0 !== t.length) {
            i.next = 8;
            break;
          }
          return i.abrupt("return", []);
        case 8:
          n = Object(je.a)(t);
          i.prev = 9;
          n.s();
        case 11:
          if ((r = n.n()).done) {
            i.next = 30;
            break;
          }
          if ((o = r.value).type !== cn.j) {
            i.next = 18;
            break;
          }
          i.next = 16;
          return Object(Tt.e)(Object(c.Lg)(o.id, "cloudDictId", on.i, !1, !0, !0));
        case 16:
          i.next = 18;
          return Object(Tt.e)(Object(c.Ih)([o.attributes.cloudDictId]));
        case 18:
          if (o.type !== cn.k) {
            i.next = 23;
            break;
          }
          i.next = 21;
          return Object(Tt.e)(Object(c.Lg)(o.id, "cloudTableId", on.i, !1, !0, !0));
        case 21:
          i.next = 23;
          return Object(Tt.e)(Object(c.Jh)([o.attributes.cloudTableId]));
        case 23:
          if (o.type !== cn.A) {
            i.next = 28;
            break;
          }
          i.next = 26;
          return Object(Tt.e)(Object(c.Lg)(o.id, "dataSource", "", !1, !0, !0));
        case 26:
          i.next = 28;
          return Object(Tt.e)(Object(c.Jh)([o.attributes.dataSource]));
        case 28:
          i.next = 11;
          break;
        case 30:
          i.next = 35;
          break;
        case 32:
          i.prev = 32;
          i.t0 = i.catch(9);
          n.e(i.t0);
        case 35:
          i.prev = 35;
          n.f();
          return i.finish(35);
        case 38:
          return i.abrupt("return", t);
        case 39:
        case "end":
          return i.stop();
      }
    }
  }, Go, null, [[9, 32, 35, 38]]);
}
function ui() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  var T;
  var S;
  var I;
  var A;
  var j;
  return Ct.a.wrap(function (N) {
    for (;;) {
      switch (N.prev = N.next) {
        case 0:
          if (0 !== Un.b.size) {
            N.next = 2;
            break;
          }
          return N.abrupt("return");
        case 2:
          N.next = 4;
          return Object(Tt.f)(_r.J);
        case 4:
          if (N.sent) {
            N.next = 9;
            break;
          }
          N.next = 8;
          return Object(Tt.b)(ti);
        case 8:
          return N.abrupt("return");
        case 9:
          N.next = 11;
          return Object(Tt.b)(li, !1);
        case 11:
          if (e = N.sent, t = new Set(), n = new Set(), e.forEach(function (e) {
            if (e.type === cn.j) {
              t.add(e.attributes.cloudDictId);
            }
            if (e.type === cn.k) {
              n.add(e.attributes.cloudTableId);
            }
            if (e.type === cn.A && "number" === typeof e.attributes.dataSource) {
              n.add(e.attributes.dataSource);
            }
          }), r = [], o = [], a = [], s = [], l = [], N.prev = 20, !(t.size > 0)) {
            N.next = 26;
            break;
          }
          N.next = 24;
          return Object(Tt.b)(Wn.b, Object(i.a)(t));
        case 24:
          u = N.sent;
          e.forEach(function (e) {
            if (e.type === cn.j) {
              var t = Un.b.get(e.id);
              if (t) {
                var n = u[e.attributes.cloudDictId];
                if (n === on.e) {
                  r.push(e);
                  t.attributes.cloudDictId = on.i;
                } else {
                  if (n) {
                    t.attributes.cloudDictId = parseInt(u[e.attributes.cloudDictId]);
                  }
                }
              }
            }
          });
        case 26:
          N.next = 39;
          break;
        case 28:
          N.prev = 28;
          N.t0 = N.catch(20);
          console.error(N.t0);
          d = JSON.parse(N.t0.message);
          p = d.code;
          f = d.msg;
          N.t1 = p;
          N.next = 40400903 === N.t1 ? 35 : 37;
          break;
        case 35:
          s.push.apply(s, Object(i.a)(e.filter(function (e) {
            return e.type === cn.j;
          })));
          return N.abrupt("break", 39);
        case 37:
          N.next = 39;
          return Object(Tt.b)(ri, e.filter(function (e) {
            return e.type === cn.j;
          }), f);
        case 39:
          if (N.prev = 39, !(n.size > 0)) {
            N.next = 45;
            break;
          }
          N.next = 43;
          return Object(Tt.b)(Wn.c, Object(i.a)(n));
        case 43:
          h = N.sent;
          e.forEach(function (e) {
            if (e.type === cn.k) {
              var t = h[e.attributes.cloudTableId];
              var n = Un.b.get(e.id);
              if (n) {
                if (t === on.e) {
                  o.push(e);
                  n.attributes.cloudTableId = on.i;
                } else {
                  if (t) {
                    n.attributes.cloudTableId = parseInt(h[e.attributes.cloudTableId]);
                  }
                }
              }
            }
            if (e.type === cn.A) {
              var r = h[e.attributes.dataSource];
              var i = Un.b.get(e.id);
              if (i) {
                if (r === on.e) {
                  a.push(e);
                  i.attributes.dataSource = "";
                } else {
                  if (r) {
                    i.attributes.dataSource = parseInt(h[e.attributes.dataSource]);
                  }
                }
              }
            }
          });
        case 45:
          N.next = 58;
          break;
        case 47:
          N.prev = 47;
          N.t2 = N.catch(39);
          console.error(N.t2);
          m = JSON.parse(N.t2.message);
          g = m.code;
          _ = m.msg;
          N.t3 = g;
          N.next = 40400927 === N.t3 ? 54 : 56;
          break;
        case 54:
          l.push.apply(l, Object(i.a)(e.filter(function (e) {
            return e.type === cn.k || e.type === cn.A;
          })));
          return N.abrupt("break", 58);
        case 56:
          N.next = 58;
          return Object(Tt.b)(ri, e.filter(function (e) {
            return e.type === cn.k;
          }), _);
        case 58:
          if (!(r.length > 0 || o.length > 0 || a.length > 0)) {
            N.next = 61;
            break;
          }
          N.next = 61;
          return Object(Tt.b)(ri, [].concat(r, o, a), "cloudSpace.dataSourceNotExist");
        case 61:
          if (!(s.length > 0)) {
            N.next = 64;
            break;
          }
          N.next = 64;
          return Object(Tt.b)(oi, [].concat(s), "cloudSpace.cloudDict");
        case 64:
          if (!(l.length > 0)) {
            N.next = 67;
            break;
          }
          N.next = 67;
          return Object(Tt.b)(oi, [].concat(l), "cloudSpace.cloudTable");
        case 67:
          v = [];
          Un.b.forEach(function (e) {
            if (e.type === cn.j) {
              v.push(e);
            }
          });
          b = Ct.a.mark(function e() {
            var t;
            var n;
            var o;
            var i;
            return Ct.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = E[y], !(n = Un.b.get(t.id))) {
                      e.next = 8;
                      break;
                    }
                    o = s.find(function (e) {
                      return e.id === n.id;
                    });
                    i = r.find(function (e) {
                      return e.id === n.id;
                    });
                    e.next = 7;
                    return Object(Tt.e)(Object(c.Lg)(t.id, "cloudDictId", o || i ? on.i : n.attributes.cloudDictId, !0, !0, !0));
                  case 7:
                    Un.b.delete(t.id);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          });
          y = 0;
          E = v;
        case 71:
          if (!(y < E.length)) {
            N.next = 76;
            break;
          }
          return N.delegateYield(b(), "t4", 73);
        case 73:
          y++;
          N.next = 71;
          break;
        case 76:
          O = [];
          Un.b.forEach(function (e) {
            if (e.type === cn.k) {
              O.push(e);
            }
          });
          w = Ct.a.mark(function e() {
            var t;
            var n;
            var o;
            var i;
            return Ct.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = T[C], !(n = Un.b.get(t.id))) {
                      e.next = 8;
                      break;
                    }
                    o = l.find(function (e) {
                      return e.id === n.id;
                    });
                    i = r.find(function (e) {
                      return e.id === n.id;
                    });
                    e.next = 7;
                    return Object(Tt.e)(Object(c.Lg)(t.id, "cloudTableId", o || i ? on.i : n.attributes.cloudTableId, !0, !0, !0));
                  case 7:
                    Un.b.delete(t.id);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          });
          C = 0;
          T = O;
        case 80:
          if (!(C < T.length)) {
            N.next = 85;
            break;
          }
          return N.delegateYield(w(), "t5", 82);
        case 82:
          C++;
          N.next = 80;
          break;
        case 85:
          S = [];
          Un.b.forEach(function (e) {
            if (e.type === cn.A) {
              S.push(e);
            }
          });
          I = Ct.a.mark(function e() {
            var t;
            var n;
            var o;
            var i;
            return Ct.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (t = j[A], !(n = Un.b.get(t.id))) {
                      e.next = 8;
                      break;
                    }
                    o = l.find(function (e) {
                      return e.id === n.id;
                    });
                    i = r.find(function (e) {
                      return e.id === n.id;
                    });
                    e.next = 7;
                    return Object(Tt.e)(Object(c.Lg)(t.id, "dataSource", o || i ? "" : n.attributes.dataSource, !0, !0, !0));
                  case 7:
                    Un.b.delete(t.id);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          });
          A = 0;
          j = S;
        case 89:
          if (!(A < j.length)) {
            N.next = 94;
            break;
          }
          return N.delegateYield(I(), "t6", 91);
        case 91:
          A++;
          N.next = 89;
          break;
        case 94:
          N.next = 96;
          return Object(Tt.b)(pi);
        case 96:
          N.next = 98;
          return Object(Tt.b)(gi);
        case 98:
          N.next = 100;
          return Object(Tt.e)(Object(c.Qf)());
        case 100:
          N.next = 102;
          return Object(Tt.b)(fi);
        case 102:
          N.next = 104;
          return Object(Tt.e)(Object(c.Qj)());
        case 104:
        case "end":
          return N.stop();
      }
    }
  }, Uo, null, [[20, 28], [39, 47]]);
}
function di() {
  var e;
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.e)(Object(c.ak)({
            header: {
              cloudDBManager: l.j.Hide
            }
          }));
        case 2:
          t.next = 4;
          return Object(Tt.b)(wn.h);
        case 4:
          if (!((e = t.sent) && e.length > 0)) {
            t.next = 8;
            break;
          }
          t.next = 8;
          return Object(Tt.e)(Object(c.ak)({
            header: {
              cloudDBManager: l.j.Show
            }
          }));
        case 8:
        case "end":
          return t.stop();
      }
    }
  }, Wo);
}
function pi() {
  var e;
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {};
          Un.g.forEach(function (t) {
            if (t.type === cn.j && t.attributes.cloudDictId) {
              e[t.attributes.cloudDictId] = !1;
            }
          });
          r.t0 = Ct.a.keys(e);
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10;
            break;
          }
          t = r.t1.value;
          n = Number(t);
          r.next = 8;
          return Object(Tt.e)(Object(c.Pf)(n));
        case 8:
          r.next = 3;
          break;
        case 10:
        case "end":
          return r.stop();
      }
    }
  }, Ho);
}
function fi() {
  var e;
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {};
          Un.g.forEach(function (t) {
            if (t.type === cn.A && "number" === typeof t.attributes.dataSource) {
              e[t.attributes.dataSource] = !1;
            }
          });
          r.t0 = Ct.a.keys(e);
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10;
            break;
          }
          t = r.t1.value;
          n = Number(t);
          r.next = 8;
          return Object(Tt.e)(Object(c.Sf)(n));
        case 8:
          r.next = 3;
          break;
        case 10:
        case "end":
          return r.stop();
      }
    }
  }, Vo);
}
function hi(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.showToast;
          s.prev = 1;
          s.next = 4;
          return Object(Tt.f)(_r.u);
        case 4:
          o = s.sent;
          s.next = 7;
          return Object(Tt.f)(_r.r);
        case 7:
          if (i = s.sent, a = [], !o || i) {
            s.next = 15;
            break;
          }
          s.next = 12;
          return Object(Tt.b)(Wn.k, n, o);
        case 12:
          a = s.sent;
          s.next = 18;
          break;
        case 15:
          s.next = 17;
          return Object(Tt.b)(Wn.f, n);
        case 17:
          a = s.sent;
        case 18:
          s.next = 20;
          return Object(Tt.e)(Object(c.Ag)(n, a, !0));
        case 20:
          s.next = 27;
          break;
        case 22:
          if (s.prev = 22, s.t0 = s.catch(1), !r) {
            s.next = 27;
            break;
          }
          s.next = 27;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: s.t0.message
          }));
        case 27:
        case "end":
          return s.stop();
      }
    }
  }, zo, null, [[1, 22]]);
}
function mi(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          n = e.payload;
          r = n.id;
          o = n.data;
          i = n.isEmitOT;
          f.next = 3;
          return Object(Tt.f)(_r.a);
        case 3:
          s = f.sent;
          l = s.find(function (e) {
            return e.id === r;
          });
          f.next = 7;
          return Object(Tt.e)(Object(c.Jj)(r, o));
        case 7:
          if (i) {
            if (!(null === (u = pn.oTHelper.cloudSpace) || void 0 === u)) {
              u.clientOp.updateCloudDictKeys(r, o);
            }
          }
          if (null === l || void 0 === l || null === (t = l.data) || void 0 === t ? void 0 : t.length) {
            d = [];
            p = [];
            l.data.forEach(function (e) {
              var t = !0;
              o.forEach(function (n) {
                if (e.id === n.id) {
                  t = !1;
                  if (e.key !== n.key) {
                    p.push(Object(a.a)(Object(a.a)({}, n), {}, {
                      oldKey: e.key
                    }));
                  }
                }
              });
              if (t) {
                d.push(e);
              }
            });
            d.forEach(function (e) {
              Object(Jt.q)(Jt.c.CLOUD_DICT_KEYS, e.key);
            });
            p.forEach(function (e) {
              Object(Jt.v)(r, e.oldKey, e.key);
            });
          }
        case 9:
        case "end":
          return f.stop();
      }
    }
  }, Yo);
}
function gi() {
  var e;
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          e = {};
          Un.g.forEach(function (t) {
            if (t.type === cn.k && t.attributes.cloudTableId !== on.i) {
              e[t.attributes.cloudTableId] = !1;
            }
            if (t.type === cn.A && "number" === typeof t.attributes.dataSource) {
              e[t.attributes.dataSource] = !1;
            }
          });
          r.t0 = Ct.a.keys(e);
        case 3:
          if ((r.t1 = r.t0()).done) {
            r.next = 10;
            break;
          }
          t = r.t1.value;
          n = Number(t);
          r.next = 8;
          return Object(Tt.e)(Object(c.Rf)(n, !1));
        case 8:
          r.next = 3;
          break;
        case 10:
        case "end":
          return r.stop();
      }
    }
  }, Ko);
}
function _i(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.showToast;
          s.prev = 1;
          s.next = 4;
          return Object(Tt.f)(_r.y);
        case 4:
          o = s.sent;
          s.next = 7;
          return Object(Tt.f)(_r.r);
        case 7:
          if (i = s.sent, !o || i) {
            s.next = 14;
            break;
          }
          s.next = 11;
          return Object(Tt.b)(Wn.m, n, o);
        case 11:
          a = s.sent;
          s.next = 17;
          break;
        case 14:
          s.next = 16;
          return Object(Tt.b)(Wn.i, n);
        case 16:
          a = s.sent;
        case 17:
          s.next = 19;
          return Object(Tt.e)(Object(c.Dg)(n, a.columns, !0));
        case 19:
          s.next = 26;
          break;
        case 21:
          if (s.prev = 21, s.t0 = s.catch(1), !r) {
            s.next = 26;
            break;
          }
          s.next = 26;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: s.t0.message
          }));
        case 26:
        case "end":
          return s.stop();
      }
    }
  }, qo, null, [[1, 21]]);
}
function vi(e, t) {
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  return Ct.a.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          n = [];
          Un.g.forEach(function (t) {
            if (t.type === cn.A && t.attributes.dataSource === e) {
              n.push(t);
            }
          });
          r = 0;
          o = n;
        case 3:
          if (!(r < o.length)) {
            d.next = 14;
            break;
          }
          for (l in i = o[r], a = i.attributes.templateSlotMap, s = !1, a) if ((u = a[l].dataBindings) && t.includes(u)) {
            a[l].dataBindings = "";
            s = !0;
          }
          if (!s) {
            d.next = 11;
            break;
          }
          d.next = 11;
          return Object(Tt.e)(Object(c.Lg)(i.id, "templateSlotMap", a, !1, !0, !0));
        case 11:
          r++;
          d.next = 3;
          break;
        case 14:
        case "end":
          return d.stop();
      }
    }
  }, Xo);
}
function bi(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          n = e.payload;
          r = n.id;
          o = n.columns;
          i = n.isEmitOT;
          f.next = 3;
          return Object(Tt.f)(_r.c);
        case 3:
          s = f.sent;
          l = s.find(function (e) {
            return e.id === r;
          });
          f.next = 7;
          return Object(Tt.e)(Object(c.Mj)(r, o));
        case 7:
          f.next = 9;
          return Object(Tt.e)(Object(c.Oj)(r, o));
        case 9:
          if (i && (null === (u = pn.oTHelper.cloudSpace) || void 0 === u || u.clientOp.updateCloudTableColumns(r, o)), !(null === l || void 0 === l || null === (t = l.columns) || void 0 === t ? void 0 : t.length)) {
            f.next = 19;
            break;
          }
          if (d = [], p = [], l.columns.forEach(function (e) {
            var t = !0;
            o.forEach(function (n) {
              if (e.id === n.id) {
                t = !1;
                if (e.name !== n.name) {
                  p.push(Object(a.a)(Object(a.a)({}, n), {}, {
                    oldName: e.name
                  }));
                }
              }
            });
            if (t) {
              d.push(e);
            }
          }), d.forEach(function (e) {
            Object(Jt.q)(Jt.c.CLOUD_TABLE_COLUMNS, e.name);
          }), p.forEach(function (e) {
            Object(Jt.w)(r, e.oldName, e.name);
          }), !(d.length > 0)) {
            f.next = 19;
            break;
          }
          f.next = 19;
          return Object(Tt.b)(vi, r, d.map(function (e) {
            return e.id;
          }));
        case 19:
        case "end":
          return f.stop();
      }
    }
  }, Qo);
}
function yi(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload.id;
          a.prev = 1;
          a.next = 4;
          return Object(Tt.f)(_r.u);
        case 4:
          r = a.sent;
          a.next = 7;
          return Object(Tt.f)(_r.r);
        case 7:
          if (o = a.sent, i = [], !r || o) {
            a.next = 15;
            break;
          }
          a.next = 12;
          return Object(Tt.b)(Wn.l, t, r);
        case 12:
          i = a.sent;
          a.next = 18;
          break;
        case 15:
          a.next = 17;
          return Object(Tt.b)(Wn.h, t);
        case 17:
          i = a.sent;
        case 18:
          a.next = 20;
          return Object(Tt.e)(Object(c.Nj)(t, i));
        case 20:
          if (!(null === (n = pn.oTHelper.cloudSpace) || void 0 === n)) {
            n.clientOp.updateCloudTableData(t, i);
          }
          a.next = 25;
          break;
        case 23:
          a.prev = 23;
          a.t0 = a.catch(1);
        case 25:
        case "end":
          return a.stop();
      }
    }
  }, Zo, null, [[1, 23]]);
}
function Ei(e) {
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          t = e.payload;
          n = t.list;
          if (t.isEmitOT) {
            if (!(null === (r = pn.oTHelper.cloudSpace) || void 0 === r)) {
              r.clientOp.updateCloudDictList(n);
            }
          }
          o.next = 4;
          return Object(Tt.e)(Object(c.Kj)(n));
        case 4:
        case "end":
          return o.stop();
      }
    }
  }, Jo);
}
function Oi(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.payload;
          n = t.list;
          r = t.isEmitOT;
          i.next = 3;
          return Object(Tt.e)(Object(c.Lj)(n));
        case 3:
          if (r) {
            if (!(null === (o = pn.oTHelper.cloudSpace) || void 0 === o)) {
              o.clientOp.updateCloudTableList(n);
            }
          }
        case 4:
        case "end":
          return i.stop();
      }
    }
  }, $o);
}
var wi;
_o = {};
Object(At.a)(_o, c.cb, ui);
Object(At.a)(_o, c.C, ci);
Object(At.a)(_o, c.O, hi);
Object(At.a)(_o, c.Bb, mi);
Object(At.a)(_o, c.Q, _i);
Object(At.a)(_o, c.Db, bi);
Object(At.a)(_o, c.R, yi);
Object(At.a)(_o, c.Cb, Ei);
Object(At.a)(_o, c.Eb, Oi);
var Ci = _o;
var Ti = qn(Ci);
function Si() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)(Object.keys(Ci), Ti);
        case 2:
          e.next = 4;
          return Object(Tt.h)([c.P], ii);
        case 4:
        case "end":
          return e.stop();
      }
    }
  }, ei);
}
var Ii = Ct.a.mark(Xa);
var Ai = Ct.a.mark(Qa);
var ji = Ct.a.mark(Ja);
var Ni = Ct.a.mark($a);
var Ri = Ct.a.mark(es);
var ki = Ct.a.mark(ts);
var xi = Ct.a.mark(ns);
var Di = Ct.a.mark(rs);
var Mi = Ct.a.mark(os);
var Li = Ct.a.mark(is);
var Pi = Ct.a.mark(as);
var Bi = Ct.a.mark(ss);
var Fi = Ct.a.mark(cs);
var Gi = Ct.a.mark(ls);
var Ui = Ct.a.mark(us);
var Wi = Ct.a.mark(ds);
var Hi = Ct.a.mark(ps);
var Vi = Ct.a.mark(fs);
var zi = Ct.a.mark(hs);
var Yi = Ct.a.mark(ms);
var Ki = Ct.a.mark(gs);
var qi = Ct.a.mark(_s);
var Xi = Ct.a.mark(vs);
var Qi = Ct.a.mark(bs);
var Zi = Ct.a.mark(ys);
var Ji = Ct.a.mark(Es);
var $i = Ct.a.mark(Cs);
var ea = Ct.a.mark(Ts);
var ta = Ct.a.mark(Ss);
var na = Ct.a.mark(Is);
var ra = Ct.a.mark(As);
var oa = Ct.a.mark(js);
var ia = Ct.a.mark(Ns);
var aa = Ct.a.mark(Rs);
var sa = Ct.a.mark(ks);
var ca = Ct.a.mark(xs);
var la = Ct.a.mark(Ds);
var ua = Ct.a.mark(Ms);
var da = Ct.a.mark(Bs);
var pa = Ct.a.mark(Fs);
var fa = Ct.a.mark(Gs);
var ha = Ct.a.mark(Us);
var ma = Ct.a.mark(Ws);
var ga = Ct.a.mark(Hs);
var _a = Ct.a.mark(Vs);
var va = Ct.a.mark(zs);
var ba = Ct.a.mark(Ys);
var ya = Ct.a.mark(Ks);
var Ea = Ct.a.mark(qs);
var Oa = Ct.a.mark(Xs);
var wa = Ct.a.mark(Qs);
var Ca = Ct.a.mark(Zs);
var Ta = Ct.a.mark(Js);
var Sa = Ct.a.mark($s);
var Ia = Ct.a.mark(ec);
var Aa = Ct.a.mark(tc);
var ja = Ct.a.mark(nc);
var Na = Ct.a.mark(rc);
var Ra = Ct.a.mark(oc);
var ka = Ct.a.mark(ic);
var xa = Ct.a.mark(ac);
var Da = Ct.a.mark(sc);
var Ma = Ct.a.mark(cc);
var La = Ct.a.mark(lc);
var Pa = Ct.a.mark(uc);
var Ba = Ct.a.mark(dc);
var Fa = Ct.a.mark(pc);
var Ga = Ct.a.mark(fc);
var Ua = Ct.a.mark(hc);
var Wa = Ct.a.mark(mc);
var Ha = Ct.a.mark(gc);
var Va = Ct.a.mark(_c);
var za = Ct.a.mark(vc);
var Ya = Ct.a.mark(bc);
var Ka = Ct.a.mark(yc);
var qa = Ct.a.mark(wc);
function Xa(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  return Ct.a.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          n = e.payload;
          r = n.index;
          o = n.shouldSaveCurrentData;
          i = void 0 === o || o;
          p.next = 3;
          return Object(Tt.f)(_r.x);
        case 3:
          a = p.sent;
          p.next = 6;
          return Object(Tt.f)(_r.C);
        case 6:
          if (s = p.sent, l = s.get(r), u = -1 === a ? "__EMPTY_ID__" : (null === (t = s.get(a)) || void 0 === t ? void 0 : t.id) || "__EMPTY_ID__", !(null === l || void 0 === l ? void 0 : l.id) || l.id === u) {
            p.next = 17;
            break;
          }
          Jt.g.setSelectedItem();
          p.next = 13;
          return Object(Tt.e)(Object(c.Bi)(r));
        case 13:
          p.next = 15;
          return Object(Tt.e)(Object(c.ug)(void 0));
        case 15:
          Jt.z.selectWorkspaceByScreenId(l.id, i);
          if (!(null === (d = pn.oTHelper.customEvent) || void 0 === d)) {
            d.emit.focusItem("widget");
          }
        case 17:
        case "end":
          return p.stop();
      }
    }
  }, Ii);
}
function Qa(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  return Ct.a.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          r = e.payload.index;
          p.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          o = p.sent;
          p.next = 6;
          return Object(Tt.f)(_r.C);
        case 6:
          i = p.sent;
          a = Object(on.B)(Object(un.c)(o, "defaultScreenTitle").toString(), i);
          s = Object(on.A)(a);
          l = i.size;
          u = Jt.z.addWorkspaceData({
            screenId: s.id
          });
          d = void 0 !== r ? r : l;
          p.next = 14;
          return Object(Tt.e)(Object(c.if)(s, d));
        case 14:
          p.next = 16;
          return Object(Tt.e)(Object(c.vg)(d));
        case 16:
          p.next = 18;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 18:
          if (!(null === (t = pn.oTHelper.screen) || void 0 === t)) {
            t.clientOp.addScreen(s, d);
          }
          if (!(null === (n = pn.oTHelper.blink) || void 0 === n)) {
            n.clientOp.addWorkspace(s.id, {
              screenId: s.id,
              workspaceJson: null === u || void 0 === u ? void 0 : u.getWorkspaceJson(),
              workspaceOffset: null === u || void 0 === u ? void 0 : u.getWorkspaceOffset()
            });
          }
        case 20:
        case "end":
          return p.stop();
      }
    }
  }, Ai);
}
function Za(e) {
  var t = Object(on.A)(Object(un.c)(e, "defaultScreenTitle").toString());
  return {
    title: Object(un.c)(e, "newProjectTitle").toString(),
    version: W.e,
    blockly: Object(At.a)({}, t.id, {
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
    screens: Object(At.a)({}, t.id, Object(a.a)(Object(a.a)({}, t), {}, {
      widgets: {}
    })),
    screenIds: [t.id],
    imageFileList: [],
    globalVariableList: [],
    globalArrayList: [],
    globalObjectList: []
  };
}
function Ja(e) {
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          t = e.payload.code;
          r.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          n = r.sent;
          r.next = 6;
          return Object(Tt.e)(Object(c.Gf)());
        case 6:
          if (40500103 !== t) {
            r.next = 11;
            break;
          }
          r.next = 9;
          return Object(Tt.e)(Object(c.zh)({
            title: "error",
            content: Object(un.c)(n, "MyProject.projectHasDeleted").toString(),
            cancelBtnVisible: !1
          }));
        case 9:
          r.next = 19;
          break;
        case 11:
          if (40500101 !== t) {
            r.next = 16;
            break;
          }
          r.next = 14;
          return Object(Tt.e)(Object(c.zh)({
            title: "error",
            content: Object(un.c)(n, "MyProject.projectHasNoRermission").toString(),
            cancelBtnVisible: !1
          }));
        case 14:
          r.next = 19;
          break;
        case 16:
          if (40400906 !== t) {
            r.next = 19;
            break;
          }
          r.next = 19;
          return Object(Tt.e)(Object(c.zh)({
            title: Object(un.c)(n, "OT.editPermissionLostTitle").toString(),
            content: Object(un.c)(n, "OT.editPermissionLostDescription").toString(),
            cancelBtnVisible: !1
          }));
        case 19:
        case "end":
          return r.stop();
      }
    }
  }, ji);
}
function $a(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  return Ct.a.wrap(function (y) {
    for (;;) {
      switch (y.prev = y.next) {
        case 0:
          t = e.payload;
          n = t.json;
          r = t.jsonFrom;
          o = void 0 === r ? l.d.OTHER : r;
          i = t.lastSavedTime;
          a = t.projectId;
          s = t.isCollWork;
          u = t.isAuthor;
          d = void 0 === u || u;
          p = t.editPermission;
          f = t.sourceTag;
          h = t.sourceId;
          y.next = 3;
          return Object(Tt.e)(Object(c.Gi)(!1));
        case 3:
          y.next = 5;
          return Object(Tt.f)(_r.s);
        case 5:
          m = y.sent;
          y.next = 8;
          return Object(Tt.e)(Object(c.Ug)());
        case 8:
          g = n;
          _ = f || l.g.FREEDOM;
          v = h || "";
          y.next = 13;
          return Object(Tt.e)(Object(c.Di)(o));
        case 13:
          if (!g) {
            g = Za(m);
          }
          y.next = 16;
          return Object(Tt.b)(rs, g);
        case 16:
          y.next = 18;
          return Object(Tt.e)(Object(c.Uh)(a || Object(ln.a)("PROJECT")));
        case 18:
          y.next = 20;
          return Object(Tt.e)(Object(c.Ei)(i));
        case 20:
          y.next = 22;
          return Object(Tt.e)(Object(c.Fi)(!1));
        case 22:
          y.next = 24;
          return Object(Tt.e)(Object(Be.n)());
        case 24:
          if (o !== l.d.MY_WORK) {
            y.next = 29;
            break;
          }
          y.next = 27;
          return Object(Tt.e)(Object(c.Tg)(!0));
        case 27:
          y.next = 29;
          return Object(Tt.e)(Object(c.Cf)(!0));
        case 29:
          if (!a) {
            y.next = 38;
            break;
          }
          if (!s) {
            y.next = 33;
            break;
          }
          y.next = 33;
          return Object(Tt.e)(Object(Be.o)(a));
        case 33:
          Object(fn.jb)(a);
          _ = g.sourceTag || l.g.FREEDOM;
          v = g.sourceId || "";
          y.next = 44;
          break;
        case 38:
          Gn();
          y.next = 41;
          return Object(Tt.e)(Object(c.Tg)(!0));
        case 41:
          Object(fn.k)(["workId", "inviteCode", "jsonUrl"]);
          y.next = 44;
          return Object(Tt.b)(ts, _, v);
        case 44:
          y.next = 46;
          return Object(Tt.e)(Object(Be.q)(!!d));
        case 46:
          y.next = 48;
          return Object(Tt.e)(Object(c.Sg)());
        case 48:
          y.next = 50;
          return Object(Tt.e)(Object(c.bg)());
        case 50:
          y.next = 52;
          return Object(Tt.e)(Object(c.cg)());
        case 52:
          if (o !== l.d.LOCAL_FILE) {
            y.next = 57;
            break;
          }
          y.next = 55;
          return Object(Tt.e)(Object(c.dg)());
        case 55:
          y.next = 63;
          break;
        case 57:
          y.next = 59;
          return Object(Tt.b)(pi);
        case 59:
          y.next = 61;
          return Object(Tt.b)(gi);
        case 61:
          y.next = 63;
          return Object(Tt.b)(fi);
        case 63:
          y.next = 65;
          return Object(Tt.e)(Object(c.Ci)(p || l.c.Edit));
        case 65:
          y.t0 = Jt.z;
          y.next = 68;
          return Object(Tt.f)(_r.y);
        case 68:
          y.t1 = y.sent;
          y.t0.setCurrentProjectId.call(y.t0, y.t1);
          y.next = 72;
          return Object(Tt.e)(Object(c.Ui)({
            tag: _,
            id: v
          }));
        case 72:
          if (o !== l.d.HOME_COURSE) {
            Object(fn.k)(["courseId"]);
          }
          if (o !== l.d.HOME_TEMPLATE) {
            Object(fn.k)(["templateId"]);
          }
          y.next = 76;
          return Object(Tt.b)(go);
        case 76:
          if (a && (b = Bn()) && Fn(b), o === l.d.HOME_COURSE || o === l.d.COURSE) {
            y.next = 81;
            break;
          }
          if (Rt.a.isLoaded()) {
            Rt.a.show();
            Rt.a.close({
              closeAnimationPos: {
                x: 150,
                y: 30
              }
            });
          }
          y.next = 81;
          return Object(Tt.e)(Object(c.Gh)(Rn.a));
        case 81:
          y.next = 83;
          return Object(Tt.e)(Object(c.Gi)(!0));
        case 83:
        case "end":
          return y.stop();
      }
    }
  }, Ni);
}
function es(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.payload.json;
          i.next = 3;
          return Object(Tt.e)(Object(c.Gi)(!1));
        case 3:
          i.next = 5;
          return Object(Tt.e)(Object(c.Ug)());
        case 5:
          n = Object(In.a)(t);
          i.next = 8;
          return Object(Tt.b)(rs, n);
        case 8:
          i.next = 10;
          return Object(Tt.e)(Object(c.Uh)(t.id));
        case 10:
          i.next = 12;
          return Object(Tt.e)(Object(c.Fi)(!1));
        case 12:
          i.next = 14;
          return Object(Tt.e)(Object(c.bg)());
        case 14:
          i.next = 16;
          return Object(Tt.e)(Object(c.cg)());
        case 16:
          i.next = 18;
          return Object(Tt.b)(pi);
        case 18:
          i.next = 20;
          return Object(Tt.b)(gi);
        case 20:
          i.next = 22;
          return Object(Tt.b)(fi);
        case 22:
          i.next = 24;
          return Object(Tt.e)(Object(c.Ci)(l.c.Edit));
        case 24:
          i.t0 = Jt.z;
          i.next = 27;
          return Object(Tt.f)(_r.y);
        case 27:
          i.t1 = i.sent;
          i.t0.setCurrentProjectId.call(i.t0, i.t1);
          i.next = 31;
          return Object(Tt.e)(Object(c.Gi)(!0));
        case 31:
          r = Jt.z.generateAllWorkspaceCodes(t.screenList);
          if (void 0 !== (o = Object(Nt.minify)(r, {
            keep_fnames: !0
          })).code) {
            r = o.code;
          }
          window.parent.postMessage({
            type: "PLAYER_BLOCK_CODE",
            payload: r
          }, "*");
        case 35:
        case "end":
          return i.stop();
      }
    }
  }, Ri);
}
function ts(e, t) {
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          n = o.sent;
          o.next = 5;
          return Object(Tt.f)(_r.G);
        case 5:
          r = o.sent;
          Object(tn.a)("WorkCreate", {
            sourceTag: e,
            sourceId: t,
            workId: n,
            workType: "APP工匠",
            workName: r,
            isSuccess: !0,
            failReason: ""
          });
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, ki);
}
function ns(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          t = e.payload.json;
          n.next = 3;
          return Object(Tt.e)(Object(c.cg)());
        case 3:
          n.next = 5;
          return Object(Tt.e)(Object(c.bg)());
        case 5:
          n.next = 7;
          return Object(Tt.b)(rs, t);
        case 7:
          n.next = 9;
          return Object(Tt.e)(Object(c.Cf)(!0));
        case 9:
        case "end":
          return n.stop();
      }
    }
  }, xi);
}
function rs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var s;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  var T;
  var S;
  var I;
  var A;
  var j;
  var N;
  var R;
  var k;
  var x;
  var D;
  var M;
  var L;
  var P;
  var B;
  var F;
  var G;
  var U;
  var W;
  var H;
  var V;
  var z;
  var Y;
  var K;
  var q;
  var X;
  var Q;
  var Z;
  var J;
  return Ct.a.wrap(function ($) {
    for (;;) {
      switch ($.prev = $.next) {
        case 0:
          Object(In.b)(e);
          Un.b.clear();
          t = e.blockly;
          n = e.title;
          r = e.imageFileList;
          o = e.soundFileList;
          i = e.iconFileList;
          s = e.screenIds;
          u = e.globalVariableList;
          d = e.globalArrayList;
          p = e.globalWidgetIds;
          f = void 0 === p ? [] : p;
          h = e.globalWidgets;
          m = void 0 === h ? {} : h;
          g = e.extensionWidgetList;
          _ = void 0 === g ? [] : g;
          v = e.unsafeExtensionWidgetList;
          b = void 0 === v ? [] : v;
          y = e.globalObjectList;
          E = e.version;
          O = void 0 === E ? 1 : E;
          w = e.cloudDictKeysList;
          C = e.cloudTableColumnList;
          T = e.cloudTableDataList;
          S = e.cloudDictList;
          I = e.cloudTableList;
          $.next = 5;
          return Object(Tt.b)(vn.x, _, b);
        case 5:
          A = Object(hn.f)(e.screens);
          $.next = 8;
          return Object(Tt.b)(vn.w, _, A, m);
        case 8:
          $.next = 10;
          return Object(Tt.f)(_r.z);
        case 10:
          j = $.sent;
          Object(In.c)(A, O);
          N = Object(hn.e)(e.screens, s);
          $.next = 15;
          return Object(Tt.e)(Object(c.Th)({
            screens: N,
            title: n,
            globalVariableList: u,
            globalArrayList: d,
            globalWidgetIds: f,
            globalObjectList: y
          }));
        case 15:
          $.next = 17;
          return Object(Tt.f)(_r.y);
        case 17:
          if (R = $.sent, Object(kn.clearLocalDocuments)(R, f), xn.a.clear(), j === l.d.LOCAL_FILE) {
            k = Object(on.Zb)(m);
            x = Object(je.a)(k);
            try {
              for (x.s(); !(D = x.n()).done;) {
                M = D.value;
                Un.b.set(M.id, M);
              }
            } catch (ee) {
              x.e(ee);
            } finally {
              x.f();
            }
            L = Object(on.Zb)(A);
            P = Object(je.a)(L);
            try {
              for (P.s(); !(B = P.n()).done;) {
                F = B.value;
                Un.b.set(F.id, F);
              }
            } catch (ee) {
              P.e(ee);
            } finally {
              P.f();
            }
          }
          Object(on.Sb)(Object(a.a)(Object(a.a)({}, A), m));
          $.next = 24;
          return Object(Tt.b)(go);
        case 24:
          Object(on.Qb)(r);
          Jt.z.replaceWorkspaces(t);
          Object(En.b)();
          $.next = 29;
          return Object(Tt.b)(Ms);
        case 29:
          $.next = 31;
          return Object(Tt.b)($r, o || []);
        case 31:
          $.next = 33;
          return Object(Tt.b)(uo, i || []);
        case 33:
          $.next = 35;
          return Object(Tt.e)(Object(c.vg)(0, !1));
        case 35:
          $.next = 37;
          return Object(Tt.e)(Object(c.Zj)());
        case 37:
          $.next = 39;
          return Object(Tt.f)(_r.j);
        case 39:
          for (W in G = $.sent, U = {}, G.forEach(function (e) {
            if (e.cdnUrl) {
              U[e.id] = e.cdnUrl;
            }
          }), A) {
            if ((H = A[W]).type === cn.H && (V = H.attributes.fontFamily) && U[V] && !fn.db[V]) {
              Object(fn.bb)(V, U[V]);
              fn.db[V] = !0;
            }
            if (H && H.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === H.type) {
              z = H.attributes;
              Y = z.content;
              K = void 0 === Y ? "" : Y;
              Object(An.a)(K).forEach(function (e) {
                if (e && U[e] && !fn.db[e]) {
                  Object(fn.bb)(e, U[e]);
                  fn.db[e] = !0;
                }
              });
            }
          }
          if (j === l.d.LOCAL_FILE) {
            $.next = 50;
            break;
          }
          q = Object(on.ab)();
          $.next = 47;
          return Object(Tt.e)(Object(c.Sj)(q.map(function (e) {
            return e.attributes.cloudDictId;
          })));
        case 47:
          X = Object(on.rb)();
          $.next = 50;
          return Object(Tt.e)(Object(c.Tj)(X));
        case 50:
          if (!w) {
            $.next = 58;
            break;
          }
          $.t0 = Ct.a.keys(w);
        case 52:
          if (($.t1 = $.t0()).done) {
            $.next = 58;
            break;
          }
          Q = $.t1.value;
          $.next = 56;
          return Object(Tt.e)(Object(c.Jj)(Number(Q), w[Q]));
        case 56:
          $.next = 52;
          break;
        case 58:
          if (!C) {
            $.next = 66;
            break;
          }
          $.t2 = Ct.a.keys(C);
        case 60:
          if (($.t3 = $.t2()).done) {
            $.next = 66;
            break;
          }
          Z = $.t3.value;
          $.next = 64;
          return Object(Tt.e)(Object(c.Mj)(Number(Z), C[Z]));
        case 64:
          $.next = 60;
          break;
        case 66:
          if (!T) {
            $.next = 74;
            break;
          }
          $.t4 = Ct.a.keys(T);
        case 68:
          if (($.t5 = $.t4()).done) {
            $.next = 74;
            break;
          }
          J = $.t5.value;
          $.next = 72;
          return Object(Tt.e)(Object(c.Nj)(Number(J), T[J]));
        case 72:
          $.next = 68;
          break;
        case 74:
          if (!S) {
            $.next = 77;
            break;
          }
          $.next = 77;
          return Object(Tt.e)(Object(c.Kj)(S));
        case 77:
          if (!I) {
            $.next = 80;
            break;
          }
          $.next = 80;
          return Object(Tt.e)(Object(c.Lj)(I));
        case 80:
        case "end":
          return $.stop();
      }
    }
  }, Di);
}
function os(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  return Ct.a.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          t = e.payload;
          n = t.screenId;
          r = t.isEmitOT;
          o = void 0 === r || r;
          m.next = 3;
          return Object(Tt.f)(_r.C);
        case 3:
          i = m.sent;
          a = i.findIndex(function (e) {
            return e.id === n;
          });
          s = i.get(a);
          m.next = 8;
          return Object(Tt.f)(_r.x);
        case 8:
          l = m.sent;
          m.next = 11;
          return Object(Tt.f)(_r.f);
        case 11:
          if (u = m.sent, !(a > -1 && s && u)) {
            m.next = 29;
            break;
          }
          Object(Jt.q)(Jt.c.SCREEN, n);
          Jt.z.removeWorkspaceByScreenId(n);
          s.get("widgetIds").forEach(function (e) {
            return Object(on.F)(e);
          });
          d = a < l ? Math.max(l - 1, 0) : Math.min(l, i.size - 2);
          m.next = 19;
          return Object(Tt.e)(Object(c.eh)(n));
        case 19:
          m.next = 21;
          return Object(Tt.e)(Object(c.Bi)(d));
        case 21:
          m.next = 23;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 23:
          m.next = 25;
          return Object(Tt.f)(_r.C);
        case 25:
          p = m.sent;
          if ((f = p.get(d)) && f.id !== u.id) {
            Jt.z.selectWorkspaceByScreenId(f.id, !1);
          }
          if (o) {
            if (!(null === (h = pn.oTHelper.screen) || void 0 === h)) {
              h.clientOp.removeScreen(a, n);
            }
          }
        case 29:
        case "end":
          return m.stop();
      }
    }
  }, Mi);
}
function is(e) {
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  return Ct.a.wrap(function (T) {
    for (;;) {
      switch (T.prev = T.next) {
        case 0:
          t = e.payload.screenId;
          T.next = 3;
          return Object(Tt.f)(_r.C);
        case 3:
          n = T.sent;
          r = n.findIndex(function (e) {
            return e.id === t;
          });
          o = n.get(r);
          T.next = 8;
          return Object(Tt.f)(_r.f);
        case 8:
          if (a = T.sent, s = r + 1, !o || !a) {
            T.next = 48;
            break;
          }
          d = Object(on.B)(o.get("title"), n);
          p = Object(on.A)(d);
          f = o.get("widgetIds");
          h = Object(i.a)(f);
          f.forEach(function (e) {
            Object(on.v)(e, h);
          });
          p.widgetIds = h;
          m = o.get("invisibleWidgetIds");
          g = Object(i.a)(m);
          m.forEach(function (e) {
            Object(on.v)(e, g);
          });
          p.invisibleWidgetIds = g;
          _ = new Map();
          h.forEach(function (e, t) {
            _.set(f[t], e);
          });
          v = Object(G.cloneDeep)(o.get("primitiveVariables"));
          b = new Map();
          v.forEach(function (e) {
            var t = Object(ln.a)("VARIABLE");
            b.set(e.id, t);
            e.id = t;
          });
          p.primitiveVariables = v;
          y = Object(G.cloneDeep)(o.get("arrayVariables"));
          E = new Map();
          y.forEach(function (e) {
            var t = Object(ln.a)("VARIABLE");
            E.set(e.id, t);
            e.id = t;
          });
          p.arrayVariables = y;
          O = Object(G.cloneDeep)(o.get("objectVariables"));
          w = new Map();
          O.forEach(function (e) {
            var t = Object(ln.a)("OBJECT");
            w.set(e.id, t);
            e.id = t;
          });
          p.objectVariables = O;
          p.snapshot = o.get("snapshot");
          p.backgroundColor = o.get("backgroundColor");
          C = Jt.z.copyWorkspaceData(o.toJS().id, p.id, _, b, E, w);
          p.backgroundImage = o.get("backgroundImage");
          p.backgroundImageResizeMode = o.get("backgroundImageResizeMode");
          T.next = 42;
          return Object(Tt.e)(Object(c.if)(p, s));
        case 42:
          T.next = 44;
          return Object(Tt.e)(Object(c.vg)(s));
        case 44:
          T.next = 46;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 46:
          if (!(null === (l = pn.oTHelper.screen) || void 0 === l)) {
            l.clientOp.addScreen(p, s);
          }
          if (!(null === (u = pn.oTHelper.blink) || void 0 === u)) {
            u.clientOp.addWorkspace(p.id, C);
          }
        case 48:
        case "end":
          return T.stop();
      }
    }
  }, Li);
}
function as(e, t) {
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          if (e.type !== cn.y) {
            r.next = 5;
            break;
          }
          r.next = 3;
          return Object(Tt.b)(ss, e.id);
        case 3:
          r.next = 9;
          break;
        case 5:
          if (e.type !== cn.l) {
            r.next = 9;
            break;
          }
          if (!t) {
            r.next = 9;
            break;
          }
          r.next = 9;
          return Object(Tt.b)(Wt, e.attributes.cloudDbId);
        case 9:
          Object(on.F)(e.id);
          Object(Jt.q)(e.type, e.id);
          r.next = 13;
          return Object(Tt.e)(Object(c.Lh)(e.id));
        case 13:
          r.next = 15;
          return Object(Tt.e)(Object(c.bh)(e.id));
        case 15:
          if (t) {
            if (!(null === (n = pn.oTHelper.globalWidget) || void 0 === n)) {
              n.clientOp.del(e.id);
            }
          }
        case 16:
        case "end":
          return r.stop();
      }
    }
  }, Pi);
}
function ss(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          t = n.sent;
          Object(on.yb)(e).forEach(function (e) {
            Object(Jt.q)(Jt.c.DOC_KEYS, e.id);
          });
          gn(t);
        case 6:
        case "end":
          return n.stop();
      }
    }
  }, Bi);
}
function cs(e, t, n) {
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  var T;
  return Ct.a.wrap(function (S) {
    for (;;) {
      switch (S.prev = S.next) {
        case 0:
          if (r = e.type, o = e.id, a = Object(on.Db)(r), r !== cn.f) {
            S.next = 25;
            break;
          }
          s = e;
          l = Object(i.a)(s.widgetIds);
          u = Object(je.a)(l);
          S.prev = 7;
          u.s();
        case 9:
          if ((d = u.n()).done) {
            S.next = 15;
            break;
          }
          p = d.value;
          S.next = 13;
          return Object(Tt.e)(Object(c.Mf)(p, t, !1));
        case 13:
          S.next = 9;
          break;
        case 15:
          S.next = 20;
          break;
        case 17:
          S.prev = 17;
          S.t0 = S.catch(7);
          u.e(S.t0);
        case 20:
          S.prev = 20;
          u.f();
          return S.finish(20);
        case 23:
          S.next = 48;
          break;
        case 25:
          if (r !== cn.x && r !== cn.A) {
            S.next = 47;
            break;
          }
          f = e;
          h = Object(i.a)(f.widgetIds);
          m = Object(je.a)(h);
          S.prev = 29;
          m.s();
        case 31:
          if ((g = m.n()).done) {
            S.next = 37;
            break;
          }
          _ = g.value;
          S.next = 35;
          return Object(Tt.e)(Object(c.Mf)(_, t, !1));
        case 35:
          S.next = 31;
          break;
        case 37:
          S.next = 42;
          break;
        case 39:
          S.prev = 39;
          S.t1 = S.catch(29);
          m.e(S.t1);
        case 42:
          S.prev = 42;
          m.f();
          return S.finish(42);
        case 45:
          S.next = 48;
          break;
        case 47:
          if (!(r !== cn.c && r !== cn.a)) {
            if ((v = null === e || void 0 === e ? void 0 : e.parentId) && Object(on.Bb)(v)) {
              b = Object(on.Bb)(v);
              y = b.widgetIds;
              if ((E = y.indexOf(o)) > -1) {
                y.splice(E, 1);
                if (!(null === (O = pn.oTHelper.widget) || void 0 === O)) {
                  O.clientOp.replaceWidgetAttributeOp(t, v, "widgetIds", y);
                }
              }
            }
            if (w = Object(an.b)(o)) {
              Object(mn.b)(w, o);
            }
          }
        case 48:
          Object(on.F)(e.id);
          S.next = 51;
          return Object(Tt.e)(Object(c.Mh)(t, o, null === a || void 0 === a ? void 0 : a.isInvisibleWidget));
        case 51:
          S.next = 53;
          return Object(Tt.e)(Object(c.bh)(o));
        case 53:
          if (n) {
            if (null === a || void 0 === a ? void 0 : a.isInvisibleWidget) {
              if (!(null === (C = pn.oTHelper.widget) || void 0 === C)) {
                C.clientOp.deleteInvisibleWidgetOp(t, o);
              }
            } else {
              if (!(null === (T = pn.oTHelper.widget) || void 0 === T)) {
                T.clientOp.deleteWidgetOp(t, o);
              }
            }
          }
          Object(Jt.q)(r, o);
          if (!("CANVAS_WIDGET" !== r && "ACTOR_WIDGET" !== r)) {
            Object(Jt.l)();
          }
        case 56:
        case "end":
          return S.stop();
      }
    }
  }, Fi, null, [[7, 17, 20, 23], [29, 39, 42, 45]]);
}
function ls(e) {
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          t = o.sent;
          o.next = 5;
          return Object(Tt.f)(_r.r);
        case 5:
          if (n = o.sent, r = !0, e.type !== cn.l || n) {
            o.next = 11;
            break;
          }
          o.next = 10;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: Object(un.c)(t, "notHavePermissionToDeleteCloudDb").toString()
          }));
        case 10:
          r = !1;
        case 11:
          return o.abrupt("return", r);
        case 12:
        case "end":
          return o.stop();
      }
    }
  }, Gi);
}
function us(e) {
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          t = o.sent;
          o.next = 5;
          return Object(Tt.f)(_r.r);
        case 5:
          if (n = o.sent, r = !0, e.type !== cn.l) {
            o.next = 18;
            break;
          }
          if (!(Object(on.cb)().length >= sn.f)) {
            o.next = 14;
            break;
          }
          o.next = 11;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: Object(un.c)(t, "cloudDbCountOverflowTitle").toString()
          }));
        case 11:
          r = !1;
          o.next = 18;
          break;
        case 14:
          if (n) {
            o.next = 18;
            break;
          }
          o.next = 17;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: Object(un.c)(t, "notHavePermissionToAddCloudDb").toString()
          }));
        case 17:
          r = !1;
        case 18:
          return o.abrupt("return", r);
        case 19:
        case "end":
          return o.stop();
      }
    }
  }, Ui);
}
function ds(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  return Ct.a.wrap(function (v) {
    for (;;) {
      switch (v.prev = v.next) {
        case 0:
          t = e.payload;
          n = t.screenId;
          r = t.widgetId;
          o = t.isEmitOT;
          i = void 0 === o || o;
          a = Object(on.Bb)(r);
          v.next = 4;
          return Object(Tt.f)(_r.D);
        case 4:
          if (s = v.sent, a) {
            v.next = 7;
            break;
          }
          return v.abrupt("return");
        case 7:
          if (!i) {
            v.next = 13;
            break;
          }
          v.next = 10;
          return Object(Tt.b)(ls, a);
        case 10:
          if (v.sent) {
            v.next = 13;
            break;
          }
          return v.abrupt("return");
        case 13:
          if (a.type !== cn.h) {
            v.next = 21;
            break;
          }
          v.next = 16;
          return Object(Tt.f)(_r.y);
        case 16:
          if (l = v.sent, !Object(hn.a)(l)) {
            v.next = 21;
            break;
          }
          u = a.attributes.cloudDbId;
          v.next = 21;
          return Object(Tt.b)(wn.d, u, l);
        case 21:
          if (a.id === s && n && Jt.g.setSelectedItemByWidgetId(n), !a.isGlobalWidget) {
            v.next = 27;
            break;
          }
          v.next = 25;
          return Object(Tt.b)(as, a, i);
        case 25:
          v.next = 30;
          break;
        case 27:
          if (!n || !a) {
            v.next = 30;
            break;
          }
          v.next = 30;
          return Object(Tt.b)(cs, a, n, i);
        case 30:
          if (a.type !== cn.G) {
            v.next = 57;
            break;
          }
          d = Object(on.L)(cn.A);
          p = Object(je.a)(d);
          v.prev = 33;
          p.s();
        case 35:
          if ((f = p.n()).done) {
            v.next = 47;
            break;
          }
          if (h = f.value, (null === (m = Object(on.Bb)(h)) || void 0 === m ? void 0 : m.type) !== cn.A || m.attributes.dataSource !== r) {
            v.next = 45;
            break;
          }
          for (_ in g = m.attributes.templateSlotMap) g[_].dataBindings = "";
          v.next = 43;
          return Object(Tt.e)(Object(c.Kg)(h, "dataSource", ""));
        case 43:
          v.next = 45;
          return Object(Tt.e)(Object(c.Kg)(h, "templateSlotMap", g));
        case 45:
          v.next = 35;
          break;
        case 47:
          v.next = 52;
          break;
        case 49:
          v.prev = 49;
          v.t0 = v.catch(33);
          p.e(v.t0);
        case 52:
          v.prev = 52;
          p.f();
          return v.finish(52);
        case 55:
          v.next = 57;
          return Object(Tt.e)(Object(c.Uj)());
        case 57:
          v.next = 59;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 59:
        case "end":
          return v.stop();
      }
    }
  }, Wi, null, [[33, 49, 52, 55]]);
}
function ps(e, t, n) {
  var r;
  var o;
  var s;
  var c;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  return Ct.a.wrap(function (b) {
    for (;;) {
      switch (b.prev = b.next) {
        case 0:
          u = function (e) {
            return "string" === typeof e ? Object(un.f)(r, e) : (e.constructor !== Array && e.constructor !== Object || Object.entries(e).forEach(function (t) {
              var n = Object(It.a)(t, 2);
              var r = n[0];
              var o = n[1];
              e[r] = u(o);
            }), e);
          };
          b.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          r = b.sent;
          b.next = 6;
          return Object(Tt.f)(_r.n);
        case 6:
          if (o = b.sent, s = Object(on.Db)(e)) {
            b.next = 10;
            break;
          }
          return b.abrupt("return", null);
        case 10:
          if (c = Object(fn.q)(s.widget), l = c.attributes, s.isInvisibleWidget || void 0 !== c.opacity || (c.opacity = 100), u(l), d = [], !s.widget.isGlobalWidget) {
            b.next = 19;
            break;
          }
          d = o;
          b.next = 24;
          break;
        case 19:
          if (!n) {
            b.next = 24;
            break;
          }
          b.next = 22;
          return Object(Tt.f)(_r.H, n);
        case 22:
          if (p = b.sent) {
            d = [].concat(Object(i.a)(p.widgetIds), Object(i.a)(p.invisibleWidgetIds));
          }
        case 24:
          f = s.title;
          if (!!s.contentTextField && s.contentTextField) {
            m = s.contentTextField;
            h = l[m];
            h = Object(on.D)(e, d, h);
          } else {
            f = null === (g = Object(un.c)(r, s.title)) || void 0 === g ? void 0 : g.toString();
            f = Object(on.D)(e, d, f);
          }
          _ = Object(ln.a)(e);
          v = Object(a.a)(Object(a.a)({
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
            visible: !0,
            attributes: l,
            isGlobalWidget: s.widget.isGlobalWidget
          });
          return b.abrupt("return", v);
        case 30:
        case "end":
          return b.stop();
      }
    }
  }, Hi);
}
function fs(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.b)(Bt, e.title);
        case 2:
          t = n.sent;
          return n.abrupt("return", t);
        case 4:
        case "end":
          return n.stop();
      }
    }
  }, Vi);
}
function hs(e, t) {
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          if (n = Object(on.Db)(e.type)) {
            o.next = 3;
            break;
          }
          return o.abrupt("return");
        case 3:
          if (Object(on.Ub)(e.id, e), !e.isGlobalWidget) {
            o.next = 9;
            break;
          }
          o.next = 7;
          return Object(Tt.e)(Object(c.hf)(e.id));
        case 7:
          o.next = 12;
          break;
        case 9:
          if (!t) {
            o.next = 12;
            break;
          }
          o.next = 12;
          return Object(Tt.e)(Object(c.jf)(t, e.id, n.isInvisibleWidget));
        case 12:
          if (e.type !== cn.B && e.type !== cn.y) {
            o.next = 18;
            break;
          }
          r = e.attributes.fields;
          o.next = 16;
          return Object(Tt.e)(Object(c.bf)(Object(Mn.a)(e.type, {
            id: e.id,
            name: e.title,
            value: r,
            defaultValue: "no-use"
          }, {
            isWatching: !1
          })));
        case 16:
          o.next = 21;
          break;
        case 18:
          if (e.type !== cn.G) {
            o.next = 21;
            break;
          }
          o.next = 21;
          return Object(Tt.e)(Object(c.bf)(Object(Mn.a)(cn.G, {
            id: e.id,
            name: e.title,
            value: e.attributes.db,
            defaultValue: "no-use"
          }, {
            isWatching: !1
          })));
        case 21:
        case "end":
          return o.stop();
      }
    }
  }, zi);
}
function ms(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  return Ct.a.wrap(function (v) {
    for (;;) {
      switch (v.prev = v.next) {
        case 0:
          t = e.payload;
          n = t.screenId;
          r = t.widgetType;
          o = t.position;
          i = t.attributes;
          a = t.setBlockValue;
          s = Object(on.Db)(r);
          v.next = 4;
          return Object(Tt.b)(ps, r, o, n);
        case 4:
          if ((l = v.sent) && s) {
            v.next = 8;
            break;
          }
          console.error("Can not create widget");
          return v.abrupt("return");
        case 8:
          v.next = 10;
          return Object(Tt.b)(us, l);
        case 10:
          if (v.sent) {
            v.next = 13;
            break;
          }
          return v.abrupt("return");
        case 13:
          v.next = 15;
          return Object(Tt.f)(_r.J);
        case 15:
          if (u = v.sent, l.type !== cn.n && l.type !== cn.J) {
            v.next = 20;
            break;
          }
          l.attributes.timeStamp = Date.now();
          v.next = 68;
          break;
        case 20:
          if (l.type !== cn.l) {
            v.next = 30;
            break;
          }
          if (u) {
            v.next = 25;
            break;
          }
          v.next = 24;
          return Object(Tt.e)(Object(c.Ch)());
        case 24:
          return v.abrupt("return");
        case 25:
          v.next = 27;
          return Object(Tt.b)(fs, l);
        case 27:
          l.attributes.cloudDbId = v.sent;
          v.next = 68;
          break;
        case 30:
          if (l.type !== cn.x && l.type !== cn.A) {
            v.next = 38;
            break;
          }
          v.next = 33;
          return Object(Tt.b)(_s, n, l.id, l.attributes.templateType);
        case 33:
          d = v.sent;
          l.widgetIds = d.widgetIds;
          l.attributes.templateSlotMap = d.templateSlotMap;
          v.next = 68;
          break;
        case 38:
          if (l.type !== cn.m) {
            v.next = 42;
            break;
          }
          if (i) {
            if (Object(G.isString)(i.name)) {
              l.title = i.name;
            }
            if (i.header) {
              l.attributes.db.header = i.header;
            }
            if (i.data) {
              l.attributes.db.data = i.data;
            }
          }
          v.next = 68;
          break;
        case 42:
          if (l.type !== cn.h) {
            v.next = 67;
            break;
          }
          v.next = 45;
          return Object(Tt.f)(_r.y);
        case 45:
          if (p = v.sent, u) {
            v.next = 50;
            break;
          }
          v.next = 49;
          return Object(Tt.e)(Object(c.Ch)());
        case 49:
          return v.abrupt("return");
        case 50:
          if (i && (l.attributes.cloudDbId = i.cloudDbId, l.attributes.name = i.name, l.attributes.columns = i.columns, l.attributes.primaryKey = i.primaryKey), "_EMPTY_CLOUD_DB_ID_" !== l.attributes.cloudDbId) {
            v.next = 64;
            break;
          }
          v.next = 54;
          return Object(Tt.f)(_r.s);
        case 54:
          f = v.sent;
          v.next = 57;
          return Object(Tt.b)(wn.b, Object(un.c)(f, "cloudDb.defaultName").toString(), Object(hn.a)(p) ? p : "");
        case 57:
          if ((h = v.sent).id) {
            v.next = 62;
            break;
          }
          v.next = 61;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: Object(un.c)(f, "cloudDBWidget.generateError").toString()
          }));
        case 61:
          return v.abrupt("return");
        case 62:
          l.attributes.cloudDbId = h.id;
          l.attributes.name = h.name;
        case 64:
          l.title = l.attributes.name;
          v.next = 68;
          break;
        case 67:
          if (l.type === cn.G) {
            l.attributes.db = Object(Sn.d)();
          }
        case 68:
          v.next = 70;
          return Object(Tt.b)(hs, l, n);
        case 70:
          if (a) {
            a(l.id);
          }
          if (l.isGlobalWidget) {
            if (!(null === (m = pn.oTHelper.globalWidget) || void 0 === m)) {
              m.clientOp.add(l);
            }
          } else {
            if (n) {
              if (s.isInvisibleWidget) {
                if (!(null === (g = pn.oTHelper.widget) || void 0 === g)) {
                  g.clientOp.addInvisibleWidgetOp(n, l);
                }
              } else {
                if (!(null === (_ = pn.oTHelper.widget) || void 0 === _)) {
                  _.clientOp.addWidgetOp(n, l);
                }
              }
            }
          }
          v.next = 74;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 74:
          if (l.type === cn.m) {
            v.next = 79;
            break;
          }
          v.next = 77;
          return Object(Tt.b)(vs, l);
        case 77:
          v.next = 79;
          return Object(Tt.e)(Object(c.ug)(l.id));
        case 79:
          v.next = 81;
          return Object(Tt.b)(bs, n, l);
        case 81:
          Object(yn.a)(l.type, null === u || void 0 === u ? void 0 : u.id);
          return v.abrupt("return", l);
        case 83:
        case "end":
          return v.stop();
      }
    }
  }, Yi);
}
function gs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          if (t = e.payload.widgetType, Object(on.Db)(t)) {
            l.next = 17;
            break;
          }
          l.next = 4;
          return Object(Tt.f)(_r.t);
        case 4:
          if (n = l.sent, !(r = n.find(function (e) {
            return Object(u.c)(e.type, !0) === t;
          }))) {
            l.next = 11;
            break;
          }
          l.next = 9;
          return Object(Tt.b)(vn.u, r.cdnUrl, r.id);
        case 9:
          l.next = 16;
          break;
        case 11:
          l.next = 13;
          return Object(Tt.f)(_r.s);
        case 13:
          o = l.sent;
          l.next = 16;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: Object(un.c)(o, "WidgetList.addFailureToast").toString()
          }));
        case 16:
          if (Object(u.e)(t)) {
            a = bn.f(t);
            s = {
              id: a.id,
              cdnUrl: a.cdnUrl,
              type: a.type
            };
            if (!(null === (i = pn.oTHelper.extensionWidget) || void 0 === i)) {
              i.clientOp.addMallExtensionWidget(s);
            }
          }
        case 17:
        case "end":
          return l.stop();
      }
    }
  }, Ki);
}
function _s(e, t, n) {
  var r;
  var o;
  var i;
  var s;
  var c;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          r = f.sent;
          o = _n.n[n];
          i = [];
          s = {};
          f.t0 = Ct.a.keys(o);
        case 7:
          if ((f.t1 = f.t0()).done) {
            f.next = 28;
            break;
          }
          c = f.t1.value;
          u = o[c];
          d = Object(on.Db)(u.widgetType);
          f.next = 13;
          return Object(Tt.b)(ps, u.widgetType, {
            x: 0,
            y: 0
          }, e);
        case 13:
          if ((p = f.sent) && d) {
            f.next = 17;
            break;
          }
          console.error("can not create widget");
          return f.abrupt("return");
        case 17:
          p.parentId = t;
          p.title = Object(un.c)(r, u.titleMessageId).toString();
          p.attributes = Object(a.a)(Object(a.a)({}, p.attributes), u.attributes);
          if (p.type === cn.H) {
            p.attributes.content = Object(un.c)(r, u.contentMessageId || "").toString();
            p.attributes.textAlign = "left";
          }
          f.next = 23;
          return Object(Tt.b)(hs, p, e);
        case 23:
          s[c] = {
            label: p.title,
            widgetId: p.id,
            dataBindings: ""
          };
          i.push(p.id);
          if (!(null === (l = pn.oTHelper.widget) || void 0 === l)) {
            l.clientOp.addWidgetOp(e, p);
          }
          f.next = 7;
          break;
        case 28:
          return f.abrupt("return", {
            widgetIds: i,
            templateSlotMap: s
          });
        case 29:
        case "end":
          return f.stop();
      }
    }
  }, qi);
}
function vs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          if (t = a.sent, n = Object(on.Db)(e.type)) {
            a.next = 6;
            break;
          }
          return a.abrupt("return");
        case 6:
          if (!n.isInvisibleWidget) {
            a.next = 11;
            break;
          }
          o = null === (r = Object(un.c)(t, n.title)) || void 0 === r ? void 0 : r.toString();
          i = Object(un.c)(t, "WidgetList.addSuccessToast", {
            widgetTitle: o
          }).toString();
          a.next = 11;
          return Object(Tt.e)(Object(c.xj)("".concat(i), !0));
        case 11:
        case "end":
          return a.stop();
      }
    }
  }, Xi);
}
function bs(e, t) {
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          c.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          if (r = c.sent, o = Object(on.Db)(t.type)) {
            c.next = 6;
            break;
          }
          return c.abrupt("return");
        case 6:
          c.next = 8;
          return Object(Tt.f)(_r.f);
        case 8:
          i = c.sent;
          c.next = 11;
          return Object(Tt.f)(_r.u);
        case 11:
          a = c.sent;
          s = null === (n = Object(un.c)(r, o.previewAreaWidgetTitle)) || void 0 === n ? void 0 : n.toString();
          Object(tn.a)("AddWidgetToStage", {
            screenId: e,
            screenName: (null === i || void 0 === i ? void 0 : i.title) || "",
            isCooperation: !!a,
            widgetName: s
          });
        case 14:
        case "end":
          return c.stop();
      }
    }
  }, Qi);
}
function ys(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  return Ct.a.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          r = e.payload;
          o = r.widgetId;
          i = r.templateType;
          a = r.onSuccess;
          s = Object(on.Bb)(o);
          h.next = 4;
          return Object(Tt.f)(_r.g);
        case 4:
          if (l = h.sent, s && l) {
            h.next = 7;
            break;
          }
          return h.abrupt("return");
        case 7:
          if (s.type === cn.x || s.type === cn.A) {
            h.next = 9;
            break;
          }
          return h.abrupt("return");
        case 9:
          u = Object(je.a)(s.widgetIds);
          h.prev = 10;
          u.s();
        case 12:
          if ((d = u.n()).done) {
            h.next = 18;
            break;
          }
          p = d.value;
          h.next = 16;
          return Object(Tt.e)(Object(c.Mf)(p, l, !0));
        case 16:
          h.next = 12;
          break;
        case 18:
          h.next = 23;
          break;
        case 20:
          h.prev = 20;
          h.t0 = h.catch(10);
          u.e(h.t0);
        case 23:
          h.prev = 23;
          u.f();
          return h.finish(23);
        case 26:
          Object(Jt.t)(o);
          h.next = 29;
          return Object(Tt.b)(_s, l, o, i);
        case 29:
          f = h.sent;
          Object(on.Wb)(o, f.widgetIds);
          h.next = 33;
          return Object(Tt.e)(Object(c.Kg)(o, "templateSlotMap", f.templateSlotMap));
        case 33:
          if (!(null === (t = pn.oTHelper.widget) || void 0 === t)) {
            t.clientOp.replaceWidgetAttributeOp(l, o, "widgetIds", f.widgetIds);
          }
          if (!(null === (n = pn.oTHelper.widget) || void 0 === n)) {
            n.clientOp.replaceWidgetAttributeOp(l, o, "templateSlotMap", f.templateSlotMap);
          }
          a();
        case 36:
        case "end":
          return h.stop();
      }
    }
  }, Zi, null, [[10, 20, 23, 26]]);
}
function Es(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  return Ct.a.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          t = e.payload;
          n = t.gridId;
          r = t.deleteColumnIdList;
          m.next = 3;
          return Object(Tt.f)(_r.f);
        case 3:
          if (o = m.sent) {
            m.next = 6;
            break;
          }
          return m.abrupt("return");
        case 6:
          i = o.id;
          a = Object(je.a)(o.widgetIds);
          m.prev = 8;
          a.s();
        case 10:
          if ((s = a.n()).done) {
            m.next = 23;
            break;
          }
          if (l = s.value, (null === (u = Object(on.Bb)(l)) || void 0 === u ? void 0 : u.type) !== cn.x && (null === u || void 0 === u ? void 0 : u.type) !== cn.A || u.attributes.dataSource !== n) {
            m.next = 21;
            break;
          }
          for (f in d = !1, p = u.attributes.templateSlotMap) if (r.includes(p[f].dataBindings)) {
            p[f].dataBindings = "";
            d = !0;
          }
          if (!d) {
            m.next = 21;
            break;
          }
          m.next = 20;
          return Object(Tt.e)(Object(c.Kg)(l, "templateSlotMap", p));
        case 20:
          if (!(null === (h = pn.oTHelper.widget) || void 0 === h)) {
            h.clientOp.replaceWidgetAttributeOp(i, l, "templateSlotMap", p);
          }
        case 21:
          m.next = 10;
          break;
        case 23:
          m.next = 28;
          break;
        case 25:
          m.prev = 25;
          m.t0 = m.catch(8);
          a.e(m.t0);
        case 28:
          m.prev = 28;
          a.f();
          return m.finish(28);
        case 31:
        case "end":
          return m.stop();
      }
    }
  }, Ji, null, [[8, 25, 28, 31]]);
}
function Os() {
  return ws.apply(this, arguments);
}
function ws() {
  return (ws = Object(St.a)(Ct.a.mark(function e() {
    var t;
    var n;
    var r;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!(t = Object(on.Y)().map(function (e) {
              return e.attributes.cloudDbId;
            })).length) {
              e.next = 6;
              break;
            }
            e.next = 4;
            return Object(wn.j)(t);
          case 4:
            if (n = e.sent) {
              r = xl.getState().common.language;
              xl.dispatch(Object(c.mj)({
                type: "error",
                duration: 4e3,
                message: Object(un.c)(r, n).toString()
              }));
            }
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Cs() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          e = a.sent;
          a.next = 5;
          return Object(Tt.b)(function () {
            return Ts(!1);
          });
        case 5:
          t = a.sent;
          a.next = 8;
          return Object(Tt.f)(_r.J);
        case 8:
          if (n = a.sent, t) {
            a.next = 11;
            break;
          }
          return a.abrupt("return");
        case 11:
          if (n) {
            a.next = 15;
            break;
          }
          a.next = 14;
          return Object(Tt.e)(Object(c.Ch)());
        case 14:
          return a.abrupt("return");
        case 15:
          a.prev = 15;
          r = Object(on.cb)();
          a.next = 19;
          return Object(Tt.f)(_r.A);
        case 19:
          o = a.sent;
          a.next = 22;
          return Object(Tt.b)(Qt.l, o, t);
        case 22:
          i = a.sent;
          a.next = 25;
          return Object(Tt.e)(Object(c.Ni)(i.pack_label));
        case 25:
          a.next = 27;
          return Object(Tt.e)(Object(c.Ig)());
        case 27:
          qt(r.map(function (e) {
            return e.attributes.cloudDbId;
          }), 2, 1, Object(hn.a)(e) ? e : void 0);
          a.next = 30;
          return Os();
        case 30:
          a.next = 38;
          break;
        case 32:
          a.prev = 32;
          a.t0 = a.catch(15);
          a.next = 36;
          return Object(Tt.e)(Object(c.Ki)(-1));
        case 36:
          a.next = 38;
          return Object(Tt.b)(Is, a.t0.message);
        case 38:
        case "end":
          return a.stop();
      }
    }
  }, $i, null, [[15, 32]]);
}
function Ts(e, t) {
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  return Ct.a.wrap(function (C) {
    for (;;) {
      switch (C.prev = C.next) {
        case 0:
          C.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          n = C.sent;
          C.next = 5;
          return Object(Tt.f)(_r.s);
        case 5:
          r = C.sent;
          C.next = 8;
          return Object(Tt.f)(_r.C);
        case 8:
          o = C.sent;
          C.next = 11;
          return Object(Tt.f)(_r.m);
        case 11:
          i = C.sent;
          C.next = 14;
          return Object(Tt.f)(_r.k);
        case 14:
          a = C.sent;
          C.next = 17;
          return Object(Tt.f)(_r.l);
        case 17:
          s = C.sent;
          C.next = 20;
          return Object(Tt.f)(_r.n);
        case 20:
          l = C.sent;
          C.next = 23;
          return Object(Tt.f)(_r.f);
        case 23:
          u = C.sent;
          C.next = 26;
          return Object(Tt.f)(_r.v);
        case 26:
          if (d = C.sent, u) {
            C.next = 29;
            break;
          }
          return C.abrupt("return");
        case 29:
          if (Jt.z.updateCurrentWorkspaceData(), p = Jt.z.hasCloudBlock("cloudRoom"), f = Jt.z.hasCloudBlock("cloudStorage"), h = Jt.z.hasCloudBlock("cloudDB"), m = Jt.z.hasCloudBlock("cloudDict"), g = Jt.z.hasCloudBlock("cloudTable"), _ = Object(on.q)(), !(p || h || f || m || g || _)) {
            C.next = 49;
            break;
          }
          if (Object(hn.a)(n)) {
            C.next = 43;
            break;
          }
          C.next = 40;
          return Object(Tt.e)(Object(c.mj)({
            duration: 4e3,
            showPrefixIcon: !1,
            message: Object(un.c)(r, "project.saving").toString()
          }));
        case 40:
          C.next = 42;
          return Object(Tt.b)(Us, Object(c.tg)({
            isUpdate: !1,
            isAutoSave: !0
          }));
        case 42:
          n = C.sent;
        case 43:
          if (d) {
            C.next = 49;
            break;
          }
          C.next = 46;
          return Object(Tt.b)(Vs);
        case 46:
          C.next = 48;
          return Object(Tt.f)(_r.v);
        case 48:
          d = C.sent;
        case 49:
          v = e ? u.id : o.toArray()[0].id;
          C.next = 52;
          return Bs();
        case 52:
          b = C.sent;
          C.next = 55;
          return Fs();
        case 55:
          y = C.sent;
          C.next = 58;
          return Gs();
        case 58:
          E = C.sent;
          (O = Object(Qt.c)(n, Jt.z, o.toArray(), i, a, Object(on.kb)(), b, y, v, d, l, s)).fontFileMap = E;
          O.blockCode = Jt.z.generateAllWorkspaceCodes(O.screenList, t);
          if (void 0 !== (w = Object(Nt.minify)(O.blockCode, {
            keep_fnames: !0
          })).code) {
            O.blockCode = w.code;
          }
          return C.abrupt("return", O);
        case 65:
        case "end":
          return C.stop();
      }
    }
  }, ea);
}
function Ss() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          l.next = 2;
          return Object(Tt.f)(_r.B);
        case 2:
          e = l.sent;
          l.next = 5;
          return Object(Tt.e)(Object(c.Oi)(!0));
        case 5:
          l.next = 7;
          return Object(Tt.e)(Object(c.Ii)(!1));
        case 7:
          l.next = 9;
          return Object(Tt.e)(Object(c.Ki)(0));
        case 9:
          t = 0;
          l.prev = 10;
        case 11:
          if (!(t < 100 && t >= 0 && e)) {
            l.next = 22;
            break;
          }
          l.next = 14;
          return Object(Tt.b)(Qt.a, e);
        case 14:
          n = l.sent;
          t = n.progress;
          l.next = 18;
          return Object(Tt.e)(Object(c.Ki)(t));
        case 18:
          l.next = 20;
          return Object(Tt.c)(1e3);
        case 20:
          l.next = 11;
          break;
        case 22:
          if (-1 !== t) {
            l.next = 27;
            break;
          }
          l.next = 25;
          return Object(Tt.e)(Object(c.Oi)(!1));
        case 25:
          l.next = 27;
          return Object(Tt.b)(Is, "-1");
        case 27:
          if (-2 !== t) {
            l.next = 32;
            break;
          }
          l.next = 30;
          return Object(Tt.e)(Object(c.Oi)(!1));
        case 30:
          l.next = 32;
          return Object(Tt.b)(Is, "取消打包");
        case 32:
          if (100 !== t) {
            l.next = 49;
            break;
          }
          l.next = 35;
          return Object(Tt.b)(Qt.i, e);
        case 35:
          r = l.sent;
          o = r.url;
          i = r.version;
          a = r.expireTime;
          l.next = 41;
          return Object(Tt.e)(Object(c.Oi)(!1, o));
        case 41:
          l.next = 43;
          return Object(Tt.e)(Object(c.Ji)({
            version: i,
            expireTime: a,
            startTimeTamp: Date.now()
          }));
        case 43:
          l.next = 45;
          return Object(Tt.e)(Object(c.Mi)(!0));
        case 45:
          l.next = 47;
          return Object(Tt.e)(Object(c.Li)(!1));
        case 47:
          l.next = 49;
          return Object(Tt.b)(Is);
        case 49:
          l.next = 61;
          break;
        case 51:
          l.prev = 51;
          l.t0 = l.catch(10);
          l.next = 55;
          return Object(Tt.e)(Object(c.Ki)(-1));
        case 55:
          l.next = 57;
          return Object(Tt.e)(Object(c.Oi)(!1));
        case 57:
          s = l.t0;
          console.error(l.t0);
          l.next = 61;
          return Object(Tt.b)(Is, s.message);
        case 61:
        case "end":
          return l.stop();
      }
    }
  }, ta, null, [[10, 51]]);
}
function Is(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          t = a.sent;
          a.next = 5;
          return Object(Tt.f)(_r.F);
        case 5:
          n = a.sent;
          a.next = 8;
          return Object(Tt.f)(_r.A);
        case 8:
          r = a.sent;
          a.next = 11;
          return Object(Tt.f)(_r.w);
        case 11:
          o = a.sent;
          i = r.apkSplash.match(/splash0(\d)\.png/);
          Object(tn.a)("WorkPack", {
            workId: t,
            sourceTag: n.tag,
            sourceId: n.id,
            launchScreenId: i ? i[1] : "0",
            apkName: r.apkName,
            isSuccess: !e,
            failReason: e || "",
            bcmUrl: e ? o : "",
            packLabel: e && r.packLabel ? r.packLabel : ""
          });
        case 14:
        case "end":
          return a.stop();
      }
    }
  }, na);
}
function As(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          t = e.payload.isPlayCurrentScreen;
          f.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          n = f.sent;
          f.next = 6;
          return Object(Tt.e)(Object(c.Sg)());
        case 6:
          f.prev = 6;
          f.next = 9;
          return Object(Tt.b)(function () {
            return Ts(t, !0);
          });
        case 9:
          if (r = f.sent) {
            f.next = 12;
            break;
          }
          return f.abrupt("return");
        case 12:
          if (o = r.widgetMap, i = new Set(), a = new Set(), s = new Set(), l = !0, Object.values(o).forEach(function (e) {
            var t;
            var r = e.type;
            var o = bn.f(r);
            if (r.includes(u.b) && o) {
              var c = o;
              jn.a.forEach(function (e) {
                var t;
                if (null === (t = c.code) || void 0 === t ? void 0 : t.includes(e)) {
                  a.add(e);
                  i.add(o.types.title);
                }
              });
            }
            if (null === o || void 0 === o || null === (t = o.types) || void 0 === t ? void 0 : t.platforms) {
              var d = o.types.platforms.includes("web");
              if (!d) {
                if (Object(vn.q)(r)) {
                  s.add(o.types.title);
                } else {
                  var p = Object(on.Db)(r);
                  if (p) {
                    var f = Object(un.c)(n, p.title);
                    s.add(f);
                  }
                }
                l = d;
              }
            }
          }), !a.size) {
            f.next = 22;
            break;
          }
          f.next = 21;
          return Object(Tt.e)(Object(c.zh)({
            allowText: Object(un.c)(n, "cloudDb.know").toString(),
            title: "error",
            content: Object(un.c)(n, "Play.widgetNotSupportsForbiddenKeywords", {
              widgetTypeNames: Array.from(i).join("、"),
              keywords: Array.from(a).join("、")
            }).toString(),
            cancelBtnVisible: !1
          }));
        case 21:
          return f.abrupt("return");
        case 22:
          if (l) {
            f.next = 25;
            break;
          }
          f.next = 25;
          return Object(Tt.e)(Object(c.mj)({
            type: "info",
            duration: 4e3,
            message: Object(un.c)(n, "Play.widgetNotSupportsWebPlatform", {
              widgetTypeNames: Array.from(s).join("、")
            }).toString()
          }));
        case 25:
          f.next = 27;
          return Object(Tt.f)(_r.y);
        case 27:
          d = f.sent;
          Jt.z.stopWarningAnimation();
          f.next = 31;
          return Object(Tt.b)(Qt.b, d, r);
        case 31:
          f.next = 33;
          return Object(Tt.e)(Object(c.Cj)());
        case 33:
          f.next = 35;
          return Object(Tt.b)(js, o);
        case 35:
          Object(On.b)({
            playing: !0
          });
          f.next = 38;
          return Object(Tt.b)(Ns);
        case 38:
          f.next = 51;
          break;
        case 40:
          if (f.prev = 40, f.t0 = f.catch(6), !(f.t0 instanceof $t.b)) {
            f.next = 48;
            break;
          }
          p = {
            type: "lintError",
            screenId: f.t0.screenId,
            blockId: f.t0.blockId,
            message: Object(un.c)(n, f.t0.message, f.t0.data) + ""
          };
          f.next = 46;
          return Object(Tt.e)(Object(c.nf)(p));
        case 46:
          f.next = 48;
          return Object(Tt.b)(Rs, p);
        case 48:
          console.error(f.t0);
          f.next = 51;
          return Object(Tt.b)(Ns, f.t0.message);
        case 51:
        case "end":
          return f.stop();
      }
    }
  }, ra, null, [[6, 40]]);
}
function js(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  return Ct.a.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          p.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          t = p.sent;
          n = 0;
          r = Object.values(e);
        case 4:
          if (!(n < r.length)) {
            p.next = 19;
            break;
          }
          if ((o = r[n]).type !== cn.E) {
            p.next = 16;
            break;
          }
          if (i = o.attributes, a = i.maxValue, s = i.minValue, l = i.step, a !== s) {
            p.next = 12;
            break;
          }
          u = {
            type: "warning",
            screenId: "",
            blockId: "",
            message: Object(un.c)(t, "slider.maxValueEqualMinValue", {
              title: o.title
            }).toString()
          };
          p.next = 12;
          return Object(Tt.e)(Object(c.nf)(u));
        case 12:
          if (!(l > a - s)) {
            p.next = 16;
            break;
          }
          d = {
            type: "warning",
            screenId: "",
            blockId: "",
            message: Object(un.c)(t, "slider.stepGreaterThanRange", {
              title: o.title
            }).toString()
          };
          p.next = 16;
          return Object(Tt.e)(Object(c.nf)(d));
        case 16:
          n++;
          p.next = 4;
          break;
        case 19:
        case "end":
          return p.stop();
      }
    }
  }, oa);
}
function Ns(e) {
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          t = r.sent;
          r.next = 5;
          return Object(Tt.f)(_r.G);
        case 5:
          n = r.sent;
          Object(tn.a)("WorkRun", {
            workId: t,
            workName: n,
            workType: "APP工匠",
            isSuccess: !e,
            failReason: e || ""
          });
        case 7:
        case "end":
          return r.stop();
      }
    }
  }, ia);
}
function Rs(e) {
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.e);
        case 2:
          t = o.sent;
          n = t.filter(function (e) {
            return "error" === e.get("type");
          }).size + t.filter(function (e) {
            return "customError" === e.get("type");
          }).size;
          r = t.filter(function (e) {
            return "warning" === e.get("type");
          }).size;
          Object(tn.a)("ConsoleDetail", {
            errorCount: n,
            warningCount: r,
            errorMessage: e.message,
            warningMessage: ""
          });
        case 6:
        case "end":
          return o.stop();
      }
    }
  }, aa);
}
function ks(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  return Ct.a.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          h.next = 2;
          return Object(Tt.b)(function () {
            return Ts(!1);
          });
        case 2:
          if (t = h.sent) {
            h.next = 5;
            break;
          }
          throw new Error("can not generate player data");
        case 5:
          h.next = 7;
          return Object(Tt.f)(_r.y);
        case 7:
          n = h.sent;
          h.next = 10;
          return Object(Tt.b)(c.Bf, e.payload.name);
        case 10:
          r = new Blob([JSON.stringify(t)], {
            type: "application/json,charset=utf-8;"
          });
          o = new File([r], "test.json", {
            type: r.type
          });
          h.next = 14;
          return Object(Tt.b)(en.e, o, "JSON");
        case 14:
          i = h.sent;
          a = e.payload;
          s = a.name;
          l = a.description;
          u = a.operation;
          d = a.coverUrl;
          p = {
            name: s,
            description: l || rn.a,
            operation: u || rn.b,
            coverUrl: d,
            workId: n,
            bcmcUrl: i.url,
            playerUrl: Object(fn.E)(n)
          };
          h.next = 19;
          return Object(Tt.b)(Qt.m, p);
        case 19:
          if (200 === (f = h.sent).code) {
            h.next = 22;
            break;
          }
          throw Error("".concat(f.code));
        case 22:
          qt(Object(on.cb)().map(function (e) {
            return e.attributes.cloudDbId;
          }), 2, 1, Object(hn.a)(n) ? n : void 0);
          h.next = 26;
          return Os();
        case 26:
          return h.abrupt("return", n);
        case 27:
        case "end":
          return h.stop();
      }
    }
  }, sa);
}
function xs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          t = f.sent;
          n = Object(hn.a)(t);
          f.next = 6;
          return Object(Tt.b)(Us, Object(c.tg)({
            isUpdate: n,
            isAutoSave: !0
          }));
        case 6:
          r = f.sent;
          o = e.payload.info;
          f.next = 10;
          return Object(Tt.f)(_r.J);
        case 10:
          i = f.sent;
          f.next = 13;
          return Object(Tt.b)(function () {
            return Ts(!1);
          });
        case 13:
          if (s = f.sent) {
            f.next = 16;
            break;
          }
          throw new Error("can not generate player data");
        case 16:
          if (i) {
            f.next = 18;
            break;
          }
          throw new Error("user not login");
        case 18:
          l = new Blob([JSON.stringify(Object(a.a)(Object(a.a)({}, s), {}, {
            userInfo: {
              name: i.nickname,
              avatarUrl: i.avatar_url
            },
            title: o.title,
            description: o.desc,
            coverUrl: o.img
          }))], {
            type: "application/json,charset=utf-8;"
          });
          u = new File([l], "test.json", {
            type: l.type
          });
          f.next = 22;
          return Object(Tt.b)(en.e, u, "JSON");
        case 22:
          d = f.sent;
          qt(Object(on.cb)().map(function (e) {
            return e.attributes.cloudDbId;
          }), 2, 1, Object(hn.a)(r) ? r : void 0);
          f.next = 27;
          return Os();
        case 27:
          f.next = 29;
          return Object(Tt.b)(Qt.n, r, d.url);
        case 29:
          if (200 === (p = f.sent).code) {
            f.next = 32;
            break;
          }
          throw Error("".concat(p.code));
        case 32:
          return f.abrupt("return", r);
        case 33:
        case "end":
          return f.stop();
      }
    }
  }, ca);
}
function Ds(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload.shouldCloneCloud;
          a.next = 3;
          return Object(Tt.f)(_r.f);
        case 3:
          n = a.sent;
          a.next = 6;
          return Object(Tt.f)(_r.G);
        case 6:
          if (r = a.sent, !n) {
            a.next = 13;
            break;
          }
          a.next = 10;
          return Object(Tt.b)(hn.b, t);
        case 10:
          o = a.sent;
          i = new Blob([JSON.stringify(o)], {
            type: "application/json,charset=utf-8;"
          });
          Object(fn.s)(URL.createObjectURL(i), r);
        case 13:
        case "end":
          return a.stop();
      }
    }
  }, la);
}
function Ms() {
  var e;
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.f)(_r.J);
        case 2:
          if (e = t.sent, t.prev = 3, !e) {
            t.next = 7;
            break;
          }
          t.next = 7;
          return Object(Tt.b)(en.c, Object(on.jb)(), function (e) {
            var t;
            if (!(null === (t = pn.oTHelper.imageFileList) || void 0 === t)) {
              t.clientOp.replaceImageFileCdnUrl(e.id, e.cdnUrl);
            }
          });
        case 7:
          t.next = 13;
          break;
        case 9:
          throw t.prev = 9, t.t0 = t.catch(3), t.t0, en.a, t.t0;
        case 13:
        case "end":
          return t.stop();
      }
    }
  }, ua, null, [[3, 9]]);
}
function Ls(e, t) {
  return Ps.apply(this, arguments);
}
function Ps() {
  return (Ps = Object(St.a)(Ct.a.mark(function e(t, n) {
    var r;
    var o;
    return Ct.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!n) {
              e.next = 12;
              break;
            }
            if (!(r = document.getElementById(t.id))) {
              e.next = 12;
              break;
            }
            e.prev = 3;
            e.next = 6;
            return Object(nn.a)(r, 1);
          case 6:
            t.snapshot = e.sent;
            e.next = 12;
            break;
          case 9:
            e.prev = 9;
            e.t0 = e.catch(3);
            console.error("uploadImageDataUrlToCdn htmlToImage error", e.t0);
          case 12:
            if (!t.snapshot.startsWith("http")) {
              e.next = 14;
              break;
            }
            return e.abrupt("return", Promise.resolve());
          case 14:
            e.prev = 14;
            e.next = 17;
            return Object(en.f)(t.snapshot);
          case 17:
            o = e.sent;
            t.snapshot = o;
            e.next = 25;
            break;
          case 21:
            e.prev = 21;
            e.t1 = e.catch(14);
            e.t1;
            en.a;
            console.error("uploadImageDataUrlToCdn error", e.t1);
          case 25:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[3, 9], [14, 21]]);
  }))).apply(this, arguments);
}
function Bs() {
  var e;
  var t;
  var n;
  var r = arguments;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          e = r.length > 0 && void 0 !== r[0] && r[0];
          o.next = 3;
          return Object(Tt.f)(_r.I);
        case 3:
          t = o.sent;
          n = {};
          t.forEach(function (t) {
            n[t.id] = Object(a.a)(Object(a.a)({}, t), {}, {
              cdnUrl: e && t.source || t.cdnUrl
            });
          });
          return o.abrupt("return", n);
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, da);
}
function Fs() {
  var e;
  var t;
  var n;
  var r = arguments;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          e = r.length > 0 && void 0 !== r[0] && r[0];
          o.next = 3;
          return Object(Tt.f)(_r.o);
        case 3:
          t = o.sent;
          n = {};
          t.forEach(function (t) {
            n[t.id] = Object(a.a)(Object(a.a)({}, t), {}, {
              cdnUrl: e && t.source || t.cdnUrl
            });
          });
          return o.abrupt("return", n);
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, pa);
}
function Gs() {
  var e;
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.j);
        case 2:
          e = o.sent;
          t = {};
          o.next = 6;
          return Object(Tt.f)(_r.C);
        case 6:
          n = o.sent;
          r = {};
          e.forEach(function (e) {
            t[e.id] = e;
          });
          n.forEach(function (e) {
            e.widgetIds.forEach(function (e) {
              var n = Object(on.Bb)(e);
              if ((null === n || void 0 === n ? void 0 : n.type) === cn.H || (null === n || void 0 === n ? void 0 : n.type) === cn.z || (null === n || void 0 === n ? void 0 : n.type) === cn.w) {
                var o;
                var i = n.attributes.fontFamily;
                if (!r[i] && (null === (o = t[i]) || void 0 === o ? void 0 : o.cdnUrl)) {
                  r[i] = t[i];
                }
              }
              if (n && n.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === n.type) {
                var a = n.attributes.content;
                var s = void 0 === a ? "" : a;
                Object(An.a)(s).forEach(function (e) {
                  var n;
                  if (!r[e] && (null === (n = t[e]) || void 0 === n ? void 0 : n.cdnUrl)) {
                    r[e] = t[e];
                  }
                });
              }
            });
          });
          return o.abrupt("return", r);
        case 11:
        case "end":
          return o.stop();
      }
    }
  }, fa);
}
function Us(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  var T;
  var S;
  return Ct.a.wrap(function (I) {
    for (;;) {
      switch (I.prev = I.next) {
        case 0:
          t = e.payload;
          n = t.isUpdate;
          r = t.isNeedReport;
          o = t.isAutoSave;
          i = t.isSaveAs;
          I.next = 3;
          return Object(Tt.f)(_r.C);
        case 3:
          a = I.sent;
          I.next = 6;
          return Object(Tt.f)(_r.y);
        case 6:
          s = I.sent;
          l = Math.ceil(10 * Math.random()) + 10;
          I.next = 10;
          return Object(Tt.f)(_r.J);
        case 10:
          u = I.sent;
          I.next = 13;
          return Object(Tt.f)(_r.F);
        case 13:
          d = I.sent;
          p = 20;
          I.next = 17;
          break;
        case 17:
          if (u) {
            I.next = 21;
            break;
          }
          I.next = 20;
          return Object(Tt.e)(Object(c.Ch)());
        case 20:
          return I.abrupt("return");
        case 21:
          [];
          I.next = 24;
          return Object(Tt.b)(li, !0);
        case 24:
          if (!(I.sent.length > 0)) {
            I.next = 27;
            break;
          }
          throw new Error(Hn.a.CLOUD_SPACE_DATA_ERROR);
        case 27:
          I.next = 29;
          return Object(Tt.f)(_r.G);
        case 29:
          if (f = I.sent, !i) {
            I.next = 35;
            break;
          }
          "-副本";
          f += "-副本";
          I.next = 35;
          return Object(Tt.e)(Object(c.Bf)(f));
        case 35:
          I.next = 37;
          return Object(Tt.e)(Object(c.Pi)(l));
        case 37:
          I.next = 39;
          return Object(Tt.e)(Object(c.Si)(!0));
        case 39:
          h = a.map(function (e) {
            return e.toJS();
          }).toJS();
          m = h.map(function (e, t) {
            return Ls(e, 0 === t);
          });
          I.next = 43;
          return Promise.all(m);
        case 43:
          g = h[0];
          _ = g.snapshot;
          v = Object(je.a)(h);
          I.prev = 46;
          v.s();
        case 48:
          if ((b = v.n()).done) {
            I.next = 56;
            break;
          }
          if (y = b.value, !(E = y.snapshot).startsWith("http")) {
            I.next = 54;
            break;
          }
          I.next = 54;
          return Object(Tt.e)(Object(c.Xj)(y.id, E));
        case 54:
          I.next = 48;
          break;
        case 56:
          I.next = 61;
          break;
        case 58:
          I.prev = 58;
          I.t0 = I.catch(46);
          v.e(I.t0);
        case 61:
          I.prev = 61;
          v.f();
          return I.finish(61);
        case 64:
          if (!_.startsWith("http")) {
            _ = "https://creation.codemao.cn/716/appcraft/IMAGE_ssdp_AuDw_1645089354494.png";
          }
          I.next = 67;
          return Object(Tt.b)(hn.b);
        case 67:
          O = I.sent;
          I.next = 70;
          return Object(Tt.b)(Zt.h, JSON.stringify(O));
        case 70:
          w = I.sent;
          I.next = 73;
          return Object(Tt.e)(Object(c.Vj)(w));
        case 73:
          I.next = 75;
          return Object(Tt.e)(Object(c.Pi)(50));
        case 75:
          if (!n) {
            I.next = 106;
            break;
          }
          C = {
            name: f.substring(0, p),
            bcmUrl: w,
            coverUrl: _,
            id: s,
            saveType: o ? W.g.AutoSave : W.g.ByUser
          };
          I.prev = 77;
          I.next = 80;
          return Object(Tt.b)(Zt.g, C);
        case 80:
          if (!r) {
            I.next = 83;
            break;
          }
          I.next = 83;
          return Object(Tt.b)(Ws, !0);
        case 83:
          I.next = 93;
          break;
        case 85:
          I.prev = 85;
          I.t1 = I.catch(77);
          I.next = 89;
          return Object(Tt.e)(Object(c.Si)(!1));
        case 89:
          if (!r) {
            I.next = 92;
            break;
          }
          I.next = 92;
          return Object(Tt.b)(Ws, !1, I.t1.message);
        case 92:
          throw I.t1;
        case 93:
          I.next = 95;
          return Object(Tt.e)(Object(c.Pi)(100));
        case 95:
          I.next = 97;
          return Object(Tt.e)(Object(c.Fi)(!1));
        case 97:
          I.next = 99;
          return Object(Tt.e)(Object(c.Si)(!1));
        case 99:
          I.next = 101;
          return Object(Tt.e)(Object(c.Ei)(Date.now()));
        case 101:
          I.next = 103;
          return Object(Tt.b)(vc, s);
        case 103:
          return I.abrupt("return", s);
        case 106:
          T = {
            name: f.substring(0, p),
            bcmUrl: w,
            coverUrl: _,
            saveType: o ? W.g.AutoSave : W.g.ByUser,
            sourceTag: d.tag
          };
          I.prev = 107;
          I.next = 110;
          return Object(Tt.b)(Zt.f, T);
        case 110:
          if (S = I.sent, !r) {
            I.next = 114;
            break;
          }
          I.next = 114;
          return Object(Tt.b)(Ws, !0);
        case 114:
          I.next = 124;
          break;
        case 116:
          I.prev = 116;
          I.t2 = I.catch(107);
          I.next = 120;
          return Object(Tt.e)(Object(c.Si)(!1));
        case 120:
          if (!r) {
            I.next = 123;
            break;
          }
          I.next = 123;
          return Object(Tt.b)(Ws, !1, I.t2.message);
        case 123:
          throw I.t2;
        case 124:
          if (!S) {
            I.next = 141;
            break;
          }
          I.next = 127;
          return Object(Tt.e)(Object(c.Pi)(100));
        case 127:
          I.next = 129;
          return Object(Tt.e)(Object(c.Fi)(!1));
        case 129:
          I.next = 131;
          return Object(Tt.e)(Object(c.Uh)(S));
        case 131:
          I.next = 133;
          return Object(Tt.e)(Object(c.Ei)(Date.now()));
        case 133:
          I.next = 135;
          return Object(Tt.e)(Object(c.Si)(!1));
        case 135:
          Jt.z.setCurrentProjectId(S);
          I.next = 138;
          return Object(Tt.b)(Vs);
        case 138:
          Object(fn.jb)(S);
          I.next = 141;
          return Object(Tt.b)(vc, S);
        case 141:
          if (!i) {
            I.next = 144;
            break;
          }
          I.next = 144;
          return Object(Tt.e)(Object(Be.n)());
        case 144:
          Object(fn.k)(["courseId", "templateId"]);
          Pn();
          return I.abrupt("return", S);
        case 147:
        case "end":
          return I.stop();
      }
    }
  }, ha, null, [[46, 58, 61, 64], [77, 85], [107, 116]]);
}
function Ws(e, t) {
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          n = i.sent;
          i.next = 5;
          return Object(Tt.f)(_r.G);
        case 5:
          r = i.sent;
          i.next = 8;
          return Object(Tt.f)(_r.F);
        case 8:
          o = i.sent;
          Object(tn.a)("WorkSave", {
            workId: n,
            workName: r,
            workType: "APP工匠",
            sourceTag: o.tag,
            sourceId: o.id,
            isSuccess: e,
            failReason: t || ""
          });
        case 10:
        case "end":
          return i.stop();
      }
    }
  }, ma);
}
function Hs() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.e)(Object(c.Si)(!1));
        case 2:
          e.next = 4;
          return Object(Tt.e)(Object(c.Qi)(!1));
        case 4:
        case "end":
          return e.stop();
      }
    }
  }, ga);
}
function Vs() {
  var e;
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          e = n.sent;
          n.next = 5;
          return Object(Tt.b)(Qt.k, e);
        case 5:
          t = n.sent;
          n.next = 8;
          return Object(Tt.e)(Object(c.Ai)(t));
        case 8:
        case "end":
          return n.stop();
      }
    }
  }, _a);
}
function zs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  return Ct.a.wrap(function (b) {
    for (;;) {
      switch (b.prev = b.next) {
        case 0:
          t = e.payload;
          n = t.key;
          r = t.value;
          o = t.widgetId;
          i = t.shouldUpdatePreviewArea;
          a = void 0 === i || i;
          s = t.shouldUpdateEditArea;
          l = void 0 === s || s;
          u = t.isEmitOT;
          d = void 0 === u || u;
          p = t.isBasePropertyPriority;
          f = void 0 === p || p;
          h = Object(on.Bb)(o);
          b.next = 4;
          return Object(Tt.f)(_r.C);
        case 4:
          if (m = b.sent, g = m.find(function (e) {
            var t;
            return e.widgetIds.includes(o) || (null === (t = e.invisibleWidgetIds) || void 0 === t ? void 0 : t.includes(o));
          }), h && h.type) {
            b.next = 8;
            break;
          }
          return b.abrupt("return");
        case 8:
          if (d && (h.isGlobalWidget ? null === (_ = pn.oTHelper.globalWidget) || void 0 === _ || _.clientOp.replaceWidgetAttributeOp(o, n.toString(), r, f) : g && (null === (v = pn.oTHelper.widget) || void 0 === v || v.clientOp.replaceWidgetAttributeOp(g.id, o, n.toString(), r, f))), !on.o.includes(n) && !(n in h) || !f) {
            b.next = 14;
            break;
          }
          b.next = 12;
          return Object(Tt.b)(Ks, n, r, o);
        case 12:
          b.next = 22;
          break;
        case 14:
          if (!(n in h.attributes)) {
            b.next = 19;
            break;
          }
          b.next = 17;
          return Object(Tt.e)(Object(c.Kg)(o, n, r));
        case 17:
          b.next = 22;
          break;
        case 19:
          console.warn("This property ".concat(n, " maybe is invalid"));
          b.next = 22;
          return Object(Tt.e)(Object(c.Kg)(o, n, r));
        case 22:
          if (!a) {
            b.next = 25;
            break;
          }
          b.next = 25;
          return Object(Tt.e)(Object(c.Uj)());
        case 25:
          if (!l) {
            b.next = 28;
            break;
          }
          b.next = 28;
          return Object(Tt.e)(Object(c.Qj)());
        case 28:
        case "end":
          return b.stop();
      }
    }
  }, va);
}
function Ys(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          if (t = e.payload, n = t.widgetId, r = t.key, o = t.value, Object(on.Vb)(n, r, o), i = xl.getState().project.id, n.includes(cn.G) && "db" === r && xn.a.get(n).then(function (e) {
            if (e) {
              Object(Tt.e)(Object(c.Pj)(n, "value", e));
            } else {
              Object(Tt.e)(Object(c.Pj)(n, "value", o));
            }
          }), !n.includes(cn.B) && !n.includes(cn.y)) {
            f.next = 14;
            break;
          }
          if ("fields" !== r) {
            f.next = 14;
            break;
          }
          if (a = Object(kn.getLocalDocumentObject)(i, n)) {
            f.next = 12;
            break;
          }
          f.next = 10;
          return Object(Tt.e)(Object(c.Pj)(n, "value", o));
        case 10:
          f.next = 14;
          break;
        case 12:
          f.next = 14;
          return Object(Tt.e)(Object(c.Pj)(n, "value", a));
        case 14:
          f.next = 16;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 16:
          if (s = Object(on.Bb)(n)) {
            f.next = 19;
            break;
          }
          return f.abrupt("return");
        case 19:
          if (s.type === cn.B && "fields" === r && Object(Jt.o)(s.id, o), s.type === cn.G && "db" === r && Object(Jt.p)(s.id, o), !s.title) {
            f.next = 23;
            break;
          }
          return f.abrupt("return");
        case 23:
          if (l = Object(on.Db)(s.type)) {
            f.next = 26;
            break;
          }
          return f.abrupt("return");
        case 26:
          if (l.contentTextField === r) {
            u = s.contentTitle;
            if (d = (d = (d = o).replace(W.E, "")).trim()) {
              d = Object(on.C)(n, s.type, d);
            } else {
              p = l.previewAreaWidgetTitle;
              p = Object(un.d)(p);
              d = Object(on.C)(n, s.type, p);
            }
            if (u !== d) {
              s.contentTitle = d;
              Jt.g.updateToolBoxWidgetTitle(n, d);
              Object(Jt.y)(n, d, s.type);
            }
          }
        case 28:
        case "end":
          return f.stop();
      }
    }
  }, ba);
}
function Ks(e, t, n) {
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          if (r = Object(on.Bb)(n)) {
            o.next = 3;
            break;
          }
          return o.abrupt("return");
        case 3:
          o.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          if (on.o.includes(e) || e in r) {
            if (!("size" !== e && "position" !== e)) {
              t = Object(a.a)(Object(a.a)({}, r[e]), t);
            }
            r[e] = t;
          }
        case 6:
        case "end":
          return o.stop();
      }
    }
  }, ya);
}
function qs(e, t) {
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          Jt.g.updateToolBoxWidgetTitle(e, t);
          Object(Jt.x)(e, t);
          n.next = 4;
          return Object(Tt.e)(Object(c.Yj)(e, t));
        case 4:
        case "end":
          return n.stop();
      }
    }
  }, Ea);
}
function Xs(e, t) {
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          i.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          if (n = i.sent, (r = Object(on.Bb)(e)) && r.type === cn.l) {
            i.next = 6;
            break;
          }
          return i.abrupt("return");
        case 6:
          o = r.attributes.cloudDbId;
          i.next = 9;
          return Object(Tt.b)(Gt, o, t, Object(hn.a)(n) ? n : void 0);
        case 9:
        case "end":
          return i.stop();
      }
    }
  }, Oa);
}
function Qs(e, t) {
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          if (n = a.sent, (r = Object(on.Bb)(e)) && r.type === cn.h) {
            a.next = 6;
            break;
          }
          return a.abrupt("return", t);
        case 6:
          o = r.attributes.cloudDbId;
          a.next = 9;
          return Object(Tt.b)(wn.p, o, t, Object(hn.a)(n) ? n : void 0);
        case 9:
          i = a.sent;
          return a.abrupt("return", i || t);
        case 11:
        case "end":
          return a.stop();
      }
    }
  }, wa);
}
function Zs(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  return Ct.a.wrap(function (g) {
    for (;;) {
      switch (g.prev = g.next) {
        case 0:
          if (t = e.payload, n = t.widgetId, r = t.title, o = t.shouldUpdatePreviewArea, i = t.shouldUpdateEditArea, a = t.isEmitOT, s = void 0 === a || a, l = Object(on.Bb)(n)) {
            g.next = 4;
            break;
          }
          return g.abrupt("return");
        case 4:
          g.next = 6;
          return Object(Tt.f)(_r.f);
        case 6:
          u = g.sent;
          d = null === u || void 0 === u ? void 0 : u.id;
          p = l.type;
          g.next = 11;
          return Object(Tt.b)(Xs, n, r);
        case 11:
          g.next = 13;
          return Object(Tt.b)(Qs, n, r);
        case 13:
          f = g.sent;
          Object(on.Xb)(n, f);
          Object(on.Vb)(n, "name", f);
          Jt.g.updateToolBoxWidgetTitle(n, f);
          Object(Jt.y)(n, f, p);
          g.next = 20;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 20:
          if (!o) {
            g.next = 23;
            break;
          }
          g.next = 23;
          return Object(Tt.e)(Object(c.Uj)());
        case 23:
          if (!i) {
            g.next = 26;
            break;
          }
          g.next = 26;
          return Object(Tt.e)(Object(c.Qj)());
        case 26:
          g.next = 28;
          return Object(Tt.e)(Object(c.Pj)(l.id, "name", f));
        case 28:
          if (s) {
            if (l.isGlobalWidget) {
              if (!(null === (h = pn.oTHelper.globalWidget) || void 0 === h)) {
                h.clientOp.replaceWidgetAttributeOp(n, "title", f);
              }
            } else {
              if (d) {
                if (!(null === (m = pn.oTHelper.widget) || void 0 === m)) {
                  m.clientOp.replaceWidgetAttributeOp(d, n, "title", f);
                }
              }
            }
          }
        case 29:
        case "end":
          return g.stop();
      }
    }
  }, Ca);
}
function Js() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  return Ct.a.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          d.prev = 0;
          e = [];
          t = 1;
          n = 100;
          d.next = 6;
          return Object(Tt.b)(yn.c, t, n);
        case 6:
          if (r = d.sent, o = r.list, i = r.total, a = Math.ceil(i / n), e = e.concat(o), !(a > 1)) {
            d.next = 22;
            break;
          }
          t += 1;
        case 13:
          if (!(t <= a)) {
            d.next = 22;
            break;
          }
          d.next = 16;
          return Object(Tt.b)(yn.c, t, n);
        case 16:
          s = d.sent;
          l = s.list;
          e = e.concat(l);
        case 19:
          t++;
          d.next = 13;
          break;
        case 22:
          d.next = 24;
          return Object(Tt.e)(Object(c.Sh)(e));
        case 24:
          d.next = 30;
          break;
        case 26:
          if (d.prev = 26, d.t0 = d.catch(0), 40400100 !== (null === (u = d.t0.response) || void 0 === u ? void 0 : u.data.code)) {
            d.next = 30;
            break;
          }
          return d.abrupt("return");
        case 30:
        case "end":
          return d.stop();
      }
    }
  }, Ta, null, [[0, 26]]);
}
function $s(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.payload;
          n = t.widgetCloneList;
          r = t.screenId;
          i.next = 3;
          return Object(Tt.f)(_r.g);
        case 3:
          if (o = i.sent, r && o !== r) {
            i.next = 9;
            break;
          }
          i.next = 7;
          return Object(Tt.b)(tc, n);
        case 7:
          i.next = 11;
          break;
        case 9:
          i.next = 11;
          return Object(Tt.b)(ec, n, r);
        case 11:
        case "end":
          return i.stop();
      }
    }
  }, Sa);
}
function ec(e, t) {
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          f.next = 2;
          return Object(Tt.f)(_r.C);
        case 2:
          n = f.sent;
          f.next = 5;
          return Object(Tt.f)(_r.J);
        case 5:
          if (r = f.sent, o = n.findIndex(function (e) {
            return e.id === t;
          }), !(i = n.get(o))) {
            f.next = 36;
            break;
          }
          if (!e.length) {
            f.next = 36;
            break;
          }
          s = Object(je.a)(e);
          f.prev = 11;
          s.s();
        case 13:
          if ((l = s.n()).done) {
            f.next = 21;
            break;
          }
          d = l.value;
          if (!(null === (u = pn.oTHelper.widget) || void 0 === u)) {
            u.clientOp.addWidgetOp(t, d);
          }
          f.next = 18;
          return Object(Tt.e)(Object(c.jf)(i.id, d.id));
        case 18:
          if (!d.parentId) {
            Object(yn.a)(d.type, null === r || void 0 === r ? void 0 : r.id);
          }
        case 19:
          f.next = 13;
          break;
        case 21:
          f.next = 26;
          break;
        case 23:
          f.prev = 23;
          f.t0 = f.catch(11);
          s.e(f.t0);
        case 26:
          f.prev = 26;
          s.f();
          return f.finish(26);
        case 29:
          f.next = 31;
          return Object(Tt.b)(Xa, Object(c.vg)(o));
        case 31:
          p = null === (a = e[0]) || void 0 === a ? void 0 : a.id;
          f.next = 34;
          return Object(Tt.e)(Object(c.ug)(p));
        case 34:
          f.next = 36;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 36:
        case "end":
          return f.stop();
      }
    }
  }, Ia, null, [[11, 23, 26, 29]]);
}
function tc(e) {
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  return Ct.a.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          _.next = 2;
          return Object(Tt.f)(_r.x);
        case 2:
          t = _.sent;
          _.next = 5;
          return Object(Tt.f)(_r.C);
        case 5:
          n = _.sent;
          _.next = 8;
          return Object(Tt.f)(_r.J);
        case 8:
          if (r = _.sent, o = n.get(t), !e.length || !o) {
            _.next = 50;
            break;
          }
          s = o.get("id");
          l = Object(je.a)(e);
          _.prev = 13;
          l.s();
        case 15:
          if ((u = l.n()).done) {
            _.next = 37;
            break;
          }
          if (!(p = u.value).parentId) {
            _.next = 29;
            break;
          }
          if (p.position.x += 20, p.position.y -= 20, p.type !== cn.a && p.type !== cn.c) {
            _.next = 27;
            break;
          }
          if (!(f = Object(on.Bb)(p.parentId))) {
            _.next = 27;
            break;
          }
          m = (h = f).widgetIds.includes(p.id) ? Object(i.a)(h.widgetIds) : [].concat(Object(i.a)(h.widgetIds), [p.id]);
          _.next = 27;
          return Object(Tt.e)(Object(c.Lg)(p.parentId, "widgetIds", m, !0, !0, !0, !0));
        case 27:
          _.next = 31;
          break;
        case 29:
          p.position.x += 10;
          p.position.y += 10;
        case 31:
          if (!(null === (d = pn.oTHelper.widget) || void 0 === d)) {
            d.clientOp.addWidgetOp(s, p);
          }
          _.next = 34;
          return Object(Tt.e)(Object(c.jf)(s, p.id));
        case 34:
          if (!p.parentId) {
            Object(yn.a)(p.type, null === r || void 0 === r ? void 0 : r.id);
          }
        case 35:
          _.next = 15;
          break;
        case 37:
          _.next = 42;
          break;
        case 39:
          _.prev = 39;
          _.t0 = _.catch(13);
          l.e(_.t0);
        case 42:
          _.prev = 42;
          l.f();
          return _.finish(42);
        case 45:
          g = null === (a = e[0]) || void 0 === a ? void 0 : a.id;
          _.next = 48;
          return Object(Tt.e)(Object(c.ug)(g));
        case 48:
          _.next = 50;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 50:
        case "end":
          return _.stop();
      }
    }
  }, Aa, null, [[13, 39, 42, 45]]);
}
function nc(e) {
  var t;
  var n;
  var r;
  var o;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  return Ct.a.wrap(function (E) {
    for (;;) {
      switch (E.prev = E.next) {
        case 0:
          t = e.payload;
          n = t.widgetId;
          r = t.position;
          o = cn.c;
          s = Object(on.Db)(o);
          E.next = 5;
          return Object(Tt.f)(_r.s);
        case 5:
          l = E.sent;
          E.next = 8;
          return Object(Tt.f)(_r.x);
        case 8:
          u = E.sent;
          E.next = 11;
          return Object(Tt.f)(_r.C);
        case 11:
          if (d = E.sent, (p = u > -1 ? d.get(u) : void 0) && s) {
            E.next = 15;
            break;
          }
          return E.abrupt("return");
        case 15:
          E.next = 17;
          return Object(Tt.f)(_r.J);
        case 17:
          if (f = E.sent, h = s.widget.attributes, m = s.widget.isGlobalWidget, g = s.title ? Object(on.D)(o, p.widgetIds, Object(un.c)(l, s.title).toString()) : "", _ = Object(ln.a)(o), v = {
            id: _,
            title: g,
            type: cn.c,
            position: r,
            visible: !0,
            size: s.widget.size,
            parentId: n,
            animationRecord: {},
            attributes: Object(a.a)({}, h),
            isGlobalWidget: m
          }, Object(on.Ub)(_, v), !(b = Object(on.Bb)(n))) {
            E.next = 39;
            break;
          }
          b.widgetIds.push(_);
          E.next = 29;
          return Object(Tt.e)(Object(c.Uj)());
        case 29:
          E.next = 31;
          return Object(Tt.e)(Object(c.Qj)());
        case 31:
          E.next = 33;
          return Object(Tt.e)(Object(c.jf)(p.id, v.id));
        case 33:
          E.next = 35;
          return Object(Tt.e)(Object(c.ug)(v.id));
        case 35:
          E.next = 37;
          return Object(Tt.b)(bs, p.id, v);
        case 37:
          if (!(null === (y = pn.oTHelper.widget) || void 0 === y)) {
            y.clientOp.addBrushAndActorWidgetOp(p.id, v, b.id, Object(i.a)(b.widgetIds));
          }
          Object(yn.a)(v.type, null === f || void 0 === f ? void 0 : f.id);
        case 39:
        case "end":
          return E.stop();
      }
    }
  }, ja);
}
function rc(e) {
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  return Ct.a.wrap(function (E) {
    for (;;) {
      switch (E.prev = E.next) {
        case 0:
          t = e.payload;
          n = t.widgetId;
          r = t.position;
          o = n;
          a = cn.a;
          s = Object(on.Db)(a);
          E.next = 6;
          return Object(Tt.f)(_r.s);
        case 6:
          l = E.sent;
          E.next = 9;
          return Object(Tt.f)(_r.x);
        case 9:
          u = E.sent;
          E.next = 12;
          return Object(Tt.f)(_r.C);
        case 12:
          if (d = E.sent, p = u > -1 ? d.get(u) : void 0) {
            E.next = 16;
            break;
          }
          return E.abrupt("return");
        case 16:
          if (s) {
            E.next = 18;
            break;
          }
          return E.abrupt("return");
        case 18:
          E.next = 20;
          return Object(Tt.f)(_r.J);
        case 20:
          if (f = E.sent, h = Object(G.cloneDeep)(s.widget.attributes), m = s.widget.isGlobalWidget, h.actionList.push({
            id: Object(ln.a)(Nn.a),
            name: Object(un.c)(l, "ActorStyleDialog.defaultActionName").toString(),
            styleList: [],
            interval: 200
          }), g = s.title ? Object(on.D)(a, p.widgetIds, Object(un.c)(l, s.title).toString()) : "", _ = Object(ln.a)(a), v = {
            id: _,
            title: g,
            type: cn.a,
            position: r,
            visible: !0,
            parentId: o,
            animationRecord: {},
            size: {
              width: 0,
              height: 0
            },
            attributes: h,
            isGlobalWidget: m
          }, Object(on.Ub)(_, v), !(b = Object(on.Bb)(o))) {
            E.next = 43;
            break;
          }
          b.widgetIds.push(_);
          E.next = 33;
          return Object(Tt.e)(Object(c.Uj)());
        case 33:
          E.next = 35;
          return Object(Tt.e)(Object(c.Qj)());
        case 35:
          E.next = 37;
          return Object(Tt.e)(Object(c.jf)(p.id, v.id));
        case 37:
          E.next = 39;
          return Object(Tt.e)(Object(c.ug)(v.id));
        case 39:
          E.next = 41;
          return Object(Tt.b)(bs, p.id, v);
        case 41:
          if (!(null === (y = pn.oTHelper.widget) || void 0 === y)) {
            y.clientOp.addBrushAndActorWidgetOp(p.id, v, b.id, Object(i.a)(b.widgetIds));
          }
          Object(yn.a)(v.type, null === f || void 0 === f ? void 0 : f.id);
        case 43:
        case "end":
          return E.stop();
      }
    }
  }, Na);
}
function oc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.screenId;
          r = t.blockId;
          l.next = 3;
          return Object(Tt.f)(_r.s);
        case 3:
          o = l.sent;
          l.next = 6;
          return Object(Tt.f)(_r.f);
        case 6:
          i = l.sent;
          l.next = 9;
          return Object(Tt.f)(_r.C);
        case 9:
          if (a = l.sent, s = a.findIndex(function (e) {
            return e.id === n;
          }), (null === i || void 0 === i ? void 0 : i.id) !== n) {
            l.next = 16;
            break;
          }
          l.next = 14;
          return Object(Tt.b)(Jt.z.playWarningAnimation, r);
        case 14:
          l.next = 19;
          break;
        case 16:
          if (!(s > -1)) {
            l.next = 19;
            break;
          }
          l.next = 19;
          return Object(Tt.b)(Xa, Object(c.vg)(s));
        case 19:
          if (!Jt.z.getBlockById(r)) {
            l.next = 25;
            break;
          }
          l.next = 23;
          return Object(Tt.b)(Jt.z.playWarningAnimation, r);
        case 23:
          l.next = 27;
          break;
        case 25:
          l.next = 27;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(o, "theBlockHasBeRemoved").toString(),
            showCloseIcon: !1,
            showPrefixIcon: !1,
            type: "error"
          }));
        case 27:
        case "end":
          return l.stop();
      }
    }
  }, Ra);
}
function ic(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload.screenIds;
          l.next = 3;
          return Object(Tt.f)(_r.C);
        case 3:
          n = l.sent;
          r = n.map(function (e) {
            return e.id;
          }).toJSON();
          l.next = 7;
          return Object(Tt.f)(_r.f);
        case 7:
          if (o = l.sent, Object(G.isEqual)(r, t)) {
            l.next = 16;
            break;
          }
          i = [];
          t.forEach(function (e) {
            var t = n.find(function (t) {
              return t.id === e;
            });
            if (t) {
              i.push(t);
            }
          });
          l.next = 13;
          return Object(Tt.e)(Object(c.Aj)(s.a.List(i)));
        case 13:
          a = t.indexOf(o.id);
          l.next = 16;
          return Object(Tt.e)(Object(c.Bi)(a));
        case 16:
        case "end":
          return l.stop();
      }
    }
  }, ka);
}
function ac(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          if (t = e.payload, n = t.screenId, r = t.key, o = t.value, i = t.isEmitOT, a = void 0 === i || i, "title" !== r || "string" !== typeof o) {
            l.next = 7;
            break;
          }
          l.next = 4;
          return Object(Tt.b)(qs, n, o);
        case 4:
          Object(Jt.y)(n, o, "SCREEN");
          l.next = 9;
          break;
        case 7:
          l.next = 9;
          return Object(Tt.e)(Object(c.Wj)(n, r, o));
        case 9:
          l.next = 11;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 11:
          if (a) {
            if (!(null === (s = pn.oTHelper.screen) || void 0 === s)) {
              s.clientOp.updateScreenStyle(n, r, o);
            }
          }
        case 12:
        case "end":
          return l.stop();
      }
    }
  }, xa);
}
function sc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  return Ct.a.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          t = e.payload;
          n = t.isEmitOT;
          r = void 0 === n || n;
          o = t.widgetId;
          u.next = 3;
          return Object(Tt.f)(_r.f);
        case 3:
          i = u.sent;
          u.next = 6;
          return Object(Tt.f)(_r.i);
        case 6:
          a = u.sent;
          u.next = 9;
          return Object(Tt.e)(Object(c.Xh)(o));
        case 9:
          if (a) {
            setTimeout(function () {
              return Jt.g.setSelectedItemByWidgetId(o || i.id);
            }, 10);
          }
          if (r) {
            if (!(null === (s = pn.oTHelper.customEvent) || void 0 === s || null === (l = s.emit) || void 0 === l)) {
              l.focusItem("widget", o);
            }
          }
        case 11:
        case "end":
          return u.stop();
      }
    }
  }, Da);
}
function cc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          t = e.payload;
          n = t.title;
          r = t.isEmitOT;
          o = void 0 === r || r;
          a.next = 3;
          return Object(Tt.e)(Object(c.Qg)(n));
        case 3:
          a.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          if (o) {
            if (!(null === (i = pn.oTHelper.projectOt) || void 0 === i)) {
              i.clientOp.changeProjectProperty("title", n);
            }
          }
        case 6:
        case "end":
          return a.stop();
      }
    }
  }, Ma);
}
function lc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  return Ct.a.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          t = e.payload;
          n = t.screenId;
          r = t.widgetId;
          o = t.widgetIds;
          i = t.isEmitOT;
          a = void 0 === i || i;
          if (s = Object(on.Bb)(r)) {
            s.widgetIds = o;
          }
          u.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          u.next = 7;
          return Object(Tt.e)(Object(c.Uj)());
        case 7:
          u.next = 9;
          return Object(Tt.e)(Object(c.Qj)());
        case 9:
          if (a) {
            if (!(null === (l = pn.oTHelper.widget) || void 0 === l)) {
              l.clientOp.replaceWidgetAttributeOp(n, r, "widgetIds", o);
            }
          }
        case 10:
        case "end":
          return u.stop();
      }
    }
  }, La);
}
function uc() {
  var e;
  var t;
  var n;
  var r;
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          e = o.sent;
          o.next = 5;
          return Object(Tt.f)(_r.G);
        case 5:
          t = o.sent;
          o.next = 8;
          return Object(Tt.b)(Qt.e, e);
        case 8:
          if (!(n = o.sent) || !n.pack_label) {
            o.next = 14;
            break;
          }
          o.next = 12;
          return Object(Tt.e)(Object(c.Ji)({
            apkIcon: n.apk_icon,
            apkName: n.apk_name,
            packLabel: n.pack_label,
            apkSplash: n.app_splash || ""
          }));
        case 12:
          o.next = 16;
          break;
        case 14:
          o.next = 16;
          return Object(Tt.e)(Object(c.Ji)({
            apkName: t
          }));
        case 16:
          if (!(Object(on.Y)().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide"))) {
            o.next = 23;
            break;
          }
          r = function () {
            return xl.dispatch(Object(c.Ii)(!0));
          };
          o.next = 21;
          return Object(Tt.e)(Object(c.kj)(!0, "pack", r));
        case 21:
          o.next = 25;
          break;
        case 23:
          o.next = 25;
          return Object(Tt.e)(Object(c.Ii)(!0));
        case 25:
        case "end":
          return o.stop();
      }
    }
  }, Pa);
}
function dc() {
  var e;
  var t;
  var n;
  return Ct.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2;
          return Object(Tt.f)(_r.B);
        case 2:
          e = r.sent;
          r.next = 5;
          return Object(Tt.b)(Qt.d, e);
        case 5:
          r.next = 7;
          return Object(Tt.e)(Object(c.Li)(!1));
        case 7:
          r.next = 9;
          return Object(Tt.f)(_r.y);
        case 9:
          t = r.sent;
          r.next = 12;
          return Object(Tt.f)(_r.A);
        case 12:
          n = r.sent;
          Object(tn.a)("CancelWorkPack", {
            workId: t,
            apkName: n.apkName
          });
        case 14:
        case "end":
          return r.stop();
      }
    }
  }, Ba);
}
function pc() {
  var e;
  return Ct.a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          e = t.sent;
          t.next = 5;
          return Object(Tt.e)(Object(c.zh)({
            onConfirm: function () {
              xl.dispatch(Object(c.Ch)());
            },
            allowText: Object(un.c)(e, "cloudDbUserLogin").toString(),
            cancelText: Object(un.c)(e, "cloudDbUserCancelLogin").toString(),
            title: Object(un.c)(e, "cloudDbUserNotLoginTitle").toString(),
            content: Object(un.c)(e, "cloudDbUserNotLoginDescription").toString()
          }));
        case 5:
        case "end":
          return t.stop();
      }
    }
  }, Fa);
}
function fc() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v;
  var b;
  var y;
  var E;
  var O;
  var w;
  var C;
  var T;
  var S;
  var I;
  var A;
  var j;
  var N;
  var R;
  return Ct.a.wrap(function (k) {
    for (;;) {
      switch (k.prev = k.next) {
        case 0:
          k.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          e = k.sent;
          t = Object(on.cb)();
          n = [];
          k.prev = 5;
          k.next = 8;
          return Object(Tt.b)(Lt, Object(hn.a)(e) ? e : void 0);
        case 8:
          n = k.sent;
          k.next = 17;
          break;
        case 11:
          if (k.prev = 11, k.t0 = k.catch(5), !(40400100 === (null === (r = k.t0.response) || void 0 === r ? void 0 : r.data.code) && t.length > 0)) {
            k.next = 16;
            break;
          }
          k.next = 16;
          return Object(Tt.b)(pc);
        case 16:
          return k.abrupt("return");
        case 17:
          o = !1;
          a = [];
          s = [];
          l = t.filter(function (e) {
            return !n.some(function (t) {
              return t.id === e.attributes.cloudDbId;
            });
          });
          u = Object(je.a)(n);
          k.prev = 22;
          u.s();
        case 24:
          if ((d = u.n()).done) {
            k.next = 31;
            break;
          }
          p = d.value;
          k.next = 28;
          return Object(Tt.b)(gc, p.id);
        case 28:
          p.fields = k.sent;
        case 29:
          k.next = 24;
          break;
        case 31:
          k.next = 36;
          break;
        case 33:
          k.prev = 33;
          k.t1 = k.catch(22);
          u.e(k.t1);
        case 36:
          k.prev = 36;
          u.f();
          return k.finish(36);
        case 39:
          n.reverse().forEach(function (e) {
            var t = Object(on.cb)().find(function (t) {
              return t.attributes.cloudDbId === e.id;
            });
            if (t) {
              Object(on.Vb)(t.id, "fields", e.fields);
              a.push(t);
            } else {
              s.push(e);
            }
          });
          f = 0;
          h = s;
        case 41:
          if (!(f < h.length)) {
            k.next = 56;
            break;
          }
          m = h[f];
          k.next = 45;
          return Object(Tt.b)(ps, cn.l, {
            x: 0,
            y: 0
          });
        case 45:
          if (!(g = k.sent)) {
            k.next = 53;
            break;
          }
          g.title = m.name;
          g.attributes.cloudDbId = m.id;
          g.attributes.fields = m.fields;
          a.push(g);
          k.next = 53;
          return Object(Tt.b)(hs, g);
        case 53:
          f++;
          k.next = 41;
          break;
        case 56:
          if (!(l.length + a.length <= sn.f)) {
            k.next = 83;
            break;
          }
          _ = a.map(function (e) {
            return e.title;
          });
          v = Object(je.a)(l);
          k.prev = 59;
          v.s();
        case 61:
          if ((b = v.n()).done) {
            k.next = 73;
            break;
          }
          y = b.value;
          if (_.includes(y.title)) {
            o = !0;
            y.title = Object(on.ac)(y.title, _);
            _.push(y.title);
          }
          k.next = 66;
          return Object(Tt.b)(Bt, y.title);
        case 66:
          E = k.sent;
          y.attributes.cloudDbId = E;
          k.next = 70;
          return Object(Tt.b)(Yt, E, {
            addItems: Object(i.a)(y.attributes.fields),
            editItems: [],
            deleteItems: []
          }, Object(hn.a)(e) ? e : void 0);
        case 70:
          qt([E], 2, 0, Object(hn.a)(e) ? e : void 0);
        case 71:
          k.next = 61;
          break;
        case 73:
          k.next = 78;
          break;
        case 75:
          k.prev = 75;
          k.t2 = k.catch(59);
          v.e(k.t2);
        case 78:
          k.prev = 78;
          v.f();
          return k.finish(78);
        case 81:
          k.next = 106;
          break;
        case 83:
          O = Object(je.a)(l);
          k.prev = 84;
          O.s();
        case 86:
          if ((w = O.n()).done) {
            k.next = 95;
            break;
          }
          C = w.value;
          T = C.type;
          S = C.id;
          Object(Jt.q)(T, S);
          Object(on.F)(C.id);
          k.next = 93;
          return Object(Tt.e)(Object(c.Lh)(S));
        case 93:
          k.next = 86;
          break;
        case 95:
          k.next = 100;
          break;
        case 97:
          k.prev = 97;
          k.t3 = k.catch(84);
          O.e(k.t3);
        case 100:
          k.prev = 100;
          O.f();
          return k.finish(100);
        case 103:
          I = Object(un.d)("cloudDbCountOverflowTitle");
          A = Object(un.d)("cloudDbCountOverflowDescription", {
            workDbCount: l.length.toString(),
            selfDbCount: a.length.toString(),
            maxCount: sn.f.toString()
          });
          jt.a.info({
            title: I,
            icon: null,
            centered: !0,
            content: A,
            okText: "确认",
            width: 480,
            okButtonProps: {
              shape: "circle"
            }
          });
        case 106:
          if (o) {
            j = Object(un.d)("cloudDbNameConflictTitle");
            N = Object(un.d)("cloudDbNameConflictDescription");
            jt.a.info({
              title: j,
              icon: null,
              centered: !0,
              content: N,
              okText: "确认",
              width: 480,
              okButtonProps: {
                shape: "circle"
              }
            });
          }
          k.next = 109;
          return Object(Tt.e)(Object(c.Qj)());
        case 109:
          k.next = 111;
          return Object(Tt.f)(_r.n);
        case 111:
          R = k.sent;
          Jt.g.updateGlobalWidget(R);
        case 113:
        case "end":
          return k.stop();
      }
    }
  }, Ga, null, [[5, 11], [22, 33, 36, 39], [59, 75, 78, 81], [84, 97, 100, 103]]);
}
function hc() {
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  return Ct.a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          a.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          e = a.sent;
          t = Object(on.Y)();
          a.next = 6;
          return Object(Tt.f)(_r.J);
        case 6:
          n = a.sent;
          a.next = 9;
          return Object(Tt.f)(_r.K);
        case 9:
          if (a.sent) {
            a.next = 12;
            break;
          }
          return a.abrupt("return");
        case 12:
          a.next = 14;
          return Object(Tt.b)(di);
        case 14:
          if (0 !== t.length) {
            a.next = 16;
            break;
          }
          return a.abrupt("return");
        case 16:
          if (n) {
            a.next = 23;
            break;
          }
          t.forEach(function (e) {
            Object(on.F)(e.id);
          });
          a.next = 20;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(e, "cloudDb.noLoginError").toString(),
            type: "info"
          }));
        case 20:
          a.next = 22;
          return Object(Tt.e)(Object(c.Ch)());
        case 22:
          return a.abrupt("return");
        case 23:
          a.next = 25;
          return Object(Tt.b)(wn.g, "dev");
        case 25:
          if (r = a.sent) {
            a.next = 28;
            break;
          }
          return a.abrupt("return");
        case 28:
          if (o = !1, i = !1, t.forEach(function (e) {
            var t = e.attributes.cloudDbId;
            var n = e.id;
            var a = r.find(function (e) {
              return e.id === t;
            });
            if (a) {
              if (e.title !== a.name) {
                i = !0;
                var s = a.name;
                Object(on.Xb)(n, s);
                Jt.g.updateToolBoxWidgetTitle(n, s);
                Object(Jt.y)(e.id, s, "CLOUD_DB");
                Object(on.Vb)(n, "name", s);
                xl.dispatch(Object(c.Uj)());
                xl.dispatch(Object(c.Qj)());
              }
              if (e.attributes.primaryKey !== a.primary_column) {
                i = !0;
                Object(on.Vb)(n, "primaryKey", a.primary_column);
              }
              if (JSON.stringify(e.attributes.columns) !== JSON.stringify(a.columns)) {
                i = !0;
                xl.dispatch(Object(c.zg)(t, a.columns));
              }
            } else {
              o = !0;
              Object(on.F)(n);
              Object(Jt.q)("CLOUD_DB", n);
            }
          }), !o) {
            a.next = 36;
            break;
          }
          a.next = 34;
          return Object(Tt.e)(Object(c.zh)({
            allowText: Object(un.c)(e, "cloudDb.know").toString(),
            title: Object(un.c)(e, "cloudDb.dataRemoveTitle").toString(),
            content: Object(un.c)(e, "cloudDb.dataRemoveContent").toString(),
            cancelBtnVisible: !1
          }));
        case 34:
          a.next = 39;
          break;
        case 36:
          if (!i) {
            a.next = 39;
            break;
          }
          a.next = 39;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(e, "cloudDb.dataChangeNotice").toString(),
            type: "error"
          }));
        case 39:
          a.next = 41;
          return Object(Tt.e)(Object(c.Qj)());
        case 41:
        case "end":
          return a.stop();
      }
    }
  }, Ua);
}
function mc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  var f;
  var h;
  return Ct.a.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          if (t = e.payload, n = t.fields, r = t.setBlockValue, o = t.widgetId, (i = Object(on.Bb)(o)) && i.type === cn.l) {
            m.next = 4;
            break;
          }
          return m.abrupt("return");
        case 4:
          a = i.attributes.cloudDbId;
          s = i.attributes.fields;
          l = [];
          u = [];
          d = [];
          m.next = 11;
          return Object(Tt.f)(_r.y);
        case 11:
          if (p = m.sent, f = n.length !== s.length, n.forEach(function (e) {
            var t = !0;
            s.forEach(function (n) {
              if (n.id === e.id) {
                if (!Object(G.isEqual)(e, n)) {
                  f = !0;
                  u.push(e);
                }
                t = !1;
              }
            });
            if (t) {
              f = !0;
              l.push({
                key: e.key,
                value: e.value,
                type: e.type
              });
            }
          }), s.forEach(function (e) {
            if (!n.some(function (t) {
              return t.id === e.id;
            })) {
              d.push(e.id);
              f = !0;
            }
          }), !f) {
            m.next = 26;
            break;
          }
          m.next = 18;
          return Object(Tt.b)(Yt, a, {
            addItems: l,
            editItems: u,
            deleteItems: d
          }, Object(hn.a)(p) ? p : void 0);
        case 18:
          if ((h = m.sent).addItems) {
            h.addItems.forEach(function (e) {
              e.id = e.id + "";
              n.forEach(function (t) {
                if (e.key === t.key) {
                  t.id = e.id;
                }
              });
            });
          }
          m.next = 22;
          return Object(Tt.b)(zs, Object(c.Lg)(o, "fields", n, !1, !0));
        case 22:
          if (r && 1 === h.addItems.length) {
            r(h.addItems[0].key);
          }
          u.forEach(function (e) {
            var t = s.find(function (t) {
              return t.id === e.id;
            });
            if (t) {
              Object(Jt.n)(o, t.key, e.key);
            }
          });
          if (h.deleteItems) {
            h.deleteItems.forEach(function (e) {
              var t = s.find(function (t) {
                return t.id === e.toString();
              });
              if (t) {
                Object(Jt.n)(o, t.key, "");
              }
            });
          }
          qt([a], 2, 0, Object(hn.a)(p) ? p : void 0);
        case 26:
        case "end":
          return m.stop();
      }
    }
  }, Wa);
}
function gc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          c.next = 2;
          return Object(Tt.f)(_r.y);
        case 2:
          t = c.sent;
          n = [];
          r = 1;
          o = 500;
          c.next = 8;
          return Object(Tt.b)(Vt, e, r, o, Object(hn.a)(t) ? t : void 0);
        case 8:
          if (i = c.sent, n = n.concat(i.items), !((a = Math.ceil(i.total / o)) > 1)) {
            c.next = 21;
            break;
          }
          r += 1;
        case 13:
          if (!(r <= a)) {
            c.next = 21;
            break;
          }
          c.next = 16;
          return Object(Tt.b)(Vt, e, r, o, Object(hn.a)(t) ? t : void 0);
        case 16:
          s = c.sent;
          n = n.concat(s.items);
        case 18:
          r++;
          c.next = 13;
          break;
        case 21:
          return c.abrupt("return", n);
        case 22:
        case "end":
          return c.stop();
      }
    }
  }, Ha);
}
function _c(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          s.next = 2;
          return Object(Tt.f)(function (e) {
            return e.oTState.collWorkId;
          });
        case 2:
          t = s.sent;
          n = e.payload.archiveId;
          s.next = 6;
          return Object(Tt.e)(Object(c.si)(""));
        case 6:
          if (!n) {
            s.next = 33;
            break;
          }
          s.next = 9;
          return Object(Tt.b)(Zt.e, n);
        case 9:
          if (r = s.sent, !(o = r.content)) {
            s.next = 32;
            break;
          }
          s.next = 14;
          return Object(Tt.e)(Object(c.bg)());
        case 14:
          s.next = 16;
          return Object(Tt.e)(Object(c.cg)());
        case 16:
          s.next = 18;
          return Object(Tt.b)(rs, o);
        case 18:
          s.next = 20;
          return Object(Tt.e)(Object(c.dg)());
        case 20:
          s.next = 22;
          return Object(Tt.e)(Object(c.Ei)(void 0));
        case 22:
          s.next = 24;
          return Object(Tt.e)(Object(c.Fi)(!1));
        case 24:
          s.next = 26;
          return Object(Tt.e)(Object(c.tj)(!1));
        case 26:
          s.next = 28;
          return Object(Tt.f)(_r.s);
        case 28:
          i = s.sent;
          s.next = 31;
          return Object(Tt.e)(Object(c.mj)({
            message: Object(un.c)(i, "History.revertSuccess").toString(),
            type: "success"
          }));
        case 31:
          if (t) {
            if (!(null === (a = dn.a.client) || void 0 === a)) {
              a.forceSetDoc();
            }
          }
        case 32:
          Gn();
        case 33:
        case "end":
          return s.stop();
      }
    }
  }, Va);
}
function vc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  return Ct.a.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          Pn();
          t = Object(on.Y)();
          n = t.map(function (e) {
            return e.attributes.cloudDbId;
          });
          s.next = 5;
          return Object(Tt.b)(on.R);
        case 5:
          r = s.sent;
          s.next = 8;
          return Object(Tt.b)(on.sb);
        case 8:
          o = s.sent;
          s.next = 11;
          return Object(Tt.b)(on.S);
        case 11:
          i = s.sent;
          s.next = 14;
          return Object(Tt.b)(on.tb);
        case 14:
          if (a = s.sent, !(t.length > 0)) {
            s.next = 18;
            break;
          }
          s.next = 18;
          return Object(Tt.b)(wn.a, n, e);
        case 18:
          if (s.prev = 18, !(r.length > 0)) {
            s.next = 24;
            break;
          }
          s.next = 22;
          return Object(Tt.b)(Wn.d, e, r);
        case 22:
          s.next = 24;
          return Object(Tt.e)(Object(c.lf)(r));
        case 24:
          s.next = 29;
          break;
        case 26:
          s.prev = 26;
          s.t0 = s.catch(18);
          console.error(s.t0);
        case 29:
          if (s.prev = 29, !(o.length > 0)) {
            s.next = 35;
            break;
          }
          s.next = 33;
          return Object(Tt.b)(Wn.v, e, o);
        case 33:
          s.next = 35;
          return Object(Tt.e)(Object(c.Ih)(o));
        case 35:
          s.next = 40;
          break;
        case 37:
          s.prev = 37;
          s.t1 = s.catch(29);
          console.error(s.t1);
        case 40:
          if (s.prev = 40, !(i.length > 0)) {
            s.next = 46;
            break;
          }
          s.next = 44;
          return Object(Tt.b)(Wn.e, e, i);
        case 44:
          s.next = 46;
          return Object(Tt.e)(Object(c.mf)(i));
        case 46:
          s.next = 51;
          break;
        case 48:
          s.prev = 48;
          s.t2 = s.catch(40);
          console.error(s.t2);
        case 51:
          if (s.prev = 51, !(a.length > 0)) {
            s.next = 57;
            break;
          }
          s.next = 55;
          return Object(Tt.b)(Wn.w, e, a);
        case 55:
          s.next = 57;
          return Object(Tt.e)(Object(c.Jh)(a));
        case 57:
          s.next = 62;
          break;
        case 59:
          s.prev = 59;
          s.t3 = s.catch(51);
          console.error(s.t3);
        case 62:
        case "end":
          return s.stop();
      }
    }
  }, za, null, [[18, 26], [29, 37], [40, 48], [51, 59]]);
}
function bc(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(t = e.payload.json)) {
            n.next = 4;
            break;
          }
          n.next = 4;
          return Object(Tt.b)(rs, t);
        case 4:
        case "end":
          return n.stop();
      }
    }
  }, Ya);
}
function yc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  return Ct.a.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          t = e.payload.callback;
          u.next = 3;
          return Object(Tt.f)(_r.E);
        case 3:
          n = u.sent;
          u.next = 6;
          return Object(Tt.f)(_r.y);
        case 6:
          if (r = u.sent, o = Object(hn.a)(r), n.title) {
            u.next = 29;
            break;
          }
          if (!o) {
            u.next = 24;
            break;
          }
          u.next = 12;
          return Object(Tt.b)(Qt.g, r, 0);
        case 12:
          if (!(i = u.sent) || !i.data) {
            u.next = 22;
            break;
          }
          u.next = 16;
          return Object(Tt.b)(fetch, i.data.bcmc_url);
        case 16:
          a = u.sent;
          u.next = 19;
          return a.json();
        case 19:
          s = u.sent;
          u.next = 22;
          return Object(Tt.e)(Object(c.Ti)({
            title: s.title,
            desc: s.description || rn.c,
            img: s.coverUrl || Tn.a
          }));
        case 22:
          u.next = 29;
          break;
        case 24:
          u.next = 26;
          return Object(Tt.f)(_r.G);
        case 26:
          l = u.sent;
          u.next = 29;
          return Object(Tt.e)(Object(c.Ti)({
            title: l,
            desc: rn.c,
            img: Tn.a
          }));
        case 29:
          if (!(Object(on.Y)().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide"))) {
            u.next = 35;
            break;
          }
          u.next = 33;
          return Object(Tt.e)(Object(c.kj)(!0, "share", t));
        case 33:
          u.next = 36;
          break;
        case 35:
          t();
        case 36:
          return u.abrupt("return");
        case 37:
        case "end":
          return u.stop();
      }
    }
  }, Ka);
}
wi = {};
Object(At.a)(wi, c.H, Qa);
Object(At.a)(wi, c.M, ds);
Object(At.a)(wi, c.gb, ms);
Object(At.a)(wi, c.lb, gs);
Object(At.a)(wi, c.jb, Cs);
Object(At.a)(wi, c.Jb, Ss);
Object(At.a)(wi, c.kb, As);
Object(At.a)(wi, c.Mb, zs);
Object(At.a)(wi, c.Lb, Ys);
Object(At.a)(wi, c.Ob, Zs);
Object(At.a)(wi, c.db, Js);
Object(At.a)(wi, c.nb, os);
Object(At.a)(wi, c.D, is);
Object(At.a)(wi, c.N, Ds);
Object(At.a)(wi, c.G, $a);
Object(At.a)(wi, c.F, es);
Object(At.a)(wi, c.U, Ja);
Object(At.a)(wi, c.vb, Xa);
Object(At.a)(wi, c.E, $s);
Object(At.a)(wi, c.fb, nc);
Object(At.a)(wi, c.eb, rc);
Object(At.a)(wi, c.tb, Us);
Object(At.a)(wi, c.Ib, Vs);
Object(At.a)(wi, c.hb, oc);
Object(At.a)(wi, c.y, Hs);
Object(At.a)(wi, c.xb, ic);
Object(At.a)(wi, c.Kb, ac);
Object(At.a)(wi, c.Bc, ns);
Object(At.a)(wi, c.Nb, lc);
Object(At.a)(wi, c.ub, sc);
Object(At.a)(wi, c.B, cc);
Object(At.a)(wi, c.T, uc);
Object(At.a)(wi, c.x, dc);
Object(At.a)(wi, c.ab, fc);
Object(At.a)(wi, c.zb, mc);
Object(At.a)(wi, c.Kc, ks);
Object(At.a)(wi, c.Lc, xs);
Object(At.a)(wi, c.z, ys);
Object(At.a)(wi, c.rb, Es);
Object(At.a)(wi, c.sb, _c);
Object(At.a)(wi, c.dc, bc);
Object(At.a)(wi, c.bb, hc);
Object(At.a)(wi, c.V, yc);
var Ec = wi;
var Oc = qn(Ec);
function wc() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)(Object.keys(Ec), Oc);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, qa);
}
var Cc;
var Tc = require("../296");
var Sc = Ct.a.mark(Hc);
var Ic = Ct.a.mark(Vc);
var Ac = Ct.a.mark(zc);
var jc = Ct.a.mark(Yc);
var Nc = Ct.a.mark(Kc);
var Rc = Ct.a.mark(qc);
var kc = Ct.a.mark(Xc);
var xc = Ct.a.mark(Qc);
var Dc = Ct.a.mark(Jc);
var Mc = Ct.a.mark($c);
var Lc = Ct.a.mark(el);
var Pc = Ct.a.mark(tl);
var Bc = Ct.a.mark(nl);
var Fc = Ct.a.mark(rl);
var Gc = Ct.a.mark(ol);
var Uc = Ct.a.mark(il);
var Wc = Ct.a.mark(cl);
function Hc() {
  var e;
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return Object(Tt.f)(_r.s);
        case 2:
          t = n.sent;
          n.next = 5;
          return Object(Tt.e)(Object(c.mj)({
            type: "error",
            message: (null === (e = Object(un.c)(t, "noSelectDoc")) || void 0 === e ? void 0 : e.toString()) || "",
            showCloseIcon: !1
          }));
        case 5:
        case "end":
          return n.stop();
      }
    }
  }, Sc);
}
function Vc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var u;
  var d;
  var p;
  var f;
  return Ct.a.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          t = e.payload;
          n = t.variableType;
          r = t.id;
          o = t.name;
          i = t.defaultValue;
          a = t.screenId;
          s = t.setBlockValue;
          u = t.isEmitOT;
          d = void 0 === u || u;
          p = t.index;
          h.next = 3;
          return Object(Tt.e)(Object(c.gf)(n, r, o, i, a, p));
        case 3:
          h.next = 5;
          return Object(Tt.e)(Object(c.bf)(Object(Mn.a)("PRIMITIVE", {
            id: r,
            name: o,
            type: "PRIMITIVE",
            screenId: n === l.i.GLOBAL ? l.i.GLOBAL : a,
            value: i,
            defaultValue: i
          }, {
            isWatching: !1
          })));
        case 5:
          h.next = 7;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 7:
          if (d) {
            if (!(null === (f = pn.oTHelper.primitiveVariables) || void 0 === f)) {
              f.clientOp.add(n, a, r, o, i, p);
            }
            if (s) {
              s(r);
            }
          }
        case 8:
        case "end":
          return h.stop();
      }
    }
  }, Ic);
}
function zc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var u;
  var d;
  var p;
  var f;
  return Ct.a.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          t = e.payload;
          n = t.arrayType;
          r = t.id;
          o = t.name;
          i = t.defaultValue;
          a = t.screenId;
          s = t.setBlockValue;
          u = t.index;
          d = t.isEmitOT;
          p = void 0 === d || d;
          h.next = 3;
          return Object(Tt.e)(Object(c.Ye)(n, r, o, i, a, u));
        case 3:
          h.next = 5;
          return Object(Tt.e)(Object(c.bf)(Object(Mn.a)("LIST", {
            id: r,
            name: o,
            type: "LIST",
            screenId: n === l.i.GLOBAL ? l.i.GLOBAL : a,
            value: i,
            defaultValue: i
          }, {
            isWatching: !1
          })));
        case 5:
          h.next = 7;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 7:
          if (p) {
            if (!(null === (f = pn.oTHelper.arrayVariables) || void 0 === f)) {
              f.clientOp.add(n, a, r, o, i, u);
            }
            if (s) {
              s(r);
            }
          }
        case 8:
        case "end":
          return h.stop();
      }
    }
  }, Ac);
}
function Yc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var u;
  var d;
  var p;
  var f;
  var h;
  return Ct.a.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          t = e.payload;
          n = t.setBlockValue;
          r = t.isEmitOT;
          o = void 0 === r || r;
          i = Object(Tc.a)(t, ["setBlockValue", "isEmitOT"]);
          m.next = 3;
          return Object(Tt.e)(Object(c.ff)(i));
        case 3:
          m.next = 5;
          return Object(Tt.e)(Object(c.bf)(Object(Mn.a)("DICT", {
            id: i.id,
            name: i.name,
            type: "DICT",
            screenId: i.scopeType === l.i.GLOBAL ? l.i.GLOBAL : i.screenId,
            value: i.defaultValue,
            defaultValue: i.defaultValue
          }, {
            isWatching: !1
          })));
        case 5:
          m.next = 7;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 7:
          if (o) {
            s = i.id;
            u = i.scopeType;
            d = i.screenId;
            p = i.name;
            f = i.defaultValue;
            h = i.index;
            if (!(null === (a = pn.oTHelper.objectVariables) || void 0 === a)) {
              a.clientOp.add(u, d, s, p, f, h);
            }
            if (n) {
              n(s);
            }
          }
        case 8:
        case "end":
          return m.stop();
      }
    }
  }, jc);
}
function Kc(e, t, n, r) {
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.e)(Object(c.zi)(e, t, n, r));
        case 2:
          o.next = 4;
          return Object(Tt.e)(Object(c.Pj)(t, "name", n));
        case 4:
          Object(Jt.m)(Jt.c.PRIMITIVE, t, n);
        case 5:
        case "end":
          return o.stop();
      }
    }
  }, Nc);
}
function qc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  return Ct.a.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (t = e.payload, n = t.variableType, r = t.id, o = t.screenId, i = t.key, a = t.value, s = t.isEmitOT, l = void 0 === s || s, "name" !== i) {
            d.next = 6;
            break;
          }
          d.next = 4;
          return Object(Tt.b)(Kc, n, r, a.toString(), o);
        case 4:
          d.next = 17;
          break;
        case 6:
          if ("defaultValue" !== i) {
            d.next = 17;
            break;
          }
          d.next = 9;
          return Object(Tt.e)(Object(c.yi)(n, r, a, o));
        case 9:
          d.next = 11;
          return Object(Tt.e)(Object(c.Hg)(n, r, "value", a, o, !0));
        case 11:
          d.next = 13;
          return Object(Tt.e)(Object(c.Pj)(r, "defaultValue", a));
        case 13:
          if (xl.getState().project.playing) {
            d.next = 17;
            break;
          }
          d.next = 17;
          return Object(Tt.e)(Object(c.Pj)(r, "value", a));
        case 17:
          d.next = 19;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 19:
          if (l) {
            if (!(null === (u = pn.oTHelper.primitiveVariables) || void 0 === u)) {
              u.clientOp.update(n, o, r, i, a);
            }
          }
        case 20:
        case "end":
          return d.stop();
      }
    }
  }, Rc);
}
function Xc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  return Ct.a.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (t = e.payload, n = t.arrayType, r = t.id, o = t.screenId, i = t.key, a = t.value, s = t.isEmitOT, l = void 0 === s || s, "name" !== i) {
            d.next = 6;
            break;
          }
          d.next = 4;
          return Object(Tt.b)(Qc, n, r, a.toString(), o);
        case 4:
          d.next = 17;
          break;
        case 6:
          if ("defaultValue" !== i || !Array.isArray(a)) {
            d.next = 17;
            break;
          }
          d.next = 9;
          return Object(Tt.e)(Object(c.ai)(n, r, a, o));
        case 9:
          d.next = 11;
          return Object(Tt.e)(Object(c.yg)(n, r, "value", a, o, !0));
        case 11:
          d.next = 13;
          return Object(Tt.e)(Object(c.Pj)(r, "defaultValue", a));
        case 13:
          if (xl.getState().project.playing) {
            d.next = 17;
            break;
          }
          d.next = 17;
          return Object(Tt.e)(Object(c.Pj)(r, "value", a));
        case 17:
          d.next = 19;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 19:
          if (l) {
            if (!(null === (u = pn.oTHelper.arrayVariables) || void 0 === u)) {
              u.clientOp.updateProperty(n, o, r, i, a);
            }
          }
        case 20:
        case "end":
          return d.stop();
      }
    }
  }, kc);
}
function Qc(e, t, n, r) {
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.e)(Object(c.Zh)(e, t, n, r));
        case 2:
          o.next = 4;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 4:
          o.next = 6;
          return Object(Tt.e)(Object(c.Pj)(t, "name", n));
        case 6:
          Object(Jt.m)(Jt.c.ARRAY, t, n);
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, xc);
}
function Zc(e, t) {
  var n;
  var r = !1;
  for (n in e) if (e[n] !== t[n]) {
    r = !0;
  }
  return r;
}
function Jc(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  return Ct.a.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (t = e.payload, n = t.scopeType, r = t.id, o = t.screenId, i = t.key, a = t.value, s = t.isEmitOT, l = void 0 === s || s, "name" !== i) {
            d.next = 6;
            break;
          }
          d.next = 4;
          return Object(Tt.b)($c, n, r, a.toString(), o);
        case 4:
          d.next = 15;
          break;
        case 6:
          if ("defaultValue" !== i || "object" !== typeof a) {
            d.next = 15;
            break;
          }
          d.next = 9;
          return Object(Tt.e)(Object(c.wi)(n, r, a, o));
        case 9:
          d.next = 11;
          return Object(Tt.e)(Object(c.Pj)(r, "defaultValue", a));
        case 11:
          if (xl.getState().project.playing) {
            d.next = 15;
            break;
          }
          d.next = 15;
          return Object(Tt.e)(Object(c.Pj)(r, "value", a));
        case 15:
          d.next = 17;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 17:
          if (l) {
            if (!(null === (u = pn.oTHelper.objectVariables) || void 0 === u)) {
              u.clientOp.updateProperty(n, o, r, i, a);
            }
          }
        case 18:
        case "end":
          return d.stop();
      }
    }
  }, Dc);
}
function $c(e, t, n, r) {
  return Ct.a.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2;
          return Object(Tt.e)(Object(c.xi)(e, t, n, r));
        case 2:
          o.next = 4;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 4:
          o.next = 6;
          return Object(Tt.e)(Object(c.Pj)(t, "name", n));
        case 6:
          Object(Jt.m)(Jt.c.OBJECT, t, n);
        case 7:
        case "end":
          return o.stop();
      }
    }
  }, Mc);
}
function el(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  return Ct.a.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          t = e.payload;
          n = t.id;
          r = t.fields;
          o = t.isEmitOT;
          i = void 0 === o || o;
          a = Object(on.yb)(n);
          p.next = 4;
          return Object(Tt.f)(_r.y);
        case 4:
          if (s = p.sent, l = [], u = [], d = r.length !== a.length, a.forEach(function (e) {
            r.forEach(function (t) {
              if (t.id === e.id) {
                if (Zc(e, t)) {
                  d = !0;
                }
                if (t.key !== e.key) {
                  l.push(t);
                }
              }
            });
            if (!r.some(function (t) {
              return t.id === e.id;
            })) {
              u.push(e);
              d = !0;
            }
          }), !d) {
            p.next = 15;
            break;
          }
          p.next = 12;
          return Object(Tt.e)(Object(c.Lg)(n, "fields", r, !1, !0, i));
        case 12:
          l.forEach(function (e) {
            Object(Jt.m)(Jt.c.DOC_KEYS, e.id, e.key);
          });
          u.forEach(function (e) {
            Object(Jt.q)(Jt.c.DOC_KEYS, e.id);
          });
          gn(s);
        case 15:
        case "end":
          return p.stop();
      }
    }
  }, Lc);
}
function tl(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.variableType;
          r = t.id;
          o = t.screenId;
          i = t.isEmitOT;
          a = void 0 === i || i;
          l.next = 3;
          return Object(Tt.e)(Object(c.dh)(n, r, o));
        case 3:
          l.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          Object(Jt.q)(Jt.c.PRIMITIVE, r);
          if (a) {
            if (!(null === (s = pn.oTHelper.primitiveVariables) || void 0 === s)) {
              s.clientOp.remove(n, o, r);
            }
          }
          Object(Jt.m)(Jt.c.PRIMITIVE, r, on.g);
          l.next = 10;
          return Object(Tt.e)(Object(c.bh)(r));
        case 10:
        case "end":
          return l.stop();
      }
    }
  }, Pc);
}
function nl(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.arrayType;
          r = t.id;
          o = t.screenId;
          i = t.isEmitOT;
          a = void 0 === i || i;
          l.next = 3;
          return Object(Tt.e)(Object(c.ah)(n, r, o));
        case 3:
          l.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          Object(Jt.q)(Jt.c.ARRAY, r);
          if (a) {
            if (!(null === (s = pn.oTHelper.arrayVariables) || void 0 === s)) {
              s.clientOp.remove(n, o, r);
            }
          }
          Object(Jt.m)(Jt.c.ARRAY, r, on.g);
          l.next = 10;
          return Object(Tt.e)(Object(c.bh)(r));
        case 10:
        case "end":
          return l.stop();
      }
    }
  }, Bc);
}
function rl(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return Ct.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.payload;
          n = t.scopeType;
          r = t.id;
          o = t.screenId;
          i = t.isEmitOT;
          a = void 0 === i || i;
          l.next = 3;
          return Object(Tt.e)(Object(c.ch)(n, r, o));
        case 3:
          l.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          Object(Jt.q)(Jt.c.OBJECT, r);
          if (a) {
            if (!(null === (s = pn.oTHelper.objectVariables) || void 0 === s)) {
              s.clientOp.remove(n, o, r);
            }
          }
          l.next = 9;
          return Object(Tt.e)(Object(c.bh)(r));
        case 9:
        case "end":
          return l.stop();
      }
    }
  }, Fc);
}
function ol(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  return Ct.a.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          t = e.payload;
          n = t.name;
          r = t.screenId;
          o = t.setBlockValue;
          i = t.index;
          a = t.isEmitOT;
          s = void 0 === a || a;
          u.next = 3;
          return Object(Tt.e)(Object(c.Ze)(n, r, i));
        case 3:
          u.next = 5;
          return Object(Tt.e)(Object(c.Fi)(!0));
        case 5:
          if (s) {
            if (!(null === (l = pn.oTHelper.broadcasts) || void 0 === l)) {
              l.clientOp.add(r, n, i);
            }
            if (o) {
              o(n);
            }
          }
        case 6:
        case "end":
          return u.stop();
      }
    }
  }, Gc);
}
function il(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var l;
  var u;
  var d;
  var p;
  return Ct.a.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          if (t = e.payload, n = t.id, r = t.columns, o = t.isEmitOT, i = void 0 === o || o, a = Object(on.Y)(), s = a.find(function (e) {
            return e.attributes.cloudDbId === n;
          })) {
            f.next = 5;
            break;
          }
          return f.abrupt("return");
        case 5:
          l = s.attributes.columns;
          f.next = 8;
          return Object(Tt.f)(_r.y);
        case 8:
          u = f.sent;
          d = [];
          p = [];
          if (l) {
            l.forEach(function (e) {
              var t = r.find(function (t) {
                return t.id === e.id;
              });
              if (t) {
                if (t.name !== e.name) {
                  p.push({
                    id: e.id,
                    newName: t.name
                  });
                }
              } else {
                d.push({
                  id: e.id
                });
              }
            });
          }
          f.next = 14;
          return Object(Tt.e)(Object(c.Lg)(s.id, "columns", r, !1, !0, i));
        case 14:
          p.forEach(function (e) {
            Object(Jt.m)(Jt.c.COLUMNS, e.id, e.newName);
          });
          d.forEach(function (e) {
            Object(Jt.q)(Jt.c.COLUMNS, e.id);
          });
          gn(u);
        case 17:
        case "end":
          return f.stop();
      }
    }
  }, Uc);
}
Cc = {};
Object(At.a)(Cc, c.Fb, el);
Object(At.a)(Cc, c.ib, Hc);
Object(At.a)(Cc, c.u, Vc);
Object(At.a)(Cc, c.o, zc);
Object(At.a)(Cc, c.t, Yc);
Object(At.a)(Cc, c.L, tl);
Object(At.a)(Cc, c.I, nl);
Object(At.a)(Cc, c.K, rl);
Object(At.a)(Cc, c.p, ol);
Object(At.a)(Cc, c.Hb, qc);
Object(At.a)(Cc, c.yb, Xc);
Object(At.a)(Cc, c.Gb, Jc);
Object(At.a)(Cc, c.Ab, il);
var al = Cc;
var sl = qn(al);
function cl() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)(Object.keys(al), sl);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, Wc);
}
var ll;
var ul = require("../477/index");
var dl = require("../463");
var pl = Ct.a.mark(gl);
var fl = Ct.a.mark(_l);
var hl = Ct.a.mark(vl);
var ml = Ct.a.mark(El);
function gl(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          t = e.payload;
          n.next = 3;
          return Object(Tt.e)(Object(c.ej)(e.payload));
        case 3:
          if (!t) {
            n.next = 9;
            break;
          }
          Object(ul.a)(t.id, t.nickname);
          n.next = 7;
          return Object(Tt.b)(Ms);
        case 7:
          n.next = 15;
          break;
        case 9:
          dn.a.disconnect();
          n.next = 12;
          return Object(Tt.e)(Object(c.Gf)());
        case 12:
          n.next = 14;
          return Object(Tt.e)(Object(Be.n)());
        case 14:
          Object(ul.b)();
        case 15:
        case "end":
          return n.stop();
      }
    }
  }, pl);
}
function _l(e) {
  var t;
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0;
          e.next = 3;
          return Object(Tt.b)(dl.b);
        case 3:
          t = e.sent;
          e.next = 6;
          return Object(Tt.e)(Object(c.gi)(t));
        case 6:
          e.next = 10;
          break;
        case 8:
          e.prev = 8;
          e.t0 = e.catch(0);
        case 10:
        case "end":
          return e.stop();
      }
    }
  }, fl, null, [[0, 8]]);
}
function vl(e) {
  var t;
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0;
          e.next = 3;
          return Object(Tt.b)(dl.c);
        case 3:
          t = e.sent;
          e.next = 6;
          return Object(Tt.e)(Object(c.bj)(t));
        case 6:
          e.next = 10;
          break;
        case 8:
          e.prev = 8;
          e.t0 = e.catch(0);
        case 10:
        case "end":
          return e.stop();
      }
    }
  }, hl, null, [[0, 8]]);
}
var bl;
var yl = qn((ll = {}, Object(At.a)(ll, c.wb, gl), Object(At.a)(ll, c.S, _l), Object(At.a)(ll, c.W, vl), ll));
function El() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)([c.wb], yl);
        case 2:
          e.next = 4;
          return Object(Tt.g)([c.S], yl);
        case 4:
          e.next = 6;
          return Object(Tt.g)([c.W], yl);
        case 6:
        case "end":
          return e.stop();
      }
    }
  }, ml);
}
var Ol = Ct.a.mark(Tl);
var wl = Ct.a.mark(Sl);
var Cl = Ct.a.mark(jl);
function Tl(e) {
  var t;
  return Ct.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          t = e.payload.list;
          n.next = 3;
          return Object(Tt.e)(Object(Be.u)(t));
        case 3:
        case "end":
          return n.stop();
      }
    }
  }, Ol);
}
function Sl(e) {
  var t;
  var n;
  var r;
  var o;
  return Ct.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.payload.info;
          i.next = 3;
          return Object(Tt.f)(function (e) {
            return e.oTState.userFocusOTInfoList;
          });
        case 3:
          n = i.sent;
          o = n.findIndex(function (e) {
            return e.userId === t.userId;
          });
          r = o > -1 ? n.update(o, function () {
            return Object(a.a)(Object(a.a)({}, n.get(o)), t);
          }) : n.push(t);
          i.next = 8;
          return Object(Tt.e)(Object(Be.v)(r));
        case 8:
        case "end":
          return i.stop();
      }
    }
  }, wl);
}
bl = {};
Object(At.a)(bl, Be.a, Tl);
Object(At.a)(bl, Be.b, Sl);
var Il = bl;
var Al = qn(Il);
function jl() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.g)(Object.keys(Il), Al);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, Cl);
}
var Nl = Ct.a.mark(Rl);
function Rl() {
  return Ct.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return Object(Tt.a)([Object(Tt.d)(wc), Object(Tt.d)(cl), Object(Tt.d)(El), Object(Tt.d)(jl), Object(Tt.d)(ho), Object(Tt.d)(Si)]);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, Nl);
}
if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  window.compose;
}
var kl = Object(o.a)();
var xl = Object(r.createStore)(Ot, Object(r.applyMiddleware)(kl));
function Dl() {
  return xl;
}
kl.run(Rl);
var Ml = function (e) {
  return xl.dispatch(e);
};
function Ll() {
  return xl.getState().common.language;
}
export default Ml;