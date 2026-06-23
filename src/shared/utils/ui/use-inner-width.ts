import { useEffect, useState } from "react"

export function useInnerWidth(): number {
    const [width, setWidth] = useState(innerWidth)
    useEffect(() => {
        function update() {
            setWidth(innerWidth)
        }
        addEventListener("resize", update)
        return () => {
            removeEventListener("resize", update)
        }
    }, [])
    return width
}
