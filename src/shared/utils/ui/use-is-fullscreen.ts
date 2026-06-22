import { useEffect, useState } from "react"
import screenfull from "screenfull"

export function useIsFullScreen() {
    const [isFullScreen, setIsFullScreen] = useState<boolean>(screenfull.isFullscreen)
    useEffect(() => {
        function handleChange() {
            setIsFullScreen(screenfull.isFullscreen)
        }
        screenfull.on("change", handleChange)
        return () => { screenfull.off("change", handleChange) }
    })
    return isFullScreen
}
