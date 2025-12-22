/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：+DtV
 */

import { sensorsCustomReport } from "../../../../../unrestored/home/sensorsData-yI2H"
import { EWorkType } from "../Work/model/interface"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import WorkItem from "../../components/WorkItem"
import TemplateItem from "../../../../../unrestored/home/components/TemplateItem-eseu"
import { config } from "../../../../../unrestored/home/cfg-dpNx"
import ReactCSSModules from "react-css-modules"
import { Carousel } from "antd"
import classnames from "classnames"
import * as React from "react"
import styles from "./styles.module.css"

@ReactCSSModules(styles, { allowMultiple: true })
export class HomeView extends React.Component {

  constructor(props) {
    super(props)
    this.templateColor = ["blue", "yellow", "purple"]
    this.state = {
      isScrolled: false,
      showCourseAnimation: false
    }
    this.handleHomeScroll = this.handleHomeScroll.bind(this)
    this.handleHideCourseList = this.handleHideCourseList.bind(this)
  }

  handleHomeScroll(e) {
    var scrollTop = e.currentTarget.scrollTop
    this.setState({
      isScrolled: scrollTop > 0
    })
  }

  componentDidMount() {
    this.props.getBannerListAction()
    this.props.getTopicListAction()
    if (this.props.userInfo) {
      this.props.getWorkListAction()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userInfo !== nextProps.userInfo && this.homePageRef) {
      this.homePageRef.scrollTo(0, 0)
    }
  }

  handleNavToCocoEditor() {
    var { cocoEditorUrl } = config()
    window.open(cocoEditorUrl, Date.now().toString())
  }

  handlePrevBanner() {
    this.bannerRef.prev()
  }

  handleNextBanner() {
    this.bannerRef.next()
  }

  handleBannerClick(url, id) {
    sensorsCustomReport("BannerClick", {
      banner_id: id
    })
    window.open(url, Date.now().toString())
  }

  handleTopicClick(url, id) {
    sensorsCustomReport("TopicClick", {
      topic_id: id
    })
    window.open(url, Date.now().toString())
  }

