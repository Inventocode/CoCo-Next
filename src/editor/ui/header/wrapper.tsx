/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

import * as React from "react"

import { B, G, H } from "../../../../unrestored/shared/1571/2636/index__part-2"
import { Q } from "../../../../unrestored/shared/1571/2636/index__part-3"
import { Pe } from "../../../../unrestored/shared/1571/2636/index__part-8"
import { Ge } from "../../../../unrestored/shared/1571/2636/index__part-9"
import { Ze } from "../../../../unrestored/shared/1571/2636/index__part-10"
import { Xe, ot as Notice } from "../../../../unrestored/shared/1571/2636/index__part-11"
import { Collaboration } from "./right/collaboration"
import { Dt } from "../../../../unrestored/shared/1571/2636/index__part-15"
import { Gt } from "../../../../unrestored/shared/1571/2636/index__part-16"
import { on as ShareMenuItem } from "../../../../unrestored/shared/1571/2636/index__part-18"
import { dn as SaveFailedDialog1, pn as SaveFailedDialog2, fn as SaveFailedDialog3 } from "../../../../unrestored/shared/1571/2636/index__part-20"
import { gn as SaveProgress } from "../../../../unrestored/shared/1571/2636/index__part-21"
import * as Et from "../../../../unrestored/shared/1571/2636/9"
import styles from "../../../../unrestored/shared/1571/2636/161"
import * as /* [auto-meaningful-name] */$_276 from "../../../../unrestored/shared/1571/2636/276"
import * as LoadCustomWidget from "../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$_141_index from "../../../../unrestored/shared/1571/2636/141/index"
import * as te from "../../../../unrestored/shared/1571/2636/15"
import * as Z from "../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */$_454_index from "../../../../unrestored/shared/1571/2636/454/index"
import * as K from "../../../../unrestored/shared/1571/2636/18"
import * as Message from "../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_627 from "../../../../unrestored/shared/1571/2636/627"
import N from "../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_710_index from "../../../../unrestored/shared/1571/2636/710/index"
import { a as Tooltip } from "../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as O from "../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../unrestored/shared/1571/2636/16/index"
import * as _n from "../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */$_1053 from "../../../../unrestored/shared/1571/2636/1053"
import cloudSpaceManagerStyles from "../../../../unrestored/shared/1571/2636/1053"

