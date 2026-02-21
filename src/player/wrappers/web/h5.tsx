/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-2
 */

import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import { loadRealWork } from "../../../shared/player/audit"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_1042 from "../../../../unrestored/player/2635/2637/1042"
import { IconFont } from "../../../shared/ui/components"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_738_index from "../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_177 from "../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_514_index from "../../../../unrestored/player/2635/2637/514/index"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_68 from "../../../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_tools from "../../../shared/tools"
import styles from "../../../../unrestored/player/2635/2637/531"

function gatTransform(scale: number) {
  return "translate(-50%, -50%) " + `scale(${scale})`
}

export const WebH5Wrapper = React.memo(() => {

  const [playerProps, setPlayerProps] = useState()
  const [scale, setScale] = useState(1)
  const [E, O] = useState(false)
  const [panelIsVisible, setPanelIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [blockCode, setBlockCode] = useState("")
  var W = useRef()
  var H = useRef()
  const bcmcRef = useRef()

  async function load() {
    let workId = window.location.pathname.match(/\/player\/([^/]*)/)?.[1]
    const searchParams = $$_$$_$$_shared_tools.N(window.location.href)
    if (searchParams.workId) {
      workId = searchParams.workId
    }
    if (workId) {
      const bcmcUrl = (await $$_$$_$$_$$_unrestored_shared_1571_2636_177.g(workId, 0)).data.bcmc_url
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
  }

  function handleMessage({ data }: MessageEvent) {
    if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.DEVICE_VIBRATE) {
      var n = Date.now() + data.data.duration
      if (H.current && H.current >= n) {
        return
      }
      O(true)
      window.clearTimeout(W.current)
      W.current = window.setTimeout(function () {
        return O(false)
      }, data.data.duration)
      return void (H.current = n)
    }
    if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current)
      H.current = 0
      O(false)
    } else {
      if (data.type === $$_$$_$$_$$_unrestored_shared_1571_2636_68.b.EMULATOR && "string" === typeof data.data.visiblePanel) {
        setPanelIsVisible(!!data.data.visiblePanel)
      }
    }
  }

  useEffect(() => {
    // [CoCo Next] 提升加载速度
    load()
    // document.body.click()
    // window.addEventListener("message", (event) => {
    //   if (event.data.type === "PLAYER_BLOCK_CODE") {
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
    }
  }, [blockCode, isLoading])

  useEffect(() => {
    window.addEventListener("message", handleMessage)
    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  useEffect(function () {
    function updateScale() {
      const { innerWidth } = window
      setScale(innerWidth > 1366 ? 1 : innerWidth > 992 ? .9 : innerWidth > 700 ? .83 : .57)
    }
    updateScale()
    window.onresize = updateScale
  }, [])

  return <div className={styles.community}>
    <div
      id="webPlayer"
      className={classnames(styles.main)}
      style={{
        transform: gatTransform(scale),
        left: panelIsVisible ? "35%" : "50%"
      }}
    >
      <div className={classnames(E && styles.vibrate, styles.playerWrapper)}>
        {playerProps && React.createElement($$_$$_$$_$$_unrestored_player_2635_2637_514_index.a, playerProps)}
      </div>
      <div className={classnames(E && styles.vibrate, styles.deviceFrame)} />
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
