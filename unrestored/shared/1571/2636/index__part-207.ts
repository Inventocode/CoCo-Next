/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-207
 */

"use strict"

import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_348 from "./348"
import /* [auto-meaningful-name] */$_3481 from "./348"
var zL = React1.memo(function (e) {
  var t = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = function () {
    var r = O.a(RegeneratorRuntime.mark(function r(o) {
      var i
      var a
      return RegeneratorRuntime.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              if (o && 0 !== o.length) {
                r.next = 2
                break
              }
              return r.abrupt("return")
            case 2:
              i = o[0]
              a = function () {
                var r = O.a(RegeneratorRuntime.mark(function r(o) {
                  var /* [auto-meaningful-name] */r$sent
                  var a
                  var s
                  return RegeneratorRuntime.wrap(function (r) {
                    for (;;) {
                      switch (r.prev = r.next) {
                        case 0:
                          if (5242880, !(Number(o.size) > 5242880)) {
                            r.next = 4
                            break
                          }
                          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                            message: $_710_index$a$formatMessage({
                              id: "cloudGrid.FileSizeLimit"
                            })
                          }))
                          return r.abrupt("return", false)
                        case 4:
                          r.prev = 4
                          r.next = 7
                          return te.fb(o)
                        case 7:
                          if (!(r$sent = r.sent)) {
                            r.next = 23
                            break
                          }
                          if (!((a = Object.keys(r$sent.header)).length > 10)) {
                            r.next = 13
                            break
                          }
                          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                            message: $_710_index$a$formatMessage({
                              id: "cloudGrid.FileColumnSizeLimit"
                            })
                          }))
                          return r.abrupt("return")
                        case 13:
                          if (s = a.map(function (e) {
                            return r$sent.header[e].field
                          }), new Set(s).size === s.length) {
                            r.next = 17
                            break
                          }
                          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                            message: $_710_index$a$formatMessage({
                              id: "cloudGrid.FileColumnNameRepeat"
                            })
                          }))
                          return r.abrupt("return")
                        case 17:
                          if (r$sent.data = r$sent.data.filter(function (e) {
                            return Object.keys(e).length > 1
                          }), !(r$sent.data.length > 500)) {
                            r.next = 21
                            break
                          }
                          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                            message: $_710_index$a$formatMessage({
                              id: "cloudGrid.FileRowSizeLimit"
                            })
                          }))
                          return r.abrupt("return")
                        case 21:
                          e.handleSetGridInfo(r$sent.data, r$sent.header)
                          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                            message: $_710_index$a$formatMessage({
                              id: "cloudGrid.fileImportSuccess"
                            })
                          }))
                        case 23:
                          r.next = 29
                          break
                        case 25:
                          r.prev = 25
                          r.t0 = r.catch(4)
                          console.info(r.t0)
                          if ("cell length larger than 1000" === r.t0.error) {
                            t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                              message: $_710_index$a$formatMessage({
                                id: "cloudGrid.FileCellSizeLimit"
                              })
                            }))
                          }
                        case 29:
                        case "end":
                          return r.stop()
                      }
                    }
                  }, r, null, [[4, 25]])
                }))
                return function (e) {
                  return r.apply(this, arguments)
                }
              }()
              if (0 === e.getColumnInfo().length) {
                a(i)
              } else {
                t($$_$$_$$_$$_src_editor_redux_common_actions.zh({
                  onConfirm: function () {
                    a(i)
                  },
                  allowText: $_710_index$a$formatMessage({
                    id: "confirm"
                  }),
                  title: $_710_index$a$formatMessage({
                    id: "cloudGrid.importCoverTitle"
                  }),
                  content: $_710_index$a$formatMessage({
                    id: "cloudGrid.importCoverTitleContent"
                  })
                }))
              }
            case 5:
            case "end":
              return r.stop()
          }
        }
      }, r)
    }))
    return function (e) {
      return r.apply(this, arguments)
    }
  }()
  return React.createElement($_13_index.B, {
    onChange: r,
    accept: ".xlsx, .xls, .csv",
    className: $_3481.uploadButton
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "cloudGrid.FileImport"
  })))
})
export { zL }
