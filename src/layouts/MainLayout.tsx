import { NavLink, Outlet } from 'react-router-dom'
import { Button } from '@/components/Button'
import { useUiStore } from '@/store/ui.store'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive
      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
  }`

export function MainLayout() {
  const { sidebarOpen, toggleSidebar } = useUiStore()

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold">SPA Starter</span>
            <nav className="flex gap-1">
              <NavLink to="/" end className={linkClass}>
                首页
              </NavLink>
              <NavLink to="/users" className={linkClass}>
                用户
              </NavLink>
            </nav>
          </div>
          <Button variant="ghost" type="button" onClick={toggleSidebar}>
            {sidebarOpen ? '收起侧栏' : '展开侧栏'}
          </Button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 gap-6 px-4 py-8">
        {sidebarOpen && (
          <aside className="hidden w-48 shrink-0 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 md:block">
            <p className="font-medium text-slate-900 dark:text-slate-100">侧栏</p>
            <p className="mt-2">Zustand 控制显隐的示例区域。</p>
          </aside>
        )}
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
