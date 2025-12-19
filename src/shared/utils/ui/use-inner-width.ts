import { useEffect, useState } from "react"

export function useInnerWidth(): number {
    const [, setWidth] = useState(innerWidth)
    function update() {
        setWidth(innerWidth)
    }
    useEffect(() => {
        addEventListener("resize", update)
        return () => {
            removeEventListener("resize", update)
        }
    })
    return innerWidth
}
