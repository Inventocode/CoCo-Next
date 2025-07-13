"use strict";

var r;
var o;
import * as i from "../1/index";
import * as a from "../1/index";
import * as s from "../7";
import * as c from "../27";
import * as l from "../40";
import * as u from "../1035/32/index";
import * as d from "../15/index";
import * as p from "../729/66";
import * as f from "../31/index";
import * as h from "../389";
import * as m from "../23";
import * as g from "../2/index";
import * as _ from "../102";
import * as v from "../18";
import * as b from "../10/index";
import * as y from "../25/index";
import * as E from "../49/304";
import * as O from "../49/index";
import * as w from "../43";
import * as C from "../49/244";
var T = function () {
  function e() {
    Object(c.a)(this, e);
    this._doc = null;
    this._previousDoc = null;
  }
  Object(l.a)(e, [{
    key: "setDoc",
    value: function (e) {
      this._previousDoc = this._doc;
      this._doc = e;
    }
  }, {
    key: "getDoc",
    value: function () {
      if (this._doc) {
        return this._doc;
      }
      console.error("error:the doc is null");
    }
  }, {
    key: "getPreviousDoc",
    value: function () {
      return this._previousDoc;
    }
  }, {
    key: "setPreviousDoc",
    value: function (e) {
      return this._previousDoc = e;
    }
  }, {
    key: "onGetSnapShort",
    value: function (e) {
      Object(w.f)(Object(f.cloneDeep)(e));
    }
  }, {
    key: "applyServerOp2IDE",
    value: function (e) {
      var t = this;
      if (Object(C.c)(e)) {
        e.forEach(function (e) {
          t.handleServerOp2IDE(e);
        });
      } else {
        this.handleServerOp2IDE(e);
      }
    }
  }, {
    key: "handleServerOp2IDE",
    value: function (e) {
      var t = this;
      var n = u.type.apply(this._doc, e);
      if (n && e) {
        if (this.setDoc(n), "blockly" !== e[0]) {
          var r = new Map();
          var o = Object(C.b)(e);
          var i = o.picks;
          var a = o.drops;
          i.forEach(function (e) {
            if (Object(C.f)(e.op)) {
              r.set(e.op.p, Object(E.a)({
                path: ["$"].concat(Object(y.a)(e.path)),
                json: t._previousDoc
              })[0]);
            }
            Object.entries(O.oTHelper).forEach(function (t) {
              var n = Object(b.a)(t, 2)[1];
              if (n && n.serverOp && n.serverOp.pick) {
                n.serverOp.pick(e);
              }
            });
          });
          a.forEach(function (e) {
            if (Object(C.d)(e.op)) {
              var t = r.get(e.op.d);
              e.op = {
                i: t
              };
            }
            Object.entries(O.oTHelper).forEach(function (t) {
              var n = Object(b.a)(t, 2)[1];
              if (n && n.serverOp && n.serverOp.drop) {
                n.serverOp.drop(e);
              }
            });
          });
        } else {
          var s;
          if (!(null === (s = O.oTHelper.blink) || void 0 === s)) {
            s.serverOp.applyServerOp(e);
          }
        }
      }
    }
  }, {
    key: "applyOpFromIDE",
    value: function (e) {
      var t = u.type.apply(this._doc, e);
      if (t) {
        this.setDoc(t);
      }
    }
  }]);
  return e;
}();
var S = "set_doc";
var I = "set_doc_ack";
var A = "join";
var j = "join_ack";
var N = "operation";
var R = "operation_ack";
var k = "operation_relay";
var x = "get_online_user_list_ack";
var D = "svr_user_status_change";
var M = "svr_coll_user_change";
var L = "svr_coll_user_eliminated";
var P = "svr_save_work";
var B = "svr_edit_permit_change";
var F = "set_doc_relay";
var G = "user_focus_on_pos";
var U = "user_focus_on_pos_ack";
var W = "user_focus_on_pos_relay";
import * as H from "../38/index";
import * as V from "./481/index";
import * as z from "./481/index";
var Y = require("../59/index").a.oTSocketHost;
var K = function () {
  function e(t, n) {
    Object(c.a)(this, e);
    this.subject = void 0;
    this.client = void 0;
    this.subject = z()(Y, {
      path: "/collaborate/",
      query: {
        work_id: n,
        stag: 4
      },
      upgrade: !1,
      transports: ["websocket"]
    });
    this.client = t;
    this.onSocketEvent(n);
  }
  Object(l.a)(e, [{
    key: "onSocketEvent",
    value: function (e) {
      var t = this;
      this.subject.on(R, function (e) {
        var n = e.code;
        if (console.info("===OPERATION_ACK===="), 1e7 === n) {
          if (window.confirm("\u670d\u52a1\u5668\u54cd\u5e94\u9519\u8bef\uff0c\u662f\u5426\u5237\u65b0\u9875\u9762\uff1f")) {
            window.location.reload();
          }
        }
        t.client.handleOperationAck();
      }).on(k, function (e) {
        console.info("===OPERATION_RELAY===", e);
        t.client.handleApplyServer(e.op[0][0]);
      }).on(j, function (e) {
        console.info("===JOIN_ACK===", e);
        t.client.handleJoinAck(e);
      }).on(I, function (e) {
        console.info("===SET_DOC_ACK===");
        t.client.handleSetDocAck(e);
      }).on(x, function (e) {
        console.info("===GET_ONLINE_USER_LIST_ACK===");
      }).on(D, function (e) {
        console.info("===SVR_USER_STATUS_CHANGE===");
        t.client.handleServerUserStatusChanged(e);
      }).on(M, function (e) {
        t.client.handleUserCountChange(e);
        console.info("===SVR_COLL_USER_CHANGE===");
      }).on(L, function (e) {
        console.info("===SVR_COLL_USER_ELIMINATED===");
        t.client.handleUserEliminated(e.eliminated_code);
      }).on(U, function () {
        console.info("===USER_FOCUS_ON_POS_ACK===");
      }).on(W, function (e) {
        console.info("===USER_FOCUS_ON_POS_RELAY===", e);
        t.client.handleCustomEventRelay(e);
      }).on(P, function () {
        t.client.handleSetCollAutoSave();
      }).on(B, function (e) {
        t.client.handleUserPermissionChange(e);
      }).on(F, function (e) {
        t.client.collSetDoc(e);
      }).on("reconnect", function () {
        t.client.handleServerReconnect();
      }).on("disconnect", function () {
        t.client.handleDisconnect();
      }).on("connect", function () {
        t.subject.emit(A, e);
      });
    }
  }]);
  return e;
}();
var q = function () {
  function e() {
    Object(c.a)(this, e);
    this.applyClient = function (e, t) {
      e.sendOperation(e.revision, t);
      e.setState(new X(t));
    };
    this.serverAck = function (e) {
      throw new Error("There is no pending operation.");
    };
    this.transformSelection = function (e) {
      return e;
    };
  }
  Object(l.a)(e, [{
    key: "applyServer",
    value: function (e, t) {
      e.setState(this);
      return {
        op: t
      };
    }
  }, {
    key: "resend",
    value: function (e) {}
  }]);
  return e;
}();
var X = function () {
  function e(t) {
    Object(c.a)(this, e);
    this.outstanding = void 0;
    this.outstanding = t;
  }
  Object(l.a)(e, [{
    key: "applyClient",
    value: function (e, t) {
      e.setState(new Q(this.outstanding, t));
    }
  }, {
    key: "applyServer",
    value: function (t, n) {
      var r = [0, 0];
      r[1] = u.type.transformNoConflict(n, this.outstanding, "left");
      r[0] = u.type.transformNoConflict(this.outstanding, n, "right");
      t.setState(new e(r[0]));
      return {
        op: r[1]
      };
    }
  }, {
    key: "serverAck",
    value: function (e) {
      e.setState(new q());
    }
  }, {
    key: "transformSelection",
    value: function (e) {}
  }, {
    key: "resend",
    value: function (e) {
      e.sendOperation(e.revision, this.outstanding);
    }
  }]);
  return e;
}();
var Q = function () {
  function e(t, n) {
    Object(c.a)(this, e);
    this.outstanding = void 0;
    this.buffer = void 0;
    this.outstanding = t;
    this.buffer = n;
  }
  Object(l.a)(e, [{
    key: "applyClient",
    value: function (t, n) {
      var r = u.type.compose(this.buffer, n);
      t.setState(new e(this.outstanding, r));
    }
  }, {
    key: "applyServer",
    value: function (t, n) {
      var r = [0, 0];
      var o = [0, 0];
      r[1] = u.type.transformNoConflict(n, this.outstanding, "left");
      o[1] = u.type.transformNoConflict(r[1], this.buffer, "left");
      r[0] = u.type.transformNoConflict(this.outstanding, n, "right");
      o[0] = u.type.transformNoConflict(this.buffer, r[1], "right");
      t.setState(new e(r[0], o[0]));
      return {
        op: o[1]
      };
    }
  }, {
    key: "serverAck",
    value: function (e) {
      e.setState(new X(this.buffer));
      e.sendOperation(e.revision, this.buffer);
    }
  }, {
    key: "transformSelection",
    value: function (e) {
      return e.transform(this.outstanding).transform(this.buffer);
    }
  }, {
    key: "resend",
    value: function (e) {
      e.sendOperation(e.revision, this.outstanding);
    }
  }]);
  return e;
}();
!function (e) {
  e[e.RevertProject = 1] = "RevertProject";
}(r || (r = {}));
(function (e) {
  e[e.UserOperation = 1] = "UserOperation";
  e[e.ProjectRemove = 2] = "ProjectRemove";
})(o || (o = {}));
var Z = function () {
  function e(t) {
    var n = this;
    Object(c.a)(this, e);
    this._socket = void 0;
    this.revision = void 0;
    this.adapter = void 0;
    this.isSuccessfulCreateRoom = void 0;
    this.state = void 0;
    this.initDocData = void 0;
    this._canRefreshUrl = !0;
    this.socketSuc = void 0;
    this.sendOperation = function (e, t) {
      n._socket.subject.emit(N, {
        revision: e,
        op: [[t]]
      });
    };
    this.applyOperation = function (e) {
      n.adapter.applyServerOp2IDE(e);
    };
    this.socketSuc = {
      resolve: function (e) {},
      reject: function (e) {},
      promise: Promise.resolve({
        status: "suc"
      })
    };
    this.socketSuc.promise = new Promise(function (e, t) {
      n.socketSuc.resolve = e;
      n.socketSuc.reject = t;
    });
    this.revision = 0;
    this._socket = new K(this, t);
    this.adapter = new T();
    this.state = new q();
    this._canRefreshUrl = !0;
  }
  Object(l.a)(e, [{
    key: "disconnect",
    value: function () {
      this._canRefreshUrl = !1;
      this._socket.subject.close();
    }
  }, {
    key: "waitInitial",
    value: function () {
      return this.socketSuc.promise;
    }
  }, {
    key: "setState",
    value: function (e) {
      this.state = e;
    }
  }, {
    key: "emitCustomEvent",
    value: function (e) {
      console.info("======= USER_FOCUS_ON_POS=======");
      this._socket.subject.emit(G, e);
    }
  }, {
    key: "applyClient",
    value: function (e) {
      console.info("======= apply Client=======", e);
      e = Object(f.cloneDeep)(e);
      this.state.applyClient(this, e);
      this.adapter.applyOpFromIDE(e);
    }
  }, {
    key: "transformSelection",
    value: function (e) {
      return this.state.transformSelection(e);
    }
  }, {
    key: "handleApplyServer",
    value: function (e) {
      console.info("================== accept Server op ==================");
      try {
        this.revision++;
        var t = this.state.applyServer(this, e).op;
        this.applyOperation(t);
      } catch (n) {
        console.error("applyServer error", n);
      }
    }
  }, {
    key: "handleNotifySnapshot",
    value: function (e) {
      this.revision = e.revision;
      this.adapter.onGetSnapShort(e.doc);
    }
  }, {
    key: "handleServerReconnect",
    value: function () {
      if ("function" === typeof this.state.resend) {
        this.state.resend(this);
      }
    }
  }, {
    key: "handleDisconnect",
    value: function () {
      if (this._canRefreshUrl) {
        if (window.confirm("\u4e0e\u540e\u53f0\u8fde\u63a5\u65ad\u5f00\uff0c\u662f\u5426\u5237\u65b0\u9875\u9762\uff1f")) {
          window.location.reload();
        }
      }
    }
  }, {
    key: "handleOperationAck",
    value: function () {
      this.revision++;
      this.state.serverAck(this);
    }
  }, {
    key: "handleJoinAck",
    value: function () {
      var e = Object(s.a)(a.a.mark(function e(t) {
        var n;
        var r;
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (n = t.code, r = t.data, this.initDocData = void 0, 20000002 !== n) {
                  e.next = 9;
                  break;
                }
                e.next = 5;
                return Object(w.b)();
              case 5:
                this.initDocData = e.sent;
                this._socket.subject.emit(S, {
                  doc: this.initDocData
                });
                e.next = 10;
                break;
              case 9:
                if (20000001 === n) {
                  console.error("sock \u542f\u52a8\u5931\u8d25\u8bf7\u91cd\u8bd5");
                  this.socketSuc.resolve({
                    status: "fail"
                  });
                } else {
                  if (r) {
                    this.initDocData = r.doc;
                    this._setAdapterInitData();
                    this.handleNotifySnapshot(r);
                    this.socketSuc.resolve({
                      status: "suc"
                    });
                  }
                }
              case 10:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "_setAdapterInitData",
    value: function () {
      if (this.initDocData) {
        this.adapter.setDoc(this.initDocData);
      }
    }
  }, {
    key: "handleSetDocAck",
    value: function (e) {
      if (20000001 === e.code) {
        this._socket.subject.emit(A);
      } else {
        this._setAdapterInitData();
        this.socketSuc.resolve({
          status: "suc"
        });
      }
    }
  }, {
    key: "_distributeUserColor",
    value: function (e) {
      var t;
      var n = Object(w.c)();
      Object.keys(n).forEach(function (t) {
        if (!e.some(function (e) {
          return e.id === Number(t);
        })) {
          delete n[t];
        }
      });
      var r = [];
      e.forEach(function (e) {
        n[e.id] = function (e) {
          return h.b.find(function (t) {
            return !e.includes(t.toUpperCase());
          }) || h.a;
        }(r);
        r.push(n[e.id]);
      });
      if (!(null === (t = O.oTHelper.customEvent) || void 0 === t)) {
        t.emit.userColors(n);
      }
      Object(H.a)(Object(_.t)(n));
    }
  }, {
    key: "handleServerUserStatusChanged",
    value: function (e) {
      var t;
      this._distributeUserColor(e);
      this._updateUserFocusInfoList(e);
      Object(H.a)(Object(_.l)(e));
      if (!(null === (t = O.oTHelper.customEvent) || void 0 === t)) {
        t.emit.focusItem("widget");
      }
    }
  }, {
    key: "_updateUserFocusInfoList",
    value: function (e) {
      var t = Object(w.d)();
      Object(H.a)(Object(_.v)(p.a.List(t.filter(function (t) {
        return e.some(function (e) {
          return e.id === t.userId;
        });
      }))));
    }
  }, {
    key: "handleUserCountChange",
    value: function (e) {
      var t = [];
      e.forEach(function (e) {
        t.push({
          id: e.coll_user_id,
          nickname: e.nickname,
          avatar_url: e.avatar_url,
          is_author: e.is_author,
          edit_permission: e.edit_permission
        });
      });
      Object(H.a)(Object(_.s)(t));
    }
  }, {
    key: "handleUserEliminated",
    value: function (e) {
      var t = Object(H.b)();
      this.disconnect();
      Object(H.a)(Object(g.zh)({
        onConfirm: function () {
          Object(H.a)(Object(g.Gf)());
        },
        allowText: Object(m.c)(t, "confirm").toString(),
        onClose: function () {
          Object(H.a)(Object(g.Gf)());
        },
        title: Object(m.c)(t, e === o.ProjectRemove ? "OT.currentProjectBeDeleteTitle" : "OT.editPermissionLostTitle").toString(),
        content: Object(m.c)(t, e === o.ProjectRemove ? "OT.currentProjectBeDeleteDescription" : "OT.editPermissionLostDescription").toString(),
        cancelBtnVisible: !1
      }));
    }
  }, {
    key: "handleCustomEventRelay",
    value: function (e) {
      var t;
      if (!(null === (t = O.oTHelper.customEvent) || void 0 === t)) {
        t.accept(e);
      }
    }
  }, {
    key: "handleSetCollAutoSave",
    value: function () {
      Object(H.a)(Object(g.di)(!0));
    }
  }, {
    key: "handleUserPermissionChange",
    value: function (e) {
      var t;
      var n = Object(H.b)();
      var r = e.edit_permission === v.c.ReadOnly ? Object(m.c)(n, "OT.permissionChangeToReadOnly").toString() : Object(m.c)(n, "OT.permissionChangeToEdit").toString();
      var o = null === (t = H.d.getState().common.userInfo) || void 0 === t ? void 0 : t.id;
      var i = e.coll_user_id;
      if (o === i) {
        Object(H.a)(Object(g.mj)({
          visible: !0,
          message: r,
          duration: 2e3
        }));
        Object(H.a)(Object(g.Ci)(e.edit_permission === v.c.ReadOnly ? v.c.ReadOnly : v.c.Edit));
      }
      var a = Array.from(H.d.getState().oTState.cooperationUserList);
      var s = a.find(function (e) {
        return e.id === i;
      });
      if (s) {
        s.edit_permission = e.edit_permission;
      }
      Object(H.a)(Object(_.s)(a));
    }
  }, {
    key: "forceSetDoc",
    value: function () {
      var e = Object(s.a)(a.a.mark(function e() {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return Object(w.b)();
              case 2:
                this.initDocData = e.sent;
                this.adapter.setDoc(this.initDocData);
                this._socket.subject.emit(S, {
                  doc: this.initDocData,
                  force: 1,
                  business_type: r.RevertProject
                });
                this.revision = 0;
              case 6:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "collSetDoc",
    value: function (e) {
      if (e.business_type === r.RevertProject) {
        var t = Object(H.b)();
        Object(H.a)(Object(g.zh)({
          allowText: Object(m.c)(t, "confirm").toString(),
          title: Object(m.c)(t, "OT.tips").toString(),
          content: Object(m.c)(t, "OT.revert").toString(),
          cancelBtnVisible: !1
        }));
      }
      this.initDocData = e.doc;
      this._setAdapterInitData();
      this.handleNotifySnapshot(e);
    }
  }]);
  return e;
}();
import * as J from "../49/377/index";
var $ = new (function () {
  function e() {
    Object(c.a)(this, e);
    this.client = void 0;
    this.workerId = void 0;
    this.workerId = "";
  }
  Object(l.a)(e, [{
    key: "init",
    value: function () {
      var e = Object(s.a)(a.a.mark(function e(t) {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                this.disconnect();
                this.workerId = t;
                this.client = new Z(t);
                e.next = 5;
                return this.client.waitInitial();
              case 5:
                if ("suc" !== e.sent.status) {
                  e.next = 11;
                  break;
                }
                O.oTHelper.init();
                J.blinkOTAdapter.start();
                e.next = 13;
                break;
              case 11:
                e.next = 13;
                return this.reconnect();
              case 13:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "reconnect",
    value: function () {
      var e = Object(s.a)(a.a.mark(function e() {
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return Object(d.lb)(500);
              case 2:
                this.disconnect();
                e.next = 5;
                return this.init(this.workerId);
              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "disconnect",
    value: function () {
      var e = Object(s.a)(a.a.mark(function e() {
        var t;
        return a.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!(null === (t = this.client) || void 0 === t)) {
                  t.disconnect();
                }
                this.client = void 0;
                J.blinkOTAdapter.stop();
                O.oTHelper.dispose();
              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "applyClient",
    value: function (e) {
      var t;
      if (!(null === (t = this.client) || void 0 === t)) {
        t.applyClient(e);
      }
    }
  }, {
    key: "getDoc",
    value: function () {
      var e;
      var t;
      return null === (e = this.client) || void 0 === e || null === (t = e.adapter) || void 0 === t ? void 0 : t.getDoc();
    }
  }, {
    key: "getPreviousDoc",
    value: function () {
      var e;
      var t;
      return null === (e = this.client) || void 0 === e || null === (t = e.adapter) || void 0 === t ? void 0 : t.getPreviousDoc();
    }
  }]);
  return e;
}())();
window.oT = $;
window.json = u;
export { $ as a };