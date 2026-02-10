/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：78
 */

export const SAFE_EXTENSION_PREFIX = "EXTENSION_"
export { SAFE_EXTENSION_PREFIX as a }
export const UNSAFE_EXTENSION_PREFIX = "UNSAFE_EXTENSION_"

export function isSafeExtensions(type: string): boolean {
  return type.startsWith(SAFE_EXTENSION_PREFIX)
}
export { isSafeExtensions as e }

export function isExtensions(type: string): boolean {
  return type.startsWith(UNSAFE_EXTENSION_PREFIX) || type.startsWith(SAFE_EXTENSION_PREFIX)
}
export { isExtensions as d }

export function standardize(type: string, isFromWidgetShop: boolean): string {
  if (!isExtensions(type)) {
    type = `${isFromWidgetShop ? SAFE_EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX}${type}`
  }
  return type = type.toUpperCase()
}
export { standardize as c }

export function toUnprefixed(type: string, isFromWidgetShop: boolean): string {
  if (isExtensions(type)) {
    type = type.replace(isFromWidgetShop ? SAFE_EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX, "")
  }
  return type
}
export { toUnprefixed as f }
