---
sidebar_position: 4
---

# 权限

## 一、声明权限

声明权限的方式非常简单，只需在 `package.json` 中添加 `permission` 字段，并标注需要的权限即可。例如：

```json
{
    "permission": {
        // 访问互联网
        "network": true
    }
}
```

## 二、支持的权限

### 1. network

添加版本：1.23.7。

功能：访问互联网。

开放的 API：

- `XMLHttpRequest`
- `fetch`
- `FormData`
- `URLSearchParams`
- `document.cookie`