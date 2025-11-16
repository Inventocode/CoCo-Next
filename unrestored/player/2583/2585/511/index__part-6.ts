/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-6
 */

"use strict"

import { "511__part-5__tt" as tt } from "./index__part-5"
var et
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_189 from "../../../../shared/1531/2584/189"
import /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_75_index from "../../../../shared/1531/2584/75/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_15 from "../../../../shared/1531/2584/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_2629 from "../../../../shared/1531/2584/38/2629"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_233_324 from "../../../../shared/1531/2584/233/324"
import * as /* [auto-meaningful-name] */$_138 from "./138"
import /* [auto-meaningful-name] */_$_ from "./138"
var /* [auto-meaningful-name] */COCO_PLAYER_DIALOG = "COCO_PLAYER_DIALOG"
!function (t) {
  t.MESSAGE = "MESSAGE"
  t.SELECT = "SELECT"
  t.PROMPT = "PROMPT"
}(et || (et = {}))
var at = {
  style: $$_$$_$$_$$_shared_1531_2584_189.b.styleA,
  currentDialogId: "",
  dialogArr: [],
  dialogPropMap: new Map(),
  addDialog: function (t) {
    var e = $$_$$_$$_$$_shared_1531_2584_38_2629.a()
    this.dialogArr.push(e)
    this.dialogPropMap.set(e, t)
    if (1 === this.dialogArr.length) {
      var n = this.dialogArr[0]
      this.showDialog(n)
    } else {
      var r = this.dialogArr[this.dialogArr.length - 1]
      this.showDialog(r)
    }
    return e
  },
  showDialog: function (t) {
    var e = this.dialogPropMap.get(t)
    if (e) {
      switch (e.type) {
        case et.MESSAGE:
          this._message(e)
          break
        case et.SELECT:
          this._select(e)
          break
        case et.PROMPT:
          this._prompt(e)
      }
    }
  },
  setStyle: function (t) {
    at.style = t
  },
  setThemeColor: function (t) {
    var e = $$_$$_$$_$$_shared_1531_2584_15.hb(t, .4)
    var n = $$_$$_$$_$$_shared_1531_2584_15.hb(t, .04)
    var r = $$_$$_$$_$$_shared_1531_2584_15.ib(t, .3)
    var i = Color(t).toString()
    document.documentElement.style.setProperty("--dialog-theme-color", i)
    document.documentElement.style.setProperty("--dialog-theme-color-medium", e)
    document.documentElement.style.setProperty("--dialog-theme-color-light", n)
    document.documentElement.style.setProperty("--dialog-theme-color-dark", r)
  },
  getContainer: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_CONTAINER")
    if (!t) {
      (t = document.createElement("div")).id = "COCO_PLAYER_DIALOG_CONTAINER"
      var e = document.getElementById($$_$$_$$_$$_shared_1531_2584_233_324.a)
      if (e) {
        e.appendChild(t)
      }
    }
    t.style.opacity = "1"
    t.className = _$_.container
    return t
  },
  cancel: function (t) {
    var e = at.dialogArr[0]
    var n = at.dialogPropMap.get(e)
    if (!(null === n || undefined === n)) {
      n.onCancel(t)
    }
    at.close()
  },
  confirm: function (t) {
    var e = at.dialogArr[0]
    var n = at.dialogPropMap.get(e)
    if (!(null === n || undefined === n)) {
      n.onConfirm(t)
    }
    at.close()
  },
  submit: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_INPUT")
    var e = null === t || undefined === t ? undefined : t.value
    var n = at.dialogArr[0]
    var r = at.dialogPropMap.get(n)
    if (!(null === r || undefined === r)) {
      r.onConfirm(e)
    }
    at.close()
  },
  close: function () {
    var t = this
    var e = this.dialogArr.shift()
    if (e) {
      this.dialogPropMap.delete(e)
    }
    var n = at.getContainer()
    if (this.dialogArr.length) {
      tt(COCO_PLAYER_DIALOG, function () {
        $$_$$_$$_$$_shared_1531_2584_75_index.unmountComponentAtNode(n)
        var e = t.dialogArr[0]
        t.showDialog(e)
      })
    } else {
      tt(COCO_PLAYER_DIALOG, function () {
        var /* [auto-meaningful-name] */COCO_PLAYER_DIALOG_CONTAINER
        var e
        COCO_PLAYER_DIALOG_CONTAINER = "COCO_PLAYER_DIALOG_CONTAINER"
        e = function () {
          n.classList.remove(_$_.container)
        }
        Animejs.default({
          targets: "#".concat(COCO_PLAYER_DIALOG_CONTAINER),
          opacity: 0,
          duration: 300,
          easing: "linear",
          complete: function () {
            if (e) {
              e()
            }
          }
        })
        $$_$$_$$_$$_shared_1531_2584_75_index.unmountComponentAtNode(n)
      })
    }
  },
  getContentBox: function (t, e, n, r, i, o) {
    var a
    if (t === et.PROMPT) {
      a = !n && !r && !e
    } else {
      var s = Number(!!e) + Number(!!n) + Number(!!r)
      a = 0 === s || 1 === s
    }
    var u = ""
    u = this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? t === et.SELECT ? i ? "346px" : "400px" : "454px" : "472px"
    var c = ""
    c = a ? this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? "39px 0" : "42px 0" : e ? "16px 0" : "24px 0 16px 0"
    return React.createElement("div", {
      style: {
        maxHeight: u,
        padding: c
      },
      className: $$_$$_$$_$$_shared_1531_2584_8(a && _$_.singleElementContentBox, !a && _$_.contentBox)
    }, e && React.createElement("div", {
      style: {
        background: "url(".concat(e, ") no-repeat"),
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: _$_.imageBox
    }), n && React.createElement("p", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.title)
    }, n), r && React.createElement("p", {
      className: _$_.textBox
    }, React.createElement("span", {
      className: _$_.text
    }, r)), t === et.PROMPT && React.createElement("div", {
      className: _$_.inputBox
    }, React.createElement("input", {
      id: "COCO_PLAYER_DIALOG_INPUT",
      className: _$_.dialogInput,
      placeholder: o
    })))
  },
  getButtonBox: function (t, e, n) {
    var r = t === et.MESSAGE ? n || "" : "确定"
    return React.createElement("div", {
      className: _$_.buttonBox
    }, e && React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "取消")
    }, React.createElement("span", null, "取消")), React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.mainButton),
      style: {
        width: this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? e ? "133px" : "100%" : "fit-content"
      },
      onClick: t === et.PROMPT ? this.submit : this.confirm.bind(null, r)
    }, React.createElement("span", null, r)))
  },
  message: function (t, e, n) {
    at.addDialog({
      type: et.MESSAGE,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _message: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$confirmButtonText = t$params.confirmButtonText
    var /* [auto-meaningful-name] */t$params$image = t$params.image
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var s = this.getContainer()
    var u = this.getContentBox(et.MESSAGE, t$params$image, t$params$title, t$params$text, t$params$showCancelButton)
    var c = this.getButtonBox(et.MESSAGE, t$params$showCancelButton, t$params$confirmButtonText)
    var l = React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, u, c)
    $$_$$_$$_$$_shared_1531_2584_75_index.render(l, s)
  },
  select: function (t, e, n) {
    at.addDialog({
      type: et.SELECT,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _select: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$option1 = t$params.option1
    var /* [auto-meaningful-name] */t$params$option2 = t$params.option2
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var s = this.getContainer()
    var u = this.getContentBox(et.SELECT, "", t$params$title, t$params$text, t$params$showCancelButton)
    var c = React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, u, React.createElement("div", {
      className: _$_.optionButtonBox,
      style: {
        height: this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? t$params$showCancelButton ? "174px" : "120px" : "48px",
        justifyContent: this.style !== $$_$$_$$_$$_shared_1531_2584_189.b.styleB || t$params$showCancelButton ? undefined : "flex-end"
      }
    }, t$params$showCancelButton && this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleB && React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, React.createElement("span", null, "取消")), React.createElement("div", null, React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.mainButton),
      onClick: this.confirm.bind(null, t$params$option1)
    }, React.createElement("span", null, t$params$option1)), React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.mainButton),
      onClick: this.confirm.bind(null, t$params$option2)
    }, React.createElement("span", null, t$params$option2))), t$params$showCancelButton && this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA && React.createElement("button", {
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, React.createElement("span", null, "取消"))))
    $$_$$_$$_$$_shared_1531_2584_75_index.render(c, s)
  },
  prompt: function (t, e, n) {
    this.addDialog({
      type: et.PROMPT,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _prompt: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$placeholder = t$params.placeholder
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var a = this.getContainer()
    var s = this.getContentBox(et.PROMPT, "", t$params$title, t$params$text, t$params$showCancelButton, t$params$placeholder)
    var u = this.getButtonBox(et.PROMPT, t$params$showCancelButton)
    var c = React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: $$_$$_$$_$$_shared_1531_2584_8(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, s, u)
    $$_$$_$$_$$_shared_1531_2584_75_index.render(c, a)
  }
}
var st = at
export { st as "511__part-6__st" }
