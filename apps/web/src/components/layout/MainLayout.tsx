import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-paper bg-graph-paper bg-[length:44px_44px]">
      <Sidebar />
      <main className="ml-[240px] flex-1 p-7 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
