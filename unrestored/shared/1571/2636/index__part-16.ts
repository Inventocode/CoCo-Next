/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-16
 */

"use strict"

var Tt
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1036_index from "./1036/index"
import /* [auto-meaningful-name] */_$_1036_index from "./1036/index"
import * as /* [auto-meaningful-name] */$_1508_index from "./1508/index"
import * as /* [auto-meaningful-name] */$_356 from "./356"
import /* [auto-meaningful-name] */_$_ from "./356"
var Gt = _React.memo(function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = _React.useState(false)
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = _React.useState("")
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = $_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */g$isPackaging = g.isPackaging
  var /* [auto-meaningful-name] */g$packageQrCodeVisible = g.packageQrCodeVisible
  var /* [auto-meaningful-name] */g$packageUrl = g.packageUrl
  var /* [auto-meaningful-name] */g$packageInfo = g.packageInfo
  var /* [auto-meaningful-name] */g$packageInfo$startTimeTamp = g$packageInfo.startTimeTamp
  var /* [auto-meaningful-name] */g$packageInfo$expireTime = g$packageInfo.expireTime
  var A = $_16_index.e(function (e) {
    return e.project.id
  })
  var j = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  _React.useEffect(function () {
    if (g$packageUrl && g$packageInfo) {
      var e = te.B()
      var t = "".concat(e, "/download/?url=").concat(encodeURIComponent(g$packageUrl || ""), "&icon=").concat(encodeURIComponent(g$packageInfo.apkIcon || ""), "&name=").concat(g$packageInfo.apkName || "", "&projectId=").concat(A, "&version=").concat(g$packageInfo.version, "&expireTime=").concat(g$packageInfo.expireTime, "&startTimeTamp=").concat(g$packageInfo.startTimeTamp)
      l(t)
      m(false)
    }
  }, [g$packageUrl, g$packageInfo, A])
  _React.useEffect(function () {
    if (Tt) {
      clearInterval(Tt)
    }
    if ("number" === typeof g$packageInfo$expireTime && "number" === typeof g$packageInfo$startTimeTamp) {
      Tt = setInterval(function () {
        if (Date.now() - g$packageInfo$startTimeTamp > 1e3 * g$packageInfo$expireTime) {
          m(true)
          if (Tt) {
            clearInterval(Tt)
          }
        }
      }, 2e3)
    }
  }, [g$packageInfo$startTimeTamp, g$packageInfo$expireTime])
  var R = function () {
    if (Tt) {
      clearInterval(Tt)
    }
    e($$_$$_$$_$$_src_shared_events_messagesWrapper.Mi(false))
    e($$_$$_$$_$$_src_shared_events_messagesWrapper.Li(true))
  }
  var k = function () {
    var n = O.a(RegeneratorRuntime.mark(function n() {
      return RegeneratorRuntime.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (j) {
                n.next = 3
                break
              }
              e($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
              return n.abrupt("return")
            case 3:
              if (!g$isPackaging) {
                n.next = 6
                break
              }
              e($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return n.abrupt("return")
            case 6:
              n.prev = 6
              n.next = 9
              return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(e, $$_$$_$$_$$_src_shared_events_messagesWrapper.Vf())
            case 9:
              R()
              n.next = 14
              break
            case 12:
              n.prev = 12
              n.t0 = n.catch(6)
            case 14:
            case "end":
              return n.stop()
          }
        }
      }, n, null, [[6, 12]])
    }))
    return function () {
      return n.apply(this, arguments)
    }
  }()
  return React.createElement($_13_index.f, {
    visible: g$packageQrCodeVisible,
    className: _$_.packageQrCodeDialog,
    withPortal: true,
    onClose: R
  }, React.createElement("div", {
    className: _$_.packageInfo
  }, React.createElement("img", {
    src: g$packageInfo.apkIcon,
    className: _$_.packageIcon,
    alt: ""
  }), React.createElement("div", null, React.createElement("div", {
    className: _$_.packageTitle
  }, g$packageInfo.apkName), React.createElement($_1508_index.CopyToClipboard, {
    text: "com.codemao.coco.apk_".concat(A),
    onCopy: function () {
      e($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        message: $_710_index$a$formatMessage({
          id: "package.appidCopied"
        }),
        showPrefixIcon: false
      }))
    }
  }, React.createElement("div", {
    className: N(_$_.packageInfoItem, _$_.packageAppId)
  }, "APP ID：com.codemao.coco.apk_", A, React.createElement($_13_index.j, {
    type: "icon-copy",
    className: _$_.copyIcon
  }))), React.createElement("div", {
    className: _$_.packageInfoItem
  }, "Version Code：", g$packageInfo.version))), React.createElement("div", {
    className: _$_.qrCodeWrapper
  }, g$packageUrl && React.createElement("div", {
    className: _$_.qrcode
  }, React.createElement(_$_1036_index, {
    value: c,
    size: 200,
    imageSettings: {
      width: 54,
      height: 54,
      src: "https://static.bcmcdn.com/coco/image/share-dialog/qrlogo.png"
    }
  }), p && React.createElement("div", {
    className: _$_.mask,
    onClick: k
  }, "二维码已过期", React.createElement("br", null), "若需扫码，请重新打包")), React.createElement("p", {
    className: _$_.apkText
  }, " ", $_710_index$a$formatMessage({
    id: "package.apkText"
  })), g$packageInfo.expireTime && React.createElement("p", {
    className: _$_.apkText
  }, "（二维码仅", Math.round(g$packageInfo.expireTime / 60), "分钟内有效）")), React.createElement("div", {
    className: _$_.footerWrapper
  }, React.createElement("div", {
    className: _$_.footerBtn,
    onClick: function () {
      if (g$packageUrl) {
        document.body.querySelectorAll(".".concat(_$_.iframeDownloader)).forEach(function (e) {
          return e.remove()
        })
        var e = document.createElement("iframe")
        e.src = g$packageUrl
        e.classList.add(_$_.iframeDownloader)
        document.body.appendChild(e)
        i(true)
        Download = "download"
        $_141_index.a("InstallShareApk", {
          workId: A,
          apkName: g$packageInfo.apkName || "",
          isScanCode: false,
          isCopyApkLink: "copyLink" === Download,
          isDownloadPackage: "download" === Download
        })
      }
      var /* [auto-meaningful-name] */Download
    }
  }, React.createElement($_13_index.j, {
    type: "icon-package-download",
    className: _$_.qrBtn
  }), React.createElement("p", null, $_710_index$a$formatMessage(o ? {
    id: "package.downloaded"
  } : {
    id: "package.download"
  })))))
})
export { Gt }
