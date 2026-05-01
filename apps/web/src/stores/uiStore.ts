import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  sidebarOpen: boolean
  language: string
  theme: 'light' | 'dark'
  
  toggleSidebar: () => void
  setLanguage: (lang: string) => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      language: 'en',
      theme: 'light',
      
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'dmit-ui',
      partialize: (state) => ({ language: state.language, theme: state.theme }),
    }
  )
)
