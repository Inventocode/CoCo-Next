/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-195
 */

import * as React from "react"

import { me } from "../../../unrestored/shared/1571/2636/index__part-5"
import { AC, IC } from "../../../unrestored/shared/1571/2636/index__part-140"
import * as /* [auto-meaningful-name] */$_37_index from "../../../unrestored/shared/1571/2636/37/index"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$_288 from "../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$_141_index from "../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$_297 from "../../../unrestored/shared/1571/2636/297"
import * as te from "../../../unrestored/shared/1571/2636/15"
import * as K from "../../../unrestored/shared/1571/2636/18"
import * as Message from "../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_627 from "../../../unrestored/shared/1571/2636/627"
import * as /* [auto-meaningful-name] */$_710_index from "../../../unrestored/shared/1571/2636/710/index"
import * as O from "../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$_2646_index from "../../../unrestored/shared/1571/2636/2646/index"
import * as /* [auto-meaningful-name] */$_1529 from "../../../unrestored/shared/1571/2636/1529"
import * as /* [auto-meaningful-name] */$_392_index from "../../../unrestored/shared/1571/2636/392/index"
function OpenWork() {
  var dispatch = $_16_index.d()
  var formatMessage = $_710_index.a().formatMessage
  var courseList = $_16_index.e(function (e) {
    return e.common.courseList
  })
  var templateList = $_16_index.e(function (e) {
    return e.common.templateList
  })
  const hasWorkRef = React.useRef(false)
  $_288.b()
  React.useEffect(function () {
    function e() {
      return (e = O.a(RegeneratorRuntime.mark(function e() {
        var t
        var /* [auto-meaningful-name] */t$code
        var /* [auto-meaningful-name] */e$sent
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (t = te.N(window.location.href), !(t$code = t.code)) {
                  e.next = 6
                  break
                }
                e.next = 4
                return Axios.post("https://open-cn.aqara.com/v3.0/open/access_token?code=".concat(t$code, "&client_id=").concat(AC, "&client_secret=").concat(IC, "&grant_type=authorization_code&redirect_uri=").concat(new URL("/editor", window.location.origin).toString()), {}, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                })
              case 4:
                if ((e$sent = e.sent).data.access_token) {
                  localStorage.setItem("lvmi_access_token", e$sent.data.access_token)
                  localStorage.setItem("lvmi_refresh_token", e$sent.data.refresh_token)
                  window.close()
                }
              case 6:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))).apply(this, arguments)
    }
    !function () {
      e.apply(this, arguments)
    }()
  }, [])

  const openWorkById = React.useCallback(async (workId) => {
    try {
      hasWorkRef.current = true
      const response = await $_297.d(workId)
      hasWorkRef.current = false
      if (response.data) {
        const workInfo = response.data
        if (
          !(await $_288.b()).includes(Number(workId)) &&
          !workInfo.is_author &&
          workInfo.is_coll_work &&
          workInfo.content &&
          workInfo.content.unsafeExtensionWidgetList &&
          workInfo.content.unsafeExtensionWidgetList.length > 0
        ) {
          // [CoCo Next] 移除从 URL 打开协作作品时的自定义控件限制
          // dispatch(Message.wrapOpenConfirmDialog({
          //   onConfirm: () => {
          //     dispatch(Message.warpAsyncCreateProject())
          //   },
          //   allowText: formatMessage({
          //     id: "know"
          //   }),
          //   title: "",
          //   content: (
          //     <div>
          //       作品使用了未审核的自定义控件，需将控件提交至<a href={te.b} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>并等待审核通过后才能进行协作。
          //     </div>
          //   ),
          //   cancelBtnVisible: false
          // }))
          // return
        }
        dispatch(Message.warpAsyncCreateProject({
          json: workInfo.content,
          lastSavedTime: 1e3 * workInfo.updated_at,
          isCollWork: workInfo.is_coll_work,
          isAuthor: workInfo.is_author,
          projectId: workId,
          editPermission: workInfo.edit_permission,
          jsonFrom: workInfo.is_coll_work ? K.d.OTHER : K.d.MY_WORK
        }))
      } else {
        dispatch(Message.wrapAsyncGetProjectError({
          code: response.code
        }))
      }
    } catch (error) {
      hasWorkRef.current = false
    }
  }, [dispatch, formatMessage])

  var joinColl = React.useCallback(function (n, r) {
    (function (e, t) {
      return me.apply(this, arguments)
    })(n, r).then(O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */$_37_index$d$getState$common$userInfo
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return openWorkById(n)
            case 2:
              $_37_index$d$getState$common$userInfo = $_37_index.d.getState().common.userInfo
              $_141_index.a("EnterCollaboration", {
                collaborationId: (null === $_37_index$d$getState$common$userInfo || undefined === $_37_index$d$getState$common$userInfo ? undefined : $_37_index$d$getState$common$userInfo.id) || "",
                collaborationName: (null === $_37_index$d$getState$common$userInfo || undefined === $_37_index$d$getState$common$userInfo ? undefined : $_37_index$d$getState$common$userInfo.nickname) || ""
              })
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).catch(function (n) {
      var /* [auto-meaningful-name] */n$response
      switch (console.error("加入协作失败,", n), null === (n$response = n.response) || undefined === n$response ? undefined : n$response.data.code) {
        case 80000001:
          dispatch(Message.Ch(function () {
            window.location.reload()
          }))
          break
        case 10000008:
          dispatch(Message.wrapOpenConfirmDialog({
            onConfirm: function () {
              dispatch(Message.warpAsyncCreateProject())
            },
            allowText: formatMessage({
              id: "confirm"
            }),
            title: formatMessage({
              id: "OT.canNotFindProjectTitle"
            }),
            content: formatMessage({
              id: "OT.inviteLinkOverdueDescription"
            }),
            cancelBtnVisible: false
          }))
          break
        default:
          dispatch(Message.wrapOpenConfirmDialog({
            onConfirm: function () {
              dispatch(Message.warpAsyncCreateProject())
            },
            allowText: formatMessage({
              id: "confirm"
            }),
            title: formatMessage({
              id: "OT.canNotFindProjectTitle"
            }),
            content: formatMessage({
              id: "OT.canNotFindProjectDescription"
            }),
            cancelBtnVisible: false
          }))
      }
    })
  }, [dispatch, formatMessage, openWorkById])
  var openNew = React.useCallback(function () {
    dispatch(Message.warpAsyncCreateProject("localhost" === window.location.hostname ? undefined : {
      json: $_1529
    }))
  }, [dispatch])
  var openJsonUrl = React.useCallback(function (t) {
    hasWorkRef.current = true
    fetch(t).then(function (t) {
      t.json().then(function (t) {
        dispatch(Message.warpAsyncCreateProject({
          json: t
        }))
      })
      hasWorkRef.current = false
    }).catch(function () {
      openNew()
      hasWorkRef.current = false
    })
  }, [dispatch, openNew])
  var openPlayerBcmUrl = React.useCallback(function (t) {
    hasWorkRef.current = true
    fetch(t).then(function (t) {
      t.json().then(function (t) {
        dispatch(Message.Ff(t))
      })
      hasWorkRef.current = false
    })
  }, [dispatch])
  var openArchive = React.useCallback(function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      var /* [auto-meaningful-name] */t$sent
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.prev = 0
              hasWorkRef.current = true
              t.next = 4
              return $_297.e(n)
            case 4:
              t$sent = t.sent
              hasWorkRef.current = false
              if (t$sent) {
                dispatch(Message.warpAsyncCreateProject({
                  json: t$sent.content,
                  editPermission: K.c.Preview
                }))
              } else {
                console.error("归档内容不存在，加载空作品")
                openNew()
              }
              t.next = 13
              break
            case 9:
              t.prev = 9
              t.t0 = t.catch(0)
              openNew()
              hasWorkRef.current = false
            case 13:
            case "end":
              return t.stop()
          }
        }
      }, t, null, [[0, 9]])
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }(), [dispatch, openNew])
  var openCourse = React.useCallback(function () {
    var t = O.a(RegeneratorRuntime.mark(function t(r) {
      var i
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (i = courseList.find(function (e) {
                return e.id.toString() === r
              })) {
                hasWorkRef.current = true
                fetch(i.bcmUrl).then(function (t) {
                  t.json().then(function (t) {
                    dispatch(Message.warpAsyncCreateProject({
                      json: t,
                      jsonFrom: K.d.HOME_COURSE,
                      sourceTag: K.g.COURSE,
                      sourceId: r
                    }))
                    hasWorkRef.current = false
                  })
                }).catch(function () {
                  hasWorkRef.current = false
                })
                $_627.a.load({
                  onPlayerInit: function () {},
                  title: React.createElement("div", null, React.createElement("span", {
                    style: {
                      position: "relative",
                      right: 5
                    }
                  }, React.createElement($_2646_index.a, {
                    size: "esm",
                    type: "transparent-fb",
                    width: 26,
                    height: 14,
                    onClick: O.a(RegeneratorRuntime.mark(function t() {
                      return RegeneratorRuntime.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              $_627.a.close({
                                closeAnimationPos: {
                                  x: 150,
                                  y: 30
                                }
                              })
                              dispatch(Message.fi(true))
                            case 2:
                            case "end":
                              return t.stop()
                          }
                        }
                      }, t)
                    }))
                  }, React.createElement($_13_index.j, {
                    type: "icon-btn-fallback",
                    className: "coco-video-back"
                  }))), i.title),
                  videoSrc: i.videoUrl,
                  autoPlay: true,
                  zIndex: 3,
                  useConfirmMask: true,
                  confirmPercent: .9,
                  onMinimizeBtnClick: function () {
                    $_627.a.hide()
                    dispatch(Message.Qh($_392_index.a, {
                      name: $_392_index.a,
                      content: React.createElement($_392_index.b, null)
                    }))
                  },
                  onClose: function () {
                    $_627.a.close({
                      closeAnimationPos: {
                        x: 150,
                        y: 30
                      }
                    })
                  }
                })
              }
            case 2:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }(), [courseList, dispatch])
  const openTemplate = React.useCallback(function (id) {
    const templateInfo = templateList.find((templateInfo) => templateInfo.id === id)
    if (templateInfo) {
      hasWorkRef.current = true
      fetch(templateInfo.bcmUrl).then((response) => {
        response.json().then((json) => {
          dispatch(Message.warpAsyncCreateProject({
            json,
            jsonFrom: K.d.HOME_TEMPLATE,
            sourceTag: K.g.TEMPLATE,
            sourceId: templateInfo.name
          }))
          hasWorkRef.current = false
        })
      }).catch(function () {
        hasWorkRef.current = false
      })
    }
  }, [dispatch, templateList])
  React.useEffect(() => {
    const params = te.N(window.location.href)
    const { workId, inviteCode, jsonUrl, archiveId, courseId, templateId, playerBcmUrl } = params
    if (!hasWorkRef.current) {
      if (archiveId) {
        openArchive(archiveId)
      } else if (inviteCode && workId) {
        joinColl(workId, inviteCode)
      } else if (workId) {
        openWorkById(workId)
      } else if (jsonUrl) {
        openJsonUrl(jsonUrl)
      } else if (courseId) {
        openCourse(courseId)
      } else if (templateId) {
        openTemplate(templateId)
      } else if (playerBcmUrl) {
        openPlayerBcmUrl(playerBcmUrl)
      } else {
        openNew()
      }
    }
  }, [openCourse, openNew, joinColl, openJsonUrl, openTemplate, openArchive, openWorkById, openPlayerBcmUrl])
  return <></>
}
export { OpenWork as LM }
