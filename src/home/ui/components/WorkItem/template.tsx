/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：P9xH
 */

import { sensorsCustomReport } from "../../../../../unrestored/home/sensorsData-yI2H"
import { EWorkType } from "../../routes/Work/model/interface"
import Input from "../Input"
import { formatTimestamp } from "../../../../../unrestored/home/components/utils-jnIn"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import { config } from "../../../../../unrestored/home/cfg-dpNx"
import ReactCSSModules from "react-css-modules"
import classnames from "classnames"
import { Dropdown } from "antd"
import * as React from "react"
import styles from "./styles.module.css"

const projectNameRegEx = /^[a-zA-Z0-9\u4E00-\u9FFF ()（）\-_']*$/

@ReactCSSModules(styles, { allowMultiple: true })
export class WorkItemView extends React.Component {

  public constructor(props) {
    super(props)
    this.state = {
      dropdownVisible: false,
      inputVisible: false
    }
    this.handleQuitCollWork = this.handleQuitCollWork.bind(this)
    this.handleRenameWork = this.handleRenameWork.bind(this)
    this.handleWorkTitleBlur = this.handleWorkTitleBlur.bind(this)
    this.handleDeleteWork = this.handleDeleteWork.bind(this)
    this.handleDropdownVisibleChange = this.handleDropdownVisibleChange.bind(this)
  }

  public override componentDidMount() {
    //
  }

  private handleDropdownVisibleChange(visible) {
    this.setState({
      dropdownVisible: visible
    })
  }

  private handleSelfOpenWork() {
    if (this.props.workType !== EWorkType.DELETE) {
      var { cocoEditorUrl } = config()
      var { work_id, role } = this.props.item
      // 打开作品埋点
      sensorsCustomReport("OpenWork", {
        workId: work_id,
        // 上报 1:我创建的 2:我参与的
        workType: role === 1 ? 1 : 2,
        // workName: projectName,
        isSuccess: true,
        failReason: ""
      })
      window.open(cocoEditorUrl + "?workId=" + work_id, "_self")
    }
  }

  private handleOpenWork() {
    var { cocoEditorUrl } = config()
    this.setState({
      dropdownVisible: false
    })
    var { work_id, role } = this.props.item
    setTimeout(function () {
      // 打开作品埋点
      sensorsCustomReport("OpenWork", {
        workId: work_id,
        // 上报 1:我创建的 2:我参与的
        workType: role === 1 ? 1 : 2,
        // workName: projectName,
        isSuccess: true,
        failReason: ""
      })
      window.open(cocoEditorUrl + "?workId=" + work_id, Date.now().toString())
    }, 10)
  }

  private handleRenameWork() {
    this.setState({
      inputVisible: true,
      dropdownVisible: false
    }, () => {
      if (this.inputRef) {
        this.inputRef.focus()
        this.inputRef.select()
      }
    })
  }

  // 退出协作
  private handleQuitCollWork() {
    var { work_id } = this.props.item
    var { userInfo, workType } = this.props
    if (userInfo) {
      this.props.setConfirmDialogInfoAction({
        visible: true,
        isDangerous: true,
        title: "是否退出“" + this.props.item.name + "”协作？",
        content: "退出后, 该作品将不在作品管理页中显示",
        onConfirm: () => {
          return this.props.quitCollWorkAction({
            id: work_id,
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
  private handleDeleteWork() {
    var { work_id } = this.props.item
    this.props.deleteWorkAction({
      id: work_id,
      workType: this.props.workType,
      callback: this.props.callback
    })
    this.setState({
      dropdownVisible: false
    })
  }

  // 彻底删除作品
  private handleAgainDeleteWork() {
    var { work_id } = this.props.item
    this.props.againDeleteWorkAction(work_id)
  }

  // 从回收站恢复作品
  private handleRecoverDeletedWork() {
    var { work_id } = this.props.item
    this.props.recoverDeleteWorkAction({
      id: work_id,
      callback: this.props.callback
    })
  }

  private handleWorkTitleBlur(value) {
    var { work_id } = this.props.item
    if (value && value !== this.props.item.name) {
      this.props.renameWorkAction({
        id: work_id,
        name: value,
        workType: this.props.workType
      })
    }
    this.setState({
      inputVisible: false
    })
  }

  // 双击作品名称 重命名
  private handleDoubleClick() {
    var workType = this.props.workType
    if (workType === EWorkType.HOME || workType === EWorkType.CREATE) {
      this.setState({
        inputVisible: true
      }, () => {
        if (this.inputRef) {
          this.inputRef.focus()
          this.inputRef.select()
        }
      })
    }
  }

  public override render() {
    var { dropdownVisible, inputVisible } = this.state
    var { item, workType } = this.props
    return <div styleName="workItem">
      <div
        styleName={classnames("workImage", item.cover_url && item.preview_url && "cover")}
        onClick={() => this.handleSelfOpenWork()}
      >
        <div
          styleName="image"
          style={{ backgroundImage: "url(" + (item.cover_url || item.preview_url) + ")" }}
        />
        {(item.is_coll_work || workType === EWorkType.COLL) && (
          <div styleName="workType">
            {item.role === 1 && <IconFont type="icon-star" styleName="icon" />}
            <span styleName="workTypeText">协作</span>
          </div>
        )}
        {workType === EWorkType.DELETE && <div
          styleName={"workDelete"}
          onClick={(e) => {
            e.preventDefault()
            this.handleAgainDeleteWork()
          }}
        >
          <IconFont type="icon-delete" />
        </div>}
      </div>
      <div styleName="workName">
        {!inputVisible && (
          <div styleName="name" onDoubleClick={() => this.handleDoubleClick()}>{item.name}</div>
        )}
        <Input
          styleName={inputVisible ? "inputVisible" : "inputHidden"}
          ref={(e) => {
            return this.inputRef = e
          }}
          defaultValue={item.name || ""}
          isTrimmed={true}
          placeholder="请输入作品名称"
          rules={[{ rule: projectNameRegEx }]}
          maxLength={20}
          onBlur={this.handleWorkTitleBlur}
        />
        {workType === EWorkType.DELETE ? (
          <div styleName="recoverBtn" onClick={() => this.handleRecoverDeletedWork()}>
            <IconFont type="icon-recover" />
          </div>
        ) : (
          <Dropdown
            overlay={
              <div styleName="dropdown">
                <div styleName="dropdownItem" onClick={() => this.handleOpenWork()}>新标签页打开</div>
                {item.role === 1 && <>
                  <div styleName="dropdownItem" onClick={() => this.handleRenameWork()}>重命名</div>
                  <div styleName="dropdownItem" onClick={() => this.handleDeleteWork()}>删除</div>
                </>}
                {(item.is_coll_work && item.role === 2 || workType === EWorkType.COLL) && (
                  <div styleName="dropdownItem" onClick={() => this.handleQuitCollWork()}>退出协作</div>
                )}
              </div>
            }
            onVisibleChange={this.handleDropdownVisibleChange}
            visible={dropdownVisible}
            trigger={["click"]}
          >
            {inputVisible ? <span /> : <div styleName="moreBtn"><IconFont type="icon-more" /></div>}
          </Dropdown>
        )}
      </div>
      <div styleName="workTime">{formatTimestamp(item.updated_at || item.update_time)}</div>
    </div>
  }
}
