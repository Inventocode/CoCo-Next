import { V } from "../../../../unrestored/player/2635/2637/index__part-5"
import { addEditorIframe, loadRealWork, getWhitelist } from "../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"../../../../unrestored/player/2635/2637/514/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../shared/tools"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */Module_328 from /* 328 */"../../../../unrestored/shared/1571/2636/328"
import /* [auto-meaningful-name] */Unrestored_player_2635_2637_1063 from "../../../../unrestored/player/2635/2637/1063"

function setMicroMessengerInfo(title, description, coverUrl) {
  return X.apply(this, arguments)
}
function X() {
  return (X = Module_7.a(RegeneratorRuntime.mark(function t(title, description, coverUrl) {
    var /* [auto-meaningful-name] */window$wx
    var /* [auto-meaningful-name] */t$sent
    var a
    var s
    var c
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2
            return Shared_tools.cb("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js")
          case 2:
            window$wx = window.wx
            t.prev = 3
            t.next = 6
            return V()
          case 6:
            t$sent = t.sent
            window$wx.config({
              debug: false,
              appId: t$sent.appId,
              timestamp: t$sent.timestamp,
              nonceStr: t$sent.nonceStr,
              signature: t$sent.signature,
              jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZon"]
            })
            t.next = 13
            break
          case 10:
            t.prev = 10
            t.t0 = t.catch(3)
            console.error("getWeixinInfo error", t.t0)
          case 13:
            a = Shared_tools.parseURLSearchParamsToObject(window.location.href)
            s = a.title || title
            c = a.desc || description
            window$wx.ready(function () {
              window$wx.onMenuShareAppMessage({
                title: s,
                desc: c,
                link: window.location.href,
                imgUrl: coverUrl
              })
              window$wx.onMenuShareTimeline({
                title: c,
                link: window.location.href,
                imgUrl: coverUrl
              })
            })
          case 17:
          case "end":
            return t.stop()
        }
      }
    }, t, null, [[3, 10]])
  }))).apply(this, arguments)
}

export const MobileH5Wrapper = React.memo(() => {

  const [playerProps ,setPlayerProps] = useState()
  const [isLoadingMicroMessenger, setIsLoadingMicroMessenger] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [blockCode, setBlockCode] = useState("")
  var bcmcRef = useRef()

  async function load() {
    var title
    var description
    var coverUrl
    let workId = window.location.pathname.match(/\/player\/([^/]*)/)?.[1]
    const searchParams = Shared_tools.parseURLSearchParamsToObject(window.location.href)
    if (searchParams.workId) {
      workId = searchParams.workId
    }
    if (workId) {
      const bcmcUrl = (await Module_177.g(workId, 0)).data.bcmc_url
      // [CoCo Next] 提升加载速度
      // addEditorIframe(bcmcUrl)
      let bcmc = await (await fetch(bcmcUrl)).json()
      // [CoCo Next] 绕审核
      bcmc = await loadRealWork(bcmc)
      bcmcRef.current = bcmc
      // [CoCo Next] 提升加载速度
      setBlockCode(bcmcRef.current.blockCode)
      setIsLoading(false)
      // [CoCo Next] 改为 CoCo Next
      title = bcmc.title || "CoCo Next"
      description = bcmc.description || Module_328.c
      coverUrl = bcmc.coverUrl || ""
      document.title ||= title
      if (navigator.userAgent.toLowerCase().includes("micromessenger")) {
        await setMicroMessengerInfo(title, description, coverUrl)
      }
      setIsLoadingMicroMessenger(false)
    }
  }

  useEffect(() => {
    // [CoCo Next] 提升加载速度
    load()
    // window.addEventListener("message", (event) => {
    //   if ("PLAYER_BLOCK_CODE" === event.data.type) {
    //     setBlockCode(event.data.payload)
    //     setIsLoading(false)
    //     const editorIframe = document.getElementById("editor-iframe")
    //     if (editorIframe) {
    //       document.body.removeChild(editorIframe)
    //     }
    //   }
    // }, false)
  }, [])

  useEffect(function () {
    if (!isLoading && bcmcRef.current) {
      if (bcmcRef.current.blockCode) {
        bcmcRef.current.blockCode = blockCode
      }
      setPlayerProps({ ...bcmcRef.current })
    }
  }, [blockCode, isLoading])

  return playerProps ? (
    <div className={Unrestored_player_2635_2637_1063.community} >
      {isLoadingMicroMessenger && <img
        src="https://static.bcmcdn.com/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif"
        alt="loading"
        className={Unrestored_player_2635_2637_1063.loading}
      />}
      <input
        type="file"
        accept="image/*"
        capture="camera"
        id="appcraft-camera-input"
        className={Unrestored_player_2635_2637_1063.camera}
      />
      {React.createElement(Module_514.a, playerProps)}
    </div>
  ) : <></>
})
