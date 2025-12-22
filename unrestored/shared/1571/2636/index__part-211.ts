/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-211
 */

"use strict"

var tP
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_385 from "./385"
import /* [auto-meaningful-name] */_$_ from "./385"
import * as /* [auto-meaningful-name] */$_1209 from "./1209"
import /* [auto-meaningful-name] */_$_2 from "./1209"
import * as /* [auto-meaningful-name] */$_1535 from "./1535"
import /* [auto-meaningful-name] */_$_3 from "./1535"
import * as /* [auto-meaningful-name] */$_1536 from "./1536"
import /* [auto-meaningful-name] */_$_4 from "./1536"
import * as /* [auto-meaningful-name] */$_1537 from "./1537"
import /* [auto-meaningful-name] */_$_5 from "./1537"
!function (e) {
  e[e.STEP0 = 0] = "STEP0"
  e[e.STEP1 = 1] = "STEP1"
  e[e.STEP2 = 2] = "STEP2"
  e[e.STEP3 = 3] = "STEP3"
}(tP || (tP = {}))
var _P = _React.memo(function () {
  var e = _React.useState(tP.STEP0)
  var t = $_10_index.a(e, 2)
  var n = t[0]
  var r = t[1]
  var o = $_16_index.e(function (e) {
    return e.common.cloudDBPublishDialogInfo
  })
  var /* [auto-meaningful-name] */o$visible = o.visible
  var /* [auto-meaningful-name] */o$type = o.type
  var /* [auto-meaningful-name] */o$callback = o.callback
  var c = "share" === o$type ? "分享" : "打包"
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var u = $_16_index.d()
  _React.useEffect(function () {
    if (o$visible) {
      localStorage.setItem("cloudDBPublishGuide", "true")
    }
  }, [o$visible])
  var d = function () {
    r(tP.STEP0)
    u($$_$$_$$_$$_src_shared_events_messagesWrapper.kj(false, "", function () {}))
  }
  return React.createElement($_13_index.f, {
    visible: o$visible,
    className: _$_.cloudDBPublishDialog,
    onClose: d
  }, React.createElement("div", {
    className: _$_.container
  }, n !== tP.STEP0 && React.createElement("div", {
    className: _$_.jump,
    onClick: function () {
      if (o$callback) {
        o$callback()
      }
      d()
    }
  }, $_710_index$a$formatMessage({
    id: "cloudDBPublishDialog.jump"
  })), React.createElement("div", {
    className: _$_.imgArea
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("img", {
          src: _$_2,
          alt: ""
        })
      case tP.STEP1:
        return React.createElement("img", {
          src: _$_3,
          alt: ""
        })
      case tP.STEP2:
        return React.createElement("img", {
          src: _$_4,
          alt: ""
        })
      case tP.STEP3:
        return React.createElement("img", {
          src: _$_5,
          alt: ""
        })
      default:
        return React.createElement("img", {
          src: _$_2,
          alt: ""
        })
    }
  }()), React.createElement("div", {
    className: _$_.orderArea
  }, function () {
    if (n !== tP.STEP0) {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: N(_$_.round, n === tP.STEP1 && _$_.selected)
      }), React.createElement("div", {
        className: N(_$_.round, n === tP.STEP2 && _$_.selected)
      }), React.createElement("div", {
        className: N(_$_.round, n === tP.STEP3 && _$_.selected)
      }))
    }
  }()), React.createElement("div", {
    className: _$_.textArea
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("span", null, "恭喜你第一次", c, "了使用云数据库的作品，有一些小知识需要了解下")
      case tP.STEP1:
        return React.createElement(React.Fragment, null, React.createElement("span", null, "之前编辑器内使用的数据是"), React.createElement("span", {
          className: _$_.yellow
        }, "【测试数据】"))
      case tP.STEP2:
        return React.createElement(React.Fragment, null, React.createElement("div", null, c, "后会自动生成一套新的数据库，"), React.createElement("div", null, "其他小伙伴使用应用时产生的数据将存储在", React.createElement("span", {
          className: _$_.blue
        }, "【正式数据】"), "中"))
      case tP.STEP3:
        return React.createElement(React.Fragment, null, React.createElement("span", null, "两套数据互不干扰，你可以在"), React.createElement("span", {
          className: _$_.purple
        }, " 导航栏>数据管理 "), React.createElement("span", null, "中管理和修改所有数据"))
      default:
        return React.createElement("span", null)
    }
  }()), React.createElement("div", {
    className: _$_.btn
  }, React.createElement($_13_index.d, {
    type: "primary",
    onClick: function () {
      if (n !== tP.STEP0) {
        if (n !== tP.STEP1) {
          if (n !== tP.STEP2) {
            return n === tP.STEP3 ? (o$callback(), void d()) : undefined
          }
          r(tP.STEP3)
        } else {
          r(tP.STEP2)
        }
      } else {
        r(tP.STEP1)
      }
    }
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("span", null, $_710_index$a$formatMessage({
          id: "cloudDBPublishDialog.know"
        }))
      case tP.STEP1:
      case tP.STEP2:
        return React.createElement("span", null, $_710_index$a$formatMessage({
          id: "cloudDBPublishDialog.then"
        }))
      case tP.STEP3:
        return React.createElement("span", null, "去", c)
      default:
        return React.createElement("span", null)
    }
  }()))))
})
export { _P }
