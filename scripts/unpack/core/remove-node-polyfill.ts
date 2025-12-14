import * as t from "@babel/types"
import generate from "@babel/generator"
import traverse from "@babel/traverse"

import { ModuleKey, ModuleMap } from "./types"

export function removeNodePolyfill(
    modules: ModuleMap,
    polyfills: Record<ModuleKey, string | null | undefined>
): void {
    console.log("removing node polyfill")
    for (const module of Object.values(modules)) {
        if (module.external != null && !module.moved) {
            continue
        }
        const { AST: { program } } = module
        if (program.body.length != 1) {
            continue
        }
        const statement = program.body[0]
        if (!t.isExpressionStatement(statement)) {
            continue
        }
        const { expression } = statement
        if (!t.isCallExpression(expression)) {
            continue
        }
        const { callee, "arguments": args } = expression
        if (!t.isMemberExpression(callee, { computed: false })) {
            continue
        }
        if (!t.isIdentifier(callee.property, { name: "call" })) {
            continue
        }
        const func = callee.object
        if (!t.isFunctionExpression(func)) {
            continue
        }
        const { params } = func
        args.shift()
        const paramsMap = new Map<t.Identifier, string>()
        for (let i = 0; i < params.length; i++) {
            const param = params[i] as t.Identifier, arg = args[i]
            if (param == undefined) {
                continue
            }
            let temp
            if (
                t.isMemberExpression(arg, { computed: false }) &&
                t.isIdentifier(temp = arg.property)
            ) {
                paramsMap.set(param, temp.name)
            } else if (
                t.isCallExpression(arg) &&
                t.isIdentifier(arg.arguments[0], { name: module.args[0] ?? "" })
            ) {
                paramsMap.set(param, "module")
            } else if (
                t.isCallExpression(arg) &&
                t.isIdentifier(arg.callee, { name: module.args[2] ?? "" }) &&
                (t.isNumericLiteral(temp = arg.arguments[0]) || t.isStringLiteral(temp)) &&
                (temp = polyfills[String(temp.value)]) != null
            ) {
                paramsMap.set(param, temp)
            } else {
                console.log(`module (key: ${module.key}) unknown polyfill: ${arg && generate(arg).code}`)
                paramsMap.set(param, "undefined")
            }
        }
        traverse(module.AST, {
            Identifier(path) {
                const { name } = path.node
                if (!path.isReferencedIdentifier()) {
                    return
                }
                const bindingIdentifier = path.scope.getBindingIdentifier(name)
                if (bindingIdentifier == null) {
                    return
                }
                const originalName = paramsMap.get(bindingIdentifier)
                if (originalName == null) {
                    return
                }
                path.replaceWith(t.identifier(originalName))
                path.skip()
            },
            Program: {
                exit(path) {
                    path.replaceWith({
                        ...path.node,
                        body: func.body.body
                    })
                    path.skip()
                }
            }
        })
    }
}
