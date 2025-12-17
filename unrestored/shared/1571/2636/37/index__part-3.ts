/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_738_66 from "../738/66"
import * as a from "../6"
import * as /* [auto-meaningful-name] */$$_100 from "../100"
var Fe = $$_738_66.a.Record({
  editorInviteUrl: "",
  readOnlyInviteUrl: "",
  cooperationUserList: $$_738_66.a.List([]),
  onlineCooperationUserList: $$_738_66.a.List([]),
  userFocusOTInfoList: $$_738_66.a.List([]),
  onlineCooperationUserColorRecord: $$_738_66.a.Record({})(),
  isAuthor: true,
  collWorkId: null
})()
function Ge(e, t) {
  t.payload.list.sort(function (e) {
    return 0 - Number(e.is_author)
  })
  return e.set("cooperationUserList", $$_738_66.a.List(t.payload.list))
}
var We = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Fe
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_100.h:
      return Ge(e, t)
    case $$_100.j:
      return e.set("onlineCooperationUserList", $$_738_66.a.List(t.payload.list))
    case $$_100.e:
      return e.set("editorInviteUrl", t.payload.url)
    case $$_100.g:
      return e.set("readOnlyInviteUrl", t.payload.url)
    case $$_100.f:
      return e.set("isAuthor", t.payload.isAuthor)
    case $$_100.d:
      return e.set("collWorkId", t.payload.id)
    case $$_100.k:
      return e.set("userFocusOTInfoList", t.payload.list)
    case $$_100.i:
      return e.set("onlineCooperationUserColorRecord", $$_738_66.a.Record(t.payload.colors)())
    case $$_100.c:
      return Fe
    default:
      return e
  }
}
var Ue = {
  visible: false,
  multiple: false,
  mode: require("../68").c.ResourceLibrary,
  sidebarType: undefined,
  setTab: undefined
}
var He = $$_738_66.a.Record({
  resourceLibraryDialogInfo: Ue,
  resourceLibraryDialogVisible: false,
  resourceLibraryUpdateAt: 0,
  imageFileList: $$_738_66.a.List([]),
  iconFileList: $$_738_66.a.List([]),
  soundFileList: $$_738_66.a.List([]),
  fontFileList: $$_738_66.a.List($$_53.a)
})()
function Ve(e, t) {
  return e.update("imageFileList", function (e) {
    return e.splice(0, 0, t.payload.imageFile)
  })
}
function ze(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.imageFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("imageFileList", function (e) {
    return e.delete(r)
  }) : e
}
function Ye(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$soundFiles = t$payload.soundFiles
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
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
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("soundFileList", function (e) {
    return e.delete(r)
  }) : e
}
function qe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Xe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "name"], t$payload$name) : e
}
function Qe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$iconFiles = t$payload.iconFiles
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
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
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Je(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("iconFileList", function (e) {
    return e.delete(r)
  }) : e
}
function $e(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "name"], t$payload$name) : e
}
var et = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : He
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ce:
      return e.set("resourceLibraryDialogInfo", a.a({
        visible: true
      }, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.yc:
      return e.set("resourceLibraryDialogInfo", a.a({}, Ue))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Le:
      return e.set("resourceLibraryDialogVisible", t.payload.visible)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Xe:
      return e.set("resourceLibraryUpdateAt", Date.now())
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.f:
      return Ve(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.hc:
      return ze(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Zc:
      return e.set("soundFileList", $$_738_66.a.List(t.payload.soundFileList))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.m:
      return Ye(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Sb:
      return qe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Rc:
      return Ke(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Tc:
      return Xe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.e:
      return Qe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Qb:
      return Ze(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Nc:
      return Je(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Vc:
      return e.set("iconFileList", $$_738_66.a.List(t.payload.iconFileList))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Sc:
      return $e(e, t)
    default:
      return e
  }
}
export { We }
export { et }
