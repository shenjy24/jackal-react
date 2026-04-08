import { Link } from 'react-router-dom'

/** 页面组件：只做拼装与轻量展示，复杂逻辑放在 features。 */
export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">欢迎使用脚手架</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Vite · React 18 · TypeScript 严格模式 · React Router Data Router · TanStack Query ·
          Zustand · Tailwind CSS
        </p>
      </div>
      <div>
        <Link
          to="/users"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          查看用户列表示例
        </Link>
      </div>
    </div>
  )
}
