import { create } from 'zustand'

interface SidebarStore {
  isMinimized: boolean
  animating: boolean
  toggle: () => void
  setAnimating: (value: boolean) => void
}

export const useSidebar = create<SidebarStore>((set) => ({
  isMinimized: true,
  animating: false,
  toggle: () => set((state) => ({ isMinimized: !state.isMinimized })),
  setAnimating: (value: boolean) => set(() => ({ animating: value })),
}))
