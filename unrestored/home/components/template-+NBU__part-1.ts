/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：+NBU__part-1
 */

"use strict"

/* harmony export (binding) */
import { "+NBU__part-0___createClass" as _createClass, "+NBU__part-0___classCallCheck" as _classCallCheck, "+NBU__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "+NBU__part-0___inherits" as _inherits, "+NBU__part-0____decorate" as __decorate } from "./template-+NBU__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__sensorsData__ from "../sensorsData-yI2H"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_qrcode_react__ from "../qrcode/react-3Cpi"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_antd__ from "antd"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import * as styles from "./styles-aJKZ"
var PreviewTemplateView = function (_React$Component) {
  _inherits(PreviewTemplateView, _React$Component)
  function PreviewTemplateView(props) {
    _classCallCheck(this, PreviewTemplateView)
    var _this = _possibleConstructorReturn(this, (PreviewTemplateView.__proto__ || Object.getPrototypeOf(PreviewTemplateView)).call(this, props))
    _this.templateColor = ["blue", "yellow", "purple"]
    _this.handleTemplateClick = _this.handleTemplateClick.bind(_this)
    _this.handleQuitPreview = _this.handleQuitPreview.bind(_this)
    _this.handleRefreshIframe = _this.handleRefreshIframe.bind(_this)
    return _this
  }
  _createClass(PreviewTemplateView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleQuitPreview",
    value: function handleQuitPreview() {
      this.props.setPreviewTemplateInfoAction({
        id: -1,
        visible: false
      })
    }
  }, {
    key: "handleTemplateClick",
    value: function handleTemplateClick(id, name) {
      this.props.setPreviewTemplateInfoAction({
        id: id,
        visible: true
      })
      __WEBPACK_IMPORTED_MODULE_7__sensorsData__.sensorsCustomReport("TemplateClick", {
        template_name: name
      })
    }
  }, {
    key: "handleRefreshIframe",
    value: function handleRefreshIframe() {
      var iframe = document.getElementById("player")
      iframe.src = iframe.src
    }
  }, {
    key: "handleOpenTemplate",
    value: function handleOpenTemplate(id) {
      var _config = __WEBPACK_IMPORTED_MODULE_5__cfg__.config()
      var cocoEditorUrl = _config.cocoEditorUrl
      window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString())
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this
      var _props = this.props
      var templateList = _props.templateList
      var previewTemplateInfo = _props.previewTemplateInfo
      var template = templateList.find(function (item) {
        return item.id === previewTemplateInfo.id
      })
      if (!previewTemplateInfo.visible || !template) {
        return null
      }
      // 新人模版
      var list = templateList.filter(function (item) {
        return item.type === 2
      }).slice(0, 3).sort(function (a, b) {
        return b.ordinal - a.ordinal
      })
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "previewTemplate"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "templateList"
      }, list.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          key: item.id,
          onClick: function onClick() {
            return _this2.handleTemplateClick(item.id, item.name)
          },
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("templateItem", _this2.templateColor[index], item.id === template.id && "active")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "imageBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "image",
          style: {
            backgroundImage: "url(" + item.preview_url2 + ")"
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: item.gif_url,
          alt: item.name,
          styleName: "gif"
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "name"
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "desc"
        }, item.description, " "))
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "quitPreviewBtn",
        onClick: this.handleQuitPreview
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-quit",
        styleName: "icon"
      }), "退出预览"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "previewBtnBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "btnItem",
        onClick: this.handleRefreshIframe
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-refresh"
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__.Dropdown, {
        placement: "top",
        overlay: __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "dropdown"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "qrcodeImage"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_qrcode_react__.default, {
          value: template.player_url,
          size: 150,
          level: "M",
          imageSettings: {
            width: 40,
            height: 40,
            src: "https://static.codemao.cn/coco/image/share-dialog/qrlogo.png"
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, "手机扫码，立即体验"))
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "btnItem"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-qrcode"
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "howBtn",
        onClick: function onClick() {
          return _this2.handleOpenTemplate(template.id)
        }
      }, "去看看怎么做", __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__IconFont__.default, {
        type: "icon-right",
        styleName: "icon"
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("iframe", {
        src: template.player_url,
        id: "player",
        width: "100%",
        height: "100%",
        frameBorder: 0
      }))
    }
  }])
  return PreviewTemplateView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
PreviewTemplateView = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules__(styles, {
  allowMultiple: true
})], PreviewTemplateView)

/***/
export { PreviewTemplateView as "+NBU__part-1__PreviewTemplateView" }
