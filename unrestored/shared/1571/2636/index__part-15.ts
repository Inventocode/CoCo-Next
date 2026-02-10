/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-15
 */

"use strict"

import { Ge } from "./index__part-9"
import * as Et from "./9"
import * as te from "../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as Z from "./97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_197_index from "./197/index"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as /* [auto-meaningful-name] */$_467 from "./467"
import * as /* [auto-meaningful-name] */$_199 from "./199"
import /* [auto-meaningful-name] */$_1991 from "./199"
var kt = ["https://static.bcmcdn.com/appcraft/package/icon01.png", "https://static.bcmcdn.com/appcraft/package/icon02.png", "https://static.bcmcdn.com/appcraft/package/icon03.png", "https://static.bcmcdn.com/appcraft/package/icon04.png", "https://static.bcmcdn.com/appcraft/package/icon05.png", "https://static.bcmcdn.com/appcraft/package/icon06.png", "https://static.bcmcdn.com/appcraft/package/icon07.png", "https://static.bcmcdn.com/appcraft/package/icon08.png"]
var xt = ["https://static.bcmcdn.com/appcraft/package/splash01.png", "https://static.bcmcdn.com/appcraft/package/splash02.png", "https://static.bcmcdn.com/appcraft/package/splash03.png", "https://static.bcmcdn.com/appcraft/package/splash04.png", "https://static.bcmcdn.com/appcraft/package/splash05.png"]
var Dt = memo(function () {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var t = useDispatch()
  var n = useRef(null)
  var r = useRef(null)
  var o = useRef(null)
  var i = useSelector(function (e) {
    return e.project
  })
  var a = i.id
  var /* [auto-meaningful-name] */i$packageDialogVisible = i.packageDialogVisible
  var /* [auto-meaningful-name] */i$packageInfo = i.packageInfo
  var /* [auto-meaningful-name] */i$packageCompleteVisible = i.packageCompleteVisible
  var /* [auto-meaningful-name] */i$isPackaging = i.isPackaging
  var d = useSelector(function (e) {
    return e.common.saving
  })
  var p = useState(i$packageInfo.apkIcon || "https://static.bcmcdn.com/appcraft/package/icon00.png")
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(i$packageInfo.apkSplash || "https://static.bcmcdn.com/appcraft/package/splash01.png")
  var y = $_10_index.a(b, 2)
  var w = y[0]
  var C = y[1]
  var T = useState(40)
  var A = $_10_index.a(T, 2)
  var j = A[0]
  var R = A[1]
  var k = useState("")
  var x = $_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = $_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = useState(false)
  var W = $_10_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useState(false)
  var K = $_10_index.a(V, 2)
  var q = K[0]
  var X = K[1]
  var Q = useState(false)
  var J = $_10_index.a(Q, 2)
  var $ = J[0]
  var ne = J[1]
  var re = useState(true)
  var oe = $_10_index.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = function () {
    var n = O.a(RegeneratorRuntime.mark(function n() {
      var /* [auto-meaningful-name] */i$packageInfo$apkName
      var o
      var i
      var s
      var /* [auto-meaningful-name] */n$sent
      var /* [auto-meaningful-name] */n$sent1
      var /* [auto-meaningful-name] */n$sent2
      var /* [auto-meaningful-name] */n$sent3
      var m
      var _
      var v
      var b
      return RegeneratorRuntime.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (!i$isPackaging && !d) {
                n.next = 2
                break
              }
              return n.abrupt("return")
            case 2:
              n.prev = 2
              o = Z.a(a)
              n.next = 6
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(t, $$_$$_$$_$$_src_editor_redux_common_actions.tg({
                isUpdate: o,
                isAutoSave: true,
                isNeedReport: true
              }))
            case 6:
              n.next = 12
              break
            case 8:
              n.prev = 8
              n.t0 = n.catch(2)
              t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
              return n.abrupt("return")
            case 12:
              if (null === (i$packageInfo$apkName = i$packageInfo.apkName) || undefined === i$packageInfo$apkName ? undefined : i$packageInfo$apkName.trim()) {
                n.next = 14
                break
              }
              return n.abrupt("return")
            case 14:
              if (i = g, s = w, g.startsWith("http")) {
                n.next = 31
                break
              }
              n.next = 19
              return te.f(g, "apkIcon.png")
            case 19:
              n$sent = n.sent
              n.prev = 20
              n.next = 23
              return $_197_index.e(n$sent)
            case 23:
              if ((n$sent1 = n.sent).url) {
                i = n$sent1.url
              }
              n.next = 31
              break
            case 27:
              n.prev = 27
              n.t1 = n.catch(20)
              t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "package.uploadIconFailed"
                })
              }))
              throw n.t1
            case 31:
              if (w.startsWith("http")) {
                n.next = 55
                break
              }
              n.next = 34
              return te.f(w, "apkSplash.png")
            case 34:
              n$sent2 = n.sent
              n.prev = 35
              n.next = 38
              return $_197_index.e(n$sent2)
            case 38:
              if (!(n$sent3 = n.sent).url) {
                n.next = 49
                break
              }
              n.next = 42
              return $_467.a(n$sent3.url)
            case 42:
              if (!n.sent) {
                n.next = 47
                break
              }
              s = n$sent3.url
              n.next = 49
              break
            case 47:
              t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "package.checkSplashFailed"
                })
              }))
              return n.abrupt("return")
            case 49:
              n.next = 55
              break
            case 51:
              n.prev = 51
              n.t2 = n.catch(35)
              t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "package.uploadSplashFailed"
                })
              }))
              throw n.t2
            case 55:
              t($$_$$_$$_$$_src_editor_redux_common_actions.Ji({
                apkIcon: i,
                apkSplash: s
              }))
              m = Et.kb()
              _ = 0
              v = Object.values(m)
            case 58:
              if (!(_ < v.length)) {
                n.next = 66
                break
              }
              if ((b = v[_]).cdnUrl && "http" === b.cdnUrl.slice(0, 4)) {
                n.next = 63
                break
              }
              t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "waitForAssetUploading"
                })
              }))
              return n.abrupt("return")
            case 63:
              _++
              n.next = 58
              break
            case 66:
              t($$_$$_$$_$$_src_editor_redux_common_actions.Li(true))
              t($$_$$_$$_$$_src_editor_redux_common_actions.Ki(0))
              $$_$$_$$_$$_src_editor_redux_common_actions.Nf(t, $$_$$_$$_$$_src_editor_redux_common_actions.jg())
            case 69:
            case "end":
              return n.stop()
          }
        }
      }, n, null, [[2, 8], [20, 27], [35, 51]])
    }))
    return function () {
      return n.apply(this, arguments)
    }
  }()
  var ce = function (n) {
    var /* [auto-meaningful-name] */n$target$files
    if (null === (n$target$files = n.target.files) || undefined === n$target$files ? undefined : n$target$files.item(0)) {
      var /* [auto-meaningful-name] */n$target = n.target
      var i = URL.createObjectURL(n.target.files.item(0))
      var a = new FileReader()
      a.onloadend = function () {
        for (var n = new Uint8Array(a.result).subarray(0, 4), r = "", s = 0; s < n.length; s++) {
          r += n[s].toString(16)
        }
        if (["8950", "ffd8", "424d"].find(function (e) {
          return 0 === r.indexOf(e)
        })) {
          v(i)
        } else {
          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            showPrefixIcon: false,
            message: $_710$a$formatMessage({
              id: "package.iconMimeTypeNotSupport"
            }),
            duration: 4e3
          }))
          n$target.value = ""
        }
      }
      a.onerror = function () {
        v(i)
      }
      a.readAsArrayBuffer(n.target.files.item(0))
    }
  }
  var le = function (n) {
    var /* [auto-meaningful-name] */n$target$files
    if (null === (n$target$files = n.target.files) || undefined === n$target$files ? undefined : n$target$files.item(0)) {
      var /* [auto-meaningful-name] */n$target = n.target
      var i = URL.createObjectURL(n.target.files.item(0))
      var a = new FileReader()
      a.onloadend = function () {
        for (var n = new Uint8Array(a.result).subarray(0, 4), r = "", s = 0; s < n.length; s++) {
          r += n[s].toString(16)
        }
        if (["8950", "ffd8", "424d"].find(function (e) {
          return 0 === r.indexOf(e)
        })) {
          C(i)
        } else {
          t($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            showPrefixIcon: false,
            message: $_710$a$formatMessage({
              id: "package.splashMimeTypeNotSupport"
            }),
            duration: 4e3
          }))
          n$target.value = ""
        }
      }
      a.onerror = function () {
        C(i)
      }
      a.readAsArrayBuffer(n.target.files.item(0))
    }
  }
  var ue = function () {
    var /* [auto-meaningful-name] */o$current
    if (!ie) {
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: -108,
          behavior: "smooth"
        })
      }
      ae(true)
    }
  }
  var de = function () {
    var /* [auto-meaningful-name] */o$current
    if (ie) {
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: 108,
          behavior: "smooth"
        })
      }
      ae(false)
    }
  }
  return React.createElement($_13_index.f, {
    visible: i$packageDialogVisible,
    withPortal: true,
    className: $_1991.packageEditorContainer,
    title: React.createElement("h3", null, $_710$a$formatMessage({
      id: "package.packageProjectDialogTitle"
    })),
    footer: function () {
      var /* [auto-meaningful-name] */i$packageInfo$apkName
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: $_1991.plateFormTips
      }, React.createElement($_13_index.j, {
        type: "icon-android-fill"
      }), $_710$a$formatMessage({
        id: "package.plateFormTips"
      })), React.createElement("div", {
        className: $_1991.footer
      }, React.createElement($_13_index.d, {
        type: "primary",
        disabled: (!(null === (i$packageInfo$apkName = i$packageInfo.apkName) || undefined === i$packageInfo$apkName ? undefined : i$packageInfo$apkName.trim()) || !g || !!D) && !i$isPackaging && !d,
        onClick: se
      }, d || i$isPackaging ? React.createElement(Ge, null) : React.createElement("span", null, $_710$a$formatMessage({
        id: "package"
      })))))
    }(),
    onClose: function () {
      if (i$packageCompleteVisible) {
        t($$_$$_$$_$$_src_editor_redux_common_actions.Li(true))
      }
      t($$_$$_$$_$$_src_editor_redux_common_actions.Ii(false))
    }
  }, React.createElement("div", {
    className: $_1991.packageContent
  }, React.createElement("div", {
    className: $_1991.leftContent
  }, React.createElement("div", {
    className: $_1991.packageProjectTitle
  }, React.createElement("div", {
    className: $_1991.packageItemLabel
  }, $_710$a$formatMessage({
    id: "package.projectTitle"
  })), React.createElement($_13_index.k, {
    type: "text",
    defaultValue: i$packageInfo.apkName,
    onBlur: function (e, n) {
      t($$_$$_$$_$$_src_editor_redux_common_actions.Ji({
        apkName: n.target.value
      }))
    },
    onChange: function (e) {
      var t
      var n = (null === (t = e.match(/[\u4e00-\u9fa5]/gi)) || undefined === t ? undefined : t.length) || 0
      R(40 - n)
      if (e.length > j) {
        M("package.apkNameMaxLengthTips")
      } else {
        M("")
      }
    },
    warning: !!D
  }), React.createElement("div", {
    className: $_1991.warningTips
  }, D ? $_710$a$formatMessage({
    id: D
  }) : "")), React.createElement("div", {
    className: $_1991.packageItemLabel
  }, $_710$a$formatMessage({
    id: "package.projectIcon"
  })), React.createElement("div", {
    className: $_1991.packageIconBox,
    onMouseEnter: function () {
      if (!U) {
        F(true)
      }
    },
    onBlur: function () {
      F(false)
    },
    onMouseLeave: function () {
      F(false)
    }
  }, React.createElement("img", {
    className: $_1991.packageIcon,
    src: g,
    alt: ""
  }), React.createElement($_1213.a, {
    content: React.createElement("div", {
      className: $_1991.iconPopover
    }, React.createElement("div", null, $_710$a$formatMessage({
      id: "package.recommendProjectIcon"
    })), React.createElement("div", {
      className: $_1991.packageIconWrapper
    }, kt.map(function (e) {
      return React.createElement("img", {
        className: N($_1991.packageIconItem, g === e && $_1991.active),
        src: e,
        alt: "DEFAULT_ICON",
        key: e,
        onClick: function () {
          return v(e)
        }
      })
    })), React.createElement("input", {
      style: {
        display: "none"
      },
      ref: n,
      type: "file",
      alt: "upload image",
      accept: $_133.d,
      onChange: ce
    }), React.createElement("div", {
      className: $_1991.uploadIconBtn,
      onClick: function () {
        if (n.current) {
          n.current.click()
        }
      }
    }, React.createElement($_13_index.j, {
      type: "icon-upload-image"
    }), $_710$a$formatMessage({
      id: "uploadFileByLocal"
    })), React.createElement("div", {
      className: $_1991.iconSizeTips
    }, $_710$a$formatMessage({
      id: "package.projectIconSizeTips"
    }))),
    placement: "rightTop",
    trigger: "click",
    visible: U,
    overlayClassName: $_1991.imagePopover,
    onVisibleChange: function (e) {
      H(e)
      if (e) {
        F(false)
      }
    }
  }, React.createElement("div", {
    className: N($_1991.cover, B && $_1991.visible)
  }, React.createElement("div", {
    className: $_1991.replaceBtn
  }, $_710$a$formatMessage({
    id: "package.replace"
  })))))), React.createElement("div", {
    className: $_1991.rightContent
  }, React.createElement("div", {
    className: $_1991.packageItemLabel
  }, $_710$a$formatMessage({
    id: "package.projectSplashImage"
  })), React.createElement("div", {
    className: $_1991.splashImageBox,
    onMouseEnter: function () {
      if (!$) {
        X(true)
      }
    },
    onBlur: function () {
      X(false)
    },
    onMouseLeave: function () {
      X(false)
    }
  }, React.createElement("img", {
    className: $_1991.splashImage,
    src: w,
    alt: ""
  }), !/splash\d+/.test(w) && React.createElement("img", {
    className: $_1991.signImage,
    src: "https://static.bcmcdn.com/appcraft/package/logo-sign.png",
    alt: "coco"
  }), React.createElement($_1213.a, {
    content: React.createElement("div", {
      className: $_1991.splashPopover
    }, React.createElement("div", {
      className: $_1991.splashTitle
    }, React.createElement("span", null, $_710$a$formatMessage({
      id: "package.recommendSplashImage"
    })), React.createElement("div", {
      className: $_1991.pageBtnBox
    }, React.createElement("div", {
      onClick: ue,
      className: N($_1991.pageBtn, $_1991.prev, ie && $_1991.disable)
    }, React.createElement($_13_index.j, {
      type: "icon-arrow-down"
    })), React.createElement("div", {
      onClick: de,
      className: N($_1991.pageBtn, $_1991.next, !ie && $_1991.disable)
    }, React.createElement($_13_index.j, {
      type: "icon-arrow-down"
    })))), React.createElement("div", {
      className: $_1991.packageSplashWrapper,
      ref: o
    }, xt.map(function (e) {
      return React.createElement("img", {
        className: N($_1991.packageIconItem, w === e && $_1991.active),
        src: e,
        alt: "DEFAULT_ICON",
        key: e,
        onClick: function () {
          return C(e)
        }
      })
    })), React.createElement("input", {
      style: {
        display: "none"
      },
      ref: r,
      type: "file",
      alt: "upload image",
      accept: $_133.e,
      onChange: le
    }), React.createElement("div", {
      className: $_1991.uploadIconBtn,
      onClick: function () {
        if (r.current) {
          r.current.click()
        }
      }
    }, React.createElement($_13_index.j, {
      type: "icon-upload-image"
    }), $_710$a$formatMessage({
      id: "uploadFileByLocal"
    })), React.createElement("div", {
      className: $_1991.iconSizeTips
    }, $_710$a$formatMessage({
      id: "package.projectSplashSizeTips"
    }))),
    placement: "rightTop",
    trigger: "click",
    visible: $,
    overlayClassName: $_1991.imagePopover,
    onVisibleChange: function (e) {
      ne(e)
      if (e) {
        X(false)
      }
    }
  }, React.createElement("div", {
    className: N($_1991.cover, q && $_1991.visible)
  }, React.createElement("div", {
    className: $_1991.replaceBtn
  }, $_710$a$formatMessage({
    id: "package.replace"
  }))))))))
})
export { Dt }
