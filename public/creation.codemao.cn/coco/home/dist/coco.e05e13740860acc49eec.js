webpackJsonp([3],{

/***/ "+DtV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("nFWT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__ = __webpack_require__("eseu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_WorkItem__ = __webpack_require__("FSbX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Work_model_interface__ = __webpack_require__("hC2z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var styles = __webpack_require__("4/1v");
var HomeView = function (_React$Component) {
    _inherits(HomeView, _React$Component);

    function HomeView(props) {
        _classCallCheck(this, HomeView);

        var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, props));

        _this.templateColor = ['blue', 'yellow', 'purple'];
        _this.state = {
            isScrolled: false,
            showCourseAnimation: false
        };
        _this.handleHomeScroll = _this.handleHomeScroll.bind(_this);
        _this.handleHideCourseList = _this.handleHideCourseList.bind(_this);
        return _this;
    }

    _createClass(HomeView, [{
        key: "handleHomeScroll",
        value: function handleHomeScroll(e) {
            var scrollTop = e.currentTarget.scrollTop;
            this.setState({
                isScrolled: scrollTop > 0
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.getBannerListAction();
            this.props.getTopicListAction();
            if (this.props.userInfo) {
                this.props.getWorkListAction();
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.userInfo !== nextProps.userInfo && this.homePageRef) {
                this.homePageRef.scrollTo(0, 0);
            }
        }
    }, {
        key: "handleNavToCocoEditor",
        value: function handleNavToCocoEditor() {
            var _config = Object(__WEBPACK_IMPORTED_MODULE_4__cfg__["a" /* config */])(),
                cocoEditorUrl = _config.cocoEditorUrl;

            window.open(cocoEditorUrl, Date.now().toString());
        }
    }, {
        key: "handlePrevBanner",
        value: function handlePrevBanner() {
            this.bannerRef.prev();
        }
    }, {
        key: "handleNextBanner",
        value: function handleNextBanner() {
            this.bannerRef.next();
        }
    }, {
        key: "handleBannerClick",
        value: function handleBannerClick(url, id) {
            Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('BannerClick', {
                banner_id: id
            });
            window.open(url, Date.now().toString());
        }
    }, {
        key: "handleTopicClick",
        value: function handleTopicClick(url, id) {
            Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('TopicClick', {
                topic_id: id
            });
            window.open(url, Date.now().toString());
        }
    }, {
        key: "handleHideCourseList",
        value: function handleHideCourseList() {
            this.props.setCourseListVisibleAction(false);
            this.props.setCommonToastAction({
                visible: true,
                message: '视频已收起，可在帮助中再次打开'
            });
            localStorage.setItem('homeCourseListVisible', 'hide');
            // 收起入门教程样式
            this.setState({
                showCourseAnimation: true
            });
        }
    }, {
        key: "handlePlayCourse",
        value: function handlePlayCourse(id) {
            this.props.setPlayCourseInfoAction({
                id: id,
                visible: true
            });
            Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('CourseClick', {
                course_id: id
            });
        }
    }, {
        key: "handlePreviewTemplate",
        value: function handlePreviewTemplate(id, name) {
            this.props.setPreviewTemplateInfoAction({
                id: id,
                visible: true
            });
            Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('TemplateClick', {
                template_name: name
            });
        }
    }, {
        key: "prevTemplate",
        value: function prevTemplate() {
            this.templateListRef.scrollBy({
                left: -240 * 4,
                behavior: 'smooth'
            });
        }
    }, {
        key: "nextTemplate",
        value: function nextTemplate() {
            this.templateListRef.scrollBy({
                left: 240 * 4,
                behavior: 'smooth'
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                bannerList = _props.bannerList,
                topicList = _props.topicList,
                courseList = _props.courseList,
                workList = _props.workList,
                courseListVisible = _props.courseListVisible,
                templateList = _props.templateList,
                userInfo = _props.userInfo,
                userInfoFetchDone = _props.userInfoFetchDone;
            var _state = this.state,
                isScrolled = _state.isScrolled,
                showCourseAnimation = _state.showCourseAnimation;

            var newUserTemplateList = templateList.filter(function (item) {
                return item.type === 2;
            }).slice(0, 3).sort(function (a, b) {
                return b.ordinal - a.ordinal;
            });
            if (!userInfoFetchDone) {
                return null;
            }
            if (bannerList.length === 0 && topicList.length === 0 && courseList.length === 0) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: "home", onScroll: this.handleHomeScroll, ref: function ref(e) {
                    return _this2.homePageRef = e;
                } }, userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('createBox', isScrolled && 'shadow') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'createItem', onClick: this.handleNavToCocoEditor }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-create-app', styleName: 'createIcon' }), "\u5E94\u7528\u521B\u4F5C"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('createItem', 'disabled') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-create-web', styleName: 'createIcon' }), "\u7F51\u9875\u642D\u5EFA", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { styleName: 'tips' }, "\uFF08\u656C\u8BF7\u671F\u5F85\uFF09"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('center', (!userInfo || userInfo.isNewUser) && 'newUser') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('bannerBox', bannerList.length === 0 && 'hide') }, bannerList.length > 1 && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'bannerPrev', onClick: function onClick() {
                    return _this2.handlePrevBanner();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-next' })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'bannerNext', onClick: function onClick() {
                    return _this2.handleNextBanner();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-next' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Carousel */], { autoplay: true, speed: 800, autoplaySpeed: 5000, pauseOnHover: false, ref: function ref(e) {
                    return _this2.bannerRef = e;
                } }, bannerList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { onClick: function onClick() {
                        return _this2.handleBannerClick(item.target_url, item.id);
                    }, styleName: 'bannerItem', key: item.id }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview_url + ")" } }));
            }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('noticeBox', topicList.length === 0 && 'hide') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Carousel */], { autoplay: true, vertical: true, dots: false, autoplaySpeed: 5000, pauseOnHover: false }, topicList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'noticeItem', key: item.id, onClick: function onClick() {
                        return _this2.handleTopicClick(item.target_url, item.id);
                    } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'noticeChar' }, "#"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, item.title));
            }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('courseBox', userInfo && !userInfo.isNewUser && courseListVisible === false && !showCourseAnimation && 'hidden', showCourseAnimation && 'animation') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'titleBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { styleName: 'title' }, "\u65B0\u624B\u5165\u95E8"), userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'finish' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('checkbox', courseListVisible === false && 'checked'), onClick: this.handleHideCourseList }, courseListVisible === false && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-selected' })), "\u6211\u5DF2\u770B\u5B8C")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseList' }, courseList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseItem', key: item.id, onClick: function onClick() {
                        return _this2.handlePlayCourse(item.id);
                    } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseImage' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview + ")" } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'mask' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-play' })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseName' }, item.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseDesc' }, item.course_intro));
            }))), (!userInfo || userInfo.isNewUser) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'newUserTemplate' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateTitle' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-template', styleName: 'titleIcon' }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { styleName: 'title' }, "\u4ECE\u6A21\u7248\u5F00\u59CB\u63A2\u7D22")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateList' }, newUserTemplateList.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: item.id, styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('templateItem', _this2.templateColor[index]), onClick: function onClick() {
                        return _this2.handlePreviewTemplate(item.id, item.name);
                    } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'imageBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview_url2 + ")" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: item.gif_url, alt: item.name, styleName: 'gif' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'name' }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'desc' }, item.description, " "), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'previewBtn' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-play' }), "\u73A9\u4E00\u73A9"));
            }))), userInfo && !userInfo.isNewUser && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'myWork' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'titleBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-lately-work', styleName: 'titleIcon' }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { styleName: 'title' }, "\u6700\u8FD1\u4F5C\u54C1")), workList.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workList' }, workList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_WorkItem__["a" /* default */], { key: item.work_id, item: item, workType: __WEBPACK_IMPORTED_MODULE_8__Work_model_interface__["a" /* EWorkType */].HOME, callback: _this2.props.getWorkListAction });
            })), workList.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workListNoData' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u4F60\u8FD8\u672A\u521B\u4F5C\u4EFB\u4F55\u4F5C\u54C1"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'createBtn', onClick: this.handleNavToCocoEditor }, "\u53BB\u521B\u4F5C ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-button-arrow', styleName: 'icon' })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'oldUserTemplate' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'titleBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateTitle' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-template', styleName: 'titleIcon' }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { styleName: 'title' }, "\u4ECE\u6A21\u7248\u5F00\u59CB\u63A2\u7D22")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'pageBtn' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('btnItem'), onClick: function onClick() {
                    return _this2.prevTemplate();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-next', styleName: 'prev' })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'btnItem', onClick: function onClick() {
                    return _this2.nextTemplate();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-next' })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateList', ref: function ref(e) {
                    return _this2.templateListRef = e;
                } }, templateList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_TemplateItem__["a" /* default */], { key: item.id, item: item });
            }))))), (!userInfo || userInfo.isNewUser) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'startWork' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'title' }, "\u65E0\u5C3D\u7684\u60F3\u6CD5\uFF0C\u4ECE\u8FD9\u91CC\u5F00\u59CB\u521B\u9020\u3002"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'startBtn', onClick: this.handleNavToCocoEditor }, "\u5F00\u59CB\u521B\u4F5C", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_IconFont__["a" /* default */], { type: 'icon-button-arrow', styleName: 'startIcon' }))));
        }
    }]);

    return HomeView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
HomeView = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, { allowMultiple: true })], HomeView);


/***/ }),

/***/ "+NBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewTemplateView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("nFWT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode_react__ = __webpack_require__("3Cpi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var styles = __webpack_require__("aJKZ");
var PreviewTemplateView = function (_React$Component) {
    _inherits(PreviewTemplateView, _React$Component);

    function PreviewTemplateView(props) {
        _classCallCheck(this, PreviewTemplateView);

        var _this = _possibleConstructorReturn(this, (PreviewTemplateView.__proto__ || Object.getPrototypeOf(PreviewTemplateView)).call(this, props));

        _this.templateColor = ['blue', 'yellow', 'purple'];
        _this.handleTemplateClick = _this.handleTemplateClick.bind(_this);
        _this.handleQuitPreview = _this.handleQuitPreview.bind(_this);
        _this.handleRefreshIframe = _this.handleRefreshIframe.bind(_this);
        return _this;
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
            });
        }
    }, {
        key: "handleTemplateClick",
        value: function handleTemplateClick(id, name) {
            this.props.setPreviewTemplateInfoAction({
                id: id,
                visible: true
            });
            Object(__WEBPACK_IMPORTED_MODULE_7__sensorsData__["a" /* sensorsCustomReport */])('TemplateClick', {
                template_name: name
            });
        }
    }, {
        key: "handleRefreshIframe",
        value: function handleRefreshIframe() {
            var iframe = document.getElementById('player');
            iframe.src = iframe.src;
        }
    }, {
        key: "handleOpenTemplate",
        value: function handleOpenTemplate(id) {
            var _config = Object(__WEBPACK_IMPORTED_MODULE_5__cfg__["a" /* config */])(),
                cocoEditorUrl = _config.cocoEditorUrl;

            window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString());
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                templateList = _props.templateList,
                previewTemplateInfo = _props.previewTemplateInfo;

            var template = templateList.find(function (item) {
                return item.id === previewTemplateInfo.id;
            });
            if (!previewTemplateInfo.visible || !template) {
                return null;
            }
            // 新人模版
            var list = templateList.filter(function (item) {
                return item.type === 2;
            }).slice(0, 3).sort(function (a, b) {
                return b.ordinal - a.ordinal;
            });
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'previewTemplate' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateList' }, list.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: item.id, onClick: function onClick() {
                        return _this2.handleTemplateClick(item.id, item.name);
                    }, styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('templateItem', _this2.templateColor[index], item.id === template.id && 'active') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'imageBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview_url2 + ")" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: item.gif_url, alt: item.name, styleName: 'gif' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'name' }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'desc' }, item.description, " "));
            })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'quitPreviewBtn', onClick: this.handleQuitPreview }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-quit', styleName: 'icon' }), "\u9000\u51FA\u9884\u89C8"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'previewBtnBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'btnItem', onClick: this.handleRefreshIframe }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-refresh' })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Dropdown */], { placement: 'top', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdown' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'qrcodeImage' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_qrcode_react__["a" /* default */], { value: template.player_url, size: 150, level: "M", imageSettings: {
                        width: 40,
                        height: 40,
                        src: 'https://static.codemao.cn/coco/image/share-dialog/qrlogo.png'
                    } })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u624B\u673A\u626B\u7801\uFF0C\u7ACB\u5373\u4F53\u9A8C")) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'btnItem' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-qrcode' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'howBtn', onClick: function onClick() {
                    return _this2.handleOpenTemplate(template.id);
                } }, "\u53BB\u770B\u770B\u600E\u4E48\u505A", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-right', styleName: 'icon' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("iframe", { src: template.player_url, id: 'player', width: "100%", height: '100%', frameBorder: 0 }));
        }
    }]);

    return PreviewTemplateView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
PreviewTemplateView = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules__(styles, { allowMultiple: true })], PreviewTemplateView);


/***/ }),

/***/ "/FmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_CHANGE_LANGUAGE; });
/* unused harmony export changeLanguageAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_SIGN_DIALOG_VISIBLE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return setSignDialogVisibleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_COURSE_DIALOG_VISIBLE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setCourseDialogVisibleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_IS_NEW_USER_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getIsNewUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_IS_NEW_USER_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setIsNewUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_USER_INFO_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return setUserInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ASYNC_SET_USER_INFO_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return asyncSetUserInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_USER_INFO_FETCH_DONE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setUserInfoFetchDoneAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_COMMON_TOAST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setCommonToastAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_CONFIRM_DIALOG_INFO_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return setConfirmDialogInfoAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");

var ACTION_CHANGE_LANGUAGE = 'main/change_language';
var changeLanguageAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(ACTION_CHANGE_LANGUAGE);
var SET_SIGN_DIALOG_VISIBLE_ACTION = 'main/set_sign_dialog_visible';
var setSignDialogVisibleAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_SIGN_DIALOG_VISIBLE_ACTION);
var SET_COURSE_DIALOG_VISIBLE_ACTION = 'main/set_course_dialog_visible';
var setCourseDialogVisibleAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COURSE_DIALOG_VISIBLE_ACTION);
var GET_IS_NEW_USER_ACTION = 'main/get_is_new_user';
var getIsNewUserAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_IS_NEW_USER_ACTION);
var SET_IS_NEW_USER_ACTION = 'main/set_is_new_user';
var setIsNewUserAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_IS_NEW_USER_ACTION);
var SET_USER_INFO_ACTION = 'main/set_user_info';
var setUserInfoAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_USER_INFO_ACTION);
var ASYNC_SET_USER_INFO_ACTION = 'main/async_set_user_info';
var asyncSetUserInfoAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(ASYNC_SET_USER_INFO_ACTION);
var SET_USER_INFO_FETCH_DONE_ACTION = 'main/set_user_info_fetch_done';
var setUserInfoFetchDoneAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_USER_INFO_FETCH_DONE_ACTION);
var SET_COMMON_TOAST_ACTION = 'main/set_common_toast';
var setCommonToastAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COMMON_TOAST_ACTION);
var SET_CONFIRM_DIALOG_INFO_ACTION = 'main/set_confirm_dialog_info';
var setConfirmDialogInfoAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_CONFIRM_DIALOG_INFO_ACTION);

/***/ }),

/***/ "/TF1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dialog__ = __webpack_require__("kQfo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__("XdPl");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var styles = __webpack_require__("JPI0");
var ConfirmDialogView = function (_React$Component) {
    _inherits(ConfirmDialogView, _React$Component);

    function ConfirmDialogView(props) {
        _classCallCheck(this, ConfirmDialogView);

        var _this = _possibleConstructorReturn(this, (ConfirmDialogView.__proto__ || Object.getPrototypeOf(ConfirmDialogView)).call(this, props));

        _this.handleDeny = _this.handleDeny.bind(_this);
        _this.handleConfirm = _this.handleConfirm.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        _this.handleCloseDialog = _this.handleCloseDialog.bind(_this);
        return _this;
    }

    _createClass(ConfirmDialogView, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleDeny",
        value: function handleDeny() {
            var onDeny = this.props.confirmDialogInfo.onDeny;

            onDeny && onDeny();
            this.handleCloseDialog();
        }
    }, {
        key: "handleConfirm",
        value: function handleConfirm() {
            var onConfirm = this.props.confirmDialogInfo.onConfirm;

            onConfirm && onConfirm();
            this.handleCloseDialog();
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            var onCancel = this.props.confirmDialogInfo.onCancel;

            onCancel && onCancel();
            this.handleCloseDialog();
        }
    }, {
        key: "handleCloseDialog",
        value: function handleCloseDialog() {
            var onClose = this.props.confirmDialogInfo.onClose;

            onClose && onClose();
            this.props.setConfirmDialogInfoAction({ visible: false });
        }
    }, {
        key: "render",
        value: function render() {
            var _props$confirmDialogI = this.props.confirmDialogInfo,
                visible = _props$confirmDialogI.visible,
                title = _props$confirmDialogI.title,
                content = _props$confirmDialogI.content,
                className = _props$confirmDialogI.className,
                isDangerous = _props$confirmDialogI.isDangerous,
                _props$confirmDialogI2 = _props$confirmDialogI.cancelText,
                cancelText = _props$confirmDialogI2 === undefined ? '取消' : _props$confirmDialogI2,
                _props$confirmDialogI3 = _props$confirmDialogI.allowText,
                allowText = _props$confirmDialogI3 === undefined ? '确认' : _props$confirmDialogI3,
                denyText = _props$confirmDialogI.denyText,
                _props$confirmDialogI4 = _props$confirmDialogI.cancelBtnVisible,
                cancelBtnVisible = _props$confirmDialogI4 === undefined ? true : _props$confirmDialogI4,
                _props$confirmDialogI5 = _props$confirmDialogI.confirmBtnVisible,
                confirmBtnVisible = _props$confirmDialogI5 === undefined ? true : _props$confirmDialogI5;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Dialog__["a" /* default */], { visible: visible, showCloseButton: false, onClose: this.handleCloseDialog, withPortal: true, maskClosable: false, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(styles.dialog, className, denyText && styles.dialogSecondary) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, content), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(styles.dialogButtons) }, cancelBtnVisible && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], { type: "light", onClick: this.handleCancel }, cancelText), denyText && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], { onClick: this.handleDeny, className: styles.denyButton }, denyText), confirmBtnVisible && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], { type: "primary", danger: isDangerous, onClick: this.handleConfirm }, allowText)));
        }
    }]);

    return ConfirmDialogView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
ConfirmDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, { allowMultiple: true })], ConfirmDialogView);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qMEF");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1mrc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2PC+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handleSetCreateWorkOffset */
/* unused harmony export handleSetCreateWorkIsLoaded */
/* unused harmony export handleSetCreateWorkList */
/* unused harmony export handleSetCollWorkOffset */
/* unused harmony export handleSetCollWorkIsLoaded */
/* unused harmony export handleSetCollWorkList */
/* unused harmony export handleSetDeleteWorkOffset */
/* unused harmony export handleSetDeleteWorkIsLoaded */
/* unused harmony export handleSetDeleteWorkList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return workReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("HXaG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__("hC2z");
/* unused harmony reexport WorkReducerState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saga__ = __webpack_require__("BmOz");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__saga__["a"]; });
var _handleActions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initial_state = {
    createWorkOffset: 0,
    createWorkIsLoaded: false,
    createWorkList: [],
    collWorkOffset: 1,
    collWorkIsLoaded: false,
    collWorkList: [],
    deleteWorkOffset: 0,
    deleteWorkIsLoaded: false,
    deleteWorkList: []
};
var handleSetCreateWorkOffset = function handleSetCreateWorkOffset(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        createWorkOffset: action.payload
    });
};
var handleSetCreateWorkIsLoaded = function handleSetCreateWorkIsLoaded(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        createWorkIsLoaded: action.payload
    });
};
var handleSetCreateWorkList = function handleSetCreateWorkList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        createWorkList: action.payload
    });
};
var handleSetCollWorkOffset = function handleSetCollWorkOffset(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        collWorkOffset: action.payload
    });
};
var handleSetCollWorkIsLoaded = function handleSetCollWorkIsLoaded(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        collWorkIsLoaded: action.payload
    });
};
var handleSetCollWorkList = function handleSetCollWorkList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        collWorkList: action.payload
    });
};
var handleSetDeleteWorkOffset = function handleSetDeleteWorkOffset(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        deleteWorkOffset: action.payload
    });
};
var handleSetDeleteWorkIsLoaded = function handleSetDeleteWorkIsLoaded(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        deleteWorkIsLoaded: action.payload
    });
};
var handleSetDeleteWorkList = function handleSetDeleteWorkList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        deleteWorkList: action.payload
    });
};
var workReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["o" /* SET_CREATE_WORK_OFFSET_ACTION */], handleSetCreateWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["m" /* SET_CREATE_WORK_IS_LOADED_ACTION */], handleSetCreateWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["n" /* SET_CREATE_WORK_LIST_ACTION */], handleSetCreateWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["l" /* SET_COLL_WORK_OFFSET_ACTION */], handleSetCollWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["j" /* SET_COLL_WORK_IS_LOADED_ACTION */], handleSetCollWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["k" /* SET_COLL_WORK_LIST_ACTION */], handleSetCollWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["r" /* SET_DELETE_WORK_OFFSET_ACTION */], handleSetDeleteWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["p" /* SET_DELETE_WORK_IS_LOADED_ACTION */], handleSetDeleteWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["q" /* SET_DELETE_WORK_LIST_ACTION */], handleSetDeleteWorkList), _handleActions), initial_state);

