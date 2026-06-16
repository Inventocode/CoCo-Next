import { useEffect, useState } from "react"

export function useInnerHeight(): number {
    const [, setWidth] = useState(innerHeight)
    function update() {
        setWidth(innerHeight)
    }
    useEffect(() => {
        addEventListener("resize", update)
        return () => {
            removeEventListener("resize", update)
        }
    })
    return innerHeight
}
