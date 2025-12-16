/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

import * as React from "react"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt as InvalidUrlDialog, bt as LoadingDialog, yt as Users } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import /* [auto-meaningful-name] */$_136 from "../../../../../unrestored/shared/1571/2636/136"
import * as CollaborationMessage from "../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */$_24_index from "../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */$_288 from "../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as te from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$_1213 from "../../../../../unrestored/shared/1571/2636/1213"
import * as Z from "../../../../../unrestored/shared/1571/2636/97"
import * as K from "../../../../../unrestored/shared/1571/2636/18"
import * as Message from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import N from "../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as O from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import * as Et from "../../../../../unrestored/shared/1571/2636/9"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
var PermissionDialog = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = React.useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = function () {
    a(false)
  }
  React.useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? (
    <$_1213.a
      placement="bottom"
      content={(t = e.id, e$permission = e.permission, (
        <div className={$_136.permissionDialog}>
          <div
            onClick={() => e.handleChangePermission(K.c.Edit, t, c)}
            className={$_136.item}
          >
            <$_13_index.j
              type="icon-selected"
              className={N($_136.icon, e$permission === K.c.Edit && $_136.selected)}
            />
            <span>{$_710_index$a$formatMessage({ id: "OT.dialogCanEdit" })}</span>
          </div>
          <div
            onClick={() => e.handleChangePermission(K.c.ReadOnly, t, c)}
            className={$_136.item}
          >
            <$_13_index.j
              type="icon-selected"
              className={N($_136.icon, e$permission === K.c.ReadOnly && $_136.selected)}
            />
            <span>{$_710_index$a$formatMessage({ id: "OT.dialogReadOnly" })}</span>
          </div>
          <div
            onClick={() => e.handleRemovePermission(t, c)}
            className={N($_136.item, $_136.remove)}
          >
            <span>{$_710_index$a$formatMessage({ id: "OT.dialogRemove" })}</span>
          </div>
        </div>
      ))}
      trigger="click"
      visible={i}
      onVisibleChange={(e) => a(e)}
    >
      <div className={$_136.edit_role}>
        <span>
          {e.permission === K.c.Edit
            ? $_710_index$a$formatMessage({ id: "OT.edit" })
            : $_710_index$a$formatMessage({ id: "OT.readonly" })}
        </span>
        <div className={$_136.icon}>
          <$_13_index.j type="icon-dropdown-down" className={$_136.icon} />
        </div>
      </div>
    </$_1213.a>
  ) : (
    <div className={N($_136.edit_role, $_136.disabled)}>
      <span>
        {e.permission === K.c.Edit
          ? $_710_index$a$formatMessage({ id: "OT.edit" })
          : $_710_index$a$formatMessage({ id: "OT.readonly" })}
      </span>
      <div className={$_136.icon}>
        <$_13_index.j type="icon-dropdown-down" className={$_136.icon} />
      </div>
    </div>
  )
}
var Ct = React.memo(function () {
  var project = $_16_index.e(function (e) {
    return e.project
  })
  var id = project.id
  var title = project.title
  var cooperationUserList = $_16_index.e(function (e) {
    return e.oTState.cooperationUserList
  })
  var onlineCooperationUserColorRecord = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var userInfo = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var isAuthor = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var collWorkId = $_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  var formatMessage = $_710_index.a().formatMessage
  var isProjectModified = $_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  if (cooperationUserList.size === 0 && userInfo) {
    cooperationUserList = cooperationUserList.push({
      id: userInfo.id,
      avatar_url: userInfo.avatar_url,
      nickname: userInfo.nickname,
      is_author: true,
      edit_permission: 1
    })
  }
  var isUpdate = Z.a(id)
  var editorInviteUrl = $_16_index.e(function (e) {
    return e.oTState.editorInviteUrl
  })
  var readOnlyInviteUrl = $_16_index.e(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var dispatch = $_16_index.d()
  var g = React.useState(false)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = React.useState(K.c.Edit)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = React.useRef(null)
  var k = React.useState(false)
  var x = $_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  async function share() {
    const unsafeWidgets = Et.Eb(Et.j.EXTENSION).filter((widget) => {
      return !CustomWidgetType.isSafeExtensions(widget.type)
    })
    if (!(await $_288.b()).includes(Number(id)) && unsafeWidgets.length > 0) {
      y(false)
      dispatch(Message.wrapOpenConfirmDialog({
        allowText: formatMessage({
          id: "know"
        }),
        title: "",
        content: (
          <div>
            作品使用了未审核的自定义控件，需将控件提交至<a href={te.b} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>，并等待审核通过后才能进行协作。
          </div>
        ),
        cancelBtnVisible: false
      }))
      return
    }
    let newId = id
    y(true)
    if (!isUpdate && isProjectModified) {
      newId = await Message.promisify(dispatch, Message.wrapAsyncSaveProject({
        isUpdate,
        isAutoSave: true
      }))
    } else {
      newId = id
    }
    if (Et.Y().length > 0) {
      y(false)
      dispatch(Message.wrapOpenConfirmDialog({
        allowText: "确定",
        title: "提示",
        content: "作品中含有云数据库控件，暂时无法协作",
        cancelBtnVisible: false
      }))
      return
    }
    if (!editorInviteUrl) {
      if (newId !== collWorkId) {
        await se(newId)
      }
      dispatch(CollaborationMessage.o(newId))
      const inviteCode = await fe(newId, K.c.Edit)
      const inviteUrl = te.x(newId, inviteCode)
      dispatch(CollaborationMessage.p(inviteUrl))
    }
    $_141_index.a("InviteCollaborationClick", {
      authorId: userInfo?.id || "",
      nickName: userInfo?.nickname || ""
    })
  }
  var P = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, id, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(id).then(function () {
                  var e = O.a(RegeneratorRuntime.mark(function e(t) {
                    return RegeneratorRuntime.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            dispatch(CollaborationMessage.s(t))
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
                }())
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                o()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var B = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n, r) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              de(id, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                r()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  var F = (
    <div className={$_136.content}>
      {isAuthor && (
        <div className={$_136.header}>
          <$_13_index.d
            className={$_136.shareButton}
            onClick={() => share.apply(this, arguments)}
          >
            <$_13_index.j className={$_136.invitationIcon} type="icon-ot-invitation" />
            {formatMessage({ id: "OT.inviteFriend" })}
          </$_13_index.d>
        </div>
      )}
      <ul className={$_136.list}>
        {cooperationUserList.map((e, t) => {
          var n = e.id
          var e$is_author = e.is_author
          var e$edit_permission = e.edit_permission
          return (
            <li key={t}>
              <div
                className={N($_136.headerPhotoBorder)}
                key={e.id}
                style={{
                  marginRight: "8px",
                  borderColor: onlineCooperationUserColorRecord.get(e.id)
                }}
              >
                <div
                  className={$_136.headPhoto}
                  style={{ backgroundImage: `url(${e.avatar_url})` }}
                />
              </div>
              <div className={$_136.name}>
                <p>{e.nickname}</p>
                <span>{e.id}</span>
              </div>
              {e$is_author ? (
                <div className={$_136.role}>
                  <div>{formatMessage({ id: "OT.creator" })}</div>
                </div>
              ) : (
                <PermissionDialog
                  isAuthor={isAuthor}
                  permission={e$edit_permission}
                  id={n}
                  handleChangePermission={P}
                  handleRemovePermission={B}
                  parentVisible={D}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
  var G = React.useCallback(function () {
    return T === K.c.Edit ? editorInviteUrl : T === K.c.ReadOnly ? readOnlyInviteUrl : ""
  }, [editorInviteUrl, readOnlyInviteUrl, T])
  var W = React.useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== K.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== K.c.ReadOnly) {
                e.next = 14
                break
              }
              if (readOnlyInviteUrl) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(id, K.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = te.x(id, e$sent)
              dispatch(CollaborationMessage.r(o))
              j(n)
              e.next = 14
              break
            case 13:
              j(n)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [dispatch, id, readOnlyInviteUrl])
  return (
    <div style={{ height: "100%" }}>
      <$_13_index.r
        content={F}
        className={$_136.oTButton}
        onOpen={() => M(true)}
        onClose={() => M(false)}
        ref={R}
      >
        <$_748_index.a
          mouseLeaveDelay={0}
          placement="bottom"
          title={formatMessage({ id: "OT.coll" })}
          trigger={["hover", "click"]}
          overlayInnerStyle={{ position: "relative", top: -4 }}
        >
          <div className={N($_136.collIconWrapper, D && $_136.activeCollIconWrapper)}>
            <$_13_index.j type="icon-collaborate-active" className={$_136.collIcon} />
          </div>
        </$_748_index.a>
      </$_13_index.r>
      <$_13_index.f
        className={$_136.shareOtDialog}
        visible={b}
        title={formatMessage({ id: "OT.copyCollInvitationUrl" })}
        onClose={() => y(false)}
      >
        <div className={$_136.dialogMain}>
          <div className={$_136.text}>{formatMessage({ id: "OT.expiration" })}</div>
          <div
            onClick={() => W(K.c.Edit)}
            className={N($_136.tab, T === K.c.Edit && $_136.selected)}
          >
            {formatMessage({ id: "OT.editor" })}
            <span>{formatMessage({ id: "OT.editorRules" })}</span>
            {T === K.c.Edit && (
              <div className={$_136.icon}>
                <$_13_index.j type="icon-selected" />
              </div>
            )}
          </div>
          <div
            onClick={() => W(K.c.ReadOnly)}
            className={N($_136.tab, T === K.c.ReadOnly && $_136.selected)}
          >
            {formatMessage({ id: "OT.reader" })}
            <span>{formatMessage({ id: "OT.readerRules" })}</span>
            {T === K.c.ReadOnly && (
              <div className={$_136.icon}>
                <$_13_index.j type="icon-selected" />
              </div>
            )}
          </div>
        </div>
        {G() ? (
          <$_13_index.d
            className={$_136.copy}
            type="primary"
            onClick={() => {
              var e = document.createElement("input")
              var t =
                T === K.c.Edit
                  ? `${G()} 点击链接，一起进入《${title}》的协同创作吧~`
                  : `${G()} 点击链接，查看《${title}》的作品内容吧~`
              e.setAttribute("value", t)
              document.body.append(e)
              e.select()
              document.execCommand("Copy")
              document.body.removeChild(e)
              dispatch(
                Message.wrapShowCommonToastInfo({
                  type: "success",
                  message: formatMessage({ id: "OT.copySuccess" }),
                  showCloseIcon: false
                })
              )
              y(false)
            }}
          >
            {formatMessage({ id: "OT.copyLink" })}
          </$_13_index.d>
        ) : (
          <$_13_index.d className={$_136.loadingBtn} type="primary">
            <$_13_index.j type="icon-loading2" />
          </$_13_index.d>
        )}
      </$_13_index.f>
    </div>
  )
})
export const Collaboration = React.memo(() => {
  const id = $_16_index.e(function (e) {
    return e.project.id
  })
  const [showInvalidUrlDialog, setShowInvalidUrlDialog] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = $_16_index.d()
  const collWorkId = $_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  React.useEffect(function () {
    if (collWorkId) {
      setIsLoading(true)
      le(collWorkId).then(function () {
        var e = O.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  dispatch(CollaborationMessage.s(t))
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
      }())
      $_24_index.a.init(collWorkId).then(() => {
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
      $_24_index.a.disconnect()
    }
  }, [dispatch, collWorkId])
  return (
    <>
      <Users />
      <Ct />
      <InvalidUrlDialog visible={showInvalidUrlDialog} onClose={() => setShowInvalidUrlDialog(false)} />
      <LoadingDialog visible={isLoading} />
      {Z.a(id) && <_t />}
    </>
  )
})
