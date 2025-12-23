/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：7CtK
 */

import { config } from "../../../../../unrestored/home/cfg-dpNx"
import Input from "../../components/Input"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import TemplateItem from "../../../../../unrestored/home/components/TemplateItem-eseu"
import WorkItem from "../../components/WorkItem"
import { EWorkType } from "./model/interface"
import classnames from "classnames"
import ReactCSSModules from "react-css-modules"
import * as React from "react"
import styles from "./styles.module.css"

@ReactCSSModules(styles, { allowMultiple: true })
export class WorkView extends React.Component {

  private isCompositionEnd: boolean
  private keywordRef: unknown
  private templateListRef: HTMLDivElement | null | undefined

  public constructor(props) {
    super(props)
    this.isCompositionEnd = true
    this.state = {
      workType: EWorkType.CREATE,
      recoverVisible: false,
      keyword: "",
      // [CoCo Next] 作品类型盒子阴影
      isScrolled: false
    }

    // [CoCo Next] 滚动阴影
    this.handleScroll = this.handleScroll.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleCreateScroll = this.handleCreateScroll.bind(this)
    this.handleCollScroll = this.handleCollScroll.bind(this)
    this.handleDeleteScroll = this.handleDeleteScroll.bind(this)

    // 作品
    this.handleSwitchWorkType = this.handleSwitchWorkType.bind(this)

    // 搜索
    this.handleCompositionStart = this.handleCompositionStart.bind(this)
    this.handleCompositionEnd = this.handleCompositionEnd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClearInput = this.handleClearInput.bind(this)

    // 回收站
    this.handleToggleRecoverVisible = this.handleToggleRecoverVisible.bind(this)
    this.handleClearDeletedWork = this.handleClearDeletedWork.bind(this)
  }

