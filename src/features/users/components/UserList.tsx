import { Alert, List, Spin, Typography } from 'antd'
import { useUsers } from '@/features/users/hooks/useUsers'

export function UserList() {
  const { data, isPending, isError, error } = useUsers()

  if (isPending) {
    return <Spin tip="加载中..." />
  }

  if (isError) {
    return (
      <Alert
        type="error"
        showIcon
        message={error instanceof Error ? error.message : '加载失败'}
        role="alert"
      />
    )
  }

  return (
    <List
      dataSource={data}
      bordered
      renderItem={(u) => (
        <List.Item>
          <List.Item.Meta
            title={<Typography.Text strong>{u.name}</Typography.Text>}
            description={u.email}
          />
        </List.Item>
      )}
    />
  )
}
