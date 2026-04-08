import { useQuery } from '@tanstack/react-query'
import { usersQueries } from '@/features/users/queries/users.queries'

export function useUsers() {
  return useQuery(usersQueries.list())
}
