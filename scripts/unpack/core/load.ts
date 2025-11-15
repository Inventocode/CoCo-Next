import path from "path"
import { promises as fs } from "fs"
import { parse } from "@babel/parser"
import * as t from "@babel/types"

import { ModuleMap, ModuleKey, Module } from "./types"

export async function loadModulesFromFile(filePath: string): Promise<ModuleMap> {
    console.log(`loading ${path.relative(process.cwd(), filePath)}`)
    const code: string = String(await fs.readFile(filePath))
    const AST: t.File = parse(code, { sourceType: "script" })
    const modules: ModuleMap = loadModulesFromAST(AST)
    console.log(`found ${Object.keys(modules).length} modules`)
    return modules
}

export function loadModulesFromAST(AST?: t.Node | null | undefined): ModuleMap {
    if (t.isFile(AST)) {
        AST = AST.program
    }
    if (t.isProgram(AST)) {
        AST = AST.body[0]
    }
    if (t.isExpressionStatement(AST)) {
        AST = AST.expression
    }
    if (t.isUnaryExpression(AST, { operator: "!" })) {
        AST = AST.argument
    }
    if (!t.isCallExpression(AST)) {
        throw new Error("No modules found!")
    }
    let modulesExpression: t.ObjectExpression | t.ArrayExpression | null = null
    let arg0: t.Node | null | undefined, arg1: t.Node | null | undefined
    [arg0, arg1] = AST.arguments
    if (
        t.isArrayExpression(arg0) && (
            t.isObjectExpression(arg0.elements[0]) ||
            t.isArrayExpression(arg0.elements[0])
        ) && (
            arg0.elements.length == 2 ||
            arg0.elements.length == 3
        )
    ) {
        [arg0, arg1] = arg0.elements
    }
    if (t.isObjectExpression(arg0) || t.isArrayExpression(arg0)) {
        modulesExpression = arg0
    }
    if (t.isObjectExpression(arg1) || t.isArrayExpression(arg1)) {
        modulesExpression = arg1
    }
    if (modulesExpression == null) {
        throw new Error("No modules found!")
    }
    const modules: ModuleMap = {}
    if (t.isObjectExpression(modulesExpression)) {
        for (const property of modulesExpression.properties) {
            t.assertObjectProperty(property)
            const { key: keyNode } = property
            let key: ModuleKey | null = null
            if (t.isIdentifier(keyNode)) {
                key = keyNode.name
            }
            if (t.isStringLiteral(keyNode) || t.isNumericLiteral(keyNode)) {
                key = keyNode.value
            }
            if (key == null) {
                throw new Error()
            }
            t.assertFunctionExpression(property.value)
            modules[key] = loadModuleFromModuleFunctionExpression(key, property.value)
        }
    } else {
        for (const [key, functionNode] of Object.entries(modulesExpression.elements)) {
            if (functionNode == null) {
                continue
            }
            t.assertFunctionExpression(functionNode)
            modules[key] = loadModuleFromModuleFunctionExpression(key, functionNode)
        }
    }
    if (Object.keys(modules).length == 0) {
        throw new Error("No modules found!")
    }
    return modules
}

export function loadModuleFromModuleFunctionExpression(key: ModuleKey, node: t.FunctionExpression): Module {
    return {
        key,
        path: ["unnamed"],
        args: node.params.map((param: t.Node): string => (t.assertIdentifier(param), param.name)),
        AST: t.file(t.program(node.body.body, node.body.directives, "script")),
        isEntry: true,
        dependency: new Set(),
        reference: new Set(),
        importsNameMap: {},
        importsNameToModuleMap: {},
        exportsNameMap: {}
    }
}
