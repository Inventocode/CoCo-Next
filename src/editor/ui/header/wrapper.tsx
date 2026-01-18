/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

import * as React from "react"

import packageInfo from "../../../../package.json"
import { B, G, H } from "../../../../unrestored/shared/1571/2636/index__part-2"
import { Q } from "../../../../unrestored/shared/1571/2636/index__part-3"
import { Pe } from "../../../../unrestored/shared/1571/2636/index__part-8"
import { Ge } from "../../../../unrestored/shared/1571/2636/index__part-9"
import { UserInfo } from "./right/user-info"
import { Xe, ot as Notice } from "../../../../unrestored/shared/1571/2636/index__part-11"
import { Collaboration } from "./right/collaboration"
import { Dt } from "../../../../unrestored/shared/1571/2636/index__part-15"
import { Gt } from "../../../../unrestored/shared/1571/2636/index__part-16"
import { on as ShareMenuItem } from "../../../../unrestored/shared/1571/2636/index__part-18"
import { dn as SaveFailedDialog1, pn as SaveFailedDialog2, fn as SaveFailedDialog3 } from "../../../../unrestored/shared/1571/2636/index__part-20"
import { gn as SaveProgress } from "../../../../unrestored/shared/1571/2636/index__part-21"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_276 from "../../../../unrestored/shared/1571/2636/276"
import * as LoadCustomWidget from "../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_97 from "../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_454 from "../../../../unrestored/shared/1571/2636/454"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../unrestored/shared/1571/2636/18"
import * as Actions from "../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_627 from "../../../../unrestored/shared/1571/2636/627"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../unrestored/shared/1571/2636/710/index"
import { a as Tooltip } from "../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_47 from "../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_1053 from "../../../../unrestored/shared/1571/2636/1053"

import styles from "./styles.module.css"
import cloudSpaceManagerStyles from "../../../../unrestored/shared/1571/2636/1053"

