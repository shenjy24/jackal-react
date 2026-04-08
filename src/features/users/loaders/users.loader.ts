import { queryClient } from '@/services/queryClient'
import { usersQueries } from '@/features/users/queries/users.queries'

/**
 * Data Router：在进入页面前预取列表，与页面内 useQuery 共享缓存。
 */
export function usersLoader() {
  return queryClient.ensureQueryData(usersQueries.list())
}