/***/ }),

/***/ "2V4L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHomeAllWorkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCreateWorkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCollWorkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDeleteWorkList; });
var getHomeAllWorkList = function getHomeAllWorkList(state) {
  return state.home_reducer.workList;
};
var getCreateWorkList = function getCreateWorkList(state) {
  return state.work_reducer.createWorkList;
};
var getCollWorkList = function getCollWorkList(state) {
  return state.work_reducer.collWorkList;
};
var getDeleteWorkList = function getDeleteWorkList(state) {
  return state.work_reducer.deleteWorkList;
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4/1v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home_1xbqQ","createBox":"createBox_PB_-m","shadow":"shadow_ycmQR","createItem":"createItem_1KsCZ","createIcon":"createIcon_x6U2x","disabled":"disabled_2Sn3u","tips":"tips_pYykR","center":"center_1aavX","newUser":"newUser_3Z-0i","hide":"hide_39nn3","bannerBox":"bannerBox_yjTIz","bannerItem":"bannerItem_lhLlK","image":"image_3jclR","bannerPrev":"bannerPrev_2REHI","bannerNext":"bannerNext_38HvL","noticeBox":"noticeBox_eQSRQ","noticeItem":"noticeItem_UFh5j","noticeChar":"noticeChar_3P7Jj","courseBox":"courseBox_3gdMf","hidden":"hidden_201b7","titleBox":"titleBox_1AEl8","title":"title_1mlu1","checkbox":"checkbox_3yG0X","checked":"checked_2M8lj","finish":"finish_ej17M","courseList":"courseList_215BE","courseItem":"courseItem_135NY","courseImage":"courseImage_2Z-eL","mask":"mask_2f1Hl","playBox":"playBox_3_NJM","courseName":"courseName_F8WpN","courseDesc":"courseDesc_9ST8E","animation":"animation_YwdJn","hideCourseBoxAnimation":"hideCourseBoxAnimation_2iIFs","newUserTemplate":"newUserTemplate_1t7u4","templateTitle":"templateTitle_Z-eQ0","titleIcon":"titleIcon_1ZB5-","templateList":"templateList_dJG4l","templateItem":"templateItem_31rRK","imageBox":"imageBox_1Sg6U","gif":"gif_8urEH","name":"name_rmN6Y","desc":"desc_bPS_9","previewBtn":"previewBtn_29W78","blue":"blue_2-_D2","yellow":"yellow_2y7v0","purple":"purple_31Wxx","myWork":"myWork_KP39x","workList":"workList_1nAUt","workListNoData":"workListNoData_2V3p8","createBtn":"createBtn_2QN5x","icon":"icon_3YAn5","oldUserTemplate":"oldUserTemplate_1-Xwf","pageBtn":"pageBtn_2D8If","btnItem":"btnItem_2hfoj","prev":"prev_1spBZ","startWork":"startWork_msqmn","startBtn":"startBtn_1BREu","startIcon":"startIcon_2wi8o","startIconAnimation":"startIconAnimation_YBc83"};

/***/ }),

/***/ "4Hmg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LanguageEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return language_list; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__("Pq8k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__ = __webpack_require__("TCl6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh__ = __webpack_require__("BDH0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zh_CN__ = __webpack_require__("C38k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__en_US__ = __webpack_require__("af2z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zh_TW__ = __webpack_require__("VaJI");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







Object(__WEBPACK_IMPORTED_MODULE_0_react_intl__["b" /* addLocaleData */])([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh__)));
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["zh"] = "zh";
    LanguageEnum["en"] = "en";
    LanguageEnum["tw"] = "tw";
})(LanguageEnum || (LanguageEnum = {}));
var language_list = {
    zh: {
        intl_lang_name: 'zh',
        language: __WEBPACK_IMPORTED_MODULE_3__zh_CN__["a" /* zh_CN */]
    },
    tw: {
        intl_lang_name: 'zh-Hant',
        language: __WEBPACK_IMPORTED_MODULE_5__zh_TW__["a" /* zh_TW */]
    },
    en: {
        intl_lang_name: 'en',
        language: __WEBPACK_IMPORTED_MODULE_4__en_US__["a" /* en_US */]
    }
};

/***/ }),

/***/ "A8ak":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"show":"show_wXoqD","showDialog":"showDialog_1z051","hidden":"hidden_2OzH5","closeDialog":"closeDialog_3FIdc","hideMask":"hideMask_1RjON"};

/***/ }),

/***/ "ARYd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInDialogView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__ = __webpack_require__("oqxr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__ = __webpack_require__("OT5r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crc_catui2_dist_themes_violet_index_css__ = __webpack_require__("ASuZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crc_catui2_dist_themes_violet_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__crc_catui2_dist_themes_violet_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__ = __webpack_require__("P22Q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sensorsData__ = __webpack_require__("yI2H");


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// import '@crc/catui2/dist/components/application/sign-in-dialog/style_module.css';





var styles = __webpack_require__("xr0F");
function detectCatLanguage(language) {
    switch (language) {
        case 'zh':
        case 'zh-CN':
            return 'zh';
        case 'tw':
        case 'zh-TW':
            return 'tw';
        case 'en':
        case 'en-US':
            return 'en';
        default:
            return 'en';
    }
}
function detectCatEnv() {
    switch (Object(__WEBPACK_IMPORTED_MODULE_7__cfg__["a" /* config */])().env) {
        case 'dev':
            return 'development';
        case 'test':
            return 'test';
        case 'staging':
            return 'staging';
        case 'prod':
            return 'production';
        default:
            return 'development';
    }
}
var SignInDialogView = function (_React$Component) {
    _inherits(SignInDialogView, _React$Component);

    function SignInDialogView(props) {
        _classCallCheck(this, SignInDialogView);

        var _this = _possibleConstructorReturn(this, (SignInDialogView.__proto__ || Object.getPrototypeOf(SignInDialogView)).call(this, props));

        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_this);
        return _this;
    }

    _createClass(SignInDialogView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_cfg__["b" /* setEnv */])(detectCatEnv());
            Object(__WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__["e" /* setTheme */])(__WEBPACK_IMPORTED_MODULE_5__crc_catui2_dist_themes__["b" /* ThemeTypeEnum */].Violet);
            var auth = Object(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__["b" /* getAuthModule */])();
            auth.init().then(function () {
                // COCO登录
                auth.initIris(Object(__WEBPACK_IMPORTED_MODULE_7__cfg__["a" /* config */])().pid, 'appcraft');
                _this2.fetchUserInfo(false, '');
            });
        }
    }, {
        key: "fetchUserInfo",
        value: function fetchUserInfo() {
            var closeDialogFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var loginMethod = arguments[1];

            return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var auth, response, data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (closeDialogFirst) {
                                    this.props.setSignDialogVisibleAction(false);
                                }
                                auth = Object(__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__["b" /* getAuthModule */])();
                                _context.prev = 2;
                                _context.next = 5;
                                return auth.checkAuthLogin();

                            case 5:
                                response = _context.sent;

                                if (!response) {
                                    _context.next = 14;
                                    break;
                                }

                                data = response.data;

                                this.props.asyncSetUserInfoAction({
                                    id: data.id,
                                    name: data.nickname,
                                    avatar: data.avatar_url
                                });
                                // 神策用户关联
                                Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__["b" /* sensorsLoginReport */])(data.id);
                                if (loginMethod) {
                                    Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__["a" /* sensorsCustomReport */])('LoginResult', {
                                        loginMethod: loginMethod,
                                        isSuccess: true,
                                        isRegister: !closeDialogFirst,
                                        failReason: ''
                                    });
                                }
                                return _context.abrupt("return", true);

                            case 14:
                                this.props.asyncSetUserInfoAction(null);
                                if (loginMethod) {
                                    Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__["a" /* sensorsCustomReport */])('LoginResult', {
                                        loginMethod: loginMethod,
                                        isSuccess: false,
                                        isRegister: !closeDialogFirst,
                                        failReason: ''
                                    });
                                }

                            case 16:
                                _context.next = 22;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context["catch"](2);

                                // console.error('fetchUserInfo ', error);
                                this.props.setUserInfoFetchDoneAction();
                                if (loginMethod) {
                                    Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__["a" /* sensorsCustomReport */])('LoginResult', {
                                        loginMethod: loginMethod,
                                        isSuccess: false,
                                        isRegister: !closeDialogFirst,
                                        failReason: _context.t0.message
                                    });
                                }

                            case 22:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 18]]);
            }));
        }
    }, {
        key: "handleLoginSuccess",
        value: function handleLoginSuccess(closeDialogFirst, loginMethod) {
            this.fetchUserInfo(closeDialogFirst, loginMethod);
        }
    }, {
        key: "handleLoginFailure",
        value: function handleLoginFailure(loginResult) {
            if (loginResult) {
                Object(__WEBPACK_IMPORTED_MODULE_8__sensorsData__["a" /* sensorsCustomReport */])('LoginResult', {
                    loginMethod: loginResult.source || '',
                    isSuccess: false,
                    isRegister: loginResult.source === 'register',
                    failReason: loginResult.error.msg || ''
                });
            }
        }
    }, {
        key: "handleClose",
        value: function handleClose() {
            this.props.setSignDialogVisibleAction(false);
        }
    }, {
        key: "render",
        value: function render() {
            var signDialogVisible = this.props.signDialogVisible;

            if (!signDialogVisible) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__crc_catui2_dist_components_application_sign_in_dialog__["a" /* SignInDialog */], { language: detectCatLanguage('zh'), show: true, onCloseAnimationEnd: this.handleClose, onSmsLoginSuccess: this.handleLoginSuccess.bind(null, true, 'sms-login'), onPasswordLoginSuccess: this.handleLoginSuccess.bind(null, true, 'pwd-login'), onThirdPartyLoginSuccess: this.handleLoginSuccess.bind(null, true, 'third-login'), onRegisterSuccess: this.handleLoginSuccess.bind(null, false, 'pwd-login'), onPasswordLoginFailure: this.handleLoginFailure, onSmsLoginFailure: this.handleLoginFailure, onThirdPartyLoginFailure: this.handleLoginFailure, onRegisterFailure: this.handleLoginFailure, onRegisterConfirm: this.handleClose, centerShowUp: true });
        }
    }]);

    return SignInDialogView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
SignInDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_6_react_css_modules__(styles, { allowMultiple: true })], SignInDialogView);


/***/ }),

/***/ "AvcO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("ReOC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ = __webpack_require__("twBc");




var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        courseList: state.home_reducer.courseList,
        playCourseInfo: state.home_reducer.playCourseInfo
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__["v" /* setPlayCourseInfoAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* PlayCourseVideoView */]));

/***/ }),

/***/ "BmOz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWorkBcmUrl */
/* unused harmony export getWorkBcmJson */
/* harmony export (immutable) */ __webpack_exports__["a"] = workSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep__ = __webpack_require__("kvU2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("igqX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ = __webpack_require__("egdi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("HXaG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_main_actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_selectors__ = __webpack_require__("2V4L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_uploader__ = __webpack_require__("inl5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interface__ = __webpack_require__("hC2z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_model_actions__ = __webpack_require__("twBc");



var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetCreateWorkList),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetCollWorkList),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetDeleteWorkList),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleQuitCollWork),
    _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleDeleteWork),
    _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleRecoverDeleteWork),
    _marked7 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleAgainDeleteWork),
    _marked8 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleClearDeleteWork),
    _marked9 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleRenameWork),
    _marked10 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(workSaga);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











