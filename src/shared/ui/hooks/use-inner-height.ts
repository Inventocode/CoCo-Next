import { useEffect, useState } from "react"

export function useInnerHeight(): number {
    const [height, setHeight] = useState(innerHeight)
    useEffect(() => {
        function update() {
            setHeight(innerHeight)
        }
        addEventListener("resize", update)
        return () => {
            removeEventListener("resize", update)
        }
    }, [])
    return height
}
