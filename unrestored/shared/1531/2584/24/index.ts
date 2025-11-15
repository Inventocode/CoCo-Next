/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24
 */

"use strict"

var r
var o
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var a = function __importDefault(module) {
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
}(RegeneratorRuntime)
import s = require("../7")
import /* [auto-meaningful-name] */$$_27 = require("../27")
import /* [auto-meaningful-name] */$$_40 = require("../40")
import /* [auto-meaningful-name] */OtJson1 = require("ot-json1")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import /* [auto-meaningful-name] */$$_48_66 = require("../48/66")
import /* [auto-meaningful-name] */Lodash = require("lodash")
import /* [auto-meaningful-name] */$$_389 = require("../389")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language = require("../../../../../src/shared/ui/language")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../../src/shared/events/messages-wrapper")
import /* [auto-meaningful-name] */$$_102 = require("../102")
import /* [auto-meaningful-name] */$$_18 = require("../18")
import /* [auto-meaningful-name] */$$_10_index = require("../10/index")
import /* [auto-meaningful-name] */$$_25_index = require("../25/index")
import /* [auto-meaningful-name] */$_304 = require("./304")
import /* [auto-meaningful-name] */$$_49 = require("../49")
import /* [auto-meaningful-name] */$$_43 = require("../43")
import /* [auto-meaningful-name] */$_244 = require("./244")
var T = function () {
  function e() {
    $$_27.a(this, e)
    this._doc = null
    this._previousDoc = null
  }
  $$_40.a(e, [{
    key: "setDoc",
    value: function (e) {
      this._previousDoc = this._doc
      this._doc = e
    }
  }, {
    key: "getDoc",
    value: function () {
      if (this._doc) {
        return this._doc
      }
      console.error("error:the doc is null")
    }
  }, {
    key: "getPreviousDoc",
    value: function () {
      return this._previousDoc
    }
  }, {
    key: "setPreviousDoc",
    value: function (e) {
      return this._previousDoc = e
    }
  }, {
    key: "onGetSnapShort",
    value: function (e) {
      $$_43.f(Lodash.cloneDeep(e))
    }
  }, {
    key: "applyServerOp2IDE",
    value: function (e) {
      var t = this
      if ($_244.c(e)) {
        e.forEach(function (e) {
          t.handleServerOp2IDE(e)
        })
      } else {
        this.handleServerOp2IDE(e)
      }
    }
  }, {
    key: "handleServerOp2IDE",
    value: function (e) {
      var t = this
      var n = OtJson1.type.apply(this._doc, e)
      if (n && e) {
        this.setDoc(n)
        if ("blockly" !== e[0]) {
          var r = new Map()
          var o = $_244.b(e)
          var /* [auto-meaningful-name] */o$picks = o.picks
          var /* [auto-meaningful-name] */o$drops = o.drops
          o$picks.forEach(function (e) {
            if ($_244.f(e.op)) {
              r.set(e.op.p, $_304.a({
                path: ["$"].concat($$_25_index.a(e.path)),
                json: t._previousDoc
              })[0])
            }
            Object.entries($$_49.oTHelper).forEach(function (t) {
              var n = $$_10_index.a(t, 2)[1]
              if (n && n.serverOp && n.serverOp.pick) {
                n.serverOp.pick(e)
              }
            })
          })
          o$drops.forEach(function (e) {
            if ($_244.d(e.op)) {
              var t = r.get(e.op.d)
              e.op = {
                i: t
              }
            }
            Object.entries($$_49.oTHelper).forEach(function (t) {
              var n = $$_10_index.a(t, 2)[1]
              if (n && n.serverOp && n.serverOp.drop) {
                n.serverOp.drop(e)
              }
            })
          })
        } else {
          var /* [auto-meaningful-name] */$$_49$oTHelper$blink
          if (!(null === ($$_49$oTHelper$blink = $$_49.oTHelper.blink) || undefined === $$_49$oTHelper$blink)) {
            $$_49$oTHelper$blink.serverOp.applyServerOp(e)
          }
        }
      }
    }
  }, {
    key: "applyOpFromIDE",
    value: function (e) {
      var t = OtJson1.type.apply(this._doc, e)
      if (t) {
        this.setDoc(t)
      }
    }
  }])
  return e
}()
var /* [auto-meaningful-name] */Set_doc = "set_doc"
var /* [auto-meaningful-name] */Set_doc_ack = "set_doc_ack"
var A = "join"
var /* [auto-meaningful-name] */Join_ack = "join_ack"
var /* [auto-meaningful-name] */Operation = "operation"
var /* [auto-meaningful-name] */Operation_ack = "operation_ack"
var /* [auto-meaningful-name] */Operation_relay = "operation_relay"
var /* [auto-meaningful-name] */Get_online_user_list_ack = "get_online_user_list_ack"
var /* [auto-meaningful-name] */Svr_user_status_change = "svr_user_status_change"
var /* [auto-meaningful-name] */Svr_coll_user_change = "svr_coll_user_change"
var /* [auto-meaningful-name] */Svr_coll_user_eliminated = "svr_coll_user_eliminated"
var /* [auto-meaningful-name] */Svr_save_work = "svr_save_work"
var /* [auto-meaningful-name] */Svr_edit_permit_change = "svr_edit_permit_change"
var /* [auto-meaningful-name] */Set_doc_relay = "set_doc_relay"
var /* [auto-meaningful-name] */User_focus_on_pos = "user_focus_on_pos"
var /* [auto-meaningful-name] */User_focus_on_pos_ack = "user_focus_on_pos_ack"
var /* [auto-meaningful-name] */User_focus_on_pos_relay = "user_focus_on_pos_relay"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions = require("../../../../../src/shared/events/actions")
import /* [auto-meaningful-name] */Socket$ioClient = require("socket.io-client")
var z = function __importDefault(module) {
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
}(Socket$ioClient)
var /* [auto-meaningful-name] */require$$_59_index$a$oTSocketHost = require("../59/index").a.oTSocketHost
var K = function () {
  function e(t, n) {
    $$_27.a(this, e)
    this.subject = undefined
    this.client = undefined
    this.subject = z()(require$$_59_index$a$oTSocketHost, {
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
      this.subject.on(Operation_ack, function (e) {
        var /* [auto-meaningful-name] */e$code = e.code
        console.info("===OPERATION_ACK====")
        if (1e7 === e$code) {
          if (window.confirm("服务器响应错误，是否刷新页面？")) {
            window.location.reload()
          }
        }
        t.client.handleOperationAck()
      }).on(Operation_relay, function (e) {
        console.info("===OPERATION_RELAY===", e)
        t.client.handleApplyServer(e.op[0][0])
      }).on(Join_ack, function (e) {
        console.info("===JOIN_ACK===", e)
        t.client.handleJoinAck(e)
      }).on(Set_doc_ack, function (e) {
        console.info("===SET_DOC_ACK===")
        t.client.handleSetDocAck(e)
      }).on(Get_online_user_list_ack, function (e) {
        console.info("===GET_ONLINE_USER_LIST_ACK===")
      }).on(Svr_user_status_change, function (e) {
        console.info("===SVR_USER_STATUS_CHANGE===")
        t.client.handleServerUserStatusChanged(e)
      }).on(Svr_coll_user_change, function (e) {
        t.client.handleUserCountChange(e)
        console.info("===SVR_COLL_USER_CHANGE===")
      }).on(Svr_coll_user_eliminated, function (e) {
        console.info("===SVR_COLL_USER_ELIMINATED===")
        t.client.handleUserEliminated(e.eliminated_code)
      }).on(User_focus_on_pos_ack, function () {
        console.info("===USER_FOCUS_ON_POS_ACK===")
      }).on(User_focus_on_pos_relay, function (e) {
        console.info("===USER_FOCUS_ON_POS_RELAY===", e)
        t.client.handleCustomEventRelay(e)
      }).on(Svr_save_work, function () {
        t.client.handleSetCollAutoSave()
      }).on(Svr_edit_permit_change, function (e) {
        t.client.handleUserPermissionChange(e)
      }).on(Set_doc_relay, function (e) {
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
      n._socket.subject.emit(Operation, {
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
      this._socket.subject.emit(User_focus_on_pos, e)
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
      var e = s.a(a.a.mark(function e(t) {
        var /* [auto-meaningful-name] */t$code
        var /* [auto-meaningful-name] */t$data
        return a.a.wrap(function (e) {
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
                this._socket.subject.emit(Set_doc, {
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
      var e = s.a(a.a.mark(function e() {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return $$_43.b()
              case 2:
                this.initDocData = e.sent
                this.adapter.setDoc(this.initDocData)
                this._socket.subject.emit(Set_doc, {
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
import /* [auto-meaningful-name] */$_377_index = require("./377/index")
var $ = new (function () {
  function e() {
    $$_27.a(this, e)
    this.client = undefined
    this.workerId = undefined
    this.workerId = ""
  }
  $$_40.a(e, [{
    key: "init",
    value: function () {
      var e = s.a(a.a.mark(function e(t) {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                this.disconnect()
                this.workerId = t
                this.client = new Z(t)
                e.next = 5
                return this.client.waitInitial()
              case 5:
                if ("suc" !== e.sent.status) {
                  e.next = 11
                  break
                }
                $$_49.oTHelper.init()
                $_377_index.blinkOTAdapter.start()
                e.next = 13
                break
              case 11:
                e.next = 13
                return this.reconnect()
              case 13:
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
    key: "reconnect",
    value: function () {
      var e = s.a(a.a.mark(function e() {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return $$_15.lb(500)
              case 2:
                this.disconnect()
                e.next = 5
                return this.init(this.workerId)
              case 5:
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
    key: "disconnect",
    value: function () {
      var e = s.a(a.a.mark(function e() {
        var /* [auto-meaningful-name] */this$client
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!(null === (this$client = this.client) || undefined === this$client)) {
                  this$client.disconnect()
                }
                this.client = undefined
                $_377_index.blinkOTAdapter.stop()
                $$_49.oTHelper.dispose()
              case 4:
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
    key: "applyClient",
    value: function (e) {
      var /* [auto-meaningful-name] */this$client
      if (!(null === (this$client = this.client) || undefined === this$client)) {
        this$client.applyClient(e)
      }
    }
  }, {
    key: "getDoc",
    value: function () {
      var /* [auto-meaningful-name] */this$client
      var /* [auto-meaningful-name] */this$client$adapter
      return null === (this$client = this.client) || undefined === this$client || null === (this$client$adapter = this$client.adapter) || undefined === this$client$adapter ? undefined : this$client$adapter.getDoc()
    }
  }, {
    key: "getPreviousDoc",
    value: function () {
      var /* [auto-meaningful-name] */this$client
      var /* [auto-meaningful-name] */this$client$adapter
      return null === (this$client = this.client) || undefined === this$client || null === (this$client$adapter = this$client.adapter) || undefined === this$client$adapter ? undefined : this$client$adapter.getPreviousDoc()
    }
  }])
  return e
}())()
window.oT = $
window.json = OtJson1
export { $ as a }
export default $
