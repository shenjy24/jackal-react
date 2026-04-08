import { UserList } from '@/features/users/components/UserList'

/** 路由页：引用 feature 组件；数据由 loader 预取 + useQuery 消费。 */
export function UsersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">用户列表</h1>
      <UserList />
    </div>
  )
}
