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

  public constructor(props) {
    super(props)
    this.templateColor = ["blue", "yellow", "purple"]
    this.state = {
      showCourseAnimation: false
    }
    // [CoCo Next] 去除创作盒子阴影
    // this.handleHomeScroll = this.handleHomeScroll.bind(this)
    this.handleHideCourseList = this.handleHideCourseList.bind(this)
  }

  // [CoCo Next] 去除创作盒子阴影
  // private handleHomeScroll(e) {
  //   var scrollTop = e.currentTarget.scrollTop
  //   this.setState({ isScrolled: scrollTop > 0 })
  // }

  public override componentDidMount() {
    this.props.getBannerListAction()
    this.props.getTopicListAction()
    if (this.props.userInfo) {
      this.props.getWorkListAction()
    }
  }

  public override componentWillReceiveProps(nextProps) {
    if (this.props.userInfo !== nextProps.userInfo && this.homePageRef) {
      this.homePageRef.scrollTo(0, 0)
    }
  }

  private handleNavToCocoEditor() {
    var { cocoEditorUrl } = config()
    window.open(cocoEditorUrl, Date.now().toString())
  }

  private handlePrevBanner() {
    this.bannerRef.prev()
  }

  private handleNextBanner() {
    this.bannerRef.next()
  }

  private handleBannerClick(url, id) {
    sensorsCustomReport("BannerClick", { banner_id: id })
    window.open(url, Date.now().toString())
  }

  private handleTopicClick(url, id) {
    sensorsCustomReport("TopicClick", { topic_id: id })
    window.open(url, Date.now().toString())
  }

  private handleHideCourseList() {
    this.props.setCourseListVisibleAction(false)
    this.props.setCommonToastAction({
      visible: true,
      message: "视频已收起，可在帮助中再次打开"
    })
    localStorage.setItem("homeCourseListVisible", "hide")
    // 收起入门教程样式
    this.setState({ showCourseAnimation: true })
  }

  private handlePlayCourse(id) {
    this.props.setPlayCourseInfoAction({
      id: id,
      visible: true
    })
    sensorsCustomReport("CourseClick", { course_id: id })
  }

  private handlePreviewTemplate(id, name) {
    this.props.setPreviewTemplateInfoAction({
      id: id,
      visible: true
    })
    sensorsCustomReport("TemplateClick", { template_name: name })
  }

  private prevTemplate() {
    this.templateListRef.scrollBy({
      left: -240 * 4,
      behavior: "smooth"
    })
  }

  private nextTemplate() {
    this.templateListRef.scrollBy({
      left: 240 * 4,
      behavior: "smooth"
    })
  }

  public override render() {
    const {
      bannerList,
      topicList,
      courseList,
      workList,
      courseListVisible,
      templateList,
      userInfo,
      userInfoFetchDone
    } = this.props
    // [CoCo Next] 去除创作盒子阴影
    // const { isScrolled, showCourseAnimation } = this.state
    const newUserTemplateList = templateList
      .filter((item) => item.type === 2)
      .slice(0, 3)
      .sort((a, b) => b.ordinal - a.ordinal)
    if (!userInfoFetchDone) {
      return null
    }
    if (bannerList.length === 0 && topicList.length === 0 && courseList.length === 0) {
      return null
    }
    return <div styleName="home" onScroll={/* [CoCo Next] 去除创作盒子阴影 this.handleHomeScroll */undefined} ref={(e) => this.homePageRef = e}>
      {userInfo && !userInfo.isNewUser && (
        <div styleName={/* [CoCo Next] 去除创作盒子阴影 classnames("createBox", isScrolled && "shadow") */"createBox"}>
          <div styleName="createItem" onClick={this.handleNavToCocoEditor}>
            <IconFont type="icon-create-app" styleName="createIcon" />
            应用创作
          </div>
          <div styleName={classnames("createItem", "disabled")}>
            <IconFont type="icon-create-web" styleName="createIcon" />
            网页搭建
            <span styleName="tips">（敬请期待）</span>
          </div>
        </div>
      )}
      <div styleName={classnames("center", (!userInfo || userInfo.isNewUser) && "newUser")}>
        <div styleName={classnames("bannerBox", bannerList.length === 0 && "hide")}>
          {bannerList.length > 1 && <>
            <div styleName="bannerPrev" onClick={() => this.handlePrevBanner()}>
              <IconFont type="icon-next" />
            </div>
            <div styleName="bannerNext" onClick={() => this.handleNextBanner()}>
              <IconFont type="icon-next" />
            </div>
          </>}
          <Carousel
            autoplay={true}
            speed={800}
            autoplaySpeed={5000}
            pauseOnHover={false}
            ref={(e) => this.bannerRef = e}
          >
            {bannerList.map((item) => (
              <div
                onClick={() => this.handleBannerClick(item.target_url, item.id)}
                styleName="bannerItem"
                key={item.id}
              >
                <div styleName="image" style={{ backgroundImage: "url(" + item.preview_url + ")"}} />
              </div>
            ))}
          </Carousel>
        </div>
        <div styleName={classnames("noticeBox", topicList.length === 0 && "hide")}>
          <Carousel
            autoplay={true}
            vertical={true}
            dots={false}
            autoplaySpeed={5000}
            pauseOnHover={false}
          >
            {topicList.map((item) => (
              <div styleName="noticeItem" key={item.id} onClick={() => this.handleTopicClick(item.target_url, item.id)}>
                <div styleName="noticeChar">#</div>
                <span>{item.title}</span>
              </div>
            ))}
          </Carousel>
        </div>
        <div styleName={classnames(
          "courseBox",
          userInfo && !userInfo.isNewUser && courseListVisible === false && !showCourseAnimation && "hidden",
          showCourseAnimation && "animation"
        )}>
          <div styleName="titleBox">
            <h2 styleName="title">新手入门</h2>
            {userInfo && !userInfo.isNewUser && (
              <div styleName="finish">
                <div
                  styleName={classnames("checkbox", courseListVisible === false && "checked")}
                  onClick={this.handleHideCourseList}
                >
                  {courseListVisible === false && <IconFont type="icon-selected" />}
                </div>
                我已看完
              </div>
            )}
          </div>
          <div styleName="courseList">
            {courseList.map((item) => (
              <div
                styleName="courseItem"
                key={item.id}
                onClick={() => this.handlePlayCourse(item.id)}
              >
                <div styleName="courseImage">
                  <div styleName="image" style={{ backgroundImage: "url(" + item.preview + ")" }} />
                  <div styleName="mask">
                    <div styleName="playBox">
                      <IconFont type="icon-play" />
                    </div>
                  </div>
                </div>
                <div styleName="courseName">{item.title}</div>
                <div styleName="courseDesc">{item.course_intro}</div>
              </div>
            ))}
          </div>
        </div>
        {(!userInfo || userInfo.isNewUser) && (
          <div styleName="newUserTemplate">
            <div styleName="templateTitle">
              <IconFont type="icon-template" styleName="titleIcon" />
              <h2 styleName="title">从模版开始探索</h2>
            </div>
            <div styleName="templateList">
              {newUserTemplateList.map((item, index) => (
                <div
                  key={item.id}
                  styleName={classnames("templateItem", this.templateColor[index])}
                  onClick={() => this.handlePreviewTemplate(item.id, item.name)}
                >
                  <div styleName="imageBox">
                    <div
                      styleName="image"
                      style={{ backgroundImage: "url(" + item.preview_url2 + ")" }}
                    >
                      <img src={item.gif_url} alt={item.name} styleName="gif" />
                    </div>
                  </div>
                  <div styleName="name">{item.name}</div>
                  <div styleName="desc">{item.description}</div>
                  <div styleName="previewBtn">
                    <IconFont type="icon-play" />
                    玩一玩
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {userInfo && !userInfo.isNewUser && <>
          <div styleName="myWork">
            <div styleName="titleBox">
              <IconFont type="icon-lately-work" styleName="titleIcon" />
              <h2 styleName="title">最近作品</h2>
            </div>
            {workList.length > 0 && (
              <div styleName="workList">
                {workList.map((item) => (
                  <WorkItem
                    key={item.work_id}
                    item={item}
                    workType={EWorkType.HOME}
                    callback={this.props.getWorkListAction}
                  />
                ))}
              </div>
            )}
            {workList.length === 0 && (
              <div styleName="workListNoData">
                <span>你还未创作任何作品</span>
                <div styleName="createBtn" onClick={this.handleNavToCocoEditor}>
                  去创作
                  <IconFont type="icon-button-arrow" styleName="icon" />
                </div>
              </div>
            )}
          </div>
          <div styleName="oldUserTemplate">
            <div styleName="titleBox">
              <div styleName="templateTitle">
                <IconFont type="icon-template" styleName="titleIcon" />
                <h2 styleName="title">从模版开始探索</h2>
              </div>
              <div styleName="pageBtn">
                <div
                  styleName={classnames("btnItem")}
                  onClick={() => this.prevTemplate()}
                >
                  <IconFont type="icon-next" styleName="prev" />
                </div>
                <div styleName="btnItem" onClick={() => this.nextTemplate()}>
                  <IconFont type="icon-next" />
                </div>
              </div>
            </div>
            <div styleName="templateList" ref={(e) => this.templateListRef = e}>
              {templateList.map((item) => <TemplateItem key={item.id} item={item} />)}
            </div>
          </div>
        </>}
      </div>
      {(!userInfo || userInfo.isNewUser) && (
        <div styleName="startWork">
          <div styleName="title">无尽的想法，从这里开始创造。</div>
          <div styleName="startBtn" onClick={this.handleNavToCocoEditor}>
            开始创作
            <IconFont type="icon-button-arrow" styleName="startIcon" />
          </div>
        </div>
      )}
    </div>
  }
}