function CloudSpaceManager() {
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
  var o = React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  React.useEffect(function () {
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
  return (
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      title={p}
      overlayInnerStyle={{ position: "relative", top: -7 }}
    >
      <div
        onClick={() => window.open(`${te.A()}/`, "_blank")}
        className={N(cloudSpaceManagerStyles.cloudSpaceManager)}
      >
        {p === $_710_index$a$formatMessage({ id: "cloudSpace.outMaxLimit" }) && (
          <div className={cloudSpaceManagerStyles.cloudIconError}>
            <$_13_index.j type="icon-cloud-manager-error" />
          </div>
        )}
        {p === $_710_index$a$formatMessage({ id: "cloudSpace.outWarnLimit" }) && (
          <div className={cloudSpaceManagerStyles.cloudIconWarn}>
            <$_13_index.j type="icon-cloud-manager-warn" />
          </div>
        )}
        {p === $_710_index$a$formatMessage({ id: "cloudSpace.cloudSpace" }) && (
          <div>
            <$_13_index.j type="icon-cloud-manager-normal" />
          </div>
        )}
      </div>
    </Tooltip>
  )
}
const Header = React.memo(({ children }: { children: JSX.Element }) => {
  const dispatch = $_16_index.d()
  var formatMessage = $_710_index.a().formatMessage
  var o = React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var asyncCreateProjectRef = React.useRef<null | (() => void)>()
  var userInfo = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var saving = $_16_index.e(function (e) {
    return e.common.saving
  })
  var isAuthor = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var checkedTimeStamp = $_16_index.e(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var stageRulerVisible = $_16_index.e(function (e) {
    return e.common.stageRulerVisible
  })
  var stageVisible = $_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var cloudDBManagerDialogVisible = $_16_index.e(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var project = $_16_index.e(function (e) {
    return e.project
  })
  const { isPackaging, packageQrCodeVisible, packageDialogVisible } = project
  var lastSavedTime = $_16_index.e(function (e) {
    return e.common.lastSavedTime
  })
  var isProjectModified = $_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  var playing = $_16_index.e(function (e) {
    return e.project.playing
  })
  var id = $_16_index.e(function (e) {
    return e.project.id
  })
  var title = $_16_index.e(function (e) {
    return e.project.title
  })
  var jsonFrom = $_16_index.e(function (e) {
    return e.project.jsonFrom
  })
  var isUpdate = Z.a(id)
  var V = React.useRef(null)
  var X = React.useRef(null)
  var J = React.useRef(null)
  var $ = React.useState(false)
  var ee = $_10_index.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = $_16_index.e(function (e) {
    return e.uiConfig.header
  })
  var ie = React.useState(false)
  var ae = $_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== te.N(window.location.href).archiveId
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
  var de = $_10_index.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var collAutoSave = $_16_index.e(function (e) {
    return e.common.collAutoSave
  })
  var historyArchiveId = $_16_index.e(function (e) {
    return e.common.historyArchiveId
  })
  var collWorkId = $_16_index.e(function (e) {
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
    dispatch(Message.Tf())
    dispatch(Message.Xf())
  }, [dispatch])
  var _e = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (userInfo) {
                e.next = 3
                break
              }
              dispatch(Message.wrapOpenSignInDialog())
              return e.abrupt("return")
            case 3:
              if (!isPackaging) {
                e.next = 6
                break
              }
              dispatch(Message.wrapShowCommonToastInfo({
                message: formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return Message.promisify(dispatch, Message.Vf())
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
              return save(false)
            case 2:
              e$sent = e.sent
              if (asyncCreateProjectRef.current) {
                asyncCreateProjectRef.current()
              }
              asyncCreateProjectRef.current = null
              if (e$sent) {
                dispatch(Message.dj(K.j.Hide))
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
    dispatch(Message.dj(K.j.Hide))
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
              if (isUpdate || !isProjectModified) {
                e.next = 3
                break
              }
              dispatch(Message.Ri({
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
              dispatch(Message.dj(K.j.Hide))
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
  const save = React.useCallback(async (isAutoSave, isNeedReport) => {
    if (!userInfo) {
      dispatch(Message.wrapOpenSignInDialog())
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
        dispatch(Message.Qi(true))
      }, 6e3)
    }
    s(false)
    let isSuccess = true
    try {
      await Message.promisify(dispatch, Message.wrapAsyncSaveProject({
        isUpdate,
        isAutoSave,
        isNeedReport
      }))
      if (!isAutoSave) {
        dispatch(Message.wrapShowCommonToastInfo({
          message: formatMessage({
            id: "saveProject.successTips"
          }),
          type: "success"
        }))
      }
      fe(false)
    } catch (error) {
      if (error.message === $_276.a.CLOUD_SPACE_DATA_ERROR) {
        dispatch(Message.Cf(true))
        ce(true)
      } else {
        if (error.message !== $_276.a.USER_CANCEL_SAVE && error.message !== $_276.a.USER_NOT_LOGIN) {
          if (isAutoSave) {
            fe(true)
          } else {
            s(true)
          }
        }
      }
      dispatch(Message.Si(false))
      isSuccess = false
    }
    if (J.current) {
      clearTimeout(J.current)
      dispatch(Message.Qi(false))
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
    if (collWorkId || oe.save === K.j.Hide || oe.save === K.j.ReadOnly) {
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
  }, [isUpdate, isProjectModified, save, collWorkId, oe.save])
  React.useEffect(function () {
    if (!saving) {
      if (historyArchiveId) {
        if (isProjectModified) {
          O.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return save(true)
                  case 2:
                    dispatch(Message.sg(historyArchiveId))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          dispatch(Message.sg(historyArchiveId))
        }
      }
    }
  }, [isProjectModified, historyArchiveId, save, dispatch, saving])
  React.useEffect(function () {
    if (collAutoSave && isProjectModified) {
      save(true).then(function () {
        dispatch(Message.di(false))
      }).catch(function (e) {
        console.error(e)
        dispatch(Message.di(false))
      })
    }
  }, [isProjectModified, save, collAutoSave, dispatch])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        dispatch(Message.Of(true))
        $_141_index.a("SaveToComputerClick", {
          workId: id,
          workName: title
        })
        break
      case "CREATE_NEW_PROJECT":
        dispatch(Message.Ah(K.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!userInfo) {
          return void dispatch(Message.wrapOpenSignInDialog())
        }
        dispatch(Message.Ah(K.f.MY_PROJECT))
        break
      case "SAVE_AS":
        dispatch(Message.wrapAsyncSaveProject({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void dispatch(Message.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        dispatch(Message.Gi(false))
    }
  }
  const importProjectJson = React.useCallback((e) => {
    if (isProjectModified) {
      dispatch(Message.Ri({
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
        dispatch(Message.warpAsyncCreateProject(e))
      }
    } else {
      dispatch(Message.warpAsyncCreateProject(e))
    }
    var editPermission = e?.editPermission === K.c.ReadOnly ? K.c.ReadOnly : K.c.Edit
    dispatch(Message.Ci(editPermission))
  }, [dispatch, save, isProjectModified])
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
              importProjectJson({
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
    dispatch(Message.Gi(true))
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
              return LoadCustomWidget.importCostumeWidgetFromBlob(o, false)
            case 5:
              e$sent = e.sent
              e$sent$title = e$sent.title
              dispatch(Message.wrapShowCommonToastInfo({
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
          dispatch(Message.Wi(!stageRulerVisible))
          break
        case "STAGE_AREA":
          dispatch(Message.Yi(!stageVisible))
      }
    }
  }
  React.useEffect(function () {
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
  React.useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [dispatch])
  var showOpenLocalFile = oe.file.openLocalFile === K.j.Show
  var showExportLocalFile = oe.file.exportLocalFile === K.j.Show && isAuthor
  var showSaveAs = oe.file.saveAs === K.j.Show && isAuthor
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
              dispatch(Message.wrapShowCommonToastInfo({
                message: formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              dispatch(Message.fi(true))
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
  return (
    <div className={styles.wrapper} data-html2canvas-ignore="true">
      <div className={styles.left}>
        {!le && oe.logo !== K.j.Hide && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "back" })}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div className={styles.logoBox} id="logo" onClick={Ee}>
              <$_13_index.j type="icon-dropdown-down" className={styles.back} />
              <div className={styles.logo} />
            </div>
          </Tooltip>
        )}
        {!le && oe.cutLine === K.j.Show && <div className={styles.logoCutLine} />}
        <div className={styles.menu}>
          {Object.values(oe.file).includes(K.j.Show) && !le && (
            <$_13_index.g
              className={styles.fileDropdown}
              overlay={
                <$_13_index.l onClick={Ce}>
                  {oe.file.newProject === K.j.Show && (
                    <$_13_index.m value="CREATE_NEW_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.newProject" })}
                      </div>
                    </$_13_index.m>
                  )}
                  {oe.file.openMyProject === K.j.Show && (
                    <$_13_index.m value="OPEN_MY_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.openProject" })}
                      </div>
                    </$_13_index.m>
                  )}
                  {showSaveAs && (
                    <$_13_index.m value="SAVE_AS">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.saveAs" })}
                      </div>
                    </$_13_index.m>
                  )}
                  <div className={styles.line} />
                  {oe.file.showHistory === K.j.Show && isAuthor && (
                    <$_13_index.m value="HISTORY">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.history" })}
                      </div>
                    </$_13_index.m>
                  )}
                  {!collWorkId && (
                    <$_13_index.m value="IMPORT_EXTENSION_WIDGET">
                      <$_13_index.B
                        onChange={Ie}
                        accept=".js,.jsx"
                        className={N(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.importExtension" })}
                      </$_13_index.B>
                    </$_13_index.m>
                  )}
                  {(showExportLocalFile || showExportLocalFile) && <div className={styles.line} />}
                  {showOpenLocalFile && (
                    <$_13_index.m value="OPEN_LOCAL_FILE">
                      <$_13_index.B
                        onChange={Se}
                        onCancel={Ae}
                        accept=".json"
                        className={N(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.openLocalFile" })}
                      </$_13_index.B>
                    </$_13_index.m>
                  )}
                  {showExportLocalFile && (
                    <$_13_index.m value="EXPORT_PROJECT_AS_JSON">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.exportProjectAsJson" })}
                      </div>
                    </$_13_index.m>
                  )}
                </$_13_index.l>
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
                  <$_13_index.j className="coco-header-menuIcon" type="icon-file" />
                </div>
              </Tooltip>
            </$_13_index.g>
          )}
          {Object.values(oe.tutorial).includes(K.j.Show) && !le && (
            <$_13_index.g
              overlay={
                <$_13_index.l>
                  {oe.tutorial.releaseInfo === K.j.Show && (
                    <$_13_index.m value="courseVideo">
                      <div className={styles.itemLinkContent} onClick={xe}>
                        <span className={styles.link}>
                          {formatMessage({ id: "courseVideo" })}
                        </span>
                      </div>
                    </$_13_index.m>
                  )}
                  {oe.tutorial.tutorial === K.j.Show && (
                    <$_13_index.m value="tutorial">
                      <div className={styles.itemLinkContent}>
                        <a
                          href="https://codemao-guide.yuque.com/bfiekm/sbo5kh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "seeTutorial" })}
                        </a>
                      </div>
                    </$_13_index.m>
                  )}
                  <div className={styles.line} />
                  {oe.tutorial.feedback === K.j.Show && (
                    <$_13_index.m value="feedback">
                      <div className={styles.itemLinkContent}>
                        <a
                          href="https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "feedback" })}
                        </a>
                      </div>
                    </$_13_index.m>
                  )}
                  {oe.tutorial.releaseInfo === K.j.Show && (
                    <$_13_index.m value="releaseInfo">
                      <div className={styles.itemLinkContent} onClick={() => dispatch(Message.vj(true))}>
                        <span className={styles.link}>
                          {formatMessage({ id: "releaseInfo" })}
                        </span>
                      </div>
                    </$_13_index.m>
                  )}
                  {oe.tutorial.about === K.j.Show && (
                    <$_13_index.m value="aboutUs">
                      <div className={styles.itemLinkContent} onClick={De}>
                        <span className={styles.link}>
                          {formatMessage({ id: "aboutUs" })}
                        </span>
                      </div>
                    </$_13_index.m>
                  )}
                </$_13_index.l>
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
                  <$_13_index.j className="coco-header-menuIcon" type="icon-help-circle-active" />
                </div>
              </Tooltip>
            </$_13_index.g>
          )}
          {Object.values(oe.help).includes(K.j.Show) && !le && (
            <$_13_index.g
              overlay={
                <$_13_index.l onClick={je}>
                  {oe.help.ruler === K.j.Show && (
                    <$_13_index.m value="STAGE_RULER">
                      <div className={N(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(
                          stageRulerVisible ? { id: "HeaderDropdown.hideRuler" } : { id: "HeaderDropdown.showRuler" }
                        )}
                      </div>
                    </$_13_index.m>
                  )}
                  {oe.help.stage === K.j.Show && (
                    <$_13_index.m value="STAGE_AREA">
                      <div className={N(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(
                          stageVisible ? { id: "HeaderDropdown.hideWidgetAndStage" } : { id: "HeaderDropdown.showWidgetAndStage" }
                        )}
                      </div>
                    </$_13_index.m>
                  )}
                </$_13_index.l>
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
                  <$_13_index.j className="coco-header-menuIcon" type="icon-settings" />
                </div>
              </Tooltip>
            </$_13_index.g>
          )}
        </div>
        {!le && oe.cloudDBManager === K.j.Show && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "cloudDBManager" })}
            trigger={["hover", "click"]}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div
              className={N(styles.iconWrapper, styles.cloudIconWrapper, cloudDBManagerDialogVisible && styles.activeIconWrapper)}
              onClick={() => dispatch(userInfo ? Message.jj(true) : Message.wrapOpenSignInDialog())}
            >
              <$_13_index.j type="icon-database-manage-active" className={styles.databaseIcon} />
            </div>
          </Tooltip>
        )}
        <CloudSpaceManager />
      </div>
      <div className={styles.center}>{children}</div>
      <div className={styles.right}>
        {!le && oe.coll === K.j.Show && <div className={styles.otWrapper}><Collaboration /></div>}
        {!le && oe.package === K.j.Show && isAuthor && (
          <$_13_index.g
            className={styles.shareMenu}
            overlay={
              <$_13_index.l>
                <$_13_index.m>
                  <ShareMenuItem target="community" />
                </$_13_index.m>
                <$_13_index.m>
                  <ShareMenuItem target="others" />
                </$_13_index.m>
              </$_13_index.l>
            }
          >
            <Tooltip
              mouseLeaveDelay={0}
              placement="bottom"
              title={formatMessage({ id: "Publish.share" })}
              trigger={["hover", "click"]}
              overlayInnerStyle={{ position: "relative", top: -4 }}
            >
              <div className={N(styles.shareWrapper)}>
                <$_13_index.j type="icon-share" className={styles.icon} />
              </div>
            </Tooltip>
          </$_13_index.g>
        )}
        {!le && oe.cutLine === K.j.Show && <div className={styles.cutLine} />}
        {!le && oe.save === K.j.Show && (
          <Tooltip
            placement="bottom"
            title={() => {
              if (!lastSavedTime) {
                return formatMessage({ id: "MyProject.notSaved" })
              }
              var e = lastSavedTime
              var t = Date.now()
              var n = t - e
              var o = te.G(t, 0)
              var i = te.G(t, -1)
              var a = te.G(t, -2)
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
                c = l + (c = formatMessage({ id: "MyProject.yesterday" }) + te.K(s))
              } else {
                if (e > a) {
                  c = l + (c = formatMessage({ id: "MyProject.theDayBeforeYesterday" }) + te.K(s))
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
            <$_13_index.d
              onClick={() => save(false, true)}
              className={N(styles.saveBtn, saving && styles.saving)}
            >
              <span className={styles.saveText}>
                {formatMessage({ id: "save" })}
              </span>
              <span className={styles.savingIcon}>
                <Ge stroke="#6e4ff4" />
              </span>
            </$_13_index.d>
          </Tooltip>
        )}
        {!le && oe.package === K.j.Show && isAuthor && (
          <$_13_index.d
            className={styles.packageBtn}
            onClick={_e}
            disabled={isPackaging}
          >
            {formatMessage({ id: "package" })}
          </$_13_index.d>
        )}
        {packageDialogVisible && <Dt />}
        {packageQrCodeVisible && <Gt />}
        {!le && oe.userInfo === K.j.Show && <Ze />}
        <div className={N(styles.saveTipsWrapper, jsonFrom !== K.d.OTHER && ne && !isUpdate && styles.show)}>
          {formatMessage({ id: "MyProject.newSaveTips" })}
          <div className={styles.closeSaveTips} onClick={() => re(false)}>
            <$_13_index.j type="icon-close" />
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
