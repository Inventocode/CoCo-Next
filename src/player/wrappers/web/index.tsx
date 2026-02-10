/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-3
 */

import React from "react"
import { a as EChannel } from "../../../../unrestored/shared/1571/2636/68"
import { WebCommunityWrapper } from "./community"
import { WebH5Wrapper } from "./h5"

export function WebWrapper({ channel }) {
  return <>
    {(() => {
      switch (channel) {
        case EChannel.H5:
          return <WebH5Wrapper />
        default:
          return <WebCommunityWrapper />
      }
    })()}
  </>
}
