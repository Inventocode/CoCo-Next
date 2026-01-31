import { Rule } from "eslint"

export const noCreateElement: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow React.createElement, prefer JSX",
      category: "Best Practices",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if ((
          (
            node.callee.type === "MemberExpression" &&
            node.callee.object.type === "Identifier" &&
            /React\d*/.test(node.callee.object.name) &&
            !node.callee.computed &&
            node.callee.property.type === "Identifier" &&
            node.callee.property.name === "createElement"
          ) || (
            node.callee.type === "Identifier" &&
            node.callee.name === "createElement"

          )) && node.arguments.length >= 1
        ) {
          const [tagArg, propsArg, ...childrenArgs] = node.arguments
          if (tagArg === undefined) {
            return
          }
          const { sourceCode } = context
          context.report({
            node,
            message: "Do not use React.createElement, use JSX instead.",
            fix(fixer) {
              let tagName
              if (tagArg.type === "Literal" && typeof tagArg.value === "string") {
                tagName = tagArg.value
              } else if (tagArg.type === "Identifier") {
                if (tagArg.name.charAt(0) !== tagArg.name.charAt(0).toUpperCase()) {
                  return null
                }
                tagName = tagArg.name
              } else if (tagArg.type === "MemberExpression") {
                if (
                  !tagArg.computed &&
                  tagArg.object.type === "Identifier" &&
                  /React\d*/.test(tagArg.object.name) &&
                  tagArg.property.type === "Identifier" &&
                  tagArg.property.name === "Fragment"
                ) {
                  tagName = ""
                } else {
                  tagName = sourceCode.getText(tagArg)
                }
              } else {
                return null
              }
              let propsStr = ""
              if (propsArg && propsArg.type === "ObjectExpression") {
                for (const prop of propsArg.properties) {
                  if (prop.type !== "Property") {
                    return null
                  }
                  let propName
                  if (prop.key.type === "Identifier") {
                    propName = prop.key.name
                  } else if (prop.key.type === "Literal" && typeof prop.key.value === "string") {
                    propName = prop.key.value
                  }
                  if (!propName || !/^([a-z]|[A-Z]|-|_|$)([a-z]|[A-Z]|[0-9]|-|_|$)*$/.test(propName)) {
                    return null
                  }
                  const valueCode = sourceCode.getText(prop.value)
                  propsStr += `\n${propName}=${prop.value.type === "Literal" && typeof prop.value.value === "string" ? valueCode : `{${valueCode}}`}`
                }
                propsStr && (propsStr += "\n")
              } else if (propsArg?.type == "Literal" && propsArg.value === null) {
                propsStr = ""
              } else {
                return null
              }
              let childrenStr = childrenArgs.map(child => {
                if (child.type === "Literal") {
                  return child.value
                }
                return `{${sourceCode.getText(child)}}`
              }).join("\n")
              childrenStr && (childrenStr = `\n${childrenStr}\n`)
              const jsx = tagName != "" && childrenStr == "" ? `<${tagName}${propsStr}/>` : `<${tagName}${propsStr}>${childrenStr}</${tagName}>`
              return fixer.replaceText(node, jsx)
            }
          })
        }
      }
    }
  }
}
