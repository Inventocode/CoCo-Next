/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-194
 */

"use strict"

import { aN } from "./index__part-191"
import { ID, uM, mM } from "./index__part-192"
import { yM } from "./index__part-193"
import /* [auto-meaningful-name] */$_137 from "./137"
import * as /* [auto-meaningful-name] */$_796_index from "./796/index"
import /* [auto-meaningful-name] */$_1039 from "./1039"
import * as ng from "./64"
import * as /* [auto-meaningful-name] */$_144 from "./144"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_47_index from "./47/index"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect, useCallback } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1208_index from "./1208/index"
function OM(e) {
  return wM.apply(this, arguments)
}
function wM() {
  return (wM = O.a(RegeneratorRuntime.mark(function e(t) {
    var n
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            return e.delegateYield(RegeneratorRuntime.mark(function e() {
              var n
              var r
              var o
              var i
              var a
              var /* [auto-meaningful-name] */e$sent
              var /* [auto-meaningful-name] */e$sent1
              var l
              var u
              var d
              var p
              var f
              var /* [auto-meaningful-name] */f$value
              var /* [auto-meaningful-name] */f$value$dims
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      n = []
                      r = document.createElement("canvas")
                      o = r.getContext("2d")
                      i = document.createElement("canvas")
                      a = i.getContext("2d")
                      e.next = 7
                      return fetch(t)
                    case 7:
                      e$sent = e.sent
                      e.next = 10
                      return e$sent.arrayBuffer()
                    case 10:
                      e$sent1 = e.sent
                      l = $_1208_index.parseGIF(e$sent1)
                      u = $_1208_index.decompressFrames(l, true)
                      i.width = u[0].dims.width
                      i.height = u[0].dims.height
                      p = $_47_index.a(u)
                      try {
                        for (p.s(); !(f = p.n()).done;) {
                          if ((f$value = f.value).disposalType >= 2) {
                            a.clearRect(0, 0, i.width, i.height)
                          }
                          f$value$dims = f$value.dims
                          if (!(d && f$value$dims.width === d.width && f$value$dims.height === d.height)) {
                            r.width = f$value$dims.width
                            r.height = f$value$dims.height
                            d = o.createImageData(f$value$dims.width, f$value$dims.height)
                          }
                          d.data.set(f$value.patch)
                          o.putImageData(d, 0, 0)
                          a.drawImage(r, f$value$dims.left, f$value$dims.top)
                          n.push(new Promise(function (e) {
                            i.toBlob(function (t) {
                              return e(t)
                            }, "image/png", 1)
                          }))
                        }
                      } catch (g) {
                        p.e(g)
                      } finally {
                        p.f()
                      }
                      return e.abrupt("return", {
                        v: Promise.all(n)
                      })
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })(), "t0", 2)
          case 2:
            if ("object" !== typeof (n = e.t0)) {
              e.next = 5
              break
            }
            return e.abrupt("return", n.v)
          case 5:
            e.next = 12
            break
          case 7:
            e.prev = 7
            e.t1 = e.catch(0)
            console.info("parse gif failed: " + t)
            console.error(e.t1)
            return e.abrupt("return", [])
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function CM(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : "image/png"
  var r = []
  e.forEach(function (e, o) {
    if (e) {
      r.push(new File([e], Et.z(t + "-" + (o + 1) + ".png"), {
        type: n
      }))
    }
  })
  return r
}
function TM(e) {
  for (var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 5, n = [], r = 0; r < e.length; r += t) {
    var o = e.slice(r, r + t)
    if (0 === o.length) {
      break
    }
    n.push(o)
    if (o.length < t) {
      break
    }
  }
  return n
}
var SM = memo(function (e) {
  var /* [auto-meaningful-name] */e$actionId = e.actionId
  var /* [auto-meaningful-name] */e$editingStyleId = e.editingStyleId
  var /* [auto-meaningful-name] */e$styleList = e.styleList
  var /* [auto-meaningful-name] */e$actionInterval = e.actionInterval
  var /* [auto-meaningful-name] */e$onIntervalChange = e.onIntervalChange
  var /* [auto-meaningful-name] */e$setEditingStyleId = e.setEditingStyleId
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = useState(e$actionInterval.toString() || "200")
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef(200)
  var m = useState(false)
  var g = $_10_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  useEffect(function () {
    d(e$actionInterval.toFixed())
  }, [e$actionId])
  useEffect(function () {
    if (u !== e$actionInterval.toFixed()) {
      e$onIntervalChange(e$actionId, Number(u))
    }
  }, [u])
  return React.createElement("div", {
    className: $_137.playerContainer
  }, React.createElement("div", {
    className: N($_137.playButton, !e$styleList.length && $_137.disabled),
    onClick: function () {
      var /* [auto-meaningful-name] */e$styleList$length = e$styleList.length
      if (e$styleList$length) {
        if (_) {
          v(false)
        } else {
          var t = Number(u)
          var o = e$styleList.findIndex(function (e) {
            return e.id === e$editingStyleId
          })
          v(true)
          var i = setInterval(function () {
            var /* [auto-meaningful-name] */e$styleListOO1E$styleList$length$id = e$styleList[o = (o + 1) % e$styleList$length].id
            e$setEditingStyleId(e$styleListOO1E$styleList$length$id)
          }, t)
          document.addEventListener("mousedown", function (e) {
            clearInterval(i)
            if (!(e.target instanceof Element && e.target.closest("." + $_137.playButton))) {
              v(false)
            }
          }, {
            once: true
          })
        }
      }
    }
  }, React.createElement($_13_index.j, {
    type: _ ? "icon-pause" : "icon-play"
  })), React.createElement("div", {
    className: $_137.intervalContainer
  }, React.createElement("label", null, $_710$a$formatMessage({
    id: "actor.interval"
  })), React.createElement("input", {
    type: "number",
    value: u,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      if (Number(e$target.value) > $_144.b) {
        d($_144.b.toString())
      } else {
        d(e$target.value)
      }
    },
    onBlur: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var n = e$target.value ? Number(e$target.value) : NaN
      if (isNaN(n)) {
        n = p.current
      }
      p.current = n
      d(Math.max($_144.d, Math.min(n, $_144.b)).toFixed())
    }
  }), React.createElement("span", {
    className: $_137.tips
  }, u, "ms"), React.createElement($_13_index.g, {
    className: $_137.dropdown,
    overlay: React.createElement($_13_index.l, {
      onClick: function (e) {
        d(e)
      }
    }, [100, 200, 500, 1e3].map(function (e) {
      return React.createElement($_13_index.m, {
        key: e,
        value: e.toString()
      }, React.createElement("div", {
        className: N(u === e.toString() && $_137.selected)
      }, e, "ms"))
    }))
  })))
})
var AM = {
  x: 0,
  y: 0
}
function IM(e) {
  var /* [auto-meaningful-name] */e$styleList = e.styleList
  var /* [auto-meaningful-name] */e$editingStyleId = e.editingStyleId
  var /* [auto-meaningful-name] */e$setEditingStyleId = e.setEditingStyleId
  var /* [auto-meaningful-name] */e$deleteStyle = e.deleteStyle
  var /* [auto-meaningful-name] */e$copyStyle = e.copyStyle
  var /* [auto-meaningful-name] */e$onStyleListChange = e.onStyleListChange
  var s = useRef(AM)
  var c = useCallback(function () {
    var e
    var t
    var n = null === (e = document.getElementById("THE_STYLE_LIST")) || undefined === e ? undefined : e.closest(".coco-dialog-wrapper.show")
    var r = null === n || undefined === n || null === (t = n.getClientRects()) || undefined === t ? undefined : t.item(0)
    s.current = r ? {
      x: r.x,
      y: r.y
    } : AM
  }, [])
  useEffect(function () {
    window.addEventListener("scroll", c)
    return function () {
      return window.removeEventListener("scroll", c)
    }
  }, [c])
  useEffect(function () {
    var e = document.getElementById("THE_STYLE_LIST")
    if (e instanceof HTMLUListElement) {
      var t = e.querySelector("." + $_137.selected)
      if (t instanceof HTMLLIElement) {
        var n = t.offsetLeft - e.offsetLeft
        if (n < e.scrollLeft) {
          e.scrollLeft = n
        } else {
          if (n + 76 > e.scrollLeft + e.clientWidth) {
            e.scrollLeft += n + 76 - e.scrollLeft - e.clientWidth
          }
        }
      }
    }
  }, [e$editingStyleId])
  var l = Lodash.debounce(function () {
    var e = document.getElementById("THE_STYLE_LIST")
    if (e instanceof HTMLUListElement) {
      if (0 === e.scrollLeft) {
        e.classList.remove($_137.leftScrollable)
        if (e.scrollLeft < e.scrollWidth) {
          e.classList.add($_137.rightScrollable)
        }
      } else {
        if (e.scrollLeft === e.scrollWidth - e.offsetWidth) {
          e.classList.remove($_137.rightScrollable)
          if (e.scrollLeft > 0) {
            e.classList.add($_137.leftScrollable)
          }
        } else {
          e.classList.add($_137.rightScrollable)
          e.classList.add($_137.leftScrollable)
        }
      }
    }
  }, 20)
  return React.createElement(ID, {
    onDragEnd: function (e) {
      var n = document.querySelector("li." + e.draggableId)
      if (n instanceof HTMLLIElement) {
        n.classList.remove($_137.hovering)
      }
      var /* [auto-meaningful-name] */e$source = e.source
      var /* [auto-meaningful-name] */e$destination = e.destination
      if (e$destination && e$destination.index !== e$source.index) {
        var i
        var s = e$styleList.filter(function (t) {
          return t.id !== e.draggableId || (i = t, false)
        })
        if (i) {
          s.splice(e$destination.index, 0, i)
          e$onStyleListChange(s)
        }
      }
    },
    onBeforeDragStart: function (e) {
      var t = document.querySelector("li." + e.draggableId)
      if (t instanceof HTMLLIElement) {
        t.classList.add($_137.hovering)
      }
      c()
    }
  }, React.createElement(mM, {
    droppableId: "styles",
    type: "COLUMN",
    direction: "horizontal"
  }, function (e) {
    return React.createElement("ul", Object.assign({
      id: "THE_STYLE_LIST",
      className: $_137.styleList,
      onScroll: l,
      ref: e.innerRef
    }, e.droppableProps), e$styleList.map(function (e, t) {
      return function (e, t) {
        var a = Et.mb(e.source) || ""
        if (!a) {
          console.warn("renderStyleItem imageUrl error")
        }
        return React.createElement(uM, {
          draggableId: e.id,
          index: t,
          key: e.id
        }, function (c) {
          var /* [auto-meaningful-name] */c$innerRef = c.innerRef
          var /* [auto-meaningful-name] */c$draggableProps = c.draggableProps
          var /* [auto-meaningful-name] */c$dragHandleProps = c.dragHandleProps
          var /* [auto-meaningful-name] */s$current = s.current
          if (c$draggableProps.style) {
            if ("top" in c$draggableProps.style) {
              c$draggableProps.style.top -= s$current.y
            }
            if ("left" in c$draggableProps.style) {
              c$draggableProps.style.left -= s$current.x
            }
          }
          return React.createElement("li", Object.assign({
            ref: c$innerRef,
            key: e.id,
            className: N($_137.styleItem, e.id, e$editingStyleId === e.id && $_137.selected),
            onClick: function () {
              e$setEditingStyleId(e.id)
            }
          }, c$draggableProps, c$dragHandleProps), React.createElement("div", {
            className: $_137.deleteStyle,
            onClick: function (e) {
              e$deleteStyle(e, t)
            }
          }, React.createElement($_13_index.j, {
            type: "icon-close-bold"
          })), React.createElement("div", {
            className: $_137.copyStyle,
            onClick: function (e) {
              e$copyStyle(e, t)
            }
          }, React.createElement($_13_index.j, {
            type: "icon-copy"
          })), React.createElement("img", {
            className: $_137.image,
            src: a || $_1039,
            alt: ""
          }), React.createElement("span", {
            className: $_137.seq
          }, t + 1))
        })
      }(e, t)
    }), e.placeholder)
  }))
}
var jM
memo(IM)
function NM(e) {
  var t
  e.some(function (e) {
    var /* [auto-meaningful-name] */e$styleList = e.styleList
    return !!e$styleList[0] && (t = e$styleList[0], true)
  })
  return t
}
function RM(e) {
  return "__".concat(e)
}
!function (e) {
  e.UPLOAD_FILE = "UPLOAD_FILE"
  e.OPEN_RESOURCE_LIBRARY = "OPEN_RESOURCE_LIBRARY"
}(jM || (jM = {}))
var kM = memo(function () {
  var e
  var t = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var r = useRef(true)
  var o = useRef(undefined)
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useSelector(function (e) {
    return e.project.styleDialog.actorId
  })
  var u = useSelector(function (e) {
    return e.project.styleDialog.onSelect
  })
  var /* [auto-meaningful-name] */Et$BbL$attributes = Et.Bb(l).attributes
  var /* [auto-meaningful-name] */Et$BbL$attributes$selectedStyleId = Et$BbL$attributes.selectedStyleId
  var /* [auto-meaningful-name] */Et$BbL$attributes$actionList = Et$BbL$attributes.actionList
  var g = useState(Et$BbL$attributes$selectedStyleId)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useState(Lodash.cloneDeep(Et$BbL$attributes$actionList))
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = null === (e = T[0]) || undefined === e ? undefined : e.id
  var N = useState(j)
  var R = $_10_index.a(N, 2)
  var k = R[0]
  var M = R[1]
  var L = T.find(function (e) {
    return e.id === k
  })
  var P = useState(undefined)
  var B = $_10_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = (null === L || undefined === L ? undefined : L.styleList) || []
  var U = (null === L || undefined === L ? undefined : L.interval) || 200
  var H = useRef()
  var V = useRef(null)
  useEffect(function () {
    var e
    if (!W.some(function (e) {
      return e.id === F
    })) {
      var t = null === W || undefined === W || null === (e = W[0]) || undefined === e ? undefined : e.id
      G(t)
    }
  }, [F, W])
  useEffect(function () {
    if (H.current) {
      var /* [auto-meaningful-name] */H$current = H.current
      var t = document.getElementById(H$current)
      if (!(null === t || undefined === t)) {
        t.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
      H.current = null
    }
  })
  var K = W.find(function (e) {
    return e.id === F
  })
  var q = Et.mb((null === K || undefined === K ? undefined : K.source) || "")
  var X = Et.hb((null === K || undefined === K ? undefined : K.source) || "")
  var Q = function (e) {
    e.forEach(function (t, n) {
      var r = ng.a("STYLE")
      var o = {
        id: r,
        source: t.id,
        cdnUrl: t.cdnUrl
      }
      if (L && (L.styleList.push(o), n === e.length - 1)) {
        var i = $_25_index.a(T)
        A(i)
        G(r)
        setTimeout(function () {
          var /* [auto-meaningful-name] */V$current
          var t
          if (!(null === (V$current = V.current) || undefined === V$current || null === (t = V$current.querySelector("." + $_137.styleList)) || undefined === t)) {
            t.scrollBy({
              left: 1e4,
              behavior: "smooth"
            })
          }
        }, 0)
      }
    })
  }
  function Z(e, n, r) {
    return new Promise(function (o, i) {
      var a = setTimeout(function () {
        i(new Error("UploadFile time out."))
      }, 10 * e.length * 1e3)
      t($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
        e[0].groupId = n
        e[0].groupImageIndex = r
        Q(e)
        clearTimeout(a)
        return o(e)
      }, true))
    })
  }
  function J(e) {
    return $.apply(this, arguments)
  }
  function $() {
    return ($ = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var o
      var /* [auto-meaningful-name] */o$value
      var /* [auto-meaningful-name] */e$sent
      var s
      var c
      var l
      var u
      var d
      var p
      var f
      var /* [auto-meaningful-name] */e$sent1
      var m
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = $_47_index.a(t)
              e.prev = 1
              n.s()
            case 3:
              if ((o = n.n()).done) {
                e.next = 41
                break
              }
              o$value = o.value
              e.next = 7
              return OM(o$value.url)
            case 7:
              e$sent = e.sent
              s = CM(e$sent, o$value.name)
              c = []
              l = $_47_index.a(TM(s, 1).entries())
              e.prev = 11
              l.s()
            case 13:
              if ((u = l.n()).done) {
                e.next = 31
                break
              }
              if (d = $_10_index.a(u.value, 2), p = d[0], f = d[1], false !== r.current) {
                e.next = 17
                break
              }
              return e.abrupt("return")
            case 17:
              e.prev = 17
              e.next = 20
              return Z(f, o$value.name, p)
            case 20:
              e$sent1 = e.sent
              c.push(e$sent1[0].cdnUrl || e$sent1[0].source || "")
              m = {
                cdnUrl: c[0],
                id: o$value.name,
                source: "",
                extension: "",
                urls: c
              }
              if (Et.hb(o$value.name)) {
                Et.bc(o$value.name, m.cdnUrl)
              } else {
                Et.Tb(m)
              }
              e.next = 29
              break
            case 26:
              e.prev = 26
              e.t0 = e.catch(17)
              return e.abrupt("return")
            case 29:
              e.next = 13
              break
            case 31:
              e.next = 36
              break
            case 33:
              e.prev = 33
              e.t1 = e.catch(11)
              l.e(e.t1)
            case 36:
              e.prev = 36
              l.f()
              return e.finish(36)
            case 39:
              e.next = 3
              break
            case 41:
              e.next = 46
              break
            case 43:
              e.prev = 43
              e.t2 = e.catch(1)
              n.e(e.t2)
            case 46:
              e.prev = 46
              n.f()
              return e.finish(46)
            case 49:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[1, 43, 46, 49], [11, 33, 36, 39], [17, 26]])
    }))).apply(this, arguments)
  }
  function ee(e) {
    var n = []
    var r = []
    e.forEach(function (e) {
      if (".gif" === e.extension) {
        r.push({
          url: e.source || e.cdnUrl,
          name: e.id.slice(0, -4)
        })
      } else {
        n.push(e)
      }
    })
    Q(n)
    t($$_$$_$$_$$_src_editor_redux_common_actions.sh())
    J(r)
  }
  var te = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      var n
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = b
              if (!b) {
                if (r = NM(T)) {
                  n = r.id
                }
              }
              t($$_$$_$$_$$_src_editor_redux_common_actions.Lg(l, "actionList", T))
              t($$_$$_$$_$$_src_editor_redux_common_actions.Lg(l, "selectedStyleId", n))
              if (u) {
                u(k, F)
              }
              ne()
              $_26_index.l()
            case 7:
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
  var ne = function () {
    t($$_$$_$$_$$_src_editor_redux_common_actions.vh())
  }
  useEffect(function () {
    if (undefined === o.current) {
      o.current = false
    } else {
      o.current = true
    }
  }, [b, T])
  useEffect(function () {
    r.current = true
    return function () {
      r.current = false
    }
  }, [])
  return React.createElement($_13_index.f, {
    withPortal: true,
    visible: true,
    className: $_137.container,
    onClose: function () {
      if (o.current) {
        c(true)
        o.current = false
      } else {
        ne()
      }
    }
  }, React.createElement("h3", {
    className: $_137.title
  }, $_710$a$formatMessage({
    id: "ActorStyleDialog.dialogTitle"
  })), React.createElement("div", {
    className: $_137.content
  }, React.createElement("div", {
    className: $_137.actionBar
  }, React.createElement(yM, {
    actionList: T,
    selectedActionId: k,
    getActionDomId: RM,
    handleActionClick: function (e) {
      M(e)
    },
    handleActionChange: function (e, t) {
      T.splice(e, 1, t)
      A($_25_index.a(T))
    },
    handleActionDelete: function (e) {
      var t = T[e]
      T.splice(e, 1)
      if (t.id === k) {
        if (T[e]) {
          M(T[e].id)
        } else {
          if (T[e - 1]) {
            M(T[e - 1].id)
          }
        }
      }
      if (b && t.styleList.some(function (e) {
        return e.id === b
      })) {
        y(undefined)
      }
      A($_25_index.a(T))
    },
    handleActionCopy: function (e) {
      var t = T.map(function (e) {
        return e.name
      })
      var n = T[e]
      var r = D.a(D.a({}, n), {}, {
        id: ng.a($_144.a),
        name: Et.ac(n.name, t),
        styleList: n.styleList.map(function (e) {
          return D.a(D.a({}, e), {}, {
            id: ng.a("STYLE")
          })
        })
      })
      T.splice(e + 1, 0, r)
      A($_25_index.a(T))
      M(r.id)
    },
    onActionListChange: function (e) {
      A(e)
    }
  }), React.createElement("div", {
    className: $_137.addAction,
    onClick: function () {
      var e = ng.a($_144.a)
      var t = $_710$a$formatMessage({
        id: "ActorStyleDialog.actionName"
      })
      var r = T.map(function (e) {
        return e.name
      })
      var o = {
        id: e,
        name: Et.ac(t, r),
        styleList: [],
        interval: 200
      }
      A([].concat($_25_index.a(T), [o]))
      M(e)
      H.current = RM(e)
    }
  }, React.createElement("span", {
    className: $_137.addActionIcon
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })), React.createElement("span", null, $_710$a$formatMessage({
    id: "ActorStyleDialog.addAction"
  })))), React.createElement("div", {
    className: $_137.main
  }, React.createElement("div", {
    className: $_137.imageEditorContainer
  }, React.createElement("div", {
    className: $_137.imageDragContainer
  }, React.createElement(aN, {
    isEmpty: !(q && X),
    onSuccess: ee,
    className: $_137.imageDragLayout
  }, q && X && React.createElement("div", {
    className: $_137.imageEditor
  }, React.createElement("div", {
    className: $_137.imageContainer
  }, React.createElement("img", {
    draggable: false,
    src: q,
    alt: X.id
  })), React.createElement("div", {
    className: $_137.ctrlBtnBar
  }, q ? F === b ? React.createElement("button", {
    className: $_137.selected,
    type: "button"
  }, React.createElement("div", {
    className: $_137.checkbox
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected",
    className: $_137.selectedIcon
  })), $_710$a$formatMessage({
    id: "ActorStyleDialog.defaultStyle"
  })) : React.createElement("button", {
    onClick: function () {
      y(F)
    }
  }, React.createElement("div", {
    className: $_137.checkbox
  }), $_710$a$formatMessage({
    id: "ActorStyleDialog.defaultStyle"
  })) : null))))), React.createElement("div", {
    className: $_137.styleContainer
  }, React.createElement("div", {
    className: $_137.styleListContainer,
    ref: V
  }, React.createElement(SM, {
    actionId: k,
    styleList: W,
    editingStyleId: F,
    actionInterval: U,
    onIntervalChange: function (e, t) {
      var n
      if ((null === (n = T.find(function (t) {
        return t.id === e
      })) || undefined === n ? undefined : n.interval) !== t) {
        A(T.slice(0).map(function (n) {
          return n.id === e ? D.a(D.a({}, n), {}, {
            interval: t
          }) : n
        }))
      }
    },
    setEditingStyleId: G
  }), React.createElement(IM, {
    styleList: W,
    editingStyleId: F,
    setEditingStyleId: G,
    deleteStyle: function (e, t) {
      e.stopPropagation()
      var n
      var r = W[t]
      W.splice(t, 1)
      A($_25_index.a(T))
      if (r.id === F) {
        if (W[t]) {
          n = W[t].id
        } else {
          if (W[t - 1]) {
            n = W[t - 1].id
          }
        }
        G(n)
      }
      if (r.id === b) {
        y("")
      }
    },
    copyStyle: function (e, t) {
      e.stopPropagation()
      var n = W[t]
      var r = D.a(D.a({}, n), {}, {
        id: ng.a("STYLE")
      })
      W.splice(t + 1, 0, r)
      A($_25_index.a(T))
      G(r.id)
    },
    onStyleListChange: function (e, t) {
      var n = t || F
      A(T.map(function (t) {
        return t.id === k ? D.a(D.a({}, t), {}, {
          styleList: e
        }) : t
      }))
      G(n)
    }
  }), React.createElement($_13_index.g, {
    className: $_137.addStyleContainer,
    showDropdownIcon: false,
    overlay: React.createElement($_13_index.l, {
      onClick: function (e) {
        if (e === jM.OPEN_RESOURCE_LIBRARY) {
          t($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (e) {
            ee(e)
          }, true))
        }
      }
    }, React.createElement($_13_index.m, {
      value: jM.UPLOAD_FILE
    }, React.createElement($_13_index.B, {
      className: $_137.uploadBtn,
      multiple: true,
      onChange: function (e) {
        if (e) {
          e = Array.from(e)
          var n = []
          var r = []
          e.forEach(function (e) {
            if (e.name.endsWith(".gif")) {
              r.push({
                url: URL.createObjectURL(e),
                name: Et.z(e.name.slice(0, -4))
              })
            } else {
              n.push(e)
            }
          })
          if (0 !== n.length) {
            t($$_$$_$$_$$_src_editor_redux_common_actions.Zf(n, function (e) {
              Q(e)
              J(r)
            }, true))
          } else {
            J(r)
          }
        } else {
          console.error("handleUploadFileChange error, files is null")
        }
      },
      accept: $_133.f
    }, React.createElement($_13_index.j, {
      type: "icon-upload-image",
      className: $_137.btnIcon
    }), $_710$a$formatMessage({
      id: "uploadImageFile"
    }))), React.createElement($_13_index.m, {
      value: jM.OPEN_RESOURCE_LIBRARY
    }, React.createElement($_13_index.j, {
      type: "icon-image-library",
      className: $_137.btnIcon
    }), $_710$a$formatMessage({
      id: "resourceLibrary"
    })))
  }, React.createElement("div", {
    className: $_137.addStyle
  }, React.createElement($_13_index.j, {
    className: $_137.addIcon,
    type: "icon-add"
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "ActorStyleDialog.addStyle"
  })))))))), React.createElement("footer", {
    className: $_137.footer
  }, React.createElement($_13_index.d, {
    type: "primary",
    onClick: te
  }, $_710$a$formatMessage({
    id: "save"
  }))), s && React.createElement($_796_index.a, {
    onCancel: ne,
    onOk: te
  }))
})
export { kM }
