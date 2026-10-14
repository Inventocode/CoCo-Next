export function lazyLoad<T>(load: () => T): () => T {
    let value: T
    let loaded = false
    return () => {
        if (!loaded) {
            value = load()
            loaded = true
        }
        return value
    }
}