var LIMIT = 40;
// 我创建的作品
function handleGetCreateWorkList(action) {
    var _action$payload, name, offset, url, result, data, createWorkList;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetCreateWorkList$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _action$payload = action.payload, name = _action$payload.name, offset = _action$payload.offset;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/list?status=1&offset=' + offset * LIMIT + '&limit=' + LIMIT;

                    if (name) {
                        url += '&name=' + name;
                    }
                    _context.prev = 3;
                    _context.next = 6;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch create work list failed, detail:', err);
                        throw err;
                    });

                case 6:
                    result = _context.sent;

                    if (!(result.code === 200)) {
                        _context.next = 31;
                        break;
                    }

                    data = result.data;
                    _context.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["G" /* setCreateWorkOffsetAction */](offset));

                case 11:
                    _context.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context.next = 14;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["b" /* getCreateWorkList */]);

                case 14:
                    _context.t1 = _context.sent;
                    createWorkList = (0, _context.t0)(_context.t1);

                    // work_id、id字段变动兼容
                    data.items.forEach(function (item) {
                        item.work_id = item.work_id || item.id;
                    });

                    if (!(offset === 0)) {
                        _context.next = 22;
                        break;
                    }

                    _context.next = 20;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["F" /* setCreateWorkListAction */](data.items));

                case 20:
                    _context.next = 24;
                    break;

                case 22:
                    _context.next = 24;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["F" /* setCreateWorkListAction */](createWorkList.concat(data.items)));

                case 24:
                    if (!(data.items.length === 0 || data.offset + LIMIT >= data.total)) {
                        _context.next = 29;
                        break;
                    }

                    _context.next = 27;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* setCreateWorkIsLoadedAction */](true));

                case 27:
                    _context.next = 31;
                    break;

                case 29:
                    _context.next = 31;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* setCreateWorkIsLoadedAction */](false));

                case 31:
                    _context.next = 36;
                    break;

                case 33:
                    _context.prev = 33;
                    _context.t2 = _context['catch'](3);

                    false && console.log('fetch create work list error, detail', _context.t2);

                case 36:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[3, 33]]);
}
// 我参与的作品
function handleGetCollWorkList(action) {
    var _action$payload2, name, offset, url, result, data, collWorkList;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetCollWorkList$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _action$payload2 = action.payload, name = _action$payload2.name, offset = _action$payload2.offset;
                    // let url = `${get_api_prefix()}/coconut/web/work/list/coll_works?offset=${offset}&limit=${LIMIT}`;
                    // if (name) {
                    //   url += `&name=${name}`;
                    // }
                    // TODO 我参与的 暂时用老接口

                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["c" /* get_coll_prefix */])() + '/coll/coco/coll_works?current_page=' + offset + '&page_size=' + LIMIT;
                    _context2.prev = 2;
                    _context2.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch coll work list failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context2.sent;

                    if (!(result.code === 200)) {
                        _context2.next = 30;
                        break;
                    }

                    data = result.data;
                    _context2.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["D" /* setCollWorkOffsetAction */](offset));

                case 10:
                    _context2.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context2.next = 13;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["a" /* getCollWorkList */]);

                case 13:
                    _context2.t1 = _context2.sent;
                    collWorkList = (0, _context2.t0)(_context2.t1);

                    // work_id、id字段变动兼容
                    result.data.items.forEach(function (item) {
                        item.work_id = item.work_id || item.id;
                    });

                    if (!(offset === 1)) {
                        _context2.next = 21;
                        break;
                    }

                    _context2.next = 19;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["C" /* setCollWorkListAction */](data.items));

                case 19:
                    _context2.next = 23;
                    break;

                case 21:
                    _context2.next = 23;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["C" /* setCollWorkListAction */](collWorkList.concat(data.items)));

                case 23:
                    if (!(data.items.length === 0 || data.currentPage * LIMIT >= data.total)) {
                        _context2.next = 28;
                        break;
                    }

                    _context2.next = 26;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["B" /* setCollWorkIsLoadedAction */](true));

                case 26:
                    _context2.next = 30;
                    break;

                case 28:
                    _context2.next = 30;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["B" /* setCollWorkIsLoadedAction */](false));

                case 30:
                    _context2.next = 35;
                    break;

                case 32:
                    _context2.prev = 32;
                    _context2.t2 = _context2['catch'](2);

                    false && console.log('fetch coll work list error, detail', _context2.t2);

                case 35:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[2, 32]]);
}
// 回收站作品
function handleGetDeleteWorkList(action) {
    var offset, url, result, data, deleteWorkList;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetDeleteWorkList$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    offset = action.payload.offset;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/list?status=-99&offset=' + offset * LIMIT + '&limit=' + LIMIT;
                    _context3.prev = 2;
                    _context3.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch delete work list failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context3.sent;

                    if (!(result.code === 200)) {
                        _context3.next = 30;
                        break;
                    }

                    data = result.data;
                    _context3.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["J" /* setDeleteWorkOffsetAction */](offset));

                case 10:
                    _context3.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context3.next = 13;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["c" /* getDeleteWorkList */]);

                case 13:
                    _context3.t1 = _context3.sent;
                    deleteWorkList = (0, _context3.t0)(_context3.t1);

                    // work_id、id字段变动兼容
                    data.items.forEach(function (item) {
                        item.work_id = item.work_id || item.id;
                    });

                    if (!(offset === 0)) {
                        _context3.next = 21;
                        break;
                    }

                    _context3.next = 19;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["I" /* setDeleteWorkListAction */](data.items));

                case 19:
                    _context3.next = 23;
                    break;

                case 21:
                    _context3.next = 23;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["I" /* setDeleteWorkListAction */](deleteWorkList.concat(data.items)));

                case 23:
                    if (!(data.items.length === 0 || data.offset + LIMIT >= data.total)) {
                        _context3.next = 28;
                        break;
                    }

                    _context3.next = 26;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["H" /* setDeleteWorkIsLoadedAction */](true));

                case 26:
                    _context3.next = 30;
                    break;

                case 28:
                    _context3.next = 30;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["H" /* setDeleteWorkIsLoadedAction */](false));

                case 30:
                    _context3.next = 35;
                    break;

                case 32:
                    _context3.prev = 32;
                    _context3.t2 = _context3['catch'](2);

                    false && console.log('fetch delete work list error, detail', _context3.t2);

                case 35:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this, [[2, 32]]);
}
// 退出协作
function handleQuitCollWork(action) {
    var _action$payload3, id, userId, workType, url, result, homeWorkList, list, collWorkList, _list;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleQuitCollWork$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _action$payload3 = action.payload, id = _action$payload3.id, userId = _action$payload3.userId, workType = _action$payload3.workType;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["c" /* get_coll_prefix */])() + '/coll/coco/collaborator/' + id + '?work_id=' + id + '&coll_user_id=' + userId;
                    _context4.prev = 2;
                    _context4.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch quit coll work failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context4.sent;

                    if (!(result.code === 200)) {
                        _context4.next = 25;
                        break;
                    }

                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].HOME)) {
                        _context4.next = 16;
                        break;
                    }

                    _context4.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context4.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["d" /* getHomeAllWorkList */]);

                case 11:
                    _context4.t1 = _context4.sent;
                    homeWorkList = (0, _context4.t0)(_context4.t1);
                    list = homeWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context4.next = 16;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__["z" /* setWorkListAction */])(list));

                case 16:
                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].COLL)) {
                        _context4.next = 25;
                        break;
                    }

                    _context4.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context4.next = 20;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["a" /* getCollWorkList */]);

                case 20:
                    _context4.t3 = _context4.sent;
                    collWorkList = (0, _context4.t2)(_context4.t3);
                    _list = collWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context4.next = 25;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["C" /* setCollWorkListAction */](_list));

                case 25:
                    _context4.next = 30;
                    break;

                case 27:
                    _context4.prev = 27;
                    _context4.t4 = _context4['catch'](2);

                    false && console.log('fetch quit coll work error, detail', _context4.t4);

                case 30:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this, [[2, 27]]);
}
// 删除作品到回收站
function handleDeleteWork(action) {
    var _action$payload4, id, workType, callback, url, result, homeWorkList, list, createWorkList, _list2, collWorkList, _list3;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleDeleteWork$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    _action$payload4 = action.payload, id = _action$payload4.id, workType = _action$payload4.workType, callback = _action$payload4.callback;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/' + id;
                    _context5.prev = 2;
                    _context5.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch delete work failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context5.sent;

                    if (!(result.code === 200)) {
                        _context5.next = 40;
                        break;
                    }

                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].HOME)) {
                        _context5.next = 20;
                        break;
                    }

                    _context5.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context5.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["d" /* getHomeAllWorkList */]);

                case 11:
                    _context5.t1 = _context5.sent;
                    homeWorkList = (0, _context5.t0)(_context5.t1);
                    list = homeWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });

                    if (!(list.length >= 12)) {
                        _context5.next = 19;
                        break;
                    }

                    _context5.next = 17;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__["z" /* setWorkListAction */])(list));

                case 17:
                    _context5.next = 20;
                    break;

                case 19:
                    // 主页不足两行，重新拉取数据，加延时因为更新同步数据慢一点
                    setTimeout(function () {
                        callback();
                    }, 700);

                case 20:
                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].CREATE)) {
                        _context5.next = 29;
                        break;
                    }

                    _context5.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context5.next = 24;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["b" /* getCreateWorkList */]);

                case 24:
                    _context5.t3 = _context5.sent;
                    createWorkList = (0, _context5.t2)(_context5.t3);
                    _list2 = createWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context5.next = 29;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["F" /* setCreateWorkListAction */](_list2));

                case 29:
                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].COLL)) {
                        _context5.next = 38;
                        break;
                    }

                    _context5.t4 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context5.next = 33;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["a" /* getCollWorkList */]);

                case 33:
                    _context5.t5 = _context5.sent;
                    collWorkList = (0, _context5.t4)(_context5.t5);
                    _list3 = collWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context5.next = 38;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["C" /* setCollWorkListAction */](_list3));

                case 38:
                    _context5.next = 40;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__["m" /* setCommonToastAction */])({
                        visible: true,
                        message: '作品移至回收站'
                    }));

                case 40:
                    _context5.next = 47;
                    break;

                case 42:
                    _context5.prev = 42;
                    _context5.t6 = _context5['catch'](2);

                    false && console.log('fetch delete work error, detail', _context5.t6);
                    _context5.next = 47;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__["m" /* setCommonToastAction */])({
                        visible: true,
                        message: '删除作品失败'
                    }));

                case 47:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this, [[2, 42]]);
}
// 从回收站恢复作品
function handleRecoverDeleteWork(action) {
    var _action$payload5, id, callback, url, result, deleteWorkList, list;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleRecoverDeleteWork$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _action$payload5 = action.payload, id = _action$payload5.id, callback = _action$payload5.callback;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/' + id + '/recover';
                    _context6.prev = 2;
                    _context6.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.patch(url, {}, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch delete work failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context6.sent;

                    if (!(result.code === 200)) {
                        _context6.next = 18;
                        break;
                    }

                    _context6.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context6.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["c" /* getDeleteWorkList */]);

                case 10:
                    _context6.t1 = _context6.sent;
                    deleteWorkList = (0, _context6.t0)(_context6.t1);
                    list = deleteWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context6.next = 15;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["I" /* setDeleteWorkListAction */](list));

                case 15:
                    callback && callback();
                    _context6.next = 18;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__["m" /* setCommonToastAction */])({
                        visible: true,
                        message: '作品已恢复'
                    }));

                case 18:
                    _context6.next = 23;
                    break;

                case 20:
                    _context6.prev = 20;
                    _context6.t2 = _context6['catch'](2);

                    false && console.log('fetch delete work error, detail', _context6.t2);

                case 23:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked6, this, [[2, 20]]);
}
// 彻底删除作品
function handleAgainDeleteWork(action) {
    var id, url, result, deleteWorkList, list;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleAgainDeleteWork$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    id = action.payload;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/' + id + '/permanently';
                    _context7.prev = 2;
                    _context7.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch delete work failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context7.sent;

                    if (!(result.code === 200)) {
                        _context7.next = 17;
                        break;
                    }

                    _context7.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context7.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["c" /* getDeleteWorkList */]);

                case 10:
                    _context7.t1 = _context7.sent;
                    deleteWorkList = (0, _context7.t0)(_context7.t1);
                    list = deleteWorkList.filter(function (item) {
                        return item.work_id !== id;
                    });
                    _context7.next = 15;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["I" /* setDeleteWorkListAction */](list));

                case 15:
                    _context7.next = 17;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__["m" /* setCommonToastAction */])({
                        visible: true,
                        message: '作品已删除'
                    }));

                case 17:
                    _context7.next = 22;
                    break;

                case 19:
                    _context7.prev = 19;
                    _context7.t2 = _context7['catch'](2);

                    false && console.log('fetch delete work error, detail', _context7.t2);

                case 22:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _marked7, this, [[2, 19]]);
}
// 清空回收站
function handleClearDeleteWork() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleClearDeleteWork$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/permanently';
                    _context8.prev = 1;
                    _context8.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch clear delete work failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context8.sent;

                    if (!(result.code === 200)) {
                        _context8.next = 8;
                        break;
                    }

                    _context8.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["I" /* setDeleteWorkListAction */]([]));

                case 8:
                    _context8.next = 13;
                    break;

                case 10:
                    _context8.prev = 10;
                    _context8.t0 = _context8['catch'](1);

                    false && console.log('fetch clear delete work error, detail', _context8.t0);

                case 13:
                case 'end':
                    return _context8.stop();
            }
        }
    }, _marked8, this, [[1, 10]]);
}
// rename
function handleRenameWork(action) {
    var _action$payload6, id, name, workType, callback, url, result, homeWorkList, createWorkList, bcmUrl, json;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleRenameWork$(_context9) {
        while (1) {
            switch (_context9.prev = _context9.next) {
                case 0:
                    _action$payload6 = action.payload, id = _action$payload6.id, name = _action$payload6.name, workType = _action$payload6.workType, callback = _action$payload6.callback;
                    _context9.prev = 1;
                    url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/work/works/' + id + '/rename';
                    _context9.next = 5;
                    return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.patch(url, {
                        name: name,
                        work_type: 12
                    }, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch rename work failed, detail:', err);
                        throw err;
                    });

                case 5:
                    result = _context9.sent;

                    if (!result) {
                        _context9.next = 36;
                        break;
                    }

                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].HOME)) {
                        _context9.next = 16;
                        break;
                    }

                    _context9.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context9.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["d" /* getHomeAllWorkList */]);

                case 11:
                    _context9.t1 = _context9.sent;
                    homeWorkList = (0, _context9.t0)(_context9.t1);

                    homeWorkList.forEach(function (item) {
                        if (item.work_id === id) {
                            item.name = name;
                        }
                    });
                    _context9.next = 16;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__["z" /* setWorkListAction */])(homeWorkList));

                case 16:
                    if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__["a" /* EWorkType */].CREATE)) {
                        _context9.next = 25;
                        break;
                    }

                    _context9.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default.a;
                    _context9.next = 20;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["d" /* select */])(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__["b" /* getCreateWorkList */]);

                case 20:
                    _context9.t3 = _context9.sent;
                    createWorkList = (0, _context9.t2)(_context9.t3);

                    createWorkList.forEach(function (item) {
                        if (item.work_id === id) {
                            item.name = name;
                        }
                    });
                    _context9.next = 25;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_5__actions__["F" /* setCreateWorkListAction */](createWorkList));

                case 25:
                    _context9.next = 27;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* call */])(getWorkBcmUrl, id);

                case 27:
                    bcmUrl = _context9.sent;

                    if (!bcmUrl) {
                        _context9.next = 35;
                        break;
                    }

                    _context9.next = 31;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* call */])(getWorkBcmJson, bcmUrl);

                case 31:
                    json = _context9.sent;

                    json.title = name;
                    _context9.next = 35;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* call */])(updateProject, {
                        id: id,
                        name: name,
                        content: json
                    });

                case 35:
                    return _context9.abrupt('return');

                case 36:
                    _context9.next = 38;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__["m" /* setCommonToastAction */])({
                        visible: true,
                        message: '作品重命名失败，请重试'
                    }));

                case 38:
                    _context9.next = 43;
                    break;

                case 40:
                    _context9.prev = 40;
                    _context9.t4 = _context9['catch'](1);

                    false && console.log('fetch rename work error, detail', _context9.t4);

                case 43:
                case 'end':
                    return _context9.stop();
            }
        }
    }, _marked9, this, [[1, 40]]);
}
function getWorkBcmUrl(id) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        url = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/' + id + '/content';
                        _context10.prev = 1;
                        _context10.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url, {
                            withCredentials: true
                        }).then(function (res) {
                            return res.data;
                        }).catch(function (err) {
                            false && console.log('fetch delete work list failed, detail:', err);
                            throw err;
                        });

                    case 4:
                        result = _context10.sent;

                        if (!(result.code === 200)) {
                            _context10.next = 7;
                            break;
                        }

                        return _context10.abrupt('return', result.data.bcm_url);

                    case 7:
                        _context10.next = 12;
                        break;

                    case 9:
                        _context10.prev = 9;
                        _context10.t0 = _context10['catch'](1);

                        false && console.log('fetch delete work list error, detail', _context10.t0);

                    case 12:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee, this, [[1, 9]]);
    }));
}
function getWorkBcmJson(bcmUrl) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var bcmRes, json;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return fetch(bcmUrl);

                    case 2:
                        bcmRes = _context11.sent;
                        _context11.next = 5;
                        return bcmRes.json();

                    case 5:
                        json = _context11.sent;
                        return _context11.abrupt('return', json);

                    case 7:
                    case 'end':
                        return _context11.stop();
                }
            }
        }, _callee2, this);
    }));
}
function updateProject(params) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var name, content, id, bcmUrl, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        name = params.name, content = params.content, id = params.id;
                        _context12.prev = 1;
                        _context12.next = 4;
                        return Object(__WEBPACK_IMPORTED_MODULE_9__utils_uploader__["a" /* uploadProjectJsonToCdn */])(JSON.stringify(content));

                    case 4:
                        bcmUrl = _context12.sent;
                        _context12.next = 7;
                        return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.put(Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* get_api_prefix */])() + '/coconut/web/work', {
                            id: id,
                            name: name,
                            bcm_url: bcmUrl,
                            // cover_url: '', // 封面图
                            archive_version: '0.1.0',
                            save_type: 1
                        }, {
                            withCredentials: true
                        });

                    case 7:
                        result = _context12.sent;
                        return _context12.abrupt('return', result);

                    case 11:
                        _context12.prev = 11;
                        _context12.t0 = _context12['catch'](1);
                        throw _context12.t0;

                    case 14:
                    case 'end':
                        return _context12.stop();
                }
            }
        }, _callee3, this, [[1, 11]]);
    }));
}
function workSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function workSaga$(_context13) {
        while (1) {
            switch (_context13.prev = _context13.next) {
                case 0:
                    _context13.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["e" /* GET_CREATE_WORK_LIST_ACTION */], handleGetCreateWorkList);

                case 2:
                    _context13.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["d" /* GET_COLL_WORK_LIST_ACTION */], handleGetCollWorkList);

                case 4:
                    _context13.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["f" /* GET_DELETE_WORK_LIST_ACTION */], handleGetDeleteWorkList);

                case 6:
                    _context13.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["g" /* QUIT_COLL_WORK_ACTION */], handleQuitCollWork);

                case 8:
                    _context13.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["c" /* DELETE_WORK_ACTION */], handleDeleteWork);

                case 10:
                    _context13.next = 12;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["h" /* RECOVER_DELETE_WORK_ACTION */], handleRecoverDeleteWork);

                case 12:
                    _context13.next = 14;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["a" /* AGAIN_DELETE_WORK_ACTION */], handleAgainDeleteWork);

                case 14:
                    _context13.next = 16;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["b" /* CLEAR_DELETED_WORK_ACTION */], handleClearDeleteWork);

                case 16:
                    _context13.next = 18;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_5__actions__["i" /* RENAME_WORK_ACTION */], handleRenameWork);

                case 18:
                case 'end':
                    return _context13.stop();
            }
        }
    }, _marked10, this);
}

/***/ }),

/***/ "C38k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zh_CN; });
var zh_CN = {
    "work/project_title": "我的作品"
};

/***/ }),

