/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24__part-2
 */

"use strict"

import { "24__part-1__T" as T, "24__part-1__S" as S, "24__part-1__I" as I, "24__part-1__A" as A, "24__part-1__j" as j, "24__part-1__N" as N, "24__part-1__R" as R, "24__part-1__k" as k, "24__part-1__x" as x, "24__part-1__D" as D, "24__part-1__M" as M, "24__part-1__L" as L, "24__part-1__P" as P, "24__part-1__B" as B, "24__part-1__F" as F, "24__part-1__G" as G, "24__part-1__U" as U, "24__part-1__W" as W } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_43 from "../43"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_102 from "../102"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_389 from "../389"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$$_48_66 from "../48/66"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$$_40 from "../40"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as s from "../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
var o
var r
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions from "../../../../../src/shared/events/actions"
import * as /* [auto-meaningful-name] */Socket$ioClient from "socket.io-client"
import /* [auto-meaningful-name] */_Socket$ioClient from "socket.io-client"
var /* [auto-meaningful-name] */require$$_59_index$a$oTSocketHost = require("../59/index").a.oTSocketHost
var K = function () {
  function e(t, n) {
    $$_27.a(this, e)
    this.subject = undefined
    this.client = undefined
    this.subject = _Socket$ioClient(require$$_59_index$a$oTSocketHost, {
      path: "/collaborate/",
      query: {
        work_id: n,
        stag: 4
      },
      upgrade: false,
      transports: ["websocket"]
    })
    this.client = t
    this.onSocketEvent(n)
  }
  $$_40.a(e, [{
    key: "onSocketEvent",
    value: function (e) {
      var t = this
      this.subject.on(R, function (e) {
        var /* [auto-meaningful-name] */e$code = e.code
        console.info("===OPERATION_ACK====")
        if (1e7 === e$code) {
          if (window.confirm("服务器响应错误，是否刷新页面？")) {
            window.location.reload()
          }
        }
        t.client.handleOperationAck()
      }).on(k, function (e) {
        console.info("===OPERATION_RELAY===", e)
        t.client.handleApplyServer(e.op[0][0])
      }).on(j, function (e) {
        console.info("===JOIN_ACK===", e)
        t.client.handleJoinAck(e)
      }).on(I, function (e) {
        console.info("===SET_DOC_ACK===")
        t.client.handleSetDocAck(e)
      }).on(x, function (e) {
        console.info("===GET_ONLINE_USER_LIST_ACK===")
      }).on(D, function (e) {
        console.info("===SVR_USER_STATUS_CHANGE===")
        t.client.handleServerUserStatusChanged(e)
      }).on(M, function (e) {
        t.client.handleUserCountChange(e)
        console.info("===SVR_COLL_USER_CHANGE===")
      }).on(L, function (e) {
        console.info("===SVR_COLL_USER_ELIMINATED===")
        t.client.handleUserEliminated(e.eliminated_code)
      }).on(U, function () {
        console.info("===USER_FOCUS_ON_POS_ACK===")
      }).on(W, function (e) {
        console.info("===USER_FOCUS_ON_POS_RELAY===", e)
        t.client.handleCustomEventRelay(e)
      }).on(P, function () {
        t.client.handleSetCollAutoSave()
      }).on(B, function (e) {
        t.client.handleUserPermissionChange(e)
      }).on(F, function (e) {
        t.client.collSetDoc(e)
      }).on("reconnect", function () {
        t.client.handleServerReconnect()
      }).on("disconnect", function () {
        t.client.handleDisconnect()
      }).on("connect", function () {
        t.subject.emit(A, e)
      })
    }
  }])
  return e
}()
var q = function () {
  function e() {
    $$_27.a(this, e)
    this.applyClient = function (e, t) {
      e.sendOperation(e.revision, t)
      e.setState(new X(t))
    }
    this.serverAck = function (e) {
      throw new Error("There is no pending operation.")
    }
    this.transformSelection = function (e) {
      return e
    }
  }
  $$_40.a(e, [{
    key: "applyServer",
    value: function (e, t) {
      e.setState(this)
      return {
        op: t
      }
    }
  }, {
    key: "resend",
    value: function (e) {}
  }])
  return e
}()
var X = function () {
  function e(t) {
    $$_27.a(this, e)
    this.outstanding = undefined
    this.outstanding = t
  }
  $$_40.a(e, [{
    key: "applyClient",
    value: function (e, t) {
      e.setState(new Q(this.outstanding, t))
    }
  }, {
    key: "applyServer",
    value: function (t, n) {
      var r = [0, 0]
      r[1] = OtJson1.type.transformNoConflict(n, this.outstanding, "left")
      r[0] = OtJson1.type.transformNoConflict(this.outstanding, n, "right")
      t.setState(new e(r[0]))
      return {
        op: r[1]
      }
    }
  }, {
    key: "serverAck",
    value: function (e) {
      e.setState(new q())
    }
  }, {
    key: "transformSelection",
    value: function (e) {}
  }, {
    key: "resend",
    value: function (e) {
      e.sendOperation(e.revision, this.outstanding)
    }
  }])
  return e
}()
var Q = function () {
  function e(t, n) {
    $$_27.a(this, e)
    this.outstanding = undefined
    this.buffer = undefined
    this.outstanding = t
    this.buffer = n
  }
  $$_40.a(e, [{
    key: "applyClient",
    value: function (t, n) {
      var r = OtJson1.type.compose(this.buffer, n)
      t.setState(new e(this.outstanding, r))
    }
  }, {
    key: "applyServer",
    value: function (t, n) {
      var r = [0, 0]
      var o = [0, 0]
      r[1] = OtJson1.type.transformNoConflict(n, this.outstanding, "left")
      o[1] = OtJson1.type.transformNoConflict(r[1], this.buffer, "left")
      r[0] = OtJson1.type.transformNoConflict(this.outstanding, n, "right")
      o[0] = OtJson1.type.transformNoConflict(this.buffer, r[1], "right")
      t.setState(new e(r[0], o[0]))
      return {
        op: o[1]
      }
    }
  }, {
    key: "serverAck",
    value: function (e) {
      e.setState(new X(this.buffer))
      e.sendOperation(e.revision, this.buffer)
    }
  }, {
    key: "transformSelection",
    value: function (e) {
      return e.transform(this.outstanding).transform(this.buffer)
    }
  }, {
    key: "resend",
    value: function (e) {
      e.sendOperation(e.revision, this.outstanding)
    }
  }])
  return e
}()
!function (e) {
  e[e.RevertProject = 1] = "RevertProject"
}(r || (r = {}));
(function (e) {
  e[e.UserOperation = 1] = "UserOperation"
  e[e.ProjectRemove = 2] = "ProjectRemove"
})(o || (o = {}))
var Z = function () {
  function e(t) {
    var n = this
    $$_27.a(this, e)
    this._socket = undefined
    this.revision = undefined
    this.adapter = undefined
    this.isSuccessfulCreateRoom = undefined
    this.state = undefined
    this.initDocData = undefined
    this._canRefreshUrl = true
    this.socketSuc = undefined
    this.sendOperation = function (e, t) {
      n._socket.subject.emit(N, {
        revision: e,
        op: [[t]]
      })
    }
    this.applyOperation = function (e) {
      n.adapter.applyServerOp2IDE(e)
    }
    this.socketSuc = {
      resolve: function (e) {},
      reject: function (e) {},
      promise: Promise.resolve({
        status: "suc"
      })
    }
    this.socketSuc.promise = new Promise(function (e, t) {
      n.socketSuc.resolve = e
      n.socketSuc.reject = t
    })
    this.revision = 0
    this._socket = new K(this, t)
    this.adapter = new T()
    this.state = new q()
    this._canRefreshUrl = true
  }
  $$_40.a(e, [{
    key: "disconnect",
    value: function () {
      this._canRefreshUrl = false
      this._socket.subject.close()
    }
  }, {
    key: "waitInitial",
    value: function () {
      return this.socketSuc.promise
    }
  }, {
    key: "setState",
    value: function (e) {
      this.state = e
    }
  }, {
    key: "emitCustomEvent",
    value: function (e) {
      console.info("======= USER_FOCUS_ON_POS=======")
      this._socket.subject.emit(G, e)
    }
  }, {
    key: "applyClient",
    value: function (e) {
      console.info("======= apply Client=======", e)
      e = Lodash.cloneDeep(e)
      this.state.applyClient(this, e)
      this.adapter.applyOpFromIDE(e)
    }
  }, {
    key: "transformSelection",
    value: function (e) {
      return this.state.transformSelection(e)
    }
  }, {
    key: "handleApplyServer",
    value: function (e) {
      console.info("================== accept Server op ==================")
      try {
        this.revision++
        var /* [auto-meaningful-name] */this$state$applyServerThisE$op = this.state.applyServer(this, e).op
        this.applyOperation(this$state$applyServerThisE$op)
      } catch (n) {
        console.error("applyServer error", n)
      }
    }
  }, {
    key: "handleNotifySnapshot",
    value: function (e) {
      this.revision = e.revision
      this.adapter.onGetSnapShort(e.doc)
    }
  }, {
    key: "handleServerReconnect",
    value: function () {
      if ("function" === typeof this.state.resend) {
        this.state.resend(this)
      }
    }
  }, {
    key: "handleDisconnect",
    value: function () {
      if (this._canRefreshUrl) {
        if (window.confirm("与后台连接断开，是否刷新页面？")) {
          window.location.reload()
        }
      }
    }
  }, {
    key: "handleOperationAck",
    value: function () {
      this.revision++
      this.state.serverAck(this)
    }
  }, {
    key: "handleJoinAck",
    value: function () {
      var e = s.a(RegeneratorRuntime.mark(function e(t) {
        var /* [auto-meaningful-name] */t$code
        var /* [auto-meaningful-name] */t$data
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (t$code = t.code, t$data = t.data, this.initDocData = undefined, 20000002 !== t$code) {
                  e.next = 9
                  break
                }
                e.next = 5
                return $$_43.b()
              case 5:
                this.initDocData = e.sent
                this._socket.subject.emit(S, {
                  doc: this.initDocData
                })
                e.next = 10
                break
              case 9:
                if (20000001 === t$code) {
                  console.error("sock 启动失败请重试")
                  this.socketSuc.resolve({
                    status: "fail"
                  })
                } else {
                  if (t$data) {
                    this.initDocData = t$data.doc
                    this._setAdapterInitData()
                    this.handleNotifySnapshot(t$data)
                    this.socketSuc.resolve({
                      status: "suc"
                    })
                  }
                }
              case 10:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      }))
      return function (t) {
        return e.apply(this, arguments)
      }
    }()
  }, {
    key: "_setAdapterInitData",
    value: function () {
      if (this.initDocData) {
        this.adapter.setDoc(this.initDocData)
      }
    }
  }, {
    key: "handleSetDocAck",
    value: function (e) {
      if (20000001 === e.code) {
        this._socket.subject.emit(A)
      } else {
        this._setAdapterInitData()
        this.socketSuc.resolve({
          status: "suc"
        })
      }
    }
  }, {
    key: "_distributeUserColor",
    value: function (e) {
      var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent
      var n = $$_43.c()
      Object.keys(n).forEach(function (t) {
        if (!e.some(function (e) {
          return e.id === Number(t)
        })) {
          delete n[t]
        }
      })
      var r = []
      e.forEach(function (e) {
        n[e.id] = function (e) {
          return $$_389.b.find(function (t) {
            return !e.includes(t.toUpperCase())
          }) || $$_389.a
        }(r)
        r.push(n[e.id])
      })
      if (!(null === ($$_49$oTHelper$customEvent = $$_49.oTHelper.customEvent) || undefined === $$_49$oTHelper$customEvent)) {
        $$_49$oTHelper$customEvent.emit.userColors(n)
      }
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_102.t(n))
    }
  }, {
    key: "handleServerUserStatusChanged",
    value: function (e) {
      var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent
      this._distributeUserColor(e)
      this._updateUserFocusInfoList(e)
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_102.l(e))
      if (!(null === ($$_49$oTHelper$customEvent = $$_49.oTHelper.customEvent) || undefined === $$_49$oTHelper$customEvent)) {
        $$_49$oTHelper$customEvent.emit.focusItem("widget")
      }
    }
  }, {
    key: "_updateUserFocusInfoList",
    value: function (e) {
      var t = $$_43.d()
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_102.v($$_48_66.a.List(t.filter(function (t) {
        return e.some(function (e) {
          return e.id === t.userId
        })
      }))))
    }
  }, {
    key: "handleUserCountChange",
    value: function (e) {
      var t = []
      e.forEach(function (e) {
        t.push({
          id: e.coll_user_id,
          nickname: e.nickname,
          avatar_url: e.avatar_url,
          is_author: e.is_author,
          edit_permission: e.edit_permission
        })
      })
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_102.s(t))
    }
  }, {
    key: "handleUserEliminated",
    value: function (e) {
      var t = $$_$$_$$_$$_$$_src_shared_events_actions.b()
      this.disconnect()
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
        onConfirm: function () {
          $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Gf())
        },
        allowText: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, "confirm").toString(),
        onClose: function () {
          $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Gf())
        },
        title: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, e === o.ProjectRemove ? "OT.currentProjectBeDeleteTitle" : "OT.editPermissionLostTitle").toString(),
        content: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, e === o.ProjectRemove ? "OT.currentProjectBeDeleteDescription" : "OT.editPermissionLostDescription").toString(),
        cancelBtnVisible: false
      }))
    }
  }, {
    key: "handleCustomEventRelay",
    value: function (e) {
      var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent
      if (!(null === ($$_49$oTHelper$customEvent = $$_49.oTHelper.customEvent) || undefined === $$_49$oTHelper$customEvent)) {
        $$_49$oTHelper$customEvent.accept(e)
      }
    }
  }, {
    key: "handleSetCollAutoSave",
    value: function () {
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.di(true))
    }
  }, {
    key: "handleUserPermissionChange",
    value: function (e) {
      var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions$d$getState$common$userInfo
      var n = $$_$$_$$_$$_$$_src_shared_events_actions.b()
      var r = e.edit_permission === $$_18.c.ReadOnly ? $$_$$_$$_$$_$$_src_shared_ui_language.c(n, "OT.permissionChangeToReadOnly").toString() : $$_$$_$$_$$_$$_src_shared_ui_language.c(n, "OT.permissionChangeToEdit").toString()
      var o = null === ($$_$$_$$_$$_$$_src_shared_events_actions$d$getState$common$userInfo = $$_$$_$$_$$_$$_src_shared_events_actions.d.getState().common.userInfo) || undefined === $$_$$_$$_$$_$$_src_shared_events_actions$d$getState$common$userInfo ? undefined : $$_$$_$$_$$_$$_src_shared_events_actions$d$getState$common$userInfo.id
      var /* [auto-meaningful-name] */e$coll_user_id = e.coll_user_id
      if (o === e$coll_user_id) {
        $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          visible: true,
          message: r,
          duration: 2e3
        }))
        $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ci(e.edit_permission === $$_18.c.ReadOnly ? $$_18.c.ReadOnly : $$_18.c.Edit))
      }
      var a = Array.from($$_$$_$$_$$_$$_src_shared_events_actions.d.getState().oTState.cooperationUserList)
      var s = a.find(function (e) {
        return e.id === e$coll_user_id
      })
      if (s) {
        s.edit_permission = e.edit_permission
      }
      $$_$$_$$_$$_$$_src_shared_events_actions.a($$_102.s(a))
    }
  }, {
    key: "forceSetDoc",
    value: function () {
      var e = s.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return $$_43.b()
              case 2:
                this.initDocData = e.sent
                this.adapter.setDoc(this.initDocData)
                this._socket.subject.emit(S, {
                  doc: this.initDocData,
                  force: 1,
                  business_type: r.RevertProject
                })
                this.revision = 0
              case 6:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    }()
  }, {
    key: "collSetDoc",
    value: function (e) {
      if (e.business_type === r.RevertProject) {
        var t = $$_$$_$$_$$_$$_src_shared_events_actions.b()
        $$_$$_$$_$$_$$_src_shared_events_actions.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          allowText: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, "confirm").toString(),
          title: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, "OT.tips").toString(),
          content: $$_$$_$$_$$_$$_src_shared_ui_language.c(t, "OT.revert").toString(),
          cancelBtnVisible: false
        }))
      }
      this.initDocData = e.doc
      this._setAdapterInitData()
      this.handleNotifySnapshot(e)
    }
  }])
  return e
}()
export { Z as "24__part-2__Z" }
