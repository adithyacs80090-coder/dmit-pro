import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  centerName: string
  counselorName: string
  logoUrl: string | null
  role: 'counselor' | 'admin'
  subscriptionStatus: string
  subscriptionEndsAt: string | null
}

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  
  setUser: (user: User | null) => void
  setAccessToken: (token: string | null) => void
  setLoading: (loading: boolean) => void
  login: (user: User, token: string) => void
  logout: () => void
}

function syncAccessToken(token: string | null) {
  if (token) {
    localStorage.setItem('accessToken', token)
  } else {
    localStorage.removeItem('accessToken')
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setAccessToken: (token) => {
        syncAccessToken(token)
        set({ accessToken: token })
      },
      setLoading: (loading) => set({ isLoading: loading }),
      login: (user, token) => {
        syncAccessToken(token)
        set({ user, accessToken: token, isAuthenticated: true })
      },
      logout: () => {
        syncAccessToken(null)
        localStorage.removeItem('refreshToken')
        set({ user: null, accessToken: null, isAuthenticated: false })
      },
    }),
    {
      name: 'dmit-auth',
      partialize: (state) => ({ 
        user: state.user, 
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
)