/***/ "DYHF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var IconFontSVG = function IconFontSVG() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", { "aria-hidden": "true", width: "0", height: "0", "data-html2canvas-ignore": "true", style: { position: 'absolute' } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-help", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 0c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512S0 794.763636 0 512 229.236364 0 512 0z m-14.242909 682.682182c-12.567273 0-22.900364 3.723636-31.744 12.567273-8.843636 8.098909-12.567273 18.432-12.567273 30.999272s3.723636 22.900364 12.567273 31.744c8.843636 8.145455 19.176727 12.567273 31.744 12.567273 12.567273 0 22.853818-4.421818 31.744-12.567273a40.727273 40.727273 0 0 0 13.265454-31.744 42.309818 42.309818 0 0 0-12.567272-30.999272 43.892364 43.892364 0 0 0-32.442182-12.567273z m11.031273-449.722182c-53.108364 0-94.487273 16.290909-123.997091 48.733091-29.509818 30.999273-43.52 72.378182-43.52 124.090182h58.274909l0.325818-11.776c1.582545-30.580364 9.634909-54.784 24.064-73.169455 17.687273-24.389818 45.009455-36.165818 81.92-36.165818 30.999273 0 55.389091 8.098909 72.331636 25.832727 16.244364 16.244364 25.134545 39.098182 25.134546 68.654546 0 20.712727-7.447273 39.889455-22.155637 58.368-4.468364 5.911273-13.312 14.754909-25.134545 26.530909-39.842909 35.467636-64.232727 63.534545-74.519273 85.690182-8.843636 18.478545-13.312 39.889455-13.312 64.232727v16.989091h59.066182v-16.942546l0.372364-9.774545c1.256727-16.058182 5.632-30.626909 13.637818-44.171636 7.400727-13.265455 18.478545-26.530909 34.722909-40.587637 32.442182-28.811636 52.410182-47.988364 59.764364-56.878545 18.478545-24.343273 28.066909-53.154909 28.066909-86.388364 0-44.311273-14.056727-79.034182-41.332364-104.122182-28.811636-26.577455-66.466909-39.144727-113.710545-39.144727z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-feedback", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M23.272727 229.515636v441.390546a186.181818 186.181818 0 0 0 186.181818 186.181818h155.741091a93.090909 93.090909 0 0 1 75.403637 38.493091L512 994.210909l69.818182-97.978182a93.090909 93.090909 0 0 1 75.822545-39.098182H814.545455a186.181818 186.181818 0 0 0 186.181818-186.181818V229.515636a186.181818 186.181818 0 0 0-186.181818-186.181818h-605.09091a186.181818 186.181818 0 0 0-186.181818 186.181818z m244.317091 286.021819a65.210182 65.210182 0 1 1-0.046545-130.420364 65.210182 65.210182 0 0 1 0 130.420364z m244.503273 0A65.210182 65.210182 0 1 1 512 385.117091a65.210182 65.210182 0 0 1 0 130.420364z m260.328727 0a65.210182 65.210182 0 1 1 0-130.420364 65.210182 65.210182 0 0 1 0 130.420364z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-home", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M572.928 853.333333H408.32v-212.693333l0.384-2.901333a13.568 13.568 0 0 1 13.354667-9.813334h137.130666l3.157334 0.298667c6.058667 1.322667 10.581333 6.4 10.581333 12.416L572.928 853.333333z m64 0v-212.693333l-0.256-6.229333c-3.413333-37.034667-36.778667-66.090667-77.44-66.090667H422.101333l-6.698666 0.298667c-39.808 3.157333-71.04 34.176-71.04 72.021333V853.333333h-14.336c-70.784-0.213333-108.373333-2.389333-132.565334-24.917333-24.106667-22.442667-26.538667-57.173333-26.752-122.325333v-224.896c0.170667-43.776 1.621333-68.394667 12.501334-90.410667 12.544-25.386667 36.096-44.16 83.2-81.749333l45.738666-36.48C397.354667 204.629333 439.936 170.666667 490.666667 170.666667c50.773333 0 93.312 33.962667 178.517333 101.888l45.696 36.48c47.146667 37.546667 70.698667 56.362667 83.2 81.749333 11.733333 23.722667 12.544 50.432 12.586667 100.864v191.573333c0 80.170667 0 120.277333-26.794667 145.194667-24.234667 22.528-61.781333 24.704-132.565333 24.874667l-14.336 0.042666z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-work", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M663.04 883.2l21.76-0.213333 9.898667-0.213334 18.133333-0.64c48.213333-2.346667 71.04-9.472 92.672-28.714666 22.912-20.352 31.061333-38.784 33.749333-86.101334l0.682667-15.957333 0.512-28.032 0.085333-293.674667-0.085333-12.714666-0.426667-9.557334a53.930667 53.930667 0 0 0-5.546666-20.565333 58.453333 58.453333 0 0 0-6.741334-11.093333l-3.498666-4.352-4.352-4.522667-9.813334-9.088-219.818666-195.370667-6.741334-5.546666-5.461333-3.968a80.042667 80.042667 0 0 0-14.421333-7.338667l-6.570667-2.133333c-4.266667-1.152-8.490667-1.792-14.250667-2.133334l-10.026666-0.426666L384 140.8l-42.24 0.256-25.856 0.64-14.805333 0.725333-13.056 1.024c-34.816 3.413333-51.285333 10.88-69.546667 27.136-24.661333 21.888-32.426667 45.952-34.432 99.242667l-0.469333 20.053333-0.085334 11.093334V728.746667l0.085334 5.418666 0.469333 20.053334c1.962667 53.205333 9.770667 77.226667 34.432 99.157333 22.869333 20.352 47.104 27.136 101.546667 29.098667l19.242666 0.469333 21.76 0.170667h301.994667z m119.253333-426.666667H640l-18.474667-0.085333-15.445333-0.384-12.928-0.768c-23.552-1.962667-34.218667-7.125333-47.104-20.010667-15.957333-15.957333-20.053333-28.544-20.992-66.432l-0.256-17.92V205.184l0.256-4.053333a29.866667 29.866667 0 0 1 59.477333 4.053333V341.333333l0.128 20.608 0.426667 14.250667 0.469333 6.613333 0.597334 4.693334 0.768 3.072c0.426667 1.194667 0.853333 1.962667 1.365333 2.474666 0.682667 0.682667 1.792 1.28 3.84 1.749334l3.84 0.682666 5.589333 0.512 7.68 0.426667 16.256 0.341333 156.8 0.042667 4.053334 0.256a29.866667 29.866667 0 0 1-4.053334 59.477333z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-discover", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 128a384 384 0 1 1 0 768 384 384 0 0 1 0-768z m134.229333 200.618667L450.986667 398.933333a86.4 86.4 0 0 0-52.053334 52.053334l-70.272 195.242666a38.4 38.4 0 0 0 49.152 49.152l195.285334-70.314666a86.4 86.4 0 0 0 52.053333-52.053334l70.272-195.242666a38.4 38.4 0 0 0-49.152-49.152zM512 560a48 48 0 1 0 0-96 48 48 0 0 0 0 96z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-discover-arrow", viewBox: "0 0 1536 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M1013.9648 100.352l9.1136 6.3488 429.568 362.9056a61.44 61.44 0 0 1 8.9088 84.5824l-7.4752 7.9872-429.568 387.7888a61.44 61.44 0 0 1-89.8048-82.944l7.4752-8.192 310.5792-280.4736-1150.2592 2.048a61.44 61.44 0 0 1-10.24-122.0608L102.4 457.5232l1143.296-2.048-301.8752-254.976a61.44 61.44 0 0 1-13.6192-77.5168l6.3488-9.0112a61.44 61.44 0 0 1 77.5168-13.7216z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-template", viewBox: "0 0 24 24" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "none" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { fill: "none", d: "M0 .152h24v24H0z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M6.426 3.487 20.444 17.75a2 2 0 0 1-1.427 3.402H5a2 2 0 0 1-2-2V4.889a2 2 0 0 1 3.426-1.402Z", fill: "#3294FC" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: "6", cy: "10.152", cx: "15", fill: "#FCD713", fillOpacity: ".597" }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-lately-work", viewBox: "0 0 24 24" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { transform: "translate(0 1)", fill: "none" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: "9", cy: "11", cx: "11", fill: "#34B367" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: "4", cy: "16", cx: "18", fill: "#65DB94", fillOpacity: ".598" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { fill: "#FFF", d: "M11 4.723a.7.7 0 0 1 .694.605l.006.095v5.291l1.98 2.01a.7.7 0 0 1 .066.905l-.075.086a.7.7 0 0 1-.904.066l-.086-.074-2.18-2.216a.7.7 0 0 1-.192-.382L10.3 11V5.423a.7.7 0 0 1 .7-.7Z" }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-create-app", viewBox: "0 0 28 28" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "none" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { rx: "8", height: "28", width: "28", fill: "#5AA9FF" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M17.951 7h-7.902C9.47 7 9 7.504 9 8.125v12.75c0 .62.47 1.125 1.049 1.125h7.902C18.53 22 19 21.496 19 20.875V8.125C19 7.505 18.53 7 17.951 7Zm-2.587 13.237c0 .23-.235.416-.525.416h-1.533c-.29 0-.524-.186-.524-.416 0-.231.234-.417.524-.417h1.533c.289 0 .525.186.525.417Zm1.187-1.642H11.4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5.15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Z", fill: "#FFF" }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-create-web", viewBox: "0 0 28 28" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "none" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { rx: "8", height: "28", width: "28", fill: "#FFF" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "#BEB9CF" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M21 7H7c-.552 0-1 .478-1 1.07v11.773c0 .59.448 1.07 1 1.07h14c.552 0 1-.48 1-1.07V8.07C22 7.478 21.552 7 21 7Zm-1.25 2.14c0 .148-.056.281-.147.378a.483.483 0 0 1-.353.158c-.277 0-.5-.24-.5-.536 0-.147.056-.28.147-.377a.483.483 0 0 1 .353-.158c.137 0 .262.06.353.158.09.097.147.23.147.377Zm-2 0c0 .148-.056.281-.147.378a.483.483 0 0 1-.353.158c-.277 0-.5-.24-.5-.536 0-.147.056-.28.147-.377a.483.483 0 0 1 .353-.158c.137 0 .262.06.353.158.09.097.147.23.147.377Zm-2.853-.377a.483.483 0 0 1 .353-.158c.137 0 .262.06.353.158.09.097.147.23.147.377 0 .148-.056.281-.147.378a.483.483 0 0 1-.353.158c-.277 0-.5-.24-.5-.536 0-.147.056-.28.147-.377ZM21 19.575c0 .147-.113.268-.25.268H7.25c-.138 0-.25-.12-.25-.268v-8.16c0-.074.056-.134.125-.134h13.75c.069 0 .125.06.125.134v8.16Z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M12.778 17.82a.491.491 0 0 1-.22-.681l1.902-3.386a.547.547 0 0 1 .72-.207c.259.13.357.436.219.681l-1.903 3.386a.545.545 0 0 1-.718.208Zm-3.166-1.903a.486.486 0 0 1 0-.713l1.017-.964a.069.069 0 0 1 .095 0l.658.624a.06.06 0 0 1 0 .09l-.452.428a.243.243 0 0 0 0 .356l.452.428a.06.06 0 0 1 0 .09l-.658.623a.067.067 0 0 1-.095.002l-1.017-.964Zm6.962.34a.06.06 0 0 1 0-.09l.452-.428a.243.243 0 0 0 0-.356l-.452-.428a.06.06 0 0 1 0-.09l.658-.623a.069.069 0 0 1 .095 0l1.017.963a.486.486 0 0 1 0 .714l-1.017.963a.07.07 0 0 1-.095-.001l-.658-.624Z" })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-button-arrow", viewBox: "0 0 1243 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M724.626286 20.845714l6.729143 5.851429 434.322285 437.248a65.828571 65.828571 0 0 1 5.412572 86.601143l-5.997715 6.729143-434.322285 426.715428A65.828571 65.828571 0 0 1 632.685714 896.731429l5.851429-6.656 319.488-314.002286H73.142857a65.828571 65.828571 0 0 1-8.265143-131.072L73.142857 444.489143l887.442286-0.073143-322.56-324.900571a65.828571 65.828571 0 0 1-5.705143-86.308572l5.924571-6.729143A65.828571 65.828571 0 0 1 724.626286 20.845714z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-next", viewBox: "0 0 1462 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M588.46345491 798.4327753a42.683064 42.683064 0 0 1-4.86587-54.463589l4.86587-5.975629L814.42759591 512.1147823 588.46345491 286.2360063a42.683064 42.683064 0 0 1-4.86587-54.463589l4.86587-5.975629a42.683064 42.683064 0 0 1 54.463589-4.86587l5.975629 4.86587 256.098385 256.098384a42.683064 42.683064 0 0 1 4.865869 54.46359l-4.865869 5.975629-256.098385 256.098384a42.683064 42.683064 0 0 1-60.439218 0z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-search", viewBox: "0 0 18 20" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", { fill: "#847DA4", "data-follow-fill": "#847DA4" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.7 2a6.7 6.7 0 1 0 0 13.4A6.7 6.7 0 0 0 7.7 2Zm0 1.4a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Z" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.7 5a.7.7 0 0 1 0 1.4 2.3 2.3 0 0 0-2.3 2.3.7.7 0 0 1-1.4 0A3.7 3.7 0 0 1 7.7 5Zm5.505 9.205a.7.7 0 0 1 .903-.074l.087.074 3 3a.7.7 0 0 1-.903 1.064l-.087-.074-3-3a.7.7 0 0 1 0-.99Z" }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-delete", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M348.840874 0.051197a42.698665 42.698665 0 1 0 0 85.294936h324.182191a42.698665 42.698665 0 1 0 0-85.294936H348.840874zM50.155008 213.339733c0-23.550822 19.147843-42.59627 42.698665-42.59627h836.156592a42.698665 42.698665 0 1 1 0 85.294935H869.31405v674.270287c0 51.709415-41.981901 93.691315-93.691315 93.691315h-529.381531A93.691315 93.691315 0 0 1 152.549888 930.308685V256.038398H92.853673A42.698665 42.698665 0 0 1 50.155008 213.339733z m741.134143 42.698665H230.574787v674.270287c0 8.60117 7.065247 15.666417 15.666417 15.666416h529.381531a15.564022 15.564022 0 0 0 15.666416-15.666416V256.038398zM408.537089 348.910554a41.981901 41.981901 0 0 1 41.981901 41.981901v376.915555a41.981901 41.981901 0 0 1-83.963802 0V390.79006a41.981901 41.981901 0 0 1 41.981901-41.879506z m246.771661 41.981901a41.981901 41.981901 0 1 0-83.861407 0v376.915555a41.981901 41.981901 0 1 0 83.759012 0V390.79006z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-deleted", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M198.582857 910.189714c0 62.902857 46.811429 113.810286 104.521143 113.810286h417.792c57.782857 0 104.594286-50.834286 104.594286-113.810286V227.620571H198.509714v682.569143zM877.714286 56.905143H694.857143L642.633143 0H381.366857L329.142857 56.905143H146.285714v113.810286h731.428572V56.905143z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-clear", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M891.684571 613.010286v263.094857c0 41.033143-32.694857 74.24-73.654857 74.752h-98.011428v-181.101714a31.378286 31.378286 0 0 0-25.6-30.793143l-5.705143-0.512a31.378286 31.378286 0 0 0-31.305143 31.305143L657.334857 950.857143H531.968v-181.101714a31.378286 31.378286 0 0 0-25.673143-30.793143l-5.632-0.512a31.378286 31.378286 0 0 0-31.378286 31.305143V950.857143H343.917714v-181.101714a31.378286 31.378286 0 0 0-25.746285-30.793143l-5.632-0.512a31.378286 31.378286 0 0 0-31.305143 31.305143L281.161143 950.857143h-69.266286a74.313143 74.313143 0 0 1-73.435428-66.633143l-0.365715-8.045714V612.937143h753.590857zM529.334857 73.142857c62.537143 0.512 113.371429 51.785143 112.859429 114.322286v183.588571h217.307428A92.16 92.16 0 0 1 950.857143 463.945143c0 38.034286-23.405714 72.704-59.099429 86.381714l-758.710857 0.146286A93.257143 93.257143 0 0 1 73.142857 464.896 92.379429 92.379429 0 0 1 164.571429 371.053714H386.194286v-183.588571A113.810286 113.810286 0 0 1 499.053714 73.142857z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-close", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M334.549333 298.922667l3.541334 2.986666L512 475.733333l173.909333-173.866666a25.6 25.6 0 0 1 39.168 32.64l-2.986666 3.541333L548.266667 512l173.866666 173.909333a25.6 25.6 0 0 1-32.64 39.168l-3.541333-2.986666L512 548.266667l-173.909333 173.866666a25.6 25.6 0 0 1-39.168-32.64l2.986666-3.541333L475.733333 512 301.909333 338.090667a25.6 25.6 0 0 1 32.64-39.168z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-play", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M739.2 426.837333a85.333333 85.333333 0 0 1 0 144.298667l-352.298667 222.592C330.112 829.653333 256 788.821333 256 721.621333V276.352c0-67.2 74.112-108.032 130.901333-72.106667l352.298667 222.592z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-replay", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M376.886369 281.890042l1.509047 0.395227c9.341722 2.838446 14.910825 12.252027 12.808938 21.647644l-0.395227 1.491082-7.203905 23.030937A234.980228 234.980228 0 0 1 454.566377 296.51343c124.568265-32.875674 252.58578 39.917895 285.96447 162.581885 33.37869 122.628061-40.546665 248.687408-165.096964 281.563083C450.865618 773.516107 322.848102 700.722538 289.469412 578.058547a225.602577 225.602577 0 0 1-3.197743-105.956681c1.365329-6.467346 6.126014-11.749011 12.503535-13.832934a19.006811 19.006811 0 0 1 18.396006 3.772619c5.030158 4.383423 7.275764 11.084312 5.910435 17.551657a189.169863 189.169863 0 0 0 2.694728 88.908039c27.989235 102.902656 135.419034 163.983144 239.920561 136.389136 104.501528-27.576044 166.534153-133.353076 138.526953-236.237768-27.989235-102.938586-135.436998-164.019074-239.938527-136.425065a196.876783 196.876783 0 0 0-63.595566 29.588107l31.348662 1.580907c9.754913 0.467086 17.515728 8.245866 17.839095 17.85706v1.527012c-0.503016 9.629159-8.407549 17.26422-18.180427 17.569622l-1.544977-0.017964-69.416178-3.431287a29.19288 29.19288 0 0 1-21.629678-11.210066 28.258708 28.258708 0 0 1-5.281666-23.480058l0.610805-2.2995L354.897393 294.519332c2.874376-9.215968 12.449641-14.695247 22.006941-12.62929z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-next-video", viewBox: "0 0 26 26" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M21.5555556,0.8 C22.1768759,0.8 22.6879081,1.27219968 22.7493601,1.87730697 L22.7555556,2 L22.7555556,23.7257422 C22.7555556,24.3884839 22.2182973,24.9257422 21.5555556,24.9257422 C20.9342352,24.9257422 20.423203,24.4535425 20.361751,23.8484352 L20.3555556,23.7257422 L20.3555556,2 C20.3555556,1.3372583 20.8928139,0.8 21.5555556,0.8 Z M2.8,4 L2.8,22 C2.8,22.9549919 3.86135336,23.5273463 4.65929701,23.0026602 L18.659297,13.7969908 C19.3892287,13.3170258 19.3780625,12.2428685 18.6383109,11.7781814 L4.63831087,2.98385078 C3.83915339,2.48184685 2.8,3.05625182 2.8,4 Z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-selected", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M752.341333 353.536c19.072 17.92 20.992 48.981333 4.309334 69.461333l-267.477334 328.192c-8.32 10.24-20.266667 16.341333-32.981333 16.768a44.202667 44.202667 0 0 1-33.92-14.378666l-152.832-164.096a51.84 51.84 0 0 1 0-69.632c17.92-19.2 46.933333-19.2 64.853333 0l118.186667 126.890666 235.178667-288.597333c16.64-20.48 45.653333-22.528 64.682666-4.608z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-dropdown-down", viewBox: "0 0 1638 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M1506.9184 133.7344a102.4 102.4 0 0 1-2.8672 144.7936l-634.88 610.5088a102.4 102.4 0 0 1-144.384-2.4576L131.072 276.48A102.4 102.4 0 1 1 278.528 133.12l522.24 537.6L1362.1248 131.072a102.4 102.4 0 0 1 144.7936 2.6624z", "p-id": "9666" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-more", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M684.497455 542.114909a76.660364 76.660364 0 1 0 153.367272 0 76.660364 76.660364 0 0 0-153.367272 0zM186.181818 542.114909a76.660364 76.660364 0 1 0 153.367273 0 76.660364 76.660364 0 0 0-153.367273 0zM454.516364 542.114909a76.660364 76.660364 0 1 0 153.320727 0 76.660364 76.660364 0 0 0-153.320727 0z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-star", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M669.044364 728.157091l-29.975273-174.871273 127.069091-123.810909-175.616-25.6L512 244.829091 433.477818 403.921455l-175.569454 25.506909 127.069091 123.810909-30.021819 174.917818L512 645.585455l157.044364 82.571636z m-359.982546-7.866182a46.545455 46.545455 0 0 0 67.537455 49.058909L512 698.181818l135.400727 71.214546a46.545455 46.545455 0 0 0 67.490909-49.105455l-25.832727-150.760727 109.568-106.775273a46.545455 46.545455 0 0 0-25.832727-79.406545l-151.365818-21.969455-67.677091-137.169454a46.545455 46.545455 0 0 0-83.502546 0L402.618182 361.378909l-151.365818 21.969455a46.545455 46.545455 0 0 0-25.786182 79.406545l109.521454 106.775273-25.879272 150.807273z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-recover", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M390.981818 227.141818c22.295273 0 40.401455 18.152727 40.401455 40.494546v41.053091a30.208 30.208 0 0 1 13.358545-3.118546h123.904l10.379637 0.232727c134.376727 5.026909 242.548364 107.52 242.548363 234.496 0 130.280727-113.757091 234.728727-252.928 234.728728H332.055273l-4.468364-0.325819a30.347636 30.347636 0 0 1 4.468364-60.276363h236.590545l9.960727-0.232727c102.074182-4.701091 182.365091-81.314909 182.365091-173.893819 0-95.511273-85.550545-174.08-192.325818-174.08H444.741818l-4.468363-0.325818a30.114909 30.114909 0 0 1-8.843637-2.792727l-0.046545 43.008a40.448 40.448 0 0 1-64.884364 32.209454L275.176727 369.105455a40.448 40.448 0 0 1 0-64.41891l91.322182-69.259636A40.448 40.448 0 0 1 390.981818 227.141818z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-refresh", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M656.474884 354.817301v-27.164391c-0.199111-4.750213 1.564441-9.386648 4.878212-12.799976a17.962632 17.962632 0 0 1 24.988396 0c3.342216 3.441771 5.290656 8.007096 5.489767 12.799976V409.743417A19.199963 19.199963 0 0 1 674.153071 427.435827h-82.588283a19.199963 19.199963 0 0 1-12.799976-5.489767 18.019521 18.019521 0 0 1 0-25.031063 17.066633 17.066633 0 0 1 12.799976-4.878213h51.811454A177.222767 177.222767 0 0 0 427.597106 356.04041a175.046771 175.046771 0 0 0-78.321625 84.50828 178.67343 178.67343 0 0 0-9.443537 115.640664 176.355213 176.355213 0 0 0 63.075433 96.412257A178.460097 178.460097 0 0 0 512.020053 690.133983a175.444992 175.444992 0 0 0 125.553534-51.868344 179.51254 179.51254 0 0 0 52.124343-127.530419H725.352972a213.560474 213.560474 0 0 1-143.245944 202.737384 213.190697 213.190697 0 0 1-237.994204-69.973197A213.759584 213.759584 0 0 1 333.104846 395.379 208.824483 208.824483 0 0 1 424.553557 316.986264 211.284923 211.284923 0 0 1 546.437764 301.725849a216.888467 216.888467 0 0 1 109.724231 53.091452h0.298666z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-quit", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M192.213333 1024A192.085333 192.085333 0 0 1 0 832v-640C0 85.973333 86.058667 0 192.213333 0h383.658667a64 64 0 1 1 0 128H192.213333a64 64 0 0 0-64.085333 64v640A64 64 0 0 0 192.213333 896h383.658667a64 64 0 1 1 0 128H192.213333z m545.450667-289.621333a63.957333 63.957333 0 0 1 0-90.410667l67.84-67.882667H384.128a64 64 0 1 1 0-128h421.376L722.773333 365.226667a63.957333 63.957333 0 0 1 1.792-88.576 64.128 64.128 0 0 1 88.661334-1.92l192.213333 192c18.176 18.432 23.594667 45.909333 13.781333 69.845333-3.242667 7.68-7.936 14.72-13.781333 20.650667l-177.066667 177.152a64.128 64.128 0 0 1-90.453333 0h-0.213333z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-qrcode", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M308.209778 298.666667h162.858666c8.419556 0 15.246222 6.826667 15.246223 15.232v162.858666c0 8.419556-6.826667 15.246222-15.246223 15.246223H308.224C299.804444 492.003556 292.977778 485.176889 292.977778 476.757333V313.912889C292.977778 305.493333 299.804444 298.666667 308.209778 298.666667z m19.057778 30.478222a3.811556 3.811556 0 0 0-3.811556 3.811555v124.757334c0 2.104889 1.706667 3.811556 3.811556 3.811555h124.757333c2.104889 0 3.811556-1.706667 3.811555-3.811555V332.956444a3.811556 3.811556 0 0 0-3.811555-3.811555H327.267556zM541.553778 298.666667h162.844444C712.817778 298.666667 719.644444 305.493333 719.644444 313.898667v162.858666c0 8.419556-6.826667 15.246222-15.232 15.246223H541.553778c-8.419556 0-15.246222-6.826667-15.246222-15.246223V313.912889c0-8.419556 6.826667-15.246222 15.246222-15.246222z m19.043555 30.478222a3.811556 3.811556 0 0 0-3.811555 3.811555v124.757334c0 2.104889 1.706667 3.811556 3.811555 3.811555h124.757334c2.104889 0 3.811556-1.706667 3.811555-3.811555V332.956444a3.811556 3.811556 0 0 0-3.811555-3.811555h-124.757334zM308.209778 531.996444h162.858666c8.419556 0 15.246222 6.826667 15.246223 15.246223v162.844444c0 8.419556-6.826667 15.246222-15.246223 15.246222H308.224C299.804444 725.333333 292.977778 718.506667 292.977778 710.101333V547.242667c0-8.419556 6.826667-15.246222 15.232-15.246223z m19.057778 30.478223a3.811556 3.811556 0 0 0-3.811556 3.811555v124.757334c0 2.104889 1.706667 3.811556 3.811556 3.811555h124.757333c2.104889 0 3.811556-1.706667 3.811555-3.811555v-124.757334a3.811556 3.811556 0 0 0-3.811555-3.811555H327.267556z m305.706666 111.900444V725.333333h-45.710222v-50.958222h45.710222z m30.478222 0H719.644444v35.726222C719.644444 718.506667 712.817778 725.333333 704.412444 725.333333h-40.96v-50.958222z m-76.188444-30.464v-31.431111h-30.478222V725.333333h-15.232c-8.419556 0-15.246222-6.826667-15.246222-15.232V547.242667c0-8.419556 6.826667-15.246222 15.246222-15.246223h117.134222V614.4h30.478222v-82.389333h15.246222c8.405333 0 15.232 6.826667 15.232 15.246222v96.668444h-132.380444zM389.646222 425.813333a30.478222 30.478222 0 1 1 0-60.956444 30.478222 30.478222 0 0 1 0 60.956444z m233.329778 0a30.478222 30.478222 0 1 1 0-60.956444 30.478222 30.478222 0 0 1 0 60.956444zM389.646222 659.143111a30.478222 30.478222 0 1 1 0-60.956444 30.478222 30.478222 0 0 1 0 60.956444z" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("symbol", { id: "icon-right", viewBox: "0 0 1024 1024" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M642.827505 31.609733a102.339926 102.339926 0 0 1 155.147329 132.939565l-8.391874 9.722293-338.028778 347.64873 335.981979 326.362025A102.339926 102.339926 0 0 1 797.974834 983.064029l-8.391874 9.824633a102.339926 102.339926 0 0 1-134.884023 10.438673l-9.824633-8.391874-409.359706-397.590614a102.339926 102.339926 0 0 1-10.438673-134.986363l8.391874-9.722293 409.359706-421.128798z" })));
};
/* harmony default export */ __webpack_exports__["a"] = (IconFontSVG);

/***/ }),

/***/ "EPod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("F8kA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template__ = __webpack_require__("Y/qu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__ = __webpack_require__("twBc");






/**
 * use withRouter to listen the change of router
 * withRouter show use outside of Router
 * in typescript is better to use withRouter to constructor HOC than as a decorator
 */
function map_state(state) {
    return {
        signDialogVisible: state.main_reducer.signDialogVisible,
        courseDialogVisible: state.main_reducer.courseDialogVisible,
        playCourseInfo: state.home_reducer.playCourseInfo
    };
}
function map_dispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["b" /* bindActionCreators */])({
        getTemplateListAction: __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__["p" /* getTemplateListAction */],
        getCourseListAction: __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__["o" /* getCourseListAction */]
    }, dispatch);
}
var ViewWithRouter = Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["e" /* withRouter */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(map_state, map_dispatch)(__WEBPACK_IMPORTED_MODULE_4__template__["a" /* ViewRouterComponent */]));
var ViewRouter = function ViewRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* BrowserRouter */], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ViewWithRouter, null));
};

