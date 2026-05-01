import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper bg-graph-paper bg-[length:44px_44px]">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
