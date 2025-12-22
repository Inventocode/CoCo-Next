/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：7CtK__part-1
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate } from "../../../../../unrestored/home/template-7CtK__part-0"
import * as __WEBPACK_IMPORTED_MODULE_8__cfg__ from "../../../../../unrestored/home/cfg-dpNx"
import * as __WEBPACK_IMPORTED_MODULE_7__components_Input__ from "../../../../../unrestored/home/components/Input-YqO9"
import * as __WEBPACK_IMPORTED_MODULE_6__components_IconFont__ from "../../../../../unrestored/home/components/IconFont-zVV7"
import * as __WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__ from "../../../../../unrestored/home/components/TemplateItem-eseu"
import * as __WEBPACK_IMPORTED_MODULE_4__components_WorkItem__ from "../../../../../unrestored/home/components/WorkItem-FSbX"
import * as __WEBPACK_IMPORTED_MODULE_3__model_interface__ from "../../../../../unrestored/home/Work/model/interface-hC2z"
import __WEBPACK_IMPORTED_MODULE_2_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
import * as styles from "./styles.module.css"
var WorkView = function (_React$Component) {
  _inherits(WorkView, _React$Component)
  function WorkView(props) {
    _classCallCheck(this, WorkView)
    var _this = _possibleConstructorReturn(this, (WorkView.__proto__ || Object.getPrototypeOf(WorkView)).call(this, props))
    _this.isCompositionEnd = true
    _this.state = {
      workType: __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE,
      recoverVisible: false,
      keyword: ""
    }
    _this.handleLogin = _this.handleLogin.bind(_this)
    _this.handleCreateScroll = _this.handleCreateScroll.bind(_this)
    _this.handleCollScroll = _this.handleCollScroll.bind(_this)
    _this.handleDeleteScroll = _this.handleDeleteScroll.bind(_this)
    // 作品
    _this.handleSwitchWorkType = _this.handleSwitchWorkType.bind(_this)
    // 搜索
    _this.handleCompositionStart = _this.handleCompositionStart.bind(_this)
    _this.handleCompositionEnd = _this.handleCompositionEnd.bind(_this)
    _this.handleInputChange = _this.handleInputChange.bind(_this)
    _this.handleClearInput = _this.handleClearInput.bind(_this)
    // 回收站
    _this.handleToggleRecoverVisible = _this.handleToggleRecoverVisible.bind(_this)
    _this.handleClearDeletedWork = _this.handleClearDeletedWork.bind(_this)
    return _this
  }
  _createClass(WorkView, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var keyword = this.state.keyword
        var userInfo = this.props.userInfo
        if (userInfo && !userInfo.isNewUser) {
          this.props.getCreateWorkListAction({
            name: keyword,
            offset: 0
          })
          this.props.getCollWorkListAction({
            name: keyword,
            offset: 1
          })
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {}
    }, {
      key: "handleLogin",
      value: function handleLogin() {
        this.props.setSignDialogVisibleAction(true)
      }
    }, {
      key: "handleSwitchWorkType",
      value: function handleSwitchWorkType(workType) {
        var userInfo = this.props.userInfo
        var keyword = this.state.keyword
        this.setState({
          workType: workType
        })
        if (userInfo && !userInfo.isNewUser) {
          this.props.getCreateWorkListAction({
            name: keyword,
            offset: 0
          })
          this.props.getCollWorkListAction({
            name: keyword,
            offset: 1
          })
        }
      }
    }, {
      key: "handleInputChange",
      value: function handleInputChange(keyword) {
        var userInfo = this.props.userInfo
        this.setState({
          keyword: keyword
        })
        if (this.isCompositionEnd && userInfo && !userInfo.isNewUser) {
          if (this.state.workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE) {
            this.props.getCreateWorkListAction({
              name: keyword,
              offset: 0
            })
          } else {
            this.props.getCollWorkListAction({
              name: keyword,
              offset: 1
            })
          }
        }
      }
    }, {
      key: "handleClearInput",
      value: function handleClearInput() {
        this.handleInputChange("")
      }
    }, {
      key: "handleCompositionStart",
      value: function handleCompositionStart() {
        this.isCompositionEnd = false
      }
    }, {
      key: "handleCompositionEnd",
      value: function handleCompositionEnd() {
        this.isCompositionEnd = true
        this.handleInputChange(this.state.keyword)
      }
    }, {
      key: "handleToggleRecoverVisible",
      value: function handleToggleRecoverVisible(recoverVisible) {
        if (recoverVisible) {
          this.props.getDeleteWorkListAction({
            offset: 0
          })
        }
        this.setState({
          recoverVisible: recoverVisible
        })
      }
    }, {
      key: "handleNavToCocoEditor",
      value: function handleNavToCocoEditor() {
        var _config = __WEBPACK_IMPORTED_MODULE_8__cfg__.config()
        var cocoEditorUrl = _config.cocoEditorUrl
        window.open(cocoEditorUrl, Date.now().toString())
      }
    // 清空回收站
    }, {
      key: "handleClearDeletedWork",
      value: function handleClearDeletedWork() {
        if (this.props.deleteWorkList.length === 0) {
          return
        }
        this.props.setConfirmDialogInfoAction({
          visible: true,
          isDangerous: true,
          content: "清空回收站所有作品，删除后无法恢复。",
          onConfirm: this.props.clearDeletedWorkAction
        })
      }
    }, {
      key: "prevTemplate",
      value: function prevTemplate() {
        this.templateListRef.scrollBy({
          left: -240 * 4,
          behavior: "smooth"
        })
      }
    }, {
      key: "nextTemplate",
      value: function nextTemplate() {
        this.templateListRef.scrollBy({
          left: 240 * 4,
          behavior: "smooth"
        })
      }
    }, {
      key: "handleCreateScroll",
      value: function handleCreateScroll(e) {
        var _this2 = this
        var _props = this.props
        var createWorkOffset = _props.createWorkOffset
        var createWorkIsLoaded = _props.createWorkIsLoaded
        var keyword = this.state.keyword
        // 已加载全部数据

        if (createWorkIsLoaded) {
          return
        }
        if (this.scroll_clock) {
          clearTimeout(this.scroll_clock)
        }
        var target = e.target
        this.scroll_clock = setTimeout(function () {
          var wrap_client_height = target.clientHeight
          var wrap_scroll_height = target.scrollHeight
          var wrap_scroll_top = target.scrollTop
          var location = wrap_scroll_height - wrap_scroll_top
          // 倒数第二行时开始拉取分页数据
          var is_scrolled_bottom = Math.abs(location - wrap_client_height) < 800 ? true : false
          if (is_scrolled_bottom && wrap_scroll_top) {
            _this2.props.getCreateWorkListAction({
              name: keyword,
              offset: createWorkOffset + 1
            })
          }
        }, 100)
      }
    }, {
      key: "handleCollScroll",
      value: function handleCollScroll(e) {
        var _this3 = this
        var _props2 = this.props
        var collWorkOffset = _props2.collWorkOffset
        var collWorkIsLoaded = _props2.collWorkIsLoaded
        var keyword = this.state.keyword
        // 已加载全部数据

        if (collWorkIsLoaded) {
          return
        }
        if (this.scroll_clock) {
          clearTimeout(this.scroll_clock)
        }
        var target = e.target
        this.scroll_clock = setTimeout(function () {
          var wrap_client_height = target.clientHeight
          var wrap_scroll_height = target.scrollHeight
          var wrap_scroll_top = target.scrollTop
          var location = wrap_scroll_height - wrap_scroll_top
          // 倒数第二行时开始拉取分页数据
          var is_scrolled_bottom = Math.abs(location - wrap_client_height) < 800 ? true : false
          if (is_scrolled_bottom && wrap_scroll_top) {
            _this3.props.getCollWorkListAction({
              name: keyword,
              offset: collWorkOffset + 1
            })
          }
        }, 100)
      }
    }, {
      key: "handleDeleteScroll",
      value: function handleDeleteScroll(e) {
        var _this4 = this
        var _props3 = this.props
        var deleteWorkOffset = _props3.deleteWorkOffset
        var deleteWorkIsLoaded = _props3.deleteWorkIsLoaded // 已加载全部数据
        if (deleteWorkIsLoaded) {
          return
        }
        if (this.scroll_clock) {
          clearTimeout(this.scroll_clock)
        }
        var target = e.target
        this.scroll_clock = setTimeout(function () {
          var wrap_client_height = target.clientHeight
          var wrap_scroll_height = target.scrollHeight
          var wrap_scroll_top = target.scrollTop
          var location = wrap_scroll_height - wrap_scroll_top
          // 倒数第二行时开始拉取分页数据
          var is_scrolled_bottom = Math.abs(location - wrap_client_height) < 800 ? true : false
          if (is_scrolled_bottom && wrap_scroll_top) {
            _this4.props.getDeleteWorkListAction({
              offset: deleteWorkOffset + 1
            })
          }
        }, 100)
      }
    // 作品类型、搜索
    }, {
      key: "renderWorkFilter",
      value: function renderWorkFilter() {
        var _this5 = this
        var _state = this.state
        var workType = _state.workType
        var keyword = _state.keyword
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workCategory"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workType"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          onClick: function onClick() {
            return _this5.handleSwitchWorkType(__WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE)
          },
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("typeItem", workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE && "active")
        }, "我创建的"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          onClick: function onClick() {
            return _this5.handleSwitchWorkType(__WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.COLL)
          },
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("typeItem", workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.COLL && "active")
        }, "我参与的")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "searchBox"
        }, workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Input__.default, {
          value: keyword,
          ref: function ref(e) {
            return _this5.keywordRef = e
          },
          onClearCallback: this.handleClearInput,
          styleName: "searchInput",
          placeholder: "搜索作品",
          onChange: this.handleInputChange,
          onCompositionStart: this.handleCompositionStart,
          onCompositionEnd: this.handleCompositionEnd,
          clearButtonVisible: !!keyword,
          before: __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
            type: "icon-search"
          })
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "recoverBtn",
          onClick: function onClick() {
            return _this5.handleToggleRecoverVisible(true)
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-deleted",
          styleName: "icon"
        }), "回收站")))
      }
    // 模版
    }, {
      key: "renderTemplate",
      value: function renderTemplate() {
        var _this6 = this
        var _props4 = this.props
        var templateList = _props4.templateList
        var userInfo = _props4.userInfo
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("templateBox", !userInfo && "notLogin")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "titleBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateTitle"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-template",
          styleName: "titleIcon"
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h2", {
          styleName: "title"
        }, "从模版开始探索")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "pageBtn"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("btnItem"),
          onClick: function onClick() {
            return _this6.prevTemplate()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-next",
          styleName: "prev"
        })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "btnItem",
          onClick: function onClick() {
            return _this6.nextTemplate()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-next"
        })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateList",
          ref: function ref(e) {
            return _this6.templateListRef = e
          }
        }, templateList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__.default, {
            key: item.id,
            item: item
          })
        })))
      }
    // 用户作品
    }, {
      key: "renderUserContent",
      value: function renderUserContent() {
        var _this7 = this
        var _state2 = this.state
        var workType = _state2.workType
        var keyword = _state2.keyword
        var _props5 = this.props
        var createWorkList = _props5.createWorkList
        var collWorkList = _props5.collWorkList
        var userInfo = _props5.userInfo
        createWorkList.forEach(function (item) {
          return item.role = 1
        })
        collWorkList.forEach(function (item) {
          return item.role = 2
        })
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "userWorkBox"
        }, this.renderWorkFilter(), workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, createWorkList.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workList",
          onScroll: this.handleCreateScroll
        }, createWorkList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__components_WorkItem__.default, {
            key: item.work_id,
            item: item,
            workType: __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE,
            callback: function callback() {
              return _this7.props.getCreateWorkListAction(keyword)
            }
          })
        })), createWorkList.length == 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("noData", userInfo && !userInfo.isNewUser && "oldUser")
        }, keyword && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: require("../../../../../unrestored/home/unnamed-oet9"),
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "searchTips"
        }, "没有找到作品，换个姿势再搜索一次吧～")), !keyword && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: require("../../../../../unrestored/home/unnamed-RY6P"),
          styleName: "image",
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "noWorkTips"
        }, "你还未创作任何作品"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "createBtn",
          onClick: this.handleNavToCocoEditor
        }, "去创作 ", __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-button-arrow",
          styleName: "icon"
        }))))), workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.COLL && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, collWorkList.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workList",
          onScroll: this.handleCollScroll
        }, collWorkList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__components_WorkItem__.default, {
            key: item.work_id,
            item: item,
            workType: __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.COLL,
            callback: function callback() {
              return _this7.props.getCollWorkListAction(keyword)
            }
          })
        })), collWorkList.length == 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("noData", userInfo && !userInfo.isNewUser && "oldUser")
        }, keyword && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: require("../../../../../unrestored/home/unnamed-oet9"),
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "searchTips"
        }, "没有找到作品，换个姿势再搜索一次吧～")), !keyword && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: require("../../../../../unrestored/home/unnamed-RY6P"),
          styleName: "image",
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "noWorkTips"
        }, "你还没有任何协作作品"))))), userInfo && userInfo.isNewUser && this.renderTemplate())
      }
    // 回收站
    }, {
      key: "renderRecover",
      value: function renderRecover() {
        var _this8 = this
        var _state3 = this.state
        var workType = _state3.workType
        var keyword = _state3.keyword
        var deleteWorkList = this.props.deleteWorkList
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "content"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "recoverHeader"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "backBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "back",
          onClick: function onClick() {
            return _this8.handleToggleRecoverVisible(false)
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-next",
          styleName: "icon"
        }), "返回"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "title"
        }, "回收站")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("clearRecoverBtn", deleteWorkList.length === 0 && "disabled"),
          onClick: this.handleClearDeletedWork
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-clear",
          styleName: "icon"
        }), "清空当前回收站")), deleteWorkList.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "recoverNoData"
        }, "空空如也～"), deleteWorkList.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "recoverList",
          onScroll: this.handleDeleteScroll
        }, deleteWorkList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__components_WorkItem__.default, {
            key: item.work_id,
            item: item,
            workType: __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.DELETE,
            callback: function callback() {
              if (workType === __WEBPACK_IMPORTED_MODULE_3__model_interface__.EWorkType.CREATE) {
                _this8.props.getCreateWorkListAction({
                  name: keyword,
                  offset: 0
                })
              } else {
                _this8.props.getCollWorkListAction({
                  name: keyword,
                  offset: 1
                })
              }
            }
          })
        })))
      }
    }, {
      key: "render",
      value: function render() {
        var recoverVisible = this.state.recoverVisible
        var _props6 = this.props
        var userInfo = _props6.userInfo
        var userInfoFetchDone = _props6.userInfoFetchDone
        if (!userInfoFetchDone) {
          return null
        }
        // 显示回收站
        if (recoverVisible) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "work"
          }, this.renderRecover())
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "work"
        }, userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "createBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "createItem",
          onClick: this.handleNavToCocoEditor
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-create-app",
          styleName: "createIcon"
        }), "应用创作"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("createItem", "disabled")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IconFont__.default, {
          type: "icon-create-web",
          styleName: "createIcon"
        }), "网页搭建", __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "tips"
        }, "（敬请期待）"))), !userInfo && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "loginBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("img", {
          src: require("../../../../../unrestored/home/unnamed-RY6P"),
          styleName: "image",
          alt: ""
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "loginTips"
        }, "你还未登录账号"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "loginBtn",
          onClick: this.handleLogin
        }, "去登录")), this.renderTemplate()), userInfo && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workContent"
        }, this.renderUserContent()))
      }
    }
  ])
  return WorkView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
WorkView = __decorate([
  __WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
    allowMultiple: true
  })
], WorkView)

/***/
export { WorkView }