/***/ }),

/***/ "F4/2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("kehq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__ = __webpack_require__("twBc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__("q9Rd");
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cfg__ = __webpack_require__("dpNx");
/* unused harmony reexport config */







var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        courseDialogVisible: state.main_reducer.courseDialogVisible,
        courseList: state.home_reducer.courseList
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__["v" /* setPlayCourseInfoAction */],
        setCourseDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["o" /* setCourseDialogVisibleAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* CourseDialogView */]));

/***/ }),

/***/ "FSbX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("P9xH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__ = __webpack_require__("HXaG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ = __webpack_require__("/FmP");





var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        userInfo: state.main_reducer.userInfo
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        quitCollWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__["y" /* quitCollWorkAction */],
        renameWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__["A" /* renameWorkAction */],
        deleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__["u" /* deleteWorkAction */],
        againDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__["s" /* againDeleteWorkAction */],
        recoverDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__["z" /* recoverDeleteWorkAction */],
        setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__["n" /* setConfirmDialogInfoAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* WorkItemView */]));

/***/ }),

/***/ "Fp3z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonToastView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Alert__ = __webpack_require__("GlfS");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var styles = __webpack_require__("nlA+");
var timeId = void 0;
var CommonToastView = function (_React$Component) {
    _inherits(CommonToastView, _React$Component);

    function CommonToastView(props) {
        _classCallCheck(this, CommonToastView);

        var _this = _possibleConstructorReturn(this, (CommonToastView.__proto__ || Object.getPrototypeOf(CommonToastView)).call(this, props));

        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(CommonToastView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //
        }
    }, {
        key: "handleClose",
        value: function handleClose() {
            var onClose = this.props.commonToastInfo.onClose;

            onClose && onClose();
            this.props.setCommonToastAction({ visible: false });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var _nextProps$commonToas = nextProps.commonToastInfo,
                visible = _nextProps$commonToas.visible,
                _nextProps$commonToas2 = _nextProps$commonToas.duration,
                duration = _nextProps$commonToas2 === undefined ? 2000 : _nextProps$commonToas2;

            if (visible && duration) {
                timeId && window.clearTimeout(timeId);
                timeId = setTimeout(function () {
                    _this2.handleClose();
                }, duration);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props$commonToastInf = this.props.commonToastInfo,
                visible = _props$commonToastInf.visible,
                type = _props$commonToastInf.type,
                message = _props$commonToastInf.message,
                showCloseIcon = _props$commonToastInf.showCloseIcon,
                showPrefixIcon = _props$commonToastInf.showPrefixIcon;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Alert__["a" /* default */], { visible: visible, type: type, message: message, onClose: this.handleClose, showPrefixIcon: showPrefixIcon, styleName: 'cocoToast', showCloseIcon: showCloseIcon });
        }
    }]);

    return CommonToastView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CommonToastView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, { allowMultiple: true })], CommonToastView);


/***/ }),

/***/ "G1ZB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_components_application_sign_in_dialog__ = __webpack_require__("oqxr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__("nFWT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sensorsData__ = __webpack_require__("yI2H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_url__ = __webpack_require__("hVAD");


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








var styles = __webpack_require__("ZbQe");
var serviceAgreementList = [{
    label: '用户协议',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html'
}, {
    label: '隐私协议',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html'
}, {
    label: '儿童隐私保护协议',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html'
}, {
    label: '个人信息保护政策摘要',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html'
}, {
    label: '个人信息收集清单',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html'
}, {
    label: '个人信息共享清单',
    link: 'https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html'
}];
var HeaderView = function (_React$Component) {
    _inherits(HeaderView, _React$Component);

    function HeaderView(props) {
        _classCallCheck(this, HeaderView);

        var _this = _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).call(this, props));

        _this.state = {
            helpDropdownVisible: false
        };
        _this.handleShowCourse = _this.handleShowCourse.bind(_this);
        _this.handleHelpDropdownVisibleChange = _this.handleHelpDropdownVisibleChange.bind(_this);
        _this.handleLogin = _this.handleLogin.bind(_this);
        _this.handleLoginOut = _this.handleLoginOut.bind(_this);
        return _this;
    }

    _createClass(HeaderView, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleLogin",
        value: function handleLogin() {
            this.props.setSignDialogVisibleAction(true);
            // 点击登录按钮埋点
            Object(__WEBPACK_IMPORTED_MODULE_7__sensorsData__["a" /* sensorsCustomReport */])('LoginButtonClick');
        }
    }, {
        key: "handleLoginOut",
        value: function handleLoginOut() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return Object(__WEBPACK_IMPORTED_MODULE_3__crc_catui2_dist_components_application_sign_in_dialog__["b" /* getAuthModule */])().logout();

                            case 3:
                                this.props.asyncSetUserInfoAction(null);
                                _context.next = 9;
                                break;

                            case 6:
                                _context.prev = 6;
                                _context.t0 = _context["catch"](0);

                                console.error('logout ', _context.t0);

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 6]]);
            }));
        }
    }, {
        key: "handleHelpDropdownVisibleChange",
        value: function handleHelpDropdownVisibleChange(visible) {
            this.setState({
                helpDropdownVisible: visible
            });
        }
    }, {
        key: "handleShowCourse",
        value: function handleShowCourse() {
            var _props = this.props,
                courseListVisible = _props.courseListVisible,
                userInfo = _props.userInfo;

            if (!userInfo || userInfo.isNewUser || courseListVisible) {
                return;
            }
            this.props.setCourseDialogVisibleAction(true);
            this.setState({
                helpDropdownVisible: false
            });
        }
    }, {
        key: "handleDocument",
        value: function handleDocument() {
            window.open('https://codemao.yuque.com/kzbwh0/ogrtbo', Date.now().toString());
        }
    }, {
        key: "handleFeedback",
        value: function handleFeedback() {
            window.open('https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd', Date.now().toString());
        }
    }, {
        key: "renderUserInfo",
        value: function renderUserInfo(userInfo) {
            if (userInfo) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Dropdown */], { overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'dropdown' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: "dropdownItem", onClick: function onClick() {
                            return window.open(Object(__WEBPACK_IMPORTED_MODULE_8__utils_url__["a" /* getCommunityAccountSettingUrl */])(), '_blank');
                        } }, "\u8D26\u53F7\u8BBE\u7F6E"), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Dropdown */], { overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: "dropdown agreementDropdown" }, serviceAgreementList.map(function (item, index) {
                            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: index, styleName: "dropdownItem", onClick: function onClick() {
                                    return window.open(item.link, '_blank');
                                } }, item.label);
                        })), placement: "topLeft" }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: "dropdownItem" }, "\u670D\u52A1\u534F\u8BAE", __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { styleName: "subMenuArrow" }, "\u25B6"))), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: this.handleLoginOut }, "\u9000\u51FA\u767B\u5F55")), trigger: ['click'] }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'userInfo' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'userAvatar', style: { backgroundImage: "url(" + userInfo.avatar + ")" } }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-dropdown-down', styleName: 'iconDown' }))));
            }
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'userLogin', onClick: this.handleLogin }, "\u767B\u5F55");
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                courseListVisible = _props2.courseListVisible,
                userInfo = _props2.userInfo;
            var helpDropdownVisible = this.state.helpDropdownVisible;

            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'header' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'left' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("img", { src: 'https://creation.codemao.cn/coco/home/logo.png', styleName: 'logoImg', alt: "" }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'iconItem' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Dropdown */], { overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'dropdown' }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_5_classnames___default()('dropdownItem', (!userInfo || userInfo.isNewUser || courseListVisible) && 'disabled'), onClick: this.handleShowCourse }, "\u5165\u95E8\u6559\u7A0B"), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: this.handleDocument }, "\u5E2E\u52A9\u6587\u6863")), onVisibleChange: this.handleHelpDropdownVisibleChange, visible: helpDropdownVisible, trigger: ['click'] }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-help' }), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-dropdown-down', styleName: 'iconDown' })))), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { styleName: 'iconItem', onClick: this.handleFeedback }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__IconFont__["a" /* default */], { type: 'icon-feedback' }))), this.renderUserInfo(userInfo));
        }
    }]);

    return HeaderView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
HeaderView = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, { allowMultiple: true })], HeaderView);


/***/ }),

/***/ "GlfS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("dCsi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





var Alert = function Alert(props) {
    var _props$type = props.type,
        type = _props$type === undefined ? 'info' : _props$type,
        message = props.message,
        _props$showPrefixIcon = props.showPrefixIcon,
        showPrefixIcon = _props$showPrefixIcon === undefined ? false : _props$showPrefixIcon,
        _props$showCloseIcon = props.showCloseIcon,
        showCloseIcon = _props$showCloseIcon === undefined ? false : _props$showCloseIcon,
        visible = props.visible,
        onClose = props.onClose,
        icon = props.icon,
        className = props.className;

    var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(true),
        _useState2 = _slicedToArray(_useState, 2),
        stateVisible = _useState2[0],
        setStateVisible = _useState2[1];

    Object(__WEBPACK_IMPORTED_MODULE_1_react__["useLayoutEffect"])(function () {
        if (visible !== undefined) {
            setStateVisible(visible);
        }
    }, [visible]);
    var toSetStateVisible = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function (v) {
        if (visible !== undefined) {
            return;
        }
        setStateVisible(v);
    }, [visible]);
    var typeObj = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useMemo"])(function () {
        var iconType = '';
        var typeClass = '';
        switch (type) {
            case 'success':
                iconType = 'icon-alert-success';
                typeClass = 'coco-alert-success';
                break;
            case 'error':
                iconType = 'icon-alert-error';
                typeClass = 'coco-alert-error';
                break;
            case 'info':
                iconType = 'icon-alert-info';
                typeClass = 'coco-alert-info';
                break;
        }
        return {
            icon: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__["a" /* default */], { type: iconType }),
            className: typeClass
        };
    }, [type]);
    var handleClose = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function () {
        toSetStateVisible(false);
        onClose && onClose();
    }, [onClose, toSetStateVisible]);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-alert', typeObj.className, className, !stateVisible && 'coco-alert-hide') }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-alert-content" }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-alert-icon" }, showPrefixIcon && (icon || typeObj.icon)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, message)), showCloseIcon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-alert-close", onClick: handleClose }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__["a" /* default */], { type: "icon-close" })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react__["memo"])(Alert));

/***/ }),

/***/ "GoM7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_intl__ = __webpack_require__("3a5k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_intl__ = __webpack_require__("Pq8k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__i18n__ = __webpack_require__("4Hmg");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var IntlWrapper = function (_React$Component) {
    _inherits(IntlWrapper, _React$Component);

    function IntlWrapper(props) {
        _classCallCheck(this, IntlWrapper);

        // Codemao: use zh as the default language.
        var _this = _possibleConstructorReturn(this, (IntlWrapper.__proto__ || Object.getPrototypeOf(IntlWrapper)).call(this, props));

        var system_lang = 'zh';
        var init_language = system_lang;
        var init_locale = __WEBPACK_IMPORTED_MODULE_5__i18n__["a" /* language_list */][init_language].intl_lang_name;
        var init_messages = __WEBPACK_IMPORTED_MODULE_5__i18n__["a" /* language_list */][init_language].language;
        _this.state = {
            locale: init_locale,
            messages: init_messages
        };
        return _this;
    }

    _createClass(IntlWrapper, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.language == this.props.language) {
                return;
            }
            var locale = __WEBPACK_IMPORTED_MODULE_5__i18n__["a" /* language_list */][nextProps.language].intl_lang_name;
            var messages = __WEBPACK_IMPORTED_MODULE_5__i18n__["a" /* language_list */][nextProps.language].language;
            this.setState({
                locale: locale,
                messages: messages
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_intl__["a" /* IntlProvider */], { locale: this.state.locale, messages: this.state.messages }, this.props.children);
        }
    }]);

    return IntlWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

function mapStateToProps(state) {
    return {
        language: state.main_reducer.language
    };
}
function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_redux__["b" /* bindActionCreators */])({}, dispatch);
}
var IntlWrapperComponent = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(IntlWrapper);

/***/ }),

/***/ "Goqg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"workItem":"workItem_1O_f_","workImage":"workImage_3xrWJ","cover":"cover_MwrcC","image":"image_1dBWm","workType":"workType_33RWx","icon":"icon_2EJeu","workTypeText":"workTypeText_1jfGJ","workDelete":"workDelete_iAnwz","workName":"workName_13QDe","name":"name_rJGIL","inputVisible":"inputVisible_OvdAG","inputHidden":"inputHidden_HsQlF","moreBtn":"moreBtn_33Qdp","recoverBtn":"recoverBtn_ipuXp","workTime":"workTime_29J4A","dropdown":"dropdown_32rRL","dropdownItem":"dropdownItem_275zc"};

/***/ }),

/***/ "HR1v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu":"menu_1w3Mf","menuItem":"menuItem_2T-tv","active":"active_2n4FR","menuIcon":"menuIcon_SvcXz","discover":"discover_1lYjY","menuArrow":"menuArrow_2ESgM"};

/***/ }),

/***/ "HXaG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_CREATE_WORK_OFFSET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return setCreateWorkOffsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_CREATE_WORK_IS_LOADED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return setCreateWorkIsLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_CREATE_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getCreateWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_CREATE_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return setCreateWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_COLL_WORK_OFFSET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return setCollWorkOffsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_COLL_WORK_IS_LOADED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return setCollWorkIsLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_COLL_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getCollWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_COLL_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return setCollWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_DELETE_WORK_OFFSET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return setDeleteWorkOffsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_DELETE_WORK_IS_LOADED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return setDeleteWorkIsLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_DELETE_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getDeleteWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_DELETE_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return setDeleteWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RENAME_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return renameWorkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QUIT_COLL_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return quitCollWorkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return deleteWorkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RECOVER_DELETE_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return recoverDeleteWorkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGAIN_DELETE_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return againDeleteWorkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_DELETED_WORK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return clearDeletedWorkAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");

// 我创建的
var SET_CREATE_WORK_OFFSET_ACTION = 'work/set_create_work_offset';
var setCreateWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_CREATE_WORK_OFFSET_ACTION);
var SET_CREATE_WORK_IS_LOADED_ACTION = 'work/set_create_work_is_loaded';
var setCreateWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_CREATE_WORK_IS_LOADED_ACTION);
var GET_CREATE_WORK_LIST_ACTION = 'work/get_create_work_list';
var getCreateWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_CREATE_WORK_LIST_ACTION);
var SET_CREATE_WORK_LIST_ACTION = 'work/set_create_work_list';
var setCreateWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_CREATE_WORK_LIST_ACTION);
// 我参与的
var SET_COLL_WORK_OFFSET_ACTION = 'work/set_coll_work_offset';
var setCollWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COLL_WORK_OFFSET_ACTION);
var SET_COLL_WORK_IS_LOADED_ACTION = 'work/set_coll_work_is_loaded';
var setCollWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COLL_WORK_IS_LOADED_ACTION);
var GET_COLL_WORK_LIST_ACTION = 'work/get_coll_work_list';
var getCollWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_COLL_WORK_LIST_ACTION);
var SET_COLL_WORK_LIST_ACTION = 'work/set_coll_work_list';
var setCollWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COLL_WORK_LIST_ACTION);
// 回收站作品
var SET_DELETE_WORK_OFFSET_ACTION = 'work/set_delete_work_offset';
var setDeleteWorkOffsetAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_DELETE_WORK_OFFSET_ACTION);
var SET_DELETE_WORK_IS_LOADED_ACTION = 'work/set_delete_work_is_loaded';
var setDeleteWorkIsLoadedAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_DELETE_WORK_IS_LOADED_ACTION);
var GET_DELETE_WORK_LIST_ACTION = 'work/get_delete_work_list';
var getDeleteWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_DELETE_WORK_LIST_ACTION);
var SET_DELETE_WORK_LIST_ACTION = 'work/set_delete_work_list';
var setDeleteWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_DELETE_WORK_LIST_ACTION);
// 作品重命名
var RENAME_WORK_ACTION = 'work/rename_work';
var renameWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(RENAME_WORK_ACTION);
// 退出协作
var QUIT_COLL_WORK_ACTION = 'work/quit_coll_work';
var quitCollWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(QUIT_COLL_WORK_ACTION);
// 删除coco作品到回收站
var DELETE_WORK_ACTION = 'work/delete_work';
var deleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(DELETE_WORK_ACTION);
// 回收站 恢复作品
var RECOVER_DELETE_WORK_ACTION = 'work/recover_delete_work';
var recoverDeleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(RECOVER_DELETE_WORK_ACTION);
// 回收站 彻底删除coco作品
var AGAIN_DELETE_WORK_ACTION = 'work/again_delete_work';
var againDeleteWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(AGAIN_DELETE_WORK_ACTION);
// 清空回收站
var CLEAR_DELETED_WORK_ACTION = 'work/clear_deleted_work';
var clearDeletedWorkAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(CLEAR_DELETED_WORK_ACTION);

/***/ }),

/***/ "IzpB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coco-input-warning":"coco-input-warning_2Ekkk","coco-input-disabled":"coco-input-disabled_3EFsB","coco-input-warning-animation":"coco-input-warning-animation_Sv4AS","warningAnimation":"warningAnimation_1pB8a"};

/***/ }),

/***/ "JPI0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dialog":"dialog_TTaOC","dialogButtons":"dialogButtons_1qXlG","dialogSecondary":"dialogSecondary_2xQWr","denyButton":"denyButton_EK65c"};

/***/ }),

/***/ "KBfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handleChangeLanguage */
/* unused harmony export handleSetUserInfo */
/* unused harmony export handleSetIsNewUser */
/* unused harmony export handleSetUserInfoFetchDone */
/* unused harmony export handleSetSignDialogVisible */
/* unused harmony export handleSetCourseDialogVisible */
/* unused harmony export handleSetCommonToast */
/* unused harmony export handleSetConfirmDialogVisible */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return main_reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__("faTg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony reexport MainReducerState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saga__ = __webpack_require__("ePvC");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__saga__["a"]; });
var _handleActions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initial_state = {
    language: 'zh',
    signDialogVisible: false,
    courseDialogVisible: false,
    userInfo: null,
    userInfoFetchDone: false,
    commonToastInfo: {
        visible: false
    },
    confirmDialogInfo: {
        visible: false
    }
};
var handleChangeLanguage = function handleChangeLanguage(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { language: action.payload.language });
};
var handleSetUserInfo = function handleSetUserInfo(state, action) {
    if (action.payload) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
            userInfo: Object.assign({}, state.userInfo, action.payload)
        });
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { userInfo: null });
};
var handleSetIsNewUser = function handleSetIsNewUser(state, action) {
    if (state.userInfo) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
            userInfo: Object.assign({}, state.userInfo, { isNewUser: action.payload })
        });
    }
};
var handleSetUserInfoFetchDone = function handleSetUserInfoFetchDone(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        userInfoFetchDone: true
    });
};
var handleSetSignDialogVisible = function handleSetSignDialogVisible(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { signDialogVisible: action.payload });
};
var handleSetCourseDialogVisible = function handleSetCourseDialogVisible(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { courseDialogVisible: action.payload });
};
var handleSetCommonToast = function handleSetCommonToast(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { commonToastInfo: action.payload });
};
var handleSetConfirmDialogVisible = function handleSetConfirmDialogVisible(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, { confirmDialogInfo: action.payload });
};
var main_reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ACTION_CHANGE_LANGUAGE */], handleChangeLanguage), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["i" /* SET_USER_INFO_ACTION */], handleSetUserInfo), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["j" /* SET_USER_INFO_FETCH_DONE_ACTION */], handleSetUserInfoFetchDone), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* SET_IS_NEW_USER_ACTION */], handleSetIsNewUser), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["h" /* SET_SIGN_DIALOG_VISIBLE_ACTION */], handleSetSignDialogVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SET_COURSE_DIALOG_VISIBLE_ACTION */], handleSetCourseDialogVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* SET_COMMON_TOAST_ACTION */], handleSetCommonToast), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["e" /* SET_CONFIRM_DIALOG_INFO_ACTION */], handleSetConfirmDialogVisible), _handleActions), initial_state);

/***/ }),

