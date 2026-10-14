import "ses"

try {
    lockdown({
        evalTaming: "unsafe-eval"
    })
} catch (error) {
    console.error(error)
    alert("启动安全沙箱失败：" + error)
}
