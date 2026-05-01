import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { useAuthStore } from '@/stores/authStore'

export function MainLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return (
    <div className="flex min-h-screen bg-paper bg-graph-paper bg-[length:44px_44px]">
      <Sidebar />
      <main className="ml-[240px] flex-1 p-7 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
