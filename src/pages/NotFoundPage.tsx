import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 dark:bg-slate-950">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">404</h1>
      <p className="text-slate-600 dark:text-slate-400">页面不存在</p>
      <Link
        to="/"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
      >
        返回首页
      </Link>
    </div>
  )
}
