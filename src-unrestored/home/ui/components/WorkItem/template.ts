/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：P9xH
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate, projectNameRegEx } from "../../../../../unrestored/home/components/template-P9xH__part-0"
import * as __WEBPACK_IMPORTED_MODULE_9__sensorsData__ from "../../../../../unrestored/home/sensorsData-yI2H"
import * as __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__ from "../../routes/Work/model/interface"
import * as __WEBPACK_IMPORTED_MODULE_7__Input__ from "../Input"
import * as __WEBPACK_IMPORTED_MODULE_6__utils__ from "../../../../../unrestored/home/components/utils-jnIn"
import * as __WEBPACK_IMPORTED_MODULE_5__IconFont__ from "../../../../../unrestored/home/components/IconFont-zVV7"
import * as __WEBPACK_IMPORTED_MODULE_4__cfg__ from "../../../../../unrestored/home/cfg-dpNx"
import * as __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ from "react-css-modules"
import __WEBPACK_IMPORTED_MODULE_2_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_1_antd__ from "antd"
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
import * as styles from "./styles.module.css"
var WorkItemView = function (_React$Component) {
  _inherits(WorkItemView, _React$Component)
  function WorkItemView(props) {
    _classCallCheck(this, WorkItemView)
    var _this = _possibleConstructorReturn(this, (WorkItemView.__proto__ || Object.getPrototypeOf(WorkItemView)).call(this, props))
    _this.state = {
      dropdownVisible: false,
      inputVisible: false
    }
    _this.handleQuitCollWork = _this.handleQuitCollWork.bind(_this)
    _this.handleRenameWork = _this.handleRenameWork.bind(_this)
    _this.handleWorkTitleBlur = _this.handleWorkTitleBlur.bind(_this)
    _this.handleDeleteWork = _this.handleDeleteWork.bind(_this)
    _this.handleDropdownVisibleChange = _this.handleDropdownVisibleChange.bind(_this)
    return _this
  }
  _createClass(WorkItemView, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
      //
      }
    }, {
      key: "handleDropdownVisibleChange",
      value: function handleDropdownVisibleChange(visible) {
        this.setState({
          dropdownVisible: visible
        })
      }
    }, {
      key: "handleSelfOpenWork",
      value: function handleSelfOpenWork() {
        if (this.props.workType !== __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE) {
          var _config = __WEBPACK_IMPORTED_MODULE_4__cfg__.config()
          var cocoEditorUrl = _config.cocoEditorUrl
          var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
          var role = this.props.item.role
          // 打开作品埋点
          __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("OpenWork", {
            workId: this$props$item$work_id,
            // 上报 1:我创建的 2:我参与的
            workType: role === 1 ? 1 : 2,
            // workName: projectName,
            isSuccess: true,
            failReason: ""
          })
          window.open(cocoEditorUrl + "?workId=" + this$props$item$work_id, "_self")
        }
      }
    }, {
      key: "handleOpenWork",
      value: function handleOpenWork() {
        var _config2 = __WEBPACK_IMPORTED_MODULE_4__cfg__.config()
        var cocoEditorUrl = _config2.cocoEditorUrl
        this.setState({
          dropdownVisible: false
        })
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        var role = this.props.item.role
        setTimeout(function () {
        // 打开作品埋点
          __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("OpenWork", {
            workId: this$props$item$work_id,
            // 上报 1:我创建的 2:我参与的
            workType: role === 1 ? 1 : 2,
            // workName: projectName,
            isSuccess: true,
            failReason: ""
          })
          window.open(cocoEditorUrl + "?workId=" + this$props$item$work_id, Date.now().toString())
        }, 10)
      }
    }, {
      key: "handleRenameWork",
      value: function handleRenameWork() {
        var _this2 = this
        this.setState({
          inputVisible: true,
          dropdownVisible: false
        }, function () {
          if (_this2.inputRef) {
            _this2.inputRef.focus()
            _this2.inputRef.select()
          }
        })
      }
    // 退出协作
    }, {
      key: "handleQuitCollWork",
      value: function handleQuitCollWork() {
        var _this3 = this
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        var _props = this.props
        var userInfo = _props.userInfo
        var workType = _props.workType
        if (userInfo) {
          this.props.setConfirmDialogInfoAction({
            visible: true,
            isDangerous: true,
            title: "是否退出“" + this.props.item.name + "”协作？",
            content: "退出后, 该作品将不在作品管理页中显示",
            onConfirm: function onConfirm() {
              return _this3.props.quitCollWorkAction({
                id: this$props$item$work_id,
                userId: userInfo.id,
                workType: workType
              })
            }
          })
        }
        this.setState({
          dropdownVisible: false
        })
      }
    // 删除作品到回收站
    }, {
      key: "handleDeleteWork",
      value: function handleDeleteWork() {
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        this.props.deleteWorkAction({
          id: this$props$item$work_id,
          workType: this.props.workType,
          callback: this.props.callback
        })
        this.setState({
          dropdownVisible: false
        })
      }
    // 彻底删除作品
    }, {
      key: "handleAgainDeleteWork",
      value: function handleAgainDeleteWork() {
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        this.props.againDeleteWorkAction(this$props$item$work_id)
      }
    // 从回收站恢复作品
    }, {
      key: "handleRecoverDeletedWork",
      value: function handleRecoverDeletedWork() {
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        this.props.recoverDeleteWorkAction({
          id: this$props$item$work_id,
          callback: this.props.callback
        })
      }
    }, {
      key: "handleWorkTitleBlur",
      value: function handleWorkTitleBlur(value) {
        var /* [auto-meaningful-name] */this$props$item$work_id = this.props.item.work_id
        if (value && value !== this.props.item.name) {
          this.props.renameWorkAction({
            id: this$props$item$work_id,
            name: value,
            workType: this.props.workType
          })
        }
        this.setState({
          inputVisible: false
        })
      }
    // 双击作品名称 重命名
    }, {
      key: "handleDoubleClick",
      value: function handleDoubleClick() {
        var _this4 = this
        var workType = this.props.workType
        if (workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.HOME || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.CREATE) {
          this.setState({
            inputVisible: true
          }, function () {
            if (_this4.inputRef) {
              _this4.inputRef.focus()
              _this4.inputRef.select()
            }
          })
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this
        var _state = this.state
        var dropdownVisible = _state.dropdownVisible
        var inputVisible = _state.inputVisible
        var _props2 = this.props
        var item = _props2.item
        var workType = _props2.workType
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workItem"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default("workImage", item.cover_url && item.preview_url && "cover"),
          onClick: function onClick() {
            return _this5.handleSelfOpenWork()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "image",
          style: {
            backgroundImage: "url(" + (item.cover_url || item.preview_url) + ")"
          }
        }), (item.is_coll_work || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.COLL) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workType"
        }, item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-star",
          styleName: "icon"
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "workTypeText"
        }, "协作")), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workDelete",
          onClick: function onClick(e) {
            e.preventDefault()
            _this5.handleAgainDeleteWork()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-delete"
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workName"
        }, !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "name",
          onDoubleClick: function onDoubleClick() {
            return _this5.handleDoubleClick()
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__Input__.default, {
          styleName: inputVisible ? "inputVisible" : "inputHidden",
          ref: function ref(e) {
            return _this5.inputRef = e
          },
          defaultValue: item.name || "",
          isTrimmed: true,
          placeholder: "请输入作品名称",
          rules: [
            {
              rule: projectNameRegEx
            }
          ],
          maxLength: 20,
          onBlur: this.handleWorkTitleBlur
        }), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE ? __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "recoverBtn",
          onClick: function onClick() {
            return _this5.handleRecoverDeletedWork()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-recover"
        })) : __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__.Dropdown, {
          overlay: __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "dropdown"
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: function onClick() {
              return _this5.handleOpenWork()
            }
          }, "新标签页打开"), item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: function onClick() {
              return _this5.handleRenameWork()
            }
          }, "重命名"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: function onClick() {
              return _this5.handleDeleteWork()
            }
          }, "删除")), (item.is_coll_work && item.role === 2 || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.COLL) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "dropdownItem",
            onClick: function onClick() {
              return _this5.handleQuitCollWork()
            }
          }, "退出协作")),
          onVisibleChange: this.handleDropdownVisibleChange,
          visible: dropdownVisible,
          trigger: ["click"]
        }, inputVisible ? __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null) : __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "moreBtn"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
          type: "icon-more"
        })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workTime"
        }, __WEBPACK_IMPORTED_MODULE_6__utils__.formatTimestamp(item.updated_at || item.update_time)))
      }
    }
  ])
  return WorkItemView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
WorkItemView = __decorate([
  __WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, {
    allowMultiple: true
  })
], WorkItemView)

/***/
export { WorkItemView }
