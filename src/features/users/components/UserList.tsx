import { useUsers } from '@/features/users/hooks/useUsers'

export function UserList() {
  const { data, isPending, isError, error } = useUsers()

  if (isPending) {
    return <p className="text-slate-500 dark:text-slate-400">加载中…</p>
  }

  if (isError) {
    return (
      <p className="text-red-600 dark:text-red-400" role="alert">
        {error instanceof Error ? error.message : '加载失败'}
      </p>
    )
  }

  return (
    <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 dark:divide-slate-700 dark:border-slate-700">
      {data.map((u) => (
        <li key={u.id} className="px-4 py-3 text-left text-sm">
          <span className="font-medium text-slate-900 dark:text-slate-100">{u.name}</span>
          <span className="ml-2 text-slate-500 dark:text-slate-400">{u.email}</span>
        </li>
      ))}
    </ul>
  )
}
