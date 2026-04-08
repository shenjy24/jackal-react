import axios from 'axios'

/**
 * 全局 Axios 实例：baseURL、超时、通用头与拦截器。
 * 业务接口请封装在各 feature 的 api 目录中，避免页面直接依赖本模块。
 */
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  // const token = useAuthStore.getState().token
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // 全局未授权处理（登出、跳转登录页等）
    }
    return Promise.reject(error)
  }
)
