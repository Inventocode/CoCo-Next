import { Signal } from "@soncodi/signal"

import { pluginManager } from "./manager"
import type { CoCoWidgetLoaderTypes, InternalWidgetLoaderTypes } from "../packages/plugin-sdk/src/index"
import * as Paths from "./paths"

export interface IPluginRegistration<T, S> {

    readonly registerName: string

    readonly changed: Signal<void>

    getStore(this: this): S

    get(this: this, packageName: string): Promise<T>
    getRecord(this: this): Promise<Record<string, T>>
    getValues(this: this): Promise<T[]>
    getRegister(this: this, packageName: string): (value: T) => void

    unregister(this: this, packageName: string): void
}

export abstract class BasePluginRegistration<T, S>implements IPluginRegistration<T, S> {

    public readonly changed: Signal<void>

    public constructor(public readonly registerName: string) {
        this.changed = new Signal()
    }

    public abstract getStore(this: this): S

    public abstract get(this: this, packageName: string): Promise<T>
    public abstract getRecord(this: this): Promise<Record<string, T>>
    public abstract getRecordSync(this: this): Record<string, T>
    public async getValues(this: this): Promise<T[]> {
        return Object.values(await this.getRecord())
    }
    public getRegister(this: this, packageName: string) {
        return this.register.bind(this, packageName)
    }

    public register(this: this, packageName: string, value: T): void {
        this.innerRegister(packageName, value)
        this.changed.emit()
    }
    public unregister(this: this, packageName: string): void {
        this.innerUnregister(packageName)
        this.changed.emit()
    }

    public abstract innerRegister(this: this, packageName: string, value: T): void
    public abstract innerUnregister(this: this, packageName: string): void
}

class JSONPluginRegistration<T> extends BasePluginRegistration<T, Record<string, T>> {

    public constructor(name: string, public readonly store: Record<string, T> = {}) {
        super(`register${name}`)
    }

    public override getStore(this: this): Record<string, T> {
        return this.store
    }

    public override async get(this: this, packageName: string): Promise<T> {
        const result = this.store[packageName]
        if (result === undefined) {
            throw new Error(`插件 ${packageName} 不存在或没有注册 ${this.registerName}`)
        }
        return result
    }

    public override async getRecord(this: this): Promise<Record<string, T>> {
        return this.store
    }

    public override getRecordSync(this: this): Record<string, T> {
        return this.store
    }

    public override innerRegister(this: this, packageName: string, value: T): void {
        this.store[packageName] = value
    }

    public override innerUnregister(this: this, packageName: string): void {
        delete this.store[packageName]
    }
}

class FunctionPluginRegistration<T extends Function> extends BasePluginRegistration<T, string[]> {

    private readonly store: Record<string, null>
    private readonly unloaded: Record<string, null>
    private readonly functionRecord: Record<string, T>
    private loadPromise?: Promise<void[]>

    public constructor(name: string, store: string[] = []) {
        super(`on${name}`)
        this.store = Object.fromEntries(store.map((name) => [name, null]))
        this.unloaded = { ...this.store }
        this.functionRecord = {}
    }

    public override getStore(this: this): string[] {
        return Object.keys(this.store)
    }

    public override async get(this: this, packageName: string): Promise<T> {
        if (!Object.hasOwn(this.functionRecord, packageName)) {
            await pluginManager.loadPlugin(packageName)
        }
        const result = this.functionRecord[packageName]
        if (result === undefined) {
            throw new Error(`插件 ${packageName} 不存在或没有注册 ${this.registerName}`)
        }
        return result
    }

    public override async getRecord(this: this): Promise<Record<string, T>> {
        await this.ensureLoaded()
        return this.functionRecord
    }

    public override getRecordSync(this: this): Record<string, T> {
        return this.functionRecord
    }

    public override innerRegister(this: this, packageName: string, value: T): void {
        this.store[packageName] = null
        delete this.unloaded[packageName]
        this.functionRecord[packageName] = value
    }

    public override innerUnregister(this: this, packageName: string): void {
        delete this.store[packageName]
        delete this.functionRecord[packageName]
    }

    private async ensureLoaded(this: this) {
        if (this.loadPromise === undefined) {
            const promises: Promise<void>[] = []
            for (const packageName of Object.keys(this.unloaded)) {
                if (!Object.hasOwn(this.functionRecord, packageName)) {
                    promises.push(pluginManager.loadPlugin(packageName))
                }
            }
            this.loadPromise = Promise.all(promises)
        }
        await this.loadPromise
    }
}

export const REGISTRATIONS = buildRegistrations({
    CoCoWidgetLoader: JSONPluginRegistration<CoCoWidgetLoaderTypes>,
    InternalWidgetLoader: JSONPluginRegistration<InternalWidgetLoaderTypes>,
    Clean: FunctionPluginRegistration<() => void>
})

type RegistrationConstructor = new (name: string, store?: any) => IPluginRegistration<any, any>

type BuildRegistrations<T extends Record<string, RegistrationConstructor>> = {
    [P in keyof T]: InstanceType<T[P]>
}

function buildRegistrations<T extends Record<string, RegistrationConstructor>>(data: T): BuildRegistrations<T> {
    const result: any = {}
    for (const [name, registrationConstructor] of Object.entries(data)) {
        const path = Paths.REGISTRATION_FUNCTION(name)
        const storeString = localStorage.getItem(path)
        let registration: IPluginRegistration<any, any>
        if (storeString === null) {
            registration = new registrationConstructor(name)
        } else {
            registration = new registrationConstructor(name, JSON.parse(storeString))
        }
        registration.changed.on(() => { localStorage.setItem(path, JSON.stringify(registration.getStore())) })
        result[name] = registration
    }
    return result
}
