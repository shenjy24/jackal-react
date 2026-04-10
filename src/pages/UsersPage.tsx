import { Card, Typography } from 'antd'
import { UserList } from '@/features/users/components/UserList'

/** 路由页：引用 feature 组件；数据由 loader 预取 + useQuery 消费。 */
export function UsersPage() {
  return (
    <div>
      <Typography.Title level={4}>用户列表</Typography.Title>
      <Card>
        <UserList />
      </Card>
    </div>
  )
}
