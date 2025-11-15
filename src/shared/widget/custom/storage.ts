"use strict"

export { addUnsafeExtension as a }
export { getExtension as f }
export { unsafeExtensionsToFileStorage as e }
export { safeExtensionsToFileStorage as d }

import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1531_2584_9 = require("../../../../unrestored/shared/1531/2584/9")

import * as types from "./types"
import * as Type from "./type"

export interface UnsafeExtensionStorage extends UnsafeExtensionFileStorage {
  types: types.Types
}

export interface SafeExtensionStorage extends SafeExtensionFileStorage {
  types: types.Types
}

export interface UnsafeExtensionFileStorage {
  type: string
  code: string
}

export interface SafeExtensionFileStorage {
  id: number
  type: string
  cdnUrl: string
}

const safeExtensions = new Map<string, SafeExtensionStorage>()
const unsafeExtensions = new Map<string, UnsafeExtensionStorage>()

export function addSafeExtension(storage: SafeExtensionStorage) {
  const { type } = storage
  safeExtensions.set(type, storage)
}
export function addUnsafeExtension(storage: UnsafeExtensionStorage): void {
  const { type } = storage
  unsafeExtensions.set(type, storage)
}

export function getExtension(type: string) {
  return safeExtensions.get(type) || unsafeExtensions.get(type)
}
export function getUnsafeExtension(type: string) {
  return unsafeExtensions.has(type)
}

export function unsafeExtensionsToFileStorage(): UnsafeExtensionFileStorage[] {
  return Array.from(unsafeExtensions.values()).
  filter(({ type }) => Type.isExtensions(type)).
  map(({ type, code }) => ({ type, code }))
}

export function safeExtensionsToFileStorage() {
  const safeExtensionsArray = Array.from(safeExtensions.values())
  const storage: SafeExtensionFileStorage[] = []
  safeExtensionsArray.forEach(({ id, type, cdnUrl }) => {
    if ($$_$$_$$_$$_unrestored_shared_1531_2584_9.Mb(type)) {
      storage.push({ id, type, cdnUrl })
    }
  })
  return storage
}

export function clear() {
  Array.from(unsafeExtensions.keys()).forEach((type) => {
    if (Type.isExtensions(type)) {
      unsafeExtensions.delete(type)
    }
  })
  safeExtensions.clear()
}
