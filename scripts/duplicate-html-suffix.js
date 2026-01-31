#!/usr/bin/env node
const fs = require('fs').promises
const path = require('path')

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch (e) {
    return false
  }
}

async function ensureExists(p) {
  if (!(await exists(p))) throw new Error(`${p} 不存在`)
}

async function copyHtmlWithDoubleSuffix(rootDir, { overwrite = false, dry = false } = {}) {
  let copied = 0

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const ent of entries) {
      const full = path.join(dir, ent.name)
      if (ent.isDirectory()) {
        await walk(full)
      } else if (ent.isFile()) {
        if (ent.name.endsWith('.html') && !ent.name.endsWith('.html.html')) {
          const dest = full + '.html'
          const destExists = await exists(dest)
          if (destExists && !overwrite) {
            console.log(`跳过（已存在）: ${dest}`)
            continue
          }
          if (dry) {
            console.log(`[dry-run] ${full} -> ${dest}`)
            copied++
            continue
          }
          await fs.copyFile(full, dest)
          console.log(`复制: ${full} -> ${dest}`)
          copied++
        }
      }
    }
  }

  await ensureExists(rootDir)
  await walk(rootDir)
  return copied
}

function usage() {
  console.log('用法: node scripts/duplicate-html-suffix.js [dir] [--overwrite|-w] [--dry|-n]')
  console.log('默认 dir 为 dist')
}

async function main() {
  const args = process.argv.slice(2)
  if (args.includes('--help') || args.includes('-h')) {
    usage()
    return
  }
  const dir = args[0] && !args[0].startsWith('-') ? args[0] : 'dist'
  const overwrite = args.includes('--overwrite') || args.includes('-w')
  const dry = args.includes('--dry') || args.includes('-n')

  const root = path.resolve(process.cwd(), dir)
  try {
    const count = await copyHtmlWithDoubleSuffix(root, { overwrite, dry })
    console.log(`完成。共处理 ${count} 个文件。`)
  } catch (err) {
    console.error('发生错误:', err.message || err)
    process.exit(1)
  }
}

if (require.main === module) main()
