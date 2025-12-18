/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-7
 */

import * as React from "react"

import { ne } from "../../../../../../unrestored/shared/1571/2636/index__part-4"
import { de } from "../../../../../../unrestored/shared/1571/2636/index__part-5"
import { we } from "../../../../../../unrestored/shared/1571/2636/index__part-6"
import * as /* [auto-meaningful-name] */$_141_index from "../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$_190 from "../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$_297 from "../../../../../../unrestored/shared/1571/2636/297"
import * as te from "../../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$_1213 from "../../../../../../unrestored/shared/1571/2636/1213"
import * as K from "../../../../../../unrestored/shared/1571/2636/18"
import * as Message from "../../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_25_index from "../../../../../../unrestored/shared/1571/2636/25/index"
import N from "../../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_710_index from "../../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../../shared/ui/language"
import * as O from "../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$_288 from "../../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$_418 from "../../../../../../unrestored/shared/1571/2636/418"
import /* [auto-meaningful-name] */_$_ from "../../../../../../unrestored/shared/1571/2636/418"

enum Type {
  SELF = "self",
  COLL = "coll",
  PUBLISHED = "published",
  UNPUBLISHED = "unpublished"
}

var Ae = [Type.SELF, Type.COLL, Type.PUBLISHED, Type.UNPUBLISHED]
var Ie = {
  self: "MyProject.noCreateProjectTips",
  coll: "MyProject.noCollProjectTips",
  published: "MyProject.noPublishProjectTips",
  unpublished: "MyProject.noCreateProjectTips"
}
function je(e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$type = e.type
  return "loaded" === e$type ? React.createElement(React.Fragment, null) : "emptyList" === e$type ? React.createElement("div", {
    className: _$_.emptyContainer
  }, React.createElement(we, {
    text: e$title
  })) : React.createElement(React.Fragment, null)
}
function ProjectItem({
  project, onClick, onDelete, filterType, status
}: {
  project: (/** TODO */any)
  onClick(id: string, name: string, updateTime: string): void
  onDelete(id: string, name: string, isCollWork: boolean): void
  filterType: Type
  status: "loading" | "loaded" | "emptyList"
}) {
  const { formatMessage } = $_710_index.a()
  var t
  function c() {
    var e = []
    if (filterType === Type.COLL) {
      e.push("deleteCollProject")
    } else {
      if (!project.publishedTime) {
        e.push("deleteProject")
      }
    }
    return e
  }
  return React.createElement("div", {
    className: N(_$_.item),
    onClick() {
      onClick(project.id, project.name, project.updateTime)
    },
    key: project.id
  }, React.createElement("div", {
    className: _$_.cover
  }, React.createElement("img", {
    src: null === (t = project.coverUrl || project.previewUrl) || undefined === t ? undefined : t.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/"),
    alt: project.name
  })), React.createElement($_13_index.a, {
    className: _$_.name,
    text: project.name
  }), React.createElement("p", {
    className: _$_.time
  }, React.createElement(ne, {
    time: project.updateTime,
    currentTime: project.serverTime
  })), !!c().length && React.createElement("div", {
    className: _$_.menuContainer,
    onClick: function (e) {
      e.stopPropagation()
    }
  }, React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "click",
    overlayClassName: _$_.menuPopover,
    zIndex: 100,
    content: React.createElement("div", {
      className: _$_.menuContent
    }, React.createElement($_13_index.l, {
      onClick: function (e) {
        if (!("deleteProject" !== e && "deleteCollProject" !== e)) {
          onDelete(project.id, project.name, project.isCollWork || filterType === Type.COLL)
        }
      }
    }, c().map(function (e, t) {
      return React.createElement($_13_index.m, {
        value: e,
        key: t
      }, React.createElement("span", null, formatMessage({
        id: "MyProject." + e
      })))
    })))
  }, React.createElement("div", null, React.createElement($_13_index.j, {
    type: "icon-more"
  })))), React.createElement("div", {
    className: _$_.badgeWrapper
  }, (project.isCollWork || filterType === Type.COLL) && "loaded" === status && React.createElement($_13_index.j, {
    type: "icon-collaborator"
  }), !!project.publishedTime && React.createElement($_13_index.j, {
    type: "icon-publish"
  })))
}

