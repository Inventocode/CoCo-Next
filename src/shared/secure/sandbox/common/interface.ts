export interface ISandboxProps {
    globals: IScope
}

export interface ISandbox {

    readonly props: ISandboxProps
    readonly globalThis: IScope

    compile(this: this, code: string): Promise<IExecutable>
}

export interface IExecutable {

    readonly sandbox: ISandbox

    run(this: this, ...scopes: IScope[]): unknown
}

export interface IScope {
    [k: PropertyKey]: unknown
}
