import { RefObject, useLayoutEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

export function useOffsetHeight(elementRef: RefObject<HTMLElement | null | undefined>) {
    const [height, setHeight] = useState(elementRef.current?.offsetHeight ?? 0)
    useLayoutEffect(() => {
        const element = elementRef.current
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
    }, [elementRef.current])
    return height
}
