import { http } from '@/services/http'

export type User = {
  id: number
  name: string
  email: string
  username: string
}

export async function fetchUsers(): Promise<User[]> {
  const { data } = await http.get<User[]>('/users')
  return data
}