  public override componentDidMount() {
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

  public override componentDidUpdate(prevProps, prevState) {}

  // [CoCo Next] 滚动阴影
  private handleScroll(e) {
    const { recoverVisible, workType } = this.state
    if (recoverVisible) {
      this.handleDeleteScroll(e)
    } else if (workType === EWorkType.CREATE) {
      this.handleCreateScroll(e)
    } else if (workType === EWorkType.COLL) {
      this.handleCollScroll(e)
    }
    this.setState({ isScrolled: e.currentTarget.scrollTop > 0 })
  }

  private handleLogin() {
    this.props.setSignDialogVisibleAction(true)
  }

  private handleSwitchWorkType(workType) {
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

  private handleInputChange(keyword) {
    var userInfo = this.props.userInfo
    this.setState({
      keyword: keyword
    })
    if (this.isCompositionEnd && userInfo && !userInfo.isNewUser) {
      if (this.state.workType === EWorkType.CREATE) {
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

  private handleClearInput() {
    this.handleInputChange("")
  }

  private handleCompositionStart() {
    this.isCompositionEnd = false
  }

  private handleCompositionEnd() {
    this.isCompositionEnd = true
    this.handleInputChange(this.state.keyword)
  }

  private handleToggleRecoverVisible(recoverVisible) {
    if (recoverVisible) {
      this.props.getDeleteWorkListAction({
        offset: 0
      })
    }
    /* [CoCo Next] 滚动阴影 */
    this.setState({ recoverVisible, isScrolled: false })
  }

  private handleNavToCocoEditor() {
    const { cocoEditorUrl } = config()
    window.open(cocoEditorUrl, Date.now().toString())
  }

  // 清空回收站
  private handleClearDeletedWork() {
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

  private handleCreateScroll(e) {
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

  private handleCollScroll(e) {
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

  private handleDeleteScroll(e) {
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
  private renderWorkFilter() {
    var _state = this.state
    var workType = _state.workType
    var keyword = _state.keyword
    return <div styleName={/* [CoCo Next] 作品类型盒子滚动阴影 */classnames("workCategory", this.state.isScrolled && "shadow")}>
      <div styleName="workType">
        <div
          onClick={() => this.handleSwitchWorkType(EWorkType.CREATE)}
          styleName={classnames("typeItem", workType === EWorkType.CREATE && "active")}
        >
          我创建的
        </div>
        <div
          onClick={() => this.handleSwitchWorkType(EWorkType.COLL)}
          styleName={classnames("typeItem", workType === EWorkType.COLL && "active")}
        >
          我参与的
        </div>
      </div>
      <div styleName="searchBox">
        {workType === EWorkType.CREATE && <Input
          value={keyword}
          ref={(e) => this.keywordRef = e}
          onClearCallback={this.handleClearInput}
          styleName="searchInput"
          placeholder="搜索作品"
          onChange={this.handleInputChange}
          onCompositionStart={this.handleCompositionStart}
          onCompositionEnd={this.handleCompositionEnd}
          clearButtonVisible={!!keyword}
          before={<IconFont type="icon-search" />}
        />}
        <div styleName="recoverBtn" onClick={() => this.handleToggleRecoverVisible(true)}>
          <IconFont type="icon-deleted" styleName="icon" />
          回收站
        </div>
      </div>
    </div>
  }

  // 模版
  private renderTemplate() {
    var _props4 = this.props
    var templateList = _props4.templateList
    var userInfo = _props4.userInfo
    return <div styleName={classnames("templateBox", !userInfo && "notLogin")}>
      <div styleName="titleBox">
        <div styleName="templateTitle">
          <IconFont type="icon-template" styleName="titleIcon" />
          <h2 styleName="title">从模版开始探索</h2>
        </div>
        <div styleName="pageBtn">
          <div styleName={classnames("btnItem")} onClick={() => this.prevTemplate()}>
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
  }

  // 用户作品
  private renderUserContent() {
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
    return <>
      <div styleName="userWorkBox">
        {this.renderWorkFilter()}
        {workType === EWorkType.CREATE && <>
          {createWorkList.length > 0 && (
            <div styleName="workList">
              {createWorkList.map((item) => (
                <WorkItem
                  key={item.work_id}
                  item={item}
                  workType={EWorkType.CREATE}
                  callback={() => this.props.getCreateWorkListAction(keyword)}
                />
              ))}
            </div>
          )}
          {createWorkList.length == 0 && (
            <div styleName={classnames("noData", userInfo && !userInfo.isNewUser && "oldUser")}>
              {keyword && <>
                <img src={require("../../../../../unrestored/home/unnamed-oet9")} alt="" />
                <span styleName="searchTips">没有找到作品，换个姿势再搜索一次吧～</span>
              </>}
              {!keyword && <>
                <img src={require("../../../../../unrestored/home/unnamed-RY6P")} styleName="image" alt="" />
                <span styleName="noWorkTips">你还未创作任何作品</span>
                <div styleName="createBtn" onClick={this.handleNavToCocoEditor}>
                  去创作
                  <IconFont type="icon-button-arrow" styleName="icon" />
                </div>
              </>}
            </div>
          )}
        </>}
        {workType === EWorkType.COLL && <>
          {collWorkList.length > 0 && (
            <div styleName="workList">
              {collWorkList.map((item) => (
                <WorkItem
                  key={item.work_id}
                  item={item}
                  workType={EWorkType.COLL}
                  callback={() => this.props.getCollWorkListAction(keyword)}
                />
              ))}
            </div>
          )}
          {collWorkList.length == 0 && (
            <div styleName={classnames("noData", userInfo && !userInfo.isNewUser && "oldUser")}>
              {keyword && <>
                <img src={require("../../../../../unrestored/home/unnamed-oet9")} alt="" />
                <span styleName="searchTips">没有找到作品，换个姿势再搜索一次吧～</span>
              </>}
              {!keyword && <>
                <img src={require("../../../../../unrestored/home/unnamed-RY6P")} styleName="image" alt="" />
                <span styleName="noWorkTips">你还没有任何协作作品</span>
              </>}
            </div>
          )}
        </>}
      </div>
      {userInfo && userInfo.isNewUser && this.renderTemplate()}
    </>
  }

  // 回收站
  private renderRecover() {
    var _state3 = this.state
    var workType = _state3.workType
    var keyword = _state3.keyword
    var deleteWorkList = this.props.deleteWorkList
    return <div styleName="content">
      <div styleName={/* [CoCo Next] 回收站头部滚动阴影 */classnames("recoverHeader", this.state.isScrolled && "shadow")}>
        <div styleName="backBox">
          <div styleName="back" onClick={() => this.handleToggleRecoverVisible(false)}>
            <IconFont type="icon-next" styleName="icon" />
            返回
          </div>
          <div styleName="title">
            回收站
          </div>
        </div>
        <div
          styleName={classnames("clearRecoverBtn", deleteWorkList.length === 0 && "disabled")}
          onClick={this.handleClearDeletedWork}
        >
          <IconFont type="icon-clear" styleName="icon" />
          清空当前回收站
        </div>
      </div>
      {deleteWorkList.length === 0 && <div styleName="recoverNoData">空空如也～</div>}
      {deleteWorkList.length > 0 && <div styleName="recoverList" onScroll={this.handleScroll}>
        {deleteWorkList.map((item) => (
          <WorkItem
            key={item.work_id}
            item={item}
            workType={EWorkType.DELETE}
            callback={() => {
              if (workType === EWorkType.CREATE) {
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
            }}
          />
        ))}
      </div>}
    </div>
  }

  public override render() {
    var recoverVisible = this.state.recoverVisible
    var _props6 = this.props
    var userInfo = _props6.userInfo
    var userInfoFetchDone = _props6.userInfoFetchDone
    if (!userInfoFetchDone) {
      return null
    }
    // 显示回收站
    if (recoverVisible) {
      return <div styleName="work">{this.renderRecover()}</div>
    }
    return <div styleName="work">
      {/* [CoCo Next] 移除我的作品页面的创作盒子 */}
      {/* {userInfo && !userInfo.isNewUser && <div styleName="createBox">
        <div styleName="createItem" onClick={this.handleNavToCocoEditor}>
          <IconFont type="icon-create-app" styleName="createIcon" />
          应用创作
        </div>
        <div styleName={classnames("createItem", "disabled")}>
          <IconFont type="icon-create-web" styleName="createIcon" />
          网页搭建<span styleName="tips">（敬请期待）</span>
        </div>
      </div>} */}
      {!userInfo && <>
        <div styleName="loginBox">
          <img src={require("../../../../../unrestored/home/unnamed-RY6P")} styleName="image" alt="" />
          <span styleName="loginTips">你还未登录账号</span>
          <div styleName="loginBtn" onClick={this.handleLogin}>去登录</div>
        </div>
        {this.renderTemplate()}
      </>}
      {userInfo && <div styleName="workContent" onScroll={this.handleScroll}>{this.renderUserContent()}</div>}
    </div>
  }
}
