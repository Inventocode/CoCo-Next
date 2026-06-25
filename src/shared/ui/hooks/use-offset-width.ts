import { useEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

export function useOffsetWidth(element?: HTMLElement | null | undefined) {
    const [width, setWidth] = useState(element?.offsetWidth ?? 0)
    useEffect(() => {
        if (element === null || element === undefined) {
            return
        }
        function update() {
            setWidth(element!.offsetWidth)
        }
        update()
        const observer = new ResizeObserver(update)
        observer.observe(element)
        return () => { observer.unobserve(element) }
    }, [element])
    return width
}
