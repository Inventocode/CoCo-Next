/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-4
 */

"use strict"

import { y, w, E, O, T } from "../../../../unrestored/player/2635/2637/index__part-0"
import { addEditorIframe, checkUnsafeExtension, getWhitelist } from "../../../shared/player/audit"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_177 from "../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_514_index from "../../../../unrestored/player/2635/2637/514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_player_2635_2637_1210 from "../../../../unrestored/player/2635/2637/1210"

export const MobileCommunityWrapper = React.memo(() => {

  const [playerProps, setPlayerProps] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [blockCode, setBlockCode] = useState("")
  const bcmcRef = useRef()

  async function load() {
    const workId = window.location.pathname.match(/\/player\/([^/]*)/)?.[1]
    if (workId) {
      const bcmcUrl = (await $$_$$_$$_$$_unrestored_shared_1571_2636_177.g(workId, 1)).data.bcmc_url
      addEditorIframe(bcmcUrl)
      let bcmc = await (await fetch(bcmcUrl)).json()
      if (!(await getWhitelist()).includes(Number(workId))) {
        bcmc = await checkUnsafeExtension(bcmc)
      }
      bcmcRef.current = bcmc
    } else {
      E()
    }
  }

  useEffect(() => {
    y()
    load()
    T(load)
    window.addEventListener("message", (event) => {
      if (event.data.type === "PLAYER_BLOCK_CODE") {
        setBlockCode(event.data.payload)
        setIsLoading(false)
        const editorIframe = document.getElementById("editor-iframe")
        if (editorIframe) {
          document.body.removeChild(editorIframe)
        }
      }
    }, false)
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
