/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-6
 */

import { a as EChannel } from "../../../../unrestored/shared/1571/2636/68"
import React from "react"
import { MobileH5Wrapper } from "./h5"
import { MobileCommunityWrapper } from "./community"

export function MobileWrapper({ channel }) {
  return <>
    {(() => {
      switch (channel) {
        case EChannel.H5:
          return <MobileH5Wrapper />
        default:
          return <MobileCommunityWrapper />
      }
    })()}
  </>
}