/***/ "KI63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateItemView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var styles = __webpack_require__("RQs1");
var TemplateItemView = function (_React$Component) {
    _inherits(TemplateItemView, _React$Component);

    function TemplateItemView(props) {
        _classCallCheck(this, TemplateItemView);

        var _this = _possibleConstructorReturn(this, (TemplateItemView.__proto__ || Object.getPrototypeOf(TemplateItemView)).call(this, props));

        _this.state = {
            isNewUser: false
        };
        return _this;
    }

    _createClass(TemplateItemView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //
        }
    }, {
        key: "handleTemplateClick",
        value: function handleTemplateClick(id, name) {
            Object(__WEBPACK_IMPORTED_MODULE_3__sensorsData__["a" /* sensorsCustomReport */])('TemplateClick', {
                template_name: name
            });

            var _config = Object(__WEBPACK_IMPORTED_MODULE_2__cfg__["a" /* config */])(),
                cocoEditorUrl = _config.cocoEditorUrl;

            window.open(cocoEditorUrl + "?templateId=" + id, Date.now().toString());
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var item = this.props.item;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'templateItem', onClick: function onClick() {
                    return _this2.handleTemplateClick(item.id, item.name);
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview_url + ")" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: item.gif_url, alt: item.name, styleName: 'gif' })));
        }
    }]);

    return TemplateItemView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
TemplateItemView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, { allowMultiple: true })], TemplateItemView);


/***/ }),

/***/ "Lx+u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("ARYd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__("q9Rd");
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cfg__ = __webpack_require__("dpNx");
/* unused harmony reexport config */






var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        signDialogVisible: state.main_reducer.signDialogVisible
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        asyncSetUserInfoAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["k" /* asyncSetUserInfoAction */],
        setUserInfoFetchDoneAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["s" /* setUserInfoFetchDoneAction */],
        setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["q" /* setSignDialogVisibleAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* SignInDialogView */]));

/***/ }),

/***/ "MNNq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"courseDialog":"courseDialog_Pcsqd","courseList":"courseList_3Q8En","courseItem":"courseItem_2ZgsJ","courseImage":"courseImage_2_kOH","image":"image_nRm-m","mask":"mask_2tBZj","playBox":"playBox_-k79s","courseName":"courseName_iqtM_","courseDesc":"courseDesc_Aojpr","courseMore":"courseMore_2m26I","moreImage":"moreImage_3c8ZE","moreTips":"moreTips_11GMJ"};

/***/ }),

/***/ "MrMw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = update_state;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__("BUAs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);


function update_state(old_value, new_value) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, old_value, new_value);
}

/***/ }),

/***/ "My5k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("F8kA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cfg__ = __webpack_require__("dpNx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var styles = __webpack_require__("HR1v");
var MenuView = function (_React$Component) {
    _inherits(MenuView, _React$Component);

    function MenuView(props) {
        _classCallCheck(this, MenuView);

        return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, props));
    }

    _createClass(MenuView, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleOpenDiscoverUrl",
        value: function handleOpenDiscoverUrl() {
            var _config = Object(__WEBPACK_IMPORTED_MODULE_5__cfg__["a" /* config */])(),
                discoverUrl = _config.discoverUrl;

            window.open(discoverUrl, Date.now().toString());
        }
    }, {
        key: "render_navLink",
        value: function render_navLink(url, content, icon) {
            var current_url = '/' + location.pathname.split('/').pop();
            var active = current_url === url;
            // 主页
            if (url === '/home') {
                active = current_url === '/' || current_url === '/home';
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* NavLink */], { to: url, styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('menuItem', active && 'active') }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__IconFont__["a" /* default */], { type: icon, styleName: 'menuIcon' }), content);
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'menu' }, this.render_navLink('/home', '主页', 'icon-home'), this.render_navLink('/work', '我的作品', 'icon-work'), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'menuItem', onClick: this.handleOpenDiscoverUrl }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'discover' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__IconFont__["a" /* default */], { type: 'icon-discover', styleName: 'menuIcon' }), "\u53D1\u73B0"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__IconFont__["a" /* default */], { type: 'icon-discover-arrow', styleName: 'menuArrow' }))));
        }
    }]);

    return MenuView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
MenuView = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules__(styles, { allowMultiple: true })], MenuView);


/***/ }),

/***/ "P9xH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("nFWT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Input__ = __webpack_require__("YqO9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__ = __webpack_require__("hC2z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var projectNameRegEx = /^[a-zA-Z0-9\u4E00-\u9FFF ()（）\-_']*$/;
var styles = __webpack_require__("Goqg");
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
            if (this.props.workType !== __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].DELETE) {
                var _config = Object(__WEBPACK_IMPORTED_MODULE_4__cfg__["a" /* config */])(),
                    cocoEditorUrl = _config.cocoEditorUrl;

                var id = this.props.item.work_id;
                var role = this.props.item.role;
                // 打开作品埋点
                Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('OpenWork', {
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
            var _config2 = Object(__WEBPACK_IMPORTED_MODULE_4__cfg__["a" /* config */])(),
                cocoEditorUrl = _config2.cocoEditorUrl;

            this.setState({
                dropdownVisible: false
            });
            var id = this.props.item.work_id;
            var role = this.props.item.role;
            setTimeout(function () {
                // 打开作品埋点
                Object(__WEBPACK_IMPORTED_MODULE_9__sensorsData__["a" /* sensorsCustomReport */])('OpenWork', {
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
                        return _this3.props.quitCollWorkAction({ id: id, userId: userInfo.id, workType: workType });
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

            if (workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].HOME || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].CREATE) {
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

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workItem' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('workImage', item.cover_url && item.preview_url && 'cover'), onClick: function onClick() {
                    return _this5.handleSelfOpenWork();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + (item.cover_url || item.preview_url) + ")" } }), (item.is_coll_work || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].COLL) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workType' }, item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__IconFont__["a" /* default */], { type: 'icon-star', styleName: 'icon' }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { styleName: 'workTypeText' }, "\u534F\u4F5C")), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].DELETE && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workDelete', onClick: function onClick(e) {
                    e.preventDefault();
                    _this5.handleAgainDeleteWork();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__IconFont__["a" /* default */], { type: 'icon-delete' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workName' }, !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'name', onDoubleClick: function onDoubleClick() {
                    return _this5.handleDoubleClick();
                } }, item.name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Input__["a" /* default */], { styleName: inputVisible ? 'inputVisible' : 'inputHidden', ref: function ref(e) {
                    return _this5.inputRef = e;
                }, defaultValue: item.name || '', isTrimmed: true, placeholder: "\u8BF7\u8F93\u5165\u4F5C\u54C1\u540D\u79F0", rules: [{ rule: projectNameRegEx }], maxLength: 20, onBlur: this.handleWorkTitleBlur }), workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].DELETE ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'recoverBtn', onClick: function onClick() {
                    return _this5.handleRecoverDeletedWork();
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__IconFont__["a" /* default */], { type: 'icon-recover' })) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Dropdown */], { overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdown' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: function onClick() {
                        return _this5.handleOpenWork();
                    } }, "\u65B0\u6807\u7B7E\u9875\u6253\u5F00"), item.role === 1 && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: function onClick() {
                        return _this5.handleRenameWork();
                    } }, "\u91CD\u547D\u540D"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: function onClick() {
                        return _this5.handleDeleteWork();
                    } }, "\u5220\u9664")), (item.is_coll_work && item.role === 2 || workType === __WEBPACK_IMPORTED_MODULE_8__routes_Work_model_interface__["a" /* EWorkType */].COLL) && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'dropdownItem', onClick: function onClick() {
                        return _this5.handleQuitCollWork();
                    } }, "\u9000\u51FA\u534F\u4F5C")), onVisibleChange: this.handleDropdownVisibleChange, visible: dropdownVisible, trigger: ['click'] }, inputVisible ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'moreBtn' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__IconFont__["a" /* default */], { type: 'icon-more' })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'workTime' }, Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* formatTimestamp */])(item.updated_at || item.update_time)));
        }
    }]);

    return WorkItemView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
WorkItemView = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules__(styles, { allowMultiple: true })], WorkItemView);


/***/ }),

/***/ "RQs1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"templateItem":"templateItem_rMyH8","gif":"gif_1sPty","image":"image_2uJTr","openTemplate":"openTemplate_2XCQQ","templateName":"templateName_2ZQ2c","templateDesc":"templateDesc_2rk92"};

/***/ }),

/***/ "ReOC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayCourseVideoView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var styles = __webpack_require__("V8ar");
var PlayCourseVideoView = function (_React$Component) {
    _inherits(PlayCourseVideoView, _React$Component);

    function PlayCourseVideoView(props) {
        _classCallCheck(this, PlayCourseVideoView);

        var _this = _possibleConstructorReturn(this, (PlayCourseVideoView.__proto__ || Object.getPrototypeOf(PlayCourseVideoView)).call(this, props));

        _this.state = {
            isEnd: false,
            isPause: false
        };
        _this.quitPlayCourse = _this.quitPlayCourse.bind(_this);
        _this.onPlay = _this.onPlay.bind(_this);
        _this.onPause = _this.onPause.bind(_this);
        _this.onEnded = _this.onEnded.bind(_this);
        _this.handlePlay = _this.handlePlay.bind(_this);
        _this.handleNextCourse = _this.handleNextCourse.bind(_this);
        return _this;
    }

    _createClass(PlayCourseVideoView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //
        }
    }, {
        key: "quitPlayCourse",
        value: function quitPlayCourse() {
            this.props.setPlayCourseInfoAction({
                id: -1,
                visible: false
            });
        }
    }, {
        key: "openCourseInEditor",
        value: function openCourseInEditor(id) {
            var _config = Object(__WEBPACK_IMPORTED_MODULE_2__cfg__["a" /* config */])(),
                cocoEditorUrl = _config.cocoEditorUrl;

            window.open(cocoEditorUrl + "?courseId=" + id, Date.now().toString());
            this.quitPlayCourse();
        }
    }, {
        key: "handlePlay",
        value: function handlePlay() {
            this.videoRef.play();
        }
    }, {
        key: "handleNextCourse",
        value: function handleNextCourse() {
            var _props = this.props,
                playCourseInfo = _props.playCourseInfo,
                courseList = _props.courseList;

            var index = courseList.findIndex(function (item) {
                return item.id === playCourseInfo.id;
            });
            if (courseList[index + 1]) {
                var nextId = courseList[index + 1].id;
                this.props.setPlayCourseInfoAction({
                    id: nextId,
                    visible: true
                });
                this.setState({
                    isEnd: false
                });
                Object(__WEBPACK_IMPORTED_MODULE_4__sensorsData__["a" /* sensorsCustomReport */])('CourseClick', {
                    course_id: nextId
                });
            }
        }
    }, {
        key: "onPlay",
        value: function onPlay() {
            this.setState({
                isPause: false,
                isEnd: false
            });
        }
    }, {
        key: "onPause",
        value: function onPause() {
            this.setState({
                isPause: true
            });
        }
    }, {
        key: "onEnded",
        value: function onEnded() {
            this.setState({
                isPause: false,
                isEnd: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                isPause = _state.isPause,
                isEnd = _state.isEnd;
            var _props2 = this.props,
                playCourseInfo = _props2.playCourseInfo,
                courseList = _props2.courseList;

            var course = courseList.find(function (item) {
                return item.id === playCourseInfo.id;
            });
            var index = courseList.findIndex(function (item) {
                return item.id === playCourseInfo.id;
            });
            var isLast = index === courseList.length - 1;
            if (!playCourseInfo.visible || !course) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playVideoBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'content' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'videoTitle' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'title' }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'icon', onClick: this.quitPlayCourse }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: 'icon-close' }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'videoBox' }, isPause && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIcon', onClick: this.handlePlay }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: 'icon-play', styleName: 'play' })), "\u64AD\u653E"), isEnd && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIconBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIconItem' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIcon', onClick: this.handlePlay }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: 'icon-replay', styleName: 'replay' })), "\u91CD\u64AD"), !isLast && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIconItem' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playIcon', onClick: this.handleNextCourse }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: 'icon-next-video', styleName: 'nextVideo' })), "\u4E0B\u4E00\u8282")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'openWorkBtn', onClick: function onClick() {
                    return _this2.openCourseInEditor(course.id);
                } }, "\u8FB9\u770B\u8FB9\u505A")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("video", { ref: function ref(e) {
                    return _this2.videoRef = e;
                }, src: course.video_url, styleName: 'video', autoPlay: true, controls: true, onPlay: this.onPlay, onPause: this.onPause, onEnded: this.onEnded })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseInfo' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'title' }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'desc' }, course.course_intro)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'btn', onClick: function onClick() {
                    return _this2.openCourseInEditor(course.id);
                } }, "\u8FB9\u770B\u8FB9\u505A"))));
        }
    }]);

    return PlayCourseVideoView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
PlayCourseVideoView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, { allowMultiple: true })], PlayCourseVideoView);


/***/ }),

/***/ "TNoC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = homeSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("igqX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("egdi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("twBc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("jnIn");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetBannerList),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetTopicList),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetCourseList),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetTemplateList),
    _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleGetWorkList),
    _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(homeSaga);






function handleGetBannerList() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetBannerList$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/banner/list';
                    _context.prev = 1;
                    _context.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch banner list failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context.sent;

                    if (!(result.code === 200)) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["s" /* setBannerListAction */](result.data));

                case 8:
                    _context.next = 13;
                    break;

                case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](1);

                    false && console.log('fetch banner list error, detail', _context.t0);

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 10]]);
}
function handleGetTopicList() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetTopicList$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/topic/list';
                    _context2.prev = 1;
                    _context2.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch topic list failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context2.sent;

                    if (!(result.code === 200)) {
                        _context2.next = 8;
                        break;
                    }

                    _context2.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["y" /* setTopicListAction */](result.data.items));

                case 8:
                    _context2.next = 13;
                    break;

                case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2['catch'](1);

                    false && console.log('fetch topic list error, detail', _context2.t0);

                case 13:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[1, 10]]);
}
function handleGetCourseList() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetCourseList$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/primary-course/list';
                    _context3.prev = 1;
                    _context3.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch course list failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context3.sent;

                    if (!(result.code === 200)) {
                        _context3.next = 8;
                        break;
                    }

                    _context3.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["t" /* setCourseListAction */](result.data.items));

                case 8:
                    _context3.next = 13;
                    break;

                case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3['catch'](1);

                    false && console.log('fetch course list error, detail', _context3.t0);

                case 13:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this, [[1, 10]]);
}
function handleGetTemplateList() {
    var url, result, list;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetTemplateList$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/sample/list';
                    _context4.prev = 1;
                    _context4.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch template list failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context4.sent;

                    if (!(result.code === 200)) {
                        _context4.next = 10;
                        break;
                    }

                    // 模版随机排序
                    list = result.data.items;

                    list.sort(function (a, b) {
                        return Math.random() > 0.5 ? -1 : 1;
                    });
                    _context4.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["x" /* setTemplateListAction */](list));

                case 10:
                    _context4.next = 15;
                    break;

                case 12:
                    _context4.prev = 12;
                    _context4.t0 = _context4['catch'](1);

                    false && console.log('fetch template list error, detail', _context4.t0);

                case 15:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this, [[1, 12]]);
}
function handleGetWorkList() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleGetWorkList$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/web/work/list/all?limit=20';
                    _context5.prev = 1;
                    _context5.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch work list failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context5.sent;

                    if (!(result.code === 200)) {
                        _context5.next = 9;
                        break;
                    }

                    // work_id、id字段变动兼容
                    result.data.items.forEach(function (item) {
                        item.work_id = item.work_id || item.id;
                    });
                    _context5.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["z" /* setWorkListAction */](result.data.items));

                case 9:
                    _context5.next = 14;
                    break;

                case 11:
                    _context5.prev = 11;
                    _context5.t0 = _context5['catch'](1);

                    false && console.log('fetch work list error, detail', _context5.t0);

                case 14:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this, [[1, 11]]);
}
function homeSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function homeSaga$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* GET_BANNER_LIST_ACTION */], handleGetBannerList);

                case 2:
                    _context6.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["d" /* GET_TOPIC_LIST_ACTION */], handleGetTopicList);

                case 4:
                    _context6.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["b" /* GET_COURSE_LIST_ACTION */], handleGetCourseList);

                case 6:
                    _context6.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["c" /* GET_TEMPLATE_LIST_ACTION */], handleGetTemplateList);

                case 8:
                    _context6.next = 10;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["e" /* GET_WORK_LIST_ACTION */], handleGetWorkList);

                case 10:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked6, this);
}

/***/ }),

/***/ "ULrM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"iconFont":"iconFont_1CwOP"};

/***/ }),

/***/ "USw6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("+NBU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ = __webpack_require__("twBc");




var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        templateList: state.home_reducer.templateList,
        previewTemplateInfo: state.home_reducer.previewTemplateInfo
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setPreviewTemplateInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__["w" /* setPreviewTemplateInfoAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* PreviewTemplateView */]));

/***/ }),

/***/ "V8ar":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"playVideoBox":"playVideoBox_3R8bQ","content":"content_1lamM","videoTitle":"videoTitle_34-sw","title":"title_2GIfX","icon":"icon_2TXPU","videoBox":"videoBox_ZcRCJ","video":"video_3wFvn","playBox":"playBox_1r8Q0","playIconBox":"playIconBox_2M8e4","playIconItem":"playIconItem_3v39u","playIcon":"playIcon_32Gw_","play":"play_pyrqt","replay":"replay_31haf","nextVideo":"nextVideo_MpYAL","openWorkBtn":"openWorkBtn_1cx3x","courseInfo":"courseInfo_wrVIX","desc":"desc_16Cms","btn":"btn_Xghow"};

/***/ }),

/***/ "VaJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zh_TW; });
var zh_TW = {
    "work/project_title": "我的作品"
};

/***/ }),

/***/ "XdPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("1mrc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);




var Button = function Button(props) {
    var type = props.type,
        icon = props.icon,
        onClick = props.onClick,
        disabled = props.disabled,
        _props$style = props.style,
        style = _props$style === undefined ? {} : _props$style,
        className = props.className,
        danger = props.danger,
        children = props.children,
        _props$shape = props.shape,
        shape = _props$shape === undefined ? 'circle' : _props$shape;

    var generateClassName = function generateClassName() {
        var basic = 'coco-button-';
        var typeClass = type ? basic + type : '';
        var dangerClass = danger ? basic + 'dangerous' : '';
        var shapeClass = shape ? basic + shape : '';
        return typeClass + ' ' + dangerClass + ' ' + shapeClass;
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-button', generateClassName(), className), disabled: disabled, style: style, onClick: onClick }, icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__["a" /* default */], { type: icon }), children);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react__["memo"])(Button));

/***/ }),

/***/ "Y/qu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRouterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("F8kA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("sEiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_IconFont_IconFontSvg__ = __webpack_require__("DYHF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("sdA1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlayCourseVideo__ = __webpack_require__("AvcO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreviewTemplate__ = __webpack_require__("USw6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SignInDialog__ = __webpack_require__("Lx+u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CourseDialog__ = __webpack_require__("F4/2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CommonToast__ = __webpack_require__("jdSs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ConfirmDialog__ = __webpack_require__("kwR3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home__ = __webpack_require__("hCpk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable__ = __webpack_require__("wF3A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var Work = __WEBPACK_IMPORTED_MODULE_12_react_loadable__({
    loader: function loader() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "Pv6Z"));
    },
    loading: function loading() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: '400px' } });
    }
});
var ViewRouterComponent = function (_React$Component) {
    _inherits(ViewRouterComponent, _React$Component);

    function ViewRouterComponent(props) {
        _classCallCheck(this, ViewRouterComponent);

        return _possibleConstructorReturn(this, (ViewRouterComponent.__proto__ || Object.getPrototypeOf(ViewRouterComponent)).call(this, props));
    }

    _createClass(ViewRouterComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getTemplateListAction();
            this.props.getCourseListAction();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                playCourseInfo = _props.playCourseInfo,
                courseDialogVisible = _props.courseDialogVisible;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { minWidth: '990px' } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* Header */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_IconFont_IconFontSvg__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: playCourseInfo.visible || courseDialogVisible ? 'blur' : '' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* Menu */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Switch */], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/home", exact: true, component: __WEBPACK_IMPORTED_MODULE_11__Home__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/work", exact: true, component: Work }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/", strict: true, exact: true, component: __WEBPACK_IMPORTED_MODULE_11__Home__["a" /* default */] }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__components_CommonToast__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__components_ConfirmDialog__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_SignInDialog__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_CourseDialog__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_PlayCourseVideo__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_PreviewTemplate__["a" /* default */], null));
        }
    }]);

    return ViewRouterComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "YqO9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("IzpB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





