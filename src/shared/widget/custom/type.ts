"use strict";

export { EXTENSION_PREFIX as a };
export { UNSAFE_EXTENSION_PREFIX as b };
export { isSafeExtensions as e };
export { isExtensions as d };
export { standardize as c };
export { toUnprefixed as f };

export const EXTENSION_PREFIX = "EXTENSION_"
export const UNSAFE_EXTENSION_PREFIX = "UNSAFE_EXTENSION_"

export function isSafeExtensions(type: string): boolean {
  return type.startsWith(EXTENSION_PREFIX)
}

export function isExtensions(type: string): boolean {
  return type.startsWith(UNSAFE_EXTENSION_PREFIX) || type.startsWith(EXTENSION_PREFIX);
}

export function standardize(type: string, isFromWidgetShop: boolean): string {
  if (!isExtensions(type)) {
    type = `${isFromWidgetShop ? EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX}${type}`
  }
  return type = type.toUpperCase()
}

export function toUnprefixed(type: string, isFromWidgetShop: boolean): string {
  if (isExtensions(type)) {
    type = type.replace(isFromWidgetShop ? EXTENSION_PREFIX : UNSAFE_EXTENSION_PREFIX, "")
  }
  return type
}
