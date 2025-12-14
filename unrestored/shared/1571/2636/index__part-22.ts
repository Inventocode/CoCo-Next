/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

"use strict"

import { B, G, H } from "./index__part-2"
import { Q } from "./index__part-3"
import { Pe } from "./index__part-8"
import { Ge } from "./index__part-9"
import { Ze } from "./index__part-10"
import { Xe, ot } from "./index__part-11"
import { St } from "./index__part-14"
import { Dt } from "./index__part-15"
import { Gt } from "./index__part-16"
import { on } from "./index__part-18"
import { dn, pn, fn } from "./index__part-20"
import { gn } from "./index__part-21"
import * as Et from "./9"
import /* [auto-meaningful-name] */$_161 from "./161"
import * as /* [auto-meaningful-name] */$_276 from "./276"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as te from "./15"
import * as Z from "./97"
import * as /* [auto-meaningful-name] */$_454_index from "./454/index"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_627 from "./627"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as _n from "./47"
import * as /* [auto-meaningful-name] */$_1053 from "./1053"
import /* [auto-meaningful-name] */_$_ from "./1053"
var yn = function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var n = $_16_index.e(function (e) {
    return e.cloudSpace.cloudDictList
  })
  var r = $_16_index.e(function (e) {
    return e.cloudSpace.cloudTableList
  })
  var o = _React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  _React.useEffect(function () {
    s(false)
    d(false)
    var e
    var t = _n.a(n)
    try {
      for (t.s(); !(e = t.n()).done;) {
        var /* [auto-meaningful-name] */e$value = e.value
        if (e$value.prod_capacity >= Et.a * Et.c) {
          d(true)
          break
        }
        if (e$value.prod_capacity >= Et.b * Et.c) {
          s(true)
        }
      }
    } catch (l) {
      t.e(l)
    } finally {
      t.f()
    }
    var i
    var a = _n.a(r)
    try {
      for (a.s(); !(i = a.n()).done;) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (i$value.prod_capacity >= Et.a * Et.d) {
          d(true)
          break
        }
        if (i$value.prod_capacity >= Et.b * Et.d) {
          s(true)
        }
      }
    } catch (l) {
      a.e(l)
    } finally {
      a.f()
    }
  }, [n, r])
  if (t.cloudSpaceManager === K.j.Hide) {
    return null
  }
  var p = $_710_index$a$formatMessage(u ? {
    id: "cloudSpace.outMaxLimit"
  } : a ? {
    id: "cloudSpace.outWarnLimit"
  } : {
    id: "cloudSpace.cloudSpace"
  })
  return React.createElement($_748_index.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: p,
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    onClick: function () {
      window.open("".concat(te.A(), "/"), "_blank")
    },
    className: N(_$_.cloudSpaceManager)
  }, p === $_710_index$a$formatMessage({
    id: "cloudSpace.outMaxLimit"
  }) && React.createElement("div", {
    className: _$_.cloudIconError
  }, React.createElement($_13_index.j, {
    type: "icon-cloud-manager-error"
  })), p === $_710_index$a$formatMessage({
    id: "cloudSpace.outWarnLimit"
  }) && React.createElement("div", {
    className: _$_.cloudIconWarn
  }, React.createElement($_13_index.j, {
    type: "icon-cloud-manager-warn"
  })), p === $_710_index$a$formatMessage({
    id: "cloudSpace.cloudSpace"
  }) && React.createElement("div", null, React.createElement($_13_index.j, {
    type: "icon-cloud-manager-normal"
  }))))
}
var En = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = _React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useRef()
  var m = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var g = $_16_index.e(function (e) {
    return e.common.saving
  })
  var v = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var b = $_16_index.e(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var y = $_16_index.e(function (e) {
    return e.common.stageRulerVisible
  })
  var w = $_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var C = $_16_index.e(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var T = $_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */T$isPackaging = T.isPackaging
  var /* [auto-meaningful-name] */T$packageQrCodeVisible = T.packageQrCodeVisible
  var /* [auto-meaningful-name] */T$packageDialogVisible = T.packageDialogVisible
  var D = $_16_index.e(function (e) {
    return e.common.lastSavedTime
  })
  var M = $_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  var L = $_16_index.e(function (e) {
    return e.project.playing
  })
  var P = $_16_index.e(function (e) {
    return e.project.id
  })
  var F = $_16_index.e(function (e) {
    return e.project.title
  })
  var W = $_16_index.e(function (e) {
    return e.project.jsonFrom
  })
  var U = Z.a(P)
  var V = _React.useRef(null)
  var X = _React.useRef(null)
  var J = _React.useRef(null)
  var $ = _React.useState(false)
  var ee = $_10_index.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = $_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var ie = _React.useState(false)
  var ae = $_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== te.N(window.location.href).archiveId
  _React.useEffect(function () {
    re(false)
  }, [P])
  _React.useEffect(function () {
    if (se) {
      we(false, true)
    }
  }, [b])
  _React.useEffect(function () {
    function e() {
      if (V.current) {
        clearTimeout(V.current)
      }
    }
    if (U) {
      e()
    } else {
      V.current = window.setTimeout(function () {
        re(true)
      }, 18e4)
    }
    return e
  }, [P, U])
  var ue = _React.useState(false)
  var de = $_10_index.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var he = $_16_index.e(function (e) {
    return e.common.collAutoSave
  })
  var me = $_16_index.e(function (e) {
    return e.common.historyArchiveId
  })
  var ge = $_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  _React.useEffect(function () {
    !function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : H.PURPLE
      var t = G(e)
      var n = ""
      for (var r in t) if (t[r]) {
        n += "".concat(B[r], ": ").concat(t[r], "; ")
      }
      document.body.setAttribute("style", n)
    }()
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Tf())
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Xf())
  }, [n])
  var _e = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
              return e.abrupt("return")
            case 3:
              if (!T$isPackaging) {
                e.next = 6
                break
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(n, $$_$$_$$_$$_src_shared_events_messagesWrapper.Vf())
            case 9:
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(6)
              d(true)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[6, 11]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var ve = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return we(false)
            case 2:
              e$sent = e.sent
              if (p.current) {
                p.current()
              }
              p.current = null
              if (e$sent) {
                n($$_$$_$$_$$_src_shared_events_messagesWrapper.dj(K.j.Hide))
                setTimeout(function () {
                  return Oe()
                }, 100)
              }
            case 6:
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
  var ye = function () {
    if (p.current) {
      p.current()
    }
    p.current = null
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.dj(K.j.Hide))
    setTimeout(function () {
      return Oe()
    }, 100)
  }
  var Ee = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (U || !M) {
                e.next = 3
                break
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ri({
                visible: true,
                openFrom: "backHome",
                onSave: ve,
                onImport: ye
              }))
              return e.abrupt("return")
            case 3:
              if (!U || !M) {
                e.next = 9
                break
              }
              e.next = 6
              return we(true)
            case 6:
              if (e.sent) {
                e.next = 9
                break
              }
              return e.abrupt("return")
            case 9:
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.dj(K.j.Hide))
              setTimeout(function () {
                return Oe()
              }, 100)
            case 11:
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
  var Oe = function () {
    window.location.href = te.B()
  }
  var we = _React.useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, o) {
      var i
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
              return e.abrupt("return")
            case 3:
              if (!g) {
                e.next = 5
                break
              }
              return e.abrupt("return")
            case 5:
              if (J.current) {
                clearTimeout(J.current)
              }
              if (!t) {
                J.current = window.setTimeout(function () {
                  n($$_$$_$$_$$_src_shared_events_messagesWrapper.Qi(true))
                }, 6e3)
              }
              s(false)
              i = true
              e.prev = 9
              e.next = 12
              return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(n, $$_$$_$$_$$_src_shared_events_messagesWrapper.tg({
                isUpdate: U,
                isAutoSave: t,
                isNeedReport: o
              }))
            case 12:
              if (!t) {
                n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                  message: $_710_index$a$formatMessage({
                    id: "saveProject.successTips"
                  }),
                  type: "success"
                }))
              }
              fe(false)
              e.next = 21
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(9)
              if (e.t0.message === $_276.a.CLOUD_SPACE_DATA_ERROR) {
                n($$_$$_$$_$$_src_shared_events_messagesWrapper.Cf(true))
                ce(true)
              } else {
                if (e.t0.message !== $_276.a.USER_CANCEL_SAVE && e.t0.message !== $_276.a.USER_NOT_LOGIN) {
                  if (t) {
                    fe(true)
                  } else {
                    s(true)
                  }
                }
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.Si(false))
              i = false
            case 21:
              if (J.current) {
                clearTimeout(J.current)
                n($$_$$_$$_$$_src_shared_events_messagesWrapper.Qi(false))
              }
              return e.abrupt("return", i)
            case 23:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[9, 16]])
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }(), [n, $_710_index$a$formatMessage, U, g, m])
  _React.useEffect(function () {
    function e() {
      if (X.current) {
        clearTimeout(X.current)
        X.current = null
      }
    }
    if (ge || oe.save === K.j.Hide || oe.save === K.j.ReadOnly) {
      e()
    } else if (U && M) {
      if (!X.current) {
        if (U && M) {
          X.current = window.setTimeout(function () {
            we(true)
            e()
          }, 3e5)
        }
        return e
      }
    } else {
      e()
    }
  }, [U, M, we, ge, oe.save])
  _React.useEffect(function () {
    if (!g) {
      if (me) {
        if (M) {
          O.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return we(true)
                  case 2:
                    n($$_$$_$$_$$_src_shared_events_messagesWrapper.sg(me))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.sg(me))
        }
      }
    }
  }, [M, me, we, n, g])
  _React.useEffect(function () {
    if (he && M) {
      we(true).then(function () {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.di(false))
      }).catch(function (e) {
        console.error(e)
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.di(false))
      })
    }
  }, [M, we, he, n])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.Of(true))
        $_141_index.a("SaveToComputerClick", {
          workId: P,
          workName: F
        })
        break
      case "CREATE_NEW_PROJECT":
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ah(K.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!m) {
          return void n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
        }
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ah(K.f.MY_PROJECT))
        break
      case "SAVE_AS":
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.tg({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void n($$_$$_$$_$$_src_shared_events_messagesWrapper.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.Gi(false))
    }
  }
  var Te = _React.useCallback(function (e) {
    if (M) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ri({
        visible: true,
        openFrom: "",
        onSave: function () {
          var e = O.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return we(false)
                  case 2:
                    if (p.current) {
                      p.current()
                    }
                    p.current = null
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
        }(),
        onImport: function () {
          if (p.current) {
            p.current()
          }
          p.current = null
        }
      }))
      p.current = function () {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.Gf(e))
      }
    } else {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.Gf(e))
    }
    var t = (null === e || undefined === e ? undefined : e.editPermission) === K.c.ReadOnly ? K.c.ReadOnly : K.c.Edit
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ci(t))
  }, [n, we, M])
  var Se = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 10
                break
              }
              n = t[0]
              e.next = 4
              return $_454_index.i(n)
            case 4:
              if (e$sent = e.sent) {
                e.next = 8
                break
              }
              console.error("file load failed")
              return e.abrupt("return")
            case 8:
              Te({
                json: e$sent,
                isAuthor: true,
                sourceTag: K.g.LOCAL,
                jsonFrom: K.d.LOCAL_FILE
              })
              $_141_index.a("OpenComputerFileClick")
            case 10:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var Ae = function () {
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Gi(true))
  }
  var Ie = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var o
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$title
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 13
                break
              }
              o = t[0]
              e.prev = 2
              e.next = 5
              return $$_$$_$$_$$_src_shared_widget_custom_load.t(o, false)
            case 5:
              e$sent = e.sent
              e$sent$title = e$sent.title
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "HeaderDropdown.importExtensionSuccess"
                }, {
                  title: e$sent$title
                }),
                type: "info"
              }))
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t0 = e.catch(2)
              console.error(e.t0)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[2, 10]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var je = function (e) {
    if (!L) {
      switch (e) {
        case "STAGE_RULER":
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.Wi(!y))
          break
        case "STAGE_AREA":
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.Yi(!w))
      }
    }
  }
  _React.useEffect(function () {
    if (oe.preventLeave === K.j.Show) {
      window.onbeforeunload = function (e) {
        if (e) {
          e.returnValue = "你要离开网页吗？"
        }
        return "你要离开网页吗？"
      }
    } else {
      window.onbeforeunload = function () {}
    }
  }, [oe.preventLeave])
  _React.useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [n])
  var Ne = oe.file.openLocalFile === K.j.Show
  var Re = oe.file.exportLocalFile === K.j.Show && v
  var ke = oe.file.saveAs === K.j.Show && v
  var xe = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!$_627.a.isLoaded()) {
                e.next = 3
                break
              }
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.fi(true))
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
  var De = function () {
    window.open("".concat(te.B(), "/about/"), "_blank")
  }
  return React.createElement("div", {
    className: $_161.wrapper,
    "data-html2canvas-ignore": "true"
  }, React.createElement("div", {
    className: $_161.left
  }, !le && oe.logo !== K.j.Hide && React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "back"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: $_161.logoBox,
    id: "logo",
    onClick: Ee
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down",
    className: $_161.back
  }), React.createElement("div", {
    className: $_161.logo
  }))), !le && oe.cutLine === K.j.Show && React.createElement("div", {
    className: $_161.logoCutLine
  }), React.createElement("div", {
    className: $_161.menu
  }, Object.values(oe.file).includes(K.j.Show) && !le && React.createElement($_13_index.g, {
    className: $_161.fileDropdown,
    overlay: React.createElement($_13_index.l, {
      onClick: Ce
    }, oe.file.newProject === K.j.Show && React.createElement($_13_index.m, {
      value: "CREATE_NEW_PROJECT"
    }, React.createElement("div", {
      className: $_161.itemContent
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.newProject"
    }))), oe.file.openMyProject === K.j.Show && React.createElement($_13_index.m, {
      value: "OPEN_MY_PROJECT"
    }, React.createElement("div", {
      className: $_161.itemContent
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.openProject"
    }))), ke && React.createElement($_13_index.m, {
      value: "SAVE_AS"
    }, React.createElement("div", {
      className: $_161.itemContent
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.saveAs"
    }))), React.createElement("div", {
      className: $_161.line
    }), oe.file.showHistory === K.j.Show && v && React.createElement($_13_index.m, {
      value: "HISTORY"
    }, React.createElement("div", {
      className: $_161.itemContent
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.history"
    }))), !ge && React.createElement($_13_index.m, {
      value: "IMPORT_EXTENSION_WIDGET"
    }, React.createElement($_13_index.B, {
      onChange: Ie,
      accept: ".js,.jsx",
      className: N($_161.itemUploadButton)
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.importExtension"
    }))), (Re || Re) && React.createElement("div", {
      className: $_161.line
    }), Ne && React.createElement($_13_index.m, {
      value: "OPEN_LOCAL_FILE"
    }, React.createElement($_13_index.B, {
      onChange: Se,
      onCancel: Ae,
      accept: ".json",
      className: N($_161.itemUploadButton)
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.openLocalFile"
    }))), Re && React.createElement($_13_index.m, {
      value: "EXPORT_PROJECT_AS_JSON"
    }, React.createElement("div", {
      className: $_161.itemContent
    }, $_710_index$a$formatMessage({
      id: "HeaderDropdown.exportProjectAsJson"
    }))))
  }, React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $_710_index$a$formatMessage({
      id: "file"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_161.toolTipsBox
  }, React.createElement($_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-file"
  })))), Object.values(oe.tutorial).includes(K.j.Show) && !le && React.createElement($_13_index.g, {
    overlay: React.createElement($_13_index.l, null, oe.tutorial.releaseInfo === K.j.Show && React.createElement($_13_index.m, {
      value: "courseVideo"
    }, React.createElement("div", {
      className: $_161.itemLinkContent,
      onClick: xe
    }, React.createElement("span", {
      className: $_161.link
    }, $_710_index$a$formatMessage({
      id: "courseVideo"
    })))), oe.tutorial.tutorial === K.j.Show && React.createElement($_13_index.m, {
      value: "tutorial"
    }, React.createElement("div", {
      className: $_161.itemLinkContent
    }, React.createElement("a", {
      href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh",
      target: "_blank",
      rel: "noopener noreferrer",
      className: $_161.link
    }, $_710_index$a$formatMessage({
      id: "seeTutorial"
    })))), React.createElement("div", {
      className: $_161.line
    }), oe.tutorial.feedback === K.j.Show && React.createElement($_13_index.m, {
      value: "feedback"
    }, React.createElement("div", {
      className: $_161.itemLinkContent
    }, React.createElement("a", {
      href: "https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd",
      target: "_blank",
      rel: "noopener noreferrer",
      className: $_161.link
    }, $_710_index$a$formatMessage({
      id: "feedback"
    })))), oe.tutorial.releaseInfo === K.j.Show && React.createElement($_13_index.m, {
      value: "releaseInfo"
    }, React.createElement("div", {
      className: $_161.itemLinkContent,
      onClick: function () {
        return n($$_$$_$$_$$_src_shared_events_messagesWrapper.vj(true))
      }
    }, React.createElement("span", {
      className: $_161.link
    }, $_710_index$a$formatMessage({
      id: "releaseInfo"
    })))), oe.tutorial.about === K.j.Show && React.createElement($_13_index.m, {
      value: "aboutUs"
    }, React.createElement("div", {
      className: $_161.itemLinkContent,
      onClick: De
    }, React.createElement("span", {
      className: $_161.link
    }, $_710_index$a$formatMessage({
      id: "aboutUs"
    })))))
  }, React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $_710_index$a$formatMessage({
      id: "help"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_161.toolTipsBox
  }, React.createElement($_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-help-circle-active"
  })))), Object.values(oe.help).includes(K.j.Show) && !le && React.createElement($_13_index.g, {
    overlay: React.createElement($_13_index.l, {
      onClick: je
    }, oe.help.ruler === K.j.Show && React.createElement($_13_index.m, {
      value: "STAGE_RULER"
    }, React.createElement("div", {
      className: N($_161.itemContent, L && $_161.disabled)
    }, $_710_index$a$formatMessage(y ? {
      id: "HeaderDropdown.hideRuler"
    } : {
      id: "HeaderDropdown.showRuler"
    }))), oe.help.stage === K.j.Show && React.createElement($_13_index.m, {
      value: "STAGE_AREA"
    }, React.createElement("div", {
      className: N($_161.itemContent, L && $_161.disabled)
    }, $_710_index$a$formatMessage(w ? {
      id: "HeaderDropdown.hideWidgetAndStage"
    } : {
      id: "HeaderDropdown.showWidgetAndStage"
    }))))
  }, React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $_710_index$a$formatMessage({
      id: "setting"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_161.toolTipsBox
  }, React.createElement($_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-settings"
  }))))), !le && oe.cloudDBManager === K.j.Show && React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "cloudDBManager"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: N($_161.iconWrapper, $_161.cloudIconWrapper, C && $_161.activeIconWrapper),
    onClick: function () {
      n(m ? $$_$$_$$_$$_src_shared_events_messagesWrapper.jj(true) : $$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
    }
  }, React.createElement($_13_index.j, {
    type: "icon-database-manage-active",
    className: $_161.databaseIcon
  }))), React.createElement(yn, null)), React.createElement("div", {
    className: $_161.center
  }, e$children), React.createElement("div", {
    className: $_161.right
  }, !le && oe.coll === K.j.Show && React.createElement("div", {
    className: $_161.otWrapper
  }, React.createElement(St, null)), !le && oe.package === K.j.Show && v && React.createElement($_13_index.g, {
    className: $_161.shareMenu,
    overlay: React.createElement($_13_index.l, null, React.createElement($_13_index.m, null, React.createElement(on, {
      target: "community"
    })), React.createElement($_13_index.m, null, React.createElement(on, {
      target: "others"
    })))
  }, React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "Publish.share"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: N($_161.shareWrapper)
  }, React.createElement($_13_index.j, {
    type: "icon-share",
    className: $_161.icon
  })))), !le && oe.cutLine === K.j.Show && React.createElement("div", {
    className: $_161.cutLine
  }), !le && oe.save === K.j.Show && React.createElement($_748_index.a, {
    placement: "bottom",
    title: function () {
      if (!D) {
        return $_710_index$a$formatMessage({
          id: "MyProject.notSaved"
        })
      }
      var e = D
      var t = Date.now()
      var n = t - e
      var o = te.G(t, 0)
      var i = te.G(t, -1)
      var a = te.G(t, -2)
      var s = new Date(e)
      var c = ""
      var l = "".concat($_710_index$a$formatMessage({
        id: "MyProject.lastSaved"
      }), " ")
      if (n < 6e4) {
        c = "".concat($_710_index$a$formatMessage({
          id: "MyProject.justSaved"
        }))
      } else if (n < 36e5) {
        var u = Math.ceil(n / 60 / 1e3)
        u = Math.max(u, 1)
        u = Math.min(u, 59)
        c = l + (c = "".concat(u).concat($_710_index$a$formatMessage({
          id: "MyProject.minute"
        })).concat($_710_index$a$formatMessage({
          id: "MyProject.ago"
        })))
      } else if (n < 216e5 || e > o) {
        var d = Math.floor(n / 36e5)
        var p = Math.floor(n % 36e5 / 6e4)
        if (d) {
          c += "".concat(d).concat($_710_index$a$formatMessage({
            id: "MyProject.hour"
          }))
        }
        if (p) {
          c += "".concat(p).concat($_710_index$a$formatMessage({
            id: "MyProject.minute"
          }))
        }
        c = l + (c += $_710_index$a$formatMessage({
          id: "MyProject.ago"
        }))
      } else if (e > i) {
        c = l + (c = $_710_index$a$formatMessage({
          id: "MyProject.yesterday"
        }) + te.K(s))
      } else {
        if (e > a) {
          c = l + (c = $_710_index$a$formatMessage({
            id: "MyProject.theDayBeforeYesterday"
          }) + te.K(s))
        } else {
          c = "".concat(s.getFullYear()).concat($_710_index$a$formatMessage({
            id: "MyProject.year"
          }))
          c += "".concat(s.getMonth() + 1).concat($_710_index$a$formatMessage({
            id: "MyProject.month"
          }))
          c = l + (c += "".concat(s.getDate()).concat($_710_index$a$formatMessage({
            id: "MyProject.day"
          })))
        }
      }
      return c
    }(),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: "8px"
    }
  }, React.createElement($_13_index.d, {
    onClick: function () {
      we(false, true)
    },
    className: N($_161.saveBtn, g && $_161.saving)
  }, React.createElement("span", {
    className: $_161.saveText
  }, $_710_index$a$formatMessage({
    id: "save"
  })), React.createElement("span", {
    className: $_161.savingIcon
  }, React.createElement(Ge, {
    stroke: "#6e4ff4"
  })))), !le && oe.package === K.j.Show && v && React.createElement($_13_index.d, {
    className: $_161.packageBtn,
    onClick: _e,
    disabled: T$isPackaging
  }, $_710_index$a$formatMessage({
    id: "package"
  })), T$packageDialogVisible && React.createElement(Dt, null), T$packageQrCodeVisible && React.createElement(Gt, null), !le && oe.userInfo === K.j.Show && React.createElement(Ze, null), React.createElement("div", {
    className: N($_161.saveTipsWrapper, W !== K.d.OTHER && ne && !U && $_161.show)
  }, $_710_index$a$formatMessage({
    id: "MyProject.newSaveTips"
  }), React.createElement("div", {
    className: $_161.closeSaveTips,
    onClick: function () {
      return re(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close"
  }))), pe && React.createElement(ot, {
    type: Xe.ERROR,
    message: $_710_index$a$formatMessage({
      id: "MyProject.autoSaveErrorTips"
    }),
    onClose: function () {
      fe(false)
    }
  }), React.createElement(Pe, {
    importProjectJson: Te
  }), React.createElement(gn, null)), React.createElement(dn, {
    visible: a,
    onClose: function () {
      s(false)
    },
    save: function () {
      we(false)
    }
  }), React.createElement(fn, {
    visible: u,
    onClose: function () {
      d(false)
    },
    save: function () {
      d(false)
      _e()
    }
  }), React.createElement(pn, null))
})
export { En }
