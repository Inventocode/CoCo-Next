export function loadPage(URL: string) {
    addEventListener("load", async () => {
        const originalDocumentContent = await (await fetch(URL)).text()
        const originalDocument = new DOMParser().parseFromString(originalDocumentContent, "text/html")
        document.documentElement.innerHTML = ""
        const scriptElements = []
        for (const node of Array.from(originalDocument.querySelectorAll("*"))) {
            if (node instanceof HTMLScriptElement) {
                scriptElements.push(node)
                node.remove()
            }
        }
        document.head.append(...Array.from(originalDocument.head.childNodes))
        document.body.append(...Array.from(originalDocument.body.childNodes))
        for (const scriptElement of scriptElements) {
            const newScriptElement = document.createElement("script")
            if (scriptElement.src != "") {
                newScriptElement.innerHTML = await (await fetch(scriptElement.src)).text()
            } else {
                newScriptElement.innerHTML = scriptElement.innerHTML
            }
            newScriptElement.defer = scriptElement.defer
            document.body.appendChild(newScriptElement)
        }
    })
}
