/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-141
 */

"use strict"

import { Ge } from "./index__part-9"
import { Sy } from "./index__part-106"
import { fE, hE, mE, gE, _E } from "./index__part-107"
import { EE, OE, wE } from "./index__part-108"
import { SE, jE, NE, RE, kE } from "./index__part-109"
import { ME } from "./index__part-110"
import { BE, GE } from "./index__part-111"
import { HE, VE } from "./index__part-112"
import { qE, QE } from "./index__part-113"
import { tO, nO, rO, oO, sO } from "./index__part-114"
import { dO } from "./index__part-115"
import { mO, gO, _O } from "./index__part-116"
import { EO, OO, CO } from "./index__part-117"
import { jO, NO, RO, kO } from "./index__part-118"
import { MO, LO, BO } from "./index__part-119"
import { WO } from "./index__part-120"
import { KO, qO, XO } from "./index__part-121"
import { JO } from "./index__part-122"
import { tw } from "./index__part-123"
import { ow, iw } from "./index__part-124"
import { lw, pw } from "./index__part-125"
import { hw, mw } from "./index__part-126"
import { _w, vw, bw } from "./index__part-127"
import { Sw } from "./index__part-128"
import { Pw } from "./index__part-130"
import { Gw } from "./index__part-131"
import { Hw } from "./index__part-132"
import { Yw } from "./index__part-133"
import { Xw } from "./index__part-134"
import { Jw } from "./index__part-135"
import { tC, rC } from "./index__part-136"
import { uC } from "./index__part-137"
import { hC } from "./index__part-138"
import { _C } from "./index__part-139"
import { SC, AC, IC, jC } from "./index__part-140"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_567 from "./567"
import /* [auto-meaningful-name] */_$_ from "./567"
function kC() {
  return localStorage.getItem("lvmi_access_token")
}
function xC() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
  return new Promise(function (t) {
    return setTimeout(t, e)
  })
}
function DC() {
  return MC.apply(this, arguments)
}
function MC() {
  return (MC = O.a(RegeneratorRuntime.mark(function e() {
    var t
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = 0
          case 1:
            if (!(t < 30)) {
              e.next = 15
              break
            }
            if (e.prev = 2, !kC()) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            e.next = 10
            break
          case 7:
            e.prev = 7
            e.t0 = e.catch(2)
            console.warn(e.t0)
          case 10:
            e.next = 12
            return xC(2e3)
          case 12:
            t++
            e.next = 1
            break
          case 15:
            throw new Error("timeout")
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 7]])
  }))).apply(this, arguments)
}
function LC() {
  return PC.apply(this, arguments)
}
function PC() {
  return (PC = O.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = localStorage.getItem("lvmi_refresh_token")
            e.next = 3
            return Axios.post("https://open-cn.aqara.com/v3.0/open/access_token?client_id=".concat(AC, "&client_secret=").concat(IC, "&redirect_uri=&grant_type=refresh_token&refresh_token=").concat(t), {}, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            })
          case 3:
            if (!(e$sent = e.sent).data.access_token) {
              e.next = 9
              break
            }
            localStorage.setItem("lvmi_access_token", e$sent.data.access_token)
            localStorage.setItem("lvmi_refresh_token", e$sent.data.refresh_token)
            e.next = 13
            break
          case 9:
            localStorage.removeItem("lvmi_access_token")
            jC()
            e.next = 13
            return DC()
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var BC = _React.memo(function (e) {
  var t = $_16_index.d()
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var r = undefined === e$keyName ? "token" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var a = _React.useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = e$getValue(r)
  function d() {
    return (d = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!c) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (e.prev = 2, l(true), kC()) {
                e.next = 10
                break
              }
              jC()
              e.next = 8
              return DC()
            case 8:
              e.next = 12
              break
            case 10:
              e.next = 12
              return LC()
            case 12:
              if (e$onChange) {
                e$onChange(r, localStorage.getItem("lvmi_access_token"))
              }
              l(false)
              e.next = 20
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(2)
              console.error(e.t0)
              l(false)
            case 20:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[2, 16]])
    }))).apply(this, arguments)
  }
  function p() {
    return (p = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e$onChange) {
                e$onChange(r, "")
              }
              t($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: "已取消授权",
                type: "info"
              }))
            case 2:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N(_$_.formItemWrapper, _$_.aqaraAuth, u && _$_.connected),
    label: u ? "已授权 绿米" : "未授权 绿米"
  }, u ? React.createElement("div", {
    className: _$_.connect,
    onClick: function () {
      return p.apply(this, arguments)
    }
  }, React.createElement("span", {
    className: _$_.text
  }, "取消授权")) : React.createElement("div", {
    className: N(_$_.connect, c && _$_.connecting),
    onClick: function () {
      return d.apply(this, arguments)
    }
  }, React.createElement("span", {
    className: _$_.icon
  }, React.createElement(Ge, {
    stroke: "#847da4"
  })), React.createElement("span", {
    className: _$_.text
  }, "开始授权")))
})
var FC = {
  Align: HE,
  TextInput: Sy,
  InputNumber: fE,
  Color: gE,
  VisibleSwitch: hE,
  DisabledSwitch: mE,
  InputMode: EE,
  InputSizeType: OE,
  InputTextGroup: wE,
  InputSettingGroup: SE,
  InputBackground: jE,
  Coordinate: RE,
  Size: QE,
  TextArea: kE,
  FontFamily: ME,
  BackgroundColor: _E,
  HorizontalAlign: BE,
  VerticalAlign: GE,
  ButtonSizeType: nO,
  ButtonTextGroup: rO,
  ButtonIconGroup: oO,
  ButtonBackground: sO,
  ButtonMode: tO,
  ChangeImage: NE,
  WidgetTitle: VE,
  Headline: qE,
  Options: dO,
  RadioMode: mO,
  RadioSizeType: gO,
  CheckboxSizeType: _O,
  SliderDirection: RO,
  SwitchMode: EO,
  SwitchSizeType: OO,
  SwitchBackground: CO,
  SliderMode: jO,
  SliderRange: NO,
  NumberInputRow: kO,
  DegreeInputRow: MO,
  FlipInputRow: LO,
  ScaleInputRow: BO,
  StyleEditorSwitch: WO,
  AudioChangeSoundFile: KO,
  AudioVolume: qO,
  AudioRate: XO,
  LocalStorageFields: JO,
  HttpBody: tw,
  HttpHeader: ow,
  HttpParams: iw,
  ListNewDataSource: pw,
  ListViewerDataSource: lw,
  ListViewerStyleTemplate: hw,
  OptionSwitch: mw,
  PreviewImage: _w,
  Select: vw,
  HelpUrl: bw,
  CloudDbList: Sw,
  AntSwitch: Pw,
  WidgetOpacity: Gw,
  TextWidgetTextGroup: Hw,
  TableData: Yw,
  RichTextEditor: Xw,
  NumberSlider: Jw,
  BrushDrawProcess: tC,
  BrushPenColor: rC,
  DictFields: uC,
  TableFields: hC,
  WarningFields: _C,
  BluetoothConnect: SC,
  AqaraAuth: BC
}
export { FC }
