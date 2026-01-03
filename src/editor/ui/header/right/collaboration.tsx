/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

import * as React from "react"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt as InvalidUrlDialog, bt as LoadingDialog, yt as Users } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136 from "../../../../../unrestored/shared/1571/2636/136"
import * as CollaborationMessage from "../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index from "../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_288 from "../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97 from "../../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../unrestored/shared/1571/2636/18"
import * as Actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
var PermissionDialog = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = React.useState(false)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var c = function () {
    a(false)
  }
  React.useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? (
    <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a
      placement="bottom"
      content={(t = e.id, e$permission = e.permission, (
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.permissionDialog}>
          <div
            onClick={() => e.handleChangePermission($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit, t, c)}
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item}
          >
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j
              type="icon-selected"
              className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon, e$permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)}
            />
            <span>{$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.dialogCanEdit" })}</span>
          </div>
          <div
            onClick={() => e.handleChangePermission($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly, t, c)}
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item}
          >
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j
              type="icon-selected"
              className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon, e$permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)}
            />
            <span>{$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.dialogReadOnly" })}</span>
          </div>
          <div
            onClick={() => e.handleRemovePermission(t, c)}
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.remove)}
          >
            <span>{$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.dialogRemove" })}</span>
          </div>
        </div>
      ))}
      trigger="click"
      visible={i}
      onVisibleChange={(e) => a(e)}
    >
      <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.edit_role}>
        <span>
          {e.permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit
            ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.edit" })
            : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.readonly" })}
        </span>
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon}>
          <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-dropdown-down" className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon} />
        </div>
      </div>
    </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a>
  ) : (
    <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.edit_role, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.disabled)}>
      <span>
        {e.permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit
          ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.edit" })
          : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({ id: "OT.readonly" })}
      </span>
      <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon}>
        <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-dropdown-down" className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon} />
      </div>
    </div>
  )
}
var Ct = React.memo(function () {
  var project = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */project$id = project.id
  var title = project.title
  var cooperationUserList = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.cooperationUserList
  })
  var onlineCooperationUserColorRecord = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var userInfo = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var isAuthor = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var collWorkId = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  var formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var isProjectModified = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
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
  var isUpdate = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_97.a(project$id)
  var editorInviteUrl = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.editorInviteUrl
  })
  var readOnlyInviteUrl = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var dispatch = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var g = React.useState(false)
  var v = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = React.useState($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)
  var C = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = React.useRef(null)
  var k = React.useState(false)
  var x = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  async function share() {
    // [CoCo Next] 移除发起协作时的自定义控件限制
    // const unsafeWidgets = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Eb($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION).filter((widget) => {
    //   return !CustomWidgetType.isSafeExtensions(widget.type)
    // })
    // if (!(await $$_$$_$$_$$_$$_unrestored_shared_1571_2636_288.b()).includes(Number(id)) && unsafeWidgets.length > 0) {
    //   y(false)
    //   dispatch(Actions.openConfirmDialogAction({
    //     allowText: formatMessage({
    //       id: "know"
    //     }),
    //     title: "",
    //     content: (
    //       <div>
    //         作品使用了未审核的自定义控件，需将控件提交至<a href={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.b} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>，并等待审核通过后才能进行协作。
    //       </div>
    //     ),
    //     cancelBtnVisible: false
    //   }))
    //   return
    // }
    // [CoCo Next] 添加协作安全警告
    if (!collWorkId) {
      const confirm = await new Promise((resolve) => {
        dispatch(Actions.openConfirmDialogAction({
          onConfirm() { resolve(true) },
          onCancel() { resolve(false) },
          title: "",
          content: "进行协作可能存在安全隐患，确定要进行协作吗？",
          isDangerous: true
        }))
      })
      if (!confirm) {
        return
      }
    }
    let newId = project$id
    y(true)
    if (!isUpdate && isProjectModified) {
      newId = await Actions.promisify(dispatch, Actions.asyncSaveProjectAction({
        isUpdate,
        isAutoSave: true
      }))
    } else {
      newId = project$id
    }
    if ($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Y().length > 0) {
      y(false)
      dispatch(Actions.openConfirmDialogAction({
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
      const inviteCode = await fe(newId, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)
      const inviteUrl = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.x(newId, inviteCode)
      dispatch(CollaborationMessage.p(inviteUrl))
    }
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("InviteCollaborationClick", {
      authorId: userInfo?.id || "",
      nickName: userInfo?.nickname || ""
    })
  }
  var P = function () {
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, project$id, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(project$id).then(function () {
                  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n, r) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              de(project$id, n).then(function () {
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
    <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.content}>
      {isAuthor && (
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.header}>
          <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.shareButton}
            onClick={() => share.apply(this, arguments)}
          >
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.invitationIcon} type="icon-ot-invitation" />
            {formatMessage({ id: "OT.inviteFriend" })}
          </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d>
        </div>
      )}
      <ul className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.list}>
        {cooperationUserList.map((e, t) => {
          var n = e.id
          var e$is_author = e.is_author
          var e$edit_permission = e.edit_permission
          return (
            <li key={t}>
              <div
                className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.headerPhotoBorder)}
                key={e.id}
                style={{
                  marginRight: "8px",
                  borderColor: onlineCooperationUserColorRecord.get(e.id)
                }}
              >
                <div
                  className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.headPhoto}
                  style={{ backgroundImage: `url(${e.avatar_url})` }}
                />
              </div>
              <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.name}>
                <p>{e.nickname}</p>
                <span>{e.id}</span>
              </div>
              {e$is_author ? (
                <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.role}>
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
    return T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit ? editorInviteUrl : T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly ? readOnlyInviteUrl : ""
  }, [editorInviteUrl, readOnlyInviteUrl, T])
  var W = React.useCallback(function () {
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly) {
                e.next = 14
                break
              }
              if (readOnlyInviteUrl) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(project$id, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.x(project$id, e$sent)
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
  }(), [dispatch, project$id, readOnlyInviteUrl])
  return (
    <div style={{ height: "100%" }}>
      <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.r
        content={F}
        className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.oTButton}
        onOpen={() => M(true)}
        onClose={() => M(false)}
        ref={R}
      >
        <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a
          mouseLeaveDelay={0}
          placement="bottom"
          title={formatMessage({ id: "OT.coll" })}
          trigger={["hover", "click"]}
          overlayInnerStyle={{ position: "relative", top: -4 }}
        >
          <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.collIconWrapper, D && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.activeCollIconWrapper)}>
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-collaborate-active" className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.collIcon} />
          </div>
        </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a>
      </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.r>
      <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f
        className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.shareOtDialog}
        visible={b}
        title={formatMessage({ id: "OT.copyCollInvitationUrl" })}
        onClose={() => y(false)}
      >
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.dialogMain}>
          <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.text}>{formatMessage({ id: "OT.expiration" })}</div>
          <div
            onClick={() => W($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)}
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.tab, T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)}
          >
            {formatMessage({ id: "OT.editor" })}
            <span>{formatMessage({ id: "OT.editorRules" })}</span>
            {T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && (
              <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon}>
                <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-selected" />
              </div>
            )}
          </div>
          <div
            onClick={() => W($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly)}
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.tab, T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)}
          >
            {formatMessage({ id: "OT.reader" })}
            <span>{formatMessage({ id: "OT.readerRules" })}</span>
            {T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && (
              <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon}>
                <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-selected" />
              </div>
            )}
          </div>
          {/* [CoCo Next] 添加协作安全警告 */}
          <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.text}>{formatMessage({ id: "OT.secure" })}</div>
        </div>
        {G() ? (
          <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d
            className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.copy}
            type="primary"
            onClick={() => {
              var e = document.createElement("input")
              var t =
                T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit
                  ? `${G()} 点击链接，一起进入《${title}》的协同创作吧~`
                  : `${G()} 点击链接，查看《${title}》的作品内容吧~`
              e.setAttribute("value", t)
              document.body.append(e)
              e.select()
              document.execCommand("Copy")
              document.body.removeChild(e)
              dispatch(Actions.showCommonToastInfoAction({
                type: "success",
                message: formatMessage({ id: "OT.copySuccess" }),
                showCloseIcon: false
              }))
              y(false)
            }}
          >
            {formatMessage({ id: "OT.copyLink" })}
          </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d>
        ) : (
          <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.loadingBtn} type="primary">
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j type="icon-loading2" />
          </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d>
        )}
      </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f>
    </div>
  )
})
export const Collaboration = React.memo(() => {
  const id = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.id
  })
  const [showInvalidUrlDialog, setShowInvalidUrlDialog] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  const collWorkId = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  React.useEffect(function () {
    if (collWorkId) {
      setIsLoading(true)
      le(collWorkId).then(function () {
        var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.init(collWorkId).then(() => {
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.disconnect()
    }
  }, [dispatch, collWorkId])
  return (
    <>
      <Users />
      <Ct />
      <InvalidUrlDialog visible={showInvalidUrlDialog} onClose={() => setShowInvalidUrlDialog(false)} />
      <LoadingDialog visible={isLoading} />
      {$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97.a(id) && <_t />}
    </>
  )
})