var minusRegEx = /^-+$/;
var numberRegEx = /^(-|\+)?\d*$/;
var formatNumberOnBlurEvent = function formatNumberOnBlurEvent(value, max, min) {
    var number = parseFloat(value) || 0;
    if (min !== undefined) {
        number = Math.max(number, min);
    }
    if (max !== undefined) {
        number = Math.min(number, max);
    }
    return number.toString();
};
var formatNumberValueOnChangeEvent = function formatNumberValueOnChangeEvent(value, max) {
    var status = 'success';
    if (!numberRegEx.test(value)) {
        status = 'fail';
    }
    var number = parseFloat(value);
    // 超过最大值会报错，但超过最小值不会
    if (max && number > max) {
        status = 'fail';
        number = max;
    }
    return {
        status: status,
        value: isNaN(number) ? '' : number.toString()
    };
};
var formatNumberRulesOnChangeEvent = function formatNumberRulesOnChangeEvent(value, oldValue, rules) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var rule = _step.value;

            var result = value.match(rule.rule);
            if (!result) {
                return {
                    status: 'fail',
                    value: oldValue,
                    massage: rule.message
                };
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return { status: 'success', value: value };
};
var formatOnChangeEvent = function formatOnChangeEvent(value, oldInputValueRef, maxLength, rules) {
    var oldValue = oldInputValueRef.current;
    if (value !== '') {
        // rule verify
        if (rules) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var rule = _step2.value;

                    var result = value.match(rule.rule);
                    if (!result) {
                        return {
                            status: 'fail',
                            value: oldValue,
                            massage: rule.message
                        };
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
        // 未超过最大长度 or 删除字符时
        if (maxLength && (value.length <= maxLength || value.length < oldValue.length)) {
            oldInputValueRef.current = value;
            return { status: 'success', value: value };
        }
        // maxLength verify
        if (maxLength !== undefined && value.length > oldValue.length) {
            return {
                status: 'fail',
                value: oldValue,
                massage: 'The maximum support length is exceeded'
            };
        }
    }
    var start = -1;
    for (var i = 0; i < value.length; i++) {
        if (value[i] !== oldValue[i]) {
            start = i; // value 与 oldValue 差异开始的地方
            break;
        }
    }
    if (start > -1) {
        var newInputValue = oldValue;
        for (var _i = start; _i < value.length; _i++) {
            var str = oldValue.slice(0, start) + value.slice(start, _i) + oldValue.slice(start);
            if (maxLength !== undefined && str.length > maxLength) {
                break;
            }
            newInputValue = str;
        }
        oldInputValueRef.current = newInputValue;
        return { status: 'success', value: newInputValue };
    }
    return { status: 'success', value: value };
};
var animationTimeId = void 0;
var Input = function Input(props, ref) {
    var warning = props.warning,
        placeholder = props.placeholder,
        value = props.value,
        defaultValue = props.defaultValue,
        onChange = props.onChange,
        onBlur = props.onBlur,
        onClick = props.onClick,
        onMouseDown = props.onMouseDown,
        onKeyDown = props.onKeyDown,
        onFocus = props.onFocus,
        onCompositionStart = props.onCompositionStart,
        onCompositionEnd = props.onCompositionEnd,
        onClearCallback = props.onClearCallback,
        before = props.before,
        after = props.after,
        style = props.style,
        className = props.className,
        max = props.max,
        min = props.min,
        maxLength = props.maxLength,
        disabled = props.disabled,
        _props$type = props.type,
        type = _props$type === undefined ? 'text' : _props$type,
        dependency = props.dependency,
        rules = props.rules,
        _props$readOnly = props.readOnly,
        readOnly = _props$readOnly === undefined ? false : _props$readOnly,
        _props$isTrimmed = props.isTrimmed,
        isTrimmed = _props$isTrimmed === undefined ? false : _props$isTrimmed,
        clearButtonVisible = props.clearButtonVisible;

    var _useState = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        isFocused = _useState2[0],
        setIsFocused = _useState2[1];

    var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isWarningAnimation = _useState4[0],
        setWarningAnimation = _useState4[1];

    var inputRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
    var oldInputValueRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(''); // 记录input 框改变前的value

    var _useState5 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(!!defaultValue || !!value),
        _useState6 = _slicedToArray(_useState5, 2),
        isEmptyValue = _useState6[0],
        setIsEmptyValue = _useState6[1];

    var isCompositionEnd = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(true);
    // 记录上一次输入框数据
    // NOTE: reset input value when dependency changed
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
        var inputEl = inputRef.current;
        if (value === undefined && inputEl) {
            inputEl.value = defaultValue === undefined ? '' : defaultValue.toString().substr(0, maxLength || Infinity);
            setIsEmptyValue(!inputEl.value);
        } else if (value) {
            setIsEmptyValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputRef, dependency, value, defaultValue]);
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
        var inputEl = inputRef.current;
        if (value !== undefined && inputEl) {
            inputEl.value = value.toString().substr(0, maxLength);
        }
    }, [inputRef, value, maxLength]);
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useImperativeHandle"])(ref, function () {
        if (inputRef.current) {
            return {
                input: inputRef.current,
                value: inputRef.current.value || '',
                focus: function focus() {
                    return inputRef.current.focus();
                },
                blur: function blur() {
                    return inputRef.current.blur();
                },
                select: function select() {
                    return inputRef.current.select();
                }
            };
        }
        return {
            input: inputRef.current,
            value: ''
        };
    });
    var handleChangeWhenNumberType = function handleChangeWhenNumberType(e) {
        var inputEL = inputRef.current;
        if (!inputEL) {
            return;
        }
        var inputValue = inputEL.value;
        if (rules) {
            var _formatResult = formatNumberRulesOnChangeEvent(inputValue, oldInputValueRef.current, rules);
            if (_formatResult.status === 'fail') {
                handleFormatResult(_formatResult);
                inputEL.value = _formatResult.value;
                return;
            }
        }
        if (minusRegEx.test(inputValue)) {
            // 多个 “-” 号改为一个 “-” 号
            inputEL.value = '-';
            return;
        }
        var formatResult = formatNumberValueOnChangeEvent(inputValue, max);
        handleFormatResult(formatResult);
        inputEL.value = formatResult.value;
        // 如果input 的值小于最小值时,直接返回，不触发onChange事件
        if (min && Number(formatResult.value) < min) {
            return;
        }
        onChange && onChange(formatResult.value || '0', e);
    };
    var handleChangeWhenTextType = function handleChangeWhenTextType(e) {
        var resultValue = handleFormarTextResult();
        resultValue !== undefined && onChange && onChange(resultValue, e);
    };
    var handleFormarTextResult = function handleFormarTextResult() {
        var inputEL = inputRef.current;
        if (!inputEL) {
            return;
        }
        var inputValue = inputEL.value;
        var resultValue = inputValue;
        var formatResult = formatOnChangeEvent(inputValue, oldInputValueRef, maxLength, rules);
        resultValue = formatResult.value;
        if (!isCompositionEnd.current) {
            resultValue = inputValue;
        }
        inputEL.value = resultValue;
        handleFormatResult(formatResult);
        return resultValue;
    };
    var handleChange = function handleChange(e) {
        setIsEmptyValue(!e.target.value);
        if (type === 'number') {
            handleChangeWhenNumberType(e);
        } else {
            handleChangeWhenTextType(e);
        }
    };
    var handleFormatResult = function handleFormatResult(result) {
        if (result.status === 'fail') {
            if (!animationTimeId) {
                setWarningAnimation(true);
                animationTimeId = setTimeout(function () {
                    setWarningAnimation(false);
                    animationTimeId = null;
                }, 600);
            }
        } else {
            setWarningAnimation(false);
        }
    };
    var handleFocus = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])(function (e) {
        setIsFocused(true);
        onFocus && onFocus(e);
    }, [onFocus]);
    var handleBlur = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])(function (e) {
        setIsFocused(false);
        var inputEL = inputRef.current;
        if (!inputEL) {
            return;
        }
        var previousV = inputEL.value;
        var lastV = inputEL.value;
        if (type === 'number') {
            lastV = formatNumberOnBlurEvent(previousV, max, min);
        }
        if (isTrimmed) {
            lastV = lastV.trim();
        }
        inputEL.value = lastV;
        onBlur && onBlur(lastV, e);
        lastV !== previousV && onChange && onChange(lastV, e);
    }, [inputRef, type, isTrimmed, onBlur, onChange, max, min]);
    var handleKeydown = function handleKeydown(e) {
        var inputEL = inputRef.current;
        if (!inputEL) {
            return;
        }
        if (e.keyCode === 13) {
            inputEL.blur();
        }
        onKeyDown && onKeyDown(e);
    };
    var handleClearButtonMouseDown = function handleClearButtonMouseDown(e) {
        var inputEl = inputRef.current;
        e.stopPropagation();
        e.preventDefault();
        if (inputEl) {
            inputEl.value = '';
            inputEl.focus();
            setIsEmptyValue(true);
            onClearCallback && onClearCallback();
        }
    };
    var handleCompositionStart = function handleCompositionStart() {
        isCompositionEnd.current = false;
        onCompositionStart && onCompositionStart();
    };
    var handleCompositionEnd = function handleCompositionEnd(e) {
        isCompositionEnd.current = true;
        handleFormarTextResult();
        onCompositionEnd && onCompositionEnd(e);
    };
    var otherProps = {
        disabled: disabled,
        placeholder: placeholder,
        value: value
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('coco-input', className, {
            'coco-input-focus': isFocused,
            'coco-input-disabled': disabled,
            'coco-input-warning': warning,
            'coco-input-warning-animation': isWarningAnimation
        }), style: style }, before, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", Object.assign({ ref: inputRef, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, onClick: onClick, onMouseDown: onMouseDown, onKeyDown: handleKeydown, readOnly: readOnly, onCompositionStart: handleCompositionStart, onCompositionEnd: handleCompositionEnd }, otherProps)), clearButtonVisible && !isEmptyValue && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { onMouseDown: handleClearButtonMouseDown, className: "coco-input-clear-button" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__["a" /* default */], { type: "icon-close" })), after);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.memo(__WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(Input)));

/***/ }),

/***/ "ZbQe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header_2854b","left":"left_cCjn1","logoImg":"logoImg_3iTn4","iconItem":"iconItem_2g1V2","iconDown":"iconDown_Er36u","userLogin":"userLogin_2neno","userInfo":"userInfo_1-u35","userAvatar":"userAvatar_3V2fO","dropdown":"dropdown_OyFm9","dropdownItem":"dropdownItem_2NcDk","subMenuArrow":"subMenuArrow_Bkbbi","disabled":"disabled_310JS","agreementDropdown":"agreementDropdown_2te5z"};

/***/ }),

/***/ "aJKZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"previewTemplate":"previewTemplate_3xQAV","quitPreviewBtn":"quitPreviewBtn_1uZjq","icon":"icon_1or6f","templateList":"templateList_2-vzt","templateItem":"templateItem_h5yLB","imageBox":"imageBox_XTN5l","gif":"gif_2Q2Pd","image":"image_1PUQY","name":"name_1Oc8V","desc":"desc_xp7PJ","blue":"blue_3OTiU","yellow":"yellow_2zgMy","purple":"purple_IP9eP","active":"active_2yLFs","previewBtnBox":"previewBtnBox_nPGIc","btnItem":"btnItem_1pLKo","howBtn":"howBtn_3vSZD","content":"content_3CGme","dropdown":"dropdown_2Crxb","qrcodeImage":"qrcodeImage_1cOkY"};

/***/ }),

/***/ "af2z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return en_US; });
var en_US = {
    "work/project_title": "My Project"
};

/***/ }),

/***/ "cw5f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dCsi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coco-alert-icon":"coco-alert-icon_2BXrH"};

/***/ }),

/***/ "dpNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getEnvironment;
/* harmony export (immutable) */ __webpack_exports__["a"] = config;
function getEnvironment() {
    var hostname = window.location.hostname;

    if (hostname.startsWith('dev') || hostname === 'localhost') {
        return 'dev';
    } else if (hostname.startsWith('test')) {
        return 'test';
    } else if (hostname.startsWith('staging')) {
        return 'staging';
    } else {
        return 'prod';
    }
}
/**
 * Function for retrieving the runtime configuration. If the configuration
 * file hasn't been downloaded yet, show a loader and wait until it has.
 *
 * @return {IConfig} the loaded configuration
 */
function config() {
    var env = getEnvironment();
    var prefix = void 0;
    switch (env) {
        case 'test':
            prefix = 'test-';
            break;
        case 'staging':
            prefix = 'staging-';
            break;
        case 'dev':
            prefix = 'dev-';
            break;
        case 'prod':
        default:
            prefix = '';
            break;
    }
    return {
        env: env,
        pid: '7KeVbBdw',
        productCode: 'appcraft',
        cocoEditorUrl: 'https://' + prefix + 'coco.codemao.cn/editor',
        discoverUrl: 'https://shequ.codemao.cn/gallery/14700',
        backendHost: 'https://' + prefix + 'api-creation.codemao.cn',
        oTServerHost: 'https://' + prefix + 'socketcoll.codemao.cn',
        openServiceHost: 'https://' + prefix + 'open-service.codemao.cn'
    };
}

/***/ }),

/***/ "eHP9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handleSetBannerList */
/* unused harmony export handleSetTopicList */
/* unused harmony export handleSetCourseList */
/* unused harmony export handleSetTemplateList */
/* unused harmony export handleSetWorkList */
/* unused harmony export handleSetCourseListVisible */
/* unused harmony export handleSetPlayCourseInfo */
/* unused harmony export handleSetPreviewTemplateInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("twBc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__("vDhS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony reexport HomeReducerState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saga__ = __webpack_require__("TNoC");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__saga__["a"]; });
var _handleActions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initial_state = {
    courseListVisible: !localStorage.getItem('homeCourseListVisible'),
    playCourseInfo: {
        visible: false,
        id: -1
    },
    previewTemplateInfo: {
        visible: false,
        id: -1
    },
    bannerList: [],
    topicList: [],
    courseList: [],
    templateList: [],
    workList: []
};
var handleSetBannerList = function handleSetBannerList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        bannerList: action.payload
    });
};
var handleSetTopicList = function handleSetTopicList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        topicList: action.payload
    });
};
var handleSetCourseList = function handleSetCourseList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        courseList: action.payload
    });
};
var handleSetTemplateList = function handleSetTemplateList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        templateList: action.payload
    });
};
var handleSetWorkList = function handleSetWorkList(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        workList: action.payload
    });
};
var handleSetCourseListVisible = function handleSetCourseListVisible(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        courseListVisible: action.payload
    });
};
var handleSetPlayCourseInfo = function handleSetPlayCourseInfo(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        playCourseInfo: action.payload
    });
};
var handleSetPreviewTemplateInfo = function handleSetPreviewTemplateInfo(state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* update_state */])(state, {
        previewTemplateInfo: action.payload
    });
};
var homeReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SET_BANNER_LIST_ACTION */], handleSetBannerList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["l" /* SET_TOPIC_LIST_ACTION */], handleSetTopicList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* SET_COURSE_LIST_ACTION */], handleSetCourseList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["k" /* SET_TEMPLATE_LIST_ACTION */], handleSetTemplateList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["m" /* SET_WORK_LIST_ACTION */], handleSetWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["h" /* SET_COURSE_LIST_VISIBLE_ACTION */], handleSetCourseListVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["i" /* SET_PLAY_COURSE_INFO_ACTION */], handleSetPlayCourseInfo), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__["j" /* SET_PREVIEW_TEMPLATE_INFO_ACTION */], handleSetPreviewTemplateInfo), _handleActions), initial_state);

/***/ }),

/***/ "ePvC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mainSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("igqX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("egdi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("jnIn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__ = __webpack_require__("HXaG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__ = __webpack_require__("twBc");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleIsNewUser),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(handleAsyncSetUserInfo),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(mainSaga);








function handleIsNewUser() {
    var url, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleIsNewUser$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    url = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* get_api_prefix */])() + '/coconut/web/user_type';
                    _context.prev = 1;
                    _context.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url, {
                        withCredentials: true
                    }).then(function (res) {
                        return res.data;
                    }).catch(function (err) {
                        false && console.log('fetch is new user failed, detail:', err);
                        throw err;
                    });

                case 4:
                    result = _context.sent;
                    _context.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["p" /* setIsNewUserAction */](result === 0 ? false : true));

                case 7:
                    _context.next = 12;
                    break;

                case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](1);

                    false && console.log('fetch is new user error, detail', _context.t0);

                case 12:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 9]]);
}
function handleAsyncSetUserInfo(action) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function handleAsyncSetUserInfo$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["r" /* setUserInfoAction */](action.payload));

                case 2:
                    if (!action.payload) {
                        _context2.next = 13;
                        break;
                    }

                    _context2.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["l" /* getIsNewUserAction */]());

                case 5:
                    _context2.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__["w" /* getCreateWorkListAction */])({
                        name: '',
                        offset: 0
                    }));

                case 7:
                    _context2.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__["v" /* getCollWorkListAction */])({
                        name: '',
                        offset: 1
                    }));

                case 9:
                    _context2.next = 11;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__["r" /* getWorkListAction */])());

                case 11:
                    _context2.next = 19;
                    break;

                case 13:
                    _context2.next = 15;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__["F" /* setCreateWorkListAction */])([]));

                case 15:
                    _context2.next = 17;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__["C" /* setCollWorkListAction */])([]));

                case 17:
                    _context2.next = 19;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__["z" /* setWorkListAction */])([]));

                case 19:
                    _context2.next = 21;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* put */])(__WEBPACK_IMPORTED_MODULE_4__actions__["s" /* setUserInfoFetchDoneAction */]());

                case 21:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}
function mainSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function mainSaga$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["c" /* GET_IS_NEW_USER_ACTION */], handleIsNewUser);

                case 2:
                    _context3.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__actions__["b" /* ASYNC_SET_USER_INFO_ACTION */], handleAsyncSetUserInfo);

                case 4:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

/***/ }),

/***/ "eseu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("KI63");



var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({}, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplateItemView */]));

/***/ }),

/***/ "faTg":
/***/ (function(module, exports) {



/***/ }),

/***/ "hC2z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EWorkType; });
var EWorkType;
(function (EWorkType) {
    EWorkType["CREATE"] = "CREATE";
    EWorkType["COLL"] = "COLL";
    EWorkType["HOME"] = "HOME";
    EWorkType["DELETE"] = "DELETE";
})(EWorkType || (EWorkType = {}));

/***/ }),

/***/ "hCpk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("+DtV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_actions__ = __webpack_require__("twBc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ = __webpack_require__("/FmP");





var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        userInfo: state.main_reducer.userInfo,
        userInfoFetchDone: state.main_reducer.userInfoFetchDone,
        courseListVisible: state.home_reducer.courseListVisible,
        bannerList: state.home_reducer.bannerList,
        topicList: state.home_reducer.topicList,
        courseList: state.home_reducer.courseList,
        templateList: state.home_reducer.templateList,
        workList: state.home_reducer.workList
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        getBannerListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["n" /* getBannerListAction */],
        getTopicListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["q" /* getTopicListAction */],
        getCourseListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["o" /* getCourseListAction */],
        getTemplateListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["p" /* getTemplateListAction */],
        getWorkListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["r" /* getWorkListAction */],
        setCourseListVisibleAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["u" /* setCourseListVisibleAction */],
        setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["v" /* setPlayCourseInfoAction */],
        setPreviewTemplateInfoAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__["w" /* setPreviewTemplateInfoAction */],
        setCommonToastAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__["m" /* setCommonToastAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* HomeView */]));

/***/ }),

/***/ "hVAD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getUrlParams;
/* unused harmony export getOriginPrefix */
/* harmony export (immutable) */ __webpack_exports__["a"] = getCommunityAccountSettingUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cfg__ = __webpack_require__("dpNx");

function getUrlSearchParams(queryString) {
    var searchParams = new URLSearchParams(queryString);
    var key = 'inviteCode';
    var value = searchParams.get(key);
    // inviteCode字段内带有空格和描述型文字，在这里去掉
    value && searchParams.set(key, value.split(' ')[0]);
    return searchParams;
}
function getUrlParams(url) {
    var obj = {};
    var queryString = url.split('?')[1];
    if (!queryString) {
        return {};
    }
    var params = getUrlSearchParams(queryString);
    Array.from(params).forEach(function (item) {
        obj[item[0]] = item[1];
    });
    return obj;
}
function getOriginPrefix() {
    var evn = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__["a" /* config */])().env;
    var prefix = '';
    if (evn === 'dev') {
        prefix = 'dev-';
    } else if (evn === 'test') {
        prefix = 'test-';
    } else if (evn === 'staging') {
        prefix = 'staging-';
    }
    return prefix;
}
function getCommunityAccountSettingUrl() {
    return 'https://' + getOriginPrefix() + 'shequ.codemao.cn/setting';
}

/***/ }),

/***/ "iCOP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"blur":"blur_4WGRU"};

/***/ }),

