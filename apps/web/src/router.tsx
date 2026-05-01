import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { LandingPage } from '@/pages/LandingPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { NewReportPage } from '@/pages/reports/NewReportPage'
import { ReportViewPage } from '@/pages/reports/ReportViewPage'
import { ReportsListPage } from '@/pages/reports/ReportsListPage'
import { ClientsPage } from '@/pages/clients/ClientsPage'
import { BillingPage } from '@/pages/billing/BillingPage'
import { SettingsPage } from '@/pages/settings/SettingsPage'
import { AdminPage } from '@/pages/admin/AdminPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/reports', element: <ReportsListPage /> },
      { path: '/reports/new', element: <NewReportPage /> },
      { path: '/reports/:id', element: <ReportViewPage /> },
      { path: '/clients', element: <ClientsPage /> },
      { path: '/billing', element: <BillingPage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/admin', element: <AdminPage /> },
      { path: '/', element: <Navigate to="/dashboard" replace /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
