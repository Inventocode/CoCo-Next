/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

"use strict"

import { B, G, H } from "../../../../unrestored/shared/1571/2636/index__part-2"
import { Q } from "../../../../unrestored/shared/1571/2636/index__part-3"
import { Pe } from "../../../../unrestored/shared/1571/2636/index__part-8"
import { Ge } from "../../../../unrestored/shared/1571/2636/index__part-9"
import { Ze } from "./right/user-info"
import { Xe, ot } from "../../../../unrestored/shared/1571/2636/index__part-11"
import { St } from "./right/collaboration"
import { Dt } from "../../../../unrestored/shared/1571/2636/index__part-15"
import { Gt } from "../../../../unrestored/shared/1571/2636/index__part-16"
import { on } from "../../../../unrestored/shared/1571/2636/index__part-18"
import { dn, pn, fn } from "../../../../unrestored/shared/1571/2636/index__part-20"
import { gn } from "../../../../unrestored/shared/1571/2636/index__part-21"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../unrestored/shared/1571/2636/9"
import /* [auto-meaningful-name] */$_styles$module$css from "./styles.module.css"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_276 from "../../../../unrestored/shared/1571/2636/276"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_widget_custom_load from "../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_97 from "../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_454 from "../../../../unrestored/shared/1571/2636/454"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_redux_common_actions from "../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_627 from "../../../../unrestored/shared/1571/2636/627"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_47 from "../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_1053 from "../../../../unrestored/shared/1571/2636/1053"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10531 from "../../../../unrestored/shared/1571/2636/1053"
var yn = function () {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var t = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var n = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.cloudSpace.cloudDictList
  })
  var r = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.cloudSpace.cloudTableList
  })
  var o = React1.useState(false)
  var i = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React1.useState(false)
  var l = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  React1.useEffect(function () {
    s(false)
    d(false)
    var e
    var t = $$_$$_$$_$$_unrestored_shared_1571_2636_47.a(n)
    try {
      for (t.s(); !(e = t.n()).done;) {
        var /* [auto-meaningful-name] */e$value = e.value
        if (e$value.prod_capacity >= $$_$$_$$_$$_unrestored_shared_1571_2636_9.a * $$_$$_$$_$$_unrestored_shared_1571_2636_9.c) {
          d(true)
          break
        }
        if (e$value.prod_capacity >= $$_$$_$$_$$_unrestored_shared_1571_2636_9.b * $$_$$_$$_$$_unrestored_shared_1571_2636_9.c) {
          s(true)
        }
      }
    } catch (l) {
      t.e(l)
    } finally {
      t.f()
    }
    var i
    var a = $$_$$_$$_$$_unrestored_shared_1571_2636_47.a(r)
    try {
      for (a.s(); !(i = a.n()).done;) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (i$value.prod_capacity >= $$_$$_$$_$$_unrestored_shared_1571_2636_9.a * $$_$$_$$_$$_unrestored_shared_1571_2636_9.d) {
          d(true)
          break
        }
        if (i$value.prod_capacity >= $$_$$_$$_$$_unrestored_shared_1571_2636_9.b * $$_$$_$$_$$_unrestored_shared_1571_2636_9.d) {
          s(true)
        }
      }
    } catch (l) {
      a.e(l)
    } finally {
      a.f()
    }
  }, [n, r])
  if (t.cloudSpaceManager === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide) {
    return null
  }
  var p = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage(u ? {
    id: "cloudSpace.outMaxLimit"
  } : a ? {
    id: "cloudSpace.outWarnLimit"
  } : {
    id: "cloudSpace.cloudSpace"
  })
  return React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: p,
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    onClick: function () {
      window.open("".concat($$_$$_$$_$$_unrestored_shared_1571_2636_15.A(), "/"), "_blank")
    },
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_unrestored_shared_1571_2636_10531.cloudSpaceManager)
  }, p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "cloudSpace.outMaxLimit"
  }) && React.createElement("div", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_10531.cloudIconError
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-cloud-manager-error"
  })), p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "cloudSpace.outWarnLimit"
  }) && React.createElement("div", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_10531.cloudIconWarn
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-cloud-manager-warn"
  })), p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "cloudSpace.cloudSpace"
  }) && React.createElement("div", null, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-cloud-manager-normal"
  }))))
}
var En = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var o = React1.useState(false)
  var i = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React1.useState(false)
  var l = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React1.useRef()
  var m = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var g = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.saving
  })
  var v = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var b = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var y = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageRulerVisible
  })
  var w = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var C = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var T = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */T$isPackaging = T.isPackaging
  var /* [auto-meaningful-name] */T$packageQrCodeVisible = T.packageQrCodeVisible
  var /* [auto-meaningful-name] */T$packageDialogVisible = T.packageDialogVisible
  var D = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.lastSavedTime
  })
  var M = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  var L = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.playing
  })
  var P = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.id
  })
  var F = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.title
  })
  var W = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.jsonFrom
  })
  var U = $$_$$_$$_$$_unrestored_shared_1571_2636_97.a(P)
  var V = React1.useRef(null)
  var X = React1.useRef(null)
  var J = React1.useRef(null)
  var $ = React1.useState(false)
  var ee = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var ie = React1.useState(false)
  var ae = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== $$_$$_$$_$$_unrestored_shared_1571_2636_15.N(window.location.href).archiveId
  React1.useEffect(function () {
    re(false)
  }, [P])
  React1.useEffect(function () {
    if (se) {
      we(false, true)
    }
  }, [b])
  React1.useEffect(function () {
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
  var ue = React1.useState(false)
  var de = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var he = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.collAutoSave
  })
  var me = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.historyArchiveId
  })
  var ge = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  React1.useEffect(function () {
    !function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : H.PURPLE
      var t = G(e)
      var n = ""
      for (var r in t) if (t[r]) {
        n += "".concat(B[r], ": ").concat(t[r], "; ")
      }
      document.body.setAttribute("style", n)
    }()
    n($$_$$_redux_common_actions.Tf())
    n($$_$$_redux_common_actions.Xf())
  }, [n])
  var _e = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n($$_$$_redux_common_actions.Ch())
              return e.abrupt("return")
            case 3:
              if (!T$isPackaging) {
                e.next = 6
                break
              }
              n($$_$$_redux_common_actions.mj({
                message: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return $$_$$_redux_common_actions.Nf(n, $$_$$_redux_common_actions.Vf())
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
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
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
                n($$_$$_redux_common_actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
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
    n($$_$$_redux_common_actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
    setTimeout(function () {
      return Oe()
    }, 100)
  }
  var Ee = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (U || !M) {
                e.next = 3
                break
              }
              n($$_$$_redux_common_actions.Ri({
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
              n($$_$$_redux_common_actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
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
    window.location.href = $$_$$_$$_$$_unrestored_shared_1571_2636_15.B()
  }
  var we = React1.useCallback(function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, o) {
      var i
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n($$_$$_redux_common_actions.Ch())
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
                  n($$_$$_redux_common_actions.Qi(true))
                }, 6e3)
              }
              s(false)
              i = true
              e.prev = 9
              e.next = 12
              return $$_$$_redux_common_actions.Nf(n, $$_$$_redux_common_actions.tg({
                isUpdate: U,
                isAutoSave: t,
                isNeedReport: o
              }))
            case 12:
              if (!t) {
                n($$_$$_redux_common_actions.mj({
                  message: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
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
              if (e.t0.message === $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.CLOUD_SPACE_DATA_ERROR) {
                n($$_$$_redux_common_actions.Cf(true))
                ce(true)
              } else {
                if (e.t0.message !== $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.USER_CANCEL_SAVE && e.t0.message !== $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.USER_NOT_LOGIN) {
                  if (t) {
                    fe(true)
                  } else {
                    s(true)
                  }
                }
              }
              n($$_$$_redux_common_actions.Si(false))
              i = false
            case 21:
              if (J.current) {
                clearTimeout(J.current)
                n($$_$$_redux_common_actions.Qi(false))
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
  }(), [n, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage, U, g, m])
  React1.useEffect(function () {
    function e() {
      if (X.current) {
        clearTimeout(X.current)
        X.current = null
      }
    }
    if (ge || oe.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide || oe.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly) {
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
  React1.useEffect(function () {
    if (!g) {
      if (me) {
        if (M) {
          $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return we(true)
                  case 2:
                    n($$_$$_redux_common_actions.sg(me))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          n($$_$$_redux_common_actions.sg(me))
        }
      }
    }
  }, [M, me, we, n, g])
  React1.useEffect(function () {
    if (he && M) {
      we(true).then(function () {
        n($$_$$_redux_common_actions.di(false))
      }).catch(function (e) {
        console.error(e)
        n($$_$$_redux_common_actions.di(false))
      })
    }
  }, [M, we, he, n])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        n($$_$$_redux_common_actions.Of(true))
        $$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("SaveToComputerClick", {
          workId: P,
          workName: F
        })
        break
      case "CREATE_NEW_PROJECT":
        n($$_$$_redux_common_actions.Ah($$_$$_$$_$$_unrestored_shared_1571_2636_18.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!m) {
          return void n($$_$$_redux_common_actions.Ch())
        }
        n($$_$$_redux_common_actions.Ah($$_$$_$$_$$_unrestored_shared_1571_2636_18.f.MY_PROJECT))
        break
      case "SAVE_AS":
        n($$_$$_redux_common_actions.tg({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void n($$_$$_redux_common_actions.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        n($$_$$_redux_common_actions.Gi(false))
    }
  }
  var Te = React1.useCallback(function (e) {
    if (M) {
      n($$_$$_redux_common_actions.Ri({
        visible: true,
        openFrom: "",
        onSave: function () {
          var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
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
        n($$_$$_redux_common_actions.Gf(e))
      }
    } else {
      n($$_$$_redux_common_actions.Gf(e))
    }
    var t = (null === e || undefined === e ? undefined : e.editPermission) === $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly ? $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly : $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit
    n($$_$$_redux_common_actions.Ci(t))
  }, [n, we, M])
  var Se = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
              return $$_$$_$$_$$_unrestored_shared_1571_2636_454.i(n)
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
                sourceTag: $$_$$_$$_$$_unrestored_shared_1571_2636_18.g.LOCAL,
                jsonFrom: $$_$$_$$_$$_unrestored_shared_1571_2636_18.d.LOCAL_FILE
              })
              $$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("OpenComputerFileClick")
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
    n($$_$$_redux_common_actions.Gi(true))
  }
  var Ie = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
              return $$_$$_$$_shared_widget_custom_load.t(o, false)
            case 5:
              e$sent = e.sent
              e$sent$title = e$sent.title
              n($$_$$_redux_common_actions.mj({
                message: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
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
          n($$_$$_redux_common_actions.Wi(!y))
          break
        case "STAGE_AREA":
          n($$_$$_redux_common_actions.Yi(!w))
      }
    }
  }
  React1.useEffect(function () {
    if (oe.preventLeave === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) {
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
  React1.useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [n])
  var Ne = oe.file.openLocalFile === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show
  var Re = oe.file.exportLocalFile === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && v
  var ke = oe.file.saveAs === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && v
  var xe = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!$$_$$_$$_$$_unrestored_shared_1571_2636_627.a.isLoaded()) {
                e.next = 3
                break
              }
              n($$_$$_redux_common_actions.mj({
                message: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              n($$_$$_redux_common_actions.fi(true))
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
    window.open("".concat($$_$$_$$_$$_unrestored_shared_1571_2636_15.B(), "/about/"), "_blank")
  }
  return React.createElement("div", {
    className: $_styles$module$css.wrapper,
    "data-html2canvas-ignore": "true"
  }, React.createElement("div", {
    className: $_styles$module$css.left
  }, !le && oe.logo !== $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "back"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: $_styles$module$css.logoBox,
    id: "logo",
    onClick: Ee
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-dropdown-down",
    className: $_styles$module$css.back
  }), React.createElement("div", {
    className: $_styles$module$css.logo
  }))), !le && oe.cutLine === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement("div", {
    className: $_styles$module$css.logoCutLine
  }), React.createElement("div", {
    className: $_styles$module$css.menu
  }, Object.values(oe.file).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g, {
    className: $_styles$module$css.fileDropdown,
    overlay: React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, {
      onClick: Ce
    }, oe.file.newProject === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "CREATE_NEW_PROJECT"
    }, React.createElement("div", {
      className: $_styles$module$css.itemContent
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.newProject"
    }))), oe.file.openMyProject === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "OPEN_MY_PROJECT"
    }, React.createElement("div", {
      className: $_styles$module$css.itemContent
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.openProject"
    }))), ke && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "SAVE_AS"
    }, React.createElement("div", {
      className: $_styles$module$css.itemContent
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.saveAs"
    }))), React.createElement("div", {
      className: $_styles$module$css.line
    }), oe.file.showHistory === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && v && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "HISTORY"
    }, React.createElement("div", {
      className: $_styles$module$css.itemContent
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.history"
    }))), !ge && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "IMPORT_EXTENSION_WIDGET"
    }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B, {
      onChange: Ie,
      accept: ".js,.jsx",
      className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.itemUploadButton)
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.importExtension"
    }))), (Re || Re) && React.createElement("div", {
      className: $_styles$module$css.line
    }), Ne && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "OPEN_LOCAL_FILE"
    }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B, {
      onChange: Se,
      onCancel: Ae,
      accept: ".json",
      className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.itemUploadButton)
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.openLocalFile"
    }))), Re && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "EXPORT_PROJECT_AS_JSON"
    }, React.createElement("div", {
      className: $_styles$module$css.itemContent
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "HeaderDropdown.exportProjectAsJson"
    }))))
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "file"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_styles$module$css.toolTipsBox
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-file"
  })))), Object.values(oe.tutorial).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g, {
    overlay: React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, null, oe.tutorial.releaseInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "courseVideo"
    }, React.createElement("div", {
      className: $_styles$module$css.itemLinkContent,
      onClick: xe
    }, React.createElement("span", {
      className: $_styles$module$css.link
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "courseVideo"
    })))), oe.tutorial.tutorial === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "tutorial"
    }, React.createElement("div", {
      className: $_styles$module$css.itemLinkContent
    }, React.createElement("a", {
      href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh",
      target: "_blank",
      rel: "noopener noreferrer",
      className: $_styles$module$css.link
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "seeTutorial"
    })))), React.createElement("div", {
      className: $_styles$module$css.line
    }), oe.tutorial.feedback === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "feedback"
    }, React.createElement("div", {
      className: $_styles$module$css.itemLinkContent
    }, React.createElement("a", {
      href: "https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd",
      target: "_blank",
      rel: "noopener noreferrer",
      className: $_styles$module$css.link
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "feedback"
    })))), oe.tutorial.releaseInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "releaseInfo"
    }, React.createElement("div", {
      className: $_styles$module$css.itemLinkContent,
      onClick: function () {
        return n($$_$$_redux_common_actions.vj(true))
      }
    }, React.createElement("span", {
      className: $_styles$module$css.link
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "releaseInfo"
    })))), oe.tutorial.about === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "aboutUs"
    }, React.createElement("div", {
      className: $_styles$module$css.itemLinkContent,
      onClick: De
    }, React.createElement("span", {
      className: $_styles$module$css.link
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "aboutUs"
    })))))
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "help"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_styles$module$css.toolTipsBox
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-help-circle-active"
  })))), Object.values(oe.help).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g, {
    overlay: React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, {
      onClick: je
    }, oe.help.ruler === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "STAGE_RULER"
    }, React.createElement("div", {
      className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.itemContent, L && $_styles$module$css.disabled)
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage(y ? {
      id: "HeaderDropdown.hideRuler"
    } : {
      id: "HeaderDropdown.showRuler"
    }))), oe.help.stage === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: "STAGE_AREA"
    }, React.createElement("div", {
      className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.itemContent, L && $_styles$module$css.disabled)
    }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage(w ? {
      id: "HeaderDropdown.hideWidgetAndStage"
    } : {
      id: "HeaderDropdown.showWidgetAndStage"
    }))))
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "setting"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: $_styles$module$css.toolTipsBox
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-settings"
  }))))), !le && oe.cloudDBManager === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "cloudDBManager"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.iconWrapper, $_styles$module$css.cloudIconWrapper, C && $_styles$module$css.activeIconWrapper),
    onClick: function () {
      n(m ? $$_$$_redux_common_actions.jj(true) : $$_$$_redux_common_actions.Ch())
    }
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-database-manage-active",
    className: $_styles$module$css.databaseIcon
  }))), React.createElement(yn, null)), React.createElement("div", {
    className: $_styles$module$css.center
  }, e$children), React.createElement("div", {
    className: $_styles$module$css.right
  }, !le && oe.coll === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement("div", {
    className: $_styles$module$css.otWrapper
  }, React.createElement(St, null)), !le && oe.package === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && v && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g, {
    className: $_styles$module$css.shareMenu,
    overlay: React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, null, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, null, React.createElement(on, {
      target: "community"
    })), React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, null, React.createElement(on, {
      target: "others"
    })))
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "Publish.share"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.shareWrapper)
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-share",
    className: $_styles$module$css.icon
  })))), !le && oe.cutLine === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement("div", {
    className: $_styles$module$css.cutLine
  }), !le && oe.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    placement: "bottom",
    title: function () {
      if (!D) {
        return $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.notSaved"
        })
      }
      var e = D
      var t = Date.now()
      var n = t - e
      var o = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, 0)
      var i = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, -1)
      var a = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, -2)
      var s = new Date(e)
      var c = ""
      var l = "".concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
        id: "MyProject.lastSaved"
      }), " ")
      if (n < 6e4) {
        c = "".concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.justSaved"
        }))
      } else if (n < 36e5) {
        var u = Math.ceil(n / 60 / 1e3)
        u = Math.max(u, 1)
        u = Math.min(u, 59)
        c = l + (c = "".concat(u).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.minute"
        })).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.ago"
        })))
      } else if (n < 216e5 || e > o) {
        var d = Math.floor(n / 36e5)
        var p = Math.floor(n % 36e5 / 6e4)
        if (d) {
          c += "".concat(d).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
            id: "MyProject.hour"
          }))
        }
        if (p) {
          c += "".concat(p).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
            id: "MyProject.minute"
          }))
        }
        c = l + (c += $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.ago"
        }))
      } else if (e > i) {
        c = l + (c = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.yesterday"
        }) + $$_$$_$$_$$_unrestored_shared_1571_2636_15.K(s))
      } else {
        if (e > a) {
          c = l + (c = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
            id: "MyProject.theDayBeforeYesterday"
          }) + $$_$$_$$_$$_unrestored_shared_1571_2636_15.K(s))
        } else {
          c = "".concat(s.getFullYear()).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
            id: "MyProject.year"
          }))
          c += "".concat(s.getMonth() + 1).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
            id: "MyProject.month"
          }))
          c = l + (c += "".concat(s.getDate()).concat($$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
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
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d, {
    onClick: function () {
      we(false, true)
    },
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.saveBtn, g && $_styles$module$css.saving)
  }, React.createElement("span", {
    className: $_styles$module$css.saveText
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "save"
  })), React.createElement("span", {
    className: $_styles$module$css.savingIcon
  }, React.createElement(Ge, {
    stroke: "#6e4ff4"
  })))), !le && oe.package === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && v && React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d, {
    className: $_styles$module$css.packageBtn,
    onClick: _e,
    disabled: T$isPackaging
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "package"
  })), T$packageDialogVisible && React.createElement(Dt, null), T$packageQrCodeVisible && React.createElement(Gt, null), !le && oe.userInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && React.createElement(Ze, null), React.createElement("div", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_8($_styles$module$css.saveTipsWrapper, W !== $$_$$_$$_$$_unrestored_shared_1571_2636_18.d.OTHER && ne && !U && $_styles$module$css.show)
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "MyProject.newSaveTips"
  }), React.createElement("div", {
    className: $_styles$module$css.closeSaveTips,
    onClick: function () {
      return re(false)
    }
  }, React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-close"
  }))), pe && React.createElement(ot, {
    type: Xe.ERROR,
    message: $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
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
