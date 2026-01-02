/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-217
 */

"use strict"

import * as /* [auto-meaningful-name] */$_392_index from "./392/index"
import * as /* [auto-meaningful-name] */$_2646_index from "./2646/index"
import /* [auto-meaningful-name] */$_266 from "./266"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as Z from "./97"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_627 from "./627"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_475 from "./475"
import /* [auto-meaningful-name] */_$_ from "./475"
var ZP = _React.memo(function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.common.courseList
  })
  var r = $_16_index.e(function (e) {
    return e.common.courseDialogVisible
  })
  var o = $_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  var i = $_16_index.e(function (e) {
    return e.project.id
  })
  var a = Z.a(i)
  var s = function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!o || !a) {
                t.next = 9
                break
              }
              t.prev = 1
              t.next = 4
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(e, $$_$$_$$_$$_src_editor_redux_common_actions.tg({
                isUpdate: a,
                isAutoSave: true,
                isNeedReport: false
              }))
            case 4:
              t.next = 9
              break
            case 6:
              t.prev = 6
              t.t0 = t.catch(1)
              return t.abrupt("return")
            case 9:
              if (!o || a) {
                t.next = 12
                break
              }
              e($$_$$_$$_$$_src_editor_redux_common_actions.Ri({
                visible: true,
                openFrom: "course",
                onSave: function () {
                  var t = O.a(RegeneratorRuntime.mark(function t() {
                    return RegeneratorRuntime.wrap(function (t) {
                      for (;;) {
                        switch (t.prev = t.next) {
                          case 0:
                            t.prev = 0
                            t.next = 3
                            return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(e, $$_$$_$$_$$_src_editor_redux_common_actions.tg({
                              isUpdate: a,
                              isAutoSave: true,
                              isNeedReport: false
                            }))
                          case 3:
                            c(n)
                            t.next = 8
                            break
                          case 6:
                            t.prev = 6
                            t.t0 = t.catch(0)
                          case 8:
                          case "end":
                            return t.stop()
                        }
                      }
                    }, t, null, [[0, 6]])
                  }))
                  return function () {
                    return t.apply(this, arguments)
                  }
                }(),
                onImport: function () {
                  c(n)
                }
              }))
              return t.abrupt("return")
            case 12:
              c(n)
            case 13:
            case "end":
              return t.stop()
          }
        }
      }, t, null, [[1, 6]])
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var c = function () {
    var t = O.a(RegeneratorRuntime.mark(function t(r) {
      var o
      var /* [auto-meaningful-name] */o$bcmUrl
      var /* [auto-meaningful-name] */o$title
      var /* [auto-meaningful-name] */o$videoUrl
      var /* [auto-meaningful-name] */t$sent
      var /* [auto-meaningful-name] */t$sent$data
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (l(), o = n.find(function (e) {
                return e.id === r
              })) {
                t.next = 5
                break
              }
              e($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: "未获取到教程信息"
              }))
              return t.abrupt("return")
            case 5:
              o$bcmUrl = o.bcmUrl
              o$title = o.title
              o$videoUrl = o.videoUrl
              t.next = 8
              return Axios.get(o$bcmUrl)
            case 8:
              if ((t$sent = t.sent).data) {
                t$sent$data = t$sent.data
                e($$_$$_$$_$$_src_editor_redux_common_actions.Gf({
                  json: t$sent$data,
                  jsonFrom: K.d.COURSE,
                  sourceTag: K.g.COURSE,
                  sourceId: r.toString()
                }))
              }
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
                            e($$_$$_$$_$$_src_editor_redux_common_actions.fi(true))
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
                }))), o$title),
                videoSrc: o$videoUrl,
                autoPlay: true,
                zIndex: 3,
                useConfirmMask: true,
                confirmPercent: .9,
                onMinimizeBtnClick: function () {
                  $_627.a.hide()
                  e($$_$$_$$_$$_src_editor_redux_common_actions.Qh($_392_index.a, {
                    name: $_392_index.a,
                    content: React.createElement($_392_index.b, null),
                    visible: true
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
              $_141_index.a("CourseClick", {
                courseId: r
              })
            case 12:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var l = function () {
    e($$_$$_$$_$$_src_editor_redux_common_actions.fi(false))
  }
  return React.createElement($_13_index.f, {
    title: $_710_index$a$formatMessage({
      id: "courseVideo"
    }),
    withPortal: true,
    visible: r,
    className: _$_.courseDialog,
    onClose: l
  }, React.createElement("div", {
    className: _$_.courseList
  }, n.map(function (e) {
    return React.createElement("div", {
      className: _$_.courseItem,
      key: e.id,
      onClick: function () {
        return s(e.id)
      }
    }, React.createElement("div", {
      className: _$_.courseImage
    }, React.createElement("div", {
      className: _$_.image,
      style: {
        backgroundImage: "url(".concat(e.preview, ")")
      }
    }), React.createElement("div", {
      className: _$_.mask
    }, React.createElement("div", {
      className: _$_.playBox
    }, React.createElement($_13_index.j, {
      type: "icon-sound-play"
    })))), React.createElement("div", {
      className: _$_.courseName
    }, e.title), React.createElement("div", {
      className: _$_.courseDesc
    }, e.courseIntro))
  }), React.createElement("div", {
    className: _$_.courseMore
  }, React.createElement("div", {
    className: _$_.moreImage
  }), React.createElement("div", {
    className: _$_.moreTips
  }, $_710_index$a$formatMessage({
    id: "moreCourseTips"
  })))))
})
var JP = _React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.d()
  var r = $_16_index.e(function (e) {
    return e.common.projectSavePrompt
  })
  var /* [auto-meaningful-name] */r$visible = r.visible
  var /* [auto-meaningful-name] */r$openFrom = r.openFrom
  var /* [auto-meaningful-name] */r$onSave = r.onSave
  var /* [auto-meaningful-name] */r$onImport = r.onImport
  var c = function () {
    if (r$onSave) {
      r$onSave()
    }
    l()
  }
  var l = function () {
    n($$_$$_$$_$$_src_editor_redux_common_actions.Ri({
      visible: false,
      openFrom: ""
    }))
  }
  var /* [auto-meaningful-name] */WhetherKeepWorksTitle = "whetherKeepWorksTitle"
  if ("backHome" === r$openFrom) {
    WhetherKeepWorksTitle = "whetherKeepWorksTitleWhenBackHome"
  } else {
    if ("course" === r$openFrom) {
      WhetherKeepWorksTitle = "whetherKeepWorksTitleWhenOpenCourse"
    }
  }
  return React.createElement($_13_index.f, {
    visible: r$visible,
    showCloseButton: false,
    onClose: l,
    maskClosable: false,
    className: N($_266.dialog, $_266.dialogSecondary)
  }, React.createElement("h3", null, $_710_index$a$formatMessage({
    id: WhetherKeepWorksTitle
  })), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "whetherKeepWorksDescription"
  })), React.createElement($_188.a, null, React.createElement($_188.b, {
    keys: "enter",
    callback: c
  })), React.createElement("div", {
    className: N($_266.dialogButtons)
  }, React.createElement($_13_index.d, {
    onClick: l,
    className: $_266.cancel
  }, $_710_index$a$formatMessage({
    id: "cancel"
  })), React.createElement($_13_index.d, {
    onClick: function () {
      if (r$onImport) {
        r$onImport()
      }
      l()
    },
    className: $_266.denyButton
  }, $_710_index$a$formatMessage({
    id: "notSave"
  })), React.createElement($_13_index.d, {
    type: "primary",
    onClick: c
  }, $_710_index$a$formatMessage({
    id: "save"
  }))))
})
export { ZP }
export { JP }
