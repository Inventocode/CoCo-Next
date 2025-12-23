/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：My5k__part-1
 */

import { config } from "../../../../../unrestored/home/cfg-dpNx"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import { NavLink } from "react-router-dom"
import ReactCSSModules from "react-css-modules"
import classnames from "classnames"
import * as React from "react"
import styles from "./styles.module.css"

@ReactCSSModules(styles, { allowMultiple: true })
export class MenuView extends React.Component {

  public constructor(props: {}) {
    super(props)
  }

  public override componentDidMount() {}

  private handleOpenDiscoverUrl() {
    const { discoverUrl } = config()
    window.open(discoverUrl, Date.now().toString())
  }

  private render_navLink(url: string, content: string, icon: string) {
    var current_url = "/" + location.pathname.split("/").pop()
    var active = current_url === url
    // 主页
    if (url === "/home") {
      active = current_url === "/" || current_url === "/home"
    }
    return <NavLink to={url} styleName={classnames("menuItem", active && "active")}>
      <IconFont type={icon} styleName="menuIcon" />
      {content}
    </NavLink>
  }

  public override render() {
    return <div styleName="menu">
      {this.render_navLink("/home", "主页", "icon-home")}
      {this.render_navLink("/work", "我的作品", "icon-work")}
      <div styleName="menuItem" onClick={this.handleOpenDiscoverUrl}>
        <div styleName="discover">
          <div>
            <IconFont type="icon-discover" styleName="menuIcon" />
            发现
          </div>
          <IconFont type="icon-discover-arrow" styleName="menuArrow" />
        </div>
      </div>
    </div>
  }
}
