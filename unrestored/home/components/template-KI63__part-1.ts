/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：KI63__part-1
 */

"use strict"

/* harmony export (binding) */
import { "KI63__part-0___createClass" as _createClass, "KI63__part-0___classCallCheck" as _classCallCheck, "KI63__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "KI63__part-0___inherits" as _inherits, "KI63__part-0____decorate" as __decorate } from "./template-KI63__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__sensorsData__ from "../sensorsData-yI2H"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "../cfg-dpNx"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import * as styles from "./styles-RQs1"
var TemplateItemView = function (_React$Component) {
  _inherits(TemplateItemView, _React$Component)
  function TemplateItemView(props) {
    _classCallCheck(this, TemplateItemView)
    var _this = _possibleConstructorReturn(this, (TemplateItemView.__proto__ || Object.getPrototypeOf(TemplateItemView)).call(this, props))
    _this.state = {
      isNewUser: false
    }
    return _this
  }
  _createClass(TemplateItemView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleTemplateClick",
    value: function handleTemplateClick(id, name) {
      __WEBPACK_IMPORTED_MODULE_3__sensorsData__.sensorsCustomReport("TemplateClick", {
        template_name: name
      })
      var _config = __WEBPACK_IMPORTED_MODULE_2__cfg__.config()
      var cocoEditorUrl = _config.cocoEditorUrl
      window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString())
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this
      var item = this.props.item
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "templateItem",
        onClick: function onClick() {
          return _this2.handleTemplateClick(item.id, item.name)
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "image",
        style: {
          backgroundImage: "url(" + item.preview_url + ")"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
        src: item.gif_url,
        alt: item.name,
        styleName: "gif"
      })))
    }
  }])
  return TemplateItemView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
TemplateItemView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], TemplateItemView)

/***/
export { TemplateItemView as "KI63__part-1__TemplateItemView" }
