/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_738_66 from "../738/66"
import * as a from "../6"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$$_60 from "../60"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
var H = $$_738_66.a.Record({
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
var z = $$_738_66.a.Record({
  currentScreenIndex: -1,
  id: $$_60.v,
  bcmUrl: "",
  jsonFrom: $$_18.d.OTHER,
  title: "新的作品",
  version: $$_53.e,
  playing: false,
  playedAt: 0,
  screens: $$_738_66.a.List([]),
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
    tag: $$_18.g.FREEDOM,
    id: ""
  },
  globalWidgetIds: []
})()
function Y(e) {
  return z
}
function K(e, t) {
  var /* [auto-meaningful-name] */t$payload$project = t.payload.project
  var /* [auto-meaningful-name] */t$payload$project$screens = t$payload$project.screens
  var /* [auto-meaningful-name] */t$payload$project$title = t$payload$project.title
  var /* [auto-meaningful-name] */t$payload$project$globalVariableList = t$payload$project.globalVariableList
  var /* [auto-meaningful-name] */t$payload$project$globalArrayList = t$payload$project.globalArrayList
  var /* [auto-meaningful-name] */t$payload$project$globalWidgetIds = t$payload$project.globalWidgetIds
  var /* [auto-meaningful-name] */t$payload$project$globalObjectList = t$payload$project.globalObjectList
  var u = t$payload$project$screens.map(function (e) {
    return $$_738_66.a.Record(e)()
  })
  return e.set("screens", $$_738_66.a.List(u)).set("title", t$payload$project$title).set("selectedWidgetId", undefined).set("currentScreenIndex", -1).set("playing", false).set("globalVariableList", Lodash.cloneDeep(t$payload$project$globalVariableList)).set("globalArrayList", Lodash.cloneDeep(t$payload$project$globalArrayList)).set("globalWidgetIds", Lodash.cloneDeep(t$payload$project$globalWidgetIds)).set("globalObjectList", Lodash.cloneDeep(t$payload$project$globalObjectList))
}
function q(e, t) {
  return e.set("id", t.payload.projectId)
}
function X(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screen = t$payload.screen
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var i = $$_738_66.a.Record(t$payload$screen)()
  var a = t$payload$index || e.screens.size
  return e.update("screens", function (e) {
    return e.splice(a, 0, i)
  })
}
function Q(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$title = t$payload.title
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("title", t$payload$title)
  })
}
function Z(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$key = t$payload.key
  var /* [auto-meaningful-name] */t$payload$value = t$payload.value
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", a], function (e) {
    return e.set(t$payload$key, t$payload$value)
  })
}
function J(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$snapshot = t$payload.snapshot
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("snapshot", t$payload$snapshot)
  })
}
function $(e, t) {
  var /* [auto-meaningful-name] */t$payload$screenId = t.payload.screenId
  var r = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return r > -1 ? e.update("screens", function (e) {
    return e.delete(r)
  }) : e
}
function ee(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetId = t$payload.widgetId
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetIds = t$payload.widgetIds
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return t$payload$isInvisibleWidget ? e.updateIn(["screens", s, "invisibleWidgetIds"], function () {
    return $$_25_index.a(t$payload$widgetIds)
  }) : e.updateIn(["screens", s, "widgetIds"], function () {
    return $$_25_index.a(t$payload$widgetIds)
  })
}
function ne(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetId = t$payload.widgetId
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
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
  var /* [auto-meaningful-name] */t$payload$widgetId = t.payload.widgetId
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  if (t$payload$variableType === $$_18.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_25_index.a(e)
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
    return $$_25_index.a(e)
  }) : e
}
function ie(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  if (t$payload$arrayType === $$_18.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_25_index.a(e)
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
    return $$_25_index.a(e)
  }) : e
}
function de(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  if (t$payload$scopeType === $$_18.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return $$_25_index.a(e)
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
    return $$_25_index.a(e)
  }) : e
}
function pe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === $$_18.i.GLOBAL) {
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$from = t$payload.from
  var /* [auto-meaningful-name] */t$payload$to = t$payload.to
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return s > -1 ? e.updateIn(["screens", s, "broadcasts"], function (e) {
    e.splice(t$payload$index, 0, t$payload$name)
    return $$_25_index.a(e)
  }) : e
}
function ve(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.set("contextMenuInfo", $$_738_66.a.Record(t$payload)())
}
function ye(e) {
  return e.set("contextMenuInfo", H)
}
function Ee(e, t) {
  return e.set("styleDialog", a.a({
    visible: true
  }, t.payload))
}
function Oe(e) {
  return e.set("styleDialog", a.a({}, V))
}
function we(e, t) {
  return e.set("selectedWidgetId", t.payload.widgetId)
}
var Ce = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : z
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Te:
      return e.set("bcmUrl", t.payload.bcmUrl)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Rb:
      return e.set("title", t.payload.title)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Xc:
      return K(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Yc:
      return q(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ve:
      return J(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Dc:
      return ge(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ue:
      return Z(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.We:
      return Q(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.k:
      return X(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.kc:
      return $(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.j:
      return e.set("globalWidgetIds", e.globalWidgetIds.concat(t.payload.widgetId))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.l:
      return ee(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fe:
      return e.set("globalWidgetIds", t.payload.widgetIds)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.He:
      return te(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pc:
      return re(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Qc:
      return ne(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bd:
      return we(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Nd:
      return e.set("currentScreenIndex", t.payload)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ie:
      return e.set("playing", true).set("playedAt", Date.now())
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Je:
      return e.set("playing", false)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.i:
      return oe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.jc:
      return le(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ld:
      return ie(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Kd:
      return se(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.a:
      return ue(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.h:
      return de(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ic:
      return fe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Dd:
      return ae(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Cd:
      return ce(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ec:
      return pe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.fd:
      return he(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ed:
      return me(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.b:
      return _e(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.fc:
      return ve(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pb:
      return be(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Xb:
      return ye(e)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Vb:
      return Y()
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ge:
      return e.set("screens", t.payload.screens)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Jc:
      return Ee(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.cc:
      return Oe(e)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Md:
      return e.set("apiToken", t.payload.token)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Td:
      return e.set("packageTaskLabel", t.payload.label)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Gd:
      return e.set("packageProgress", t.payload.packageProgress)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Jd:
      return e.set("isPackaging", t.payload.isPackaging).set("packageUrl", t.payload.packageUrl || null)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Hd:
      return e.set("packageProgressVisible", t.payload.packageProgressVisible)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fd:
      return e.set("packageDialogVisible", t.payload.packageDialogVisible)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Id:
      return e.set("packageQrCodeVisible", t.payload.packageQrCodeVisible)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.jd:
      return e.set("packageCompleteVisible", t.payload.packageCompleteVisible)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ed:
      return e.update("packageInfo", function (e) {
        return a.a(a.a({}, e), t.payload)
      })
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Yd:
      return e.update("projectShareInfo", function (e) {
        return a.a(a.a({}, e), t.payload)
      })
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.qd:
      return e.set("focusedWorkspaceArea", t.payload.area)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pd:
      return e.set("jsonFrom", t.payload)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Zd:
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
var Se = $$_738_66.a.Record({
  dropdown: {
    type: $$_18.a.DYNAMIC_DROPDOWN,
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
  storageDialogInfo: a.a({}, Te),
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
function Ae(e) {
  e.get("dropdown").onHide()
  return e.set("dropdown", a.a({}, Se.dropdown))
}
var Ie = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Se
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ke:
      return e.set("dropdown", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.lc:
      return Ae(e)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.se:
      return e.set("createVariableDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.qc:
      return e.set("createVariableDialog", a.a({}, Se.createVariableDialog))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.qe:
      return e.set("commonInputDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.oc:
      return e.set("commonInputDialog", a.a({}, Se.createVariableDialog))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.we:
      return e.set("editArrayDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.uc:
      return e.set("editArrayDialog", a.a({}, Se.editArrayDialog))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.xe:
      return e.set("editObjectDialog", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.vc:
      return e.set("editObjectDialog", a.a({}, Se.editObjectDialog))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ve:
      return e.set("storageDialogInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.tc:
      return e.set("storageDialogInfo", a.a({}, Te))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.le:
      return e.set("slider", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mc:
      return e.set("slider", a.a({}, Se.slider))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Oe:
      return e.setIn(["slider", "value"], t.payload.value)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.me:
      return e.set("palette", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.nc:
      return e.set("palette", {
        colorList: undefined,
        visible: false,
        value: "#000000ff",
        top: 0,
        left: 0,
        selectValue: function (e) {},
        setValue: function (e) {}
      })
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.pd:
      return e.set("flyoutVisible", t.payload)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.zd:
      return e.set("isBlockDragDeleteArea", t.payload)
    default:
      return e
  }
}
export { Ce }
export { Ie }
