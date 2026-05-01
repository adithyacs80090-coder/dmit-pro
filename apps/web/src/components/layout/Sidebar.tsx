import { NavLink } from 'react-router-dom'
import { Home, FileText, Users, CreditCard, Settings, LogOut, Shield } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/clients', label: 'Clients', icon: Users },
  { to: '/billing', label: 'Billing', icon: CreditCard },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-page/96 border-r border-line/50 z-50 flex flex-col">
      <div className="p-5 border-b border-line/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-white font-black text-lg">
            D
          </div>
          <div>
            <h1 className="font-black text-ink text-lg leading-tight">DMIT Pro</h1>
            <p className="text-caption text-muted">Counselor Portal</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-small font-bold transition-colors ${
                isActive
                  ? 'bg-cream text-forest'
                  : 'text-muted hover:bg-panel hover:text-ink'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
        {user?.role === 'admin' && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-small font-bold transition-colors ${
                isActive
                  ? 'bg-cream text-forest'
                  : 'text-muted hover:bg-panel hover:text-ink'
              }`
            }
          >
            <Shield className="w-5 h-5" />
            Admin
          </NavLink>
        )}
      </nav>
      
      <div className="p-4 border-t border-line/50">
        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-small font-bold text-muted hover:bg-panel hover:text-ink transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}
