import { create } from 'zustand'

type UiState = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
}

/**
 * 全局 UI 状态（侧栏、主题、模态框显隐等）。
 * 业务实体数据优先使用 TanStack Query，不要放进这里。
 */
export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}))
