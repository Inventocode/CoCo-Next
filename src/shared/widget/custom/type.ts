"use strict";

export { SAFE_EXTENSION_PREFIX as a }
export { isSafeExtensions as e }
export { isExtensions as d }
export { toUnprefixed as f }

export const SAFE_EXTENSION_PREFIX = "EXTENSION_"
export const UNSAFE_EXTENSION_PREFIX = "UNSAFE_EXTENSION_"

export function isSafeExtensions(type: string): boolean {
  return type.startsWith(SAFE_EXTENSION_PREFIX)
}

export function isExtensions(type: string): boolean {
  return type.startsWith(UNSAFE_EXTENSION_PREFIX) || type.startsWith(SAFE_EXTENSION_PREFIX);
}

export function standardize(type: string, isFromWidgetShop: boolean): string {
  if (!isExtensions(type)) {
    type = `${isFromWidgetShop ? SAFE_EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX}${type}`
  }
  return type = type.toUpperCase()
}

export function toUnprefixed(type: string, isFromWidgetShop: boolean): string {
  if (isExtensions(type)) {
    type = type.replace(isFromWidgetShop ? SAFE_EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX, "")
  }
  return type
}
