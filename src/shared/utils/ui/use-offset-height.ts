import { useEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

export function useOffsetHeight(element?: HTMLElement | null | undefined) {
    const [height, setHeight] = useState(element?.offsetHeight ?? 0)
    useEffect(() => {
        if (element === null || element === undefined) {
            return
        }
        function update() {
            setHeight(element!.offsetHeight)
        }
        update()
        const observer = new ResizeObserver(update)
        observer.observe(element)
        return () => { observer.unobserve(element) }
    }, [element])
    return height
}