function CloudSpaceManager() {
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
  var o = React.useState(false)
  var i = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React.useState(false)
  var l = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  React.useEffect(function () {
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
  return (
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      title={p}
      overlayInnerStyle={{ position: "relative", top: -7 }}
    >
      <div
        onClick={() => window.open(`${$$_$$_$$_$$_unrestored_shared_1571_2636_15.A()}/`, "_blank")}
        className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(cloudSpaceManagerStyles.cloudSpaceManager)}
      >
        {p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "cloudSpace.outMaxLimit" }) && (
          <div className={cloudSpaceManagerStyles.cloudIconError}>
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-cloud-manager-error" />
          </div>
        )}
        {p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "cloudSpace.outWarnLimit" }) && (
          <div className={cloudSpaceManagerStyles.cloudIconWarn}>
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-cloud-manager-warn" />
          </div>
        )}
        {p === $$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "cloudSpace.cloudSpace" }) && (
          <div>
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-cloud-manager-normal" />
          </div>
        )}
      </div>
    </Tooltip>
  )
}
const Header = React.memo(({ children }: { children: JSX.Element }) => {
  const dispatch = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var formatMessage = $$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var o = React.useState(false)
  var i = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React.useState(false)
  var l = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var asyncCreateProjectRef = React.useRef<null | (() => void)>()
  var userInfo = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var saving = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.saving
  })
  var isAuthor = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var checkedTimeStamp = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var stageRulerVisible = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageRulerVisible
  })
  var stageVisible = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var cloudDBManagerDialogVisible = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var project = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project
  })
  const { isPackaging, packageQrCodeVisible, packageDialogVisible } = project
  var lastSavedTime = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.lastSavedTime
  })
  var isProjectModified = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  var playing = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.playing
  })
  var id = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.id
  })
  var title = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.title
  })
  var jsonFrom = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.jsonFrom
  })
  var isUpdate = $$_$$_$$_$$_unrestored_shared_1571_2636_97.a(id)
  var V = React.useRef(null)
  var X = React.useRef(null)
  var J = React.useRef(null)
  var $ = React.useState(false)
  var ee = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  const uiConfig = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var ie = React.useState(false)
  var ae = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== $$_$$_$$_$$_unrestored_shared_1571_2636_15.N(window.location.href).archiveId
  React.useEffect(function () {
    re(false)
  }, [id])
  React.useEffect(function () {
    if (se) {
      save(false, true)
    }
  }, [checkedTimeStamp])
  React.useEffect(function () {
    function e() {
      if (V.current) {
        clearTimeout(V.current)
      }
    }
    if (isUpdate) {
      e()
    } else {
      V.current = window.setTimeout(function () {
        re(true)
      }, 18e4)
    }
    return e
  }, [id, isUpdate])
  var ue = React.useState(false)
  var de = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var collAutoSave = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.collAutoSave
  })
  var historyArchiveId = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.historyArchiveId
  })
  var collWorkId = $$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  React.useEffect(function () {
    !function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : H.PURPLE
      var t = G(e)
      var n = ""
      for (var r in t) if (t[r]) {
        n += "".concat(B[r], ": ").concat(t[r], "; ")
      }
      document.body.setAttribute("style", n)
    }()
    dispatch(Actions.Tf())
    dispatch(Actions.Xf())
  }, [dispatch])
  var _e = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (userInfo) {
                e.next = 3
                break
              }
              dispatch(Actions.openSignInDialogAction())
              return e.abrupt("return")
            case 3:
              if (!isPackaging) {
                e.next = 6
                break
              }
              dispatch(Actions.showCommonToastInfoAction({
                message: formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return Actions.promisify(dispatch, Actions.Vf())
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
              return save(false)
            case 2:
              e$sent = e.sent
              if (asyncCreateProjectRef.current) {
                asyncCreateProjectRef.current()
              }
              asyncCreateProjectRef.current = null
              if (e$sent) {
                dispatch(Actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
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
    if (asyncCreateProjectRef.current) {
      asyncCreateProjectRef.current()
    }
    asyncCreateProjectRef.current = null
    dispatch(Actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
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
              if (isUpdate || !isProjectModified) {
                e.next = 3
                break
              }
              dispatch(Actions.Ri({
                visible: true,
                openFrom: "backHome",
                onSave: ve,
                onImport: ye
              }))
              return e.abrupt("return")
            case 3:
              if (!isUpdate || !isProjectModified) {
                e.next = 9
                break
              }
              e.next = 6
              return save(true)
            case 6:
              if (e.sent) {
                e.next = 9
                break
              }
              return e.abrupt("return")
            case 9:
              dispatch(Actions.dj($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide))
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
  const save = React.useCallback(async (isAutoSave, isNeedReport) => {
    if (!userInfo) {
      dispatch(Actions.openSignInDialogAction())
      return
    }
    if (saving) {
      return
    }
    if (J.current) {
      clearTimeout(J.current)
    }
    if (!isAutoSave) {
      J.current = window.setTimeout(function () {
        dispatch(Actions.Qi(true))
      }, 6e3)
    }
    s(false)
    let isSuccess = true
    try {
      await Actions.promisify(dispatch, Actions.asyncSaveProjectAction({
        isUpdate,
        isAutoSave,
        isNeedReport
      }))
      if (!isAutoSave) {
        dispatch(Actions.showCommonToastInfoAction({
          message: formatMessage({
            id: "saveProject.successTips"
          }),
          type: "success"
        }))
      }
      fe(false)
    } catch (error) {
      if (error.message === $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.CLOUD_SPACE_DATA_ERROR) {
        dispatch(Actions.Cf(true))
        ce(true)
      } else {
        if (error.message !== $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.USER_CANCEL_SAVE && error.message !== $$_$$_$$_$$_unrestored_shared_1571_2636_276.a.USER_NOT_LOGIN) {
          if (isAutoSave) {
            fe(true)
          } else {
            s(true)
          }
        }
      }
      dispatch(Actions.Si(false))
      isSuccess = false
    }
    if (J.current) {
      clearTimeout(J.current)
      dispatch(Actions.Qi(false))
    }
    return isSuccess
  }, [dispatch, formatMessage, isUpdate, saving, userInfo])
  React.useEffect(function () {
    function e() {
      if (X.current) {
        clearTimeout(X.current)
        X.current = null
      }
    }
    if (collWorkId || uiConfig.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide || uiConfig.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly) {
      e()
    } else if (isUpdate && isProjectModified) {
      if (!X.current) {
        if (isUpdate && isProjectModified) {
          X.current = window.setTimeout(function () {
            save(true)
            e()
          }, 3e5)
        }
        return e
      }
    } else {
      e()
    }
  }, [isUpdate, isProjectModified, save, collWorkId, uiConfig.save])
  React.useEffect(function () {
    if (!saving) {
      if (historyArchiveId) {
        if (isProjectModified) {
          $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return save(true)
                  case 2:
                    dispatch(Actions.sg(historyArchiveId))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          dispatch(Actions.sg(historyArchiveId))
        }
      }
    }
  }, [isProjectModified, historyArchiveId, save, dispatch, saving])
  React.useEffect(function () {
    if (collAutoSave && isProjectModified) {
      save(true).then(function () {
        dispatch(Actions.di(false))
      }).catch(function (e) {
        console.error(e)
        dispatch(Actions.di(false))
      })
    }
  }, [isProjectModified, save, collAutoSave, dispatch])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        dispatch(Actions.Of(true))
        $$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("SaveToComputerClick", {
          workId: id,
          workName: title
        })
        break
      case "CREATE_NEW_PROJECT":
        dispatch(Actions.Ah($$_$$_$$_$$_unrestored_shared_1571_2636_18.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!userInfo) {
          return void dispatch(Actions.openSignInDialogAction())
        }
        dispatch(Actions.Ah($$_$$_$$_$$_unrestored_shared_1571_2636_18.f.MY_PROJECT))
        break
      case "SAVE_AS":
        dispatch(Actions.asyncSaveProjectAction({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void dispatch(Actions.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        dispatch(Actions.Gi(false))
    }
  }
  const importProjectJson = React.useCallback((e) => {
    if (isProjectModified) {
      dispatch(Actions.Ri({
        visible: true,
        openFrom: "",
        async onSave() {
          await save(false)
          if (asyncCreateProjectRef.current) {
            asyncCreateProjectRef.current()
          }
          asyncCreateProjectRef.current = null
        },
        onImport() {
          if (asyncCreateProjectRef.current) {
            asyncCreateProjectRef.current()
          }
          asyncCreateProjectRef.current = null
        }
      }))
      asyncCreateProjectRef.current = () => {
        dispatch(Actions.warpAsyncCreateProject(e))
      }
    } else {
      dispatch(Actions.warpAsyncCreateProject(e))
    }
    var editPermission = e?.editPermission === $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly ? $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly : $$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit
    dispatch(Actions.Ci(editPermission))
  }, [dispatch, save, isProjectModified])
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
              importProjectJson({
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
    dispatch(Actions.Gi(true))
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
              return LoadCustomWidget.importCostumeWidgetFromBlob(o, false)
            case 5:
              e$sent = e.sent
              e$sent$title = e$sent.title
              dispatch(Actions.showCommonToastInfoAction({
                message: formatMessage({
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
    if (!playing) {
      switch (e) {
        case "STAGE_RULER":
          dispatch(Actions.Wi(!stageRulerVisible))
          break
        case "STAGE_AREA":
          dispatch(Actions.Yi(!stageVisible))
      }
    }
  }
  React.useEffect(function () {
    if (uiConfig.preventLeave === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) {
      window.onbeforeunload = function (e) {
        if (e) {
          e.returnValue = "你要离开网页吗？"
        }
        return "你要离开网页吗？"
      }
    } else {
      window.onbeforeunload = function () {}
    }
  }, [uiConfig.preventLeave])
  React.useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [dispatch])
  var showOpenLocalFile = uiConfig.file.openLocalFile === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show
  // [CoCo Next] 移除保存作品限制
  var showExportLocalFile = uiConfig.file.exportLocalFile === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show // && isAuthor
  var showSaveAs = uiConfig.file.saveAs === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && isAuthor
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
              dispatch(Actions.showCommonToastInfoAction({
                message: formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              dispatch(Actions.fi(true))
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
  return (
    <div className={styles.wrapper} data-html2canvas-ignore="true">
      <div className={styles.left}>
        {!le && uiConfig.logo !== $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Hide && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "back" })}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div className={styles.logoBox} id="logo" onClick={Ee}>
              <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-dropdown-down" className={styles.back} />
              <div className={styles.logo} />
            </div>
          </Tooltip>
        )}
        {!le && uiConfig.cutLine === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && <div className={styles.logoCutLine} />}
        <div className={styles.menu}>
          {Object.values(uiConfig.file).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && (
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g
              className={styles.fileDropdown}
              overlay={
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l onClick={Ce}>
                  {uiConfig.file.newProject === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="CREATE_NEW_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.newProject" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {uiConfig.file.openMyProject === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="OPEN_MY_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.openProject" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {showSaveAs && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="SAVE_AS">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.saveAs" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  <div className={styles.line} />
                  {uiConfig.file.showHistory === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && isAuthor && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="HISTORY">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.history" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {
                  // [CoCo Next] 移除协作导入自定义控件限制
                  // !collWorkId &&
                  (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="IMPORT_EXTENSION_WIDGET">
                      <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B
                        onChange={Ie}
                        accept=".js,.jsx"
                        className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.importExtension" })}
                      </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {(showExportLocalFile || showExportLocalFile) && <div className={styles.line} />}
                  {showOpenLocalFile && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="OPEN_LOCAL_FILE">
                      <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B
                        onChange={Se}
                        onCancel={Ae}
                        accept=".json"
                        className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.openLocalFile" })}
                      </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.B>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {showExportLocalFile && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="EXPORT_PROJECT_AS_JSON">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.exportProjectAsJson" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "file" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j className="coco-header-menuIcon" type="icon-file" />
                </div>
              </Tooltip>
            </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g>
          )}
          {Object.values(uiConfig.tutorial).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && (
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g
              overlay={
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
                  {uiConfig.tutorial.releaseInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="courseVideo">
                      <div className={styles.itemLinkContent} onClick={xe}>
                        <span className={styles.link}>
                          {formatMessage({ id: "courseVideo" })}
                        </span>
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {uiConfig.tutorial.tutorial === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="tutorial">
                      <div className={styles.itemLinkContent}>
                        {/* [CoCo Next] 替换帮助文档链接 */}
                        <a
                          href={packageInfo.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "seeTutorial" })}
                        </a>
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  <div className={styles.line} />
                  {uiConfig.tutorial.feedback === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="feedback">
                      <div className={styles.itemLinkContent}>
                        {/* [CoCo Next] 替换问题反馈链接 */}
                        <a
                          href={packageInfo.feedback}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "feedback" })}
                        </a>
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {uiConfig.tutorial.releaseInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="releaseInfo">
                      <div className={styles.itemLinkContent} onClick={() => dispatch(Actions.vj(true))}>
                        <span className={styles.link}>
                          {formatMessage({ id: "releaseInfo" })}
                        </span>
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {uiConfig.tutorial.about === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="aboutUs">
                      <div className={styles.itemLinkContent} onClick={De}>
                        <span className={styles.link}>
                          {formatMessage({ id: "aboutUs" })}
                        </span>
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "help" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j className="coco-header-menuIcon" type="icon-help-circle-active" />
                </div>
              </Tooltip>
            </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g>
          )}
          {Object.values(uiConfig.help).includes($$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show) && !le && (
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g
              overlay={
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l onClick={je}>
                  {uiConfig.help.ruler === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="STAGE_RULER">
                      <div className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(stageRulerVisible ? { id: "HeaderDropdown.hideRuler" } : { id: "HeaderDropdown.showRuler" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                  {uiConfig.help.stage === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
                    <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m value="STAGE_AREA">
                      <div className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(stageVisible ? { id: "HeaderDropdown.hideWidgetAndStage" } : { id: "HeaderDropdown.showWidgetAndStage" })}
                      </div>
                    </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  )}
                </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "setting" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j className="coco-header-menuIcon" type="icon-settings" />
                </div>
              </Tooltip>
            </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g>
          )}
        </div>
        {!le && uiConfig.cloudDBManager === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "cloudDBManager" })}
            trigger={["hover", "click"]}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div
              className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.iconWrapper, styles.cloudIconWrapper, cloudDBManagerDialogVisible && styles.activeIconWrapper)}
              onClick={() => dispatch(userInfo ? Actions.jj(true) : Actions.openSignInDialogAction())}
            >
              <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-database-manage-active" className={styles.databaseIcon} />
            </div>
          </Tooltip>
        )}
        <CloudSpaceManager />
      </div>
      <div className={styles.center}>{children}</div>
      <div className={styles.right}>
        {!le && uiConfig.coll === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && <div className={styles.otWrapper}><Collaboration /></div>}
        {!le && uiConfig.package === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && isAuthor && (
          <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g
            className={styles.shareMenu}
            overlay={
              <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  <ShareMenuItem target="community" />
                </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
                  <ShareMenuItem target="others" />
                </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
              </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
            }
          >
            <Tooltip
              mouseLeaveDelay={0}
              placement="bottom"
              title={formatMessage({ id: "Publish.share" })}
              trigger={["hover", "click"]}
              overlayInnerStyle={{ position: "relative", top: -4 }}
            >
              <div className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.shareWrapper)}>
                <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-share" className={styles.icon} />
              </div>
            </Tooltip>
          </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g>
        )}
        {!le && uiConfig.cutLine === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && <div className={styles.cutLine} />}
        {!le && uiConfig.save === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && (
          <Tooltip
            placement="bottom"
            title={() => {
              if (!lastSavedTime) {
                return formatMessage({ id: "MyProject.notSaved" })
              }
              var e = lastSavedTime
              var t = Date.now()
              var n = t - e
              var o = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, 0)
              var i = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, -1)
              var a = $$_$$_$$_$$_unrestored_shared_1571_2636_15.G(t, -2)
              var s = new Date(e)
              var c = ""
              var l = "".concat(formatMessage({ id: "MyProject.lastSaved" }), " ")
              if (n < 6e4) {
                c = "".concat(formatMessage({ id: "MyProject.justSaved" }))
              } else if (n < 36e5) {
                var u = Math.ceil(n / 60 / 1e3)
                u = Math.max(u, 1)
                u = Math.min(u, 59)
                c = l + "".concat(u).concat(formatMessage({ id: "MyProject.minute" })).concat(formatMessage({ id: "MyProject.ago" }))
              } else if (n < 216e5 || e > o) {
                var d = Math.floor(n / 36e5)
                var p = Math.floor(n % 36e5 / 6e4)
                if (d) {
                  c += "".concat(d).concat(formatMessage({ id: "MyProject.hour" }))
                }
                if (p) {
                  c += "".concat(p).concat(formatMessage({ id: "MyProject.minute" }))
                }
                c = l + (c += formatMessage({ id: "MyProject.ago" }))
              } else if (e > i) {
                c = l + (c = formatMessage({ id: "MyProject.yesterday" }) + $$_$$_$$_$$_unrestored_shared_1571_2636_15.K(s))
              } else {
                if (e > a) {
                  c = l + (c = formatMessage({ id: "MyProject.theDayBeforeYesterday" }) + $$_$$_$$_$$_unrestored_shared_1571_2636_15.K(s))
                } else {
                  c = "".concat(s.getFullYear()).concat(formatMessage({ id: "MyProject.year" }))
                  c += "".concat(s.getMonth() + 1).concat(formatMessage({ id: "MyProject.month" }))
                  c = l + (c += "".concat(s.getDate()).concat(formatMessage({ id: "MyProject.day" })))
                }
              }
              return c
            }}
            trigger={["hover", "click"]}
            overlayInnerStyle={{ position: "relative", top: "8px" }}
          >
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d
              onClick={() => save(false, true)}
              className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.saveBtn, saving && styles.saving)}
            >
              <span className={styles.saveText}>
                {formatMessage({ id: "save" })}
              </span>
              <span className={styles.savingIcon}>
                <Ge stroke="#6e4ff4" />
              </span>
            </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d>
          </Tooltip>
        )}
        {!le && uiConfig.package === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && isAuthor && (
          <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d
            className={styles.packageBtn}
            onClick={_e}
            disabled={isPackaging}
          >
            {formatMessage({ id: "package" })}
          </$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d>
        )}
        {packageDialogVisible && <Dt />}
        {packageQrCodeVisible && <Gt />}
        {!le && uiConfig.userInfo === $$_$$_$$_$$_unrestored_shared_1571_2636_18.j.Show && <UserInfo />}
        <div className={$$_$$_$$_$$_unrestored_shared_1571_2636_8(styles.saveTipsWrapper, jsonFrom !== $$_$$_$$_$$_unrestored_shared_1571_2636_18.d.OTHER && ne && !isUpdate && styles.show)}>
          {formatMessage({ id: "MyProject.newSaveTips" })}
          <div className={styles.closeSaveTips} onClick={() => re(false)}>
            <$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-close" />
          </div>
        </div>
        {pe && (
          <Notice
            type={Xe.ERROR}
            message={formatMessage({ id: "MyProject.autoSaveErrorTips" })}
            onClose={() => fe(false)}
          />
        )}
        <Pe importProjectJson={importProjectJson} />
        <SaveProgress />
      </div>
      <SaveFailedDialog1 visible={a} onClose={() => s(false)} save={() => save(false)} />
      <SaveFailedDialog3 visible={u} onClose={() => d(false)} save={() => { d(false); _e() }} />
      <SaveFailedDialog2 />
    </div>
  )
})
export { Header as En }