/***/ "inl5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RiskyContentError */
/* unused harmony export generateID */
/* unused harmony export getFileExtension */
/* unused harmony export uploadFileToCdn */
/* harmony export (immutable) */ __webpack_exports__["a"] = uploadProjectJsonToCdn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cmao_cdn_uploader__ = __webpack_require__("Slns");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shortid__ = __webpack_require__("Z8es");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cfg__ = __webpack_require__("dpNx");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



var cfg = Object(__WEBPACK_IMPORTED_MODULE_3__cfg__["a" /* config */])();
var uploadClient = new __WEBPACK_IMPORTED_MODULE_1__cmao_cdn_uploader__["a" /* default */]({
    env: cfg.env,
    projectName: cfg.productCode,
    config: {
        pid: cfg.pid,
        api: cfg.openServiceHost
    }
});
var RiskyContentError = function (_Error) {
    _inherits(RiskyContentError, _Error);

    function RiskyContentError(uploadResult, message) {
        _classCallCheck(this, RiskyContentError);

        var _this = _possibleConstructorReturn(this, (RiskyContentError.__proto__ || Object.getPrototypeOf(RiskyContentError)).call(this, message));

        _this.uploadResult = uploadResult;
        return _this;
    }

    return RiskyContentError;
}(Error);
__WEBPACK_IMPORTED_MODULE_2_shortid___default.a.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
function generateID(prefix) {
    var id = __WEBPACK_IMPORTED_MODULE_2_shortid___default.a.generate();
    return prefix + '_' + id;
}
function getFileExtension(fileName) {
    var index = fileName.lastIndexOf('.');
    if (index > -1) {
        return fileName.slice(index).toLowerCase();
    }
    return '';
}
function uploadFileToCdn(file) {
    var fileType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'IMAGE';

    return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var fileName, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        fileName = file instanceof File ? file.name : '';
                        _context.next = 3;
                        return new Promise(function (resolve, reject) {
                            uploadClient.create(file, {
                                // FIXED: file.name有特殊符号（[、]、...）时，请求上传会失败，临时用随机ID代替
                                filename: cfg.productCode + '/' + generateID(fileType) + '_' + Date.now() + getFileExtension(fileName),
                                onsuccess: function onsuccess(res) {
                                    return resolve(res);
                                },
                                onerror: function onerror(err) {
                                    return reject(err);
                                }
                            }).then(function (uploader) {
                                return uploader && uploader.start();
                            }).catch(function (err) {
                                return reject(err);
                            });
                        });

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}
function uploadProjectJsonToCdn(content) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var blob, file, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        blob = new Blob([content], {
                            type: 'application/json,charset=utf-8;'
                        });
                        file = new File([blob], 'project.json', { type: blob.type });
                        _context2.next = 4;
                        return uploadFileToCdn(file, 'JSON');

                    case 4:
                        result = _context2.sent;
                        return _context2.abrupt('return', result.url);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
}

/***/ }),

/***/ "jdSs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("Fp3z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ = __webpack_require__("/FmP");




var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        commonToastInfo: state.main_reducer.commonToastInfo
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setCommonToastAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["m" /* setCommonToastAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* CommonToastView */]));

/***/ }),

/***/ "jnIn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validate_password */
/* unused harmony export is_connecting */
/* harmony export (immutable) */ __webpack_exports__["b"] = get_api_prefix;
/* harmony export (immutable) */ __webpack_exports__["c"] = get_coll_prefix;
/* harmony export (immutable) */ __webpack_exports__["a"] = formatTimestamp;
/* unused harmony export is_win64 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cfg__ = __webpack_require__("dpNx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_utils__ = __webpack_require__("MrMw");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__redux_utils__["a"]; });


function validate_password(input) {
    return (/^[0-9a-zA-Z]{6,}$/.test(input)
    );
}
function is_connecting() {
    return navigator.onLine;
}
function get_api_prefix() {
    var _config = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__["a" /* config */])(),
        backendHost = _config.backendHost;

    return backendHost;
}
function get_coll_prefix() {
    var _config2 = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__["a" /* config */])(),
        oTServerHost = _config2.oTServerHost;

    return oTServerHost;
}
function formatTimestamp(timestamp) {
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear() + '';
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var format_y = year;
    var format_m = month < 10 ? '0' + month : month;
    var format_d = day < 10 ? '0' + day : day;
    var format_h = hours < 10 ? '0' + hours : hours;
    var format_min = minute < 10 ? '0' + minute : minute;
    var format_s = hours < 10 ? '0' + second : second;
    return format_y + '-' + format_m + '-' + format_d + ' ' + format_h + ':' + format_min + ':' + format_s;
}
function is_win64() {
    var userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('win64') || userAgent.includes('wow64') || navigator.platform === 'Win64';
}

/***/ }),

/***/ "kQfo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("O27J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__("A8ak");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






var DIALOG_CONTAINER_ID = '_cocoDialogContainer';
var Dialog = function Dialog(props) {
    var className = props.className,
        style = props.style,
        visible = props.visible,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? false : _props$maskClosable,
        _props$mask = props.mask,
        mask = _props$mask === undefined ? true : _props$mask,
        onClose = props.onClose,
        children = props.children,
        _props$showCloseButto = props.showCloseButton,
        showCloseButton = _props$showCloseButto === undefined ? true : _props$showCloseButto,
        _props$withPortal = props.withPortal,
        withPortal = _props$withPortal === undefined ? false : _props$withPortal,
        title = props.title,
        footer = props.footer;

    var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        display = _useState2[0],
        setDisplay = _useState2[1];
    // 创建一个放置 dialog 的容器


    var container = document.getElementById(DIALOG_CONTAINER_ID);
    if (!container) {
        container = document.createElement('div');
        container.id = DIALOG_CONTAINER_ID;
        document.body.appendChild(container);
    }
    var handleClickClose = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function () {
        onClose && onClose();
    }, [onClose]);
    var handleMaskClick = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function () {
        maskClosable && handleClickClose();
    }, [handleClickClose, maskClosable]);
    Object(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
        if (visible) {
            setDisplay(true);
        }
    }, [visible]);
    var animationEnd = function animationEnd() {
        if (!visible) {
            setDisplay(false);
        }
    };
    var dialog = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { "data-html2canvas-ignore": "true", tabIndex: -1, className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-dialog', className), style: Object.assign({ display: visible ? 'block' : 'none' }, style) }, mask && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: visible ? 'coco-dialog-mask' : __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-dialog-mask', 'hidden'), onClick: handleMaskClick }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-dialog-scroll" }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: visible ? __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-dialog-wrapper', 'show') : __WEBPACK_IMPORTED_MODULE_0_classnames___default()('coco-dialog-wrapper', 'hidden'), onAnimationEnd: animationEnd }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: title && showCloseButton ? 'coco-dialog-title' : '' }, title && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, title), showCloseButton && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", { className: "coco-dialog-close", onClick: handleClickClose }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: "icon-close" }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-dialog-content" }, children), footer && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "coco-dialog-footer" }, footer))));
    if (withPortal) {
        return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.createPortal(dialog, container);
    } else {
        return dialog;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react__["memo"])(Dialog));

/***/ }),

/***/ "kehq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDialogView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__("211U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog__ = __webpack_require__("kQfo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconFont__ = __webpack_require__("zVV7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensorsData__ = __webpack_require__("yI2H");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var styles = __webpack_require__("MNNq");
var CourseDialogView = function (_React$Component) {
    _inherits(CourseDialogView, _React$Component);

    function CourseDialogView(props) {
        _classCallCheck(this, CourseDialogView);

        var _this = _possibleConstructorReturn(this, (CourseDialogView.__proto__ || Object.getPrototypeOf(CourseDialogView)).call(this, props));

        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(CourseDialogView, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleClose",
        value: function handleClose() {
            this.props.setCourseDialogVisibleAction(false);
        }
    }, {
        key: "handlePlayCourse",
        value: function handlePlayCourse(id) {
            this.props.setPlayCourseInfoAction({
                id: id,
                visible: true
            });
            this.props.setCourseDialogVisibleAction(false);
            Object(__WEBPACK_IMPORTED_MODULE_4__sensorsData__["a" /* sensorsCustomReport */])('CourseClick', {
                course_id: id
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                courseDialogVisible = _props.courseDialogVisible,
                courseList = _props.courseList;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Dialog__["a" /* default */], { withPortal: true, visible: courseDialogVisible, showCloseButton: true, className: '', title: "\u5165\u95E8\u6559\u7A0B", styleName: 'courseDialog', onClose: this.handleClose }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseList' }, courseList.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseItem', key: item.id, onClick: function onClick() {
                        return _this2.handlePlayCourse(item.id);
                    } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseImage' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'image', style: { backgroundImage: "url(" + item.preview + ")" } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'mask' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'playBox' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__IconFont__["a" /* default */], { type: 'icon-play' })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseName' }, item.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseDesc' }, item.course_intro));
            }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'courseMore' }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'moreImage' }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { styleName: 'moreTips' }, "\u66F4\u591A\u7CBE\u5F69\uFF0C\u656C\u8BF7\u671F\u5F85"))));
        }
    }]);

    return CourseDialogView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CourseDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, { allowMultiple: true })], CourseDialogView);


/***/ }),

/***/ "kwR3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("/TF1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__("q9Rd");
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cfg__ = __webpack_require__("dpNx");
/* unused harmony reexport config */






var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        confirmDialogInfo: state.main_reducer.confirmDialogInfo
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__["n" /* setConfirmDialogInfoAction */]
    }, dispatch);
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* ConfirmDialogView */]));

/***/ }),

/***/ "nlA+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cocoToast":"cocoToast_y3-Yu"};

/***/ }),

/***/ "q9Rd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store_manager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("igqX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ = __webpack_require__("egdi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__ = __webpack_require__("eHP9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__ = __webpack_require__("2PC+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_reducer__ = __webpack_require__("KBfb");


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(root_saga);







function get_root_reducer() {
    return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["c" /* combineReducers */])({
        home_reducer: __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__["a" /* homeReducer */],
        main_reducer: __WEBPACK_IMPORTED_MODULE_6__main_reducer__["b" /* main_reducer */],
        work_reducer: __WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__["a" /* workReducer */]
    });
}
function create_store() {
    var root_reducer = get_root_reducer();
    var middleware_list = [];
    var saga_middleware = Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["a" /* default */])();
    middleware_list.push(saga_middleware);
    var store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["d" /* createStore */])(root_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), __WEBPACK_IMPORTED_MODULE_1_redux__["a" /* applyMiddleware */].apply(undefined, middleware_list));
    saga_middleware.run(root_saga);
    return store;
}
function root_saga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function root_saga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* fork */])(__WEBPACK_IMPORTED_MODULE_6__main_reducer__["a" /* mainSaga */]);

                case 2:
                    _context.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* fork */])(__WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__["b" /* homeSaga */]);

                case 4:
                    _context.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* fork */])(__WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__["b" /* workSaga */]);

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var StoreManager = function () {
    function StoreManager() {
        _classCallCheck(this, StoreManager);

        this.store = create_store();
    }

    _createClass(StoreManager, [{
        key: 'get_store',
        value: function get_store() {
            return this.store;
        }
    }, {
        key: 'get_state',
        value: function get_state() {
            return this.store.getState();
        }
    }, {
        key: 'subscribe',
        value: function subscribe(listener) {
            this.store.subscribe(listener);
        }
    }, {
        key: 'dispatch',
        value: function dispatch(action) {
            return this.store.dispatch(action);
        }
    }]);

    return StoreManager;
}();

var store_manager = new StoreManager();

/***/ }),

/***/ "qMEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__("j1ja");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("O27J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("EPod");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_IntlWrap__ = __webpack_require__("GoM7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_store__ = __webpack_require__("q9Rd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__("iCOP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__ = __webpack_require__("uRMb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reset_scss__ = __webpack_require__("cw5f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reset_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__reset_scss__);










// 创作页由主域名 调整到 editor目录，主域名加一层中转
try {
    var location = window.location;
    var origin = location.origin.replace('appcraft', 'coco');
    // 访问主域名
    if (location.pathname === '/' && !origin.includes('localhost')) {
        if (location.search) {
            // 带作品id等参数信息跳转 editor创作页
            window.location.href = origin + '/editor' + location.search;
        } else {
            // 访问跟域名统一跳转至 home主页
            window.location.href = origin.replace(/\d+/g, '') + '/home';
        }
    } else if (location.pathname.startsWith('/player/')) {
        // 旧的分享h5、社区链接
        window.location.href = origin + '/editor' + location.pathname + location.search;
    }
} catch (e) {
    console.error(e);
}
var root_dom = document.getElementById('root');
var store = __WEBPACK_IMPORTED_MODULE_6__redux_store__["a" /* store_manager */].get_store();
var App = function App() {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */], { store: store }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_IntlWrap__["a" /* IntlWrapperComponent */], null, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* ViewRouter */], null)));
};
if (root_dom.hasChildNodes()) {
    Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["hydrate"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](App, null), root_dom);
} else {
    Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](App, null), root_dom);
}

/***/ }),

/***/ "sEiI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__("G1ZB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ = __webpack_require__("twBc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ = __webpack_require__("/FmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__("q9Rd");
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cfg__ = __webpack_require__("dpNx");
/* unused harmony reexport config */







var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        userInfo: state.main_reducer.userInfo,
        // 主页-入门教程是否显示
        courseListVisible: state.home_reducer.courseListVisible
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({
        setCourseListVisibleAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__["u" /* setCourseListVisibleAction */],
        asyncSetUserInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__["k" /* asyncSetUserInfoAction */],
        setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__["q" /* setSignDialogVisibleAction */],
        setCourseDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__["o" /* setCourseDialogVisibleAction */]
    }, dispatch);
};
var Header = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* HeaderView */]);

/***/ }),

/***/ "sdA1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("2KeS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("RH2O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("CIox");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template__ = __webpack_require__("My5k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__("q9Rd");
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cfg__ = __webpack_require__("dpNx");
/* unused harmony reexport config */






var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])({}, dispatch);
};
var Menu = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* withRouter */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__template__["a" /* MenuView */]));

/***/ }),

/***/ "twBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_BANNER_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getBannerListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_BANNER_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setBannerListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TOPIC_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getTopicListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_TOPIC_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return setTopicListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_COURSE_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getCourseListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_COURSE_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setCourseListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TEMPLATE_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTemplateListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_TEMPLATE_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return setTemplateListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_WORK_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return setWorkListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_COURSE_LIST_VISIBLE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return setCourseListVisibleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_PLAY_COURSE_INFO_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return setPlayCourseInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_PREVIEW_TEMPLATE_INFO_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return setPreviewTemplateInfoAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("sTbe");

var GET_BANNER_LIST_ACTION = 'home/get_banner_list';
var getBannerListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_BANNER_LIST_ACTION);
var SET_BANNER_LIST_ACTION = 'home/set_banner_list';
var setBannerListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_BANNER_LIST_ACTION);
var GET_TOPIC_LIST_ACTION = 'home/get_topic_list';
var getTopicListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_TOPIC_LIST_ACTION);
var SET_TOPIC_LIST_ACTION = 'home/set_topic_list';
var setTopicListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_TOPIC_LIST_ACTION);
var GET_COURSE_LIST_ACTION = 'home/get_course_list';
var getCourseListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_COURSE_LIST_ACTION);
var SET_COURSE_LIST_ACTION = 'home/set_course_list';
var setCourseListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COURSE_LIST_ACTION);
var GET_TEMPLATE_LIST_ACTION = 'home/get_template_list';
var getTemplateListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_TEMPLATE_LIST_ACTION);
var SET_TEMPLATE_LIST_ACTION = 'home/set_template_list';
var setTemplateListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_TEMPLATE_LIST_ACTION);
var GET_WORK_LIST_ACTION = 'home/get_work_list';
var getWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(GET_WORK_LIST_ACTION);
var SET_WORK_LIST_ACTION = 'home/set_work_list';
var setWorkListAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_WORK_LIST_ACTION);
var SET_COURSE_LIST_VISIBLE_ACTION = 'home/set_course_list_visible';
var setCourseListVisibleAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_COURSE_LIST_VISIBLE_ACTION);
var SET_PLAY_COURSE_INFO_ACTION = 'home/set_play_course_info';
var setPlayCourseInfoAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_PLAY_COURSE_INFO_ACTION);
var SET_PREVIEW_TEMPLATE_INFO_ACTION = 'home/set_preview_template_info';
var setPreviewTemplateInfoAction = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(SET_PREVIEW_TEMPLATE_INFO_ACTION);

/***/ }),

/***/ "vDhS":
/***/ (function(module, exports) {



/***/ }),

/***/ "xr0F":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yI2H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sensorsCustomReport;
/* harmony export (immutable) */ __webpack_exports__["b"] = sensorsLoginReport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript__ = __webpack_require__("uYVh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_url__ = __webpack_require__("hVAD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cfg__ = __webpack_require__("dpNx");
/* eslint-disable @typescript-eslint/camelcase */
// 神策数据接入文档 https://codemao.yuque.com/gg5gzo/vgflgb/dt089f#CLuGJ



var env = Object(__WEBPACK_IMPORTED_MODULE_2__cfg__["b" /* getEnvironment */])();
// 神策数据平台目前只有两个: 测试项目、正式项目
function getSensorsDataServerUrl() {
    // dev｜test 环境对应神策数据平台 测试项目
    if (env === 'dev' || env === 'test') {
        return 'https://shence-data.codemao.cn/sa?project=default';
    }
    // staging｜preview｜production 环境对应神策数据平台 正式项目
    return 'https://shence-data.codemao.cn/sa?project=production';
}
function getReportPage() {
    var page = 'home'; // 主页
    if (window.location.pathname.includes('work')) {
        page = 'work'; // 我的作品
    }
    return page;
}
// 驼峰转下划线，神策上报属性统一下划线命名方式，页面上报还是按驼峰命名，这里统一转换
function formatEventDataToSnakeCase(eventData) {
    if (!eventData) {
        return {
            page: getReportPage()
        };
    }
    var newEventData = {
        page: getReportPage()
    };
    for (var key in eventData) {
        newEventData[key.replace(/([A-Z])/g, '_$1').toLowerCase()] = eventData[key];
    }
    return newEventData;
}
/**
 * 自定义上报
 * @param eventName 事件名
 * @param eventData 上报时 key 为驼峰风格，会在该函数中将驼峰风格转换为下划线风格
 */
function sensorsCustomReport(eventName, eventData) {
    __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.a.track(eventName, formatEventDataToSnakeCase(eventData));
}
// 当用户注册成功或者登录成功时，需要调用 login() 方法传入登录ID  建议传字符串
function sensorsLoginReport(id) {
    __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.a.login(id + '');
}
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.a.init({
    server_url: getSensorsDataServerUrl(),
    // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
    is_track_single_page: true,
    use_client_time: true,
    // 浏览器控制台日志输出功能
    show_log: Object(__WEBPACK_IMPORTED_MODULE_1__utils_url__["b" /* getUrlParams */])(window.location.href).showSensorsLog ? true : false,
    send_type: 'beacon',
    // 通用字符串最大长度，超过部分会被截取丢弃（由于超过 7000 的字符串会导致 url 超长发不出去，所以限制长度）
    max_string_length: 5000,
    heatmap: {
        //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
        clickmap: 'default',
        //是否开启触达注意力图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启
        scroll_notice_map: 'default'
    }
});
//设置公共属性，初始化 SDK 后，sensors.quick('autoTrack') 前
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.a.registerPage({
    $app_id: window.location.host,
    $app_name: 'APP工匠',
    product_name: 'APP工匠',
    page: getReportPage()
});
//用于采集 $pageview 浏览事件。
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.a.quick('autoTrack');

/***/ }),

/***/ "zVV7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("HW6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IconFont_scss__ = __webpack_require__("ULrM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IconFont_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__IconFont_scss__);



var IconFont = function IconFont(props) {
    var type = props.type,
        className = props.className,
        spinning = props.spinning,
        subColor = props.subColor,
        subClassName = props.subClassName,
        twoTone = props.twoTone;

    var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", { xlinkHref: '#' + type });
    if (twoTone) {
        var paths = [];
        var symbol = document.getElementById(type);
        if (symbol) {
            symbol.querySelectorAll('path').forEach(function (el) {
                return paths.push(el);
            });
            content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", { viewBox: symbol.getAttribute('viewBox') || undefined }, paths.map(function (path, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { fill: i === 0 && subColor ? subColor : undefined, className: i === 0 && subClassName ? subClassName : undefined, key: i, d: path.getAttribute('d') || undefined });
            }));
        }
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__IconFont_scss___default.a.iconFont, className) }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", { width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false" }, content));
};
IconFont.displayName = 'IconFont';
/* harmony default export */ __webpack_exports__["a"] = (IconFont);

/***/ })

},[0]);