/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-16
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_11 from "../../11"
import * as /* [auto-meaningful-name] */$$_$$_25_index from "../../25/index"
import * as /* [auto-meaningful-name] */$$_$$_10_index from "../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_48_87 from "../../48/87"
import * as /* [auto-meaningful-name] */$$_$$_27 from "../../27"
import * as /* [auto-meaningful-name] */$$_$$_39 from "../../39"
import * as /* [auto-meaningful-name] */Socket$ioClient from "socket.io-client"
import /* [auto-meaningful-name] */_Socket$ioClient from "socket.io-client"
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$$_$$_57_index from "../../57/index"
var Bl = "".concat($$_$$_57_index.a.socketHost, ":9090")
var Fl = function () {
  function e(t, n, r) {
    var o = this
    $$_$$_27.a(this, e)
    this.workId = t
    this.roomName = n
    this.roomId = r
    this.members = []
    this.username = undefined
    this.socket = undefined
    this.error = function (e) {
      if (e.message) {
        $$_index.emitRoomError(e.message)
      } else {
        $$_index.emitRoomError("网络异常")
      }
    }
    this.onMemberJoin = function (e) {
      if (!o.members.includes(e.username)) {
        o.members.push(e.username)
      }
      $$_index.emitRoomMemberJoin(e.username)
    }
    this.onMemberLeave = function (e) {
      var t = o.members.indexOf(e.username)
      if (-1 !== t) {
        o.members.splice(t, 1)
      }
      $$_index.emitRoomMemberLeave(e.username)
    }
    this.onReceiveData = function (e) {
      Object.entries(e.data).forEach(function (e) {
        var t = $$_$$_10_index.a(e, 2)
        var n = t[0]
        var r = t[1]
        $$_index.emitRoomMessage(n, r)
      })
    }
  }
  $$_$$_39.a(e, [
    {
      key: "join",
      value: function () {
        var e = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
          var n = this
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return $$_$$_48_87.b(this.roomId)
                case 2:
                  if (e.sent) {
                    e.next = 5
                    break
                  }
                  throw new Error("Cannot join room")
                case 5:
                  this.username = t
                  return e.abrupt("return", new Promise(function (e, r) {
                    var o = _Socket$ioClient(Bl, {
                      path: "/coconut",
                      query: $$_$$_48_87.a(),
                      transports: ["websocket"]
                    })
                    window.socket = o
                    o.once("error", n.error)
                    o.once("disconnect", n.error)
                    o.once("connect", function () {
                      o.emit("join", {
                        work_id: n.workId,
                        room_name: n.roomName,
                        username: t,
                        room_id: n.roomId
                      })
                      o.once("join_ack", function (t) {
                        n.socket = o
                        n.subscribe()
                        e(t)
                      })
                      o.off("disconnect", n.error)
                      o.off("error", n.error)
                    })
                  }))
                case 7:
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
      key: "subscribe",
      value: function () {
        var /* [auto-meaningful-name] */this$socket
        var /* [auto-meaningful-name] */_this$socket
        var /* [auto-meaningful-name] */_this$socket2
        var /* [auto-meaningful-name] */_this$socket3
        if (!(null === (this$socket = this.socket) || undefined === this$socket)) {
          this$socket.on("join", this.onMemberJoin)
        }
        if (!(null === (_this$socket = this.socket) || undefined === _this$socket)) {
          _this$socket.on("leave", this.onMemberLeave)
        }
        if (!(null === (_this$socket2 = this.socket) || undefined === _this$socket2)) {
          _this$socket2.on("broadcast", this.onReceiveData)
        }
        if (!(null === (_this$socket3 = this.socket) || undefined === _this$socket3)) {
          _this$socket3.on("error", this.error)
        }
      }
    }, {
      key: "unsubscribe",
      value: function () {
        var /* [auto-meaningful-name] */this$socket
        var /* [auto-meaningful-name] */_this$socket4
        var /* [auto-meaningful-name] */_this$socket5
        var /* [auto-meaningful-name] */_this$socket6
        if (!(null === (this$socket = this.socket) || undefined === this$socket)) {
          this$socket.off("join", this.onMemberJoin)
        }
        if (!(null === (_this$socket4 = this.socket) || undefined === _this$socket4)) {
          _this$socket4.off("leave", this.onMemberLeave)
        }
        if (!(null === (_this$socket5 = this.socket) || undefined === _this$socket5)) {
          _this$socket5.off("broadcast", this.onReceiveData)
        }
        if (!(null === (_this$socket6 = this.socket) || undefined === _this$socket6)) {
          _this$socket6.off("error", this.error)
        }
      }
    }, {
      key: "leave",
      value: function () {
        var /* [auto-meaningful-name] */this$socket
        var /* [auto-meaningful-name] */_this$socket7
        this.unsubscribe()
        if (!(null === (this$socket = this.socket) || undefined === this$socket)) {
          this$socket.emit("leave", {
            work_id: this.workId,
            room_name: this.roomName,
            room_id: this.roomId,
            username: this.username
          })
        }
        if (!(null === (_this$socket7 = this.socket) || undefined === _this$socket7)) {
          _this$socket7.close()
        }
      }
    }, {
      key: "broadcast",
      value: function () {
        var e = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
          var /* [auto-meaningful-name] */this$socket
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!(null === (this$socket = this.socket) || undefined === this$socket)) {
                    this$socket.emit("broadcast", {
                      username: this.username,
                      room_id: this.roomId,
                      data: t
                    })
                  }
                case 1:
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
      key: "updateMemberList",
      value: function () {
        var e = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
          var /* [auto-meaningful-name] */e$sent
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return $$_$$_48_87.f(this.roomId)
                case 2:
                  e$sent = e.sent
                  this.members = e$sent || []
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
    }
  ])
  return e
}()
var Gl = {}
function Wl(e, t, n) {
  return e.then(function (e) {
    if (t) {
      return Promise.resolve(t.apply(undefined, $$_$$_25_index.a(e)))
    }
  }).catch(function (e) {
    var /* [auto-meaningful-name] */e$response
    var /* [auto-meaningful-name] */e$response$data
    var /* [auto-meaningful-name] */e$message = e.message
    if (Axios.isAxiosError(e)) {
      if ("ECONNABORTED" === e.code) {
        e$message = "网络有问题"
      } else {
        if (null === (e$response = e.response) || undefined === e$response || null === (e$response$data = e$response.data) || undefined === e$response$data ? undefined : e$response$data.msg) {
          e$message = e.response.data.msg
        }
      }
    }
    if (n) {
      $$_$$_14.a.condition(false, {
        type: "error",
        message: "房间积木：".concat(e$message)
      })
      return Promise.resolve(n(e$message))
    }
  })
}
function Ul(e) {
  Gl.workId = e.workId
  $$_$$_48_87.g(e.context)
}
function Hl(e, t, n) {
  return Wl($$_$$_48_87.d(e).then(function () {
    Gl.username = e
    return [e]
  }), t, n)
}
function Vl(e, t, n, r) {
  return zl.apply(this, arguments)
}
function zl() {
  return (zl = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var /* [auto-meaningful-name] */Gl$workId
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            Gl$workId = Gl.workId
            $$_$$_14.a.isNumber(n, {
              type: "error",
              messageId: "argNotNumber",
              values: {
                name: "房间人数"
              }
            })
            return e.abrupt("return", Wl($$_$$_7.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (undefined !== Gl$workId) {
                        e.next = 2
                        break
                      }
                      return e.abrupt("return", o("not initialized"))
                    case 2:
                      e.next = 4
                      return $$_$$_48_87.c(t, Gl$workId, n).then(function (e) {
                        if (!e) {
                          o("创建房间失败")
                        }
                      })
                    case 4:
                      return e.abrupt("return", [t, n])
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))(), r, o))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Yl(e, t) {
  return Kl.apply(this, arguments)
}
function Kl() {
  return (Kl = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */Gl$workId
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            Gl$workId = Gl.workId
            return e.abrupt("return", Wl($$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var t
              var n
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (undefined !== Gl$workId) {
                        e.next = 2
                        break
                      }
                      throw new Error("not initialized")
                    case 2:
                      t = []
                      n = []
                      e.next = 6
                      return $$_$$_48_87.e(Gl$workId).then(function (e) {
                        if (e) {
                          e.forEach(function (e) {
                            t.push(e.room_name)
                            n.push(e.username_list)
                          })
                        }
                        Gl.roomList = e
                      })
                    case 6:
                      return e.abrupt("return", [t, n])
                    case 7:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))(), t, n))
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ql(e, t, n) {
  return Xl.apply(this, arguments)
}
function Xl() {
  return (Xl = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Wl($$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var /* [auto-meaningful-name] */Gl$workId
              var /* [auto-meaningful-name] */Gl$username
              var o
              var /* [auto-meaningful-name] */e$sent
              var a
              var /* [auto-meaningful-name] */_e$sent
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (Gl$workId = Gl.workId, Gl$username = Gl.username, !Gl$workId) {
                        e.next = 7
                        break
                      }
                      e.next = 4
                      return $$_$$_48_87.e(Gl$workId)
                    case 4:
                      e$sent = e.sent
                      a = e$sent.find(function (e) {
                        return e.room_name === t
                      })
                      o = null === a || undefined === a ? undefined : a.id
                    case 7:
                      if (Gl.roomName = t, undefined !== Gl$workId && undefined !== o) {
                        e.next = 11
                        break
                      }
                      console.error("进入房间失败")
                      throw new Error("进入房间失败")
                    case 11:
                      if (undefined !== Gl$username) {
                        e.next = 14
                        break
                      }
                      console.error("未设置昵称")
                      throw new Error("未设置昵称")
                    case 14:
                      if (Gl.session) {
                        Gl.session.leave()
                      }
                      Gl.session = new Fl(Gl$workId, t, o)
                      e.next = 18
                      return Gl.session.join(Gl$username)
                    case 18:
                      _e$sent = e.sent
                      Gl.session.members = _e$sent.username_list
                      return e.abrupt("return", [t, Gl.session.members.length])
                    case 21:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))(), n, r))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ql() {
  return Zl.apply(this, arguments)
}
function Zl() {
  return (Zl = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */Gl$session
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!(null === (Gl$session = Gl.session) || undefined === Gl$session)) {
              Gl$session.leave()
            }
            Gl.session = undefined
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Jl(e, t, n) {
  return $l.apply(this, arguments)
}
function $l() {
  return ($l = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Wl($$_$$_7.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (Gl.session) {
                        e.next = 2
                        break
                      }
                      throw new Error("no session")
                    case 2:
                      if (n) {
                        e.next = 4
                        break
                      }
                      return e.abrupt("return", [])
                    case 4:
                      Gl.session.broadcast($$_$$_11.a({}, t, n))
                      return e.abrupt("return", [])
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))(), undefined, r))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function eu(e, t, n) {
  return tu.apply(this, arguments)
}
function tu() {
  return (tu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Wl($$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var /* [auto-meaningful-name] */Gl$session
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (Gl$session = Gl.session) {
                        e.next = 3
                        break
                      }
                      return e.abrupt("return", r("not connected"))
                    case 3:
                      e.next = 5
                      return Gl$session.updateMemberList()
                    case 5:
                      return e.abrupt("return", [Gl$session.members])
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))(), n, r))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function nu() {
  return ru.apply(this, arguments)
}
function ru() {
  return (ru = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */Gl$session
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", null === (Gl$session = Gl.session) || undefined === Gl$session ? undefined : Gl$session.roomName)
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ou() {
  return iu.apply(this, arguments)
}
function iu() {
  return (iu = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */Gl$session
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", null === (Gl$session = Gl.session) || undefined === Gl$session ? undefined : Gl$session.members)
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { Ul }
export { Hl }
export { Vl }
export { Yl }
export { ql }
export { Ql }
export { Jl }
export { eu }
export { nu }
export { ou }
