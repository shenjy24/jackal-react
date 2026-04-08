import { queryOptions } from '@tanstack/react-query'
import { fetchUsers } from '@/features/users/api/users.api'

export const usersKeys = {
  all: ['users'] as const,
  list: () => [...usersKeys.all, 'list'] as const,
}

export const usersQueries = {
  list: () =>
    queryOptions({
      queryKey: usersKeys.list(),
      queryFn: fetchUsers,
    }),
}
