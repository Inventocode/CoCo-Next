import { RefObject, useLayoutEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

export function useOffsetWidth(elementRef: RefObject<HTMLElement | null | undefined> ) {
    const [width, setWidth] = useState(elementRef.current?.offsetWidth ?? 0)
    useLayoutEffect(() => {
        const element = elementRef.current
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
    }, [elementRef.current])
    return width
}
