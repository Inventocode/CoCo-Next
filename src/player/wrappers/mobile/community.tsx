/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-4
 */

"use strict"

import { y, w, E, O, T } from "../../../../unrestored/player/2635/2637/index__part-0"
import { loadRealWork } from "../../../shared/player/audit"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_177 from "../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_514_index from "../../../../unrestored/player/2635/2637/514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import * as Tools from "../../../shared/tools"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_1210 from "../../../../unrestored/player/2635/2637/1210"

export const MobileCommunityWrapper = React.memo(() => {

  const [playerProps, setPlayerProps] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [blockCode, setBlockCode] = useState("")
  const bcmcRef = useRef()

  async function load() {
    let workId = window.location.pathname.match(/\/player\/([^/]*)/)?.[1]
    // [CoCo Next] 从 URL 参数获取 workId
    const searchParams = Tools.N(window.location.href)
    if (searchParams.workId) {
      workId = searchParams.workId
    }
    if (workId) {
      const bcmcUrl = (await $$_$$_$$_$$_unrestored_shared_1571_2636_177.g(workId, 1)).data.bcmc_url
      // [CoCo Next] 提升加载速度
      // addEditorIframe(bcmcUrl)
      let bcmc = await (await fetch(bcmcUrl)).json()
      // [CoCo Next] 绕审核
      bcmc = await loadRealWork(bcmc)
      bcmcRef.current = bcmc
      // [CoCo Next] 提升加载速度
      setBlockCode(bcmcRef.current.blockCode)
      setIsLoading(false)
    } else {
      E()
    }
  }

  useEffect(() => {
    // [CoCo Next] 提升加载速度
    y()
    load()
    T(load)
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
      setPlayerProps({ ...bcmcRef.current })
      w()
      O()
    }
  }, [blockCode, isLoading])

  return playerProps ? <div className={$$_$$_$$_$$_unrestored_player_2635_2637_1210.community}>
    <input
      type="file"
      accept="image/*"
      capture="camera"
      id="appcraft-camera-input"
      className={$$_$$_$$_$$_unrestored_player_2635_2637_1210.camera}
    />
    {React.createElement($$_$$_$$_$$_unrestored_player_2635_2637_514_index.a, playerProps)}
  </div> : <></>
})
