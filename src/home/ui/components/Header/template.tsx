/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：G1ZB
 */

import { getCommunityAccountSettingUrl } from "../../../../../unrestored/home/utils/url-hVAD"
import { sensorsCustomReport } from "../../../../../unrestored/home/sensorsData-yI2H"
import { loginOut } from "../../../../../unrestored/home/components/api/login-yshM"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import classnames from "classnames"
import { Dropdown } from "antd"
import ReactCSSModules from "react-css-modules"
import * as React from "react"
import styles from "./styles.module.css"
import Logo from "../../../assets/images/logo.png"

const serviceAgreementList = [
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

interface HeaderViewProps {
  userInfo: (/** TODO */any)
  setSignDialogVisibleAction(/** TODO */unknown: boolean): void
  asyncSetUserInfoAction(/** TODO */unknown: null): void
  courseListVisible: boolean
  helpDropdownVisible: boolean
}

interface HeaderViewState {
  helpDropdownVisible: boolean
}

@ReactCSSModules(styles, { allowMultiple: true })
export class HeaderView extends React.Component<HeaderViewProps, HeaderViewState> {

  public constructor(props: HeaderViewProps) {
    super(props)
    this.state = {
      helpDropdownVisible: false
    }
    this.handleShowCourse = this.handleShowCourse.bind(this)
    this.handleHelpDropdownVisibleChange = this.handleHelpDropdownVisibleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLoginOut = this.handleLoginOut.bind(this)
  }

  public override componentDidMount() {}

  private handleLogin() {
    this.props.setSignDialogVisibleAction(true)
    // 点击登录按钮埋点
    sensorsCustomReport("LoginButtonClick")
  }

  private async handleLoginOut() {
    try {
      await loginOut()
      this.props.asyncSetUserInfoAction(null)
    } catch (error) {
      console.error("logout ", error)
    }
  }

  private handleHelpDropdownVisibleChange(visible: boolean) {
    this.setState({
      helpDropdownVisible: visible
    })
  }

  private handleShowCourse() {
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

  private handleDocument() {
    window.open("https://codemao-guide.yuque.com/bfiekm/sbo5kh", Date.now().toString())
  }

  private handleFeedback() {
    window.open("https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd", Date.now().toString())
  }

  private renderUserInfo(userInfo) {
    if (userInfo) {
      return <div>
        <Dropdown
          overlay={
            <div styleName="dropdown">
              <div
                styleName="dropdownItem"
                onClick={() => {
                  return window.open(getCommunityAccountSettingUrl(), "_blank")
                }}
              >账号设置</div>
              <Dropdown
                overlay={
                  <div styleName="dropdown agreementDropdown">
                    {serviceAgreementList.map((item, index) => {
                      return <div
                        key={index}
                        styleName="dropdownItem"
                        onClick={() => {
                          return window.open(item.link, "_blank")
                        }}
                      >{item.label}</div>
                    })}
                  </div>
                }
                placement={"topLeft"}
              >
                <div styleName="dropdownItem">
                  服务协议
                  <span className={styles.subMenuArrow}>
                    <IconFont type="icon-dropdown-down" />
                  </span>
                </div>
              </Dropdown>
              <div styleName="dropdownItem" onClick={this.handleLoginOut}>退出登录</div>
            </div>
          }
          trigger={["click"]}
        >
          <div styleName="userInfo">
            <div styleName="userAvatar" style={{ backgroundImage: "url(" + userInfo.avatar + ")" }}/>
            <IconFont type="icon-dropdown-down" styleName="iconDown" />
          </div>
        </Dropdown>
      </div>
    }
    return <div styleName="userLogin" onClick={this.handleLogin}>登录</div>
  }

  public override render() {
    const { props: { courseListVisible, userInfo, helpDropdownVisible } } = this
    return <div styleName="header">
      <div styleName="left">
        <img src={Logo} styleName="logoImg" alt="" />
        <div styleName="iconItem">
          <Dropdown
            overlay={
              <div styleName="dropdown">
                <div
                  styleName={classnames("dropdownItem", (!userInfo || userInfo.isNewUser || courseListVisible) && "disabled")}
                  onClick={this.handleShowCourse}
                >入门教程</div>
                <div styleName="dropdownItem" onClick={this.handleDocument}>帮助文档</div>
              </div>
            }
            onVisibleChange={this.handleHelpDropdownVisibleChange}
            visible={helpDropdownVisible}
            trigger={["click"]}
          >
            <div>
              <IconFont type="icon-help" />
              <IconFont type="icon-dropdown-down" styleName="iconDown" />
            </div>
          </Dropdown>
        </div>
        <div styleName="iconItem" onClick={this.handleFeedback}>
          <IconFont type="icon-feedback" />
        </div>
      </div>
      {this.renderUserInfo(userInfo)}
    </div>
  }
}
