import traverse, { NodePath } from "@babel/traverse"
import * as t from "@babel/types"
import cliProgress from "cli-progress"

import { ModuleMap } from "./types"

export function unminimize(modules: ModuleMap): void {
    console.log("unminimizing")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        if (module.external != null && !module.moved) {
            bar.increment()
            continue
        }
        traverse(module.AST, {
            ExpressionStatement(path: NodePath<t.ExpressionStatement>): void {
                const expression: t.Expression = path.node.expression
                switch (expression.type) {
                    case "SequenceExpression":
                        path.replaceWithMultiple(expression.expressions.map(t.expressionStatement))
                        break
                    case "ConditionalExpression":
                        path.replaceWith(t.ifStatement(
                            expression.test,
                            t.blockStatement([t.expressionStatement(expression.consequent)]),
                            t.blockStatement([t.expressionStatement(expression.alternate)])
                        ))
                        break
                    case "LogicalExpression":
                        switch (expression.operator) {
                            case "&&":
                                path.replaceWith(t.ifStatement(
                                    expression.left,
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                            case "||":
                                path.replaceWith(t.ifStatement(
                                    t.unaryExpression("!", expression.left),
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                            case "??":
                                path.replaceWith(t.ifStatement(
                                    t.logicalExpression(
                                        "||",
                                        t.binaryExpression("===", expression.left, t.nullLiteral()),
                                        t.binaryExpression("===", expression.left, t.identifier("undefined"))
                                    ),
                                    t.blockStatement([t.expressionStatement(expression.right)])
                                ))
                                break
                        }
                        break
                }
            },
            StringLiteral(path: NodePath<t.StringLiteral>): void {
                path.node.extra ??= {}
                path.node.extra["raw"] = JSON.stringify(path.node.value)
            },
            CallExpression(path: NodePath<t.CallExpression>): void {
                const callee: NodePath = path.get("callee")
                if (!callee.isIdentifier({ name: "Object" })) {
                    return
                }
                const { node, parentPath } = path
                if (!parentPath.isCallExpression({ callee: node })) {
                    return
                }
                path.replaceWith(node.arguments[0]!)
            },
            UnaryExpression(path: NodePath<t.UnaryExpression>): void {
                const { operator, argument: expression, prefix } = path.node
                if (!prefix) {
                    return
                }
                if (operator == "!" && t.isNumericLiteral(expression)) {
                    path.replaceWith(t.booleanLiteral(!expression.value))
                } else if (operator == "void" && t.isLiteral(expression)) {
                    path.replaceWith(t.identifier("undefined"))
                }
            },
            ReturnStatement(path: NodePath<t.ReturnStatement>): void {
                const { argument } = path.node
                if (!t.isSequenceExpression(argument)) {
                    return
                }
                const { expressions } = argument
                path.replaceWithMultiple([
                    ...expressions.slice(0, -1).map(t.expressionStatement),
                    t.returnStatement(expressions.slice(-1)[0])
                ])
            },
            ThrowStatement(path: NodePath<t.ThrowStatement>): void {
                const { argument } = path.node
                if (!t.isSequenceExpression(argument)) {
                    return
                }
                const { expressions } = argument
                path.replaceWithMultiple([
                    ...expressions.slice(0, -1).map(t.expressionStatement),
                    t.throwStatement(expressions.slice(-1)[0]!)
                ])
            },
            IfStatement(path: NodePath<t.IfStatement>): void {
                const { parentPath } = path
                const { test } = path.node
                if (
                    !parentPath.isProgram() &&
                    !parentPath.isBlockStatement()
                ) {
                    return
                }
                if (!t.isSequenceExpression(test)) {
                    return
                }
                const { expressions } = test
                path.replaceWithMultiple([
                    ...expressions.slice(0, -1).map(t.expressionStatement),
                    {
                        ...path.node,
                        test: expressions.slice(-1)[0]!
                    }
                ])

            },
            Statement(path: NodePath<t.Statement>): void {
                if (path.isBlockStatement()) {
                    return
                }
                if (
                    path.parent.type == "IfStatement" &&
                    path.type == "IfStatement" &&
                    path.node == path.parent.alternate
                ) {
                    return
                }
                if (![
                    "IfStatement",
                    "WhileStatement",
                    "ForStatement"
                ].includes(path.parent.type)) {
                    return
                }
                path.replaceWith(t.blockStatement([path.node]))
            },
            VariableDeclaration(path: NodePath<t.VariableDeclaration>): void {
                if (!path.parentPath.isBlockStatement() && !path.parentPath.isProgram()) {
                    return
                }
                const { node } = path
                if (node.declarations.length == 1) {
                    return
                }
                path.replaceWithMultiple(node.declarations.map(
                    (declaration: t.VariableDeclarator): t.VariableDeclaration => {
                        return t.variableDeclaration(node.kind, [declaration])
                    }
                ))
            },
            VariableDeclarator(path: NodePath<t.VariableDeclarator>): void {
                const initPath: NodePath<t.Expression | null | undefined> = path.get("init")
                if (initPath.isSequenceExpression()) {
                    const { node: sequenceExpression } = initPath
                    const lastExpression: t.Expression | undefined = sequenceExpression.expressions.pop()
                    if (lastExpression == undefined) {
                        return
                    }
                    initPath.replaceWith(lastExpression)
                    path.parentPath.insertBefore(sequenceExpression.expressions.map(t.expressionStatement))
                }
            }
        })
        bar.increment()
    }
    bar.stop()
}
