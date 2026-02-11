/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：288
 */

export { getWhitelist as b }

/**
 * [CoCo Next] 绕审核
 */
export async function loadRealWork(bcmc) {
  if ("realWork" in bcmc) {
    return bcmc.realWork
  }
  if ("bypassAudit" in bcmc) {
    Object.assign(bcmc, bcmc.bypassAudit)
    delete bcmc.bypassAudit
  }
  return bcmc
}

let whitelist: number[] = []

export async function getWhitelist() {
  if (whitelist.length > 0) {
    return whitelist
  }
  whitelist = await (await fetch("https://static.bcmcdn.com/coco/whitelist.json")).json()
  return whitelist
}

export function addEditorIframe(bcmUrl: string) {
  const iFrame = document.createElement("iframe")
  iFrame.src = `${window.location.origin}/editor?playerBcmUrl=${bcmUrl}`
  iFrame.style.display = "none"
  iFrame.id = "editor-iframe"
  document.body.appendChild(iFrame)
}