  handleHideCourseList() {
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

  handlePlayCourse(id) {
    this.props.setPlayCourseInfoAction({
      id: id,
      visible: true
    })
    sensorsCustomReport("CourseClick", {
      course_id: id
    })
  }

  handlePreviewTemplate(id, name) {
    this.props.setPreviewTemplateInfoAction({
      id: id,
      visible: true
    })
    sensorsCustomReport("TemplateClick", {
      template_name: name
    })
  }

  prevTemplate() {
    this.templateListRef.scrollBy({
      left: -240 * 4,
      behavior: "smooth"
    })
  }

  nextTemplate() {
    this.templateListRef.scrollBy({
      left: 240 * 4,
      behavior: "smooth"
    })
  }

  render() {
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
    return <div
      styleName={"home"}
      onScroll={this.handleHomeScroll}
      ref={function ref(e) {
        return _this2.homePageRef = e
      }}
    >
      {userInfo && !userInfo.isNewUser && <div
        styleName={classnames("createBox", isScrolled && "shadow")}
      >
        {<div
          styleName={"createItem"}
          onClick={this.handleNavToCocoEditor}
        >
          {<IconFont
            type={"icon-create-app"}
            styleName={"createIcon"}
          />}
          应用创作
        </div>}
        {<div
          styleName={classnames("createItem", "disabled")}
        >
          {<IconFont
            type={"icon-create-web"}
            styleName={"createIcon"}
          />}
          网页搭建
          {<span
            styleName={"tips"}
          >
            （敬请期待）
          </span>}
        </div>}
      </div>}
      {<div
        styleName={classnames("center", (!userInfo || userInfo.isNewUser) && "newUser")}
      >
        {<div
          styleName={classnames("bannerBox", bannerList.length === 0 && "hide")}
        >
          {bannerList.length > 1 && <>
            {<div
              styleName={"bannerPrev"}
              onClick={function onClick() {
                return _this2.handlePrevBanner()
              }}
            >
              {<IconFont
                type={"icon-next"}
              />}
            </div>}
            {<div
              styleName={"bannerNext"}
              onClick={function onClick() {
                return _this2.handleNextBanner()
              }}
            >
              {<IconFont
                type={"icon-next"}
              />}
            </div>}
          </>}
          {<Carousel
            autoplay={true}
            speed={800}
            autoplaySpeed={5000}
            pauseOnHover={false}
            ref={function ref(e) {
              return _this2.bannerRef = e
            }}
          >
            {bannerList.map(function (item) {
              return <div
                onClick={function onClick() {
                  return _this2.handleBannerClick(item.target_url, item.id)
                }}
                styleName={"bannerItem"}
                key={item.id}
              >
                {<div
                  styleName={"image"}
                  style={{
                    backgroundImage: "url(" + item.preview_url + ")"
                  }}
                />}
              </div>
            })}
          </Carousel>}
        </div>}
        {<div
          styleName={classnames("noticeBox", topicList.length === 0 && "hide")}
        >
          {<Carousel
            autoplay={true}
            vertical={true}
            dots={false}
            autoplaySpeed={5000}
            pauseOnHover={false}
          >
            {topicList.map(function (item) {
              return <div
                styleName={"noticeItem"}
                key={item.id}
                onClick={function onClick() {
                  return _this2.handleTopicClick(item.target_url, item.id)
                }}
              >
                {<div
                  styleName={"noticeChar"}
                >
                  #
                </div>}
                {<span>
                  {item.title}
                </span>}
              </div>
            })}
          </Carousel>}
        </div>}
        {<div
          styleName={classnames("courseBox", userInfo && !userInfo.isNewUser && courseListVisible === false && !showCourseAnimation && "hidden", showCourseAnimation && "animation")}
        >
          {<div
            styleName={"titleBox"}
          >
            {<h2
              styleName={"title"}
            >
              新手入门
            </h2>}
            {userInfo && !userInfo.isNewUser && <div
              styleName={"finish"}
            >
              {<div
                styleName={classnames("checkbox", courseListVisible === false && "checked")}
                onClick={this.handleHideCourseList}
              >
                {courseListVisible === false && <IconFont
                  type={"icon-selected"}
                />}
              </div>}
              我已看完
            </div>}
          </div>}
          {<div
            styleName={"courseList"}
          >
            {courseList.map(function (item) {
              return <div
                styleName={"courseItem"}
                key={item.id}
                onClick={function onClick() {
                  return _this2.handlePlayCourse(item.id)
                }}
              >
                {<div
                  styleName={"courseImage"}
                >
                  {<div
                    styleName={"image"}
                    style={{
                      backgroundImage: "url(" + item.preview + ")"
                    }}
                  />}
                  {<div
                    styleName={"mask"}
                  >
                    {<div
                      styleName={"playBox"}
                    >
                      {<IconFont
                        type={"icon-play"}
                      />}
                    </div>}
                  </div>}
                </div>}
                {<div
                  styleName={"courseName"}
                >
                  {item.title}
                </div>}
                {<div
                  styleName={"courseDesc"}
                >
                  {item.course_intro}
                </div>}
              </div>
            })}
          </div>}
        </div>}
        {(!userInfo || userInfo.isNewUser) && <div
          styleName={"newUserTemplate"}
        >
          {<div
            styleName={"templateTitle"}
          >
            {<IconFont
              type={"icon-template"}
              styleName={"titleIcon"}
            />}
            {<h2
              styleName={"title"}
            >
              从模版开始探索
            </h2>}
          </div>}
          {<div
            styleName={"templateList"}
          >
            {newUserTemplateList.map(function (item, index) {
              return <div
                key={item.id}
                styleName={classnames("templateItem", _this2.templateColor[index])}
                onClick={function onClick() {
                  return _this2.handlePreviewTemplate(item.id, item.name)
                }}
              >
                {<div
                  styleName={"imageBox"}
                >
                  {<div
                    styleName={"image"}
                    style={{
                      backgroundImage: "url(" + item.preview_url2 + ")"
                    }}
                  >
                    {<img
                      src={item.gif_url}
                      alt={item.name}
                      styleName={"gif"}
                    />}
                  </div>}
                </div>}
                {<div
                  styleName={"name"}
                >
                  {item.name}
                </div>}
                {<div
                  styleName={"desc"}
                >
                  {item.description}

                </div>}
                {<div
                  styleName={"previewBtn"}
                >
                  {<IconFont
                    type={"icon-play"}
                  />}
                  玩一玩
                </div>}
              </div>
            })}
          </div>}
        </div>}
        {userInfo && !userInfo.isNewUser && <>
          {<div
            styleName={"myWork"}
          >
            {<div
              styleName={"titleBox"}
            >
              {<IconFont
                type={"icon-lately-work"}
                styleName={"titleIcon"}
              />}
              {<h2
                styleName={"title"}
              >
                最近作品
              </h2>}
            </div>}
            {workList.length > 0 && <div
              styleName={"workList"}
            >
              {workList.map(function (item) {
                return <WorkItem
                  key={item.work_id}
                  item={item}
                  workType={EWorkType.HOME}
                  callback={_this2.props.getWorkListAction}
                />
              })}
            </div>}
            {workList.length === 0 && <div
              styleName={"workListNoData"}
            >
              {<span>
                你还未创作任何作品
              </span>}
              {<div
                styleName={"createBtn"}
                onClick={this.handleNavToCocoEditor}
              >
                去创作
                {<IconFont
                  type={"icon-button-arrow"}
                  styleName={"icon"}
                />}
              </div>}
            </div>}
          </div>}
          {<div
            styleName={"oldUserTemplate"}
          >
            {<div
              styleName={"titleBox"}
            >
              {<div
                styleName={"templateTitle"}
              >
                {<IconFont
                  type={"icon-template"}
                  styleName={"titleIcon"}
                />}
                {<h2
                  styleName={"title"}
                >
                  从模版开始探索
                </h2>}
              </div>}
              {<div
                styleName={"pageBtn"}
              >
                {<div
                  styleName={classnames("btnItem")}
                  onClick={function onClick() {
                    return _this2.prevTemplate()
                  }}
                >
                  {<IconFont
                    type={"icon-next"}
                    styleName={"prev"}
                  />}
                </div>}
                {<div
                  styleName={"btnItem"}
                  onClick={function onClick() {
                    return _this2.nextTemplate()
                  }}
                >
                  {<IconFont
                    type={"icon-next"}
                  />}
                </div>}
              </div>}
            </div>}
            {<div
              styleName={"templateList"}
              ref={function ref(e) {
                return _this2.templateListRef = e
              }}
            >
              {templateList.map(function (item) {
                return <TemplateItem
                  key={item.id}
                  item={item}
                />
              })}
            </div>}
          </div>}
        </>}
      </div>}
      {(!userInfo || userInfo.isNewUser) && <div
        styleName={"startWork"}
      >
        {<div
          styleName={"title"}
        >
          无尽的想法，从这里开始创造。
        </div>}
        {<div
          styleName={"startBtn"}
          onClick={this.handleNavToCocoEditor}
        >
          开始创作
          {<IconFont
            type={"icon-button-arrow"}
            styleName={"startIcon"}
          />}
        </div>}
      </div>}
    </div>
  }
}
