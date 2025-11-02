import { NodePath, PluginObj, types } from "@babel/core"
import _ from "lodash"

const MARKING_COMMENT_CONTENT = " [auto-meaningful-name] "

export function useMeaningfulVarName(): PluginObj {
    return { visitor: {
        ImportDeclaration(path) {
            const { node: importDeclaration } = path
            const importSourceName = importDeclaration.source.value
            if (importSourceName.startsWith(".")) {
                return
            }
            for (const specifier of path.get("specifiers")) {
                if (specifier.isImportDefaultSpecifier()) {
                    renameIfNeeds(specifier.get("local"), importSourceName, true)
                }
                if (specifier.isImportNamespaceSpecifier()) {
                    renameIfNeeds(specifier.get("local"), importSourceName, true)
                }
            }
        },
        TSImportEqualsDeclaration(path) {
            const { node: importDeclaration } = path
            const { moduleReference } = importDeclaration
            if (!types.isTSExternalModuleReference(moduleReference)) {
                return
            }
            const importSourceName = moduleReference.expression.value
            if (importSourceName.startsWith(".")) {
                return
            }
            renameIfNeeds(path.get("id"), importSourceName, true)
        },
        VariableDeclarator(path) {
            const id = path.get("id")
            if (!id.isIdentifier()) {
                return
            }
            const { name } = id.node
            const binding = path.scope.getBinding(name)
            if (binding == null) {
                return
            }
            let assignValue = null
            const init = path.get("init")
            if (init.node != null) {
                assignValue = init
            } else if (binding.constantViolations.length == 1) {
                const assign = binding.constantViolations[0]
                if (!assign?.isAssignmentExpression()) {
                    return
                }
                assignValue = assign.get("right")
            }
            if (!assignValue?.isMemberExpression({ computed: false })) {
                return
            }
            renameIfNeeds(id, assignValue.toString())
        }
    } }
}

function renameIfNeeds(
    path: NodePath<types.Identifier>,
    newName: string,
    capitalize: boolean = false
) {
    const { node } = path
    const oldName = node.name
    const hasMarkingComment = node.leadingComments?.some((comment) =>
        comment.value == MARKING_COMMENT_CONTENT
    ) || path.parent.leadingComments?.some((comment) =>
        comment.value == MARKING_COMMENT_CONTENT
    )
    if (oldName.length > 2 && !hasMarkingComment) {
        return
    }
    let processedNewName = newName.match(/[A-Z]?(_|\$|[0-9]|[a-z]|\.)*/g)?.map(_.capitalize).join("")
    if (processedNewName == null) {
        return
    }
    if (processedNewName.length <= 4) {
        return
    }
    processedNewName = processedNewName.replace(/\./g, "$")
    if (!capitalize) {
        processedNewName = (processedNewName[0] ?? "").toLowerCase() + processedNewName.slice(1)
    }
    if (/^\d/.test(processedNewName)) {
        processedNewName = "_" + processedNewName
    }
    const { scope } = path
    if (scope.getBinding(processedNewName) != null) {
        scope.rename(processedNewName, scope.generateUid(processedNewName))
    }
    scope.rename(oldName, processedNewName)
    if (!hasMarkingComment) {
        path.addComment("leading", MARKING_COMMENT_CONTENT)
    }
}
