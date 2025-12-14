/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：G1ZB__part-1
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate, __awaiter } from "./template-G1ZB__part-0"
import * as __WEBPACK_IMPORTED_MODULE_8__utils_url__ from "../utils/url-hVAD"
import * as __WEBPACK_IMPORTED_MODULE_7__sensorsData__ from "../sensorsData-yI2H"
import * as __WEBPACK_IMPORTED_MODULE_6__api_login__ from "./api/login-yshM"
import * as __WEBPACK_IMPORTED_MODULE_5__IconFont__ from "./IconFont-zVV7"
import __WEBPACK_IMPORTED_MODULE_4_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_3_antd__ from "antd"
import * as __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ from "react-css-modules"
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
import * as styles from "./styles-ZbQe"
var serviceAgreementList = [
  {
    label: "用户协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html"
  }, {
    label: "隐私协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html"
  }, {
    label: "儿童隐私保护协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html"
  }, {
    label: "个人信息保护政策摘要",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html"
  }, {
    label: "个人信息收集清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html"
  }, {
    label: "个人信息共享清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html"
  }
]
var HeaderView = function (_React$Component) {
  _inherits(HeaderView, _React$Component)
  function HeaderView(props) {
    _classCallCheck(this, HeaderView)
    var _this = _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).call(this, props))
    _this.state = {
      helpDropdownVisible: false
    }
    _this.handleShowCourse = _this.handleShowCourse.bind(_this)
    _this.handleHelpDropdownVisibleChange = _this.handleHelpDropdownVisibleChange.bind(_this)
    _this.handleLogin = _this.handleLogin.bind(_this)
    _this.handleLoginOut = _this.handleLoginOut.bind(_this)
    return _this
  }
  _createClass(HeaderView, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "handleLogin",
      value: function handleLogin() {
        this.props.setSignDialogVisibleAction(true)
        // 点击登录按钮埋点
        __WEBPACK_IMPORTED_MODULE_7__sensorsData__.sensorsCustomReport("LoginButtonClick")
      }
    }, {
      key: "handleLoginOut",
      value: function handleLoginOut() {
        return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return __WEBPACK_IMPORTED_MODULE_6__api_login__.loginOut()
                case 3:
                  this.props.asyncSetUserInfoAction(null)
                  _context.next = 9
                  break
                case 6:
                  _context.prev = 6
                  _context.t0 = _context["catch"](0)
                  console.error("logout ", _context.t0)
                case 9:
                case "end":
                  return _context.stop()
              }
            }
          }, _callee, this, [[0, 6]])
        }))
      }
    }, {
      key: "handleHelpDropdownVisibleChange",
      value: function handleHelpDropdownVisibleChange(visible) {
        this.setState({
          helpDropdownVisible: visible
        })
      }
    }, {
      key: "handleShowCourse",
      value: function handleShowCourse() {
        var _props = this.props
        var courseListVisible = _props.courseListVisible
        var userInfo = _props.userInfo
        if (!userInfo || userInfo.isNewUser || courseListVisible) {
          return
        }
        this.props.setCourseDialogVisibleAction(true)
        this.setState({
          helpDropdownVisible: false
        })
      }
    }, {
      key: "handleDocument",
      value: function handleDocument() {
        window.open("https://codemao-guide.yuque.com/bfiekm/sbo5kh", Date.now().toString())
      }
    }, {
      key: "handleFeedback",
      value: function handleFeedback() {
        window.open("https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd", Date.now().toString())
      }
    }, {
      key: "renderUserInfo",
      value: function renderUserInfo(userInfo) {
        if (userInfo) {
          return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__.Dropdown, {
            overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
              styleName: "dropdown"
            }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
              styleName: "dropdownItem",
              onClick: function onClick() {
                return window.open(__WEBPACK_IMPORTED_MODULE_8__utils_url__.getCommunityAccountSettingUrl(), "_blank")
              }
            }, "账号设置"), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__.Dropdown, {
              overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
                styleName: "dropdown agreementDropdown"
              }, serviceAgreementList.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
                  key: index,
                  styleName: "dropdownItem",
                  onClick: function onClick() {
                    return window.open(item.link, "_blank")
                  }
                }, item.label)
              })),
              placement: "topLeft"
            }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
              styleName: "dropdownItem"
            }, "服务协议", __WEBPACK_IMPORTED_MODULE_1_react__.createElement("span", {
              className: styles.subMenuArrow
            }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
              type: "icon-dropdown-down"
            })))), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
              styleName: "dropdownItem",
              onClick: this.handleLoginOut
            }, "退出登录")),
            trigger: ["click"]
          }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "userInfo"
          }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "userAvatar",
            style: {
              backgroundImage: "url(" + userInfo.avatar + ")"
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
            type: "icon-dropdown-down",
            styleName: "iconDown"
          }))))
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "userLogin",
          onClick: this.handleLogin
        }, "登录")
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props
        var courseListVisible = _props2.courseListVisible
        var userInfo = _props2.userInfo
        var helpDropdownVisible = this.state.helpDropdownVisible
        return __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "header"
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "left"
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("img", {
          src: "https://creation.codemao.cn/coco/home/logo.png",
          styleName: "logoImg",
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "iconItem"
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__.Dropdown, {
          overlay: __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdown"
          }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default("dropdownItem", (!userInfo || userInfo.isNewUser || courseListVisible) && "disabled"),
            onClick: this.handleShowCourse
          }, "入门教程"), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: this.handleDocument
          }, "帮助文档")),
          onVisibleChange: this.handleHelpDropdownVisibleChange,
          visible: helpDropdownVisible,
          trigger: ["click"]
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-help"
        }), __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-dropdown-down",
          styleName: "iconDown"
        })))), __WEBPACK_IMPORTED_MODULE_1_react__.createElement("div", {
          styleName: "iconItem",
          onClick: this.handleFeedback
        }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-feedback"
        }))), this.renderUserInfo(userInfo))
      }
    }
  ])
  return HeaderView
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component)
HeaderView = __decorate([
  __WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, {
    allowMultiple: true
  })
], HeaderView)

/***/
export { HeaderView }
