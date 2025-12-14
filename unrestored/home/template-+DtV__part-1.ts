/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：+DtV__part-1
 */

"use strict"

/* harmony export (binding) */
import { _createClass, _classCallCheck, _possibleConstructorReturn, _inherits, __decorate } from "./template-+DtV__part-0"
import * as __WEBPACK_IMPORTED_MODULE_9__sensorsData__ from "./sensorsData-yI2H"
import * as __WEBPACK_IMPORTED_MODULE_8__Work_model_interface__ from "./Work/model/interface-hC2z"
import * as __WEBPACK_IMPORTED_MODULE_7__components_IconFont__ from "./components/IconFont-zVV7"
import * as __WEBPACK_IMPORTED_MODULE_6__components_WorkItem__ from "./components/WorkItem-FSbX"
import * as __WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__ from "./components/TemplateItem-eseu"
import * as __WEBPACK_IMPORTED_MODULE_4__cfg__ from "./cfg-dpNx"
import * as __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ from "react-css-modules"
import * as __WEBPACK_IMPORTED_MODULE_2_antd__ from "antd"
import __WEBPACK_IMPORTED_MODULE_1_classnames___default from "classnames"
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
import * as styles from "./styles-4_1v"
var HomeView = function (_React$Component) {
  _inherits(HomeView, _React$Component)
  function HomeView(props) {
    _classCallCheck(this, HomeView)
    var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, props))
    _this.templateColor = ["blue", "yellow", "purple"]
    _this.state = {
      isScrolled: false,
      showCourseAnimation: false
    }
    _this.handleHomeScroll = _this.handleHomeScroll.bind(_this)
    _this.handleHideCourseList = _this.handleHideCourseList.bind(_this)
    return _this
  }
  _createClass(HomeView, [
    {
      key: "handleHomeScroll",
      value: function handleHomeScroll(e) {
        var scrollTop = e.currentTarget.scrollTop
        this.setState({
          isScrolled: scrollTop > 0
        })
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.getBannerListAction()
        this.props.getTopicListAction()
        if (this.props.userInfo) {
          this.props.getWorkListAction()
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.userInfo !== nextProps.userInfo && this.homePageRef) {
          this.homePageRef.scrollTo(0, 0)
        }
      }
    }, {
      key: "handleNavToCocoEditor",
      value: function handleNavToCocoEditor() {
        var _config = __WEBPACK_IMPORTED_MODULE_4__cfg__.config()
        var cocoEditorUrl = _config.cocoEditorUrl
        window.open(cocoEditorUrl, Date.now().toString())
      }
    }, {
      key: "handlePrevBanner",
      value: function handlePrevBanner() {
        this.bannerRef.prev()
      }
    }, {
      key: "handleNextBanner",
      value: function handleNextBanner() {
        this.bannerRef.next()
      }
    }, {
      key: "handleBannerClick",
      value: function handleBannerClick(url, id) {
        __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("BannerClick", {
          banner_id: id
        })
        window.open(url, Date.now().toString())
      }
    }, {
      key: "handleTopicClick",
      value: function handleTopicClick(url, id) {
        __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("TopicClick", {
          topic_id: id
        })
        window.open(url, Date.now().toString())
      }
    }, {
      key: "handleHideCourseList",
      value: function handleHideCourseList() {
        this.props.setCourseListVisibleAction(false)
        this.props.setCommonToastAction({
          visible: true,
          message: "视频已收起，可在帮助中再次打开"
        })
        localStorage.setItem("homeCourseListVisible", "hide")
        // 收起入门教程样式
        this.setState({
          showCourseAnimation: true
        })
      }
    }, {
      key: "handlePlayCourse",
      value: function handlePlayCourse(id) {
        this.props.setPlayCourseInfoAction({
          id: id,
          visible: true
        })
        __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("CourseClick", {
          course_id: id
        })
      }
    }, {
      key: "handlePreviewTemplate",
      value: function handlePreviewTemplate(id, name) {
        this.props.setPreviewTemplateInfoAction({
          id: id,
          visible: true
        })
        __WEBPACK_IMPORTED_MODULE_9__sensorsData__.sensorsCustomReport("TemplateClick", {
          template_name: name
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
      key: "render",
      value: function render() {
        var _this2 = this
        var _props = this.props
        var bannerList = _props.bannerList
        var topicList = _props.topicList
        var courseList = _props.courseList
        var workList = _props.workList
        var courseListVisible = _props.courseListVisible
        var templateList = _props.templateList
        var userInfo = _props.userInfo
        var userInfoFetchDone = _props.userInfoFetchDone
        var _state = this.state
        var isScrolled = _state.isScrolled
        var showCourseAnimation = _state.showCourseAnimation
        var newUserTemplateList = templateList.filter(function (item) {
          return item.type === 2
        }).slice(0, 3).sort(function (a, b) {
          return b.ordinal - a.ordinal
        })
        if (!userInfoFetchDone) {
          return null
        }
        if (bannerList.length === 0 && topicList.length === 0 && courseList.length === 0) {
          return null
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "home",
          onScroll: this.handleHomeScroll,
          ref: function ref(e) {
            return _this2.homePageRef = e
          }
        }, userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("createBox", isScrolled && "shadow")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "createItem",
          onClick: this.handleNavToCocoEditor
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-create-app",
          styleName: "createIcon"
        }), "应用创作"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("createItem", "disabled")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-create-web",
          styleName: "createIcon"
        }), "网页搭建", __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", {
          styleName: "tips"
        }, "（敬请期待）"))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("center", (!userInfo || userInfo.isNewUser) && "newUser")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("bannerBox", bannerList.length === 0 && "hide")
        }, bannerList.length > 1 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "bannerPrev",
          onClick: function onClick() {
            return _this2.handlePrevBanner()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-next"
        })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "bannerNext",
          onClick: function onClick() {
            return _this2.handleNextBanner()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-next"
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__.Carousel, {
          autoplay: true,
          speed: 800,
          autoplaySpeed: 5000,
          pauseOnHover: false,
          ref: function ref(e) {
            return _this2.bannerRef = e
          }
        }, bannerList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            onClick: function onClick() {
              return _this2.handleBannerClick(item.target_url, item.id)
            },
            styleName: "bannerItem",
            key: item.id
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "image",
            style: {
              backgroundImage: "url(" + item.preview_url + ")"
            }
          }))
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("noticeBox", topicList.length === 0 && "hide")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__.Carousel, {
          autoplay: true,
          vertical: true,
          dots: false,
          autoplaySpeed: 5000,
          pauseOnHover: false
        }, topicList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "noticeItem",
            key: item.id,
            onClick: function onClick() {
              return _this2.handleTopicClick(item.target_url, item.id)
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "noticeChar"
          }, "#"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, item.title))
        }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("courseBox", userInfo && !userInfo.isNewUser && courseListVisible === false && !showCourseAnimation && "hidden", showCourseAnimation && "animation")
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "titleBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h2", {
          styleName: "title"
        }, "新手入门"), userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "finish"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("checkbox", courseListVisible === false && "checked"),
          onClick: this.handleHideCourseList
        }, courseListVisible === false && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-selected"
        })), "我已看完")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "courseList"
        }, courseList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "courseItem",
            key: item.id,
            onClick: function onClick() {
              return _this2.handlePlayCourse(item.id)
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "courseImage"
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "image",
            style: {
              backgroundImage: "url(" + item.preview + ")"
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "mask"
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "playBox"
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
            type: "icon-play"
          })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "courseName"
          }, item.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "courseDesc"
          }, item.course_intro))
        }))), (!userInfo || userInfo.isNewUser) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "newUserTemplate"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateTitle"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-template",
          styleName: "titleIcon"
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h2", {
          styleName: "title"
        }, "从模版开始探索")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateList"
        }, newUserTemplateList.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            key: item.id,
            styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("templateItem", _this2.templateColor[index]),
            onClick: function onClick() {
              return _this2.handlePreviewTemplate(item.id, item.name)
            }
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
          }, item.description, " "), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
            styleName: "previewBtn"
          }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
            type: "icon-play"
          }), "玩一玩"))
        }))), userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_0_react__.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "myWork"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "titleBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-lately-work",
          styleName: "titleIcon"
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h2", {
          styleName: "title"
        }, "最近作品")), workList.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workList"
        }, workList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_WorkItem__.default, {
            key: item.work_id,
            item: item,
            workType: __WEBPACK_IMPORTED_MODULE_8__Work_model_interface__.EWorkType.HOME,
            callback: _this2.props.getWorkListAction
          })
        })), workList.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "workListNoData"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, "你还未创作任何作品"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "createBtn",
          onClick: this.handleNavToCocoEditor
        }, "去创作 ", __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-button-arrow",
          styleName: "icon"
        })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "oldUserTemplate"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "titleBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateTitle"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-template",
          styleName: "titleIcon"
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h2", {
          styleName: "title"
        }, "从模版开始探索")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "pageBtn"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default("btnItem"),
          onClick: function onClick() {
            return _this2.prevTemplate()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-next",
          styleName: "prev"
        })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "btnItem",
          onClick: function onClick() {
            return _this2.nextTemplate()
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-next"
        })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "templateList",
          ref: function ref(e) {
            return _this2.templateListRef = e
          }
        }, templateList.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__.default, {
            key: item.id,
            item: item
          })
        }))))), (!userInfo || userInfo.isNewUser) && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "startWork"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "title"
        }, "无尽的想法，从这里开始创造。"), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "startBtn",
          onClick: this.handleNavToCocoEditor
        }, "开始创作", __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_IconFont__.default, {
          type: "icon-button-arrow",
          styleName: "startIcon"
        }))))
      }
    }
  ])
  return HomeView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
HomeView = __decorate([
  __WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, {
    allowMultiple: true
  })
], HomeView)

/***/
export { HomeView }
