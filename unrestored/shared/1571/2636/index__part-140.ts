/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-140
 */

"use strict"

import { Ge } from "./index__part-9"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_422 from "./422"
import /* [auto-meaningful-name] */$_4221 from "./422"
var yC = {
  SERVICE: "64A70012-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  BATTERY_CHAR: "64A70007-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  USER_BUTTON_CHAR: "64A7000D-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  VIBRATOR_CHAR: "64A70008-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  LED_CHAR: "64A70009-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  KEEP_ALIVE_CHAR: "64A7000F-F691-4B93-A6F4-0968F5B648F8".toLowerCase()
}
var EC = {
  SERVICE: "64A70011-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  TEMP_CHAR: "64A70014-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  QUATERNIONS_CHAR: "64A70002-F691-4B93-A6F4-0968F5B648F8".toLowerCase(),
  QUATERNIONS_RESET_CHAR: "64A70004-F691-4B93-A6F4-0968F5B648F8".toLowerCase()
}
var OC = {
  filters: [
    {
      name: "Kano-wand"
    }, {
      namePrefix: "Kano"
    }
  ],
  optionalServices: [yC.SERVICE, EC.SERVICE]
}
var wC = null
function CC(e, t) {
  return TC.apply(this, arguments)
}
function TC() {
  return (TC = O.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent2
    var /* [auto-meaningful-name] */e$sent3
    var /* [auto-meaningful-name] */e$sent4
    var c
    var l
    var u
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return t.getPrimaryService(EC.SERVICE)
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.getCharacteristic(EC.QUATERNIONS_CHAR)
          case 5:
            e$sent1 = e.sent
            e.next = 8
            return t.getPrimaryService(yC.SERVICE)
          case 8:
            e$sent2 = e.sent
            e.next = 11
            return e$sent2.getCharacteristic(yC.USER_BUTTON_CHAR)
          case 11:
            e$sent3 = e.sent
            e.next = 14
            return e$sent2.getCharacteristic(yC.KEEP_ALIVE_CHAR)
          case 14:
            e$sent4 = e.sent
            c = 0
            l = []
            e$sent1.addEventListener("characteristicvaluechanged", function (e) {
              var /* [auto-meaningful-name] */e$target$value = e.target.value
              var r = e$target$value.getInt16(0, true)
              var o = -1 * e$target$value.getInt16(2, true)
              n(o, r)
              if (c) {
                l.push({
                  x: o,
                  y: r
                })
              } else {
                if (l.length > 0) {
                  localStorage.setItem("kanoData", JSON.stringify(l))
                  l.length = 0
                }
              }
            })
            e$sent3.addEventListener("characteristicvaluechanged", function (e) {
              var /* [auto-meaningful-name] */e$target$value = e.target.value
              c = e$target$value.getUint8(0)
            })
            u = window.setInterval(O.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      e.next = 2
                      return e$sent4.writeValue(Uint8Array.from([255])).catch(function (e) {
                        console.error(e)
                        window.clearInterval(u)
                      })
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })), 1e4)
            e.next = 22
            return e$sent1.startNotifications()
          case 22:
            e.next = 24
            return e$sent3.startNotifications()
          case 24:
            return e.abrupt("return", O.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      console.info("clearInterval ")
                      window.clearInterval(u)
                      e.next = 4
                      return e$sent1.stopNotifications()
                    case 4:
                      e.next = 6
                      return e$sent3.stopNotifications()
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })))
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var SC = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "device" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(0)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(0)
  var w = $_10_index.a(y, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(0)
  var I = $_10_index.a(A, 2)
  var j = I[0]
  var R = I[1]
  var k = useRef()
  var x = useRef()
  var D = useSelector(function (e) {
    return e.project.playing
  })
  var M = e$getValue(n)
  function L() {
    return (L = O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */wC$gatt
      var r
      var i
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!d) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              e.prev = 2
              p(true)
              e.next = 6
              return navigator.bluetooth.requestDevice(OC)
            case 6:
              wC = e.sent
              e.next = 9
              return null === (wC$gatt = wC.gatt) || undefined === wC$gatt ? undefined : wC$gatt.connect()
            case 9:
              i = e.sent
              k.current = i
              a = Date.now()
              R(a)
              wC.addEventListener("gattserverdisconnected", O.a(RegeneratorRuntime.mark(function e() {
                var t
                var n
                return RegeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        console.info("gattserverdisconnected:", null === (t = i) || undefined === t ? undefined : t.connected)
                        console.info("keep alive seconds:", (Date.now() - a) / 1e3)
                        e.next = 4
                        return null === (n = i) || undefined === n ? undefined : n.connect().catch(function () {
                          var e = O.a(RegeneratorRuntime.mark(function e(t) {
                            var n
                            var /* [auto-meaningful-name] */n$gatt
                            return RegeneratorRuntime.wrap(function (e) {
                              for (;;) {
                                switch (e.prev = e.next) {
                                  case 0:
                                    console.log(t)
                                    e.next = 3
                                    return null === (n = wC) || undefined === n || null === (n$gatt = n.gatt) || undefined === n$gatt ? undefined : n$gatt.connect()
                                  case 3:
                                    i = e.sent
                                    a = Date.now()
                                    R(a)
                                  case 6:
                                  case "end":
                                    return e.stop()
                                }
                              }
                            }, e)
                          }))
                          return function (t) {
                            return e.apply(this, arguments)
                          }
                        }())
                      case 4:
                        a = Date.now()
                        R(a)
                        console.info("connected", i)
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              })))
              if (e$onChange) {
                e$onChange(n, (null === (r = wC) || undefined === r ? undefined : r.name) || "")
              }
              p(false)
              e.next = 22
              break
            case 18:
              e.prev = 18
              e.t0 = e.catch(2)
              console.error(e.t0)
              p(false)
            case 22:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[2, 18]])
    }))).apply(this, arguments)
  }
  useEffect(function () {
    O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */k$current
      var /* [auto-meaningful-name] */x$current
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (k$current = k.current, !(x$current = x.current)) {
                e.next = 6
                break
              }
              e.next = 5
              return x$current().catch(function (e) {
                return console.error(e)
              })
            case 5:
              x.current = undefined
            case 6:
              if (!k$current) {
                e.next = 12
                break
              }
              e.next = 9
              return CC(k$current, function (e, t) {
                b(e)
                T(t)
                if (D) {
                  localStorage.setItem("kanoX", "".concat(e))
                  localStorage.setItem("kanoY", "".concat(t))
                }
              })
            case 9:
              x.current = e.sent
              e.next = 13
              break
            case 12:
              e$onChange("device", "")
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))()
  }, [j])
  var P = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */k$current
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return null === (k$current = k.current) || undefined === k$current ? undefined : k$current.getPrimaryService(EC.SERVICE)
            case 2:
              e$sent = e.sent
              e.next = 5
              return null === e$sent || undefined === e$sent ? undefined : e$sent.getCharacteristic(EC.QUATERNIONS_RESET_CHAR)
            case 5:
              if (!(null === (e$sent1 = e.sent) || undefined === e$sent1)) {
                e$sent1.writeValue(Uint8Array.from([1])).catch(function (e) {
                  console.error(e)
                })
              }
            case 7:
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
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N($_4221.formItemWrapper, $_4221.bluetoothConnect, M && $_4221.connected),
    label: M ? "已连接" : "设备未连接"
  }, M ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_4221.device
  }, M), React.createElement("div", {
    className: $_4221.position
  }, React.createElement("span", null, "X: ", v), React.createElement("span", null, "Y: ", C)), React.createElement("div", {
    className: $_4221.moreBox
  }, React.createElement($_1213.a, {
    content: React.createElement("div", {
      className: $_4221.popoverBox
    }, React.createElement("div", {
      className: $_4221.popoverItem,
      onClick: P
    }, "重置坐标"), React.createElement("div", {
      className: $_4221.popoverItem,
      onClick: function () {
        var e
        c(false)
        if (e$onChange) {
          e$onChange(n, "")
        }
        if (null === (e = wC) || undefined === e ? undefined : e.gatt) {
          try {
            wC.gatt.disconnect()
          } catch (t) {
            console.error(t)
          }
        }
      }
    }, "断开连接")),
    placement: "bottomLeft",
    trigger: "click",
    visible: s,
    onVisibleChange: function (e) {
      c(e)
    }
  }, React.createElement("div", {
    className: $_4221.more
  }, React.createElement($_13_index.j, {
    type: "icon-more"
  }))))) : React.createElement("div", {
    className: N($_4221.connect, d && $_4221.connecting),
    onClick: function () {
      return L.apply(this, arguments)
    }
  }, React.createElement("span", {
    className: $_4221.icon
  }, React.createElement(Ge, {
    stroke: "#847da4"
  })), React.createElement("span", {
    className: $_4221.text
  }, "连接")))
})
var /* [auto-meaningful-name] */_9326741751927357445c6b5a = "9326741751927357445c6b5a"
var /* [auto-meaningful-name] */H14qlzk7z9zx8xlgcyu9tvrz9i845295 = "h14qlzk7z9zx8xlgcyu9tvrz9i845295"
function jC() {
  var e = new URL("https://open-cn.aqara.com/v3.0/open/authorize")
  e.searchParams.set("redirect_uri", new URL("/editor", window.location.origin).toString())
  e.searchParams.set("client_id", _9326741751927357445c6b5a)
  e.searchParams.set("response_type", "code")
  e.searchParams.set("state", "browser")
  window.open(e.toString(), "_blank")
}
export { SC }
export { _9326741751927357445c6b5a as AC }
export { H14qlzk7z9zx8xlgcyu9tvrz9i845295 as IC }
export { jC }
