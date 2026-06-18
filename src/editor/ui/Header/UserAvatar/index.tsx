/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

import * as React from "react"

import { Ve } from "../../../../../unrestored/shared/1571/2636/index__part-9"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import { getAccountSettingUrl } from "../../../../shared/tools"
import { asyncSetUserInfoAction, openConfirmDialogAction, openSignInDialogAction } from "../../../redux/common/actions"
import { Dropdown, Menu, MenuItem, SubMenuItem } from "../../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../../unrestored/shared/1571/2636/710"
import { useDispatch, useSelector } from "react-redux"
import styles from "../../../../../unrestored/shared/1571/2636/1051"

enum EMenuValue {
  ORIGINAL_LOGIN = "ORIGINAL_LOGIN",
  ORIGINAL_ACCOUNT_SETTING = "ORIGINAL_ACCOUNT_SETTING",
  LOGOUT = "LOGOUT",
  ACCOUNT_SETTING = "ACCOUNT_SETTING",
  USER_AGREEMENT = "USER_AGREEMENT"
}

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

export const UserInfo = React.memo((__props) => {

  const { formatMessage } = Module_710.a()
  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.common.userInfo)

  async function handleClickMenu(value: EMenuValue) {
    switch (value) {
      // [CoCo Next] 添加原始登录、添加原始账号设置
      case EMenuValue.ORIGINAL_LOGIN:
        function open() {
          window.open(location.origin + "/original_login/", "_blank")
        }
        if (location.hostname == "coco-next.localhost") {
          dispatch(openConfirmDialogAction({
            title: "提示",
            content: "当前界面不需要进行原始登录，确定要继续吗？",
            onConfirm: open
          }))
        } else {
          open()
        }
        break
      case EMenuValue.ORIGINAL_ACCOUNT_SETTING:
        window.open(location.origin + "/original_login/?url=https://shequ.codemao.cn/setting/", "_blank")
        break
      case EMenuValue.LOGOUT:
        try {
          await Ve()
          await dispatch(asyncSetUserInfoAction(null))
        } catch (error) {
          console.error(error)
        }
        break
      case EMenuValue.ACCOUNT_SETTING:
        window.open(getAccountSettingUrl(), "_blank")
        break
    }
  }

  const serviceAgreementMenu = <Menu>
    {serviceAgreementList.map((service, index) => (
      <MenuItem key={index}>
        <div onClick={() => window.open(service.link, "_blank")}>{service.label}</div>
      </MenuItem>
    ))}
  </Menu>

  return userInfo ? (
    <div className={styles.wrapper}>
      <Dropdown overlay={
        <Menu onClick={handleClickMenu}>
          {/* [CoCo Next] 添加原始登录 */}
          {!location.hostname.endsWith(".codemao.cn") && (
            <MenuItem value={EMenuValue.ORIGINAL_LOGIN}>
              <div>{formatMessage({ id: "originalLogin" })}</div>
            </MenuItem>
          )}
          {/* [CoCo Next] 添加原始账号管理 */}
          {!location.hostname.endsWith(".codemao.cn") && (
            <MenuItem value={EMenuValue.ORIGINAL_ACCOUNT_SETTING}>
              <div>{formatMessage({ id: "originalAccountSetting" })}</div>
            </MenuItem>
          )}
          <MenuItem value={EMenuValue.ACCOUNT_SETTING}>
            <div>{formatMessage({ id: "accountSetting" })}</div>
          </MenuItem>
          <SubMenuItem subMenu={serviceAgreementMenu}>
            <div>{formatMessage({ id: "serviceAgreement" })}</div>
          </SubMenuItem>
          <MenuItem value={EMenuValue.LOGOUT}>
            <div>{formatMessage({ id: "logout" })}</div>
          </MenuItem>
        </Menu>
      }>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${userInfo.avatar_url})` }}
        />
      </Dropdown>
    </div>
  ) : (
    <div
      className={styles.loginButton}
      onClick={function () {
        dispatch(openSignInDialogAction())
        Module_141.a("LoginButtonClick")
      }}
    >{formatMessage({ id: "login" })}</div>
  )
})
