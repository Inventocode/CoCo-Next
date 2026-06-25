/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Y/qu
 */

import * as React from "react"
import { Switch, Route } from "react-router-dom"
import classNames from "classnames"
import { Header } from "../components/Header"
import IconFontSvg from "../../../../unrestored/home/components/IconFont/IconFontSvg-DYHF"
import { Menu } from "../components/Menu"
import PlayCourseVideo from "../../../../unrestored/home/components/PlayCourseVideo-AvcO"
import PreviewTemplate from "../../../../unrestored/home/components/PreviewTemplate-USw6"
import SignInDialog from "../../../../unrestored/home/components/SignInDialog-Lx+u"
import CourseDialog from "../../../../unrestored/home/components/CourseDialog-F4_2"
import CommonToast from "../../../../unrestored/home/components/CommonToast-jdSs"
import ConfirmDialog from "../../../../unrestored/home/components/ConfirmDialog-kwR3"
import Home from "./Home"
import ReactLoadable from "react-loadable"
import styles from "./styles.module.css"

interface ViewRouterComponentProps {
  getTemplateListAction(): void
  getCourseListAction(): void
  playCourseInfo: {
    visible: boolean
  }
  courseDialogVisible: boolean
}

interface ViewRouterComponentState {
  // [CoCo Next] JS 获取窗口大小来代替 CSS 媒体查询
  windowWidth: number
  windowHeight: number
}

const Work = ReactLoadable({
  loader() {
    return import("./Work")
  },
  loading() {
    return <div style={{ height: "400px" }} />
  }
})

export class ViewRouterComponent extends React.Component<ViewRouterComponentProps, ViewRouterComponentState> {

  public override readonly state: ViewRouterComponentState = {
    windowWidth: 0,
    windowHeight: 0
  }

  public constructor(props: ViewRouterComponentProps) {
    super(props)
    this.updateWindowSize = this.updateWindowSize.bind(this)
  }

  public override componentDidMount() {
    this.props.getTemplateListAction()
    this.props.getCourseListAction()
    this.updateWindowSize()
    addEventListener("resize", this.updateWindowSize)
  }

  public override componentWillUnmount(): void {
    removeEventListener("resize", this.updateWindowSize)
  }

  // [CoCo Next] JS 获取窗口大小来代替 CSS 媒体查询
  public updateWindowSize() {
    this.setState({
      windowWidth: innerWidth,
      windowHeight: innerHeight
    })
  }

  public override render() {
    var _props = this.props
    var playCourseInfo = _props.playCourseInfo
    var courseDialogVisible = _props.courseDialogVisible
    return <div
      className={classNames(
        styles.wrapper,
        {
          "very-small-screen": this.state.windowWidth < 512,
          "small-screen": this.state.windowWidth < 768,
          "middle-screen": this.state.windowWidth < 1024
        }
      )}
        style={/* [CoCo Next] 小平适配 { minWidth: "990px" } */{}}
      >
      <Header />
      <IconFontSvg />
      <div className={classNames(
        styles.content,
        playCourseInfo.visible || courseDialogVisible ? "blur" : ""
      )}>
        <Menu />
        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/work" exact={true} component={Work} />
          <Route path="/" strict={true} exact={true} component={Home} />
        </Switch>
      </div>
      <CommonToast />
      <ConfirmDialog />
      <SignInDialog />
      <CourseDialog />
      <PlayCourseVideo />
      <PreviewTemplate />
    </div>
  }
}
