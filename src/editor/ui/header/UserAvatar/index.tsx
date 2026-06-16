/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

import * as React from "react"

import { Ve } from "../../../../../unrestored/shared/1571/2636/index__part-9"
var Ye
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */Redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components from "../../../../shared/ui/components"
import { SubMenuItemWrapper } from "../../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import styles from "../../../../../unrestored/shared/1571/2636/1051"

!function (e) {
  e.ORIGINAL_LOGIN = "ORIGINAL_LOGIN"
  e.ORIGINAL_ACCOUNT_SETTING = "ORIGINAL_ACCOUNT_SETTING"
  e.LOGOUT = "LOGOUT"
  e.ACCOUNT_SETTING = "ACCOUNT_SETTING"
  e.USER_AGREEMENT = "USER_AGREEMENT"
}(Ye || (Ye = {}))

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
  var dispatch = useDispatch()
  var r = useSelector(function (e) {
    return e.common.userInfo
  })
  var o = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.t0 = t
              e.next = e.t0 === Ye.LOGOUT ? 3 : e.t0 === Ye.ACCOUNT_SETTING ? 14 : 16
              break
            case 3:
              e.prev = 3
              e.next = 6
              return Ve()
            case 6:
              e.next = 8
              return dispatch(Redux_common_actions.wg(null))
            case 8:
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t1 = e.catch(3)
              console.error(e.t1)
            case 13:
              return e.abrupt("break", 16)
            case 14:
              window.open(Shared_tools.D(), "_blank")
              return e.abrupt("break", 16)
            case 16:
              // [CoCo Next] 添加原始登录、添加原始账号设置
              if (t === Ye.ORIGINAL_LOGIN) {
                function open() {
                  window.open(location.origin + "/original_login/", "_blank")
                }
                if (location.hostname == "coco-next.localhost") {
                  dispatch(Redux_common_actions.openConfirmDialogAction({
                    title: "提示",
                    content: "当前界面不需要进行原始登录，确定要继续吗？",
                    onConfirm: open
                  }))
                } else {
                  open()
                }
              } else if (t === Ye.ORIGINAL_ACCOUNT_SETTING) {
                window.open(location.origin + "/original_login/?url=https://shequ.codemao.cn/setting/", "_blank")
              }
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 10]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var i = <Shared_ui_components.l>
    {serviceAgreementList.map((service, index) => (
      <Shared_ui_components.m key={index}>
        <div onClick={() => window.open(service.link, "_blank")}>{service.label}</div>
      </Shared_ui_components.m>
    ))}
  </Shared_ui_components.l>
  return r ? (
    <div className={styles.wrapper}>
      <Shared_ui_components.g overlay={
        <Shared_ui_components.l onClick={o}>
          {/* [CoCo Next] 添加原始登录 */}
          {!location.hostname.endsWith(".codemao.cn") && (
            <Shared_ui_components.m value={Ye.ORIGINAL_LOGIN}>
              <div>{formatMessage({ id: "originalLogin" })}</div>
            </Shared_ui_components.m>
          )}
          {/* [CoCo Next] 添加原始账号管理 */}
          {!location.hostname.endsWith(".codemao.cn") && (
            <Shared_ui_components.m value={Ye.ORIGINAL_ACCOUNT_SETTING}>
              <div>{formatMessage({ id: "originalAccountSetting" })}</div>
            </Shared_ui_components.m>
          )}
          <Shared_ui_components.m value={Ye.ACCOUNT_SETTING}>
            <div>{formatMessage({ id: "accountSetting" })}</div>
          </Shared_ui_components.m>
          <SubMenuItemWrapper subMenu={i}>
            <div>{formatMessage({ id: "serviceAgreement" })}</div>
          </SubMenuItemWrapper>
          <Shared_ui_components.m value={Ye.LOGOUT}>
            <div>{formatMessage({ id: "logout" })}</div>
          </Shared_ui_components.m>
        </Shared_ui_components.l>
      }>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${r.avatar_url})` }}
        />
      </Shared_ui_components.g>
    </div>
  ) : (
    <div
      className={styles.loginButton}
      onClick={function () {
        dispatch(Redux_common_actions.Ch())
        Module_141.a("LoginButtonClick")
      }}
    >{formatMessage({ id: "login" })}</div>
  )
})