const OpenMyProject = React.memo(({ visible, importProjectJson }) => {
  var r = React.useState([])
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  const [status, setStatus] = React.useState<"loading" | "loaded" | "emptyList">("loaded")
  const language = $_16_index.e(function (e) {
    return e.common.language
  })
  const userInfo = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  const id = $_16_index.e(function (e) {
    return e.project.id
  })
  const [type, setType] = React.useState(Type.SELF)
  const dispatch = $_16_index.d()
  var C = React.useRef(0)
  var A = React.useRef(1)
  var j = React.useRef(false)
  const { formatMessage } = $_710_index.a()
  async function onClick(id, r, o) {
    try {
      const response = await $_297.d(id)
      const { data } = response
      if (data) {
        if (
          !(await $_288.b()).includes(Number(id)) &&
          !data.is_author &&
          data.is_coll_work &&
          data.content &&
          data.content.unsafeExtensionWidgetList &&
          data.content.unsafeExtensionWidgetList.length > 0
        ) {
          dispatch(Message.wrapOpenConfirmDialog({
            allowText: formatMessage({
              id: "know"
            }),
            title: "",
            content: (
              <div>
                作品使用了未审核的自定义控件，需将控件提交至<a href={te.b} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>并等待审核通过后才能进行协作。
              </div>
            ),
            cancelBtnVisible: false
          }))
          return
        }
        importProjectJson({
          json: data.content,
          projectId: id,
          lastSavedTime: 1e3 * data.updated_at,
          isCollWork: data.is_coll_work,
          isAuthor: data.is_author,
          editPermission: data.edit_permission,
          jsonFrom: data.is_coll_work ? K.d.OTHER : K.d.MY_WORK
        })
        $_141_index.a("OpenWork", {
          workId: id,
          workType: type === Type.COLL ? 2 : 1,
          isSuccess: true,
          failReason: ""
        })
      } else {
        dispatch(Message.wrapAsyncGetProjectError({
          code: response.code
        }))
      }
    } catch (error) {
      console.error("getProjectJson error", error)
      $_141_index.a("OpenWork", {
        workId: id,
        workType: type === Type.COLL ? 2 : 1,
        isSuccess: false,
        failReason: error.message
      })
    }
    dispatch(Message.wrapCloseProjectDialog())
  }
  var D = React.useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!j.current) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (j.current = true, setStatus("loading"), type !== Type.COLL) {
                e.next = 10
                break
              }
              e.next = 7
              return P(t)
            case 7:
              t = e.sent
              e.next = 26
              break
            case 10:
              if (type !== Type.SELF) {
                e.next = 16
                break
              }
              e.next = 13
              return M(t)
            case 13:
              t = e.sent
              e.next = 26
              break
            case 16:
              if (type !== Type.PUBLISHED) {
                e.next = 22
                break
              }
              e.next = 19
              return M(t, true)
            case 19:
              t = e.sent
              e.next = 26
              break
            case 22:
              if (type !== Type.UNPUBLISHED) {
                e.next = 26
                break
              }
              e.next = 25
              return M(t, false)
            case 25:
              t = e.sent
            case 26:
              F(t)
              j.current = false
            case 28:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [type])
  function M(e, t) {
    return L.apply(this, arguments)
  }
  function L() {
    return (L = O.a(RegeneratorRuntime.mark(function e(t, n) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              e.next = 4
              return $_297.c(C.current, 20, n)
            case 4:
              e$sent = e.sent
              C.current += 20
              A.current = e$sent.total
              return e.abrupt("return", [].concat($_25_index.a(t), $_25_index.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function P(e) {
    return B.apply(this, arguments)
  }
  function B() {
    return (B = O.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < 20 * C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              C.current++
              e.next = 5
              return $_297.b(C.current, 20)
            case 5:
              e$sent = e.sent
              A.current = e$sent.total
              return e.abrupt("return", [].concat($_25_index.a(t), $_25_index.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  React.useEffect(function () {
    if (visible) {
      C.current = 0
      j.current = false
      D([])
    }
  }, [D, visible])
  if (!visible) {
    return null
  }
  function F(e) {
    a(e)
    if (0 === e.length) {
      setStatus("emptyList")
    } else {
      setStatus("loaded")
    }
  }
  var G = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!userInfo || type !== Type.COLL) {
                e.next = 6
                break
              }
              e.next = 3
              return de(t, userInfo.id)
            case 3:
              n = e.sent
              e.next = 10
              break
            case 6:
              e.next = 8
              return $_297.a(t)
            case 8:
              if (n = e.sent) {
                dispatch(Message.wrapShowCommonToastInfo({
                  message: $$_$$_$$_$$_src_shared_ui_language.c(language, "MyProject.deleteProjectSuccess").toString()
                }))
              }
            case 10:
              if (n) {
                if ((r = i.findIndex(function (e) {
                  return e.id === t
                })) > -1) {
                  i.splice(r, 1)
                  F($_25_index.a(i))
                  if (id === t) {
                    dispatch(Message.warpAsyncCreateProject())
                  }
                }
              } else {
                dispatch(Message.wrapShowCommonToastInfo({
                  message: $$_$$_$$_$$_src_shared_ui_language.c(language, "MyProject.deleteProjectError").toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 11:
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
  function onDelete(e, t, n) {
    if (type === Type.COLL) {
      dispatch(Message.wrapOpenConfirmDialog({
        onConfirm: G.bind(null, e),
        allowText: formatMessage({
          id: "MyProject.quitCollWorkConfirmText"
        }),
        title: formatMessage({
          id: "MyProject.quitCollWorkTitle"
        }, {
          name: $_190.f(t)
        }),
        content: formatMessage({
          id: "MyProject.quitCollWorkDescription"
        }),
        isDangerous: true
      }))
    } else {
      G(e)
    }
  }
  var U = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(type) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              setType(type)
            case 1:
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
  return React.createElement("div", null, React.createElement("div", {
    className: _$_.filter
  }, Ae.map(function (e) {
    return React.createElement("div", {
      key: e,
      onClick: U.bind(null, e),
      className: N(_$_.filterItem, type === e && _$_.active)
    }, formatMessage({
      id: "MyProject.".concat(e)
    }))
  })), React.createElement("div", {
    className: _$_.container
  }, React.createElement(je, {
    title: formatMessage({
      id: Ie[type]
    }),
    type: status
  }), i.length > 0 && React.createElement("div", {
    className: _$_.main
  }, React.createElement($_13_index.v, {
    offsetY: 300,
    height: 450,
    onScrollBottom: function () {
      D(i)
    }
  }, i.map(function (e) {
    return React.createElement(ProjectItem, {
      status,
      key: e.id,
      project: e,
      onClick,
      onDelete,
      filterType: type
    })
  })))))
})

export { OpenMyProject as Re }
