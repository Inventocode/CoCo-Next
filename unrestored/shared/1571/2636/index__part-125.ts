/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-125
 */

"use strict"

import { Sg } from "./index__part-79"
import { py } from "./index__part-102"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_454_index from "./454/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect, useCallback, useMemo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_186 from "./186"
import /* [auto-meaningful-name] */$_1861 from "./186"
var /* [auto-meaningful-name] */py$Option = py.Option
var lw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "dataSource" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("templateSlotMap")
  var s = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var l = useRef(null)
  var u = useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState([])
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  function C() {
    var e = []
    w.forEach(function (t) {
      var n = $_42_index.g.get(t)
      if ((null === n || undefined === n ? undefined : n.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.m) {
        e.push(n)
      }
    })
    return e
  }
  function T() {
    for (var e in a) a[e].dataBindings = ""
    if (e$onChange) {
      e$onChange("templateSlotMap", a)
    }
  }
  function A(t, o) {
    var /* [auto-meaningful-name] */o$deleteColumnIdList
    if (o.newName) {
      $_26_index.m($_26_index.c.DATA_SOURCE, t, o.newName)
    }
    if (null === (o$deleteColumnIdList = o.deleteColumnIdList) || undefined === o$deleteColumnIdList ? undefined : o$deleteColumnIdList.length) {
      s($$_$$_$$_$$_src_editor_redux_common_actions.rg(i, o.deleteColumnIdList))
    }
    if (o.isCreateNewGrid) {
      if (e$onChange) {
        e$onChange(n, t)
      }
      T()
    }
    s($$_$$_$$_$$_src_editor_redux_common_actions.ug(e.widgetId))
  }
  function j() {
    return (j = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      var o
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 19
                break
              }
              if (n = t[0], $_454_index.l(n)) {
                e.next = 6
                break
              }
              s($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "maximumGridSourceSize"
                })
              }))
              return e.abrupt("return")
            case 6:
              r = Sg($_710$a$formatMessage)
              o = C().map(function (e) {
                return e.title
              })
              e.next = 10
              return $_454_index.h(n, n.name, r, o)
            case 10:
              if (e$sent = e.sent) {
                e.next = 14
                break
              }
              console.error("file import failed")
              return e.abrupt("return")
            case 14:
              e.next = 16
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(s, $$_$$_$$_$$_src_editor_redux_common_actions.hg("", $$_$$_$$_$$_src_editor_widget_builtIn_types.m, {
                x: 0,
                y: 0
              }, {
                name: e$sent.name,
                header: e$sent.header,
                data: e$sent.data
              }))
            case 16:
              e$sent1 = e.sent
              s($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "uploadGridSuccess"
                })
              }))
              s($$_$$_$$_$$_src_editor_redux_common_actions.sj({
                grid: D.a({
                  id: e$sent1.id,
                  name: e$sent1.title
                }, e$sent1.attributes.db),
                isCreateNewGrid: true,
                onClose: A
              }))
            case 19:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function R(e, t) {
    a[e].dataBindings = t || ""
    if (e$onChange) {
      e$onChange("templateSlotMap", a)
    }
  }
  useEffect(function () {
    var e = $_42_index.g.get(i)
    if ((null === e || undefined === e ? undefined : e.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.m) {
      var /* [auto-meaningful-name] */e$attributes$db = e.attributes.db
      if (i && e) {
        var n = []
        for (var r in e$attributes$db.header) n.push([r, e$attributes$db.header[r].field])
        y(n)
      } else {
        y([])
      }
    }
  }, [i, w])
  return React.createElement("div", null, React.createElement("div", {
    className: N($_1861.formItemWrapper, $_1861.dataSource)
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, React.createElement("div", {
    className: $_1861.label
  }, $_710$a$formatMessage({
    id: "ListViewerWidget.dataSource"
  })), React.createElement(py, {
    ref: l,
    allowClear: true,
    onChange: function (e) {
      if (i !== e) {
        T()
      }
      if (e$onChange) {
        e$onChange(n, e || "")
      }
    },
    value: i || undefined,
    placeholder: $_710$a$formatMessage({
      id: "ListViewerWidget.dataSourcePlaceholder"
    }),
    optionLabelProp: "label",
    listHeight: 160,
    style: {
      width: "100%",
      maxWidth: "170px"
    },
    suffixIcon: React.createElement($_13_index.j, {
      type: "icon-dropdown-down"
    })
  }, C().map(function (e) {
    return React.createElement(py$Option, {
      value: e.id,
      key: e.id,
      label: e.title
    }, React.createElement("div", {
      className: $_1861.dataSourceOptions
    }, e.title), React.createElement("span", {
      onClick: function (t) {
        return function (e, t) {
          var /* [auto-meaningful-name] */l$current
          e.stopPropagation()
          var r = $_42_index.g.get(t)
          if (r && r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.m) {
            s($$_$$_$$_$$_src_editor_redux_common_actions.ug(r.id))
            s($$_$$_$$_$$_src_editor_redux_common_actions.sj({
              grid: D.a({
                id: r.id,
                name: r.title
              }, r.attributes.db),
              onClose: A
            }))
          }
          if (!(null === (l$current = l.current) || undefined === l$current)) {
            l$current.blur()
          }
        }(t, e.id)
      }
    }, React.createElement($_13_index.j, {
      type: "icon-edit"
    })))
  })), React.createElement($_1213.a, {
    placement: "right",
    onVisibleChange: function (e) {
      m(e)
    },
    visible: p,
    content: React.createElement("div", {
      className: $_1861.addGridOverlay
    }, React.createElement($_13_index.l, {
      onClick: function (e) {
        switch (e) {
          case "CREATE_NEW_DATA_SOURCE":
            s($$_$$_$$_$$_src_editor_redux_common_actions.nj({
              title: $_710$a$formatMessage({
                id: "addGridName"
              }),
              placeholder: $_710$a$formatMessage({
                id: "addGridNamePlaceholder"
              }),
              onConfirm: function () {
                var e = O.a(RegeneratorRuntime.mark(function e(t) {
                  var /* [auto-meaningful-name] */e$sent
                  return RegeneratorRuntime.wrap(function (e) {
                    for (;;) {
                      switch (e.prev = e.next) {
                        case 0:
                          e.next = 2
                          return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(s, $$_$$_$$_$$_src_editor_redux_common_actions.hg("", $$_$$_$$_$$_src_editor_widget_builtIn_types.m, {
                            x: 0,
                            y: 0
                          }, {
                            name: t
                          }))
                        case 2:
                          e$sent = e.sent
                          s($$_$$_$$_$$_src_editor_redux_common_actions.sj({
                            grid: D.a({
                              id: e$sent.id,
                              name: e$sent.title
                            }, e$sent.attributes.db),
                            isCreateNewGrid: true,
                            onClose: A
                          }))
                        case 4:
                        case "end":
                          return e.stop()
                      }
                    }
                  }, e)
                }))
                return function (t) {
                  return e.apply(this, arguments)
                }
              }(),
              validators: [
                {
                  validator: function (e) {
                    return !C().some(function (t) {
                      return t.title === e
                    })
                  },
                  message: $_710$a$formatMessage({
                    id: "gridNameRepeat"
                  })
                }
              ].concat($_25_index.a(Sg($_710$a$formatMessage)))
            }))
        }
        m(false)
      }
    }, React.createElement($_13_index.m, {
      value: "CREATE_NEW_DATA_SOURCE"
    }, React.createElement("div", {
      className: $_1861.itemContent
    }, $_710$a$formatMessage({
      id: "addGridName"
    }))), React.createElement($_13_index.m, {
      value: "IMPORT_DATA_SOURCE"
    }, React.createElement($_13_index.B, {
      onChange: function (e) {
        return j.apply(this, arguments)
      },
      accept: ".xlsx, .xls, .csv",
      className: $_1861.itemContent
    }, $_710$a$formatMessage({
      id: "ListViewerWidget.importNewSource"
    })))))
  }, React.createElement("div", {
    className: $_1861.iconAddBox
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  }))))), i ? React.createElement("div", {
    className: N($_1861.formItemWrapper, "dataBindings")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: "ListViewerWidget.dataBindings"
  })), Object.keys(a).reverse().map(function (e) {
    return React.createElement("div", {
      key: e,
      className: $_1861.slotItem
    }, React.createElement("div", {
      className: $_1861.label
    }, a[e].label), React.createElement(py, {
      allowClear: true,
      placeholder: $_710$a$formatMessage({
        id: "ListViewerWidget.dataBindingsPlaceholder"
      }),
      onChange: R.bind(null, e),
      value: a[e].dataBindings || undefined,
      listHeight: 160,
      style: {
        width: "100%",
        maxWidth: "215px"
      }
    }, b.map(function (e) {
      return React.createElement(py$Option, {
        value: e[0],
        key: e[0]
      }, e[1])
    })))
  })) : null)
})
var /* [auto-meaningful-name] */py$Option1 = py.Option
var /* [auto-meaningful-name] */py$OptGroup = py.OptGroup
var pw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "dataSource" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var a = e$getValue(n)
  var s = e$getValue("templateSlotMap")
  var c = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var u = useRef(null)
  var d = useState([])
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState(false)
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var T = w[1]
  var j = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var R = useSelector(function (e) {
    return e.common.userInfo
  })
  var k = useSelector(function (e) {
    return e.cloudSpace.cloudTableList
  })
  var x = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  useEffect(function () {
    if (a) {
      if ("string" === typeof a) {
        var e = $_42_index.g.get(a)
        if (!e) {
          return void g([])
        }
        if ((null === e || undefined === e ? undefined : e.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
          var /* [auto-meaningful-name] */e$attributes$db = e.attributes.db
          var n = []
          for (var r in e$attributes$db.header) n.push([r, e$attributes$db.header[r].field])
          g(n)
        }
      } else {
        var o = k.find(function (e) {
          return e.id === a
        })
        if (o) {
          var /* [auto-meaningful-name] */o$columns
          var s = []
          if (!(null === (o$columns = o.columns) || undefined === o$columns)) {
            o$columns.forEach(function (e) {
              return s.push([e.id, e.name])
            })
          }
          g(s)
        }
      }
    } else {
      g([])
    }
  }, [k, a, j])
  var M = useCallback(function () {
    c($$_$$_$$_$$_src_editor_redux_common_actions.ug(e$widgetId))
  }, [c, e$widgetId])
  var L = useCallback(function (e, t) {
    var /* [auto-meaningful-name] */u$current
    e.stopPropagation()
    if ("string" === typeof t) {
      var r = $_42_index.g.get(t)
      if (r && r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
        c($$_$$_$$_$$_src_editor_redux_common_actions.ug(r.id))
        c($$_$$_$$_$$_src_editor_redux_common_actions.zj({
          grid: D.a({
            id: r.id,
            name: r.title
          }, r.attributes.db),
          onClose: M
        }))
      }
    } else {
      window.open("".concat(te.A(), "/dashboard/table/").concat(t), "_blank")
    }
    if (!(null === (u$current = u.current) || undefined === u$current)) {
      u$current.blur()
    }
  }, [c, M])
  var P = useMemo(function () {
    var e = []
    j.forEach(function (t) {
      var n = $_42_index.g.get(t)
      if ((null === n || undefined === n ? undefined : n.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
        e.push(n)
      }
    })
    return {
      localOptions: e.map(function (e) {
        return React.createElement(py$Option1, {
          value: e.id,
          key: e.id,
          label: e.title
        }, React.createElement("div", {
          className: $_1861.dataSourceOptions
        }, React.createElement($_13_index.j, {
          type: "icon-widget-table-data",
          className: "coco-widget-icon"
        }), e.title), React.createElement("span", {
          onClick: function (t) {
            return L(t, e.id)
          }
        }, React.createElement($_13_index.j, {
          type: "icon-turn-edit"
        })))
      }),
      cloudOptions: k.map(function (e) {
        return React.createElement(py$Option1, {
          value: e.id,
          key: e.id,
          label: e.name,
          className: "ant-select-item-hidden"
        }, React.createElement("div", {
          className: $_1861.dataSourceOptions
        }, e.name))
      })
    }
  }, [k, j, L])
  var /* [auto-meaningful-name] */P$localOptions = P.localOptions
  var /* [auto-meaningful-name] */P$cloudOptions = P.cloudOptions
  function G(e) {
    if (a !== e) {
      W()
    }
    if ("number" === typeof e) {
      c($$_$$_$$_$$_src_editor_redux_common_actions.Sf(e))
      c($$_$$_$$_$$_src_editor_redux_common_actions.Rf(e, false))
    }
    if (e$onChange) {
      e$onChange(n, e || "")
    }
  }
  function W() {
    for (var e in s) s[e].dataBindings = ""
    if (e$onChange) {
      e$onChange("templateSlotMap", s)
    }
  }
  function U(e, t) {
    s[e].dataBindings = t || ""
    if (e$onChange) {
      e$onChange("templateSlotMap", s)
    }
  }
  var H = function () {
    E(true)
  }
  var V = function () {
    E(false)
  }
  var K = function () {
    T(true)
  }
  var q = function () {
    T(false)
  }
  var X = function () {
    c($$_$$_$$_$$_src_editor_redux_common_actions.Ch())
  }
  var Q = function (e, t) {
    var /* [auto-meaningful-name] */u$current
    G(e)
    if (!(null === (u$current = u.current) || undefined === u$current)) {
      u$current.blur()
    }
  }
  return React.createElement("div", null, React.createElement("div", {
    className: N($_1861.formItemWrapper, $_1861.dataSource)
  }, React.createElement("div", {
    className: $_1861.itemLabel
  }, $_710$a$formatMessage({
    id: "ListViewerWidget.dataSource"
  })), React.createElement(py, {
    ref: u,
    allowClear: true,
    onChange: G,
    dropdownRender: function (e) {
      return React.createElement("div", {
        className: N(y || C ? "addBtnActive" : "")
      }, React.createElement("div", {
        onMouseEnter: H,
        onMouseLeave: V,
        className: N($_1861.addDataSource),
        onClick: function () {
          var /* [auto-meaningful-name] */u$current
          if (!(null === u || undefined === u || null === (u$current = u.current) || undefined === u$current)) {
            u$current.blur()
          }
          c($$_$$_$$_$$_src_editor_redux_common_actions.oj({
            widgetId: e$widgetId,
            onConfirm: function (e) {
              e$onChange(n, e.id)
              W()
              if ((null === e || undefined === e ? undefined : e.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
                c($$_$$_$$_$$_src_editor_redux_common_actions.zj({
                  grid: D.a({
                    id: e.id,
                    name: e.title
                  }, e.attributes.db),
                  onClose: M
                }))
              }
            }
          }))
        }
      }, React.createElement("div", null, React.createElement($_13_index.j, {
        type: "icon-add",
        className: $_1861.addIcon
      }), $_710$a$formatMessage({
        id: "ListViewerWidget.createDataSource"
      }))), e, (P$localOptions.length > 0 || k.length > 0) && React.createElement("div", {
        className: N($_1861.cloudTable, P$localOptions.length > 0 && $_1861.showShadow),
        onMouseEnter: K,
        onMouseLeave: q
      }, React.createElement("div", null, $_710$a$formatMessage({
        id: "CloudSpaceDBWidget.widgetName"
      })), x ? React.createElement($_13_index.j, {
        type: "icon-arrow-down",
        className: $_1861.arrowIcon
      }) : React.createElement($_748_index.a, {
        placement: "bottom",
        title: $_710$a$formatMessage({
          id: "ListViewerWidget.cloudTableOtTips"
        })
      }, React.createElement("div", null, React.createElement($_13_index.j, {
        type: "icon-locked",
        className: $_1861.lockIcon
      })))), x && React.createElement("div", {
        onMouseEnter: K,
        onMouseLeave: q,
        className: N($_1861.cloudTableList, C && $_1861.visible)
      }, !R && React.createElement("div", {
        className: $_1861.loginBox
      }, React.createElement($_13_index.d, {
        type: "primary",
        onClick: X
      }, $_710$a$formatMessage({
        id: "cloudSpace.needLogin"
      }))), R && 0 === k.length && React.createElement("div", {
        className: $_1861.noData
      }, "No Data"), R && k.length > 0 && React.createElement("div", {
        className: $_1861.listBox
      }, k.map(function (e) {
        return React.createElement("div", {
          onClick: Q.bind(null, e.id, e.name),
          key: e.id,
          className: N("ant-select-item", "ant-select-item-option", a === e.id && "ant-select-item-option-selected")
        }, React.createElement("div", {
          className: "ant-select-item-option-content"
        }, React.createElement("div", {
          className: $_1861.dataSourceOptions
        }, React.createElement($_13_index.j, {
          type: "icon-widget-cloud-table",
          className: "coco-widget-icon"
        }), e.name), React.createElement("span", {
          onClick: function (t) {
            return L(t, e.id)
          }
        }, React.createElement($_13_index.j, {
          type: "icon-turn-edit"
        }))))
      }))))
    },
    value: a || undefined,
    placeholder: $_710$a$formatMessage({
      id: "ListViewerWidget.dataSourcePlaceholder"
    }),
    optionLabelProp: "label",
    listHeight: 200,
    virtual: false,
    dropdownClassName: $_1861.dataSourceSelectDropdown,
    suffixIcon: React.createElement($_13_index.j, {
      type: "icon-dropdown-down"
    })
  }, P$localOptions.length > 0 && React.createElement(py$OptGroup, {
    key: "localTableData",
    label: $_710$a$formatMessage({
      id: "ListViewerWidget.localTableData"
    })
  }), P$localOptions, P$cloudOptions)), a ? React.createElement("div", {
    className: N($_1861.formItemWrapper, "dataBindings")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: "ListViewerWidget.dataBindings"
  })), Object.keys(s).reverse().map(function (e) {
    return React.createElement("div", {
      key: e,
      className: $_1861.slotItem
    }, React.createElement("div", {
      className: $_1861.label
    }, s[e].label), React.createElement(py, {
      allowClear: true,
      placeholder: $_710$a$formatMessage({
        id: "ListViewerWidget.dataBindingsPlaceholder"
      }),
      onChange: U.bind(null, e),
      value: s[e].dataBindings || undefined,
      listHeight: 160,
      style: {
        width: "100%",
        maxWidth: "215px"
      }
    }, m.map(function (e) {
      return React.createElement(py$Option1, {
        value: e[0],
        key: e[0]
      }, e[1])
    })))
  })) : null)
})
export { lw }
export { pw }
