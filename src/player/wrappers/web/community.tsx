/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-1
 */

import { y, w, E, O, T } from "../../../../unrestored/player/2635/2637/index__part-0"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_738_index from "../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_177 from "../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_514_index from "../../../../unrestored/player/2635/2637/514/index"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_68 from "../../../../unrestored/shared/1571/2636/68"
import * as Tools from "../../../shared/tools"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import { IconFont } from "../../../shared/ui/components"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_1042 from "../../../../unrestored/player/2635/2637/1042"
import { loadRealWork } from "../../../shared/player/audit"
import styles from "../../../../unrestored/player/2635/2637/530"

function gatTransform(scale: number) {
  return "translate(-50%, -50%) " + `scale(${scale})`
}

export const WebCommunityWrapper = React.memo(() => {

  const [playerProps, setPlayerProps] = useState()
  const [scale, setScale] = useState(1)
  const [j, R] = useState(false)
  const [D, setPanelIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [blockCode, setBlockCode] = useState("")
  var z = useRef()
  var Y = useRef()
  const bcmcRef = useRef()

  async function load() {
    let workId = window.location.pathname.match(/\/player\/([^/]*)/)?.[1]
    // [CoCo Next] 从 URL 参数获取 workId
    const searchParams = Tools.N(window.location.href)
    if (searchParams.workId) {
      workId = searchParams.workId
    }
    if (workId) {
      const bcmcUrl = (await $$_$$_$$_$$_unrestored_shared_1571_2636_177.g(workId)).data.bcmc_url
      // [CoCo Next] 提升加载速度
      // addEditorIframe(bcmcUrl)
      let bcmc = await (await fetch(bcmcUrl)).json()
      // [CoCo Next] 绕审核
      bcmc = await loadRealWork(bcmc)
      bcmcRef.current = bcmc
      // [CoCo Next] 提升加载速度
      setBlockCode(bcmcRef.current.blockCode)
      setIsLoading(false)
    }
    else {
      E()
    }
  }

  useEffect(() => {
    // [CoCo Next] 提升加载速度
    y()
    load()
    T(() => { window.location.reload() })
    // document.body.click()
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

  useEffect(() => {
    if (!isLoading && bcmcRef.current) {
      if (bcmcRef.current.blockCode) {
        bcmcRef.current.blockCode = blockCode
      }
      setPlayerProps({
        ...bcmcRef.current,
        shouldOpenEmulator: true
      })
      w()
      O()
    }
  }, [blockCode, isLoading])

  useEffect(function () {
    function updateScale() {
      const { innerWidth } = window
      setScale(innerWidth > 1366 ? 1 : innerWidth > 992 ? .9 : innerWidth > 700 ? .83 : .57)
    }
    updateScale()
    window.onresize = updateScale
  }, [])

  function handleMessage({ data }: MessageEvent) {
    if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.DEVICE_VIBRATE) {
      var n = Date.now() + data.data.duration
      if (Y.current && Y.current >= n) {
        return
      }
      R(true)
      window.clearTimeout(z.current)
      z.current = window.setTimeout(function () {
        return R(false)
      }, data.data.duration)
      return void (Y.current = n)
    }
    if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current)
      Y.current = 0
      R(false)
    } else {
      if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.EMULATOR && "string" === typeof data.data.visiblePanel) {
        setPanelIsVisible(!!data.data.visiblePanel)
      }
    }
  }

  useEffect(function () {
    window.addEventListener("message", handleMessage)
    return function () {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  return <div className={styles.community}>
    <div
      id="webPlayer"
      className={classnames(styles.main)}
      style={{
        transform: gatTransform(scale),
        left: D ? "35%" : "50%"
      }}
    >
      <div className={classnames(j && styles.vibrate, styles.playerWrapper)}>
        {playerProps && React.createElement($$_$$_$$_$$_unrestored_player_2635_2637_514_index.a, playerProps)}
      </div>
      <div className={classnames(j && styles.vibrate, styles.deviceFrame)} />
      <div className={styles.emulatorWrapper}>
        <$$_$$_$$_$$_unrestored_shared_1571_2636_738_index.a messageWindow={window} />
      </div>
    </div>
    <div
      className={styles.appUrlBtn}
      onClick={function () {
        window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
      }}
    >
      <img src={$$_$$_$$_$$_unrestored_player_2635_2637_1042} className={styles.appUrlBtnImg} alt="" />
      {/* [CoCo Next] 添加 CoCo Next */}
      <span>去 CoCo Next 制作</span>
      <IconFont type="icon-fold-left" className={styles.appUrlBtnIcon} />
    </div>
  </div>
})
