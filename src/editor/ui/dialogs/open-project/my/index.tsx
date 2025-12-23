/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-7
 */

import * as React from "react"

import { ne } from "../../../../../../unrestored/shared/1571/2636/index__part-4"
import { de } from "../../../../../../unrestored/shared/1571/2636/index__part-5"
import { we } from "../../../../../../unrestored/shared/1571/2636/index__part-6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297 from "../../../../../../unrestored/shared/1571/2636/297"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../../unrestored/shared/1571/2636/18"
import * as Actions from "../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../../../unrestored/shared/1571/2636/25/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_language from "../../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_288 from "../../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_418 from "../../../../../../unrestored/shared/1571/2636/418"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181 from "../../../../../../unrestored/shared/1571/2636/418"

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
  return "loaded" === e$type ? <></> : "emptyList" === e$type ? <div
    className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.emptyContainer}
  >
    {React.createElement(we, {
      text: e$title
    })}
  </div> : <></>
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
  const { formatMessage } = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a()
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
  return <div
    className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.item)}
    onClick={() => {
      onClick(project.id, project.name, project.updateTime)
    }}
    key={project.id}
  >
    <div className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.cover}>
      <img
        src={(project.coverUrl || project.previewUrl)?.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")}
        alt={project.name}
      />
    </div>
    <$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.a
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.name}
      text={project.name}
    />
    <p
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.time}
    >
      {React.createElement(ne, {
        time: project.updateTime,
        currentTime: project.serverTime
      })}
    </p>
    {!!c().length && <div
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.menuContainer}
      onClick={function (e) {
        e.stopPropagation()
      }}
    >
      {<$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a
        placement={"rightTop"}
        trigger={"click"}
        overlayClassName={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.menuPopover}
        zIndex={100}
        content={<div
          className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.menuContent}
        >
          <$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l
            onClick={function (e) {
              if (!("deleteProject" !== e && "deleteCollProject" !== e)) {
                onDelete(project.id, project.name, project.isCollWork || filterType === Type.COLL)
              }
            }}
          >
            {c().map(function (e, t) {
              return <$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m
                value={e}
                key={t}
              >
                {<span>
                  {formatMessage({
                    id: "MyProject." + e
                  })}
                </span>}
              </$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m>
            })}
          </$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l>
        </div>}
      >
        <div>
          {<$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j
            type={"icon-more"}
          />}
        </div>
      </$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a>}
    </div>}
    <div
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.badgeWrapper}
    >
      {(project.isCollWork || filterType === Type.COLL) && "loaded" === status && <$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j
        type={"icon-collaborator"}
      />}
      {!!project.publishedTime && <$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j
        type={"icon-publish"}
      />}
    </div>
  </div>
}

const OpenMyProject = React.memo(({ visible, importProjectJson }) => {
  var r = React.useState([])
  var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  const [status, setStatus] = React.useState<"loading" | "loaded" | "emptyList">("loaded")
  const language = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.language
  })
  const userInfo = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  const id = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.id
  })
  const [type, setType] = React.useState(Type.SELF)
  const dispatch = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var C = React.useRef(0)
  var A = React.useRef(1)
  var j = React.useRef(false)
  const { formatMessage } = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a()
  async function onClick(id, r, o) {
    try {
      const response = await $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.d(id)
      const { data } = response
      if (data) {
        if (
          !(await $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_288.b()).includes(Number(id)) &&
          !data.is_author &&
          data.is_coll_work &&
          data.content &&
          data.content.unsafeExtensionWidgetList &&
          data.content.unsafeExtensionWidgetList.length > 0
        ) {
          // [CoCo Next] 移除从 URL 打开协作作品时的自定义控件限制
          const confirm = await new Promise((resolve) => {
            dispatch(Actions.openConfirmDialogAction({
              onConfirm() { resolve(true) },
              onCancel() { resolve(false) },
              title: "",
              content: "作品使用了未审核的自定义控件，进行协作可能存在安全隐患，确定要进行协作吗？",
              isDangerous: true
            }))
          })
          if (!confirm) {
            return
          }
        }
        importProjectJson({
          json: data.content,
          projectId: id,
          lastSavedTime: 1e3 * data.updated_at,
          isCollWork: data.is_coll_work,
          isAuthor: data.is_author,
          editPermission: data.edit_permission,
          jsonFrom: data.is_coll_work ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.d.OTHER : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.d.MY_WORK
        })
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("OpenWork", {
          workId: id,
          workType: type === Type.COLL ? 2 : 1,
          isSuccess: true,
          failReason: ""
        })
      } else {
        dispatch(Actions.asyncGetProjectErrorAction({
          code: response.code
        }))
      }
    } catch (error) {
      console.error("getProjectJson error", error)
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("OpenWork", {
        workId: id,
        workType: type === Type.COLL ? 2 : 1,
        isSuccess: false,
        failReason: error.message
      })
    }
    dispatch(Actions.closeProjectDialogAction())
  }
  var D = React.useCallback(function () {
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
    return (L = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, n) {
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
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.c(C.current, 20, n)
            case 4:
              e$sent = e.sent
              C.current += 20
              A.current = e$sent.total
              return e.abrupt("return", [].concat($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(t), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(e$sent.list)))
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
    return (B = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.b(C.current, 20)
            case 5:
              e$sent = e.sent
              A.current = e$sent.total
              return e.abrupt("return", [].concat($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(t), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(e$sent.list)))
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
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.a(t)
            case 8:
              if (n = e.sent) {
                dispatch(Actions.showCommonToastInfoAction({
                  message: $$_$$_$$_$$_$$_shared_ui_language.c(language, "MyProject.deleteProjectSuccess").toString()
                }))
              }
            case 10:
              if (n) {
                if ((r = i.findIndex(function (e) {
                  return e.id === t
                })) > -1) {
                  i.splice(r, 1)
                  F($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(i))
                  if (id === t) {
                    dispatch(Actions.warpAsyncCreateProject())
                  }
                }
              } else {
                dispatch(Actions.showCommonToastInfoAction({
                  message: $$_$$_$$_$$_$$_shared_ui_language.c(language, "MyProject.deleteProjectError").toString(),
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
      dispatch(Actions.openConfirmDialogAction({
        onConfirm: G.bind(null, e),
        allowText: formatMessage({
          id: "MyProject.quitCollWorkConfirmText"
        }),
        title: formatMessage({
          id: "MyProject.quitCollWorkTitle"
        }, {
          name: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.f(t)
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
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(type) {
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
  return <div>
    {<div
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.filter}
    >
      {Ae.map(function (e) {
        return <div
          key={e}
          onClick={U.bind(null, e)}
          className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.filterItem, type === e && $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.active)}
        >
          {formatMessage({
            id: "MyProject.".concat(e)
          })}
        </div>
      })}
    </div>}
    {<div
      className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.container}
    >
      {React.createElement(je, {
        title: formatMessage({
          id: Ie[type]
        }),
        type: status
      })}
      {i.length > 0 && <div
        className={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_4181.main}
      >
        {<$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.v
          offsetY={300}
          height={450}
          onScrollBottom={function () {
            D(i)
          }}
        >
          {i.map(function (e) {
            return <ProjectItem
              status={status}
              key={e.id}
              project={e}
              onClick={onClick}
              onDelete={onDelete}
              filterType={type}
            />
          })}
        </$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.v>}
      </div>}
    </div>}
  </div>
})

export { OpenMyProject as Re }
