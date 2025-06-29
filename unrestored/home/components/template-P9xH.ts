"use strict";

/* harmony export (binding) */
export { WorkItemView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_antd__ from "antd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_classnames__ from "classnames";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_classnames___default from "classnames";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ from "react-css-modules";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default from "react-css-modules";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__cfg__ from "../cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__utils__ from "./utils-jnIn";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__Input__ from "./Input-YqO9";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__ from "../Work/model/interface-hC2z";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__sensorsData__ from "../sensorsData-yI2H";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var projectNameRegEx = /^[a-zA-Z0-9\u4E00-\u9FFF ()（）\-_']*$/;
var styles = require("./unnamed-Goqg");
var WorkItemView = function (_React$Component) {
  _inherits(WorkItemView, _React$Component);
  function WorkItemView(props) {
    _classCallCheck(this, WorkItemView);
    var _this = _possibleConstructorReturn(this, (WorkItemView.__proto__ || Object.getPrototypeOf(WorkItemView)).call(this, props));
    _this.state = {
      dropdownVisible: false,
      inputVisible: false
    };
    _this.handleQuitCollWork = _this.handleQuitCollWork.bind(_this);
    _this.handleRenameWork = _this.handleRenameWork.bind(_this);
    _this.handleWorkTitleBlur = _this.handleWorkTitleBlur.bind(_this);
    _this.handleDeleteWork = _this.handleDeleteWork.bind(_this);
    _this.handleDropdownVisibleChange = _this.handleDropdownVisibleChange.bind(_this);
    return _this;
  }
  _createClass(WorkItemView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleDropdownVisibleChange",
    value: function handleDropdownVisibleChange(visible) {
      this.setState({
        dropdownVisible: visible
      });
    }
  }, {
    key: "handleSelfOpenWork",
    value: function handleSelfOpenWork() {
      if (this.props.workType !== __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE) {
        var _config = Object(__WEBPACK_IMPORTED_MODULE_4__cfg__.config)(),
          cocoEditorUrl = _config.cocoEditorUrl;
        var id = this.props.item.work_id;
        var role = this.props.item.role;
        // 打开作品埋点
        Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport)('OpenWork', {
          workId: id,
          // 上报 1:我创建的 2:我参与的
          workType: role === 1 ? 1 : 2,
          // workName: projectName,
          isSuccess: true,
          failReason: ''
        });
        window.open(cocoEditorUrl + "?workId=" + id, '_self');
      }
    }
  }, {
    key: "handleOpenWork",
    value: function handleOpenWork() {
      var _config2 = Object(__WEBPACK_IMPORTED_MODULE_4__cfg__.config)(),
        cocoEditorUrl = _config2.cocoEditorUrl;
      this.setState({
        dropdownVisible: false
      });
      var id = this.props.item.work_id;
      var role = this.props.item.role;
      setTimeout(function () {
        // 打开作品埋点
        Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport)('OpenWork', {
          workId: id,
          // 上报 1:我创建的 2:我参与的
          workType: role === 1 ? 1 : 2,
          // workName: projectName,
          isSuccess: true,
          failReason: ''
        });
        window.open(cocoEditorUrl + "?workId=" + id, Date.now().toString());
      }, 10);
    }
  }, {
    key: "handleRenameWork",
    value: function handleRenameWork() {
      var _this2 = this;
      this.setState({
        inputVisible: true,
        dropdownVisible: false
      }, function () {
        if (_this2.inputRef) {
          _this2.inputRef.focus();
          _this2.inputRef.select();
        }
      });
    }
    // 退出协作
  }, {
    key: "handleQuitCollWork",
    value: function handleQuitCollWork() {
      var _this3 = this;
      var id = this.props.item.work_id;
      var _props = this.props,
        userInfo = _props.userInfo,
        workType = _props.workType;
      if (userInfo) {
        this.props.setConfirmDialogInfoAction({
          visible: true,
          isDangerous: true,
          title: "\u662F\u5426\u9000\u51FA\u201C" + this.props.item.name + "\u201D\u534F\u4F5C\uFF1F",
          content: '退出后, 该作品将不在作品管理页中显示',
          onConfirm: function onConfirm() {
            return _this3.props.quitCollWorkAction({
              id: id,
              userId: userInfo.id,
              workType: workType
            });
          }
        });
      }
      this.setState({
        dropdownVisible: false
      });
    }
    // 删除作品到回收站
  }, {
    key: "handleDeleteWork",
    value: function handleDeleteWork() {
      var id = this.props.item.work_id;
      this.props.deleteWorkAction({
        id: id,
        workType: this.props.workType,
        callback: this.props.callback
      });
      this.setState({
        dropdownVisible: false
      });
    }
    // 彻底删除作品
  }, {
    key: "handleAgainDeleteWork",
    value: function handleAgainDeleteWork() {
      var id = this.props.item.work_id;
      this.props.againDeleteWorkAction(id);
    }
    // 从回收站恢复作品
  }, {
    key: "handleRecoverDeletedWork",
    value: function handleRecoverDeletedWork() {
      var id = this.props.item.work_id;
      this.props.recoverDeleteWorkAction({
        id: id,
        callback: this.props.callback
      });
    }
  }, {
    key: "handleWorkTitleBlur",
    value: function handleWorkTitleBlur(value) {
      var id = this.props.item.work_id;
      if (value && value !== this.props.item.name) {
        this.props.renameWorkAction({
          id: id,
          name: value,
          workType: this.props.workType
        });
      }
      this.setState({
        inputVisible: false
      });
    }
    // 双击作品名称 重命名
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick() {
      var _this4 = this;
      var workType = this.props.workType;
      if (workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.HOME || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.CREATE) {
        this.setState({
          inputVisible: true
        }, function () {
          if (_this4.inputRef) {
            _this4.inputRef.focus();
            _this4.inputRef.select();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _state = this.state,
        dropdownVisible = _state.dropdownVisible,
        inputVisible = _state.inputVisible;
      var _props2 = this.props,
        item = _props2.item,
        workType = _props2.workType;
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'workItem'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default('workImage', item.cover_url && item.preview_url && 'cover'),
        onClick: function onClick() {
          return _this5.handleSelfOpenWork();
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'image',
        style: {
          backgroundImage: "url(" + (item.cover_url || item.preview_url) + ")"
        }
      }), (item.is_coll_work || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.COLL) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'workType'
      }, item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
        type: 'icon-star',
        styleName: 'icon'
      }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
        styleName: 'workTypeText'
      }, "\u534F\u4F5C")), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'workDelete',
        onClick: function onClick(e) {
          e.preventDefault();
          _this5.handleAgainDeleteWork();
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
        type: 'icon-delete'
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'workName'
      }, !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'name',
        onDoubleClick: function onDoubleClick() {
          return _this5.handleDoubleClick();
        }
      }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__Input__.default, {
        styleName: inputVisible ? 'inputVisible' : 'inputHidden',
        ref: function ref(e) {
          return _this5.inputRef = e;
        },
        defaultValue: item.name || '',
        isTrimmed: true,
        placeholder: "\u8BF7\u8F93\u5165\u4F5C\u54C1\u540D\u79F0",
        rules: [{
          rule: projectNameRegEx
        }],
        maxLength: 20,
        onBlur: this.handleWorkTitleBlur
      }), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.DELETE ? __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'recoverBtn',
        onClick: function onClick() {
          return _this5.handleRecoverDeletedWork();
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
        type: 'icon-recover'
      })) : __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__.Dropdown, {
        overlay: __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdown'
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdownItem',
          onClick: function onClick() {
            return _this5.handleOpenWork();
          }
        }, "\u65B0\u6807\u7B7E\u9875\u6253\u5F00"), item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdownItem',
          onClick: function onClick() {
            return _this5.handleRenameWork();
          }
        }, "\u91CD\u547D\u540D"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdownItem',
          onClick: function onClick() {
            return _this5.handleDeleteWork();
          }
        }, "\u5220\u9664")), (item.is_coll_work && item.role === 2 || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__.EWorkType.COLL) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: 'dropdownItem',
          onClick: function onClick() {
            return _this5.handleQuitCollWork();
          }
        }, "\u9000\u51FA\u534F\u4F5C")),
        onVisibleChange: this.handleDropdownVisibleChange,
        visible: dropdownVisible,
        trigger: ['click']
      }, inputVisible ? __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null) : __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'moreBtn'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__IconFont__.default, {
        type: 'icon-more'
      })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'workTime'
      }, Object(__WEBPACK_IMPORTED_MODULE_6__utils__.formatTimestamp)(item.updated_at || item.update_time)));
    }
  }]);
  return WorkItemView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
WorkItemView = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, {
  allowMultiple: true
})], WorkItemView);

/***/